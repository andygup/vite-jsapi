import{bw as a}from"./index-468a9268.js";import{e as s}from"./queryTopFeatures-b2db8cc4.js";import{F as u}from"./FeatureSet-09da8445.js";import{T as f}from"./TopFeaturesQuery-c849ff6c.js";import"./normalizeUtils-9dd6c69b.js";import"./normalizeUtilsCommon-6cabd780.js";import"./query-96f83d41.js";import"./pbfQueryUtils-5838fd47.js";import"./pbf-77fea3f9.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-5d7016ca.js";import"./Field-88bfb4af.js";import"./fieldType-31d95250.js";async function N(r,t,o,e){const p=a(r),m={...e},{data:i}=await s(p,f.from(t),o,m);return u.fromJSON(i)}export{N as executeTopFeaturesQuery};