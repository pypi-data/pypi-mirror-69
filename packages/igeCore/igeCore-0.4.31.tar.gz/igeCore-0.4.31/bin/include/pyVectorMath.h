#include <Python.h>
#include "vmath.h"

typedef struct {
	PyObject_HEAD
	float v[4];
	int d;
} vec_obj;

typedef struct {
	PyObject_HEAD
		float m[16];
	int d;
} mat_obj;

typedef struct {
	PyObject_HEAD
	float min[4];
	float max[4];
	int d;
} aabb_obj;
