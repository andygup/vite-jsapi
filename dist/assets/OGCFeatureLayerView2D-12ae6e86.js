import{ae as t,af as o,ai as p}from"./index-0ea7d266.js";import a from"./FeatureLayerView2D-f80b9ad4.js";import"./Container-7deba39b.js";import"./parser-378b4989.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-86971943.js";import"./FeatureEffect-afe82aad.js";import"./jsonUtils-16a3028b.js";import"./Query-0072957d.js";import"./Field-da71a869.js";import"./fieldType-2fab90c6.js";import"./FeatureSet-492be28c.js";import"./LayerView-aa08b165.js";import"./schemaUtils-b7aedaaa.js";import"./sql-a6f6c9bf.js";import"./diffUtils-b0771538.js";import"./labelingInfo-00dd8611.js";import"./labelUtils-6d9ec360.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-f828afa2.js";import"./color-24f75376.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./utils-b2ef2fd1.js";import"./MaterialKey-61df849d.js";import"./heatmapUtils-47f2d9fb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-967bb046.js";import"./ExpandedCIM-dcae6e07.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-07d350f3.js";import"./floatRGBA-79634f69.js";import"./featureFlags-d265949d.js";import"./clusterUtils-6c781da2.js";import"./SizeVariable-0f7c14c6.js";import"./colorRamps-fd437087.js";import"./LegendOptions-360b2985.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-bc57f38a.js";import"./util-77bd07f6.js";import"./commonProperties-cee41848.js";import"./ElevationInfo-56c656df.js";import"./floorFilterUtils-0e56040f.js";import"./popupUtils-c0f44195.js";import"./RefreshableLayerView-9a042869.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([o()],r.prototype,"layer",void 0),t([o({readOnly:!0})],r.prototype,"availableFields",null),r=t([p("esri.views.layers.OGCFeatureLayerView")],r),r};let e=class extends s(a){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};e=t([p("esri.views.2d.layers.OGCFeatureLayerView2D")],e);const sr=e;export{sr as default};
