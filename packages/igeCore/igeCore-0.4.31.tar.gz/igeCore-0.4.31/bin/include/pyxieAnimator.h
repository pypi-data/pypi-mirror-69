///////////////////////////////////////////////////////////////
//Pyxie game engine
//
//  Copyright Kiharu Shishikura 2019. All rights reserved.
///////////////////////////////////////////////////////////////
#pragma once
#include "pyxieResource.h"

namespace pyxie
{

	class PYXIE_EXPORT pyxieAnimator : public pyxieResource
	{
		bool isLoop;
		bool outSource;
		float totalEvalTime;
		float evalTime;
		float elapsedTime;
		float startTime;
		float endTime;
		float speed;

		void* animationSet;
	public:
		pyxieAnimator(const char* path, void* set=nullptr);
		pyxieAnimator(pyxieAnimator* org);
		~pyxieAnimator();
		void Build();
		void Initialize();
		void Clone(bool afterFinishBuild);
		RESOURCETYPE ResourceType() { return ANIMATORTYPE; }

		void* GetAnimationSet(){
			WaitInitialize();
			return animationSet;
		}

		inline void SetLoop(bool enable){isLoop = enable;}
		inline bool IsLoop() { return isLoop; }

		//���݂̃A�j���[�V�����t���[��
		inline float GetEvalTime() { return evalTime; }
		inline void SetEvalTime(float time) { evalTime = time; }

		//�ݐς̃A�j���[�V�����t���[��
		inline float GetTotalEvalTime() { return totalEvalTime; }
		inline void SetTotalEvalTime(float time) { totalEvalTime = time; }

		///�A�j���[�V�����X�^�[�g�^�C��
		inline float GetStartTime(){return startTime;}
		inline void SetStartTime(float time) { startTime = time; }

		///�A�j���[�V�����I�����ԁi�b�j
		inline void SetEndTime(float time){endTime = time;}
		inline float GetEndTime(){
			if (endTime != 0.0f) return endTime;
			WaitInitialize();
			return endTime;
		}

		///�A�j���[�V�����Đ����x
		inline void SetSpeed(float s){speed = s;}
		inline float GetSpeed(){return speed;}

		///������Ԃ̃A�j���[�V�����I�����ԁi�b�j���擾����
		float GetDefaultEndtime();

		//���݂̎��Ԃ��A�j���[�V�����X�^�[�g�^�C���ɖ߂�
		inline void Rewind() { evalTime = startTime; }

		//�o�ߎ���
		inline float GetElapsedTime() { return elapsedTime; }

		//���Ԃ�i�߂�i�}�C�i�X�Ȃ�t�Đ��j
		void Step(float elapsedTime);

	private:
		void ClearMember();
	};
}