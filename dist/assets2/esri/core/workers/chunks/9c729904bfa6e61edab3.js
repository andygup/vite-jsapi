"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1444],{16306:(e,t,r)=>{r.d(t,{aX:()=>A});var a=r(68773),n=r(20102),s=r(92604),i=r(38913),o=r(58901),l=r(73913),u=r(8744),d=r(40488),p=(r(66577),r(3172)),c=r(33955),f=r(11282),h=r(17452);async function y(e,t,r){const a="string"==typeof e?(0,h.mN)(e):e,n=t[0].spatialReference,s=(0,c.Ji)(t[0]),i={...r,query:{...a.query,f:"json",sr:n.wkid??JSON.stringify(n),geometries:JSON.stringify((l=t,{geometryType:(0,c.Ji)(l[0]),geometries:l.map((e=>e.toJSON()))}))}},{data:o}=await(0,p.default)(a.path+"/simplify",i);var l;return function(e,t,r){const a=(0,c.q9)(t);return e.map((e=>{const t=a.fromJSON(e);return t.spatialReference=r,t}))}(o.geometries,s,n)}const m=s.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function w(e){return"polyline"===e[0].type}function b(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m.error(e),new n.Z(e)}const r=(0,l.x3)(e),a=[];for(const e of r){const r=[];a.push(r),r.push([e[0][0],e[0][1]]);for(let a=0;a<e.length-1;a++){const n=e[a][0],s=e[a][1],i=e[a+1][0],o=e[a+1][1],l=Math.sqrt((i-n)*(i-n)+(o-s)*(o-s)),u=(o-s)/l,d=(i-n)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const a=e*t,i=d*a+n,o=u*a+s;r.push([i,o])}const e=(l+Math.floor(p-1)*t)/2,a=d*e+n,i=u*e+s;r.push([a,i])}r.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:a,spatialReference:e.spatialReference}):new o.Z({paths:a,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(t,!0)}return r&&(e=(0,l.Sy)(e,r)),e}function F(e,t,r){if(Array.isArray(e)){const a=e[0];if(a>t){const r=(0,l.XZ)(a,t);e[0]=a+r*(-2*t)}else if(a<r){const t=(0,l.XZ)(a,r);e[0]=a+t*(-2*r)}}else{const a=e.x;if(a>t){const r=(0,l.XZ)(a,t);e=e.clone().offset(r*(-2*t),0)}else if(a<r){const t=(0,l.XZ)(a,r);e=e.clone().offset(t*(-2*r),0)}}return e}function Z(e,t){let r=-1;for(let a=0;a<t.cutIndexes.length;a++){const n=t.cutIndexes[a],s=t.geometries[a],i=(0,l.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const a=t[e][0];r=a>r?a:r}r=Number(r.toFixed(9));const a=-360*(0,l.XZ)(r,180);for(let r=0;r<t.length;r++){const t=s.getPoint(e,r);s.setPoint(e,r,t.clone().offset(a,0))}return!0}}))}if(n===r){if(g(e))for(const t of(0,l.x3)(s))e[n]=e[n].addRing(t);else if(w(e))for(const t of(0,l.x3)(s))e[n]=e[n].addPath(t)}else r=n,e[n]=s}return e}async function A(e,t,r){if(!Array.isArray(e))return A([e],t);t&&"string"!=typeof t&&m.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??a.default.geometryServiceUrl;let s,h,g,w,S,v,I,R,$=0;const x=[],E=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,h=(0,u.C5)(s),g=s.isWebMercator,v=g?102100:4326,w=l.UZ[v].maxX,S=l.UZ[v].minX,I=l.UZ[v].plus180Line,R=l.UZ[v].minus180Line),h)if("mesh"===t.type)E.push(t);else if("point"===t.type)E.push(F(t.clone(),w,S));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>F(e,w,S))),E.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,h);E.push(e.rings?new i.Z(e):e)}else if(t.extent){const e=t.extent,r=(0,l.XZ)(e.xmin,S)*(2*w);let a=0===r?t.clone():(0,l.Sy)(t.clone(),r);e.offset(r,0),e.intersects(I)&&e.xmax!==w?($=e.xmax>$?e.xmax:$,a=b(a,g),x.push(a),E.push("cut")):e.intersects(R)&&e.xmin!==S?($=e.xmax*(2*w)>$?e.xmax*(2*w):$,a=b(a,g,360),x.push(a),E.push("cut")):E.push(a)}else E.push(t.clone());else E.push(t);else E.push(t);let O=(0,l.XZ)($,w),L=-90;const U=O,X=new o.Z;for(;O>0;){const e=360*O-180;X.addPath([[e,L],[e,-1*L]]),L*=-1,O--}if(x.length>0&&U>0){const t=Z(x,await async function(e,t,r,a){const n=(0,f.en)(e),s=t[0].spatialReference,i={...a,query:{...n.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},o=await(0,p.default)(n.path+"/cut",i),{cutIndexes:l,geometries:u=[]}=o.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,c.im)(e);return t.spatialReference=s,t}))}}(n,x,X,r)),a=[],s=[];for(let r=0;r<E.length;r++){const n=E[r];if("cut"!==n)s.push(n);else{const n=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&n.rings.length>=i.rings.length?(a.push(n),s.push("simplify")):s.push(g?(0,d.$)(n):n)}}if(!a.length)return s;const i=await y(n,a,r),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(g?(0,d.$)(i.shift()):i.shift())}return o}const J=[];for(let e=0;e<E.length;e++){const t=E[e];if("cut"!==t)J.push(t);else{const e=x.shift();J.push(!0===g?(0,d.$)(e):e)}}return J}},73913:(e,t,r)=>{r.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>u});var a=r(58901),n=r(82971),s=r(33955);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=u(e);for(const e of r)for(const r of e)r[0]+=t;return e}function u(e){return(0,s.oU)(e)?e.rings:e.paths}},14720:(e,t,r)=>{r.d(t,{Ey:()=>g,applyEdits:()=>w,aw:()=>y,uploadAssets:()=>v});var a=r(38171),n=r(46791),s=r(20102),i=r(22974),o=r(95330),l=r(17452),u=r(16306),d=r(66361),p=r(2981),c=r(84230);function f(e){return e&&null!=e.applyEdits}function h(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function y(e){return e.every(h)}function m(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function g(e){return e.every(m)}async function w(e,t,r,a={}){let l;if((0,d.lQ)(e)&&e.url)l=(0,d.jF)(e.url,e.layerId,"original-and-current-features"===a.returnServiceEditsOption);else{l=(0,o.hh)(),l.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:l.promise};e.emit("apply-edits",t)}try{const{results:o,edits:u}=await async function(e,t,r,a){if(await e.load(),!f(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,c.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:o}=await async function(e,t,r){const a=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),o=null!=e.infoFor3D;if(!t||!a&&!i)throw new s.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const l=(0,c.S1)(e);if(!l.data.isVersioned&&r?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!l.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!l.editing.supportsGlobalId&&r?.globalIdUsed)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!l.editing.supportsGlobalId&&i)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new s.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const u={...r};if(null!=u.rollbackOnFailureEnabled||l.editing.supportsRollbackOnFailure||(u.rollbackOnFailureEnabled=!0),!1===u.rollbackOnFailureEnabled&&"original-and-current-features"===u.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!l.editing.supportsReturnServiceEditsInSourceSpatialReference&&u.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(u.returnServiceEditsInSourceSR&&"original-and-current-features"!==u.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const d={...t};if(d.addFeatures=t&&n.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():d.addFeatures||[],d.updateFeatures=t&&n.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():d.updateFeatures||[],d.deleteFeatures=t&&n.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():d.deleteFeatures||[],d.addFeatures.length&&!l.operations.supportsAdd)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(d.updateFeatures.length&&!l.operations.supportsUpdate)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(d.deleteFeatures.length&&!l.operations.supportsDelete)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");d.addAttachments=d.addAttachments||[],d.updateAttachments=d.updateAttachments||[],d.deleteAttachments=d.deleteAttachments||[],d.addFeatures=d.addFeatures.map(A),d.updateFeatures=d.updateFeatures.map(A),d.addAssetFeatures=[];const f=r?.globalIdUsed||o;return d.addFeatures.forEach((t=>function(e,t,r){b(e,t,r)}(t,e,f))),d.updateFeatures.forEach((t=>function(e,t,r){b(e,t,r);const a=(0,c.S1)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f))),d.deleteFeatures.forEach((t=>function(e,t,r){b(e,t,r)}(t,e,f))),d.addAttachments.forEach((t=>F(t,e))),d.updateAttachments.forEach((t=>F(t,e))),o&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,a=(0,p.S0)("model/gltf-binary",r.supportedFormats)??(0,p.Ow)("glb",r.supportedFormats);if(!a||!r.editFormats.includes(a))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:n}=e;for(const t of e.addFeatures??[])S(t)&&n.push(t);for(const t of e.updateFeatures??[])S(t)&&n.push(t)}(d,e),{edits:await Z(d),options:u}}(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,o)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,a),d=e=>e.filter((e=>!e.error)).map(i.d9),h={edits:u,addedFeatures:d(o.addFeatureResults),updatedFeatures:d(o.updateFeatureResults),deletedFeatures:d(o.deleteFeatureResults),addedAttachments:d(o.addAttachmentResults),updatedAttachments:d(o.updateAttachmentResults),deletedAttachments:d(o.deleteAttachmentResults),exceededTransferLimit:!1};return o.editedFeatureResults?.length&&(h.editedFeatures=o.editedFeatureResults),l.resolve(h),o}catch(e){throw l.reject(e),e}}function b(e,t,r){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function F(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name||a.name))throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){const e=(0,l.sJ)(a.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function Z(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map((e=>e.geometry)),n=await(0,u.aX)(a),s=t.length,i=r.length;return n.slice(0,s).forEach(((e,r)=>t[r].geometry=e)),n.slice(s,s+i).forEach(((e,t)=>r[t].geometry=e)),e}function A(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function S(e){return"mesh"===e?.geometry?.type}function v(e,t,r,a){if(!f(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}},2981:(e,t,r)=>{r.d(t,{$6:()=>d,Ow:()=>s,S0:()=>n,d1:()=>i});const a=[["binary","application/octet-stream","bin",""]];function n(e,t){return l(function(e,t){return o(t).find((t=>u(t)===e))}(e,t))}function s(e,t){return l(function(e,t){const r=e.toLowerCase();return o(t).find((e=>function(e){return e?.[2].split(",")??[]}(e).some((e=>r.endsWith(e)))))}(e,t))}function i(e,t){return u(function(e,t){return o(t).find((t=>l(t)===e))}(e,t))}function o(e){return[...a,...e]}function l(e){return e?.[0]}function u(e){return e?.[1]}function d(e){return e.tables?.find((e=>"assetMaps"===e.role))}},11282:(e,t,r)=>{r.d(t,{cv:()=>o,en:()=>i,lA:()=>s}),r(68773),r(40330);var a=r(22974),n=r(17452);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,n.mN)(e):(0,a.d9)(e)}function o(e,t,r){const a={};for(const n in e){if("declaredClass"===n)continue;const s=e[n];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){a[n]=[];for(let e=0;e<s.length;e++)a[n][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[n]);a[n]=t?e:JSON.stringify(e)}else a[n]=t?s:JSON.stringify(s);else a[n]=s}return a}r(71058)}}]);