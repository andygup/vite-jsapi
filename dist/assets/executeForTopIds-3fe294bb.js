import{bw as p}from"./index-b4b3ae7d.js";import{a as s}from"./queryTopFeatures-f4c49cd5.js";import{T as m}from"./TopFeaturesQuery-d1af170e.js";import"./normalizeUtils-a85cdb25.js";import"./normalizeUtilsCommon-fdc8c13f.js";import"./query-609d3d40.js";import"./pbfQueryUtils-52c7ea8b.js";import"./pbf-92be14fc.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-47262fd1.js";async function b(r,o,t){const e=p(r);return(await s(e,m.from(o),{...t})).data.objectIds}export{b as executeForTopIds};