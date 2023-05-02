import{s as N,cU as v,dy as S,dz as c,dA as d,e9 as U,eb as z,g7 as g,g8 as h}from"./index-65afe59f.js";import{c as A,a as w}from"./devEnvironmentUtils-5002a058.js";import{b as D}from"./jsonUtils-15c906c8.js";import{c as E,d as F,b as j,p as O,w as M}from"./styleUtils-00c8d6d5.js";import"./featureFlags-acda3469.js";function G(e,t,l,a){const r=e.name;return r==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?T(r,t,a):E(e,t,a).then(o=>R(v(o),r,t,l,a))}function R(e,t,l,a,r){var p;const o=e.data,i=l&&l.portal!=null?l.portal:S.getDefault(),b={portal:i,url:c(e.baseUrl),origin:"portal-item"},m=o.items.find(s=>s.name===t);if(!m){const s=`The symbol name '${t}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",s,{symbolName:t}))}let u=d(F(m,a),b),y=((p=m.thumbnail)==null?void 0:p.href)??null;const f=m.thumbnail&&m.thumbnail.imageData;A()&&(u=w(u)??"",y=w(y));const P={portal:i,url:c(U(u)),origin:"portal-item"};return j(u,r).then(s=>{const $=a==="cimRef"?O(s.data):s.data,n=D($,P);if(n&&z(n)){if(y){const x=d(y,b);n.thumbnail=new g({url:x})}else f&&(n.thumbnail=new g({url:`data:image/png;base64,${f}`}));e.styleUrl?n.styleOrigin=new h({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(n.styleOrigin=new h({portal:l.portal,styleName:e.styleName,name:t}))}return n})}function T(e,t,l){const a=M.replace(/\{SymbolName\}/gi,e),r=t.portal!=null?t.portal:S.getDefault();return j(a,l).then(o=>{const i=O(o.data);return D(i,{portal:r,url:c(U(a)),origin:"portal-item"})})}export{R as fetchSymbolFromStyle,G as resolveWebStyleSymbol};
