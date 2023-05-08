import{s as g,e as t,y as r,bD as y,fz as b,a as c,d as v,h2 as L,b7 as F,L as w,bc as I,K as p,B as S,by as O,bz as j,hd as x,fy as T,fF as q}from"./index-bdad94d1.js";import"./UniqueValueRenderer-0032343a.js";import{n as $}from"./jsonUtils-4dabb521.js";import m from"./FeatureLayer-c8139660.js";import{S as E}from"./MultiOriginJSONSupport-60332d9e.js";import{y as u,p as Q}from"./commonProperties-ea87c313.js";import{t as D}from"./capabilities-c13ec1a4.js";import{s as P}from"./fieldProperties-1df28490.js";import{r as A}from"./FieldsIndex-9b4d6ad9.js";import{r as N}from"./I3SIndexInfo-5030617b.js";import{s as R,l as U,u as _,m as B}from"./I3SLayerDefinitions-cfee4d09.js";import{b as C}from"./Query-9dbb4c19.js";import{p as K}from"./popupUtils-c1ca5a99.js";import{h as M}from"./ElevationInfo-3fa56032.js";import{l as Z}from"./I3SUtil-86ff60df.js";import{p as k,d as z}from"./popupUtils-8c5a431f.js";let n=class extends g(E){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,o){return typeof o.alias=="string"?o.alias:typeof o.name=="string"?o.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),t([y("service","title",["alias","name"])],n.prototype,"readTitle",null),t([r()],n.prototype,"layer",void 0),t([r({type:b,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),t([y("service","id")],n.prototype,"readIdOnlyOnce",null),t([r(u(String))],n.prototype,"modelName",void 0),t([r(u(Boolean))],n.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],n.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=t([c("esri.layers.buildingSublayers.BuildingSublayer")],n);const V=n,f="esri.layers.buildingSublayers.BuildingComponentSublayer",G=v.getLogger(f),h=P();let i=class extends L.LoadableMixin(F(V)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,o;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(o=this.layer.parsedUrl)==null?void 0:o.query}:{path:""}}get fieldsIndex(){return new A(this.fields)}readAssociatedLayer(e,o){const s=this.layer.associatedFeatureServiceItem,a=o.associatedLayerID;return s!=null&&typeof a=="number"?new m({portalItem:s,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const o=e!=null?e.signal:null,s=this._fetchService(o).then(()=>{this.indexInfo=N(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,G,o)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return K(this,e)}async _fetchService(e){const o=(await w(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(o,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,o){var a,l,d;const s=(l=(a=this.getFeatureType(o==null?void 0:o.feature))==null?void 0:a.domains)==null?void 0:l[e];return s&&s.type!=="inherited"?s:((d=this.getField(e))==null?void 0:d.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:D,{query:o,data:{supportsZ:s,supportsM:a,isVersioned:l}}=e;return{query:o,data:{supportsZ:s,supportsM:a,isVersioned:l}}}createQuery(){const e=new C;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),o))}queryFeatureCount(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),o))}queryFeatures(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),o)).then(s=>{if(s!=null&&s.features)for(const a of s.features)a.layer=this.layer,a.sourceLayer=this;return s})}queryObjectIds(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),o))}async queryCachedAttributes(e,o){const s=I(this.fieldsIndex,await k(this,z(this)));return Z(this.parsedUrl.path,this.attributeStorageInfo,e,o,s)}async queryCachedFeature(e,o){const s=await this.queryCachedAttributes(e,[o]);if(!s||s.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new S;return a.attributes=s[0],a.layer=this,a.sourceLayer=this,a}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:R,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[U],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[_],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[B],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(h.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:m})],i.prototype,"associatedLayer",void 0),t([y("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(h.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:O})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:j})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:M})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:$,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(Q)],i.prototype,"popupEnabled",void 0),t([r({type:x,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),T(new q({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),i=t([c(f)],i);const de=i;export{de as C,V as n};
