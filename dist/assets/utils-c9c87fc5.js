import{cH as M,gd as O,bB as v,co as b,ce as N,cn as A,b9 as G,ft as z,ge as B,gf as E,dg as J,g6 as w,_ as Z}from"./index-3e52b35c.js";import{b as q}from"./normalizeUtils-9330ffa6.js";import{d as H,h as p,b as I,P as y,$ as V,H as j,U as k}from"./featureConversionUtils-317347cf.js";import{t as R}from"./OptimizedGeometry-33b2eb0d.js";import{f as P,g as U}from"./projectionSupport-086f5550.js";const C=new M({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),x=Object.freeze({}),$=new R,D=new R,g=new R,l={esriGeometryPoint:y,esriGeometryPolyline:V,esriGeometryPolygon:j,esriGeometryMultipoint:k};function nt(t,r,a,n=t.hasZ,i=t.hasM){if(r==null)return null;const o=t.hasZ&&n,s=t.hasM&&i;if(a){const e=p(g,r,t.hasZ,t.hasM,"esriGeometryPoint",a,n,i);return y(e,o,s)}return y(r,o,s)}function rt(t,r,a,n,i,o,s=r,e=a){var S,d,h;const c=r&&s,u=a&&e,f=n!=null?"coords"in n?n:n.geometry:null;if(f==null)return null;if(i){let m=H(D,f,r,a,t,i,s,e);return o&&(m=p(g,m,c,u,t,o)),((S=l[t])==null?void 0:S.call(l,m,c,u))??null}if(o){const m=p(g,f,r,a,t,o,s,e);return((d=l[t])==null?void 0:d.call(l,m,c,u))??null}return I($,f,r,a,s,e),((h=l[t])==null?void 0:h.call(l,$,c,u))??null}async function at(t,r,a){const{outFields:n,orderByFields:i,groupByFieldsForStatistics:o,outStatistics:s}=t;if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(o)for(let e=0;e<o.length;e++)o[e]=o[e].trim();if(s)for(let e=0;e<s.length;e++)s[e].onStatisticField&&(s[e].onStatisticField=s[e].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),K(t,r,a)}async function K(t,r,a){var o;if(!t)return null;let{where:n}=t;if(t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||r&&r===n)&&(t.where=null),!t.geometry)return t;let i=await T(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=t.geometry;i=O(i),i.spatialReference=s}if(i){await P(i.spatialReference,a),i=L(i,a);const s=(await q(v(i)))[0];if(s==null)throw x;const e="quantizationParameters"in t&&((o=t.quantizationParameters)==null?void 0:o.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,c=e&&_(i,a)?{densificationStep:8*e}:void 0,u=s.toJSON(),f=await U(u,u.spatialReference,a,c);if(!f)throw x;f.spatialReference=a,t.geometry=f}return t}function _(t,r){if(!t)return!1;const a=t.spatialReference;return(b(t)||N(t)||A(t))&&!G(a,r)&&!z(a,r)}function L(t,r){const a=t.spatialReference;return _(t,r)&&b(t)?{spatialReference:a,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function T(t){const{distance:r,units:a}=t,n=t.geometry;if(r==null||"vertexAttributes"in n)return n;const i=n.spatialReference,o=a?C.fromJSON(a):B(i),s=i&&(E(i)||J(i))?n:await P(i,w).then(()=>U(n,w));return(await Q())(s.spatialReference,s,r,o)}async function Q(){return(await Z(()=>import("./geometryEngineJSON-351de259.js"),["assets/geometryEngineJSON-351de259.js","assets/geometryEngineBase-dc274dc3.js","assets/index-3e52b35c.js","assets/index-001d3307.css","assets/geometryEngineJSON-7f69bd77.js","assets/json-48e3ea08.js"])).geodesicBuffer}function st(t){return t&&F in t?JSON.parse(JSON.stringify(t,W)):t}const F="_geVersion",W=(t,r)=>t!==F?r:void 0;export{nt as G,x as M,rt as P,st as Z,at as v,K as z};
