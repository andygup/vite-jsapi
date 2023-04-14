import{ct as v,L as g,fJ as w,fK as V,t as p,fL as L,E as D,Z as S,r as f,bx as T,_ as y,ae as a,af as n,bF as b,f1 as I,ai as E,a$ as x}from"./index-468a9268.js";import{M as O}from"./MultiOriginJSONSupport-401b6783.js";import{A as k}from"./ArcGISCachedService-c8166cf7.js";import{A}from"./ArcGISService-3a9fd22b.js";import{O as M}from"./OperationalLayer-22d46980.js";import{P as q}from"./PortalLayer-4b72e3f9.js";import{u as P}from"./commonProperties-99999309.js";import"./TilemapCache-af4d5140.js";import"./ByteSizeUnit-c0a244d3.js";import"./LRUCache-d3406418.js";import"./MemCache-3df47c80.js";import"./portalItemUtils-a011a0ff.js";import"./ElevationInfo-3032ca55.js";import"./lengthUtils-edd0ce65.js";class ${constructor(e,t,r,i){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=r,this.noDataValue=i)}get hasNoDataValues(){if(this._hasNoDataValues==null){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(this._minValue!=null)return;const{noDataValue:e,values:t}=this;let r=1/0,i=-1/0,l=!0;for(const o of t)o===e?this._hasNoDataValues=!0:(r=o<r?o:r,i=o>i?o:i,l=!1);l?(this._minValue=0,this._maxValue=0):(this._minValue=r,this._maxValue=i>-3e38?i:0)}}class j{constructor(e,t,r,i,l={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=v(e,{...l,schedule:i}).then(o=>{if(this._thread===void 0){this._thread=o,this._promise=null,l.hasInitialize&&this.broadcast({},"initialize");for(const d of this._listeners)this._connectListener(d)}else o.close()}),this._promise.catch(o=>g.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${o}`))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),w(()=>{r.removed=!0,V(this._listeners,r),this._thread&&r.threadHandle!=null&&r.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const i=this._transferLists[e],l=i?i(t):[];return this._thread.invoke(e,t,{transferList:l,signal:r})}return this._promise?this._promise.then(()=>(p(r),this.invokeMethod(e,t,r))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class m extends j{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return!e||e.byteLength===0?Promise.resolve(null):this.invoke({buffer:e,options:t},r)}release(){--this.ref<=0&&(u.forEach((e,t)=>{e===this&&u.delete(t)}),this.destroy())}}const u=new Map;function N(h=null){let e=u.get(h);return e||(h!=null?(e=new m(t=>h.immediate.schedule(t)),u.set(h,e)):(e=new m,u.set(null,e))),++e.ref,e}let s=class extends k(A(M(q(O(x))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=N()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._lercDecoder=L(this._lercDecoder)}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:r=>{for(let i=0;i<r.typeKeywords.length;i++)if(r.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new D("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(S).then(()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(e,t,r,i){i=i||{signal:null};const l=i.signal!=null?i.signal:i.signal=new AbortController().signal,o={responseType:"array-buffer",signal:l},d={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,t,r,i)).then(()=>f(this.getTileUrl(e,t,r),o)).then(c=>this._lercDecoder.decode(c.data,d,l)).then(c=>new $(c))}getTileUrl(e,t,r){const i=!this.tilemapCache&&this.supportsBlankTile,l=T({...this.parsedUrl.query,blankTile:i?!1:null});return`${this.parsedUrl.path}/tile/${e}/${t}/${r}${l?"?"+l:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await y(()=>import("./ElevationQuery-cfe96cfb.js"),["assets/ElevationQuery-cfe96cfb.js","assets/index-468a9268.js","assets/index-d832a396.css"]);return p(t),new r().query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await y(()=>import("./ElevationQuery-cfe96cfb.js"),["assets/ElevationQuery-cfe96cfb.js","assets/index-468a9268.js","assets/index-d832a396.css"]);return p(t),new r().createSampler(this,e,t)}_fetchTileAvailability(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):Promise.resolve("unknown")}async _fetchImageService(e){var i;if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},r=await f(this.parsedUrl.path,t);r.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[_]}};a([n({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0);a([n({readOnly:!0,type:I})],s.prototype,"heightModelInfo",void 0);a([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0);a([n({type:["show","hide"]})],s.prototype,"listMode",void 0);a([n({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"minScale",void 0);a([n({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"maxScale",void 0);a([n({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0);a([n({type:["ArcGISTiledElevationServiceLayer"]})],s.prototype,"operationalLayerType",void 0);a([n()],s.prototype,"sourceJSON",void 0);a([n({json:{read:!1},value:"elevation",readOnly:!0})],s.prototype,"type",void 0);a([n(P)],s.prototype,"url",void 0);a([n()],s.prototype,"version",void 0);a([b("version",["currentVersion"])],s.prototype,"readVersion",null);s=a([E("esri.layers.ElevationLayer")],s);const _=Symbol("default-fetch-tile");s.prototype.fetchTile[_]=!0;const ee=s;export{ee as default};
