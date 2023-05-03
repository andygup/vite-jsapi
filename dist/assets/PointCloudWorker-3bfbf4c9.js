import{iI as A,dj as d,ay as v,bz as c,dX as y,pq as S,iP as D,iR as M,pr as m}from"./index-0b6846a6.js";import{u as g,c as b,i as w,f as z}from"./PointCloudWorkerUtil-e2f4f622.js";import"./PointCloudUniqueValueRenderer-772731f7.js";import"./ColorStop-a9d5adf5.js";import"./I3SBinaryReader-13432dbb.js";class _{transform(t){const a=this._transform(t),e=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&e.push(a.pointIdFilterMap.buffer);for(const r of a.attributes)"buffer"in r.values&&d(r.values.buffer)&&r.values.buffer!==a.rgb.buffer&&e.push(r.values.buffer);return Promise.resolve({result:a,transferList:e})}_transform(t){const a=g(t.schema,t.geometryBuffer);let e=a.length/3,r=null;const i=new Array,s=b(t.primaryAttributeData,a,e);t.primaryAttributeData!=null&&s&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:s});const o=b(t.modulationAttributeData,a,e);t.modulationAttributeData!=null&&o&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:o});let f=w(t.rendererInfo,s,o,e);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const n=t.filterAttributesData.filter(v).map(l=>{const I=b(l,a,e),p={attributeInfo:l.attributeInfo,values:I};return i.push(p),p});r=new Uint32Array(e),e=z(a,f,r,t.filterInfo,n)}for(const n of t.userAttributesData){const l=b(n,a,e);i.push({attributeInfo:n.attributeInfo,values:l})}3*e<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*e))),this._applyElevationOffsetInPlace(a,e,t.elevationOffset);const u=this._transformCoordinates(a,e,t.obb,c.fromJSON(t.inSR),c.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:f,attributes:i,pointIdFilterMap:r}}_transformCoordinates(t,a,e,r,i){if(!y(t,r,0,t,i,0,a))throw new Error("Can't reproject");const s=S(e.center[0],e.center[1],e.center[2]),o=m(),f=m();D(h,e.quaternion);const u=new Float32Array(3*a);for(let n=0;n<a;n++)o[0]=t[3*n]-s[0],o[1]=t[3*n+1]-s[1],o[2]=t[3*n+2]-s[2],M(f,o,h),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(f[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(f[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(f[2])),u[3*n]=o[0],u[3*n+1]=o[1],u[3*n+2]=o[2];return u}_applyElevationOffsetInPlace(t,a,e){if(e!==0)for(let r=0;r<a;r++)t[3*r+2]+=e}}const h=A();function R(){return new _}export{R as default};