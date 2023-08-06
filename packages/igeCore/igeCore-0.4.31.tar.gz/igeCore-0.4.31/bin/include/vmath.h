#pragma once
#include <float.h>
#include <math.h>

inline void vmath_cpy(const float* v, int d, float* out) {
	for (int i = 0; i < d; i++) out[i] = v[i];
}

inline bool vmath_almostEqual(float a, float b) {
	return fabs(a - b) < FLT_EPSILON;
}

inline bool vmath_almostEqual(const float* v0, const float* v1, int d) {

	for (int i = 0; i < d; i++) {
		if (!vmath_almostEqual(v0[i], v1[i])) return false;
	}
	return true;
}

inline void vmath_add(const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] + v1[i];
}

inline void vmath_sub(const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] - v1[i];
}

inline void vmath_mul(const float* v0, float s, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] * s;
}

inline void vmath_div(const float* v0, float s, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] / s;
}

inline void vmath_mulPerElem(const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] * v1[i];
}

inline void vmath_divPerElem(const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] / v1[i];
}

inline void vmath_neg(const float* v0, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = -v0[i];
}

inline void vmath_recipPerElem(const float* v0, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = 1.0f / v0[i];
}

inline void vmath_sqrtPerElem(const float* v0, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = sqrtf(v0[i]);
}

inline void vmath_rsqrtPerElem(const float* v0, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = 1.0f / sqrtf(v0[i]);
}

inline void vmath_absPerElem(const float* v0, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = fabsf(v0[i]);
}

inline void vmath_maxPerElem(const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] > v1[i] ? v0[i] : v1[i];
}
inline void vmath_maxPerElem(const float* v0, const float f, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] > f ? v0[i] : f;
}

inline float vmath_maxElem(const float* v0, int d)
{
	float result = v0[0];
	for (int i = 1; i < d; i++)
		if (result < v0[i]) result = v0[i];
	return result;
}

inline void vmath_minPerElem(const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] < v1[i] ? v0[i] : v1[i];
}
inline void vmath_minPerElem(const float* v0, const float f, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] < f ? v0[i] : f;
}

inline float vmath_minElem(const float* v0, int d)
{
	float result = v0[0];
	for (int i = 1; i < d; i++)
		if (result > v0[i]) result = v0[i];
	return result;
}

inline float vmath_sum(const float* v0, int d)
{
	float result = 0.0f;
	for (int i = 0; i < d; i++)
		result += v0[i];
	return result;
}

inline float vmath_dot(const float* v0, const float* v1, int d)
{
	float result = 0.0f;
	for (int i = 0; i < d; i++)
		result += v0[i] * v1[i];
	return result;
}

inline float vmath_lengthSqr(const float* v, int d)
{
	float result = 0.0f;
	for (int i = 0; i < d; i++) {
		result += v[i] * v[i];
	}
	return result;
}

inline float vmath_length(const float* v, int d)
{
	return sqrtf(vmath_lengthSqr(v, d));
}

inline void vmath_normalize(const float* v, int d, float* out)
{
	float lenSqr, lenInv;
	lenSqr = vmath_lengthSqr(v, d);
	lenInv = (1.0f / sqrtf(lenSqr));
	for (int i = 0; i < d; i++) {
		out[i] = v[i] * lenInv;
	}
}

inline float vmath_cross2D(const float* v0, const float* v1)
{
	return v0[0] * v1[1] - v1[0] * v0[1];
}

inline void vmath_cross3D(const float* v0, const float* v1, float* out)
{
	out[0] = (v0[1] * v1[2]) - (v0[2] * v1[1]);
	out[1] = (v0[2] * v1[0]) - (v0[0] * v1[2]);
	out[2] = (v0[0] * v1[1]) - (v0[1] * v1[0]);
}

inline void vmath_lerp(float t, const float* v0, const float* v1, int d, float* out)
{
	for (int i = 0; i < d; i++)
		out[i] = v0[i] + ((v1[i] - v0[i]) * t);
}

#define SLERP_TOL 0.999f
inline void vmath_slerp(float t, const float* v0, const float* v1, int d, float* out)
{
	float recipSinAngle, scale0, scale1, cosAngle, angle;
	cosAngle = vmath_dot(v0, v1, d);
	if (cosAngle < SLERP_TOL) {
		angle = acosf(cosAngle);
		recipSinAngle = (1.0f / sinf(angle));
		scale0 = (sinf(((1.0f - t) * angle)) * recipSinAngle);
		scale1 = (sinf((t * angle)) * recipSinAngle);
	}
	else {
		scale0 = (1.0f - t);
		scale1 = t;
	}
	for (int i = 0; i < d; i++)
		out[i] = ((v0[i] * scale0) + (v1[i] * scale1));
}

inline void vmath_quat_mul(const float* v0, const float* v1, float* out)
{
	out[0] = ((((v0[3] * v1[0]) + (v0[0] * v1[3])) + (v0[1] * v1[2])) - (v0[2] * v1[1]));
	out[1] = ((((v0[3] * v1[1]) + (v0[1] * v1[3])) + (v0[2] * v1[0])) - (v0[0] * v1[2]));
	out[2] = ((((v0[3] * v1[2]) + (v0[2] * v1[3])) + (v0[0] * v1[1])) - (v0[1] * v1[0]));
	out[3] = ((((v0[3] * v1[3]) - (v0[0] * v1[0])) - (v0[1] * v1[1])) - (v0[2] * v1[2]));
}

// Construct a quaternion to rotate between two unit-length 3-D vectors
// NOTE: 
// The result is unpredictable if unitVec0 and unitVec1 point in opposite directions.
// 
inline void vmath_quat_rotation(const float* v0, const float* v1, float* out)
{
	float cosHalfAngleX2, recipCosHalfAngleX2;
	cosHalfAngleX2 = sqrtf((2.0f * (1.0f + vmath_dot(v0, v1, 3))));
	recipCosHalfAngleX2 = (1.0f / cosHalfAngleX2);
	vmath_cross3D(v0, v1, out);
	vmath_mul(out, recipCosHalfAngleX2, 3, out);
	out[3] = cosHalfAngleX2 * 0.5f;
}

// Construct a quaternion to rotate around a unit-length 3-D vector
inline void vmath_quat_rotation(float radians, const float* v0, float* out)
{
	float s, c, angle;
	angle = (radians * 0.5f);
	s = sinf(angle);
	c = cosf(angle);
	vmath_mul(v0, s, 3, out);
	out[3] = c;
}

inline void vmath_quat_rotationX(float radians, float* out)
{
	float s, c, angle;
	angle = (radians * 0.5f);
	s = sinf(angle);
	c = cosf(angle);
	out[0] = s;
	out[1] = 0.0f;
	out[2] = 0.0f;
	out[3] = c;
}

