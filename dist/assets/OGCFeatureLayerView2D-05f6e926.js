import{ae as t,af as o,ai as p}from"./index-37fc1c1b.js";import a from"./FeatureLayerView2D-0967700a.js";import"./Container-b9d7ae34.js";import"./parser-395fa391.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-b97332df.js";import"./FeatureEffect-227c642a.js";import"./jsonUtils-85e9bcb0.js";import"./Query-91876b14.js";import"./Field-b21b898d.js";import"./fieldType-60e0d461.js";import"./FeatureSet-c0217d0c.js";import"./LayerView-244ae284.js";import"./schemaUtils-5cf89204.js";import"./sql-07ab1f45.js";import"./diffUtils-7b235f3e.js";import"./labelingInfo-7fe41727.js";import"./labelUtils-41a42c6e.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-08626db6.js";import"./color-af3426c7.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./utils-a49cffda.js";import"./MaterialKey-c607442c.js";import"./heatmapUtils-f0d5531e.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-a6f5685f.js";import"./ExpandedCIM-76d1f105.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-fa03eddf.js";import"./floatRGBA-392b8860.js";import"./featureFlags-ec64a754.js";import"./clusterUtils-6e1a0568.js";import"./SizeVariable-9c9109a6.js";import"./colorRamps-91762876.js";import"./LegendOptions-bd430cc4.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-03d7ac5d.js";import"./util-df65e226.js";import"./commonProperties-0728d359.js";import"./ElevationInfo-37007c95.js";import"./floorFilterUtils-0e56040f.js";import"./popupUtils-df5166bb.js";import"./RefreshableLayerView-4bca454a.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([o()],r.prototype,"layer",void 0),t([o({readOnly:!0})],r.prototype,"availableFields",null),r=t([p("esri.views.layers.OGCFeatureLayerView")],r),r};let e=class extends s(a){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};e=t([p("esri.views.2d.layers.OGCFeatureLayerView2D")],e);const sr=e;export{sr as default};
