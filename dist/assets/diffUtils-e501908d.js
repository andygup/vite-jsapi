import{V as h,dH as D,ak as w}from"./index-6eb28d6b.js";const k=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function y(n){return n instanceof w}function V(n){return n instanceof h?Object.keys(n.items):y(n)?D(n).keys():n?Object.keys(n):[]}function a(n,t){return n instanceof h?n.items[t]:n[t]}function P(n,t){return!(!Array.isArray(n)||!Array.isArray(t))&&n.length!==t.length}function c(n){return n?n.declaredClass:null}function g(n,t){var b;const o=n.diff;if(o&&typeof o=="function")return o(n,t);const i=V(n),f=V(t);if(i.length===0&&f.length===0)return;if(!i.length||!f.length||P(n,t))return{type:"complete",oldValue:n,newValue:t};const s=f.filter(e=>!i.includes(e)),j=i.filter(e=>!f.includes(e)),m=i.filter(e=>f.includes(e)&&a(n,e)!==a(t,e)).concat(s,j).sort(),d=c(n);if(d&&k.includes(d)&&m.length)return{type:"complete",oldValue:n,newValue:t};let p;const A=y(n)&&y(t);for(const e of m){const l=a(n,e),r=a(t,e);let u;if((A||typeof l!="function"&&typeof r!="function")&&l!==r&&(l!=null||r!=null)){if(o&&o[e]&&typeof o[e]=="function")u=(b=o[e])==null?void 0:b.call(o,l,r);else if(l instanceof Date&&r instanceof Date){if(l.getTime()===r.getTime())continue;u={type:"complete",oldValue:l,newValue:r}}else u=typeof l=="object"&&typeof r=="object"&&c(l)===c(r)?g(l,r):{type:"complete",oldValue:l,newValue:r};u!=null&&(p!=null?p.diff[e]=u:p={type:"partial",diff:{[e]:u}})}}return p}function C(n,t){if(n==null)return!1;const o=t.split(".");let i=n;for(const f of o){if(i.type==="complete")return!0;if(i.type!=="partial")return!1;{const s=i.diff[f];if(!s)return!1;i=s}}return!0}function S(n,t){for(const o of t)if(C(n,o))return!0;return!1}function T(n,t){if(typeof n!="function"&&typeof t!="function"&&(n!=null||t!=null))return n==null||t==null||typeof n=="object"&&typeof t=="object"&&c(n)!==c(t)?{type:"complete",oldValue:n,newValue:t}:g(n,t)}export{T as a,S as p,C as s};
