import{bw as i,bf as a}from"./index-6e11f365.js";import{p as e}from"./queryTopFeatures-420e6869.js";import{S as n}from"./TopFeaturesQuery-9a662a37.js";import"./normalizeUtils-6225a887.js";import"./normalizeUtilsCommon-80217ab8.js";import"./query-23ebfd67.js";import"./pbfQueryUtils-fb5b1b8e.js";import"./pbf-bbb2c34e.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3a00eae2.js";async function F(o,r,m){const p=i(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{F as executeForTopExtents};