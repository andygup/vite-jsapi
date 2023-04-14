import{ax as c,e6 as h,ek as S,el as g,em as k,_ as T,en as C}from"./index-468a9268.js";import"./parser-0c644652.js";import{I as z}from"./ItemCache-68f957f2.js";new z(1e3);new c([128,128,128]);const b=new c("white");function A(e,t){if(!e)return null;let n=null;return h(e)?n=D(e):S(e)&&(n=e.color?new c(e.color):null),n?f(n,t):null}function D(e){const t=e.symbolLayers;if(!t)return null;let n=null;return t.forEach(l=>{var r;l.type==="object"&&((r=l.resource)==null?void 0:r.href)!=null||(l.type==="water"?n=l.color:n=l.material!=null?l.material.color:null)}),n?new c(n):null}function f(e,t){if(t==null||e==null)return e;const n=e.toRgba();return n[3]=n[3]*t,new c(n)}function E(e,t,n){const l=e.symbolLayers;if(!l)return;const r=i=>(t=t??(i??null)??(n!=null?b:null),f(t,n));l.forEach(i=>{var u;if(!(i.type==="object"&&((u=i.resource)==null?void 0:u.href)!=null&&!t))if(i.type==="water")i.color=r(i.color);else{const p=i.material!=null?i.material.color:null,o=r(p);i.material==null?i.material=new C({color:o}):i.material.color=o,n!=null&&"outline"in i&&i.outline!=null&&i.outline.color!=null&&(i.outline.color=f(i.outline.color,n))}})}function _(e,t,n){t=t??e.color,t&&(e.color=f(t,n)),n!=null&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=f(e.outline.color,n))}function W(e,t,n){!e||!t&&n==null||(t&&(t=new c(t)),h(e)?E(e,t,n):S(e)&&_(e,t,n))}async function j(e,t){const n=e.symbolLayers;n&&await g(n,async l=>x(l,t))}async function x(e,t){switch(e.type){case"extrude":v(e,t);break;case"icon":case"line":case"text":O(e,t);break;case"path":I(e,t);break;case"object":await R(e,t);break}}function O(e,t){const n=s(t);n!=null&&(e.size=n)}function s(e){for(const t of e)if(typeof t=="number")return t;return null}function v(e,t){e.size=typeof t[2]=="number"?t[2]:0}async function R(e,t){const{resourceSize:n,symbolSize:l}=await P(e),r=d(t,n,l);e.width=a(t[0],l[0],n[0],r),e.depth=a(t[1],l[1],n[1],r),e.height=a(t[2],l[2],n[2],r)}function I(e,t){const n=d(t,k,[e.width,void 0,e.height]);e.width=a(t[0],e.width,1,n),e.height=a(t[2],e.height,1,n)}function d(e,t,n){for(let l=0;l<3;l++){const r=e[l];switch(r){case"symbol-value":{const i=n[l];return i!=null?i/t[l]:1}case"proportional":break;default:if(r&&t[l])return r/t[l]}}return 1}async function P(e){const n=await(await T(()=>import("./symbolLayerUtils-36a9bc8a.js"),["assets/symbolLayerUtils-36a9bc8a.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/ItemCache-68f957f2.js","assets/MemCache-3df47c80.js"])).computeObjectLayerResourceSize(e,10),{width:l,height:r,depth:i}=e,u=[l,i,r];let p=1;for(let o=0;o<3;o++){const w=u[o];if(w!=null){p=w/n[o];break}}for(let o=0;o<3;o++)u[o]==null&&(u[o]=n[o]*p);return{resourceSize:n,symbolSize:u}}function a(e,t,n,l){switch(e){case"proportional":return n*l;case"symbol-value":return t??n;default:return e}}function F(e,t){const n=s(t);if(n!=null)switch(e.type){case"simple-marker":e.size=n;break;case"picture-marker":{const l=e.width/e.height;l>1?(e.width=n,e.height=n*l):(e.width=n*l,e.height=n);break}case"simple-line":e.width=n;break;case"text":e.font.size=n;break}}async function $(e,t){if(!(!e||!t)){if(h(e))return j(e,t);S(e)&&F(e,t)}}function q(e,t,n){if(!(!e||t==null))if(h(e)){const l=e.symbolLayers;l&&l.forEach(r=>{if(r&&r.type==="object")switch(n){case"tilt":r.tilt=t;break;case"roll":r.roll=t;break;default:r.heading=t}})}else S(e)&&(e.type==="simple-marker"||e.type==="picture-marker"||e.type==="text")&&(e.angle=t)}async function B(e,t){const n=await e.fetchSymbol(t);return n||e.fetchCIMSymbol(t)}export{W as a,$ as b,q as c,B as f,A as g};
