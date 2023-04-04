import{cn as v,im as I,io as E,s as d,ip as S,cm as w,V as h,dT as R,aX as O,ai as $}from"./index-e1d30004.js";import{i as L,c as U}from"./infoFor3D-1eaade9a.js";function F(e){return e&&e.applyEdits!=null}async function W(e,t,r,s={}){var o;let i,n;const u={edits:r,result:new Promise((a,c)=>{i=a,n=c})};e.emit("apply-edits",u);try{const{results:a,edits:c}=await k(e,t,r,s),l=b=>b.filter(A=>!A.error).map(v),p={edits:c,addedFeatures:l(a.addFeatureResults),updatedFeatures:l(a.updateFeatureResults),deletedFeatures:l(a.deleteFeatureResults),addedAttachments:l(a.addAttachmentResults),updatedAttachments:l(a.updateAttachmentResults),deletedAttachments:l(a.deleteAttachmentResults),exceededTransferLimit:!1};return(o=a.editedFeatureResults)!=null&&o.length&&(p.editedFeatures=a.editedFeatureResults),(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&(e.emit("edits",p),I(e)&&E.emit("edits",{layer:e,event:p})),i(p),a}catch(a){throw n(a),a}}async function k(e,t,r,s){var u,o,a,c,l,p;if(await e.load(),!F(t))throw new d(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!S(e))throw new d(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await T(e,r,s);return(u=i.addFeatures)!=null&&u.length||(o=i.updateFeatures)!=null&&o.length||(a=i.deleteFeatures)!=null&&a.length||(c=i.addAttachments)!=null&&c.length||(l=i.updateAttachments)!=null&&l.length||(p=i.deleteAttachments)!=null&&p.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function T(e,t,r){const s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),n=e.infoFor3D!=null;if(!t||!s&&!i)throw new d(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const u=w(e);if(!u.data.isVersioned&&(r!=null&&r.gdbVersion))throw new d(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!u.editing.supportsRollbackOnFailure&&(r!=null&&r.rollbackOnFailureEnabled))throw new d(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!u.editing.supportsGlobalId&&(r!=null&&r.globalIdUsed))throw new d(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!u.editing.supportsGlobalId&&i)throw new d(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(r!=null&&r.globalIdUsed)&&i)throw new d(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const o={...r};if(o.rollbackOnFailureEnabled!=null||u.editing.supportsRollbackOnFailure||(o.rollbackOnFailureEnabled=!0),o.rollbackOnFailureEnabled===!1&&o.returnServiceEditsOption==="original-and-current-features")throw new d(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!u.editing.supportsReturnServiceEditsInSourceSpatialReference&&o.returnServiceEditsInSourceSR)throw new d(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(o.returnServiceEditsInSourceSR&&o.returnServiceEditsOption!=="original-and-current-features")throw new d(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const a={...t};if(a.addFeatures=t&&h.isCollection(t.addFeatures)?t.addFeatures.toArray():a.addFeatures||[],a.updateFeatures=t&&h.isCollection(t.updateFeatures)?t.updateFeatures.toArray():a.updateFeatures||[],a.deleteFeatures=t&&h.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():a.deleteFeatures||[],a.addFeatures.length&&!u.operations.supportsAdd)throw new d(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures.length&&!u.operations.supportsUpdate)throw new d(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures.length&&!u.operations.supportsDelete)throw new d(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");a.addAttachments=a.addAttachments||[],a.updateAttachments=a.updateAttachments||[],a.deleteAttachments=a.deleteAttachments||[],a.addFeatures=a.addFeatures.map(f),a.updateFeatures=a.updateFeatures.map(f),a.addAssetFeatures=[];const c=(r==null?void 0:r.globalIdUsed)||n;return a.addFeatures.forEach(l=>B(l,e,c)),a.updateFeatures.forEach(l=>G(l,e,c)),a.deleteFeatures.forEach(l=>D(l,e,c)),a.addAttachments.forEach(l=>m(l,e)),a.updateAttachments.forEach(l=>m(l,e)),n&&await q(a,e),{edits:await V(a),options:o}}function y(e,t,r){var s,i;if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new d(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new d(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new d(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((i=t.capabilities)==null?void 0:i.data.supportsM)===!1)throw new d(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function B(e,t,r){y(e,t,r)}function D(e,t,r){y(e,t,r)}function G(e,t,r){y(e,t,r);const s=w(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new d(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){var i;const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new d(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new d(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new d(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new d(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&s.data.name)&&!s.name)throw new d(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((i=t.capabilities)!=null&&i.editing.supportsUploadWithItemId)&&s.uploadId)throw new d(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof s.data=="string"){const n=R(s.data);if(n&&!n.isBase64)throw new d(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function V(e){const t=e.addFeatures??[],r=e.updateFeatures??[],s=t.concat(r).map(o=>o.geometry),i=await O(s),n=t.length,u=r.length;return i.slice(0,n).forEach((o,a)=>t[a].geometry=o),i.slice(n,n+u).forEach((o,a)=>r[a].geometry=o),e}function f(e){const t=new $;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function q(e,t){if(t.infoFor3D==null)return;const{infoFor3D:r}=t,s=L("model/gltf-binary",r.supportedFormats)??U("glb",r.supportedFormats);if(!(s&&r.editFormats.includes(s)))throw new d(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:i}=e;for(const n of e.addFeatures??[])g(n)&&i.push(n);for(const n of e.updateFeatures??[])g(n)&&i.push(n)}function g(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function x(e,t,r,s){if(!F(t))throw new d(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new d(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s)}export{W as applyEdits,x as uploadAssets};