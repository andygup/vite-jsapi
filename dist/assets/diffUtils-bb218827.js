import{J as D,dB as w,aj as P}from"./index-b4b3ae7d.js";const O=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function y(e){return e instanceof P}function A(e){return e instanceof D?Object.keys(e.items):y(e)?w(e).keys():e?Object.keys(e):[]}function p(e,t){return e instanceof D?e.items[t]:e[t]}function T(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length:!1}function l(e){return e?e.declaredClass:null}function V(e,t){var g;const i=e.diff;if(i&&typeof i=="function")return i(e,t);const r=A(e),c=A(t);if(r.length===0&&c.length===0)return;if(!r.length||!c.length||T(e,t))return{type:"complete",oldValue:e,newValue:t};const s=c.filter(n=>!r.includes(n)),K=r.filter(n=>!c.includes(n)),d=r.filter(n=>c.includes(n)&&p(e,n)!==p(t,n)).concat(s,K).sort(),m=l(e);if(m&&O.includes(m)&&d.length)return{type:"complete",oldValue:e,newValue:t};let a;const C=y(e)&&y(t);for(const n of d){const o=p(e,n),f=p(t,n);let u;if(!(!C&&(typeof o=="function"||typeof f=="function"))&&o!==f&&!(o==null&&f==null)){if(i&&i[n]&&typeof i[n]=="function")u=(g=i[n])==null?void 0:g.call(i,o,f);else if(o instanceof Date&&f instanceof Date){if(o.getTime()===f.getTime())continue;u={type:"complete",oldValue:o,newValue:f}}else typeof o=="object"&&typeof f=="object"&&l(o)===l(f)?u=V(o,f):u={type:"complete",oldValue:o,newValue:f};u!=null&&(a!=null?a.diff[n]=u:a={type:"partial",diff:{[n]:u}})}}return a}function b(e,t){if(e==null)return!1;const i=t.split(".");let r=e;for(const c of i){if(r.type==="complete")return!0;if(r.type==="partial"){const s=r.diff[c];if(s)r=s;else return!1}else return!1}return!0}function k(e,t){for(const i of t)if(b(e,i))return!0;return!1}function v(e,t){if(!(typeof e=="function"||typeof t=="function"||e==null&&t==null))return e==null||t==null||typeof e=="object"&&typeof t=="object"&&l(e)!==l(t)?{type:"complete",oldValue:e,newValue:t}:V(e,t)}export{k as a,v as d,b as h};