inline void vmath_quat_rotationY(float radians, float* out)
{
	float s, c, angle;
	angle = (radians * 0.5f);
	s = sinf(angle);
	c = cosf(angle);
	out[0] = 0.0f;
	out[1] = s;
	out[2] = 0.0f;
	out[3] = c;
}

inline void vmath_quat_rotationZ(float radians, float* out)
{
	float s, c, angle;
	angle = (radians * 0.5f);
	s = sinf(angle);
	c = cosf(angle);
	out[0] = 0.0f;
	out[1] = 0.0f;
	out[2] = s;
	out[3] = c;
}

// Use a unit-length quaternion to rotate a 3-D vector
inline void vmath_quat_rotate(const float* quat, const float* v0, float* out)
{
	float tmpX, tmpY, tmpZ, tmpW;
	tmpX = (((quat[3] * v0[0]) + (quat[1] * v0[2])) - (quat[2] * v0[1]));
	tmpY = (((quat[3] * v0[1]) + (quat[2] * v0[0])) - (quat[0] * v0[2]));
	tmpZ = (((quat[3] * v0[2]) + (quat[0] * v0[1])) - (quat[1] * v0[0]));
	tmpW = (((quat[0] * v0[0]) + (quat[1] * v0[1])) + (quat[2] * v0[2]));
	out[0] = ((((tmpW * quat[0]) + (tmpX * quat[3])) - (tmpY * quat[2])) + (tmpZ * quat[1]));
	out[1] = ((((tmpW * quat[1]) + (tmpY * quat[3])) - (tmpZ * quat[0])) + (tmpX * quat[2]));
	out[2] = ((((tmpW * quat[2]) + (tmpZ * quat[3])) - (tmpX * quat[1])) + (tmpY * quat[0]));
}

inline void vmath_quat_conj(const float* quat, float* out)
{
	out[0] = -quat[0];
	out[1] = -quat[1];
	out[2] = -quat[2];
	out[3] = quat[3];
}

inline void vmath_quat_inverse(const float* quat, float* out)
{
	float len = 0.0f;
	for (int i = 0; i < 4; i++) len += quat[i] * quat[i];
	out[0] = -quat[0]/len;
	out[1] = -quat[1]/len;
	out[2] = -quat[2]/len;
	out[3] = quat[3]/len;
}



inline void vmath_quat_slerp(float t, const float* quat0, const float* quat1, float* out)
{
	float start[4];
	float recipSinAngle, scale0, scale1, cosAngle, angle;
	cosAngle = vmath_dot(quat0, quat1, 4);
	if (cosAngle < 0.0f) {
		cosAngle = -cosAngle;
		vmath_neg(quat0, 4, start);
	}
	else {
		start[0] = quat0[0];
		start[1] = quat0[1];
		start[2] = quat0[2];
		start[3] = quat0[3];
	}
	if (cosAngle < SLERP_TOL) {
		angle = acosf(cosAngle);
		recipSinAngle = (1.0f / sinf(angle));
		scale0 = (sinf(((1.0f - t) * angle)) * recipSinAngle);
		scale1 = (sinf((t * angle)) * recipSinAngle);
	}
	else {
		scale0 = (1.0f - t);
		scale1 = t;
	}
	vmath_mul(start, scale0, 4, start);
	vmath_mul(quat1, scale1, 4, out);
	vmath_add(start, out, 4, out);
}

inline void vmath_quat_squad(float t, const float* quat0, const float* quat1, const float* quat2, const float* quat3, float* out)
{
	float tmp0[4];
	float tmp1[4];
	vmath_quat_slerp(t, quat0, quat3, tmp0);
	vmath_quat_slerp(t, quat1, quat2, tmp1);
	vmath_quat_slerp(((2.0f * t) * (1.0f - t)), tmp0, tmp1, out);
}


//////////////////////////////////////////////////////////
inline void vmath_mat_cpy(const float* mat, int mdin, int mdout, float* out) {
	for (int i = 0; i < mdout; i++) {
		for (int j = 0; j < mdout; j++) {
			out[i * mdout + j] = mat[i * mdin + j];
		}
	}
}

inline void vmath_mat_add(const float* mat0, const float* mat1, int md0, int md1, float* out) {
	for (int i = 0; i < md0; i++) {
		for (int j = 0; j < md0; j++) {
			out[i*md0+j] = mat0[i*md0+j] + mat1[i*md1+j];
		}
	}
}

inline void vmath_mat_sub(const float* mat0, const float* mat1, int md0, int md1, float* out) {
	for (int i = 0; i < md0; i++) {
		for (int j = 0; j < md0; j++) {
			out[i * md0 + j] = mat0[i * md0 + j] - mat1[i * md1 + j];
		}
	}
}


inline void vmath_mat_mul(const float* mat, float s, int md, float* out) {
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			int idx = i * md + j;
			out[idx] = mat[idx] * s;
		}
	}
}

inline void vmath_mat_div(const float* mat, float s, int md, float* out) {
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			int idx = i * md + j;
			out[idx] = mat[idx] / s;
		}
	}
}

inline void vmath_mat_neg(const float* mat, int md, float* out) {
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			int idx = i * md + j;
			out[idx] = -mat[idx];
		}
	}
}

inline void vmath_mat_abs(const float* mat, int md, float* out)
{
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			int idx = i * md + j;
			out[idx] = fabsf(mat[idx]);
		}
	}
}

inline void vmath_identity(float* out, int md)
{
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			int idx = i * md + j;
			out[idx] = (i == j) ? 1.0f : 0.0f;
		}
	}
}

#define PI_OVER_2 1.570796327f

inline void vmath_mat_from_quat(const float* quat, int md, float* out)
{
	float qx2, qy2, qz2, qxqx2, qyqy2, qzqz2, qxqy2, qyqz2, qzqw2, qxqz2, qyqw2, qxqw2;
	qx2 = (quat[0] + quat[0]);
	qy2 = (quat[1] + quat[1]);
	qz2 = (quat[2] + quat[2]);
	qxqx2 = (quat[0] * qx2);
	qxqy2 = (quat[0] * qy2);
	qxqz2 = (quat[0] * qz2);
	qxqw2 = (quat[3] * qx2);
	qyqy2 = (quat[1] * qy2);
	qyqz2 = (quat[1] * qz2);
	qyqw2 = (quat[3] * qy2);
	qzqz2 = (quat[2] * qz2);
	qzqw2 = (quat[3] * qz2);

	out[0] = (1.0f - qyqy2) - qzqz2;
	out[1] = qxqy2 + qzqw2;
	out[md + 0] = qxqy2 - qzqw2;
	out[md + 1] = (1.0f - qxqx2) - qzqz2;
	if (md > 2) {
		out[2] = qxqz2 - qyqw2;
		out[md + 2] = qyqz2 + qxqw2;
		out[md * 2 + 0] = qxqz2 + qyqw2;
		out[md * 2 + 1] = qyqz2 - qxqw2;
		out[md * 2 + 2] = (1.0f - qxqx2) - qyqy2;
		if (md > 3) {
			out[3] = 0.0f;
			out[md + 3] = 0.0f;
			out[md * 2 + 3] = 0.0f;
			out[md * 3 + 0] = 0.0f;
			out[md * 3 + 1] = 0.0f;
			out[md * 3 + 2] = 0.0f;
			out[md * 3 + 3] = 1.0f;
		}
	}
}

