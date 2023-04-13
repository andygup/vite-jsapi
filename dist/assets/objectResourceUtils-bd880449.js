import{a as _o}from"./devEnvironmentUtils-5002a058.js";import{eB as ai,lg as bo,lh as So,li as kt,f as Ze,ax as Lr,gd as Ao,cJ as yo,eG as ni,aK as Ce,gu as Ct,hI as Kt,e as N,hE as Co,h7 as si,lj as li,hK as wo,g8 as we,bs as sr,g7 as ci,g as Y,ga as me,bt as pe,lk as Oo,gm as Xe,gr as Ot,ll as Eo,_ as vt,dQ as Mo,J as lr,bm as Ro,jO as $r,dS as Po,hp as it,lm as ot,c as Ir,ln as Lo,bh as $o,bi as Io,s as cr,x as No,h6 as Je,ey as De,hY as Do,ba as Fo,kV as Vo,ee as Bo,lo as zo,lp as Uo,g9 as dr,F as Go,cL as Ho,lq as di,lr as ui,b7 as ur,gl as Ft,t as Nr,ls as hr,lt as er,ab as p,gc as ie,lu as Vt,iN as mr,ac as W,ad as Wo,an as ko,g2 as jo,b6 as Et,b3 as hi,lv as tr,g3 as qo,g4 as Xo,ek as Yo,lw as Qo,m as Zo,lx as Jo,a1 as mi,L as Ko,$ as pi,kX as Dr,ly as fi,jV as Mt,gA as Fr,gk as ea,kW as Vr}from"./index-33447e96.js";import{c as rr,y as ta,x as Rt,u as ra,q as ia,i as Pt,L as oa,O as aa,E as na}from"./BufferView-a85c13b6.js";import{r as sa,n as la,u as Br}from"./vec32-f5c647b0.js";import{l as ca,n as da,o as He,a as ua,f as ha,b as ma,u as zr,t as pa,c as fa}from"./DefaultMaterial_COLOR_GAMMA-80b08cd2.js";import{t as jt}from"./resourceUtils-1d112ccb.js";import{t as va}from"./NestedMap-1b5db22e.js";import{r as vi}from"./Version-045d7159.js";import{t as gi}from"./requestImageUtils-5a133376.js";import{t as ga,u as at,N as ir,a as Oe,i as X,n as Ee,e as gt}from"./basicInterfaces-4ab7cc6a.js";import{y as Ur,t as xa}from"./Indices-ae5aa7ed.js";import{s as G,H as Ta}from"./InterleavedLayout-f7e83796.js";import{O as h}from"./VertexAttribute-9f2e53ec.js";import{u as Se,P as Ve,L as Ye,D as Lt,M as _a,G as ba,E as Sa,I as Me,O as ne,C as le}from"./enums-74e97557.js";import{m as ct,a as Aa}from"./Texture-ae035b7e.js";import{E as ya}from"./VertexArrayObject-fcc631b6.js";import{o as s,n as pr,W as fr,_ as vr,a as Qe,c as Ca,A as wa,h as Oa,l as Ea,b as Ma,d as Ra,S as Pa}from"./OrderIndependentTransparency-5b5adc11.js";import{o as La,r as $a}from"./doublePrecisionUtils-e3c3d0d8.js";import{n as _e}from"./symbolColorUtils-7d14c4a3.js";import{t as ce}from"./VertexElementDescriptor-2925c6af.js";let We=class{constructor(e,r,i=!1,o=r){this.data=e,this.size=r,this.exclusive=i,this.stride=o}};function xt(t,e=!1){return t<=ai?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function nt(t){if(t==null)return null;const e=t.offset!=null?t.offset:bo,r=t.rotation!=null?t.rotation:0,i=t.scale!=null?t.scale:So,o=kt(1,0,0,0,1,0,e[0],e[1],1),a=kt(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=kt(i[0],0,0,0,i[1],0,0,0,1),c=Ze();return Lr(c,a,n),Lr(c,o,c),c}let Ia=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},Na=class{constructor(e,r,i){this.name=e,this.lodThreshold=r,this.pivotOffset=i,this.stageResources=new Ia,this.numberOfVertices=0}};function Da(t){if(t.length<ai)return Array.from(t);if(Ao(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return yo(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Fa=class xi{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this._children=void 0,G(e.length>=1),G(i.length%this._numIndexPerPrimitive==0),G(i.length>=e.length*this._numIndexPerPrimitive),G(o.size===3||o.size===4);const{data:a,size:n}=o,c=e.length;let d=n*i[this._numIndexPerPrimitive*e[0]];Fe.clear(),Fe.push(d);const l=Ce(a[d],a[d+1],a[d+2]),u=Ct(l);for(let f=0;f<c;++f){const x=this._numIndexPerPrimitive*e[f];for(let T=0;T<this._numIndexPerPrimitive;++T){d=n*i[x+T],Fe.push(d);let S=a[d];l[0]=Math.min(S,l[0]),u[0]=Math.max(S,u[0]),S=a[d+1],l[1]=Math.min(S,l[1]),u[1]=Math.max(S,u[1]),S=a[d+2],l[2]=Math.min(S,l[2]),u[2]=Math.max(S,u[2])}}this.bbMin=l,this.bbMax=u;const m=Kt(N(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-l[0],u[1]-l[1]),u[2]-l[2]);let v=this.radius*this.radius;for(let f=0;f<Fe.length;++f){d=Fe.getItemAt(f);const x=a[d]-m[0],T=a[d+1]-m[1],S=a[d+2]-m[2],O=x*x+T*T+S*S;if(O<=v)continue;const D=Math.sqrt(O),E=.5*(D-this.radius);this.radius=this.radius+E,v=this.radius*this.radius;const M=E/D;m[0]+=x*M,m[1]+=T*M,m[2]+=S*M}this.center=m,Fe.clear()}getChildren(){if(this._children||Co(this.bbMin,this.bbMax)<=1)return this._children;const e=Kt(N(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let l=0;l<8;++l)o[l]=0;const{data:a,size:n}=this.position;for(let l=0;l<r;++l){let u=0;const m=this._numIndexPerPrimitive*this.primitiveIndices[l];let v=n*this.indices[m],f=a[v],x=a[v+1],T=a[v+2];for(let S=1;S<this._numIndexPerPrimitive;++S){v=n*this.indices[m+S];const O=a[v],D=a[v+1],E=a[v+2];O<f&&(f=O),D<x&&(x=D),E<T&&(T=E)}f<e[0]&&(u|=1),x<e[1]&&(u|=2),T<e[2]&&(u|=4),i[l]=u,++o[u]}let c=0;for(let l=0;l<8;++l)o[l]>0&&++c;if(c<2)return;const d=new Array(8);for(let l=0;l<8;++l)d[l]=o[l]>0?new Uint32Array(o[l]):void 0;for(let l=0;l<8;++l)o[l]=0;for(let l=0;l<r;++l){const u=i[l];d[u][o[u]++]=this.primitiveIndices[l]}this._children=new Array;for(let l=0;l<8;++l)d[l]!==void 0&&this._children.push(new xi(d[l],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Fe.prune()}};const Fe=new ni({deallocator:null});let gr=class{constructor(){this.id=si()}unload(){}};var Ae;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(Ae||(Ae={}));function Va(t){return t?{p0:Ct(t.p0),p1:Ct(t.p1),p2:Ct(t.p2)}:{p0:N(),p1:N(),p2:N()}}function Ba(t,e,r){return we(qt,e,t),we(Gr,r,t),sr(ci(qt,qt,Gr))/2}new li(wo);new li(()=>Va());const qt=N(),Gr=N();function za(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;Y(r,0,0,0),Y(ae,0,0,0);let a=0,n=0;for(let c=0;c<e.length-2;c+=3){const d=e[c]*i,l=e[c+1]*i,u=e[c+2]*i;Y(q,o[d],o[d+1],o[d+2]),Y(be,o[l],o[l+1],o[l+2]),Y(Tt,o[u],o[u+1],o[u+2]);const m=Ba(q,be,Tt);m?(me(q,q,be),me(q,q,Tt),pe(q,q,1/3*m),me(r,r,q),a+=m):(me(ae,ae,q),me(ae,ae,be),me(ae,ae,Tt),n+=3)}return(n!==0||a!==0)&&(a!==0?(pe(r,r,1/a),!0):n!==0&&(pe(r,ae,1/n),!0))}function Ua(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;Y(r,0,0,0);let a=-1,n=0;for(let c=0;c<e.length;c++){const d=e[c]*i;a!==d&&(r[0]+=o[d],r[1]+=o[d+1],r[2]+=o[d+2],n++),a=d}return n>1&&pe(r,r,1/n),n>0}function Ga(t,e,r,i){if(!t)return!1;Y(i,0,0,0),Y(ae,0,0,0);let o=0,a=0;const{size:n,data:c}=t,d=e?e.length-1:c.length/n-1,l=d+(r?2:0);for(let u=0;u<l;u+=2){const m=u<d?u:d,v=u<d?u+1:0,f=(e?e[m]:m)*n,x=(e?e[v]:v)*n;q[0]=c[f],q[1]=c[f+1],q[2]=c[f+2],be[0]=c[x],be[1]=c[x+1],be[2]=c[x+2],pe(q,me(q,q,be),.5);const T=Oo(q,be);T>0?(me(i,i,pe(q,q,T)),o+=T):o===0&&(me(ae,ae,q),a++)}return o!==0?(pe(i,i,1/o),!0):a!==0&&(pe(i,ae,1/a),!0)}const q=N(),be=N(),Tt=N(),ae=N();let Ha=class{constructor(e){this.channel=e,this.id=si()}};function Wa(t,e){return t==null&&(t=[]),t.push(e),t}function ka(t,e){if(t==null)return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}let Ti=class _i extends gr{constructor(e,r,i=[],o=null,a=Ae.Mesh,n=null,c=-1){super(),this.material=e,this.mapPositions=o,this.type=a,this.objectAndLayerIdColor=n,this.edgeIndicesLength=c,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[d,l]of r)l&&this._vertexAttributes.set(d,{...l});if(i==null||i.length===0){const d=ja(this._vertexAttributes),l=Ur(d);this.edgeIndicesLength=this.edgeIndicesLength<0?d:this.edgeIndicesLength;for(const u of this._vertexAttributes.keys())this._indices.set(u,l)}else for(const[d,l]of i)l&&(this._indices.set(d,xa(l)),d===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(d).length:this.edgeIndicesLength))}instantiate(e={}){const r=new _i(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((i,o)=>{i.exclusive=!1,r._vertexAttributes.set(o,i)}),this._indices.forEach((i,o)=>r._indices.set(o,i)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:Da(r.data)},this._vertexAttributes.set(e,r)),r}setAttributeData(e,r){const i=this._vertexAttributes.get(e);i&&this._vertexAttributes.set(e,{...i,exclusive:!0,data:r})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ae.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ae.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Xe(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return za(i,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(h.POSITION),i=this.indices.get(h.POSITION);return Ga(r,i,i&&qa(this.material.parameters,r,i),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return Ua(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION),r=this.vertexAttributes.get(h.POSITION);if(!e||e.length===0||!r)return null;const i=this.type===Ae.Mesh?3:1;G(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const o=Ur(e.length/i);return new Fa(o,i,e,r)}get transformation(){return this._transformation??Ot}set transformation(e){this._transformation=e&&e!==Ot?Eo(e):null}get shaderTransformation(){return this._shaderTransformer!=null?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return this._shaderTransformer!=null}addHighlight(){const e=new Ha(ga.Highlight);return this.highlights=Wa(this.highlights,e),e}removeHighlight(e){this.highlights=ka(this.highlights,e)}};function ja(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function qa(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}function Xa(){if(Xt==null){const t=e=>Mo(`esri/libs/basisu/${e}`);Xt=vt(()=>import("./basis_transcoder-e0466ff6.js"),["assets/basis_transcoder-e0466ff6.js","assets/_commonjsHelpers-2f3e7994.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Xt}let Xt;var Be;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Be||(Be={}));let de=null,_t=null;async function bi(){return _t==null&&(_t=Xa(),de=await _t),_t}function Ya(t,e){if(de==null)return t.byteLength;const r=new de.BasisFile(new Uint8Array(t)),i=Ai(r)?Si(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Qa(t,e){if(de==null)return t.byteLength;const r=new de.KTX2File(new Uint8Array(t)),i=yi(r)?Si(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Si(t,e,r,i,o){const a=ya(e?Se.COMPRESSED_RGBA8_ETC2_EAC:Se.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function Ai(t){return t.getNumImages()>=1&&!t.isUASTC()}function yi(t){return t.getFaces()>=1&&t.isETC1S()}async function Za(t,e,r){de==null&&(de=await bi());const i=new de.BasisFile(new Uint8Array(r));if(!Ai(i))return null;i.startTranscoding();const o=Ci(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,c)=>i.transcodeImage(c,0,a,n,0,0));return i.close(),i.delete(),o}async function Ja(t,e,r){de==null&&(de=await bi());const i=new de.KTX2File(new Uint8Array(r));if(!yi(i))return null;i.startTranscoding();const o=Ci(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,c)=>i.transcodeImage(c,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function Ci(t,e,r,i,o,a,n,c){const{compressedTextureETC:d,compressedTextureS3TC:l}=t.capabilities,[u,m]=d?i?[Be.ETC2_RGBA,Se.COMPRESSED_RGBA8_ETC2_EAC]:[Be.ETC1_RGB,Se.COMPRESSED_RGB8_ETC2]:l?i?[Be.BC3_RGBA,Se.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Be.BC1_RGB,Se.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Be.RGBA32,Ve.RGBA],v=e.hasMipmap?r:Math.min(1,r),f=[];for(let O=0;O<v;O++)f.push(new Uint8Array(n(O,u))),c(O,u,f[O]);const x=f.length>1,T=x?Ye.LINEAR_MIPMAP_LINEAR:Ye.LINEAR,S={...e,samplingMode:T,hasMipmap:x,internalFormat:m,width:o,height:a};return new ct(t,S,{type:"compressed",levels:f})}const bt=lr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ka=542327876,en=131072,tn=4;function xr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function rn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const on=xr("DXT1"),an=xr("DXT3"),nn=xr("DXT5"),sn=31,ln=0,cn=1,dn=2,un=3,hn=4,mn=7,pn=20,fn=21;function vn(t,e,r){const i=gn(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:a,width:n,height:c}=i;return e.samplingMode=o.levels.length>1?Ye.LINEAR_MIPMAP_LINEAR:Ye.LINEAR,e.hasMipmap=o.levels.length>1,e.internalFormat=a,e.width=n,e.height=c,new ct(t,e,o)}function gn(t,e){const r=new Int32Array(t,0,sn);if(r[ln]!==Ka)return bt.error("Invalid magic number in DDS header"),null;if(!(r[pn]&tn))return bt.error("Unsupported format, must contain a FourCC code"),null;const i=r[fn];let o,a;switch(i){case on:o=8,a=Se.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case an:o=16,a=Se.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case nn:o=16,a=Se.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return bt.error("Unsupported FourCC code:",rn(i)),null}let n=1,c=r[hn],d=r[un];!(3&c)&&!(3&d)||(bt.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,d=d+3&-4);const l=c,u=d;let m,v;r[dn]&en&&e!==!1&&(n=Math.max(1,r[mn]));let f=r[cn]+4;const x=[];for(let T=0;T<n;++T)v=(c+3>>2)*(d+3>>2)*o,m=new Uint8Array(t,f,v),x.push(m),f+=v,c=Math.max(1,c>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:x},internalFormat:a,width:l,height:u}}let wi=class wt extends gr{constructor(e,r){super(),this._data=e,this.type=Ae.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ro,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Lt.REPEAT,t:Lt.REPEAT},this.estimatedTexMemRequired=wt._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;e!=null&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!($r(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Po(e.src)||$r(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(e==null)return 0;if(it(e)||ot(e))return r.encoding===at.KTX2_ENCODING?Qa(e,!!r.mipmap):r.encoding===at.BASIS_ENCODING?Ya(e,!!r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?wt._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:_a.TEXTURE_2D,pixelFormat:Ve.RGBA,dataType:ba.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Ye.LINEAR_MIPMAP_LINEAR:Ye.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e){if(this._glTexture!=null)return this._glTexture;if(this._loadingPromise!=null)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ct(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(it(r)||ot(r))&&this.params.encoding===at.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):(it(r)||ot(r))&&this.params.encoding===at.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):(it(r)||ot(r))&&this.params.encoding===at.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):ot(r)?this._loadFromPixelData(e,r):it(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&this._glTexture!=null?this._data.readyState<dt.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,r){return this._glTexture=vn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Ja(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Za(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){G(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?Ve.LUMINANCE:this.params.components===3?Ve.RGB:Ve.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new ct(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const o=await gi(r,{signal:i});return Ir(i),this._loadFromImage(e,o)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const o=await Lo(r,r.src,!1,i);return Ir(i),this._loadFromImage(e,o)})}_loadFromVideoElement(e,r){return r.readyState>=dt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",d),No(l)},c=()=>{r.readyState>=dt.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,r)))},d=u=>{n(),a(u||new cr("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",d);const l=$o(i,()=>d(Io()))}))}_loadFromImage(e,r){const i=wt._getDataDimensions(r);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=this.params.components===3?Ve.RGB:Ve.RGBA,o.width=i.width,o.height=i.height,this._glTexture=new ct(e,o,r),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}unload(){if(this._glTexture!=null&&(this._glTexture.dispose(),this._glTexture=null),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var dt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(dt||(dt={}));var A;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(A||(A={}));function Bt(t,e){switch(e.normalType){case z.Compressed:t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case z.Attribute:t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case z.ScreenDerivative:t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:Je(e.normalType);case z.COUNT:case z.Ground:}}var z;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(z||(z={}));function xn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Je(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));var K;function qe(t,e){switch(e.textureCoordinateType){case K.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case K.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case K.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Je(e.textureCoordinateType);case K.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case K.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(K||(K={}));function Tn(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Oi(t,e){switch(t.include(qe,e),e.textureCoordinateType){case K.Default:case K.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case K.Atlas:return t.include(Tn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:Je(e.textureCoordinateType);case K.None:case K.COUNT:return}}var V;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(V||(V={}));let J=class{constructor(e,r,i,o,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[V.Pass]:null,[V.Draw]:null},i!=null&&o!=null&&(this.bind[i]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},ue=class extends J{constructor(e,r){super(e,"vec3",V.Draw,(i,o,a,n)=>i.setUniform3fv(e,r(o,a,n)))}},Q=class extends J{constructor(e,r){super(e,"vec3",V.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}},ut=class extends J{constructor(e,r){super(e,"sampler2D",V.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}},Z=class extends J{constructor(e,r){super(e,"sampler2D",V.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}},_n=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return ir.LOADED}},bn=class extends _n{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=De(this._texture),this._textureNormal=De(this._textureNormal),this._textureEmissive=De(this._textureEmissive),this._textureOcclusion=De(this._textureOcclusion),this._textureMetallicRoughness=De(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?ir.LOADED:ir.LOADING}get textureBindParameters(){return new Sn(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=De(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textureRepository.acquire(e);if(Do(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return De(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}},Sn=class extends pr{constructor(e=null,r=null,i=null,o=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=o,this.textureMetallicRoughness=a}};Fo(0,.6,.2);var L;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(L||(L={}));function Ei(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===L.Normal&&i&&t.include(Oi,e),e.pbrMode!==L.Schematic)if(e.pbrMode!==L.Disabled){if(e.pbrMode===L.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const o=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(o===V.Pass?new Z("texMetallicRoughness",a=>a.textureMetallicRoughness):new ut("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(o===V.Pass?new Z("texEmission",a=>a.textureEmissive):new ut("texEmission",a=>a.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(o===V.Pass?new Z("texOcclusion",a=>a.textureOcclusion):new ut("texOcclusion",a=>a.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(o===V.Pass?[new Q("emissionFactor",a=>a.emissiveFactor),new Q("mrrFactors",a=>a.mrrFactors)]:[new ue("emissionFactor",a=>a.emissiveFactor),new ue("mrrFactors",a=>a.mrrFactors)]),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?s`applyEmission(${e.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?s`applyOcclusion(${e.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const zt=new Map([[h.POSITION,0],[h.NORMAL,1],[h.NORMALCOMPRESSED,1],[h.UV0,2],[h.COLOR,3],[h.COLORFEATUREATTRIBUTE,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.INSTANCEOBJECTANDLAYERIDCOLOR,7],[h.MODEL,8],[h.MODELNORMAL,12],[h.MODELORIGINHI,11],[h.MODELORIGINLO,15]]);function An(t){return Math.abs(t*t*t)}function yn(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return st.scale=Math.min(i.divisor/(e-i.offset),1),st.factor=An(t),st.minPixelSize=i.minPixelSize,st.paddingPixels=o,st}function Cn(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function wn(t,e){return Math.max(Vo(t*e.scale,t,e.factor),Cn(t,e))}function On(t,e,r,i){return wn(t,yn(e,r,i))}const st={scale:0,factor:0,minPixelSize:0,paddingPixels:0},St=Bo();function En(t,e,r,i,o,a){if(t.visible)if(t.boundingInfo){G(t.type===Ae.Mesh);const n=e.tolerance;Mi(t.boundingInfo,r,i,n,o,a)}else{const n=t.indices.get(h.POSITION),c=t.vertexAttributes.get(h.POSITION);Pi(r,i,0,n.length/3,n,c,void 0,o,a)}}const Mn=N();function Mi(t,e,r,i,o,a){if(t==null)return;const n=Pn(e,r,Mn);if(zo(St,t.bbMin),Uo(St,t.bbMax),o!=null&&o.applyToAabb(St),Ln(St,e,n,i)){const{primitiveIndices:c,indices:d,position:l}=t,u=c?c.length:d.length/3;if(u>Vn){const m=t.getChildren();if(m!==void 0){for(const v of m)Mi(v,e,r,i,o,a);return}}Pi(e,r,0,u,d,l,c,o,a)}}const Ri=N();function Pi(t,e,r,i,o,a,n,c,d){if(n)return Rn(t,e,r,i,o,a,n,c,d);const{data:l,stride:u}=a,m=t[0],v=t[1],f=t[2],x=e[0]-m,T=e[1]-v,S=e[2]-f;for(let O=r,D=3*r;O<i;++O){let E=u*o[D++],M=l[E++],$=l[E++],C=l[E];E=u*o[D++];let w=l[E++],R=l[E++],P=l[E];E=u*o[D++];let y=l[E++],F=l[E++],_=l[E];c!=null&&([M,$,C]=c.applyToVertex(M,$,C,O),[w,R,P]=c.applyToVertex(w,R,P,O),[y,F,_]=c.applyToVertex(y,F,_,O));const I=w-M,B=R-$,H=P-C,j=y-M,fe=F-$,ve=_-C,Pe=T*ve-fe*S,Ke=S*j-ve*x,et=x*fe-j*T,se=I*Pe+B*Ke+H*et;if(Math.abs(se)<=Number.EPSILON)continue;const oe=m-M,Le=v-$,$e=f-C,he=oe*Pe+Le*Ke+$e*et;if(se>0){if(he<0||he>se)continue}else if(he>0||he<se)continue;const ge=Le*H-B*$e,tt=$e*I-H*oe,rt=oe*B-I*Le,Ie=x*ge+T*tt+S*rt;if(se>0){if(Ie<0||he+Ie>se)continue}else if(Ie>0||he+Ie<se)continue;const Ne=(j*ge+fe*tt+ve*rt)/se;Ne>=0&&d(Ne,Li(I,B,H,j,fe,ve,Ri),O,!1)}}function Rn(t,e,r,i,o,a,n,c,d){const{data:l,stride:u}=a,m=t[0],v=t[1],f=t[2],x=e[0]-m,T=e[1]-v,S=e[2]-f;for(let O=r;O<i;++O){const D=n[O];let E=3*D,M=u*o[E++],$=l[M++],C=l[M++],w=l[M];M=u*o[E++];let R=l[M++],P=l[M++],y=l[M];M=u*o[E];let F=l[M++],_=l[M++],I=l[M];c!=null&&([$,C,w]=c.applyToVertex($,C,w,O),[R,P,y]=c.applyToVertex(R,P,y,O),[F,_,I]=c.applyToVertex(F,_,I,O));const B=R-$,H=P-C,j=y-w,fe=F-$,ve=_-C,Pe=I-w,Ke=T*Pe-ve*S,et=S*fe-Pe*x,se=x*ve-fe*T,oe=B*Ke+H*et+j*se;if(Math.abs(oe)<=Number.EPSILON)continue;const Le=m-$,$e=v-C,he=f-w,ge=Le*Ke+$e*et+he*se;if(oe>0){if(ge<0||ge>oe)continue}else if(ge>0||ge<oe)continue;const tt=$e*j-H*he,rt=he*B-j*Le,Ie=Le*H-B*$e,Ne=x*tt+T*rt+S*Ie;if(oe>0){if(Ne<0||ge+Ne>oe)continue}else if(Ne>0||ge+Ne<oe)continue;const Pr=(fe*tt+ve*rt+Pe*Ie)/oe;Pr>=0&&d(Pr,Li(B,H,j,fe,ve,Pe,Ri),D,!1)}}const Hr=N(),Wr=N();function Li(t,e,r,i,o,a,n){return Y(Hr,t,e,r),Y(Wr,i,o,a),ci(n,Hr,Wr),dr(n,n),n}function Pn(t,e,r){return Y(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Ln(t,e,r,i){return $n(t,e,r,i,1/0)}function $n(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let c=Math.min(a,n),d=Math.max(a,n);const l=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(l,u)),d<0||(c=Math.max(c,Math.min(l,u)),c>d))return!1;const m=(t[2]-i-e[2])*r[2],v=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(m,v)),!(d<0)&&(c=Math.max(c,Math.min(m,v)),!(c>d)&&c<o)}function In(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;o!=null&&(a=On(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Go(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function $i(t,e){const r=e?$i(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=Dn(o)),o==null&&i in r||(r[i]=o)}return r}function Nn(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?t[i]===null?(t[i]=o.slice(),r=!0):Ho(t[i],o)&&(r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}function Dn(t){const e=[];return t.forEach(r=>e.push(r)),e}const Fn={multiply:1,ignore:2,replace:3,tint:4},Vn=1e3;let Bn=class extends gr{constructor(e,r){super(),this.type=Ae.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=zt,this._pp0=Ce(0,0,1),this._pp1=Ce(0,0,0),this._parameters=$i(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Nn(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository!=null&&this.repository.materialChanged(this)}intersectDraped(e,r,i,o,a,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,r,i,this._pp0,this._pp1,a)}};var or;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(or||(or={}));var je;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(je||(je={}));function kr(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let c=0;c<n;++c){const d=2*t[c];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function Ii(t,e,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,c=t.length;if(i*=n,o==null||o===1)for(let d=0;d<c;++d){const l=3*t[d];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=n}else for(let d=0;d<c;++d){const l=3*t[d];for(let u=0;u<o;++u)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=n}}function Ni(t,e,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,c=t.length;if(i*=n,o===1)for(let d=0;d<c;++d){const l=4*t[d];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=n}else for(let d=0;d<c;++d){const l=4*t[d];for(let u=0;u<o;++u)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=n}}function zn(t,e,r,i,o,a=1){if(!r)return void Ii(t,e,i,o,a);const n=i.typedBuffer,c=i.typedBufferStride,d=t.length,l=r[0],u=r[1],m=r[2],v=r[4],f=r[5],x=r[6],T=r[8],S=r[9],O=r[10],D=r[12],E=r[13],M=r[14];o*=c;let $=0,C=0,w=0;const R=di(r)?P=>{$=e[P]+D,C=e[P+1]+E,w=e[P+2]+M}:P=>{const y=e[P],F=e[P+1],_=e[P+2];$=l*y+v*F+T*_+D,C=u*y+f*F+S*_+E,w=m*y+x*F+O*_+M};if(a===1)for(let P=0;P<d;++P)R(3*t[P]),n[o]=$,n[o+1]=C,n[o+2]=w,o+=c;else for(let P=0;P<d;++P){R(3*t[P]);for(let y=0;y<a;++y)n[o]=$,n[o+1]=C,n[o+2]=w,o+=c}}function Un(t,e,r,i,o,a=1){if(!r)return void Ii(t,e,i,o,a);const n=r,c=i.typedBuffer,d=i.typedBufferStride,l=t.length,u=n[0],m=n[1],v=n[2],f=n[4],x=n[5],T=n[6],S=n[8],O=n[9],D=n[10],E=!ui(n),M=1e-6,$=1-M;o*=d;let C=0,w=0,R=0;const P=di(n)?y=>{C=e[y],w=e[y+1],R=e[y+2]}:y=>{const F=e[y],_=e[y+1],I=e[y+2];C=u*F+f*_+S*I,w=m*F+x*_+O*I,R=v*F+T*_+D*I};if(a===1)if(E)for(let y=0;y<l;++y){P(3*t[y]);const F=C*C+w*w+R*R;if(F<$&&F>M){const _=1/Math.sqrt(F);c[o]=C*_,c[o+1]=w*_,c[o+2]=R*_}else c[o]=C,c[o+1]=w,c[o+2]=R;o+=d}else for(let y=0;y<l;++y)P(3*t[y]),c[o]=C,c[o+1]=w,c[o+2]=R,o+=d;else for(let y=0;y<l;++y){if(P(3*t[y]),E){const F=C*C+w*w+R*R;if(F<$&&F>M){const _=1/Math.sqrt(F);C*=_,w*=_,R*=_}}for(let F=0;F<a;++F)c[o]=C,c[o+1]=w,c[o+2]=R,o+=d}}function Gn(t,e,r,i,o,a=1){if(!r)return void Ni(t,e,i,o,a);const n=r,c=i.typedBuffer,d=i.typedBufferStride,l=t.length,u=n[0],m=n[1],v=n[2],f=n[4],x=n[5],T=n[6],S=n[8],O=n[9],D=n[10],E=!ui(n),M=1e-6,$=1-M;if(o*=d,a===1)for(let C=0;C<l;++C){const w=4*t[C],R=e[w],P=e[w+1],y=e[w+2],F=e[w+3];let _=u*R+f*P+S*y,I=m*R+x*P+O*y,B=v*R+T*P+D*y;if(E){const H=_*_+I*I+B*B;if(H<$&&H>M){const j=1/Math.sqrt(H);_*=j,I*=j,B*=j}}c[o]=_,c[o+1]=I,c[o+2]=B,c[o+3]=F,o+=d}else for(let C=0;C<l;++C){const w=4*t[C],R=e[w],P=e[w+1],y=e[w+2],F=e[w+3];let _=u*R+f*P+S*y,I=m*R+x*P+O*y,B=v*R+T*P+D*y;if(E){const H=_*_+I*I+B*B;if(H<$&&H>M){const j=1/Math.sqrt(H);_*=j,I*=j,B*=j}}for(let H=0;H<a;++H)c[o]=_,c[o+1]=I,c[o+2]=B,c[o+3]=F,o+=d}}function Hn(t,e,r,i,o,a=1){const n=i.typedBuffer,c=i.typedBufferStride,d=t.length;if(o*=c,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let l=0;l<d;++l){const u=3*t[l];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=c}else for(let l=0;l<d;++l){const u=4*t[l];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=c}else{if(r===4){for(let l=0;l<d;++l){const u=4*t[l];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=c}return}for(let l=0;l<d;++l){const u=3*t[l];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=c}}else{n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3];const l=new Uint32Array(i.typedBuffer.buffer,i.start),u=c/4,m=l[o/=4];o+=u;const v=d*a;for(let f=1;f<v;++f)l[o]=m,o+=u}}function Wn(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=t.length,c=e[0];i*=a;for(let d=0;d<n;++d)o[i]=c,i+=a}function kn(t,e,r,i,o=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,o===1)for(let c=0;c<r;++c)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let c=0;c<r;++c)for(let d=0;d<o;++d)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function jn(t,e,r,i,o,a){for(const n of e.fields.keys()){const c=t.vertexAttributes.get(n),d=t.indices.get(n);if(c&&d)switch(n){case h.POSITION:{G(c.size===3);const l=o.getField(n,Pt);G(!!l,`No buffer view for ${n}`),l&&zn(d,c.data,r,l,a);break}case h.NORMAL:{G(c.size===3);const l=o.getField(n,Pt);G(!!l,`No buffer view for ${n}`),l&&Un(d,c.data,i,l,a);break}case h.NORMALCOMPRESSED:{G(c.size===2);const l=o.getField(n,ia);G(!!l,`No buffer view for ${n}`),l&&kr(d,c.data,l,a);break}case h.UV0:{G(c.size===2);const l=o.getField(n,ra);G(!!l,`No buffer view for ${n}`),l&&kr(d,c.data,l,a);break}case h.COLOR:case h.SYMBOLCOLOR:{const l=o.getField(n,Rt);G(!!l,`No buffer view for ${n}`),G(c.size===3||c.size===4),!l||c.size!==3&&c.size!==4||Hn(d,c.data,c.size,l,a);break}case h.COLORFEATUREATTRIBUTE:{const l=o.getField(n,ta);G(!!l,`No buffer view for ${n}`),G(c.size===1),l&&c.size===1&&Wn(d,c.data,l,a);break}case h.TANGENT:{G(c.size===4);const l=o.getField(n,rr);G(!!l,`No buffer view for ${n}`),l&&Gn(d,c.data,i,l,a);break}case h.PROFILERIGHT:case h.PROFILEUP:case h.PROFILEVERTEXANDNORMAL:case h.FEATUREVALUE:{G(c.size===4);const l=o.getField(n,rr);G(!!l,`No buffer view for ${n}`),l&&Ni(d,c.data,l,a)}}else if(n===h.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const l=t.indices.get(h.POSITION);if(G(!!l,`No buffer view for ${n}`),l){const u=l.length,m=o.getField(n,Rt);kn(t.objectAndLayerIdColor,m,u,a)}}}}let qn=class{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,i,o,a){jn(i,this.vertexBufferLayout,e,r,o,a)}};function Tr(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Di({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let Fi=class extends J{constructor(e,r){super(e,"mat3",V.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}},Re=class extends J{constructor(e,r){super(e,"mat3",V.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}},ze=class extends J{constructor(e,r){super(e,"mat4",V.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}};function Vi(t,e){t.include(Tr);const r=t.vertex;r.include(Di,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new Q("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new Q("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new Re("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new ze("transformProjFromView",i=>i.transformProjFromView),new Fi("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new ue("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new ue("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new Q("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Xn=class extends pr{constructor(){super(...arguments),this.transformWorldFromViewTH=N(),this.transformWorldFromViewTL=N(),this.transformViewFromCameraRelativeRS=ur(),this.transformProjFromView=Ft()}};function Bi(t,e){switch(e.normalType){case z.Attribute:case z.Compressed:t.include(Bt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new Fi("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Re("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case z.Ground:t.include(Vi,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case z.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:Je(e.normalType);case z.COUNT:}}let Yn=class extends Xn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=ur()}};const Qn=.1,_r=.001;let Ut=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},br=class{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Nr(this._program),this._pipeline=this._configuration=null}reload(e){Nr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Sa.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},Sr=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new ni({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(V.Pass,this),this.bindDraw=r.generateBind(V.Draw,this),this._fragmentUniforms=Aa()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(r==null||r.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Me.LESS;Me.ALWAYS;const Zn={mask:255},Jn={function:{func:Me.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.ZERO}},Kn={function:{func:Me.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.REPLACE}};Me.EQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;Me.NOTEQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;let ye=class extends J{constructor(e,r){super(e,"vec2",V.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}};function jr(t){t.varyings.add("linearDepth","float")}function zi(t){t.vertex.uniforms.add(new ye("nearFar",(e,r)=>r.camera.nearFar))}function Ui(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Gi(t,e){const{vertex:r}=t;switch(e.output){case A.Color:if(e.receiveShadows)return jr(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case A.Depth:case A.Shadow:case A.ShadowHighlight:case A.ShadowExcludeHighlight:return t.include(Vi,e),jr(t),zi(t),Ui(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function Hi(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ue(t,e){es(t,e,[new ue("slicePlaneOrigin",(r,i)=>ts(e,r,i)),new ue("slicePlaneBasis1",(r,i)=>{var o;return qr(e,r,i,(o=i.slicePlane)==null?void 0:o.basis1)}),new ue("slicePlaneBasis2",(r,i)=>{var o;return qr(e,r,i,(o=i.slicePlane)==null?void 0:o.basis2)})])}function es(t,e,r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function Wi(t,e,r){return t.instancedDoublePrecision?Y(rs,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ki(t,e){return t!=null?we($t,e.origin,t):e.origin}function ji(t,e,r){return t.hasSliceTranslatedView?e!=null?er(is,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function ts(t,e,r){if(r.slicePlane==null)return hr;const i=Wi(t,e,r),o=ki(i,r.slicePlane),a=ji(t,i,r);return a!=null?Xe($t,o,a):o}function qr(t,e,r,i){if(i==null||r.slicePlane==null)return hr;const o=Wi(t,e,r),a=ki(o,r.slicePlane),n=ji(t,o,r);return n!=null?(me(lt,i,a),Xe($t,a,n),Xe(lt,lt,n),we(lt,lt,$t)):i}const rs=N(),$t=N(),lt=N(),is=Ft();function ht(t,e){if(Ui(t),e.hasModelTransformation)return t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let os=class extends J{constructor(e,r){super(e,"mat4",V.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}};function ft(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",hr):t.uniforms.add(new ue("cameraPosition",(r,i)=>Y(qi,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function mt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new ze("proj",(i,o)=>o.camera.projectionMatrix),new os("view",(i,o)=>er(Xr,o.camera.viewMatrix,i.origin)),new ue("localOrigin",i=>i.origin)]);const r=i=>Y(qi,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new ze("proj",(i,o)=>o.camera.projectionMatrix),new ze("view",(i,o)=>er(Xr,o.camera.viewMatrix,r(o))),new Q("localOrigin",(i,o)=>r(o))])}const Xr=Ft(),qi=N();function as(t){t.uniforms.add(new ze("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let Xi=class extends pr{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}};function g(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const i=e._parameterNames.length-1,o=t.count||2,a=Math.ceil(Math.log2(o)),n=e._parameterBits??[0];let c=0;for(;n[c]+a>16;)c++,c>=n.length&&n.push(0);e._parameterBits=n;const d=n[c],l=(1<<a)-1<<d;n[c]+=a,Object.defineProperty(e,r,{get(){return this[i]},set(u){if(this[i]!==u&&(this[i]=u,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~l|+u<<d&l,typeof u!="number"&&typeof u!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof u)}})}}}let ns=class extends Xi{constructor(){super(...arguments),this.instancedDoublePrecision=!1}};function Yi(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(h.MODELORIGINHI,"vec3"),t.attributes.add(h.MODELORIGINLO,"vec3"),t.attributes.add(h.MODEL,"mat3"),t.attributes.add(h.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(Di,e),r.uniforms.add(new ue("viewOriginHi",(i,o)=>La(Y(At,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),At))),r.uniforms.add(new ue("viewOriginLo",(i,o)=>$a(Y(At,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),At)))),r.code.add(s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===A.Normal&&(as(r),r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}p([g()],ns.prototype,"instancedDoublePrecision",void 0);const At=N();function ss(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(_e.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(_e.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(_e.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(_e.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let Qi=class extends J{constructor(e,r){super(e,"int",V.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}};function Zi(t,e){e.hasSymbolColors?(t.include(ss),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Qi("colorMixMode",r=>Fn[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Ji(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}let te=class extends J{constructor(e,r){super(e,"vec4",V.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}};function ls(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function cs(t){t.uniforms.add(new te("screenSizePerspectiveAlignment",e=>ds(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function ds(t){return ie(us,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const us=Vt();function Ki(t,e){const r=t.vertex;e.hasVerticalOffset?(ms(r),e.hasScreenSizePerspective&&(t.include(ls),cs(r),ft(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const hs=Vt();function ms(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),c=r.camera.pixelRatio||1;return ie(hs,a*c,n,i,o)}))}function ps(t,e){const r=e.output===A.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(h.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?i?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Ar(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function fs(t,e){switch(t.fragment.include(Ar),e.output){case A.Shadow:case A.ShadowHighlight:case A.ShadowExcludeHighlight:t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case A.Depth:t.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const vs=mr(1,1,0,1),gs=mr(1,0,1,1);function xs(t){t.fragment.uniforms.add(new Z("depthTex",(e,r)=>r.highlightDepthTexture)),t.fragment.constants.add("occludedHighlightFlag","vec4",vs).add("unoccludedHighlightFlag","vec4",gs),t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTex, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let Ts=class extends J{constructor(e,r,i){super(e,"vec4",V.Pass,(o,a,n)=>o.setUniform4fv(e,r(a,n)),i)}},_s=class extends J{constructor(e,r,i){super(e,"float",V.Pass,(o,a,n)=>o.setUniform1fv(e,r(a,n)),i)}},U=class extends ko{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};p([W()],U.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),p([W()],U.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),p([W()],U.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),p([W()],U.prototype,"DECONFLICTOR_SHOW_GRID",void 0),p([W()],U.prototype,"LABELS_SHOW_BORDER",void 0),p([W()],U.prototype,"TEXT_SHOW_BASELINE",void 0),p([W()],U.prototype,"TEXT_SHOW_BORDER",void 0),p([W()],U.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),p([W()],U.prototype,"OVERLAY_SHOW_CENTER",void 0),p([W()],U.prototype,"SHOW_POI",void 0),p([W()],U.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),p([W()],U.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),p([W()],U.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),p([W()],U.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),p([W()],U.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),p([W()],U.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),p([W()],U.prototype,"I3S_TREE_SHOW_TILES",void 0),p([W()],U.prototype,"I3S_SHOW_MODIFICATIONS",void 0),p([W()],U.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),p([W()],U.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),p([W()],U.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),p([W()],U.prototype,"LINE_WIREFRAMES",void 0),U=p([Wo("esri.views.3d.support.DebugFlags")],U);new U;var Yr,Qr;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(Yr||(Yr={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(Qr||(Qr={}));const Yt=8;function pt(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(h.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new Q("vvSizeMinSize",o=>o.vvSize.minSize)),r.uniforms.add(new Q("vvSizeMaxSize",o=>o.vvSize.maxSize)),r.uniforms.add(new Q("vvSizeOffset",o=>o.vvSize.offset)),r.uniforms.add(new Q("vvSizeFactor",o=>o.vvSize.factor)),r.uniforms.add(new Re("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new Q("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Yt),r.uniforms.add([new _s("vvColorValues",o=>o.vvColor.values,Yt),new Ts("vvColorColors",o=>o.vvColor.colors,Yt)]),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function bs(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(_r)}) { discard; } }
  `)}let ee=class extends J{constructor(e,r){super(e,"float",V.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}};function Ge(t,e){Ss(t,e,new ee("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Ss(t,e,r){const i=t.fragment;switch(e.alphaDiscardMode!==X.Mask&&e.alphaDiscardMode!==X.MaskBlend||i.uniforms.add(r),e.alphaDiscardMode){case X.Blend:return t.include(bs);case X.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case X.Mask:i.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case X.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function eo(t,e){const{vertex:r,fragment:i}=t,o=e.hasModelTransformation;o&&r.uniforms.add(new ze("model",n=>n.modelTransformation!=null?n.modelTransformation:Ot));const a=e.hasColorTexture&&e.alphaDiscardMode!==X.Opaque;switch(e.output){case A.Depth:case A.Shadow:case A.ShadowHighlight:case A.ShadowExcludeHighlight:case A.ObjectAndLayerIdColor:mt(r,e),t.include(ht,e),t.include(qe,e),t.include(pt,e),t.include(fs,e),t.include(Ue,e),t.include(ps,e),zi(t),t.varyings.add("depth","float"),a&&i.uniforms.add(new Z("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(Ge,e),i.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===A.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case A.Normal:{mt(r,e),t.include(ht,e),t.include(Bt,e),t.include(Bi,e),t.include(qe,e),t.include(pt,e),a&&i.uniforms.add(new Z("tex",c=>c.texture)),e.normalType===z.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const n=e.normalType===z.Attribute||e.normalType===z.Compressed;r.code.add(s`
          void main(void) {
            vpos = calculateVPos();

            ${n?s`
                  vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * (${o?"model *":""} vec4(vpos, 1.0))).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Ue,e),t.include(Ge,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===z.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case A.Highlight:mt(r,e),t.include(ht,e),t.include(qe,e),t.include(pt,e),a&&i.uniforms.add(new Z("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Ue,e),t.include(Ge,e),t.include(xs,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function As(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==K.None&&(t.include(Oi,e),r.uniforms.add(e.pbrTextureBindType===V.Pass?new Z("normalTexture",i=>i.textureNormal):new ut("normalTexture",i=>i.textureNormal)),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}new ce(h.POSITION,3,le.FLOAT,0,12);new ce(h.POSITION,3,le.FLOAT,0,20),new ce(h.UV0,2,le.FLOAT,12,20);new ce(h.POSITION,3,le.FLOAT,0,32),new ce(h.NORMAL,3,le.FLOAT,12,32),new ce(h.UV0,2,le.FLOAT,24,32);new ce(h.POSITION,3,le.FLOAT,0,16),new ce(h.COLOR,4,le.UNSIGNED_BYTE,12,16);new ce(h.POSITION,2,le.FLOAT,0,8);new ce(h.POSITION,2,le.FLOAT,0,16),new ce(h.UV0,2,le.FLOAT,8,16);function to(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function yr(t){t.include(Ar),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}let ys=class extends J{constructor(e,r){super(e,"vec2",V.Draw,(i,o,a,n)=>i.setUniform2fv(e,r(o,a,n)))}};const ro=lr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let io=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){ro.error("Trying to include shader module multiple times with different sets of options.");const o=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&o.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&o.add(a);o.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},Gt=class extends io{constructor(){super(...arguments),this.vertex=new Zr,this.fragment=new Zr,this.attributes=new Os,this.varyings=new Es,this.extensions=new ar,this.constants=new oo}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),c=a.code.generateSource(),d=e==="vertex"?Rs:Ms,l=this.constants.generateSource().concat(a.constants.generateSource());return`#version 300 es
${r.join(`
`)}

${d}

${l.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${c.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const c=n.bind[e];c!=null&&i.set(n.name,c)}),this.fragment.uniforms.entries.forEach(n=>{const c=n.bind[e];c!=null&&i.set(n.name,c)});const o=Array.from(i.values()),a=o.length;return(n,c,d)=>{for(let l=0;l<a;++l)o[l](r,n,c,d)}}},Cs=class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new cr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else ro.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},ws=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},Zr=class extends io{constructor(){super(...arguments),this.uniforms=new Cs,this.code=new ws,this.constants=new oo}get builder(){return this}},Os=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},Es=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&G(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,o)=>r.push(e==="vertex"?`out ${i} ${o};`:`in ${i} ${o};`)),r}},ar=class nr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?nr.ALLOWLIST_VERTEX:nr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};ar.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ar.ALLOWLIST_VERTEX=[];let oo=class k{constructor(){this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=k._numberToFloatStr(i);break;case"int":o=k._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${k._numberToFloatStr(i[0])},                            ${k._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${k._numberToFloatStr(i[0])},                            ${k._numberToFloatStr(i[1])},                            ${k._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${k._numberToFloatStr(i[0])},                            ${k._numberToFloatStr(i[1])},                            ${k._numberToFloatStr(i[2])},                            ${k._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${k._numberToIntStr(i[0])},                             ${k._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${k._numberToIntStr(i[0])},                             ${k._numberToIntStr(i[1])},                             ${k._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${k._numberToIntStr(i[0])},                             ${k._numberToIntStr(i[1])},                             ${k._numberToIntStr(i[2])},                             ${k._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>k._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const Ms=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif

out vec4 fragColor;`,Rs=`precision highp float;
precision highp sampler2D;`,Qt=4;function Ps(){const t=new Gt,e=t.fragment;t.include(to);const r=(Qt+1)/2,i=1/(2*r*r);return e.include(yr),e.uniforms.add([new Z("depthMap",o=>o.depthTexture),new ut("tex",o=>o.colorTexture),new ys("blurSize",o=>o.blurSize),new ee("projScale",(o,a)=>{const n=jo(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale}),new ye("nearFar",(o,a)=>a.camera.nearFar)]),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(Qt)}; r <= ${s.int(Qt)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),t}const Ls=Object.freeze(Object.defineProperty({__proto__:null,build:Ps},Symbol.toStringTag,{value:"Module"}));let $s=class ao extends br{initializeProgram(e){return new Sr(e.rctx,ao.shader.get().build(),zt)}initializePipeline(){return fr({colorWrite:vr})}};$s.shader=new Ut(Ls,()=>vt(()=>import("./SSAOBlur.glsl-cbd9ba24.js"),["assets/SSAOBlur.glsl-cbd9ba24.js","assets/index-33447e96.js","assets/index-d832a396.css","assets/OrderIndependentTransparency-5b5adc11.js","assets/enums-74e97557.js","assets/basicInterfaces-4ab7cc6a.js","assets/VertexAttribute-9f2e53ec.js","assets/devEnvironmentUtils-5002a058.js","assets/BufferView-a85c13b6.js","assets/vec32-f5c647b0.js","assets/DefaultMaterial_COLOR_GAMMA-80b08cd2.js","assets/Version-045d7159.js","assets/resourceUtils-1d112ccb.js","assets/Indices-ae5aa7ed.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-5a133376.js","assets/InterleavedLayout-f7e83796.js","assets/types-1305598a.js","assets/Texture-ae035b7e.js","assets/VertexArrayObject-fcc631b6.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-7d14c4a3.js","assets/VertexElementDescriptor-2925c6af.js"]));function Is(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>Ns(r))),t.fragment.uniforms.add(new ye("zScale",(e,r)=>no(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Ns(t){const e=t.camera.projectionMatrix;return e[11]===0?ie(Jr,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):ie(Jr,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Jr=Vt();function no(t){return t.camera.projectionMatrix[11]===0?Et(Kr,0,1):Et(Kr,1,0)}const Kr=hi(),ei=16;function Ds(){const t=new Gt,e=t.fragment;return t.include(to),e.include(yr),t.include(Is),e.uniforms.add(new ee("radius",(r,i)=>so(i.camera))),e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new ye("nearFar",(r,i)=>i.camera.nearFar),new Z("normalMap",r=>r.normalTexture),new Z("depthMap",r=>r.depthTexture),new ye("zScale",(r,i)=>no(i)),new ee("projScale",r=>r.projScale),new Z("rnm",r=>r.noiseTexture),new ye("rnmScale",(r,i)=>Et(ti,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new ee("intensity",r=>r.intensity),new ye("screenSize",(r,i)=>Et(ti,i.camera.fullWidth,i.camera.fullHeight))]),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(ei)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(ei)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),t}function so(t){return Math.max(10,20*t.computeRenderPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const ti=hi(),Fs=Object.freeze(Object.defineProperty({__proto__:null,build:Ds,getRadius:so},Symbol.toStringTag,{value:"Module"}));let Vs=class lo extends br{initializeProgram(e){return new Sr(e.rctx,lo.shader.get().build(),zt)}initializePipeline(){return fr({colorWrite:vr})}};Vs.shader=new Ut(Fs,()=>vt(()=>import("./SSAO.glsl-83129273.js"),["assets/SSAO.glsl-83129273.js","assets/index-33447e96.js","assets/index-d832a396.css","assets/OrderIndependentTransparency-5b5adc11.js","assets/enums-74e97557.js","assets/basicInterfaces-4ab7cc6a.js","assets/VertexAttribute-9f2e53ec.js","assets/devEnvironmentUtils-5002a058.js","assets/BufferView-a85c13b6.js","assets/vec32-f5c647b0.js","assets/DefaultMaterial_COLOR_GAMMA-80b08cd2.js","assets/Version-045d7159.js","assets/resourceUtils-1d112ccb.js","assets/Indices-ae5aa7ed.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-5a133376.js","assets/InterleavedLayout-f7e83796.js","assets/types-1305598a.js","assets/Texture-ae035b7e.js","assets/VertexArrayObject-fcc631b6.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-7d14c4a3.js","assets/VertexElementDescriptor-2925c6af.js"]));const Bs=2;function Cr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Z("ssaoTex",(i,o)=>o.ssaoHelper.colorTexture)),r.constants.add("blurSizePixelsInverse","float",1/Bs),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function zs(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new Q("lightingAmbientSH0",(o,a)=>Y(ri,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new te("lightingAmbientSH_R",(o,a)=>ie(xe,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(o,a)=>ie(xe,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(o,a)=>ie(xe,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add([new Q("lightingAmbientSH0",(o,a)=>Y(ri,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(o,a)=>ie(xe,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(o,a)=>ie(xe,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(o,a)=>ie(xe,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(o,a)=>ie(xe,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(o,a)=>ie(xe,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(o,a)=>ie(xe,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ri=N(),xe=Vt();function wr(t){t.uniforms.add(new Q("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function Ht(t){t.uniforms.add(new Q("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function ii(t){wr(t.fragment),Ht(t.fragment),t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Us(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function co(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Or(t,e){const r=t.fragment.code;t.include(co),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic&&e.pbrMode!==L.Terrain&&e.pbrMode!==L.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(t.include(Us),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Gs=class extends J{constructor(e,r){super(e,"bool",V.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}};const Hs=.4;function Er(t){t.constants.add("ambientBoostFactor","float",Hs)}function Mr(t){t.uniforms.add(new ee("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function uo(t,e){const r=t.fragment;switch(t.include(Cr,e),e.pbrMode!==L.Disabled&&t.include(Or,e),t.include(zs,e),t.include(co),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===L.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Er(r),Mr(r),wr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ht(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case L.Disabled:case L.WaterOnIntegratedMesh:case L.Water:t.include(ii),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case L.Normal:case L.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Gs("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new ee("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new ee("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)]),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===L.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case L.Terrain:case L.TerrainWithWater:t.include(ii),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Je(e.pbrMode);case L.COUNT:}}function It(t,e){e.hasMultipassTerrain&&(t.fragment.include(yr),t.fragment.uniforms.add(new Z("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new ye("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new ye("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Ws extends J{constructor(e,r,i){super(e,"mat4",V.Draw,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}let ks=class extends J{constructor(e,r,i){super(e,"mat4",V.Pass,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}};function ho(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ks("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),po(t))}function mo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Ws("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),po(t))}function po(t){const e=t.fragment;e.include(Ar),e.uniforms.add([new Z("shadowMapTex",(r,i)=>i.shadowMap.depthTexture),new Qi("numCascades",(r,i)=>i.shadowMap.numCascades),new te("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)]),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}function js(t){t.vertex.uniforms.add(new Re("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix!=null?e.colorTextureTransformMatrix:Ze())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function qs(t){t.vertex.uniforms.add(new Re("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix!=null?e.normalTextureTransformMatrix:Ze())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Xs(t){t.vertex.uniforms.add(new Re("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix!=null?e.emissiveTextureTransformMatrix:Ze())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ys(t){t.vertex.uniforms.add(new Re("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix!=null?e.occlusionTextureTransformMatrix:Ze())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Qs(t){t.vertex.uniforms.add(new Re("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix!=null?e.metallicRoughnessTextureTransformMatrix:Ze())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Zs(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Nt(t){t.include(Zs),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(_e.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(_e.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(_e.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(_e.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(_e.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Js(t){const e=new Gt,{vertex:r,fragment:i,varyings:o}=e;if(mt(r,t),e.include(Tr),o.add("vpos","vec3"),e.include(pt,t),e.include(Yi,t),e.include(Ki,t),t.hasColorTextureTransform&&e.include(js),t.output===A.Color||t.output===A.Alpha){t.hasNormalTextureTransform&&e.include(qs),t.hasEmissionTextureTransform&&e.include(Xs),t.hasOcclusionTextureTransform&&e.include(Ys),t.hasMetallicRoughnessTextureTransform&&e.include(Qs),ft(r,t),e.include(Bt,t),e.include(ht,t);const a=t.normalType===z.Attribute||t.normalType===z.Compressed;a&&t.offsetBackfaces&&e.include(Hi),e.include(As,t),e.include(Bi,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),e.include(qe,t),e.include(Gi,t),e.include(Zi,t),e.include(Ji,t),r.uniforms.add(new te("externalColor",n=>n.externalColor)),o.add("vcolorExt","vec4"),t.hasMultipassTerrain&&o.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new ze("model",n=>n.modelTransformation!=null?n.modelTransformation:Ot)),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(_r)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${a&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)}return t.output===A.Alpha&&(e.include(Ue,t),e.include(Ge,t),e.include(It,t),i.uniforms.add([new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new Z("tex",a=>a.texture)),i.include(Nt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `)),t.output===A.Color&&(e.include(Ue,t),e.include(uo,t),e.include(Cr,t),e.include(Ge,t),e.include(t.instancedDoublePrecision?ho:mo,t),e.include(It,t),ft(i,t),i.uniforms.add([r.uniforms.get("localOrigin"),new Q("ambient",a=>a.ambient),new Q("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new Z("tex",a=>a.texture)),e.include(Ei,t),e.include(Or,t),i.include(Nt),e.include(xn,t),Er(i),Mr(i),Ht(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===z.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Qe.Color?s`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)),e.include(eo,t),e}const Ks=Object.freeze(Object.defineProperty({__proto__:null,build:Js},Symbol.toStringTag,{value:"Module"}));class el extends Yn{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ce(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ee.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Ce(0,0,0),this.instancedDoublePrecision=!1,this.normalType=z.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Ce(.2,.2,.2),this.diffuse=Ce(.8,.8,.8),this.externalColor=mr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=gt.Less,this.textureAlphaMode=X.Blend,this.textureAlphaCutoff=Qn,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=or.Occlude}}let Rr=class fo extends br{initializeConfiguration(e,r){r.spherical=e.viewingMode===tr.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?K.Default:K.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,fo.shader)}_initializeProgram(e,r){return new Sr(e.rctx,r.get().build(this.configuration),zt)}_convertDepthTestFunction(e){return e===gt.Lequal?Me.LEQUAL:Me.LESS}_makePipeline(e,r){const i=this.configuration,o=e===Qe.NONE,a=e===Qe.FrontFace;return fr({blending:i.output!==A.Color&&i.output!==A.Alpha||!i.transparent?null:o?Ca:wa(e),culling:tl(i)?Oa(i.cullFace):null,depthTest:{func:Ea(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(o||a)&&i.writeDepth?Ma:null,colorWrite:vr,stencilWrite:i.hasOccludees?Zn:null,stencilTest:i.hasOccludees?r?Kn:Jn:null,polygonOffset:o||a?null:Ra(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}};function tl(t){return t.cullFace!==Ee.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Rr.shader=new Ut(Ks,()=>vt(()=>import("./DefaultMaterial.glsl-c9d52014.js"),["assets/DefaultMaterial.glsl-c9d52014.js","assets/index-33447e96.js","assets/index-d832a396.css","assets/OrderIndependentTransparency-5b5adc11.js","assets/enums-74e97557.js","assets/basicInterfaces-4ab7cc6a.js","assets/VertexAttribute-9f2e53ec.js","assets/symbolColorUtils-7d14c4a3.js","assets/VertexArrayObject-fcc631b6.js","assets/Texture-ae035b7e.js","assets/devEnvironmentUtils-5002a058.js","assets/BufferView-a85c13b6.js","assets/vec32-f5c647b0.js","assets/DefaultMaterial_COLOR_GAMMA-80b08cd2.js","assets/Version-045d7159.js","assets/resourceUtils-1d112ccb.js","assets/Indices-ae5aa7ed.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-5a133376.js","assets/InterleavedLayout-f7e83796.js","assets/types-1305598a.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/VertexElementDescriptor-2925c6af.js"]));class ke extends Xi{}p([g({constValue:!0})],ke.prototype,"hasSliceHighlight",void 0),p([g({constValue:!1})],ke.prototype,"hasSliceInVertexProgram",void 0),p([g({constValue:!1})],ke.prototype,"instancedDoublePrecision",void 0),p([g({constValue:!1})],ke.prototype,"hasModelTransformation",void 0),p([g({constValue:V.Pass})],ke.prototype,"pbrTextureBindType",void 0);class b extends ke{constructor(){super(...arguments),this.output=A.Color,this.alphaDiscardMode=X.Opaque,this.doubleSidedMode=re.None,this.pbrMode=L.Disabled,this.cullFace=Ee.None,this.transparencyPassType=Qe.NONE,this.normalType=z.Attribute,this.textureCoordinateType=K.None,this.customDepthTest=gt.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}p([g({count:A.COUNT})],b.prototype,"output",void 0),p([g({count:X.COUNT})],b.prototype,"alphaDiscardMode",void 0),p([g({count:re.COUNT})],b.prototype,"doubleSidedMode",void 0),p([g({count:L.COUNT})],b.prototype,"pbrMode",void 0),p([g({count:Ee.COUNT})],b.prototype,"cullFace",void 0),p([g({count:Qe.COUNT})],b.prototype,"transparencyPassType",void 0),p([g({count:z.COUNT})],b.prototype,"normalType",void 0),p([g({count:K.COUNT})],b.prototype,"textureCoordinateType",void 0),p([g({count:gt.COUNT})],b.prototype,"customDepthTest",void 0),p([g()],b.prototype,"spherical",void 0),p([g()],b.prototype,"hasVertexColors",void 0),p([g()],b.prototype,"hasSymbolColors",void 0),p([g()],b.prototype,"hasVerticalOffset",void 0),p([g()],b.prototype,"hasSlicePlane",void 0),p([g()],b.prototype,"hasSliceHighlight",void 0),p([g()],b.prototype,"hasColorTexture",void 0),p([g()],b.prototype,"hasMetallicRoughnessTexture",void 0),p([g()],b.prototype,"hasEmissionTexture",void 0),p([g()],b.prototype,"hasOcclusionTexture",void 0),p([g()],b.prototype,"hasNormalTexture",void 0),p([g()],b.prototype,"hasScreenSizePerspective",void 0),p([g()],b.prototype,"hasVertexTangents",void 0),p([g()],b.prototype,"hasOccludees",void 0),p([g()],b.prototype,"hasMultipassTerrain",void 0),p([g()],b.prototype,"hasModelTransformation",void 0),p([g()],b.prototype,"offsetBackfaces",void 0),p([g()],b.prototype,"vvSize",void 0),p([g()],b.prototype,"vvColor",void 0),p([g()],b.prototype,"receiveShadows",void 0),p([g()],b.prototype,"receiveAmbientOcclusion",void 0),p([g()],b.prototype,"textureAlphaPremultiplied",void 0),p([g()],b.prototype,"instanced",void 0),p([g()],b.prototype,"instancedColor",void 0),p([g()],b.prototype,"objectAndLayerIdColorInstanced",void 0),p([g()],b.prototype,"instancedDoublePrecision",void 0),p([g()],b.prototype,"doublePrecisionRequiresObfuscation",void 0),p([g()],b.prototype,"writeDepth",void 0),p([g()],b.prototype,"transparent",void 0),p([g()],b.prototype,"enableOffset",void 0),p([g()],b.prototype,"cullAboveGround",void 0),p([g()],b.prototype,"snowCover",void 0),p([g()],b.prototype,"hasColorTextureTransform",void 0),p([g()],b.prototype,"hasEmissionTextureTransform",void 0),p([g()],b.prototype,"hasNormalTextureTransform",void 0),p([g()],b.prototype,"hasOcclusionTextureTransform",void 0),p([g()],b.prototype,"hasMetallicRoughnessTextureTransform",void 0),p([g({constValue:!0})],b.prototype,"hasVvInstancing",void 0),p([g({constValue:!1})],b.prototype,"useCustomDTRExponentForWater",void 0),p([g({constValue:!1})],b.prototype,"supportsTextureAtlas",void 0),p([g({constValue:!0})],b.prototype,"useFillLights",void 0);function rl(t){const e=new Gt,{vertex:r,fragment:i,varyings:o}=e;return mt(r,t),e.include(Tr),o.add("vpos","vec3"),e.include(pt,t),e.include(Yi,t),e.include(Ki,t),t.output!==A.Color&&t.output!==A.Alpha||(ft(e.vertex,t),e.include(Bt,t),e.include(ht,t),t.offsetBackfaces&&e.include(Hi),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),t.hasMultipassTerrain&&o.add("depth","float"),e.include(qe,t),e.include(Gi,t),e.include(Zi,t),e.include(Ji,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(_r)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===A.Alpha&&(e.include(Ue,t),e.include(Ge,t),e.include(It,t),i.uniforms.add([new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new Z("tex",a=>a.texture)),i.include(Nt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),t.output===A.Color&&(e.include(Ue,t),e.include(uo,t),e.include(Cr,t),e.include(Ge,t),e.include(t.instancedDoublePrecision?ho:mo,t),e.include(It,t),ft(e.fragment,t),wr(i),Er(i),Mr(i),i.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new Q("ambient",a=>a.ambient),new Q("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new Z("tex",a=>a.texture)),e.include(Ei,t),e.include(Or,t),i.include(Nt),Ht(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Qe.Color?s`fragColor = premultiplyAlpha(fragColor);`:s``}
      }
    `)),e.include(eo,t),e}const il=Object.freeze(Object.defineProperty({__proto__:null,build:rl},Symbol.toStringTag,{value:"Module"}));class Wt extends Rr{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=z.Attribute,r.doubleSidedMode=re.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Wt.shader)}}Wt.shader=new Ut(il,()=>vt(()=>import("./RealisticTree.glsl-85969fca.js"),["assets/RealisticTree.glsl-85969fca.js","assets/index-33447e96.js","assets/index-d832a396.css","assets/OrderIndependentTransparency-5b5adc11.js","assets/enums-74e97557.js","assets/basicInterfaces-4ab7cc6a.js","assets/VertexAttribute-9f2e53ec.js","assets/symbolColorUtils-7d14c4a3.js","assets/VertexArrayObject-fcc631b6.js","assets/Texture-ae035b7e.js","assets/devEnvironmentUtils-5002a058.js","assets/BufferView-a85c13b6.js","assets/vec32-f5c647b0.js","assets/DefaultMaterial_COLOR_GAMMA-80b08cd2.js","assets/Version-045d7159.js","assets/resourceUtils-1d112ccb.js","assets/Indices-ae5aa7ed.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-5a133376.js","assets/InterleavedLayout-f7e83796.js","assets/types-1305598a.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/VertexElementDescriptor-2925c6af.js"]));let Dt=class extends Bn{constructor(e){super(e,nl),this.supportsEdges=!0,this._configuration=new b,this._vertexBufferLayout=sl(this.parameters)}isVisibleForOutput(e){return e!==A.Shadow&&e!==A.ShadowExcludeHighlight&&e!==A.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:r,hasVertexColors:i,hasSymbolColors:o,vvColor:a}=e,n=e.colorMixMode==="replace",c=e.opacity>0,d=e.externalColor&&e.externalColor[3]>0,l=r||a||o;return i&&l?n||c:i?n?d:c:l?n||c:n?d:c}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ee.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e!==A.Color&&e!==A.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=re.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?re.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?L.Schematic:L.Normal:L.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Pa,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,i,o,a,n){if(this.parameters.verticalOffset!=null){const c=i.camera;Y(Jt,r[12],r[13],r[14]);let d=null;switch(i.viewingMode){case tr.Global:d=dr(oi,Jt);break;case tr.Local:d=qo(oi,dl)}let l=0;const u=we(ul,Jt,c.eye),m=sr(u),v=pe(u,u,1/m);let f=null;this.parameters.screenSizePerspective&&(f=Xo(d,v)),l+=In(c,m,this.parameters.verticalOffset,f??0,this.parameters.screenSizePerspective),pe(d,d,l),Yo(Zt,d,i.transform.inverseRotation),o=we(ll,o,Zt),a=we(cl,a,Zt)}En(e,i,o,a,Qo(i.verticalOffset),n)}requiresSlot(e,r){return r===A.Color||r===A.Alpha||r===A.Depth||r===A.Normal||r===A.Shadow||r===A.ShadowHighlight||r===A.ShadowExcludeHighlight||r===A.Highlight||r===A.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?je.TRANSPARENT_MATERIAL:je.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:je.OPAQUE_MATERIAL)||e===je.DRAPED_MATERIAL:!1}createGLMaterial(e){return new ol(e)}createBufferWriter(){return new qn(this._vertexBufferLayout)}},ol=class extends bn{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==A.Color&&this._output!==A.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return Y(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?Wt:Rr,e)}},al=class extends el{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const nl=new al;function sl(t){const e=Ta().vec3f(h.POSITION);return t.normalType===z.Compressed?e.vec2i16(h.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(h.NORMAL),t.hasVertexTangents&&e.vec4f(h.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(h.UV0),t.hasVertexColors&&e.vec4u8(h.COLOR),t.hasSymbolColors&&e.vec4u8(h.SYMBOLCOLOR),Zo("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}const ll=N(),cl=N(),dl=Ce(0,0,1),oi=N(),Zt=N(),Jt=N(),ul=N(),Te=lr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function hl(t,e){const r=await ml(t,e),i=await xl(r.textureDefinitions??{},e);let o=0;for(const a in i)if(i.hasOwnProperty(a)){const n=i[a];o+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:i,size:o+Jo(r)}}async function ml(t,e){const r=e!=null&&e.streamDataRequester;if(r)return pl(t,r,e);const i=await mi(Ko(t,e));if(i.ok===!0)return i.value.data;pi(i.error),vo(i.error)}async function pl(t,e,r){const i=await mi(e.request(t,"json",r));if(i.ok===!0)return i.value;pi(i.error),vo(i.error.details.url)}function vo(t){throw new cr("",`Request for object resource failed: ${t}`)}function fl(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(Te.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const c=a[n];c&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(Te.warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),i=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(Te.warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),i=!1)):(Te.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),i=!1)}}else Te.warn("Indexed geometries must specify faces"),i=!1;break}default:Te.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(Te.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(Te.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function vl(t,e){var x;const r=new Array,i=new Array,o=new Array,a=new va,n=t.resource,c=vi.parse(n.version||"1.0","wosr");_l.validate(c);const d=n.model.name,l=n.model.geometries,u=n.materialDefinitions??{},m=t.textures;let v=0;const f=new Map;for(let T=0;T<l.length;T++){const S=l[T];if(!fl(S))continue;const O=Tl(S),D=S.params.vertexAttributes,E=[];for(const _ in D){const I=D[_],B=I.values;E.push([_,new We(B,I.valuesPerElement,!0)])}const M=[];if(S.params.topology!=="PerAttributeArray"){const _=S.params.faces;for(const I in _)M.push([I,_[I].values])}const $=O.texture,C=m&&m[$];if(C&&!f.has($)){const{image:_,params:I}=C,B=new wi(_,I);i.push(B),f.set($,B)}const w=f.get($),R=w?w.id:void 0,P=O.material;let y=a.get(P,$);if(y==null){const _=u[P.substring(P.lastIndexOf("/")+1)].params;_.transparency===1&&(_.transparency=0);const I=C&&C.alphaChannelUsage,B=_.transparency>0||I==="transparency"||I==="maskAndTransparency",H=C?go(C.alphaChannelUsage):void 0,j={ambient:Dr(_.diffuse),diffuse:Dr(_.diffuse),opacity:1-(_.transparency||0),transparent:B,textureAlphaMode:H,textureAlphaCutoff:.33,textureId:R,initTextureTransparent:!0,doubleSided:!0,cullFace:Ee.None,colorMixMode:_.externalColorMixMode||"tint",textureAlphaPremultiplied:!!C&&!!C.params.preMultiplyAlpha};e!=null&&e.materialParamsMixin&&Object.assign(j,e.materialParamsMixin),y=new Dt(j),a.set(P,$,y)}o.push(y);const F=new Ti(y,E,M);v+=((x=M.find(_=>_[0]===h.POSITION))==null?void 0:x[1].length)??0,r.push(F)}return{engineResources:[{name:d,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:gl(r)}}function gl(t){const e=fi();return t.forEach(r=>{const i=r.boundingInfo;i!=null&&(Mt(e,i.bbMin),Mt(e,i.bbMax))}),e}async function xl(t,e){const r=[];for(const a in t){const n=t[a],c=n.images[0].data;if(!c){Te.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+c,l="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:Lt.REPEAT,t:Lt.REPEAT},preMultiplyAlpha:go(u)!==X.Opaque},v=e!=null&&e.disableTextures?Promise.resolve(null):gi(d,e);r.push(v.then(f=>({refId:l,image:f,params:m,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function go(t){switch(t){case"mask":return X.Mask;case"maskAndTransparency":return X.MaskBlend;case"none":return X.Opaque;default:return X.Blend}}function Tl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const _l=new vi(1,2,"wosr");async function bl(t,e){var m;const r=xo(_o(t));if(r.fileType==="wosr"){const v=await(e.cache?e.cache.loadWOSR(r.url,e):hl(r.url,e)),{engineResources:f,referenceBoundingBox:x}=vl(v,e);return{lods:f,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):ca(new da(e.streamDataRequester),r.url,e,e.usePBR)),o=(m=i.model.meta)==null?void 0:m.ESRI_proxyEllipsoid,a=i.meta.isEsriSymbolResource&&o!=null&&i.meta.uri.includes("/RealisticTrees/");a&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,Cl(i,o));const n=!!e.usePBR,c=i.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[0,1,.2]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},d={...e.materialParamsMixin,treeRendering:a},{engineResources:l,referenceBoundingBox:u}=To(i,c,d,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:l,referenceBoundingBox:u,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function xo(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function To(t,e,r,i){const o=t.model,a=new Array,n=new Map,c=new Map,d=o.lods.length,l=fi();return o.lods.forEach((u,m)=>{const v=i.skipHighLods===!0&&(d>1&&m===0||d>3&&m===1)||i.skipHighLods===!1&&i.singleLodIndex!=null&&m!==i.singleLodIndex;if(v&&m!==0)return;const f=new Na(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(x=>{const T=v?new Dt({}):Sl(o,x,f,e,r,n,c),{geometry:S,vertexCount:O}=Al(x,T??new Dt({})),D=S.boundingInfo;D!=null&&m===0&&(Mt(l,D.bbMin),Mt(l,D.bbMax)),T!=null&&(f.stageResources.geometries.push(S),f.numberOfVertices+=O)}),v||a.push(f)}),{engineResources:a,referenceBoundingBox:l}}function Sl(t,e,r,i,o,a,n){const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),d=t.materials.get(e.material),l=e.attributes.texCoord0!=null,u=e.attributes.normal!=null;if(d==null)return null;const m=yl(d.alphaMode);if(!a.has(c)){if(l){const M=($,C=!1)=>{if($!=null&&!n.has($)){const w=t.textures.get($);if(w!=null){const R=w.data;n.set($,new wi(jt(R)?R.data:R,{...w.parameters,preMultiplyAlpha:!jt(R)&&C,encoding:jt(R)&&R.encoding!=null?R.encoding:void 0}))}}};M(d.textureColor,m!==X.Opaque),M(d.textureNormal),M(d.textureOcclusion),M(d.textureEmissive),M(d.textureMetallicRoughness)}const f=d.color[0]**(1/He),x=d.color[1]**(1/He),T=d.color[2]**(1/He),S=d.emissiveFactor[0]**(1/He),O=d.emissiveFactor[1]**(1/He),D=d.emissiveFactor[2]**(1/He),E=d.textureColor!=null&&l?n.get(d.textureColor):null;a.set(c,new Dt({...i,transparent:m===X.Blend,customDepthTest:gt.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[f,x,T],ambient:[f,x,T],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?Ee.None:Ee.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:u?z.Attribute:z.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:E!=null?E.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:d.textureNormal!=null&&l?n.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:E!=null&&!!E.params.preMultiplyAlpha,occlusionTextureId:d.textureOcclusion!=null&&l?n.get(d.textureOcclusion).id:void 0,emissiveTextureId:d.textureEmissive!=null&&l?n.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:d.textureMetallicRoughness!=null&&l?n.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[S,O,D],mrrFactors:[d.metallicFactor,d.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:nt(d.colorTextureTransform),normalTextureTransformMatrix:nt(d.normalTextureTransform),occlusionTextureTransformMatrix:nt(d.occlusionTextureTransform),emissiveTextureTransformMatrix:nt(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:nt(d.metallicRoughnessTextureTransform),...o}))}const v=a.get(c);if(r.stageResources.materials.push(v),l){const f=x=>{x!=null&&r.stageResources.textures.push(n.get(x))};f(d.textureColor),f(d.textureNormal),f(d.textureOcclusion),f(d.textureEmissive),f(d.textureMetallicRoughness)}return v}function Al(t,e){const r=t.attributes.position.count,i=ua(t.indices||r,t.primitiveType),o=xt(3*r),{typedBuffer:a,typedBufferStride:n}=t.attributes.position;sa(o,a,t.transform,3,n);const c=[[h.POSITION,new We(o,3,!0)]],d=[[h.POSITION,i]];if(t.attributes.normal!=null){const l=xt(3*r),{typedBuffer:u,typedBufferStride:m}=t.attributes.normal;Fr(yt,t.transform),la(l,u,yt,3,m),c.push([h.NORMAL,new We(l,3,!0)]),d.push([h.NORMAL,i])}if(t.attributes.tangent!=null){const l=xt(4*r),{typedBuffer:u,typedBufferStride:m}=t.attributes.tangent;Fr(yt,t.transform),ha(l,u,yt,4,m),c.push([h.TANGENT,new We(l,4,!0)]),d.push([h.TANGENT,i])}if(t.attributes.texCoord0!=null){const l=xt(2*r),{typedBuffer:u,typedBufferStride:m}=t.attributes.texCoord0;ma(l,u,2,m),c.push([h.UV0,new We(l,2,!0)]),d.push([h.UV0,i])}if(t.attributes.color!=null){const l=new Uint8Array(4*r);t.attributes.color.elementCount===4?t.attributes.color instanceof rr?zr(l,t.attributes.color,255):t.attributes.color instanceof Rt?pa(l,t.attributes.color):t.attributes.color instanceof oa&&zr(l,t.attributes.color,1/256):(l.fill(255),t.attributes.color instanceof Pt?Br(l,t.attributes.color,255,4):t.attributes.color instanceof aa?fa(l,t.attributes.color.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof na&&Br(l,t.attributes.color,1/256,4)),c.push([h.COLOR,new We(l,4,!0)]),d.push([h.COLOR,i])}return{geometry:new Ti(e,c,d),vertexCount:r}}const yt=ur();function yl(t){switch(t){case"BLEND":return X.Blend;case"MASK":return X.Mask;case"OPAQUE":case null:case void 0:return X.Opaque}}function Cl(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];for(const o of i.parts){const a=o.attributes.normal;if(a==null)return;const n=o.attributes.position,c=n.count,d=N(),l=N(),u=N(),m=new Uint8Array(4*c),v=new Float64Array(3*c),f=ea(Ft(),o.transform);let x=0,T=0;for(let S=0;S<c;S++){n.getVec(S,l),a.getVec(S,d),Xe(l,l,o.transform),we(u,l,e.center),Vr(u,u,e.radius);const O=u[2],D=sr(u),E=Math.min(.45+.55*D*D,1);Vr(u,u,e.radius),f!==null&&Xe(u,u,f),dr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&Kt(u,u,d,O>-1?.2:Math.min(-4*O-3.8,1)),v[x]=u[0],v[x+1]=u[1],v[x+2]=u[2],x+=3,m[T]=255*E,m[T+1]=255*E,m[T+2]=255*E,m[T+3]=255,T+=4}o.attributes.normal=new Pt(v),o.attributes.color=new Rt(m)}}}const Vc=Object.freeze(Object.defineProperty({__proto__:null,fetch:bl,gltfToEngineResources:To,parseUrl:xo},Symbol.toStringTag,{value:"Module"}));export{rl as I,Js as K,Ps as c,Ds as d,so as m,Vc as o};
