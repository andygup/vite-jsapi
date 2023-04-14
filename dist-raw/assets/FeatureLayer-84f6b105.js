import{L as V,ep as B,cL as H,au as K,E as b,bf as Y,cc as X,ct as ee,m as te,bH as R,ae as s,eq as re,ah as q,eo as ie,af as o,ai as T,J as j,aj as ae,aL as se,H as ne,bt as oe,y as le,Z as ue,er as I,du as de,es as G,et as A,eu as pe,ev as ye,ew as ce,Y as he,_ as E,r as fe,ex as me,bF as y,ey as be,bG as O,cE as P,bb as ge,ag as we,ez as _e,eA as Fe,a$ as Se,eB as Ie}from"./index-468a9268.js";import{U as Te}from"./UniqueValueRenderer-ac017c28.js";import{r as ve,S as Ee,a as Le,w as De}from"./jsonUtils-e039d20c.js";import{M as je}from"./MultiOriginJSONSupport-401b6783.js";import{s as Oe}from"./sql-50f1dd02.js";import{F as Pe,e as Ce,c as Me,r as Re,a as qe,b as Ge,u as Ae,d as Ne,f as $e,g as Je,h as ke,i as Ve,q as xe,j as Ue,k as Qe,l as ze,m as We,n as Ze,o as Be,p as He,s as N}from"./FeatureLayerBase-48e93ab7.js";import{u as Ke}from"./editsZScale-30615880.js";import{a as $}from"./queryZScale-5d7016ca.js";import{F as x}from"./FeatureSet-09da8445.js";import{A as Ye}from"./APIKeyMixin-0e36183f.js";import{A as Xe}from"./ArcGISService-3a9fd22b.js";import{B as et}from"./BlendLayer-3dc4b03d.js";import{C as tt}from"./CustomParametersMixin-dd84a15e.js";import{E as rt}from"./EditBusLayer-c632d9b4.js";import{F as it,a as at}from"./FeatureReductionLayer-14d66fcf.js";import{O as st}from"./OperationalLayer-22d46980.js";import{O as nt}from"./OrderedLayer-c6a98791.js";import{P as ot}from"./PortalLayer-4b72e3f9.js";import{R as lt}from"./RefreshableLayer-66cdb688.js";import{S as ut}from"./ScaleRangeLayer-58703611.js";import{T as dt,a as pt}from"./TemporalLayer-60387239.js";import{i as yt,l as ct,o as ht,a as ft,b as mt,p as bt,s as gt}from"./commonProperties-99999309.js";import{F as U}from"./FeatureTemplate-a21b1dd8.js";import{F as Q}from"./FeatureType-92af52a5.js";import{d as wt}from"./fieldProperties-c86bc95e.js";import{L as _t,r as J}from"./labelingInfo-94054623.js";import{g as Ft}from"./serviceCapabilitiesUtils-41209a3e.js";import{s as St}from"./versionUtils-694bf051.js";import{Q as It,D as Tt}from"./Query-ee569148.js";import{l as vt}from"./styleUtils-f48e2501.js";import{T as F}from"./TopFeaturesQuery-c849ff6c.js";import{c as Et}from"./popupUtils-59ed80cd.js";import"./LegendOptions-dcb522eb.js";import"./diffUtils-71027438.js";import"./SizeVariable-e8cc32d6.js";import"./colorRamps-4cbb7a49.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-edd0ce65.js";import"./ColorStop-60446843.js";import"./jsonUtils-123a2bd9.js";import"./styleUtils-cc56472a.js";import"./featureFlags-2a723cce.js";import"./DictionaryLoader-f1871e3b.js";import"./LRUCache-d3406418.js";import"./MemCache-3df47c80.js";import"./FieldsIndex-ab7b931c.js";import"./heatmapUtils-adcbaceb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./Field-88bfb4af.js";import"./fieldType-31d95250.js";import"./AttachmentQuery-43ef875d.js";import"./RelationshipQuery-5d7161f1.js";import"./jsonUtils-e00c5139.js";import"./parser-0c644652.js";import"./_commonjsHelpers-725317a4.js";import"./FeatureEffect-af7e9639.js";import"./clusterUtils-a3a72d39.js";import"./portalItemUtils-a011a0ff.js";import"./ElevationInfo-3032ca55.js";import"./labelUtils-e4e35bc9.js";import"./defaultsJSON-b396ba80.js";let Lt=0;const z="esri.layers.graphics.sources.MemorySource",L=V.getLogger(z);let g=class extends B.LoadableMixin(H(K(j))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}get _workerGeometryType(){var t;const e=(t=this.layer)==null?void 0:t.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);$(e,this.layer.spatialReference,r);const i=x.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const a=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[a],c=this._idToClientGraphic.get(u);c&&(l.geometry=c.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new b("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return $(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:Y.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new b("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],a=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=p=>"objectId"in p&&p.objectId!=null?p.objectId:"attributes"in p&&p.attributes[t]!=null?p.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const p of e.deleteFeatures){const h=l(p);h!=null&&i.push(h)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const p of e.updateFeatures)if(a.push(this._serializeFeature(p)),u){const h=l(p);h!=null&&u.set(h,p)}}Ke(r?r.features:null,a,this.layer.spatialReference);const{fullExtent:c,featureEditResults:f}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:a,deletes:i});return this.fullExtent=c,r&&r.finish(f.uidToObjectId),this._updateClientGraphicIds(u,f),this._createEditsResult(f)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const i=[];for(const{geometry:a}of e)a!=null&&a.type==="mesh"&&!a.hasExtent&&!a.loaded&&i.push(a.load({signal:t}));i.length&&await Promise.all(i)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new b("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],c=this._serializeFeature(u);!i&&u.geometry!=null&&(i=u.geometry.type),r[l]=c,t.set(`${c.uid}`,u)}const a=this;return{features:r,inferredGeometryType:i,finish(l){const u=a.sourceJSON.objectIdField;for(const c in l){const f=l[c],p=t.get(c);p&&(p.attributes||(p.attributes={}),f===-1?delete p.attributes[u]:p.attributes[u]=f,a._addIdToClientGraphic(p))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes&&e.attributes[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){var e,t;return((e=this.layer)==null?void 0:e.geometryType)??((t=this.sourceJSON)==null?void 0:t.geometryType)}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(Lt++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?X.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await ee("MemorySourceWorker",{strategy:te("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,objectIdField:i,hasM:a,hasZ:l,timeInfo:u}=this.layer,c=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const f=this._prepareAddFeatures(this.items);this.handles.add(this.on("before-changes",w=>{L.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),w.preventDefault()}));const p={features:f.features,fields:t&&t.map(w=>w.toJSON()),geometryType:R.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&a,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:c?null:r&&r.toJSON(),timeInfo:u?u.toJSON():null},h=await this._connection.invoke("load",p,{signal:e});for(const w of h.warnings)L.warn(w.message,{layer:this.layer,warning:w});h.featureErrors.length&&L.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors);const v=h.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(f.inferredGeometryType)&&(v.geometryType=R.toJSON(f.inferredGeometryType)),this.sourceJSON=v,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),f.finish(h.assignedObjectIds)}};s([re({Type:q,ensureType:ie(q)})],g.prototype,"itemType",void 0);s([o()],g.prototype,"type",void 0);s([o({constructOnly:!0})],g.prototype,"layer",void 0);s([o({readOnly:!0})],g.prototype,"_workerGeometryType",null);s([o()],g.prototype,"sourceJSON",void 0);g=s([T(z)],g);let _=class extends ae{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};s([o()],_.prototype,"updating",void 0);s([o()],_.prototype,"status",void 0);_=s([T("esri.layers.support.PublishingInfo")],_);const Dt=_,W="esri.layers.mixins.PublishableLayer",jt=Symbol(W),Ot=d=>{var e;let t=class extends d{constructor(){super(...arguments),this[e]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const a=new Dt;return this._checkPublishingStatus(a),a}_checkPublishingStatus(i){let u=0;const c=async p=>{i.updating=!0;let h;try{h=await this.fetchPublishingStatus()}catch{h="unavailable"}(h==="published"||h==="unavailable")&&(i.status==="publishing"&&this.refresh(),f.remove()),i.status=h,i.updating=!1,f.removed||(u=setTimeout(c,p,p+125))},f={removed:!1,remove(){this.removed=!0,clearTimeout(u)}};this.when().catch(()=>f.remove()),c(250),this.own(f)}};return e=jt,s([o({readOnly:!0,clonable:!1})],t.prototype,"publishingInfo",null),t=s([T(W)],t),t},m="FeatureLayer",Z="esri.layers.FeatureLayer",Pt=V.getLogger(Z);function S(d,e){return new b("layer:unsupported",`Layer (${d.title}, ${d.id}) of type '${d.declaredClass}' ${e}`,{layer:d})}function k(d){return d&&d instanceof j}const C=wt();function M(d,e,t){const r=!!(t!=null&&t.writeLayerSchema);return{enabled:r,ignoreOrigin:r}}let n=class extends Pe(it(at(Ot(rt(et(nt(dt(ut(lt(Xe(st(ot(je(tt(Ye(se(Se))))))))))))))))){constructor(...e){super(...e),this._handles=new ne,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=oe.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=le(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){var i;const t=e!=null?e.signal:null;if((i=this.portalItem)!=null&&i.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(a=>this.initLayerProperties(a))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},e).catch(ue).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const a=await this._fetchFirstLayerId(t);a!=null&&(this.layerId=a)}if(!this.url&&!this._hasMemorySource())throw new b("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>Ce(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,Ft(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){var e;return this.loaded&&!((e=this.capabilities)!=null&&e.operations.supportsEditing)?!1:this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return Me(this)}readIsTable(e,t){return t=(t==null?void 0:t.layerDefinition)??t,t.type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i!=null&&i.writeLayerSchema&&I(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return Re(t.layerDefinition||t)}readObjectIdField(e,t){return qe(t.layerDefinition||t)}get parsedUrl(){const e=de(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=G(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=G(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){A(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){var a;t=t.layerDefinition||t;const i=(a=t.drawingInfo)==null?void 0:a.renderer;if(i){const l=ve(i,t,r)??void 0;return l||Pt.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),l}if(t.defaultSymbol)return t.types&&t.types.length?new Te({defaultSymbol:D(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map(l=>({id:l.id,symbol:D(l.symbol,l,r)}))}):new Ee({symbol:D(t.defaultSymbol,t,r)})}set source(e){const t=this._get("source");t!==e&&(k(t)&&this._resetMemorySource(t),k(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof j?new g({layer:this,items:e}):e:null}readSource(e,t){const r=x.fromJSON(t.featureSet);return new g({layer:this,items:(r==null?void 0:r.features)??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r&&r.creatorField,a=r&&r.editorField;return e=e&&e.map(l=>U.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,a),e}readTitle(e,t){var a;const r=((a=t.layerDefinition)==null?void 0:a.name)??t.name,i=t.title||t.layerDefinition&&t.layerDefinition.title;if(r){const l=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return this.url?pe(this.url,r):r;let u=r;if(!u&&this.url){const c=ye(this.url);c!=null&&(u=c.title)}return u?(this.sublayerTitleMode==="item-title-and-service-name"&&l&&l!==u&&(u=l+" - "+u),ce(u)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition&&t.layerDefinition.name}readTypeIdField(e,t){t=t.layerDefinition||t;let r=t.typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(a=>a.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){t=t.layerDefinition||t,e=t.types;const r=t.editFieldsInfo,i=r&&r.creatorField,a=r&&r.editorField;return e&&e.map(l=>(l=Q.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,a),l))}readVisible(e,t){if(t.layerDefinition&&t.layerDefinition.defaultVisibility!=null)return!!t.layerDefinition.defaultVisibility;if(t.visibility!=null)return!!t.visibility}async addAttachment(e,t){return Ge(this,e,t,m)}async updateAttachment(e,t,r){return Ae(this,e,t,r,m)}async applyEdits(e,t){return Ne(this,e,t)}async uploadAssets(e,t){return $e(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Et(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await he(E(()=>import("./FeatureLayerSource-3d549b77.js"),["assets/FeatureLayerSource-3d549b77.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/External-b242d32b.js","assets/infoFor3D-91dff30a.js","assets/clientSideDefaults-e5f4472d.js","assets/QueryEngineCapabilities-60118ddb.js","assets/defaultsJSON-b396ba80.js","assets/QueryTask-aa7d58a8.js","assets/Query-ee569148.js","assets/Field-88bfb4af.js","assets/fieldType-31d95250.js","assets/executeForIds-d48309c8.js","assets/query-96f83d41.js","assets/normalizeUtils-9dd6c69b.js","assets/normalizeUtilsCommon-6cabd780.js","assets/pbfQueryUtils-5838fd47.js","assets/pbf-77fea3f9.js","assets/OptimizedGeometry-af84d2ad.js","assets/OptimizedFeatureSet-5c82fe5a.js","assets/queryZScale-5d7016ca.js","assets/executeQueryJSON-8379d0d8.js","assets/FeatureSet-09da8445.js","assets/featureConversionUtils-78a5344c.js","assets/editsZScale-30615880.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=Je(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=Oe(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){return ke(this,e,t,m)}async fetchRecomputedExtents(e){return Ve(this,e,m)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let a=null;return r==null||r.some(l=>{const{id:u}=l;return u==null?!1:(u.toString()===i.toString()&&(a=l),!!a)}),a}getFieldDomain(e,t){const r=t==null?void 0:t.feature,i=this.getFeatureType(r);if(i){const a=i.domains&&i.domains[e];if(a&&a.type!=="inherited")return a}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return xe(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(It.from(e)??r.createQuery(),t);if(i!=null&&i.features)for(const a of i.features)a.layer=a.sourceLayer=r;return i}async queryObjectIds(e,t){return Ue(this,e,t,m)}async queryFeatureCount(e,t){return Qe(this,e,t,m)}async queryExtent(e,t){return ze(this,e,t,m)}async queryRelatedFeatures(e,t){return We(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return Ze(this,e,t,m)}async queryTopFeatures(e,t){var l;const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!((l=i==null?void 0:i.query)!=null&&l.supportsTopFeaturesQuery))throw new b(m,"Layer source does not support queryTopFeatures capability");const a=await r.queryTopFeatures(F.from(e),t);if(a!=null&&a.features)for(const u of a.features)u.layer=u.sourceLayer=this;return a}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!(i!=null&&i.query.supportsTopFeaturesQuery))throw new b(m,"Layer source does not support queryTopObjectIds capability");return r.queryTopObjectIds(F.from(e),t)}async queryTopFeaturesExtent(e,t){var a;const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!((a=i==null?void 0:i.query)!=null&&a.supportsTopFeaturesQuery))throw new b(m,"Layer source does not support queryTopExtents capability");return r.queryTopExtents(F.from(e),t)}async queryTopFeatureCount(e,t){var a;const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!((a=i==null?void 0:i.query)!=null&&a.supportsTopFeaturesQuery))throw new b(m,"Layer source does not support queryFeatureCount capability");return r.queryTopCount(F.from(e),t)}read(e,t){const r=e.featureCollection;if(r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:(t==null?void 0:t.origin)??void 0,writeLayerSchema:(t==null?void 0:t.writeLayerSchema)??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:a}=t;if(this.dynamicDataSource)return a==null||a.push(S(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(r==="web-scene"||r==="web-map"&&i!=="tables")return a==null||a.push(S(this,"using a table source cannot be written to web scenes and web maps")),null;if(this._hasMemorySource())return a==null||a.push(S(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&i==="tables")return a==null||a.push(S(this,"using a non-table source cannot be written to tables in web maps")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new b(m,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){var t;return this.loaded?((t=this.source)==null?void 0:t.type)==="memory"?!0:St(this,e):!1}async save(e){return(await E(()=>import("./featureLayerUtils-31f76753.js"),["assets/featureLayerUtils-31f76753.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/originUtils-dad1432b.js","assets/multiOriginJSONSupportUtils-ad07e08e.js","assets/fetchService-ad276a4c.js","assets/jsonContext-486eeec0.js","assets/portalItemUtils-a011a0ff.js","assets/UniqueValueRenderer-ac017c28.js","assets/LegendOptions-dcb522eb.js","assets/diffUtils-71027438.js","assets/SizeVariable-e8cc32d6.js","assets/colorRamps-4cbb7a49.js","assets/sizeVariableUtils-2914222a.js","assets/lengthUtils-edd0ce65.js","assets/ColorStop-60446843.js","assets/jsonUtils-123a2bd9.js","assets/styleUtils-cc56472a.js","assets/featureFlags-2a723cce.js","assets/jsonUtils-e039d20c.js","assets/DictionaryLoader-f1871e3b.js","assets/LRUCache-d3406418.js","assets/MemCache-3df47c80.js","assets/FieldsIndex-ab7b931c.js","assets/heatmapUtils-adcbaceb.js","assets/vec4-3dd523e8.js","assets/vec4f64-efdcb593.js","assets/MultiOriginJSONSupport-401b6783.js","assets/sql-50f1dd02.js","assets/FeatureLayerBase-48e93ab7.js","assets/Field-88bfb4af.js","assets/fieldType-31d95250.js","assets/commonProperties-99999309.js","assets/ElevationInfo-3032ca55.js","assets/AttachmentQuery-43ef875d.js","assets/Query-ee569148.js","assets/RelationshipQuery-5d7161f1.js","assets/serviceCapabilitiesUtils-41209a3e.js","assets/editsZScale-30615880.js","assets/queryZScale-5d7016ca.js","assets/FeatureSet-09da8445.js","assets/APIKeyMixin-0e36183f.js","assets/ArcGISService-3a9fd22b.js","assets/BlendLayer-3dc4b03d.js","assets/jsonUtils-e00c5139.js","assets/parser-0c644652.js","assets/_commonjsHelpers-725317a4.js","assets/CustomParametersMixin-dd84a15e.js","assets/EditBusLayer-c632d9b4.js","assets/FeatureReductionLayer-14d66fcf.js","assets/FeatureEffect-af7e9639.js","assets/clusterUtils-a3a72d39.js","assets/labelingInfo-94054623.js","assets/labelUtils-e4e35bc9.js","assets/defaultsJSON-b396ba80.js","assets/OperationalLayer-22d46980.js","assets/OrderedLayer-c6a98791.js","assets/PortalLayer-4b72e3f9.js","assets/RefreshableLayer-66cdb688.js","assets/ScaleRangeLayer-58703611.js","assets/TemporalLayer-60387239.js","assets/FeatureTemplate-a21b1dd8.js","assets/FeatureType-92af52a5.js","assets/fieldProperties-c86bc95e.js","assets/versionUtils-694bf051.js","assets/styleUtils-f48e2501.js","assets/TopFeaturesQuery-c849ff6c.js","assets/popupUtils-59ed80cd.js"])).save(this,e)}async saveAs(e,t){return(await E(()=>import("./featureLayerUtils-31f76753.js"),["assets/featureLayerUtils-31f76753.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/originUtils-dad1432b.js","assets/multiOriginJSONSupportUtils-ad07e08e.js","assets/fetchService-ad276a4c.js","assets/jsonContext-486eeec0.js","assets/portalItemUtils-a011a0ff.js","assets/UniqueValueRenderer-ac017c28.js","assets/LegendOptions-dcb522eb.js","assets/diffUtils-71027438.js","assets/SizeVariable-e8cc32d6.js","assets/colorRamps-4cbb7a49.js","assets/sizeVariableUtils-2914222a.js","assets/lengthUtils-edd0ce65.js","assets/ColorStop-60446843.js","assets/jsonUtils-123a2bd9.js","assets/styleUtils-cc56472a.js","assets/featureFlags-2a723cce.js","assets/jsonUtils-e039d20c.js","assets/DictionaryLoader-f1871e3b.js","assets/LRUCache-d3406418.js","assets/MemCache-3df47c80.js","assets/FieldsIndex-ab7b931c.js","assets/heatmapUtils-adcbaceb.js","assets/vec4-3dd523e8.js","assets/vec4f64-efdcb593.js","assets/MultiOriginJSONSupport-401b6783.js","assets/sql-50f1dd02.js","assets/FeatureLayerBase-48e93ab7.js","assets/Field-88bfb4af.js","assets/fieldType-31d95250.js","assets/commonProperties-99999309.js","assets/ElevationInfo-3032ca55.js","assets/AttachmentQuery-43ef875d.js","assets/Query-ee569148.js","assets/RelationshipQuery-5d7161f1.js","assets/serviceCapabilitiesUtils-41209a3e.js","assets/editsZScale-30615880.js","assets/queryZScale-5d7016ca.js","assets/FeatureSet-09da8445.js","assets/APIKeyMixin-0e36183f.js","assets/ArcGISService-3a9fd22b.js","assets/BlendLayer-3dc4b03d.js","assets/jsonUtils-e00c5139.js","assets/parser-0c644652.js","assets/_commonjsHelpers-725317a4.js","assets/CustomParametersMixin-dd84a15e.js","assets/EditBusLayer-c632d9b4.js","assets/FeatureReductionLayer-14d66fcf.js","assets/FeatureEffect-af7e9639.js","assets/clusterUtils-a3a72d39.js","assets/labelingInfo-94054623.js","assets/labelUtils-e4e35bc9.js","assets/defaultsJSON-b396ba80.js","assets/OperationalLayer-22d46980.js","assets/OrderedLayer-c6a98791.js","assets/PortalLayer-4b72e3f9.js","assets/RefreshableLayer-66cdb688.js","assets/ScaleRangeLayer-58703611.js","assets/TemporalLayer-60387239.js","assets/FeatureTemplate-a21b1dd8.js","assets/FeatureType-92af52a5.js","assets/fieldProperties-c86bc95e.js","assets/versionUtils-694bf051.js","assets/styleUtils-f48e2501.js","assets/TopFeaturesQuery-c849ff6c.js","assets/popupUtils-59ed80cd.js"])).saveAs(this,e,t)}_readEditingEnabled(e,t,r){var a;let i=(a=e.layerDefinition)==null?void 0:a.capabilities;if(i)return this._hasEditingCapability(i);if(i=e.capabilities,t&&(r==null?void 0:r.origin)==="web-map"&&!this._hasMemorySource()&&i)return this._hasEditingCapability(i)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){var a,l;if(!e){const u=(l=(a=this.capabilities)==null?void 0:a.operations)!=null&&l.supportsSync?"Query,Sync":"Query";I("layerDefinition.capabilities",u,t),r&&!(i!=null&&i.writeLayerSchema)&&(t.capabilities=u)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstLayerId(e){return fe(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r){if(Array.isArray(r.layers)&&r.layers.length>0)return r.layers[0].id;if(Array.isArray(r.tables)&&r.tables.length>0)return r.tables[0].id}})}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(t=this.portalItem)==null?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),A(this.renderer,this.fieldsIndex),me(this.timeInfo,this.fieldsIndex),vt(this,{origin:"service"})}async hasDataChanged(){return Be(this)}async fetchPublishingStatus(){const e=this.source;return e!=null&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),!this.isTable&&!this._hasMemorySource()&&e.search(/\/FeatureServer\//i)===-1&&!((r=this.fields)!=null&&r.some(i=>i.type==="geometry"))&&console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{const i=r.prototype&&r.prototype.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new b("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new b("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this._handles.add([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this._handles.remove("fl-source")}_hasMemorySource(){return!!(!this.url&&this.source)}};s([y("service","capabilities")],n.prototype,"readCapabilities",null);s([o({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"charts",void 0);s([o({readOnly:!0})],n.prototype,"createQueryVersion",null);s([o({json:{read:{source:"layerDefinition.copyrightText"}}})],n.prototype,"copyright",void 0);s([o({json:{read:{source:"layerDefinition.displayField"}}})],n.prototype,"displayField",void 0);s([o({types:be,readOnly:!0})],n.prototype,"defaultSymbol",void 0);s([o({type:Tt})],n.prototype,"dynamicDataSource",void 0);s([o({type:Boolean})],n.prototype,"editingEnabled",null);s([y(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],n.prototype,"readEditingEnabled",null);s([y("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],n.prototype,"readEditingEnabledFromWebMap",null);s([O(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],n.prototype,"writeEditingEnabled",null);s([O("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],n.prototype,"writeEditingEnabledToWebMap",null);s([o({readOnly:!0})],n.prototype,"effectiveEditingEnabled",null);s([o({...C.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:M}}}}})],n.prototype,"fields",void 0);s([o(C.fieldsIndex)],n.prototype,"fieldsIndex",void 0);s([o({type:He,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"formTemplate",void 0);s([o({json:{read:{source:"layerDefinition.extent"}}})],n.prototype,"fullExtent",void 0);s([o({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:M,writer(d,e,t){const r=d?N.toJSON(d):null;r&&I(t,r,e)}}}},read:{source:"layerDefinition.geometryType",reader:N.read}}})],n.prototype,"geometryType",void 0);s([o({json:{read:{source:"layerDefinition.hasM"}}})],n.prototype,"hasM",void 0);s([o({json:{read:{source:"layerDefinition.hasZ"}}})],n.prototype,"hasZ",void 0);s([o(yt)],n.prototype,"id",void 0);s([o({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],n.prototype,"infoFor3D",void 0);s([o({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],n.prototype,"isTable",void 0);s([y("service","isTable",["type","geometryType"]),y("isTable",["layerDefinition.type","layerDefinition.geometryType"])],n.prototype,"readIsTable",null);s([O("web-map","isTable")],n.prototype,"writeIsTable",null);s([o(ct)],n.prototype,"labelsVisible",void 0);s([o({type:[_t],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:J},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:J},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],n.prototype,"labelingInfo",void 0);s([o((()=>{const d=P(ht);return d.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(e,t,r){I(r,Ie(e),t)}}},d})())],n.prototype,"opacity",void 0);s([o(ft)],n.prototype,"legendEnabled",void 0);s([o({type:["show","hide"],json:(()=>{const d=P(mt.json);return d.origins["portal-item"]={read:!1,write:!1},d})()})],n.prototype,"listMode",void 0);s([y("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],n.prototype,"readGlobalIdField",null);s([o({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:M}}}}})],n.prototype,"objectIdField",void 0);s([y("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],n.prototype,"readObjectIdField",null);s([o({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0);s([o(C.outFields)],n.prototype,"outFields",void 0);s([o({readOnly:!0})],n.prototype,"parsedUrl",null);s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],n.prototype,"path",void 0);s([o(bt)],n.prototype,"popupEnabled",void 0);s([o({type:ge,json:{name:"popupInfo",write:!0}})],n.prototype,"popupTemplate",void 0);s([o({readOnly:!0})],n.prototype,"defaultPopupTemplate",null);s([o({types:Le,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:De,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(d,e,t){return{ignoreOrigin:t==null?void 0:t.writeLayerSchema}}}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(d,e,t){return{ignoreOrigin:t==null?void 0:t.writeLayerSchema}}}}})],n.prototype,"renderer",null);s([y("service","renderer",["drawingInfo.renderer","defaultSymbol"]),y("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],n.prototype,"readRenderer",null);s([o((()=>{const d=P(gt);return d.json.origins["portal-item"]={read:!1,write:!1},d})())],n.prototype,"screenSizePerspectiveEnabled",void 0);s([o({clonable:!1})],n.prototype,"source",null);s([we("source")],n.prototype,"castSource",null);s([y("portal-item","source",["featureSet"]),y("web-map","source",["featureSet"])],n.prototype,"readSource",null);s([o({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],n.prototype,"spatialReference",void 0);s([o({type:Number})],n.prototype,"subtypeCode",void 0);s([o({type:[U]})],n.prototype,"templates",void 0);s([y("templates",["editFieldsInfo","creatorField","editorField","templates"])],n.prototype,"readTemplates",null);s([o({type:pt})],n.prototype,"timeInfo",void 0);s([o()],n.prototype,"title",void 0);s([y("service","title",["name"]),y("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],n.prototype,"readTitle",null);s([y("web-map","title",["layerDefinition.name","title"])],n.prototype,"readTitleFromWebMap",null);s([o({type:String})],n.prototype,"sublayerTitleMode",void 0);s([o({json:{read:!1}})],n.prototype,"type",void 0);s([o({type:String})],n.prototype,"typeIdField",void 0);s([y("service","typeIdField"),y("typeIdField",["layerDefinition.typeIdField"])],n.prototype,"readTypeIdField",null);s([o({type:[Q]})],n.prototype,"types",void 0);s([y("service","types",["types"]),y("types",["layerDefinition.types"])],n.prototype,"readTypes",null);s([o({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],n.prototype,"visible",void 0);s([y("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],n.prototype,"readVisible",null);n=s([T(Z)],n);const D=_e({types:Fe}),Ur=n;export{Ur as default};
