#ifndef ZLIB_FORMAT_H
#define ZLIB_FORMAT_H

#include "zlib.h"
#include <stdlib.h> //malloc�Afree
#include <string.h> //memcpy

#ifdef PYXIE_SHARED
#ifdef _WIN32
#define PYXIE_EXPORT __declspec(dllexport)
#else
#define PYXIE_EXPORT
#endif
#else
#define PYXIE_EXPORT
#endif

namespace pyxie
{
	/**@brief ZLIB(deflate)���g�p���āA�f�[�^�̈��k�y�ѓW�J */

	static void* (*custom_malloc)(size_t);
	static void(*custom_free)(void*);
	/**@brief zlib�Ŏg�p����Ă���J�X�^��malloc�֐�(zlib.h���Q�Ƃ��ĉ�����) */
	static void* zlibcustommalloc_wrapper_func(voidpf, uInt items, uInt size) { return custom_malloc(items*size); }
	/**@brief zlib�Ŏg�p����Ă���J�X�^��free�֐�(zlib.h���Q�Ƃ��ĉ�����) */
	static void zlibcustomfree_wrapper_func(voidpf, voidpf ptr) { custom_free(ptr); }

	class PYXIE_EXPORT zlibFormat
	{
	public:
		zlibFormat();
		zlibFormat(void* (*yourmalloc)(size_t), void(*yourfree)(void*));
		~zlibFormat();
		bool Compress(void* in, void** out, unsigned long inlen, unsigned long* outlen);
		bool Extract(void* in, void* out, unsigned long inlen, unsigned long outlen);
	private:
		alloc_func zlibcustommalloc_wrapper;
		free_func zlibcustomfree_wrapper;
		void unused()
		{
			zlibcustommalloc_wrapper_func(NULL, 0, 0);
			zlibcustomfree_wrapper_func(NULL, NULL);
		}
	};
}

#endif
