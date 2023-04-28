import{dv as m,L as p,eu as S,bz as x}from"./index-6e11f365.js";import{b as E}from"./normalizeUtils-6225a887.js";import{t as g}from"./pbfQueryUtils-fb5b1b8e.js";import{t as O}from"./queryZScale-3a00eae2.js";function d(r){const e={};for(const i in r){if(i==="declaredClass")continue;const t=r[i];if(t!=null&&typeof t!="function")if(Array.isArray(t)){e[i]=[];for(let n=0;n<t.length;n++)e[i][n]=d(t[n])}else typeof t=="object"?t.toJSON&&(e[i]=JSON.stringify(t)):e[i]=t}return e}const f="Layer does not support extent calculation.";function R(r,e){if(e&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(e&&r.type==="point")return`${r.x},${r.y}`;const i=r.toJSON();return delete i.spatialReference,JSON.stringify(i)}function F(r,e){const i=r.geometry,t=r.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const n=t;let a,o,l;if(i!=null&&(o=i.spatialReference,l=i.spatialReference.wkid||JSON.stringify(i.spatialReference),n.geometryType=x(i),n.geometry=R(i,r.compactGeometryEnabled),n.inSR=l),t.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?delete n.outFields:t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","),t.outSR?(n.outSR=t.outSR.wkid||JSON.stringify(t.outSR),a=r.outSpatialReference):i&&(t.returnGeometry||t.returnCentroid)&&(n.outSR=n.inSR,a=o),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(n.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(n.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(n.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&o!=null&&r.quantizationParameters!=null&&r.quantizationParameters.extent!=null&&o.equals(r.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(n.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(n.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(n.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const c=t.timeExtent,{start:u,end:y}=c;u==null&&y==null||(n.time=u===y?u:`${u??"null"},${y??"null"}`),delete t.timeExtent}return r.defaultSpatialReferenceEnabled&&o!=null&&a!=null&&o.equals(a)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function w(r,e,i,t){const n=e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await s(r,e,"json",t);return O(e,i,n.data),n}async function z(r,e,i,t){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:i.createFeatureResult()};const n=await b(r,e,t),a=n;return a.data=g(n.data,i),a}function b(r,e,i){return s(r,e,"pbf",i)}function P(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):s(r,e,"json",i,{returnIdsOnly:!0})}function $(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(r,e,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})}async function I(r,e,i){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const t=await s(r,e,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}),n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(f);if(n.hasOwnProperty("count"))throw new Error(f);return t}async function s(r,e,i,t={},n={}){const a=typeof r=="string"?m(r):r,o=e.geometry?[e.geometry]:[];t.responseType=i==="pbf"?"array-buffer":"json";const l=await E(o,null,t),c=l&&l[0];c!=null&&((e=e.clone()).geometry=c);const u=d({...a.query,f:i,...n,...F(e,n)});return p(S(a.path,e.is3D?"query3d":"query"),{...t,query:{...u,...t.query}})}export{I as S,z as c,b as d,P as f,w as m,$ as p,d as t};