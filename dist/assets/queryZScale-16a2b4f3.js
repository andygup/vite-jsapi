import{fm as n}from"./index-0ea7d266.js";function c(o,t,e){if(!e||!e.features||!e.hasZ)return;const r=n(e.geometryType,t,o.outSpatialReference);if(r!=null)for(const a of e.features)r(a.geometry)}export{c as a};