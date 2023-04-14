import{A as c,E as o}from"./executionError-e2eca390.js";import{G as R,p as E,w as S,q as l,am as d}from"./arcadeUtils-cea49a8f.js";import{E as f,S as F}from"./SpatialFilter-e4bd4e50.js";import{cJ as s}from"./index-468a9268.js";import{r as A,c as I,t as C,w as G,o as P,a as g,i as y}from"./geometryEngineAsync-e74bfa44.js";import"./arcadeTimeUtils-e7784ef1.js";import"./FieldsIndex-ab7b931c.js";import"./number-6d110aff.js";import"./Field-88bfb4af.js";import"./fieldType-31d95250.js";import"./featureConversionUtils-78a5344c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./sizeVariableUtils-2914222a.js";import"./WhereClause-885fb487.js";import"./_commonjsHelpers-725317a4.js";function w(n){return n instanceof s}function u(n,i,r,h){return h(n,i,async(a,t,e)=>{if(e.length<2)throw new c(n,o.WrongNumberOfParameters,i);if(e=R(e),e[0]===null&&e[1]===null)return!1;if(l(e[0])){if(e[1]instanceof s)return new F({parentfeatureset:e[0],relation:r,relationGeom:e[1]});if(e[1]===null)return new f({parentfeatureset:e[0]});throw new c(n,o.InvalidParameter,i)}if(w(e[0])){if(w(e[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return y(d(e[0]),d(e[1]));case"esriSpatialRelIntersects":return y(e[0],e[1]);case"esriSpatialRelContains":return g(e[0],e[1]);case"esriSpatialRelOverlaps":return P(e[0],e[1]);case"esriSpatialRelWithin":return G(e[0],e[1]);case"esriSpatialRelTouches":return C(e[0],e[1]);case"esriSpatialRelCrosses":return I(e[0],e[1])}throw new c(n,o.InvalidParameter,i)}if(l(e[1]))return new F({parentfeatureset:e[1],relation:r,relationGeom:e[0]});if(e[1]===null)return!1;throw new c(n,o.InvalidParameter,i)}if(e[0]===null){if(l(e[1]))return new f({parentfeatureset:e[1]});if(e[1]instanceof s||e[1]===null)return!1}else throw new c(n,o.InvalidParameter,i)})}function M(n){n.mode==="async"&&(n.functions.intersects=function(i,r){return u(i,r,"esriSpatialRelIntersects",n.standardFunctionAsync)},n.functions.envelopeintersects=function(i,r){return u(i,r,"esriSpatialRelEnvelopeIntersects",n.standardFunctionAsync)},n.signatures.push({name:"envelopeintersects",min:2,max:2}),n.functions.contains=function(i,r){return u(i,r,"esriSpatialRelContains",n.standardFunctionAsync)},n.functions.overlaps=function(i,r){return u(i,r,"esriSpatialRelOverlaps",n.standardFunctionAsync)},n.functions.within=function(i,r){return u(i,r,"esriSpatialRelWithin",n.standardFunctionAsync)},n.functions.touches=function(i,r){return u(i,r,"esriSpatialRelTouches",n.standardFunctionAsync)},n.functions.crosses=function(i,r){return u(i,r,"esriSpatialRelCrosses",n.standardFunctionAsync)},n.functions.relate=function(i,r){return n.standardFunctionAsync(i,r,(h,a,t)=>{if(t=R(t),E(t,3,3,i,r),w(t[0])&&w(t[1]))return A(t[0],t[1],S(t[2]));if(t[0]instanceof s&&t[1]===null||t[1]instanceof s&&t[0]===null)return!1;if(l(t[0])&&t[1]===null)return new f({parentfeatureset:t[0]});if(l(t[1])&&t[0]===null)return new f({parentfeatureset:t[1]});if(l(t[0])&&t[1]instanceof s)return t[0].relate(t[1],S(t[2]));if(l(t[1])&&t[0]instanceof s)return t[1].relate(t[0],S(t[2]));if(t[0]===null&&t[1]===null)return!1;throw new c(i,o.InvalidParameter,r)})})}export{M as registerFunctions};