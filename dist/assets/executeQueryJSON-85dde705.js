import{bw as u}from"./index-cc043433.js";import{e as c}from"./query-9e3c025a.js";import{F as f}from"./FeatureSet-c867eab0.js";import{Q as i}from"./Query-74ceeec9.js";async function J(e,r,t){const a=await m(e,r,t);return f.fromJSON(a)}async function m(e,r,t){const a=u(e),s={...t},o=i.from(r),{data:n}=await c(a,o,o.sourceSpatialReference,s);return n}export{m as a,J as e};