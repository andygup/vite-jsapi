import{bw as u}from"./index-30d9bb6f.js";import{e as c}from"./query-8b21a5fd.js";import{F as f}from"./FeatureSet-62b3105d.js";import{Q as i}from"./Query-0803ea89.js";async function J(e,r,t){const a=await m(e,r,t);return f.fromJSON(a)}async function m(e,r,t){const a=u(e),s={...t},o=i.from(r),{data:n}=await c(a,o,o.sourceSpatialReference,s);return n}export{m as a,J as e};
