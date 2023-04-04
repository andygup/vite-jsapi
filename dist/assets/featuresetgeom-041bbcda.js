import{q as R,V as y,K as f,P as a,t as u,e as p,an as d}from"./arcadeUtils-93ccece7.js";import{u as l,h as w}from"./SpatialFilter-878e189f.js";import{p as s}from"./Extent-7f29a1bb.js";import{R as F,m as I,S as A,x as P,O as g,p as C,h}from"./geometryEngineAsync-8800ba51.js";import"./geometry-4b789d90.js";import"./ensureType-fa162cfc.js";import"./string-3d0ebcd3.js";import"./typedArrayUtil-2bcf3cee.js";import"./Error-bd05b442.js";import"./Polyline-c56eca9b.js";import"./cast-daef7652.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-29120e0a.js";import"./typeUtils-d7b057b5.js";import"./jsonMap-a9c94baf.js";import"./preload-helper-101896b7.js";import"./number-8b20c6e8.js";import"./locale-30120714.js";import"./Field-0ac3c9d2.js";import"./enumeration-e46f3fd4.js";import"./fieldType-4ec45634.js";import"./jsonUtils-8bd548d9.js";import"./featureConversionUtils-7c9ea581.js";import"./OptimizedFeature-9345d11b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-c2b0ab45.js";import"./unitUtils-43365914.js";import"./Portal-ac0dca24.js";import"./Loadable-7c89bd10.js";import"./Promise-088a0e17.js";import"./PortalGroup-f3dee6d8.js";import"./PortalUser-cdb4116b.js";import"./sizeVariableUtils-d4870b0d.js";import"./WhereClause-fc7e60fe.js";import"./FieldsIndex-394de0a1.js";import"./fieldUtils-021fea8a.js";import"./arcadeOnDemand-87969052.js";import"./workers-125ce03d.js";import"./Connection-98b56925.js";import"./Queue-e839cb6a.js";import"./assets-4cb15247.js";import"./intl-afc91037.js";import"./number-53937715.js";import"./messages-03a939ad.js";function c(t){return t instanceof s}function o(t,e,i,m){return m(t,e,async(S,n,r)=>{if(r.length<2)throw new u(t,p.WrongNumberOfParameters,e);if((r=R(r))[0]===null&&r[1]===null)return!1;if(a(r[0])){if(r[1]instanceof s)return new w({parentfeatureset:r[0],relation:i,relationGeom:r[1]});if(r[1]===null)return new l({parentfeatureset:r[0]});throw new u(t,p.InvalidParameter,e)}if(c(r[0])){if(c(r[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":return h(d(r[0]),d(r[1]));case"esriSpatialRelIntersects":return h(r[0],r[1]);case"esriSpatialRelContains":return C(r[0],r[1]);case"esriSpatialRelOverlaps":return g(r[0],r[1]);case"esriSpatialRelWithin":return P(r[0],r[1]);case"esriSpatialRelTouches":return A(r[0],r[1]);case"esriSpatialRelCrosses":return I(r[0],r[1])}throw new u(t,p.InvalidParameter,e)}if(a(r[1]))return new w({parentfeatureset:r[1],relation:i,relationGeom:r[0]});if(r[1]===null)return!1;throw new u(t,p.InvalidParameter,e)}if(r[0]!==null)throw new u(t,p.InvalidParameter,e);return a(r[1])?new l({parentfeatureset:r[1]}):!(r[1]instanceof s||r[1]===null)&&void 0})}function hr(t){t.mode==="async"&&(t.functions.intersects=function(e,i){return o(e,i,"esriSpatialRelIntersects",t.standardFunctionAsync)},t.functions.envelopeintersects=function(e,i){return o(e,i,"esriSpatialRelEnvelopeIntersects",t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:2,max:2}),t.functions.contains=function(e,i){return o(e,i,"esriSpatialRelContains",t.standardFunctionAsync)},t.functions.overlaps=function(e,i){return o(e,i,"esriSpatialRelOverlaps",t.standardFunctionAsync)},t.functions.within=function(e,i){return o(e,i,"esriSpatialRelWithin",t.standardFunctionAsync)},t.functions.touches=function(e,i){return o(e,i,"esriSpatialRelTouches",t.standardFunctionAsync)},t.functions.crosses=function(e,i){return o(e,i,"esriSpatialRelCrosses",t.standardFunctionAsync)},t.functions.relate=function(e,i){return t.standardFunctionAsync(e,i,(m,S,n)=>{if(n=R(n),y(n,3,3,e,i),c(n[0])&&c(n[1]))return F(n[0],n[1],f(n[2]));if(n[0]instanceof s&&n[1]===null||n[1]instanceof s&&n[0]===null)return!1;if(a(n[0])&&n[1]===null)return new l({parentfeatureset:n[0]});if(a(n[1])&&n[0]===null)return new l({parentfeatureset:n[1]});if(a(n[0])&&n[1]instanceof s)return n[0].relate(n[1],f(n[2]));if(a(n[1])&&n[0]instanceof s)return n[1].relate(n[0],f(n[2]));if(n[0]===null&&n[1]===null)return!1;throw new u(e,p.InvalidParameter,i)})})}export{hr as registerFunctions};
