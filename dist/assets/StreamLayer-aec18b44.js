import{af as t,ag as r,aj as I,bD as F,bt as S,a as l,$ as P,eA as f,N as D,_ as k,eJ as u,cu as _,L as E,eE as O,bf as C,e9 as g,bb as N,bF as b,eG as A,eH as U,a$ as L}from"./index-6eb28d6b.js";import{A as J}from"./UniqueValueRenderer-96d9835c.js";import{o as M,p as G,b as V,n as q}from"./jsonUtils-4ca2381c.js";import{O as z}from"./MultiOriginJSONSupport-12c5c93c.js";import{l as W}from"./ArcGISService-6bc3de28.js";import{a as H}from"./BlendLayer-8cb2f026.js";import{o as Q}from"./CustomParametersMixin-e2086895.js";import{n as X,p as Y}from"./FeatureReductionLayer-4a103bdb.js";import{c as Z}from"./OperationalLayer-8766a006.js";import{j as B}from"./PortalLayer-5a19a8b1.js";import{p as K}from"./RefreshableLayer-a314122a.js";import{t as ee}from"./ScaleRangeLayer-a3b20e36.js";import{a as te}from"./TemporalLayer-707c4df5.js";import{m as ie,c as re,D as oe,I as se,p as ne,l as ae,f as pe}from"./commonProperties-71c0550b.js";import{y as le}from"./Field-3c7d8d62.js";import{s as de}from"./fieldProperties-94448584.js";import{C as me,i as ce}from"./labelingInfo-e90eb8c8.js";import{t as ye}from"./styleUtils-51fd2fda.js";import{b as ue}from"./Query-2a94894d.js";import{p as he}from"./popupUtils-fa63b933.js";import{h as fe}from"./ElevationInfo-6810683d.js";import"./LegendOptions-8b5a4dff.js";import"./diffUtils-e501908d.js";import"./SizeVariable-d56771ee.js";import"./colorRamps-991e13c0.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-d204db2e.js";import"./ColorStop-57d23cae.js";import"./featureFlags-825f837d.js";import"./styleUtils-4cbc1c81.js";import"./DictionaryLoader-d4fe8fed.js";import"./LRUCache-c5294c76.js";import"./Version-fd75b892.js";import"./FieldsIndex-b55fecf3.js";import"./heatmapUtils-b8fab62d.js";import"./vec4f64-aa64c7e9.js";import"./jsonUtils-4e3a5483.js";import"./parser-aaaca3ad.js";import"./FeatureEffect-d27dd9c4.js";import"./clusterUtils-f9477424.js";import"./portalItemUtils-c64fb6e5.js";import"./fieldType-df6f400c.js";import"./labelUtils-01c8275b.js";import"./defaultsJSON-b087dd4d.js";var h;let p=h=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new h({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],p.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"maxObservations",void 0),p=h=t([I("esri.layers.support.PurgeOptions")],p);const x=p,v=de();function w(e,o){return new l("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends X(Y(H(te(ee(K(W(Z(B(z(Q(L))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new x,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=S.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new l("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(P).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){const a=(o=o.layerDefinition||o).drawingInfo&&o.drawingInfo.renderer||void 0;if(a){const n=M(a,o,s)||void 0;return n||D.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),n}if(o.defaultSymbol)return o.types&&o.types.length?new J({defaultSymbol:y(o.defaultSymbol,o,s),field:o.typeIdField,uniqueValueInfos:o.types.map(n=>({id:n.id,symbol:y(n.symbol,n,s)}))}):new G({symbol:y(o.defaultSymbol,o,s)})}async connect(e){const[{createConnection:o}]=await Promise.all([k(()=>import("./createConnection-291cbb11.js"),["assets/createConnection-291cbb11.js","assets/index-6eb28d6b.js","assets/index-0492b785.css","assets/query-98ad19ee.js","assets/normalizeUtils-1bb4e48e.js","assets/normalizeUtilsCommon-b44b6ad4.js","assets/pbfQueryUtils-8764c56c.js","assets/pbf-b8eb8f86.js","assets/OptimizedGeometry-33b2eb0d.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-3f7733ad.js","assets/Query-2a94894d.js","assets/Field-3c7d8d62.js","assets/fieldType-df6f400c.js"]),this.load()]),s=this.geometryType?u.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:m=null,maxReconnectionAttempts:$=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=o(this.parsedUrl,this.spatialReference,T,s,{geometry:m,where:n},$,R,a??void 0),j=_([this.on("send-message-to-socket",c=>d.sendMessageToSocket(c)),this.on("send-message-to-client",c=>d.sendMessageToClient(c))]);return d.once("destroy",j.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new ue;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(a=>(a.name===e&&(s=a.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(w(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(w(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await E(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new l("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(m=>m.type==="oid"))==null?void 0:s.name;if(!n)throw new l("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new l("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new le({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new l("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),O(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ye(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:fe})],i.prototype,"elevationInfo",void 0),t([r(v.fields)],i.prototype,"fields",void 0),t([r(v.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:C})],i.prototype,"geometryDefinition",void 0),t([r({type:u.apiValues,json:{read:{reader:u.read}}})],i.prototype,"geometryType",void 0),t([r(ie)],i.prototype,"labelsVisible",void 0),t([r({type:[me],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:ce},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),t([r(re)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],i.prototype,"listMode",void 0),t([r({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([r(oe)],i.prototype,"maxScale",void 0),t([r(se)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r(ne)],i.prototype,"popupEnabled",void 0),t([r({type:N,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({type:x})],i.prototype,"purgeOptions",void 0),t([r({types:V,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:q,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r(ae)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:S,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(pe)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const y=A({types:U}),at=i;export{at as default};
