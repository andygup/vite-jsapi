import{t as te,M as Se,r as j,i as Pe,E as ie,d as b,a as Ge,C as De,o as qe,b as K,e as re,s as Y,f as We,g as ue,h as Ve,j as je,k as Xe,l as Ke,m as ee,n as Ye,p as ce,q as $e,c as Qe,T as Je,u as Ze,v as et,w as de,x as tt,_ as he,H as it,y as rt,z as st,A as $,B as nt,D as fe,F as ot,G as at}from"./index-a9c4c008.js";import{p as lt,a as ut,d as ct,b as _e,s as dt,h as ht,c as ft,B as _t,T as pt,P as mt,e as gt,m as vt}from"./MagnifierPrograms-c89482f4.js";import{L as Bs,M as Rs}from"./MagnifierPrograms-c89482f4.js";import{i as bt}from"./imageutils-074193df.js";import{A as Tt,R as yt,S as pe,C as me,D as wt}from"./Container-de9ca04e.js";import{B as xt}from"./BufferPool-dcc25426.js";import{W as F,a as H,b as Q}from"./color-314cda1c.js";import{P as Et,V as L,E as W,b as D,a as Bt}from"./WGLContainer-ce35e22a.js";import{S as E}from"./enums-977a0ba8.js";import{S as Rt,c as X}from"./ProgramTemplate-a52cdbf8.js";import{g as k}from"./programUtils-ef69e29a.js";import{V as se,B as ne,F as O,R as Ft}from"./VertexArrayObject-0dfc47a6.js";import{B as g,P as q,U as oe,S as J,C as Ie,T as I,D as ge,a as M,b as A,c as S,d as B,e as ae,R as Ot}from"./enums-08489827.js";import{c as ve,R as Mt}from"./RenderingContext-1c3d9a56.js";import{T as Ct,a as At,A as St,b as Pt,c as Dt,d as G,e as It,H as Ue,f as be}from"./definitions-3f56d206.js";import{V as Te}from"./VertexElementDescriptor-24e04d97.js";import{a as C,T as N}from"./TextureDescriptor-176a7a4b.js";import{c as Ut}from"./imageUtils-42075577.js";import{G as Os}from"./GraphicsView2D-2fc8f638.js";import{G as Cs}from"./GraphicContainer-265efb6d.js";import{r as ye}from"./requestImageUtils-08c2be51.js";import"./_commonjsHelpers-725317a4.js";import"./ExpandedCIM-b662abf2.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./enums-eb6e4255.js";import"./MaterialKey-dd7253d3.js";import"./Rect-df8ea165.js";import"./quantizationUtils-b95043a5.js";import"./floatRGBA-498c3d22.js";import"./rasterizingUtils-200f1103.js";import"./pbf-03b64555.js";import"./GeometryUtils-0ab64fac.js";import"./Matcher-81f57da4.js";import"./visualVariablesUtils-862ca6c0.js";import"./visualVariablesUtils-7a227620.js";import"./tileUtils-fdb57ff2.js";import"./TurboLine-6daee102.js";import"./featureConversionUtils-d43c9f43.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./defaultsJSON-b396ba80.js";import"./earcut-db592379.js";import"./LRUCache-9a513454.js";import"./MemCache-75bedf1f.js";import"./devEnvironmentUtils-e2e22b53.js";import"./styleUtils-514bbf43.js";import"./featureFlags-a86437c8.js";import"./CircularArray-7e036143.js";import"./DisjointTimerQuery-0b864cc8.js";import"./throttle-9d01e8e8.js";import"./ComputedAttributeStorage-533cb852.js";import"./FieldsIndex-58671a99.js";import"./arcadeTimeUtils-27f70e01.js";import"./executionError-e2eca390.js";import"./centroid-1116d1e7.js";import"./diffUtils-abe9f3bb.js";import"./lengthUtils-73ca5ae7.js";import"./sizeVariableUtils-2914222a.js";import"./parser-e1ff8548.js";import"./utils-d96463b8.js";import"./heatmapUtils-dfe044d0.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./NestedMap-d4ac5d57.js";import"./OrderIndependentTransparency-01632ab9.js";import"./basicInterfaces-cc58f4ac.js";import"./doublePrecisionUtils-a59b69fa.js";import"./normalizeUtilsSync-4555589b.js";import"./normalizeUtilsCommon-82ae8352.js";import"./projectionSupport-45f570d1.js";import"./json-9ae8d6f8.js";import"./labelingInfo-0a4a299a.js";import"./labelUtils-d32d5ce0.js";import"./jsonUtils-b329e9d4.js";import"./AttributeStoreView-b0531df0.js";import"./TiledDisplayObject-25e69620.js";import"./schemaUtils-7534e523.js";import"./sql-4d7dca2e.js";import"./clusterUtils-223e1cf4.js";import"./SizeVariable-21c037cb.js";import"./colorRamps-a8ae4226.js";import"./LegendOptions-2499ed1a.js";import"./util-8d25177b.js";import"./normalizeUtils-e3f4b3bd.js";import"./BaseGraphicContainer-2fd6522d.js";import"./FeatureContainer-f33fb2ab.js";import"./TileContainer-b741fbff.js";import"./vec3f32-ec4c3c20.js";async function zt(a,e){const t=lt(a);if(t instanceof Error)throw t;await t.createImages(),te(e);const{frames:i,width:r,height:n}=t,s=document.createElement("canvas");s.width=r,s.height=n;const o=s.getContext("2d",{willReadFrequently:!0}),l=[],d=[];for(const u of i){d.push(Se(u.delay||100));const h=u.imageElement;u.blendOp===0?o.globalCompositeOperation="copy":o.globalCompositeOperation="source-over";const p=u.disposeOp===2?o.getImageData(u.left,u.top,u.width,u.height):void 0;o.drawImage(h,u.left,u.top);const _=o.getImageData(0,0,r,n);l.push(_),u.disposeOp===0||(u.disposeOp===1?o.clearRect(u.left,u.top,u.width,u.height):u.disposeOp===2&&o.putImageData(p,u.left,u.top))}return{frameDurations:d,getFrame:u=>l[u],width:r,height:n}}const Nt=[137,80,78,71,13,10,26,10];function kt(a){const e=new Uint8Array(a);return!Nt.some((t,i)=>t!==e[i])}function Lt(a){if(!kt(a))return!1;const e=new DataView(a),t=new Uint8Array(a);let i=8,r;do{const n=e.getUint32(i);if(r=String.fromCharCode.apply(String,Array.prototype.slice.call(t.subarray(i+4,i+8))),r==="acTL")return!0;i+=12+n}while(r!=="IEND"&&i<t.length);return!1}async function Ht(a,e){const t=ut(a),i=ct(t,!0),{width:r,height:n}=t.lsd,s=document.createElement("canvas");s.width=r,s.height=n;const o=s.getContext("2d",{willReadFrequently:!0}),l=[],d=[];for(const u of i){d.push(Se(u.delay||100));const h=new ImageData(u.patch,u.dims.width,u.dims.height),p=bt(h),_=u.disposalType===3?o.getImageData(u.dims.left,u.dims.top,u.dims.width,u.dims.height):void 0;o.drawImage(p,u.dims.left,u.dims.top);const m=o.getImageData(0,0,r,n);l.push(m),u.disposalType===1||(u.disposalType===2?o.clearRect(u.dims.left,u.dims.top,u.dims.width,u.dims.height):u.disposalType===3&&o.putImageData(_,u.dims.left,u.dims.top))}return{frameDurations:d,getFrame:u=>l[u],width:r,height:n}}const Gt=[71,73,70];function qt(a){const e=new Uint8Array(a);return!Gt.some((t,i)=>t!==e[i])}function Wt(a){if(!qt(a))return!1;const e=new DataView(a),t=e.getUint8(6+7-3),r=t&128?3*2**((t&7)+1):0;let n=6+7+r,s=0,o=!1;for(;!o;){switch(e.getUint8(n++)){case 33:{if(!l())return!1;break}case 44:{d();break}case 59:{o=!0;break}default:return!1}if(s>1)return!0}function l(){switch(e.getUint8(n++)){case 249:{c();break}case 1:{u();break}case 254:{h();break}case 255:{p();break}default:return!1}return!0}function d(){s++,n+=8;const m=e.getUint8(n++),v=m&128?3*2**((m&7)+1):0;n+=v,n++,_()}function c(){n++,n+=4,_()}function u(){s++,n++,n+=12,_()}function h(){_()}function p(){n++,n+=8,n+=3,_()}function _(){let m;for(;m=e.getUint8(n++);)n+=m}return!1}class Vt{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let r=this._inFlightResourceMap.get(e);return r?r.then(n=>({width:n.width,height:n.height})):(r=Xt(e,t),this._inFlightResourceMap.set(e,r),r.then(n=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,n),{width:n.width,height:n.height}),()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}async function jt(a,e){const t=window.URL.createObjectURL(a);try{const{data:i}=await j(t,{...e,responseType:"image"});return i}catch(i){throw Pe(i)?i:new ie("mapview-invalid-resource",`Could not fetch requested resource at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function Xt(a,e){const{arrayBuffer:t,mediaType:i}=await Kt(a,e),r=i==="image/gif",n=i==="image/png";if(r&&Wt(t))return Ht(t);if(n&&Lt(t))return zt(t,e);const s=new Blob([t],{type:i});return jt(s,e)}async function Kt(a,e){let t;const i=";base64,";if(a.includes(i)){const r=a.indexOf(i),n=a.indexOf(i)+i.length,s=a.substring(n),o=atob(s),l=new Uint8Array(o.length);for(let u=0;u<o.length;u++)l[u]=o.charCodeAt(u);const d=l.buffer,c=a.substring(0,r).replace("data:","");t={arrayBuffer:d,mediaType:c}}else try{const r=await j(a,{responseType:"array-buffer",...e}),n=r.data,s=r.getHeader("Content-Type");t={arrayBuffer:n,mediaType:s}}catch(r){if(!Pe(r))throw new ie("mapview-invalid-resource",`Could not fetch requested resource at ${a}`)}return t}const Yt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function $t(a){let e=Yt;return a.split("/").forEach(t=>{e&&(e=e[t])}),e}const Qt=new Rt($t);function R(a){return Qt.resolveIncludes(a)}const we=a=>k({ID:a.id,PATTERN:a.pattern}),Jt={shaders:a=>({vertexShader:we(a)+R("background/background.vert"),fragmentShader:we(a)+R("background/background.frag")})},xe=a=>k({ID:a.id}),Zt={shaders:a=>({vertexShader:xe(a)+R("circle/circle.vert"),fragmentShader:xe(a)+R("circle/circle.frag")})},Ee=a=>k({ID:a.id,PATTERN:a.pattern}),ei={shaders:a=>({vertexShader:Ee(a)+R("fill/fill.vert"),fragmentShader:Ee(a)+R("fill/fill.frag")})},Be=a=>k({ID:a.id}),ti={shaders:a=>({vertexShader:Be(a)+R("outline/outline.vert"),fragmentShader:Be(a)+R("outline/outline.frag")})},Re=a=>k({ID:a.id,SDF:a.sdf}),ii={shaders:a=>({vertexShader:Re(a)+R("icon/icon.vert"),fragmentShader:Re(a)+R("icon/icon.frag")})},Fe=a=>k({ID:a.id,PATTERN:a.pattern,SDF:a.sdf}),ri={shaders:a=>({vertexShader:Fe(a)+R("line/line.vert"),fragmentShader:Fe(a)+R("line/line.frag")})},Oe=a=>k({ID:a.id}),si={shaders:a=>({vertexShader:Oe(a)+R("text/text.vert"),fragmentShader:Oe(a)+R("text/text.frag")})};class ni{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const r=t.key<<3|this._getMaterialOptionsValue(t.type,i);if(this._programByKey.has(r))return this._programByKey.get(r);const n=this._getProgramTemplate(t.type),{shaders:s}=n,{vertexShader:o,fragmentShader:l}=s(i),d=t.getShaderHeader(),c=t.getShaderMain(),u=o.replace("#pragma header",d).replace("#pragma main",c),h=e.programCache.acquire(u,l,t.getAttributeLocations());return this._programByKey.set(r,h),h}_getMaterialOptionsValue(e,t){switch(e){case E.BACKGROUND:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case E.FILL:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case E.OUTLINE:return t.id?1:0;case E.LINE:{const i=t;return(i.sdf?1:0)<<2|(i.pattern?1:0)<<1|(i.id?1:0)}case E.ICON:{const i=t;return(i.sdf?1:0)<<1|(i.id?1:0)}case E.CIRCLE:return t.id?1:0;case E.TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case E.BACKGROUND:return Jt;case E.CIRCLE:return Zt;case E.FILL:return ei;case E.ICON:return ii;case E.LINE:return ri;case E.OUTLINE:return ti;case E.TEXT:return si;default:return null}}}class ze{constructor(){this._initialized=!1}dispose(){this._program=b(this._program),this._vertexArrayObject=b(this._vertexArrayObject)}render(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(g.ONE,g.ONE_MINUS_SRC_ALPHA,g.ONE,g.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(q.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=X(e,_e);if(!t)return!1;const i=new Int8Array(16);i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1;const r=_e.attributes,n=new se(e,r,Et,{geometry:ne.createVertex(e,oe.STATIC_DRAW,i)});return this._program=t,this._vertexArrayObject=n,this._initialized=!0,!0}}const Ne=a=>a===F.HITTEST||a===F.LABEL_ALPHA,oi=a=>(Ne(a)?1:0)|(a===F.HIGHLIGHT?2:0),ai=({rendererInfo:a,drawPhase:e},t,i)=>`${t.getVariationHash()}-${oi(e)}-${a.getVariationHash()}-${i!=null&&i.join(".")}`,li=(a,e,t,i={})=>{if(i={...i,...e.getVariation(),...a.rendererInfo.getVariation(),highlight:a.drawPhase===F.HIGHLIGHT,id:Ne(a.drawPhase)},t!=null)for(const r of t)i[r]=!0;return i};class ui{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t);if(this._programByKey.has(i))return this._programByKey.get(i);const r={...t.map(c=>typeof c=="string"?{name:c,value:!0}:c).reduce((c,u)=>({...c,[u.name]:u.value}),{})},{vsPath:n,fsPath:s,attributes:o}=e,l=ve(n,s,o,r),d=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!d)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,d),d}getMaterialProgram(e,t,i,r,n){const s=ai(e,t,n);if(this._programByKey.has(s))return this._programByKey.get(s);const o=li(e,t,n,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),l=ve(i,i,r,o),d=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!d)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,d),d}}class ci{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=Ge(),r=e,n=At,s=Math.ceil(r.height/n);if(te(t),this._context.type===De.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t});else for(let o=0;o<s;o++){const l=o*n,d=o===s-1,c=d?r.height-n*o:n;this._queue.push({type:"chunk",request:e,resolver:i,chunk:o,chunkOffset:l,destHeight:c,chunkIsLast:d,options:t})}return qe(t,o=>i.reject(o)),i.promise}upload(){let e=0;for(;this._queue.length;){const t=performance.now(),i=this._queue.shift();if(i){if(i.options.signal!=null&&i.options.signal.aborted)continue;switch(i.type){case"chunk":this._uploadChunk(i);break;case"no-chunk":this._uploadNoChunk(i);break}const r=performance.now()-t;if(e+=r,e+r>=Ct)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:r,chunkIsLast:n,destHeight:s}=e,{data:o,texture:l,width:d}=t;o!=null&&(l.updateData(0,0,r,d,s,o,r),n&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:r,texture:n}=t;n.setData(r),i.resolve()}}const di=Xe(-.5,-.5);class hi{constructor(){this._centerNdc=K(),this._pxToNdc=K(),this._worldDimensionsPx=K(),this._mat3=re(),this._initialized=!1}dispose(){this._program=b(this._program),this._quad=b(this._quad)}render(e,t){const{context:i}=e;return this._updateGeometry(e,t)?(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(J.KEEP,J.KEEP,J.REPLACE),i.setStencilFunction(Ie.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0):!1}_initialize(e){if(this._initialized)return;const t=X(e,dt);t&&(this._program=t,this._quad=new L(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:r}=e,{size:n,rotation:s}=i,o=Math.round(n[0]*r),l=Math.round(n[1]*r);if(!i.spatialReference.isWrappable)return!1;const d=Ke(s),c=Math.abs(Math.cos(d)),u=Math.abs(Math.sin(d)),h=Math.round(o*c+l*u),p=Math.round(i.worldScreenWidth);if(h<=p)return!1;const _=o*u+l*c,m=p*r,T=(t.left-t.right)*r/o,v=(t.bottom-t.top)*r/l;Y(this._worldDimensionsPx,m,_,1),Y(this._pxToNdc,2/o,-2/l,1),Y(this._centerNdc,T,v,1);const f=this._mat3;return We(f,this._centerNdc),ue(f,f,this._pxToNdc),s!==0&&Ve(f,f,d),ue(f,f,this._worldDimensionsPx),je(f,f,di),!0}}class fi extends W{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!(t!=null&&t.size))return;const{context:i,renderingOptions:r}=e;this._quad||(this._quad=new L(i,[0,0,1,0,0,1,1,1]));const n=i.getBoundFramebufferObject(),{x:s,y:o,width:l,height:d}=i.getViewport();t.bindTextures(i);const c=t.getBlock(St);if(c==null)return;const u=c.getFBO(i),h=c.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,h,r.labelsAnimationTime),this._updateAnimationState(e,h,u),i.bindFramebuffer(n),i.setViewport(s,o,l,d)}_computeDelta(e,t,i){const{context:r,painter:n,displayLevel:s}=e,o=n.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(o);const l=ee("featurelayer-animation-enabled")?i:1;o.setUniform1i("u_maskTexture",Pt),o.setUniform1i("u_sourceTexture",Dt),o.setUniform1f("u_timeDelta",e.deltaTime),o.setUniform1f("u_animationTime",l),o.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:n}=e,s=n.materialManager.getProgram(this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.useProgram(s),s.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}}class Me extends W{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:i,height:r}=e.getViewport(),n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:r}=e,n=r.getPostProcessingEffects(t),s=i.getBoundFramebufferObject();for(const{postProcessingEffect:o,effect:l}of n)o.draw(e,s,l);i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),r.blitTexture(i,s.colorTexture,I.NEAREST),i.setStencilTestEnabled(!0)}}class _i{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,G),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",Tt),e.bindVAO(this._resources.quadVAO),e.drawArrays(q.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,G),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",yt),e.bindVAO(this._resources.quadVAO),e.drawArrays(q.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,G),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),e.drawArrays(q.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i;const r=ne.createVertex(e,oe.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),n=new se(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new Te("a_position",2,ge.BYTE,0,4),new Te("a_texcoord",2,ge.UNSIGNED_BYTE,2,4)]},{geometry:r}),s=X(e,ht),o=X(e,ft);e.useProgram(s),s.setUniform1i("u_texture",G),s.setUniform1i("u_shade",It),s.setUniform1f("u_sigma",pe),e.useProgram(o),o.setUniform1i("u_texture",G),o.setUniform1f("u_sigma",pe),this._resources={quadGeometry:r,quadVAO:n,highlightProgram:s,blurProgram:o}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}}function Ce(a,e,t){const i=new C;i.wrapMode=M.CLAMP_TO_EDGE,i.width=e,i.height=t;const r=new N(a,i),n=new O(a,{colorTarget:A.TEXTURE,depthStencilTarget:S.STENCIL_RENDER_BUFFER},r);return[r,n]}class pi{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=Ye(this._resources))}_initialize(e,t,i){this._width=t,this._height=i;const[r,n]=Ce(e,t,i),[s,o]=Ce(e,t,i);this._resources={sharedBlur1Tex:r,sharedBlur1Fbo:n,sharedBlur2Tex:s,sharedBlur2Fbo:o}}setup(e,t,i){this._resources&&(this._width!==t||this._height!==i)&&this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}const mi=4,z=4,V=mi/z;class gi extends W{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new _i,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new pi,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new ze}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:r,height:n}=t.getViewport(),s=i.getFbos(r,n).effect0;this.setup(e,r,n),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const r=t%z,n=i%z;t+=r<z/2?-r:z-r,i+=n<z/2?-n:z-n,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*V),o=Math.round(i*V);this._hlRenderer.setup(e,s,o),this._hlSurfaces.setup(e,s,o)}draw(e){const{context:t,highlightGradient:i}=e;if(!i)return;const r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*V,this._adjustedHeight*V),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,I.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}}class vi extends W{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){this._fbo!=null&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=Ue){if(!t.length)return null;const r=t.shift(),n=r.x,s=r.y;return this._outstanding=r,{type:"hittest",distance:i*e,position:[n,s]}}bind(e){const{context:t,attributeView:i}=e;if(!i.size)return;const r=i.getBlock(be);if(r==null)return;const n=r.getFBO(t);t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(n),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(this._outstanding==null)return;const t=this._outstanding;this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:r}=e,n=r.getBlock(be);if(n==null){t.forEach(c=>c.resolve([]));return}const s=n.getFBO(i),o=new Uint8Array(s.width*s.height*4);try{await s.readPixelsAsync(0,0,s.width,s.height,B.RGBA,ae.UNSIGNED_BYTE,o)}catch{t.forEach(u=>u.resolve([]));return}const l=[];for(let c=0;c<o.length;c+=4){const u=o[c],h=o[c+3];u&&l.push({id:c/4,directHits:h})}l.sort((c,u)=>u.directHits===c.directHits?u.id-c.id:u.directHits-c.directHits);const d=l.map(c=>c.id);t.forEach(c=>c.resolve(d))}}class bi extends W{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){this._fbo!=null&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:r}=e.getViewport();this._boundFBO=e.getBoundFramebufferObject();const n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=Ue*2){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},r,n){const s=e.getBoundFramebufferObject(),o=t.size[1]*i,l=Math.round(n*i),d=l/2,c=l/2;this._ensureBuffer(l),r.forEach(async(u,h)=>{const p=new Map,_=Math.floor(h.x*i-l/2),m=Math.floor(o-h.y*i-l/2);await s.readPixelsAsync(_,m,l,l,B.RGBA,ae.UNSIGNED_BYTE,this._buf);for(let v=0;v<this._buf32.length;v++){const f=this._buf32[v];if(f!==4294967295&&f!==0){const P=v%l,y=l-Math.floor(v/l),w=(d-P)*(d-P)+(c-y)*(c-y),x=p.has(f)?p.get(f):4294967295;p.set(f,Math.min(w,x))}}const T=Array.from(p).sort((v,f)=>v[1]-f[1]).map(v=>v[0]);u.resolve(T),r.delete(h)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}}const Z=5,Ti=[1,0],yi=[0,1],wi=[1,.8,.6,.4,.2],xi=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class Ei{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(Z),this._nMips=Z,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=b(this._quad),this._intensityFBO=b(this._intensityFBO),this._compositeFBO=b(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,i){const{width:r,height:n}=t,{context:s,painter:o}=e,{materialManager:l}=o,d=s.gl,c=this._programDesc,{strength:u,radius:h,threshold:p}=i;this._quad||(this._quad=new L(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,r,n),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const _=this._quad;_.bind(),s.bindFramebuffer(this._intensityFBO);const m=l.getProgram(c.luminosityHighPass);s.useProgram(m),s.bindTexture(t.colorTexture,0),m.setUniform1i("u_texture",0),m.setUniform3fv("u_defaultColor",[0,0,0]),m.setUniform1f("u_defaultOpacity",0),m.setUniform1f("u_luminosityThreshold",p),m.setUniform1f("u_smoothWidth",.01);const T=[Math.round(r/2),Math.round(n/2)];s.setViewport(0,0,T[0],T[1]),s.setClearColor(0,0,0,0),s.clear(d.COLOR_BUFFER_BIT),_.draw(),s.setBlendingEnabled(!1);let v=this._intensityFBO.colorTexture;for(let y=0;y<this._nMips;y++){const w=l.getProgram(c.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[y]}]);s.useProgram(w),s.bindTexture(v,y+1),w.setUniform1i("u_colorTexture",y+1),w.setUniform2fv("u_texSize",T),w.setUniform2fv("u_direction",Ti),s.setViewport(0,0,T[0],T[1]);const x=this._mipsFBOs[y];s.bindFramebuffer(x.horizontal),_.draw(),v=x.horizontal.colorTexture,s.bindFramebuffer(x.vertical),s.bindTexture(v,y+1),w.setUniform2fv("u_direction",yi),_.draw(),v=x.vertical.colorTexture,T[0]=Math.round(T[0]/2),T[1]=Math.round(T[1]/2)}s.setViewport(0,0,r,n);const f=l.getProgram(c.composite,[{name:"nummips",value:Z}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(f),f.setUniform1f("u_bloomStrength",u),f.setUniform1f("u_bloomRadius",h),f.setUniform1fv("u_bloomFactors",wi),f.setUniform3fv("u_bloomTintColors",xi),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),f.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),f.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),f.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),f.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),f.setUniform1i("u_blurTexture5",5),_.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const P=l.getProgram(c.blit);s.useProgram(P),s.bindTexture(this._compositeFBO.colorTexture,6),P.setUniform1i("u_texture",6),s.setBlendFunction(g.ONE,g.ONE),_.draw(),_.unbind(),s.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:r}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return;this._size[0]=t,this._size[1]=i;const n=[Math.round(t/2),Math.round(i/2)];if(this._compositeFBO?this._compositeFBO.resize(t,i):this._compositeFBO=new O(r,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:t,height:i}),this._intensityFBO)this._intensityFBO.resize(n[0],n[1]);else{const s=new C;s.internalFormat=B.RGBA,s.wrapMode=M.CLAMP_TO_EDGE,s.width=n[0],s.height=n[1],this._intensityFBO=new O(r,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:n[0],height:n[1]},s)}for(let s=0;s<this._nMips;s++){if(this._mipsFBOs[s])this._mipsFBOs[s].horizontal.resize(n[0],n[1]),this._mipsFBOs[s].vertical.resize(n[0],n[1]);else{const o=new C;o.internalFormat=B.RGBA,o.wrapMode=M.CLAMP_TO_EDGE,o.width=n[0],o.height=n[1],this._mipsFBOs[s]={horizontal:new O(r,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:n[0],height:n[1]},o),vertical:new O(r,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:n[0],height:n[1]},o)}}n[0]=Math.round(n[0]/2),n[1]=Math.round(n[1]/2)}}}const Bi=[1,0],Ri=[0,1];class Fi{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:r}=e,{type:n,radius:s}=i;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new L(r,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),n==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),o.unbind()}_gaussianBlur(e,t,i){const{context:r,state:n,painter:s,pixelRatio:o}=e,{size:l}=n,{materialManager:d}=s,c=this._programDesc,u=this._quad,h=[Math.round(o*l[0]),Math.round(o*l[1])],p=this._blurFBO,_=d.getProgram(c.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(_),r.setBlendingEnabled(!1),r.bindFramebuffer(p),r.bindTexture(t.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",Bi),_.setUniform1f("u_sigma",i),u.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(p==null?void 0:p.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",Ri),u.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:r}=e,{materialManager:n}=r,s=this._programDesc,o=this._quad,l=this._blurFBO;i.bindFramebuffer(l);const d=n.getProgram(s.radialBlur);i.useProgram(d),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),d.setUniform1i("u_colorTexture",4),o.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const c=n.getProgram(s.blit);i.useProgram(c),i.bindTexture(l==null?void 0:l.colorTexture,5),c.setUniform1i("u_texture",5),i.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),o.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:r}=e,{size:n}=i,s=Math.round(r*n[0]),o=Math.round(r*n[1]);if(!(this._blurFBO&&this._size[0]===s&&this._size[1]===o))if(this._size[0]=s,this._size[1]=o,this._blurFBO)this._blurFBO.resize(s,o);else{const l=new C;l.internalFormat=B.RGBA,l.wrapMode=M.CLAMP_TO_EDGE,l.width=s,l.height=o,this._blurFBO=new O(t,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:s,height:o},l)}}}class Oi{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=b(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:o}=e,{materialManager:l}=o,d=this._programDesc,c=this._quad,u=i.colorMatrix;c.bind();const h=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,h),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const p=l.getProgram(d);s.useProgram(p),s.bindTexture(h,2),p.setUniformMatrix4fv("u_coefficients",u),p.setUniform1i("u_colorTexture",2),c.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(e,t,i){const{context:r}=e;if(!(this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i)){if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new C;n.internalFormat=B.RGBA,n.wrapMode=M.CLAMP_TO_EDGE,n.width=t,n.height=i,this._layerFBOTexture=new N(r,n)}this._quad||(this._quad=new L(r,[-1,-1,1,-1,-1,1,1,1]))}}}const Mi=[1,0],Ci=[0,1];class Ai{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=b(this._layerFBOTexture),this._horizontalBlurFBO=b(this._horizontalBlurFBO),this._verticalBlurFBO=b(this._verticalBlurFBO)}draw(e,t,i){const{context:r,state:n,painter:s}=e,{materialManager:o}=s,l=this._programDesc,d=t.width,c=t.height,u=[Math.round(d),Math.round(c)],{blurRadius:h,offsetX:p,offsetY:_,color:m}=i,T=[ce(p),ce(_)];this._createOrResizeResources(e,d,c,u);const v=this._horizontalBlurFBO,f=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);const P=this._layerFBOTexture;t.copyToTexture(0,0,d,c,0,0,P),this._quad||(this._quad=new L(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,u[0],u[1]);const y=this._quad;y.bind(),r.setBlendingEnabled(!1);const w=o.getProgram(l.blur,[{name:"radius",value:Math.ceil(h)}]);r.useProgram(w),r.bindFramebuffer(v),r.bindTexture(t.colorTexture,4),w.setUniform1i("u_colorTexture",4),w.setUniform2fv("u_texSize",u),w.setUniform2fv("u_direction",Mi),w.setUniform1f("u_sigma",h),y.draw(),r.bindFramebuffer(f),r.bindTexture(v==null?void 0:v.colorTexture,5),w.setUniform1i("u_colorTexture",5),w.setUniform2fv("u_direction",Ci),y.draw(),r.bindFramebuffer(t),r.setViewport(0,0,d,c);const x=o.getProgram(l.composite);r.useProgram(x),r.bindTexture(f==null?void 0:f.colorTexture,2),x.setUniform1i("u_blurTexture",2),r.bindTexture(P,3),x.setUniform1i("u_layerFBOTexture",3),x.setUniform4fv("u_shadowColor",[m[3]*(m[0]/255),m[3]*(m[1]/255),m[3]*(m[2]/255),m[3]]),x.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),x.setUniform2fv("u_shadowOffset",T),y.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(g.ONE,g.ONE_MINUS_SRC_ALPHA),y.unbind()}_createOrResizeResources(e,t,i,r){const{context:n}=e;if(!(this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===i)){if(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO)this._horizontalBlurFBO.resize(r[0],r[1]);else{const s=new C;s.internalFormat=B.RGBA,s.wrapMode=M.CLAMP_TO_EDGE,s.width=r[0],s.height=r[1],this._horizontalBlurFBO=new O(n,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:r[0],height:r[1]},s)}if(this._verticalBlurFBO)this._verticalBlurFBO.resize(r[0],r[1]);else{const s=new C;s.internalFormat=B.RGBA,s.wrapMode=M.CLAMP_TO_EDGE,s.width=r[0],s.height=r[1],this._verticalBlurFBO=new O(n,{colorTarget:A.TEXTURE,depthStencilTarget:S.NONE,width:r[0],height:r[1]},s)}if(this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const s=new C;s.internalFormat=B.RGBA,s.wrapMode=M.CLAMP_TO_EDGE,s.width=t,s.height=i,this._layerFBOTexture=new N(n,s)}}}}class Si{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=b(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:o}=e,{amount:l}=i,d=s.gl,c=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,c),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(d.COLOR_BUFFER_BIT),o.blitTexture(s,c,I.NEAREST,l)}_createOrResizeResources(e,t,i){const{context:r}=e;if(!(this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i))if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new C;n.internalFormat=B.RGBA,n.wrapMode=M.CLAMP_TO_EDGE,n.samplingMode=I.NEAREST,n.width=t,n.height=i,this._layerFBOTexture=new N(r,n)}}}function Pi(a){switch(a){case"bloom":case"blur":case"opacity":case"drop-shadow":return a;default:return"colorize"}}const Di={colorize:()=>new Oi,blur:()=>new Fi,bloom:()=>new Ei,opacity:()=>new Si,"drop-shadow":()=>new Ai};class Ii{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const i of e){const r=Pi(i.type);let n=this._effectMap.get(r);n?t.push({postProcessingEffect:n,effect:i}):(n=Di[r](),this._effectMap.set(r,n),t.push({postProcessingEffect:n,effect:i}))}return t}}class Ui{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||F.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0)}render(e){const{context:t,profiler:i}=e,r=this._targetFn(),n=this.drawPhase&e.drawPhase;if(i.recordPassStart(this.name),!!n){this.enableDefaultDraw()&&this._doRender(e,r),i.recordPassEnd();for(const s of this.effects){if(!s.enable())continue;const o=s.apply,l=s.args&&s.args(),d=t.getViewport(),c=t.getBoundFramebufferObject(),u=e.passOptions;this._bindEffect(e,o,l),this._doRender(e,r,o.defines),this._drawAndUnbindEffect(e,o,d,c,u,l)}}}_doRender(e,t,i){if(t==null)return;const{profiler:r,context:n}=e;for(const s of this.brushes){if(r.recordBrushStart(s.name),s.brushEffect!=null){const o=n.getViewport(),l=n.getBoundFramebufferObject(),d=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,o,l,d)}else this._drawWithBrush(s,e,t,i);r.recordBrushEnd()}}_drawWithBrush(e,t,i,r){$e(i)?(e.prepareState(t,r),e.drawMany(t,i,r)):i.visible&&(e.prepareState(t,r),e.draw(t,i,r))}_bindEffect(e,t,i){const{profiler:r}=e;r.recordPassStart(this.name+"."+t.name),t.bind(e,i);const n=t.createOptions(e,i);e.passOptions=n}_drawAndUnbindEffect(e,t,i,r,n,s){const{profiler:o,context:l}=e;e.passOptions=n,o.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),l.bindFramebuffer(r);const{x:d,y:c,width:u,height:h}=i;l.setViewport(d,c,u,h),o.recordBrushEnd(),o.recordPassEnd()}}function zi(a,e){switch(a){case H.LINE:return D.line;case H.TEXT:return D.text;case H.LABEL:return D.label;case H.FILL:switch(e){case Q.DOT_DENSITY:return D.dotDensity;default:return D.fill}case H.MARKER:switch(e){case Q.HEATMAP:return D.heatmap;case Q.PIE_CHART:return D.pieChart;default:return D.marker}}}class Ni{constructor(e,t,i){this.context=e,this._blitRenderer=new ze,this._worldExtentClipRenderer=new hi,this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new ni,this._blendEffect=new _t,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new gi,hittest:new vi,hittestVTL:new bi,integrate:new fi,insideEffect:new Me("inside"),outsideEffect:new Me("outside")},this.materialManager=new ui(e),this.textureManager=new pt(t,i,e.type===De.WEBGL2),this.textureUploadManager=new ci(e,t),this._effectsManager=new Ii}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){let s;for(s in this._fbos)this._fbos[s].resize(e,t);return this._fbos}const i=new C;i.samplingMode=I.NEAREST,i.wrapMode=M.CLAMP_TO_EDGE,i.width=e,i.height=t;const r={colorTarget:A.TEXTURE,depthStencilTarget:S.DEPTH_STENCIL_RENDER_BUFFER},n=new Ft(this.context,{width:e,height:t,internalFormat:Ot.DEPTH_STENCIL});this._stencilBuf=n,this._fbos={output:new O(this.context,r,i,n),blend:new O(this.context,r,i,n),effect0:new O(this.context,r,i,n)}}return this._fbos}acquireFbo(e,t){let i;if(this._fboPool.length>0)i=this._fboPool.pop();else{const n=new C;n.samplingMode=I.NEAREST,n.wrapMode=M.CLAMP_TO_EDGE,n.width=e,n.height=t,i=new O(this.context,{colorTarget:A.TEXTURE,depthStencilTarget:S.DEPTH_STENCIL_RENDER_BUFFER},n,this._stencilBuf)}const r=i.descriptor;return(r.width!==e||r.height!==t)&&i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:r}=e.getViewport();this._prevFBO=e.getBoundFramebufferObject();const n=this.getFbos(i,r);if(e.bindFramebuffer(n==null?void 0:n.output),e.setColorMask(!0,!0,!0,!0),t!=null){const{r:s,g:o,b:l,a:d}=t.color;e.setClearColor(d*s/255,d*o/255,d*l/255,d)}else e.setClearColor(0,0,0,0);e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){var d;const{context:r,blendMode:n,effects:s,requireFBO:o,drawPhase:l}=e;if(o||Ae(l,n,s,i))r.bindFramebuffer((d=this._fbos)==null?void 0:d.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const c=this._getOutputFBO();r.bindFramebuffer(c)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:r,effects:n,requireFBO:s,drawPhase:o}=e;if(s||Ae(o,r,n,t)){n!=null&&n.length>0&&o===F.MAP&&this._applyEffects(e,n);const l=this._getOutputFBO();i.bindFramebuffer(l),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(g.ONE,g.ONE_MINUS_SRC_ALPHA,g.ONE,g.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const d=r==null||o===F.HIGHLIGHT?"normal":r,c=this._fbos;c!=null&&c.blend.colorTexture&&this._blendEffect.draw(e,c.blend.colorTexture,I.NEAREST,d,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO);const t=this._getOutputFBO();t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(Ie.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,I.NEAREST))}prepareDisplay(e,t,i){const{context:r}=e;if(r.bindFramebuffer(this._prevFBO),r.setColorMask(!0,!0,!0,!0),t!=null){const{r:n,g:s,b:o,a:l}=t.color;r.setClearColor(l*n/255,l*s/255,l*o/255,l)}else r.setClearColor(0,0,0,0);r.setStencilWriteMask(255),r.setClearStencil(0),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,i)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=b(this._blitRenderer),this._worldExtentClipRenderer=b(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos){let e;for(e in this._fbos)this._fbos[e]&&this._fbos[e].dispose()}for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects){let e;for(e in this.effects)this.effects[e]&&this.effects[e].dispose()}this._effectsManager.dispose(),this._vtlMaterialManager=b(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const i=zi(e,t);let r=this._brushCache.get(i);return r===void 0&&(r=new i,this._brushCache.set(i,r)),r}renderObject(e,t,i,r){const n=D[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.prepareState(e,r),s.draw(e,t,r)}renderObjects(e,t,i,r){const n=D[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map(i=>(this._brushCache.has(i)||this._brushCache.set(i,new i),this._brushCache.get(i)));return new Ui(t,e)}blitTexture(e,t,i,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(g.ONE,g.ONE_MINUS_SRC_ALPHA,g.ONE,g.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e;return this._renderTarget!=null?this._renderTarget:((e=this._fbos)==null?void 0:e.output)??null}_applyEffects(e,t){var s;const i=(s=this._fbos)==null?void 0:s.blend;if(!i)return;const{context:r}=e,n=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:o,effect:l}of n)r.bindFramebuffer(i),o.draw(e,i,l)}}function Ae(a,e,t,i){return a!==F.HIGHLIGHT&&(i!==1||e!=null&&e!=="normal"||t!=null&&t.length>0)}const ki=2e3;class ys extends me{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:i=document.createElement("canvas"),alpha:r=!0,stencil:n=!0,contextOptions:s={}}=t;this._canvas=i;const l=Qe("2d",i,{alpha:r,antialias:!1,depth:!0,stencil:n});this.context=new Mt(l??null,s),this.resourceManager=new Vt,this.painter=new Ni(this.context,this,this.resourceManager),ee("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const d=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Je,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new mt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return d()}},this._taskHandle=Ze({render:c=>this.renderFrame(c)}),this._taskHandle.pause(),this._lostWebGLContextHandle=et(i,"webglcontextlost",c=>{this.emit("webgl-error",{error:new ie("webgl-context-lost",c.statusMessage)})}),this._bufferPool=new xt,i.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(i)}destroy(){var e,t,i;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=de(this._taskHandle),this._lostWebGLContextHandle=de(this._lostWebGLContextHandle),(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),(i=(t=this._debugOutput)==null?void 0:t.parentNode)==null||i.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=ki,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:re()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context;this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=F.MAP,this.painter.beforeRenderLayers(i,this.background);for(const n of e)n.processRender(t);this.painter.prepareDisplay(t,this.background,this.state.padding),this.painter.renderLayers(i),t.drawPhase=F.HIGHLIGHT,this.painter.beforeRenderLayers(i);for(const n of e)n.processRender(t);if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=F.LABEL,this.painter.beforeRenderLayers(i);for(const n of e)n.processRender(t);this.painter.renderLayers(i)}if(ee("esri-tiles-debug")){t.drawPhase=F.DEBUG,this.painter.beforeRenderLayers(i);for(const n of e)n.processRender(t);this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._resizeCanvas(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:i}={framebufferWidth:Math.round(this.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this.state.size[1]*e.resolutionScale)},r=e.resolutionScale,n=this.context,s=this._state.clone();if(e.rotation!=null){const _=s.viewpoint;s.viewpoint.rotation=e.rotation,s.viewpoint=_}const o={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:r,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},l=new O(n,{colorTarget:A.TEXTURE,depthStencilTarget:S.DEPTH_STENCIL_RENDER_BUFFER,width:t,height:i}),d=n.getBoundFramebufferObject(),c=n.getViewport();n.bindFramebuffer(l),n.setViewport(0,0,t,i),this._renderChildren(e.children,o);const u=this._readbackScreenshot(l,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)});n.bindFramebuffer(d),n.setViewport(c.x,c.y,c.width,c.height),this.requestRender();const h=await u;let p;return e.outputScale===1?p=h:(p=new ImageData(Math.round(h.width*e.outputScale),Math.round(h.height*e.outputScale)),tt(h,p,!0)),p}async _readbackScreenshot(e,t){const i=Ut(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,B.RGBA,ae.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:n}=e,s=r[0],o=r[1],l=Math.round(s*n),d=Math.round(o*n);(t.width!==l||t.height!==d)&&(t.width=l,t.height=d),i.width=s+"px",i.height=o+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof me)){t=t||!1;break}if("hasLabels"in i&&i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}async function Li(a){const e=he(()=>import("./mask-svg-023bbc42.js"),[]),t=he(()=>import("./overlay-svg-d62383f3.js"),[]),i=ye((await e).default,{signal:a}),r=ye((await t).default,{signal:a}),n={mask:await i,overlay:await r};return te(a),n}class ws extends wt{constructor(){super(),this._handles=new it,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=rt(this._handles),this._disposeRenderResources(),this._resourcesTask=st(this._resourcesTask)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([$(()=>e.version,()=>{this.visible=e.visible&&e.position!=null&&e.size>0,this.requestRender()},nt),$(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),$(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:re()}}doRender(e){var le;const t=e.context;if(!this._resourcesTask){this._reloadResources();return}if(e.drawPhase!==F.MAP||!this._canRender())return;this._updateResources(e);const i=this._magnifier;if(i.position==null)return;const r=e.pixelRatio,n=i.size*r,s=1/i.factor,o=Math.ceil(s*n);this._readbackTexture.resize(o,o);const{size:l}=e.state,d=r*l[0],c=r*l[1],u=.5*o,h=.5*o,p=fe(r*i.position.x,u,d-u-1),_=fe(c-r*i.position.y,h,c-h-1);t.setBlendingEnabled(!0);const m=p-u,T=_-h,v=this._readbackTexture;t.bindTexture(v,0),t.gl.copyTexImage2D(v.descriptor.target,0,v.descriptor.pixelFormat,m,T,o,o,0);const f=(le=this.background)==null?void 0:le.color,P=f?[f.a*f.r/255,f.a*f.g/255,f.a*f.b/255,f.a]:[1,1,1,1],y=i.offset.x*r,w=i.offset.y*r,x=-1+2*((p+y)/d),ke=-1+2*((_-w)/c),Le=2*(n/d),He=2*(n/c),U=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(U),U.setUniform4fv("u_background",P),U.setUniform1i("u_readbackTexture",0),U.setUniform1i("u_overlayTexture",6),U.setUniform1i("u_maskTexture",7),U.setUniform4f("u_drawPos",x,ke,Le,He),U.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),U.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(q.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=this._magnifier!=null?this._magnifier.maskUrl:null,t=this._magnifier!=null?this._magnifier.overlayUrl:null;this._resourcesTask=ot(async i=>{const r=e==null||t==null?Li(i):null,n=e!=null?j(e,{responseType:"image",signal:i}).then(d=>d.data):r.then(d=>d.mask),s=t!=null?j(t,{responseType:"image",signal:i}).then(d=>d.data):r.then(d=>d.overlay),[o,l]=await Promise.all([n,s]);this.mask=o,this.overlay=l,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=b(this._readbackTexture),this._overlayTexture=b(this._overlayTexture),this._maskTexture=b(this._maskTexture),this._vertexArrayObject=b(this._vertexArrayObject),this._program=b(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const i=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=gt(t);const r=new Uint16Array([0,1,0,0,1,1,1,0]),n=vt.attributes;this._vertexArrayObject=new se(t,n,Bt,{geometry:ne.createVertex(t,oe.STATIC_DRAW,r)}),this.overlay.width=i,this.overlay.height=i;const s=new C;s.internalFormat=B.RGBA,s.wrapMode=M.CLAMP_TO_EDGE,s.samplingMode=I.NEAREST,s.flipped=!0,s.preMultiplyAlpha=!at(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result,this._overlayTexture=new N(t,s,this.overlay),this.mask.width=i,this.mask.height=i,s.pixelFormat=s.internalFormat=B.ALPHA,this._maskTexture=new N(t,s,this.mask);const o=1/this._magnifier.factor;s.pixelFormat=s.internalFormat=B.RGBA,s.width=s.height=Math.ceil(o*i),s.samplingMode=I.LINEAR,s.flipped=!1,this._readbackTexture=new N(t,s)}}export{Cs as GraphicContainer,Os as GraphicsView2D,Bs as LabelManager,ws as MagnifierView2D,Rs as MapViewNavigation,ys as Stage};
