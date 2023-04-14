import{ii as h,i$ as u,r as f}from"./index-0ea7d266.js";import{m as d}from"./query-c7712b9b.js";import{A as y}from"./AttachmentInfo-da00b818.js";import"./normalizeUtils-75ecc35a.js";import"./normalizeUtilsCommon-c67d270a.js";import"./pbfQueryUtils-899955f0.js";import"./pbf-762fbeb5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-16a2b4f3.js";function l(a){const t=a.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function w(a,t){const e={};for(const r of t){const{parentObjectId:o,parentGlobalId:n,attachmentInfos:c}=r;for(const s of c){const{id:m}=s,p=h(u(`${a.path}/${o}/attachments/${m}`)),i=y.fromJSON(s);i.set({url:p,parentObjectId:o,parentGlobalId:n}),e[o]?e[o].push(i):e[o]=[i]}}return e}function x(a,t,e){let o={query:d({...a.query,f:"json",...l(t)})};return e&&(o={...e,...o,query:{...e.query,...o.query}}),f(a.path+"/queryAttachments",o).then(n=>n.data.attachmentGroups)}async function z(a,t,e){const{objectIds:r}=t,o=[];for(const n of r)o.push(f(a.path+"/"+n+"/attachments",e));return Promise.all(o).then(n=>r.map((c,s)=>{const m=n[s].data.attachmentInfos;return{parentObjectId:c,attachmentInfos:m}}))}export{x as executeAttachmentQuery,z as fetchAttachments,w as processAttachmentQueryResult};