import{bw as e}from"./index-468a9268.js";import{c as m}from"./queryTopFeatures-b2db8cc4.js";import{T as i}from"./TopFeaturesQuery-c849ff6c.js";import"./normalizeUtils-9dd6c69b.js";import"./normalizeUtilsCommon-6cabd780.js";import"./query-96f83d41.js";import"./pbfQueryUtils-5838fd47.js";import"./pbf-77fea3f9.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-5d7016ca.js";async function w(o,r,t){const p=e(o);return(await m(p,i.from(r),{...t})).data.count}export{w as executeForTopCount};