inline void vmath_mat4_from_rottrans(const float* quat, const float* v, float* out) {
	vmath_mat_from_quat(quat, 4, out);
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1.0f;
}

inline bool vmath_mat_almostEqual(float* a, float* b, int md) {
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			int idx = i * md + j;
			if (!vmath_almostEqual(a[idx], b[idx])) return false;
		}
	}
	return true;
}

inline void vmath_mat_transpose(const float* mat, int md, float* out)
{
	for (int i = 0; i < md; i++) {
		for (int j = 0; j < md; j++) {
			out[j * md + i] = mat[i * md + j];
		}
	}
}

inline void vmath_mat_inverse(const float* mat, int md, float* out)
{
	if (md == 2) {
		float determinant = mat[0] * mat[5] - mat[1] * mat[4];
		out[0] = determinant * mat[3];
		out[1] = determinant * mat[1];
		out[2] = determinant * mat[2];
		out[3] = determinant * mat[0];
	}
	else if (md == 3) {
		float tmp0[3];
		float tmp1[3];
		float tmp2[3];
		vmath_cross3D(&(mat[3]), &(mat[6]), tmp0);
		vmath_cross3D(&(mat[6]), &(mat[0]), tmp1);
		vmath_cross3D(&(mat[0]), &(mat[3]), tmp2);
		float detinv = (1.0f / vmath_dot(&(mat[6]), tmp2, 3));

		out[0] = tmp0[0] * detinv;
		out[1] = tmp1[0] * detinv;
		out[2] = tmp2[0] * detinv;
		out[3] = tmp0[1] * detinv;
		out[4] = tmp1[1] * detinv;
		out[5] = tmp2[1] * detinv;
		out[6] = tmp0[2] * detinv;
		out[7] = tmp1[2] * detinv;
		out[8] = tmp2[2] * detinv;
	}
	else if (md == 4) {

		float tmp0, tmp1, tmp2, tmp3, tmp4, tmp5, detInv;
		tmp0 = ((mat[10] * mat[3]) - (mat[2] * mat[11]));
		tmp1 = ((mat[14] * mat[7]) - (mat[6] * mat[15]));
		tmp2 = ((mat[1] * mat[10]) - (mat[9] * mat[2]));
		tmp3 = ((mat[5] * mat[14]) - (mat[13] * mat[6]));
		tmp4 = ((mat[9] * mat[3]) - (mat[1] * mat[11]));
		tmp5 = ((mat[13] * mat[7]) - (mat[5] * mat[15]));

		float res[16];
		res[0] = (((mat[9] * tmp1) - (mat[11] * tmp3)) - (mat[10] * tmp5));
		res[1] = (((mat[13] * tmp0) - (mat[15] * tmp2)) - (mat[14] * tmp4));
		res[2] = (((mat[3] * tmp3) + (mat[2] * tmp5)) - (mat[1] * tmp1));
		res[3] = (((mat[7] * tmp2) + (mat[6] * tmp4)) - (mat[5] * tmp0));

		detInv = (1.0f / ((((mat[0] * res[0]) + (mat[4] * res[1])) + (mat[8] * res[2])) + (mat[12] * res[3])));
		res[4] = (mat[8] * tmp1);
		res[5] = (mat[12] * tmp0);
		res[6] = (mat[0] * tmp1);
		res[7] = (mat[4] * tmp0);

		res[8] = (mat[8] * tmp5);
		res[9] = (mat[12] * tmp4);
		res[10] = (mat[0] * tmp5);
		res[11] = (mat[4] * tmp4);

		res[12] = (mat[8] * tmp3);
		res[13] = (mat[12] * tmp2);
		res[14] = (mat[0] * tmp3);
		res[15] = (mat[4] * tmp2);

		tmp0 = ((mat[8] * mat[1]) - (mat[0] * mat[9]));
		tmp1 = ((mat[12] * mat[5]) - (mat[4] * mat[13]));
		tmp2 = ((mat[8] * mat[3]) - (mat[0] * mat[11]));
		tmp3 = ((mat[12] * mat[7]) - (mat[4] * mat[15]));
		tmp4 = ((mat[8] * mat[2]) - (mat[0] * mat[10]));
		tmp5 = ((mat[12] * mat[6]) - (mat[4] * mat[14]));

		res[4] = (((mat[10] * tmp3) - (mat[11] * tmp5)) - res[4]);
		res[5] = (((mat[14] * tmp2) - (mat[15] * tmp4)) - res[5]);
		res[6] = (((mat[3] * tmp5) - (mat[2] * tmp3)) + res[6]);
		res[7] = (((mat[7] * tmp4) - (mat[6] * tmp2)) + res[7]);

		res[8] = (((mat[11] * tmp1) - (mat[9] * tmp3)) + res[8]);
		res[9] = (((mat[15] * tmp0) - (mat[13] * tmp2)) + res[9]);
		res[10] = (((mat[1] * tmp3) - (mat[3] * tmp1)) - res[10]);
		res[11] = (((mat[5] * tmp2) - (mat[7] * tmp0)) - res[11]);

		res[12] = (((mat[9] * tmp5) - (mat[10] * tmp1)) + res[12]);
		res[13] = (((mat[13] * tmp4) - (mat[14] * tmp0)) + res[13]);
		res[14] = (((mat[2] * tmp1) - (mat[1] * tmp5)) - res[14]);
		res[15] = (((mat[6] * tmp0) - (mat[5] * tmp4)) - res[15]);

		vmath_mat_mul(res, detInv, 4, out);
	}
}

inline void  vmath_mat4_orthoInverse(const float* mat, float* out)
{
	vmath_mat_transpose(mat, 3, out);
	float tmp[4];
	vmath_mul(&(out[0]), mat[12], 3, &(out[12]));
	vmath_mul(&(out[4]), mat[13], 3, tmp);
	vmath_add(&(out[12]), tmp, 3, &(out[12]));
	vmath_mul(&(out[8]), mat[14], 3, tmp);
	vmath_add(&(out[12]), tmp, 3, &(out[12]));
	vmath_neg(&(out[12]), 3, &(out[12]));
}



