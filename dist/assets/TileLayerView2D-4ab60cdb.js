import{e as n,y as f,n as _}from"./cast-daef7652.js";import{a as y,s as I}from"./Error-bd05b442.js";import{E as v,j as c}from"./promiseUtils-29120e0a.js";import{l as V}from"./reactiveUtils-3c1b281e.js";import{r as T}from"./typedArrayUtil-2bcf3cee.js";import"./ensureType-fa162cfc.js";import{E as q}from"./Extent-7f29a1bb.js";import{t as Q,o as d,n as w}from"./imageUtils-b17d5cb0.js";import{y as S,u as b}from"./LayerView-8f28f320.js";import{h as F}from"./TileStore-4c0c3140.js";import{e as g}from"./TileKey-ab325718.js";import{y as $,r as U}from"./TileStrategy-a62d1e84.js";import{i as x}from"./RefreshableLayerView-1be6c989.js";import{s as C,a as E}from"./drapedUtils-61dc5c2f.js";import"./string-3d0ebcd3.js";import"./nextTick-3ee5a785.js";import"./BitmapTileContainer-dc5aa20c.js";import"./aaBoundingRect-45a7fe45.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./mat3f32-d3d088e8.js";import"./Bitmap-7ed1290a.js";import"./mat3-45e3f2eb.js";import"./vec2f32-461e65a9.js";import"./utils-6c2afd8b.js";import"./parser-e6166e34.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./Evented-d8fc77f0.js";import"./enums-4ca4641f.js";import"./MaterialKey-b4e71fc3.js";import"./Utils-c2939f8d.js";import"./enums-8bf08d0c.js";import"./enums-64ab819c.js";import"./Texture-6f3336a0.js";import"./context-util-cb6895d7.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Color-2245b966.js";import"./TileContainer-e69647a1.js";import"./WGLContainer-db0ff963.js";import"./pixelUtils-5f39bd45.js";import"./vec2f64-e0301652.js";import"./VertexArrayObject-8a5c7580.js";import"./ProgramTemplate-66c62c24.js";import"./StyleDefinition-3c6a4c69.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-f978aef8.js";import"./featureConversionUtils-7c9ea581.js";import"./jsonUtils-8bd548d9.js";import"./Polyline-c56eca9b.js";import"./OptimizedFeature-9345d11b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Collection-e2259e32.js";import"./SimpleObservable-7c382d01.js";import"./collectionUtils-09289d8f.js";import"./geometry-4b789d90.js";import"./typeUtils-d7b057b5.js";import"./jsonMap-a9c94baf.js";import"./HandleOwner-78d35324.js";import"./Identifiable-e3a09883.js";import"./Promise-088a0e17.js";import"./Queue-e839cb6a.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-e996b56b.js";import"./TimeExtent-84882adb.js";import"./enumeration-e46f3fd4.js";import"./Field-0ac3c9d2.js";import"./fieldType-4ec45634.js";import"./Clonable-f249bc0f.js";import"./unitUtils-43365914.js";const P=e=>{let t=class extends e{async fetchPopupFeatures(r,o){const{layer:a}=this;if(!r)throw new y("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});if(a.type!=="tile")throw new y("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type});const l=this.get("view.scale"),p=a.allSublayers.toArray().filter(i=>{const s=i.minScale===0||l<=i.minScale,h=i.maxScale===0||l>=i.maxScale;return i.popupTemplate&&i.popupEnabled&&i.visible&&s&&h});return v(p.map(async i=>{const s=i.createQuery(),h=T(o)?o.event:null,u=C({renderer:i.renderer,event:h});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(r,u),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features})).then(i=>[].concat(...i.map(s=>s.value).filter(Boolean)))}};return n([f()],t.prototype,"layer",void 0),t=n([_("esri.layers.mixins.TileLayerView")],t),t},R=[0,0];let m=class extends P(x(Q(S(b)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new F(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new $({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,r)=>this.fetchTile(t,r)}),this._tileStrategy=new U({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(V(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return q((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return E(e,t,this.view)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}acquireTile(e){const t=this._bitmapView.createTile(e),r=t.bitmap;return[r.x,r.y]=this._tileInfoView.getTileCoords(R,t.key),r.resolution=this._tileInfoView.getTileResolution(t.key),[r.width,r.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const r="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:o,resamplingLevel:a=0}=t;if(!r)try{return await this._fetchImage(e,o)}catch(i){if(!c(i)&&!this.resampling)return d(this._tileInfoView.tileInfo.size);if(a<3){const s=this._tileInfoView.getTileParentId(e.id);if(s){const h=new g(s),u=await this.fetchTile(h,{...t,resamplingLevel:a+1});return w(this._tileInfoView,u,h,e)}}throw i}const l=new g(0,0,0,0);let p;try{if(await r.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:o}),l.level!==e.level&&!this.resampling)return d(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,o)}catch(i){if(c(i))throw i;p=await this._fetchImage(e,o)}return this.resampling?w(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){c(t)||I.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};n([f()],m.prototype,"_fetchQueue",void 0),n([f()],m.prototype,"resampling",null),m=n([_("esri.views.2d.layers.TileLayerView2D")],m);const st=m;export{st as default};
