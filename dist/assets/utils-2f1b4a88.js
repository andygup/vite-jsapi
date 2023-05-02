import{ax as u,e7 as h,em as m,en as b,eo as d,_ as k,ep as g}from"./index-3e52b35c.js";import"./parser-3d96dfad.js";import{e as z}from"./ItemCache-2a3ac6cb.js";new z(1e3);new u([128,128,128]);const S=new u("white");function D(t,n){if(!t)return null;let l=null;return h(t)?l=x(t):m(t)&&(l=t.color?new u(t.color):null),l?s(l,n):null}function x(t){const n=t.symbolLayers;if(!n)return null;let l=null;return n.forEach(o=>{var i;o.type==="object"&&((i=o.resource)==null?void 0:i.href)!=null||(l=o.type==="water"?o.color:o.material!=null?o.material.color:null)}),l?new u(l):null}function s(t,n){if(n==null||t==null)return t;const l=t.toRgba();return l[3]=l[3]*n,new u(l)}function _(t,n,l){const o=t.symbolLayers;if(!o)return;const i=r=>s(n=n??r??null??(l!=null?S:null),l);o.forEach(r=>{var c;if(r.type!=="object"||((c=r.resource)==null?void 0:c.href)==null||n)if(r.type==="water")r.color=i(r.color);else{const f=r.material!=null?r.material.color:null,e=i(f);r.material==null?r.material=new g({color:e}):r.material.color=e,l!=null&&"outline"in r&&r.outline!=null&&r.outline.color!=null&&(r.outline.color=s(r.outline.color,l))}})}function v(t,n,l){(n=n??t.color)&&(t.color=s(n,l)),l!=null&&"outline"in t&&t.outline&&t.outline.color&&(t.outline.color=s(t.outline.color,l))}function J(t,n,l){t&&(n||l!=null)&&(n&&(n=new u(n)),h(t)?_(t,n,l):m(t)&&v(t,n,l))}async function L(t,n){const l=t.symbolLayers;l&&await b(l,async o=>j(o,n))}async function j(t,n){switch(t.type){case"extrude":R(t,n);break;case"icon":case"line":case"text":E(t,n);break;case"path":I(t,n);break;case"object":await $(t,n)}}function E(t,n){const l=p(n);l!=null&&(t.size=l)}function p(t){for(const n of t)if(typeof n=="number")return n;return null}function R(t,n){t.size=typeof n[2]=="number"?n[2]:0}async function $(t,n){const{resourceSize:l,symbolSize:o}=await O(t),i=w(n,l,o);t.width=a(n[0],o[0],l[0],i),t.depth=a(n[1],o[1],l[1],i),t.height=a(n[2],o[2],l[2],i)}function I(t,n){const l=w(n,d,[t.width,void 0,t.height]);t.width=a(n[0],t.width,1,l),t.height=a(n[2],t.height,1,l)}function w(t,n,l){for(let o=0;o<3;o++){const i=t[o];switch(i){case"symbol-value":{const r=l[o];return r!=null?r/n[o]:1}case"proportional":break;default:if(i&&n[o])return i/n[o]}}return 1}async function O(t){const n=await k(()=>import("./symbolLayerUtils-ba2f689e.js"),["assets/symbolLayerUtils-ba2f689e.js","assets/index-3e52b35c.js","assets/index-001d3307.css","assets/ItemCache-2a3ac6cb.js","assets/MemCache-d9724c39.js"]),l=await n.computeObjectLayerResourceSize(t,10),{width:o,height:i,depth:r}=t,c=[o,r,i];let f=1;for(let e=0;e<3;e++){const y=c[e];if(y!=null){f=y/l[e];break}}for(let e=0;e<3;e++)c[e]==null&&(c[e]=l[e]*f);return{resourceSize:l,symbolSize:c}}function a(t,n,l,o){switch(t){case"proportional":return l*o;case"symbol-value":return n??l;default:return t}}function C(t,n){const l=p(n);if(l!=null)switch(t.type){case"simple-marker":t.size=l;break;case"picture-marker":{const o=t.width/t.height;o>1?(t.width=l,t.height=l*o):(t.width=l*o,t.height=l);break}case"simple-line":t.width=l;break;case"text":t.font.size=l}}async function T(t,n){if(t&&n)return h(t)?L(t,n):void(m(t)&&C(t,n))}function U(t,n,l){if(t&&n!=null)if(h(t)){const o=t.symbolLayers;o&&o.forEach(i=>{if(i&&i.type==="object")switch(l){case"tilt":i.tilt=n;break;case"roll":i.roll=n;break;default:i.heading=n}})}else m(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle=n))}async function V(t,n){return await t.fetchSymbol(n)||t.fetchCIMSymbol(n)}export{V as J,T as M,U as R,J as g,D as h};
