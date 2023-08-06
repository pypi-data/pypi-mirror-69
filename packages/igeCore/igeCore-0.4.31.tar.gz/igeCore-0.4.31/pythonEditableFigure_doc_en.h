
PyDoc_STRVAR(editablefigure_doc,
	"figure for edditing.\n"\
	"\n"\
	"igeCore.editableFigure(name)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    name : string\n"\
	"        Unique name of figure\n");


//position
PyDoc_STRVAR(position_doc,
	"object position\n"\
	"\n"\
	"    type :  pyvmath.vec3 : (x,y,z)\n"\
	"    read / write");

//rotation
PyDoc_STRVAR(rotation_doc,
	"object rotation\n"\
	"\n"\
	"    type :  pyvmath.quat : (x,y,z,w)\n"\
	"    read / write");

//scale
PyDoc_STRVAR(scale_doc,
	"object scale \n"\
	"\n"\
	"    type :  pyvmath.vec3 : (x,y,z)\n"\
	"    read / write");

//numJoints
PyDoc_STRVAR(numJoints_doc,
	"Number of joints \n"\
	"\n"\
	"    type :  int\n"\
	"    read only");

//numMeshes
PyDoc_STRVAR(numMeshes_doc,
	"Number of meshes \n"\
	"\n"\
	"    type :  int\n"\
	"        read only");

//numMaterials
PyDoc_STRVAR(numMaterials_doc,
	"Number of materials \n"\
	"\n"\
	"    type :  int\n"\
	"        read only");


//addMaterial
PyDoc_STRVAR(addMaterial_doc,
	"Add new material object to the editableFigure\n"\
	"\n"\
	"editableFigure.addMaterial(materialName, shaderGen)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    materialName : string\n"\
	"        Unique name of material\n"\
	"    shaderGen : igeCore.shaderGenerator\n"\
	"        shaderGenerator object\n"\
	"Notes\n"\
	"----------\n"\
	"    If the material name is already registered, \n"\
	"    discard the old one and register again.\n"\
	"    Update mesh information if the mesh already refers");

//addMesh
PyDoc_STRVAR(addMesh_doc,
	"Add new mesh object to the editableFigure\n"\
	"\n"\
	"editableFigure.addMesh(meshName, materialName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Unique name of mesh\n"\
	"    materialName : string\n"\
	"        Registered material names that you want to assign to the mesh");



//setVertexElements
PyDoc_STRVAR(setVertexElements_doc,
	"Set vertex data to the mesh object\n"\
	"\n"\
	"editableFigure.setVertexElements(meshName or index, attributeType, data, offset)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add vertex information\n"\
	"    index : int\n"\
	"        Registered mesh index to which you want to add vertex information\n"\
	"    attributeType : int\n"\
	"        Vertex element type\n"\
	"        One of the following values\n"\
	"\n"\
	"        igeCore.ATTRIBUTE_ID_POSITION\n"\
	"        igeCore.ATTRIBUTE_ID_NORMAL\n"\
	"        igeCore.ATTRIBUTE_ID_TANGENT\n"\
	"        igeCore.ATTRIBUTE_ID_BINORMAL\n"\
	"        igeCore.ATTRIBUTE_ID_UV0\n"\
	"        igeCore.ATTRIBUTE_ID_UV1\n"\
	"        igeCore.ATTRIBUTE_ID_UV2\n"\
	"        igeCore.ATTRIBUTE_ID_UV3\n"\
	"        igeCore.ATTRIBUTE_ID_COLOR\n"\
	"        igeCore.ATTRIBUTE_ID_BLENDINDICES\n"\
	"        igeCore.ATTRIBUTE_ID_BLENDWEIGHT\n"\
	"        igeCore.ATTRIBUTE_ID_PSIZE\n"\
	"    data : tuple or list\n"\
	"        Vertex elements\n"\
	"    offset : int (optional)\n"\
	"        Start position to add vertex elements\n"\
	"Examples\n"\
	"----------\n"\
	"    efig.addMesh('meshA', 'materialA');\n"\
	"    points = ((-1, 1, 0), (1, 1, 0), (-1, -1, 0), (1, -1, 0))\n"\
	"    efig.setVertexElements('meshA', igeCore.ATTRIBUTE_ID_POSITION, points");

