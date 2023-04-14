import{g3 as $,bP as R,K as B,a9 as A,bt as G,p as U}from"./index-0ea7d266.js";import{q as k}from"./quantizationUtils-07d350f3.js";import{c as Y,e as H}from"./heatmapUtils-47f2d9fb.js";import{p as P,g as K,i as O,c as _,a as W,b as X,d as Z,e as j,f as J,r as L,h as Q}from"./utils-8e726d34.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./generateRendererUtils-114b9009.js";let V=null;function ee(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function te(t,e,o,s){const n=$(o)?R(o):null,l=n?Math.round((n.valid[1]-n.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new B(i.geometry);return k(e,a,a,a.hasZ,a.hasM),i.geometry=n?ee(a,l??0,s[0]):a,i})}function ae(t,e=18,o,s,n,l){const i=new Float64Array(n*l);e=Math.round(U(e));let a=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,c=0,m=0,f=0,d=0;const I=Y(s,o);for(const{geometry:p,attributes:v}of t){const{x:u,y:x}=p,g=Math.max(0,u-e),D=Math.max(0,x-e),E=Math.min(l,x+e),C=Math.min(n,u+e),M=+I(v);for(let z=D;z<E;z++)for(let F=g;F<C;F++){const b=z*n+F,N=H(F-u,z-x,e),q=i[b];c=i[b]+=N*M;const h=c-q;m+=h,f+=h*h,c<a&&(a=c),c>r&&(r=c),d++}}if(!d)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const y=(r-a)/2,S=m/d,w=Math.sqrt((f-m*m/d)/d);return{mean:S,stdDev:w,min:a,max:r,mid:y,count:d}}async function T(t,e){if(!e)return[];const{field:o,field2:s,field3:n,fieldDelimiter:l}=t,i=t.valueExpression,a=t.normalizationType,r=t.normalizationField,c=t.normalizationTotal,m=[],f=t.viewInfoParams;let d=null,I=null;if(i){if(!V){const{arcadeUtils:p}=await A();V=p}d=V.createFunction(i),I=f&&V.getViewInfo({viewingMode:f.viewingMode,scale:f.scale,spatialReference:new G(f.spatialReference)})}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(p=>{const v=p.attributes;let u;if(i){const x=w?{...p,layer:w}:p,g=V.createExecContext(x,I);u=V.executeFunction(d,g)}else v&&(u=v[o],s&&(u=`${P(u)}${l}${P(v[s])}`,n&&(u=`${u}${l}${P(v[n])}`)));if(a&&typeof u=="number"&&isFinite(u)){const x=v&&parseFloat(v[r]);u=K(u,a,x,c)}m.push(u)}),m}async function ue(t){const{attribute:e,features:o}=t,{normalizationType:s,normalizationField:n,minValue:l,maxValue:i,fieldType:a}=e,r=await T({field:e.field,valueExpression:e.valueExpression,normalizationType:s,normalizationField:n,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},o),c=O({normalizationType:s,normalizationField:n,minValue:l,maxValue:i}),m={value:.5,fieldType:a},f=a==="esriFieldTypeString"?_({values:r,supportsNullCount:c,percentileParams:m}):W({values:r,minValue:l,maxValue:i,useSampleStdDev:!s,supportsNullCount:c,percentileParams:m});return X(f,a==="esriFieldTypeDate")}async function me(t){const{attribute:e,features:o}=t,s=await T({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},o),n=Z(s);return j(n,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function fe(t){const{attribute:e,features:o}=t,{field:s,normalizationType:n,normalizationField:l,normalizationTotal:i,classificationMethod:a}=e,r=await T({field:s,valueExpression:e.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:i,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},o),c=J(r,{field:s,normalizationType:n,normalizationField:l,normalizationTotal:i,classificationMethod:a,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return L(c,a)}async function de(t){const{attribute:e,features:o}=t,{field:s,normalizationType:n,normalizationField:l,normalizationTotal:i,classificationMethod:a}=e,r=await T({field:s,valueExpression:e.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:i,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},o);return Q(r,{field:s,normalizationType:n,normalizationField:l,normalizationTotal:i,classificationMethod:a,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function ve(t){const{attribute:e,features:o}=t,{field:s,radius:n,fieldOffset:l,transform:i,spatialReference:a}=e,r=e.size??[0,0],c=te(o??[],i,a,r),{count:m,min:f,max:d,mean:I,stdDev:y}=ae(c,n??void 0,l,s,r[0],r[1]);return{count:m,min:f,max:d,avg:I,stddev:y}}export{fe as classBreaks,ve as heatmapStatistics,de as histogram,ue as summaryStatistics,me as uniqueValues};