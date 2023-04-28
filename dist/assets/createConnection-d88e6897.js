import{aP as L,s as c,ae as h,af as p,ai as S,fo as C,cI as v,J as a,aO as O,a as F,L as N,bB as x,_ as E,bt as P}from"./index-6e11f365.js";import{m as k}from"./query-23ebfd67.js";import{b as M}from"./Query-1f986dc6.js";import"./normalizeUtils-6225a887.js";import"./normalizeUtilsCommon-80217ab8.js";import"./pbfQueryUtils-fb5b1b8e.js";import"./pbf-bbb2c34e.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-3a00eae2.js";import"./Field-c6730f31.js";import"./fieldType-4933b961.js";let w=class extends L.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(t){this.emit("data-received",t)}onMessage(t){this.emit("message-received",t)}};h([p({readOnly:!0})],w.prototype,"connectionError",null),w=h([S("esri.layers.support.StreamConnection")],w);const R=w;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends R{constructor(t){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:r,spatialReference:s,sourceSpatialReference:o}=t;this._config=t,this._featureZScaler=C(r,o,s),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(t){this._websocket!=null?this._websocket.send(JSON.stringify(t)):this._outstandingMessages.push(t)}sendMessageToClient(t){this._onMessage(t)}updateCustomParameters(t){this._config.customParameters=t,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(t=this._config.source.path,r=1e3,s=0){try{if(this.destroyed)return;const o=v(t,this._config.customParameters??{});this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const n=r/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(a.getLogger(this.declaredClass).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,o)),await O(r),this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(t){t.onmessage=r=>{try{const s=JSON.parse(r.data);this._onMessage(s)}catch(s){return void a.getLogger(this.declaredClass).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(t){return new Promise((r,s)=>{const o=new WebSocket(t);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=n=>this._onClose(n),o.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(o),r(o)},o.onclose=n=>{o.onopen=o.onclose=null,s(n)}})}async _handshake(t=1e4){const r=this._websocket;if(r==null)return;const s=F(),o=r.onmessage,{filter:n,outFields:l,spatialReference:u}=this._config;return s.timeout(t),r.onmessage=d=>{var m;let i=null;try{i=JSON.parse(d.data)}catch{}i&&typeof i=="object"||(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",d.data)),s.reject(),this.destroy()),((m=i.spatialReference)==null?void 0:m.wkid)!==(u==null?void 0:u.wkid)&&(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,d.data)),s.reject(),this.destroy()),i.format!=="json"&&(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",d.data)),s.reject(),this.destroy()),n&&i.filter!==n&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),l&&i.outFields!==l&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=o;for(const y of this._outstandingMessages)r.send(JSON.stringify(y));this._outstandingMessages=[],s.resolve()},r.send(JSON.stringify({filter:n,outFields:l,format:"json",spatialReference:{wkid:u.wkid}})),s.promise}_onMessage(t){if(this.onMessage(t),"type"in t)switch(t.type){case"features":case"featureResult":for(const r of t.features)this._featureZScaler!=null&&this._featureZScaler(r.geometry),this.onFeature(r)}}_onError(t){const r="Encountered an error over WebSocket connection";this._set("errorString",r),a.getLogger(this.declaredClass).error("websocket-connection",r)}_onClose(t){this._websocket=null,this.notifyChange("connectionStatus"),t.code!==1e3&&a.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${t.code}`),this.destroyed||this._open()}};h([p()],f.prototype,"connectionStatus",null),h([p()],f.prototype,"errorString",void 0),f=h([S("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const W=1e4,T={maxQueryDepth:5,maxRecordCountFactor:3};let b=class extends f{constructor(e){super({...T,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=N(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return v(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this.declaredClass).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=F(),l=()=>{o||(this.destroyed||this._websocket!==r||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},u=d=>{const i=JSON.parse(d.data);i.filter&&(i.error&&(a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=u,r.send(s),setTimeout(l,W),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e!=null&&e.geometry)try{const s=x(e.geometry);if(s.type!=="extent")throw new c(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e!=null&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return a.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const l in o)e.attributes[l]=o[l];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){var y;const t=new(await E(()=>import("./FeatureLayer-3c50d7cf.js"),["assets/FeatureLayer-3c50d7cf.js","assets/index-6e11f365.js","assets/index-001d3307.css","assets/UniqueValueRenderer-5f1fe6c2.js","assets/LegendOptions-1566f85b.js","assets/diffUtils-d7f96f30.js","assets/SizeVariable-5b39cf61.js","assets/colorRamps-4404e80a.js","assets/sizeVariableUtils-d4870b0d.js","assets/lengthUtils-9743f155.js","assets/ColorStop-13a56dff.js","assets/jsonUtils-c398a7e6.js","assets/styleUtils-c8bd0c80.js","assets/featureFlags-47ea12bc.js","assets/jsonUtils-87bbe7d0.js","assets/DictionaryLoader-33d675a7.js","assets/LRUCache-3361c9d5.js","assets/MemCache-1033102b.js","assets/FieldsIndex-f7d03105.js","assets/heatmapUtils-82abfb64.js","assets/vec4f64-aa64c7e9.js","assets/MultiOriginJSONSupport-b1bc5639.js","assets/sql-662efd73.js","assets/FeatureLayerBase-76c67ed0.js","assets/Field-c6730f31.js","assets/fieldType-4933b961.js","assets/commonProperties-9de20a68.js","assets/ElevationInfo-4951b744.js","assets/AttachmentQuery-3ea1b4ff.js","assets/Query-1f986dc6.js","assets/RelationshipQuery-41cd9e6a.js","assets/serviceCapabilitiesUtils-3502c630.js","assets/editsZScale-b561942a.js","assets/queryZScale-3a00eae2.js","assets/FeatureSet-6fca0780.js","assets/APIKeyMixin-cbb135cb.js","assets/ArcGISService-4c0abf4a.js","assets/BlendLayer-b5a409d1.js","assets/jsonUtils-ec3bb06d.js","assets/parser-2c9af7f8.js","assets/CustomParametersMixin-9e0782ad.js","assets/EditBusLayer-ca17e49c.js","assets/FeatureReductionLayer-bda0af06.js","assets/FeatureEffect-d53e9064.js","assets/clusterUtils-0648c051.js","assets/labelingInfo-ac2c5970.js","assets/labelUtils-01d56de2.js","assets/defaultsJSON-b087dd4d.js","assets/OperationalLayer-89d659fb.js","assets/OrderedLayer-07b0a6c8.js","assets/PortalLayer-8f8c4782.js","assets/portalItemUtils-74ec5c98.js","assets/RefreshableLayer-af6fd487.js","assets/ScaleRangeLayer-0fde6c5e.js","assets/TemporalLayer-827e097f.js","assets/FeatureTemplate-40fa85f4.js","assets/FeatureType-37b25ea7.js","assets/fieldProperties-fccdf572.js","assets/versionUtils-37624ccc.js","assets/styleUtils-5583d5bd.js","assets/TopFeaturesQuery-9a662a37.js","assets/popupUtils-b140dfab.js"])).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,l=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,d=s?u*l:u,i=new M;if(i.outFields=this._config.outFields??["*"],i.where=((y=this._config.filter)==null?void 0:y.where)??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=P.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),s&&(i.maxRecordCountFactor=l),o)return i.num=d,t.destroy(),this._queryPages(e,i);const m=await k(e,i,this._config.sourceSpatialReference);return t.destroy(),m.data}async _queryPages(e,t,r=[],s=0){t.start=t.num!=null?s*t.num:null;const{data:o}=await k(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,s+1)):(r.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};b=h([S("esri.layers.graphics.sources.connections.GeoEventConnection")],b);const q=b;let _=class extends R{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=C(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};h([p()],_.prototype,"connectionStatus",void 0),h([p()],_.prototype,"errorString",void 0),_=h([S("esri.layers.support.ClientSideConnection")],_);function K(e,t,r,s,o,n,l,u){const d={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:l,customParameters:u};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(d):new q(d):new _(d)}export{K as createConnection};