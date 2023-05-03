import{d as j,e as r,y as o,a as b,h1 as $,bs as w,by as O,K as m,j as J,h2 as N,v as R,ft as I,h4 as P,bz as E,Y as q,h7 as f,hb as T,gX as g,_ as k,fE as D,hc as G,a$ as L}from"./index-d29f6b97.js";import"./UniqueValueRenderer-6bfde73c.js";import{b as z,n as C}from"./jsonUtils-a30c08d1.js";import{O as Q}from"./MultiOriginJSONSupport-d8471874.js";import{l as Z}from"./clientSideDefaults-3f6f7f8c.js";import{g as V}from"./FeatureSet-b4c3ebab.js";import{a as A}from"./BlendLayer-6b704ca4.js";import{o as B}from"./CustomParametersMixin-238bf6a3.js";import{n as M,p as U}from"./FeatureReductionLayer-1b796ac3.js";import{c as W}from"./OperationalLayer-abee1819.js";import{c as K}from"./OrderedLayer-d05fc281.js";import{j as X}from"./PortalLayer-9cdb0d77.js";import{t as Y}from"./ScaleRangeLayer-4ea69c96.js";import{a as H}from"./TemporalLayer-bcd2e667.js";import{d as ee,v as te,m as re,c as ie,u as oe,p as se,l as ne,f as ae}from"./commonProperties-4511a72e.js";import{p as le}from"./FeatureTemplate-7817a164.js";import{n as pe}from"./FeatureType-ef13726a.js";import{s as ue}from"./fieldProperties-4d9f93fc.js";import{C as de,i as he}from"./labelingInfo-59a7cf3b.js";import{b as c}from"./Query-02316d46.js";import{p as ce}from"./popupUtils-30b722d9.js";import"./ColorStop-c9dfec3d.js";import"./diffUtils-149561ab.js";import"./colorRamps-5cc134e8.js";import"./DictionaryLoader-d7f4a828.js";import"./LRUCache-2af9f319.js";import"./FieldsIndex-f92177f9.js";import"./heatmapUtils-b7e5e306.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-59981e75.js";import"./jsonUtils-5b32189b.js";import"./FeatureEffect-2095f3f9.js";import"./FeatureFilter-ee8bfdef.js";import"./portalItemUtils-3c9a4460.js";import"./ElevationInfo-568c6f07.js";import"./defaults-a3afa070.js";const F="esri.layers.graphics.sources.GeoJSONSource",v=j.getLogger(F);let d=class extends ${constructor(){super(...arguments),this.type="geojson",this.refresh=w(async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(i=>V.fromJSON(i))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(i=>({count:i.count,extent:O.fromJSON(i.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new m("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,i=[],n=[],u=[];if(e.addFeatures)for(const a of e.addFeatures)i.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:i,updates:u,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:p})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(p)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e);return i?{geometry:i.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?J.fromExtent(t.extent):t}async _startWorker(e){this._connection=await N("GeoJSONSourceWorker",{strategy:R("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:i,hasZ:n,geometryType:u,objectIdField:a,url:l,timeInfo:p,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",x={url:l,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:p?p.toJSON():null,spatialReference:_?null:i&&i.toJSON()},h=await this._connection.invoke("load",x,{signal:e});for(const y of h.warnings)v.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&v.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=Z(this.sourceJSON.hasZ,!0)}};r([o()],d.prototype,"capabilities",void 0),r([o()],d.prototype,"type",void 0),r([o({constructOnly:!0})],d.prototype,"layer",void 0),r([o()],d.prototype,"sourceJSON",void 0),d=r([b(F)],d);const ye=ue();let s=class extends K(B(M(U(A(H(Y(P(W(X(Q(L))))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(q).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),f(this.renderer,this.fieldsIndex),T(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?g(this.url):null}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=g(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:i}=await k(()=>import("./editingSupport-4a286ecb.js"),["assets/editingSupport-4a286ecb.js","assets/index-d29f6b97.js","assets/index-0492b785.css","assets/normalizeUtils-4068a3de.js","assets/normalizeUtilsCommon-6017271d.js","assets/EditBusLayer-f0fa7c71.js","assets/infoFor3D-5881142c.js"]);await this.load();const n=await i(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return ce(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:n}=this;return e.timeExtent=i!=null&&n!=null?n.offset(-i.value,i.unit):n||null,e}getFieldDomain(e,t){let i,n=!1;const u=t&&t.feature,a=u&&u.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(p=>p.id==l&&(i=p.domains&&p.domains[e],i&&i.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),n||i||(i=this._getLayerDomain(e)),i}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(i=>{if(i!=null&&i.features)for(const n of i.features)n.layer=n.sourceLayer=this;return i})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(i=>(i.name===e&&(t=i.domain),!!t)),t}};r([o({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([o({type:String})],s.prototype,"copyright",void 0),r([o({readOnly:!0})],s.prototype,"createQueryVersion",null),r([o({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([o({type:String})],s.prototype,"displayField",void 0),r([o({type:Boolean})],s.prototype,"editingEnabled",void 0),r([o(ee)],s.prototype,"elevationInfo",void 0),r([o({type:[D],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([o(ye.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([o({type:O,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([o({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([o({type:Boolean})],s.prototype,"hasZ",void 0),r([o(te)],s.prototype,"id",void 0),r([o({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([o(re)],s.prototype,"labelsVisible",void 0),r([o({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:he},write:!0}})],s.prototype,"labelingInfo",void 0),r([o(ie)],s.prototype,"legendEnabled",void 0),r([o({type:["show","hide"]})],s.prototype,"listMode",void 0),r([o({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([o(oe)],s.prototype,"opacity",void 0),r([o({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([o({readOnly:!0})],s.prototype,"parsedUrl",null),r([o(se)],s.prototype,"popupEnabled",void 0),r([o({type:G,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([o({types:z,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:C}}}})],s.prototype,"renderer",null),r([o(ne)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],s.prototype,"source",void 0),r([o({type:E})],s.prototype,"spatialReference",void 0),r([o({type:[le]})],s.prototype,"templates",void 0),r([o()],s.prototype,"title",void 0),r([o({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([o({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([o({type:[pe]})],s.prototype,"types",void 0),r([o(ae)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const Xe=s;export{Xe as default};
