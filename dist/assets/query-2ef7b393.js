import{gX as m,L as p,h6 as S,bu as x}from"./index-d29f6b97.js";import{b as E}from"./normalizeUtils-4068a3de.js";import{t as O}from"./pbfQueryUtils-90f86c54.js";import{t as g}from"./queryZScale-a900b0db.js";function d(r){const e={};for(const i in r){if(i==="declaredClass")continue;const t=r[i];if(t!=null&&typeof t!="function")if(Array.isArray(t)){e[i]=[];for(let n=0;n<t.length;n++)e[i][n]=d(t[n])}else typeof t=="object"?t.toJSON&&(e[i]=JSON.stringify(t)):e[i]=t}return e}const f="Layer does not support extent calculation.";function R(r,e){if(e&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(e&&r.type==="point")return`${r.x},${r.y}`;const i=r.toJSON();return delete i.spatialReference,JSON.stringify(i)}function b(r,e){const i=r.geometry,t=r.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const n=t;let a,u,l;if(i!=null&&(u=i.spatialReference,l=i.spatialReference.wkid||JSON.stringify(i.spatialReference),n.geometryType=x(i),n.geometry=R(i,r.compactGeometryEnabled),n.inSR=l),t.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?delete n.outFields:t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","),t.outSR?(n.outSR=t.outSR.wkid||JSON.stringify(t.outSR),a=r.outSpatialReference):i&&(t.returnGeometry||t.returnCentroid)&&(n.outSR=n.inSR,a=u),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(n.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(n.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(n.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&u!=null&&r.quantizationParameters!=null&&r.quantizationParameters.extent!=null&&u.equals(r.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(n.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(n.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(n.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const c=t.timeExtent,{start:o,end:y}=c;o==null&&y==null||(n.time=o===y?o:`${o??"null"},${y??"null"}`),delete t.timeExtent}return r.defaultSpatialReferenceEnabled&&u!=null&&a!=null&&u.equals(a)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function P(r,e,i,t){const n=e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await s(r,e,"json",t);return g(e,i,n.data),n}async function $(r,e,i,t){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:i.createFeatureResult()};const n=await j(r,e,t),a=n;return a.data=O(n.data,i),a}function j(r,e,i){return s(r,e,"pbf",i)}function z(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):s(r,e,"json",i,{returnIdsOnly:!0})}function I(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(r,e,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})}async function h(r,e,i){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const t=await s(r,e,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}),n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(f);if(n.hasOwnProperty("count"))throw new Error(f);return t}async function s(r,e,i,t={},n={}){const a=typeof r=="string"?m(r):r,u=e.geometry?[e.geometry]:[];t.responseType=i==="pbf"?"array-buffer":"json";const l=await E(u,null,t),c=l&&l[0];c!=null&&((e=e.clone()).geometry=c);const o=d({...a.query,f:i,...n,...b(e,n)});return p(S(a.path,F(e,n)?"query3d":"query"),{...t,query:{...o,...t.query}})}function F(r,e){return r.formatOf3DObjects!=null&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}export{h as S,$ as c,z as d,j as f,P as m,I as p,d as t,s as x};
