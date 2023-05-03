import{L as m,bG as l}from"./index-d29f6b97.js";import{t as p}from"./query-2ef7b393.js";import{g as R}from"./FeatureSet-b4c3ebab.js";import f from"./RelationshipQuery-7bc28ffc.js";import"./normalizeUtils-4068a3de.js";import"./normalizeUtilsCommon-6017271d.js";import"./pbfQueryUtils-90f86c54.js";import"./pbf-94fe703e.js";import"./queryZScale-a900b0db.js";import"./Query-02316d46.js";function j(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function S(r,t,e){const n=await y(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,c={};for(const i of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:i.relatedRecords};if(i.objectId!=null)c[i.objectId]=d;else for(const u of Object.keys(i))u!=="relatedRecords"&&(c[i[u]]=d)}return{...n,data:c}}async function b(r,t,e){const n=await y(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,t,e={},n){const o=p({...r.query,f:"json",...n,...j(t,n)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function w(r,t,e){t=f.from(t);const n=l(r);return S(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(c=>a[c]=R.fromJSON(s[c])),a})}async function x(r,t,e){t=f.from(t);const n=l(r);return b(n,t,{...e}).then(o=>o.data)}export{w as executeRelationshipQuery,x as executeRelationshipQueryForCount};
