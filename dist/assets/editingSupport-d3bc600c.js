import{a as w,cE as A,E as o,iV as E,a7 as b,J as h,dL as v,ah as I}from"./index-b4b3ae7d.js";import{n as S}from"./normalizeUtils-a85cdb25.js";import{i as $,e as R}from"./EditBusLayer-eda2c950.js";import{m as L,f as U}from"./infoFor3D-91dff30a.js";import"./normalizeUtilsCommon-fdc8c13f.js";function y(e){return e&&e.applyEdits!=null}async function x(e,t,a,n={}){var u;let d;if($(e)&&e.url)d=R(e.url,e.layerId,n.returnServiceEditsOption==="original-and-current-features");else{d=w(),d.promise.then(i=>{(i.addedFeatures.length||i.updatedFeatures.length||i.deletedFeatures.length||i.addedAttachments.length||i.updatedAttachments.length||i.deletedAttachments.length)&&e.emit("edits",i)});const s={result:d.promise};e.emit("apply-edits",s)}try{const{results:s,edits:i}=await k(e,t,a,n),r=c=>c.filter(l=>!l.error).map(A),p={edits:i,addedFeatures:r(s.addFeatureResults),updatedFeatures:r(s.updateFeatureResults),deletedFeatures:r(s.deleteFeatureResults),addedAttachments:r(s.addAttachmentResults),updatedAttachments:r(s.updateAttachmentResults),deletedAttachments:r(s.deleteAttachmentResults),exceededTransferLimit:!1};return(u=s.editedFeatureResults)!=null&&u.length&&(p.editedFeatures=s.editedFeatureResults),d.resolve(p),s}catch(s){throw d.reject(s),s}}async function k(e,t,a,n){var s,i,r,p,c,l;if(await e.load(),!y(t))throw new o(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!E(e))throw new o(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:d,options:u}=await C(e,a,n);return!((s=d.addFeatures)!=null&&s.length)&&!((i=d.updateFeatures)!=null&&i.length)&&!((r=d.deleteFeatures)!=null&&r.length)&&!((p=d.addAttachments)!=null&&p.length)&&!((c=d.updateAttachments)!=null&&c.length)&&!((l=d.deleteAttachments)!=null&&l.length)?{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}:{edits:d,results:await t.applyEdits(d,u)}}async function C(e,t,a){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=e.infoFor3D!=null;if(!t||!n&&!d)throw new o(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const s=b(e);if(!s.data.isVersioned&&(a!=null&&a.gdbVersion))throw new o(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!s.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!s.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!s.editing.supportsGlobalId&&d)throw new o(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&d)throw new o(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...a};if(i.rollbackOnFailureEnabled==null&&!s.editing.supportsRollbackOnFailure&&(i.rollbackOnFailureEnabled=!0),i.rollbackOnFailureEnabled===!1&&i.returnServiceEditsOption==="original-and-current-features")throw new o(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!s.editing.supportsReturnServiceEditsInSourceSpatialReference&&i.returnServiceEditsInSourceSR)throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(i.returnServiceEditsInSourceSR&&i.returnServiceEditsOption!=="original-and-current-features")throw new o(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&h.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&h.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&h.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!s.operations.supportsAdd)throw new o(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!s.operations.supportsUpdate)throw new o(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!s.operations.supportsDelete)throw new o(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(g),r.updateFeatures=r.updateFeatures.map(g),r.addAssetFeatures=[];const p=(a==null?void 0:a.globalIdUsed)||u;return r.addFeatures.forEach(l=>z(l,e,p)),r.updateFeatures.forEach(l=>G(l,e,p)),r.deleteFeatures.forEach(l=>D(l,e,p)),r.addAttachments.forEach(l=>f(l,e)),r.updateAttachments.forEach(l=>f(l,e)),u&&await B(r,e),{edits:await T(r),options:i}}function m(e,t,a){var n,d;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((n=t.capabilities)==null?void 0:n.data.supportsZ)===!1)throw new o(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((d=t.capabilities)==null?void 0:d.data.supportsM)===!1)throw new o(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function z(e,t,a){m(e,t,a)}function D(e,t,a){m(e,t,a)}function G(e,t,a){m(e,t,a);const n=b(t);if("geometry"in e&&e.geometry!=null&&!(n!=null&&n.editing.supportsGeometryUpdate))throw new o(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function f(e,t){var u;const{feature:a,attachment:n}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File?!!n.data.name:!1)&&!n.name)throw new o(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((u=t.capabilities)!=null&&u.editing.supportsUploadWithItemId)&&n.uploadId)throw new o(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof n.data=="string"){const s=v(n.data);if(s&&!s.isBase64)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function T(e){const t=e.addFeatures??[],a=e.updateFeatures??[],n=t.concat(a).map(i=>i.geometry),d=await S(n),u=t.length,s=a.length;return d.slice(0,u).forEach((i,r)=>t[r].geometry=i),d.slice(u,u+s).forEach((i,r)=>a[r].geometry=i),e}function g(e){const t=new I;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function B(e,t){if(t.infoFor3D==null)return;const{infoFor3D:a}=t,n=L("model/gltf-binary",a.supportedFormats)??U("glb",a.supportedFormats);if(!(n?a.editFormats.includes(n):!1))throw new o(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:u}=e;for(const s of e.addFeatures??[])F(s)&&u.push(s);for(const s of e.updateFeatures??[])F(s)&&u.push(s)}function F(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function N(e,t,a,n){if(!y(t))throw new o(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new o(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,n)}export{x as applyEdits,N as uploadAssets};
