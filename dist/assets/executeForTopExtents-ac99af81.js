import{bw as m,bf as a}from"./index-0ea7d266.js";import{b as n}from"./queryTopFeatures-152f1a99.js";import{T as s}from"./TopFeaturesQuery-c828c64c.js";import"./normalizeUtils-75ecc35a.js";import"./normalizeUtilsCommon-c67d270a.js";import"./query-c7712b9b.js";import"./pbfQueryUtils-899955f0.js";import"./pbf-762fbeb5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-16a2b4f3.js";async function l(r,o,e){const p=m(r),t=await n(p,s.from(o),{...e});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{l as executeForTopExtents};