﻿#pragma once

#include <Python.h>
#include "pyxieAnimator.h"
#include "pyxieFigure.h"
#include "pyxieEditableFigure.h"
#include "pyxieCamera.h"
#include "pyxieEnvironmentSet.h"
#include "pyxieShowcase.h"
#include "pyxieShaderDescriptor.h"
#include "pyxieRenderTarget.h"
#include "pyxieParticle.h"
#include "pyxieProfiler.h"
#include "pyxieHaptic.h"

namespace pyxie {
	typedef struct {
		PyObject_HEAD
			pyxieResource* res;
	} resource_obj;
 
	typedef struct {
		PyObject_HEAD
			pyxieDrawable* res;
	} drawable_obj;

	typedef struct {
		PyObject_HEAD
			PyObject* parent;
			pyxieAnimator* anime;
	} animator_obj;

	typedef struct {
		PyObject_HEAD
			pyxieFigure* figure;
	} figure_obj;

	typedef struct {
		PyObject_HEAD
		pyxieEditableFigure* editablefigure;
	} editablefigure_obj;

	typedef struct {
		PyObject_HEAD
		PyObject* parent;
		pyxieCamera* camera;
	} camera_obj;

	typedef struct {
		PyObject_HEAD
		PyObject* parent;
		pyxieEnvironmentSet* envSet;
	} environment_obj;

	typedef struct {
		PyObject_HEAD
			pyxieShowcase* showcase;
	} showcase_obj;

	typedef struct {
		PyObject_HEAD
			pyxieTexture* colortexture;
			pyxieRenderTarget* renderTarget;
			int depth;
			int stencil;
	} texture_obj;

	typedef struct {
		PyObject_HEAD
		pyxieShaderDescriptor* shaderDesc;
		int MapChannel_None;
		int MapChannel_DiffuseAlpha;
		int MapChannel_DiffuseRed;
		int MapChannel_NormalAlpha;
		int MapChannel_NormalRed;
		int MapChannel_LightAlpha;
		int MapChannel_LightRed;
		int MapChannel_VertexColorRed;
		int MapChannel_VertexColorAlpha;
	} shaderGen_obj;

	typedef struct {
		PyObject_HEAD
			pyxieParticle *figure;
	} particle_obj;

	typedef struct {
		PyObject_HEAD
			Profiler* profiler;
	} profiler_obj;

	typedef struct {
		PyObject_HEAD
			Haptic* haptic;
	} haptic_obj;


	extern PyTypeObject FigureType;
	extern PyTypeObject EditableFigureType;
	extern PyTypeObject AnimatorType;
	extern PyTypeObject CameraType;
	extern PyTypeObject TextureType;
	extern PyTypeObject EnvironmentType;
	extern PyTypeObject ShowcaseType;
	extern PyTypeObject ShaderGeneratorType;
	extern PyTypeObject ParticleType;
	extern PyTypeObject ProfilerType;
	extern PyTypeObject HapticType;

	float* pyObjToFloat(PyObject* obj, float* f, int& d);
	int pyObjToFloatArray(PyObject* obj, float* f, int numElement);
	int pyObjToIntegerArray(PyObject* obj, int* f, int numElement);
	bool ImportVMath();
	int GetJointIndex(pyxieDrawable* obj, PyObject* arg);
	bool IsTerminate();
	void Terminate();

	extern PyTypeObject* _Vec2Type;
	extern PyTypeObject* _Vec3Type;
	extern PyTypeObject* _Vec4Type;
	extern PyTypeObject* _QuatType;
	extern PyTypeObject* _Mat22Type;
	extern PyTypeObject* _Mat33Type;
	extern PyTypeObject* _Mat44Type;
}