inline float vmath_mat_determinant(const float* mat, int md)
{
	if (md == 2) {
		return  mat[0] * mat[3] - mat[1] * mat[2];
	}
	else if (md == 3) {
		float tmp[3];
		vmath_cross3D(&(mat[0]), &(mat[3]), tmp);
		return vmath_dot(&(mat[3]), tmp, 3);
	}
	else if (md == 4) {
		float dx, dy, dz, dw, tmp0, tmp1, tmp2, tmp3, tmp4, tmp5;
		tmp0 = ((mat[10] * mat[3]) - (mat[2] * mat[11]));
		tmp1 = ((mat[14] * mat[7]) - (mat[6] * mat[15]));
		tmp2 = ((mat[1] * mat[10]) - (mat[9] * mat[2]));
		tmp3 = ((mat[5] * mat[14]) - (mat[13] * mat[6]));
		tmp4 = ((mat[9] * mat[3]) - (mat[1] * mat[11]));
		tmp5 = ((mat[13] * mat[7]) - (mat[5] * mat[15]));
		dx = (((mat[9] * tmp1) - (mat[11] * tmp3)) - (mat[10] * tmp5));
		dy = (((mat[13] * tmp0) - (mat[15] * tmp2)) - (mat[14] * tmp4));
		dz = (((mat[3] * tmp3) + (mat[2] * tmp5)) - (mat[1] * tmp1));
		dw = (((mat[7] * tmp2) + (mat[6] * tmp4)) - (mat[5] * tmp0));
		return ((((mat[0] * dx) + (mat[4] * dy)) + (mat[8] * dz)) + (mat[12] * dw));
	}
	return 0.0f;
}


inline void vmath_mul_matrix_vector(const float* v, const float* m, int md, int vd, float* out)
{
	for (int i = 0; i < md; i++) {
		out[i] = 0.0f;
		for (int j = 0; j < vd; j++) {
			out[i] += m[j * md + i] * v[j];
		}
	}
}

inline void vmath_mul_transpose_matrix_vector(const float* v, const float* m, int md, int vd, float* out)
{
	for (int i = 0; i < md; i++) {
		out[i] = 0.0f;
		for (int j = 0; j < vd; j++) {
			out[i] += m[i * md + j] * v[j];
		}
	}
}


inline void vmath_mul_matrix_matrix(const float* m1, const float* m2, int md1, int md2, float* out)
{
	for (int i = 0; i < md1; i++) {
		vmath_mul_matrix_vector(&(m2[i*md2]), m1, md1, md2, &(out[i*md1]));
	}
}


inline void vmath_vect_xaxis(float* out, int d) { out[0] = 1.0f; out[1] = 0.0f; if (d > 2) { out[2] = 0.0f; if (d > 3) { out[3] = 0.0f; } } }
inline void vmath_vect_yaxis(float* out, int d) { out[0] = 0.0f; out[1] = 1.0f; if (d > 2) { out[2] = 0.0f; if (d > 3) { out[3] = 0.0f; } } }
inline void vmath_vect_zaxis(float* out, int d) { out[0] = 0.0f; out[1] = 0.0f; if (d > 2) { out[2] = 1.0f; if (d > 3) { out[3] = 0.0f; } } }
inline void vmath_vect_waxis(float* out, int d) { out[0] = 0.0f; out[1] = 0.0f; if (d > 2) { out[2] = 0.0f; if (d > 3) { out[3] = 1.0f; } } }
inline void vmath_vect_set(float x, float y, float z, float w, int d, float* out) {	out[0] = x; out[1] = y; if (d > 2) { out[2] = z;  if (d > 3) { out[3] = w; } } }

inline void vmath_mat_rotationX(float radians, int md, float* out)
{
	float s, c;
	s = sinf(radians);
	c = cosf(radians);
	vmath_vect_xaxis(&(out[0*md]), md);
	vmath_vect_set(0.0f, c, s, 0.0f,md, &(out[1 * md]));
	if (md > 2) {
		vmath_vect_set(0.0f, -s, c, 0.0f, md, &(out[2 * md]));
		if (md > 3) {
			vmath_vect_waxis(&(out[3 * md]), md);
		}
	}
}

inline void vmath_mat_rotationY(float radians, int md, float* out)
{
	float s, c;
	s = sinf(radians);
	c = cosf(radians);
	vmath_vect_set(c, 0.0f, -s, 0.0f,md, &(out[0*md]));
	vmath_vect_yaxis(&(out[1 * md]),md);
	if (md > 2) {
		vmath_vect_set(s, 0.0f, c, 0.0f, md, &(out[2 * md]));
		if (md > 3) {
			vmath_vect_waxis(&(out[3 * md]), md);
		}
	}
}


inline void vmath_mat_rotationZ(float radians, int md, float* out)
{
	float s, c;
	s = sinf(radians);
	c = cosf(radians);
	vmath_vect_set(c, s, 0.0f, 0.0f, md,&(out[0 * md]));
	vmath_vect_set(-s, c, 0.0f, 0.0f,md,&(out[1 * md]));
	if (md > 2) {
		vmath_vect_zaxis(&(out[2 * md]), md);
		if (md > 3) {
			vmath_vect_waxis(&(out[3 * md]), md);
		}
	}
}

inline void vmath_mat_rotationZYX(const float* xyz, int md, float* out)
{
	float sX, cX, sY, cY, sZ, cZ, tmp0, tmp1;
	sX = sinf(xyz[0]);
	cX = cosf(xyz[0]);
	sY = sinf(xyz[1]);
	cY = cosf(xyz[1]);
	sZ = sinf(xyz[2]);
	cZ = cosf(xyz[2]);

	tmp0 = (cZ * sY);
	tmp1 = (sZ * sY);

	vmath_vect_set((cZ * cY), (sZ * cY), -sY, 0.0f, md,&(out[0 * md]));
	vmath_vect_set(((tmp0 * sX) - (sZ * cX)), ((tmp1 * sX) + (cZ * cX)), (cY * sX), 0.0f, md,&(out[1 * md]));
	if (md > 2) {
		vmath_vect_set(((tmp0 * cX) + (sZ * sX)), ((tmp1 * cX) - (cZ * sX)), (cY * cX), 0.0f, md, &(out[2 * md]));
		if (md > 3) {
			vmath_vect_waxis(&(out[3 * md]), md);
		}
	}
}