//getVertexElements
PyDoc_STRVAR(getVertexElements_doc,
	"Get vertex data from the mesh object\n"\
	"\n"\
	"editableFigure.getVertexElements(meshName or index, attributeType, offset, size)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add vertex information\n"\
	"    index : int\n"\
	"        Registered mesh index No to which you want to get vertex information\n"\
	"    attributeType : int\n"\
	"        Vertex element type\n"\
	"        One of the following values\n"\
	"\n"\
	"        igeCore.ATTRIBUTE_ID_POSITION\n"\
	"        igeCore.ATTRIBUTE_ID_NORMAL\n"\
	"        igeCore.ATTRIBUTE_ID_TANGENT\n"\
	"        igeCore.ATTRIBUTE_ID_BINORMAL\n"\
	"        igeCore.ATTRIBUTE_ID_UV0\n"\
	"        igeCore.ATTRIBUTE_ID_UV1\n"\
	"        igeCore.ATTRIBUTE_ID_UV2\n"\
	"        igeCore.ATTRIBUTE_ID_UV3\n"\
	"        igeCore.ATTRIBUTE_ID_COLOR\n"\
	"        igeCore.ATTRIBUTE_ID_BLENDINDICES\n"\
	"        igeCore.ATTRIBUTE_ID_BLENDWEIGHT\n"\
	"        igeCore.ATTRIBUTE_ID_PSIZE\n"\
	"    offset : int (optional)\n"\
	"        Start position to get vertex elements\n"\
	"        0 if omitted.\n"\
	"    size : int (optional)\n"\
	"        Numver of vertex elements to get.\n"\
	"        If omitted, all data after the offset.\n");


//setTriangles
PyDoc_STRVAR(setTriangles_doc,
	"Set traiangle index data to the mesh object\n"\
	"\n"\
	"editableFigure.setTriangles(meshName or index, data, offset)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add triangle index\n"\
	"    index : string\n"\
	"        Registered mesh index to which you want to add triangle index\n"\
	"    data : tuple or list\n"\
	"        Triangle index\n"\
	"    offset : int (optional)\n"\
	"        Start triangle position to add vertex elements\n"\
	"Examples\n"\
	"----------\n"\
	"    #create rectangle\n"\
	"    efig.addMesh('meshA', 'materialA');\n"\
	"    points = ((-1, 1, 0), (1, 1, 0), (-1, -1, 0), (1, -1, 0))\n"\
	"    efig.setVertexElements('meshA', igeCore.ATTRIBUTE_ID_POSITION, points)\n"\
	"    tris = (0, 2, 1, 1, 2, 3)\n"\
	"    efig.setTriangles('meshA', tris);");


//addJoint
PyDoc_STRVAR(addJoint_doc,
	"Add joint object to the editableFigure\n"\
	"\n"\
	"editableFigure.addJoint(jointName, scaleCompensate, parentJointName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    jointName : string\n"\
	"    scaleCompensate : bool(optional)\n"\
	"        When it is True, it does not inherit the scale value of the parent joint\n"\
	"    parentJointName : string (optional)\n"\
	"        Parent joint name");

//setVertexPtr
PyDoc_STRVAR(setVertexPtr_doc,
	"Set formatted vertex data to the mesh.\n"\
	"\n"\
	"editableFigure.setVertexPtr(meshName or index, ptr, numVerts, attributes)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add vertex information\n"\
	"    index : string\n"\
	"        Registered mesh index to which you want to add vertex information\n"\
	"    ptr : void* \n"\
	"        Pointer of vertices\n"\
	"    numVerts : long\n"\
	"        Number of vertices\n"\
	"    attributes : tuple\n"\
	"        Vertex format description(ID, size, normalize, type)");

