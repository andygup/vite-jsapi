import{gX as p,L as m,h6 as c,bu as f}from"./index-d29f6b97.js";import{b as F}from"./normalizeUtils-4068a3de.js";import{t as E}from"./query-2ef7b393.js";import{t as g}from"./queryZScale-a900b0db.js";const a="Layer does not support extent calculation.";function j(o,e){var u,s;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=f(n),r.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),(u=t.topFilter)!=null&&u.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(s=t.topFilter)!=null&&s.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=t.outSR.wkid||JSON.stringify(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const y=t.timeExtent,{start:i,end:l}=y;i==null&&l==null||(r.time=i===l?i:`${i??"null"},${l??"null"}`),delete t.timeExtent}return r}async function B(o,e,n,t){const r=await d(o,e,"json",t);return g(e,n,r.data),r}async function R(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function b(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(a);if(r.hasOwnProperty("count"))throw new Error(a);return t})}function h(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const u=typeof o=="string"?p(o):o,s=e.geometry?[e.geometry]:[];return t.responseType=n==="pbf"?"array-buffer":"json",F(s,null,t).then(y=>{const i=y&&y[0];i!=null&&((e=e.clone()).geometry=i);const l=E({...u.query,f:n,...r,...j(e,r)});return m(c(u.path,"queryTopFeatures"),{...t,query:{...l,...t.query}})})}export{R as d,h as m,b as p,B as y};
