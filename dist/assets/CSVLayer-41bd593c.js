import{ae as r,af as i,ai as h,ep as w,be as S,bf as b,ct as O,m as F,bF as _,hy as I,ff as C,bt as N,Z as q,du as L,E as y}from"./index-0ea7d266.js";import j from"./FeatureLayer-1d7d1566.js";import{F as J}from"./FeatureSet-492be28c.js";import{d as P}from"./clientSideDefaults-6ef92188.js";import{Q as u}from"./Query-0072957d.js";import"./UniqueValueRenderer-bd817ff6.js";import"./LegendOptions-360b2985.js";import"./diffUtils-b0771538.js";import"./SizeVariable-0f7c14c6.js";import"./colorRamps-fd437087.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-bc57f38a.js";import"./ColorStop-93d44530.js";import"./jsonUtils-f828afa2.js";import"./styleUtils-c7710d4b.js";import"./featureFlags-d265949d.js";import"./jsonUtils-a0fc5f15.js";import"./DictionaryLoader-038d0fdb.js";import"./LRUCache-fb59e061.js";import"./MemCache-e783d117.js";import"./FieldsIndex-e2dec42a.js";import"./heatmapUtils-47f2d9fb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./MultiOriginJSONSupport-afa56182.js";import"./sql-a6f6c9bf.js";import"./FeatureLayerBase-d7796d78.js";import"./Field-da71a869.js";import"./fieldType-2fab90c6.js";import"./commonProperties-cee41848.js";import"./ElevationInfo-56c656df.js";import"./AttachmentQuery-4d8624c9.js";import"./RelationshipQuery-2eee9617.js";import"./serviceCapabilitiesUtils-ebf197ef.js";import"./editsZScale-bbe0fd68.js";import"./queryZScale-16a2b4f3.js";import"./APIKeyMixin-882c3a78.js";import"./ArcGISService-65ac5d7b.js";import"./BlendLayer-2f1384eb.js";import"./jsonUtils-16a3028b.js";import"./parser-378b4989.js";import"./_commonjsHelpers-725317a4.js";import"./CustomParametersMixin-29882b8c.js";import"./EditBusLayer-89c04c98.js";import"./FeatureReductionLayer-b673a6ae.js";import"./FeatureEffect-afe82aad.js";import"./clusterUtils-6c781da2.js";import"./labelingInfo-00dd8611.js";import"./labelUtils-6d9ec360.js";import"./defaultsJSON-b396ba80.js";import"./OperationalLayer-fd7c639f.js";import"./OrderedLayer-475a2c8a.js";import"./PortalLayer-d0349a78.js";import"./portalItemUtils-c67149e6.js";import"./RefreshableLayer-d9688d21.js";import"./ScaleRangeLayer-1e20ff33.js";import"./TemporalLayer-ce68f338.js";import"./FeatureTemplate-470b89aa.js";import"./FeatureType-2d01f4ea.js";import"./fieldProperties-042d61a0.js";import"./versionUtils-08d9bb82.js";import"./styleUtils-c13aa2aa.js";import"./TopFeaturesQuery-c828c64c.js";import"./popupUtils-999b7fb5.js";import"./QueryEngineCapabilities-60118ddb.js";let n=class extends w{constructor(e){super(e),this.type="csv",this.refresh=S(async t=>{await this.load();const{extent:a,timeExtent:s}=await this._connection.invoke("refresh",t);return a&&(this.sourceJSON.extent=a),s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const a=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return J.fromJSON(a)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const a=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:a.count,extent:b.fromJSON(a.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await O("CSVSourceWorker",{strategy:F("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:a,fields:s,latitudeField:f,longitudeField:g,spatialReference:p,timeInfo:d}=this.loadOptions,c=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:a,fields:s==null?void 0:s.map(v=>v.toJSON()),latitudeField:f,longitudeField:g,spatialReference:p==null?void 0:p.toJSON(),timeInfo:d==null?void 0:d.toJSON()}},{signal:e});this.locationInfo=c.locationInfo,this.sourceJSON=c.layerDefinition,this.delimiter=c.delimiter}};r([i()],n.prototype,"type",void 0);r([i()],n.prototype,"loadOptions",void 0);r([i()],n.prototype,"customParameters",void 0);r([i()],n.prototype,"locationInfo",void 0);r([i()],n.prototype,"sourceJSON",void 0);r([i()],n.prototype,"delimiter",void 0);n=r([h("esri.layers.graphics.sources.CSVSource")],n);function m(l,e){throw new y(e,`CSVLayer (title: ${l.title}, id: ${l.id}) cannot be saved to a portal item`)}let o=class extends j{constructor(...e){super(...e),this.geometryType="point",this.capabilities=P(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=N.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,a=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(q).then(async()=>this.initLayerProperties(await this.createGraphicsSource(t)));return this.addResolvingPromise(a),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(e,t){return t.showLabels!=null?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e){this._set("url",e);return}const t=L(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(u.from(e)||this.createQuery())).then(a=>{if(a!=null&&a.features)for(const s of a.features)s.layer=s.sourceLayer=this;return a})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(u.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(u.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(u.from(e)||this.createQuery()))}read(e,t){super.read(e,t),t&&t.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new y("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return m(this,"csv-layer:save")}async saveAs(e,t){return m(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0);r([i({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0);r([i({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0);r([i({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0);r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null);r([_("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null);r([i({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0);r([i({type:["show","hide"]})],o.prototype,"listMode",void 0);r([i({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0);r([i({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0);r([i({type:["CSV"]})],o.prototype,"operationalLayerType",void 0);r([i()],o.prototype,"outFields",void 0);r([i({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0);r([i({json:{read:!1},cast:null,type:n,readOnly:!0})],o.prototype,"source",void 0);r([i({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0);r([i({json:{read:I,write:{isRequired:!0,ignoreOrigin:!0,writer:C}}})],o.prototype,"url",null);o=r([h("esri.layers.CSVLayer")],o);const Be=o;export{Be as default};