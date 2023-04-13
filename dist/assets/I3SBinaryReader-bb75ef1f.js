import{E as d,L as D,cE as I}from"./index-b4b3ae7d.js";import{V as A}from"./VertexAttribute-8238ac80.js";function J(){const e=new Float32Array(4);return e[3]=1,e}function K(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}const g=!0,C={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function B(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+C.identifierOffset,C.identifierLength)),version:t.getUint16(r+C.versionOffset,g),checksum:t.getUint32(r+C.checksumOffset,g)}}const p={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function k(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,g),sizeHi:e.getUint32(t+p.sizeHi,g),minX:e.getFloat64(t+p.minX,g),minY:e.getFloat64(t+p.minY,g),minZ:e.getFloat64(t+p.minZ,g),maxX:e.getFloat64(t+p.maxX,g),maxY:e.getFloat64(t+p.maxY,g),maxZ:e.getFloat64(t+p.maxZ,g),errorX:e.getFloat64(t+p.errorX,g),errorY:e.getFloat64(t+p.errorY,g),errorZ:e.getFloat64(t+p.errorZ,g),count:e.getUint32(t+p.count,g),reserved:e.getUint32(t+p.reserved,g)}}function Q(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=B(e,t,r);if(r+=C.byteCount,i!=="LEPCC     ")throw new d("lepcc-decode-error","Bad identifier");if(o>1)throw new d("lepcc-decode-error","Unknown version");const n=k(t,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new d("lepcc-decode-error","Bad size");const a=new Float64Array(n.count*3),c=[],s=[],u=[],y=[];if(r=z(e,r,c),r=z(e,r,s),r=z(e,r,u),r=z(e,r,y),r!==e.byteLength)throw new d("lepcc-decode-error","Bad length");let w=0,h=0;for(let U=0;U<c.length;U++){h+=c[U];let f=0;for(let F=0;F<s[U];F++){f+=u[w];const H=y[w];a[w*3]=Math.min(n.maxX,n.minX+2*n.errorX*f),a[w*3+1]=Math.min(n.maxY,n.minY+2*n.errorY*h),a[w*3+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*H),w++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:a}}function z(e,t,r){const i=[];t=M(e,t,i);const o=[];for(let n=0;n<i.length;n++){o.length=0,t=M(e,t,o);for(let l=0;l<o.length;l++)r.push(o[l]+i[n])}return t}function M(e,t,r){const i=new DataView(e,t),o=i.getUint8(0),n=o&31,l=!!(o&32),a=(o&192)>>6;let c=0;if(a===0)c=i.getUint32(1,g),t+=5;else if(a===1)c=i.getUint16(1,g),t+=3;else if(a===2)c=i.getUint8(1),t+=2;else throw new d("lepcc-decode-error","Bad count type");if(l)throw new d("lepcc-decode-error","LUT not implemented");const s=Math.ceil(c*n/8),u=new Uint8Array(e,t,s);let y=0,w=0,h=0;const U=-1>>>32-n;for(let f=0;f<c;f++){for(;w<n;)y=y|u[h]<<w,w+=8,h+=1;r[f]=y&U,y=y>>>n,w-=n,w+n>32&&(y=y|u[h-1]>>8-w)}return t+h}const b={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function Y(e,t){return{sizeLo:e.getUint32(t+b.sizeLo,g),sizeHi:e.getUint32(t+b.sizeHi,g),count:e.getUint32(t+b.count,g),colorMapCount:e.getUint16(t+b.colorMapCount,g),lookupMethod:e.getUint8(t+b.lookupMethod),compressionMethod:e.getUint8(t+b.compressionMethod)}}function X(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=B(e,t,r);if(r+=C.byteCount,i!=="ClusterRGB")throw new d("lepcc-decode-error","Bad identifier");if(o>1)throw new d("lepcc-decode-error","Unknown version");const n=Y(t,r);if(r+=b.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new d("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(n.colorMapCount*3+n.count+r!==e.byteLength||n.colorMapCount>256)throw new d("lepcc-decode-error","Bad count");const a=new Uint8Array(e,r,n.colorMapCount*3),c=new Uint8Array(e,r+n.colorMapCount*3,n.count),s=new Uint8Array(n.count*3);for(let u=0;u<n.count;u++){const y=c[u];s[u*3]=a[y*3],s[u*3+1]=a[y*3+1],s[u*3+2]=a[y*3+2]}return s}if(n.lookupMethod===0&&n.compressionMethod===0){if(n.count*3+r!==e.byteLength||n.colorMapCount!==0)throw new d("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==e.byteLength||n.colorMapCount!==1)throw new d("lepcc-decode-error","Bad count");const a=t.getUint8(r),c=t.getUint8(r+1),s=t.getUint8(r+2),u=new Uint8Array(n.count*3);for(let y=0;y<n.count;y++)u[y*3]=a,u[y*3+1]=c,u[y*3+2]=s;return u}throw new d("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const m={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function Z(e,t){return{sizeLo:e.getUint32(t+m.sizeLo,g),sizeHi:e.getUint32(t+m.sizeHi,g),count:e.getUint32(t+m.count,g),scaleFactor:e.getUint16(t+m.scaleFactor,g),bitsPerPoint:e.getUint8(t+m.bitsPerPoint),reserved:e.getUint8(t+m.reserved)}}function R(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=B(e,t,r);if(r+=C.byteCount,i!=="Intensity ")throw new d("lepcc-decode-error","Bad identifier");if(o>1)throw new d("lepcc-decode-error","Unknown version");const n=Z(t,r);if(r+=m.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new d("lepcc-decode-error","Bad size");const a=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==e.byteLength)throw new d("lepcc-decode-error","Bad size");const c=new Uint8Array(e,r,n.count);for(let s=0;s<n.count;s++)a[s]=c[s]*n.scaleFactor}else if(n.bitsPerPoint===16){if(n.count*2+r!==e.byteLength)throw new d("lepcc-decode-error","Bad size");const c=new Uint16Array(e,r,n.count);for(let s=0;s<n.count;s++)a[s]=c[s]*n.scaleFactor}else{const c=[];if(M(e,r,c)!==e.byteLength)throw new d("lepcc-decode-error","Bad size");for(let u=0;u<n.count;u++)a[u]=c[u]*n.scaleFactor}return a}const O=D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function j(e,t,r){let i="",o=0;for(;o<r;){const n=e[t+o];if(n<128)i+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new d("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const l=e[t+o+1],a=(n&31)<<6|l&63;i+=String.fromCharCode(a),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new d("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=e[t+o+1],a=e[t+o+2],c=(n&15)<<12|(l&63)<<6|a&63;i+=String.fromCharCode(c),o+=3}else if(n>=240&&n<248){if(o+3>=r)throw new d("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=e[t+o+1],a=e[t+o+2],c=e[t+o+3],s=(n&7)<<18|(l&63)<<12|(a&63)<<6|c&63;if(s>=65536){const u=(s-65536>>10)+55296,y=(s&1023)+56320;i+=String.fromCharCode(u,y)}else i+=String.fromCharCode(s);o+=4}else throw new d("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.")}return i}function x(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let o=0;o<t.length;o++){const n=t[o],l=n.valueType||n.type,a=$[l];r.fields[n.property]=a(e,i),i+=v[l].BYTES_PER_ELEMENT}return r.byteCount=i,r}function N(e,t,r){return P(e,t,r).map(i=>{const o=i?Date.parse(i):null;return o&&!Number.isNaN(o)?o:null})}function P(e,t,r){const i=[];let o,n=0,l;for(l=0;l<e;l+=1){if(o=t[l],o>0){if(i.push(j(r,n,o-1)),r[n+o-1]!==0)throw new d("string-array-error","Invalid string array: missing null termination.")}else i.push(null);n+=o}return i}function T(e,t){const r=v[t.valueType];return new r(e,t.byteOffset,t.count*t.valuesPerElement)}function _(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function S(e,t,r){const i=t.header!=null?x(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let n=i.byteCount;for(let l=0;l<t.ordering.length;l++){const a=t.ordering[l],c=I(t[a]);if(c.count=i.fields.count??0,c.valueType==="String"){if(c.byteOffset=n,c.byteCount=i.fields[a+"ByteCount"],c.encoding!=="UTF-8")throw new d("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding});if(c.timeEncoding&&c.timeEncoding!=="ECMA_ISO8601")throw new d("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:c.timeEncoding})}else if(V(c.valueType)){const s=L(c.valueType);n+=n%s!==0?s-n%s:0,c.byteOffset=n,c.byteCount=s*c.valuesPerElement*c.count}else throw new d("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});n+=c.byteCount??0,o.entries[a]=c}return o.byteCount=n-o.byteOffset,o}function E(e,t,r){if(t!==e&&O.error(`Invalid ${r} buffer size
 expected: ${e}, actual: ${t})`),t<e)throw new d("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function ee(e,t){const r=x(e,t&&t.header);let i=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,l=n.vertexCount!=null?n.vertexCount:n.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const u={...t.vertexAttributes[s],byteOffset:i,count:l},y=G[s]||"_"+s;o.vertexAttributes[y]=u,i+=L(u.valueType)*u.valuesPerElement*l}const a=n.faceCount;if(t.faces&&a){o.faces={};for(const s of t.ordering){if(!t.faces[s])continue;const u={...t.faces[s],byteOffset:i,count:a};o.faces[s]=u,i+=L(u.valueType)*u.valuesPerElement*a}}const c=n.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const s of t.featureAttributeOrder){if(!t.featureAttributes[s])continue;const u={...t.featureAttributes[s],byteOffset:i,count:c};o.featureAttributes[s]=u;const y=u.valueType==="UInt64"?8:L(u.valueType);i+=y*u.valuesPerElement*c}}return E(i,e.byteLength,"geometry"),o.byteCount=i-o.byteOffset,o}const G={position:A.POSITION,normal:A.NORMAL,color:A.COLOR,uv0:A.UV0,region:A.UVREGION};function te(e,t,r){if(e.encoding==="lepcc-rgb")return X(t);if(e.encoding==="lepcc-intensity")return R(t);if(e.encoding!=null&&e.encoding!=="")throw new d("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(O.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),e.ordering[0]==="ObjectIds"&&e.hasOwnProperty("objectIds")&&(O.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const i=S(t,e,r),o=i.byteOffset+i.byteCount;E(o,t.byteLength,"attribute");const n=i.entries.attributeValues||i.entries.objectIds;if(n){if(n.valueType==="String"){const l=i.entries.attributeByteCounts,a=T(t,l),c=_(t,n);return n.timeEncoding?N(l.count,a,c):P(l.count,a,c)}return T(t,n)}throw new d("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const v={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},$={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function V(e){return v.hasOwnProperty(e)}function L(e){return V(e)?v[e].BYTES_PER_ELEMENT:0}export{T as a,J as b,ee as c,Q as d,K as e,te as r};
