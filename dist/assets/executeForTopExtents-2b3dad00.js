import{bw as m,bf as a}from"./index-37fc1c1b.js";import{b as n}from"./queryTopFeatures-dca95b9f.js";import{T as s}from"./TopFeaturesQuery-fc17221d.js";import"./normalizeUtils-e8b8b395.js";import"./normalizeUtilsCommon-e9d0815c.js";import"./query-8b36ad55.js";import"./pbfQueryUtils-a8b0537a.js";import"./pbf-b50d150c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-215dd637.js";async function l(r,o,e){const p=m(r),t=await n(p,s.from(o),{...e});return{count:t.data.count,extent:a.fromJSON(t.data.extent)}}export{l as executeForTopExtents};