//setTrianglePtr
PyDoc_STRVAR(setTrianglePtr_doc,
	"Set formatted triangle index list data to the mesh.\n"\
	"\n"\
	"editableFigure.setTrianglePtr(meshName or index, ptr, numTriangles, dataSize)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add triangle index\n"\
	"    index : int\n"\
	"        Registered mesh index to which you want to add triangle index\n"\
	"    ptr\n"\
	"        Pointer of indices\n"\
	"    numTriangles long\n"\
	"        Number of triangles\n"\
	"    dataSize : int\n"\
	"        data byte size(2 or 4)");

//addDrawSet
PyDoc_STRVAR(addDrawSet_doc,
	"Set drawSet to the mesh\n"\
	"\n"\
	"editableFigure.addDrawSet(meshName or index, offset, size)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add drawSet\n"\
	"    index : int\n"\
	"        Registered mesh index to which you want to add drawSet\n"\
	"    offset : int\n"\
	"        Offset of tryangle\n"\
	"    size : int\n"\
	"        Num triangles");


//setDrawSetRenderState
PyDoc_STRVAR(setDrawSetRenderState_doc,
	"Set render state for drawSet\n"\
	"\n"\
	"editableFigure.setDrawSetRenderState(meshName or index, drawSetNo, paramName, value1, value2, value3, value4)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    meshName : string\n"\
	"        Registered mesh name to which you want to add drawSet\n"\
	"    index : int\n"\
	"        Registered mesh index to which you want to add drawSet\n"\
	"    drawSetNo : int\n"\
	"        Order added by AddDrawSet()\n"\
	"    paramName : string\n"\
	"        Render states name\n"\
	"        The available renderstate is the same as setMaterialRenderState\n"\
	"    value1 : float or int or bool\n"\
	"        Render state parameter\n"\
	"    value2 : float or int or bool\n"\
	"        Render state parameter\n"\
	"    value3 : float or int or bool\n"\
	"        Render state parameter\n"\
	"    value4 : float or int or bool\n"\
	"        Render state parameter");


//setMaterialParam
PyDoc_STRVAR(setMaterialParam_doc,
	"Set material parameters\n"\
	"\n"\
	"editableFigure.setMaterialParam(materialName, paramName, paramValue)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	materialName : string\n"\
	"		Name of the material for which you want to set parameters\n"\
	"	paramName : string\n"\
	"		Name of the parameter to pass to the shader\n"\
	"		SystemAlpha			Float\n"\
	"		DiffuseColor		Float4\n"\
	"		Bumpiness			Float\n"\
	"		SpecularParams		Float2\n"\
	"		SpecularStrength	Float\n"\
	"		SpecularPower		Float\n"\
	"		ReflectionStrength	Float\n"\
	"		FresnelMin			Float\n"\
	"		FresnelExp			Float\n"\
	"		SurfaceColor		Float3\n"\
	"		FuzzySpecColor		Float3\n"\
	"		SubColor			Float3\n"\
	"		RollOff				Float\n"\
	"		VelvetStrength		Float\n"\
	"		OverlayBumpiness	Float\n"\
	"		OverlayStrength		Float\n"\
	"		GlassParams			Float3\n"\
	"		GlassStrength		Float\n"\
	"		Curvature			Float\n"\
	"		UpsideDown			Float\n"\
	"		ParallaxBias		Float2\n"\
	"		ParallaxBiasX		Float\n"\
	"		ParallaxBiasY		Float\n"\
	"		Time				Float\n"\
	"		ScrollSpeedSet1		Float2\n"\
	"		ScrollSpeedSet2		Float2\n"\
	"		ScrollSpeedSet3		Float2\n"\
	"		OffsetSet1			Float2\n"\
	"		OffsetSet2			Float2\n"\
	"		DistortionStrength	Float\n"\
	"		AlphaRef			Float\n"\
	"		CoverAddition		Float\n"\
	"		LightMapPower		Float\n"\
	"		LightMapStrength	Float\n"\
	"		Saturation			Float\n"\
	"		OffsetSet3			Float2\n"\
	"		Fat					Float\n"\
	"		RotationSet1		Float\n"\
	"		RotationSet2		Float\n"\
	"		RotationSet3		Float\n"\
	"		ScaleSet1			Float2\n"\
	"		ScaleSet2			Float2\n"\
	"		ScaleSet3			Float2\n"\
	"		ZBias				Float\n"\
	"		InnerGrowAValue		Float3\n"\
	"		InnerGrowBValue		Float3\n"\
	"		LocalIntensity		Float\n"\
	"		InnerGrowAColor		Float3\n"\
	"		InnerGrowBColor		Float3\n"\
	"		SepiaStrength		Float\n"\
	"		ViewOffset			Float3\n"\
	"		ColorSamplerScale	Float2\n"\
	"		BloomLimit			Float\n"\
	"		BlurOffset			Float2\n"\
	"		BloomScale			Float\n"\
	"		ShadowDensity		Float\n"\
	"		DofParams			Float4\n"\
	"		DofOptions			Float4\n"\
	"		DofGrayScale		Float\n"\
	"		LightColor			Float4\n"\
	"		MulColor			Float4\n"\
	"		ScreenVertexSize	Float4\n"\
	"		ColorTextureSize	Float\n"\
	"    paramValue\n"\
	"        Tuple of value pass to the shader");

