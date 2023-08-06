///////////////////////////////////////////////////////////////
//Pyxie game engine
//
//  Copyright Kiharu Shishikura 2019. All rights reserved.
///////////////////////////////////////////////////////////////
#pragma once

#include "pyxieUtilities.h"
#include "pyxieDrawable.h"
#include "pyxieFigurestruct.h"

namespace pyxie
{
	class pyxieFigure;

	class PYXIE_EXPORT pyxieCamera : public pyxieDrawable
	{
	private:
		FigureCamera*	figureCamera;

		bool		mLockon;
		float		mPan;
		float		mTilt;
		float		mRoll;
		Vec3		mTarget;

		Vec2		screenScale;
		Vec2		screenOffset;
		float		screenRadian;
		int			upaxis;
        bool        isFigureCameraOwner;
		bool		widthBase;
		bool		updated;
	public:
		pyxieCamera(const char* name);
		pyxieCamera(pyxieFigure* figure, FigureCamera* figureCam);
		pyxieCamera(pyxieCamera* org);
		~pyxieCamera();

		void Clone(bool afterFinishBuild);
		void Build() {}
		void Initialize() {}
		RESOURCETYPE ResourceType() { return CAMERATYPE; }
		void Step(float elapsedTime);
		void Render();
		void RenderForShadow(pyxieCamera* viewCam);


		void SetCameraPosition(const Vec3& pos);
		void SetCameraRotation(const Quat& rot);
		Vec3 GetCameraPosition();
		Quat GetCameraRotation();


		//����p
		inline float GetFieldOfView() const { return figureCamera->fov; }
		inline void SetFieldOfView(float val) { figureCamera->fov = val; updated = false; }

		//�A�X�y�N�g��
		float GetAspectRate() const;
		void SetAspectRate(float val);

		//���s���e�J�����̃T�C�Y
		inline float GetOrthoWidth() const { return figureCamera->magX; }
		inline void SetOrthoWidth(float val) 
		{
			figureCamera->magX = val;
			figureCamera->magY = val / GetAspectRate();
			updated = false;
		}

		inline float GetOrthoHeight() const { return figureCamera->magY; }
		inline void SetOrthoHeight(float val)
		{
			figureCamera->magY = val;
			figureCamera->magX = val * GetAspectRate();
			updated = false;
		}


		//�j�A�N���b�v�v���[��
		inline float GetNearPlane() const { return figureCamera->nearclip; }
		inline void SetNearPlane(float val) { figureCamera->nearclip = val;  updated = false;}

		//�t�@�[�N���b�v�v���[��
		inline float GetFarPlane() const { return figureCamera->farclip; }
		inline void SetFarPlane(float val) { figureCamera->farclip = val;  updated = false;}

		//Y����]
		void SetPan(float pan);
		float GetPan() const;

		//X����]
		void SetTilt(float tilt);
		float GetTilt() const;

		//Z����]
		void SetRoll(float roll);
		float GetRoll() const;

		void SetTarget(const Vec3& tar);
		Vec3 GetTarget() const;
		Vec3 GetWorldTarget() const;
		void LockonTarget(bool lockon = true);

		inline bool GetLockon() {return mLockon;}

		//���s���e�J����
		inline void SetOrthographicProjection(bool enable) { figureCamera->isOrtho = (uint32_t)enable;  updated = false;}
		inline bool IsOrthographicProjection() { return (bool)figureCamera->isOrtho; }


		inline void SetWidthBase(bool enable) { widthBase = enable;  updated = false;}
		inline bool IsWidthBase() { return widthBase; }


		//�e�p�J����
		void RenderShadowView(pyxieCamera* viewCam);

		//�v���W�F�N�V�����s����v�Z���ĕԂ�
		Mat4& GetProjectionMatrix(Mat4& out);

		//�t�r���[�s����v�Z���ĕԂ��i�r���[�s�񂪕K�v�Ȃ�inverse()�Łj
		Mat4& GetViewInverseMatrix(Mat4& out);

		//�X�N���[���}�g���b�N�X���v�Z���ĕԂ�
		Mat4& GetScreenMatrix(Mat4& out);

		void SetScreenScale(Vec2& v) { screenScale = v;  updated = false;}
		void SetScreenOffset(Vec2& v) { screenOffset = v;  updated = false;}
		void SetScreenRadian(float r) { screenRadian = r;  updated = false;}
		const Vec2&	GetScreenScale() const { return screenScale; }
		const Vec2&	GetScreenOffset() const { return screenOffset; }
		float GetScreenRadian() const { return screenRadian; }

		void SetUpAxis(int ax) { upaxis = ax; }

	private:
		void update();
	};

}