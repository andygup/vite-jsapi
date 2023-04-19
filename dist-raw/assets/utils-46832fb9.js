import{cG as U,gc as b,bB as F,cn as O,cd as M,cm as J,b9 as B,fr as v,gd as Q,ge as j,df as A,g5 as w,_ as D}from"./index-0cbe37a0.js";import{n as I}from"./normalizeUtils-89acfe4c.js";import{g as K,q as p,r as T,o as d,b as V,p as W,s as Y}from"./featureConversionUtils-f0b03e2b.js";import{O as G}from"./OptimizedGeometry-af84d2ad.js";import{c as z,p as E}from"./projectionSupport-f22cfeca.js";const C=new U({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),P=Object.freeze({}),x=new G,H=new G,S=new G,r={esriGeometryPoint:d,esriGeometryPolyline:V,esriGeometryPolygon:W,esriGeometryMultipoint:Y};function it(t,s,o,i=t.hasZ,e=t.hasM){if(s==null)return null;const l=t.hasZ&&i,a=t.hasM&&e;if(o){const n=p(S,s,t.hasZ,t.hasM,"esriGeometryPoint",o,i,e);return d(n,l,a)}return d(s,l,a)}function st(t,s,o,i,e,l,a=s,n=o){var R,_,g;const f=s&&a,m=o&&n,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(e){let u=K(H,c,s,o,t,e,a,n);return l&&(u=p(S,u,f,m,t,l)),((R=r[t])==null?void 0:R.call(r,u,f,m))??null}if(l){const u=p(S,c,s,o,t,l,a,n);return((_=r[t])==null?void 0:_.call(r,u,f,m))??null}return T(x,c,s,o,a,n),((g=r[t])==null?void 0:g.call(r,x,f,m))??null}async function ot(t,s,o){const{outFields:i,orderByFields:e,groupByFieldsForStatistics:l,outStatistics:a}=t;if(i)for(let n=0;n<i.length;n++)i[n]=i[n].trim();if(e)for(let n=0;n<e.length;n++)e[n]=e[n].trim();if(l)for(let n=0;n<l.length;n++)l[n]=l[n].trim();if(a)for(let n=0;n<a.length;n++)a[n].onStatisticField&&(a[n].onStatisticField=a[n].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),$(t,s,o)}async function $(t,s,o){var l;if(!t)return null;let{where:i}=t;if(t.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||s&&s===i)&&(t.where=null),!t.geometry)return t;let e=await Z(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:a}=t.geometry;e=b(e),e.spatialReference=a}if(e){await z(e.spatialReference,o),e=X(e,o);const a=(await I(F(e)))[0];if(a==null)throw P;const n="quantizationParameters"in t&&((l=t.quantizationParameters)==null?void 0:l.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,f=n&&h(e,o)?{densificationStep:n*8}:void 0,m=a.toJSON(),c=await E(m,m.spatialReference,o,f);if(!c)throw P;c.spatialReference=o,t.geometry=c}return t}function h(t,s){if(!t)return!1;const o=t.spatialReference;return(O(t)||M(t)||J(t))&&!B(o,s)&&!v(o,s)}function X(t,s){const o=t.spatialReference;return h(t,s)&&O(t)?{spatialReference:o,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function Z(t){const{distance:s,units:o}=t,i=t.geometry;if(s==null||"vertexAttributes"in i)return i;const e=i.spatialReference,l=o?C.fromJSON(o):Q(e),n=e&&(j(e)||A(e))?i:await z(e,w).then(()=>E(i,w));return(await y())(n.spatialReference,n,s,l)}async function y(){return(await D(()=>import("./geometryEngineJSON-cc3e5884.js"),["assets/geometryEngineJSON-cc3e5884.js","assets/index-0cbe37a0.js","assets/index-d832a396.css","assets/geometryEngineJSON-a1e58e02.js","assets/json-9ae8d6f8.js"])).geodesicBuffer}function at(t){return!t||!(N in t)?t:JSON.parse(JSON.stringify(t,k))}const N="_geVersion",k=(t,s)=>t!==N?s:void 0;export{P as Q,$ as a,at as c,st as g,ot as n,it as t};