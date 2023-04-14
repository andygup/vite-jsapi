import{ae as m,af as v,fy as D,ai as F,bD as O,cE as k,aB as A}from"./index-468a9268.js";var p;let d=p=class extends O{constructor(n){super(n),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new p({variableName:this.variableName,dimensionName:this.dimensionName,values:k(this.values),isSlice:this.isSlice})}};m([v({type:String,json:{write:!0}})],d.prototype,"variableName",void 0);m([v({type:String,json:{write:!0}})],d.prototype,"dimensionName",void 0);m([v({type:D.array(D.oneOf([D.native(Number),D.array(D.native(Number))])),json:{write:!0}})],d.prototype,"values",void 0);m([v({type:Boolean,json:{write:!0}})],d.prototype,"isSlice",void 0);d=p=m([F("esri.layers.support.DimensionalDefinition")],d);const y=d;function N(e,n,r){var t;const o=n.shift();if(r.length===0){const s=[];r.push({sliceId:-1,multidimensionalDefinition:s})}const a=r.length;for(let s=0;s<a;s++){const u=r.shift().multidimensionalDefinition;(t=o.values)==null||t.forEach(l=>{r.push({sliceId:-1,multidimensionalDefinition:[...u,{variableName:e,dimensionName:o.name,values:[l]}]})})}n.length&&N(e,n,r)}function S(e,n){const r=[];let o=0;return(n?e.variables.filter(t=>t.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((t,s)=>t.name>s.name?1:-1)).forEach(t=>{const s=[],u=[...t.dimensions].sort((l,c)=>l.name>c.name?-1:1);N(t.name,u,s),s.forEach(l=>{r.push({...l,sliceId:o++})})}),r}function _(e,n,r){let o=e;if(n&&(n=[...n].sort((a,t)=>a.dimensionName<t.dimensionName?-1:1),n.forEach(({dimensionName:a,values:t,isSlice:s})=>{t.length&&(o=o.filter(u=>{const l=u.multidimensionalDefinition.find(i=>i.dimensionName===a);if(l==null)return!1;const c=l.values[0];return typeof c=="number"?typeof t[0]=="number"?t.includes(c):t.some(i=>i[0]<=c&&i[1]>=c):typeof t[0]=="number"?t.some(i=>c[0]<=i&&c[1]>=i):s?t.some(i=>i[0]===c[0]&&i[0]===c[1]):t.some(i=>i[0]>=c[0]&&i[0]<=c[1]||i[1]>=c[0]&&i[1]<=c[1]||i[0]<c[0]&&i[1]>c[1])}))})),o.length&&r&&r.start!=null&&r.end!=null){const a=r.start.getTime(),t=r.end.getTime(),s=o[0].multidimensionalDefinition.findIndex(u=>u.dimensionName==="StdTime");s>-1&&(o=o.filter(u=>{const l=u.multidimensionalDefinition[s].values[0];return a<=l&&t>=l}))}return o.map(a=>a.sliceId)}function M(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function Y(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function b(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function C(e,n,r){var s,u;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let o;if(r){const{variables:l}=n;if(l.length&&!l.includes(r))return null;const c=n.subsetDefinitions.find(i=>i.dimensionName===e.name&&i.variableName===r);if(!((u=c==null?void 0:c.values)!=null&&u.length))return e;o=b(c.values)}else{const l=n.dimensions.find(({name:c})=>c===e.name);o=l==null?void 0:l.extent}const a=o;if(!a||!(a!=null&&a.length))return e;const t=e.values.filter(l=>M(l,a));return{...e,extent:[...a],values:t}}function T(e,n,r){var a;if(!((a=n==null?void 0:n.subsetDefinitions)!=null&&a.length))return!1;const{variables:o}=n;if(o.length&&e.some(({variableName:t})=>t&&!o.includes(t)))return!0;for(let t=0;t<e.length;t++){const s=e[t],u=n.subsetDefinitions.find(l=>(s.variableName===""||l.variableName===s.variableName)&&l.dimensionName===s.dimensionName);if(u!=null&&u.values.length){const l=b(u.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&r){if(!Y(s.values,l))return!0}else if(s.values.some(i=>!M(i,l)))return!0}}return!1}function x(e,n){if(e==null)return{isOutside:!1};const{geometry:r,timeExtent:o,multidimensionalDefinition:a}=n;let t=null;if(o!=null&&(t=I(e,o),t==null))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&r){const u=r.type==="point"?r:r.type==="extent"?r.center:r.type==="polygon"?r.centroid:null;if(u&&!s.contains(u))return{isOutside:!0}}return a!=null&&a.length&&T(a,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:r,timeExtent:t,multidimensionalDefinition:a}}}function I(e,n){const r=e.dimensions.find(({name:u})=>u==="StdTime");if(r==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:o,end:a}=n.toJSON(),t=o===a?[o]:o!=null&&a!=null?[o,a]:[o??a];if(t.length===2&&(r!=null&&r.extent.length)&&(t[0]=Math.max(t[0],r.extent[0]),t[1]=Math.min(t[1],r.extent[1]??r.extent[0]),t[1]<t[0]))return null;const s=new y({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t});return T([s],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date(t[1]??t[0]),n)}function R(e,n={}){var f,g;const{multidimensionalInfo:r,keyProperties:o}=e;if(r==null)return null;const{variableName:a,multidimensionalSubset:t,multidimensionalDefinition:s}=n,u=s!=null?(f=s[0])==null?void 0:f.variableName:null,l=a||u||(o==null?void 0:o.DefaultVariable);let{variables:c}=r;return(g=t==null?void 0:t.variables)!=null&&g.length&&(c=c.filter(({name:h})=>t.variables.includes(h))),l?c.find(({name:h})=>h===l)??c[0]:c[0]}function B(e,n={}){const r=R(e,n);if(!r)return null;const o=[],{dimensions:a,name:t}=r;if(a.length===0)return[new y({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let s=0;s<a.length;s++){const u=C(a[s],n.multidimensionalSubset,t);if(!u)return null;const{values:l,extent:c}=u;let i=(l==null?void 0:l[0])??c[0];u.name.toLowerCase()==="stdz"&&!u.hasRanges&&Math.abs(c[1])<=Math.abs(c[0])&&(l!=null&&l.length?i=l[l.length-1]:i=c[1]),o.push(new y({variableName:t,dimensionName:u.name,values:[i],isSlice:n.useRangeForRangedDimensionInfo?!!u.hasRanges:!0}))}return o}function J(e){return e==null||!e.length?!1:e.some(n=>{if(n.values==null)return!0;const r=n.values.length;return r===0||r>1||!n.isSlice&&Array.isArray(n.values[0])})}function $(e,n){var o;if(n==null||e==null)return null;let r=n.variables.map(a=>({...a}));return(o=e==null?void 0:e.variables)!=null&&o.length&&(r=r.filter(({name:a})=>e.variables.includes(a)),r.forEach(a=>{a.dimensions=a.dimensions.map(t=>C(t,e,a.name)).filter(A)})),r}function j(e,n){var l;const{values:r}=n;if(r!=null&&r.length){const c=Array.isArray(r[0]),i=Array.isArray(e);return c!==i?-1:c&&i?r.findIndex(f=>f[0]===e[0]&&f[1]===e[1]):r.indexOf(e)}const{extent:o}=n;if(Array.isArray(e)||e<o[0]||e>o[1])return-1;const a=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-o[0])/a);const t=o[0];let s=-1;switch(((l=n.intervalUnit)==null?void 0:l.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-t)/1e3/a);break;case"minutes":s=Math.round((e-t)/6e4/a);break;case"hours":s=Math.round((e-t)/36e5/a);break;case"days":s=Math.round((e-t)/864e5/a);break;case"months":{const c=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),i=new Date(t).getUTCMonth(),f=new Date(e).getUTCMonth();c===0?s=f-i:s=f+11-i+12*(c-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/a);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/a);break}return s}function w(e){var u,l;let n=(u=e.values)==null?void 0:u.length;if(n)return n;const{extent:r,unit:o}=e,a=e.interval||1,t=r?r[1]-r[0]:0;if(o!=="ISO8601")return Math.round(t/a);switch(((l=e.intervalUnit)==null?void 0:l.toLowerCase())??"seconds"){case"seconds":n=Math.round(t/1e3/a);break;case"minutes":n=Math.round(t/6e4/a);break;case"hours":n=Math.round(t/36e5/a);break;case"days":n=Math.round(t/864e5/a);break;case"months":{const c=new Date(r[1]).getUTCFullYear()-new Date(r[0]).getUTCFullYear(),i=new Date(r[0]).getUTCMonth(),f=new Date(r[1]).getUTCMonth();c===0?n=f-i+1:n=f+11-i+12*(c-1)+1}break;case"years":n=Math.round((new Date(r[1]).getUTCFullYear()-new Date(r[0]).getUTCFullYear())/a);break;case"decades":n=Math.round((new Date(r[1]).getUTCFullYear()-new Date(r[0]).getUTCFullYear())/10/a);break;default:n=0}return n}function q(e,n){let r=0;const o=e[0].variableName,a=[...n.variables].sort((t,s)=>t.name>s.name?1:-1);for(let t=0;t<a.length;t++){const s=a[t],u=[...s.dimensions].sort((i,f)=>i.name>f.name?-1:1);if(s.name!==o){r+=u.map(i=>w(i)).reduce((i,f)=>i*f);continue}const l=u.map(i=>w(i)),c=u.length;for(let i=0;i<c;i++){const f=e.find(h=>h.dimensionName===u[i].name);if(f==null)return null;const g=j(f.values[0],u[i]);if(g===-1)return null;l.shift(),i===c-1?r+=g:r+=g*l.reduce((h,U)=>h*U)}break}return r}export{y as D,B as a,J as b,q as c,S as d,_ as e,R as f,$ as g,T as h,x as i};
