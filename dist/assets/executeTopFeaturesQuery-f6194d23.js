import{bG as f}from"./index-c18a96f3.js";import{y as e}from"./queryTopFeatures-7bbddc63.js";import{g as s}from"./FeatureSet-037cc3b1.js";import{S as n}from"./TopFeaturesQuery-0b0fa5be.js";import"./normalizeUtils-55909f8c.js";import"./normalizeUtilsCommon-f4f57432.js";import"./query-e124a463.js";import"./pbfQueryUtils-c33d2f62.js";import"./pbf-355c66cc.js";import"./queryZScale-275d69e0.js";async function F(r,o,t,m){const i=f(r),p={...m},{data:a}=await e(i,n.from(o),t,p);return s.fromJSON(a)}export{F as executeTopFeaturesQuery};