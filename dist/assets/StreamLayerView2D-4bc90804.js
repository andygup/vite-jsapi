import{ae as m,af as c,ai as f,A as l,E as y,cr as S}from"./index-0ea7d266.js";import{F as _}from"./FeatureSet-492be28c.js";import v from"./FeatureLayerView2D-f80b9ad4.js";import{t as g}from"./util-77bd07f6.js";import"./Field-da71a869.js";import"./fieldType-2fab90c6.js";import"./Container-7deba39b.js";import"./parser-378b4989.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-86971943.js";import"./FeatureEffect-afe82aad.js";import"./jsonUtils-16a3028b.js";import"./Query-0072957d.js";import"./LayerView-aa08b165.js";import"./schemaUtils-b7aedaaa.js";import"./sql-a6f6c9bf.js";import"./diffUtils-b0771538.js";import"./labelingInfo-00dd8611.js";import"./labelUtils-6d9ec360.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-f828afa2.js";import"./color-24f75376.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./utils-b2ef2fd1.js";import"./MaterialKey-61df849d.js";import"./heatmapUtils-47f2d9fb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-967bb046.js";import"./ExpandedCIM-dcae6e07.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-07d350f3.js";import"./floatRGBA-79634f69.js";import"./featureFlags-d265949d.js";import"./clusterUtils-6c781da2.js";import"./SizeVariable-0f7c14c6.js";import"./colorRamps-fd437087.js";import"./LegendOptions-360b2985.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-bc57f38a.js";import"./commonProperties-cee41848.js";import"./ElevationInfo-56c656df.js";import"./floorFilterUtils-0e56040f.js";import"./popupUtils-c0f44195.js";import"./RefreshableLayerView-9a042869.js";function h(n,e){if(n==null&&e==null)return null;const t={};return e!=null&&(t.geometry=e.toJSON()),n!=null&&(t.where=n),t}let a=class extends v{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([l(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),l(()=>this.layer.purgeOptions,()=>this._update()),l(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new y("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return S(e.map(o=>this.on(o,t)));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),s&&!i._proxy.closed&&!i.hasEventListener(e)&&i._proxy.enableEvent(e,!1)}}}queryLatestObservations(e,t){var r,i,o;if(!(((r=this.layer.timeInfo)==null?void 0:r.endField)||((i=this.layer.timeInfo)==null?void 0:i.startField)||((o=this.layer.timeInfo)==null?void 0:o.trackIdField)))throw new y("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(p=>{const u=_.fromJSON(p);return u.features.forEach(d=>{d.layer=this.layer,d.sourceLayer=this.layer}),u})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:t=>{this.set(t.propertyName,t.value)}}}_createTileRendererHash(e){const t=JSON.stringify(this.layer.purgeOptions),s=JSON.stringify(h(this.layer.definitionExpression,this.layer.geometryDefinition)),r=`${t}.${s})`;return super._createTileRendererHash(e)+r}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,s=e.fields.map(p=>p.toJSON()),r=g(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:s,geometryType:r,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:h(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};m([c()],a.prototype,"errorString",void 0);m([c({readOnly:!0})],a.prototype,"connectionError",null);m([c()],a.prototype,"connectionStatus",void 0);a=m([f("esri.views.2d.layers.StreamLayerView2D")],a);const _e=a;export{_e as default};