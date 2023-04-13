import{c as I,C as b}from"./generateRendererUtils-d74149bb.js";const D="<Null>",T="equal-interval",z=1,V=5,k=10,M=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,F=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),B=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function g(n){return n==null||typeof n=="string"&&!n?D:n}function q(n){const t=n.normalizationField!=null||n.normalizationType!=null,e=n.minValue!=null||n.maxValue!=null,l=!!n.sqlExpression&&n.supportsSQLExpression;return!t&&!e&&!l}function L(n){const t=n.returnDistinct?[...new Set(n.values)]:n.values,e=t.filter(r=>r!=null).length,l={count:e};return n.supportsNullCount&&(l.nullcount=t.length-e),n.percentileParams&&(l.median=N(t,n.percentileParams)),l}function w(n){const{values:t,useSampleStdDev:e,supportsNullCount:l}=n;let r=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,i=null,o=null,s=null,c=null,a=0;const p=n.minValue==null?-1/0:n.minValue,f=n.maxValue==null?1/0:n.maxValue;for(const m of t)Number.isFinite(m)?m>=p&&m<=f&&(i=i===null?m:i+m,r=Math.min(r,m),u=Math.max(u,m),a++):typeof m=="string"&&a++;if(a&&i!=null){o=i/a;let m=0;for(const h of t)Number.isFinite(h)&&h>=p&&h<=f&&(m+=(h-o)**2);e?c=a>1?m/(a-1):0:c=a>0?m/a:0,s=Math.sqrt(c)}else r=null,u=null;const d={avg:o,count:a,max:u,min:r,stddev:s,sum:i,variance:c};return l&&(d.nullcount=t.length-a),n.percentileParams&&(d.median=N(t,n.percentileParams)),d}function N(n,t){const{fieldType:e,value:l,orderBy:r,isDiscrete:u}=t,i=E(e,r==="desc");if(n=[...n].filter(d=>d!=null).sort((d,m)=>i(d,m)),n.length===0)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const o=(n.length-1)*l,s=Math.floor(o),c=s+1,a=o%1,p=n[s],f=n[c];return c>=n.length||u||typeof p=="string"||typeof f=="string"?p:p*(1-a)+f*a}function E(n,t){const e=t?1:-1,l=$(t),r=y(t);if(!(!!n&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...F].includes(n)))return(i,o)=>typeof i=="number"&&typeof o=="number"?l(i,o):typeof i=="string"&&typeof o=="string"?r(i,o):e;if(n==="esriFieldTypeDate")return(i,o)=>{const s=new Date(i).getTime(),c=new Date(o).getTime();return!isNaN(s)&&!isNaN(c)?l(s,c):e};if(F.has(n))return(i,o)=>l(i,o);if(n==="esriFieldTypeString")return(i,o)=>r(i,o);if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID"){const i=y(t);return(o,s)=>i(S(o),S(s))}return t?(i,o)=>1:(i,o)=>-1}function v(n,t,e){if(e){if(n==null)return t==null?0:1;if(t==null)return-1}else{if(n==null)return t==null?0:-1;if(t==null)return 1}return null}function y(n){return n?(t,e)=>{const l=v(t,e,!0);return l??(t=t.toUpperCase(),e=e.toUpperCase(),t>e?-1:t<e?1:0)}:(t,e)=>{const l=v(t,e,!1);return l??(t=t.toUpperCase(),e=e.toUpperCase(),t<e?-1:t>e?1:0)}}function $(n){return n?(t,e)=>{const l=v(t,e,!0);return l??e-t}:(t,e)=>{const l=v(t,e,!1);return l??t-e}}function S(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function Y(n,t){let e;for(e in n)B.includes(e)&&(Number.isFinite(n[e])||(n[e]=null));return t&&["avg","stddev","variance"].forEach(l=>{n[l]!=null&&(n[l]=Math.ceil(n[l]??0))}),n}function H(n){const t={};for(let e of n)(e==null||typeof e=="string"&&e.trim()==="")&&(e=null),t[e]==null?t[e]={count:1,data:e}:t[e].count++;return{count:t}}function x(n){return(n==null?void 0:n.type)!=="coded-value"?[]:n.codedValues.map(t=>t.code)}function Q(n,t,e,l){const r=n.count,u=[];if(e&&t){const i=[],o=x(t[0]);for(const s of o)if(!t[1])i.push(s);else{const c=x(t[1]);for(const a of c)if(!t[2])i.push(`${g(s)}${l}${g(a)}`);else{const p=x(t[2]);for(const f of p)i.push(`${g(s)}${l}${g(a)}${l}${g(f)}`)}}for(const s of i)r.hasOwnProperty(s)||(r[s]={data:s,count:0})}for(const i in r){const o=r[i];u.push({value:o.data,count:o.count,label:o.label})}return{uniqueValueInfos:u}}function J(n,t,e,l){let r=null;switch(t){case"log":n!==0&&(r=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&l!==0&&(r=n/l*100);break;case"field":Number.isFinite(e)&&e!==0&&(r=n/e);break;case"natural-log":n>0&&(r=Math.log(n));break;case"square-root":n>0&&(r=n**.5);break}return r}function P(n,t){const e=G({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||V});return n=U(n,t.minValue,t.maxValue),I({definition:e,values:n,normalizationTotal:t.normalizationTotal})}function U(n,t,e){const l=t??-1/0,r=e??1/0;return n.filter(u=>Number.isFinite(u)&&u>=l&&u<=r)}function G(n){const{breakCount:t,field:e,normalizationField:l,normalizationType:r}=n,u=n.classificationMethod||T,i=u==="standard-deviation"?n.standardDeviationInterval||z:void 0;return new b({breakCount:t,classificationField:e,classificationMethod:u,normalizationField:r==="field"?l:void 0,normalizationType:r,standardDeviationInterval:i})}function K(n,t){let e=n.classBreaks;const l=e.length,r=e[0].minValue,u=e[l-1].maxValue,i=t==="standard-deviation",o=M;return e=e.map(s=>{const c=s.label,a={minValue:s.minValue,maxValue:s.maxValue,label:c};if(i&&c){const p=c.match(o),f=(p==null?void 0:p.map(d=>+d.trim()))??[];f.length===2?(a.minStdDev=f[0],a.maxStdDev=f[1],f[0]<0&&f[1]>0&&(a.hasAvg=!0)):f.length===1&&(c.includes("<")?(a.minStdDev=null,a.maxStdDev=f[0]):c.includes(">")&&(a.minStdDev=f[0],a.maxStdDev=null))}return a}),{minValue:r,maxValue:u,classBreakInfos:e,normalizationTotal:n.normalizationTotal}}function W(n,t){const e=_(n,t),l=e.intervals,r=e.min??0,u=e.max??0,i=l.map((o,s)=>({minValue:l[s][0],maxValue:l[s][1],count:0}));for(const o of n)if(o!=null&&o>=r&&o<=u){const s=R(l,o);s>-1&&i[s].count++}return{bins:i,minValue:r,maxValue:u,normalizationTotal:t.normalizationTotal}}function _(n,t){const{field:e,classificationMethod:l,standardDeviationInterval:r,normalizationType:u,normalizationField:i,normalizationTotal:o,minValue:s,maxValue:c}=t,a=t.numBins||k,p=!l||l==="equal-interval";let f=null,d=null,m=null;if(p&&!u){if(s!=null&&c!=null)f=s,d=c;else{const h=w({values:n,minValue:s,maxValue:c,useSampleStdDev:!u,supportsNullCount:q({normalizationType:u,normalizationField:i,minValue:s,maxValue:c})});f=h.min??null,d=h.max??null}m=O(f??0,d??0,a)}else{const{classBreaks:h}=P(n,{field:e,normalizationType:u,normalizationField:i,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:r,minValue:s,maxValue:c,numClasses:a});f=h[0].minValue,d=h[h.length-1].maxValue,m=h.map(C=>[C.minValue,C.maxValue])}return{min:f,max:d,intervals:m}}function R(n,t){let e=-1;for(let l=n.length-1;l>=0;l--){const r=n[l][0];if(t>=r){e=l;break}}return e}function O(n,t,e){const l=(t-n)/e,r=[];let u=n,i;for(let o=1;o<=e;o++)i=u+l,i=Number(i.toFixed(16)),r.push([u,o===e?t:i]),u=i;return r}export{w as a,Y as b,L as c,H as d,Q as e,P as f,J as g,W as h,q as i,E as j,N as k,g as p,K as r};
