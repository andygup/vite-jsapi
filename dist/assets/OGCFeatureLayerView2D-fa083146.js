import{ae as t,af as o,ai as p}from"./index-06bb4acc.js";import a from"./FeatureLayerView2D-ad6b76ea.js";import"./Container-1a24548e.js";import"./parser-00347674.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-767677c5.js";import"./FeatureEffect-270b443e.js";import"./jsonUtils-5ecc899c.js";import"./Query-844c730b.js";import"./Field-26f45eb4.js";import"./fieldType-c7a04ebf.js";import"./FeatureSet-729dc7e5.js";import"./LayerView-73b5e8d9.js";import"./schemaUtils-a6bf3c74.js";import"./sql-4c5205a0.js";import"./diffUtils-c5ae4060.js";import"./labelingInfo-58c23223.js";import"./labelUtils-cc8bf057.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-9b46ae66.js";import"./color-8e5f8af9.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./utils-0743b8a6.js";import"./MaterialKey-434335b3.js";import"./heatmapUtils-97c04762.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-6f58ca97.js";import"./ExpandedCIM-027963af.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-ba99c963.js";import"./floatRGBA-5c78bdf6.js";import"./featureFlags-21ce0d4c.js";import"./clusterUtils-607a2369.js";import"./SizeVariable-c3ec0bb9.js";import"./colorRamps-897fba1f.js";import"./LegendOptions-354afaa6.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-15108784.js";import"./util-9c29c62a.js";import"./commonProperties-71483d7b.js";import"./ElevationInfo-dc27b5b8.js";import"./floorFilterUtils-0e56040f.js";import"./popupUtils-b15b09bb.js";import"./RefreshableLayerView-f997a78e.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([o()],r.prototype,"layer",void 0),t([o({readOnly:!0})],r.prototype,"availableFields",null),r=t([p("esri.views.layers.OGCFeatureLayerView")],r),r};let e=class extends s(a){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};e=t([p("esri.views.2d.layers.OGCFeatureLayerView2D")],e);const sr=e;export{sr as default};
