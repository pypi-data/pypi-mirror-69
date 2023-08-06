#pragma once

#include "pyxieTypes.h"

namespace pyxie
{
	class PYXIE_EXPORT pyxieFigureExportConfigManager {
		float BASE_SCALE;
		union {
			struct {
				uint32_t EXPORT_NAMES : 1;
				uint32_t TRIANGLE_STRIP : 1;
				uint32_t INHERIT_JOINT_NAME : 1;
				uint32_t CLOP_JOINT : 1;
				uint32_t GEN_MIPMAP : 1;
				uint32_t KILL_MIPMAP : 1;
				uint32_t FREEZE_GEOMETORY : 1;
				uint32_t COMPUTE_PERIOD : 1;
			};
			uint32_t buff;
		};
		pyxieFigureExportConfigManager();
	public:
		static pyxieFigureExportConfigManager& Instance();
		void SetOptionInt(const char* name, int value);
		void SetOptionFloat(const char* name, float value);
		float BaseScale() { return BASE_SCALE; }
		bool ExportNames() { return EXPORT_NAMES; }
		bool TriangleStrip() { return TRIANGLE_STRIP; }
		bool InheritJointName() { return INHERIT_JOINT_NAME; }
		bool ClopJoint() { return CLOP_JOINT; }
		bool FreezeGeometory() { return FREEZE_GEOMETORY; }
		bool ComputePeriod() { return COMPUTE_PERIOD; }
	};

/*
	class PYXIE_EXPORT pyxieFigureExportConfigManager {
		bool	TriangleStrip;				//Convert vertices to triangle strip format
		bool	FreezeGeometoryTransform;	//�W�I���g���̃g�����X�t�H�[�����t���[�Y����
		bool	FullPathName;				//�m�[�h�������[�g����̐e�̖��O��'/'�łȂ������O�ɕύX����
		bool	OutputNameList;				//joints��material�̃m�[�h�����o�͂���
		bool	OutputNotes;				//joints��material�̃m�[�h�����o�͂���
		bool	GenMipmap;					//�e�N�X�`���̃~�b�v�}�b�v�𐶐�����
		bool	ClopTransform;				//�X�L���E�F�C�g���������I�u�W�F�N�g�m�[�h�̃g�����X�t�H�[���͍폜����
		bool	ComputePeriod;
		float	BaseScale;
		float	Tolerance;
		pyxieFigureExportConfigManager();
	public:
		static pyxieFigureExportConfigManager& Instance();

		void ReadConfigFiles(const char* filePath);

		bool	IsTriangleStrip() { return TriangleStrip; }
		bool	IsFreezeGeometoryTransform() { return FreezeGeometoryTransform; }
		bool	IsFullPathName() { return FullPathName; }
		bool	IsOutputNameList() { return OutputNameList; }
		bool	IsOutputNotes() { return OutputNotes; }
		bool	IsGenMipmap() { return GenMipmap; }
		bool	IsClopTransform() { return ClopTransform; }
		bool	IsComputePeriod() { return ComputePeriod; }
		float	GetBaseScale() { return BaseScale; }
		float	GetTolerance() { return Tolerance; }
		void	SetBaseScale(float v) { BaseScale = v; }
	};
*/
}
