import{ae as t,af as p,ai as e}from"./index-175d32d0.js";import a from"./FeatureLayerView2D-97232ce8.js";import"./Container-ca0c82d8.js";import"./parser-be52f54c.js";import"./definitions-e9823d3c.js";import"./enums-74e97557.js";import"./TextureDescriptor-d0f0e66d.js";import"./FeatureEffect-5be74af9.js";import"./jsonUtils-82684178.js";import"./Query-91daeb60.js";import"./Field-b346df3f.js";import"./fieldType-0ef39ec5.js";import"./FeatureSet-abad50cc.js";import"./LayerView-0bfae0f3.js";import"./schemaUtils-5e91e5e3.js";import"./sql-d95c95ff.js";import"./diffUtils-1e0b45c5.js";import"./labelingInfo-ffafbf0b.js";import"./labelUtils-358af0bc.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-a54641ba.js";import"./color-5599f865.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-2b389eab.js";import"./MaterialKey-532bc99f.js";import"./heatmapUtils-4fba0b55.js";import"./vec4f64-aa64c7e9.js";import"./visualVariablesUtils-bc0c668d.js";import"./ExpandedCIM-652d49f1.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-91ef8d14.js";import"./floatRGBA-660570aa.js";import"./featureFlags-a084cf3d.js";import"./clusterUtils-64f88ebd.js";import"./SizeVariable-41a3e64d.js";import"./colorRamps-f4ee9bc5.js";import"./LegendOptions-8e12359c.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-349f6f20.js";import"./util-63fe79d4.js";import"./commonProperties-1c6cac45.js";import"./ElevationInfo-ed295995.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-431feddd.js";import"./RefreshableLayerView-0110a396.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const or=o;export{or as default};