//setMaterialParamTexture
PyDoc_STRVAR(setMaterialParamTexture_doc,
	"Set texture material parameters\n"\
	"\n"\
	"editableFigure.setMaterialParam(materialName, samplerName, textureName, pixel, width, height, wrap_s, wrap_t, minfilter, magfilter, mipfilter)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	materialName : string\n"\
	"		Name of the material for which you want to set parameters\n"\
	"	samplerName : string\n"\
	"		Name of the sampler parameter to pass to the shader\n"\
	"		ColorSampler\n"\
	"		NormalSampler\n"\
	"		EnvSampler\n"\
	"		CLUTSampler\n"\
	"		LightSampler\n"\
	"		OverlayColorSampler\n"\
	"		OverlayNormalSampler\n"\
	"		EnvsSampler\n"\
	"		GlowACLUTSampler\n"\
	"		GlowBCLUTSampler\n"\
	"		ColorCorrectionSampler\n"\
	"		BlurredSampler\n"\
	"		DepthSampler\n"\
	"    textureName : string (optional)\n"\
	"        Texture file path\n"\
	"    pixel : binary (optional)\n"\
	"        binary array of rgba 32bit format image\n"\
	"        textureName and pixel + width, height can not be specified at the same time, \n"\
	"        textureName takes precedence\n"\
	"    width : int (optional)\n"\
	"        pixel image width\n"\
	"    height : int  (optional)\n"\
	"        pixel image height\n"\
	"    wrap_s : int  (optional)\n"\
	"        Texture horizontal wrap mode of sampler state\n"\
	"        The following values are available\n"\
	"        igeCore.SAMPLERSTATE_WRAP <- (default)\n"\
	"        igeCore.SAMPLERSTATE_MIRROR\n"\
	"        igeCore.SAMPLERSTATE_CLAMP\n"\
	"        igeCore.SAMPLERSTATE_BORDER\n"\
	"    wrap_t : int  (optional)\n"\
	"        Texture vertical wrap mode of sampler state\n"\
	"        The content is the same as wrap_s\n"\
	"    minfilter : int  (optional)\n"\
	"        Sampling method when expanding the texture\n"\
	"        The following values are available\n"\
	"        igeCore.SAMPLERSTATE_LINEAR <- (default)\n"\
	"        igeCore.SAMPLERSTATE_NEAREST\n"\
	"    magfilter : int  (optional)\n"\
	"       Sampling method when reducing the texture\n"\
	"        The following values are available\n"\
	"        igeCore.SAMPLERSTATE_LINEAR\n"\
	"        igeCore.SAMPLERSTATE_NEAREST\n"\
	"        igeCore.SAMPLERSTATE_NEAREST_MIPMAP_NEAREST\n"\
	"        igeCore.SAMPLERSTATE_LINEAR_MIPMAP_NEAREST\n"\
	"        igeCore.SAMPLERSTATE_NEAREST_MIPMAP_LINEAR\n"\
	"        igeCore.SAMPLERSTATE_LINEAR_MIPMAP_LINEAR\n"\
	"    mipfilter : int  (optional)\n"\
	"        Not used now.");

