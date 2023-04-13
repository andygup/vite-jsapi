import{aM as ce,ae as t,af as i,bF as T,dX as he,ai as p,L as F,ep as Z,cL as Y,r as ee,cw as ge,E as w,ah as fe,bf as me,bt as te,bb as be,eg as re,cG as ve,J as v,ei as Se,hs as Fe,bD as f,cE as c,ht as we,hu as Be,ca as Ie,es as Oe,Z as Le,hv as Te,a$ as Ae}from"./index-b4b3ae7d.js";import{a as xe,M as _e}from"./MultiOriginJSONSupport-a39561fd.js";import"./UniqueValueRenderer-51ab4299.js";import{w as Ee}from"./jsonUtils-930956cb.js";import ie from"./FeatureLayer-53d6f6fc.js";import{r as V,p as Me,g as Pe,e as je}from"./commonProperties-6e3ee32c.js";import{z as qe,q as ke,F as Ce}from"./FetchAssociatedFeatureLayer-7ce0250f.js";import{d as Re}from"./fieldProperties-4a9cdb31.js";import{F as Ne}from"./FieldsIndex-a6734189.js";import{f as $e,S as De,a as G}from"./SceneService-9df6d7cb.js";import{I as Ue,a as Qe,b as Je,c as Ke}from"./I3SLayerDefinitions-b4766423.js";import{Q as Ve}from"./Query-d1069a20.js";import{c as Ge}from"./popupUtils-67a775a1.js";import{E as We}from"./ElevationInfo-f0fe59c0.js";import{a as Xe,g as ze}from"./popupUtils-861e48a6.js";import{A as He}from"./APIKeyMixin-a42f1539.js";import{A as Ze}from"./ArcGISService-537550b8.js";import{O as Ye}from"./OperationalLayer-fae6e909.js";import{P as et}from"./PortalLayer-e5a901dc.js";import{S as tt}from"./ScaleRangeLayer-a596cf96.js";import"./LegendOptions-46b1f954.js";import"./diffUtils-bb218827.js";import"./SizeVariable-eef1af06.js";import"./colorRamps-e7a401b6.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-ae3367a7.js";import"./ColorStop-ac2c158e.js";import"./jsonUtils-1eb97f8f.js";import"./styleUtils-f11fff25.js";import"./featureFlags-eb0cdac8.js";import"./DictionaryLoader-304874f3.js";import"./LRUCache-58e6960b.js";import"./MemCache-b965182b.js";import"./heatmapUtils-5a23fa6d.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./sql-336bd077.js";import"./FeatureLayerBase-b1b2df2b.js";import"./Field-a6e349b0.js";import"./fieldType-9c435370.js";import"./AttachmentQuery-519da496.js";import"./RelationshipQuery-c46a891a.js";import"./serviceCapabilitiesUtils-c4edeec6.js";import"./editsZScale-c71564ae.js";import"./queryZScale-47262fd1.js";import"./FeatureSet-aa200b6b.js";import"./BlendLayer-0a837fcb.js";import"./jsonUtils-2ab9edfc.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./CustomParametersMixin-1130c90a.js";import"./EditBusLayer-eda2c950.js";import"./FeatureReductionLayer-79c7e7b1.js";import"./FeatureEffect-1ace3eec.js";import"./clusterUtils-651430bd.js";import"./labelingInfo-90efb402.js";import"./labelUtils-491f598f.js";import"./defaultsJSON-b396ba80.js";import"./OrderedLayer-d01759d2.js";import"./RefreshableLayer-1a6ca7d6.js";import"./TemporalLayer-d110d041.js";import"./FeatureTemplate-2bad70b9.js";import"./FeatureType-be846dc5.js";import"./versionUtils-0b12e1a9.js";import"./styleUtils-ee9b0910.js";import"./TopFeaturesQuery-d1af170e.js";import"./portalItemUtils-6119446c.js";import"./I3SBinaryReader-bb75ef1f.js";import"./VertexAttribute-8238ac80.js";import"./spatialReferenceEllipsoidUtils-e4c3a965.js";import"./symbolColorUtils-7391e4f4.js";import"./quatf64-5b0101cd.js";import"./vec3f32-ec4c3c20.js";import"./plane-c6674ef1.js";import"./ray-f5bd8969.js";import"./ByteSizeUnit-c0a244d3.js";import"./mat3f64-c33d428a.js";import"./mat4f64-06a72c15.js";import"./originUtils-dad1432b.js";import"./multiOriginJSONSupportUtils-ad07e08e.js";import"./resourceUtils-c32969e3.js";let d=class extends ce(xe){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,r){return typeof r.alias=="string"?r.alias:typeof r.name=="string"?r.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],d.prototype,"title",void 0);t([T("service","title",["alias","name"])],d.prototype,"readTitle",null);t([i()],d.prototype,"layer",void 0);t([i({type:he,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0);t([T("service","id")],d.prototype,"readIdOnlyOnce",null);t([i(V(String))],d.prototype,"modelName",void 0);t([i(V(Boolean))],d.prototype,"isEmpty",void 0);t([i({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0);t([i({type:Number,json:{write:!0}})],d.prototype,"opacity",void 0);d=t([p("esri.layers.buildingSublayers.BuildingSublayer")],d);const se=d,oe="esri.layers.buildingSublayers.BuildingComponentSublayer",rt=F.getLogger(oe),le=Re();let l=class extends Z.LoadableMixin(Y(se)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new Ne(this.fields)}readAssociatedLayer(e,r){const s=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return s!=null&&typeof a=="number"?new ie({portalItem:s,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,s=this._fetchService(r).then(()=>{this.indexInfo=$e(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,rt,r)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return Ge(this,e)}async _fetchService(e){const s=(await ee(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a,n,S;const s=(n=(a=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:a.domains)==null?void 0:n[e];return s&&s.type!=="inherited"?s:((S=this.getField(e))==null?void 0:S.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:qe,{query:r,data:{supportsZ:s,supportsM:a,isVersioned:n}}=e;return{query:r,data:{supportsZ:s,supportsM:a,isVersioned:n}}}createQuery(){const e=new Ve;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const a of s.features)a.layer=this.layer,a.sourceLayer=this;return s})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const s=ge(this.fieldsIndex,await Xe(this,ze(this)));return ke(this.parsedUrl.path,this.attributeStorageInfo,e,r,s)}async queryCachedFeature(e,r){const s=await this.queryCachedAttributes(e,[r]);if(!s||s.length===0)throw new w("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new fe;return a.attributes=s[0],a.layer=this,a.sourceLayer=this,a}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new w("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new w("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],l.prototype,"parsedUrl",null);t([i({type:Ue,readOnly:!0})],l.prototype,"nodePages",void 0);t([i({type:[Qe],readOnly:!0})],l.prototype,"materialDefinitions",void 0);t([i({type:[Je],readOnly:!0})],l.prototype,"textureSetDefinitions",void 0);t([i({type:[Ke],readOnly:!0})],l.prototype,"geometryDefinitions",void 0);t([i({readOnly:!0})],l.prototype,"serviceUpdateTimeStamp",void 0);t([i({readOnly:!0})],l.prototype,"store",void 0);t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],l.prototype,"rootNode",void 0);t([i({readOnly:!0})],l.prototype,"attributeStorageInfo",void 0);t([i(le.fields)],l.prototype,"fields",void 0);t([i({readOnly:!0})],l.prototype,"fieldsIndex",null);t([i({readOnly:!0,type:ie})],l.prototype,"associatedLayer",void 0);t([T("service","associatedLayer",["associatedLayerID"])],l.prototype,"readAssociatedLayer",null);t([i(le.outFields)],l.prototype,"outFields",void 0);t([i({type:String,readOnly:!0})],l.prototype,"objectIdField",null);t([i({readOnly:!0,type:String,json:{read:!1}})],l.prototype,"displayField",null);t([i({readOnly:!0,type:String})],l.prototype,"apiKey",null);t([i({readOnly:!0,type:me})],l.prototype,"fullExtent",null);t([i({readOnly:!0,type:te})],l.prototype,"spatialReference",null);t([i({readOnly:!0})],l.prototype,"version",null);t([i({readOnly:!0,type:We})],l.prototype,"elevationInfo",null);t([i({readOnly:!0,type:Number})],l.prototype,"minScale",null);t([i({readOnly:!0,type:Number})],l.prototype,"maxScale",null);t([i({readOnly:!0,type:Number})],l.prototype,"effectiveScaleRange",null);t([i({type:["hide","show"],json:{write:!0}})],l.prototype,"listMode",void 0);t([i({types:Ee,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],l.prototype,"renderer",void 0);t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],l.prototype,"definitionExpression",void 0);t([i(Me)],l.prototype,"popupEnabled",void 0);t([i({type:be,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0);t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],l.prototype,"normalReferenceFrame",void 0);t([i({readOnly:!0,json:{read:!1}})],l.prototype,"defaultPopupTemplate",null);t([i()],l.prototype,"types",null);t([i()],l.prototype,"typeIdField",null);t([i({json:{write:!1}}),re(new ve({"3DObject":"3d-object",Point:"point"}))],l.prototype,"layerType",void 0);t([i()],l.prototype,"geometryType",null);t([i()],l.prototype,"profile",null);t([i({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null);l=t([p(oe)],l);const q=l;var k;const ae={type:v,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(o,e,r){if(!(!o||!Array.isArray(o)))return new v(o.map(s=>{const a=it(s);if(a){const n=new a;return n.read(s,r),n}return r&&r.messages&&s&&r.messages.push(new Se("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(s.type||"unknown")+"' are not supported",{definition:s,context:r})),null}))}let h=k=class extends se{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Fe(this,e=>k.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};t([i({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0);t([i(ae)],h.prototype,"sublayers",void 0);h=k=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],h);(function(o){o.sublayersProperty=ae,o.readSublayers=ne;function e(r,s){r.forEach(a=>{s(a),a.type==="building-group"&&e(a.sublayers,s)})}o.forEachSublayer=e})(h||(h={}));function it(o){return o.layerType==="group"?h:q}const m=h;let A=class extends f{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0);A=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],A);const ue=A;var C;let B=C=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new C({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([i({type:String,json:{write:!0}})],B.prototype,"filterType",void 0);t([i({type:[String],json:{write:!0}})],B.prototype,"filterValues",void 0);B=C=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],B);const st=B;var R;const ot=v.ofType(st);let x=R=class extends f{clone(){return new R({filterTypes:c(this.filterTypes)})}};t([i({type:ot,json:{write:!0}})],x.prototype,"filterTypes",void 0);x=R=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],x);const lt=x;var N;const at=v.ofType(lt);let I=N=class extends ue{constructor(){super(...arguments),this.type="checkbox"}clone(){return new N({filterBlocks:c(this.filterBlocks)})}};t([i({type:["checkbox"]})],I.prototype,"type",void 0);t([i({type:at,json:{write:!0}})],I.prototype,"filterBlocks",void 0);I=N=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],I);const W=I;let _=class extends f{};t([i({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0);_=t([p("esri.layers.support.BuildingFilterMode")],_);const P=_;var $;let E=$=class extends P{constructor(){super(...arguments),this.type="solid"}clone(){return new $}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0);E=$=t([p("esri.layers.support.BuildingFilterModeSolid")],E);const D=E;var U;let O=U=class extends P{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new U({edges:c(this.edges)})}};t([re({wireFrame:"wire-frame"})],O.prototype,"type",void 0);t([i(we)],O.prototype,"edges",void 0);O=U=t([p("esri.layers.support.BuildingFilterModeWireFrame")],O);const X=O;var Q;let M=Q=class extends P{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Q}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],M.prototype,"type",void 0);M=Q=t([p("esri.layers.support.BuildingFilterModeXRay")],M);const z=M;var J;const nt={nonNullable:!0,types:{key:"type",base:P,typeMap:{solid:D,"wire-frame":X,"x-ray":z}},json:{read:o=>{switch(o&&o.type){case"solid":return D.fromJSON(o);case"wireFrame":return X.fromJSON(o);case"x-ray":return z.fromJSON(o);default:return}},write:{enabled:!0,isRequired:!0}}};let b=J=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new D,this.title=""}clone(){return new J({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0);t([i(nt)],b.prototype,"filterMode",void 0);t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0);b=J=t([p("esri.layers.support.BuildingFilterBlock")],b);const ut=b;var K;const pt=v.ofType(ut);let g=K=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Be(),this.name=null}clone(){return new K({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],g.prototype,"description",void 0);t([i({type:pt,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0);t([i({types:{key:"type",base:ue,typeMap:{checkbox:W}},json:{read:o=>{switch(o&&o.type){case"checkbox":return W.fromJSON(o);default:return null}},write:!0}})],g.prototype,"filterAuthoringInfo",void 0);t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0);t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0);g=K=t([p("esri.layers.support.BuildingFilter")],g);const dt=g;let y=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],y.prototype,"fieldName",void 0);t([i({type:String})],y.prototype,"modelName",void 0);t([i({type:String})],y.prototype,"label",void 0);t([i({type:Number})],y.prototype,"min",void 0);t([i({type:Number})],y.prototype,"max",void 0);t([i({json:{read:o=>Array.isArray(o)&&(o.every(e=>typeof e=="string")||o.every(e=>typeof e=="number"))?o.slice():null}})],y.prototype,"mostFrequentValues",void 0);t([i({type:[Number]})],y.prototype,"subLayerIds",void 0);y=t([p("esri.layers.support.BuildingFieldStatistics")],y);let L=class extends Z.LoadableMixin(Y(f)){constructor(){super(...arguments),this.url=null}get fields(){return!this.loaded&&this.loadStatus!=="loading"?(F.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null):this._get("fields")}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const s=(await ee(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(s,{origin:"service"})}};t([i({constructOnly:!0,type:String})],L.prototype,"url",void 0);t([i({readOnly:!0,type:[y],json:{read:{source:"summary"}}})],L.prototype,"fields",null);L=t([p("esri.layers.support.BuildingSummaryStatistics")],L);const pe=L,de=v.ofType(dt),ye=c(m.sublayersProperty);var H;const j=(H=ye.json)==null?void 0:H.origins;j&&(j["web-scene"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},j["portal-item"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let u=class extends De(Ze(Ye(et(tt(_e(He(Ae))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Ie({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new de,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,s){const a=m.readSublayers(e,r,s);return m.forEachSublayer(a,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:r,context:s}){m.forEachSublayer(e,a=>a.read(r.get(a.id),s))}readSublayerOverrides(e,r){var a;const s=new Map;for(const n of e){if(n==null||typeof n!="object"||typeof n.id!="number"){(a=r.messages)==null||a.push(new w("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));continue}s.set(n.id,n)}return{overrides:s,context:r}}writeSublayerOverrides(e,r,s){const a=[];m.forEachSublayer(this.sublayers,n=>{const S=n.write({},s);Object.keys(S).length>1&&a.push(S)}),a.length>0&&(r.sublayers=a)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(s=>{r.sublayers.push(c(s))})}write(e,r){return e=super.write(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const s=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,s):this._sublayerOverrides=s}}readSummaryStatistics(e,r){var s;if(typeof r.statisticsHRef=="string"){const a=Oe((s=this.parsedUrl)==null?void 0:s.path,r.statisticsHRef);return new pe({url:a})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Le).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Te(this,e=>{m.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(G.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(G.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new w("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&F.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&F.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new Ce(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(s){F.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",s)}}};t([i({type:["BuildingSceneLayer"]})],u.prototype,"operationalLayerType",void 0);t([i({readOnly:!0})],u.prototype,"allSublayers",void 0);t([i(ye)],u.prototype,"sublayers",void 0);t([T("service","sublayers")],u.prototype,"readSublayers",null);t([i({type:de,nonNullable:!0,json:{write:!0}})],u.prototype,"filters",void 0);t([i({type:String,json:{write:!0}})],u.prototype,"activeFilterId",void 0);t([i({readOnly:!0,type:pe})],u.prototype,"summaryStatistics",void 0);t([T("summaryStatistics",["statisticsHRef"])],u.prototype,"readSummaryStatistics",null);t([i({type:[String],json:{read:!1}})],u.prototype,"outFields",void 0);t([i(Pe)],u.prototype,"fullExtent",void 0);t([i({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0);t([i(V(te))],u.prototype,"spatialReference",void 0);t([i(je)],u.prototype,"elevationInfo",null);t([i({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0);t([i()],u.prototype,"associatedFeatureServiceItem",void 0);u=t([p("esri.layers.BuildingSceneLayer")],u);const ti=u;export{ti as default};