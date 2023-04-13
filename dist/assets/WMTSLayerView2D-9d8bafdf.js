import{b6 as w,b7 as g,b8 as I,A as S,ba as f,i as o,b9 as m,L as T,ae as n,af as y,ai as V}from"./index-b4b3ae7d.js";import{B as M,r as d}from"./imageUtils-ca4d11c4.js";import{L as b,a as x}from"./LayerView-60e8c838.js";import{R as L}from"./RefreshableLayerView-af202622.js";import"./BitmapTileContainer-779520f9.js";import"./Bitmap-80731e80.js";import"./Container-7fca7909.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-f1756343.js";import"./TiledDisplayObject-c73a6816.js";import"./WGLContainer-a42a1f0b.js";import"./VertexArrayObject-c0fe275b.js";import"./VertexElementDescriptor-24e04d97.js";import"./color-820677f7.js";import"./enums-eb6e4255.js";import"./ProgramTemplate-4c4ab3df.js";import"./MaterialKey-6b0e16c7.js";import"./utils-699d4a1f.js";import"./heatmapUtils-5a23fa6d.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./earcut-db592379.js";import"./featureConversionUtils-b73aa4b5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./TileContainer-8bcd1916.js";const q=[102113,102100,3857,3785,900913],R=[0,0];let a=class extends L(M(b(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new w(e),this._fetchQueue=new g({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(S(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this._refresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:s=0}=t;if(!i)return this._fetchImage(e,r);const l=new f(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),u=await this._fetchImage(l,r)}catch(h){if(o(h))throw h;if(s<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const p=new f(c),_=await this.fetchTile(p,{...t,resamplingLevel:s+1});return d(this._tileInfoView,_,p,e)}}throw h}return d(this._tileInfoView,u,l,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var r;return m((r=i.tileInfo)==null?void 0:r.spatialReference,e)}))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||T.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{o(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(r=>{var s;return m((s=r.tileInfo)==null?void 0:s.spatialReference,t)});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(r=>{var s;return q.includes(((s=r.tileInfo)==null?void 0:s.spatialReference.wkid)??-1)})),i}};n([y()],a.prototype,"_fetchQueue",void 0);n([y({readOnly:!0})],a.prototype,"tileMatrixSet",null);a=n([V("esri.views.2d.layers.WMTSLayerView2D")],a);const ue=a;export{ue as default};