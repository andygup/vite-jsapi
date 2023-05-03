import{cc as v,ij as m,ik as P,bT as f,cq as c,cd as y,il as A,im as O,io as $,f as r,e$ as _,ip as S,iq as p,cv as E,_ as C,ir as x,is as g,e as o,cE as n,eS as d,cw as w,cx as b,cy as D,cz as N,it as M,iu as R,iv as I,cA as F,iw as L,cB as B,cC as U,ix as z,cD as W,iy as G,cF as j,iz as q,iA as H,E as u,iB as Q,iC as V,iD as k,iE as J}from"./index-ebffac9a.js";function K(a){const e=new v,{vertex:t,fragment:s}=e;return m(t,a),e.include(P,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(A,a),s.uniforms.add(new O("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===r.Alpha?s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(_)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(S),s.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(_)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===p.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const X=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new b(e.rctx,h.shader.get().build(this.configuration),D)}_setPipelineState(e,t){const s=this.configuration,l=e===p.NONE,T=e===p.FrontFace;return N({blending:s.output!==r.Color&&s.output!==r.Alpha||!s.transparent?null:l?Y:M(e),culling:R(s.cullFace),depthTest:{func:I(e)},depthWrite:l?s.writeDepth?F:null:L(e),colorWrite:B,stencilWrite:s.hasOccludees?U:null,stencilTest:s.hasOccludees?t?z:W:null,polygonOffset:l||T?null:G(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new E(X,()=>C(()=>import("./ImageMaterial.glsl-51d67f48.js"),["assets/ImageMaterial.glsl-51d67f48.js","assets/index-ebffac9a.js","assets/index-0492b785.css"]));const Y=x(g.ONE,g.ONE_MINUS_SRC_ALPHA);class i extends j{constructor(){super(...arguments),this.output=r.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:r.COUNT})],i.prototype,"output",void 0),o([n({count:d.COUNT})],i.prototype,"cullFace",void 0),o([n()],i.prototype,"hasSlicePlane",void 0),o([n()],i.prototype,"transparent",void 0),o([n()],i.prototype,"enableOffset",void 0),o([n()],i.prototype,"writeDepth",void 0),o([n()],i.prototype,"hasOccludees",void 0),o([n({count:p.COUNT})],i.prototype,"transparencyPassType",void 0),o([n()],i.prototype,"hasMultipassTerrain",void 0),o([n()],i.prototype,"cullAboveGround",void 0);class ae extends q{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new i}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<H,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===r.Color||t===r.Alpha||t===r.Highlight?e===u.DRAPED_MATERIAL?!0:t===r.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Z(e)}createBufferWriter(){return new Q(V)}}class Z extends k{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==r.Color&&this._output!==r.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends J{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,K as v};
