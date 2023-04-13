import{r as D,az as F,ax as A,aR as T,gP as B,jk as $,by as N}from"./index-b4b3ae7d.js";import{c as M}from"./mat3f64-c33d428a.js";import{f as k}from"./vec4f64-efdcb593.js";import{a as q,b as G,M as U,c as _}from"./meshFeatureSet-33cfe4f8.js";import{c as I,o as O,s as j,n as E,b as z,r as P,h as W,a as K}from"./BufferView-0c0be981.js";import{b as Q,c as H,d as J,e as R}from"./vec32-9c00e89c.js";import{D as X,l as Y,c as Z,f as ee,d as te,e as re,g as C,h as oe,i as ne,j as S,k as se,m as ae,C as ie}from"./DefaultMaterial_COLOR_GAMMA-57adead4.js";import{e as le}from"./types-c657ebd9.js";import{k as ue}from"./georeference-41018c72.js";import{i as ce}from"./resourceUtils-4053cd3b.js";import{a as v}from"./enums-08489827.js";import"./imageUtils-42075577.js";import"./earcut-db592379.js";import"./Indices-a579d3c9.js";import"./deduplicate-3505e282.js";import"./External-b242d32b.js";import"./infoFor3D-91dff30a.js";import"./mat4f64-06a72c15.js";import"./spatialReferenceEllipsoidUtils-e4c3a965.js";import"./FeatureSet-aa200b6b.js";import"./Field-a6e349b0.js";import"./fieldType-9c435370.js";import"./vec4-3dd523e8.js";import"./Version-efb7c0f1.js";import"./quat-ffcf1bfe.js";import"./quatf64-5b0101cd.js";import"./basicInterfaces-cc58f4ac.js";function g(e,t){return new e(new ArrayBuffer(t*e.ElementCount*le(e.ElementType)))}async function He(e,t,o){const a=new X(fe(o)),c=(await Y(a,t,o,!0)).model,m=c.lods.shift(),s=new Map,i=new Map;c.textures.forEach((x,b)=>s.set(b,de(x))),c.materials.forEach((x,b)=>i.set(b,xe(x,s)));const f=pe(m);for(const x of f.parts)Te(f,x,i);const{position:u,normal:r,tangent:l,color:p,texCoord0:y}=f.vertexAttributes,V={position:u.typedBuffer,normal:r!=null?r.typedBuffer:null,tangent:l!=null?l.typedBuffer:null,uv:y!=null?y.typedBuffer:null,color:p!=null?p.typedBuffer:null},h=ue(V,e,o);return{transform:h.transform,components:f.components,spatialReference:e.spatialReference,vertexAttributes:new q({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:V.color,uv:V.uv})}}function fe(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(o,a,n)=>{const c=t(o);return(await D(c,{responseType:a==="image"?"image":a==="binary"?"array-buffer":"json",signal:n!=null?n.signal:null})).data}}:null}function w(e,t){if(e==null)return"-";const o=e.typedBuffer;return`${F(t,o.buffer,()=>t.size)}/${o.byteOffset}/${o.byteLength}`}function me(e){return e!=null?e.toString():"-"}function pe(e){let t=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},a=new Map,n=new Map,c=[];for(const m of e.parts){const{attributes:{position:s,normal:i,color:f,tangent:u,texCoord0:r}}=m,l=`
      ${w(s,a)}/
      ${w(i,a)}/
      ${w(f,a)}/
      ${w(u,a)}/
      ${w(r,a)}/
      ${me(m.transform)}
    `;let p=!1;const y=F(n,l,()=>(p=!0,{start:t,length:s.count}));p&&(t+=s.count),i&&(o.normal=!0),f&&(o.color=!0),u&&(o.tangent=!0),r&&(o.texCoord0=!0),c.push({gltf:m,writeVertices:p,region:y})}return{vertexAttributes:{position:g(W,t),normal:o.normal?g(z,t):null,tangent:o.tangent?g(I,t):null,color:o.color?g(O,t):null,texCoord0:o.texCoord0?g(K,t):null},parts:c,components:[]}}function de(e){return new G({data:(ce(e.data),e.data),wrap:ye(e.parameters.wrap)})}function xe(e,t){const o=new A(he(e.color,e.opacity)),a=e.emissiveFactor?new A(Ve(e.emissiveFactor)):null;return new U({color:o,colorTexture:T(e.textureColor,n=>t.get(n)),normalTexture:T(e.textureNormal,n=>t.get(n)),emissiveColor:a,emissiveTexture:T(e.textureEmissive,n=>t.get(n)),occlusionTexture:T(e.textureOcclusion,n=>t.get(n)),alphaMode:we(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:T(e.textureMetallicRoughness,n=>t.get(n)),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function Te(e,t,o){t.writeVertices&&ge(e,t);const{indices:a,attributes:n,primitiveType:c,material:m}=t.gltf;let s=Z(a||n.position.count,c);const i=t.region.start;if(i){const f=s.slice();for(let u=0;u<s.length;u++)f[u]+=i;s=f}e.components.push(new _({faces:s,material:o.get(m),trustSourceNormals:!0}))}function ge(e,t){const{position:o,normal:a,tangent:n,color:c,texCoord0:m}=e.vertexAttributes,s=t.region.start,{attributes:i,transform:f}=t.gltf,u=i.position.count;if(Q(o.slice(s,u),i.position,f),i.normal!=null&&a!=null){const r=B(M(),f),l=a.slice(s,u);H(l,i.normal,r),$(r)&&J(l,l)}else a!=null&&ee(a,0,0,1,{dstIndex:s,count:u});if(i.tangent!=null&&n!=null){const r=B(M(),f),l=n.slice(s,u);te(l,i.tangent,r),$(r)&&re(l,l)}else n!=null&&C(n,0,0,1,1,{dstIndex:s,count:u});if(i.texCoord0!=null&&m!=null?oe(m.slice(s,u),i.texCoord0):m!=null&&ne(m,0,0,{dstIndex:s,count:u}),i.color!=null&&c!=null){const r=i.color,l=c.slice(s,u);if(r.elementCount===4)r instanceof I?S(l,r,255):r instanceof O?se(l,r):r instanceof j&&S(l,r,1/256);else{C(l,255,255,255,255);const p=E.fromTypedArray(l.typedBuffer,l.typedBufferStride);r instanceof z?R(p,r,255):r instanceof E?ae(p,r):r instanceof P&&R(p,r,1/256)}}else c!=null&&C(c.slice(s,u),255,255,255,255)}function we(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ye(e){return{horizontal:L(e.s),vertical:L(e.t)}}function L(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp";case v.MIRRORED_REPEAT:return"mirror";case v.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function he(e,t){return k(d(e[0]),d(e[1]),d(e[2]),t)}function Ve(e){return N(d(e[0]),d(e[1]),d(e[2]))}export{He as loadGLTFMesh};