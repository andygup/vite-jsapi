import{ae as m,af as c,ai as f,A as l,E as y,cr as S}from"./index-b51e75d5.js";import{F as _}from"./FeatureSet-00572347.js";import v from"./FeatureLayerView2D-d03f2e4a.js";import{t as g}from"./util-839d3cdf.js";import"./Field-f8fa059e.js";import"./fieldType-dfe85208.js";import"./Container-f527cc41.js";import"./parser-e88e0cee.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-f92f0319.js";import"./FeatureEffect-3ccd2609.js";import"./jsonUtils-e49662a7.js";import"./Query-aa3f0821.js";import"./LayerView-1913516e.js";import"./schemaUtils-5b5d772c.js";import"./sql-c1a5e8cf.js";import"./diffUtils-1090f477.js";import"./labelingInfo-14ab3cff.js";import"./labelUtils-df8241fd.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-97563038.js";import"./color-05b85ffd.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./utils-3a381d3c.js";import"./MaterialKey-72fa82a6.js";import"./heatmapUtils-a897c480.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-033c8494.js";import"./ExpandedCIM-e8dcd3e7.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-57f47ed2.js";import"./floatRGBA-910d7868.js";import"./featureFlags-dcf59b6a.js";import"./clusterUtils-5e98e18f.js";import"./SizeVariable-f0de0a1e.js";import"./colorRamps-78691ea3.js";import"./LegendOptions-c1ffbacd.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-59fc3632.js";import"./commonProperties-c098604c.js";import"./ElevationInfo-0549af0a.js";import"./floorFilterUtils-0e56040f.js";import"./popupUtils-ba18fdc2.js";import"./RefreshableLayerView-590eb1e3.js";function h(n,e){if(n==null&&e==null)return null;const t={};return e!=null&&(t.geometry=e.toJSON()),n!=null&&(t.where=n),t}let a=class extends v{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([l(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),l(()=>this.layer.purgeOptions,()=>this._update()),l(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new y("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return S(e.map(o=>this.on(o,t)));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),s&&!i._proxy.closed&&!i.hasEventListener(e)&&i._proxy.enableEvent(e,!1)}}}queryLatestObservations(e,t){var r,i,o;if(!(((r=this.layer.timeInfo)==null?void 0:r.endField)||((i=this.layer.timeInfo)==null?void 0:i.startField)||((o=this.layer.timeInfo)==null?void 0:o.trackIdField)))throw new y("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const u=_.fromJSON(p);return u.features.forEach(d=>{d.layer=this.layer,d.sourceLayer=this.layer}),u})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:t=>{this.set(t.propertyName,t.value)}}}_createTileRendererHash(e){const t=JSON.stringify(this.layer.purgeOptions),s=JSON.stringify(h(this.layer.definitionExpression,this.layer.geometryDefinition)),r=`${t}.${s})`;return super._createTileRendererHash(e)+r}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,s=e.fields.map(p=>p.toJSON()),r=g(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:s,geometryType:r,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:h(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};m([c()],a.prototype,"errorString",void 0);m([c({readOnly:!0})],a.prototype,"connectionError",null);m([c()],a.prototype,"connectionStatus",void 0);a=m([f("esri.views.2d.layers.StreamLayerView2D")],a);const _e=a;export{_e as default};