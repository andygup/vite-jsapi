import{ae as r,af as o,ai as P,ep as B,bt as C,bH as J,E as O,et as R,ex as N,bf as k,eC as w,bb as H,a$ as z}from"./index-b51e75d5.js";import"./UniqueValueRenderer-6f6aa298.js";import{a as U,w as V}from"./jsonUtils-7d477465.js";import{M as W}from"./MultiOriginJSONSupport-c4bfffa6.js";import{a as Z,c as T,g as I,b as K,d as X,e as Y,f as ee,h as te,i as re}from"./ogcFeatureUtils-fef0ac53.js";import{F as se}from"./FeatureSet-00572347.js";import{A as oe}from"./APIKeyMixin-fccedd7f.js";import{B as ie}from"./BlendLayer-f455f371.js";import{C as ae}from"./CustomParametersMixin-dcb81e46.js";import{F as ne,a as pe}from"./FeatureReductionLayer-aef141cd.js";import{O as le}from"./OperationalLayer-d41e51ba.js";import{O as ue}from"./OrderedLayer-56a84f15.js";import{P as de}from"./PortalLayer-72af5b97.js";import{R as ce}from"./RefreshableLayer-b146497a.js";import{S as fe}from"./ScaleRangeLayer-172a7bde.js";import{T as ye}from"./TemporalLayer-5d14408e.js";import{e as me,l as he,a as ge,p as Se,s as ve,u as Ce}from"./commonProperties-c098604c.js";import{F as be}from"./FeatureType-4bd43aff.js";import{F as Fe}from"./Field-f8fa059e.js";import{d as xe}from"./fieldProperties-b34bf4a3.js";import{L as Oe,r as Re}from"./labelingInfo-14ab3cff.js";import{Q as D}from"./Query-aa3f0821.js";import{c as we}from"./popupUtils-994537ae.js";import"./LegendOptions-c1ffbacd.js";import"./diffUtils-1090f477.js";import"./SizeVariable-f0de0a1e.js";import"./colorRamps-78691ea3.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-59fc3632.js";import"./ColorStop-feeb96c4.js";import"./jsonUtils-97563038.js";import"./styleUtils-10d73057.js";import"./featureFlags-dcf59b6a.js";import"./DictionaryLoader-a4214801.js";import"./LRUCache-3f2a86dd.js";import"./MemCache-467264d5.js";import"./FieldsIndex-27b25eac.js";import"./heatmapUtils-a897c480.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./featureConversionUtils-87949e9d.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./geojson-4c4e64f4.js";import"./clientSideDefaults-e8a5e15b.js";import"./QueryEngineCapabilities-60118ddb.js";import"./defaultsJSON-b396ba80.js";import"./fieldType-dfe85208.js";import"./jsonUtils-e49662a7.js";import"./parser-e88e0cee.js";import"./_commonjsHelpers-725317a4.js";import"./FeatureEffect-3ccd2609.js";import"./clusterUtils-5e98e18f.js";import"./portalItemUtils-88a22e4d.js";import"./ElevationInfo-0549af0a.js";import"./FeatureTemplate-97d53328.js";import"./labelUtils-df8241fd.js";let c=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:a},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:p}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:p,queryParameters:{apiKey:n,customParameters:l},spatialReference:i,supportedCrs:a}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>se.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>Z(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return e.isWGS84||e.isWebMercator?!0:!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${t}$`,"i");return e.conformsTo.some(a=>i.test(a))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1}}}_getMaxRecordCount(e){var i,a,n,l,p;const t=(i=e==null?void 0:e.components)==null?void 0:i.parameters;return((n=(a=t==null?void 0:t.limit)==null?void 0:a.schema)==null?void 0:n.maximum)??((p=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:p.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??T,i=I(t);return i==null?C.WGS84:new C({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",a=e.crs??[T],n=a.includes(i)?a.filter(u=>u!==i).concat(t.crs??[]):a,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(u=>!l.test(u))}async _loadOGCServices(e,t){const i=t!=null?t.signal:null,{apiKey:a,collectionId:n,customParameters:l,fields:p,geometryType:u,hasZ:m,objectIdField:L,timeInfo:h,url:_}=e,j={fields:p==null?void 0:p.map(d=>d.toJSON()),geometryType:J.toJSON(u),hasZ:m??!1,objectIdField:L,timeInfo:h==null?void 0:h.toJSON()},f={apiKey:a,customParameters:l,signal:i},g=await K(_,f),[b,F]=await Promise.all([X(g,f),Y(g,f)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new O("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=F.collections.find(d=>d.id===n);if(!y)throw new O("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await ee(g,f):null,x=await te(y,j,f),G=this._getMaxRecordCount(q),M=this._getCapabilities(x.hasZ,G),$=this._getStorageSpatialReference(y).toJSON(),Q=this._getSupportedSpatialReferences(y,F),A=new RegExp(`^${re}`,"i"),S={};for(const d of Q){const v=I(d);v!=null&&(S[v]||(S[v]=d.replace(A,"")))}this.featureDefinition={capabilities:M,collection:y,layerDefinition:x,spatialReference:$,supportedCrs:S}}};r([o()],c.prototype,"featureDefinition",void 0);r([o({constructOnly:!0})],c.prototype,"layer",void 0);r([o()],c.prototype,"type",void 0);c=r([P("esri.layers.graphics.sources.OGCFeatureSource")],c);const Te=xe();let s=class extends oe(ae(ne(pe(ie(ue(ye(fe(le(de(ce(W(z)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new c({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return we(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var p;let i,a=!1;const n=(p=t==null?void 0:t.feature)==null?void 0:p.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(a=this.types.some(u=>{var m;return u.id==l?(i=(m=u.domains)==null?void 0:m[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0):!1})),!a&&!i&&(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(i=>{var a;return(a=i==null?void 0:i.features)==null||a.forEach(n=>{n.layer=n.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),R(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],s.prototype,"capabilities",void 0);r([o({type:String,json:{write:!0}})],s.prototype,"collectionId",void 0);r([o({type:String})],s.prototype,"copyright",void 0);r([o({readOnly:!0})],s.prototype,"defaultPopupTemplate",null);r([o({type:String})],s.prototype,"definitionExpression",void 0);r([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],s.prototype,"description",void 0);r([o({type:String})],s.prototype,"displayField",void 0);r([o({type:Number})],s.prototype,"effectiveMaxRecordCount",null);r([o(me)],s.prototype,"elevationInfo",void 0);r([o({type:[Fe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],s.prototype,"fields",void 0);r([o(Te.fieldsIndex)],s.prototype,"fieldsIndex",void 0);r([o({readOnly:!0,type:k,json:{origins:{service:{name:"layerDefinition.extent"}}}})],s.prototype,"fullExtent",void 0);r([o({type:w.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:w.read}}}}})],s.prototype,"geometryType",void 0);r([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],s.prototype,"hasZ",void 0);r([o({type:Boolean,readOnly:!0})],s.prototype,"isTable",null);r([o({type:[Oe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Re},write:!0}}}})],s.prototype,"labelingInfo",void 0);r([o(he)],s.prototype,"labelsVisible",void 0);r([o(ge)],s.prototype,"legendEnabled",void 0);r([o({type:Number})],s.prototype,"maxRecordCount",void 0);r([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],s.prototype,"objectIdField",void 0);r([o({type:["OGCFeatureLayer"]})],s.prototype,"operationalLayerType",void 0);r([o(Se)],s.prototype,"popupEnabled",void 0);r([o({type:H,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0);r([o({types:U,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:V,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],s.prototype,"renderer",null);r([o(ve)],s.prototype,"screenSizePerspectiveEnabled",void 0);r([o({readOnly:!0})],s.prototype,"source",void 0);r([o({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],s.prototype,"spatialReference",void 0);r([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],s.prototype,"title",void 0);r([o({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0);r([o({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0);r([o({type:[be]})],s.prototype,"types",void 0);r([o(Ce)],s.prototype,"url",void 0);s=r([P("esri.layers.OGCFeatureLayer")],s);const _t=s;export{_t as default};