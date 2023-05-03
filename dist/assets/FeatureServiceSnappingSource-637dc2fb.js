import{oj as z,sT as R,sU as x,cm as M,gO as N,e as r,y as s,a as S,m as O,dm as U,g as w,aY as F,Z as H,dv as P,h as m,sV as V,t as j,bJ as A,j as J,bO as D,d6 as Z,X as q,ay as k,ft as L,b_ as W,dH as G,le as Q,a3 as X,r2 as B,aq as Y,df as T,aI as f,ai as K,bQ as $,sW as ee,sX as te}from"./index-d29f6b97.js";import{m as ie}from"./elevationInfoUtils-77250170.js";import{i as ne,o as re}from"./queryEngineUtils-3bf87c8f.js";import{y as se}from"./TileTreeDebugger-842c5f90.js";import"./DimensionAnalysisView3D-266d967a.js";import"./LineVisualElement-db91c665.js";import"./LengthDimension-1fe5a076.js";import"./Segment-1413661a.js";import"./unitFormatUtils-233032b0.js";import"./analysisViewUtils-c120a7c9.js";import"./ImageMaterial-be81a34f.js";import"./Factory-71ec2c06.js";import"./RightAngleQuadVisualElement-62adb2cd.js";import"./VisualElementResources-0bc87c86.js";import"./PointVisualElement-df95dd99.js";import"./colorUtils-c0f43caf.js";import"./EditGeometryOperations-31ebd7de.js";import"./dehydratedFeatureComparison-9b093626.js";import"./RenderTexture-fb0e3709.js";import"./VertexSnappingCandidate-e19f94c2.js";function _(e,t){return R(t.extent,C),x(C,M(ae,e.x,e.y,0))}const C=z(),ae=N();let c=class extends O{get tiles(){const t=this.tilesCoveringView,i=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((o,n)=>_(i,o)-_(i,n)),t}_scaleEnabled(){return U(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:i}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:o}=i,n=[];for(const{row:l,colFrom:a,colTo:d}of t)for(let h=a;h<=d;h++){const v=i.normalizeCol(h),I=new H(null,o,l,v);this.tileInfo.updateTileInfo(I),n.push(I)}return n}get tileInfo(){var t;return((t=this.view.featuresTilingScheme)==null?void 0:t.tileInfo)??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(w(()=>{var t,i;return(i=(t=this.view)==null?void 0:t.state)==null?void 0:i.viewpoint},()=>this.notifyChange("tilesCoveringView"),F))}};r([s({readOnly:!0})],c.prototype,"tiles",null),r([s({readOnly:!0})],c.prototype,"_scaleEnabled",null),r([s({readOnly:!0})],c.prototype,"tilesCoveringView",null),r([s({readOnly:!0})],c.prototype,"tileInfo",null),r([s({readOnly:!0})],c.prototype,"tileSize",null),r([s({constructOnly:!0})],c.prototype,"view",void 0),r([s({constructOnly:!0})],c.prototype,"layer",void 0),r([s()],c.prototype,"pointOfInterest",void 0),c=r([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],c);let y=class extends P{get tiles(){const t=this.tilesCoveringView,i=this._effectivePointOfInterest;if(i!=null){const o=t.map(n=>_(i,n));for(let n=1;n<o.length;n++)if(o[n-1]>o[n])return t.sort((l,a)=>_(i,l)-_(i,a)),t.slice()}return t}get tilesCoveringView(){var t,i;return this._filterTiles((i=(t=this.view.featureTiles)==null?void 0:t.tiles)==null?void 0:i.toArray()).map(oe)}get tileInfo(){var t;return((t=this.view.featureTiles)==null?void 0:t.tilingScheme.toTileInfo())??null}get tileSize(){var t;return((t=this.view.featureTiles)==null?void 0:t.tileSize)??256}get _effectivePointOfInterest(){var i;const t=this.pointOfInterest;return t??((i=this.view.pointsOfInterest)==null?void 0:i.focus.location)}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.handles.add(w(()=>this.view.featureTiles,t=>{this.handles.remove(E),t&&this.handles.add(t.addClient(),E)},m))}_filterTiles(t){return t==null?[]:t.filter(i=>Math.abs(i.measures.screenRect[3]-i.measures.screenRect[1])>le&&i.measures.visibility===V.VISIBLE_ON_SURFACE)}};function oe({lij:[e,t,i],extent:o}){return new H(`${e}/${t}/${i}`,e,t,i,o)}r([s({readOnly:!0})],y.prototype,"tiles",null),r([s({readOnly:!0})],y.prototype,"tilesCoveringView",null),r([s({readOnly:!0})],y.prototype,"tileInfo",null),r([s({readOnly:!0})],y.prototype,"tileSize",null),r([s({constructOnly:!0})],y.prototype,"view",void 0),r([s()],y.prototype,"pointOfInterest",void 0),r([s()],y.prototype,"_effectivePointOfInterest",null),y=r([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],y);const le=50,E="feature-tiles";let b=class extends se{constructor(e){super(e),this._handles=new j}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this._handles.add(A(()=>clearInterval(e)))}destroy(){this._handles.destroy()}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(n=>{e.set(n.data.id,n.featureCount)}),this._debugInfo.pendingTiles.forEach(n=>{e.set(n.data.id,n.featureCount),t.set(n.data.id,n.state)});const i=n=>{const l=t.get(n),a=e.get(n)??"?";return l?`${l}:${a}
${n}`:`store:${a}
${n}`},o=new Map;return this._debugInfo.storedTiles.forEach(n=>{o.set(n.data.id,n.data)}),this._debugInfo.pendingTiles.forEach(n=>{o.set(n.data.id,n.data)}),Array.from(o.values()).map(n=>({lij:[n.level,n.row,n.col],geometry:J.fromExtent(D(n.extent,this.view.spatialReference)),label:i(n.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};r([s({constructOnly:!0})],b.prototype,"handle",void 0),b=r([S("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],b);let u=class extends P{get updating(){return this.updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const i=[];for(const{points:o}of t)for(const{z:n}of o)i.push(n);return{elevations:i,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0}destroy(){this._workerHandle.destroy()}initialize(){this._workerHandle=new de(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.points,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.handles.add([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){var n;const i=this._serviceInfoFromLayer(e.layer);if(i==null)return;const o={configuration:this._convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:(n=e.layer.elevationInfo)==null?void 0:n.toJSON()};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",o,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this._convertConfiguration(e);await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const i=e.point,o={distance:e.distance,mode:e.mode,point:Z(i[0],i[1],i[2],e.coordinateHelper.spatialReference.toJSON()),returnEdge:e.returnEdge,returnVertex:e.returnVertex,filter:e.filter!=null?e.filter.toJSON():null};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var a,d,h;const i=this._editId++,o={id:i};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",o,t));const n=await this.updatingHandles.addPromise(q(e.result,t)),l={id:i,edits:{addedFeatures:((a=n.addedFeatures)==null?void 0:a.map(({objectId:v})=>v).filter(k))??[],deletedFeatures:((d=n.deletedFeatures)==null?void 0:d.map(({objectId:v,globalId:I})=>({objectId:v,globalId:I})))??[],updatedFeatures:((h=n.updatedFeatures)==null?void 0:h.map(({objectId:v})=>v).filter(k))??[]}};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",l,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}_convertConfiguration(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){var t,i;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:((t=e.parsedUrl)==null?void 0:t.path)??"",fields:e.fields.map(o=>o.toJSON()),geometryType:L.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(i=e.timeInfo)==null?void 0:i.toJSON()}}};r([s({constructOnly:!0})],u.prototype,"schedule",void 0),r([s({constructOnly:!0})],u.prototype,"hasZ",void 0),r([s({constructOnly:!0})],u.prototype,"elevationAlignPointsInFeatures",void 0),r([s({constructOnly:!0})],u.prototype,"queryForSymbologySnapping",void 0),r([s({readOnly:!0})],u.prototype,"updating",null),r([s({readOnly:!0})],u.prototype,"availability",void 0),r([s()],u.prototype,"_workerHandleUpdating",void 0),u=r([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],u);class de extends W{constructor(t,i){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:i})}}let g=class extends O{get tiles(){return[new H("0/0/0",0,0,0,G(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new Q({origin:new X({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new B({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};r([s({readOnly:!0})],g.prototype,"tiles",null),r([s({readOnly:!0})],g.prototype,"tileInfo",null),r([s({readOnly:!0})],g.prototype,"tileSize",null),r([s({constructOnly:!0})],g.prototype,"layer",void 0),r([s()],g.prototype,"pointOfInterest",void 0),g=r([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],g);let p=class extends Y(O){get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get updating(){var e;return((e=this._workerHandle)==null?void 0:e.updating)||this.updatingHandles.updating}get configuration(){const{view:e}=this,t=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){var e;return((e=this._workerHandle)==null?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._workerHandle=null,this._debug=null}initialize(){let e;const t=this.view;if(t!=null)switch(t.type){case"2d":this._tilesOfInterest=new c({view:t,layer:this._layer}),e=this._workerHandle=new u;break;case"3d":{const{resourceController:i}=t,o=this._layer,n=t.whenLayerView(o);this._tilesOfInterest=new y({view:t}),e=this._workerHandle=new u({schedule:a=>i.immediate.schedule(a),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(a,d)=>{const h=await n;return T(d),h.elevationAlignPointsInFeatures(a,d)},queryForSymbologySnapping:async(a,d)=>{const h=await n;return T(d),h.queryForSymbologySnapping(a,d)}});const l=te(null);n.then(a=>l.value=a),this.addHandles([t.elevationProvider.on("elevation-change",({context:a})=>{const{elevationInfo:d}=o;ie(a,d)&&f(e.notifyElevationSourceChange())}),w(()=>o.elevationInfo,()=>f(e.notifyElevationSourceChange()),m),w(()=>{var a,d;return(d=(a=l.value)==null?void 0:a.processor)==null?void 0:d.renderer},()=>f(e.notifySymbologyChange()),m),w(()=>{var a;return((a=l.value)==null?void 0:a.symbologySnappingSupported)??!1},a=>f(e.setSymbologySnappingSupported(a)),m),K(()=>{var a;return(a=l.value)==null?void 0:a.layer},["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}else this._tilesOfInterest=new g({layer:this._layer}),e=this._workerHandle=new u;this.handles.add([$(e)]),f(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this.updatingHandles.add(()=>this._updateTilesParameters,()=>f(e.updateTiles(this._updateTilesParameters,null)),m),this.handles.add([w(()=>this.configuration,i=>f(e.configure(i,null)),F)]),t!=null&&this.handles.add(w(()=>ee.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,i=>{i&&!this._debug?(this._debug=new b({view:t,handle:e}),this.handles.add($(this._debug),"debug")):!i&&this._debug&&this.handles.remove("debug")},m)),this.handles.add(this.layerSource.layer.on("apply-edits",i=>{f(e.applyEdits(i,null))}))}refresh(){var e;(e=this._workerHandle)==null||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:o}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(o);const n=this._getGroundElevation;return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(l=>ne(l,n))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}get _getGroundElevation(){return re(this.view)}};r([s({constructOnly:!0})],p.prototype,"spatialReference",void 0),r([s({constructOnly:!0})],p.prototype,"layerSource",void 0),r([s({constructOnly:!0})],p.prototype,"view",void 0),r([s()],p.prototype,"_tilesOfInterest",void 0),r([s({readOnly:!0})],p.prototype,"_updateTilesParameters",null),r([s({readOnly:!0})],p.prototype,"updating",null),r([s({readOnly:!0})],p.prototype,"configuration",null),r([s({readOnly:!0})],p.prototype,"availability",null),r([s()],p.prototype,"_getGroundElevation",null),p=r([S("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],p);export{p as FeatureServiceSnappingSource};
