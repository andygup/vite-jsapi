import{aq as R,bs as T,by as I,K as P,ft as m,G as C,h3 as E,v as N,e as r,y as i,a as x,h2 as U,h5 as _,bz as j,h8 as b,hc as J,fE as q,h6 as k,gY as Y,bE as W,fz as O,hd as X,a$ as D}from"./index-0b6846a6.js";import"./UniqueValueRenderer-69f2a261.js";import{b as L,n as Q}from"./jsonUtils-bda577f9.js";import{O as V}from"./MultiOriginJSONSupport-8c956d71.js";import{l as G,o as M}from"./clientSideDefaults-8f62f8cc.js";import{v as z,V as B,Y as K,M as A,S as H}from"./wfsUtils-09b4afcd.js";import{g as Z}from"./FeatureSet-201dc83e.js";import{a as ee}from"./BlendLayer-42ebc769.js";import{o as te}from"./CustomParametersMixin-1742fbf5.js";import{n as re,p as ie}from"./FeatureReductionLayer-2345a008.js";import{c as oe}from"./OperationalLayer-fa982da8.js";import{c as se}from"./OrderedLayer-483eb253.js";import{j as ae}from"./PortalLayer-3fdb37ec.js";import{t as ne}from"./ScaleRangeLayer-a3d27153.js";import{a as pe}from"./TemporalLayer-bc87d9c2.js";import{d as le,m as de,c as ue,g as ye,p as me,l as ce,f as fe}from"./commonProperties-b6e563c7.js";import{s as he}from"./fieldProperties-d14b1553.js";import{C as ge,i as we}from"./labelingInfo-c79c2a2e.js";import{b as y}from"./Query-a5cf26eb.js";import{p as ve}from"./popupUtils-30e2b710.js";import"./ColorStop-a9d5adf5.js";import"./diffUtils-c77d4e09.js";import"./colorRamps-c287f076.js";import"./DictionaryLoader-8b55e325.js";import"./LRUCache-b7b1b5e3.js";import"./FieldsIndex-26e3776b.js";import"./heatmapUtils-377e78a9.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-59981e75.js";import"./geojson-02d6bdb6.js";import"./xmlUtils-444cb4c0.js";import"./jsonUtils-899e4bfe.js";import"./FeatureEffect-fa4ce35d.js";import"./FeatureFilter-603a6725.js";import"./portalItemUtils-224c29e2.js";import"./ElevationInfo-c6327af8.js";import"./defaults-48071f90.js";let d=class extends R(U){constructor(){super(...arguments),this._connection=null,this.capabilities=G(!1,!1),this.type="wfs",this.refresh=T(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const s=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return Z.fromJSON(s)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const s=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:s.count,extent:I.fromJSON(s.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var F;const{url:t,customParameters:s,name:n,namespaceUri:p,spatialReference:a,fields:u,geometryType:c,swapXY:f}=this.layer;if(!t)throw new P("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await z(t,{customParameters:s,...e}));const h=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(w=>this.layer[w]==null),l=h?await B(this.wfsCapabilities,n,p,{spatialReference:a,customParameters:s,signal:e==null?void 0:e.signal}):{...K(u??[]),geometryType:c,name:n,namespaceUri:p,spatialReference:a,swapXY:f},g=A(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),$=m.toJSON(l.geometryType);return{customParameters:s,featureType:g,fields:((F=l.fields)==null?void 0:F.map(w=>w.toJSON()))??[],geometryField:l.geometryField,geometryType:$,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:l.objectIdField,spatialReference:l.spatialReference.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[t,s]=await C([this._createLoadOptions(e),E("WFSSourceWorker",{...e,strategy:N("feature-layers-workers")?"dedicated":"local"})]),n=t.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=t.value;this._connection=s.value;const u=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:M(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};r([i()],d.prototype,"capabilities",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),r([i()],d.prototype,"type",void 0),r([i()],d.prototype,"wfsCapabilities",void 0),d=r([x("esri.layers.graphics.sources.WFSSource")],d);var v;const S=he();let o=v=class extends se(te(re(ie(ee(pe(_(ne(oe(ae(V(D))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:c,spatialReference:f,swapXY:h,url:l,wfsCapabilities:g}=e;return new v({customParameters:t,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:c,spatialReference:f,swapXY:h,url:l,wfsCapabilities:g})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),b(this.renderer,this.fieldsIndex),J(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,s){const n=e.filter(p=>p.name!==H);this.geometryField&&n.unshift(new q({name:this.geometryField,alias:this.geometryField,type:"geometry"})),k(s,n.map(p=>p.toJSON()),t)}get parsedUrl(){return Y(this.url)}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return ve(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:s}=this;return e.timeExtent=t!=null&&s!=null?s.offset(-t.value,t.unit):s||null,e}getFieldDomain(e,t){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i({readOnly:!0})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i(le)],o.prototype,"elevationInfo",void 0),r([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),r([i({type:[q],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([W("fields")],o.prototype,"writeFields",null),r([i(S.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:I,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i()],o.prototype,"geometryField",void 0),r([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:m.read},write:{target:"layerDefinition.geometryType",writer:m.write,ignoreOrigin:!0},origins:{service:{read:m.read}}}})],o.prototype,"geometryType",void 0),r([i({type:String})],o.prototype,"id",void 0),r([i(de)],o.prototype,"labelsVisible",void 0),r([i({type:[ge],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:we},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(ue)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String})],o.prototype,"objectIdField",void 0),r([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),r([i({type:O,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxFeatures",void 0),r([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),r([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),r([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),r([i(ye)],o.prototype,"opacity",void 0),r([i(S.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(me)],o.prototype,"popupEnabled",void 0),r([i({type:X,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:L,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:Q,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),r([i(ce)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),r([i({readOnly:!0,type:[O],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),r([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),r([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(fe)],o.prototype,"url",void 0),r([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),r([i()],o.prototype,"wfsCapabilities",null),o=v=r([x("esri.layers.WFSLayer")],o);const it=o;export{it as default};