//getMaterialParam
PyDoc_STRVAR(getMaterialParam_doc,
	"Get material parameters\n"\
	"\n"\
	"value = figure.getMaterialParam(materialName, paramName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	materialName : string (or int)\n"\
	"		string of the material name or integer of material index value.for which you want to get parameters\n"\
	"	paramName : string\n"\
	"		parameter name you want to get value.\n"\
	"		SystemAlpha				Float\n"\
	"		DiffuseColor			Float4\n"\
	"		Bumpiness				Float\n"\
	"		SpecularParams			Float2\n"\
	"		SpecularStrength		Float\n"\
	"		SpecularPower			Float\n"\
	"		ReflectionStrength		Float\n"\
	"		FresnelMin				Float\n"\
	"		FresnelExp				Float\n"\
	"		SurfaceColor			Float3\n"\
	"		FuzzySpecColor			Float3\n"\
	"		SubColor				Float3\n"\
	"		RollOff					Float\n"\
	"		VelvetStrength			Float\n"\
	"		OverlayBumpiness		Float\n"\
	"		OverlayStrength			Float\n"\
	"		GlassParams				Float3\n"\
	"		GlassStrength			Float\n"\
	"		Curvature				Float\n"\
	"		UpsideDown				Float\n"\
	"		ParallaxBias			Float2\n"\
	"		ParallaxBiasX			Float\n"\
	"		ParallaxBiasY			Float\n"\
	"		Time					Float\n"\
	"		ScrollSpeedSet1			Float2\n"\
	"		ScrollSpeedSet2			Float2\n"\
	"		ScrollSpeedSet3			Float2\n"\
	"		OffsetSet1				Float2\n"\
	"		OffsetSet2				Float2\n"\
	"		DistortionStrength		Float\n"\
	"		AlphaRef				Float\n"\
	"		CoverAddition			Float\n"\
	"		LightMapPower			Float\n"\
	"		LightMapStrength		Float\n"\
	"		Saturation				Float\n"\
	"		OffsetSet3				Float2\n"\
	"		Fat						Float\n"\
	"		RotationSet1			Float\n"\
	"		RotationSet2			Float\n"\
	"		RotationSet3			Float\n"\
	"		ScaleSet1				Float2\n"\
	"		ScaleSet2				Float2\n"\
	"		ScaleSet3				Float2\n"\
	"		ZBias					Float\n"\
	"		InnerGrowAValue			Float3\n"\
	"		InnerGrowBValue			Float3\n"\
	"		LocalIntensity			Float\n"\
	"		InnerGrowAColor			Float3\n"\
	"		InnerGrowBColor			Float3\n"\
	"		SepiaStrength			Float\n"\
	"		ViewOffset				Float3\n"\
	"		ColorSamplerScale		Float2\n"\
	"		BloomLimit				Float\n"\
	"		BlurOffset				Float2\n"\
	"		BloomScale				Float\n"\
	"		ShadowDensity			Float\n"\
	"		DofParams				Float4\n"\
	"		DofOptions				Float4\n"\
	"		DofGrayScale			Float\n"\
	"		LightColor				Float4\n"\
	"		MulColor				Float4\n"\
	"		ScreenVertexSize		Float4\n"\
	"		ColorTextureSize		Float\n"\
	"		ColorSampler			Texture\n"\
	"		NormalSampler			Texture\n"\
	"		EnvSampler				Texture\n"\
	"		CLUTSampler				Texture\n"\
	"		LightSampler			Texture\n"\
	"		OverlayColorSampler		Texture\n"\
	"		OverlayNormalSampler	Texture\n"\
	"		EnvsSampler				Texture\n"\
	"		GlowACLUTSampler		Texture\n"\
	"		GlowBCLUTSampler		Texture\n"\
	"		ColorCorrectionSampler	Texture\n"\
	"		BlurredSampler			Texture\n"\
	"		DepthSampler			Texture\n"\
	"Returns\n"\
	"-------\n"\
	"	value : float or igeVmath.vec2 or igeVmath.vec3 or igeVmath.vec4 or igeCore.texture\n"\
	"		Gets the value corresponding to the specified parameter name from the shader..\n");


