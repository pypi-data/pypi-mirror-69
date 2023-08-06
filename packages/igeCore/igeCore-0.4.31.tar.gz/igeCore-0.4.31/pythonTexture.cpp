#include "pyxie.h"
#include "pythonResource.h"
#include "pyxieResourceCreator.h"
#include "pyxieResourceManager.h"
#include "pyVectorMath.h"
#include "pythonTexture_doc_en.h"
#include "numpy/ndarrayobject.h"
#include "bitmapHelper.h"
#include "taskflow.hpp"
#include "pyxieFios.h"
#include "pyxieHelper.h"
#define STB_IMAGE_WRITE_IMPLEMENTATION
#include <stb_image_write.h>


namespace pyxie
{
	tf::Executor m_Executor;
	tf::Taskflow m_Taskflow;
	uint8_t* m_CaptureData = nullptr;

	static void capturing(texture_obj* tex, const char* filename)
	{
		m_Executor.wait_for_all();
		m_Taskflow.clear();

		int width, height;

		char path[512];
		sprintf(path, "%s%s.png", pyxieFios::Instance().GetRoot(), filename);

		if (tex->renderTarget)
		{
			width = tex->renderTarget->GetWidth();
			height = tex->renderTarget->GetHeight();
			uint8_t* rtData = (uint8_t*)PYXIE_MALLOC(width * height * 4 * sizeof(uint8_t));
			bool result = tex->renderTarget->ReadColorBufferImage(rtData);
			if (result == true)
			{
				m_Taskflow.emplace(
					[rtData, width, height, path]() {
						FlipRGBAY(rtData, width, height);
						int result = stbi_write_png(path, width, height, 4, rtData, 0);
						PYXIE_FREE(rtData);
					}
				);
			}
		}
		else {
			pyxieTexture::ReadPixels(m_CaptureData, width, height);
			if (m_CaptureData)
			{
				tex->colortexture->UpdateWholeImage(m_CaptureData, 0, 0, width, height);


				m_Taskflow.emplace(
					[width, height, path]() {
						PyxieZoneScopedN("Capturing");
						FlipRGBAY(m_CaptureData, width, height);
						int result = stbi_write_png(path, width, height, 4, m_CaptureData, 0);
						PYXIE_SAFE_FREE(m_CaptureData)
					}
				);
				m_Executor.run(m_Taskflow);
			}
		}
	}

	static void updateTexture(pyxieTexture* tex, PyObject* image, int x, int y, int w, int h)
	{
			uint8_t* bmp = NULL;
			if (PyBytes_Check(image)) {
				bmp = (uint8_t*)PyBytes_AsString(image);
			}
			else if (image->ob_type->tp_name && strcmp(image->ob_type->tp_name, "numpy.ndarray") == 0) {
				PyArrayObject_fields* ndarray = (PyArrayObject_fields*)image;
				bmp = (uint8_t*)ndarray->data;
				h = *ndarray->dimensions;
				w = *ndarray->strides / ndarray->nd;
			}
			if (bmp) tex->UpdateSubImage(bmp, x, y, w, h);
	}

	PyObject *texture_new(PyTypeObject *type, PyObject *args, PyObject *kw) {

		static char* kwlist[] = { "name","width","height","format","depth","stencil","pixel","float", NULL };

		char* name;
		int width = 0;
		int height = 0;
		int format = GL_RGBA;
		int depth = 0;
		int stencil =0;
		int glfloat = 0;
		PyObject* pixel = nullptr;

		if (!PyArg_ParseTupleAndKeywords(args, kw, "s|iiippOi", kwlist,
			&name, &width, &height, &format, &depth, &stencil, &pixel, &glfloat)) return NULL;

		if (!(format == GL_RED || format == GL_RGB || format == GL_RGBA)) {
			PyErr_SetString(PyExc_TypeError, "format value is invalid.");
			return NULL;
		}

		texture_obj* self = NULL;

		char* pix = nullptr;
		if (pixel) {
			if (pixel->ob_type->tp_name && strcmp(pixel->ob_type->tp_name, "numpy.ndarray") == 0) {
				PyArrayObject_fields* ndarray = (PyArrayObject_fields*)pixel;
				height = *ndarray->dimensions;
				width = *ndarray->strides / ndarray->nd;
				switch (ndarray->nd) {
				case 1: format = GL_RED; break;
//				case 2: format = GL_RED; break;
				case 3: format = GL_RGB; break;
				case 4: format = GL_RGBA; break;
				}
				pix = ndarray->data;
			}
			else if (PyBytes_Check(pixel)) {
				pix = PyBytes_AsString(pixel);
			}
		}

		self = (texture_obj*)type->tp_alloc(type, 0);

		if (width == 0 || height == 0)
			self->colortexture = pyxieResourceCreator::Instance().NewTexture(name);
		else
			self->colortexture = pyxieResourceCreator::Instance().NewTexture(name, pix, width, height, format, glfloat);

		self->depth = depth;
		self->stencil = stencil;
		self->renderTarget = nullptr;

		return (PyObject *)self;
	}

