import{w as D,m as k}from"./cast-daef7652.js";import{j as V}from"./Collection-e2259e32.js";import{t as u,r as g}from"./typedArrayUtil-2bcf3cee.js";const P=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function m(t){return t instanceof k}function h(t){return t instanceof V?Object.keys(t.items):m(t)?D(t).keys():t?Object.keys(t):[]}function y(t,n){return t instanceof V?t.items[n]:t[n]}function C(t,n){return!(!Array.isArray(t)||!Array.isArray(n))&&t.length!==n.length}function s(t){return t?t.declaredClass:null}function j(t,n){const o=t.diff;if(o&&typeof o=="function")return o(t,n);const f=h(t),l=h(n);if(f.length===0&&l.length===0)return;if(!f.length||!l.length||C(t,n))return{type:"complete",oldValue:t,newValue:n};const p=l.filter(e=>!f.includes(e)),w=f.filter(e=>!l.includes(e)),d=f.filter(e=>l.includes(e)&&y(t,e)!==y(n,e)).concat(p,w).sort(),b=s(t);if(b&&P.includes(b)&&d.length)return{type:"complete",oldValue:t,newValue:n};let a;const A=m(t)&&m(n);for(const e of d){const r=y(t,e),i=y(n,e);let c;if((A||typeof r!="function"&&typeof i!="function")&&r!==i&&(r!=null||i!=null)){if(o&&o[e]&&typeof o[e]=="function")c=o[e](r,i);else if(r instanceof Date&&i instanceof Date){if(r.getTime()===i.getTime())continue;c={type:"complete",oldValue:r,newValue:i}}else c=typeof r=="object"&&typeof i=="object"&&s(r)===s(i)?j(r,i):{type:"complete",oldValue:r,newValue:i};g(c)&&(g(a)?a.diff[e]=c:a={type:"partial",diff:{[e]:c}})}}return a}function O(t,n){if(u(t))return!1;const o=n.split(".");let f=t;for(const l of o){if(f.type==="complete")return!0;if(f.type!=="partial")return!1;{const p=f.diff[l];if(!p)return!1;f=p}}return!0}function q(t,n){for(const o of n)if(O(t,o))return!0;return!1}function v(t,n){if(!(typeof t=="function"||typeof n=="function"||u(t)&&u(n)))return u(t)||u(n)||typeof t=="object"&&typeof n=="object"&&s(t)!==s(n)?{type:"complete",oldValue:t,newValue:n}:j(t,n)}export{O as a,v as m,q as y};
