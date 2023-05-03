"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5660],{95047:(e,t,r)=>{r.r(t),r.d(t,{createConnection:()=>F});var s=r(43697),o=(r(66577),r(3172)),n=r(20102),i=r(92604),a=r(95330),c=r(17452),l=(r(75215),r(67676),r(80442),r(52011)),u=r(5600),d=r(69285),h=r(32448);let g=class extends h.Z.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new n.Z("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,s._)([(0,u.Cb)({readOnly:!0})],g.prototype,"connectionError",null),g=(0,s._)([(0,l.j)("esri.layers.support.StreamConnection")],g);const f=g;var y,_;(_=y||(y={}))[_.CONNECTING=0]="CONNECTING",_[_.OPEN=1]="OPEN",_[_.CLOSING=2]="CLOSING",_[_.CLOSED=3]="CLOSED";let p=class extends f{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,d.k)(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const t=(0,c.fl)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(s){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,s)),await(0,a.e4)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(e){return void i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Failed to parse message, invalid JSON",{error:e}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,r(e)}}))}async _handshake(e=1e4){const t=this._websocket;if(null==t)return;const r=(0,a.hh)(),s=t.onmessage,{filter:o,outFields:c,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=e=>{let a=null;try{a=JSON.parse(e.data)}catch(e){}a&&"object"==typeof a||(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),a.spatialReference?.wkid!==l?.wkid&&(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==a.format&&(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),o&&a.filter!==o&&i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Tried to set filter, but server doesn't support it")),c&&a.outFields!==c&&i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const e of this._outstandingMessages)t.send(JSON.stringify(e));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:c,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),i.Z.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&i.Z.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,s._)([(0,u.Cb)()],p.prototype,"connectionStatus",null),(0,s._)([(0,u.Cb)()],p.prototype,"errorString",void 0),p=(0,s._)([(0,l.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],p);var w=r(34599),m=r(14165),S=r(33955),b=r(82971);const k={maxQueryDepth:5,maxRecordCountFactor:3};let C=class extends p{constructor(e){super({...k,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||i.Z.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(t.geometry)}catch(e){return void i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=(0,o.default)(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return(0,c.fl)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(null==r||null==e&&null==t)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const c=(0,a.hh)();return r.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(r),o=!0,c.resolve())},r.send(s),setTimeout((()=>{o||(this.destroyed||this._websocket!==r||i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Server timed out when setting filter")),c.reject())}),1e4),c.promise}_serializeFilter(e,t){const r={};if(null==e&&null==t)return r;if(null!=e&&e.geometry)try{const t=(0,S.im)(e.geometry);if("extent"!==t.type)throw new n.Z(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return null!=e&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),null!=t&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return i.Z.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:a}=s;for(const t in o)e.attributes[t]=o[t];return a&&(e.geometry=a),e.geometry||e.centroid||i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const e of o.features)this.onFeature(this._enrich(e))}catch(e){i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.all([r.e(163),r.e(4609),r.e(9790),r.e(5653),r.e(9469),r.e(1423),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(5235),r.e(8522),r.e(2156)]).then(r.bind(r,19238))).default)({url:e}),{capabilities:s}=await t.load(),o=s.query.supportsMaxRecordCountFactor,n=s.query.supportsPagination,i=s.query.supportsCentroid,a=this._config.maxRecordCountFactor,c=t.capabilities.query.maxRecordCount,l=o?c*a:c,u=new m.Z;if(u.outFields=this._config.outFields??["*"],u.where=this._config.filter?.where??"1=1",u.returnGeometry=!0,u.returnExceededLimitFeatures=!0,u.outSpatialReference=b.Z.fromJSON(this._config.spatialReference),i&&(u.returnCentroid=!0),o&&(u.maxRecordCountFactor=a),n)return u.num=l,t.destroy(),this._queryPages(e,u);const d=await(0,w.JT)(e,u,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],s=0){t.start=null!=t.num?s*t.num:null;const{data:o}=await(0,w.JT)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const e of r){const r=e.attributes[s];t.set(r,e)}this._relatedFeatures=t}};C=(0,s._)([(0,l.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],C);const v=C;let Z=class extends f{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=(0,d.k)(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function F(e,t,r,s,o,n,i,a){const c={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:i,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new p(c):new v(c):new Z(c)}(0,s._)([(0,u.Cb)()],Z.prototype,"connectionStatus",void 0),(0,s._)([(0,u.Cb)()],Z.prototype,"errorString",void 0),Z=(0,s._)([(0,l.j)("esri.layers.support.ClientSideConnection")],Z)},28694:(e,t,r)=>{r.d(t,{p:()=>o});var s=r(69285);function o(e,t,r){if(!r||!r.features||!r.hasZ)return;const o=(0,s.k)(r.geometryType,t,e.outSpatialReference);if(null!=o)for(const e of r.features)o(e.geometry)}}}]);