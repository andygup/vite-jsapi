import{e as r,y as i,a as d,aq as M,b7 as k,m as $,l as y,ft as P,g as f,B as T,bp as U,K as E}from"./index-0b6846a6.js";import{o as R}from"./StreamFeatureManager-9c167979.js";import{createConnection as x}from"./createConnection-1c7e5e2a.js";import{r as G}from"./EventedSet-e5253fc6.js";import{b as j}from"./Query-a5cf26eb.js";import{E as V}from"./FeatureLikeLayerView3D-0bb3a1d5.js";import{n as C}from"./LayerView3D-c9d7b31e.js";import{d as L}from"./LayerView-4bb15203.js";import{d as F}from"./FeatureFilter-603a6725.js";import"./query-defb54e0.js";import"./normalizeUtils-671b6bae.js";import"./normalizeUtilsCommon-dd4bd041.js";import"./pbfQueryUtils-4a04b7c5.js";import"./pbf-30015616.js";import"./queryZScale-b668e568.js";import"./dehydratedFeatureComparison-c9f3ec9f.js";import"./queryForSymbologySnapping-c967cee4.js";import"./elevationInfoUtils-9f640aef.js";import"./hash-6f442295.js";import"./diffUtils-c77d4e09.js";import"./UniqueValueRenderer-69f2a261.js";import"./ColorStop-a9d5adf5.js";import"./colorRamps-c287f076.js";import"./Graphics3DObjectStates-92efdd58.js";import"./jsonUtils-bda577f9.js";import"./DictionaryLoader-8b55e325.js";import"./LRUCache-b7b1b5e3.js";import"./FieldsIndex-26e3776b.js";import"./heatmapUtils-377e78a9.js";import"./defaults-48071f90.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-66fd587e.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-b4136af9.js";import"./quickselect-1945acd7.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-02c1d5a8.js";import"./WhereClause-5b6b2f54.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-de2da349.js";import"./generateRendererUtils-683e6018.js";import"./FeatureSet-201dc83e.js";import"./FeatureStore-0b716368.js";import"./BoundsStore-9e565b74.js";import"./projectExtentUtils-ccf1a520.js";const N=2500;let p=class extends T{getObjectId(){return this.objectId}};r([i({type:Number,json:{read:!0}})],p.prototype,"objectId",void 0),p=r([d("esri.layers.graphics.controllers.StreamGraphic")],p);let B=class{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const o=this._idToGraphic.get(e);return o?(o.sourceLayer=o.layer=null,this._idToGraphic.delete(e),o):null}update(e,o){this.onUpdate(e,o)}get size(){return this._idToGraphic.size}},n=class extends M(k($)){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new G,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval(),this.connection=y(this.connection),this.store=y(this.store),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{layer:t,layerView:e}=this,{spatialReference:o,definitionExpression:s,geometryDefinition:l,objectIdField:h,timeInfo:g,purgeOptions:v,maxReconnectionAttempts:_,maxReconnectionInterval:I,customParameters:w}=t,S=t.geometryType?P.toJSON(t.geometryType):null,b=o,u=e.view.spatialReference,O={geometry:l,where:s};this.clear(),this._set("connection",x(t.parsedUrl,b,u,S,O,_,I,w??void 0)),this._outSpatialReference=u.toJSON(),this.store=new B(this._onUpdate.bind(this)),this.featuresManager=new R(this.store,h,g.toJSON(),v);const m="startup-watches";this.handles.remove(m),this.handles.add([t.on("send-message-to-socket",c=>this.connection.sendMessageToSocket(c)),t.on("send-message-to-client",c=>this.connection.sendMessageToClient(c)),this.connection.on("data-received",c=>this._onFeature(c)),this.connection.on("message-received",c=>this._onWebSocketMessage(c)),f(()=>[t.definitionExpression,t.geometryDefinition,t.purgeOptions],()=>this._startup())],m),this._initUpdateInterval()}_onWebSocketMessage(t){if(this.layerView.emit("message-received",t),"type"in t)switch(t.type){case"delete":if(t.objectIds)for(const e of t.objectIds)this.featuresManager.removeById(e);if(t.trackIds)for(const e of t.trackIds)this.featuresManager.removeByTrackId(e);break;case"clear":this.store.forEach(e=>this.featuresManager.removeById(e.objectId))}}_onFeature(t){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:t.attributes,centroid:t.centroid,geometry:t.geometry});try{t.geometry==null||t.geometry.spatialReference||(t.geometry.spatialReference=this._outSpatialReference);const e=p.fromJSON(t);e.sourceLayer=e.layer=this.layer,this.featuresManager.add(e)}catch{}}_onUpdate(t,e){e!=null&&this.graphics.removeMany(e),t!=null&&(this._updateInfo.client+=t.length,this.graphics.addMany(t))}_initUpdateInterval(){this._clearInterval();const{updateInterval:t}=this.layer;let e=performance.now();this._updateIntervalId=setInterval(()=>{const o=performance.now(),s=o-e;if(s>N){e=o;const l=Math.round(this._updateInfo.client/(s/1e3)),h=Math.round(this._updateInfo.websocket/(s/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:l,websocket:h})}this.featuresManager.checkForUpdates()},t)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}};r([i()],n.prototype,"isPaused",void 0),r([i({constructOnly:!0})],n.prototype,"layer",void 0),r([i({constructOnly:!0})],n.prototype,"layerView",void 0),r([i()],n.prototype,"connection",void 0),r([i({readOnly:!0})],n.prototype,"updating",null),n=r([d("esri.layers.graphics.controllers.StreamController")],n);const z=t=>{let e=class extends t{constructor(...o){super(...o),this.connectionError=null,this.filter=null}get connectionStatus(){var o,s,l;return(o=this.controller)!=null&&o.isPaused?"paused":((l=(s=this.controller)==null?void 0:s.connection)==null?void 0:l.connectionStatus)??"disconnected"}};return r([i({readOnly:!0})],e.prototype,"connectionError",void 0),r([i({readOnly:!0})],e.prototype,"connectionStatus",null),r([i({type:F})],e.prototype,"filter",void 0),e=r([d("esri.layers.mixins.StreamLayerView")],e),e};let a=class extends z(V(C(L))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=U.ASYNC,this.hasZ=!0,this.hasM=!1,this._isUserPaused=!1}initialize(){this.handles.add(f(()=>this.suspended,t=>{this.controller&&(t?this.controller.pauseStream():this._isUserPaused||this.controller.resumeStream())}))}get connectionError(){const t=this.get("controller.connection.errorString");if(t)return new E("stream-controller",t)}pause(){this._isUserPaused=!0,this.controller.pauseStream()}resume(){this._isUserPaused=!1,this.controller.resumeStream()}createQuery(){return new j({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(t,e){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(t),e==null?void 0:e.signal)}createController(){return new n({layer:this.layer,layerView:this})}beforeSetController(){}};r([i({readOnly:!0})],a.prototype,"updatePolicy",void 0),r([i({readOnly:!0})],a.prototype,"connectionError",null),r([i()],a.prototype,"controller",void 0),r([i({readOnly:!0})],a.prototype,"hasZ",void 0),r([i({readOnly:!0})],a.prototype,"hasM",void 0),a=r([d("esri.views.3d.layers.StreamLayerView3D")],a);const Ce=a;export{Ce as default};