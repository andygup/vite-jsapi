import{bw as a}from"./index-0ea7d266.js";import{e as s}from"./queryTopFeatures-152f1a99.js";import{F as u}from"./FeatureSet-492be28c.js";import{T as f}from"./TopFeaturesQuery-c828c64c.js";import"./normalizeUtils-75ecc35a.js";import"./normalizeUtilsCommon-c67d270a.js";import"./query-c7712b9b.js";import"./pbfQueryUtils-899955f0.js";import"./pbf-762fbeb5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-16a2b4f3.js";import"./Field-da71a869.js";import"./fieldType-2fab90c6.js";async function N(r,t,o,e){const p=a(r),m={...e},{data:i}=await s(p,f.from(t),o,m);return u.fromJSON(i)}export{N as executeTopFeaturesQuery};
