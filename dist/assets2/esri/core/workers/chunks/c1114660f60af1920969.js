"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[223],{57435:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(43697),s=r(46791),o=(r(20102),r(92604),r(26258),r(87538)),n=r(5600),l=r(52011);let a=class extends s.Z{constructor(e){super(e),this.getCollections=null}initialize(){this.own((0,o.EH)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=null!=this.getCollections?this.getCollections():null;if(null==e)return void this.removeAll();let t=0;for(const r of e)null!=r&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new s.Z(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction??(e=>!!e);for(const i of t)if(i){if(r(i)){const t=this.indexOf(i,e);t>=0?t!==e&&this.reorder(i,e):this.add(i,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(i);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,i._)([(0,n.Cb)()],a.prototype,"getCollections",void 0),(0,i._)([(0,n.Cb)()],a.prototype,"getChildrenFunction",void 0),(0,i._)([(0,n.Cb)()],a.prototype,"itemFilterFunction",void 0),a=(0,i._)([(0,l.j)("esri.core.CollectionFlattener")],a);const p=a},68668:(e,t,r)=>{r.d(t,{G:()=>n,w:()=>l});var i=r(66643),s=r(46791),o=r(83379);async function n(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],n=(...e)=>{for(const t of e)null!=t&&(Array.isArray(t)?n(...t):s.Z.isCollection(t)?t.forEach((e=>n(e))):o.Z.isLoadable(t)&&r.push(t))};t(n);let l=null;if(await(0,i.UI)(r,(async e=>{const t=await(0,i.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load());!1!==t.ok||l||(l=t)})),l)throw l.error;return e}},30223:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Xe});var i=r(43697),s=r(46791),o=r(57435),n=r(20102),l=r(22974),a=r(68668),p=r(92604),y=r(16453),d=r(95330),u=r(17452),c=r(5600),h=r(75215),b=r(71715),f=r(52011),g=r(82971),v=r(87085),_=r(38171),m=r(51773),w=(r(16050),r(12501),r(28756),r(92271),r(72529),r(5499),r(84382),r(81571),r(91423),r(32400)),C=r(3172),S=r(35454),j=r(83379),x=r(609),F=(r(67676),r(80442),r(36030)),I=r(6570),O=r(19238),L=r(10699),T=r(21506);let A=class extends((0,L.IG)(y.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,i._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],A.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["alias","name"])],A.prototype,"readTitle",null),(0,i._)([(0,c.Cb)()],A.prototype,"layer",void 0),(0,i._)([(0,c.Cb)({type:h.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],A.prototype,"id",void 0),(0,i._)([(0,b.r)("service","id")],A.prototype,"readIdOnlyOnce",null),(0,i._)([(0,c.Cb)((0,T.Lx)(String))],A.prototype,"modelName",void 0),(0,i._)([(0,c.Cb)((0,T.Lx)(Boolean))],A.prototype,"isEmpty",void 0),(0,i._)([(0,c.Cb)({type:Boolean,nonNullable:!0})],A.prototype,"legendEnabled",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],A.prototype,"visible",void 0),(0,i._)([(0,c.Cb)({type:Number,json:{write:!0}})],A.prototype,"opacity",void 0),A=(0,i._)([(0,f.j)("esri.layers.buildingSublayers.BuildingSublayer")],A);const q=A;var Z=r(15506),B=r(53518),E=r(99514),R=r(35671),N=r(61064),k=r(51161),P=r(14165),M=r(32163),U=r(86787),Q=r(77397),V=r(19833);const D="esri.layers.buildingSublayers.BuildingComponentSublayer",K=p.Z.getLogger(D),J=(0,B.v)();let G=class extends(j.Z.LoadableMixin((0,x.v)(q))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new E.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return null!=r&&"number"==typeof i?new O.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,N.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,K,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,M.eZ)(this,e)}async _fetchService(e){const t=(await(0,C.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Z.C,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new P.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,R.Lk)(this.fieldsIndex,await(0,V.e)(this,(0,V.V)(this)));return(0,Q.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new _.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"parsedUrl",null),(0,i._)([(0,c.Cb)({type:k.U4,readOnly:!0})],G.prototype,"nodePages",void 0),(0,i._)([(0,c.Cb)({type:[k.QI],readOnly:!0})],G.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[k.Yh],readOnly:!0})],G.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[k.H3],readOnly:!0})],G.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"store",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],G.prototype,"rootNode",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,c.Cb)(J.fields)],G.prototype,"fields",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"fieldsIndex",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:O.default})],G.prototype,"associatedLayer",void 0),(0,i._)([(0,b.r)("service","associatedLayer",["associatedLayerID"])],G.prototype,"readAssociatedLayer",null),(0,i._)([(0,c.Cb)(J.outFields)],G.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0})],G.prototype,"objectIdField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{read:!1}})],G.prototype,"displayField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String})],G.prototype,"apiKey",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:I.Z})],G.prototype,"fullExtent",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:g.Z})],G.prototype,"spatialReference",null),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"version",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:U.Z})],G.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],G.prototype,"minScale",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],G.prototype,"maxScale",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number})],G.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.Cb)({type:["hide","show"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({types:w.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],G.prototype,"renderer",void 0),(0,i._)([(0,c.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],G.prototype,"definitionExpression",void 0),(0,i._)([(0,c.Cb)(T.C_)],G.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:m.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],G.prototype,"popupTemplate",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],G.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.Cb)()],G.prototype,"types",null),(0,i._)([(0,c.Cb)()],G.prototype,"typeIdField",null),(0,i._)([(0,c.Cb)({json:{write:!1}}),(0,F.J)(new S.X({"3DObject":"3d-object",Point:"point"}))],G.prototype,"layerType",void 0),(0,i._)([(0,c.Cb)()],G.prototype,"geometryType",null),(0,i._)([(0,c.Cb)()],G.prototype,"profile",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"capabilities",null),G=(0,i._)([(0,f.j)(D)],G);const H=G;var z,W=r(20941);const X={type:s.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:Y}}},read:!1}};function Y(e,t,r){if(e&&Array.isArray(e))return new s.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?$:H}(e);if(t){const i=new t;return i.read(e,r),i}return r&&r.messages&&e&&r.messages.push(new W.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let $=z=class extends q{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,a.w)(this,(e=>z.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var ee;(0,i._)([(0,c.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],$.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)(X)],$.prototype,"sublayers",void 0),$=z=(0,i._)([(0,f.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],$),(ee=$||($={})).sublayersProperty=X,ee.readSublayers=Y,ee.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const te=$;var re=r(54295),ie=r(17287),se=r(38009),oe=r(16859),ne=r(72965),le=r(20559),ae=r(96674),pe=r(41123);let ye=class extends ae.wq{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{write:!0}})],ye.prototype,"type",void 0),ye=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfo")],ye);const de=ye;var ue;let ce=ue=class extends ae.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new ue({filterType:this.filterType,filterValues:(0,l.d9)(this.filterValues)})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],ce.prototype,"filterType",void 0),(0,i._)([(0,c.Cb)({type:[String],json:{write:!0}})],ce.prototype,"filterValues",void 0),ce=ue=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],ce);const he=ce;var be;const fe=s.Z.ofType(he);let ge=be=class extends ae.wq{clone(){return new be({filterTypes:(0,l.d9)(this.filterTypes)})}};(0,i._)([(0,c.Cb)({type:fe,json:{write:!0}})],ge.prototype,"filterTypes",void 0),ge=be=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],ge);const ve=ge;var _e;const me=s.Z.ofType(ve);let we=_e=class extends de{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _e({filterBlocks:(0,l.d9)(this.filterBlocks)})}};(0,i._)([(0,c.Cb)({type:["checkbox"]})],we.prototype,"type",void 0),(0,i._)([(0,c.Cb)({type:me,json:{write:!0}})],we.prototype,"filterBlocks",void 0),we=_e=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],we);const Ce=we;let Se=class extends ae.wq{};(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],Se.prototype,"type",void 0),Se=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterMode")],Se);const je=Se;var xe;let Fe=xe=class extends je{constructor(){super(...arguments),this.type="solid"}clone(){return new xe}};(0,i._)([(0,c.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],Fe.prototype,"type",void 0),Fe=xe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterModeSolid")],Fe);const Ie=Fe;var Oe,Le=r(56332);let Te=Oe=class extends je{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Oe({edges:(0,l.d9)(this.edges)})}};(0,i._)([(0,F.J)({wireFrame:"wire-frame"})],Te.prototype,"type",void 0),(0,i._)([(0,c.Cb)(Le.Z)],Te.prototype,"edges",void 0),Te=Oe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterModeWireFrame")],Te);const Ae=Te;var qe;let Ze=qe=class extends je{constructor(){super(...arguments),this.type="x-ray"}clone(){return new qe}};(0,i._)([(0,c.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Ze.prototype,"type",void 0),Ze=qe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterModeXRay")],Ze);const Be=Ze;var Ee;const Re={nonNullable:!0,types:{key:"type",base:je,typeMap:{solid:Ie,"wire-frame":Ae,"x-ray":Be}},json:{read:e=>{switch(e&&e.type){case"solid":return Ie.fromJSON(e);case"wireFrame":return Ae.fromJSON(e);case"x-ray":return Be.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Ne=Ee=class extends ae.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ie,this.title=""}clone(){return new Ee({filterExpression:this.filterExpression,filterMode:(0,l.d9)(this.filterMode),title:this.title})}};(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"filterExpression",void 0),(0,i._)([(0,c.Cb)(Re)],Ne.prototype,"filterMode",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ne.prototype,"title",void 0),Ne=Ee=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterBlock")],Ne);const ke=Ne;var Pe;const Me=s.Z.ofType(ke);let Ue=Pe=class extends ae.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,pe.D)(),this.name=null}clone(){return new Pe({description:this.description,filterBlocks:(0,l.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,l.d9)(this.filterAuthoringInfo)})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],Ue.prototype,"description",void 0),(0,i._)([(0,c.Cb)({type:Me,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"filterBlocks",void 0),(0,i._)([(0,c.Cb)({types:{key:"type",base:de,typeMap:{checkbox:Ce}},json:{read:e=>"checkbox"===(e&&e.type)?Ce.fromJSON(e):null,write:!0}})],Ue.prototype,"filterAuthoringInfo",void 0),(0,i._)([(0,c.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"id",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"name",void 0),Ue=Pe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilter")],Ue);const Qe=Ue;let Ve=class extends ae.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,i._)([(0,c.Cb)({type:String})],Ve.prototype,"fieldName",void 0),(0,i._)([(0,c.Cb)({type:String})],Ve.prototype,"modelName",void 0),(0,i._)([(0,c.Cb)({type:String})],Ve.prototype,"label",void 0),(0,i._)([(0,c.Cb)({type:Number})],Ve.prototype,"min",void 0),(0,i._)([(0,c.Cb)({type:Number})],Ve.prototype,"max",void 0),(0,i._)([(0,c.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ve.prototype,"mostFrequentValues",void 0),(0,i._)([(0,c.Cb)({type:[Number]})],Ve.prototype,"subLayerIds",void 0),Ve=(0,i._)([(0,f.j)("esri.layers.support.BuildingFieldStatistics")],Ve);let De=class extends(j.Z.LoadableMixin((0,x.v)(ae.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.Z.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,C.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,i._)([(0,c.Cb)({constructOnly:!0,type:String})],De.prototype,"url",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:[Ve],json:{read:{source:"summary"}}})],De.prototype,"fields",null),De=(0,i._)([(0,f.j)("esri.layers.support.BuildingSummaryStatistics")],De);const Ke=De;var Je=r(14147);const Ge=s.Z.ofType(Qe),He=(0,l.d9)(te.sublayersProperty),ze=He.json?.origins;ze&&(ze["web-scene"]={type:[H],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},ze["portal-item"]={type:[H],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let We=class extends((0,le.Vt)((0,ie.Y)((0,se.q)((0,oe.I)((0,ne.M)((0,y.R)((0,re.V)(v.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new Ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const i=te.readSublayers(e,t,r);return te.forEachSublayer(i,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(i,this._sublayerOverrides),this._sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:r}){te.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?r.set(i.id,i):t.messages?.push(new n.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const i=[];te.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,l.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this._sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,u.v_)(this.parsedUrl?.path,t.statisticsHRef);return new Ke({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,a.G)(this,(e=>{te.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(le.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(le.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new n.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&p.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&p.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Je.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){p.Z.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",e)}}};(0,i._)([(0,c.Cb)({type:["BuildingSceneLayer"]})],We.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],We.prototype,"allSublayers",void 0),(0,i._)([(0,c.Cb)(He)],We.prototype,"sublayers",void 0),(0,i._)([(0,b.r)("service","sublayers")],We.prototype,"readSublayers",null),(0,i._)([(0,c.Cb)({type:Ge,nonNullable:!0,json:{write:!0}})],We.prototype,"filters",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],We.prototype,"activeFilterId",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:Ke})],We.prototype,"summaryStatistics",void 0),(0,i._)([(0,b.r)("summaryStatistics",["statisticsHRef"])],We.prototype,"readSummaryStatistics",null),(0,i._)([(0,c.Cb)({type:[String],json:{read:!1}})],We.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)(T.vg)],We.prototype,"fullExtent",void 0),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"]})],We.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)((0,T.Lx)(g.Z))],We.prototype,"spatialReference",void 0),(0,i._)([(0,c.Cb)(T.PV)],We.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],We.prototype,"type",void 0),(0,i._)([(0,c.Cb)()],We.prototype,"associatedFeatureServiceItem",void 0),We=(0,i._)([(0,f.j)("esri.layers.BuildingSceneLayer")],We);const Xe=We}}]);