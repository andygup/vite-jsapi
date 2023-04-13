import{fS as p,s as i,L as h,i3 as d,i4 as b,cM as w,_ as v,ee as z,i5 as L}from"./index-9f03d686.js";let s=a();function a(){return new p(50)}function x(){s=a()}function I(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return y(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function P(e,r){if(e.type==="icon")return _(e,r);if(e.type==="object")return S(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){var t,o;if((t=e.resource)!=null&&t.href)return g(e.resource.href).then(n=>[n.width,n.height]);if((o=e.resource)!=null&&o.primitive)return r!=null?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function g(e){return h(e,{responseType:"image"}).then(r=>r.data)}function y(e,r){return j(e,r).then(t=>d(t))}async function S(e,r){const t=await y(e,r);return b(t,e)}async function j(e,r){var o;if(!e.isPrimitive){const n=w((o=e.resource)==null?void 0:o.href),u=s.get(n);if(u!==void 0)return u;const f=await v(()=>import("./objectResourceUtils-e71704dc.js").then(m=>m.o),["assets/objectResourceUtils-e71704dc.js","assets/devEnvironmentUtils-5002a058.js","assets/index-9f03d686.js","assets/index-d832a396.css","assets/BufferView-595f5888.js","assets/vec32-59ce53ff.js","assets/DefaultMaterial_COLOR_GAMMA-5a120fb4.js","assets/enums-74e97557.js","assets/Version-893a3a85.js","assets/resourceUtils-1d112ccb.js","assets/basicInterfaces-4ab7cc6a.js","assets/Indices-d3b80329.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-8c2fa7ec.js","assets/InterleavedLayout-fb145064.js","assets/types-1305598a.js","assets/VertexAttribute-9f2e53ec.js","assets/Texture-43db1794.js","assets/VertexArrayObject-a9648fde.js","assets/OrderIndependentTransparency-5b5adc11.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-30258353.js","assets/VertexElementDescriptor-2925c6af.js"]),c=await f.fetch(n,{disableTextures:!0});return s.put(n,c.referenceBoundingBox),c.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=z(L(e.resource.primitive)),r!=null))for(let n=0;n<t.length;n++)t[n]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,l as computeIconLayerResourceSize,I as computeLayerResourceSize,P as computeLayerSize,y as computeObjectLayerResourceSize};
