import{W as c}from"./WGLContainer-3bc2c49b.js";import{T as d}from"./enums-08489827.js";class h extends c{constructor(){super(...arguments),this._prevFBO=void 0,this.requiresDedicatedFBO=!1}dispose(){}doRender(s){const r=this.createRenderParams(s),{context:e,painter:t,profiler:a}=r;this._prevFBO=e.getBoundFramebufferObject(),a.recordContainerStart(this.name);const o=this._getFbo(r),i=t.getRenderTarget();e.bindFramebuffer(o),t.setRenderTarget(o),e.setDepthWriteEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1);for(const n of this.children)n.beforeRender(s);for(const n of this.children)n.processRender(r);for(const n of this.children)n.afterRender(s);t.setRenderTarget(i),t.releaseFbo(o),e.bindFramebuffer(this._prevFBO),t.beforeRenderLayer(r,this._clippingInfos?255:0,this.computedOpacity),o.colorTexture&&(e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),t.blitTexture(e,o.colorTexture,d.NEAREST)),t.compositeLayer(r,this.computedOpacity),a.recordContainerEnd()}createRenderParams(s){return{...super.createRenderParams(s),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(s){const{context:r,painter:e}=s,{width:t,height:a}=r.getViewport();return e.acquireFbo(t,a)}}export{h as G};