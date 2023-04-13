import{ae as i,af as o,ai as b,bD as N,hz as z,J as _,cc as v,ei as j,fr as W,hK as H,bF as h,H as Z,an as B,aZ as X,dv as Y,r as C,cE as ee,aL as te,et as P,L as c,Z as re,cw as ie,E as p,ah as se,es as oe,_ as ae,dB as ne,eQ as T,i as le,b2 as pe,eI as de,bb as ue,a$ as ye}from"./index-b4b3ae7d.js";import"./UniqueValueRenderer-51ab4299.js";import{w as ce}from"./jsonUtils-930956cb.js";import{M as fe}from"./MultiOriginJSONSupport-a39561fd.js";import{A as he}from"./APIKeyMixin-a42f1539.js";import{A as me}from"./ArcGISService-537550b8.js";import{E as ge}from"./EditBusLayer-eda2c950.js";import{O as be}from"./OperationalLayer-fae6e909.js";import{P as we}from"./PortalLayer-e5a901dc.js";import{S as Ie}from"./ScaleRangeLayer-a596cf96.js";import{S as ve,a as A}from"./SceneService-9df6d7cb.js";import{z as Se,q as Le,F as Fe}from"./FetchAssociatedFeatureLayer-7ce0250f.js";import{e as _e,l as Oe,a as Ee,p as je,s as Pe}from"./commonProperties-6e3ee32c.js";import{b as Te,c as Ae}from"./FeatureReductionLayer-79c7e7b1.js";import{d as Re}from"./fieldProperties-4a9cdb31.js";import{F as De}from"./FieldsIndex-a6734189.js";import{I as x,a as Ne,b as Ce,c as xe}from"./I3SLayerDefinitions-b4766423.js";import{L as qe,r as R}from"./labelingInfo-90efb402.js";import{L as Ue}from"./serviceCapabilitiesUtils-c4edeec6.js";import{p as Qe}from"./persistable-436508d9.js";import{l as $e}from"./styleUtils-ee9b0910.js";import{Q as Ge}from"./Query-d1069a20.js";import{s as ke}from"./featureFlags-eb0cdac8.js";import{c as Me}from"./popupUtils-67a775a1.js";import{a as Je,g as Ve}from"./popupUtils-861e48a6.js";import"./LegendOptions-46b1f954.js";import"./diffUtils-bb218827.js";import"./SizeVariable-eef1af06.js";import"./colorRamps-e7a401b6.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-ae3367a7.js";import"./ColorStop-ac2c158e.js";import"./jsonUtils-1eb97f8f.js";import"./styleUtils-f11fff25.js";import"./DictionaryLoader-304874f3.js";import"./LRUCache-58e6960b.js";import"./MemCache-b965182b.js";import"./heatmapUtils-5a23fa6d.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./portalItemUtils-6119446c.js";import"./originUtils-dad1432b.js";import"./multiOriginJSONSupportUtils-ad07e08e.js";import"./resourceUtils-c32969e3.js";import"./I3SBinaryReader-bb75ef1f.js";import"./VertexAttribute-8238ac80.js";import"./spatialReferenceEllipsoidUtils-e4c3a965.js";import"./symbolColorUtils-7391e4f4.js";import"./quatf64-5b0101cd.js";import"./vec3f32-ec4c3c20.js";import"./plane-c6674ef1.js";import"./ray-f5bd8969.js";import"./ByteSizeUnit-c0a244d3.js";import"./mat3f64-c33d428a.js";import"./mat4f64-06a72c15.js";import"./FeatureLayer-53d6f6fc.js";import"./sql-336bd077.js";import"./FeatureLayerBase-b1b2df2b.js";import"./Field-a6e349b0.js";import"./fieldType-9c435370.js";import"./AttachmentQuery-519da496.js";import"./RelationshipQuery-c46a891a.js";import"./editsZScale-c71564ae.js";import"./queryZScale-47262fd1.js";import"./FeatureSet-aa200b6b.js";import"./BlendLayer-0a837fcb.js";import"./jsonUtils-2ab9edfc.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./CustomParametersMixin-1130c90a.js";import"./OrderedLayer-d01759d2.js";import"./RefreshableLayer-1a6ca7d6.js";import"./TemporalLayer-d110d041.js";import"./FeatureTemplate-2bad70b9.js";import"./FeatureType-be846dc5.js";import"./versionUtils-0b12e1a9.js";import"./TopFeaturesQuery-d1af170e.js";import"./FeatureEffect-1ace3eec.js";import"./clusterUtils-651430bd.js";import"./ElevationInfo-f0fe59c0.js";import"./labelUtils-491f598f.js";import"./defaultsJSON-b396ba80.js";import"./resourceExtension-d53c51f8.js";let y=class extends N{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([o({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0);i([o({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0);i([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0);i([o({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0);i([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0);y=i([b("esri.layers.support.RangeInfo")],y);var g;let S=g=class extends z(_.ofType(v)){constructor(e){super(e)}clone(){return new g(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(a=>{if(!t.equals(a.spatialReference)){if(!W(a.spatialReference,t))return e&&e.messages&&e.messages.push(new j("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new v;H(a,n,t),a=n}const l=a.toJSON(e);return delete l.spatialReference,l}).filter(a=>a!=null):(e!=null&&e.messages&&e.messages.push(new j("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(a=>a.toJSON(e)))}static fromJSON(e,t){const r=new g;return e.forEach(a=>r.add(v.fromJSON(a,t))),r}};S=g=i([b("esri.layers.support.PolygonCollection")],S);const L=S;var F;let f=F=class extends N{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new L,this._geometriesSource=null,this._handles=new Z}initialize(){this._handles.add(B(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,X))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:Y(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:a}=this._geometriesSource,l=await C(r,{responseType:"json",signal:t==null?void 0:t.signal}),n=e.toJSON(),d=l.data.map(w=>({...w,spatialReference:n}));this.geometries=L.fromJSON(d,a),this._geometriesSource=null}clone(){return new F({geometries:ee(this.geometries),spatialRelationship:this.spatialRelationship})}};i([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0);i([o({type:L,nonNullable:!0,json:{write:!0}}),Qe({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0);i([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null);f=F=i([b("esri.layers.support.SceneFilter")],f);const Ke=f,ze=["3DObject","Point"],q=Re();let s=class extends ge(ve(me(be(we(Ie(fe(he(te(ye))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new _,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a,l,n;const r=(l=(a=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:a.domains)==null?void 0:l[e];return r&&r.type!=="inherited"?r:((n=this.getField(e))==null?void 0:n.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new De(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:x.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return We[this.profile]||"mesh"}set renderer(e){P(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return(e==null||typeof e!="object")&&(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var O,E;const e=((O=this.associatedLayer)==null?void 0:O.capabilities)??Se,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:a,supportsUploadWithItemId:l,supportsGeometryUpdate:n,supportsReturnServiceEditsInSourceSpatialReference:d},data:{supportsZ:w,supportsM:U,isVersioned:Q,supportsAttachment:$},operations:{supportsEditing:G,supportsAdd:k,supportsUpdate:M,supportsDelete:J,supportsQuery:V,supportsQueryAttachments:K}}=e,m=e.operations.supportsChangeTracking,I=!!((E=this.associatedLayer)!=null&&E.infoFor3D)&&ke();return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:d,supportsRollbackOnFailure:a,supportsGeometryUpdate:I&&n,supportsUploadWithItemId:l},data:{supportsAttachment:$,supportsZ:w,supportsM:U,isVersioned:Q},operations:{supportsQuery:V,supportsQueryAttachments:K,supportsEditing:G&&m,supportsAdd:I&&k&&m,supportsDelete:I&&J&&m,supportsUpdate:M&&m}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&D[r]?D[r]:(c.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(re).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this.filter!=null?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>$e(this,{origin:"service"},t)).then(()=>P(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){this.filter!=null&&await this.load()}createQuery(){const e=new Ge;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const a of r.features)a.layer=this,a.sourceLayer=this;return r})}async queryCachedAttributes(e,t){const r=ie(this.fieldsIndex,await Je(this,Ve(this)));return Le(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new se;return a.attributes=r[0],a.layer=this,a.sourceLayer=this,a}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Me(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===r.name){const l=oe(this.parsedUrl.path,a.href);return C(l,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(n=>n.data)}throw new p("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(A.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(A.SAVE,e)}async applyEdits(e,t){const r=await ae(()=>import("./editingSupport-d3bc600c.js"),["assets/editingSupport-d3bc600c.js","assets/index-b4b3ae7d.js","assets/index-d832a396.css","assets/normalizeUtils-a85cdb25.js","assets/normalizeUtilsCommon-fdc8c13f.js","assets/EditBusLayer-eda2c950.js","assets/infoFor3D-91dff30a.js"]);if(await this.load(),!this.associatedLayer)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!ze.includes(e.layerType))throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});t(this.normalReferenceFrame,this.spatialReference);function t(r,a){let l=!1,n=!1;if(r==null)l=!0,n=!0;else{const d=a&&a.isGeographic;switch(r){case"east-north-up":case"earth-centered":l=!0,n=d;break;case"vertex-reference-frame":l=!0,n=!d;break;default:l=!1}}if(!l)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!n)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else if(this.profile==="mesh-pyramids")e.push("3DObject");else throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);return e}_populateFieldUsageInfo(){var e,t;if(this._fieldUsageInfo={},!!this.fields)for(const r of this.fields){const a=!!(this.attributeStorageInfo&&this.attributeStorageInfo.some(d=>d.name===r.name)),l=!!((t=(e=this.associatedLayer)==null?void 0:e.fields)!=null&&t.some(d=>d&&r.name===d.name)),n={supportsLabelingInfo:a,supportsRenderer:a,supportsPopupTemplate:a||l,supportsLayerQuery:l};this._fieldUsageInfo[r.name]=n}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const a=this.getField(r.name);a?(!a.domain&&r.domain&&(a.domain=r.domain.clone()),a.editable=r.editable,a.nullable=r.nullable,a.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=ne(this);for(let r=0;r<e.length;r++){const a=e[r],l=this.originIdOf(a),n=this.associatedLayer.originIdOf(a);l<n&&(n===T.SERVICE||n===T.PORTAL_ITEM)&&t.setAtOrigin(a,this.associatedLayer[a],n)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new Fe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){le(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await pe(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&c.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};i([o({types:{key:"type",base:Te,typeMap:{selection:Ae}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],s.prototype,"featureReduction",void 0);i([o({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],s.prototype,"rangeInfos",void 0);i([o({json:{read:!1}})],s.prototype,"associatedLayer",void 0);i([o({type:["show","hide"]})],s.prototype,"listMode",void 0);i([o({type:["ArcGISSceneServiceLayer"]})],s.prototype,"operationalLayerType",void 0);i([o({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0);i([o({...q.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],s.prototype,"fields",void 0);i([o()],s.prototype,"types",null);i([o()],s.prototype,"typeIdField",null);i([o()],s.prototype,"templates",null);i([o()],s.prototype,"formTemplate",null);i([o({readOnly:!0})],s.prototype,"fieldsIndex",null);i([o({type:Ue,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],s.prototype,"floorInfo",void 0);i([o(q.outFields)],s.prototype,"outFields",void 0);i([o({type:x,readOnly:!0,json:{read:!1}})],s.prototype,"nodePages",void 0);i([h("service","nodePages",["nodePages","pointNodePages"])],s.prototype,"readNodePages",null);i([o({type:[Ne],readOnly:!0})],s.prototype,"materialDefinitions",void 0);i([o({type:[Ce],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0);i([o({type:[xe],readOnly:!0})],s.prototype,"geometryDefinitions",void 0);i([o({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0);i([o({readOnly:!0})],s.prototype,"attributeStorageInfo",void 0);i([o({readOnly:!0})],s.prototype,"statisticsInfo",void 0);i([o({type:_.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],s.prototype,"excludeObjectIds",void 0);i([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0);i([o({type:Ke,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],s.prototype,"filter",void 0);i([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0);i([o(_e)],s.prototype,"elevationInfo",null);i([o({type:String})],s.prototype,"geometryType",null);i([o(Oe)],s.prototype,"labelsVisible",void 0);i([o({type:[qe],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:R},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:R},write:!0}})],s.prototype,"labelingInfo",void 0);i([o(Ee)],s.prototype,"legendEnabled",void 0);i([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(u,e){var r,a;if(typeof u=="number"&&u>=0&&u<=1)return u;const t=(a=(r=e.layerDefinition)==null?void 0:r.drawingInfo)==null?void 0:a.transparency;return t!==void 0?de(t):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],s.prototype,"opacity",void 0);i([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],s.prototype,"priority",void 0);i([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],s.prototype,"semantic",void 0);i([o({types:ce,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],s.prototype,"renderer",null);i([o({json:{read:!1}})],s.prototype,"cachedDrawingInfo",void 0);i([h("service","cachedDrawingInfo")],s.prototype,"readCachedDrawingInfo",null);i([o({readOnly:!0,json:{read:!1}})],s.prototype,"capabilities",null);i([o({type:Boolean,json:{read:!1}})],s.prototype,"editingEnabled",null);i([o({readOnly:!0,json:{write:!1,read:!1}})],s.prototype,"infoFor3D",null);i([o(je)],s.prototype,"popupEnabled",void 0);i([o({type:ue,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0);i([o({readOnly:!0,json:{read:!1}})],s.prototype,"defaultPopupTemplate",null);i([o({type:String,json:{read:!1}})],s.prototype,"objectIdField",void 0);i([h("service","objectIdField",["objectIdField","fields"])],s.prototype,"readObjectIdField",null);i([o({type:String,json:{read:!1}})],s.prototype,"globalIdField",void 0);i([h("service","globalIdField",["globalIdField","fields"])],s.prototype,"readGlobalIdField",null);i([o({readOnly:!0,type:String,json:{read:!1}})],s.prototype,"displayField",null);i([o({type:String,json:{read:!1}})],s.prototype,"profile",void 0);i([h("service","profile",["store.profile"])],s.prototype,"readProfile",null);i([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],s.prototype,"normalReferenceFrame",void 0);i([o(Pe)],s.prototype,"screenSizePerspectiveEnabled",void 0);s=i([b("esri.layers.SceneLayer")],s);const D={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},We={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},jr=s;export{jr as default};
