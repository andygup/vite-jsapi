import{bw as u}from"./index-b4b3ae7d.js";import{e as c}from"./query-609d3d40.js";import{F as f}from"./FeatureSet-aa200b6b.js";import{Q as i}from"./Query-d1069a20.js";async function J(e,r,t){const a=await m(e,r,t);return f.fromJSON(a)}async function m(e,r,t){const a=u(e),s={...t},o=i.from(r),{data:n}=await c(a,o,o.sourceSpatialReference,s);return n}export{m as a,J as e};