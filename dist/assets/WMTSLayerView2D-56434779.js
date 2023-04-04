import{a6 as w,a7 as g,a8 as I,D as S,aa as f,d as n,a9 as d,J as T,ab as o,ac as m,ad as V}from"./index-e1d30004.js";import{t as v,n as y}from"./imageUtils-f3ec769c.js";import{f as q,d as x}from"./LayerView-b379b6c2.js";import{i as M}from"./RefreshableLayerView-d63f27d3.js";import"./BitmapTileContainer-7f95125f.js";import"./Bitmap-d5c988db.js";import"./Container-3b957f51.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-a64c7d5d.js";import"./TiledDisplayObject-71eee758.js";import"./WGLContainer-4b22933a.js";import"./VertexArrayObject-36a67124.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a87af45a.js";import"./enums-55085e26.js";import"./ProgramTemplate-99344654.js";import"./MaterialKey-1143b332.js";import"./utils-98382753.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-70b13c29.js";const R=[102113,102100,3857,3785,900913],b=[0,0];let r=class extends M(v(q(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new w(e),this._fetchQueue=new g({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s)}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(S(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this._refresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:a=0}=t;if(!i)return this._fetchImage(e,s);const l=new f(0,0,0,0);let c;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),c=await this._fetchImage(l,s)}catch(h){if(n(h))throw h;if(a<3){const u=this._tileInfoView.getTileParentId(e.id);if(u){const p=new f(u),_=await this.fetchTile(p,{...t,resamplingLevel:a+1});return y(this._tileInfoView,_,p,e)}}throw h}return y(this._tileInfoView,c,l,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return d((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){n(t)||T.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{n(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>{var a;return d((a=s.tileInfo)==null?void 0:a.spatialReference,t)});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>{var a;return R.includes(((a=s.tileInfo)==null?void 0:a.spatialReference.wkid)??-1)})),i}};o([m()],r.prototype,"_fetchQueue",void 0),o([m({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=o([V("esri.views.2d.layers.WMTSLayerView2D")],r);const ee=r;export{ee as default};