inline void vmath_mat_rotation(float r, const float* v, int md, float* out)
{
	float s, c, oneMinusC, xy, yz, zx;
	s = sinf(r);
	c = cosf(r);
	xy = (v[0] * v[1]);
	yz = (v[1] * v[2]);
	zx = (v[2] * v[0]);
	oneMinusC = (1.0f - c);

	vmath_vect_set((((v[0] * v[0]) * oneMinusC) + c), ((xy * oneMinusC) + (v[2] * s)), ((zx * oneMinusC) - (v[1] * s)), 0.0f, md,&(out[0*md]));
	vmath_vect_set(((xy * oneMinusC) - (v[2] * s)), (((v[1] * v[1]) * oneMinusC) + c), ((yz * oneMinusC) + (v[0] * s)), 0.0f, md, &(out[1 * md]));
	if (md > 2) {
		vmath_vect_set(((zx * oneMinusC) + (v[1] * s)), ((yz * oneMinusC) - (v[0] * s)), (((v[2] * v[2]) * oneMinusC) + c), 0.0f, md, &(out[2 * md]));
		if (md > 3) {
			vmath_vect_waxis(&(out[3 * md]), md);
		}
	}
}

inline void vmath_mat_scale(const float* scaleVec, int md, float* out)
{
	vmath_vect_set(scaleVec[0], 0.0f, 0.0f, 0.0f, md,&(out[0*md]));
	vmath_vect_set(0.0f, scaleVec[1], 0.0f, 0.0f, md, &(out[1 * md]));
	if (md > 2) {
		vmath_vect_set(0.0f, 0.0f, scaleVec[2], 0.0f, md, &(out[2 * md]));
		if (md > 3) {
			vmath_vect_waxis(&(out[3 * md]), md);
		}
	}
}

inline void vmath_mat_appendScale(const float* mat, const float* scaleVec, int mdin, int mdout, float* out)
{
	vmath_mul(&(mat[0 * mdin]), scaleVec[0], mdout, &(out[0 * mdout]));
	vmath_mul(&(mat[1 * mdin]), scaleVec[1], mdout, &(out[1 * mdout]));
	if (mdout > 2) {
		vmath_mul(&(mat[2 * mdin]), scaleVec[2], mdout, &(out[2 * mdout]));
		if (mdout > 3) {
			vmath_cpy(&(mat[3 * mdin]), mdout, &(out[3 * mdout]));
		}
	}
}

inline void vmath_mat_prependScale(const float* mat, const float* scaleVec, int mdin, int mdout, float* out)
{
	float tmp[4] = { 0.0f, 0.0f, 0.0f, 1.0f};
	vmath_cpy(scaleVec, mdin, tmp);
	vmath_mulPerElem(&(mat[0 * mdin]), tmp, mdout, &(out[0 * mdout]));
	vmath_mulPerElem(&(mat[1 * mdin]), tmp, mdout, &(out[1 * mdout]));
	if (mdout > 2) {
		vmath_mulPerElem(&(mat[2 * mdin]), tmp, mdout, &(out[2 * mdout]));
		if (mdout > 3) {
			vmath_mulPerElem(&(mat[3 * mdin]), tmp, mdout, &(out[3 * mdout]));
		}
	}
}


inline void vmath_mat4_translation(const float* tarans, float* out)
{
	vmath_identity(out,4);
	vmath_cpy(tarans, 3, &(out[12]));
}

inline void vmath_mat4_lookAt(const float* eyePos, const float* lookAtPos, const float* upVec, float* out)
{

	float tmp[16];
	float* vX = &(tmp[0]);
	float* vY = &(tmp[4]);
	float* vZ = &(tmp[8]);

	vmath_normalize(upVec, 3, vY);
	vmath_sub(eyePos, lookAtPos, 3, vZ);
	vmath_normalize(vZ, 3, vZ);
	vmath_cross3D(vY, vZ, vX);
	vmath_normalize(vX, 3, vX);
	vmath_cross3D(vZ, vX, vY);
	vmath_mat4_orthoInverse(tmp, out);
}

inline void vmath_mat4_perspective(float fovyRadians, float aspect, float zNear, float zFar, float* out)
{
	float f, rangeInv;
	f = tanf(((float)(PI_OVER_2)-(0.5f * fovyRadians)));
	rangeInv = (1.0f / (zNear - zFar));
	vmath_vect_set((f / aspect), 0.0f, 0.0f, 0.0f, 4,&(out[0]));
	vmath_vect_set(0.0f, f, 0.0f, 0.0f, 4,&(out[4]));
	vmath_vect_set(0.0f, 0.0f, ((zNear + zFar) * rangeInv), -1.0f, 4,&(out[8]));
	vmath_vect_set(0.0f, 0.0f, (((zNear * zFar) * rangeInv) * 2.0f), 0.0f, 4,&(out[12]));
}

inline void vmath_mat4_frustum(float left, float right, float bottom, float top, float zNear, float zFar, float* out)
{
	float sum_rl, sum_tb, sum_nf, inv_rl, inv_tb, inv_nf, n2;
	sum_rl = (right + left);
	sum_tb = (top + bottom);
	sum_nf = (zNear + zFar);
	inv_rl = (1.0f / (right - left));
	inv_tb = (1.0f / (top - bottom));
	inv_nf = (1.0f / (zNear - zFar));
	n2 = (zNear + zNear);
	vmath_vect_set((n2 * inv_rl), 0.0f, 0.0f, 0.0f, 4,&(out[0]));
	vmath_vect_set(0.0f, (n2 * inv_tb), 0.0f, 0.0f, 4, &(out[4]));
	vmath_vect_set((sum_rl * inv_rl), (sum_tb * inv_tb), (sum_nf * inv_nf), -1.0f, 4, &(out[8]));
	vmath_vect_set(0.0f, 0.0f, ((n2 * inv_nf) * zFar), 0.0f, 4, &(out[12]));
}

inline void vmath_mat4_orthographic(float left, float right, float bottom, float top, float zNear, float zFar, float* out)
{
	float sum_rl, sum_tb, sum_nf, inv_rl, inv_tb, inv_nf;
	sum_rl = (right + left);
	sum_tb = (top + bottom);
	sum_nf = (zNear + zFar);
	inv_rl = (1.0f / (right - left));
	inv_tb = (1.0f / (top - bottom));
	inv_nf = (1.0f / (zNear - zFar));

	vmath_vect_set((inv_rl + inv_rl), 0.0f, 0.0f, 0.0f, 4,&(out[0]));
	vmath_vect_set(0.0f, (inv_tb + inv_tb), 0.0f, 0.0f, 4, &(out[4]));
	vmath_vect_set(0.0f, 0.0f, (inv_nf + inv_nf), 0.0f, 4, &(out[8]));
	vmath_vect_set((-sum_rl * inv_rl), (-sum_tb * inv_tb), (sum_nf * inv_nf), 1.0f, 4, &(out[12]));
}


