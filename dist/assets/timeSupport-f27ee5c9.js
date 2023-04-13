import{gi as C,gj as N,cd as y,cn as m,gk as h,gl as O,_ as w,E as g,dj as G,bz as F}from"./index-b4b3ae7d.js";import{m as E}from"./featureConversionUtils-b73aa4b5.js";import{O as P}from"./OptimizedGeometry-af84d2ad.js";import{c as _}from"./projectionSupport-9735a071.js";import{g as p}from"./utils-14d31cca.js";function j(e){return e==="mesh"?C:N(e)}function v(e,t){return e?t?4:3:t?3:2}function A(e,t,n,r){return b(e,t,n,r.coords[0],r.coords[1])}function V(e,t,n,r,s,i){const l=v(s,i),{coords:o,lengths:a}=r;if(!a)return!1;for(let u=0,f=0;u<a.length;u++,f+=l)if(!b(e,t,n,o[f],o[f+1]))return!1;return!0}function b(e,t,n,r,s){if(!e)return!1;const i=v(t,n),{coords:l,lengths:o}=e;let a=!1,u=0;for(const f of o)a=M(a,l,i,u,f,r,s),u+=f*i;return a}function M(e,t,n,r,s,i,l){let o=e,a=r;for(let u=r,f=r+s*n;u<f;u+=n){a=u+n,a===f&&(a=r);const I=t[u],c=t[u+1],x=t[a],S=t[a+1];(c<l&&S>=l||S<l&&c>=l)&&I+(l-c)/(S-c)*(x-I)<i&&(o=!o)}return o}const R="feature-store:unsupported-query",T={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},d={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Q(e){return e!=null&&d.spatialRelationship[e]===!0}function k(e){return e!=null&&d.queryGeometry[F(e)]===!0}function D(e){return e!=null&&d.layerGeometry[e]===!0}function L(){return w(()=>import("./geometryEngineJSON-67691c47.js"),["assets/geometryEngineJSON-67691c47.js","assets/index-b4b3ae7d.js","assets/index-d832a396.css","assets/geometryEngineJSON-69dc08ab.js","assets/json-9ae8d6f8.js"])}function X(e,t,n,r,s){if(y(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const i=E(new P,t,!1,!1);return Promise.resolve(l=>A(i,!1,!1,l))}if(y(t)&&n==="esriGeometryMultipoint"){const i=E(new P,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>V(i,!1,!1,l,r,s))}if(m(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(i=>h(t,p(n,r,s,i)));if(m(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(i=>O(t,p(n,r,s,i)));if(m(t)&&e==="esriSpatialRelIntersects"){const i=j(n);return Promise.resolve(l=>i(t,p(n,r,s,l)))}return L().then(i=>{const l=i[T[e]].bind(null,t.spatialReference,t);return o=>l(p(n,r,s,o))})}async function $(e,t,n){const{spatialRel:r,geometry:s}=e;if(s){if(!Q(r))throw new g(R,"Unsupported query spatial relationship",{query:e});if(!(!G(s.spatialReference)||!G(n))){if(!k(s))throw new g(R,"Unsupported query geometry type",{query:e});if(!D(t))throw new g(R,"Unsupported layer geometry type",{query:e});if(e.outSR)return _(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function q(e){if(m(e))return!0;if(y(e)){for(const t of e.rings)if(t.length!==5||!(t[0][0]===t[1][0]&&t[0][0]===t[4][0]&&t[2][0]===t[3][0]&&t[0][1]===t[3][1]&&t[0][1]===t[4][1]&&t[1][1]===t[2][1]))return!1;return!0}return!1}async function Z(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:s}=e;let i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&s)await t.forEach(o=>{const a=n.getAttribute(o,r),u=n.getAttribute(o,s);a!=null&&!isNaN(a)&&(i=Math.min(i,a)),u!=null&&!isNaN(u)&&(l=Math.max(l,u))});else{const o=r||s;await t.forEach(a=>{const u=n.getAttribute(a,o);u!=null&&!isNaN(u)&&(i=Math.min(i,u),l=Math.max(l,u))})}return{start:i,end:l}}function ee(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:s}=e;if(!r&&!s)return null;const{start:i,end:l}=t;return i===null&&l===null?null:i===void 0&&l===void 0?z():r&&s?U(n,r,s,i,l):W(n,r||s,i,l)}function U(e,t,n,r,s){if(r!=null&&s!=null)return i=>{const l=e.getAttribute(i,t),o=e.getAttribute(i,n);return(l==null||l<=s)&&(o==null||o>=r)};if(r!=null)return i=>{const l=e.getAttribute(i,n);return l==null||l>=r};if(s!=null)return i=>{const l=e.getAttribute(i,t);return l==null||l<=s}}function W(e,t,n,r){if(n!=null&&r!=null&&n===r)return s=>e.getAttribute(s,t)===n;if(n!=null&&r!=null)return s=>{const i=e.getAttribute(s,t);return i>=n&&i<=r};if(n!=null)return s=>e.getAttribute(s,t)>=n;if(r!=null)return s=>e.getAttribute(s,t)<=r}function z(){return()=>!1}export{X as a,ee as b,q as c,$ as d,Z as g};
