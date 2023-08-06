///////////////////////////////////////////////////////////////
//Pyxie game engine
//
//  Copyright Kiharu Shishikura 2019. All rights reserved.
///////////////////////////////////////////////////////////////
#pragma once
#include "pyxieResource.h"
#include "pyxieMathutil.h"
#include "pyxieRenderContext.h"

namespace pyxie
{
		class PYXIE_EXPORT pyxieDrawable : public pyxieResource
		{
		protected:
			enum
			{
				state_updateTransform = (state_resource_last << 1),
				state_posed = (state_updateTransform << 1),
				state_drawable_last = state_posed
			};
			Joint rootTransform;

			const float* parentJoint;
			pyxieDrawable* parentJointObject;
			float* skinningMatrices;
			float* skinningMatrixSave;
			void* skeletonset;
		public:
			pyxieDrawable() : parentJoint(nullptr), parentJointObject(nullptr), skinningMatrices(nullptr), skeletonset(nullptr), skinningMatrixSave(nullptr){
			}
			pyxieDrawable(const pyxieDrawable* org) : pyxieResource(org) , parentJoint(nullptr), parentJointObject(nullptr), skinningMatrices(nullptr), skeletonset(nullptr), skinningMatrixSave(nullptr) {
			}
			virtual ~pyxieDrawable() {
				if (parentJointObject) parentJointObject->DecReference();
				PYXIE_SAFE_FREE(skinningMatrixSave);
			}
			void Clone(bool afterFinishBuild);
			virtual void Pose() {}
			virtual void Render() {}

			inline void SetPosition(const Vec3& pos)
			{ 
				if (!vmath_almostEqual(rootTransform.translation.P(), pos.P(), 3)) {
					rootTransform.translation = pos;
					SetState(state_updateTransform);
					ResetState(state_posed);
				}
			}
			inline const Vec3& GetPosition() const {
				return rootTransform.translation;
			}
			
			Vec3 GetWorldPosition() const;

			inline void SetRotation(const Quat& rot){ 
				if (!vmath_almostEqual(rootTransform.rotation.P(), rot.P(), 4)) {
					rootTransform.rotation = rot;
					SetState(state_updateTransform);
					ResetState(state_posed);
				}
			}
			inline const Quat& GetRotation() const {
				return rootTransform.rotation; 
			}
			inline void SetScale(const Vec3& scale) {
				if (!vmath_almostEqual(rootTransform.scale.P(), scale.P(), 3)) {
					rootTransform.scale = (const Vec4&)scale; rootTransform.scale.W(1.0f);
					SetState(state_updateTransform);
					ResetState(state_posed);
				}
			}

			inline const Vec3& GetScale() { return (const Vec3&)rootTransform.scale; }
			inline void SetParentJoint(pyxieDrawable* object, const float* joint) {
				if (parentJointObject) parentJointObject->DecReference();
				parentJoint = joint;
				parentJointObject = object;
				if (parentJointObject) parentJointObject->IncReference();
				if (!skinningMatrixSave) {
					skinningMatrixSave = (float*)PYXIE_MALLOC(12 * 4);
					memset(skinningMatrixSave, 0, 12 * 4);
				}
			}

			const float* GetJointMatrix(int idx);

			//skinningMatrices�̃C���f�b�N�X��Ԃ��i�������-1�j
			virtual int GetJointIndex(uint32_t jointHash);

			//�W���C���g�̐e�W���C���g�̃C���f�b�N�X��Ԃ�
			//���݂��Ȃ��ꍇ��-1��Ԃ�
			///���񓯊��Ǎ������܂Ń��b�N����
			int GetJointParentIndex(int idx);

			//�V�[�����Ɋ܂܂�Ă���W���C���g�̑���
			virtual int NumJoints();
			virtual const Joint GetJoint(int idx, Space space = WorldSpace);
			virtual const void  SetJoint(int idx, const Joint& joint, Space space = LocalSpace);


		protected:
			int GetJointIndexNoWait(uint32_t jointHash);

			inline bool GetParentJointMatrix(Mat4& outMatrix) const{
				if (!parentJoint) return false;
				parentJointObject->Pose();
				JointMatrixToMatrix4(parentJoint, outMatrix);
				return true;
			}

			void processBlendTree(float* outputMatrices,
				const void* ppuContext,
				uint32_t spuId,
				const void* skeleton,
				const void* blendBranches,
				uint32_t numBlendBranches,
				const void* blendLeaves,
				uint32_t numBlendLeaves,
				const Joint* rootJoint,
				void* scratchBuffer,
				uint32_t sizeScratchBuffer,
				float* outputUserChannelAnime,
				Joint* localPoses);

			void UpdateParentJoint();

		};
}
