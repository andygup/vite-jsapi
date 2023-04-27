import{hk as C,aB as O,bt as I,gH as $,hl as k}from"./index-175d32d0.js";import{S as x}from"./quat-6a9a7451.js";import{w as R,l as D,c as F,I as B,e as U}from"./I3SBinaryReader-8fac4162.js";import{r as z,n as A}from"./vec3f32-ad1dc57f.js";import{a as J,b as N,d as V}from"./PointCloudUniqueValueRenderer-2c481ebb.js";import"./mat3f64-221ce671.js";import"./quatf64-3363c48e.js";import"./VertexAttribute-9f2e53ec.js";import"./LegendOptions-8e12359c.js";import"./ColorStop-b164d74d.js";function T(c,t,l,r){const{rendererJSON:i,isRGBRenderer:p}=c;let n=null,a=null;if(t&&p)n=t;else if(t&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){a=J.fromJSON(i);const e=a.colorUniqueValueInfos;n=new Uint8Array(3*r);const f=g(a.fieldTransformType);for(let o=0;o<r;o++){const u=(f?f(t[o]):t[o])+"";for(let s=0;s<e.length;s++)if(e[s].values.includes(u)){n[3*o]=e[s].color.r,n[3*o+1]=e[s].color.g,n[3*o+2]=e[s].color.b;break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){a=N.fromJSON(i);const e=a.stops;n=new Uint8Array(3*r);const f=g(a.fieldTransformType);for(let o=0;o<r;o++){const u=f?f(t[o]):t[o],s=e.length-1;if(u<e[0].value)n[3*o]=e[0].color.r,n[3*o+1]=e[0].color.g,n[3*o+2]=e[0].color.b;else if(u>=e[s].value)n[3*o]=e[s].color.r,n[3*o+1]=e[s].color.g,n[3*o+2]=e[s].color.b;else for(let b=1;b<e.length;b++)if(u<e[b].value){const m=(u-e[b-1].value)/(e[b].value-e[b-1].value);n[3*o]=e[b].color.r*m+e[b-1].color.r*(1-m),n[3*o+1]=e[b].color.g*m+e[b-1].color.g*(1-m),n[3*o+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){a=V.fromJSON(i);const e=a.colorClassBreakInfos;n=new Uint8Array(3*r);const f=g(a.fieldTransformType);for(let o=0;o<r;o++){const u=f?f(t[o]):t[o];for(let s=0;s<e.length;s++)if(u>=e[s].minValue&&u<=e[s].maxValue){n[3*o]=e[s].color.r,n[3*o+1]=e[s].color.g,n[3*o+2]=e[s].color.b;break}}}else n=new Uint8Array(3*r).fill(255);if(l&&a&&a.colorModulation){const e=a.colorModulation.minValue,f=a.colorModulation.maxValue,o=.3;for(let u=0;u<r;u++){const s=l[u],b=s>=f?1:s<=e?o:o+(1-o)*(s-e)/(f-e);n[3*u]=b*n[3*u],n[3*u+1]=b*n[3*u+1],n[3*u+2]=b*n[3*u+2]}}return n}function _(c,t){if(c.encoding==null||c.encoding===""){const l=R(t,c);if(l.vertexAttributes.position==null)return;const r=D(t,l.vertexAttributes.position),i=l.header.fields,p=[i.offsetX,i.offsetY,i.offsetZ],n=[i.scaleX,i.scaleY,i.scaleZ],a=r.length/3,e=new Float64Array(3*a);for(let f=0;f<a;f++)e[3*f]=r[3*f]*n[0]+p[0],e[3*f+1]=r[3*f+1]*n[1]+p[1],e[3*f+2]=r[3*f+2]*n[2]+p[2];return e}if(c.encoding==="lepcc-xyz")return F(t).result}function h(c,t,l){return c!=null&&c.attributeInfo.useElevation?t?q(t,l):null:c!=null&&c.attributeInfo.storageInfo?B(c.attributeInfo.storageInfo,c.buffer,l):null}function q(c,t){const l=new Float64Array(t);for(let r=0;r<t;r++)l[r]=c[3*r+2];return l}function E(c,t,l,r,i){const p=c.length/3;let n=0;for(let a=0;a<p;a++){let e=!0;for(let f=0;f<r.length&&e;f++){const{filterJSON:o}=r[f],u=i[f].values[a];switch(o.type){case"pointCloudValueFilter":{const s=o.mode==="exclude";o.values.includes(u)===s&&(e=!1);break}case"pointCloudBitfieldFilter":{const s=S(o.requiredSetBits),b=S(o.requiredClearBits);(u&s)===s&&!(u&b)||(e=!1);break}case"pointCloudReturnFilter":{const s=15&u,b=u>>>4&15,m=b>1,M=s===1,y=s===b;let v=!1;for(const d of o.includedReturns)if(d==="last"&&y||d==="firstOfMany"&&M&&m||d==="lastOfMany"&&y&&m||d==="single"&&!m){v=!0;break}v||(e=!1);break}}}e&&(l[n]=a,c[3*n]=c[3*a],c[3*n+1]=c[3*a+1],c[3*n+2]=c[3*a+2],t[3*n]=t[3*a],t[3*n+1]=t[3*a+1],t[3*n+2]=t[3*a+2],n++)}return n}function g(c){switch(c){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function S(c){let t=0;for(const l of c||[])t|=1<<l;return t}class P{transform(t){const l=this._transform(t),r=[l.points.buffer,l.rgb.buffer];l.pointIdFilterMap!=null&&r.push(l.pointIdFilterMap.buffer);for(const i of l.attributes)"buffer"in i.values&&C(i.values.buffer)&&i.values.buffer!==l.rgb.buffer&&r.push(i.values.buffer);return Promise.resolve({result:l,transferList:r})}_transform(t){const l=_(t.schema,t.geometryBuffer);let r=l.length/3,i=null;const p=new Array,n=h(t.primaryAttributeData,l,r);t.primaryAttributeData!=null&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const a=h(t.modulationAttributeData,l,r);t.modulationAttributeData!=null&&a&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let e=T(t.rendererInfo,n,a,r);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const o=t.filterAttributesData.filter(O).map(u=>{const s=h(u,l,r),b={attributeInfo:u.attributeInfo,values:s};return p.push(b),b});i=new Uint32Array(r),r=E(l,e,i,t.filterInfo,o)}for(const o of t.userAttributesData){const u=h(o,l,r);p.push({attributeInfo:o.attributeInfo,values:u})}3*r<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(l,r,t.elevationOffset);const f=this._transformCoordinates(l,r,t.obb,I.fromJSON(t.inSR),I.fromJSON(t.outSR));return{obb:t.obb,points:f,rgb:e,attributes:p,pointIdFilterMap:i}}_transformCoordinates(t,l,r,i,p){if(!$(t,i,0,t,p,0,l))throw new Error("Can't reproject");const n=z(r.center[0],r.center[1],r.center[2]),a=A(),e=A();x(w,r.quaternion);const f=new Float32Array(3*l);for(let o=0;o<l;o++)a[0]=t[3*o]-n[0],a[1]=t[3*o+1]-n[1],a[2]=t[3*o+2]-n[2],k(e,a,w),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(e[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(e[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(e[2])),f[3*o]=a[0],f[3*o+1]=a[1],f[3*o+2]=a[2];return f}_applyElevationOffsetInPlace(t,l,r){if(r!==0)for(let i=0;i<l;i++)t[3*i+2]+=r}}const w=U();function tt(){return new P}export{tt as default};
