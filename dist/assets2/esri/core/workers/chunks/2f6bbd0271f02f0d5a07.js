"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3847],{36030:(e,n,t)=>{t.d(n,{J:()=>r});var l=t(35454),i=t(5600);function r(e,n={}){const t=e instanceof l.X?e:new l.X(e,n),r={type:n?.ignoreUnknown??1?t.apiValues:String,json:{type:t.jsonValues,read:!n?.readOnly&&{reader:t.read},write:{writer:t.write}}};return void 0!==n?.readOnly&&(r.readOnly=!!n.readOnly),void 0!==n?.default&&(r.json.default=n.default),void 0!==n?.name&&(r.json.name=n.name),void 0!==n?.nonNullable&&(r.nonNullable=n.nonNullable),(0,i.Cb)(r)}},66577:(e,n,t)=>{t.d(n,{qM:()=>c});var l=t(75215),i=t(6570),r=t(9361),a=t(65091),o=t(94139),s=t(38913),u=t(58901);t(82971),t(86973),t(33955);const c={base:r.Z,key:"type",typeMap:{extent:i.Z,multipoint:a.Z,point:o.Z,polyline:u.Z,polygon:s.Z}};(0,l.N7)(c)},33955:(e,n,t)=>{t.d(n,{Ji:()=>y,YX:()=>u,aW:()=>c,im:()=>p,l9:()=>d,oU:()=>m,q9:()=>h,wp:()=>f});var l=t(6570),i=t(9361),r=t(65091),a=t(94139),o=t(38913),s=t(58901);function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function c(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function d(e){return void 0!==e.paths}function m(e){return void 0!==e.rings}function p(e){return null==e?null:e instanceof i.Z?e:f(e)?a.Z.fromJSON(e):d(e)?s.Z.fromJSON(e):m(e)?o.Z.fromJSON(e):c(e)?r.Z.fromJSON(e):u(e)?l.Z.fromJSON(e):null}function y(e){return e?f(e)?"esriGeometryPoint":d(e)?"esriGeometryPolyline":m(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":c(e)?"esriGeometryMultipoint":null:null}const g={esriGeometryPoint:a.Z,esriGeometryPolyline:s.Z,esriGeometryPolygon:o.Z,esriGeometryEnvelope:l.Z,esriGeometryMultipoint:r.Z};function h(e){return e&&g[e]||null}},82397:(e,n,t)=>{t.d(n,{G6:()=>y,Ie:()=>p,J9:()=>d,RF:()=>f,U1:()=>m,vY:()=>a}),t(33955);const l=(e,n,t)=>[n,t],i=(e,n,t)=>[n,t,e[2]],r=(e,n,t)=>[n,t,e[2],e[3]];function a(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function o({scale:e,translate:n},t){return t*e[0]+n[0]}function s({scale:e,translate:n},t){return n[1]-t*e[1]}function u(e,n,t){const l=new Array(t.length);if(!t.length)return l;const[i,r]=e.scale;let a=o(e,t[0][0]),u=s(e,t[0][1]);l[0]=n(t[0],a,u);for(let e=1;e<t.length;e++){const o=t[e];a+=o[0]*i,u-=o[1]*r,l[e]=n(o,a,u)}return l}function c(e,n,t){const l=new Array(t.length);for(let i=0;i<t.length;i++)l[i]=u(e,n,t[i]);return l}function f(e,n,t,l,i){return n.x=function({scale:e,translate:n},t){return Math.round((t-n[0])/e[0])}(e,t.x),n.y=function({scale:e,translate:n},t){return Math.round((n[1]-t)/e[1])}(e,t.y),n!==t&&(l&&(n.z=t.z),i&&(n.m=t.m)),n}function d(e,n,t,a,o){return null!=t&&(n.points=function(e,n,t,a){return u(e,t?a?r:i:a?i:l,n)}(e,t.points,a,o)),n}function m(e,n,t,l,i){return null==t||(n.x=o(e,t.x),n.y=s(e,t.y),n!==t&&(l&&(n.z=t.z),i&&(n.m=t.m))),n}function p(e,n,t,a,o){return null!=t&&(n.rings=function(e,n,t,a){return c(e,t?a?r:i:a?i:l,n)}(e,t.rings,a,o)),n}function y(e,n,t,a,o){return null!=t&&(n.paths=function(e,n,t,a){return c(e,t?a?r:i:a?i:l,n)}(e,t.paths,a,o)),n}},86973:(e,n,t)=>{t.d(n,{M:()=>i,P:()=>r});var l=t(35454);const i=(0,l.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),r=(0,l.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},35671:(e,n,t)=>{t.d(n,{io:()=>x,AB:()=>V,gd:()=>F,Q0:()=>b,YN:()=>y,UF:()=>h,O5:()=>I,CH:()=>_,os:()=>S,H7:()=>$,Ec:()=>Q,qN:()=>O,q6:()=>d,Pz:()=>U,Lk:()=>T,Qc:()=>q,vP:()=>Y}),t(20102);var l,i,r=t(78286);(i=l||(l={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";var a=t(59266);const o=/^([0-9])/,s=/[^a-z0-9_\u0080-\uffff]/gi,u=/_{2,}/g,c=/^_/,f=/_$/;function d(e){return null==e?null:e.trim().replaceAll(s,"_").replaceAll(u,"_").replace(c,"").replace(f,"").replace(o,"F$1")||null}const m=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],p=["field","normalizationField"];function y(e,n){if(null!=e&&null!=n)for(const t of Array.isArray(e)?e:[e])if(g(m,t,n),"visualVariables"in t&&t.visualVariables)for(const e of t.visualVariables)g(p,e,n)}function g(e,n,t){if(e)for(const l of e){const e=(0,r.hS)(l,n),i=e&&"function"!=typeof e&&t.get(e);i&&(0,r.RB)(l,i.name,n)}}function h(e,n){if(null!=e&&n?.fields?.length)if("startField"in e){const t=n.get(e.startField),l=n.get(e.endField);e.startField=t?.name??null,e.endField=l?.name??null}else{const t=n.get(e.startTimeField),l=n.get(e.endTimeField);e.startTimeField=t?.name??null,e.endTimeField=l?.name??null}}const v=new Set;function b(e,n){return e&&n?(v.clear(),F(v,e,n),Array.from(v).sort()):[]}function F(e,n,t){if(t)if(n?.fields?.length)if(t.includes("*"))for(const{name:t}of n.fields)e.add(t);else for(const l of t)V(e,n,l);else{if(t.includes("*"))return e.clear(),void e.add("*");for(const n of t)null!=n&&e.add(n)}}function V(e,n,t){if("string"==typeof t)if(n){const l=n.get(t);l&&e.add(l.name)}else e.add(t)}function T(e,n){return null==n||null==e?[]:n.includes("*")?(e.fields??[]).map((e=>e.name)):n}async function x(e,n,t){if(!t)return;const{arcadeUtils:l}=await(0,a.LC)(),i=l.extractFieldNames(t,n?.fields?.map((e=>e.name)));for(const t of i)V(e,n,t)}function I({displayField:e,fields:n}){return e||(n&&n.length?N(n,"name-or-title")||N(n,"unique-identifier")||N(n,"type-or-category")||function(e){for(const n of e){if(!n||!n.name)continue;const e=n.name.toLowerCase();if(e.includes("name")||e.includes("title"))return n.name}return null}(n):null)}function N(e,n){for(const t of e)if(t&&t.valueType&&t.valueType===n)return t.name;return null}function _(e){if(!e)return[];const n="editFieldsInfo"in e&&e.editFieldsInfo;return n?b(e.fieldsIndex,[n.creatorField,n.creationDateField,n.editorField,n.editDateField]):[]}function S(e){const n=e.defaultValue;return void 0!==n&&E(e,n)?n:e.nullable?null:void 0}function w(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function D(e){return null===e||w(e)}const M="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function z(e){return null===e||M(e)}function k(e){return null!=e&&"string"==typeof e}function A(e){return null===e||k(e)}function C(){return!0}function E(e,n){let t;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":t=e.nullable?z:M;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":t=e.nullable?D:w;break;case"string":case"esriFieldTypeString":t=e.nullable?A:k;break;default:t=C}return 1===arguments.length?t:t(n)}const G=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function $(e){return null!=e&&G.has(e.type)}function O(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var L,P;function U(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function q(e,n){return null==e||e.nullable&&null===n?null:$(e)&&!function(e,n){const t="string"==typeof e?Z(e):e;if(!t)return!1;const l=t.min,i=t.max;return t.isInteger?M(n)&&n>=l&&n<=i:n>=l&&n<=i}(e.type,Number(n))?L.OUT_OF_RANGE:E(e,n)?e.domain?function(e,n){switch(e.type){case"range":{const t="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(null!=t&&+n<t||null!=i&&+n>i)return l.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==n)))return l.INVALID_CODED_VALUE}return null}(e.domain,n):null:P.INVALID_TYPE}function Z(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return R;case"esriFieldTypeInteger":case"integer":return B;case"esriFieldTypeBigInteger":case"big-integer":return j;case"esriFieldTypeSingle":case"single":return J;case"esriFieldTypeDouble":case"double":return X}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(L||(L={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(P||(P={}));const R={min:-32768,max:32767,isInteger:!0},B={min:-2147483648,max:2147483647,isInteger:!0},j={min:-Number.MAX_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,isInteger:!0},J={min:-34e37,max:12e37,isInteger:!1},X={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function Y(e,n,t){switch(e){case l.INVALID_CODED_VALUE:return`Value ${t} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case l.VALUE_OUT_OF_RANGE:return`Value ${t} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case P.INVALID_TYPE:return`Value ${t} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case L.OUT_OF_RANGE:{const{min:e,max:l}=Z(n.type);return`Value ${t} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e} to ${l}`}}}function Q(e){return!!e&&["raster.itempixelvalue","raster.servicepixelvalue"].some((n=>e.toLowerCase().startsWith(n)))}},10278:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(43697),i=t(35454),r=t(96674),a=t(5600),o=(t(75215),t(67676),t(80442),t(36030)),s=t(52011);const u=new i.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new i.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let f=class extends r.wq{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,o.J)({classBreaksDef:"class-breaks-definition"})],f.prototype,"type",void 0),(0,l._)([(0,a.Cb)({json:{write:!0}})],f.prototype,"breakCount",void 0),(0,l._)([(0,a.Cb)({json:{write:!0}})],f.prototype,"classificationField",void 0),(0,l._)([(0,a.Cb)({type:String,json:{read:u.read,write:u.write}})],f.prototype,"classificationMethod",void 0),(0,l._)([(0,a.Cb)({json:{write:!0}})],f.prototype,"normalizationField",void 0),(0,l._)([(0,a.Cb)({json:{read:c.read,write:c.write}})],f.prototype,"normalizationType",void 0),(0,l._)([(0,a.Cb)({value:null,json:{write:!0}})],f.prototype,"standardDeviationInterval",null),(0,l._)([(0,a.Cb)({value:null,json:{write:!0}})],f.prototype,"definedInterval",null),f=(0,l._)([(0,s.j)("esri.rest.support.ClassBreaksDefinition")],f);const d=f},622:(e,n,t)=>{t.d(n,{k:()=>r});const l=t(92604).Z.getLogger("esri.rest.support.generateRendererUtils");function i(e,n){return Number(e.toFixed(n))}function r(e){const{normalizationTotal:n}=e;return{classBreaks:a(e),normalizationTotal:n}}function a(e){const n=e.definition,{classificationMethod:t,normalizationType:l,definedInterval:r}=n,a=n.breakCount??1,u=[];let c=e.values;if(0===c.length)return[];c=c.sort(((e,n)=>e-n));const f=c[0],d=c[c.length-1];if("equal-interval"===t)if(c.length>=a){const e=(d-f)/a;let n=f;for(let t=1;t<a;t++){const r=i(f+t*e,6);u.push({minValue:n,maxValue:r,label:o(n,r,l)}),n=r}u.push({minValue:n,maxValue:d,label:o(n,d,l)})}else c.forEach((e=>{u.push({minValue:e,maxValue:e,label:o(e,e,l)})}));else if("natural-breaks"===t){const n=function(e){const n=[],t=[];let l=Number.MIN_VALUE,i=1,r=-1;for(let a=0;a<e.length;a++){const o=e[a];o===l?(i++,t[r]=i):null!==o&&(n.push(o),l=o,i=1,t.push(i),r++)}return{uniqueValues:n,valueFrequency:t}}(c),t=e.valueFrequency||n.valueFrequency,r=s(n.uniqueValues,t,a);let m=f;for(let e=1;e<a;e++)if(n.uniqueValues.length>e){const t=i(n.uniqueValues[r[e]],6);u.push({minValue:m,maxValue:t,label:o(m,t,l)}),m=t}u.push({minValue:m,maxValue:d,label:o(m,d,l)})}else if("quantile"===t)if(c.length>=a&&f!==d){let e=f,n=Math.ceil(c.length/a),t=0;for(let i=1;i<a;i++){let r=n+t-1;r>c.length&&(r=c.length-1),r<0&&(r=0),u.push({minValue:e,maxValue:c[r],label:o(e,c[r],l)}),e=c[r],t+=n,n=Math.ceil((c.length-t)/(a-i))}u.push({minValue:e,maxValue:d,label:o(e,d,l)})}else{let e=-1;for(let n=0;n<c.length;n++){const t=c[n];t!==e&&(e=t,u.push({minValue:e,maxValue:t,label:o(e,t,l)}),e=t)}}else if("standard-deviation"===t){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(c),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const i=e[l];t+=(i-n)*(i-n)}return t/=e.length,Math.sqrt(t)}(c,e);if(0===n)u.push({minValue:c[0],maxValue:c[0],label:o(c[0],c[0],l)});else{const t=function(e,n,t,l,i){let r=Math.max(l-e,n-l)/i/t;return r=r>=1?1:r>=.5?.5:.25,r}(f,d,a,e,n)*n;let r=0,s=f;for(let n=a;n>=1;n--){const a=i(e-(n-.5)*t,6);u.push({minValue:s,maxValue:a,label:o(s,a,l)}),s=a,r++}let c=i(e+.5*t,6);u.push({minValue:s,maxValue:c,label:o(s,c,l)}),s=c,r++;for(let n=1;n<=a;n++)c=r===2*a?d:i(e+(n+.5)*t,6),u.push({minValue:s,maxValue:c,label:o(s,c,l)}),s=c,r++}}else if("defined-interval"===t){if(!r)return u;const e=c[0],n=c[c.length-1],t=Math.ceil((n-e)/r);let a=e;for(let n=1;n<t;n++){const t=i(e+n*r,6);u.push({minValue:a,maxValue:t,label:o(a,t,l)}),a=t}u.push({minValue:a,maxValue:n,label:o(a,n,l)})}return u}function o(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function s(e,n,t){const l=e.length,i=[];t>l&&(t=l);for(let e=0;e<t;e++)i.push(Math.round(e*l/t-1));i.push(l-1);let r=u(i,e,n,t);return function(e,n,t,l,i,r){let a=0,o=0,s=0,u=0,f=!0;for(let d=0;d<2&&f;d++){0===d&&(f=!1);for(let d=0;d<r-1;d++)for(;t[d+1]+1!==t[d+2];){t[d+1]=t[d+1]+1;const r=c(d,t,l,i);s=r.sbMean,a=r.sbSdcm;const m=c(d+1,t,l,i);if(u=m.sbMean,o=m.sbSdcm,!(a+o<n[d]+n[d+1])){t[d+1]=t[d+1]-1;break}n[d]=a,n[d+1]=o,e[d]=s,e[d+1]=u,f=!0}for(let d=r-1;d>0;d--)for(;t[d]!==t[d-1]+1;){t[d]=t[d]-1;const r=c(d-1,t,l,i);s=r.sbMean,a=r.sbSdcm;const m=c(d,t,l,i);if(u=m.sbMean,o=m.sbSdcm,!(a+o<n[d-1]+n[d])){t[d]=t[d]+1;break}n[d-1]=a,n[d]=o,e[d-1]=s,e[d]=u,f=!0}}return f}(r.mean,r.sdcm,i,e,n,t)&&(r=u(i,e,n,t)),i}function u(e,n,t,l){let i=[],r=[],a=[],o=0;const s=[],u=[];for(let i=0;i<l;i++){const l=c(i,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),o+=u[i]}let f,d=o,m=!0;for(;m||o<d;){m=!1,i=[];for(let n=0;n<l;n++)i.push(e[n]);for(let t=0;t<l;t++)for(let i=e[t]+1;i<=e[t+1];i++)if(f=n[i],t>0&&i!==e[t+1]&&Math.abs(f-s[t])>Math.abs(f-s[t-1]))e[t]=i;else if(t<l-1&&e[t]!==i-1&&Math.abs(f-s[t])>Math.abs(f-s[t+1])){e[t+1]=i-1;break}d=o,o=0,r=[],a=[];for(let i=0;i<l;i++){r.push(s[i]),a.push(u[i]);const l=c(i,e,n,t);s[i]=l.sbMean,u[i]=l.sbSdcm,o+=u[i]}}if(o>d){for(let n=0;n<l;n++)e[n]=i[n],s[n]=r[n],u[n]=a[n];o=d}return{mean:s,sdcm:u}}function c(e,n,t,i){let r=0,a=0;for(let l=n[e]+1;l<=n[e+1];l++){const e=i[l];r+=t[l]*e,a+=e}a<=0&&l.warn("Exception in Natural Breaks calculation");const o=r/a;let s=0;for(let l=n[e]+1;l<=n[e+1];l++)s+=i[l]*(t[l]-o)**2;return{sbMean:o,sbSdcm:s}}},24452:(e,n,t)=>{t.d(n,{DL:()=>D,F_:()=>T,G2:()=>S,H0:()=>y,Lq:()=>v,Qm:()=>N,S5:()=>p,XL:()=>h,eT:()=>x,fk:()=>_,i5:()=>g,oF:()=>M,wk:()=>m});var l=t(10278),i=t(622);const r="<Null>",a="equal-interval",o=1,s=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,f=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),d=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function m(e){return null==e||"string"==typeof e&&!e?r:e}function p(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function y(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,l={count:t};return e.supportsNullCount&&(l.nullcount=n.length-t),e.percentileParams&&(l.median=h(n,e.percentileParams)),l}function g(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,a=null,o=null,s=null,u=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const e of n)Number.isFinite(e)?e>=f&&e<=d&&(a=null===a?e:a+e,i=Math.min(i,e),r=Math.max(r,e),c++):"string"==typeof e&&c++;if(c&&null!=a){o=a/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=d&&(e+=(t-o)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else i=null,r=null;const m={avg:o,count:c,max:r,min:i,stddev:s,sum:a,variance:u};return l&&(m.nullcount=n.length-c),e.percentileParams&&(m.median=h(n,e.percentileParams)),m}function h(e,n){const{fieldType:t,value:l,orderBy:i,isDiscrete:r}=n,a=v(t,"desc"===i);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>a(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const o=(e.length-1)*l,s=Math.floor(o),u=s+1,c=o%1,f=e[s],d=e[u];return u>=e.length||r||"string"==typeof f||"string"==typeof d?f:f*(1-c)+d*c}function v(e,n){const t=n?1:-1,l=function(e){return e?(e,n)=>{const t=b(e,n,!0);return null!=t?t:n-e}:(e,n)=>{const t=b(e,n,!1);return null!=t?t:e-n}}(n),i=F(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...f].includes(e))return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):t;if("esriFieldTypeDate"===e)return(e,n)=>{const i=new Date(e).getTime(),r=new Date(n).getTime();return isNaN(i)||isNaN(r)?t:l(i,r)};if(f.has(e))return(e,n)=>l(e,n);if("esriFieldTypeString"===e)return(e,n)=>i(e,n);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=F(n);return(n,t)=>e(V(n),V(t))}return n?(e,n)=>1:(e,n)=>-1}function b(e,n,t){if(t){if(null==e)return null==n?0:1;if(null==n)return-1}else{if(null==e)return null==n?0:-1;if(null==n)return 1}return null}function F(e){return e?(e,n)=>{const t=b(e,n,!0);return null!=t?t:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const t=b(e,n,!1);return null!=t?t:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}function V(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function T(e,n){let t;for(t in e)d.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]??0))})),e):e}function x(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function I(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function N(e,n,t,l){const i=e.count,r=[];if(t&&n){const e=[],t=I(n[0]);for(const i of t)if(n[1]){const t=I(n[1]);for(const r of t)if(n[2]){const t=I(n[2]);for(const n of t)e.push(`${m(i)}${l}${m(r)}${l}${m(n)}`)}else e.push(`${m(i)}${l}${m(r)}`)}else e.push(i);for(const n of e)i.hasOwnProperty(n)||(i[n]={data:n,count:0})}for(const e in i){const n=i[e];r.push({value:n.data,count:n.count,label:n.label})}return{uniqueValueInfos:r}}function _(e,n,t,l){let i=null;switch(n){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=e/t);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function S(e,n){const t=w({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=function(e,n,t){const l=n??-1/0,i=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=i))}(e,n.minValue,n.maxValue),(0,i.k)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function w(e){const{breakCount:n,field:t,normalizationField:i,normalizationType:r}=e,s=e.classificationMethod||a,u="standard-deviation"===s?e.standardDeviationInterval||o:void 0;return new l.Z({breakCount:n,classificationField:t,classificationMethod:s,normalizationField:"field"===r?i:void 0,normalizationType:r,standardDeviationInterval:u})}function D(e,n){let t=e.classBreaks;const l=t.length,i=t[0]?.minValue,r=t[l-1]?.maxValue,a="standard-deviation"===n,o=c;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(a&&n){const e=n.match(o),l=e?.map((e=>+e.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):n.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null))}return t})),{minValue:i,maxValue:r,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function M(e,n){const t=z(e,n);if(null==t.min&&null==t.max)return{bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:n.normalizationTotal};const l=t.intervals,i=t.min??0,r=t.max??0,a=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const n of e)if(null!=n&&n>=i&&n<=r){const e=k(l,n);e>-1&&a[e].count++}return{bins:a,minValue:i,maxValue:r,normalizationTotal:n.normalizationTotal}}function z(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:i,normalizationType:r,normalizationField:a,normalizationTotal:o,minValue:s,maxValue:c}=n,f=n.numBins||u;let d=null,m=null,y=null;if(l&&"equal-interval"!==l||r){const{classBreaks:n}=S(e,{field:t,normalizationType:r,normalizationField:a,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:i,minValue:s,maxValue:c,numClasses:f});d=n[0].minValue,m=n[n.length-1].maxValue,y=n.map((e=>[e.minValue,e.maxValue]))}else{if(null!=s&&null!=c)d=s,m=c;else{const n=g({values:e,minValue:s,maxValue:c,useSampleStdDev:!r,supportsNullCount:p({normalizationType:r,normalizationField:a,minValue:s,maxValue:c})});d=n.min??null,m=n.max??null}y=function(e,n,t){const l=(n-e)/t,i=[];let r,a=e;for(let e=1;e<=t;e++)r=a+l,r=Number(r.toFixed(16)),i.push([a,e===t?n:r]),a=r;return i}(d??0,m??0,f)}return{min:d,max:m,intervals:y}}function k(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}},59266:(e,n,t)=>{t.d(n,{LC:()=>s,WW:()=>u,Yi:()=>c,mz:()=>d,pp:()=>f}),t(66577);var l=t(20102),i=t(92604),r=t(82971);const a=i.Z.getLogger("esri.support.arcadeOnDemand");let o;function s(){return o||(o=(async()=>{const e=await Promise.all([t.e(7126),t.e(8732),t.e(1965),t.e(8522),t.e(1482),t.e(837)]).then(t.bind(t,20837));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),o}const u=(e,n,t)=>d.create(e,n,t,null,["$feature"]),c=(e,n,t)=>d.create(e,n,t,null,["$feature","$view"]),f=(e,n,t,l)=>d.create(e,n,t,l,["$feature","$view"]);class d{constructor(e,n,t,l,i,r,a){this.script=e,this.evaluate=l;const o=Array.isArray(r)?r:r.fields;this.fields=o,this._syntaxTree=t,this._arcade=n,this._arcadeFeature=i,this._spatialReference=a,this._referencesGeometry=n.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,n,t,i,o,u){const{arcade:c,Feature:f,Dictionary:m}=await s(),p=r.Z.fromJSON(n);let y;try{y=c.parseScript(e,u)}catch(n){return a.error(new l.Z("arcade-bad-expression","Failed to parse arcade script",{script:e,error:n})),null}const g=o.reduce(((e,n)=>({...e,[n]:null})),{});let h=null;null!=i&&(h=new m(i),h.immutable=!0,g.$config=null);const v=c.scriptUsesGeometryEngine(y),b=v&&c.enableGeometrySupport(),F=c.scriptUsesFeatureSet(y)&&c.enableFeatureSetSupport(),V=c.scriptIsAsync(y),T=V&&c.enableAsyncSupport(),x={vars:g,spatialReference:p,useAsync:!!T};await Promise.all([b,F,T]);const I=new Set;await c.loadDependentModules(I,y,null,V,v);const N=new m;N.immutable=!1,N.setField("scale",0);const _=c.compileScript(y,x);return new d(e,c,y,(e=>("$view"in e&&e.$view&&(N.setField("scale","object"==typeof e.$view&&"scale"in e.$view?e.$view.scale:void 0),e.$view=N),h&&(e.$config=h),_({vars:e,spatialReference:p}))),new f,t,p)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}}}]);