//setMaterialRenderState
PyDoc_STRVAR(setMaterialRenderState_doc,
	"Set render state for material\n"\
	"\n"\
	"editableFigure.setMaterialRenderState(materialName, paramName, value1, value2, value3, value4)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    materialName : string\n"\
	"        Name of the material to which you want to add RenderState\n"\
	"    paramName : string\n"\
	"        Render state name\n"\
	"        The following names are currently available\n"\
	"        alpha_func\n"\
	"        alpha_test_enable\n"\
	"        blend_func\n"\
	"        blend_equation\n"\
	"        blend_enable\n"\
	"        cull_face\n"\
	"        cull_face_enable\n"\
	"        depth_func\n"\
	"        depth_mask\n"\
	"        depth_test_enable\n"\
	"        polygon_offset\n"\
	"        polygon_offset_fill_enable\n"\
	"        color_mask\n"\
	"        stencil_func\n"\
	"        stencil_mask\n"\
	"        stencil_op\n"\
	"        stencil_test_enable\n"\
	"        scissor_test_enable\n"\
	"        scissor\n"\
	"    value1 : float or int or bool\n"\
	"        Render state parameter\n"\
	"    value2 : float or int or bool\n"\
	"        Render state parameter\n"\
	"    value3 : float or int or bool\n"\
	"        Render state parameter\n"\
	"    value4 : float or int or bool\n"\
	"        Render state parameter");


//saveFigure
PyDoc_STRVAR(saveFigure_doc,
	"Export to figure format\n"\
	"\n"\
	"editableFigure.saveFigure(filePath, excludeAnime, excludeSkeleton)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    filePath : string\n"\
	"        Output file path\n"\
	"    excludeAnime : bool (optional)\n"\
	"        Do not include animation data\n"\
	"    excludeSkeleton : bool (optional)\n"\
	"        Do not include skeleton data\n"\
	"\n"\
	"Notes\n"\
	"----------\n"\
	"    The figure format is optimized, so\n"\
	"    It is more efficient to create a figure in advanceand then load it,\n"\
	"    rather than using Editable Figure directly");


//saveSkeleton
PyDoc_STRVAR(saveSkeleton_doc,
	"Export skeleton data\n"\
	"\n"\
	"under construction");

//saveAnimation
PyDoc_STRVAR(saveAnimation_doc,
	"Export animation data\n"\
	"\n"\
	"under construction");


//getTextureSource
PyDoc_STRVAR(getTextureSource_doc,
	"Get information about the textures being loaded\n"\
	"\n"\
	"texinfo = editableFigure.getTextureSource()\n"\
	"\n"\
	"Returns\n"\
	"-------\n"\
	"    texinfo : tuple(dict)\n"\
	"        'path' : file path\n"\
	"        'wrap' :wrap mode \n"\
	"        'normal' : normal map or not\n"\
	"Notes\n"\
	"----------\n"\
	"    wrap & normal can be used to improve the quality of data conversion.");

