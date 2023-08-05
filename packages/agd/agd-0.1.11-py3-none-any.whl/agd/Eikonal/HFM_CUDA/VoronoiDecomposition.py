# Copyright 2020 Jean-Marie Mirebeau, University Paris-Sud, CNRS, University Paris-Saclay
# Distributed WITHOUT ANY WARRANTY. Licensed under the Apache License, Version 2.0, see http://www.apache.org/licenses/LICENSE-2.0

import numpy as np
import cupy as cp
import os

from . import cupy_module_helper
from ...Metrics import Riemann

def VoronoiDecomposition(m,offset_t=np.int32,flattened=False,blockDim=None):
	"""
	Returns the Voronoi decomposition of a family of quadratic forms. 
	- m : the (symmetric) matrices of the quadratic forms to decompose.
	- offset_t : the type of offsets to be returned. 
	- flattened : wether the input matrices are flattened
	"""

	# Prepare the inputs and outputs
	if not flattened: m = Riemann(m).flatten()
	symdim = len(m)
	ndim = int(np.sqrt(2*symdim))
	assert symdim==ndim*(ndim+1)/2
	shape = m.shape[1:]
	size = m.size/symdim

	if not (2<=ndim and ndim<=5): 
		raise ValueError(f"Voronoi decomposition not implemented in dimension {ndim}")
	decompdim = [0,1,3,6,12,15][ndim]

	float_t = np.float32
	int_t = np.int32
	m = cp.ascontiguousarray(m,dtype=float_t)
	weights = cp.empty((decompdim,*shape),dtype=float_t)
	offsets = cp.empty((ndim,decompdim,*shape),dtype=offset_t)

	weights=cp.ascontiguousarray(weights)
	offsets=cp.ascontiguousarray(offsets)

	# Set up the GPU kernel
	traits = {
		'ndim_macro':ndim,
		'offsetT':offset_t,
		'Scalar':float_t,
		'Int':np.int32,
		}

	source = cupy_module_helper.traits_header(traits)
	cuda_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),"cuda")
	date_modified = cupy_module_helper.getmtime_max(cuda_path)

	source += [
	'#include "VoronoiDecomposition.h"',
	f"// Date cuda code last modified : {date_modified}"]
	cuoptions = ("-default-device", f"-I {cuda_path}") 

	source="\n".join(source)
	
	module = cupy_module_helper.GetModule(source,cuoptions)
	cupy_module_helper.SetModuleConstant(module,'size_tot',size,int_t)

	cupy_kernel = module.get_function("VoronoiDecomposition")

	if blockDim is None: blockDim = (32 if ndim==5 else 128)
	gridDim = int(np.ceil(size/blockDim))

	cupy_kernel((gridDim,),(blockDim,),(m,weights,offsets))
	return weights,offsets