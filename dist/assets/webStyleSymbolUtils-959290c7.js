import{s as N,cQ as x,du as S,dv as c,dw as d,e5 as D,e7 as E,g3 as g,g4 as h}from"./index-6e11f365.js";import{c as F,a as w}from"./devEnvironmentUtils-5002a058.js";import{b as U}from"./jsonUtils-c398a7e6.js";import{c as M,d as Q,b as j,p as O,w as R}from"./styleUtils-c8bd0c80.js";import"./featureFlags-47ea12bc.js";function C(e,t,l,a){const r=e.name;return r==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?W(r,t,a):M(e,t,a).then(o=>T(x(o),r,t,l,a))}function T(e,t,l,a,r){var b;const o=e.data,i=l&&l.portal!=null?l.portal:S.getDefault(),f={portal:i,url:c(e.baseUrl),origin:"portal-item"},m=o.items.find(s=>s.name===t);if(!m){const s=`The symbol name '${t}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",s,{symbolName:t}))}let u=d(Q(m,a),f),y=((b=m.thumbnail)==null?void 0:b.href)??null;const p=m.thumbnail&&m.thumbnail.imageData;F()&&(u=w(u)??"",y=w(y));const P={portal:i,url:c(D(u)),origin:"portal-item"};return j(u,r).then(s=>{const $=a==="cimRef"?O(s.data):s.data,n=U($,P);if(n&&E(n)){if(y){const v=d(y,f);n.thumbnail=new g({url:v})}else p&&(n.thumbnail=new g({url:`data:image/png;base64,${p}`}));e.styleUrl?n.styleOrigin=new h({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(n.styleOrigin=new h({portal:l.portal,styleName:e.styleName,name:t}))}return n})}function W(e,t,l){const a=R.replace(/\{SymbolName\}/gi,e),r=t.portal!=null?t.portal:S.getDefault();return j(a,l).then(o=>{const i=O(o.data);return U(i,{portal:r,url:c(D(a)),origin:"portal-item"})})}export{T as fetchSymbolFromStyle,C as resolveWebStyleSymbol};