inline void vmath_quat(const float* mat3, float* out)
{
	float trace, radicand, scale, xx, yx, zx, xy, yy, zy, xz, yz, zz, tmpx, tmpy, tmpz, tmpw, qx, qy, qz, qw;

	int negTrace, ZgtX, ZgtY, YgtX;
	int largestXorY, largestYorZ, largestZorX;

	xx = mat3[0];
	yx = mat3[1];
	zx = mat3[2];
	xy = mat3[3];
	yy = mat3[4];
	zy = mat3[5];
	xz = mat3[6];
	yz = mat3[7];
	zz = mat3[8];

	trace = ((xx + yy) + zz);

	negTrace = (trace < 0.0f);
	ZgtX = zz > xx;
	ZgtY = zz > yy;
	YgtX = yy > xx;

	largestXorY = (!ZgtX || !ZgtY) && negTrace;
	largestYorZ = (YgtX || ZgtX) && negTrace;
	largestZorX = (ZgtY || !YgtX) && negTrace;

	if (largestXorY)
	{
		zz = -zz;
		xy = -xy;
	}
	if (largestYorZ)
	{
		xx = -xx;
		yz = -yz;
	}
	if (largestZorX)
	{
		yy = -yy;
		zx = -zx;
	}

	radicand = (((xx + yy) + zz) + 1.0f);
	scale = (0.5f * (1.0f / sqrtf(radicand)));

	tmpx = ((zy - yz) * scale);
	tmpy = ((xz - zx) * scale);
	tmpz = ((yx - xy) * scale);
	tmpw = (radicand * scale);
	qx = tmpx;
	qy = tmpy;
	qz = tmpz;
	qw = tmpw;

	if (largestXorY)
	{
		qx = tmpw;
		qy = tmpz;
		qz = tmpy;
		qw = tmpx;
	}
	if (largestYorZ)
	{
		tmpx = qx;
		tmpz = qz;
		qx = qy;
		qy = tmpx;
		qz = qw;
		qw = tmpz;
	}

	out[0] = qx;
	out[1] = qy;
	out[2] = qz;
	out[3] = qw;
}

inline void vmath_eulerToQuat(const float* euler, float* quat) {
	float cy = cosf(euler[2] * 0.5f);
	float sy = sinf(euler[2] * 0.5f);
	float cp = cosf(euler[1] * 0.5f);
	float sp = sinf(euler[1] * 0.5f);
	float cr = cosf(euler[0] * 0.5f);
	float sr = sinf(euler[0] * 0.5f);
	quat[3] = cy * cp * cr + sy * sp * sr;
	quat[0] = cy * cp * sr - sy * sp * cr;
	quat[1] = sy * cp * sr + cy * sp * cr;
	quat[2] = sy * cp * cr - cy * sp * sr;
}

inline void vmath_quatToEuler(const float* quat, float* euler) {
	float test = quat[0] * quat[1] + quat[2] * quat[3];
	if (test > 0.49999) {
		euler[0] = 0.0f;
		euler[1] = 2.0f * atan2f(quat[0], quat[4]);
		euler[2] = 3.14159f / 2.0f;
		return;
	}
	else if(test < -0.49999f) {
		euler[0] = 0;
		euler[1] = -2.0f * atan2f(quat[0], quat[4]);
		euler[2] = -3.14159f / 2.0f;
		return;
	}
	float sqx = quat[0]*quat[0];
	float sqy = quat[1]*quat[1];
	float sqz = quat[2]*quat[2];
	euler[0] = atan2f(2.0f * quat[0] * quat[3] - 2.0f * quat[1] * quat[2], 1.0f - 2.0f * sqx - 2.0f * sqz);
	euler[1] = atan2f(2.0f * quat[1] * quat[3] - 2.0f * quat[0] * quat[2], 1.0f - 2.0f * sqy - 2.0f * sqz);
	euler[2] = asinf(2.0f * test);
}

//0:tilt, 1:pan, 2:roll
inline void vmath_mat3ToEuler(const float* mat3, float* euler) {

	int d = 3;

	//swap col row ?
	float fSinX = -mat3[2 * d + 1];		//-a_matRotation.getElem(2, 1);

	euler[0] = asinf(fSinX);

	float	fSinY, fSinZ, fCosY, fCosZ;

	if (1 - fabs(fSinX) > FLT_EPSILON)	// Gimbal lock?
	{
		fCosY = mat3[2 * d + 2];		//a_matRotation.getElem(2, 2);
		fSinY = mat3[2 * d + 0];		//a_matRotation.getElem(2, 0);
		euler[1] = atan2f(fSinY, fCosY);

		fCosZ = mat3[1 * d + 1];		//a_matRotation.getElem(1, 1);
		fSinZ = mat3[0 * d + 1];		//a_matRotation.getElem(0, 1);
		euler[2] = atan2f(fSinZ, fCosZ);
	}
	else								// Gimbal lock has occurred
	{
		euler[1] = 0;						// Yaw is undefined; just fix it

		fCosZ = mat3[0 * d + 0];		//a_matRotation.getElem(0, 0);
		fSinZ = mat3[0 * d + 2];		//a_matRotation.getElem(0, 2) * fSinX;
		euler[2] = atan2f(fSinZ, fCosZ);
	}
}


inline void vmath_mat4_fromTransform(const float* pos, const float* rot, int rotSize, const float* scale, const float* shear, float* out) {

	float scalemat[16];
	float rottransmat[16];
	float tmp[16];

	vmath_mat_scale(scale, 4, scalemat);
	if (rotSize == 4)
		vmath_mat_from_quat(rot, 4, rottransmat);
	else
		vmath_mat_rotationZYX(rot, 4, rottransmat);
	rottransmat[12] = pos[0];
	rottransmat[13] = pos[1];
	rottransmat[14] = pos[2];
	rottransmat[15] = 1.0f;
	vmath_mul_matrix_matrix(rottransmat, shear, 4, 4, tmp);
	vmath_mul_matrix_matrix(tmp, scalemat, 4, 4, out);
}


inline void vmath_linearCombine(const float* a, const float* b, float a1, float b1, float* out) {
	out[0] = (a1 * a[0]) + (b1 * b[0]);
	out[1] = (a1 * a[1]) + (b1 * b[1]);
	out[2] = (a1 * a[2]) + (b1 * b[2]);
}


#define K_EPSILON 0.000001f
inline float vmath_roundingFloat(float roundNum) {
	if (fabsf(roundNum) <= K_EPSILON) {
		if (roundNum <= 0) roundNum = -K_EPSILON;
		else roundNum = K_EPSILON;
	}
	return roundNum;
}

