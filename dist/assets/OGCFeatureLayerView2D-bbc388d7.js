import{e as t,y as p,n as m}from"./cast-daef7652.js";import"./Error-bd05b442.js";import"./ensureType-fa162cfc.js";import"./typedArrayUtil-2bcf3cee.js";import"./string-3d0ebcd3.js";import a from"./FeatureLayerView2D-47d8df4d.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-29120e0a.js";import"./Graphic-cf98a91a.js";import"./geometry-4b789d90.js";import"./Extent-7f29a1bb.js";import"./Polyline-c56eca9b.js";import"./typeUtils-d7b057b5.js";import"./jsonMap-a9c94baf.js";import"./PopupTemplate-343851b8.js";import"./Clonable-f249bc0f.js";import"./Collection-e2259e32.js";import"./Evented-d8fc77f0.js";import"./SimpleObservable-7c382d01.js";import"./fieldUtils-021fea8a.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-87969052.js";import"./enumeration-e46f3fd4.js";import"./number-53937715.js";import"./locale-30120714.js";import"./Identifiable-e3a09883.js";import"./symbols-fce921a6.js";import"./CIMSymbol-d0e12b74.js";import"./Symbol-f45dc441.js";import"./Color-2245b966.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-94fd2faa.js";import"./aaBoundingBox-6fbd5972.js";import"./request-c2b0ab45.js";import"./persistableUrlUtils-7e525def.js";import"./collectionUtils-09289d8f.js";import"./Portal-ac0dca24.js";import"./Loadable-7c89bd10.js";import"./Promise-088a0e17.js";import"./PortalGroup-f3dee6d8.js";import"./PortalUser-cdb4116b.js";import"./jsonUtils-8bd548d9.js";import"./reactiveUtils-3c1b281e.js";import"./utils-6c2afd8b.js";import"./mat3f32-d3d088e8.js";import"./parser-e6166e34.js";import"./mat4-62d5e6a4.js";import"./enums-4ca4641f.js";import"./MaterialKey-b4e71fc3.js";import"./Utils-c2939f8d.js";import"./enums-8bf08d0c.js";import"./enums-64ab819c.js";import"./Texture-6f3336a0.js";import"./context-util-cb6895d7.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./FeatureReductionLayer-d7ad3b5e.js";import"./BlendLayer-1b58b599.js";import"./TimeExtent-84882adb.js";import"./Query-e996b56b.js";import"./Field-0ac3c9d2.js";import"./fieldType-4ec45634.js";import"./UniqueValueRenderer-83bbe8b7.js";import"./LegendOptions-54bbb61a.js";import"./diffUtils-58fbd195.js";import"./colorRamps-3439e132.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-06ced1a6.js";import"./lengthUtils-5215af35.js";import"./unitUtils-43365914.js";import"./jsonUtils-f34afef9.js";import"./styleUtils-84c98663.js";import"./jsonUtils-9c255ec7.js";import"./DictionaryLoader-d07ab55e.js";import"./LRUCache-36379339.js";import"./MemCache-5bd66e9c.js";import"./deprecate-99da8bee.js";import"./OperationalLayer-7b681a2a.js";import"./ElevationInfo-4e7fad68.js";import"./labelingInfo-f1d3ed98.js";import"./labelUtils-4072dca9.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureSet-9ea00c01.js";import"./LayerView-8f28f320.js";import"./HandleOwner-78d35324.js";import"./schemaUtils-24d4fed0.js";import"./LayerFloorInfo-689deffc.js";import"./visualVariablesUtils-b572c1c3.js";import"./createSymbolSchema-deb469a5.js";import"./ExpandedCIM-f5d9de07.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-45a7fe45.js";import"./mat2d-80bd93af.js";import"./vec2-f978aef8.js";import"./vec2f32-461e65a9.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-72167b00.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-305df8f3.js";import"./rendererUtils-2abcd901.js";import"./capabilities-320386e9.js";import"./util-7859c103.js";import"./TileStore-4c0c3140.js";import"./Queue-e839cb6a.js";import"./TileKey-ab325718.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./workers-125ce03d.js";import"./Connection-98b56925.js";import"./assets-4cb15247.js";import"./intl-afc91037.js";import"./messages-03a939ad.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-5aeaeb48.js";import"./RefreshableLayerView-1be6c989.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(e=>e.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([m("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([m("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const Ot=o;export{Ot as default};
