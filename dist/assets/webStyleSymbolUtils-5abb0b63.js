import{dv as C,cV as E,s as N,r as w,dz as S,dA as c,dB as h,dC as R,hN as U,dx as D,dy as P,hO as O,hP as z,hQ as f,hR as $,dw as A}from"./index-6c241492.js";import{c as B,a as g}from"./devEnvironmentUtils-5002a058.js";function T(e,t,a,l){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?L(e,t,l):C(e,t,l).then(n=>F(E(n),e.name,t,a,l)):Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function F(e,t,a,l,n){var d;const u=e.data,m=a&&w(a.portal)?a.portal:S.getDefault(),b={portal:m,url:c(e.baseUrl),origin:"portal-item"},o=u.items.find(r=>r.name===t);if(!o){const r=`The symbol name '${t}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",r,{symbolName:t}))}let i=h(R(o,l),b),y=((d=o.thumbnail)==null?void 0:d.href)??null;const p=o.thumbnail&&o.thumbnail.imageData;B()&&(i=g(i)??"",y=g(y));const j={portal:m,url:c(U(i)),origin:"portal-item"};return D(i,n).then(r=>{const x=l==="cimRef"?P(r.data):r.data,s=O(x,j);if(s&&z(s)){if(y){const v=h(y,b);s.thumbnail=new f({url:v})}else p&&(s.thumbnail=new f({url:`data:image/png;base64,${p}`}));e.styleUrl?s.styleOrigin=new $({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new $({portal:a.portal,styleName:e.styleName,name:t}))}return s})}function L(e,t,a){const l=A.replace(/\{SymbolName\}/gi,e.name),n=w(t.portal)?t.portal:S.getDefault();return D(l,a).then(u=>{const m=P(u.data);return O(m,{portal:n,url:c(U(l)),origin:"portal-item"})})}export{F as fetchSymbolFromStyle,T as resolveWebStyleSymbol};
