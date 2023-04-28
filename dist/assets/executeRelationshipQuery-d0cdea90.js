import{L as m,bw as l}from"./index-6e11f365.js";import{t as p}from"./query-23ebfd67.js";import{g as R}from"./FeatureSet-6fca0780.js";import f from"./RelationshipQuery-41cd9e6a.js";import"./normalizeUtils-6225a887.js";import"./normalizeUtilsCommon-80217ab8.js";import"./pbfQueryUtils-fb5b1b8e.js";import"./pbf-bbb2c34e.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3a00eae2.js";import"./Field-c6730f31.js";import"./fieldType-4933b961.js";import"./Query-1f986dc6.js";function j(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function S(r,t,e){const n=await y(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,i={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)i[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(i[c[u]]=d)}return{...n,data:i}}async function b(r,t,e){const n=await y(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,t,e={},n){const o=p({...r.query,f:"json",...n,...j(t,n)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function $(r,t,e){t=f.from(t);const n=l(r);return S(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(i=>a[i]=R.fromJSON(s[i])),a})}async function v(r,t,e){t=f.from(t);const n=l(r);return b(n,t,{...e}).then(o=>o.data)}export{$ as executeRelationshipQuery,v as executeRelationshipQueryForCount};