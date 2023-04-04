import{L as z,b0 as R,cC as B,cl as $,gz as C,b7 as E,lT as A,iM as F,aK as P}from"./index-e1d30004.js";import{p as D,m as N,u as q,g as G}from"./meshFeatureSet-fb42ee8f.js";import{c as O,x as L,L as K,O as M,i as j,E as k,T as Q,u as V}from"./BufferView-8075fdb8.js";import{t as H,f as J,i as U,o as S}from"./vec32-6082e1c4.js";import{n as W,l as X,a as Y,d as Z,r as ee,e as te,g as v,h as ne,i as oe,j as I,k as re,m as se,o as le}from"./DefaultMaterial_COLOR_GAMMA-cf41140e.js";import{e as ae}from"./types-1305598a.js";import{x as ue}from"./georeference-a8057dd1.js";import{t as ie}from"./resourceUtils-1d112ccb.js";import{D as w}from"./enums-10aa9b05.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-61f7b102.js";import"./Indices-890f3b3e.js";import"./deduplicate-5cd93f49.js";import"./External-ca569a47.js";import"./infoFor3D-1eaade9a.js";import"./spatialReferenceEllipsoidUtils-f4461580.js";import"./Version-da1bde20.js";import"./basicInterfaces-4ab7cc6a.js";function ce(e,n,t){const u=e.typedBuffer,r=e.typedBufferStride,f=n.typedBuffer,i=n.typedBufferStride,l=t?t.count:n.count;let s=(t&&t.dstIndex?t.dstIndex:0)*r,m=(t&&t.srcIndex?t.srcIndex:0)*i;for(let a=0;a<l;++a){for(let o=0;o<9;++o)u[s+o]=f[m+o];s+=r,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:ce},Symbol.toStringTag,{value:"Module"}));function fe(e,n,t){const u=e.typedBuffer,r=e.typedBufferStride,f=n.typedBuffer,i=n.typedBufferStride,l=t?t.count:n.count;let s=(t&&t.dstIndex?t.dstIndex:0)*r,m=(t&&t.srcIndex?t.srcIndex:0)*i;for(let a=0;a<l;++a){for(let o=0;o<16;++o)u[s+o]=f[m+o];s+=r,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function T(e,n){return new e(new ArrayBuffer(n*e.ElementCount*ae(e.ElementType)))}async function qe(e,n,t){const u=new W(me(t)),r=(await X(u,n,t,!0)).model,f=r.lods.shift(),i=new Map,l=new Map;r.textures.forEach((g,h)=>i.set(h,xe(g))),r.materials.forEach((g,h)=>l.set(h,ge(g,i)));const s=de(f);for(const g of s.parts)$e(s,g,l);const{position:m,normal:a,tangent:o,color:c,texCoord0:p}=s.vertexAttributes,x={position:m.typedBuffer,normal:a!=null?a.typedBuffer:null,tangent:o!=null?o.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:c!=null?c.typedBuffer:null},b=ue(x,e,t);return{transform:b.transform,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:b.vertexAttributes.position,normal:b.vertexAttributes.normal,tangent:b.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function me(e){const n=e==null?void 0:e.resolveFile;return n?{busy:!1,request:async(t,u,r)=>{const f=n(t);return(await z(f,{responseType:u==="image"?"image":u==="binary"?"array-buffer":"json",signal:r!=null?r.signal:null})).data}}:null}function y(e,n){if(e==null)return"-";const t=e.typedBuffer;return`${R(n,t.buffer,()=>n.size)}/${t.byteOffset}/${t.byteLength}`}function pe(e){return e!=null?e.toString():"-"}function de(e){let n=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,r=new Map,f=[];for(const i of e.parts){const{attributes:{position:l,normal:s,color:m,tangent:a,texCoord0:o}}=i,c=`
      ${y(l,u)}/
      ${y(s,u)}/
      ${y(m,u)}/
      ${y(a,u)}/
      ${y(o,u)}/
      ${pe(i.transform)}
    `;let p=!1;const x=R(r,c,()=>(p=!0,{start:n,length:l.count}));p&&(n+=l.count),s&&(t.normal=!0),m&&(t.color=!0),a&&(t.tangent=!0),o&&(t.texCoord0=!0),f.push({gltf:i,writeVertices:p,region:x})}return{vertexAttributes:{position:T(Q,n),normal:t.normal?T(j,n):null,tangent:t.tangent?T(O,n):null,color:t.color?T(L,n):null,texCoord0:t.texCoord0?T(V,n):null},parts:f,components:[]}}function xe(e){return new N({data:(ie(e.data),e.data),wrap:be(e.parameters.wrap)})}function ge(e,n){const t=new B(he(e.color,e.opacity)),u=e.emissiveFactor?new B(ve(e.emissiveFactor)):null;return new q({color:t,colorTexture:$(e.textureColor,r=>n.get(r)),normalTexture:$(e.textureNormal,r=>n.get(r)),emissiveColor:u,emissiveTexture:$(e.textureEmissive,r=>n.get(r)),occlusionTexture:$(e.textureOcclusion,r=>n.get(r)),alphaMode:ye(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:$(e.textureMetallicRoughness,r=>n.get(r)),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function $e(e,n,t){n.writeVertices&&Te(e,n);const{indices:u,attributes:r,primitiveType:f,material:i}=n.gltf;let l=Y(u||r.position.count,f);const s=n.region.start;if(s){const m=l.slice();for(let a=0;a<l.length;a++)m[a]+=s;l=m}e.components.push(new G({faces:l,material:t.get(i),trustSourceNormals:!0}))}function Te(e,n){const{position:t,normal:u,tangent:r,color:f,texCoord0:i}=e.vertexAttributes,l=n.region.start,{attributes:s,transform:m}=n.gltf,a=s.position.count;if(H(t.slice(l,a),s.position,m),s.normal!=null&&u!=null){const o=C(E(),m),c=u.slice(l,a);J(c,s.normal,o),A(o)&&U(c,c)}else u!=null&&Z(u,0,0,1,{dstIndex:l,count:a});if(s.tangent!=null&&r!=null){const o=C(E(),m),c=r.slice(l,a);ee(c,s.tangent,o),A(o)&&te(c,c)}else r!=null&&v(r,0,0,1,1,{dstIndex:l,count:a});if(s.texCoord0!=null&&i!=null?ne(i.slice(l,a),s.texCoord0):i!=null&&oe(i,0,0,{dstIndex:l,count:a}),s.color!=null&&f!=null){const o=s.color,c=f.slice(l,a);if(o.elementCount===4)o instanceof O?I(c,o,255):o instanceof L?re(c,o):o instanceof K&&I(c,o,1/256);else{v(c,255,255,255,255);const p=M.fromTypedArray(c.typedBuffer,c.typedBufferStride);o instanceof j?S(p,o,255):o instanceof M?se(p,o):o instanceof k&&S(p,o,1/256)}}else f!=null&&v(f.slice(l,a),255,255,255,255)}function ye(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function be(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/le)*255}function he(e,n){return F(d(e[0]),d(e[1]),d(e[2]),n)}function ve(e){return P(d(e[0]),d(e[1]),d(e[2]))}export{qe as loadGLTFMesh};
