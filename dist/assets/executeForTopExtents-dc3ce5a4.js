import{bw as i,bf as a}from"./index-3e52b35c.js";import{p as e}from"./queryTopFeatures-7752d7c6.js";import{S as n}from"./TopFeaturesQuery-1358fe74.js";import"./normalizeUtils-9330ffa6.js";import"./normalizeUtilsCommon-31392f08.js";import"./query-ec68f1b6.js";import"./pbfQueryUtils-cd7edefd.js";import"./pbf-25d38809.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-8e1a8060.js";async function F(o,r,m){const p=i(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{F as executeForTopExtents};
