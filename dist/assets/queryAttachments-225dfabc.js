import{iy as h,jd as d,L as p}from"./index-6e11f365.js";import{t as f}from"./query-23ebfd67.js";import{l}from"./AttachmentInfo-ee6f6139.js";import"./normalizeUtils-6225a887.js";import"./normalizeUtilsCommon-80217ab8.js";import"./pbfQueryUtils-fb5b1b8e.js";import"./pbf-bbb2c34e.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3a00eae2.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function G(n,t){const o={};for(const a of t){const{parentObjectId:e,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(d(`${n.path}/${e}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:e,parentGlobalId:s}),o[e]?o[e].push(m):o[e]=[m]}}return o}function T(n,t,o){let a={query:f({...n.query,f:"json",...y(t)})};return o&&(a={...o,...a,query:{...o.query,...a.query}}),p(n.path+"/queryAttachments",a).then(e=>e.data.attachmentGroups)}async function x(n,t,o){const{objectIds:a}=t,e=[];for(const s of a)e.push(p(n.path+"/"+s+"/attachments",o));return Promise.all(e).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{T as executeAttachmentQuery,x as fetchAttachments,G as processAttachmentQueryResult};