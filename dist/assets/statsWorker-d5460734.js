import{fp as N,bb as S,K as q,b2 as A,aF as B,u as R,fq as j,fr as G}from"./index-0265f5b0.js";import{L as O}from"./quantizationUtils-5a38db0c.js";import{c as M,D as Y,m as _,f as k,d as K,T as L,y as U,x as Z,z as H,S as J,M as Q}from"./utils-2e4fe165.js";import"./generateRendererUtils-489ca2af.js";let I=null;function W(e,a,o){return e.x<0?e.x+=a:e.x>o&&(e.x-=a),e}function X(e,a,o,l){const n=N(o)?S(o):null,s=n?Math.round((n.valid[1]-n.valid[0])/a.scale[0]):null;return e.map(t=>{const i=new q(t.geometry);return O(a,i,i,i.hasZ,i.hasM),t.geometry=n?W(i,s??0,l[0]):i,t})}function aa(e,a=18,o,l,n,s){const t=new Float64Array(n*s);a=Math.round(R(a));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,m=0,f=0,d=0,c=0;const y=j(l,o);for(const{geometry:T,attributes:v}of e){const{x:p,y:u}=T,x=Math.max(0,p-a),F=Math.max(0,u-a),b=Math.min(s,u+a),D=Math.min(n,p+a),P=+y(v);for(let $=F;$<b;$++)for(let h=x;h<D;h++){const E=$*n+h,g=G(h-p,$-u,a),C=t[E];m=t[E]+=g*P;const V=m-C;f+=V,d+=V*V,m<i&&(i=m),m>r&&(r=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const z=(r-i)/2;return{mean:f/c,stdDev:Math.sqrt((d-f*f/c)/c),min:i,max:r,mid:z,count:c}}async function w(e,a){if(!a)return[];const{field:o,field2:l,field3:n,fieldDelimiter:s}=e,t=e.valueExpression,i=e.normalizationType,r=e.normalizationField,m=e.normalizationTotal,f=[],d=e.viewInfoParams;let c=null,y=null;if(t){if(!I){const{arcadeUtils:v}=await A();I=v}c=I.createFunction(t),y=d&&I.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new B(d.spatialReference)})}const z=e.fieldInfos,T=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&z?{fields:z}:null;return a.forEach(v=>{const p=v.attributes;let u;if(t){const x=T?{...v,layer:T}:v,F=I.createExecContext(x,y);u=I.executeFunction(c,F)}else p&&(u=p[o],l&&(u=`${M(u)}${s}${M(p[l])}`,n&&(u=`${u}${s}${M(p[n])}`)));if(i&&typeof u=="number"&&isFinite(u)){const x=p&&parseFloat(p[r]);u=Y(u,i,x,m)}f.push(u)}),f}async function la(e){const{attribute:a,features:o}=e,{normalizationType:l,normalizationField:n,minValue:s,maxValue:t,fieldType:i}=a,r=await w({field:a.field,valueExpression:a.valueExpression,normalizationType:l,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),m=_({normalizationType:l,normalizationField:n,minValue:s,maxValue:t}),f={value:.5,fieldType:i},d=i==="esriFieldTypeString"?k({values:r,supportsNullCount:m,percentileParams:f}):K({values:r,minValue:s,maxValue:t,useSampleStdDev:!l,supportsNullCount:m,percentileParams:f});return L(d,i==="esriFieldTypeDate")}async function oa(e){const{attribute:a,features:o}=e,l=await w({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),n=U(l);return Z(n,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function sa(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await w({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),m=H(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return J(m,i)}async function ra(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await w({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o);return Q(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ma(e){const{attribute:a,features:o}=e,{field:l,radius:n,fieldOffset:s,transform:t,spatialReference:i}=a,r=a.size??[0,0],m=X(o??[],t,i,r),{count:f,min:d,max:c,mean:y,stdDev:z}=aa(m,n??void 0,s,l,r[0],r[1]);return{count:f,min:d,max:c,avg:y,stddev:z}}export{sa as classBreaks,ma as heatmapStatistics,ra as histogram,la as summaryStatistics,oa as uniqueValues};
