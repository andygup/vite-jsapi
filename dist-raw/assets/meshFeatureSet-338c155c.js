import{ae as u,af as h,ff as Ae,bG as be,bF as Te,ai as k,bD as wt,eN as Gt,bE as ut,ax as te,L as v,ag as V,cE as S,hq as Me,iX as j,b as P,Y as ee,_ as Pt,K as O,e4 as Pe,iY as Ce,E as gt,hA as Ie,J as Fe,gw as Rt,gD as ne,gK as oe,fF as ht,gv as Se,s as re,gu as dt,iZ as Le,gC as Oe,i_ as ie,b_ as se,au as Re,ep as _e,cL as De,cJ as Ee,A as $e,bf as Ct,cc as je,by as At,bt as Ne,ah as Ue}from"./index-468a9268.js";import{d as ke,a as Ve,n as ae,i as vt,u as Ge,b as We,p as _t,c as Dt,e as Et,f as $t,h as jt,j as Nt,k as Be,l as ot,m as It,o as Ft,q as ze,r as ft,M as mt}from"./georeference-1e564369.js";import{w as He}from"./imageUtils-42075577.js";import{e as Ze}from"./earcut-db592379.js";import{c as le}from"./Indices-cfef030f.js";import{d as Wt}from"./deduplicate-ea470617.js";import{i as Bt}from"./External-b242d32b.js";import{c as Ut}from"./mat3f64-c33d428a.js";import{c as ce}from"./mat4f64-06a72c15.js";import{g as kt}from"./spatialReferenceEllipsoidUtils-25b7e4fc.js";import{a as Ye}from"./infoFor3D-91dff30a.js";import{F as Xe}from"./FeatureSet-09da8445.js";var Y;const bt=new WeakMap;let Je=0,R=Y=class extends wt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,o,r){if(t instanceof HTMLImageElement){const i={type:"image-element",src:Gt(t.src,r),crossOrigin:t.crossOrigin};e[o]=i}else if(t instanceof HTMLCanvasElement){const i=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(i)};e[o]=s}else if(t instanceof HTMLVideoElement){const i={type:"video-element",src:Gt(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[o]=i}else if(t instanceof ImageData){const i={type:"image-data",imageData:this._encodeImageData(t)};e[o]=i}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),o=document.createElement("canvas");return o.width=e.width,o.height=e.height,o.getContext("2d").putImageData(e,0,0),o}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const o=e.substr(e.length-4,4).toLowerCase(),r=e.substr(0,15).toLocaleLowerCase();if(o===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(o="")=>`d:${o},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(bt.has(this.data)||bt.set(this.data,++Je),e(bt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new Y(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const o=this.clone();return t.set(this,o),o}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let o=0;o<t.data.length;o++)e+=String.fromCharCode(t.data[o]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),o=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)o[r]=e.charCodeAt(r);return He(o,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new Y({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new Y({data:t}):ut(Y,t)}};u([h({type:String,json:{write:Ae}})],R.prototype,"url",null);u([h({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),h()],R.prototype,"data",null);u([be("data")],R.prototype,"writeData",null);u([Te("data")],R.prototype,"readData",null);u([h({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],R.prototype,"transparent",null);u([h({json:{write:!0}})],R.prototype,"wrap",void 0);u([h({readOnly:!0})],R.prototype,"contentHash",null);R=Y=u([k("esri.geometry.support.MeshTexture")],R);const rt=R;var St;let L=St=class extends wt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const o=t!=null?t.get(this):null;if(o)return o;const r=new St(this.clonePropertiesWithDeduplication(e));return t!=null&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture!=null?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:this.normalTexture!=null?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform!=null?this.colorTextureTransform:null,normalTextureTransform:this.normalTextureTransform!=null?this.normalTextureTransform:null}}};u([h({type:te,json:{write:!0}})],L.prototype,"color",void 0);u([h({type:rt,json:{write:!0}})],L.prototype,"colorTexture",void 0);u([h({type:rt,json:{write:!0}})],L.prototype,"normalTexture",void 0);u([h({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaMode",void 0);u([h({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaCutoff",void 0);u([h({nonNullable:!0,json:{write:!0}})],L.prototype,"doubleSided",void 0);u([h()],L.prototype,"colorTextureTransform",void 0);u([h()],L.prototype,"normalTextureTransform",void 0);L=St=u([k("esri.geometry.support.MeshMaterial")],L);const Vt=L;var Lt;let I=Lt=class extends Vt{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const o=t!=null?t.get(this):null;if(o)return o;const r=new Lt(this.clonePropertiesWithDeduplication(e));return t!=null&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:this.emissiveColor!=null?this.emissiveColor.clone():null,emissiveTexture:this.emissiveTexture!=null?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:this.occlusionTexture!=null?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture!=null?this.metallicRoughnessTexture.cloneWithDeduplication(t):null,occlusionTextureTransform:this.occlusionTextureTransform!=null?this.occlusionTextureTransform:null,emissiveTextureTransform:this.emissiveTextureTransform!=null?this.emissiveTextureTransform:null,metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform!=null?this.metallicRoughnessTextureTransform:null}}};u([h({type:te,json:{write:!0}})],I.prototype,"emissiveColor",void 0);u([h({type:rt,json:{write:!0}})],I.prototype,"emissiveTexture",void 0);u([h({type:rt,json:{write:!0}})],I.prototype,"occlusionTexture",void 0);u([h({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"metallic",void 0);u([h({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"roughness",void 0);u([h({type:rt,json:{write:!0}})],I.prototype,"metallicRoughnessTexture",void 0);u([h()],I.prototype,"occlusionTextureTransform",void 0);u([h()],I.prototype,"emissiveTextureTransform",void 0);u([h()],I.prototype,"metallicRoughnessTextureTransform",void 0);I=Lt=u([k("esri.geometry.support.MeshMaterialMetallicRoughness")],I);const qe=I;var pt;const ue="esri.geometry.support.MeshVertexAttributes",W=v.getLogger(ue);let M=pt=class extends wt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return X(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},W)}castPosition(t){return t&&t instanceof Float32Array&&W.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),X(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},W)}castUv(t){return X(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},W)}castNormal(t){return X(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},W)}castTangent(t){return X(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},W)}clone(){const t={position:S(this.position),uv:S(this.uv),normal:S(this.normal),tangent:S(this.tangent),color:S(this.color)};return new pt(t)}clonePositional(){const t={position:S(this.position),normal:S(this.normal),tangent:S(this.tangent),uv:this.uv,color:this.color};return new pt(t)}};u([h({json:{write:it}})],M.prototype,"color",void 0);u([V("color")],M.prototype,"castColor",null);u([h({nonNullable:!0,json:{write:it}})],M.prototype,"position",void 0);u([V("position")],M.prototype,"castPosition",null);u([h({json:{write:it}})],M.prototype,"uv",void 0);u([V("uv")],M.prototype,"castUv",null);u([h({json:{write:it}})],M.prototype,"normal",void 0);u([V("normal")],M.prototype,"castNormal",null);u([h({json:{write:it}})],M.prototype,"tangent",void 0);u([V("tangent")],M.prototype,"castTangent",null);M=pt=u([k(ue)],M);function Tt(n,t,e,o){const{loggerTag:r,stride:i}=t;return n.length%i!==0?(o.error(r,`Invalid array length, expected a multiple of ${i}`),new e([])):n}function X(n,t,e,o,r){if(!n)return n;if(n instanceof t)return Tt(n,o,t,r);for(const i of e)if(n instanceof i)return Tt(new t(n),o,t,r);if(Array.isArray(n))return Tt(new t(n),o,t,r);{const i=e.map(s=>`'${s.name}'`);return r.error(`Failed to set property, expected one of ${i}, but got ${n.constructor.name}`),new t([])}}function it(n,t,e){t[e]=Ke(n)}function Ke(n){const t=new Array(n.length);for(let e=0;e<n.length;e++)t[e]=n[e];return t}var nt;const fe="esri.geometry.support.MeshComponent",Qe=v.getLogger(fe);let _=nt=class extends wt{static from(t){return ut(nt,t)}constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return X(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Qe)}castMaterial(t){return t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?ut(qe,t):ut(Vt,t)}clone(){return new nt({faces:S(this.faces),shading:this.shading,material:S(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const o={faces:S(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new nt(o)}};u([h({json:{write:!0}})],_.prototype,"faces",void 0);u([V("faces")],_.prototype,"castFaces",null);u([h({type:Vt,json:{write:!0}})],_.prototype,"material",void 0);u([V("material")],_.prototype,"castMaterial",null);u([h({type:String,json:{write:!0}})],_.prototype,"shading",void 0);u([h({type:Boolean})],_.prototype,"trustSourceNormals",void 0);_=nt=u([k(fe)],_);const Q=_;function tn(n){const t=nn(n.rings,n.hasZ,xt.CCW_IS_HOLE),e=new Array;let o=0,r=0;for(const l of t.polygons){const a=l.count,c=l.index,f=ke(t.position,c*3,a*3),p=l.holeIndices.map(d=>d-c),g=le(Ze(f,p,3));e.push({position:f,faces:g}),o+=f.length,r+=g.length}const i=en(e,o,r),s=Array.isArray(i.position)?Wt(i.position,3,{originalIndices:i.faces}):Wt(i.position.buffer,6,{originalIndices:i.faces});return i.position=Ve(new Float64Array(s.buffer)),i.faces=s.indices,i}function en(n,t,e){if(n.length===1)return n[0];const o=ae(t),r=new Array(e);let i=0,s=0,l=0;for(const a of n){for(let c=0;c<a.position.length;c++)o[i++]=a.position[c];for(const c of a.faces)r[s++]=c+l;l=i/3}return{position:o,faces:le(r)}}function nn(n,t,e){const o=n.length,r=new Array(o),i=new Array(o),s=new Array(o);let l=0,a=0,c=0,f=0;for(let d=0;d<o;++d)f+=n[d].length;const p=ae(f*3);let g=0;for(let d=o-1;d>=0;d--){const m=n[d],b=e===xt.CCW_IS_HOLE?on(m):!1;if(!b||o===1){let A=m.length;for(let y=0;y<l;++y)A+=r[y].length;const T={index:g,pathLengths:new Array(l+1),count:A,holeIndices:new Array(l)};T.pathLengths[0]=m.length,m.length>0&&(s[c++]={index:g,count:m.length}),b?g=at(m,m.length-1,-1,p,g,m.length,t):g=at(m,0,1,p,g,m.length,t);for(let y=0;y<l;++y){const x=r[y];T.holeIndices[y]=g,T.pathLengths[y+1]=x.length,x.length>0&&(s[c++]={index:g,count:x.length}),g=at(x,0,1,p,g,x.length,t)}l=0,T.count>0&&(i[a++]=T)}else r[l++]=m}for(let d=0;d<l;++d){const m=r[d];m.length>0&&(s[c++]={index:g,count:m.length}),g=at(m,0,1,p,g,m.length,t)}return i.length=a,s.length=c,{position:p,polygons:i,outlines:s}}function at(n,t,e,o,r,i,s){r*=3;for(let l=0;l<i;++l){const a=n[t];o[r++]=a[0],o[r++]=a[1],o[r++]=s?a[2]:0,t+=e}return r/3}function on(n){return!Me(n,!1,!1)}var xt;(function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(xt||(xt={}));const Ot=v.getLogger("esri.geometry.support.meshUtils.centerAt");function rn(n,t,e){if(!n.vertexAttributes||!n.vertexAttributes.position)return;const o=(e==null?void 0:e.origin)??n.origin;n.transform!=null?((e==null?void 0:e.geographic)!=null&&e.geographic!==n.transform.geographic&&Ot.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${n.transform.geographic}) is not supported`),sn(n.transform,t,o)):vt(n.spatialReference,e)?an(n,t,o):ln(n,t,o)}function sn(n,t,e){const o=t.x-e.x,r=t.y-e.y,i=t.hasZ&&e.hasZ?t.z-e.z:0,s=n.origin;n.origin=[s[0]+o,s[1]+r,s[2]+i]}function an(n,t,e){const o=Ge(n.vertexAttributes,e,{geographic:!0}),{position:r,normal:i,tangent:s}=We(o,t,{geographic:!0});n.vertexAttributes.position=r,n.vertexAttributes.normal=i,n.vertexAttributes.tangent=s,n.vertexAttributesChanged()}function ln(n,t,e){const o=fn,r=un;if(!j(t,r,n.spatialReference)){Ot.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${n.spatialReference.wkid})`);return}if(!j(e,o,n.spatialReference)){const i=n.origin;o[0]=i.x,o[1]=i.y,o[2]=i.z,Ot.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${n.spatialReference.wkid}).`)}cn(n.vertexAttributes.position,r,o),n.vertexAttributesChanged()}function cn(n,t,e){if(n)for(let o=0;o<n.length;o+=3)for(let r=0;r<3;r++)n[o+r]+=t[r]-e[r]}const un=P(),fn=P();async function pn(n,t,e){const{source:o}=t,{loadGLTFMesh:r}=await ee(Pt(()=>import("./loadGLTFMesh-82615071.js"),["assets/loadGLTFMesh-82615071.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/mat3f64-c33d428a.js","assets/vec4f64-efdcb593.js","assets/BufferView-07376cf4.js","assets/vec4-3dd523e8.js","assets/vec32-f6519ba1.js","assets/DefaultMaterial_COLOR_GAMMA-5a16e568.js","assets/mat4f64-06a72c15.js","assets/enums-08489827.js","assets/Version-35c6dbb5.js","assets/quat-ef322c14.js","assets/quatf64-5b0101cd.js","assets/resourceUtils-4053cd3b.js","assets/basicInterfaces-cc58f4ac.js","assets/Indices-cfef030f.js","assets/types-c657ebd9.js","assets/georeference-1e564369.js","assets/spatialReferenceEllipsoidUtils-25b7e4fc.js","assets/imageUtils-42075577.js","assets/earcut-db592379.js","assets/deduplicate-ea470617.js","assets/External-b242d32b.js","assets/infoFor3D-91dff30a.js","assets/FeatureSet-09da8445.js","assets/Field-88bfb4af.js","assets/fieldType-31d95250.js"]),e),i=hn(o),s=r(new O({x:0,y:0,z:0,spatialReference:n.spatialReference}),i.url,{resolveFile:gn(i),useTransform:!0,signal:e==null?void 0:e.signal});s.then(()=>i.dispose(),()=>i.dispose());const{vertexAttributes:l,components:a}=await s;n.vertexAttributes=l,n.components=a}function gn(n){const t=Pe(n.url);return e=>{const o=Ce(e,t,t),r=o?o.replace(/^ *\.\//,""):null;return(r?n.files.get(r):null)??e}}function hn(n){if(Array.isArray(n)){if(!n.length)throw new gt("mesh-load-external:missing-assets","There must be at least one file to load");return n[0]instanceof File?dn(n):mn(n)}return n instanceof File?ge(n):pe(n)}function pe(n){const{assetUrl:t}=n;return new st(t)}function ge(n){return st.fromBlob(n)}function dn(n){const t=n.map(e=>({name:e.name,mimeType:e.type,source:ge(e)}));return he(t)}function mn(n){const t=n.map(e=>({name:e.assetName,mimeType:e.assetMimeType,source:pe(e)}));return he(t)}const xn=/^(model\/gltf\+json)|(model\/gltf-binary)$/,yn=/\.(gltf|glb)/i;function he(n){const t=new Map;let e=null;for(const{name:o,mimeType:r,source:i}of n)(e==null||xn.test(r)||yn.test(o))&&(e=i.url),t.set(o,i.url),i.files.forEach((s,l)=>t.set(l,s));if(e==null)throw new gt("mesh-load-external:missing-files","Missing files to load external mesh source");return new st(e,()=>n.forEach(({source:o})=>o.dispose()),t)}class st{constructor(t,e=()=>{},o=new Map){this.url=t,this.dispose=e,this.files=o}static fromBlob(t){const e=URL.createObjectURL(t);return new st(e,()=>URL.revokeObjectURL(e))}}let N=class extends Ie{constructor(){super(),this.externalSources=new Fe,this._explicitDisplaySource=null}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(t){if(t!=null&&!Bt(t))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=t,t&&!this.externalSources.includes(t)&&this.externalSources.add(t)}clearSources(){this.displaySource=null,this.externalSources.removeAll()}get _implicitDisplaySource(){return this.externalSources.find(Bt)}};u([h()],N.prototype,"externalSources",void 0);u([h()],N.prototype,"displaySource",null);u([h()],N.prototype,"_implicitDisplaySource",null);u([h()],N.prototype,"_explicitDisplaySource",void 0);N=u([k("esri.geometry.support.meshUtils.Metadata")],N);function wn(n,t,e){!n.vertexAttributes||!n.vertexAttributes.position||(n.transform!=null?((e==null?void 0:e.geographic)!=null&&e.geographic!==n.transform.geographic&&v.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${n.transform.geographic}) is not supported`),vn(n.transform,t)):vt(n.spatialReference,e)?An(n,t):bn(n,t))}function vn(n,t){const e=n.origin;n.origin=Rt(P(),e,t)}function An(n,t){const e=n.spatialReference,o=n.vertexAttributes.position,r=n.vertexAttributes.normal,i=n.vertexAttributes.tangent,s=new Float64Array(o.length),l=r!=null?new Float32Array(r.length):null,a=i!=null?new Float32Array(i.length):null,c=n.extent.center,f=Tn;ne(e,[c.x,c.y,c.z],zt,kt(e)),oe(Ht,zt),ht(f,t,Ht),_t(o,e,s),r!=null&&l!=null&&Dt(r,o,s,e,l),i!=null&&a!=null&&Et(i,o,s,e,a),de(s,f),$t(s,o,e),r!=null&&l!=null&&jt(l,o,s,e,r),i!=null&&a!=null&&Nt(a,o,s,e,i),n.vertexAttributesChanged()}function bn(n,t){de(n.vertexAttributes.position,t),n.vertexAttributesChanged()}function de(n,t){if(n)for(let e=0;e<n.length;e+=3)for(let o=0;o<3;o++)n[e+o]+=t[o]}const Tn=P(),zt=ce(),Ht=Ut();function Mn(){const{faceDescriptions:n,faceVertexOffsets:t,uvScales:e}=Rn,o=n.length*4,r=new Float64Array(o*3),i=new Float32Array(o*3),s=new Float32Array(o*2),l=new Uint32Array(n.length*2*3);let a=0,c=0,f=0,p=0;for(let g=0;g<n.length;g++){const d=n[g],m=a/3;for(const A of t)l[p++]=m+A;const b=d.corners;for(let A=0;A<4;A++){const T=b[A];let y=0;s[f++]=e[A][0]*.25+d.uvOrigin[0],s[f++]=d.uvOrigin[1]-e[A][1]*.25;for(let x=0;x<3;x++)d.axis[x]!==0?(r[a++]=d.axis[x]*.5,i[c++]=d.axis[x]):(r[a++]=T[y++]*.5,i[c++]=0)}}return{position:r,normal:i,uv:s,faces:l}}function Pn(n,t){const e=n.components[0],o=e.faces,r=_n[t],i=r*6,s=new Array(6),l=new Array(o.length-6);let a=0,c=0;for(let f=0;f<o.length;f++)f>=i&&f<i+6?s[a++]=o[f]:l[c++]=o[f];if(n.vertexAttributes.uv!=null){const f=new Float32Array(n.vertexAttributes.uv),p=r*4*2,g=[0,1,1,1,1,0,0,0];for(let d=0;d<g.length;d++)f[p+d]=g[d];n.vertexAttributes.uv=f}return n.components=[new Q({faces:s,material:e.material}),new Q({faces:l})],n}function Cn(n=0){const t=Math.round(8*2**n),e=t*2,o=(t-1)*(e+1)+e*2,r=new Float64Array(o*3),i=new Float32Array(o*3),s=new Float32Array(o*2),l=(t-1)*e*2,a=new Uint32Array(l*3);let c=0,f=0,p=0,g=0;for(let d=0;d<=t;d++){const m=d/t*Math.PI+.5*Math.PI,b=Math.cos(m),A=Math.sin(m);w[2]=A;const T=d===0||d===t,y=T?e-1:e;for(let x=0;x<=y;x++){const tt=x/y*2*Math.PI;w[0]=-Math.sin(tt)*b,w[1]=Math.cos(tt)*b;for(let D=0;D<3;D++)r[c]=.5*w[D],i[c]=w[D],++c;s[f++]=(x+(T?.5:0))/e,s[f++]=d/t,d!==0&&x!==e&&(d!==t&&(a[p++]=g,a[p++]=g+1,a[p++]=g-e),d!==1&&(a[p++]=g,a[p++]=g-e,a[p++]=g-e-1)),g++}}return{position:r,normal:i,uv:s,faces:a}}function In(n=0){const e=Math.round(16*2**n),o=(5-1)*(e+1)+e*2,r=new Float64Array(o*3),i=new Float32Array(o*3),s=new Float32Array(o*2),l=e*4,a=new Uint32Array(l*3);let c=0,f=0,p=0,g=0,d=0;for(let m=0;m<=5;m++){const b=m===0||m===5,A=m<=1||m>=5-1,T=m===2||m===4,y=b?e-1:e;for(let x=0;x<=y;x++){const tt=x/y*2*Math.PI,D=b?0:.5;w[0]=D*Math.sin(tt),w[1]=D*-Math.cos(tt),w[2]=m<=2?.5:-.5;for(let G=0;G<3;G++)r[c++]=w[G],A?i[f++]=G===2?m<=1?1:-1:0:i[f++]=G===2?0:w[G]/D;s[p++]=(x+(b?.5:0))/e,m<=1?s[p++]=m*1/3:m<=3?s[p++]=(m-2)*1/3+1/3:s[p++]=(m-4)*1/3+2/3,!T&&m!==0&&x!==e&&(m!==5&&(a[g++]=d,a[g++]=d+1,a[g++]=d-e),m!==1&&(a[g++]=d,a[g++]=d-e,a[g++]=d-e-1)),d++}}return{position:r,normal:i,uv:s,faces:a}}function Fn(n,t){const e=typeof t=="number"?t:t!=null?t.width:1,o=typeof t=="number"?t:t!=null?t.height:1;switch(n){case"up":case"down":return{width:e,depth:o};case"north":case"south":return{width:e,height:o};case"east":case"west":return{depth:e,height:o}}}function Sn(n){const t=et.facingAxisOrderSwap[n],e=et.position,o=et.normal,r=new Float64Array(e.length),i=new Float32Array(o.length);let s=0;for(let l=0;l<4;l++){const a=s;for(let c=0;c<3;c++){const f=t[c],p=Math.abs(f)-1,g=f>=0?1:-1;r[s]=e[a+p]*g,i[s]=o[a+p]*g,s++}}return{position:r,normal:i,uv:new Float32Array(et.uv),faces:new Uint32Array(et.faces),isPlane:!0}}const B=1,z=2,H=3,et={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[H,B,z],west:[-H,-B,z],north:[-B,H,z],south:[B,-H,z],up:[B,z,H],down:[B,-z,-H]}};function lt(n,t,e){n.isPlane||Ln(n),On(n,e==null?void 0:e.size);const{vertexAttributes:o,transform:r}=Be(n,t,e);return{vertexAttributes:new M({...o,uv:n.uv}),transform:r,components:[new Q({faces:n.faces,material:e&&e.material||null})],spatialReference:t.spatialReference}}function Ln(n){for(let t=0;t<n.position.length;t+=3)n.position[t+2]+=.5}function On(n,t){if(t==null)return;const e=typeof t=="number"?[t,t,t]:[t.width!=null?t.width:1,t.depth!=null?t.depth:1,t.height!=null?t.height:1];E[0]=e[0],E[4]=e[1],E[8]=e[2];for(let o=0;o<n.position.length;o+=3){for(let r=0;r<3;r++)w[r]=n.position[o+r];ht(w,w,E);for(let r=0;r<3;r++)n.position[o+r]=w[r]}if(e[0]!==e[1]||e[1]!==e[2]){E[0]=1/e[0],E[4]=1/e[1],E[8]=1/e[2];for(let o=0;o<n.normal.length;o+=3){for(let r=0;r<3;r++)w[r]=n.normal[o+r];ht(w,w,E),Se(w,w);for(let r=0;r<3;r++)n.normal[o+r]=w[r]}}}const Rn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},_n={south:0,east:1,north:2,west:3,up:4,down:5},w=P(),E=Ut(),me=v.getLogger("esri.geometry.support.meshUtils.rotate");function Dn(n,t,e){if(!n.vertexAttributes||!n.vertexAttributes.position||t[3]===0)return;const o=n.spatialReference;if(n.transform!=null){(e==null?void 0:e.geographic)!=null&&e.geographic!==n.transform.geographic&&me.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${n.transform.geographic}) is not supported`);const r=(e==null?void 0:e.origin)??n.transform.getOriginPoint(o);En(n.transform,t,r)}else{const r=(e==null?void 0:e.origin)??n.origin;vt(n.spatialReference,e)?$n(n,t,r):jn(n,t,r)}}function En(n,t,e){const o=re(J,e.x,e.y,e.z),r=dt(J,o,n.origin);n.applyLocalInverse(r,Zt),n.rotation=It(n.rotation,t,ot()),n.applyLocalInverse(r,r),dt(r,r,Zt),n.translation=Rt(P(),n.translation,r)}function $n(n,t,e){const o=n.spatialReference,r=kt(o),i=xe;j(e,i,r)||j(n.origin,i,r);const s=n.vertexAttributes.position,l=n.vertexAttributes.normal,a=n.vertexAttributes.tangent,c=new Float64Array(s.length),f=l!=null?new Float32Array(l.length):null,p=a!=null?new Float32Array(a.length):null;ne(r,i,yt,r),oe(Xt,yt);const g=Yt;ht(Ft(Yt),Ft(t),Xt),g[3]=t[3],_t(s,o,c),l!=null&&f!=null&&Dt(l,s,c,o,f),a!=null&&p!=null&&Et(a,s,c,o,p),K(c,g,3,i),$t(c,s,o),l!=null&&f!=null&&(K(f,g,3),jt(f,s,c,o,l)),a!=null&&p!=null&&(K(p,g,4),Nt(p,s,c,o,a)),n.vertexAttributesChanged()}function jn(n,t,e){const o=xe;if(!j(e,o,n.spatialReference)){const r=n.origin;o[0]=r.x,o[1]=r.y,o[2]=r.z,me.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${n.spatialReference.wkid}).`)}K(n.vertexAttributes.position,t,3,o),K(n.vertexAttributes.normal,t,3),K(n.vertexAttributes.tangent,t,4),n.vertexAttributesChanged()}function K(n,t,e,o=ie){if(n!=null){Le(yt,ze(t),Ft(t));for(let r=0;r<n.length;r+=e){for(let i=0;i<3;i++)J[i]=n[r+i]-o[i];Oe(J,J,yt);for(let i=0;i<3;i++)n[r+i]=J[i]+o[i]}}}const J=P(),Zt=P(),Yt=ot(),yt=ce(),Xt=Ut(),xe=P(),ye=v.getLogger("esri.geometry.support.meshUtils.scale");function Nn(n,t,e){if(!n.vertexAttributes||!n.vertexAttributes.position)return;const o=n.spatialReference;if(n.transform!=null){(e==null?void 0:e.geographic)!=null&&e.geographic!==n.transform.geographic&&ye.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${n.transform.geographic}) is not supported`);const r=(e==null?void 0:e.origin)??n.transform.getOriginPoint(o);Un(n.transform,t,r)}else{const r=vt(n.spatialReference,e),i=e&&e.origin||n.origin;r?kn(n,t,i):Vn(n,t,i)}}function Un(n,t,e){const o=re(q,e.x,e.y,e.z),r=dt(q,o,n.origin);n.applyLocalInverse(r,Jt);const i=se(P(),n.scale,t);n.scale=i,n.applyLocalInverse(r,r),dt(r,r,Jt),n.translation=Rt(P(),n.translation,r)}function kn(n,t,e){const o=n.spatialReference,r=kt(o),i=ve;j(e,i,r)||j(n.origin,i,r);const s=n.vertexAttributes.position,l=n.vertexAttributes.normal,a=n.vertexAttributes.tangent,c=new Float64Array(s.length),f=l!=null?new Float32Array(l.length):null,p=a!=null?new Float32Array(a.length):null;_t(s,o,c),l!=null&&f!=null&&Dt(l,s,c,o,f),a!=null&&p!=null&&Et(a,s,c,o,p),we(c,t,i),$t(c,s,o),l!=null&&f!=null&&jt(f,s,c,o,l),a!=null&&p!=null&&Nt(p,s,c,o,a),n.vertexAttributesChanged()}function Vn(n,t,e){const o=ve;if(!j(e,o,n.spatialReference)){const r=n.origin;o[0]=r.x,o[1]=r.y,o[2]=r.z,ye.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${n.spatialReference.wkid}).`)}we(n.vertexAttributes.position,t,o),n.vertexAttributesChanged()}function we(n,t,e=ie){if(n)for(let o=0;o<n.length;o+=3){for(let r=0;r<3;r++)q[r]=n[o+r]-e[r];se(q,q,t);for(let r=0;r<3;r++)n[o+r]=q[r]+e[r]}}const q=P(),Jt=P(),ve=P();var F;const U="esri.geometry.Mesh";let C=F=class extends Re(_e.LoadableMixin(De(Ee))){constructor(t){super(t),this.components=null,this.transform=null,this.metadata=new N,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new M,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add($e(()=>{var t;return{vertexAttributes:this.vertexAttributes,components:(t=this.components)==null?void 0:t.map(e=>e.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var t;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((t=this.metadata.displaySource)==null?void 0:t.extent)!=null}get _boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Ct({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new O({x:0,y:0,z:0,spatialReference:e})};const o=this.transform!=null?this.transform.project(t,e):t;let r=1/0,i=1/0,s=1/0,l=-1/0,a=-1/0,c=-1/0,f=0,p=0,g=0;const d=o.length,m=1/(d/3);let b=0;for(;b<d;){const A=o[b++],T=o[b++],y=o[b++];r=Math.min(r,A),i=Math.min(i,T),s=Math.min(s,y),l=Math.max(l,A),a=Math.max(a,T),c=Math.max(c,y),f+=m*A,p+=m*T,g+=m*y}return{extent:new Ct({xmin:r,ymin:i,zmin:s,xmax:l,ymax:a,zmax:c,spatialReference:e}),center:new O({x:f,y:p,z:g,spatialReference:e})}}get anchor(){if(this.transform!=null)return this.transform.getOriginPoint(this.spatialReference);const t=this._boundingInfo;return new O({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return this.transform!=null?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){var t,e;return!this.loaded&&((e=(t=this.metadata)==null?void 0:t.displaySource)==null?void 0:e.extent)!=null?this.metadata.displaySource.extent.clone():this._boundingInfo.extent}addComponent(t){if(!this.loaded){v.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations");return}this.components||(this.components=[]),this.components.push(Q.from(t)),this.notifyChange("components")}removeComponent(t){if(!this.loaded){v.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations");return}if(this.components){const e=this.components.indexOf(t);if(e!==-1){this.components.splice(e,1),this.notifyChange("components");return}}v.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}rotate(t,e,o,r){return ft(Mt.x,t,Z),ft(Mt.y,e,qt),ft(Mt.z,o,Kt),It(Z,qt,Z),It(Z,Kt,Z),Dn(this,Z,r),this}offset(t,e,o,r){return this.loaded?(ct[0]=t,ct[1]=e,ct[2]=o,wn(this,ct,r),this):(v.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(Nn(this,t,e),this):(v.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(rn(this,t,e),this):(v.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){const{metadata:{displaySource:e}}=this;return e&&this.addResolvingPromise(pn(this,e,t)),Promise.resolve(this)}addExternalSources(t){this.metadata.externalSources.addMany(t)}updateDisplaySource(t){this.metadata.displaySource=t}clone(){let t=null;if(this.components){const o=new Map,r=new Map;t=this.components.map(i=>i.cloneWithDeduplication(o,r))}const e={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:this.transform!=null?this.transform.clone():null,metadata:this.metadata.clone()};return new F(e)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const e=Pt(()=>import("./gltfexport-bcdce152.js"),["assets/gltfexport-bcdce152.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/quat-ef322c14.js","assets/vec4-3dd523e8.js","assets/quatf64-5b0101cd.js","assets/georeference-1e564369.js","assets/mat3f64-c33d428a.js","assets/mat4f64-06a72c15.js","assets/spatialReferenceEllipsoidUtils-25b7e4fc.js","assets/vec32-f6519ba1.js","assets/BufferView-07376cf4.js","assets/enums-08489827.js","assets/imageutils-de0c2f75.js","assets/resourceUtils-4053cd3b.js","assets/basicInterfaces-cc58f4ac.js","assets/imageUtils-42075577.js","assets/earcut-db592379.js","assets/Indices-cfef030f.js","assets/deduplicate-ea470617.js","assets/External-b242d32b.js","assets/infoFor3D-91dff30a.js","assets/FeatureSet-09da8445.js","assets/Field-88bfb4af.js","assets/fieldType-31d95250.js"]),o=this.load(),r=await Promise.all([e,o]),{toBinaryGLTF:i}=r[0];return i(this,t)}_clearSources(){this.metadata.clearSources()}static createBox(t,e){if(!(t instanceof O))return v.getLogger(U).error(".createBox()","expected location to be a Point instance"),null;const o=new F(lt(Mn(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?Pn(o,e.imageFace):o}static createSphere(t,e){return t instanceof O?new F(lt(Cn(e&&e.densificationFactor||0),t,e)):(v.getLogger(U).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof O?new F(lt(In(e&&e.densificationFactor||0),t,e)):(v.getLogger(U).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){if(!(t instanceof O))return v.getLogger(U).error(".createPlane()","expected location to be a Point instance"),null;const o=(e==null?void 0:e.facing)??"up",r=Fn(o,e==null?void 0:e.size);return new F(lt(Sn(o),t,{...e,size:r}))}static createFromPolygon(t,e){if(!(t instanceof je))return v.getLogger(U).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const o=tn(t);return new F({vertexAttributes:new M({position:o.position}),components:[new Q({faces:o.faces,shading:"flat",material:(e==null?void 0:e.material)??null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,o){if(!(t instanceof O))throw v.getLogger(U).error(".createfromGLTF()","expected location to be a Point instance"),new gt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await ee(Pt(()=>import("./loadGLTFMesh-82615071.js"),["assets/loadGLTFMesh-82615071.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/mat3f64-c33d428a.js","assets/vec4f64-efdcb593.js","assets/BufferView-07376cf4.js","assets/vec4-3dd523e8.js","assets/vec32-f6519ba1.js","assets/DefaultMaterial_COLOR_GAMMA-5a16e568.js","assets/mat4f64-06a72c15.js","assets/enums-08489827.js","assets/Version-35c6dbb5.js","assets/quat-ef322c14.js","assets/quatf64-5b0101cd.js","assets/resourceUtils-4053cd3b.js","assets/basicInterfaces-cc58f4ac.js","assets/Indices-cfef030f.js","assets/types-c657ebd9.js","assets/georeference-1e564369.js","assets/spatialReferenceEllipsoidUtils-25b7e4fc.js","assets/imageUtils-42075577.js","assets/earcut-db592379.js","assets/deduplicate-ea470617.js","assets/External-b242d32b.js","assets/infoFor3D-91dff30a.js","assets/FeatureSet-09da8445.js","assets/Field-88bfb4af.js","assets/fieldType-31d95250.js"]),o);return new F(await r(t,e,o))}static createWithExternalSource(t,e,o){var c;const r=(o==null?void 0:o.extent)??null,i=((c=o==null?void 0:o.transform)==null?void 0:c.clone())??new mt;i.origin=[t.x,t.y,t.z??0];const s=t.spatialReference,l={source:e,extent:r},a=new N;return a.externalSources.push(l),new F({metadata:a,transform:i,spatialReference:s})}static createIncomplete(t,e){var s;const o=((s=e==null?void 0:e.transform)==null?void 0:s.clone())??new mt;o.origin=[t.x,t.y,t.z??0];const r=t.spatialReference,i=new F({transform:o,spatialReference:r});return i.addResolvingPromise(Promise.reject(new gt("mesh-incomplete","Mesh resources are not complete"))),i}};u([h({type:[Q],json:{write:!0}})],C.prototype,"components",void 0);u([h({type:mt,json:{write:!0}})],C.prototype,"transform",void 0);u([h({constructOnly:!0})],C.prototype,"metadata",void 0);u([h({readOnly:!0})],C.prototype,"hasExtent",null);u([h({readOnly:!0})],C.prototype,"_boundingInfo",null);u([h({readOnly:!0})],C.prototype,"anchor",null);u([h({readOnly:!0})],C.prototype,"origin",null);u([h({readOnly:!0,json:{read:!1}})],C.prototype,"extent",null);u([h({readOnly:!0,json:{read:!1,write:!0,default:!0}})],C.prototype,"hasZ",void 0);u([h({readOnly:!0,json:{read:!1,write:!0,default:!1}})],C.prototype,"hasM",void 0);u([h({type:M,nonNullable:!0,json:{write:!0}})],C.prototype,"vertexAttributes",void 0);C=F=u([k(U)],C);const Mt={x:At(1,0,0),y:At(0,1,0),z:At(0,0,1)},Z=ot(),qt=ot(),Kt=ot(),ct=P(),Qt=C;function Gn(n,t,e){const o=e.features;e.features=[],delete e.geometryType;const r=Xe.fromJSON(e);if(r.geometryType="mesh",!e.assetMaps)return r;const i=Zn(t,e.assetMaps),s=r.spatialReference??Ne.WGS84,l=e.globalIdFieldName,{outFields:a}=n,c=a!=null&&a.length>0?Wn(a.includes("*")?null:new Set(a)):()=>({});for(const f of o){const p=Bn(f,l,s,t,i);p!=null&&r.features.push(new Ue({geometry:p,attributes:c(f)}))}return r}function Wn(n){return({attributes:t})=>{if(!t)return{};if(!n)return t;for(const e in t)n.has(e)||delete t[e];return t}}function Bn(n,t,e,o,r){const i=n.attributes[t],s=r.get(i);if(s==null||s.status===$.FAILED||s.url==null)return null;const l=zn(n,e,o),a=Ct.fromJSON(n.geometry);a.spatialReference=e;const c=Hn(n.attributes,o,s.projectVertices);return s.status===$.PENDING?Qt.createIncomplete(l,{extent:a,transform:c}):Qt.createWithExternalSource(l,Yn(s),{extent:a,transform:c})}function zn({attributes:n},t,{transformFieldRoles:e}){return new O({x:n[e.originX],y:n[e.originY],z:n[e.originZ],spatialReference:t})}function Hn(n,{transformFieldRoles:t},e){return new mt({translation:[n[t.translationX],-n[t.translationZ],n[t.translationY]],rotation:ft([n[t.rotationX],n[t.rotationZ],n[t.rotationY]],n[t.rotationDeg]),scale:[n[t.scaleX],n[t.scaleY],n[t.scaleZ]],geographic:e})}var $;(function(n){n[n.FAILED=0]="FAILED",n[n.PENDING=1]="PENDING",n[n.COMPLETED=2]="COMPLETED"})($||($={}));function Zn(n,t){const e=new Map;for(const o of t){const r=o.parentGlobalId;if(r==null)continue;const i=o.assetName,s=o.assetType,l=o.assetHash,a=o.assetURL,c=o.conversionStatus,f=Ye(s,n.supportedFormats);if(!f){v.getLogger("esri.rest.support.meshFeatureSet").error("mesh-feature-set:unknown-format",`Service returned an asset of type ${s}, but it does not list it as a supported type`);continue}let p=e.get(r);if(p==null)p={name:i,type:s,mimeType:f,hash:l,status:$.FAILED,url:a,projectVertices:Xn(o.flags).projectVertices},e.set(r,p);else{console.warn(`Multiple asset parts not expected. Ignoring additional parts. conflicting assetname: ${o.assetName}`);continue}switch(c){case"COMPLETED":case"SUBMITTED":p.status=$.COMPLETED;break;case"INPROGRESS":p.status=$.PENDING;break;case"FAILED":default:p.status=$.FAILED;break}}return e}function Yn(n){return{assetUrl:n.url,assetName:n.name,assetHash:n.hash,assetMimeType:n.mimeType}}function Xn(n){return{projectVertices:n.includes("PROJECT_VERTICES")}}const mo=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Gn},Symbol.toStringTag,{value:"Module"}));export{qe as M,M as a,rt as b,Q as c,mo as m};
