import{f5 as h,s as i,r as a,U as d,i1 as b,i2 as w,cV as v,_ as z,ej as j,i3 as _}from"./index-6c241492.js";let s=y();function y(){return new h(50)}function I(){s=y()}function P(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return f(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function O(e,r){if(e.type==="icon")return g(e,r);if(e.type==="object")return B(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){var t,n;if((t=e.resource)!=null&&t.href)return L(e.resource.href).then(o=>[o.width,o.height]);if((n=e.resource)!=null&&n.primitive)return a(r)?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function L(e){return d(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return S(e,r).then(t=>b(t))}async function B(e,r){const t=await f(e,r);return w(t,e)}async function S(e,r){var n;if(!e.isPrimitive){const o=v((n=e.resource)==null?void 0:n.href),u=s.get(o);if(u!==void 0)return u;const m=await z(()=>import("./objectResourceUtils-3fc7426f.js").then(p=>p.o),["assets/objectResourceUtils-3fc7426f.js","assets/devEnvironmentUtils-5002a058.js","assets/index-6c241492.js","assets/index-d832a396.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-9e7302d5.js","assets/vec33-fc7230b7.js","assets/DefaultMaterial_COLOR_GAMMA-bcc43f0f.js","assets/types-e1c0a5bf.js","assets/enums-64ab819c.js","assets/Version-cc6f0e0b.js","assets/quat-be579589.js","assets/quatf64-3363c48e.js","assets/resourceUtils-71fe9113.js","assets/basicInterfaces-b7051eb1.js","assets/Indices-a898fd70.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-5fa9c8d4.js","assets/Util-125383ca.js","assets/sphere-e867ffed.js","assets/VertexAttribute-15d1866a.js","assets/OrderIndependentTransparency-e1b3a745.js","assets/Texture-7a224fae.js","assets/VertexArrayObject-1f40867c.js","assets/VertexElementDescriptor-2925c6af.js","assets/InterleavedLayout-e633b13a.js","assets/vec3f32-ad1dc57f.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-51f4fbff.js"]),c=await m.fetch(o,{disableTextures:!0});return s.put(o,c.referenceBoundingBox),c.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=j(_(e.resource.primitive)),a(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{I as clearBoundingBoxCache,l as computeIconLayerResourceSize,P as computeLayerResourceSize,O as computeLayerSize,f as computeObjectLayerResourceSize};