	void  texture_dealloc(texture_obj*self)
	{
		if (!IsTerminate()) self->colortexture->DecReference();
		if(self->renderTarget) self->renderTarget->DecReference();
		Py_TYPE(self)->tp_free(self);
	}

	PyObject * texture_str(texture_obj *self)
	{
		char buf[64];
		pyxie_snprintf(buf, 64, "texture object");
		return _PyUnicode_FromASCII(buf, strlen(buf));
	}

	static PyObject* texture_setImage(texture_obj* self, PyObject* args, PyObject* kwargs)
	{
		static char* kwlist[] = { "image","x","y","width","height", NULL };

		PyObject* subImage = NULL;
		int x = 0;
		int y = 0;
		int w = -1;
		int h = -1;
		if (!PyArg_ParseTupleAndKeywords(args, kwargs, "O|iiii", kwlist,&subImage, &x, &y, &w, &h)) return NULL;
		updateTexture(self->colortexture, subImage, x, y, w, h);
		Py_INCREF(Py_None);
		return Py_None;
	}


	static PyObject* texture_setCheckeredImage(texture_obj* self, PyObject* args, PyObject* kwargs)
	{
		static char* kwlist[] = { "r","g","b","a", NULL };
		float r = 1.0f;
		float g = 0;
		float b = 0;
		float a = 1.0f;
		if (!PyArg_ParseTupleAndKeywords(args, kwargs, "|ffff", kwlist, &r, &g, &b, &a)) return NULL;

		int w = self->colortexture->GetTextureWidth();
		int h = self->colortexture->GetTextureHeight();

		int format = self->colortexture->GetFormat();
		uint8_t* bmp = createCheckeredTexture((uint8_t)(r * 255.0f), (uint8_t)(g * 255.0f), (uint8_t)(b * 255.0f), (uint8_t)(a * 255.0f), w, h, format);
		if (bmp) self->colortexture->UpdateSubImage(bmp, 0, 0, w, h);
		PYXIE_SAFE_FREE(bmp);

		Py_INCREF(Py_None);
		return Py_None;
	}

