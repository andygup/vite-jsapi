import{cG as f,u as h}from"./index-6e11f365.js";import{L as r,h as y}from"./color-6aa54378.js";import{E as z}from"./definitions-e9823d3c.js";import{l as g}from"./visualVariablesUtils-c6c91d03.js";const S=8388607,v=8388608,$=254,E=255,A=0,m=1,d=s=>(s&v)>>>23,D=s=>s&S,F=s=>d(s)===m?$:E;function L(s){return d(s)===m}function U(s,t){return((t?v:0)|s)>>>0}const R=(s,t)=>s&&((...e)=>t.warn("DEBUG:",...e))||(()=>null),T=!1;function Z(s,t){if(!s||!t)return s;switch(t){case"radius":case"distance":return 2*s;case"diameter":case"width":return s;case"area":return Math.sqrt(s)}return s}function x(s){return{value:s.value,size:f(s.size)}}function a(s){return(s??[]).map(t=>x(t))}function u(s){if(typeof s=="string"||typeof s=="number")return f(s);const t=s;return{type:"size",expression:t.expression,stops:a(t.stops)}}const c=s=>{const t=[],e=[],n=a(s),o=n.length;for(let l=0;l<6;l++){const i=n[Math.min(l,o-1)];t.push(i.value),e.push(i.size==null?z:h(i.size))}return{values:new Float32Array(t),sizes:new Float32Array(e)}};function k(s){const t=s&&s.length>0?{}:null,e=t?{}:null;if(!t||!e)return{vvFields:t,vvRanges:e};for(const n of s)if(n.field&&(t[n.type]=n.field),n.type==="size"){e.size||(e.size={});const o=n;switch(g(o)){case r.SIZE_MINMAX_VALUE:e.size.minMaxValue={minDataValue:o.minDataValue,maxDataValue:o.maxDataValue,minSize:u(o.minSize),maxSize:u(o.maxSize)};break;case r.SIZE_SCALE_STOPS:e.size.scaleStops={stops:a(o.stops)};break;case r.SIZE_FIELD_STOPS:if(o.levels){const l={};for(const i in o.levels)l[i]=c(o.levels[i]);e.size.fieldStops={type:"level-dependent",levels:l}}else e.size.fieldStops={type:"static",...c(o.stops)};break;case r.SIZE_UNIT_VALUE:e.size.unitValue={unit:o.valueUnit,valueRepresentation:o.valueRepresentation??void 0}}}else if(n.type==="color")e.color=_(n);else if(n.type==="opacity")e.opacity=V(n);else if(n.type==="rotation"){const o=n;e.rotation={type:o.rotationType}}return{vvFields:t,vvRanges:e}}function V(s){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof s.field=="string"){if(!s.stops)return null;{if(s.stops.length>8)return null;const e=s.stops;for(let n=0;n<8;++n){const o=e[Math.min(n,e.length-1)];t.values[n]=o.value,t.opacities[n]=o.opacity}}}else{if(!(s.stops&&s.stops.length>=0))return null;{const e=s.stops&&s.stops.length>=0?s.stops[0].opacity:0;for(let n=0;n<8;n++)t.values[n]=1/0,t.opacities[n]=e}}return t}function p(s,t,e){s[4*t]=e.r/255,s[4*t+1]=e.g/255,s[4*t+2]=e.b/255,s[4*t+3]=e.a}function _(s){if(s==null||s.normalizationField)return null;const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof s.field=="string"){if(!s.stops)return null;{if(s.stops.length>8)return null;t.field=s.field;const e=s.stops;for(let n=0;n<8;++n){const o=e[Math.min(n,e.length-1)];t.values[n]=o.value,p(t.colors,n,o.color)}}}else{if(!(s.stops&&s.stops.length>=0))return null;{const e=s.stops&&s.stops.length>=0&&s.stops[0].color;for(let n=0;n<8;n++)t.values[n]=1/0,p(t.colors,n,e)}}for(let e=0;e<32;e+=4)y(t.colors,e,!0);return t}export{Z as a,S as b,m as c,k as d,d as e,D as f,F as i,T as l,R as n,L as p,U as s,A as u};