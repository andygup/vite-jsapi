import{kO as g,df as y,L as A}from"./index-bdad94d1.js";import{u,r as c}from"./infoFor3D-5881142c.js";class b{constructor(r,s,t){this.assetName=r,this.assetMimeType=s,this.parts=t}equals(r){return this===r||this.assetName===r.assetName&&this.assetMimeType===r.assetMimeType&&g(this.parts,r.parts,(s,t)=>s.equals(t))}isOnService(r){return this.parts.every(s=>s.isOnService(r))}async toBlob(r){const{parts:s}=this;if(s.length===1)return s[0].toBlob(r);const t=await Promise.all(s.map(a=>a.toBlob(r)));return y(r),new Blob(t)}}class O{constructor(r,s){this.partUrl=r,this.partHash=s}equals(r){return this===r||this.partUrl===r.partUrl&&this.partHash===r.partHash}isOnService(r){return this.partUrl.startsWith(`${r.path}/assets/`)}async toBlob(r){const{data:s}=await A(this.partUrl,{responseType:"blob"});return y(r),s}}function U(e){return v(e==null?void 0:e.source)}function f(e){return Array.isArray(e)?e.every(r=>r instanceof b):!1}const l=/^(model\/gltf\+json)|(model\/gltf-binary)$/,p=/\.(gltf|glb)/i;function v(e){return e?Array.isArray(e)?e.some(h):h(e):!1}function h(e){if(e instanceof File){const{type:r,name:s}=e;return l.test(r)||p.test(s)}return l.test(e.assetMimeType)||p.test(e.assetName)}function d(e,r){if(!e)return!1;const{source:s}=e;return T(s,r)}function q(e,r){if(e===r)return!0;const{source:s}=e,{source:t}=r;if(s===t)return!0;if(f(s)&&f(t)){if(s.length!==t.length)return!1;const a=(n,o)=>n.assetName<o.assetName?-1:n.assetName>o.assetName?1:0,i=[...s].sort(a),N=[...t].sort(a);for(let n=0;n<i.length;++n)if(!i[n].equals(N[n]))return!1;return!0}return!1}function T(e,r){return Array.isArray(e)?e.every(s=>m(s,r)):m(e,r)}function m(e,r){return e instanceof b&&e.isOnService(r)}function S(e,r){return e instanceof File?u(e.name,r)??c(e.type,r):c(e.assetMimeType,r)??u(e.assetName,r)}function w(e){return Array.isArray(e)?e:[e]}export{S as N,b as a,w as g,q as h,O as i,d as m,U as o};