inline void vmath_mat4_toTransform(const float* mat, bool rotEuler, float* pos, float* rot, float* scale, float* shear) {

	//position = [matrix.m30, matrix.m31, matrix.m32]
	pos[0] = mat[12];
	pos[1] = mat[13];
	pos[2] = mat[14];

	//col_0 = [matrix.m00, matrix.m01, matrix.m02]
	//col_1 = [matrix.m10, matrix.m11, matrix.m12]
	//col_2 = [matrix.m20, matrix.m21, matrix.m22]

	//# Compute X scale and normalize first col
	//scaleX = vmath.length(vmath.vec3(col_0))
	//col_0 = vmath.normalize(vmath.vec3(col_0))
	//col_0 = [col_0.x, col_0.y, col_0.z]
	//scaleX = utils.RoundingFloat(scaleX)

	float rotmat[9];
	scale[0] = vmath_length(&(mat[0]), 3);
	scale[0] = vmath_roundingFloat(scale[0]);
	vmath_normalize(&(mat[0]), 3, &(rotmat[0]));

	//# Compute XY shear factor and make 2nd col orthogonal to 1st		
	//shear_xy = vmath.dot(vmath.vec3(col_0), vmath.vec3(col_1))
	//col_1 = utils.LinearCombine(col_1, col_0, 1.0, -shear_xy)

	float shear_xy = vmath_dot(&(rotmat[0]), &(mat[4]), 3);
	vmath_linearCombine(&(mat[4]), &(rotmat[0]), 1.0, -shear_xy, &(rotmat[3]));

	//# Compute Y scale
	//scaleY = vmath.length(vmath.vec3(col_1))
	//col_1 = vmath.normalize(vmath.vec3(col_1))
	//col_1 = [col_1.x, col_1.y, col_1.z]
	//scaleY = utils.RoundingFloat(scaleY)
	//shear_xy /= scaleY

	scale[1] = vmath_length(&(rotmat[3]), 3);
	scale[1] = vmath_roundingFloat(scale[1]);
	vmath_normalize(&(rotmat[3]), 3, &(rotmat[3]));
	shear_xy /= scale[1];

	//# Compute XZ and YZ shear
	//shear_xz = vmath.dot(vmath.vec3(col_0), vmath.vec3(col_2))
	//col_2 = utils.LinearCombine(col_2, col_0, 1.0, -shear_xz)
	//shear_yz = vmath.dot(vmath.vec3(col_1), vmath.vec3(col_2))
	//col_2 = utils.LinearCombine(col_2, col_1, 1.0, -shear_yz)

	float shear_xz = vmath_dot(&(rotmat[0]), &(mat[8]), 3);
	vmath_linearCombine(&(mat[8]), &(rotmat[0]), 1.0, -shear_xz, &(rotmat[6]));
	float shear_yz = vmath_dot(&(rotmat[3]), &(rotmat[6]), 3);
	vmath_linearCombine(&(rotmat[6]), &(rotmat[3]), 1.0, -shear_yz, &(rotmat[6]));

	//# Next, get Z scale
	//scaleZ = vmath.length(vmath.vec3(col_2))
	//col_2 = vmath.normalize(vmath.vec3(col_2))
	//col_2 = [col_2.x, col_2.y, col_2.z]
	//scaleZ = utils.RoundingFloat(scaleZ)
	//shear_xz /= scaleZ
	//shear_yz /= scaleZ

	scale[2] = vmath_length(&(rotmat[6]),3);
	scale[2] = vmath_roundingFloat(scale[2]);
	vmath_normalize(&(rotmat[6]), 3, &(rotmat[6]));

	shear_xz /= scale[2];
	shear_yz /= scale[2];

	//# Check determinant to check if object flip, if dot < 0 then negative matrix and scaling factor
	//if vmath.dot(vmath.vec3(col_0) , vmath.cross(vmath.vec3(col_1), vmath.vec3(col_2))) < 0:
	//	scaleX *= -1
	//	scaleY *= -1
	//	scaleZ *= -1
	//	col_0 = [-col_0[0], -col_0[1], -col_0[2]]
	//	col_1 = [-col_1[0], -col_1[1], -col_1[2]]
	//	col_2 = [-col_2[0], -col_2[1], -col_2[2]]
	//scale = [scaleX, scaleY, scaleZ]
	float tmp[3];
	vmath_cross3D(&(rotmat[3]), &(rotmat[6]), tmp);
	if (vmath_dot(&(rotmat[0]), tmp, 3) < 0.0f) {
		vmath_neg(scale, 3, scale);
		vmath_mat_neg(rotmat, 3, rotmat);
	}

	//# Now calculate the rotation
	//rotationY = math.asin(-col_0[2])
	//if (math.cos(rotationY) != 0):
	//	rotationX = math.atan2(col_1[2], col_2[2])
	//	rotationZ = math.atan2(col_0[1], col_0[0])
	//else:
	//	rotationX = math.atan2(-col_2[0], col_1[1])
	//	rotationZ = 0
	//rotation = [math.degrees(rotationX), math.degrees(rotationY), math.degrees(rotationZ)]

	if (rotEuler) {
		rot[1] = asinf(-rotmat[2]);
		if (cosf(rot[1]) != 0) {
			rot[0] = atan2f(rotmat[5], rotmat[8]);
			rot[2] = atan2f(rotmat[1], rotmat[0]);
		}
		else {
			rot[0] = atan2f(-rotmat[6], rotmat[4]);
			rot[2] = 0.0f;
		}
	}
	else {
		vmath_quat(rotmat, rot);
	}
	//shear = vmath.mat44([
	//	1, 0, 0, 0,
	//	shear_xy, 1, 0, 0,
	//	shear_xz, shear_yz, 1, 0,
	//	0, 0, 0, 1
	//])

	vmath_identity(shear, 4);
	shear[4] = shear_xy;
	shear[8] = shear_xz;
	shear[9] = shear_yz;

	//return vmath.vec3(rotation), vmath.vec3(scale), vmath.vec3(position), shear
}


