///////////////////////////////////////////////////////////////
//Pyxie game engine
//
//  Copyright Kiharu Shishikura 2019. All rights reserved.
///////////////////////////////////////////////////////////////
#pragma once

typedef unsigned int FrameBufferHandle;
typedef unsigned int ColorBufferHandle;
typedef unsigned int DepthBufferHandle;

#include "pyxieResource.h"
namespace pyxie
{
	class pyxieTexture;
		
	enum RenderBufferQuarity
	{
		QuarityLow,
		QuarityHigh
	};

	class PYXIE_EXPORT pyxieRenderTarget : public pyxieResource
	{
		FrameBufferHandle frameBufferHandle;
		ColorBufferHandle colorBufferHandle;
		DepthBufferHandle depthBufferHandle;
		DepthBufferHandle stencilBufferHandle;
		pyxieTexture* colorTexture;
		pyxieTexture* depthTexture;
		uint32_t	width;
		uint32_t	height;
		bool useStencilBuffer;
		bool useDepthBuffer;
		//bool useColorAlpha;
		float scissorX;
		float scissorY;
		float scissorW;
		float scissorH;
	public:

		///useColor         �J���[�o�b�t�@���g��
		///useDepth         �f�v�X�o�b�t�@���g��
		///useStencil       �X�e���V���o�b�t�@���g��
		//pyxieRenderTarget(uint32_t w, uint32_t h, bool useColor, bool useDepth, bool useStencil = false, bool useColorAlpha = false);
		pyxieRenderTarget(pyxieTexture* colorTex, bool useDepth, bool useStencil = false);
		pyxieRenderTarget(pyxieRenderTarget* org);
		~pyxieRenderTarget();

		void Build();
		void Initialize();
		void Clone(bool afterFinishBuild);
		RESOURCETYPE ResourceType() { return RENDERTARGETTYPE; }

		void Render();

		///�J���[�e�N�X�`�����擾����iuseColor=true�̎������L���j
		inline pyxieTexture* GetColorTexture(){
			return colorTexture;
		}

		///�f�v�X�e�N�X�`�����擾����iuseDepth=true�AuseDepthTexture=true�AuseStencil=false�̎������L���j
		inline pyxieTexture* GetDepthTexture(){
			return depthTexture;
		}

		///�s�N�Z���C���[�W�����[�h����
		bool ReadColorBufferImage(unsigned char* ptr, int x = 0, int y = 0, int w = -1, int h = -1);

		inline uint32_t GetWidth() { return width; }
		inline uint32_t GetHeight() { return height; }

		inline FrameBufferHandle GetFrameBufferHandle(){
			return frameBufferHandle;
		}

		///�r���[�|�[�g�̃V�U�����O�G���A��ݒ肷��
		///����(0,0)
		///���A����(1,1)
		inline void SetScissorArea(float x, float y, float w, float h){
			scissorX = x;
			scissorY = y;
			scissorW = w;
			scissorH = h;
		}

#if defined __ENABLE_SUSPEND_RECOVER__
		virtual bool Restore();
		virtual bool Release();
#endif
	};
}