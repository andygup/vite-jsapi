import{af as e,ag as o,ah as p}from"./index-4d2185ff.js";import m from"./FeatureLayerView2D-f5172e47.js";import"./Container-3752ec43.js";import"./definitions-3ddd14a8.js";import"./enums-64ab819c.js";import"./Texture-b3ddd51a.js";import"./LayerView-11ccad0d.js";import"./schemaUtils-d0abdcea.js";import"./color-c7e17294.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-bc52866b.js";import"./MaterialKey-1969c225.js";import"./visualVariablesUtils-24d7e406.js";import"./ExpandedCIM-42d1fd7f.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-9f57223b.js";import"./floatRGBA-9e331dff.js";import"./util-ca5a3e58.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-6bcea95c.js";import"./RefreshableLayerView-50008a44.js";const s=t=>{let r=class extends t{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return e([o()],r.prototype,"layer",void 0),e([o({readOnly:!0})],r.prototype,"availableFields",null),r=e([p("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends s(m){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=e([p("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const j=i;export{j as default};
