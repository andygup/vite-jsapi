import{bw as m,bf as a}from"./index-1ff2b83b.js";import{b as n}from"./queryTopFeatures-4591f5aa.js";import{T as s}from"./TopFeaturesQuery-5d886481.js";import"./normalizeUtils-19de81d3.js";import"./normalizeUtilsCommon-8aa6d9c6.js";import"./query-d11f83f8.js";import"./pbfQueryUtils-fd1aeb3c.js";import"./pbf-8c7438c3.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-647e3446.js";async function l(r,o,e){const p=m(r),t=await n(p,s.from(o),{...e});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{l as executeForTopExtents};
