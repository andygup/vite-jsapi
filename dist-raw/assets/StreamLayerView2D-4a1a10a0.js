import{ae as m,af as c,ai as f,A as l,E as y,cr as S}from"./index-0cbe37a0.js";import{F as _}from"./FeatureSet-10ffd73d.js";import v from"./FeatureLayerView2D-0f7384c3.js";import{t as g}from"./util-340d902b.js";import"./Field-a5856a62.js";import"./fieldType-7585de06.js";import"./Container-8061ac15.js";import"./parser-4c0b00b2.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-1f8c554e.js";import"./FeatureEffect-4161b57f.js";import"./jsonUtils-1ca84aef.js";import"./Query-612ec863.js";import"./LayerView-3efbec1b.js";import"./schemaUtils-fdf930ff.js";import"./sql-e009a7de.js";import"./diffUtils-6d46a8ba.js";import"./labelingInfo-e7968113.js";import"./labelUtils-c3e92de5.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-98d903f2.js";import"./color-1b66ad26.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./utils-c4b4ba96.js";import"./MaterialKey-e90d5ee5.js";import"./heatmapUtils-c9f41040.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-fff56d02.js";import"./ExpandedCIM-757539da.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-7579f13f.js";import"./floatRGBA-2c89f36a.js";import"./featureFlags-986067cc.js";import"./clusterUtils-ffb33f67.js";import"./SizeVariable-f1c59b14.js";import"./colorRamps-3b9c4be9.js";import"./LegendOptions-fe356083.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-3c389155.js";import"./commonProperties-31665bf0.js";import"./ElevationInfo-bbf2ebe0.js";import"./floorFilterUtils-0e56040f.js";import"./popupUtils-694b4611.js";import"./RefreshableLayerView-9ffe412a.js";function h(n,e){if(n==null&&e==null)return null;const t={};return e!=null&&(t.geometry=e.toJSON()),n!=null&&(t.where=n),t}let a=class extends v{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([l(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),l(()=>this.layer.purgeOptions,()=>this._update()),l(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new y("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return S(e.map(o=>this.on(o,t)));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),s&&!i._proxy.closed&&!i.hasEventListener(e)&&i._proxy.enableEvent(e,!1)}}}queryLatestObservations(e,t){var r,i,o;if(!(((r=this.layer.timeInfo)==null?void 0:r.endField)||((i=this.layer.timeInfo)==null?void 0:i.startField)||((o=this.layer.timeInfo)==null?void 0:o.trackIdField)))throw new y("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const u=_.fromJSON(p);return u.features.forEach(d=>{d.layer=this.layer,d.sourceLayer=this.layer}),u})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:t=>{this.set(t.propertyName,t.value)}}}_createTileRendererHash(e){const t=JSON.stringify(this.layer.purgeOptions),s=JSON.stringify(h(this.layer.definitionExpression,this.layer.geometryDefinition)),r=`${t}.${s})`;return super._createTileRendererHash(e)+r}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,s=e.fields.map(p=>p.toJSON()),r=g(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:s,geometryType:r,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:h(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};m([c()],a.prototype,"errorString",void 0);m([c({readOnly:!0})],a.prototype,"connectionError",null);m([c()],a.prototype,"connectionStatus",void 0);a=m([f("esri.views.2d.layers.StreamLayerView2D")],a);const _e=a;export{_e as default};