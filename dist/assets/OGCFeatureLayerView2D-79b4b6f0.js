import{ab as e,ac as o,ad as p}from"./index-0265f5b0.js";import m from"./FeatureLayerView2D-349dfe06.js";import"./Container-e5615892.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-618a0a5f.js";import"./LayerView-6cf732bb.js";import"./schemaUtils-9cee2cfd.js";import"./color-4853d80b.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-7f7f27e3.js";import"./MaterialKey-43000965.js";import"./visualVariablesUtils-1006a8fd.js";import"./ExpandedCIM-2378cbd8.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-5a38db0c.js";import"./floatRGBA-d5a14398.js";import"./util-66bf9f6b.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-ed848e63.js";import"./RefreshableLayerView-b05cb620.js";const s=t=>{let r=class extends t{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return e([o()],r.prototype,"layer",void 0),e([o({readOnly:!0})],r.prototype,"availableFields",null),r=e([p("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends s(m){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=e([p("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const $=i;export{$ as default};