//replaceTextureSource
PyDoc_STRVAR(replaceTextureSource_doc,
	"Rewrites the texture information loaded inside\n"\
	"\n"\
	"editableFigure.replaceTextureSource(oldTex, newTex)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    oldTex : dict {'path':path, 'wrap':wrap, 'normal':normal}\n"\
	"    newTex : dict {'path':path, 'wrap':wrap, 'normal':normal} \n"\
	"Notes\n"\
	"----------\n"\
	"    Used when rewriting the texture file path");


//clear
PyDoc_STRVAR(clear_doc,
	"Reset all data\n"\
	"\n"\
	"editableFigure.clear()");


//clearMesh
PyDoc_STRVAR(clearMesh_doc,
	"Reset all mesh data\n"\
	"\n"\
	"editableFigure.clearMesh()");


//setParentJoint
PyDoc_STRVAR(setParentJoint_doc,
	"Set the joint of another figure \n"\
	"(or EditableFigure) as the parent joint.\n"\
	"\n"\
	"editableFigure.setParentJoint(figure, jointName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    figure : figure\n"\
	"        Parent figure or EditableFigure\n"\
	"    jointName : string\n"\
	"        Parent joint name\n");

//getJoint
PyDoc_STRVAR(getJoint_doc,
	"Get the value of joint after animation calculation in world coordinate system\n"\
	"\n"\
	"position, rotation, scale = editableFigure.getJoint(jointName or jointIndex, space)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    jointName : string\n"\
	"        The name of the joint you want to get\n"\
	"    jointIndex : int\n"\
	"        The index of the joint you want to get\n"\
	"	space : int (optional)	\n"\
	"		Coordinate system of the value to get\n	"\
	"       (core.WorldSpace or core.LocalSpace)\n	"\
	"Returns\n"\
	"-------\n"\
	"    position : igeVmath.Vec3\n"\
	"        position of joint\n"\
	"    rotation : igeVmath.Quat\n"\
	"        rotation of joint\n"\
	"    scale : igeVmath.Vec3\n"\
	"        scale of joint");


//setJoint
PyDoc_STRVAR(setJoint_doc,
	"Set the value of joint in world coordinate system\n"\
	"\n"\
	"editableFigure.setJoint(jointName or jointIndex, position, rotation, scale, space)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    jointName : string\n"\
	"        The name of the joint you want to get\n"\
	"    jointIndex : int\n"\
	"        The index of the joint you want to get\n"\
	"    position : igeVmath.Vec3 (optional)\n"\
	"        position of joint\n"\
	"    rotation : igeVmath.Quat (optional)\n"\
	"        rotation of joint\n"\
	"    scale : igeVmath.Vec3 (optional)\n"\
	"        scale of joint\n"\
	"	space : int (optional)	\n"\
	"		Coordinate system of the value to get\n	"\
	"       (core.WorldSpace or core.LocalSpace)\n	");


//jointNameToIndex
PyDoc_STRVAR(jointNameToIndex_doc,
	"Get Joint index from Joint name\n"\
	"\n"\
	"jointIndex = editablefigure.jointNameToIndex(jointName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    jointName : string\n"\
	"        The name of the joint you want to get\n"\
	"Returns\n"\
	"-------\n"\
	"	jointIndex : int\n"\
	"		The index of joint\n"\
	"		If there is no parent joint (root joint), -1 is returned.");

//getJointParentIndex
PyDoc_STRVAR(getJointParentIndex_doc,
	"Returns the index of the parent joint of the specified joint\n"\
	"\n"\
	"parentindex = figure.getJointParentIndex(jointName or index)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	jointName : string\n"\
	"		The name of the joint\n"\
	"	index : int\n"\
	"		The index of the joint\n"\
	"Returns\n"\
	"-------\n"\
	"	parentindex : int\n"\
	"		The parent joint index\n");



//mergeMesh
PyDoc_STRVAR(mergeMesh_doc,
	"Merge multiple meshes into one to increase drawing efficiency.\n"\
	"\n"\
	"editableFigure.mergeMesh()\n"\
	"\n");


