import{ae as t,af as p,ai as e}from"./index-65afe59f.js";import a from"./FeatureLayerView2D-21524566.js";import"./Container-e8893995.js";import"./parser-8554880e.js";import"./definitions-e9823d3c.js";import"./enums-74e97557.js";import"./TextureDescriptor-9f6b1d53.js";import"./FeatureEffect-8de6067b.js";import"./jsonUtils-7e0542f0.js";import"./Query-380d10a1.js";import"./Field-f17f32a3.js";import"./fieldType-d8edb871.js";import"./FeatureSet-725ad5ad.js";import"./LayerView-c66ee5b5.js";import"./schemaUtils-061a64ca.js";import"./sql-c4c85944.js";import"./diffUtils-0f0e8cfe.js";import"./labelingInfo-a25619a7.js";import"./labelUtils-ec59d2a3.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-15c906c8.js";import"./color-0ea5ee36.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-e7939558.js";import"./MaterialKey-d4d21a67.js";import"./heatmapUtils-1ed1bbca.js";import"./vec4f64-aa64c7e9.js";import"./visualVariablesUtils-79328d8b.js";import"./ExpandedCIM-04e76692.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ce722d8e.js";import"./floatRGBA-4ec8974c.js";import"./featureFlags-acda3469.js";import"./clusterUtils-a342a95a.js";import"./SizeVariable-e7f3c0e2.js";import"./colorRamps-08b57831.js";import"./LegendOptions-d5bf6b73.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-00939dab.js";import"./util-6e5d3a25.js";import"./commonProperties-605b6017.js";import"./ElevationInfo-926fbbdf.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-08cb0583.js";import"./RefreshableLayerView-67372cbe.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const or=o;export{or as default};
