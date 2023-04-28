import{b5 as w,b6 as y,b7 as I,b8 as V,D as v,b9 as H,d as a,ba as c,J as T,ae as l,af as g,ai as b}from"./index-6e11f365.js";import"./MagnifierPrograms-cb788629.js";import"./Container-491c9a70.js";import"./BufferPool-8db53fb0.js";import"./color-6aa54378.js";import"./WGLContainer-ff1fed9a.js";import"./enums-74e97557.js";import"./TextureDescriptor-6f1ebf7c.js";import"./ProgramTemplate-dfbe8f57.js";import"./MaterialKey-d4a29da3.js";import"./utils-3c7bffcd.js";import"./VertexArrayObject-0a6bf41d.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-5b5adc11.js";import"./floatRGBA-4dfc3dfe.js";import{o as q}from"./GraphicsView2D-9e56b3dd.js";import"./AttributeStoreView-fcf24ea3.js";import"./earcut-fe125474.js";import"./featureConversionUtils-ea75af90.js";import"./lengthUtils-9743f155.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-6225a887.js";import{t as U,o as f,n as d}from"./imageUtils-749bfda3.js";import{f as Q,d as S}from"./LayerView-05a5b0a6.js";import{n as C}from"./HighlightGraphicContainer-76fb1904.js";import{i as k}from"./RefreshableLayerView-88e5519a.js";import{G as F,P as G,r as P}from"./drapedUtils-3bb99b14.js";import"./ExpandedCIM-a7fa0210.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./definitions-e9823d3c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-4a16b4e7.js";import"./rasterizingUtils-7c1a2595.js";import"./pbf-bbb2c34e.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-f53e1e94.js";import"./Matcher-a2b28255.js";import"./visualVariablesUtils-26533cc8.js";import"./visualVariablesUtils-c6c91d03.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-cc066a0e.js";import"./defaultsJSON-b087dd4d.js";import"./OptimizedGeometry-33b2eb0d.js";import"./LRUCache-3361c9d5.js";import"./MemCache-1033102b.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-c8bd0c80.js";import"./featureFlags-47ea12bc.js";import"./CircularArray-ef508845.js";import"./DisjointTimerQuery-b21930a9.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-e0df0c2e.js";import"./FieldsIndex-f7d03105.js";import"./arcadeTimeUtils-6c8a5975.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";import"./diffUtils-d7f96f30.js";import"./sizeVariableUtils-d4870b0d.js";import"./parser-2c9af7f8.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./heatmapUtils-82abfb64.js";import"./vec4f64-aa64c7e9.js";import"./basicInterfaces-4ab7cc6a.js";import"./normalizeUtilsSync-1c027b89.js";import"./normalizeUtilsCommon-80217ab8.js";import"./projectionSupport-7373e31c.js";import"./json-48e3ea08.js";import"./labelingInfo-ac2c5970.js";import"./labelUtils-01d56de2.js";import"./jsonUtils-c398a7e6.js";import"./schemaUtils-5636eb98.js";import"./sql-662efd73.js";import"./clusterUtils-0648c051.js";import"./SizeVariable-5b39cf61.js";import"./colorRamps-4404e80a.js";import"./LegendOptions-1566f85b.js";import"./util-6683e0c8.js";import"./TiledDisplayObject-bf43e3a3.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BitmapTileContainer-56cca942.js";import"./Bitmap-6d8fc861.js";import"./TileContainer-6027f71b.js";import"./BaseGraphicContainer-f166deb8.js";import"./FeatureContainer-76d7365c.js";import"./scaleUtils-0cac7039.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-e9e12e91.js";import"./popupUtils-1b9fbfb3.js";const R=[0,0];let h=class extends k(U(Q(S))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(t){var i;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(i=this._highlightView)==null||i.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,e)=>this.fetchTile(i,e)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new G({createFetchPopupFeaturesQueryGeometry:(e,r)=>P(e,r,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(e,r)=>{i.graphicUpdateHandler({graphic:e,property:r})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,i):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return H((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const i=this._bitmapView.createTile(t),e=i.bitmap;return[e.x,e.y]=this._tileInfoView.getTileCoords(R,i.key),e.resolution=this._tileInfoView.getTileResolution(i.key),[e.width,e.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(i),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){const e="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:m=0}=i;if(!e)try{return await this._fetchImage(t,r)}catch(s){if(!a(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(m<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const u=new c(n),_=await this.fetchTile(u,{...i,resamplingLevel:m+1});return d(this._tileInfoView,_,u,t)}}throw s}const p=new c(0,0,0,0);let o;try{if(await e.fetchAvailabilityUpsample(t.level,t.row,t.col,p,{signal:r}),p.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);o=await this._fetchImage(p,r)}catch(s){if(a(s))throw s;o=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,o,p,t):o}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){a(i)||T.getLogger(this.declaredClass).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};l([g()],h.prototype,"_fetchQueue",void 0),l([g()],h.prototype,"resampling",null),h=l([b("esri.views.2d.layers.TileLayerView2D")],h);const Ii=h;export{Ii as default};