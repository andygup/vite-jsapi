import{a as Fi}from"./devEnvironmentUtils-5002a058.js";import{t as k,r as m,f as zi,R as lt,g as ct,h as Vi,M as Fe,I as Bi,H as Hr,e as bt,q as Gi}from"./typedArrayUtil-2bcf3cee.js";import{i as kr,g as Wr}from"./mat3-45e3f2eb.js";import{e as Wt}from"./mat3f64-b33e332c.js";import{G as wo,c as lr,h as Ui}from"./mat4-62d5e6a4.js";import{e as gr,o as Ao}from"./mat4f64-3d813481.js";import{B as cr,w as Hi,e as Se,s as xr,_ as Co,o as K,u as Ae,g as Ze,c as Vt,i as jr,I as ki,z as Tr,a as Wi,t as qr,O as _t,d as re,x as ji,r as qi,P as Xi,S as Ki,J as Xr}from"./mathUtils-daf59e84.js";import{n as I,a as Xe,t as Dt,f as br,e as Kr}from"./common-701a4199.js";import{a as Yi,d as Zi,q as Ji,A as Mo,c as Bt}from"./aaBoundingBox-6fbd5972.js";import{c as dr,x as Je,u as Oo,i as Qe,L as Qi,O as Yr,E as ea}from"./BufferView-dfb97f8b.js";import{t as ta,r as ra,f as Zr,e as oa}from"./vec33-b89f760e.js";import{u as Jr,n as ia,m as aa,a as na,o as qe,r as Be,b as sa,c as la,d as Qr,e as ca,t as da,i as ua,f as ha,g as ma}from"./DefaultMaterial_COLOR_GAMMA-10d4f229.js";import{t as er,e as ot}from"./mat3f32-d3d088e8.js";import{c as pa,i as fa}from"./vec2f32-461e65a9.js";import{V as eo,X as va,u as ga,U as xa}from"./request-c2b0ab45.js";import{b as $o}from"./asyncUtils-59234081.js";import{e as Ta}from"./byteSizeEstimations-90c5a50d.js";import{s as _r,a as Sr}from"./Error-bd05b442.js";import{f as to,v as ba,a as _a,C as Sa,w as Po}from"./promiseUtils-29120e0a.js";import{r as Ro}from"./Version-c777a35e.js";import{t as Lo}from"./requestImageUtils-39957a4b.js";import{a as Ft,c as tr,O as ur,b as Me,o as ya,r as wa,C as W,W as yr,_ as wr,d as rt,n as Oe,e as wt,f as Aa,A as Ca,h as Ma,l as Oa,g as $a,i as Pa,S as Ra}from"./OrderIndependentTransparency-602f26c2.js";import{F as Eo,i as La,e as x}from"./cast-daef7652.js";import{e as oe,v as Ea}from"./Util-6ed6f2ad.js";import{s as Io,R as No}from"./sphere-79d3f377.js";import{O as h}from"./VertexAttribute-9c5c630d.js";import{n as At}from"./compilerUtils-06ced1a6.js";import{n as Ia}from"./Evented-d8fc77f0.js";import{r as jt,n as qt}from"./vec4f64-018b3fa6.js";import{r as $e}from"./vec2-f978aef8.js";import{f as Gt,n as Xt}from"./vec2f64-e0301652.js";import{_ as Ct}from"./preload-helper-101896b7.js";import{a as Na}from"./assets-4cb15247.js";import{u as _e,P as Ve,L as Ue,C as le,F as Da,D as Ke,M as ro,G as oo,Y as Fa,V as za,E as pt,I as Pe,O as ae}from"./enums-64ab819c.js";import{E as Ce,n as Va,a as Ba}from"./Texture-6f3336a0.js";import{_ as Ga,a as Ua,E as Ha,x as ka,n as Wa}from"./VertexArrayObject-8a5c7580.js";import{t as ce}from"./VertexElementDescriptor-2925c6af.js";import{h as Do}from"./string-3d0ebcd3.js";import{l as hr}from"./ViewingMode-fb6259a5.js";import{T as Fo}from"./InterleavedLayout-7654f6ca.js";import{r as ja,n as qa}from"./vec3f32-4322908d.js";import{S as Xa}from"./quat-7867de93.js";import{e as Ka}from"./quatf64-7fd38d64.js";import{a as Ya}from"./parser-e6166e34.js";import{r as be}from"./symbolColorUtils-c8703525.js";import{r as Za}from"./context-util-cb6895d7.js";function dt(t){if(k(t))return null;const e=m(t.offset)?t.offset:pa,r=m(t.rotation)?t.rotation:0,o=m(t.scale)?t.scale:fa,i=er(1,0,0,0,1,0,e[0],e[1],1),a=er(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=er(o[0],0,0,0,o[1],0,0,0,1),l=ot();return kr(l,a,n),kr(l,i,l),l}let Ja=class{constructor(e,r,o,i,a){this.name=e,this.stageResources=r,this.lodThreshold=o,this.pivotOffset=i,this.numberOfVertices=a}},Qa=class zo{constructor(e,r,o,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=o,this.position=i,this.center=I(),this._children=void 0,oe(e.length>=1),oe(o.length%this._numIndexPerPrimitive==0),oe(o.length>=e.length*this._numIndexPerPrimitive),oe(i.size===3||i.size===4);const{data:a,size:n}=i,l=e.length;let d=n*o[this._numIndexPerPrimitive*e[0]];ze.clear(),ze.push(d),this.bbMin=Xe(a[d],a[d+1],a[d+2]),this.bbMax=Dt(this.bbMin);for(let u=0;u<l;++u){const p=this._numIndexPerPrimitive*e[u];for(let f=0;f<this._numIndexPerPrimitive;++f){d=n*o[p+f],ze.push(d);let b=a[d];this.bbMin[0]=Math.min(b,this.bbMin[0]),this.bbMax[0]=Math.max(b,this.bbMax[0]),b=a[d+1],this.bbMin[1]=Math.min(b,this.bbMin[1]),this.bbMax[1]=Math.max(b,this.bbMax[1]),b=a[d+2],this.bbMin[2]=Math.min(b,this.bbMin[2]),this.bbMax[2]=Math.max(b,this.bbMax[2])}}cr(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let u=0;u<ze.length;++u){d=ze.getItemAt(u);const p=a[d]-this.center[0],f=a[d+1]-this.center[1],b=a[d+2]-this.center[2],A=p*p+f*f+b*b;if(A<=c)continue;const P=Math.sqrt(A),g=.5*(P-this.radius);this.radius=this.radius+g,c=this.radius*this.radius;const S=g/P;this.center[0]+=p*S,this.center[1]+=f*S,this.center[2]+=b*S}ze.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Hi(this.bbMin,this.bbMax)>1){const e=cr(I(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,o=new Uint8Array(r),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:a,size:n}=this.position;for(let c=0;c<r;++c){let u=0;const p=this._numIndexPerPrimitive*this.primitiveIndices[c];let f=n*this.indices[p],b=a[f],A=a[f+1],P=a[f+2];for(let g=1;g<this._numIndexPerPrimitive;++g){f=n*this.indices[p+g];const S=a[f],v=a[f+1],$=a[f+2];S<b&&(b=S),v<A&&(A=v),$<P&&(P=$)}b<e[0]&&(u|=1),A<e[1]&&(u|=2),P<e[2]&&(u|=4),o[c]=u,++i[u]}let l=0;for(let c=0;c<8;++c)i[c]>0&&++l;if(l<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<r;++c){const u=o[c];d[u][i[u]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)d[c]!==void 0&&(this._children[c]=new zo(d[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){ze.prune()}};const ze=new Eo({deallocator:null});let Ar=class{constructor(){this.id=La()}unload(){}};var St;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(St||(St={}));function en(t){return t?{p0:Dt(t.p0),p1:Dt(t.p1),p2:Dt(t.p2)}:{p0:I(),p1:I(),p2:I()}}function tn(t,e,r){return Se(rr,e,t),Se(io,r,t),xr(Co(rr,rr,io))/2}new Io(Ea);new Io(()=>en());const rr=I(),io=I();function rn(t,e,r){if(!t||!e)return!1;const{size:o,data:i}=t;K(r,0,0,0),K(ye,0,0,0);let a=0,n=0;for(let l=0;l<e.length-2;l+=3){const d=e[l+0]*o,c=e[l+1]*o,u=e[l+2]*o;K(me,i[d+0],i[d+1],i[d+2]),K(Pt,i[c+0],i[c+1],i[c+2]),K(Rt,i[u+0],i[u+1],i[u+2]);const p=tn(me,Pt,Rt);p?(Ae(me,me,Pt),Ae(me,me,Rt),Ze(me,me,1/3*p),Ae(r,r,me),a+=p):(Ae(ye,ye,me),Ae(ye,ye,Pt),Ae(ye,ye,Rt),n+=3)}return(n!==0||a!==0)&&(a!==0?(Ze(r,r,1/a),!0):n!==0&&(Ze(r,ye,1/n),!0))}function on(t,e,r){if(!t||!e)return!1;const{size:o,data:i}=t;K(r,0,0,0);let a=-1,n=0;for(let l=0;l<e.length;l++){const d=e[l]*o;a!==d&&(r[0]+=i[d+0],r[1]+=i[d+1],r[2]+=i[d+2],n++),a=d}return n>1&&Ze(r,r,1/n),n>0}const me=I(),Pt=I(),Rt=I(),ye=I();let Vo=class Bo extends Ar{constructor(e,r=[],o=Ft.Triangle,i=null,a=-1){super(),this._primitiveType=o,this.objectAndLayerIdColor=i,this.edgeIndicesLength=a,this.type=St.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,l]of e)l&&this._vertexAttributes.set(n,{...l});if(r==null||r.length===0){const n=an(this._vertexAttributes),l=Jr(n);this.edgeIndicesLength=this.edgeIndicesLength<0?n:this.edgeIndicesLength;for(const d of this._vertexAttributes.keys())this._indices.set(d,l)}else for(const[n,l]of r)l&&(this._indices.set(n,ia(l)),n===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new Bo([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:r,_indices:o}=e;return this._vertexAttributes.forEach((i,a)=>r.set(a,i)),this._indices.forEach((i,a)=>o.set(a,i)),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return k(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===Ft.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),o=this.vertexAttributes.get(h.POSITION);return rn(o,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),o=this.vertexAttributes.get(h.POSITION);return on(o,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION);if(!e||e.length===0)return null;const r=this.primitiveType===Ft.Triangle?3:1;oe(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const o=Jr(e.length/r),i=this.vertexAttributes.get(h.POSITION);return i?new Qa(o,r,e,i):null}};function an(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}let Cr=class{};function s(t,...e){let r="";for(let o=0;o<e.length;o++)r+=t[o]+e[o];return r+=t[t.length-1],r}(function(t){function e(o){return Math.round(o).toString()}function r(o){return o.toPrecision(8)}t.int=e,t.float=r})(s||(s={}));function Mr(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var z;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(z||(z={}));let Y=class{constructor(e,r,o,i,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[z.Pass]:null,[z.Draw]:null},m(o)&&m(i)&&(this.bind[o]=i)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Q=class extends Y{constructor(e,r){super(e,"vec4",z.Pass,(o,i,a)=>o.setUniform4fv(e,r(i,a)))}};const Go=_r.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Uo=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==r){Go.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const a of Object.keys(o))o[a]!==e[a]&&i.add(a);for(const a of Object.keys(e))o[a]!==e[a]&&i.add(a);i.forEach(a=>console.error(`  ${a}: current ${o[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},Mt=class extends Uo{constructor(){super(...arguments),this.vertex=new ao,this.fragment=new ao,this.attributes=new ln,this.varyings=new cn,this.extensions=new mr,this.constants=new Ho}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),d=e==="vertex"?un:dn,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${c.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${l.join(`
`)}`}generateBind(e,r){const o=new Map;this.vertex.uniforms.entries.forEach(n=>{const l=n.bind[e];m(l)&&o.set(n.name,l)}),this.fragment.uniforms.entries.forEach(n=>{const l=n.bind[e];m(l)&&o.set(n.name,l)});const i=Array.from(o.values()),a=i.length;return(n,l,d)=>{for(let c=0;c<a;++c)i[c](r,n,l,d)}}},nn=class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(k(e))Go.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Sr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>m(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},sn=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},ao=class extends Uo{constructor(){super(...arguments),this.uniforms=new nn,this.code=new sn,this.constants=new Ho}get builder(){return this}},ln=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}},cn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}},mr=class pr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?pr.ALLOWLIST_VERTEX:pr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};mr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],mr.ALLOWLIST_VERTEX=[];let Ho=class H{constructor(){this._entries=new Set}add(e,r,o){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=H._numberToFloatStr(o);break;case"int":i=H._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${H._numberToFloatStr(o[0])},                            ${H._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${H._numberToFloatStr(o[0])},                            ${H._numberToFloatStr(o[1])},                            ${H._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${H._numberToFloatStr(o[0])},                            ${H._numberToFloatStr(o[1])},                            ${H._numberToFloatStr(o[2])},                            ${H._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${H._numberToIntStr(o[0])},                             ${H._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${H._numberToIntStr(o[0])},                             ${H._numberToIntStr(o[1])},                             ${H._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${H._numberToIntStr(o[0])},                             ${H._numberToIntStr(o[1])},                             ${H._numberToIntStr(o[2])},                             ${H._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(o,a=>H._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const dn=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,un=`precision highp float;
precision highp sampler2D;`,Or="Size",Kt="InvSize";function et(t,e,r=!1,o=0){if(t.hasWebGL2Context){const i=s`vec2(textureSize(${e}, ${s.int(o)}))`;return r?"(1.0 / "+i+")":i}return r?e+Kt:e+Or}function hn(t,e,r,o=null,i=0){if(t.hasWebGL2Context)return s`texelFetch(${e}, ivec2(${r}), ${s.int(i)})`;let a=s`texture2D(${e}, ${r} * `;return a+=o?s`(${o}))`:s`${e+Kt})`,a}let se=class extends Y{constructor(e,r){super(e,"vec2",z.Pass,(o,i,a)=>o.setUniform2fv(e,r(i,a)))}};var j;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(j||(j={}));let te=class extends Y{constructor(e,r){super(e,"sampler2D",z.Pass,(o,i,a)=>o.bindTexture(e,r(i,a)))}};function He(t,e,r=j.None){const o=[new te(t,e)];if(r&j.Size){const i=t+Or;o.push(new se(i,(a,n)=>{const l=e(a,n);return m(l)?$e(no,l.descriptor.width,l.descriptor.height):Gt}))}if(r&j.InvSize){const i=t+Kt;o.push(new se(i,(a,n)=>{const l=e(a,n);return m(l)?$e(no,1/l.descriptor.width,1/l.descriptor.height):Gt}))}return o}const no=Xt();let ko=class extends Cr{constructor(){super(...arguments),this.color=jt(1,1,1,1)}};function mn(){const t=new Mt;return t.include(Mr),t.fragment.uniforms.add([new te("tex",e=>e.texture),new Q("uColor",e=>e.color)]),t.fragment.code.add(s`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:ko,build:mn},Symbol.toStringTag,{value:"Module"}));function pn(){if(k(or)){const t=e=>Na(`esri/libs/basisu/${e}`);or=Ct(()=>import("./basis_transcoder-ada6623d.js"),["assets/basis_transcoder-ada6623d.js","assets/_commonjsHelpers-a430e9ea.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return or}let or;var Ge;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ge||(Ge={}));let de=null,Lt=null;async function Wo(){return k(Lt)&&(Lt=pn(),de=await Lt),Lt}function fn(t,e){if(k(de))return t.byteLength;const r=new de.BasisFile(new Uint8Array(t)),o=qo(r)?jo(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),o}function vn(t,e){if(k(de))return t.byteLength;const r=new de.KTX2File(new Uint8Array(t)),o=Xo(r)?jo(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),o}function jo(t,e,r,o,i){const a=Ga(e?_e.COMPRESSED_RGBA8_ETC2_EAC:_e.COMPRESSED_RGB8_ETC2),n=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*o*a*n)}function qo(t){return t.getNumImages()>=1&&!t.isUASTC()}function Xo(t){return t.getFaces()>=1&&t.isETC1S()}async function gn(t,e,r){k(de)&&(de=await Wo());const o=new de.BasisFile(new Uint8Array(r));if(!qo(o))return null;o.startTranscoding();const i=Ko(t,e,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(a,n)=>o.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>o.transcodeImage(l,0,a,n,0,0));return o.close(),o.delete(),i}async function xn(t,e,r){k(de)&&(de=await Wo());const o=new de.KTX2File(new Uint8Array(r));if(!Xo(o))return null;o.startTranscoding();const i=Ko(t,e,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(a,n)=>o.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>o.transcodeImage(l,a,0,0,n,0,-1,-1));return o.close(),o.delete(),i}function Ko(t,e,r,o,i,a,n,l){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,p]=d?o?[Ge.ETC2_RGBA,_e.COMPRESSED_RGBA8_ETC2_EAC]:[Ge.ETC1_RGB,_e.COMPRESSED_RGB8_ETC2]:c?o?[Ge.BC3_RGBA,_e.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ge.BC1_RGB,_e.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ge.RGBA32,Ve.RGBA],f=e.hasMipmap?r:Math.min(1,r),b=[];for(let S=0;S<f;S++)b.push(new Uint8Array(n(S,u))),l(S,u,b[S]);const A=b.length>1,P=A?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,g={...e,samplingMode:P,hasMipmap:A,internalFormat:p,width:i,height:a};return new Ce(t,g,{type:"compressed",levels:b})}const ut=_r.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Tn=542327876,bn=131072,_n=4;function $r(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Sn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const yn=$r("DXT1"),wn=$r("DXT3"),An=$r("DXT5"),Cn=31,Mn=0,On=1,$n=2,Pn=3,Rn=4,Ln=7,En=20,In=21;function Nn(t,e,r){const{textureData:o,internalFormat:i,width:a,height:n}=zi(Dn(r,e.hasMipmap??!1));return e.samplingMode=o.levels.length>1?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,e.hasMipmap=o.levels.length>1,e.internalFormat=i,e.width=a,e.height=n,new Ce(t,e,o)}function Dn(t,e){const r=new Int32Array(t,0,Cn);if(r[Mn]!==Tn)return ut.error("Invalid magic number in DDS header"),null;if(!(r[En]&_n))return ut.error("Unsupported format, must contain a FourCC code"),null;const o=r[In];let i,a;switch(o){case yn:i=8,a=_e.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case wn:i=16,a=_e.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case An:i=16,a=_e.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ut.error("Unsupported FourCC code:",Sn(o)),null}let n=1,l=r[Rn],d=r[Pn];!(3&l)&&!(3&d)||(ut.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const c=l,u=d;let p,f;r[$n]&bn&&e!==!1&&(n=Math.max(1,r[Ln])),n===1||Vt(l)&&Vt(d)||(ut.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let b=r[On]+4;const A=[];for(let P=0;P<n;++P)f=(l+3>>2)*(d+3>>2)*i,p=new Uint8Array(t,b,f),A.push(p),b+=f,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:A},internalFormat:a,width:c,height:u}}const Ot=new Map([[h.POSITION,0],[h.NORMAL,1],[h.UV0,2],[h.COLOR,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[h.MODEL,8],[h.MODELNORMAL,12],[h.MODELORIGINHI,11],[h.MODELORIGINLO,15]]);new ce(h.POSITION,3,le.FLOAT,0,12);new ce(h.POSITION,3,le.FLOAT,0,20),new ce(h.UV0,2,le.FLOAT,12,20);new ce(h.POSITION,3,le.FLOAT,0,32),new ce(h.NORMAL,3,le.FLOAT,12,32),new ce(h.UV0,2,le.FLOAT,24,32);new ce(h.POSITION,3,le.FLOAT,0,16),new ce(h.COLOR,4,le.UNSIGNED_BYTE,12,16);const Fn=[new ce(h.POSITION,2,le.FLOAT,0,8)],zn=[new ce(h.POSITION,2,le.FLOAT,0,16),new ce(h.UV0,2,le.FLOAT,8,16)];let Vn=class extends Ua{};function Bn(t,e=Fn,r=Ot,o=-1,i=1){let a=null;return e===zn?a=new Float32Array([o,o,0,0,i,o,1,0,o,i,0,1,i,i,1,1]):a=new Float32Array([o,o,i,o,o,i,i,i]),new Vn(t,r,{geometry:e},{geometry:Ha.createVertex(t,Da.STATIC_DRAW,a)})}let ft=class xe extends Ar{constructor(e,r){super(),this._data=e,this.type=St.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ia,this._passParameters=new ko,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ke.REPEAT,t:Ke.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||tr.STRETCH,this.estimatedTexMemRequired=xe._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;k(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(eo(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const o=()=>{e.removeEventListener("canplay",o),e.play()};e.addEventListener("canplay",o)}}}_startPreloadImageElement(e){va(e.src)||eo(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(k(e))return 0;if(lt(e)||ct(e))return r.encoding===xe.KTX2_ENCODING?vn(e,r.mipmap):r.encoding===xe.BASIS_ENCODING?fn(e,r.mipmap):e.byteLength;const{width:o,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?xe._getDataDimensions(e):r;return(r.mipmap?4/3:1)*o*i*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:ro.TEXTURE_2D,pixelFormat:Ve.RGBA,dataType:oo.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,r){if(m(this._glTexture))return this._glTexture;if(m(this._loadingPromise))return this._loadingPromise;const o=this._data;return k(o)?(this._glTexture=new Ce(e,this._createDescriptor(e),null),this._glTexture):typeof o=="string"?this._loadFromURL(e,r,o):o instanceof Image?this._loadFromImageElement(e,r,o):o instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,o):o instanceof ImageData||o instanceof HTMLCanvasElement?this._loadFromImage(e,o,r):(lt(o)||ct(o))&&this.params.encoding===xe.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,o)):(lt(o)||ct(o))&&this.params.encoding===xe.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,o)):(lt(o)||ct(o))&&this.params.encoding===xe.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,o)):ct(o)?this._loadFromPixelData(e,o):lt(o)?this._loadFromPixelData(e,new Uint8Array(o)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,o){if(!(this._data instanceof HTMLVideoElement)||k(this._glTexture)||this._data.readyState<vt.HAVE_CURRENT_DATA||o===this._data.currentTime)return o;if(m(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,r,i,a,n,this._glTexture)}else{const{videoWidth:i,videoHeight:a}=this._data,{width:n,height:l}=this._glTexture.descriptor;i!==n||a!==l?this._glTexture.updateData(0,0,0,Math.min(i,n),Math.min(a,l),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Nn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>xn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(e,r){return this._loadAsync(()=>gn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(e,r){oe(this.params.width>0&&this.params.height>0);const o=this._createDescriptor(e);return o.pixelFormat=this.params.components===1?Ve.LUMINANCE:this.params.components===3?Ve.RGB:Ve.RGBA,o.width=this.params.width,o.height=this.params.height,this._glTexture=new Ce(e,o,r),this._glTexture}_loadFromURL(e,r,o){return this._loadAsync(async i=>{const a=await Lo(o,{signal:i});return to(i),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,o){return o.complete?this._loadFromImage(e,o,r):this._loadAsync(async i=>{const a=await ga(o,o.src,!1,i);return to(i),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,o){return o.readyState>=vt.HAVE_CURRENT_DATA?this._loadFromImage(e,o,r):this._loadFromVideoElementAsync(e,r,o)}_loadFromVideoElementAsync(e,r,o){return this._loadAsync(i=>new Promise((a,n)=>{const l=()=>{o.removeEventListener("loadeddata",d),o.removeEventListener("error",c),Vi(u)},d=()=>{o.readyState>=vt.HAVE_CURRENT_DATA&&(l(),a(this._loadFromImage(e,o,r)))},c=p=>{l(),n(p||new Sr("Failed to load video"))};o.addEventListener("loadeddata",d),o.addEventListener("error",c);const u=ba(i,()=>c(_a()))}))}_loadFromImage(e,r,o){const i=xe._getDataDimensions(r);this.params.width=i.width,this.params.height=i.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?Ve.RGB:Ve.RGBA,!this._requiresPowerOfTwo(e,a)||Vt(i.width)&&Vt(i.height)?(a.width=i.width,a.height=i.height,this._glTexture=new Ce(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,i,a,o),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const o=e(r.signal);this._loadingPromise=o;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}_requiresPowerOfTwo(e,r){const o=Ke.CLAMP_TO_EDGE,i=typeof r.wrapMode=="number"?r.wrapMode===o:r.wrapMode.s===o&&r.wrapMode.t===o;return!Va(e.gl)&&(r.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,o,i,a){const{width:n,height:l}=o,d=jr(n),c=jr(l);let u;switch(i.width=d,i.height=c,this.params.powerOfTwoResizeMode){case tr.PAD:i.textureCoordinateScaleFactor=[n/d,l/c],u=new Ce(e,i),u.updateData(0,0,0,n,l,r);break;case tr.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,i,a());break;default:At(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,o,i){const a=new Ce(e,o),n=new ka(e,{colorTarget:Fa.TEXTURE,depthStencilTarget:za.NONE},a),l=new Ce(e,{target:ro.TEXTURE_2D,pixelFormat:o.pixelFormat,dataType:oo.UNSIGNED_BYTE,wrapMode:Ke.CLAMP_TO_EDGE,samplingMode:Ue.LINEAR,flipped:!!o.flipped,maxAnisotropy:8,preMultiplyAlpha:o.preMultiplyAlpha},r),d=Bn(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,n,d,l,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:l,framebuffer:n}:(d.dispose(!0),l.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,r,o,i,a,n){this._passParameters.texture=a,e.bindFramebuffer(o);const l=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(i),e.drawArrays(pt.TRIANGLE_STRIP,0,Wa(i,"geometry")),e.bindFramebuffer(null),e.setViewport(l.x,l.y,l.width,l.height),this._passParameters.texture=null}unload(){if(m(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:o}=this._powerOfTwoStretchInfo;r.dispose(!0),o.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(m(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),m(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var vt;ft.DDS_ENCODING="image/vnd-ms.dds",ft.KTX2_ENCODING="image/ktx2",ft.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(vt||(vt={}));var C;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExludeHighlight=5]="ShadowExludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(C||(C={}));function Gn(t){const e=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function Yt(t,e){e.normalType===X.Attribute&&(t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`)),e.normalType===X.CompressedAttribute&&(t.include(Gn),t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===X.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var X;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(X||(X={}));function Un(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case ee.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ee.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ee.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:At(e.doubleSidedMode);case ee.COUNT:}}var ee;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(ee||(ee={}));var Z;function tt(t,e){switch(e.textureCoordinateType){case Z.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Z.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Z.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:At(e.textureCoordinateType);case Z.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case Z.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(Z||(Z={}));function Hn(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Yo(t,e){switch(t.include(tt,e),t.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case Z.Default:case Z.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case Z.Atlas:return t.include(Hn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:At(e.textureCoordinateType);case Z.None:case Z.COUNT:return}}let ue=class extends Y{constructor(e,r){super(e,"vec3",z.Draw,(o,i,a,n)=>o.setUniform3fv(e,r(i,a,n)))}},q=class extends Y{constructor(e,r){super(e,"vec3",z.Pass,(o,i,a)=>o.setUniform3fv(e,r(i,a)))}},fr=class extends Y{constructor(e,r){super(e,"vec2",z.Draw,(o,i,a,n)=>o.setUniform2fv(e,r(i,a,n)))}},Zo=class extends Y{constructor(e,r){super(e,"sampler2D",z.Draw,(o,i,a)=>o.bindTexture(e,r(i,a)))}};function zt(t,e,r=j.None){const o=[new Zo(t,e)];if(r&j.Size){const i=t+Or;o.push(new fr(i,(a,n)=>{const l=e(a,n);return m(l)?$e(so,l.descriptor.width,l.descriptor.height):Gt}))}if(r&j.InvSize){const i=t+Kt;o.push(new fr(i,(a,n)=>{const l=e(a,n);return m(l)?$e(so,1/l.descriptor.width,1/l.descriptor.height):Gt}))}return o}const so=Xt();let kn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r,o=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(o,r),this._technique),this._technique}ensureResources(e){return ur.LOADED}},Wn=class extends kn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Fe(this._texture),this._textureNormal=Fe(this._textureNormal),this._textureEmissive=Fe(this._textureEmissive),this._textureOcclusion=Fe(this._textureOcclusion),this._textureMetallicRoughness=Fe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?ur.LOADED:ur.LOADING}get textureBindParameters(){return new jn(m(this._texture)?this._texture.glTexture:null,m(this._textureNormal)?this._textureNormal.glTexture:null,m(this._textureEmissive)?this._textureEmissive.glTexture:null,m(this._textureOcclusion)?this._textureOcclusion.glTexture:null,m(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(k(this._texture)||e!==this._texture.id)&&(this._texture=Fe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(k(e))return void r(null);const o=this._textureRepository.acquire(e);if(Sa(o))return++this._numLoading,void o.then(i=>{if(this._disposed)return Fe(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(o)}},jn=class extends Cr{constructor(e=null,r=null,o=null,i=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=a}};ja(0,.6,.2);var D;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(D||(D={}));function Jo(t,e){const r=t.fragment,o=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===D.Normal&&o&&t.include(Yo,e),e.pbrMode!==D.Schematic)if(e.pbrMode!==D.Disabled){if(e.pbrMode===D.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.supportsTextureAtlas?e.hasWebGL2Context?j.None:j.Size:j.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===z.Pass?He("texMetallicRoughness",n=>n.textureMetallicRoughness,i):zt("texMetallicRoughness",n=>n.textureMetallicRoughness,i)),r.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===z.Pass?He("texEmission",n=>n.textureEmissive,i):zt("texEmission",n=>n.textureEmissive,i)),r.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===z.Pass?He("texOcclusion",n=>n.textureOcclusion,i):zt("texOcclusion",n=>n.textureOcclusion,i)),r.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===z.Pass?[new q("emissionFactor",n=>n.emissiveFactor),new q("mrrFactors",n=>n.mrrFactors)]:[new ue("emissionFactor",n=>n.emissiveFactor),new ue("mrrFactors",n=>n.mrrFactors)]),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?s`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?s`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?s`
                vtc.size = ${et(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:s`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?s`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${et(e,"texEmission")};
                applyEmission(vtc);`:s`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?s`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${et(e,"texOcclusion")};
                applyOcclusion(vtc);`:s`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function qn(t){return Math.abs(t*t*t)}function Xn(t,e,r){const o=r.parameters,i=r.paddingPixelsOverride;return ht.scale=Math.min(o.divisor/(e-o.offset),1),ht.factor=qn(t),ht.minPixelSize=o.minPixelSize,ht.paddingPixels=i,ht}function Kn(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Yn(t,e){return Math.max(ki(t*e.scale,t,e.factor),Kn(t,e))}function Zn(t,e,r,o){return Yn(t,Xn(e,r,o))}const ht={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Jn(t){return!!m(t)&&!t.visible}const Et=Yi();function Qn(t,e,r,o,i,a,n){if(!Jn(e))if(t.boundingInfo){oe(t.primitiveType===Ft.Triangle);const l=r.tolerance;Qo(t.boundingInfo,o,i,l,a,n)}else{const l=t.indices.get(h.POSITION),d=t.vertexAttributes.get(h.POSITION);ti(o,i,0,l.length/3,l,d,void 0,a,n)}}const es=I();function Qo(t,e,r,o,i,a){if(k(t))return;const n=rs(e,r,es);if(Zi(Et,t.getBBMin()),Ji(Et,t.getBBMax()),m(i)&&i.applyToAabb(Et),os(Et,e,n,o)){const{primitiveIndices:l,indices:d,position:c}=t,u=l?l.length:d.length/3;if(u>cs){const p=t.getChildren();if(p!==void 0){for(let f=0;f<8;++f)p[f]!==void 0&&Qo(p[f],e,r,o,i,a);return}}ti(e,r,0,u,d,c,l,i,a)}}const ei=I();function ti(t,e,r,o,i,a,n,l,d){if(n)return ts(t,e,r,o,i,a,n,l,d);const c=a.data,u=a.stride||a.size,p=t[0],f=t[1],b=t[2],A=e[0]-p,P=e[1]-f,g=e[2]-b;for(let S=r,v=3*r;S<o;++S){let $=u*i[v++],L=c[$++],V=c[$++],M=c[$];$=u*i[v++];let O=c[$++],N=c[$++],y=c[$];$=u*i[v++];let _=c[$++],E=c[$++],R=c[$];m(l)&&([L,V,M]=l.applyToVertex(L,V,M,S),[O,N,y]=l.applyToVertex(O,N,y,S),[_,E,R]=l.applyToVertex(_,E,R,S));const F=O-L,B=N-V,G=y-M,U=_-L,pe=E-V,fe=R-M,Le=P*fe-pe*g,it=g*U-fe*A,at=A*pe-U*P,ne=F*Le+B*it+G*at;if(Math.abs(ne)<=Number.EPSILON)continue;const ie=p-L,Ee=f-V,Ie=b-M,he=ie*Le+Ee*it+Ie*at;if(ne>0){if(he<0||he>ne)continue}else if(he>0||he<ne)continue;const ve=Ee*G-B*Ie,nt=Ie*F-G*ie,st=ie*B-F*Ee,Ne=A*ve+P*nt+g*st;if(ne>0){if(Ne<0||he+Ne>ne)continue}else if(Ne>0||he+Ne<ne)continue;const De=(U*ve+pe*nt+fe*st)/ne;De>=0&&d(De,ri(F,B,G,U,pe,fe,ei),S,!1)}}function ts(t,e,r,o,i,a,n,l,d){const c=a.data,u=a.stride||a.size,p=t[0],f=t[1],b=t[2],A=e[0]-p,P=e[1]-f,g=e[2]-b;for(let S=r;S<o;++S){const v=n[S];let $=3*v,L=u*i[$++],V=c[L++],M=c[L++],O=c[L];L=u*i[$++];let N=c[L++],y=c[L++],_=c[L];L=u*i[$];let E=c[L++],R=c[L++],F=c[L];m(l)&&([V,M,O]=l.applyToVertex(V,M,O,S),[N,y,_]=l.applyToVertex(N,y,_,S),[E,R,F]=l.applyToVertex(E,R,F,S));const B=N-V,G=y-M,U=_-O,pe=E-V,fe=R-M,Le=F-O,it=P*Le-fe*g,at=g*pe-Le*A,ne=A*fe-pe*P,ie=B*it+G*at+U*ne;if(Math.abs(ie)<=Number.EPSILON)continue;const Ee=p-V,Ie=f-M,he=b-O,ve=Ee*it+Ie*at+he*ne;if(ie>0){if(ve<0||ve>ie)continue}else if(ve>0||ve<ie)continue;const nt=Ie*U-G*he,st=he*B-U*Ee,Ne=Ee*G-B*Ie,De=A*nt+P*st+g*Ne;if(ie>0){if(De<0||ve+De>ie)continue}else if(De>0||ve+De<ie)continue;const Ur=(pe*nt+fe*st+Le*Ne)/ie;Ur>=0&&d(Ur,ri(B,G,U,pe,fe,Le,ei),v,!1)}}const lo=I(),co=I();function ri(t,e,r,o,i,a,n){return K(lo,t,e,r),K(co,o,i,a),Co(n,lo,co),Tr(n,n),n}function rs(t,e,r){return K(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function os(t,e,r,o){return is(t,e,r,o,1/0)}function is(t,e,r,o,i){const a=(t[0]-o-e[0])*r[0],n=(t[3]+o-e[0])*r[0];let l=Math.min(a,n),d=Math.max(a,n);const c=(t[1]-o-e[1])*r[1],u=(t[4]+o-e[1])*r[1];if(d=Math.min(d,Math.max(c,u)),d<0||(l=Math.max(l,Math.min(c,u)),l>d))return!1;const p=(t[2]-o-e[2])*r[2],f=(t[5]+o-e[2])*r[2];return d=Math.min(d,Math.max(p,f)),!(d<0)&&(l=Math.max(l,Math.min(p,f)),!(l>d)&&l<i)}function as(t,e,r,o,i){let a=(r.screenLength||0)*t.pixelRatio;m(i)&&(a=Zn(a,o,e,i));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Wi(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function oi(t,e){const r=e?oi(e):{};for(const o in t){let i=t[o];i&&i.forEach&&(i=ss(i)),i==null&&o in r||(r[o]=i)}return r}function ns(t,e){let r=!1;for(const o in e){const i=e[o];i!==void 0&&(Array.isArray(i)?t[o]===null?(t[o]=i.slice(),r=!0):Bi(t[o],i)&&(r=!0):t[o]!==i&&(r=!0,t[o]=i))}return r}function ss(t){const e=[];return t.forEach(r=>e.push(r)),e}const ls={multiply:1,ignore:2,replace:3,tint:4},cs=1e3;let ds=class extends Ar{constructor(e,r){super(),this.type=St.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Ot,this._parameters=oi(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ns(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){m(this.repository)&&this.repository.materialChanged(this)}};var vr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(vr||(vr={}));var Ye;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Ye||(Ye={}));let us=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=I(),this._mbs=No(),this._obb={center:I(),halfSize:qa(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,o){const i=e,a=r,n=o+this.componentLocalOriginLength,l=this._totalOffset/Math.sqrt(i*i+a*a+n*n);return this._tmpVertex[0]=e+i*l,this._tmpVertex[1]=r+a*l,this._tmpVertex[2]=o+n*l,this._tmpVertex}applyToAabb(e){const r=e[0],o=e[1],i=e[2]+this.componentLocalOriginLength,a=e[3],n=e[4],l=e[5]+this.componentLocalOriginLength,d=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=o*n<0?0:Math.min(Math.abs(o),Math.abs(n)),u=i*l<0?0:Math.min(Math.abs(i),Math.abs(l)),p=Math.sqrt(d*d+c*c+u*u);if(p<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=o<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=l>0?this._totalOffset:0,e;const f=Math.max(Math.abs(r),Math.abs(a)),b=Math.max(Math.abs(o),Math.abs(n)),A=Math.max(Math.abs(i),Math.abs(l)),P=Math.sqrt(f*f+b*b+A*A),g=this._totalOffset/P,S=this._totalOffset/p;return e[0]+=r*(r>0?g:S),e[1]+=o*(o>0?g:S),e[2]+=i*(i>0?g:S),e[3]+=a*(a<0?g:S),e[4]+=n*(n<0?g:S),e[5]+=l*(l<0?g:S),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),o=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*o,this._mbs[1]=e[1]+e[1]*o,this._mbs[2]=e[2]+e[2]*o,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,o=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*o,this._obb.center[1]=r[1]+r[1]*o,this._obb.center[2]=r[2]+r[2]*o,qr(this._obb.halfSize,e.halfSize,e.quaternion),Ae(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,Se(this._obb.halfSize,this._obb.halfSize,e.center),Xa(ho,e.quaternion),qr(this._obb.halfSize,this._obb.halfSize,ho),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},hs=class{constructor(e=0){this.offset=e,this.sphere=No(),this.tmpVertex=I()}applyToVertex(e,r,o){const i=this.objectTransform.transform;let a=i[0]*e+i[4]*r+i[8]*o+i[12],n=i[1]*e+i[5]*r+i[9]*o+i[13],l=i[2]*e+i[6]*r+i[10]*o+i[14];const d=this.offset/Math.sqrt(a*a+n*n+l*l);a+=a*d,n+=n*d,l+=l*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*n+c[8]*l+c[12],this.tmpVertex[1]=c[1]*a+c[5]*n+c[9]*l+c[13],this.tmpVertex[2]=c[2]*a+c[6]*n+c[10]*l+c[14],this.tmpVertex}applyToMinMax(e,r){const o=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*o,e[1]+=e[1]*o,e[2]+=e[2]*o;const i=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*i,r[1]+=r[1]*i,r[2]+=r[2]*i}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),o=this.offset/r;return this.sphere[0]=e[0]+e[0]*o,this.sphere[1]=e[1]+e[1]*o,this.sphere[2]=e[2]+e[2]*o,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const uo=new hs;function ms(t){return m(t)?(uo.offset=t,uo):null}new us;const ho=Ka();function ps(t,e,r,o){const i=r.typedBuffer,a=r.typedBufferStride,n=t.length;o*=a;for(let l=0;l<n;++l){const d=2*t[l];i[o]=e[d],i[o+1]=e[d+1],o+=a}}function ii(t,e,r,o,i){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(o*=n,i==null||i===1)for(let d=0;d<l;++d){const c=3*t[d];a[o]=e[c],a[o+1]=e[c+1],a[o+2]=e[c+2],o+=n}else for(let d=0;d<l;++d){const c=3*t[d];for(let u=0;u<i;++u)a[o]=e[c],a[o+1]=e[c+1],a[o+2]=e[c+2],o+=n}}function fs(t,e,r,o,i=1){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(o*=n,i===1)for(let d=0;d<l;++d){const c=4*t[d];a[o]=e[c],a[o+1]=e[c+1],a[o+2]=e[c+2],a[o+3]=e[c+3],o+=n}else for(let d=0;d<l;++d){const c=4*t[d];for(let u=0;u<i;++u)a[o]=e[c],a[o+1]=e[c+1],a[o+2]=e[c+2],a[o+3]=e[c+3],o+=n}}function vs(t,e,r,o,i,a=1){if(!r)return void ii(t,e,o,i,a);const n=o.typedBuffer,l=o.typedBufferStride,d=t.length,c=r[0],u=r[1],p=r[2],f=r[4],b=r[5],A=r[6],P=r[8],g=r[9],S=r[10],v=r[12],$=r[13],L=r[14];i*=l;let V=0,M=0,O=0;const N=ai(r)?y=>{V=e[y]+v,M=e[y+1]+$,O=e[y+2]+L}:y=>{const _=e[y],E=e[y+1],R=e[y+2];V=c*_+f*E+P*R+v,M=u*_+b*E+g*R+$,O=p*_+A*E+S*R+L};if(a===1)for(let y=0;y<d;++y)N(3*t[y]),n[i]=V,n[i+1]=M,n[i+2]=O,i+=l;else for(let y=0;y<d;++y){N(3*t[y]);for(let _=0;_<a;++_)n[i]=V,n[i+1]=M,n[i+2]=O,i+=l}}function gs(t,e,r,o,i,a=1){if(!r)return void ii(t,e,o,i,a);const n=r,l=o.typedBuffer,d=o.typedBufferStride,c=t.length,u=n[0],p=n[1],f=n[2],b=n[4],A=n[5],P=n[6],g=n[8],S=n[9],v=n[10],$=!wo(n),L=1e-6,V=1-L;i*=d;let M=0,O=0,N=0;const y=ai(n)?_=>{M=e[_],O=e[_+1],N=e[_+2]}:_=>{const E=e[_],R=e[_+1],F=e[_+2];M=u*E+b*R+g*F,O=p*E+A*R+S*F,N=f*E+P*R+v*F};if(a===1)if($)for(let _=0;_<c;++_){y(3*t[_]);const E=M*M+O*O+N*N;if(E<V&&E>L){const R=1/Math.sqrt(E);l[i]=M*R,l[i+1]=O*R,l[i+2]=N*R}else l[i]=M,l[i+1]=O,l[i+2]=N;i+=d}else for(let _=0;_<c;++_)y(3*t[_]),l[i]=M,l[i+1]=O,l[i+2]=N,i+=d;else for(let _=0;_<c;++_){if(y(3*t[_]),$){const E=M*M+O*O+N*N;if(E<V&&E>L){const R=1/Math.sqrt(E);M*=R,O*=R,N*=R}}for(let E=0;E<a;++E)l[i]=M,l[i+1]=O,l[i+2]=N,i+=d}}function xs(t,e,r,o,i,a=1){if(!r)return void fs(t,e,o,i,a);const n=r,l=o.typedBuffer,d=o.typedBufferStride,c=t.length,u=n[0],p=n[1],f=n[2],b=n[4],A=n[5],P=n[6],g=n[8],S=n[9],v=n[10],$=!wo(n),L=1e-6,V=1-L;if(i*=d,a===1)for(let M=0;M<c;++M){const O=4*t[M],N=e[O],y=e[O+1],_=e[O+2],E=e[O+3];let R=u*N+b*y+g*_,F=p*N+A*y+S*_,B=f*N+P*y+v*_;if($){const G=R*R+F*F+B*B;if(G<V&&G>L){const U=1/Math.sqrt(G);R*=U,F*=U,B*=U}}l[i]=R,l[i+1]=F,l[i+2]=B,l[i+3]=E,i+=d}else for(let M=0;M<c;++M){const O=4*t[M],N=e[O],y=e[O+1],_=e[O+2],E=e[O+3];let R=u*N+b*y+g*_,F=p*N+A*y+S*_,B=f*N+P*y+v*_;if($){const G=R*R+F*F+B*B;if(G<V&&G>L){const U=1/Math.sqrt(G);R*=U,F*=U,B*=U}}for(let G=0;G<a;++G)l[i]=R,l[i+1]=F,l[i+2]=B,l[i+3]=E,i+=d}}function mo(t,e,r,o,i,a=1){const n=o.typedBuffer,l=o.typedBufferStride,d=t.length;if(i*=l,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let c=0;c<d;++c){const u=3*t[c];for(let p=0;p<a;++p)n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=255,i+=l}else for(let c=0;c<d;++c){const u=4*t[c];for(let p=0;p<a;++p)n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=e[u+3],i+=l}else{if(r===4){for(let c=0;c<d;++c){const u=4*t[c];n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=e[u+3],i+=l}return}for(let c=0;c<d;++c){const u=3*t[c];n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=255,i+=l}}else{n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3];const c=new Uint32Array(o.typedBuffer.buffer,o.start),u=l/4,p=c[i/=4];i+=u;const f=d*a;for(let b=1;b<f;++b)c[i]=p,i+=u}}function Ts(t,e,r,o,i=1){const a=e.typedBuffer,n=e.typedBufferStride;if(o*=n,i===1)for(let l=0;l<r;++l)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n;else for(let l=0;l<r;++l)for(let d=0;d<i;++d)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n}function bs(t,e,r,o,i,a){for(const n of e.fieldNames){const l=t.vertexAttributes.get(n),d=t.indices.get(n);if(l&&d)switch(n){case h.POSITION:{oe(l.size===3);const c=i.getField(n,Qe);c&&vs(d,l.data,r,c,a);break}case h.NORMAL:{oe(l.size===3);const c=i.getField(n,Qe);c&&gs(d,l.data,o,c,a);break}case h.UV0:{oe(l.size===2);const c=i.getField(n,Oo);c&&ps(d,l.data,c,a);break}case h.COLOR:{oe(l.size===3||l.size===4);const c=i.getField(n,Je);c&&mo(d,l.data,l.size,c,a);break}case h.SYMBOLCOLOR:{oe(l.size===3||l.size===4);const c=i.getField(n,Je);c&&mo(d,l.data,l.size,c,a);break}case h.TANGENT:{oe(l.size===4);const c=i.getField(n,dr);c&&xs(d,l.data,o,c,a);break}}else if(n===h.OBJECTANDLAYERIDCOLOR&&m(t.objectAndLayerIdColor)&&t.objectAndLayerIdColor.length===4){const c=t.indices.get(h.POSITION);if(c){const u=c.length,p=i.getField(n,Je);Ts(t.objectAndLayerIdColor,p,u,a)}}}}function ai(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[8]===0&&t[9]===0&&t[10]===1}function Pr(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function ni({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}function _s(t){return!!Do("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}let si=class extends Y{constructor(e,r){super(e,"mat3",z.Draw,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Re=class extends Y{constructor(e,r){super(e,"mat3",z.Pass,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},ke=class extends Y{constructor(e,r){super(e,"mat4",z.Pass,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function li(t,e){t.include(Pr);const r=t.vertex;r.include(ni,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new q("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new q("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new Re("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new ke("transformProjFromView",o=>o.transformProjFromView),new si("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new ue("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new ue("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)]),r.code.add(s`vec3 positionWorldCameraRelative() {
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
  `),t.fragment.uniforms.add(new q("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ss=class extends Cr{constructor(){super(...arguments),this.transformWorldFromViewTH=I(),this.transformWorldFromViewTL=I(),this.transformViewFromCameraRelativeRS=Wt(),this.transformProjFromView=gr()}};function ci(t,e){e.normalType===X.Attribute||e.normalType===X.CompressedAttribute?(t.include(Yt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new si("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Re("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===X.Ground?(t.include(li,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(s`void forwardNormal() {}`)}let ys=class extends Ss{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Wt()}};const ws=.1,Rr=.001;let Zt=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Lr=class{constructor(e,r,o){this.release=o,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Hr(this._program),this._pipeline=this._configuration=null}reload(e){Hr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,o){e.setPipelineState(this.getPipelineState(r,o))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return pt.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},Er=class{constructor(e,r,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new Eo({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(z.Pass,this),this.bindDraw=r.generateBind(z.Draw,this),this._fragmentUniforms=Ba()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(k(r)||r.glName==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let o=this._textures.get(e);return o==null?(o=this._allocTextureUnit(r),this._textures.set(e,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),m(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Pe.LESS;Pe.ALWAYS;const As={mask:255},Cs={function:{func:Pe.ALWAYS,ref:Me.OutlineVisualElementMask,mask:Me.OutlineVisualElementMask},operation:{fail:ae.KEEP,zFail:ae.KEEP,zPass:ae.ZERO}},Ms={function:{func:Pe.ALWAYS,ref:Me.OutlineVisualElementMask,mask:Me.OutlineVisualElementMask},operation:{fail:ae.KEEP,zFail:ae.KEEP,zPass:ae.REPLACE}};Pe.EQUAL,Me.OutlineVisualElementMask,Me.OutlineVisualElementMask,ae.KEEP,ae.KEEP,ae.KEEP;Pe.NOTEQUAL,Me.OutlineVisualElementMask,Me.OutlineVisualElementMask,ae.KEEP,ae.KEEP,ae.KEEP;function po(t){t.varyings.add("linearDepth","float")}function di(t){t.vertex.uniforms.add(new se("nearFar",(e,r)=>r.camera.nearFar))}function ui(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function hi(t,e){const{vertex:r}=t;switch(e.output){case C.Color:if(e.receiveShadows)return po(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case C.Depth:case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:return t.include(li,e),po(t),di(t),ui(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function mi(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function We(t,e){Os(t,e,[new ue("slicePlaneOrigin",(r,o)=>$s(e,r,o)),new ue("slicePlaneBasis1",(r,o)=>{var i;return fo(e,r,o,(i=bt(o.slicePlane))==null?void 0:i.basis1)}),new ue("slicePlaneBasis2",(r,o)=>{var i;return fo(e,r,o,(i=bt(o.slicePlane))==null?void 0:i.basis2)})])}function Os(t,e,r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const o=s`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(o),t.fragment.code.add(o),t.fragment.code.add(a)}function pi(t,e,r){return t.instancedDoublePrecision?K(Ps,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function fi(t,e){return m(t)?Se(Ut,e.origin,t):e.origin}function vi(t,e,r){return t.hasSliceTranslatedView?m(e)?lr(Rs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function $s(t,e,r){if(k(r.slicePlane))return br;const o=pi(t,e,r),i=fi(o,r.slicePlane),a=vi(t,o,r);return m(a)?_t(Ut,i,a):i}function fo(t,e,r,o){if(k(o)||k(r.slicePlane))return br;const i=pi(t,e,r),a=fi(i,r.slicePlane),n=vi(t,i,r);return m(n)?(Ae(mt,o,a),_t(Ut,a,n),_t(mt,mt,n),Se(mt,mt,Ut)):o}const Ps=I(),Ut=I(),mt=I(),Rs=gr();function gt(t,e){if(ui(t),e.hasModelTransformation)return t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
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
}`)}let Ls=class extends Y{constructor(e,r){super(e,"mat4",z.Draw,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function yt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",br):t.uniforms.add(new ue("cameraPosition",(r,o)=>K(gi,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function xt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new ke("proj",(o,i)=>i.camera.projectionMatrix),new Ls("view",(o,i)=>lr(vo,i.camera.viewMatrix,o.origin)),new ue("localOrigin",o=>o.origin)]);const r=o=>K(gi,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new ke("proj",(o,i)=>i.camera.projectionMatrix),new ke("view",(o,i)=>lr(vo,i.camera.viewMatrix,r(i))),new q("localOrigin",(o,i)=>r(i))])}const vo=Ya(),gi=I();function Es(t){t.uniforms.add(new ke("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let xi=class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const o of e)r[o]=this[o];return r}};function T(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,i=t.count||2,a=Math.ceil(Math.log2(i)),n=e._parameterBits??[0];let l=0;for(;n[l]+a>16;)l++,l>=n.length&&n.push(0);e._parameterBits=n;const d=n[l],c=(1<<a)-1<<d;n[l]+=a,Object.defineProperty(e,r,{get(){return this[o]},set(u){if(this[o]!==u&&(this[o]=u,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~c|+u<<d&c,typeof u!="number"&&typeof u!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof u}})}}}let Is=class extends xi{constructor(){super(...arguments),this.instancedDoublePrecision=!1}};function Ti(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(h.MODELORIGINHI,"vec3"),t.attributes.add(h.MODELORIGINLO,"vec3"),t.attributes.add(h.MODEL,"mat3"),t.attributes.add(h.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(ni,e),r.uniforms.add(new ue("viewOriginHi",(o,i)=>ya(K(It,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),It))),r.uniforms.add(new ue("viewOriginLo",(o,i)=>wa(K(It,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),It)))),r.code.add(s`
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
    `),e.output===C.Normal&&(Es(r),r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}x([T()],Is.prototype,"instancedDoublePrecision",void 0);const It=I();function Ns(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(be.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(be.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(be.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(be.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let bi=class extends Y{constructor(e,r){super(e,"int",z.Pass,(o,i,a)=>o.setUniform1i(e,r(i,a)))}};function _i(t,e){e.hasSymbolColors?(t.include(Ns),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new bi("colorMixMode",r=>ls[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Si(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ds(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`)}function Fs(t){t.uniforms.add(new Q("screenSizePerspectiveAlignment",e=>zs(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function zs(t){return re(Vs,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Vs=qt();function yi(t,e){const r=t.vertex;e.hasVerticalOffset?(Gs(r),e.hasScreenSizePerspective&&(t.include(Ds),Fs(r),yt(t.vertex,e)),r.code.add(s`
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
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Bs=qt();function Gs(t){t.uniforms.add(new Q("verticalOffset",(e,r)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return re(Bs,a*l,n,o,i)}))}function Us(t,e){const r=e.output===C.ObjectAndLayerIdColor,o=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),o?t.attributes.add(h.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`gl_FragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Ir(t){t.code.add(s`const float MAX_RGBA_FLOAT =
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
}`)}function Hs(t,e){switch(t.fragment.include(Ir),e.output){case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case C.Depth:t.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const ks=jt(1,1,0,1),Ws=jt(1,0,1,1);function js(t,e){t.fragment.uniforms.add(He("depthTex",(r,o)=>o.highlightDepthTexture,e.hasWebGL2Context?j.None:j.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",ks).add("unoccludedHighlightFlag","vec4",Ws),t.fragment.code.add(s`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${hn(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}let qs=class extends Y{constructor(e,r,o){super(e,"vec4",z.Pass,(i,a,n)=>i.setUniform4fv(e,r(a,n)),o)}},Xs=class extends Y{constructor(e,r,o){super(e,"float",z.Pass,(i,a,n)=>i.setUniform1fv(e,r(a,n)),o)}};const ir=8;function Tt(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(h.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new q("vvSizeMinSize",o=>o.vvSizeMinSize)),r.uniforms.add(new q("vvSizeMaxSize",o=>o.vvSizeMaxSize)),r.uniforms.add(new q("vvSizeOffset",o=>o.vvSizeOffset)),r.uniforms.add(new q("vvSizeFactor",o=>o.vvSizeFactor)),r.uniforms.add(new Re("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new q("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",ir),e.hasVvInstancing&&r.uniforms.add([new Xs("vvColorValues",o=>o.vvColorValues,ir),new qs("vvColorColors",o=>o.vvColorColors,ir)]),r.code.add(s`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Ks(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Rr)}) { discard; } }
  `)}let J=class extends Y{constructor(e,r){super(e,"float",z.Pass,(o,i,a)=>o.setUniform1f(e,r(i,a)))}};function je(t,e){Ys(t,e,new J("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Ys(t,e,r){const o=t.fragment;switch(e.alphaDiscardMode!==W.Mask&&e.alphaDiscardMode!==W.MaskBlend||o.uniforms.add(r),e.alphaDiscardMode){case W.Blend:return t.include(Ks);case W.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case W.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case W.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function wi(t,e){const{vertex:r,fragment:o}=t,i=e.hasModelTransformation;i&&r.uniforms.add(new ke("model",n=>m(n.modelTransformation)?n.modelTransformation:Ao));const a=e.hasColorTexture&&e.alphaDiscardMode!==W.Opaque;switch(e.output){case C.Depth:case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:case C.ObjectAndLayerIdColor:xt(r,e),t.include(gt,e),t.include(tt,e),t.include(Tt,e),t.include(Hs,e),t.include(We,e),t.include(Us,e),di(t),t.varyings.add("depth","float"),a&&o.uniforms.add(new te("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${i?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(je,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===C.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case C.Normal:xt(r,e),t.include(gt,e),t.include(Yt,e),t.include(ci,e),t.include(tt,e),t.include(Tt,e),a&&o.uniforms.add(new te("tex",n=>n.texture)),t.varyings.add("vPositionView","vec3"),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===X.Attribute?s`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(We,e),t.include(je,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===X.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case C.Highlight:xt(r,e),t.include(gt,e),t.include(tt,e),t.include(Tt,e),a&&o.uniforms.add(new te("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(We,e),t.include(je,e),t.include(js,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Zs(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===ee.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),e.textureCoordinateType!==Z.None){t.include(Yo,e);const o=e.supportsTextureAtlas?e.hasWebGL2Context?j.None:j.Size:j.None;r.uniforms.add(e.pbrTextureBindType===z.Pass?He("normalTexture",i=>i.textureNormal,o):zt("normalTexture",i=>i.textureNormal,o)),r.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?s`vtc.size = ${et(e,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Nr(t){t.include(Ir),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}const ar=4;function Js(){const t=new Mt,e=t.fragment;t.include(Mr);const r=(ar+1)/2,o=1/(2*r*r);return e.include(Nr),e.uniforms.add([new te("depthMap",i=>i.depthTexture),new Zo("tex",i=>i.colorTexture),new fr("blurSize",i=>i.blurSize),new J("projScale",(i,a)=>{const n=ji(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale}),new se("nearFar",(i,a)=>a.camera.nearFar)]),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(ar)}; r <= ${s.int(ar)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const Qs=Object.freeze(Object.defineProperty({__proto__:null,build:Js},Symbol.toStringTag,{value:"Module"}));let el=class Ai extends Lr{initializeProgram(e){return new Er(e.rctx,Ai.shader.get().build(),Ot)}initializePipeline(){return yr({colorWrite:wr})}};el.shader=new Zt(Qs,()=>Ct(()=>import("./SSAOBlur.glsl-4abe4495.js"),["assets/SSAOBlur.glsl-4abe4495.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/VertexAttribute-9c5c630d.js","assets/vec2-f978aef8.js","assets/vec2f64-e0301652.js","assets/devEnvironmentUtils-5002a058.js","assets/typedArrayUtil-2bcf3cee.js","assets/mat3-45e3f2eb.js","assets/mat3f64-b33e332c.js","assets/mat4-62d5e6a4.js","assets/mat4f64-3d813481.js","assets/aaBoundingBox-6fbd5972.js","assets/Extent-7f29a1bb.js","assets/cast-daef7652.js","assets/string-3d0ebcd3.js","assets/Error-bd05b442.js","assets/ensureType-fa162cfc.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-29120e0a.js","assets/BufferView-dfb97f8b.js","assets/vec33-b89f760e.js","assets/DefaultMaterial_COLOR_GAMMA-10d4f229.js","assets/types-e1c0a5bf.js","assets/request-c2b0ab45.js","assets/preload-helper-101896b7.js","assets/asyncUtils-59234081.js","assets/enums-64ab819c.js","assets/Version-c777a35e.js","assets/quat-7867de93.js","assets/quatf64-7fd38d64.js","assets/compilerUtils-06ced1a6.js","assets/mat3f32-d3d088e8.js","assets/vec2f32-461e65a9.js","assets/byteSizeEstimations-90c5a50d.js","assets/requestImageUtils-39957a4b.js","assets/OrderIndependentTransparency-602f26c2.js","assets/Util-6ed6f2ad.js","assets/sphere-79d3f377.js","assets/vec4f64-018b3fa6.js","assets/Evented-d8fc77f0.js","assets/assets-4cb15247.js","assets/Texture-6f3336a0.js","assets/context-util-cb6895d7.js","assets/VertexArrayObject-8a5c7580.js","assets/VertexElementDescriptor-2925c6af.js","assets/ViewingMode-fb6259a5.js","assets/InterleavedLayout-7654f6ca.js","assets/vec3f32-4322908d.js","assets/parser-e6166e34.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/symbolColorUtils-c8703525.js"]));function tl(t){t.fragment.uniforms.add(new Q("projInfo",(e,r)=>rl(r))),t.fragment.uniforms.add(new se("zScale",(e,r)=>Ci(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function rl(t){const e=t.camera.projectionMatrix;return e[11]===0?re(go,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):re(go,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const go=qt();function Ci(t){return t.camera.projectionMatrix[11]===0?$e(xo,0,1):$e(xo,1,0)}const xo=Xt(),To=16,ol=.5;function il(){const t=new Mt,e=t.fragment;return t.include(Mr),e.include(Nr),t.include(tl),e.uniforms.add(new J("radius",(r,o)=>bo(o))),e.code.add(s`vec3 sphere[16];
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
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new se("nearFar",(r,o)=>o.camera.nearFar),new te("normalMap",r=>r.normalTexture),new te("depthMap",r=>r.depthTexture),new se("zScale",(r,o)=>Ci(o)),new J("projScale",r=>r.projScale),new te("rnm",r=>r.noiseTexture),new se("rnmScale",(r,o)=>$e(_o,o.camera.fullWidth/bt(r.noiseTexture).descriptor.width,o.camera.fullHeight/bt(r.noiseTexture).descriptor.height)),new J("intensity",(r,o)=>4*ol/bo(o)**6),new se("screenSize",(r,o)=>$e(_o,o.camera.fullWidth,o.camera.fullHeight))]),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(To)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(To)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function bo(t){return Math.max(10,20*t.camera.computeRenderPixelSizeAtDist(Math.abs(4*t.camera.relativeElevation)))}const _o=Xt(),al=Object.freeze(Object.defineProperty({__proto__:null,build:il},Symbol.toStringTag,{value:"Module"}));class Dr extends Lr{initializeProgram(e){return new Er(e.rctx,Dr.shader.get().build(),Ot)}initializePipeline(){return yr({colorWrite:wr})}}Dr.shader=new Zt(al,()=>Ct(()=>import("./SSAO.glsl-b0901b4c.js"),["assets/SSAO.glsl-b0901b4c.js","assets/vec2-f978aef8.js","assets/common-701a4199.js","assets/vec2f64-e0301652.js","assets/VertexAttribute-9c5c630d.js","assets/mathUtils-daf59e84.js","assets/vec4f64-018b3fa6.js","assets/devEnvironmentUtils-5002a058.js","assets/typedArrayUtil-2bcf3cee.js","assets/mat3-45e3f2eb.js","assets/mat3f64-b33e332c.js","assets/mat4-62d5e6a4.js","assets/mat4f64-3d813481.js","assets/aaBoundingBox-6fbd5972.js","assets/Extent-7f29a1bb.js","assets/cast-daef7652.js","assets/string-3d0ebcd3.js","assets/Error-bd05b442.js","assets/ensureType-fa162cfc.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-29120e0a.js","assets/BufferView-dfb97f8b.js","assets/vec33-b89f760e.js","assets/DefaultMaterial_COLOR_GAMMA-10d4f229.js","assets/types-e1c0a5bf.js","assets/request-c2b0ab45.js","assets/preload-helper-101896b7.js","assets/asyncUtils-59234081.js","assets/enums-64ab819c.js","assets/Version-c777a35e.js","assets/quat-7867de93.js","assets/quatf64-7fd38d64.js","assets/compilerUtils-06ced1a6.js","assets/mat3f32-d3d088e8.js","assets/vec2f32-461e65a9.js","assets/byteSizeEstimations-90c5a50d.js","assets/requestImageUtils-39957a4b.js","assets/OrderIndependentTransparency-602f26c2.js","assets/Util-6ed6f2ad.js","assets/sphere-79d3f377.js","assets/Evented-d8fc77f0.js","assets/assets-4cb15247.js","assets/Texture-6f3336a0.js","assets/context-util-cb6895d7.js","assets/VertexArrayObject-8a5c7580.js","assets/VertexElementDescriptor-2925c6af.js","assets/ViewingMode-fb6259a5.js","assets/InterleavedLayout-7654f6ca.js","assets/vec3f32-4322908d.js","assets/parser-e6166e34.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js","assets/symbolColorUtils-c8703525.js"]));const nl=2;function Fr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(He("ssaoTex",(o,i)=>i.ssaoHelper.colorTexture,e.hasWebGL2Context?j.None:j.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/nl),r.code.add(s`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${et(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function sl(t,e){const r=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new q("lightingAmbientSH0",(i,a)=>K(So,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add([new Q("lightingAmbientSH_R",(i,a)=>re(ge,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new Q("lightingAmbientSH_G",(i,a)=>re(ge,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new Q("lightingAmbientSH_B",(i,a)=>re(ge,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(r.uniforms.add([new q("lightingAmbientSH0",(i,a)=>K(So,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new Q("lightingAmbientSH_R1",(i,a)=>re(ge,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new Q("lightingAmbientSH_G1",(i,a)=>re(ge,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new Q("lightingAmbientSH_B1",(i,a)=>re(ge,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new Q("lightingAmbientSH_R2",(i,a)=>re(ge,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new Q("lightingAmbientSH_G2",(i,a)=>re(ge,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new Q("lightingAmbientSH_B2",(i,a)=>re(ge,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==D.Normal&&e.pbrMode!==D.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const So=I(),ge=qt();function zr(t){t.uniforms.add(new q("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function Jt(t){t.uniforms.add(new q("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function ll(t,e){e.useLegacyTerrainShading?t.uniforms.add(new J("lightingFixedFactor",(r,o)=>o.lighting.noonFactor*(1-o.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function cl(t,e){const r=t.fragment;zr(r),Jt(r),ll(r,e),r.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function dl(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}function Mi(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Vr(t,e){const r=t.fragment.code;t.include(Mi),e.pbrMode===D.Water||e.pbrMode===D.WaterOnIntegratedMesh?(r.add(s`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==D.Normal&&e.pbrMode!==D.Schematic||(t.include(dl),r.add(s`struct PBRShadingInfo
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
};`),r.add(s`float normalDistribution(float NdotH, float roughness)
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
}`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
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
}`))}let ul=class extends Y{constructor(e,r){super(e,"bool",z.Pass,(o,i,a)=>o.setUniform1b(e,r(i,a)))}};const hl=.4;function Br(t){t.constants.add("ambientBoostFactor","float",hl)}function Gr(t){t.uniforms.add(new J("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Oi(t,e){const r=t.fragment;switch(t.include(Fr,e),e.pbrMode!==D.Disabled&&t.include(Vr,e),t.include(sl,e),t.include(Mi),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===D.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Br(r),Gr(r),zr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Jt(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case D.Disabled:case D.WaterOnIntegratedMesh:case D.Water:t.include(cl,e),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case D.Normal:case D.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
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
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new ul("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new J("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new J("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)]),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
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
        ${e.pbrMode===D.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:At(e.pbrMode);case D.COUNT:}}function Ht(t,e){e.hasMultipassTerrain&&(t.fragment.include(Nr),t.fragment.uniforms.add(new te("terrainDepthTexture",(r,o)=>o.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new se("nearFar",(r,o)=>o.camera.nearFar)),t.fragment.uniforms.add(new se("inverseViewport",(r,o)=>o.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class ml extends Y{constructor(e,r,o){super(e,"mat4",z.Draw,(i,a,n)=>i.setUniformMatrix4fv(e,r(a,n)),o)}}let pl=class extends Y{constructor(e,r,o){super(e,"mat4",z.Pass,(i,a,n)=>i.setUniformMatrix4fv(e,r(a,n)),o)}};function $i(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new pl("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ri(t,e))}function Pi(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ml("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ri(t,e))}function Ri(t,e){const r=t.fragment;r.include(Ir),r.uniforms.add([...He("shadowMapTex",(o,i)=>i.shadowMap.depthTexture,e.hasWebGL2Context?j.None:j.Size),new bi("numCascades",(o,i)=>i.shadowMap.numCascades),new Q("cascadeDistances",(o,i)=>i.shadowMap.cascadeDistances)]),r.code.add(s`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
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
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

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

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${et(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function fl(t){t.vertex.uniforms.add(new Re("colorTextureTransformMatrix",e=>m(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:ot())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function vl(t){t.vertex.uniforms.add(new Re("normalTextureTransformMatrix",e=>m(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:ot())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function gl(t){t.vertex.uniforms.add(new Re("emissiveTextureTransformMatrix",e=>m(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:ot())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function xl(t){t.vertex.uniforms.add(new Re("occlusionTextureTransformMatrix",e=>m(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:ot())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Tl(t){t.vertex.uniforms.add(new Re("metallicRoughnessTextureTransformMatrix",e=>m(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:ot())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function bl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function kt(t){t.include(bl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(be.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(be.Replace)}) {
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

      if (mode == ${s.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(be.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function _l(t){const e=new Mt,{vertex:r,fragment:o,varyings:i}=e;return xt(r,t),e.include(Pr),i.add("vpos","vec3"),e.include(Tt,t),e.include(Ti,t),e.include(yi,t),t.hasColorTextureTransform&&e.include(fl),t.output!==C.Color&&t.output!==C.Alpha||(t.hasNormalTextureTransform&&e.include(vl),t.hasEmissionTextureTransform&&e.include(gl),t.hasOcclusionTextureTransform&&e.include(xl),t.hasMetallicRoughnessTextureTransform&&e.include(Tl),yt(r,t),e.include(Yt,t),e.include(gt,t),t.normalType===X.Attribute&&t.offsetBackfaces&&e.include(mi),e.include(Zs,t),e.include(ci,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),i.add("localvpos","vec3"),e.include(tt,t),e.include(hi,t),e.include(_i,t),e.include(Si,t),r.uniforms.add(new Q("externalColor",a=>a.externalColor)),i.add("vcolorExt","vec4"),t.hasMultipassTerrain&&i.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new ke("model",a=>m(a.modelTransformation)?a.modelTransformation:Ao)),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Rr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===X.Attribute?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===X.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
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
    `)),t.output===C.Alpha&&(e.include(We,t),e.include(je,t),e.include(Ht,t),o.uniforms.add([new J("opacity",a=>a.opacity),new J("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&o.uniforms.add(new te("tex",a=>a.texture)),o.include(kt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===C.Color&&(e.include(We,t),e.include(Oi,t),e.include(Fr,t),e.include(je,t),e.include(t.instancedDoublePrecision?$i:Pi,t),e.include(Ht,t),yt(o,t),o.uniforms.add([r.uniforms.get("localOrigin"),new q("ambient",a=>a.ambient),new q("diffuse",a=>a.diffuse),new J("opacity",a=>a.opacity),new J("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&o.uniforms.add(new te("tex",a=>a.texture)),e.include(Jo,t),e.include(Vr,t),o.include(kt),e.include(Un,t),Br(o),Gr(o),Jt(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===X.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(localvpos);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===D.Normal?"applyPBRFactors();":""}
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
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===rt.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(wi,t),e}const Sl=Object.freeze(Object.defineProperty({__proto__:null,build:_l},Symbol.toStringTag,{value:"Module"}));let yl=class extends ys{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Xe(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Oe.Back,this.emissiveFactor=Xe(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Xe(.2,.2,.2),this.diffuse=Xe(.8,.8,.8),this.externalColor=jt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=I(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Wt(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=wt.Less,this.textureAlphaMode=W.Blend,this.textureAlphaCutoff=ws,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=vr.Occlude}};class $t extends Lr{initializeConfiguration(e,r){r.hasWebGL2Context=e.rctx.type===Za.WEBGL2,r.spherical=e.viewingMode===hr.Global,r.doublePrecisionRequiresObfuscation=_s(e.rctx),r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?Z.Default:Z.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,$t.shader)}_initializeProgram(e,r){return new Er(e.rctx,r.get().build(this.configuration),Ot)}_convertDepthTestFunction(e){return e===wt.Lequal?Pe.LEQUAL:Pe.LESS}_makePipeline(e,r){const o=this.configuration,i=e===rt.NONE,a=e===rt.FrontFace;return yr({blending:o.output!==C.Color&&o.output!==C.Alpha||!o.transparent?null:i?Aa:Ca(e),culling:wl(o)&&Ma(o.cullFace),depthTest:{func:Oa(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:i||a?o.writeDepth&&$a:null,colorWrite:wr,stencilWrite:o.hasOccludees?As:null,stencilTest:o.hasOccludees?r?Ms:Cs:null,polygonOffset:i||a?null:Pa(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function wl(t){return t.cullFace!==Oe.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}$t.shader=new Zt(Sl,()=>Ct(()=>import("./DefaultMaterial.glsl-173e4259.js"),["assets/DefaultMaterial.glsl-173e4259.js","assets/mat4f64-3d813481.js","assets/mat3f64-b33e332c.js","assets/vec3f32-4322908d.js","assets/common-701a4199.js","assets/VertexAttribute-9c5c630d.js","assets/string-3d0ebcd3.js","assets/typedArrayUtil-2bcf3cee.js","assets/mat4-62d5e6a4.js","assets/mathUtils-daf59e84.js","assets/symbolColorUtils-c8703525.js","assets/vec4f64-018b3fa6.js","assets/vec2-f978aef8.js","assets/vec2f64-e0301652.js","assets/OrderIndependentTransparency-602f26c2.js","assets/enums-64ab819c.js","assets/request-c2b0ab45.js","assets/preload-helper-101896b7.js","assets/Error-bd05b442.js","assets/promiseUtils-29120e0a.js","assets/VertexArrayObject-8a5c7580.js","assets/Texture-6f3336a0.js","assets/context-util-cb6895d7.js","assets/mat3f32-d3d088e8.js","assets/devEnvironmentUtils-5002a058.js","assets/mat3-45e3f2eb.js","assets/aaBoundingBox-6fbd5972.js","assets/Extent-7f29a1bb.js","assets/cast-daef7652.js","assets/ensureType-fa162cfc.js","assets/nextTick-3ee5a785.js","assets/BufferView-dfb97f8b.js","assets/vec33-b89f760e.js","assets/DefaultMaterial_COLOR_GAMMA-10d4f229.js","assets/types-e1c0a5bf.js","assets/asyncUtils-59234081.js","assets/Version-c777a35e.js","assets/quat-7867de93.js","assets/quatf64-7fd38d64.js","assets/compilerUtils-06ced1a6.js","assets/vec2f32-461e65a9.js","assets/byteSizeEstimations-90c5a50d.js","assets/requestImageUtils-39957a4b.js","assets/Util-6ed6f2ad.js","assets/sphere-79d3f377.js","assets/Evented-d8fc77f0.js","assets/assets-4cb15247.js","assets/VertexElementDescriptor-2925c6af.js","assets/ViewingMode-fb6259a5.js","assets/InterleavedLayout-7654f6ca.js","assets/parser-e6166e34.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js"]));class we extends xi{constructor(){super(...arguments),this.hasWebGL2Context=!1}}x([T({constValue:!0})],we.prototype,"hasSliceHighlight",void 0),x([T({constValue:!1})],we.prototype,"hasSliceInVertexProgram",void 0),x([T({constValue:!1})],we.prototype,"instancedDoublePrecision",void 0),x([T({constValue:!1})],we.prototype,"useLegacyTerrainShading",void 0),x([T({constValue:!1})],we.prototype,"hasModelTransformation",void 0),x([T({constValue:z.Pass})],we.prototype,"pbrTextureBindType",void 0),x([T()],we.prototype,"hasWebGL2Context",void 0);class w extends we{constructor(){super(...arguments),this.output=C.Color,this.alphaDiscardMode=W.Opaque,this.doubleSidedMode=ee.None,this.pbrMode=D.Disabled,this.cullFace=Oe.None,this.transparencyPassType=rt.NONE,this.normalType=X.Attribute,this.textureCoordinateType=Z.None,this.customDepthTest=wt.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}x([T({count:C.COUNT})],w.prototype,"output",void 0),x([T({count:W.COUNT})],w.prototype,"alphaDiscardMode",void 0),x([T({count:ee.COUNT})],w.prototype,"doubleSidedMode",void 0),x([T({count:D.COUNT})],w.prototype,"pbrMode",void 0),x([T({count:Oe.COUNT})],w.prototype,"cullFace",void 0),x([T({count:rt.COUNT})],w.prototype,"transparencyPassType",void 0),x([T({count:X.COUNT})],w.prototype,"normalType",void 0),x([T({count:Z.COUNT})],w.prototype,"textureCoordinateType",void 0),x([T({count:wt.COUNT})],w.prototype,"customDepthTest",void 0),x([T()],w.prototype,"spherical",void 0),x([T()],w.prototype,"hasVertexColors",void 0),x([T()],w.prototype,"hasSymbolColors",void 0),x([T()],w.prototype,"hasVerticalOffset",void 0),x([T()],w.prototype,"hasSlicePlane",void 0),x([T()],w.prototype,"hasSliceHighlight",void 0),x([T()],w.prototype,"hasColorTexture",void 0),x([T()],w.prototype,"hasMetallicRoughnessTexture",void 0),x([T()],w.prototype,"hasEmissionTexture",void 0),x([T()],w.prototype,"hasOcclusionTexture",void 0),x([T()],w.prototype,"hasNormalTexture",void 0),x([T()],w.prototype,"hasScreenSizePerspective",void 0),x([T()],w.prototype,"hasVertexTangents",void 0),x([T()],w.prototype,"hasOccludees",void 0),x([T()],w.prototype,"hasMultipassTerrain",void 0),x([T()],w.prototype,"hasModelTransformation",void 0),x([T()],w.prototype,"offsetBackfaces",void 0),x([T()],w.prototype,"vvSize",void 0),x([T()],w.prototype,"vvColor",void 0),x([T()],w.prototype,"receiveShadows",void 0),x([T()],w.prototype,"receiveAmbientOcclusion",void 0),x([T()],w.prototype,"textureAlphaPremultiplied",void 0),x([T()],w.prototype,"instanced",void 0),x([T()],w.prototype,"instancedColor",void 0),x([T()],w.prototype,"objectAndLayerIdColorInstanced",void 0),x([T()],w.prototype,"instancedDoublePrecision",void 0),x([T()],w.prototype,"doublePrecisionRequiresObfuscation",void 0),x([T()],w.prototype,"writeDepth",void 0),x([T()],w.prototype,"transparent",void 0),x([T()],w.prototype,"enableOffset",void 0),x([T()],w.prototype,"cullAboveGround",void 0),x([T()],w.prototype,"snowCover",void 0),x([T()],w.prototype,"hasColorTextureTransform",void 0),x([T()],w.prototype,"hasEmissionTextureTransform",void 0),x([T()],w.prototype,"hasNormalTextureTransform",void 0),x([T()],w.prototype,"hasOcclusionTextureTransform",void 0),x([T()],w.prototype,"hasMetallicRoughnessTextureTransform",void 0),x([T({constValue:!0})],w.prototype,"hasVvInstancing",void 0),x([T({constValue:!1})],w.prototype,"useCustomDTRExponentForWater",void 0),x([T({constValue:!1})],w.prototype,"supportsTextureAtlas",void 0),x([T({constValue:!0})],w.prototype,"useFillLights",void 0);function Al(t){const e=new Mt,{vertex:r,fragment:o,varyings:i}=e;return xt(r,t),e.include(Pr),i.add("vpos","vec3"),e.include(Tt,t),e.include(Ti,t),e.include(yi,t),t.output!==C.Color&&t.output!==C.Alpha||(yt(e.vertex,t),e.include(Yt,t),e.include(gt,t),t.offsetBackfaces&&e.include(mi),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.hasMultipassTerrain&&i.add("depth","float"),e.include(tt,t),e.include(hi,t),e.include(_i,t),e.include(Si,t),r.uniforms.add(new Q("externalColor",a=>a.externalColor)),i.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Rr)}) {
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
      `)),t.output===C.Alpha&&(e.include(We,t),e.include(je,t),e.include(Ht,t),o.uniforms.add([new J("opacity",a=>a.opacity),new J("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&o.uniforms.add(new te("tex",a=>a.texture)),o.include(kt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===C.Color&&(e.include(We,t),e.include(Oi,t),e.include(Fr,t),e.include(je,t),e.include(t.instancedDoublePrecision?$i:Pi,t),e.include(Ht,t),yt(e.fragment,t),zr(o),Br(o),Gr(o),o.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new q("ambient",a=>a.ambient),new q("diffuse",a=>a.diffuse),new J("opacity",a=>a.opacity),new J("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&o.uniforms.add(new te("tex",a=>a.texture)),e.include(Jo,t),e.include(Vr,t),o.include(kt),e.extensions.add("GL_OES_standard_derivatives"),Jt(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===D.Normal?"applyPBRFactors();":""}
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
        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===rt.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:s``}
      }
    `)),e.include(wi,t),e}const Cl=Object.freeze(Object.defineProperty({__proto__:null,build:Al},Symbol.toStringTag,{value:"Module"}));class Qt extends $t{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=X.Attribute,r.doubleSidedMode=ee.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Qt.shader)}}Qt.shader=new Zt(Cl,()=>Ct(()=>import("./RealisticTree.glsl-752afbfd.js"),["assets/RealisticTree.glsl-752afbfd.js","assets/mat3f64-b33e332c.js","assets/mat4f64-3d813481.js","assets/vec3f32-4322908d.js","assets/common-701a4199.js","assets/VertexAttribute-9c5c630d.js","assets/string-3d0ebcd3.js","assets/typedArrayUtil-2bcf3cee.js","assets/mat4-62d5e6a4.js","assets/mathUtils-daf59e84.js","assets/symbolColorUtils-c8703525.js","assets/vec4f64-018b3fa6.js","assets/vec2-f978aef8.js","assets/vec2f64-e0301652.js","assets/OrderIndependentTransparency-602f26c2.js","assets/enums-64ab819c.js","assets/request-c2b0ab45.js","assets/preload-helper-101896b7.js","assets/Error-bd05b442.js","assets/promiseUtils-29120e0a.js","assets/VertexArrayObject-8a5c7580.js","assets/Texture-6f3336a0.js","assets/context-util-cb6895d7.js","assets/devEnvironmentUtils-5002a058.js","assets/mat3-45e3f2eb.js","assets/aaBoundingBox-6fbd5972.js","assets/Extent-7f29a1bb.js","assets/cast-daef7652.js","assets/ensureType-fa162cfc.js","assets/nextTick-3ee5a785.js","assets/BufferView-dfb97f8b.js","assets/vec33-b89f760e.js","assets/DefaultMaterial_COLOR_GAMMA-10d4f229.js","assets/types-e1c0a5bf.js","assets/asyncUtils-59234081.js","assets/Version-c777a35e.js","assets/quat-7867de93.js","assets/quatf64-7fd38d64.js","assets/compilerUtils-06ced1a6.js","assets/mat3f32-d3d088e8.js","assets/vec2f32-461e65a9.js","assets/byteSizeEstimations-90c5a50d.js","assets/requestImageUtils-39957a4b.js","assets/Util-6ed6f2ad.js","assets/sphere-79d3f377.js","assets/Evented-d8fc77f0.js","assets/assets-4cb15247.js","assets/VertexElementDescriptor-2925c6af.js","assets/ViewingMode-fb6259a5.js","assets/InterleavedLayout-7654f6ca.js","assets/parser-e6166e34.js","assets/colorUtils-639f4d25.js","assets/screenUtils-7afeb41c.js"]));class Li extends ds{constructor(e){super(e,$l),this.supportsEdges=!0,this._configuration=new w,this._vertexBufferLayout=Rl(this.parameters),this._instanceBufferLayout=e.instanced?Ll(this.parameters):null}isVisibleForOutput(e){return e!==C.Shadow&&e!==C.ShadowExludeHighlight&&e!==C.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:o,hasSymbolColors:i,vvColorEnabled:a}=e,n=m(r)&&r.includes("color"),l=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return o&&(n||a||i)?!!l||d:o?l?c:d:n||a||i?!!l||d:l?c:d}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=m(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=m(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normals==="screenDerivative"?X.ScreenDerivative:X.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,m(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Oe.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=m(this.parameters.modelTransformation),e!==C.Color&&e!==C.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=ee.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?ee.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?ee.WindingOrder:ee.None,this._configuration.instancedColor=m(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?D.Schematic:D.Normal:D.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Ra,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return m(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,o,i,a,n,l){if(m(this.parameters.verticalOffset)){const d=i.camera;K(sr,o[12],o[13],o[14]);let c=null;switch(i.viewingMode){case hr.Global:c=Tr(yo,sr);break;case hr.Local:c=qi(yo,Nl)}let u=0;const p=Se(Dl,sr,d.eye),f=xr(p),b=Ze(p,p,1/f);let A=null;this.parameters.screenSizePerspective&&(A=Xi(c,b)),u+=as(d,f,this.parameters.verticalOffset,A,this.parameters.screenSizePerspective),Ze(c,c,u),Ki(nr,c,i.transform.inverseRotation),a=Se(El,a,nr),n=Se(Il,n,nr)}Qn(e,r,i,a,n,ms(i.verticalOffset),l)}requiresSlot(e,r){return r===C.Color||r===C.Alpha||r===C.Depth||r===C.Normal||r===C.Shadow||r===C.ShadowHighlight||r===C.ShadowExludeHighlight||r===C.Highlight||r===C.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?Ye.TRANSPARENT_MATERIAL:Ye.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ye.OPAQUE_MATERIAL)||e===Ye.DRAPED_MATERIAL||r===C.ObjectAndLayerIdColor:!1}createGLMaterial(e){return new Ml(e)}createBufferWriter(){return new Pl(this._vertexBufferLayout,this._instanceBufferLayout)}}class Ml extends Wn{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const o=e.camera.viewInverseTransposeMatrix;return K(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?Qt:$t,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==C.Color&&this._output!==C.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class Ol extends yl{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const $l=new Ol;class Pl{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,o,i,a){bs(o,this.vertexBufferLayout,e,r,i,a)}}function Rl(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=Fo().vec3f(h.POSITION).vec3f(h.NORMAL);return t.hasVertexTangents&&r.vec4f(h.TANGENT),e&&r.vec2f(h.UV0),t.hasVertexColors&&r.vec4u8(h.COLOR),t.hasSymbolColors&&r.vec4u8(h.SYMBOLCOLOR),Do("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(h.OBJECTANDLAYERIDCOLOR),r}function Ll(t){let e=Fo();return e=t.instancedDoublePrecision?e.vec3f(h.MODELORIGINHI).vec3f(h.MODELORIGINLO).mat3f(h.MODEL).mat3f(h.MODELNORMAL):e.mat4f(h.MODEL).mat4f(h.MODELNORMAL),m(t.instanced)&&t.instanced.includes("color")&&(e=e.vec4f(h.INSTANCECOLOR)),m(t.instanced)&&t.instanced.includes("featureAttribute")&&(e=e.vec4f(h.INSTANCEFEATUREATTRIBUTE)),m(t.instanced)&&t.instanced.includes("objectAndLayerIdColor")&&(e=e.vec4u8(h.OBJECTANDLAYERIDCOLOR_INSTANCED)),e}const El=I(),Il=I(),Nl=Xe(0,0,1),yo=I(),nr=I(),sr=I(),Dl=I(),Te=_r.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Fl(t,e){const r=await zl(t,e),o=await Hl(r.textureDefinitions,e);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const n=o[a];i+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:i+Ta(r)}}async function zl(t,e){const r=m(e)&&e.streamDataRequester;if(r)return Vl(t,r,e);const o=await $o(xa(t,bt(e)));if(o.ok===!0)return o.value.data;Po(o.error),Ei(o.error)}async function Vl(t,e,r){const o=await $o(e.request(t,"json",r));if(o.ok===!0)return o.value;Po(o.error),Ei(o.error.details.url)}function Ei(t){throw new Sr("",`Request for object resource failed: ${t}`)}function Bl(t){const e=t.params,r=e.topology;let o=!0;switch(e.vertexAttributes||(Te.warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Te.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),o=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Te.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),o=!1)):(Te.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Te.warn("Indexed geometries must specify faces"),o=!1;break}default:Te.warn(`Unsupported topology '${r}'`),o=!1}t.params.material||(Te.warn("Geometry requires material"),o=!1);const i=t.params.vertexAttributes;for(const a in i)i[a].values||(Te.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function Gl(t,e){const r=[],o=[],i=[],a=[],n=t.resource,l=Ro.parse(n.version||"1.0","wosr");Wl.validate(l);const d=n.model.name,c=n.model.geometries,u=n.materialDefinitions,p=t.textures;let f=0;const b=new Map;for(let A=0;A<c.length;A++){const P=c[A];if(!Bl(P))continue;const g=kl(P),S=P.params.vertexAttributes,v=[];for(const y in S){const _=S[y],E=_.values;v.push([y,{data:E,size:_.valuesPerElement,exclusive:!0}])}const $=[];if(P.params.topology!=="PerAttributeArray"){const y=P.params.faces;for(const _ in y)$.push([_,y[_].values])}const L=p&&p[g.texture];if(L&&!b.has(g.texture)){const{image:y,params:_}=L,E=new ft(y,_);a.push(E),b.set(g.texture,E)}const V=b.get(g.texture),M=V?V.id:void 0;let O=i[g.material]?i[g.material][g.texture]:null;if(!O){const y=u[g.material.substring(g.material.lastIndexOf("/")+1)].params;y.transparency===1&&(y.transparency=0);const _=L&&L.alphaChannelUsage,E=y.transparency>0||_==="transparency"||_==="maskAndTransparency",R=L?Ii(L.alphaChannelUsage):void 0,F={ambient:Kr(y.diffuse),diffuse:Kr(y.diffuse),opacity:1-(y.transparency||0),transparent:E,textureAlphaMode:R,textureAlphaCutoff:.33,textureId:M,initTextureTransparent:!0,doubleSided:!0,cullFace:Oe.None,colorMixMode:y.externalColorMixMode||"tint",textureAlphaPremultiplied:!!L&&!!L.params.preMultiplyAlpha};m(e)&&e.materialParamsMixin&&Object.assign(F,e.materialParamsMixin),O=new Li(F),i[g.material]||(i[g.material]={}),i[g.material][g.texture]=O}o.push(O);const N=new Vo(v,$);f+=$.position?$.position.length:0,r.push(N)}return{engineResources:[{name:d,stageResources:{textures:a,materials:o,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Ul(r)}}function Ul(t){const e=Mo();return t.forEach(r=>{const o=r.boundingInfo;m(o)&&(Bt(e,o.getBBMin()),Bt(e,o.getBBMax()))}),e}async function Hl(t,e){const r=[];for(const a in t){const n=t[a],l=n.images[0].data;if(!l){Te.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+l,c="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",p={noUnpackFlip:!0,wrap:{s:Ke.REPEAT,t:Ke.REPEAT},preMultiplyAlpha:Ii(u)!==W.Opaque},f=m(e)&&e.disableTextures?Promise.resolve(null):Lo(d,e);r.push(f.then(b=>({refId:c,image:b,params:p,alphaChannelUsage:u})))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}function Ii(t){switch(t){case"mask":return W.Mask;case"maskAndTransparency":return W.MaskBlend;case"none":return W.Opaque;default:return W.Blend}}function kl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Wl=new Ro(1,2,"wosr");async function jl(t,e){const r=Ni(Fi(t));if(r.fileType==="wosr"){const u=await(e.cache?e.cache.loadWOSR(r.url,e):Fl(r.url,e)),{engineResources:p,referenceBoundingBox:f}=Gl(u,e);return{lods:p,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):aa(new na(e.streamDataRequester),r.url,e,e.usePBR)),i=Gi(o.model.meta,"ESRI_proxyEllipsoid"),a=o.meta.isEsriSymbolResource&&m(i)&&o.meta.uri.includes("/RealisticTrees/");a&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,Yl(o,i));const n=o.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:a,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...e.materialParamsMixin,treeRendering:a},{engineResources:d,referenceBoundingBox:c}=Di(o,n,l,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:c,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Ni(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Di(t,e,r,o){const i=t.model,a=new Array,n=new Map,l=new Map,d=i.lods.length,c=Mo();return i.lods.forEach((u,p)=>{const f=o.skipHighLods===!0&&(d>1&&p===0||d>3&&p===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&p!==o.singleLodIndex;if(f&&p!==0)return;const b=new Array;let A=0;if(u.parts.forEach(g=>{const{geometry:S,vertexCount:v}=ql(g);b.push(S),A+=v;const $=S.boundingInfo;m($)&&p===0&&(Bt(c,$.getBBMin()),Bt(c,$.getBBMax()))}),f)return;const P=new Ja(u.name,{textures:new Array,materials:new Array,geometries:b},u.lodThreshold,[0,0,0],A);a.push(P),u.parts.forEach(g=>{const S=g.material+(g.attributes.normal?"_normal":"")+(g.attributes.color?"_color":"")+(g.attributes.texCoord0?"_texCoord0":"")+(g.attributes.tangent?"_tangent":""),v=i.materials.get(g.material),$=m(g.attributes.texCoord0),L=m(g.attributes.normal);if(k(v))return;const V=Xl(v.alphaMode);if(!n.has(S)){if($){const F=(B,G=!1)=>{if(m(B)&&!l.has(B)){const U=i.textures.get(B);m(U)&&l.set(B,new ft(U.data,G?{...U.parameters,preMultiplyAlpha:G}:U.parameters))}};F(v.textureColor,V!==W.Opaque),F(v.textureNormal),F(v.textureOcclusion),F(v.textureEmissive),F(v.textureMetallicRoughness)}const M=v.color[0]**(1/qe),O=v.color[1]**(1/qe),N=v.color[2]**(1/qe),y=v.emissiveFactor[0]**(1/qe),_=v.emissiveFactor[1]**(1/qe),E=v.emissiveFactor[2]**(1/qe),R=m(v.textureColor)&&$?l.get(v.textureColor):null;n.set(S,new Li({...e,transparent:V===W.Blend,customDepthTest:wt.Lequal,textureAlphaMode:V,textureAlphaCutoff:v.alphaCutoff,diffuse:[M,O,N],ambient:[M,O,N],opacity:v.opacity,doubleSided:v.doubleSided,doubleSidedType:"winding-order",cullFace:v.doubleSided?Oe.None:Oe.Back,hasVertexColors:!!g.attributes.color,hasVertexTangents:!!g.attributes.tangent,normals:L?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:m(R)?R.id:void 0,colorMixMode:v.colorMixMode,normalTextureId:m(v.textureNormal)&&$?l.get(v.textureNormal).id:void 0,textureAlphaPremultiplied:m(R)&&!!R.params.preMultiplyAlpha,occlusionTextureId:m(v.textureOcclusion)&&$?l.get(v.textureOcclusion).id:void 0,emissiveTextureId:m(v.textureEmissive)&&$?l.get(v.textureEmissive).id:void 0,metallicRoughnessTextureId:m(v.textureMetallicRoughness)&&$?l.get(v.textureMetallicRoughness).id:void 0,emissiveFactor:[y,_,E],mrrFactors:[v.metallicFactor,v.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:dt(v.colorTextureTransform),normalTextureTransformMatrix:dt(v.normalTextureTransform),occlusionTextureTransformMatrix:dt(v.occlusionTextureTransform),emissiveTextureTransformMatrix:dt(v.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:dt(v.metallicRoughnessTextureTransform),...r}))}if(P.stageResources.materials.push(n.get(S)),$){const M=O=>{m(O)&&P.stageResources.textures.push(l.get(O))};M(v.textureColor),M(v.textureNormal),M(v.textureOcclusion),M(v.textureEmissive),M(v.textureMetallicRoughness)}})}),{engineResources:a,referenceBoundingBox:c}}function ql(t){const e=Kl(t.indices||t.attributes.position.count,t.primitiveType),r=t.attributes.position.count,o=Be(Qe,r);ta(o,t.attributes.position,t.transform);const i=[[h.POSITION,{data:o.typedBuffer,size:o.elementCount,exclusive:!0}]],a=[[h.POSITION,e]];if(m(t.attributes.normal)){const n=Be(Qe,r);Wr(Nt,t.transform),ra(n,t.attributes.normal,Nt),i.push([h.NORMAL,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.NORMAL,e])}if(m(t.attributes.tangent)){const n=Be(dr,r);Wr(Nt,t.transform),sa(n,t.attributes.tangent,Nt),i.push([h.TANGENT,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.TANGENT,e])}if(m(t.attributes.texCoord0)){const n=Be(Oo,r);la(n,t.attributes.texCoord0),i.push([h.UV0,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.UV0,e])}if(m(t.attributes.color)){const n=Be(Je,r);if(t.attributes.color.elementCount===4)t.attributes.color instanceof dr?Qr(n,t.attributes.color,255):t.attributes.color instanceof Je?ca(n,t.attributes.color):t.attributes.color instanceof Qi&&Qr(n,t.attributes.color,1/256);else{da(n,255,255,255,255);const l=new Yr(n.buffer,0,4);t.attributes.color instanceof Qe?Zr(l,t.attributes.color,255):t.attributes.color instanceof Yr?oa(l,t.attributes.color):t.attributes.color instanceof ea&&Zr(l,t.attributes.color,1/256)}i.push([h.COLOR,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.COLOR,e])}return{geometry:new Vo(i,a),vertexCount:r}}const Nt=Wt();function Xl(t){switch(t){case"BLEND":return W.Blend;case"MASK":return W.Mask;case"OPAQUE":case null:case void 0:return W.Opaque}}function Kl(t,e){switch(e){case pt.TRIANGLES:return ma(t);case pt.TRIANGLE_STRIP:return ha(t);case pt.TRIANGLE_FAN:return ua(t)}}function Yl(t,e){for(let r=0;r<t.model.lods.length;++r){const o=t.model.lods[r];for(const i of o.parts){const a=i.attributes.normal;if(k(a))return;const n=i.attributes.position,l=n.count,d=I(),c=I(),u=I(),p=Be(Je,l),f=Be(Qe,l),b=Ui(gr(),i.transform);for(let A=0;A<l;A++){n.getVec(A,c),a.getVec(A,d),_t(c,c,i.transform),Se(u,c,e.center),Xr(u,u,e.radius);const P=u[2],g=xr(u),S=Math.min(.45+.55*g*g,1);Xr(u,u,e.radius),b!==null&&_t(u,u,b),Tr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&cr(u,u,d,P>-1?.2:Math.min(-4*P-3.8,1)),f.setVec(A,u),p.set(A,0,255*S),p.set(A,1,255*S),p.set(A,2,255*S),p.set(A,3,255)}i.attributes.normal=f,i.attributes.color=p}}}const Ed=Object.freeze(Object.defineProperty({__proto__:null,fetch:jl,gltfToEngineResources:Di,parseUrl:Ni},Symbol.toStringTag,{value:"Module"}));export{Al as I,_l as Q,Js as c,il as d,Ed as o};
