import{bw as p}from"./index-b51e75d5.js";import{a as s}from"./queryTopFeatures-e6eafb3e.js";import{T as m}from"./TopFeaturesQuery-4a471142.js";import"./normalizeUtils-ba8520b6.js";import"./normalizeUtilsCommon-62742346.js";import"./query-ca627c6b.js";import"./pbfQueryUtils-e677c01b.js";import"./pbf-6051aa71.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-3a414c62.js";async function b(r,o,t){const e=p(r);return(await s(e,m.from(o),{...t})).data.objectIds}export{b as executeForTopIds};