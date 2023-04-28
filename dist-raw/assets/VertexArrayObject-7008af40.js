import{L as H,C as p,n as w,cM as $,cN as q,q as K,d as J}from"./index-ffb342b4.js";import{c as L,T as F,w as M,a as k}from"./TextureDescriptor-ee3ba00a.js";import{k as E,U as I,j as x,D as B,s as T,f as c,R as d,d as f,g as R,c as u,e as v,t as z,n as g,q as m,b as P,T as Y,a as j}from"./enums-08489827.js";const A=H.getLogger("esri.views.webgl.BufferObject");class S{static createIndex(e,t,i){return new S(e,E.ELEMENT_ARRAY_BUFFER,t,i)}static createVertex(e,t,i){return new S(e,E.ARRAY_BUFFER,t,i)}static createUniform(e,t,i){if(e.type!==p.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new S(e,E.UNIFORM_BUFFER,t,i)}static createPixelPack(e,t=I.STREAM_READ,i){if(e.type!==p.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const r=new S(e,E.PIXEL_PACK_BUFFER,t);return i&&r.setSize(i),r}static createPixelUnpack(e,t=I.STREAM_DRAW,i){if(e.type!==p.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new S(e,E.PIXEL_UNPACK_BUFFER,t,i)}constructor(e,t,i,r){this._context=e,this.bufferType=t,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(x.BufferObject,this),this._glName=this._context.gl.createBuffer(),L(this._context.gl),r&&this.setData(r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===E.ELEMENT_ARRAY_BUFFER?this._indexType===B.UNSIGNED_INT?this._size*4:this._size*2:this._size}get _isVAOAware(){return this.bufferType===E.ELEMENT_ARRAY_BUFFER||this.bufferType===E.ARRAY_BUFFER}dispose(){var e;if(!((e=this._context)!=null&&e.gl)){this._glName&&A.warn("Leaked WebGL buffer object");return}this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(x.BufferObject,this),this._context=w(this._context)}setSize(e,t=null){if(e<=0&&A.error("Buffer size needs to be positive!"),this.bufferType===E.ELEMENT_ARRAY_BUFFER&&t!=null)switch(this._indexType=t,t){case B.UNSIGNED_SHORT:e*=2;break;case B.UNSIGNED_INT:e*=4;break}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===E.ELEMENT_ARRAY_BUFFER&&($(e)&&(t/=2,this._indexType=B.UNSIGNED_SHORT),q(e)&&(t/=4,this._indexType=B.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const r=this._context.gl;t!=null?r.bufferData(this.bufferType,t,this.usage):r.bufferData(this.bufferType,e,this.usage),L(r),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,t,i,r){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteSize)&&A.error("offset is out of range!"),i>=r&&A.error("end must be bigger than start!"),(t+(r-i))*e.BYTES_PER_ELEMENT>this.byteSize&&A.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===p.WEBGL2)n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,r-i);else{const s=i===0&&r===e.length?e:e.subarray(i,r);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,s)}L(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,i,r){if(this._context.type!==p.WEBGL2){A.error("Get buffer subdata is supported in WebGL2 only!");return}if(i<0||r<0){A.error("Problem getting subdata: offset and length were less than zero!");return}const o=Q(e)?e.BYTES_PER_ELEMENT:1;if(o*((i??0)+(r??0))>e.byteLength){A.error("Problem getting subdata: offset and length exceeded destination size!");return}t+o*(r??0)>this.byteSize&&A.warn("Potential problem getting subdata: requested data exceeds buffer size!");const h=this._context.gl;this._context.bindBuffer(this,E.COPY_READ_BUFFER),h.getBufferSubData(E.COPY_READ_BUFFER,t,e,i,r),this._context.unbindBuffer(E.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,i,r){if(this._context.type!==p.WEBGL2){A.error("Get buffer subdata is supported in WebGL2 only!");return}await this._context.clientWaitAsync(),this.getSubData(e,t,i,r)}}function Q(a){return K(a)}class C{constructor(e,t){this._context=e,this._desc=t,this.type="renderbuffer",this._context.instanceCounter.increment(x.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:r,height:o,internalFormat:n,multisampled:s}=t;if(s){if(this._context.type!==p.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,n,r,o)}else i.renderbufferStorage(i.RENDERBUFFER,n,r,o)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}resize(e,t){const i=this._desc;if(i.width===e&&i.height===t)return;i.width=e,i.height=t;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(x.Renderbuffer,this),this._context=w(this._context))}}function oe(a){const e=a.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function Z(a,e,t,i,r=0){const o=a.gl,n=a.capabilities.instancing;a.bindBuffer(t);for(const s of i){const h=e.get(s.name);h===void 0&&console.error(`There is no location for vertex attribute '${s.name}' defined.`);const l=r*s.stride;if(s.count<=4)o.vertexAttribPointer(h,s.count,s.type,s.normalized,s.stride,s.offset+l),o.enableVertexAttribArray(h),s.divisor>0&&n&&n.vertexAttribDivisor(h,s.divisor);else if(s.count===9)for(let _=0;_<3;_++)o.vertexAttribPointer(h+_,3,s.type,s.normalized,s.stride,s.offset+_*12+l),o.enableVertexAttribArray(h+_),s.divisor>0&&n&&n.vertexAttribDivisor(h+_,s.divisor);else if(s.count===16)for(let _=0;_<4;_++)o.vertexAttribPointer(h+_,4,s.type,s.normalized,s.stride,s.offset+_*16+l),o.enableVertexAttribArray(h+_),s.divisor>0&&n&&n.vertexAttribDivisor(h+_,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count)}}function ee(a,e,t,i){const r=a.gl,o=a.capabilities.instancing;a.bindBuffer(t);for(const n of i){const s=e.get(n.name);if(n.count<=4)r.disableVertexAttribArray(s),n.divisor&&n.divisor>0&&o&&o.vertexAttribDivisor(s,0);else if(n.count===9)for(let h=0;h<3;h++)r.disableVertexAttribArray(s+h),n.divisor&&n.divisor>0&&o&&o.vertexAttribDivisor(s+h,0);else if(n.count===16)for(let h=0;h<4;h++)r.disableVertexAttribArray(s+h),n.divisor&&n.divisor>0&&o&&o.vertexAttribDivisor(s+h,0);else console.error("Unsupported vertex attribute element count: "+n.count)}a.unbindBuffer(E.ARRAY_BUFFER)}function te(a){switch(a){case f.ALPHA:case f.LUMINANCE:case f.RED:case f.RED_INTEGER:case c.R8:case c.R8I:case c.R8UI:case c.R8_SNORM:case d.STENCIL_INDEX8:return 1;case f.LUMINANCE_ALPHA:case f.RG:case f.RG_INTEGER:case c.RGBA4:case c.R16F:case c.R16I:case c.R16UI:case c.RG8:case c.RG8I:case c.RG8UI:case c.RG8_SNORM:case c.RGB565:case c.RGB5_A1:case d.DEPTH_COMPONENT16:return 2;case f.DEPTH_COMPONENT:case f.RGB:case f.RGB_INTEGER:case c.RGB8:case c.RGB8I:case c.RGB8UI:case c.RGB8_SNORM:case c.SRGB8:case d.DEPTH_COMPONENT24:return 3;case f.DEPTH_STENCIL:case f.DEPTH24_STENCIL8:case f.RGBA:case f.RGBA_INTEGER:case c.RGBA8:case c.R32F:case c.R11F_G11F_B10F:case c.RG16F:case c.R32I:case c.R32UI:case c.RG16I:case c.RG16UI:case c.RGBA8I:case c.RGBA8UI:case c.RGBA8_SNORM:case c.SRGB8_ALPHA8:case c.RGB9_E5:case c.RGB10_A2UI:case c.RGB10_A2:case d.DEPTH_STENCIL:case d.DEPTH_COMPONENT32F:case d.DEPTH24_STENCIL8:return 4;case d.DEPTH32F_STENCIL8:return 5;case c.RGB16F:case c.RGB16I:case c.RGB16UI:return 6;case c.RG32F:case c.RG32I:case c.RG32UI:case c.RGBA16F:case c.RGBA16I:case c.RGBA16UI:return 8;case c.RGB32F:case c.RGB32I:case c.RGB32UI:return 12;case c.RGBA32F:case c.RGBA32I:case c.RGBA32UI:return 16;case T.COMPRESSED_RGB_S3TC_DXT1_EXT:case T.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case T.COMPRESSED_RGBA_S3TC_DXT3_EXT:case T.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case T.COMPRESSED_R11_EAC:case T.COMPRESSED_SIGNED_R11_EAC:case T.COMPRESSED_RGB8_ETC2:case T.COMPRESSED_SRGB8_ETC2:case T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case T.COMPRESSED_RG11_EAC:case T.COMPRESSED_SIGNED_RG11_EAC:case T.COMPRESSED_RGBA8_ETC2_EAC:case T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function G(a){if(a==null)return 0;if("descriptor"in a)return a.glName?G(a.descriptor):0;const e=a.internalFormat||"pixelFormat"in a&&a.pixelFormat;if(!e)return 0;const t="hasMipmap"in a&&a.hasMipmap?1.3:1,i=a.width*a.height;return te(e)*i*t}class D{constructor(e,t,i=null,r=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(x.FramebufferObject,this),i!=null){Array.isArray(i)||(i=[i]);for(let o=0;o<i.length;++o){const n=i[o],s=R.COLOR_ATTACHMENT0+o;let h;X(n)?(b(n)?(h=n.descriptor,this._colorAttachments.set(s,n)):(h=n,this._colorAttachments.set(s,new F(this._context,h))),y(h,this._desc)):(V(n)?(h=n.descriptor,this._colorAttachments.set(s,n)):(h=n,this._colorAttachments.set(s,new C(this._context,h))),O(h,this._desc)),this._validateColorAttachmentPoint(s)}}if(r!=null){let o,n;if(X(r))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),b(r)?(n=r.descriptor,this._depthStencilTexture=r):(n=r,this._depthStencilTexture=new F(this._context,n)),y(n,this._desc);else{V(r)?(n=r.descriptor,o=r):(n=r,o=new C(this._context,n));const s=this._desc.depthStencilTarget??u.DEPTH_STENCIL_RENDER_BUFFER;s===u.STENCIL_RENDER_BUFFER?this._stencilAttachment=o:s===u.DEPTH_RENDER_BUFFER||s===u.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=o:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=s,O(n,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(x.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(R.COLOR_ATTACHMENT0);return!e||!b(e)?null:e}get colorAttachment(){return this._colorAttachments.get(R.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width??0}get height(){return this._desc.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((e,[t,i])=>e+G(i),0)+G(this.depthStencilAttachment)}getColorTexture(e){const t=this._colorAttachments.get(e);return!t||!b(t)?null:t}attachColorTexture(e,t=R.COLOR_ATTACHMENT0){if(!e)return;this._validateColorAttachmentPoint(t);const i=e.descriptor;y(i,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e)}detachColorTexture(e=R.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(b(t)){const i=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),i}}setColorTextureTarget(e,t=R.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(t);b(i)&&this._framebufferTexture2D(i.glName,t,e)}attachDepthStencilTexture(e){if(e==null)return;const t=e.descriptor;t.pixelFormat!==f.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==v.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),y(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==u.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=u.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,z)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,z)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(e==null)return;const t=e.descriptor;if(t.internalFormat!==d.DEPTH_STENCIL&&t.internalFormat!==d.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),O(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===d.DEPTH_STENCIL?u.DEPTH_STENCIL_RENDER_BUFFER:u.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._desc.depthStencilTarget===u.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(g.FRAMEBUFFER,r,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===u.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(g.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}detachAll(){this._colorAttachments.forEach((e,t)=>this._detachColorAttachment(t)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,t,i,r,o,n,s){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const h=this._desc,l=s.descriptor;s.descriptor.target!==m.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((h==null?void 0:h.width)==null||(h==null?void 0:h.height)==null||(l==null?void 0:l.width)==null||(l==null?void 0:l.height)==null||e+i>h.width||t+r>h.height||o+i>l.width||n+r>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const _=this._context,U=_.bindTexture(s,F.TEXTURE_UNIT_FOR_UPDATES);_.setActiveTexture(F.TEXTURE_UNIT_FOR_UPDATES),_.bindFramebuffer(this),_.gl.copyTexSubImage2D(m.TEXTURE_2D,0,o,n,e,t,i,r),_.bindTexture(U,F.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,i,r,o,n,s){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,i,r,o,n,s)}async readPixelsAsync(e,t,i,r,o,n,s){if(this._context.type!==p.WEBGL2){M()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),this.readPixels(e,t,i,r,o,n,s);return}const h=this._context.gl,l=S.createPixelPack(this._context,I.STREAM_READ,s.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),h.readPixels(e,t,i,r,o,n,0),this._context.unbindBuffer(E.PIXEL_PACK_BUFFER),await l.getSubDataAsync(s),l.dispose()}resize(e,t){const i=this._desc;if(!(i.width===e&&i.height===t)){if(i.width=e,i.height=t,!this._initialized){this._colorAttachments.forEach(r=>{r&&r.resize(e,t)}),this._depthStencilTexture&&this._depthStencilTexture.resize(e,t);return}this._colorAttachments.forEach(r=>{r&&r.resize(e,t)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=g.FRAMEBUFFER){const t=this._context.gl;if(this._initialized){t.bindFramebuffer(e,this.glName);return}this._glName&&t.deleteFramebuffer(this._glName);const i=this._context,r=t.createFramebuffer(),o=this._desc,n=o.colorTarget??P.RENDER_BUFFER,s=o.width??1,h=o.height??1;if(t.bindFramebuffer(e,r),this._colorAttachments.size===0)if(n===P.TEXTURE||n===P.CUBEMAP)this._colorAttachments.set(R.COLOR_ATTACHMENT0,ie(i,o,this.descriptor.colorTarget===P.CUBEMAP?m.TEXTURE_CUBE_MAP:m.TEXTURE_2D));else{const _=new C(i,{internalFormat:c.RGBA4,width:s,height:h});this._colorAttachments.set(R.COLOR_ATTACHMENT0,_)}this._colorAttachments.forEach((_,U)=>{_&&(b(_)?this._framebufferTexture2D(_.glName,U,W(_),e):t.framebufferRenderbuffer(e,U,t.RENDERBUFFER,_.glName))});const l=o.depthStencilTarget??u.NONE;switch(l){case u.DEPTH_RENDER_BUFFER:case u.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new C(i,{internalFormat:o.depthStencilTarget===u.DEPTH_RENDER_BUFFER?d.DEPTH_COMPONENT16:d.DEPTH_STENCIL,width:s,height:h}));const _=l===u.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(e,_,t.RENDERBUFFER,this._depthAttachment.glName);break}case u.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new C(i,{internalFormat:d.STENCIL_INDEX8,width:s,height:h})),t.framebufferRenderbuffer(e,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,this._stencilAttachment.glName);break;case u.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){i.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const _=new k;_.pixelFormat=f.DEPTH_STENCIL,_.dataType=v.UNSIGNED_INT_24_8,_.samplingMode=Y.NEAREST,_.wrapMode=j.CLAMP_TO_EDGE,_.width=s,_.height=h,this._depthStencilTexture=new F(i,_)}this._framebufferTexture2D(this._depthStencilTexture.glName,t.DEPTH_STENCIL_ATTACHMENT,W(this._depthStencilTexture),e);break}M()&&t.checkFramebufferStatus(e)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(e,t=R.COLOR_ATTACHMENT0,i=m.TEXTURE_2D,r=g.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(r,t,i,e,o)}_detachColorAttachment(e){M()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const t=this._context.gl,i=this._colorAttachments.get(e);return b(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(g.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),i}_disposeColorAttachments(){this._colorAttachments.forEach((e,t)=>{this._detachColorAttachment(t),e.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===u.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(g.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(g.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(D._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const r=this._context.gl;D._MAX_COLOR_ATTACHMENTS=r.getParameter(i.MAX_COLOR_ATTACHMENTS)}else D._MAX_COLOR_ATTACHMENTS=1}const t=e-R.COLOR_ATTACHMENT0;t+1>D._MAX_COLOR_ATTACHMENTS&&H.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${D._MAX_COLOR_ATTACHMENTS} color attachments`)}}D._MAX_COLOR_ATTACHMENTS=-1;function b(a){return a!=null&&"type"in a&&a.type==="texture"}function V(a){return a!=null&&"type"in a&&a.type==="renderbuffer"}function X(a){return b(a)||a!=null&&"pixelFormat"in a}function ie(a,e,t){const i=new k;return i.target=t,i.samplingMode=Y.NEAREST,i.wrapMode=j.CLAMP_TO_EDGE,i.width=e.width??0,i.height=e.height??0,new F(a,i)}function y(a,e){a.target===m.TEXTURE_2D||a.target===m.TEXTURE_CUBE_MAP||console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?(e.width!==a.width||e.height!==a.height)&&console.error("Color attachment texture must match the framebuffer's!"):(e.width=a.width,e.height=a.height)}function O(a,e){e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?(e.width!==a.width||e.height!==a.height)&&console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=a.width,e.height=a.height)}function W(a){return a.descriptor.target===m.TEXTURE_CUBE_MAP?m.TEXTURE_CUBE_MAP_POSITIVE_X:m.TEXTURE_2D}const N=H.getLogger("esri.views.webgl.VertexArrayObject");let ae=class{constructor(e,t,i,r,o=null){this._context=e,this._locations=t,this._layout=i,this._buffers=r,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment(x.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,t)=>e+this._buffers[t].size,this._indexBuffer!=null?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){var i,r,o;if(!this._context){(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&N.warn("Leaked WebGL VAO");return}if(this._glName){const n=(r=(i=this._context)==null?void 0:i.capabilities)==null?void 0:r.vao;n?(n.deleteVertexArray(this._glName),this._glName=null):N.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const n in this._buffers)(o=this._buffers[n])==null||o.dispose(),delete this._buffers[n];this._indexBuffer=J(this._indexBuffer)}this._context.instanceCounter.decrement(x.VertexArrayObject,this),this._context=w(this._context)}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:i}=this;e||N.error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const o in e){const n=e[o];n||N.error("Vertex buffer is uninitialized!");const s=t[o];s||N.error("Vertex element descriptor is empty!"),Z(this._context,this._locations,n,s)}i!=null&&(!!this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:t}=this;e||N.error("Vertex buffer dictionary is empty!");for(const i in e){const r=e[i];r||N.error("Vertex buffer is uninitialized!");const o=t[i];ee(this._context,this._locations,r,o)}this._indexBuffer!=null&&this._context.unbindBuffer(this._indexBuffer.bufferType)}};export{S as B,D as F,C as R,ae as V,te as a,oe as g};