//getAABB
PyDoc_STRVAR(getAABB_doc,
	"Calclate axis aligned bounding box\n"\
	"\n"\
	"min, max, = editableFigure.getMeshAABB(name or index)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    name : string  (optional)\n"\
	"        The name of the mesh to calclate AABB\n"\
	"    index : int  (optional)\n"\
	"        Index number of mesh to calclate AABB\n"\
	"        \n"\
	"        If the parameter is not specified or -1 is specified, \n"\
	"        the AABB of the entire figure is calculated. \n"\
	"Returns\n"\
	"-------\n"\
	"    min : vec3\n"\
	"        minimum edge of bounding box\n"\
	"    max : vec3\n"\
	"        maximum edge of bounding box");

//setMeshAlpha
PyDoc_STRVAR(setMeshAlpha_doc,
	"Set mesh alpha value.\n"\
	"\n"\
	"if you set alpha valie is less than 1.0 mesh is going to transparent.\n	"\
	"you set alpha valie is 0, mesh rendaring is skipped.\n	"\
	"\n"\
	"editableFigure.setMeshAlpha(meshName, alpha)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	meshName : string (or int)\n"\
	"		string of mesh name or int of mesh index to set alpha value.\n	"\
	"	alpha : float\n"\
	"		alpha value.\n"\
	"\n");

//getMeshAlpha
PyDoc_STRVAR(getMeshAlpha_doc,
	"Get mesh alpha value.\n"\
	"\n"\
	"alpha = editableFigure.setMeshAlpha(meshName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	meshName : string (or int)\n"\
	"		string of mesh name or int of mesh index to set alpha value.\n	"\
	"Returns\n"\
	"-------\n"\
	"	alpha : float\n"\
	"		alpha values.\n");

//getMeshWireframe
PyDoc_STRVAR(getMeshWireframe_doc,
	"Get whether the specified mesh is in wireframe rendering mode.\n"\
	"\n"\
	"mode = editableFigure.getMeshWireframe(meshName)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	meshName : string (or int)\n"\
	"		string of mesh name or int of mesh index to get the value.\n	"\
	"Returns\n"\
	"-------\n"\
	"	mode : bool\n"\
	"		wireframe mode.\n");

//setMeshWireframe
PyDoc_STRVAR(setMeshWireframe_doc,
	"Set whether the specified mesh is in wireframe rendering mode.\n"\
	"\n"\
	"This function can only set an incorrect wireframe.\n"\
	"It's just for debug purpose.\n"\
	"\n"\
	"editableFigure.setMeshWireframe(meshName, mode)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"	meshName : string (or int)\n"\
	"		string of mesh name or int of mesh index to set value.\n	"\
	"	mode : bool\n"\
	"		wireframe mode.\n"\
	"\n");

//getJointName
PyDoc_STRVAR(getJointName_doc,
	"Get joint name.\n"\
	"\n"\
	"name = editableFigure.getJointName(index)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    index : int  (optional)\n"\
	"        Index number of joint\n"\
	"Returns\n"\
	"-------\n"\
	"    name : string\n"\
	"        joint name	\n"\
	"        None if the index is out of range");

//getMeshName
PyDoc_STRVAR(getMeshName_doc,
	"Get mesh name.\n"\
	"\n"\
	"name = editableFigure.getMeshName(index)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    index : int  (optional)\n"\
	"        Index number of mesh\n"\
	"Returns\n"\
	"-------\n"\
	"    name : string\n"\
	"        mesh name	\n"\
	"        None if the index is out of range");

//getMaterialName
PyDoc_STRVAR(getMaterialName_doc,
	"Get material name.\n"\
	"\n"\
	"name = editableFigure.getMaterialName(index)\n"\
	"\n"\
	"Parameters\n"\
	"----------\n"\
	"    index : int  (optional)\n"\
	"        Index number of material\n"\
	"Returns\n"\
	"-------\n"\
	"    name : string\n"\
	"        material name	\n"\
	"        None if the index is out of range");
