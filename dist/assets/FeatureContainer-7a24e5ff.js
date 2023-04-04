import{s as rt,n as at,o as nt}from"./mat2d-80bd93af.js";import{s as ot,i as ht}from"./mat3-45e3f2eb.js";import{e as k}from"./mat3f32-d3d088e8.js";import{Q as L,L as j,aa as A,B as N,C as I,ad as $,ae as U,af as z,ag as C,am as B,an as dt,O as ut,N as lt,ao as ct}from"./enums-8bf08d0c.js";import{r as _t,i as pt}from"./TileContainer-e69647a1.js";import{r as _,t as c,K as q,o as f,e as l,L as Et,B as x,z as D}from"./typedArrayUtil-2bcf3cee.js";import{D as H}from"./promiseUtils-29120e0a.js";import{e as xt}from"./Queue-e839cb6a.js";import{s as ft,a as X}from"./Error-bd05b442.js";import{h as O}from"./string-3d0ebcd3.js";import{n as Rt,l as mt,f as K}from"./visualVariablesUtils-7af1d739.js";import{m as T,l as vt,J as Y,Q as G}from"./Utils-c2939f8d.js";import{D as Z,P as J,G as W,L as tt,M as gt,Y as Tt,V as bt}from"./enums-64ab819c.js";import{x as yt}from"./VertexArrayObject-8a5c7580.js";import{E as et}from"./Texture-6f3336a0.js";import{u as m}from"./screenUtils-7afeb41c.js";import{$ as St}from"./unitUtils-43365914.js";import{m as kt}from"./lengthUtils-5215af35.js";import{e as zt,c as Ct}from"./utils-6c2afd8b.js";import{l as wt}from"./capabilities-320386e9.js";let Mt=class{acquire(t){return{refCount:1,version:-1,labelMat2d:k(),tileMat3:k(),dvs:k()}}release(t){}};class y extends _t{constructor(t,e,s,i){super(t,e,s,i,L,L)}destroy(){super.destroy(),this._transforms&&y.TransformCache.release(this.key.hash)}setTransform(t){const e=this.resolution/t.resolution,s=this.transforms.tileMat3,[i,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*e,n=this.height/this.rangeY*e;ot(s,a,0,0,0,n,0,i,r,1),ht(this.transforms.dvs,t.displayViewMat3,s);const o=this.transforms.labelMat2d,d=window.devicePixelRatio,u=rt(at(),a*d,0,0,n*d,i*d,r*d);nt(o,t.viewMat2d,u)}_createTransforms(){return y.TransformCache.acquire(this.key.hash)}}y.TransformCache=new Mt;const b=2147483647;class R{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/h.BYTES_PER_RECORD-e){const i=new h(new Int32Array(t,e*h.BYTES_PER_RECORD,s*h.ELEMENTS_PER_RECORD));return new R(i)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const s=this._cursor.size();if(e<s)return this._cursor._index=e,!0;e-=s,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor();for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var i;const t=new R((i=this._head)==null?void 0:i.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(_(s)&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;s=e,e=e._link}return!1}}R.ELEMENTS_PER_RECORD=j,R.BYTES_PER_RECORD=R.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class h{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new h(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=b,++this._deletedCount;this.next()&&this.id===t;)this.id=b,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(c(this._offsets.instance)){this._offsets.instance=new Map;const s=this.copy();s._index=-1;let i=0;for(;s.next();)s.id!==i&&(this._offsets.instance.set(s.id,s._index),i=s.id)}if(!this._offsets.instance.has(t))return!1;const e=this._index;return this._index=this._offsets.instance.get(t),this.id!==b||(this._index=e,!1)}get id(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*h.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*h.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/h.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===b;);return this._index<this.size()}peekId(){const t=(this._index+1)*h.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new h(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}h.ELEMENTS_PER_RECORD=j,h.BYTES_PER_RECORD=h.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;const P=ft.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),w=Rt(mt,P);class Q{constructor(t,e,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:a}=t,n=T(r);this.shared=s,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new n(l(i))),this._resetRange()}destroy(){f(this._texture,t=>t.dispose());for(const t in this._fbos)f(this._fbos[t],e=>{t==="0"&&e.detachColorTexture(),e.dispose()}),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:gt.TEXTURE_2D,wrapMode:Z.CLAMP_TO_EDGE,pixelFormat:J.RGBA,dataType:this.pixelType,samplingMode:tt.NEAREST,width:this.size,height:this.size}}setData(t,e,s){const i=K(t),r=l(this.data),a=i*this.texelSize+e;!r||a>=r.length||(r[a]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(t,e){if(c(this.data))return null;const s=K(t)*this.texelSize+e;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return D(this._texture,()=>this._initTexture(t))}getFBO(t,e=0){if(c(this._fbos[e])){const s={colorTarget:Tt.TEXTURE,depthStencilTarget:bt.NONE},i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new yt(t,s,i)}return this._fbos[e]}get locked(){return!(this.pixelType!==W.UNSIGNED_BYTE||!this.shared||this.textureOnly||!O("esri-atomics")||!this.data)&&Atomics.load(this.data,0)===1}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const s=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=l(this.data).buffer,a=this.getTexture(t),n=4,o=(s-s%this.size)/this.size,d=(i-i%this.size)/this.size,u=o,E=this.size,v=d,g=o*this.size*n,S=(E+v*this.size)*n-g,F=T(this.pixelType),st=new F(r,g*F.BYTES_PER_ELEMENT,S),it=this.size,V=v-u+1;if(V>this.size)return void P.error(new X("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,u,it,V,st)}catch{}e()}}update(t){const{data:e,start:s,end:i}=t;if(_(e)){const r=this.data,a=s*this.texelSize;for(let n=0;n<e.length;n++){const o=1<<n%this.texelSize;t.layout&o&&(r[a+n]=e[n])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(t,e){const s=this.size;if(this.size=e,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=T(this.pixelType);this.destroy(),this.data=new i(l(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new et(t,this._textureDesc,D(this.data,void 0));if(_(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(t),o=vt(r),d=new(T(r))(new ArrayBuffer(s*i*o*this.texelSize)),u=t.getBoundFramebufferObject(),{x:E,y:v,width:g,height:S}=t.getViewport();t.bindFramebuffer(n),n.readPixels(0,0,s,i,a,r,d),e.updateData(0,0,0,2*s,i/2,d),t.setViewport(E,v,g,S),t.bindFramebuffer(u)}return this.destroy(),this._texture=e,this._texture}}class Dt{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:s,size:i}=t;if(this.shared=s,this.size=i,w("Initializing AttributeStoreView",t),c(this._data))this._data=q(e,r=>new Q(r,i,s));else for(let r=0;r<this._data.length;r++){const a=this._data[r],n=e[r];_(n)&&(c(a)?this._data[r]=new Q(n,i,s):a.resize(n,i))}this._initialized=!0}destroy(){f(this._data,t=>q(t,e=>e.destroy())),f(this._defaultTexture,t=>t.dispose())}isEmpty(){const t=this._data;return c(t)}isUpdating(){const t=_(this._pendingAttributeUpdate),e=t;return O("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}
  -> hasPendingUpdate ${t}`),e}getBlock(t){return c(this._data)?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,A,0,0)}getData(t,e,s,i){if(!this._data)return 0;const r=l(this._data)[e];if(c(r))return 0;const a=r.getData(t,s);return _(a)?a:i}setData(t,e,s,i){const r=l(this._data)[e];l(r).setData(t,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void P.error(new X("mapview-webgl","Tried to update attribute data with a pending update"));const e=H();return w("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},this._onUpdate(),e.promise}update(){if(this._initialized&&_(this._pendingAttributeUpdate)){O("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:t,resolver:e}=this._pendingAttributeUpdate,s=l(this._data);for(let i=0;i<t.blocks.length;i++){const r=t.blocks[i],a=s[i];f(a,n=>f(r,o=>{w(`Updating block ${i}`,o),n.update(o)}))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){const s=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(s,N),void(e&&(t.bindTexture(s,I),t.bindTexture(s,$),t.bindTexture(s,U),t.bindTexture(s,z),t.bindTexture(s,C),t.bindTexture(s,B)));const i=l(this._data);this._locked&&!this._forceNextUpload||(Et(i,r=>r.updateTexture(t,()=>this._onUpdate())),this._forceNextUpload=!1),t.bindTexture(x(i[dt],s,r=>r.getTexture(t)),N),e&&(t.bindTexture(x(i[ut],s,r=>r.getTexture(t)),B),t.bindTexture(x(i[lt],s,r=>r.getTexture(t)),I),t.bindTexture(x(i[A],s,r=>r.getTexture(t)),$),t.bindTexture(x(i[ct],s,r=>r.getTexture(t)),U),t.bindTexture(x(i[z],s,r=>r.getTexture(t)),z),t.bindTexture(x(i[C],s,r=>r.getTexture(t)),C))}_getDefaultTexture(t){if(c(this._defaultTexture)){const e={wrapMode:Z.CLAMP_TO_EDGE,pixelFormat:J.RGBA,dataType:W.UNSIGNED_BYTE,samplingMode:tt.NEAREST,width:1,height:1};this._defaultTexture=new et(t,e,new Uint8Array(4))}return this._defaultTexture}}function M(p,t){const e=t.length;if(p<t[0].value||e===1)return t[0].size;for(let s=1;s<e;s++)if(p<t[s].value){const i=(p-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[e-1].size}class Ot{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=zt}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops;switch(e.type){case"static":return e;case"level-dependent":return D(e.levels[t],()=>{let s=1/0,i=0;for(const o in e.levels){const d=parseFloat(o),u=Math.abs(t-d);u<s&&(s=u,i=d)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((t-i)/2),a=l(e.levels[i]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:l(a.sizes),values:n}})}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){_(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,s){this._updateEffects(s),this._vvInfo=e,this._technique=Ct(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:wt("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){_(t)?this.outsideLabelsVisible=t.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(t,e){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!t)return;const i=t.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const o=i.minMaxValue;let d,u;if(Y(o.minSize)&&Y(o.maxSize))if(G(o.minSize)&&G(o.maxSize))d=m(o.minSize),u=m(o.maxSize);else{const E=e.scale;d=m(M(E,o.minSize.stops)),u=m(M(E,o.maxSize.stops))}this.vvSizeMinMaxValue.set([o.minDataValue,o.maxDataValue,d,u])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=m(M(e.scale,i.scaleStops.stops))),i.unitValue){const o=St(e.spatialReference)/kt[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=o/e.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=t.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=t.opacity;a&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=t.rotation;n&&(s.vvRotationEnabled=!0,s.vvRotationType=n.type)}}class te extends pt{constructor(t){super(t),this._rendererInfo=new Ot,this._materialItemsRequestQueue=new xt,this.attributeView=new Dt(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,s){this._rendererInfo.setInfo(t,e,s),this.requestRender()}async getMaterialItems(t,e){if(!t||t.length===0)return null;const s=H();return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:s}),this.requestRender(),s.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}updateTransforms(t){if(this.children.some(e=>e.hasData))for(const e of this.children)e.setTransform(t)}createRenderParams(t){const e=super.createRenderParams(t);return e.rendererInfo=this._rendererInfo,e.attributeView=this.attributeView,e}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:a}=t,n=e.map(o=>r.textureManager.rasterizeItem(o.symbol,a,o.glyphIds,s));Promise.all(n).then(o=>{if(!this.stage)return void i.reject();const d=o.map((u,E)=>({id:e[E].id,mosaicItem:u}));i.resolve(d)},i.reject)}}export{R as i,y as m,te as o};
