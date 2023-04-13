import{hp as C,aj as O,aF as I,gp as $,ba as x,hq as F,hr as R,hs as A}from"./index-9f03d686.js";import{w as k,l as D,c as U,I as z,e as B}from"./I3SBinaryReader-934f011a.js";import{a as J,b as N,d as V}from"./PointCloudUniqueValueRenderer-f173f9a5.js";import"./VertexAttribute-9f2e53ec.js";function q(c,t,l,r){const{rendererJSON:s,isRGBRenderer:p}=c;let n=null,a=null;if(t&&p)n=t;else if(t&&(s==null?void 0:s.type)==="pointCloudUniqueValueRenderer"){a=J.fromJSON(s);const e=a.colorUniqueValueInfos;n=new Uint8Array(3*r);const i=g(a.fieldTransformType);for(let o=0;o<r;o++){const u=(i?i(t[o]):t[o])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(u)){n[3*o]=e[f].color.r,n[3*o+1]=e[f].color.g,n[3*o+2]=e[f].color.b;break}}}else if(t&&(s==null?void 0:s.type)==="pointCloudStretchRenderer"){a=N.fromJSON(s);const e=a.stops;n=new Uint8Array(3*r);const i=g(a.fieldTransformType);for(let o=0;o<r;o++){const u=i?i(t[o]):t[o],f=e.length-1;if(u<e[0].value)n[3*o]=e[0].color.r,n[3*o+1]=e[0].color.g,n[3*o+2]=e[0].color.b;else if(u>=e[f].value)n[3*o]=e[f].color.r,n[3*o+1]=e[f].color.g,n[3*o+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(u<e[b].value){const d=(u-e[b-1].value)/(e[b].value-e[b-1].value);n[3*o]=e[b].color.r*d+e[b-1].color.r*(1-d),n[3*o+1]=e[b].color.g*d+e[b-1].color.g*(1-d),n[3*o+2]=e[b].color.b*d+e[b-1].color.b*(1-d);break}}}else if(t&&(s==null?void 0:s.type)==="pointCloudClassBreaksRenderer"){a=V.fromJSON(s);const e=a.colorClassBreakInfos;n=new Uint8Array(3*r);const i=g(a.fieldTransformType);for(let o=0;o<r;o++){const u=i?i(t[o]):t[o];for(let f=0;f<e.length;f++)if(u>=e[f].minValue&&u<=e[f].maxValue){n[3*o]=e[f].color.r,n[3*o+1]=e[f].color.g,n[3*o+2]=e[f].color.b;break}}}else n=new Uint8Array(3*r).fill(255);if(l&&a&&a.colorModulation){const e=a.colorModulation.minValue,i=a.colorModulation.maxValue,o=.3;for(let u=0;u<r;u++){const f=l[u],b=f>=i?1:f<=e?o:o+(1-o)*(f-e)/(i-e);n[3*u]=b*n[3*u],n[3*u+1]=b*n[3*u+1],n[3*u+2]=b*n[3*u+2]}}return n}function T(c,t){if(c.encoding==null||c.encoding===""){const l=k(t,c);if(l.vertexAttributes.position==null)return;const r=D(t,l.vertexAttributes.position),s=l.header.fields,p=[s.offsetX,s.offsetY,s.offsetZ],n=[s.scaleX,s.scaleY,s.scaleZ],a=r.length/3,e=new Float64Array(3*a);for(let i=0;i<a;i++)e[3*i]=r[3*i]*n[0]+p[0],e[3*i+1]=r[3*i+1]*n[1]+p[1],e[3*i+2]=r[3*i+2]*n[2]+p[2];return e}if(c.encoding==="lepcc-xyz")return U(t).result}function m(c,t,l){return c!=null&&c.attributeInfo.useElevation?t?_(t,l):null:c!=null&&c.attributeInfo.storageInfo?z(c.attributeInfo.storageInfo,c.buffer,l):null}function _(c,t){const l=new Float64Array(t);for(let r=0;r<t;r++)l[r]=c[3*r+2];return l}function E(c,t,l,r,s){const p=c.length/3;let n=0;for(let a=0;a<p;a++){let e=!0;for(let i=0;i<r.length&&e;i++){const{filterJSON:o}=r[i],u=s[i].values[a];switch(o.type){case"pointCloudValueFilter":{const f=o.mode==="exclude";o.values.includes(u)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=S(o.requiredSetBits),b=S(o.requiredClearBits);(u&f)===f&&!(u&b)||(e=!1);break}case"pointCloudReturnFilter":{const f=15&u,b=u>>>4&15,d=b>1,M=f===1,y=f===b;let v=!1;for(const h of o.includedReturns)if(h==="last"&&y||h==="firstOfMany"&&M&&d||h==="lastOfMany"&&y&&d||h==="single"&&!d){v=!0;break}v||(e=!1);break}}}e&&(l[n]=a,c[3*n]=c[3*a],c[3*n+1]=c[3*a+1],c[3*n+2]=c[3*a+2],t[3*n]=t[3*a],t[3*n+1]=t[3*a+1],t[3*n+2]=t[3*a+2],n++)}return n}function g(c){switch(c){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function S(c){let t=0;for(const l of c||[])t|=1<<l;return t}class P{transform(t){const l=this._transform(t),r=[l.points.buffer,l.rgb.buffer];l.pointIdFilterMap!=null&&r.push(l.pointIdFilterMap.buffer);for(const s of l.attributes)"buffer"in s.values&&C(s.values.buffer)&&s.values.buffer!==l.rgb.buffer&&r.push(s.values.buffer);return Promise.resolve({result:l,transferList:r})}_transform(t){const l=T(t.schema,t.geometryBuffer);let r=l.length/3,s=null;const p=new Array,n=m(t.primaryAttributeData,l,r);t.primaryAttributeData!=null&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const a=m(t.modulationAttributeData,l,r);t.modulationAttributeData!=null&&a&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let e=q(t.rendererInfo,n,a,r);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const o=t.filterAttributesData.filter(O).map(u=>{const f=m(u,l,r),b={attributeInfo:u.attributeInfo,values:f};return p.push(b),b});s=new Uint32Array(r),r=E(l,e,s,t.filterInfo,o)}for(const o of t.userAttributesData){const u=m(o,l,r);p.push({attributeInfo:o.attributeInfo,values:u})}3*r<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(l,r,t.elevationOffset);const i=this._transformCoordinates(l,r,t.obb,I.fromJSON(t.inSR),I.fromJSON(t.outSR));return{obb:t.obb,points:i,rgb:e,attributes:p,pointIdFilterMap:s}}_transformCoordinates(t,l,r,s,p){if(!$(t,s,0,t,p,0,l))throw new Error("Can't reproject");const n=x(r.center[0],r.center[1],r.center[2]),a=A(),e=A();F(w,r.quaternion);const i=new Float32Array(3*l);for(let o=0;o<l;o++)a[0]=t[3*o]-n[0],a[1]=t[3*o+1]-n[1],a[2]=t[3*o+2]-n[2],R(e,a,w),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(e[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(e[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(e[2])),i[3*o]=a[0],i[3*o+1]=a[1],i[3*o+2]=a[2];return i}_applyElevationOffsetInPlace(t,l,r){if(r!==0)for(let s=0;s<l;s++)t[3*s+2]+=r}}const w=B();function G(){return new P}export{G as default};
