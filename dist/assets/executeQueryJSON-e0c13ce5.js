import{bG as i}from"./index-d29f6b97.js";import{m as s}from"./query-2ef7b393.js";import{g as c}from"./FeatureSet-b4c3ebab.js";import{b as e}from"./Query-02316d46.js";async function y(r,o,t){const a=await p(r,o,t);return c.fromJSON(a)}async function p(r,o,t){const a=i(r),m={...t},n=e.from(o),{data:f}=await s(a,n,n.sourceSpatialReference,m);return f}export{p as a,y as s};
