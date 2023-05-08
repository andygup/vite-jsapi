import{af as r,ag as i,aj as D,ew as B,bt as b,bH as L,a as C,eA as F,eE as N,bf as H,eJ as I,bb as J,a$ as Z}from"./index-6eb28d6b.js";import"./UniqueValueRenderer-96d9835c.js";import{b as k,n as z}from"./jsonUtils-4ca2381c.js";import{O as U}from"./MultiOriginJSONSupport-12c5c93c.js";import{x as V,b as O,k as $,I as W,F as K,j as X,T as Y,h as ee,w as te}from"./ogcFeatureUtils-bf6a9818.js";import{g as re}from"./FeatureSet-af928f6b.js";import{i as oe}from"./APIKeyMixin-e31d187b.js";import{a as ie}from"./BlendLayer-8cb2f026.js";import{o as se}from"./CustomParametersMixin-e2086895.js";import{n as pe,p as ne}from"./FeatureReductionLayer-4a103bdb.js";import{c as ae}from"./OperationalLayer-8766a006.js";import{c as le}from"./OrderedLayer-edd317ce.js";import{j as ue}from"./PortalLayer-5a19a8b1.js";import{p as de}from"./RefreshableLayer-a314122a.js";import{t as ce}from"./ScaleRangeLayer-a3b20e36.js";import{a as ye}from"./TemporalLayer-707c4df5.js";import{d as me,m as fe,c as he,p as ge,l as ve,f as Se}from"./commonProperties-71c0550b.js";import{n as be}from"./FeatureType-798c0e0e.js";import{y as we}from"./Field-3c7d8d62.js";import{s as xe}from"./fieldProperties-94448584.js";import{C as Re,i as Ce}from"./labelingInfo-e90eb8c8.js";import{b as T}from"./Query-2a94894d.js";import{p as Fe}from"./popupUtils-fa63b933.js";import"./LegendOptions-8b5a4dff.js";import"./diffUtils-e501908d.js";import"./SizeVariable-d56771ee.js";import"./colorRamps-991e13c0.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-d204db2e.js";import"./ColorStop-57d23cae.js";import"./featureFlags-825f837d.js";import"./styleUtils-4cbc1c81.js";import"./DictionaryLoader-d4fe8fed.js";import"./LRUCache-c5294c76.js";import"./Version-fd75b892.js";import"./FieldsIndex-b55fecf3.js";import"./heatmapUtils-b8fab62d.js";import"./vec4f64-aa64c7e9.js";import"./featureConversionUtils-98810c3c.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geojson-03e53bce.js";import"./clientSideDefaults-885e1712.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-b087dd4d.js";import"./fieldType-df6f400c.js";import"./jsonUtils-4e3a5483.js";import"./parser-aaaca3ad.js";import"./FeatureEffect-d27dd9c4.js";import"./clusterUtils-f9477424.js";import"./portalItemUtils-c64fb6e5.js";import"./ElevationInfo-6810683d.js";import"./FeatureTemplate-a8671a32.js";import"./labelUtils-01c8275b.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>re.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>V(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??O,s=$(t);return s==null?b.WGS84:new b({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[O],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:m,hasZ:f,objectIdField:j,timeInfo:h,url:E}=e,P={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:L.toJSON(m),hasZ:f??!1,objectIdField:j,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:s},g=await W(E,c),[w,x]=await Promise.all([K(g,c),X(g,c)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new C("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=x.collections.find(u=>u.id===n);if(!y)throw new C("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Y(g,c):null,R=await ee(y,P,c),q=this._getMaxRecordCount(_),M=this._getCapabilities(R.hasZ,q),A=this._getStorageSpatialReference(y).toJSON(),G=this._getSupportedSpatialReferences(y,x),Q=new RegExp(`^${te}`,"i"),v={};for(const u of G){const S=$(u);S!=null&&(v[S]||(v[S]=u.replace(Q,"")))}this.featureDefinition={capabilities:M,collection:y,layerDefinition:R,spatialReference:A,supportedCrs:v}}};r([i()],d.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"type",void 0),d=r([D("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=xe();let o=class extends oe(se(pe(ne(ie(le(ye(ce(ae(ue(de(U(Z)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Fe(this,e)}createQuery(){return new T}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(m=>{var f;return m.id==l&&(s=(f=m.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(T.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),F(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(me)],o.prototype,"elevationInfo",void 0),r([i({type:[we],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i(Ie.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:H,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:I.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:I.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Re],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ce},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(fe)],o.prototype,"labelsVisible",void 0),r([i(he)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ge)],o.prototype,"popupEnabled",void 0),r([i({type:J,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:k,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:z,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(ve)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:b,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[be]})],o.prototype,"types",void 0),r([i(Se)],o.prototype,"url",void 0),o=r([D("esri.layers.OGCFeatureLayer")],o);const Ot=o;export{Ot as default};
