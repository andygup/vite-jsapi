import{ay as a,d$ as h,er as y,es as b,et as d,_ as k,eu as g}from"./index-6eb28d6b.js";import"./parser-aaaca3ad.js";import{e as z}from"./LRUCache-c5294c76.js";new z(1e3);new a([128,128,128]);const S=new a("white");function D(t,o){if(!t)return null;let n=null;return h(t)?n=_(t):y(t)&&(n=t.color?new a(t.color):null),n?s(n,o):null}function _(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(l=>{var i;l.type==="object"&&((i=l.resource)!=null&&i.href)||(n=l.type==="water"?l.color:l.material?l.material.color:null)}),n?new a(n):null}function s(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new a(n)}function v(t,o,n){const l=t.symbolLayers;if(!l)return;const i=r=>s(o=o??r??(n!=null?S:null),n);l.forEach(r=>{var c;if(r.type!=="object"||!((c=r.resource)!=null&&c.href)||o)if(r.type==="water")r.color=i(r.color);else{const f=r.material!=null?r.material.color:null,e=i(f);r.material==null?r.material=new g({color:e}):r.material.color=e,n!=null&&"outline"in r&&r.outline!=null&&r.outline.color!=null&&(r.outline.color=s(r.outline.color,n))}})}function x(t,o,n){(o=o??t.color)&&(t.color=s(o,n)),n!=null&&"outline"in t&&t.outline&&t.outline.color&&(t.outline.color=s(t.outline.color,n))}function J(t,o,n){t&&(o||n!=null)&&(o&&(o=new a(o)),h(t)?v(t,o,n):y(t)&&x(t,o,n))}async function L(t,o){const n=t.symbolLayers;n&&await b(n,async l=>j(l,o))}async function j(t,o){switch(t.type){case"extrude":$(t,o);break;case"icon":case"line":case"text":E(t,o);break;case"path":I(t,o);break;case"object":await R(t,o)}}function E(t,o){const n=w(o);n!=null&&(t.size=n)}function w(t){for(const o of t)if(typeof o=="number")return o;return null}function $(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function R(t,o){const{resourceSize:n,symbolSize:l}=await O(t),i=p(o,n,l);t.width=u(o[0],l[0],n[0],i),t.depth=u(o[1],l[1],n[1],i),t.height=u(o[2],l[2],n[2],i)}function I(t,o){const n=p(o,d,[t.width,void 0,t.height]);t.width=u(o[0],t.width,1,n),t.height=u(o[2],t.height,1,n)}function p(t,o,n){for(let l=0;l<3;l++){const i=t[l];switch(i){case"symbol-value":{const r=n[l];return r!=null?r/o[l]:1}case"proportional":break;default:if(i&&o[l])return i/o[l]}}return 1}async function O(t){const{computeObjectLayerResourceSize:o}=await k(()=>import("./symbolLayerUtils-790ca3c9.js"),["assets/symbolLayerUtils-790ca3c9.js","assets/index-6eb28d6b.js","assets/index-0492b785.css","assets/LRUCache-c5294c76.js"]),n=await o(t,10),{width:l,height:i,depth:r}=t,c=[l,r,i];let f=1;for(let e=0;e<3;e++){const m=c[e];if(m!=null){f=m/n[e];break}}for(let e=0;e<3;e++)c[e]==null&&(c[e]=n[e]*f);return{resourceSize:n,symbolSize:c}}function u(t,o,n,l){switch(t){case"proportional":return n*l;case"symbol-value":return o??n;default:return t}}function C(t,o){const n=w(o);if(n!=null)switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const l=t.width/t.height;l>1?(t.width=n,t.height=n*l):(t.width=n*l,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function T(t,o){if(t&&o)return h(t)?L(t,o):void(y(t)&&C(t,o))}function U(t,o,n){if(t&&o!=null)if(h(t)){const l=t.symbolLayers;l&&l.forEach(i=>{if(i&&i.type==="object")switch(n){case"tilt":i.tilt=o;break;case"roll":i.roll=o;break;default:i.heading=o}})}else y(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle=o))}async function V(t,o){return await t.fetchSymbol(o)||t.fetchCIMSymbol(o)}export{V as J,T as M,U as R,J as g,D as h};
