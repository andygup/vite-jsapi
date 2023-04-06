import{ab as p,ac as l,ad as d,D as m,s as u,c4 as h,ae as f}from"./index-394e5411.js";import v from"./FeatureLayerView2D-4cc3a8b1.js";import{e as _}from"./util-49cfecf0.js";import"./Container-1c3995fd.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-a4d82a63.js";import"./LayerView-c6fd3c3a.js";import"./schemaUtils-1bb27cab.js";import"./color-9c9a388a.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-60ed25bf.js";import"./MaterialKey-560861d9.js";import"./visualVariablesUtils-81574e93.js";import"./ExpandedCIM-6b590f0e.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-449fe977.js";import"./floatRGBA-8dabb324.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-021e2d48.js";import"./RefreshableLayerView-22c1ea10.js";function y(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let o=class extends v{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([m(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new u("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return h(e.map(n=>this.on(n,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const i=super.on(e,t),s=this;return{remove(){i.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))}}}queryLatestObservations(e,t){var r,i,s;if(!((r=this.layer.timeInfo)!=null&&r.endField||(i=this.layer.timeInfo)!=null&&i.startField||(s=this.layer.timeInfo)!=null&&s.trackIdField))throw new u("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(n=>{const a=f.fromJSON(n);return a.features.forEach(c=>{c.layer=this.layer,c.sourceLayer=this.layer}),a})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(y(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(a=>a.toJSON()),i=_(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,n=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:y(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:n,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};p([l()],o.prototype,"errorString",void 0),p([l({readOnly:!0})],o.prototype,"connectionError",null),p([l()],o.prototype,"connectionStatus",void 0),o=p([d("esri.views.2d.layers.StreamLayerView2D")],o);const j=o;export{j as default};