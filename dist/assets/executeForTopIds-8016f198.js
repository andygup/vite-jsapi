import{bw as p}from"./index-0ea7d266.js";import{a as s}from"./queryTopFeatures-152f1a99.js";import{T as m}from"./TopFeaturesQuery-c828c64c.js";import"./normalizeUtils-75ecc35a.js";import"./normalizeUtilsCommon-c67d270a.js";import"./query-c7712b9b.js";import"./pbfQueryUtils-899955f0.js";import"./pbf-762fbeb5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-16a2b4f3.js";async function b(r,o,t){const e=p(r);return(await s(e,m.from(o),{...t})).data.objectIds}export{b as executeForTopIds};