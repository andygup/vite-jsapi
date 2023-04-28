import{a as w,cF as A,s as n,j8 as v,a7 as F,V as h,dM as I,ah as E}from"./index-6e11f365.js";import{b as S}from"./normalizeUtils-6225a887.js";import{n as R,l as O}from"./EditBusLayer-ca17e49c.js";import{i as L,c as $}from"./infoFor3D-1eaade9a.js";import"./normalizeUtilsCommon-80217ab8.js";function b(e){return e&&e.applyEdits!=null}async function W(e,t,a,d={}){var l;let s;if(R(e)&&e.url)s=O(e.url,e.layerId,d.returnServiceEditsOption==="original-and-current-features");else{s=w(),s.promise.then(o=>{(o.addedFeatures.length||o.updatedFeatures.length||o.deletedFeatures.length||o.addedAttachments.length||o.updatedAttachments.length||o.deletedAttachments.length)&&e.emit("edits",o)});const i={result:s.promise};e.emit("apply-edits",i)}try{const{results:i,edits:o}=await U(e,t,a,d),r=u=>u.filter(c=>!c.error).map(A),p={edits:o,addedFeatures:r(i.addFeatureResults),updatedFeatures:r(i.updateFeatureResults),deletedFeatures:r(i.deleteFeatureResults),addedAttachments:r(i.addAttachmentResults),updatedAttachments:r(i.updateAttachmentResults),deletedAttachments:r(i.deleteAttachmentResults),exceededTransferLimit:!1};return(l=i.editedFeatureResults)!=null&&l.length&&(p.editedFeatures=i.editedFeatureResults),s.resolve(p),i}catch(i){throw s.reject(i),i}}async function U(e,t,a,d){var i,o,r,p,u,c;if(await e.load(),!b(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!v(e))throw new n(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:l}=await k(e,a,d);return(i=s.addFeatures)!=null&&i.length||(o=s.updateFeatures)!=null&&o.length||(r=s.deleteFeatures)!=null&&r.length||(p=s.addAttachments)!=null&&p.length||(u=s.updateAttachments)!=null&&u.length||(c=s.deleteAttachments)!=null&&c.length?{edits:s,results:await t.applyEdits(s,l)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function k(e,t,a){const d=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=e.infoFor3D!=null;if(!t||!d&&!s)throw new n(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const i=F(e);if(!i.data.isVersioned&&(a!=null&&a.gdbVersion))throw new n(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!i.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!i.editing.supportsGlobalId&&s)throw new n(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&s)throw new n(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const o={...a};if(o.rollbackOnFailureEnabled!=null||i.editing.supportsRollbackOnFailure||(o.rollbackOnFailureEnabled=!0),o.rollbackOnFailureEnabled===!1&&o.returnServiceEditsOption==="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&o.returnServiceEditsInSourceSR)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(o.returnServiceEditsInSourceSR&&o.returnServiceEditsOption!=="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&h.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&h.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&h.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!i.operations.supportsAdd)throw new n(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!i.operations.supportsUpdate)throw new n(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!i.operations.supportsDelete)throw new n(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(f),r.updateFeatures=r.updateFeatures.map(f),r.addAssetFeatures=[];const p=(a==null?void 0:a.globalIdUsed)||l;return r.addFeatures.forEach(u=>T(u,e,p)),r.updateFeatures.forEach(u=>D(u,e,p)),r.deleteFeatures.forEach(u=>B(u,e,p)),r.addAttachments.forEach(u=>m(u,e)),r.updateAttachments.forEach(u=>m(u,e)),l&&await V(r,e),{edits:await G(r),options:o}}function y(e,t,a){var d,s;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((d=t.capabilities)==null?void 0:d.data.supportsZ)===!1)throw new n(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((s=t.capabilities)==null?void 0:s.data.supportsM)===!1)throw new n(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function T(e,t,a){y(e,t,a)}function B(e,t,a){y(e,t,a)}function D(e,t,a){y(e,t,a);const d=F(t);if("geometry"in e&&e.geometry!=null&&!(d!=null&&d.editing.supportsGeometryUpdate))throw new n(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){var s;const{feature:a,attachment:d}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!d.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!d.data&&!d.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(d.data instanceof File&&d.data.name)&&!d.name)throw new n(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((s=t.capabilities)!=null&&s.editing.supportsUploadWithItemId)&&d.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof d.data=="string"){const l=I(d.data);if(l&&!l.isBase64)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function G(e){const t=e.addFeatures??[],a=e.updateFeatures??[],d=t.concat(a).map(o=>o.geometry),s=await S(d),l=t.length,i=a.length;return s.slice(0,l).forEach((o,r)=>t[r].geometry=o),s.slice(l,l+i).forEach((o,r)=>a[r].geometry=o),e}function f(e){const t=new E;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function V(e,t){if(t.infoFor3D==null)return;const{infoFor3D:a}=t,d=L("model/gltf-binary",a.supportedFormats)??$("glb",a.supportedFormats);if(!(d&&a.editFormats.includes(d)))throw new n(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:s}=e;for(const l of e.addFeatures??[])g(l)&&s.push(l);for(const l of e.updateFeatures??[])g(l)&&s.push(l)}function g(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function x(e,t,a,d){if(!b(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,d)}export{W as applyEdits,x as uploadAssets};