import{bw as i}from"./index-3e52b35c.js";import{m as s}from"./query-ec68f1b6.js";import{g as c}from"./FeatureSet-97410c4e.js";import{b as e}from"./Query-b2fb59d0.js";async function y(r,o,t){const a=await p(r,o,t);return c.fromJSON(a)}async function p(r,o,t){const a=i(r),m={...t},n=e.from(o),{data:f}=await s(a,n,n.sourceSpatialReference,m);return f}export{p as a,y as s};
