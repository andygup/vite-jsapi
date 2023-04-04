import"./geometry-4b789d90.js";import"./Error-bd05b442.js";import{e as C}from"./typedArrayUtil-2bcf3cee.js";import{u as S}from"./screenUtils-7afeb41c.js";import{x as R,b as j,w as k,k as A}from"./Extent-7f29a1bb.js";import{O as B}from"./quantizationUtils-72167b00.js";import"./fieldUtils-021fea8a.js";import{y as O,m as q}from"./heatmapUtils-90a13d85.js";import{c as E,x as G,m as Y,f as _,d as U,V as Z,T as H,F as J,D as K,N as L,S as Q}from"./utils-6fdb990e.js";import{i as W}from"./arcadeOnDemand-87969052.js";import"./ensureType-fa162cfc.js";import"./string-3d0ebcd3.js";import"./Polyline-c56eca9b.js";import"./cast-daef7652.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-29120e0a.js";import"./typeUtils-d7b057b5.js";import"./jsonMap-a9c94baf.js";import"./jsonUtils-8bd548d9.js";import"./preload-helper-101896b7.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./vec4f64-018b3fa6.js";import"./generateRendererUtils-92e71197.js";import"./colorRamps-3439e132.js";import"./Color-2245b966.js";import"./colorUtils-639f4d25.js";import"./enumeration-e46f3fd4.js";import"./Symbol-f45dc441.js";let y=null;function X(a,i,r){return a.x<0?a.x+=i:a.x>r&&(a.x-=i),a}function ii(a,i,r,o){const n=R(r)?j(r):null,l=n?Math.round((n.valid[1]-n.valid[0])/i.scale[0]):null;return a.map(t=>{const e=new k(C(t.geometry));return B(i,e,e,e.hasZ,e.hasM),t.geometry=n?X(e,l,o[0]):e,t})}function ai(a,i=18,r,o,n,l){const t=new Float64Array(n*l);i=Math.round(S(i));let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,m=0,f=0,d=0,c=0;const I=O(o,r);for(const{geometry:T,attributes:v}of a){const{x:p,y:u}=T,z=Math.max(0,p-i),V=Math.max(0,u-i),D=Math.min(l,u+i),g=Math.min(n,p+i),P=+I(v);for(let w=V;w<D;w++)for(let h=z;h<g;h++){const M=w*n+h,b=q(h-p,w-u,i),N=t[M];m=t[M]+=b*P;const $=m-N;f+=$,d+=$*$,m<e&&(e=m),m>s&&(s=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const x=(s-e)/2;return{mean:f/c,stdDev:Math.sqrt((d-f*f/c)/c),min:e,max:s,mid:x,count:c}}async function F(a,i){if(!i)return[];const{field:r,field2:o,field3:n,fieldDelimiter:l}=a,t=a.valueExpression,e=a.normalizationType,s=a.normalizationField,m=a.normalizationTotal,f=[],d=a.viewInfoParams;let c=null,I=null;if(t){if(!y){const{arcadeUtils:v}=await W();y=v}c=y.createFunction(t),I=d&&y.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new A(d.spatialReference)})}const x=a.fieldInfos,T=!(i[0]&&"declaredClass"in i[0]&&i[0].declaredClass==="esri.Graphic")&&x?{fields:x}:null;return i.forEach(v=>{const p=v.attributes;let u;if(t){const z=T?{...v,layer:T}:v,V=y.createExecContext(z,I);u=y.executeFunction(c,V)}else p&&(u=p[r],o&&(u=`${E(u)}${l}${E(p[o])}`,n&&(u=`${u}${l}${E(p[n])}`)));if(e&&typeof u=="number"&&isFinite(u)){const z=p&&parseFloat(p[s]);u=G(u,e,z,m)}f.push(u)}),f}async function bi(a){const{attribute:i,features:r}=a,{normalizationType:o,normalizationField:n,minValue:l,maxValue:t,fieldType:e}=i,s=await F({field:i.field,valueExpression:i.valueExpression,normalizationType:o,normalizationField:n,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r),m=Y({normalizationType:o,normalizationField:n,minValue:l,maxValue:t}),f={value:.5,fieldType:e},d=e==="esriFieldTypeString"?_({values:s,supportsNullCount:m,percentileParams:f}):U({values:s,minValue:l,maxValue:t,useSampleStdDev:!o,supportsNullCount:m,percentileParams:f});return Z(d,e==="esriFieldTypeDate")}async function Ni(a){const{attribute:i,features:r}=a,o=await F({field:i.field,field2:i.field2,field3:i.field3,fieldDelimiter:i.fieldDelimiter,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r),n=H(o);return J(n,i.domains,i.returnAllCodedValues,i.fieldDelimiter)}async function Ci(a){const{attribute:i,features:r}=a,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e}=i,s=await F({field:o,valueExpression:i.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:t,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r),m=K(s,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return L(m,e)}async function Si(a){const{attribute:i,features:r}=a,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e}=i,s=await F({field:o,valueExpression:i.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:t,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r);return Q(s,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}async function Ri(a){const{attribute:i,features:r}=a,{field:o,radius:n,fieldOffset:l,transform:t,spatialReference:e,size:s}=i,m=ii(r,t,e,s),{count:f,min:d,max:c,mean:I,stdDev:x}=ai(m,n,l,o,s[0],s[1]);return{count:f,min:d,max:c,avg:I,stddev:x}}export{Ci as classBreaks,Ri as heatmapStatistics,Si as histogram,bi as summaryStatistics,Ni as uniqueValues};
