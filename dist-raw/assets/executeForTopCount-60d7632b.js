import{bw as e}from"./index-0cbe37a0.js";import{c as m}from"./queryTopFeatures-31803f9e.js";import{T as i}from"./TopFeaturesQuery-89caf902.js";import"./normalizeUtils-89acfe4c.js";import"./normalizeUtilsCommon-088d2983.js";import"./query-b80addb9.js";import"./pbfQueryUtils-dcfea191.js";import"./pbf-eedd4b9c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-ceba2e44.js";async function w(o,r,t){const p=e(o);return(await m(p,i.from(r),{...t})).data.count}export{w as executeForTopCount};