#if 0
void pyxieEulerAngles::SetEulerAngles(const Quat& a_quatRotation)
{
	Matrix4	matRotation;
	matRotation = Matrix4::identity();

	//	matRotation.SetToRotation( a_quatRotation );
	float wx, wy, wz, xx, yy, yz, xy, xz, zz, x2, y2, z2;

	x2 = a_quatRotation.getX() + a_quatRotation.getX();
	y2 = a_quatRotation.getY() + a_quatRotation.getY();
	z2 = a_quatRotation.getZ() + a_quatRotation.getZ();
	xx = a_quatRotation.getX() * x2;
	xy = a_quatRotation.getX() * y2;
	xz = a_quatRotation.getX() * z2;
	yy = a_quatRotation.getY() * y2;
	yz = a_quatRotation.getY() * z2;
	zz = a_quatRotation.getZ() * z2;
	wx = a_quatRotation.getW() * x2;
	wy = a_quatRotation.getW() * y2;
	wz = a_quatRotation.getW() * z2;

	matRotation.setElem(0, 0, 1.0f - (yy + zz));
	matRotation.setElem(0, 1, xy + wz);
	matRotation.setElem(0, 2, xz - wy);

	matRotation.setElem(1, 0, xy - wz);
	matRotation.setElem(1, 1, 1.0f - (xx + zz));
	matRotation.setElem(1, 2, yz + wx);

	matRotation.setElem(2, 0, xz + wy);
	matRotation.setElem(2, 1, yz - wx);
	matRotation.setElem(2, 2, 1.0f - (xx + yy));

	SetEulerAngles(matRotation);
}

	void pyxieEulerAngles::SetEulerAngles(const pyxieAxisAngle& a_Rotation)
	{
		Matrix4	matRotation;
		matRotation = Matrix4::identity();

		//matRotation.SetToRotation( a_Rotation );
		//
		//	CHECK FOR IDENTITY
		//
		if ((0.0f == a_Rotation.GetAngle()) ||
			((a_Rotation.GetAxis().getX() == 0.0f) && (a_Rotation.GetAxis().getY() == 0.0f) && (a_Rotation.GetAxis().getZ() == 0.0f)))
			//( true == a_Rotation.GetAxis().HasZeroMagnitude() ) )
		{
			matRotation.setElem(0, 0, 1.0f);
			matRotation.setElem(0, 1, 0.0f);
			matRotation.setElem(0, 2, 0.0f);
			matRotation.setElem(1, 0, 0.0f);
			matRotation.setElem(1, 1, 1.0f);
			matRotation.setElem(1, 2, 0.0f);
			matRotation.setElem(2, 0, 0.0f);
			matRotation.setElem(2, 1, 0.0f);
			matRotation.setElem(2, 2, 1.0f);
			return;
		}

		float fCos = cosf(a_Rotation.GetAngle());
		float fSin = sinf(a_Rotation.GetAngle());

		Vector3 vecNormal(a_Rotation.GetAxis());
		vecNormal = normalize(vecNormal);

		matRotation.setElem(0, 0, (vecNormal.getX() * vecNormal.getX()) * (1.0f - fCos) + fCos);
		matRotation.setElem(0, 1, (vecNormal.getX() * vecNormal.getY()) * (1.0f - fCos) - (vecNormal.getZ() * fSin));
		matRotation.setElem(0, 2, (vecNormal.getX() * vecNormal.getZ()) * (1.0f - fCos) + (vecNormal.getY() * fSin));

		matRotation.setElem(1, 0, (vecNormal.getY() * vecNormal.getX()) * (1.0f - fCos) + (vecNormal.getZ() * fSin));
		matRotation.setElem(1, 1, (vecNormal.getY() * vecNormal.getY()) * (1.0f - fCos) + fCos);
		matRotation.setElem(1, 2, (vecNormal.getY() * vecNormal.getZ()) * (1.0f - fCos) - (vecNormal.getX() * fSin));

		matRotation.setElem(2, 0, (vecNormal.getZ() * vecNormal.getX()) * (1.0f - fCos) - (vecNormal.getY() * fSin));
		matRotation.setElem(2, 1, (vecNormal.getZ() * vecNormal.getY()) * (1.0f - fCos) + (vecNormal.getX() * fSin));
		matRotation.setElem(2, 2, (vecNormal.getZ() * vecNormal.getZ()) * (1.0f - fCos) + fCos);

		SetEulerAngles(matRotation);
	}

	void pyxieEulerAngles::SetEulerAngles(const Matrix4& a_matRotation)
	{
		//swap col row ?
		float fSinX = -a_matRotation.getElem(2, 1);

		m_fPitch = asinf(fSinX);

		float	fSinY, fSinZ, fCosY, fCosZ;

		if (1 - fabs(fSinX) > FLT_EPSILON)			// Gimbal lock?
		{
			fCosY = a_matRotation.getElem(2, 2);
			fSinY = a_matRotation.getElem(2, 0);
			m_fYaw = atan2f(fSinY, fCosY);

			fCosZ = a_matRotation.getElem(1, 1);
			fSinZ = a_matRotation.getElem(0, 1);
			m_fRoll = atan2f(fSinZ, fCosZ);
		}
		else											// Gimbal lock has occurred
		{
			m_fYaw = 0;							// Yaw is undefined; just fix it

			fCosZ = a_matRotation.getElem(0, 0);
			fSinZ = a_matRotation.getElem(0, 2) * fSinX;
			m_fRoll = atan2f(fSinZ, fCosZ);
		}
	}

	pyxieAxisAngle pyxieEulerAngles::GetAxisAngle(void) const
	{
		pyxieAxisAngle	quatRotation;
		quatRotation.SetAxisAngle(*this);

		return quatRotation;
	}

	Quat pyxieAxisAngle::GetQuaternion() const
	{
		Quat	quatRotation;

		//quatRotation.SetQuaternion( *this );
		float theta = GetAngle() * 0.5f;
		float sinTheta = sinf(theta);

		quatRotation.setX(sinTheta * GetAxis().getX());
		quatRotation.setY(sinTheta * GetAxis().getY());
		quatRotation.setZ(sinTheta * GetAxis().getZ());
		quatRotation.setW(cosf(theta));

		return quatRotation;
	}

	pyxieEulerAngles pyxieAxisAngle::GetEulerAngles() const
	{
		pyxieEulerAngles	rotation;
		rotation.SetEulerAngles(*this);

		return rotation;
	}

	void pyxieAxisAngle::SetAxisAngle(const Vector3& a_vecAxis, float a_fAngle)
	{
		SetAxis(a_vecAxis);
		SetAngle(a_fAngle);
	}

	void pyxieAxisAngle::SetAxisAngle(const Quat& a_quatRotation)
	{
		m_fAngle = 2.0f * acosf(a_quatRotation.getW());

		float fScale = sinf(0.5f * GetAngle());

		if (fScale != 0.0f)
		{
			fScale = 1.0f / fScale;

			m_vecAxis.setX(fScale * a_quatRotation.getX());
			m_vecAxis.setY(fScale * a_quatRotation.getY());
			m_vecAxis.setZ(fScale * a_quatRotation.getZ());
		}
		else
		{
			m_vecAxis.setX(1.0f);
			m_vecAxis.setY(0.0f);
			m_vecAxis.setZ(0.0f);
		}
	}
#endif

