import{ss as P,st as z,su as D,km as j,L as k,aw as _,sv as N,sp as G,at as B,so as q,aM as $,sw as H,kl as K,sx as Q,kH as C,et as A,sy as J,sz as E,sA as U,sB as V,sC as Z,sD as W,sE as h,sF as X,sG as Y,sH as O,sI as M,sJ as L,sK as ee,sL as te,sM as S,nD as F,sN as I,sO as ne,sP as oe,bZ as w,ev as re,kx as se,sQ as ae,sR as le,sS as ue}from"./index-c18a96f3.js";import{x as ie}from"./georeference-8c87265f.js";function ce(e,n,t){const s=e.typedBuffer,r=e.typedBufferStride,f=n.typedBuffer,l=n.typedBufferStride,i=t?t.count:n.count;let a=(t&&t.dstIndex?t.dstIndex:0)*r,d=(t&&t.srcIndex?t.srcIndex:0)*l;for(let u=0;u<i;++u){for(let o=0;o<9;++o)s[a+o]=f[d+o];a+=r,d+=l}}Object.freeze(Object.defineProperty({__proto__:null,copy:ce},Symbol.toStringTag,{value:"Module"}));function fe(e,n,t){const s=e.typedBuffer,r=e.typedBufferStride,f=n.typedBuffer,l=n.typedBufferStride,i=t?t.count:n.count;let a=(t&&t.dstIndex?t.dstIndex:0)*r,d=(t&&t.srcIndex?t.srcIndex:0)*l;for(let u=0;u<i;++u){for(let o=0;o<16;++o)s[a+o]=f[d+o];a+=r,d+=l}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function y(e,n){return new e(new ArrayBuffer(n*e.ElementCount*P(e.ElementType)))}async function Ce(e,n,t){const s=new z(de(t)),r=(await D(s,n,t,!0)).model,f=r.lods.shift(),l=new Map,i=new Map;r.textures.forEach((g,v)=>l.set(v,xe(g))),r.materials.forEach((g,v)=>i.set(v,ge(g,l)));const a=pe(f);for(const g of a.parts)$e(a,g,i);const{position:d,normal:u,tangent:o,color:c,texCoord0:m}=a.vertexAttributes,x={position:d.typedBuffer,normal:u!=null?u.typedBuffer:null,tangent:o!=null?o.typedBuffer:null,uv:m!=null?m.typedBuffer:null,color:c!=null?c.typedBuffer:null},b=ie(x,e,t);return{transform:b.transform,components:a.components,spatialReference:e.spatialReference,vertexAttributes:new j({position:b.vertexAttributes.position,normal:b.vertexAttributes.normal,tangent:b.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function de(e){const n=e==null?void 0:e.resolveFile;return n?{busy:!1,request:async(t,s,r)=>{const f=n(t);return(await k(f,{responseType:s==="image"?"image":s==="binary"?"array-buffer":"json",signal:r!=null?r.signal:null})).data}}:null}function T(e,n){if(e==null)return"-";const t=e.typedBuffer;return`${_(n,t.buffer,()=>n.size)}/${t.byteOffset}/${t.byteLength}`}function me(e){return e!=null?e.toString():"-"}function pe(e){let n=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,r=new Map,f=[];for(const l of e.parts){const{attributes:{position:i,normal:a,color:d,tangent:u,texCoord0:o}}=l,c=`
      ${T(i,s)}/
      ${T(a,s)}/
      ${T(d,s)}/
      ${T(u,s)}/
      ${T(o,s)}/
      ${me(l.transform)}
    `;let m=!1;const x=_(r,c,()=>(m=!0,{start:n,length:i.count}));m&&(n+=i.count),a&&(t.normal=!0),d&&(t.color=!0),u&&(t.tangent=!0),o&&(t.texCoord0=!0),f.push({gltf:l,writeVertices:m,region:x})}return{vertexAttributes:{position:y(ae,n),normal:t.normal?y(F,n):null,tangent:t.tangent?y(O,n):null,color:t.color?y(L,n):null,texCoord0:t.texCoord0?y(le,n):null},parts:f,components:[]}}function xe(e){return new N({data:(G(e.data),e.data),wrap:be(e.parameters.wrap)})}function ge(e,n){const t=new B(ve(e.color,e.opacity)),s=e.emissiveFactor?new B(he(e.emissiveFactor)):null;return new q({color:t,colorTexture:$(e.textureColor,r=>n.get(r)),normalTexture:$(e.textureNormal,r=>n.get(r)),emissiveColor:s,emissiveTexture:$(e.textureEmissive,r=>n.get(r)),occlusionTexture:$(e.textureOcclusion,r=>n.get(r)),alphaMode:Te(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:$(e.textureMetallicRoughness,r=>n.get(r)),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function $e(e,n,t){n.writeVertices&&ye(e,n);const s=n.gltf,r=new Uint32Array(H(s.indices||s.attributes.position.count,s.primitiveType)),f=n.region.start;if(f)for(let l=0;l<r.length;l++)r[l]+=f;e.components.push(new K({faces:r,material:t.get(s.material),trustSourceNormals:!0}))}function ye(e,n){const{position:t,normal:s,tangent:r,color:f,texCoord0:l}=e.vertexAttributes,i=n.region.start,{attributes:a,transform:d}=n.gltf,u=a.position.count;if(Q(t.slice(i,u),a.position,d),a.normal!=null&&s!=null){const o=C(A(),d),c=s.slice(i,u);J(c,a.normal,o),E(o)&&U(c,c)}else s!=null&&V(s,0,0,1,{dstIndex:i,count:u});if(a.tangent!=null&&r!=null){const o=C(A(),d),c=r.slice(i,u);Z(c,a.tangent,o),E(o)&&W(c,c)}else r!=null&&h(r,0,0,1,1,{dstIndex:i,count:u});if(a.texCoord0!=null&&l!=null?X(l.slice(i,u),a.texCoord0):l!=null&&Y(l,0,0,{dstIndex:i,count:u}),a.color!=null&&f!=null){const o=a.color,c=f.slice(i,u);if(o.elementCount===4)o instanceof O?M(c,o,255):o instanceof L?ee(c,o):o instanceof te&&M(c,o,1/256);else{h(c,255,255,255,255);const m=S.fromTypedArray(c.typedBuffer,c.typedBufferStride);o instanceof F?I(m,o,255):o instanceof S?ne(m,o):o instanceof oe&&I(m,o,1/256)}}else f!=null&&h(f.slice(i,u),255,255,255,255)}function Te(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function be(e){return{horizontal:R(e.s),vertical:R(e.t)}}function R(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function p(e){return e**(1/ue)*255}function ve(e,n){return re(p(e[0]),p(e[1]),p(e[2]),n)}function he(e){return se(p(e[0]),p(e[1]),p(e[2]))}export{Ce as loadGLTFMesh};