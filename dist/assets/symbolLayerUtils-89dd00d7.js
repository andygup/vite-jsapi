import{E as c,r as p,iN as b,iO as y,cP as d,_ as l,fz as w,iP as B}from"./index-b4b3ae7d.js";import{I as _}from"./ItemCache-16629539.js";import"./MemCache-b965182b.js";let i=a();function a(){return new _(50)}function R(){i=a()}function C(e,o){if(e.type==="icon")return f(e,o);if(e.type==="object")return h(e,o);throw new c("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function E(e,o){if(e.type==="icon")return I(e,o);if(e.type==="object")return g(e,o);throw new c("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){var r,n;if((r=e.resource)!=null&&r.href)return j(e.resource.href).then(t=>[t.width,t.height]);if((n=e.resource)!=null&&n.primitive)return o!=null?[o,o]:[256,256];throw new c("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function I(e,o){return f(e,o).then(r=>{if(e.size==null)return r;const n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function j(e){return p(e,{responseType:"image"}).then(o=>o.data)}function h(e,o){return z(e,o).then(r=>b(r))}async function g(e,o){const r=await h(e,o);return y(r,e)}async function z(e,o){var n;if(!e.isPrimitive){const t=d((n=e.resource)==null?void 0:n.href),s=i.get(t);if(s!==void 0)return s;const u=await(await l(()=>import("./objectResourceUtils-bf4a338e.js").then(m=>m.o),["assets/objectResourceUtils-bf4a338e.js","assets/devEnvironmentUtils-e2e22b53.js","assets/index-b4b3ae7d.js","assets/index-d832a396.css","assets/mat3f64-c33d428a.js","assets/mat4f64-06a72c15.js","assets/BufferView-0c0be981.js","assets/vec4-3dd523e8.js","assets/vec32-9c00e89c.js","assets/DefaultMaterial_COLOR_GAMMA-57adead4.js","assets/enums-08489827.js","assets/Version-efb7c0f1.js","assets/quat-ffcf1bfe.js","assets/quatf64-5b0101cd.js","assets/resourceUtils-4053cd3b.js","assets/basicInterfaces-cc58f4ac.js","assets/Indices-a579d3c9.js","assets/byteSizeEstimations-a7209dec.js","assets/NestedMap-d4ac5d57.js","assets/requestImageUtils-11797c03.js","assets/InterleavedLayout-57e50fce.js","assets/types-c657ebd9.js","assets/ray-f5bd8969.js","assets/ByteSizeUnit-c0a244d3.js","assets/vec4f64-efdcb593.js","assets/sphere-3ac9e195.js","assets/VertexAttribute-8238ac80.js","assets/TextureDescriptor-f1756343.js","assets/VertexArrayObject-c0fe275b.js","assets/OrderIndependentTransparency-01632ab9.js","assets/vec3f32-ec4c3c20.js","assets/doublePrecisionUtils-a59b69fa.js","assets/symbolColorUtils-7391e4f4.js","assets/lengthUtils-ae3367a7.js","assets/VertexElementDescriptor-24e04d97.js"])).fetch(t,{disableTextures:!0});return i.put(t,u.referenceBoundingBox),u.referenceBoundingBox}let r=null;if(e.resource&&e.resource.primitive&&(r=w(B(e.resource.primitive)),o!=null))for(let t=0;t<r.length;t++)r[t]*=o;return r?Promise.resolve(r):Promise.reject(new c("symbol:invalid-resource","The symbol does not have a valid resource"))}export{R as clearBoundingBoxCache,f as computeIconLayerResourceSize,C as computeLayerResourceSize,E as computeLayerSize,h as computeObjectLayerResourceSize};