	static PyObject* texture_setText(texture_obj* self, PyObject* args, PyObject* kwargs)
	{
		if (self->colortexture->GetFormat() != GL_RED) {
			PyErr_SetString(PyExc_TypeError, "The setText method is currently only for GL_RED textures.");
			return NULL;
		}

		static char* kwlist[] = { "word","font","size","startX","startY", "clear", NULL };
		char* word;
		char* font;
		int size;
		int startX=0;
		int startY=0;
		int clear = 0;
		if (!PyArg_ParseTupleAndKeywords(args, kwargs, "ssi|iii", kwlist, &word, &font, &size, &startX, &startY, &clear)) return NULL;


		int texW, texH;
		uint8_t* bmp = createTextImage(word, font, size, texW, texH);

		int maxW = self->colortexture->GetTextureWidth();
		int maxH = self->colortexture->GetTextureHeight();

		int ofsX = 0;
		if (startX < 0) {
			ofsX = -startX;
			startX = 0;
		}
		int cpyW = (maxW < (texW - ofsX)) ? maxW : (texW - ofsX);
		if (cpyW + startX > maxW) cpyW -= ((cpyW + startX) - maxW);


		int ofsY = 0;
		int cpyH = 0;

		if (startY >= 0) {
			cpyH = texH;
			int baseline = startY + cpyH;
			if (baseline > maxH) cpyH -= (baseline - maxH);
		}
		else {
			cpyH = texH + startY;
			ofsY = -startY;
			startY = 0;
		}
		if (maxH < cpyH) cpyH = maxH;
		int posY = (maxH - cpyH) - startY;


		if (cpyW > 0 && cpyH > 0) {
			int inBufW = ALIGN(texW, 4);
			int outBufW = ALIGN(cpyW, 4);

			unsigned char* bitmap2 = (unsigned char*)pyxie::PYXIE_MALLOC(outBufW * cpyH);
			unsigned char* op = bitmap2;

			unsigned char* ip = bmp  + (cpyH - 1 + ofsY) * inBufW + ofsX;

			for (int y = 0; y < cpyH; y++) {
				memcpy(op, ip, outBufW);
				ip -= inBufW;
				op += outBufW;
			}
			pyxie::PYXIE_FREE(bmp);
			if (clear) {
				int w = self->colortexture->GetTextureWidth();
				int h = self->colortexture->GetTextureHeight();
				int format = self->colortexture->GetFormat();
				uint8_t* bmp = createColorTexture(0, 0, 0, 0, w, h, format);
				if (bmp) self->colortexture->UpdateSubImage(bmp, 0, 0, w, h);
				PYXIE_SAFE_FREE(bmp);
			}
			self->colortexture->UpdateSubImage(bitmap2, startX, posY, cpyW, cpyH);
			pyxie::PYXIE_FREE(bitmap2);
		}

		Py_INCREF(Py_None);
		return Py_None;
	}

	static PyObject* texture_clear(texture_obj* self, PyObject* args, PyObject* kwargs)
	{
		static char* kwlist[] = { "r","g","b","a", NULL };
		float r = 0;
		float g = 0;
		float b = 0;
		float a = 0;
		if (!PyArg_ParseTupleAndKeywords(args, kwargs, "|ffff", kwlist, &r, &g, &b, &a)) return NULL;

		int w = self->colortexture->GetTextureWidth();
		int h = self->colortexture->GetTextureHeight();
		int format = self->colortexture->GetFormat();
		uint8_t* bmp = createColorTexture((uint8_t)(r*255.0f), (uint8_t)(g * 255.0f), (uint8_t)(b * 255.0f), (uint8_t)(a * 255.0f), w, h, format);
		if (bmp) self->colortexture->UpdateSubImage(bmp, 0, 0, w, h);
		PYXIE_SAFE_FREE(bmp);

		Py_INCREF(Py_None);
		return Py_None;
	}

	static PyObject* texture_captureScreenshot(texture_obj* self, PyObject* args)
	{
		const char* name = self->colortexture->ResourceName();
		if (!PyArg_ParseTuple(args, "|s", &name))
			return NULL;
		capturing(self, name);

		Py_INCREF(Py_None);
		return Py_None;
	}

    static PyObject* texture_saveToGallery(texture_obj* self)
    {
		std::string path;
		path += pyxieFios::Instance().GetRoot();
		char name[256];
		sprintf(name, "%s.png", (*((pyxie::pyxieResource*)self->colortexture)).ResourceName());
		path += name;

		m_Executor.wait_for_all();
		m_Taskflow.clear();
		SaveImageToGallery(path.c_str());
        
        Py_INCREF(Py_None);
        return Py_None;
    }

	static PyObject* texture_getData(texture_obj* self, PyObject* args)
	{
		int x = 0;
		int y = 0;
		int w = -1;
		int h = -1;
		if (!PyArg_ParseTuple(args, "|iiii", &x, &y, &w, &h)) return NULL;

		if (self->renderTarget)
		{
			if (w == -1)w = self->renderTarget->GetWidth();
			if (h == -1)h = self->renderTarget->GetHeight();

			int size = w * h * 4 * sizeof(uint8_t);
			uint8_t* rtData = (uint8_t*)PYXIE_MALLOC(size);
			bool result = self->renderTarget->ReadColorBufferImage(rtData, x, y, w, h);
			if (result == true)
			{
				//FlipRGBAY(rtData, width, height);
				PyObject* obj = PyBytes_FromStringAndSize((char*)rtData, size);

				PYXIE_FREE(rtData);
				return obj;
			}
		}

		Py_INCREF(Py_None);
		return Py_None;
	}

