import"./string-3d0ebcd3.js";import{t as G,r as b,z as nt,H as oe,J as yt,f as St}from"./typedArrayUtil-2bcf3cee.js";import{e as _e}from"./mat3f32-d3d088e8.js";import{I as V,M as re,P as B,U as Ce,G as q,L as N,D as Q,o as Y,F as J,C as m,E as R,R as D,O as X,Y as Tt,V as bt,B as it,_ as Be,N as Et}from"./enums-64ab819c.js";import{r as It,M as De,h as Ct,b as Ot,i as At}from"./mat3-45e3f2eb.js";import{t as pe,n as Pt}from"./vec2f32-461e65a9.js";import{s as Dt}from"./pixelUtils-5f39bd45.js";import{r as ot,p as at,s as fe,i as Rt}from"./utils-6c2afd8b.js";import{f as Ge,n as Ye}from"./vec2f64-e0301652.js";import{r as Ne}from"./context-util-cb6895d7.js";import{E as se}from"./Texture-6f3336a0.js";import{E as ee,a as le,s as rt,x as st}from"./VertexArrayObject-8a5c7580.js";import{t as ge}from"./VertexElementDescriptor-2925c6af.js";import{ac as Oe,S as Lt,B as Mt,C as Nt,ad as zt,ae as wt,af as Ft,ag as Vt,ah as Ut,ai as Bt,Q as Re,aj as $,ak as lt,al as He}from"./enums-8bf08d0c.js";import{g as ce,j as xe,c as H}from"./Utils-c2939f8d.js";import{e as Gt,a as Ae}from"./ProgramTemplate-66c62c24.js";import{E as me,S as te,I as U}from"./enums-4ca4641f.js";import{U as Yt,w as Ht,N as Wt,Z as kt,C as $t,P as Zt}from"./MaterialKey-b4e71fc3.js";import{a as ae,s as ze}from"./Error-bd05b442.js";import{f as We}from"./mathUtils-daf59e84.js";import{r as de,l as Z,n as ke}from"./StyleDefinition-3c6a4c69.js";import{e as $e}from"./config-1337d16e.js";import{M as Ze}from"./GeometryUtils-c093d234.js";import{l as qt}from"./reactiveUtils-3c1b281e.js";import{x as Kt}from"./earcut-58237617.js";import{r as jt}from"./vec2-f978aef8.js";import{K as Xt,J as Qt}from"./featureConversionUtils-7c9ea581.js";import{t as qe}from"./OptimizedFeature-9345d11b.js";let W=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,t){}draw(e,t,n){}drawMany(e,t,n){for(const o of t)o.visible&&this.draw(e,o,n)}},Jt=class extends W{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:_e(),displayViewMat3:_e()}}dispose(){}prepareState(e){const{context:t}=e;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(V.EQUAL,0,255)}draw(e,t){const{requestRender:n,allowDelayedRender:o}=e,{displayData:i}=t;if(G(i)||(i.state.name==="loaded"&&i.attach(e),i.state.name!=="attached"))return;const a=i.state.resources;o&&!a.ready&&b(n)?n():(this._visualState.time=e.time/1e3,this._visualState.dvsMat3=t.transforms.dvs,this._visualState.displayViewMat3=e.state.displayViewMat3,i.flowStyle.render(e,this._visualState,a),i.flowStyle.animated&&b(n)&&n())}};function en(l,e,t="nearest",n=!1){var s;const o=!(n&&e.pixelType==="u8"),i=o?q.FLOAT:q.UNSIGNED_BYTE,a=e.pixels==null||e.pixels.length===0?null:o?e.getAsRGBAFloat():e.getAsRGBA(),r=(s=l.capabilities.textureFloat)==null?void 0:s.textureFloatLinear,c={width:e.width,height:e.height,target:re.TEXTURE_2D,pixelFormat:B.RGBA,internalFormat:l.type===Ne.WEBGL2&&o?Ce.RGBA32F:B.RGBA,samplingMode:!r||t!=="bilinear"&&t!=="cubic"?N.NEAREST:N.LINEAR,dataType:i,wrapMode:Q.CLAMP_TO_EDGE,flipped:!1};return new se(l,c,a)}function tn(l,e){const{spacing:t,offsets:n,coefficients:o,size:[i,a]}=e,r=t[0]>1,c={width:r?4*i:i,height:a,target:re.TEXTURE_2D,pixelFormat:B.RGBA,internalFormat:l.type===Ne.WEBGL2?Ce.RGBA32F:B.RGBA,dataType:q.FLOAT,samplingMode:N.NEAREST,wrapMode:Q.CLAMP_TO_EDGE,flipped:!1},s=new Float32Array(r?i*a*16:2*n.length);if(r)for(let u=0,f=0;u<o.length;u++)s[f++]=o[u],u%3==2&&(s[f++]=1);else for(let u=0;u<a;u++)for(let f=0;f<i;f++){const _=4*(u*i+f),v=2*(f*a+u);s[_]=n[v],s[_+1]=n[v+1],s[_+3]=n[v]===-1?0:1}return new se(l,c,s)}function Ke(l,e){const t={width:e.length/4,height:1,target:re.TEXTURE_2D,pixelFormat:B.RGBA,internalFormat:B.RGBA,dataType:q.UNSIGNED_BYTE,samplingMode:N.NEAREST,wrapMode:Q.CLAMP_TO_EDGE,flipped:!1};return new se(l,t,e)}function nn(l,e,t,n=1,o=!0){return{u_flipY:o,u_applyTransform:!!l,u_opacity:n,u_transformSpacing:l?l.spacing:Ge,u_transformGridSize:l?l.size:Ge,u_targetImageSize:e,u_srcImageSize:t}}function on(l,e){return{u_colormapOffset:e||0,u_colormapMaxIndex:l?l.length/4-1:0}}function an(l,e){return{u_scale:l,u_offset:e}}function rn(l){return{u_bandCount:l.bandCount,u_minOutput:l.outMin,u_maxOutput:l.outMax,u_minCutOff:l.minCutOff,u_maxCutOff:l.maxCutOff,u_factor:l.factor,u_useGamma:l.useGamma,u_gamma:l.gamma,u_gammaCorrection:l.gammaCorrection}}function sn(l){return{u_hillshadeType:l.hillshadeType,u_sinZcosAs:l.sinZcosAs,u_sinZsinAs:l.sinZsinAs,u_cosZs:l.cosZs,u_weights:l.weights,u_factor:l.factor,u_minValue:l.minValue,u_maxValue:l.maxValue}}function ln(l,e){const t=l.gl,n=e.glName,o=t.getProgramParameter(n,t.ACTIVE_UNIFORMS),i=new Map;let a;for(let r=0;r<o;r++)a=t.getActiveUniform(n,r),a&&i.set(a.name,{location:t.getUniformLocation(n,a.name),info:a});return i}function Se(l,e,t){Object.keys(t).forEach(n=>{const o=e.get(n)||e.get(n+"[0]");o&&un(l,n,t[n],o)})}function cn(l,e,t,n){t.length===n.length&&(n.some(o=>o==null)||t.some(o=>o==null)||t.forEach((o,i)=>{e.setUniform1i(o,i),l.bindTexture(n[i],i)}))}function un(l,e,t,n){if(n===null||t==null)return!1;const{info:o}=n;switch(o.type){case Y.FLOAT:o.size>1?l.setUniform1fv(e,t):l.setUniform1f(e,t);break;case Y.FLOAT_VEC2:l.setUniform2fv(e,t);break;case Y.FLOAT_VEC3:l.setUniform3fv(e,t);break;case Y.FLOAT_VEC4:l.setUniform4fv(e,t);break;case Y.FLOAT_MAT3:l.setUniformMatrix3fv(e,t);break;case Y.FLOAT_MAT4:l.setUniformMatrix4fv(e,t);break;case Y.INT:o.size>1?l.setUniform1iv(e,t):l.setUniform1i(e,t);break;case Y.BOOL:l.setUniform1i(e,t?1:0);break;case Y.INT_VEC2:case Y.BOOL_VEC2:l.setUniform2iv(e,t);break;case Y.INT_VEC3:case Y.BOOL_VEC3:l.setUniform3iv(e,t);break;case Y.INT_VEC4:case Y.BOOL_VEC4:l.setUniform4iv(e,t);break;default:return!1}return!0}const fn={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,stretchType:"none",type:"stretch"};let Ni=class extends ot{constructor(e=null,t=null,n=null){super(),this._textureInvalidated=!0,this._colormapTextureInvalidated=!0,this._supportsBilinearTexture=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.source=e,this.transformGrid=t,this.interpolation=n}destroy(){var e;(e=this.getTextures())==null||e.textures.forEach(t=>t.dispose()),this._rasterTexture=null,this._transformGridTexture=null,this._colormapTexture=null}get symbolizerParameters(){return this._symbolizerParameters||fn}set symbolizerParameters(e){this._symbolizerParameters!==e&&(this._symbolizerParameters=e,this._colormapTextureInvalidated=!0)}get source(){return this._source}set source(e){this._source!==e&&(this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null),this.invalidateTexture())}get suspended(){return this._suspended}set suspended(e){this._suspended&&!e&&this.stage&&(this.ready(),this.requestRender()),this._suspended=e}get bandIds(){return this._bandIds}set bandIds(e){this._bandIds=e,this._isBandIdschanged(e)&&this.invalidateTexture()}get interpolation(){return this._interpolation||"nearest"}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode(this._getTextureSamplingMethod(e)==="bilinear"?N.LINEAR:N.NEAREST)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}_createTransforms(){return{dvs:_e()}}setTransform(e){const t=It(this.transforms.dvs),[n,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),i=this.resolution/this.pixelRatio/e.resolution,a=i*this.width,r=i*this.height,c=Math.PI*this.rotation/180;De(t,t,pe(n,o)),De(t,t,pe(a/2,r/2)),Ct(t,t,-c),De(t,t,pe(-a/2,-r/2)),Ot(t,t,pe(a,r)),At(this.transforms.dvs,e.displayViewMat3,t)}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:e}){var n,o,i;if(!this.stage)return(n=this._rasterTexture)==null||n.dispose(),(o=this._transformGridTexture)==null||o.dispose(),(i=this._colormapTexture)==null||i.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);const t=this._isValidSource(this.source);t&&this._colormapTextureInvalidated&&(this._colormapTextureInvalidated=!1,this._updateColormapTexture(e)),this._textureInvalidated&&(this._textureInvalidated=!1,this._createOrDestroyRasterTexture(e),this._rasterTexture&&(t?this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=tn(e,this.transformGrid)):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender()))}_createOrDestroyRasterTexture(e){var a,r;const t=b(this.source)?Dt(this.source,this.bandIds):null;if(!this._isValidSource(t))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const n=!this._isBandIdschanged(this.bandIds);if(this._rasterTexture){if(n)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}this._supportsBilinearTexture=(a=e.capabilities.textureFloat)==null?void 0:a.textureFloatLinear;const o=this._getTextureSamplingMethod(this.interpolation),i=this.isRendereredSource||!((r=e.capabilities.textureFloat)!=null&&r.textureFloat);this._rasterTexture=en(e,t,o,i),this._rasterTextureBandIds=this.bandIds?[...this.bandIds]:null}_isBandIdschanged(e){const t=this._rasterTextureBandIds;return!(t==null&&e==null||t&&e&&t.join("")===e.join(""))}_isValidSource(e){var t;return b(e)&&((t=e.pixels)==null?void 0:t.length)>0}_getTextureSamplingMethod(e){const{type:t,colormap:n}=this.symbolizerParameters,o=t==="lut"||t==="stretch"&&b(n);return!this._supportsBilinearTexture||o||e!=="bilinear"&&e!=="cubic"?"nearest":"bilinear"}_updateColormapTexture(e){const t=this._colormap,n=this.symbolizerParameters.colormap;return n?t?n.length!==t.length||n.some((o,i)=>o!==t[i])?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=Ke(e,n),void(this._colormap=n)):void 0:(this._colormapTexture=Ke(e,n),void(this._colormap=n)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}};function _n(l){return b(l.source)}let we=class{constructor(e,t){this._rctx=e,this._vertexBuffer=ee.createVertex(e,J.STATIC_DRAW,new Uint16Array(t)),this._vao=new le(e,new Map([["a_position",0]]),{geometry:[new ge("a_position",2,m.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=t.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose(!1),this._vertexBuffer.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(R.TRIANGLE_STRIP,0,this._count)}},dn=class extends W{constructor(){super(...arguments),this._desc={lut:{vsPath:"raster/lut",fsPath:"raster/lut",attributes:new Map([["a_position",0],["a_texcoord",1]])},stretch:{vsPath:"raster/stretch",fsPath:"raster/stretch",attributes:new Map([["a_position",0],["a_texcoord",1]])},hillshade:{vsPath:"raster/hillshade",fsPath:"raster/hillshade",attributes:new Map([["a_position",0],["a_texcoord",1]])}},this._rendererUniformInfos=new Map}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t){var s;if(!_n(t)||t.suspended)return;const{timeline:n,context:o,painter:i}=e;n.begin(this.name),o.setStencilFunction(V.EQUAL,t.stencilRef,255);const a=!((s=o.capabilities.textureFloat)!=null&&s.textureFloatLinear);t.updateTexture(e);const r=this._getShaderVariations(t,a),c=i.materialManager.getProgram(this._desc[t.symbolizerParameters.type],r);this._drawWithProgram(e,c,t),n.end(this.name)}_drawWithProgram({context:e,requestRender:t,allowDelayedRender:n},o,i,a=1,r=[0,0],c=!1){if(this._quad||(this._quad=new we(e,[0,0,1,0,0,1,1,1])),n&&b(t)&&!o.isCompiled)return void t();const{symbolizerParameters:s,transformGrid:u,width:f,height:_,opacity:v}=i,h=s.type;e.useProgram(o);const p=this._getShaderVariations(i),d=this._getUniformInfos(h,e,o,p),{names:C,textures:g}=i.getTextures();cn(e,o,C,g);const O=an(a,r),P=nn(u,[f,_],[i.source.width,i.source.height],v,c);if(Se(o,d,{u_coordScale:i.coordScale,u_dvsMat3:i.transforms.dvs,...O,...P}),s.colormap){const{colormap:S,colormapOffset:y}=s,x=on(S,y);Se(o,d,x)}if(s.type==="stretch"){const S=rn(s);Se(o,d,S)}else if(s.type==="hillshade"){const S=sn(s);Se(o,d,S)}this._quad.draw()}_getUniformInfos(e,t,n,o){const i=o.length>0?e+"-"+o.join("-"):e;if(this._rendererUniformInfos.has(i))return this._rendererUniformInfos.get(i);const a=ln(t,n);return this._rendererUniformInfos.set(i,a),a}_getShaderVariations(e,t=!1){const n=[],{interpolation:o}=e,{type:i,colormap:a}=e.symbolizerParameters;return o==="cubic"?n.push("bicubic"):o==="bilinear"&&i==="stretch"&&a!=null?(n.push("bilinear"),n.push("nnedge")):t&&o==="bilinear"&&n.push("bilinear"),e.isRendereredSource?n.push("noop"):a&&n.push("applyColormap"),e.transformGrid&&(n.push("applyProjection"),e.transformGrid.spacing[0]===1&&n.push("lookupProjection")),n}};const Te=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),je={beaufort_ft:Te,beaufort_m:Te,beaufort_km:Te,beaufort_mi:Te,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])};let mn=class extends W{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(X.KEEP,X.KEEP,X.REPLACE)}draw(e,t){if(G(t.source)||t.source.validPixelCount===0)return;const{context:n,timeline:o}=e;if(o.begin(this.name),n.setStencilFunction(V.EQUAL,t.stencilRef,255),t.updateVectorFieldVAO(e),e.renderPass==="scalar"){const i=t.vaoData.scalar;i&&this._drawScalars(e,t,i.vao,i.elementCount)}else{const i=t.vaoData.magdir;i&&this._drawTriangles(e,t,i.vao,i.elementCount)}o.end(this.name)}_drawTriangles(e,t,n,o){const{context:i,painter:a,requestRender:r,allowDelayedRender:c}=e,{symbolizerParameters:s}=t,u=s.dataRange?["dataRange"]:[];s.rotationType==="geographic"&&u.push("rotationGeographic");const f=a.materialManager.getProgram(this._desc.magdir,u);if(c&&b(r)&&!f.isCompiled)return void r();i.useProgram(f);const{coordScale:_,opacity:v,transforms:h}=t;f.setUniform2fv("u_coordScale",_),f.setUniform1f("u_opacity",v),f.setUniformMatrix3fv("u_dvsMat3",h.dvs);const{style:p,dataRange:d,rotation:C,symbolPercentRange:g}=s;f.setUniform4fv("u_colors",je[p]||je.single_arrow),f.setUniform2fv("u_dataRange",d),f.setUniform1f("u_rotation",C),f.setUniform2fv("u_symbolPercentRange",g);const O=this._getSymbolSize(e,t);f.setUniform2fv("u_symbolSize",O),i.bindVAO(n),i.drawElements(R.TRIANGLES,o,m.UNSIGNED_INT,0)}_drawScalars(e,t,n,o){const{context:i,painter:a,requestRender:r,allowDelayedRender:c}=e,{symbolizerParameters:s}=t,u=[];s.style==="wind_speed"?u.push("innerCircle"):s.dataRange&&u.push("dataRange"),s.rotationType==="geographic"&&u.push("rotationGeographic");const f=a.materialManager.getProgram(this._desc.scalar,u);if(c&&b(r)&&!f.isCompiled)return void r();i.useProgram(f);const{coordScale:_,opacity:v,transforms:h}=t;f.setUniform2fv("u_coordScale",_),f.setUniform1f("u_opacity",v),f.setUniformMatrix3fv("u_dvsMat3",h.dvs);const{dataRange:p,symbolPercentRange:d}=s;f.setUniform2fv("u_dataRange",p),f.setUniform2fv("u_symbolPercentRange",d);const C=this._getSymbolSize(e,t);f.setUniform2fv("u_symbolSize",C),i.bindVAO(n),i.drawElements(R.TRIANGLES,o,m.UNSIGNED_INT,0)}_getSymbolSize(e,t){const n=t.key?2**(e.displayLevel-t.key.level):t.resolution/e.state.resolution,{symbolTileSize:o}=t.symbolizerParameters;return[o/(Math.round((t.width-t.offset[0])/o)*o)/n,o/(Math.round((t.height-t.offset[1])/o)*o)/n]}};const Le={nearest:{defines:[],samplingMode:N.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:N.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:N.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:N.LINEAR_MIPMAP_LINEAR,mips:!0}},vn=(l,e,t)=>{if(t.samplingMode==="dynamic"){const{state:n}=l,o=e.resolution/e.pixelRatio/n.resolution,i=Math.round(l.pixelRatio)!==l.pixelRatio,a=o>1.05||o<.95;return n.rotation||a||i||e.isSourceScaled||e.rotation?Le.bilinear:Le.nearest}return Le[t.samplingMode]};let pn=class extends W{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t){const{context:n,renderingOptions:o,painter:i,requestRender:a,allowDelayedRender:r}=e;if(!t.source||!t.isReady)return;const c=vn(e,t,o),s=i.materialManager.getProgram(this._desc,c.defines);if(r&&b(a)&&!s.isCompiled)return void a();e.timeline.begin(this.name),t.blendFunction==="additive"?n.setBlendFunctionSeparate(D.ONE,D.ONE,D.ONE,D.ONE):n.setBlendFunctionSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA),n.setStencilFunction(V.EQUAL,t.stencilRef,255),this._quad||(this._quad=new we(n,[0,0,1,0,0,1,1,1]));const{coordScale:u,computedOpacity:f,transforms:_}=t;t.setSamplingProfile(c),t.bind(e.context,Oe),n.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",_.dvs),s.setUniform1i("u_texture",Oe),s.setUniform2fv("u_coordScale",u),s.setUniform1f("u_opacity",f),this._quad.draw(),e.timeline.end(this.name)}};function ct(){return new Float32Array(4)}function gn(l){const e=new Float32Array(4);return e[0]=l[0],e[1]=l[1],e[2]=l[2],e[3]=l[3],e}function K(l,e,t,n){const o=new Float32Array(4);return o[0]=l,o[1]=e,o[2]=t,o[3]=n,o}function hn(l,e){return new Float32Array(l,e,4)}function ut(){return ct()}function ft(){return K(1,1,1,1)}function _t(){return K(1,0,0,0)}function dt(){return K(0,1,0,0)}function mt(){return K(0,0,1,0)}function vt(){return K(0,0,0,1)}const xn=ut(),yn=ft(),Sn=_t(),Tn=dt(),bn=mt(),En=vt();Object.freeze(Object.defineProperty({__proto__:null,create:ct,clone:gn,fromValues:K,createView:hn,zeros:ut,ones:ft,unitX:_t,unitY:dt,unitZ:mt,unitW:vt,ZEROS:xn,ONES:yn,UNIT_X:Sn,UNIT_Y:Tn,UNIT_Z:bn,UNIT_W:En},Symbol.toStringTag,{value:"Module"}));const In={background:{"background.frag":`uniform lowp vec4 u_color;
void main() {
gl_FragColor = u_color;
}`,"background.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_coord_range;
uniform mediump float u_depth;
void main() {
vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
}`},bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color *  u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos, 0.0, 1.0);
v_uv = a_tex;
}`},blend:{"blend.frag":`precision mediump float;
uniform sampler2D u_layerTexture;
uniform lowp float u_opacity;
uniform lowp float u_inFadeOpacity;
#ifndef NORMAL
uniform sampler2D u_backbufferTexture;
#endif
varying mediump vec2 v_uv;
float rgb2v(in vec3 c) {
return max(c.x, max(c.y, c.z));
}
vec3 rgb2hsv(in vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(in vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 tint(in vec3 Cb, in vec3 Cs) {
float vIn = rgb2v(Cb);
vec3 hsvTint = rgb2hsv(Cs);
vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
return hsv2rgb(hsvOut);
}
float overlay(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);
}
float colorDodge(in float Cb, in float Cs) {
return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));
}
float colorBurn(in float Cb, in float Cs) {
return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);
}
float hardLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));
}
float reflectBlend(in float Cb, in float Cs) {
return (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);
}
float softLight(in float Cb, in float Cs) {
if (Cs <= 0.5) {
return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);
}
if (Cb <= 0.25) {
return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);
}
return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);
}
float vividLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));
}
float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
float lbase = lumv3(cbase);
float llum = lumv3(clum);
float ldiff = llum - lbase;
vec3 color = cbase + vec3(ldiff);
return clipColor(color);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
vec3 color;
if (sbase > 0.0) {
color = (cbase - minbase) * ssat / sbase;
} else {
color = vec3(0.0);
}
return setLum(color, clum);
}
void main() {
vec4 src = texture2D(u_layerTexture, v_uv);
#ifdef NORMAL
gl_FragColor = src *  u_opacity;
#else
vec4 dst = texture2D(u_backbufferTexture, v_uv);
vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);
vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);
float as = u_opacity * src.a;
float ab = dst.a;
#ifdef DESTINATION_OVER
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);
#endif
#ifdef SOURCE_IN
vec4 color = vec4(as * Cs * ab, as * ab);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef DESTINATION_IN
vec4 color = vec4(ab * Cb * as, ab * as);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef SOURCE_OUT
gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));
#endif
#ifdef DESTINATION_OUT
gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));
#endif
#ifdef SOURCE_ATOP
gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);
#endif
#ifdef DESTINATION_ATOP
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);
#endif
#ifdef XOR
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),
as * (1.0 - ab) + ab * (1.0 - as));
#endif
#ifdef MULTIPLY
gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,
as + ab * (1.0 - as));
#endif
#ifdef SCREEN
gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef OVERLAY
vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DARKEN
gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LIGHTER
gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);
#endif
#ifdef LIGHTEN
gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_DODGE
vec3 f = clamp(vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_BURN
vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HARD_LIGHT
vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SOFT_LIGHT
vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DIFFERENCE
gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef EXCLUSION
vec3 f = Cs + Cb - 2.0 * Cs * Cb;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef INVERT
gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);
#endif
#ifdef VIVID_LIGHT
vec3 f = vec3(clamp(vividLight(Cb.r, Cs.r), 0.0, 1.0),
clamp(vividLight(Cb.g, Cs.g), 0.0, 1.0),
clamp(vividLight(Cb.b, Cs.b), 0.0, 1.0));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HUE
vec3 f = setLumSat(Cs,Cb,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SATURATION
vec3 f = setLumSat(Cb,Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR
vec3 f = setLum(Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LUMINOSITY
vec3 f = setLum(Cb,Cs);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef PLUS
gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);
#endif
#ifdef MINUS
gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);
#endif
#ifdef AVERAGE
vec3 f = (Cb + Cs) / 2.0;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef REFLECT
vec3 f = clamp(vec3(reflectBlend(Cb.r, Cs.r),
reflectBlend(Cb.g, Cs.g),
reflectBlend(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#endif
}`,"blend.vert":`attribute vec2 a_position;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_position , 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`,"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},fx:{integrate:{"integrate.frag":`precision mediump float;
uniform lowp sampler2D u_sourceTexture;
uniform lowp sampler2D u_maskTexture;
uniform mediump float u_zoomLevel;
uniform highp float u_timeDelta;
uniform highp float u_animationTime;
varying highp vec2 v_texcoord;
#include <materials/utils.glsl>
void main()
{
#ifdef DELTA
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
vec4 data0 = texture2D(u_maskTexture, v_texcoord);
float flags = data0.r * 255.0;
float groupMinZoom = data0.g * 255.0;
float isVisible = getFilterBit(flags, 0);
float wouldClip = step(groupMinZoom, u_zoomLevel);
float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;
float dt = u_timeDelta / max(u_animationTime, 0.0001);
vec4 nextState = vec4(texel + direction * dt);
gl_FragColor =  vec4(nextState);
#elif defined(UPDATE)
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
gl_FragColor = texel;
#endif
}`,"integrate.vert":`precision mediump float;
attribute vec2 a_pos;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
}`}},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},magnifier:{"magnifier.frag":`uniform lowp vec4 u_background;
uniform mediump sampler2D u_readbackTexture;
uniform mediump sampler2D u_maskTexture;
uniform mediump sampler2D u_overlayTexture;
uniform bool u_maskEnabled;
uniform bool u_overlayEnabled;
varying mediump vec2 v_texCoord;
const lowp float barrelFactor = 1.1;
lowp vec2 barrel(lowp vec2 uv) {
lowp vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
lowp float theta = atan(uvn.y, uvn.x);
lowp float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main(void)
{
lowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));
color = (color + (1.0 - color.a) * u_background);
lowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;
color *= mask;
lowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;
}`,"magnifier.vert":`precision mediump float;
attribute mediump vec2 a_pos;
uniform mediump vec4 u_drawPos;
varying mediump vec2 v_texCoord;
void main(void)
{
v_texCoord = a_pos;
gl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);
}`},materials:{"attributeData.glsl":`uniform highp sampler2D u_attributeData0;
uniform highp sampler2D u_attributeData1;
uniform highp sampler2D u_attributeData2;
uniform highp sampler2D u_attributeData3;
uniform highp sampler2D u_attributeData4;
uniform highp sampler2D u_attributeData5;
uniform highp int u_attributeTextureSize;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float size = float(u_attributeTextureSize);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(u_attributeTextureSize));
}
highp vec4 getAttributeData0(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData0, coords);
}
highp vec4 getAttributeData1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData1, coords);
}
highp vec4 getAttributeData2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData2, coords);
}
highp vec4 getAttributeData3(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData3, coords);
}
highp vec4 getAttributeData4(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData4, coords);
}
highp vec4 getAttributeData5(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData5, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 tileOffset = vec2(u_tileOffset.x * cosA - u_tileOffset.y * sinA, u_tileOffset.x * sinA + u_tileOffset.y * cosA);
tileOffset = mod(tileOffset, vec2(a_aux2.x, a_aux2.y));
vec2 symbolOffset = (a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float u_hittestDist;
uniform highp vec2 u_hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(u_hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
lowp vec4 fillPixelColor = v_color;
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 126.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":"#include <materials/text/text.frag>","label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHalo;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
v_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.frag":`precision mediump float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
varying float v_size;
varying vec2 v_offset;
varying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];
varying float v_numOfEntries;
varying float v_maxSectorAngle;
uniform lowp vec4 u_colors[NUMBER_OF_FIELDS];
uniform lowp vec4 u_defaultColor;
uniform lowp vec4 u_othersColor;
uniform lowp vec4 u_outlineColor;
uniform float u_donutRatio;
uniform float u_sectorThreshold;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {
#if __VERSION__ == 300
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return u_colors[colorIndex];
#else
mediump int colorIndex;
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
if (i == index) {
colorIndex = int(filteredSectorToColorId[i].y);
}
}
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
if (i == colorIndex) {
return u_colors[i];
}
}
return u_colors[NUMBER_OF_FIELDS - 1];
#endif
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor() {
float angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);
if (angle < 0.0) {
angle += 360.0;
} else if (angle > 360.0) {
angle = mod(angle, 360.0);
}
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || u_sectorThreshold > 0.0) ? u_othersColor : u_defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < NUMBER_OF_FIELDS; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = u_sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? u_othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = u_sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? u_othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = u_outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
if (startSectorAngle != 0.0 || endSectorAngle != 360.0) {
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.6;
float beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);
if (endSectorAlpha > 0.0) {
fillColor = mix(nextColor, fillColor, endSectorAlpha);
} else if (beginSectorAlpha > 0.0) {
fillColor = mix(prevColor, fillColor, beginSectorAlpha);
}
}
float donutSize = u_donutRatio * (v_size - v_outlineWidth);
float endOfDonut = donutSize - v_outlineWidth;
float aaThreshold = 0.75;
float innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
float startOfOutline = v_size - v_outlineWidth;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
uniform float u_outlineWidth;
uniform mediump float u_sectorThreshold;
varying float v_size;
varying vec2 v_offset;
varying vec2 v_filteredSectorToColorId[NUMBER_OF_FIELDS];
varying float v_numOfEntries;
varying float v_maxSectorAngle;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};
int filter(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS]) {
if (sectorAngle > u_sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
#if __VERSION__ == 300
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
#else
for (int i = 0; i < NUMBER_OF_FIELDS; i++) {
if (i == filteredInfo.colorId) {
filteredSectorToColorId[i] = vec2(filteredInfo.endSectorAngle, currentIndex);
}
}
#endif
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[NUMBER_OF_FIELDS],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[NUMBER_OF_FIELDS]) {
for (int index = 0; index < NUMBER_OF_FIELDS; ++index) {
float sectorValue = sectorAngles[index];
filter(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/hittest/common.glsl>
vec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {
vec2 outSize = baseSize;
#ifdef VV_SIZE
float r = 0.5 * getSize(referenceSize) / referenceSize;
outSize.xy *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec2  a_offset = a_vertexOffset / 16.0;
float outlineSize = u_outlineWidth;
float a_bitSet = a_bitSetAndDistRatio.x;
vec2 size = getMarkerSize(a_offset, a_size, outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos * POSITION_PRECISION, 1.0);
v_opacity      = getOpacity();
v_id           = norm(a_id);
v_pos          = u_dvsMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = max(size.x, size.y);
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData0 = getAttributeData3(a_id);
attributeData[0] = filterNaNValues(attributeData0.x);
attributeData[1] = filterNaNValues(attributeData0.y);
attributeData[2] = filterNaNValues(attributeData0.z);
attributeData[3] = filterNaNValues(attributeData0.w);
#if (NUMBER_OF_FIELDS > 4)
vec4 attributeData1 = getAttributeData4(a_id);
attributeData[4] = filterNaNValues(attributeData1.x);
attributeData[5] = filterNaNValues(attributeData1.y);
attributeData[6] = filterNaNValues(attributeData1.z);
attributeData[7] = filterNaNValues(attributeData1.w);
#endif
#if (NUMBER_OF_FIELDS > 8)
vec4 attributeData2 = getAttributeData5(a_id);
attributeData[8] = filterNaNValues(attributeData2.x);
attributeData[9] = filterNaNValues(attributeData2.y);
#endif
float sum = 0.0;
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
sum += attributeData[i];
}
float sectorAngles[NUMBER_OF_FIELDS];
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[NUMBER_OF_FIELDS];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
#if __VERSION__ == 300
v_filteredSectorToColorId = filteredSectorToColorId;
#else
for (int i = 0; i < NUMBER_OF_FIELDS; ++i) {
if (i == numOfEntries) {
break;
}
v_filteredSectorToColorId[i] = filteredSectorToColorId[i];
}
#endif
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":"#include <materials/hittest/common.glsl>","text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHalo;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
v_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
v_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + 1);
}
float getHighlightBit(in float bitset) {
return getBit(bitset, 0);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform highp mat3 u_tileMat3;
uniform highp mat3 u_viewMat3;
uniform highp float u_pixelRatio;
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;
uniform mediump float u_currentZoom;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
#ifdef SUPPORTS_TEXTURE_FLOAT
target.rgba = getAttributeData2(a_id);
#else
vec4 data0 = getAttributeData2(a_id);
vec4 data1 = getAttributeData3(a_id);
target.r = u88VVToFloat(data0.rg * 255.0);
target.g = u88VVToFloat(data0.ba * 255.0);
target.b = u88VVToFloat(data1.rg * 255.0);
target.a = u88VVToFloat(data1.ba * 255.0);
#endif
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getAttributeData0(a_id).x * 255.0);
#else
return getAttributeData0(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAttributeData1(a_id);
}
float getMinZoom() {
vec4 data0 = getAttributeData0(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * u_viewMat3 * u_tileMat3 + (1.0 - isMapAligned) * u_tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef INSIDE
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(OUTSIDE)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(HIGHLIGHT)
#if !defined(HIGHLIGHT_ALL)
pos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));
#endif
#endif
pos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float u_vvColorValues[8];
uniform vec4 u_vvColors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 u_vvSizeMinMaxValue;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float u_vvSizeScaleStopsValue;
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float u_vvSizeFieldStopsValues[6];
uniform float u_vvSizeFieldStopsSizes[6];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float u_vvSizeUnitValueWorldToPixelsRatio;
#endif
#ifdef VV_OPACITY
uniform highp float u_vvOpacityValues[8];
uniform float u_vvOpacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float u_vvRotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 6;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= u_vvSizeFieldStopsValues[0]) {
return u_vvSizeFieldStopsSizes[0];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (u_vvSizeFieldStopsValues[i] >= sizeValue) {
float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);
return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);
}
}
return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= u_vvOpacityValues[0]) {
return u_vvOpacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (u_vvOpacityValues[i] >= opacityValue) {
float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);
return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);
}
}
return u_vvOpacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= u_vvColorValues[0]) {
return u_vvColors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (u_vvColorValues[i] >= colorValue) {
float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);
return mix(u_vvColors[i-1], u_vvColors[i], f);
}
}
return u_vvColors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
return u_vvSizeScaleStopsValue;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`},overlay:{overlay:{"overlay.frag":`precision lowp float;
uniform lowp sampler2D u_texture;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
vec4 color = texture2D(u_texture, v_uv);
gl_FragColor = color *  u_opacity;
}`,"overlay.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_uv;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_perspective;
varying mediump vec2 v_uv;
void main(void) {
v_uv = a_uv;
float w = 1.0 + dot(a_uv, u_perspective);
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0);
gl_Position = vec4(w * pos.xy, 0.0, w);
}`}},"post-processing":{blit:{"blit.frag":`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
gl_FragColor = texture2D(u_texture, v_uv);
}`},bloom:{composite:{"composite.frag":`precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform sampler2D u_blurTexture5;
uniform float u_bloomStrength;
uniform float u_bloomRadius;
uniform float u_bloomFactors[NUMMIPS];
uniform vec3 u_bloomTintColors[NUMMIPS];
float lerpBloomFactor(const in float factor) {
float mirrorFactor = 1.2 - factor;
return mix(factor, mirrorFactor, u_bloomRadius);
}
void main() {
vec4 color = u_bloomStrength * (
lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +
lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +
lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +
lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +
lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)
);
gl_FragColor = clamp(color, 0.0, 1.0);
}`},gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
#define SIGMA RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = float(SIGMA);
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},luminosityHighPass:{"luminosityHighPass.frag":`precision mediump float;
uniform sampler2D u_texture;
uniform vec3 u_defaultColor;
uniform float u_defaultOpacity;
uniform float u_luminosityThreshold;
uniform float u_smoothWidth;
varying vec2 v_uv;
void main() {
vec4 texel = texture2D(u_texture, v_uv);
vec3 luma = vec3(0.299, 0.587, 0.114);
float v = dot(texel.xyz, luma);
vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);
float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);
gl_FragColor = mix(outputColor, texel, alpha);
}`}},blur:{gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
uniform float u_sigma;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = u_sigma;
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},"radial-blur":{"radial-blur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
const float sampleDist = 1.0;
const float sampleStrength = 2.2;
void main(void) {
float samples[10];
samples[0] = -0.08;
samples[1] = -0.05;
samples[2] = -0.03;
samples[3] = -0.02;
samples[4] = -0.01;
samples[5] =  0.01;
samples[6] =  0.02;
samples[7] =  0.03;
samples[8] =  0.05;
samples[9] =  0.08;
vec2 dir = 0.5 - v_uv;
float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
dir = dir / dist;
vec4 color = texture2D(u_colorTexture,v_uv);
vec4 sum = color;
for (int i = 0; i < 10; i++) {
sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);
}
sum *= 1.0 / 11.0;
float t = dist * sampleStrength;
t = clamp(t, 0.0, 1.0);
gl_FragColor = mix(color, sum, t);
}`}},dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"drop-shadow":{composite:{"composite.frag":`precision mediump float;
uniform sampler2D u_layerFBOTexture;
uniform sampler2D u_blurTexture;
uniform vec4 u_shadowColor;
uniform vec2 u_shadowOffset;
uniform highp mat3 u_displayViewMat3;
varying vec2 v_uv;
void main() {
vec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);
vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);
vec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);
gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{bitmap:{"bitmap.frag":`precision mediump float;
varying highp vec2 v_texcoord;
uniform sampler2D u_texture;
uniform highp vec2 u_coordScale;
uniform lowp float u_opacity;
#include <filtering/bicubic.glsl>
void main() {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);
#else
vec4 color = texture2D(u_texture, v_texcoord);
#endif
gl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);
}`,"bitmap.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"contrastBrightness.glsl":`uniform float u_contrastOffset;
uniform float u_brightnessOffset;
vec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {
vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;
float maxI = 255.0;
float mid = 128.0;
float c = u_contrastOffset;
float b = u_brightnessOffset;
vec4 v;
if (c > 0.0 && c < 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;
} else if (c <= 0.0 && c > -100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;
} else if (c == 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);
v = (sign(v) + 1.0) / 2.0;
} else if (c == -100.0) {
v = vec4(mid, mid, mid, currentPixel.a);
}
return vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`,"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdDurationSeed;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
void main(void) {
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z;
float speed1 = a_xyts1.w;
float type = a_typeIdDurationSeed.x;
float id = a_typeIdDurationSeed.y;
float duration = a_typeIdDurationSeed.z;
float seed = a_typeIdDurationSeed.w;
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float randomizedTime = scaledTime + seed * animationPeriod;
float t = mod(randomizedTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.rgb *= v_color.a;
}`},streamlines:{"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
void main(void) {
float t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;
vec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);
color *= mix(1.0, 1.0 - exp(-v_time), u_introFade);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`,"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_totalTime = a_timeInfo.y;
v_timeSeed = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},hillshade:{"hillshade.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform int u_hillshadeType;
uniform float u_sinZcosAs[6];
uniform float u_sinZsinAs[6];
uniform float u_cosZs[6];
uniform float u_weights[6];
uniform vec2 u_factor;
uniform float u_minValue;
uniform float u_maxValue;
#include <raster/lut/colorize.glsl>
float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}
else {
return e;
}
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
vec4 overlay(float val, float minValue, float maxValue, float hillshade) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);
vec3 hsv = rgb2hsv(rgb.xyz);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * rgb.a;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
if (currentPixel.a == 0.0) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec2 axy = vec2(-1.0, -1.0);
vec2 bxy = vec2(0.0, -1.0);
vec2 cxy = vec2(1.0, -1.0);
vec2 dxy = vec2(-1.0, 0.0);
vec2 fxy = vec2(1.0, 0.0);
vec2 gxy = vec2(-1.0, 1.0);
vec2 hxy = vec2(0.0, 1.0);
vec2 ixy = vec2(1.0, 1.0);
vec2 onePixel = 1.0 / u_srcImageSize;
if (pixelLocation.s < onePixel.s) {
axy[0] = 1.0;
dxy[0] = 1.0;
gxy[0] = 1.0;
}
if (pixelLocation.t < onePixel.t) {
axy[1] = 1.0;
bxy[1] = 1.0;
cxy[1] = 1.0;
}
if (pixelLocation.s > 1.0 - onePixel.s) {
cxy[0] = -1.0;
fxy[0] = -1.0;
ixy[0] = -1.0;
}
if (pixelLocation.t > 1.0 - onePixel.t) {
gxy[1] = -1.0;
hxy[1] = -1.0;
ixy[1] = -1.0;
}
vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);
vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);
vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);
vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);
vec4 ve = texture2D(u_image, pixelLocation);
vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);
vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);
vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);
vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);
float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
float hillshade = 0.0;
if (u_hillshadeType == 0){
float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
float z = (u_cosZs[0] + cosDelta) / dzd;
if (z < 0.0)  z = 0.0;
hillshade = z;
} else {
for (int k = 0; k < 6; k++) {
float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
float z = (u_cosZs[k] + cosDelta) / dzd;
if (z < 0.0) z = 0.0;
hillshade = hillshade + z * u_weights[k];
if (k == 5) break;
}
}
float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
#ifdef APPLY_COLORMAP
gl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;
#else
gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;
#endif
}`,"hillshade.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},lut:{"colorize.glsl":`uniform sampler2D u_colormap;
uniform float u_colormapOffset;
uniform float u_colormapMaxIndex;
vec4 colorize(vec4 currentPixel, float scaleFactor) {
float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
vec4 result = vec4(color.rgb, color.a * currentPixel.a);
return result;
}`,"lut.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
#include <raster/lut/colorize.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
vec4 result = colorize(currentPixel, 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;
}`,"lut.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},magdir:{"magdir.frag":`precision mediump float;
varying vec4 v_color;
uniform lowp float u_opacity;
void main() {
gl_FragColor = v_color * u_opacity;
}`,"magdir.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
uniform float u_rotation;
uniform vec4 u_colors[12];
varying vec4 v_color;
void main()
{
float angle = a_offset.y + u_rotation;
#ifndef ROTATION_GEOGRAPHIC
angle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;
#endif
vec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 pos = a_pos + offset * sizePercentage * u_symbolSize;
v_color = u_colors[int(a_vv.x)];
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`},scalar:{"scalar.frag":`precision mediump float;
uniform lowp float u_opacity;
varying vec2 v_pos;
const vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);
const float outlineSize = 0.02;
const float innerRadius = 0.25;
const float outerRadius = 0.42;
const float innerSquareLength = 0.15;
void main() {
mediump float dist = length(v_pos);
mediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);
fillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));
#ifdef INNER_CIRCLE
mediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);
fillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));
#else
mediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);
#endif
gl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;
}`,"scalar.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
varying vec2 v_pos;
void main()
{
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 size = u_symbolSize * sizePercentage;
vec2 pos = a_pos + a_offset * size;
v_pos = a_offset;
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},stretch:{"stretch.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform bool u_useGamma;
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
#include <raster/lut/colorize.glsl>
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
#ifdef NOOP
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
return;
#endif
if (u_bandCount == 1) {
float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
#ifdef APPLY_COLORMAP
vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;
#else
gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;
#endif
} else {
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;
}
}`,"stretch.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},tileInfo:{"tileInfo.frag":`uniform mediump sampler2D u_texture;
varying mediump vec2 v_tex;
void main(void) {
lowp vec4 color = texture2D(u_texture, v_tex);
gl_FragColor = 0.75 * color;
}`,"tileInfo.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_coord_ratio;
uniform mediump vec2 u_delta;
uniform mediump vec2 u_dimensions;
varying mediump vec2 v_tex;
void main() {
mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);
vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
v_tex = a_pos;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function Cn(l){let e=In;return l.split("/").forEach(t=>{e&&(e=e[t])}),e}const On=new Gt(Cn);function Pe(l){return On.resolveIncludes(l)}const he={shaders:{vertexShader:Pe("background/background.vert"),fragmentShader:Pe("background/background.frag")},attributes:new Map([["a_pos",0]])},An=()=>ce("clip",{geometry:[{location:0,name:"a_pos",count:2,type:m.SHORT}]});let Pn=class extends W{constructor(){super(...arguments),this._color=K(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(X.KEEP,X.KEEP,X.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(V.ALWAYS,0,255)}draw(e,t){const{context:n,state:o,requestRender:i,allowDelayedRender:a}=e,r=An(),c=t.getVAO(n,o,r.attributes,r.bufferLayouts);G(c.indexBuffer)||(this._program||(this._program=Ae(n,he)),a&&b(i)&&!this._program.isCompiled?i():(n.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",o.displayMat3),n.bindVAO(c),n.drawElements(R.TRIANGLES,c.indexBuffer.size,m.UNSIGNED_INT,0),n.bindVAO()))}};const Dn=()=>ce("overlay",{geometry:[{location:0,name:"a_pos",count:2,type:m.FLOAT}],tex:[{location:1,name:"a_uv",count:2,type:m.UNSIGNED_SHORT}]});let Rn=class extends W{constructor(){super(...arguments),this._desc={vsPath:"overlay/overlay",fsPath:"overlay/overlay",attributes:new Map([["a_pos",0],["a_uv",1]])}}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setBlendFunctionSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(V.GREATER,255,255)}draw(e,t){const{context:n,painter:o,requestRender:i,allowDelayedRender:a}=e;if(!t.isReady)return;const{computedOpacity:r,dvsMat3:c,isWrapAround:s,perspectiveTransform:u,texture:f}=t;e.timeline.begin(this.name);const _=o.materialManager.getProgram(this._desc);if(a&&b(i)&&!_.isCompiled)return void i();const v=Dn(),h=t.getVAO(n,v.bufferLayouts,v.attributes);if(!h)return;n.bindVAO(h),n.useProgram(_),n.bindTexture(f,Oe),_.setUniformMatrix3fv("u_dvsMat3",c),_.setUniform1i("u_texture",Oe),_.setUniform1f("u_opacity",r),_.setUniform2fv("u_perspective",u);const p=s?10:4;n.drawArrays(R.TRIANGLE_STRIP,0,p),n.bindVAO(),e.timeline.end(this.name)}},ye=class extends W{constructor(){super(...arguments),this._computeDesc=new Map}prepareState({context:e},t){t&&t.includes("hittest")?e.setBlendFunctionSeparate(D.ONE,D.ONE,D.ONE,D.ONE):e.setBlendFunctionSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t,n){const o=this.getGeometryType();t.commit(e);const i=t.getGeometry(o);G(i)||(e.timeline.begin(this.name),e.attributeView.bindTextures(e.context),e.context.setStencilFunction(V.EQUAL,t.stencilRef,255),i.forEachCommand(a=>{const r=Yt.load(a.materialKey).symbologyType;this.supportsSymbology(r)&&this.drawGeometry(e,t,a,n)}))}_setSharedUniforms(e,t,n){const{displayLevel:o,pixelRatio:i,state:a,passOptions:r}=t;b(r)&&r.type==="hittest"&&(e.setUniform2fv("u_hittestPos",r.position),e.setUniform1f("u_hittestDist",r.distance)),e.setUniform1f("u_pixelRatio",i),e.setUniformMatrix3fv("u_tileMat3",n.transforms.tileMat3),e.setUniformMatrix3fv("u_viewMat3",a.viewMat3),e.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),e.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),e.setUniform1f("u_currentZoom",Math.round(o*Lt)),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",Mt),e.setUniform1i("u_attributeData1",Nt),e.setUniform1i("u_attributeData2",zt),e.setUniform1i("u_attributeData3",wt),e.setUniform1i("u_attributeData4",Ft),e.setUniform1i("u_attributeData5",Vt)}_setSizeVVUniforms(e,t,n,o){if(e.vvSizeMinMaxValue&&t.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),e.vvSizeScaleStops&&t.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),e.vvSizeFieldStops){const i=n.getSizeVVFieldStops(o.key.level);t.setUniform1fv("u_vvSizeFieldStopsValues",i.values),t.setUniform1fv("u_vvSizeFieldStopsSizes",i.sizes)}e.vvSizeUnitValue&&t.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio)}_setColorAndOpacityVVUniforms(e,t,n){e.vvColor&&(t.setUniform1fv("u_vvColorValues",n.vvColorValues),t.setUniform4fv("u_vvColors",n.vvColors)),e.vvOpacity&&(t.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),t.setUniform1fv("u_vvOpacities",n.vvOpacities))}_setRotationVVUniforms(e,t,n){e.vvRotation&&t.setUniform1f("u_vvRotationType",n.vvMaterialParameters.vvRotationType==="geographic"?0:1)}_getTriangleDesc(e,t,n=["a_pos"]){const o=t.bufferLayouts.geometry,i=n.map(c=>o.findIndex(s=>s.name===c)),a=`${e}-${i.join("-")}`;let r=this._computeDesc.get(a);if(!r){const c=t.strides,s=t.strides.geometry,u=new Map(t.attributes),f=o.map(p=>({...p})),_=Math.max(...t.attributes.values()),v={geometry:f};let h=0;for(const p of i){const d=o[p];v.geometry.push({count:d.count,name:d.name+"1",divisor:d.divisor,normalized:d.normalized,offset:s+d.offset,stride:s,type:d.type}),v.geometry.push({count:d.count,name:d.name+"2",divisor:d.divisor,normalized:d.normalized,offset:2*s+d.offset,stride:s,type:d.type}),u.set(d.name+"1",_+ ++h),u.set(d.name+"2",_+ ++h)}r={bufferLayouts:v,attributes:u,strides:c},this._computeDesc.set(a,r)}return r}};function Ln(l){const e={geometry:[{location:0,name:"a_pos",count:2,type:m.SHORT},{location:1,name:"a_id",count:3,type:m.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:m.UNSIGNED_BYTE},{location:3,name:"a_color",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_aux1",count:4,type:m.UNSIGNED_SHORT},{location:5,name:"a_aux2",count:4,type:m.SHORT},{location:6,name:"a_aux3",count:4,type:m.UNSIGNED_BYTE},{location:7,name:"a_zoomRange",count:2,type:m.UNSIGNED_SHORT}]};switch(l.symbologyType){case te.SIMPLE:case te.OUTLINE_FILL_SIMPLE:e.geometry.splice(7,1),e.geometry.splice(4,1)}return{shader:"materials/fill",vertexLayout:e}}let pt=class extends ye{dispose(){}getGeometryType(){return me.FILL}supportsSymbology(e){return e!==te.DOT_DENSITY}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,requiredLevel:c,passOptions:s,requestRender:u,allowDelayedRender:f}=e,_=Ht.load(n.materialKey),v=at(_.data),h=b(s)&&s.type==="hittest",p=a.materialManager,{shader:d,vertexLayout:C,hittestAttributes:g}=nt(v.programSpec,Ln(_));let O=R.TRIANGLES,P=ce(_.data,C);h&&(P=this._getTriangleDesc(n.materialKey,P,g),O=R.POINTS);const{attributes:S,bufferLayouts:y}=P,x=p.getMaterialProgram(e,_,d,S,o);if(f&&b(u)&&!x.isCompiled)return void u();if(i.useProgram(x),this._setSharedUniforms(x,e,t),x.setUniform2f("u_tileOffset",512*t.key.col,512*t.key.row),_.textureBinding){a.textureManager.bindTextures(i,x,_);const L=1/2**(c-t.key.level);x.setUniform1f("u_zoomFactor",L)}const T=1/e.pixelRatio;x.setUniform1f("u_blur",T),x.setUniform1f("u_antialiasing",T),this._setSizeVVUniforms(_,x,r,t),this._setColorAndOpacityVVUniforms(_,x,r);const I=n.target.getVAO(i,y,S,h);let A=n.indexCount,E=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;h&&(A/=3,E/=3),i.bindVAO(I),this._drawFills(e,t,x,O,A,E)}_drawFills(e,t,n,o,i,a){e.context.drawElements(o,i,m.UNSIGNED_INT,a)}};class Mn extends pt{constructor(){super(...arguments),this._dotTextureSize=0,this._dotTextures=null,this._dotSamplers=new Int32Array([Ut,Bt]),this._dotVAO=null,this._dotDesc={vsPath:"dot/dot",fsPath:"dot/dot",attributes:new Map([["a_pos",0]])}}dispose(){super.dispose(),this._disposeTextures(),this._dotFBO=oe(this._dotFBO),this._dotVAO=oe(this._dotVAO)}getGeometryType(){return me.FILL}supportsSymbology(e){return e===te.DOT_DENSITY}_drawFills(e,t,n,o,i,a){const{passOptions:r}=e;if(b(r)&&r.type==="hittest")super._drawFills(e,t,n,o,i,a);else{const c=this._drawDotLocations(e,t,n,i,a);this._drawDotDensity(e,t,c)}}_drawDotDensity(e,t,n){const{context:o,painter:i,rendererInfo:a,requestRender:r,allowDelayedRender:c}=e,s=i.materialManager.getProgram(this._dotDesc);if(c&&b(r)&&!s.isCompiled)return void r();const{rendererSchema:u}=a;fe(u,"dot-density");const f=this._createDotDensityMesh(o,this._dotDesc.attributes,{geometry:[{name:"a_pos",count:2,type:m.SHORT,divisor:0,normalized:!1,offset:0,stride:4}]});o.setStencilTestEnabled(!0),o.useProgram(s),s.setUniform1f("u_tileZoomFactor",1),s.setUniform1i("u_texture",this._dotSamplers[0]),s.setUniform1f("u_dotSize",Math.max(u.dotSize,1)),s.setUniform1f("u_pixelRatio",window.devicePixelRatio),this._setSharedUniforms(s,e,t),o.bindTexture(n,this._dotSamplers[0]),o.bindVAO(f),o.drawArrays(R.POINTS,0,262144)}_drawDotLocations(e,t,n,o,i){const{context:a,rendererInfo:r,requiredLevel:c}=e,s=a.getViewport(),{rendererSchema:u}=r;fe(u,"dot-density");const{dotScale:f,colors:_,activeDots:v,backgroundColor:h,dotValue:p}=u;a.setViewport(0,0,512,512);const d=a.getBoundFramebufferObject(),C=this._createFBO(a);a.bindFramebuffer(C),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.STENCIL_BUFFER_BIT),a.setStencilTestEnabled(!1);const g=1/2**(c-t.key.level),O=Re,P=O*window.devicePixelRatio*O*window.devicePixelRatio,S=1/g*(1/g),y=f?e.state.scale/f:1;return n.setUniform1f("u_tileZoomFactor",g),n.setUniform1f("u_tileDotsOverArea",P/(Re*window.devicePixelRatio*Re*window.devicePixelRatio)),n.setUniformMatrix4fv("u_dotColors",_),n.setUniform4fv("u_isActive",v),n.setUniform4fv("u_dotBackgroundColor",h),n.setUniform1f("u_dotValue",Math.max(1,p*y*S)),this._bindDotDensityTextures(a,n,r,O),a.drawElements(R.TRIANGLES,o,m.UNSIGNED_INT,i),a.setViewport(s.x,s.y,s.width,s.height),a.bindFramebuffer(d),C.colorTexture}_createFBO(e){if(G(this._dotFBO)){const o={target:re.TEXTURE_2D,pixelFormat:B.RGBA,dataType:q.UNSIGNED_BYTE,samplingMode:N.NEAREST,wrapMode:Q.CLAMP_TO_EDGE,width:512,height:512},i={colorTarget:Tt.TEXTURE,depthStencilTarget:bt.DEPTH_STENCIL_RENDER_BUFFER},a=new rt(e,{width:512,height:512,internalFormat:it.DEPTH_STENCIL});this._dotFBO=new st(e,i,o,a)}return this._dotFBO}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_bindDotDensityTextures(e,t,n,o){const{rendererSchema:i}=n;fe(i,"dot-density");const a=this._createDotDensityTextures(e,o,i.seed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(let r=0;r<a.length;r++)e.bindTexture(a[r],this._dotSamplers[r])}_createDotDensityMesh(e,t,n){if(G(this._dotVAO)){const i=new Int16Array(524288);for(let r=0;r<512;r++)for(let c=0;c<512;c++)i[2*(c+512*r)]=c,i[2*(c+512*r)+1]=r;const a=ee.createVertex(e,J.STATIC_DRAW,i);this._dotVAO=new le(e,t,n,{geometry:a},null)}return this._dotVAO}_createDotDensityTextures(e,t,n){if(this._dotTextureSize===t&&this._seed===n||(this._disposeTextures(),this._dotTextureSize=t,this._seed=n),this._dotTextures===null){const o=new yt(n);this._dotTextures=[this._allocDotDensityTexture(e,t,o),this._allocDotDensityTexture(e,t,o)]}return this._dotTextures}_allocDotDensityTexture(e,t,n){const o=new Float32Array(t*t*4);for(let i=0;i<o.length;i++)o[i]=n.getFloat();return new se(e,{wrapMode:Q.REPEAT,pixelFormat:B.RGBA,dataType:q.FLOAT,samplingMode:N.NEAREST,width:t,height:t},o)}}const Nn={shader:"materials/icon",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:m.SHORT},{location:1,name:"a_vertexOffset",count:2,type:m.SHORT},{location:2,name:"a_texCoords",count:2,type:m.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:m.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:m.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:m.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:m.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};let Fe=class extends ye{dispose(){}getGeometryType(){return me.MARKER}supportsSymbology(e){return e!==te.HEATMAP&&e!==te.PIE_CHART}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,state:c,passOptions:s,requestRender:u,allowDelayedRender:f}=e,_=Wt.load(n.materialKey),v=at(_.data),h=b(s)&&s.type==="hittest",{shader:p,vertexLayout:d,hittestAttributes:C}=nt(v.programSpec,Nn);let g=R.TRIANGLES,O=ce(_.data,d);h&&(O=this._getTriangleDesc(n.materialKey,O,C),g=R.POINTS);const{attributes:P,bufferLayouts:S}=O,y=a.materialManager.getMaterialProgram(e,_,p,P,o);if(f&&b(u)&&!y.isCompiled)return void u();i.useProgram(y),_.textureBinding&&a.textureManager.bindTextures(i,y,_,!0),this._setSharedUniforms(y,e,t);const x=_.vvRotation?c.displayViewMat3:c.displayMat3;y.setUniformMatrix3fv("u_displayMat3",x),this._setSizeVVUniforms(_,y,r,t),this._setColorAndOpacityVVUniforms(_,y,r),this._setRotationVVUniforms(_,y,r);const T=n.target.getVAO(i,S,P,h);let I=n.indexCount,A=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;h&&(I/=3,A/=3),i.bindVAO(T),this._drawMarkers(e,t,y,g,I,A,h),i.bindVAO(null)}_drawMarkers(e,t,n,o,i,a,r){e.context.drawElements(o,i,m.UNSIGNED_INT,a)}},zn=class{constructor(){this.name=this.constructor.name}createOptions(e,t){return null}};function wn(l,e){const{textureFloat:t,colorBufferFloat:n}=l.capabilities,o=t==null?void 0:t.textureFloat,i=t==null?void 0:t.textureFloatLinear,a=t==null?void 0:t.textureHalfFloat,r=t==null?void 0:t.textureHalfFloatLinear,c=t==null?void 0:t.HALF_FLOAT,s=n==null?void 0:n.textureFloat,u=n==null?void 0:n.textureHalfFloat,f=n==null?void 0:n.floatBlend,{floatBufferBlendWorking:_}=St(l.driverTest);if(!o&&!a)throw new ae("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");if(!s&&!u)throw new ae("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(f&&_||u))throw new ae("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(_?"":" This device claims support for EXT_float_blend, but does not actually support it."));const v=o&&s&&f&&_,h=a&&u,p=i,d=r,C=!!(n!=null&&n.R32F),g=!!(n!=null&&n.R16F);if(v&&(p||!d))return p||e.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),{dataType:q.FLOAT,samplingMode:p?N.LINEAR:N.NEAREST,pixelFormat:C?B.RED:B.RGBA,internalFormat:C?Ce.R32F:B.RGBA};if(h)return d||e.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),{dataType:c,samplingMode:d?N.LINEAR:N.NEAREST,pixelFormat:g?B.RED:B.RGBA,internalFormat:g?Ce.R16F:B.RGBA};throw new ae("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}const Xe=ze.getLogger("esri.views.2d.engine.webgl.brushes.WGLBrushHeatmap");function Qe(l){return l.type==="heatmap"}class Fn extends Fe{constructor(){super(...arguments),this.brushEffect=new Un}supportsSymbology(e){return e===te.HEATMAP}dispose(){super.dispose(),this.brushEffect.dispose(),this.brushEffect=null}prepareState(){}drawGeometry(e,t,n,o){const{defines:i}=this.brushEffect.loadQualityProfile(e.context);super.drawGeometry(e,t,n,o?[...o,...i]:i)}_drawMarkers(e,t,n,o,i,a,r){const{context:c,rendererInfo:s,state:u}=e,{rendererSchema:f}=s;fe(f,"heatmap");const{referenceScale:_,radius:v,isFieldActive:h}=f,p=v*(_!==0?_/u.scale:1);n.setUniform1f("u_radius",p),r||(n.setUniform1f("u_isFieldActive",h),c.setStencilFunction(V.GEQUAL,t.stencilRef,255)),c.drawElements(o,i,m.UNSIGNED_INT,a)}}const Vn={vsPath:"heatmap/heatmapResolve",fsPath:"heatmap/heatmapResolve",attributes:new Map([["a_position",0]])};class Un extends zn{constructor(){super(...arguments),this.name=this.constructor.name}createOptions({passOptions:e}){return e}dispose(){this._prevFBO=null,this._accumulateOutputTexture=oe(this._accumulateOutputTexture),b(this._accumulateFramebuffer)&&this._accumulateFramebuffer.detachDepthStencilBuffer(),this._accumulateOutputStencilBuffer=oe(this._accumulateOutputStencilBuffer),this._accumulateFramebuffer=oe(this._accumulateFramebuffer),this._resolveGradientTexture=oe(this._resolveGradientTexture),this._tileQuad=oe(this._tileQuad)}bind(e){const{context:t,rendererInfo:n,passOptions:o}=e,{rendererSchema:i}=n;!(b(o)&&o.type==="hittest")&&Qe(i)&&(this._prevFBO=t.getBoundFramebufferObject(),this._prevViewport=t.getViewport(),fe(i,"heatmap"),this._loadResources(e),this._updateResources(t,i),t.bindFramebuffer(this._accumulateFramebuffer),t.setViewport(0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0),t.setBlendFunction(D.ONE,D.ONE),t.setClearColor(0,0,0,0),t.clear(Be.COLOR_BUFFER_BIT))}unbind(){this._prevFBO=null,this._prevViewport=null}draw(e){const{context:t,painter:n,rendererInfo:o,passOptions:i}=e,{rendererSchema:a}=o;if(b(i)&&i.type==="hittest"||!Qe(a))return;const{defines:r}=this.loadQualityProfile(t),c=n.materialManager.getProgram(Vn,r);t.useProgram(c),t.bindFramebuffer(this._prevFBO),t.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),t.setBlendFunction(D.ONE,D.ONE_MINUS_SRC_ALPHA),t.setStencilTestEnabled(!1);const{radius:s,minDensity:u,densityRange:f}=a;t.bindTexture(this._accumulateOutputTexture,8),t.bindTexture(this._resolveGradientTexture,9),c.setUniform1i("u_texture",8),c.setUniform1i("u_gradient",9),c.setUniform2f("u_densityMinAndInvRange",u,1/f),c.setUniform1f("u_densityNormalization",3/(s*s*Math.PI)),this._tileQuad.draw()}_loadResources({context:e,painter:t}){const{dataType:n,samplingMode:o,pixelFormat:i,internalFormat:a,shadingRate:r,requiresSharedStencilBuffer:c}=this.loadQualityProfile(e),{width:s,height:u}=this._prevViewport,f=s*r,_=u*r;this._accumulateOutputTexture??(this._accumulateOutputTexture=new se(e,{target:re.TEXTURE_2D,pixelFormat:i,internalFormat:a,dataType:n,samplingMode:o,wrapMode:Q.CLAMP_TO_EDGE,width:f,height:_})),c||(this._accumulateOutputStencilBuffer??(this._accumulateOutputStencilBuffer=new rt(e,{width:f,height:_,internalFormat:it.DEPTH_STENCIL}))),this._accumulateFramebuffer??(this._accumulateFramebuffer=new st(e,{},this._accumulateOutputTexture,c?t.getSharedStencilBuffer():this._accumulateOutputStencilBuffer)),this._resolveGradientTexture??(this._resolveGradientTexture=new se(e,{target:re.TEXTURE_2D,pixelFormat:B.RGBA,dataType:q.UNSIGNED_BYTE,samplingMode:N.LINEAR,wrapMode:Q.CLAMP_TO_EDGE})),this._tileQuad??(this._tileQuad=new we(e,[0,0,1,0,0,1,1,1]))}_updateResources(e,t){const{gradientHash:n,gradient:o}=t;this._prevGradientHash!==n&&(this._resolveGradientTexture.resize(o.length/4,1),this._resolveGradientTexture.setData(o),this._prevGradientHash=n);const{shadingRate:i,requiresSharedStencilBuffer:a}=this.loadQualityProfile(e),{width:r,height:c}=this._prevViewport,s=r*i,u=c*i,{width:f,height:_}=this._accumulateFramebuffer;if(f!==s||_!==u){const v=this._accumulateFramebuffer.depthStencilAttachment;if(a&&b(v)){const{width:h,height:p}=v.descriptor;h===s&&p===u||(Xe.errorOnce("Attempted to resize shared stencil buffer! Detaching instead."),this._accumulateFramebuffer.detachDepthStencilBuffer())}this._accumulateFramebuffer.resize(s,u)}a||e.blitFramebuffer(this._prevFBO,this._accumulateFramebuffer,0,0,this._prevFBO.width,this._prevFBO.height,0,0,this._accumulateFramebuffer.width,this._accumulateFramebuffer.height,Be.STENCIL_BUFFER_BIT,N.NEAREST)}loadQualityProfile(e){if(G(this._qualityProfile)){const t=wn(e,Xe),n=e.type===Ne.WEBGL1;this._qualityProfile={...t,requiresSharedStencilBuffer:n,shadingRate:n?1:.25,defines:t.dataType!==q.FLOAT?["heatmapPrecisionHalfFloat"]:[]}}return this._qualityProfile}}const Me={geometry:[new ge("a_pos",2,m.BYTE,0,2)]},$i={geometry:[new ge("a_pos",2,m.BYTE,0,4),new ge("a_tex",2,m.BYTE,2,4)]},Zi={geometry:[new ge("a_pos",2,m.UNSIGNED_SHORT,0,4)]},Je={shaders:{vertexShader:Pe("tileInfo/tileInfo.vert"),fragmentShader:Pe("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])},be=300,Ee=32;let Bn=class extends W{constructor(){super(...arguments),this._color=K(1,0,0,1)}dispose(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:n,requestRender:o,allowDelayedRender:i}=e;if(!t.isReady)return;if(this._loadWGLResources(n),i&&b(o)&&(!this._outlineProgram.isCompiled||!this._tileInfoProgram.isCompiled))return void o();n.bindVAO(this._outlineVertexArrayObject),n.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),n.drawArrays(R.LINE_STRIP,0,4);const a=this._getTexture(n,t);a&&(n.bindVAO(this._tileInfoVertexArrayObject),n.useProgram(this._tileInfoProgram),n.bindTexture(a,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",a.descriptor.width,a.descriptor.height),n.drawArrays(R.TRIANGLE_STRIP,0,4)),n.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return;const t=Ae(e,he),n=Ae(e,Je),o=new Int8Array([0,0,1,0,1,1,0,1]),i=ee.createVertex(e,J.STATIC_DRAW,o),a=new le(e,he.attributes,Me,{geometry:i}),r=new Int8Array([0,0,1,0,0,1,1,1]),c=ee.createVertex(e,J.STATIC_DRAW,r),s=new le(e,Je.attributes,Me,{geometry:c});this._outlineProgram=t,this._tileInfoProgram=n,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=s}_getTexture(e,t){if(t.texture&&t.triangleCountReportedInDebug===t.triangleCount)return t.texture;t.triangleCountReportedInDebug=t.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width",`${be}`),this._canvas.setAttribute("height",`${Ee}`),this._canvas.setAttribute("style","display:none"));const n=t.triangleCount;let o=t.key.id;t.triangleCount>0&&(o+=`, ${n}`);const i=this._canvas,a=i.getContext("2d");return a.font="24px sans-serif",a.textAlign="left",a.textBaseline="top",a.clearRect(0,0,be,Ee),n>1e5?(a.fillStyle="red",a.fillRect(0,0,be,Ee),a.fillStyle="black"):(a.clearRect(0,0,be,Ee),a.fillStyle="blue"),a.fillText(o,0,0),t.texture=new se(e,{target:re.TEXTURE_2D,pixelFormat:B.RGBA,dataType:q.UNSIGNED_BYTE,samplingMode:N.NEAREST,wrapMode:Q.CLAMP_TO_EDGE},i),t.texture}},Gn=class extends Fe{supportsSymbology(e){return e===te.PIE_CHART}_drawMarkers(e,t,n,o,i,a,r){const{context:c}=e,{rendererInfo:s}=e,{rendererSchema:u}=s;fe(u,"pie-chart"),n.setUniform4fv("u_colors",u.colors),n.setUniform4fv("u_defaultColor",u.defaultColor),n.setUniform4fv("u_othersColor",u.othersColor),n.setUniform4fv("u_outlineColor",u.outlineColor),n.setUniform1f("u_donutRatio",u.holePercentage),n.setUniform1f("u_sectorThreshold",u.sectorThreshold),n.setUniform1f("u_outlineWidth",u.outlineWidth),c.drawElements(o,i,m.UNSIGNED_INT,a)}},Yn=class extends W{constructor(){super(...arguments),this._color=K(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e}){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(X.KEEP,X.KEEP,X.REPLACE),e.setStencilWriteMask(255)}draw(e,t){const{context:n,requestRender:o,allowDelayedRender:i}=e;this._initialized||this._initialize(n),i&&b(o)&&!this._solidProgram.isCompiled?o():(n.setStencilFunctionSeparate(Et.FRONT_AND_BACK,V.GREATER,t.stencilRef,255),n.bindVAO(this._solidVertexArrayObject),n.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),n.drawArrays(R.TRIANGLE_STRIP,0,4),n.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=Ae(e,he);if(!t)return!1;const n=new Int8Array([0,0,1,0,0,1,1,1]),o=ee.createVertex(e,J.STATIC_DRAW,n),i=new le(e,he.attributes,Me,{geometry:o});return this._solidProgram=t,this._solidVertexArrayObject=i,this._initialized=!0,!0}};class Hn extends W{constructor(){super(...arguments),this._color=K(1,0,0,1),this._patternMatrix=_e(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){const{context:n,painter:o,styleLayerUID:i,requestRender:a,allowDelayedRender:r}=e;this._loadWGLResources(e);const c=e.displayLevel,s=e.styleLayer,u=s.backgroundMaterial,f=o.vectorTilesMaterialManager,_=s.getPaintValue("background-color",c),v=s.getPaintValue("background-opacity",c),h=s.getPaintValue("background-pattern",c),p=h!==void 0,d=_[3]*v,C=1|window.devicePixelRatio,g=e.spriteMosaic;let O,P;const S=C>lt?2:1,y=e.drawPhase===U.HITTEST,x=this._programOptions;x.id=y,x.pattern=p;const T=f.getMaterialProgram(n,u,x);if(r&&b(a)&&!T.isCompiled)a();else{if(n.bindVAO(this._vao),n.useProgram(T),p){const I=g.getMosaicItemPosition(h,!0);if(b(I)){const{tl:A,br:E,page:L}=I;O=E[0]-A[0],P=E[1]-A[1];const M=g.getPageSize(L);b(M)&&(g.bind(n,N.LINEAR,L,$),T.setUniform4f("u_tlbr",A[0],A[1],E[0],E[1]),T.setUniform2fv("u_mosaicSize",M),T.setUniform1i("u_texture",$))}T.setUniform1f("u_opacity",v)}else this._color[0]=d*_[0],this._color[1]=d*_[1],this._color[2]=d*_[2],this._color[3]=d,T.setUniform4fv("u_color",this._color);if(T.setUniform1f("u_depth",s.z||0),y){const I=xe(i+1);T.setUniform4fv("u_id",I)}for(const I of t){if(T.setUniform1f("u_coord_range",I.rangeX),T.setUniformMatrix3fv("u_dvsMat3",I.transforms.dvs),p){const A=Math.max(2**(Math.round(c)-I.key.level),1),E=S*I.width*A,L=E/We(O),M=E/We(P);this._patternMatrix[0]=L,this._patternMatrix[4]=M,T.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}n.setStencilFunction(V.EQUAL,0,255),n.drawArrays(R.TRIANGLE_STRIP,0,4)}}}_loadWGLResources(e){if(this._vao)return;const{context:t,styleLayer:n}=e,o=n.backgroundMaterial,i=new Int8Array([0,0,1,0,0,1,1,1]),a=ee.createVertex(t,J.STATIC_DRAW,i),r=new le(t,o.getAttributeLocations(),o.getLayoutInfo(),{geometry:a});this._vao=r}}let Wn=class extends W{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:o,requiredLevel:i,state:a,drawPhase:r,painter:c,spriteMosaic:s,styleLayerUID:u,requestRender:f,allowDelayedRender:_}=e;if(!t.some(x=>{var T;return((T=x.layerData.get(u))==null?void 0:T.circleIndexCount)??!1}))return;const v=e.styleLayer,h=v.circleMaterial,p=c.vectorTilesMaterialManager,d=1.2,C=v.getPaintValue("circle-translate",o),g=v.getPaintValue("circle-translate-anchor",o),O=r===U.HITTEST,P=this._programOptions;P.id=O;const S=p.getMaterialProgram(n,h,P);if(_&&b(f)&&!S.isCompiled)return void f();n.useProgram(S),S.setUniformMatrix3fv("u_displayMat3",g===de.VIEWPORT?a.displayMat3:a.displayViewMat3),S.setUniform2fv("u_circleTranslation",C),S.setUniform1f("u_depth",v.z),S.setUniform1f("u_antialiasingWidth",d);let y=-1;if(O){const x=xe(u+1);S.setUniform4fv("u_id",x)}for(const x of t){if(!x.layerData.has(u))continue;x.key.level!==y&&(y=x.key.level,h.setDataUniforms(S,o,v,y,s));const T=x.layerData.get(u);if(!T.circleIndexCount)continue;T.prepareForRendering(n);const I=T.circleVertexArrayObject;G(I)||(n.bindVAO(I),S.setUniformMatrix3fv("u_dvsMat3",x.transforms.dvs),i!==x.key.level?n.setStencilFunction(V.EQUAL,x.stencilRef,255):n.setStencilFunction(V.GREATER,255,255),n.drawElements(R.TRIANGLES,T.circleIndexCount,m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*T.circleIndexStart),x.triangleCount+=T.circleIndexCount/3)}}};const et=1/65536;let kn=class extends W{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:n,drawPhase:o,renderPass:i,spriteMosaic:a,styleLayerUID:r}=e;let c=!1;for(const S of t)if(S.layerData.has(r)){const y=S.layerData.get(r);if(y.fillIndexCount>0||y.outlineIndexCount>0){c=!0;break}}if(!c)return;const s=e.styleLayer,u=s.getPaintProperty("fill-pattern"),f=u!==void 0,_=f&&u.isDataDriven;let v;if(f&&!_){const S=u.getValue(n);v=a.getMosaicItemPosition(S,!0)}const h=!f&&s.getPaintValue("fill-antialias",n);let p=!0,d=1;if(!f){const S=s.getPaintProperty("fill-color"),y=s.getPaintProperty("fill-opacity");if(!(S!=null&&S.isDataDriven)&&!(y!=null&&y.isDataDriven)){const x=s.getPaintValue("fill-color",n);d=s.getPaintValue("fill-opacity",n)*x[3],d>=1&&(p=!1)}}if(p&&i==="opaque")return;let C;o===U.HITTEST&&(C=xe(r+1));const g=s.getPaintValue("fill-translate",n),O=s.getPaintValue("fill-translate-anchor",n);(p||i!=="translucent")&&this._drawFill(e,r,s,t,g,O,f,v,_,C);const P=!s.hasDataDrivenOutlineColor&&s.outlineUsesFillColor&&d<1;h&&i!=="opaque"&&!P&&this._drawOutline(e,r,s,t,g,O,C)}_drawFill(e,t,n,o,i,a,r,c,s,u){if(r&&!s&&G(c))return;const{context:f,displayLevel:_,state:v,drawPhase:h,painter:p,pixelRatio:d,spriteMosaic:C,requestRender:g,allowDelayedRender:O}=e,P=n.fillMaterial,S=p.vectorTilesMaterialManager,y=d>lt?2:1,x=h===U.HITTEST,T=this._fillProgramOptions;T.id=x,T.pattern=r;const I=S.getMaterialProgram(f,P,T);if(O&&b(g)&&!I.isCompiled)return void g();if(f.useProgram(I),b(c)){const{page:E}=c,L=C.getPageSize(E);b(L)&&(C.bind(f,N.LINEAR,E,$),I.setUniform2fv("u_mosaicSize",L),I.setUniform1i("u_texture",$))}I.setUniformMatrix3fv("u_displayMat3",a===de.VIEWPORT?v.displayMat3:v.displayViewMat3),I.setUniform2fv("u_fillTranslation",i),I.setUniform1f("u_depth",n.z+et),x&&I.setUniform4fv("u_id",u);let A=-1;for(const E of o){if(!E.layerData.has(t))continue;E.key.level!==A&&(A=E.key.level,P.setDataUniforms(I,_,n,A,C));const L=E.layerData.get(t);if(!L.fillIndexCount)continue;L.prepareForRendering(f);const M=L.fillVertexArrayObject;if(!G(M)){if(f.bindVAO(M),I.setUniformMatrix3fv("u_dvsMat3",E.transforms.dvs),f.setStencilFunction(V.EQUAL,E.stencilRef,255),r){const w=Math.max(2**(Math.round(_)-E.key.level),1),F=E.rangeX/(y*E.width*w);I.setUniform1f("u_patternFactor",F)}if(s){const w=L.patternMap;if(!w)continue;for(const[F,ne]of w){const ie=C.getPageSize(F);b(ie)&&(C.bind(f,N.LINEAR,F,$),I.setUniform2fv("u_mosaicSize",ie),I.setUniform1i("u_texture",$),f.drawElements(R.TRIANGLES,ne[1],m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*ne[0]))}}else f.drawElements(R.TRIANGLES,L.fillIndexCount,m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.fillIndexStart);E.triangleCount+=L.fillIndexCount/3}}}_drawOutline(e,t,n,o,i,a,r){const{context:c,displayLevel:s,state:u,drawPhase:f,painter:_,pixelRatio:v,spriteMosaic:h,requestRender:p,allowDelayedRender:d}=e,C=n.outlineMaterial,g=_.vectorTilesMaterialManager,O=.75/v,P=f===U.HITTEST,S=this._outlineProgramOptions;S.id=P;const y=g.getMaterialProgram(c,C,S);if(d&&b(p)&&!y.isCompiled)return void p();c.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",a===de.VIEWPORT?u.displayMat3:u.displayViewMat3),y.setUniform2fv("u_fillTranslation",i),y.setUniform1f("u_depth",n.z+et),y.setUniform1f("u_outline_width",O),P&&y.setUniform4fv("u_id",r);let x=-1;for(const T of o){if(!T.layerData.has(t))continue;T.key.level!==x&&(x=T.key.level,C.setDataUniforms(y,s,n,x,h));const I=T.layerData.get(t);if(I.prepareForRendering(c),!I.outlineIndexCount)continue;const A=I.outlineVertexArrayObject;G(A)||(c.bindVAO(A),y.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),c.setStencilFunction(V.EQUAL,T.stencilRef,255),c.drawElements(R.TRIANGLES,I.outlineIndexCount,m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*I.outlineIndexStart),T.triangleCount+=I.outlineIndexCount/3)}}};class $n extends W{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:o,state:i,drawPhase:a,painter:r,pixelRatio:c,spriteMosaic:s,styleLayerUID:u,requestRender:f,allowDelayedRender:_}=e;if(!t.some(M=>{var w;return((w=M.layerData.get(u))==null?void 0:w.lineIndexCount)??!1}))return;const v=e.styleLayer,h=v.lineMaterial,p=r.vectorTilesMaterialManager,d=v.getPaintValue("line-translate",o),C=v.getPaintValue("line-translate-anchor",o),g=v.getPaintProperty("line-pattern"),O=g!==void 0,P=O&&g.isDataDriven;let S,y;if(O&&!P){const M=g.getValue(o);S=s.getMosaicItemPosition(M)}let x=!1;if(!O){const M=v.getPaintProperty("line-dasharray");if(y=M!==void 0,x=y&&M.isDataDriven,y&&!x){const w=M.getValue(o),F=v.getDashKey(w,v.getLayoutValue("line-cap",o));S=s.getMosaicItemPosition(F)}}const T=1/c,I=a===U.HITTEST,A=this._programOptions;A.id=I,A.pattern=O,A.sdf=y;const E=p.getMaterialProgram(n,h,A);if(_&&b(f)&&!E.isCompiled)return void f();if(n.useProgram(E),E.setUniformMatrix3fv("u_displayViewMat3",i.displayViewMat3),E.setUniformMatrix3fv("u_displayMat3",C===de.VIEWPORT?i.displayMat3:i.displayViewMat3),E.setUniform2fv("u_lineTranslation",d),E.setUniform1f("u_depth",v.z),E.setUniform1f("u_antialiasing",T),I){const M=xe(u+1);E.setUniform4fv("u_id",M)}if(S&&b(S)){const{page:M}=S,w=s.getPageSize(M);b(w)&&(s.bind(n,N.LINEAR,M,$),E.setUniform2fv("u_mosaicSize",w),E.setUniform1i("u_texture",$))}let L=-1;for(const M of t){if(!M.layerData.has(u))continue;M.key.level!==L&&(L=M.key.level,h.setDataUniforms(E,o,v,L,s));const w=2**(o-L)/c;E.setUniform1f("u_zoomFactor",w);const F=M.layerData.get(u);if(!F.lineIndexCount)continue;F.prepareForRendering(n);const ne=F.lineVertexArrayObject;if(!G(ne)){if(n.bindVAO(ne),E.setUniformMatrix3fv("u_dvsMat3",M.transforms.dvs),n.setStencilFunction(V.EQUAL,M.stencilRef,255),P||x){const ie=F.patternMap;if(!ie)continue;for(const[ve,z]of ie){const ue=s.getPageSize(ve);b(ue)&&(s.bind(n,N.LINEAR,ve,$),E.setUniform2fv("u_mosaicSize",ue),E.setUniform1i("u_texture",$),n.drawElements(R.TRIANGLES,z[1],m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*z[0]))}}else n.drawElements(R.TRIANGLES,F.lineIndexCount,m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*F.lineIndexStart);M.triangleCount+=F.lineIndexCount/3}}}}const Zn=1/65536;class qn extends W{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=Pt()}dispose(){}drawMany(e,t){const{drawPhase:n,styleLayerUID:o}=e,i=e.styleLayer;let a;n===U.HITTEST&&(a=xe(o+1)),this._drawIcons(e,i,t,a),this._drawText(e,i,t,a)}_drawIcons(e,t,n,o){const{context:i,displayLevel:a,drawPhase:r,painter:c,spriteMosaic:s,state:u,styleLayerUID:f,requestRender:_,allowDelayedRender:v}=e,h=t.iconMaterial,p=c.vectorTilesMaterialManager;let d,C=!1;for(const L of n)if(L.layerData.has(f)&&(d=L.layerData.get(f),d.iconPerPageElementsMap.size>0)){C=!0;break}if(!C)return;const g=t.getPaintValue("icon-translate",a),O=t.getPaintValue("icon-translate-anchor",a);let P=t.getLayoutValue("icon-rotation-alignment",a);P===Z.AUTO&&(P=t.getLayoutValue("symbol-placement",a)===ke.POINT?Z.VIEWPORT:Z.MAP);const S=P===Z.MAP,y=t.getLayoutValue("icon-keep-upright",a)&&S,x=d.isIconSDF,T=r===U.HITTEST,I=this._iconProgramOptions;I.id=T,I.sdf=x;const A=p.getMaterialProgram(i,h,I);if(v&&b(_)&&!A.isCompiled)return void _();i.useProgram(A),A.setUniformMatrix3fv("u_displayViewMat3",P===Z.MAP?u.displayViewMat3:u.displayMat3),A.setUniformMatrix3fv("u_displayMat3",O===de.VIEWPORT?u.displayMat3:u.displayViewMat3),A.setUniform2fv("u_iconTranslation",g),A.setUniform1f("u_depth",t.z),A.setUniform1f("u_mapRotation",Ze(u.rotation)),A.setUniform1f("u_keepUpright",y?1:0),A.setUniform1f("u_level",10*a),A.setUniform1i("u_texture",$),A.setUniform1f("u_fadeDuration",$e/1e3),T&&A.setUniform4fv("u_id",o);let E=-1;for(const L of n){if(!L.layerData.has(f)||(L.key.level!==E&&(E=L.key.level,h.setDataUniforms(A,a,t,E,s)),d=L.layerData.get(f),d.iconPerPageElementsMap.size===0))continue;d.prepareForRendering(i),d.updateOpacityInfo();const M=d.iconVertexArrayObject;if(!G(M)){i.bindVAO(M),A.setUniformMatrix3fv("u_dvsMat3",L.transforms.dvs),A.setUniform1f("u_time",(performance.now()-d.lastOpacityUpdate)/1e3);for(const[w,F]of d.iconPerPageElementsMap)this._renderIconRange(e,A,F,w,L)}}}_renderIconRange(e,t,n,o,i){const{context:a,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(o)/4,this._spritesTextureSize[1]=r.getHeight(o)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),r.bind(a,N.LINEAR,o,$),a.setStencilTestEnabled(!0),a.setStencilFunction(V.GREATER,255,255),a.setStencilWriteMask(0),a.drawElements(R.TRIANGLES,n[1],m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]),i.triangleCount+=n[1]/3}_drawText(e,t,n,o){const{context:i,displayLevel:a,drawPhase:r,glyphMosaic:c,painter:s,pixelRatio:u,spriteMosaic:f,state:_,styleLayerUID:v,requestRender:h,allowDelayedRender:p}=e,d=t.textMaterial,C=s.vectorTilesMaterialManager;let g,O=!1;for(const j of n)if(j.layerData.has(v)&&(g=j.layerData.get(v),g.glyphPerPageElementsMap.size>0)){O=!0;break}if(!O)return;const P=t.getPaintProperty("text-opacity");if(P&&!P.isDataDriven&&P.getValue(a)===0)return;const S=t.getPaintProperty("text-color"),y=!S||S.isDataDriven||S.getValue(a)[3]>0,x=t.getPaintProperty("text-halo-width"),T=t.getPaintProperty("text-halo-color"),I=(!x||x.isDataDriven||x.getValue(a)>0)&&(!T||T.isDataDriven||T.getValue(a)[3]>0);if(!y&&!I)return;const A=24/8;let E=t.getLayoutValue("text-rotation-alignment",a);E===Z.AUTO&&(E=t.getLayoutValue("symbol-placement",a)===ke.POINT?Z.VIEWPORT:Z.MAP);const L=E===Z.MAP,M=t.getLayoutValue("text-keep-upright",a)&&L,w=r===U.HITTEST,F=.8*A/u;this._glyphTextureSize||(this._glyphTextureSize=pe(c.width/4,c.height/4));const ne=t.getPaintValue("text-translate",a),ie=t.getPaintValue("text-translate-anchor",a),ve=this._sdfProgramOptions;ve.id=w;const z=C.getMaterialProgram(i,d,ve);if(p&&b(h)&&!z.isCompiled)return void h();i.useProgram(z),z.setUniformMatrix3fv("u_displayViewMat3",E===Z.MAP?_.displayViewMat3:_.displayMat3),z.setUniformMatrix3fv("u_displayMat3",ie===de.VIEWPORT?_.displayMat3:_.displayViewMat3),z.setUniform2fv("u_textTranslation",ne),z.setUniform1f("u_depth",t.z+Zn),z.setUniform2fv("u_mosaicSize",this._glyphTextureSize),z.setUniform1f("u_mapRotation",Ze(_.rotation)),z.setUniform1f("u_keepUpright",M?1:0),z.setUniform1f("u_level",10*a),z.setUniform1i("u_texture",He),z.setUniform1f("u_antialiasingWidth",F),z.setUniform1f("u_fadeDuration",$e/1e3),w&&z.setUniform4fv("u_id",o);let ue=-1;for(const j of n){if(!j.layerData.has(v)||(j.key.level!==ue&&(ue=j.key.level,d.setDataUniforms(z,a,t,ue,f)),g=j.layerData.get(v),g.glyphPerPageElementsMap.size===0))continue;g.prepareForRendering(i),g.updateOpacityInfo();const Ue=g.textVertexArrayObject;if(G(Ue))continue;i.bindVAO(Ue),z.setUniformMatrix3fv("u_dvsMat3",j.transforms.dvs),i.setStencilTestEnabled(!0),i.setStencilFunction(V.GREATER,255,255),i.setStencilWriteMask(0);const gt=(performance.now()-g.lastOpacityUpdate)/1e3;z.setUniform1f("u_time",gt),g.glyphPerPageElementsMap.forEach((ht,xt)=>{this._renderGlyphRange(i,ht,xt,c,z,I,y,j)})}}_renderGlyphRange(e,t,n,o,i,a,r,c){o.bind(e,N.LINEAR,n,He),a&&(i.setUniform1f("u_halo",1),e.drawElements(R.TRIANGLES,t[1],m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),c.triangleCount+=t[1]/3),r&&(i.setUniform1f("u_halo",0),e.drawElements(R.TRIANGLES,t[1],m.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),c.triangleCount+=t[1]/3)}}const Kn=l=>ce(l.data,{geometry:[{location:0,name:"a_pos",count:2,type:m.SHORT},{location:1,name:"a_id",count:4,type:m.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:m.UNSIGNED_BYTE},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:m.UNSIGNED_BYTE},{location:6,name:"a_glyphData",count:4,type:m.UNSIGNED_BYTE},{location:7,name:"a_vertexOffset",count:2,type:m.SHORT},{location:8,name:"a_texCoords",count:2,type:m.UNSIGNED_SHORT}]});let jn=class extends ye{dispose(){}getGeometryType(){return me.LABEL}supportsSymbology(e){return!0}drawGeometry(e,t,n,o){const{context:i,painter:a,state:r,rendererInfo:c,requestRender:s,allowDelayedRender:u}=e,f=kt.load(n.materialKey),_=f.mapAligned?1:0;if(!_&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return;const{bufferLayouts:v,attributes:h}=Kn(f),p=a.materialManager.getMaterialProgram(e,f,"materials/label",h,o);if(u&&b(s)&&!p.isCompiled)return void s();e.context.setStencilFunction(V.EQUAL,0,255),i.useProgram(p),this._setSharedUniforms(p,e,t),a.textureManager.bindTextures(i,p,f);const d=_===1?r.displayViewMat3:r.displayMat3;this._setSizeVVUniforms(f,p,c,t),p.setUniform1f("u_mapRotation",Math.floor(r.rotation/360*254)),p.setUniform1f("u_mapAligned",_),p.setUniformMatrix3fv("u_displayMat3",d),p.setUniform1f("u_opacity",1),p.setUniform2fv("u_screenSize",e.state.size),p.setUniform1f("u_isHalo",1);const C=n.target.getVAO(i,v,h),g=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;i.bindVAO(C),i.drawElements(R.TRIANGLES,n.indexCount,m.UNSIGNED_INT,g),p.setUniform1f("u_isHalo",0),i.drawElements(R.TRIANGLES,n.indexCount,m.UNSIGNED_INT,g),i.setStencilTestEnabled(!0),i.setBlendingEnabled(!0)}};const Xn=l=>ce(l.data,{geometry:[{location:0,name:"a_pos",count:2,type:m.SHORT},{location:1,name:"a_id",count:4,type:m.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:m.BYTE},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:m.UNSIGNED_SHORT},{location:5,name:"a_tlbr",count:4,type:m.UNSIGNED_SHORT},{location:6,name:"a_segmentDirection",count:4,type:m.BYTE},{location:7,name:"a_aux",count:2,type:m.UNSIGNED_SHORT},{location:8,name:"a_zoomRange",count:2,type:m.UNSIGNED_SHORT}]});let Qn=class extends ye{dispose(){}getGeometryType(){return me.LINE}supportsSymbology(e){return!0}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,displayLevel:c,passOptions:s,requestRender:u,allowDelayedRender:f}=e,_=$t.load(n.materialKey),v=b(s)&&s.type==="hittest";let h=Xn(_),p=R.TRIANGLES;v&&(h=this._getTriangleDesc(n.materialKey,h),p=R.POINTS);const{attributes:d,bufferLayouts:C}=h,g=a.materialManager.getMaterialProgram(e,_,"materials/line",d,o);if(f&&b(u)&&!g.isCompiled)return void u();const O=1/e.pixelRatio,P=0;i.useProgram(g),this._setSharedUniforms(g,e,t),_.textureBinding&&a.textureManager.bindTextures(i,g,_);const S=2**(c-t.key.level);g.setUniform1f("u_zoomFactor",S),g.setUniform1f("u_blur",P+O),g.setUniform1f("u_antialiasing",O),this._setSizeVVUniforms(_,g,r,t),this._setColorAndOpacityVVUniforms(_,g,r),i.setFaceCullingEnabled(!1);const y=n.target.getVAO(i,C,d,v);let x=n.indexCount,T=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;v&&(x/=3,T/=3),i.bindVAO(y),i.drawElements(p,x,m.UNSIGNED_INT,T)}};const Jn=l=>ce(l.data,{geometry:[{location:0,name:"a_pos",count:2,type:m.SHORT},{location:1,name:"a_id",count:4,type:m.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:m.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:m.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:m.BYTE},{location:6,name:"a_zoomRange",count:2,type:m.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:m.SHORT},{location:8,name:"a_texCoords",count:2,type:m.UNSIGNED_SHORT}]});let ei=class extends ye{dispose(){}getGeometryType(){return me.TEXT}supportsSymbology(e){return!0}drawGeometry(e,t,n,o){const{context:i,painter:a,rendererInfo:r,state:c,passOptions:s,requestRender:u,allowDelayedRender:f}=e,_=Zt.load(n.materialKey),v=b(s)&&s.type==="hittest",{bufferLayouts:h,attributes:p}=Jn(_),d=a.materialManager.getMaterialProgram(e,_,"materials/text",p,o);if(f&&b(u)&&!d.isCompiled)return void u();i.useProgram(d);let C=R.TRIANGLES;v&&(C=R.POINTS),this._setSharedUniforms(d,e,t),a.textureManager.bindTextures(i,d,_),d.setUniformMatrix3fv("u_displayMat3",c.displayMat3),d.setUniformMatrix3fv("u_displayViewMat3",c.displayViewMat3),this._setSizeVVUniforms(_,d,r,t),this._setColorAndOpacityVVUniforms(_,d,r),this._setRotationVVUniforms(_,d,r),d.setUniform1f("u_isHalo",1);const g=n.target.getVAO(i,h,p),O=n.indexFrom*Uint32Array.BYTES_PER_ELEMENT;i.bindVAO(g),i.drawElements(R.TRIANGLES,n.indexCount,m.UNSIGNED_INT,O),d.setUniform1f("u_isHalo",0),i.drawElements(C,n.indexCount,m.UNSIGNED_INT,O)}};const ti={marker:Fe,line:Qn,fill:pt,text:ei,label:jn,clip:Pn,stencil:Yn,bitmap:pn,overlay:Rn,raster:dn,rasterVF:mn,flow:Jt,tileInfo:Bn,vtlBackground:Hn,vtlFill:kn,vtlLine:$n,vtlCircle:Wn,vtlSymbol:qn,dotDensity:Mn,heatmap:Fn,pieChart:Gn},ni=l=>{switch(l.BYTES_PER_ELEMENT){case 1:return m.UNSIGNED_BYTE;case 2:return m.UNSIGNED_SHORT;case 4:return m.UNSIGNED_INT;default:throw new ae("Cannot get DataType of array")}},ii=(l,e,t,n)=>{let o=0;for(let i=1;i<t;i++){const a=l[2*(e+i-1)],r=l[2*(e+i-1)+1];o+=(l[2*(e+i)]-a)*(l[2*(e+i)+1]+r)}return n?o>0:o<0},tt=({coords:l,lengths:e},t)=>{const n=[];for(let o=0,i=0;o<e.length;i+=e[o],o+=1){const a=i,r=[];for(;o<e.length-1&&ii(l,i+e[o],e[o+1],t);o+=1,i+=e[o])r.push(i+e[o]-a);const c=l.slice(2*a,2*(i+e[o])),s=Kt(c,r,2);for(const u of s)n.push(u+a)}return n};class k{constructor(e,t,n,o=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=n,this.isMapSpace=o}static fromRect({x:e,y:t,width:n,height:o}){const i=e,a=t,r=i+n,c=a+o;return k.fromScreenExtent({xmin:i,ymin:a,xmax:r,ymax:c})}static fromPath(e){const t=Xt(new qe,e.path,!1,!1),n=t.coords,o=new Uint32Array(tt(t,!0)),i=new Uint32Array(n.length/2);for(let a=0;a<i.length;a++)i[a]=H(Math.floor(n[2*a]),Math.floor(n[2*a+1]));return new k({geometry:i},o,R.TRIANGLES)}static fromGeometry(e,t){const n=t.geometry.type;switch(n){case"polygon":return k.fromPolygon(e,t.geometry);case"extent":return k.fromMapExtent(e,t.geometry);default:return ze.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new ae("mapview-bad-type",`Unable to create a mesh from type ${n}`,t)),k.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const n=Qt(new qe,t,!1,!1),o=n.coords,i=new Uint32Array(tt(n,!1)),a=new Uint32Array(o.length/2),r=Ye(),c=Ye();for(let s=0;s<a.length;s++)jt(r,o[2*s],o[2*s+1]),e.toScreen(c,r),a[s]=H(Math.floor(c[0]),Math.floor(c[1]));return new k({geometry:a},i,R.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:n,ymax:o}){const i={geometry:new Uint32Array([H(e,n),H(t,n),H(e,o),H(e,o),H(t,n),H(t,o)])},a=new Uint32Array([0,1,2,3,4,5]);return new k(i,a,R.TRIANGLES)}static fromMapExtent(e,t){const[n,o]=e.toScreen([0,0],[t.xmin,t.ymin]),[i,a]=e.toScreen([0,0],[t.xmax,t.ymax]),r={geometry:new Uint32Array([H(n,o),H(i,o),H(n,a),H(n,a),H(i,o),H(i,a)])},c=new Uint32Array([0,1,2,3,4,5]);return new k(r,c,R.TRIANGLES)}destroy(){b(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)b(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return ni(this.indices)}getIndexBuffer(e,t=J.STATIC_DRAW){return this._cache.indexBuffer||(this._cache.indexBuffer=ee.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=J.STATIC_DRAW){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((n,o)=>({...n,[o]:ee.createVertex(e,t,this.vertices[o])}),{})),this._cache.vertexBuffers}}const Ie=l=>parseFloat(l)/100;class Ve extends ot{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=qt(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new Ve(e,t)}_destroyGL(){b(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),b(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,n,o){const[i,a]=t.size;if(this._clip.type!=="geometry"&&this._lastWidth===i&&this._lastHeight===a||(this._lastWidth=i,this._lastHeight=a,this._destroyGL()),G(this._cache.vao)){const r=this._createMesh(t,this._clip),c=r.getIndexBuffer(e),s=r.getVertexBuffers(e);this._cache.mesh=r,this._cache.vao=new le(e,n,o,s,c)}return this._cache.vao}_createTransforms(){return{dvs:_e()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[n,o]=e.size,i=typeof t.left=="string"?Ie(t.left)*n:t.left,a=typeof t.right=="string"?Ie(t.right)*n:t.right,r=typeof t.top=="string"?Ie(t.top)*o:t.top,c=typeof t.bottom=="string"?Ie(t.bottom)*o:t.bottom,s=i,u=r;return{x:s,y:u,width:Math.max(n-a-s,0),height:Math.max(o-c-u,0)}}_createMesh(e,t){switch(t.type){case"rect":return k.fromRect(this._createScreenRect(e,t));case"path":return k.fromPath(t);case"geometry":return k.fromGeometry(e,t);default:return ze.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new ae("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),k.fromRect({x:0,y:0,width:1,height:1})}}}class no extends Rt{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}beforeRender(e){super.beforeRender(e),this.updateTransforms(e.state)}_createTransforms(){return{dvs:_e()}}doRender(e){const t=this.createRenderParams(e),{painter:n,globalOpacity:o,profiler:i,drawPhase:a}=t,r=a===U.LABEL||a===U.HIGHLIGHT?1:o*this.computedOpacity;i.recordContainerStart(this.name),n.beforeRenderLayer(t,this._clippingInfos?255:0,r),this.renderChildren(t),n.compositeLayer(t,r),i.recordContainerEnd()}renderChildren(e){G(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this._renderPasses)try{t.render(e)}catch{}}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[ti.clip],target:()=>this._clippingInfos,drawPhase:U.MAP|U.LABEL|U.LABEL_ALPHA|U.DEBUG|U.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(b(this._clippingInfos)&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),!this.stage)return;const e=this._clips;b(e)&&e.length&&(this._clippingInfos=e.items.map(t=>Ve.fromClipArea(this.stage,t))),this.requestRender()}}export{we as a,zn as b,ti as c,mn as d,tn as e,Yn as h,Jt as i,Zi as m,Pe as n,no as o,Ni as p,$i as t,Bn as x};