    static PyObject* texture_getResourceName(texture_obj* self, PyObject* args)
    {
        return PyUnicode_FromString(self->colortexture->ResourceName());
    }

	PyObject* texture_width(texture_obj* self) {
		return PyLong_FromLong(self->colortexture->GetTextureWidth());
	}

	PyObject* texture_height(texture_obj* self) {
		return PyLong_FromLong(self->colortexture->GetTextureHeight());
	}
	PyObject* texture_bitSize(texture_obj* self) {
		return PyLong_FromLong(self->colortexture->GetBitSize(self->colortexture->GetFormat()));
	}
	PyObject* texture_format(texture_obj* self) {
		return PyLong_FromLong(self->colortexture->GetFormat());
	}
	PyObject* texture_numMips(texture_obj* self) {
		return PyLong_FromLong(self->colortexture->GetNumMips());
	}


	PyMethodDef texture_methods[] = {
		{ "setImage", (PyCFunction)texture_setImage, METH_VARARGS | METH_KEYWORDS,setImage_doc },
		{ "setCheckeredImage", (PyCFunction)texture_setCheckeredImage, METH_VARARGS | METH_KEYWORDS,setCheckeredImage_doc },
		{ "setText", (PyCFunction)texture_setText, METH_VARARGS | METH_KEYWORDS,setText_doc },
		{ "clear", (PyCFunction)texture_clear, METH_VARARGS | METH_KEYWORDS,clear_doc },
		{ "captureScreenshot", (PyCFunction)texture_captureScreenshot, METH_VARARGS,captureScreenshot_doc },
        { "saveToGallery", (PyCFunction)texture_saveToGallery, METH_NOARGS,saveToGallery_doc },
		{ "getData", (PyCFunction)texture_getData, METH_VARARGS,getData_doc },
        { "getResourceName", (PyCFunction)texture_getResourceName, METH_VARARGS,getResourceName_doc },
		{ NULL,	NULL }
	};

	PyGetSetDef texture_getsets[] = {
		{ const_cast<char*>("width"),(getter)texture_width, NULL, width_doc,NULL},
		{ const_cast<char*>("height"),(getter)texture_height, NULL, height_doc,NULL},
		{ const_cast<char*>("bitSize"),(getter)texture_bitSize, NULL, bitSize_doc,NULL},
		{ const_cast<char*>("format"),(getter)texture_format, NULL, format_doc,NULL},
		{ const_cast<char*>("numMips"),(getter)texture_numMips, NULL, numMips_doc,NULL},
		{ NULL, NULL }
	};

	PyTypeObject TextureType = {
		PyVarObject_HEAD_INIT(NULL, 0)
		"igeCore.texture",					/* tp_name */
		sizeof(texture_obj),                /* tp_basicsize */
		0,                                  /* tp_itemsize */
		(destructor)texture_dealloc,		/* tp_dealloc */
		0,                                  /* tp_print */
		0,							        /* tp_getattr */
		0,                                  /* tp_setattr */
		0,                                  /* tp_reserved */
		0,                                  /* tp_repr */
		0,					                /* tp_as_number */
		0,                                  /* tp_as_sequence */
		0,                                  /* tp_as_mapping */
		0,                                  /* tp_hash */
		0,                                  /* tp_call */
		(reprfunc)texture_str,               /* tp_str */
		0,                                  /* tp_getattro */
		0,                                  /* tp_setattro */
		0,                                  /* tp_as_buffer */
		Py_TPFLAGS_DEFAULT,					/* tp_flags */
		texture_doc,						/* tp_doc */
		0,									/* tp_traverse */
		0,                                  /* tp_clear */
		0,                                  /* tp_richcompare */
		0,                                  /* tp_weaklistoffset */
		0,									/* tp_iter */
		0,									/* tp_iternext */
		texture_methods,						/* tp_methods */
		0,                                  /* tp_members */
		texture_getsets,                     /* tp_getset */
		0,                                  /* tp_base */
		0,                                  /* tp_dict */
		0,                                  /* tp_descr_get */
		0,                                  /* tp_descr_set */
		0,                                  /* tp_dictoffset */
		0,                                  /* tp_init */
		0,                                  /* tp_alloc */
		texture_new,							/* tp_new */
		0,									/* tp_free */
	};

}
