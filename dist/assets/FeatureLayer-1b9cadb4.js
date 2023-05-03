import{d as J,h1 as K,b7 as B,aq as U,K as f,by as H,j as X,h2 as Y,v as ee,bF as M,e as s,h3 as te,B as L,fB as re,y as n,a as S,V as C,m as ie,h4 as se,aH as oe,t as ae,bz as ne,l as le,Y as ue,h5 as F,gX as pe,h6 as P,h7 as R,h8 as de,h9 as ye,ha as ce,X as he,_ as I,L as me,hb as fe,bD as d,gA as ge,bE as E,eK as $,hc as be,af as we,fD as ve,gw as _e,a$ as Fe,gm as Se}from"./index-d29f6b97.js";import{A as Te}from"./UniqueValueRenderer-6bfde73c.js";import{o as Ie,p as Ee,b as $e,n as De}from"./jsonUtils-a30c08d1.js";import{O as je}from"./MultiOriginJSONSupport-d8471874.js";import{n as Oe}from"./sql-6b2d38b4.js";import{T as qe,R as Ce,C as Me,P as Le,A as Pe,c as Re,l as xe,y as Ge,d as Ae,I as Ne,f as Je,m as ke,h as Ve,w as Qe,g as We,b as ze,q as Ze,j as Ke,F as Be,a as Ue,u as x}from"./FeatureLayerBase-eb1910ef.js";import{i as He}from"./editsZScale-d39634ea.js";import{t as G}from"./queryZScale-a900b0db.js";import{g as k}from"./FeatureSet-b4c3ebab.js";import{i as Xe}from"./APIKeyMixin-4e2720f9.js";import{l as Ye}from"./ArcGISService-60eebca2.js";import{a as et}from"./BlendLayer-6b704ca4.js";import{o as tt}from"./CustomParametersMixin-238bf6a3.js";import{c as rt}from"./EditBusLayer-f0fa7c71.js";import{n as it,p as st}from"./FeatureReductionLayer-1b796ac3.js";import{c as ot}from"./OperationalLayer-abee1819.js";import{c as at}from"./OrderedLayer-d05fc281.js";import{j as nt}from"./PortalLayer-9cdb0d77.js";import{t as lt}from"./ScaleRangeLayer-4ea69c96.js";import{a as ut,d as pt}from"./TemporalLayer-bcd2e667.js";import{v as dt,m as yt,g as ct,c as ht,S as mt,p as ft,l as gt}from"./commonProperties-4511a72e.js";import{p as V}from"./FeatureTemplate-7817a164.js";import{n as Q}from"./FeatureType-ef13726a.js";import{s as bt}from"./fieldProperties-4d9f93fc.js";import{C as wt,i as A}from"./labelingInfo-59a7cf3b.js";import{n as vt}from"./serviceCapabilitiesUtils-daf60906.js";import{e as _t}from"./versionUtils-dd7c16a5.js";import{b as Ft,K as St}from"./Query-02316d46.js";import{t as Tt}from"./styleUtils-c09586c0.js";import{S as v}from"./TopFeaturesQuery-78393f5a.js";import{p as It}from"./popupUtils-30b722d9.js";import"./ColorStop-c9dfec3d.js";import"./diffUtils-149561ab.js";import"./colorRamps-5cc134e8.js";import"./DictionaryLoader-d7f4a828.js";import"./LRUCache-2af9f319.js";import"./FieldsIndex-f92177f9.js";import"./heatmapUtils-b7e5e306.js";import"./AttachmentQuery-ec55429b.js";import"./RelationshipQuery-7bc28ffc.js";import"./jsonUtils-5b32189b.js";import"./FeatureEffect-2095f3f9.js";import"./FeatureFilter-ee8bfdef.js";import"./portalItemUtils-3c9a4460.js";import"./ElevationInfo-568c6f07.js";import"./defaults-a3afa070.js";import"./defaultsJSON-59981e75.js";let Et=0;const W="esri.layers.graphics.sources.MemorySource",D=J.getLogger(W);let g=class extends K.LoadableMixin(B(U(C))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}get _workerGeometryType(){var t;const e=(t=this.layer)==null?void 0:t.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);G(e,this.layer.spatialReference,r);const i=k.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const o=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[o],y=this._idToClientGraphic.get(u);y&&(l.geometry=y.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new f("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return G(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:H.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new f("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],o=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=p=>"objectId"in p&&p.objectId!=null?p.objectId:"attributes"in p&&p.attributes[t]!=null?p.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const p of e.deleteFeatures){const c=l(p);c!=null&&i.push(c)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const p of e.updateFeatures)if(o.push(this._serializeFeature(p)),u){const c=l(p);c!=null&&u.set(c,p)}}He(r?r.features:null,o,this.layer.spatialReference);const{fullExtent:y,featureEditResults:h}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:o,deletes:i});return this.fullExtent=y,r&&r.finish(h.uidToObjectId),this._updateClientGraphicIds(u,h),this._createEditsResult(h)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],y=this._serializeFeature(u);i||u.geometry==null||(i=u.geometry.type),r[l]=y,t.set(`${y.uid}`,u)}const o=this;return{features:r,inferredGeometryType:i,finish(l){const u=o.sourceJSON.objectIdField;for(const y in l){const h=l[y],p=t.get(y);p&&(p.attributes||(p.attributes={}),h===-1?delete p.attributes[u]:p.attributes[u]=h,o._addIdToClientGraphic(p))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes&&e.attributes[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){var e,t;return((e=this.layer)==null?void 0:e.geometryType)??((t=this.sourceJSON)==null?void 0:t.geometryType)}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(Et++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?X.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await Y("MemorySourceWorker",{strategy:ee("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,objectIdField:i,hasM:o,hasZ:l,timeInfo:u}=this.layer,y=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const h=this._prepareAddFeatures(this.items);this.handles.add(this.on("before-changes",b=>{D.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),b.preventDefault()}));const p={features:h.features,fields:t&&t.map(b=>b.toJSON()),geometryType:M.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&o,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:y?null:r&&r.toJSON(),timeInfo:u?u.toJSON():null},c=await this._connection.invoke("load",p,{signal:e});for(const b of c.warnings)D.warn(b.message,{layer:this.layer,warning:b});c.featureErrors.length&&D.warn(`Encountered ${c.featureErrors.length} validation errors while loading features`,c.featureErrors);const T=c.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(h.inferredGeometryType)&&(T.geometryType=M.toJSON(h.inferredGeometryType)),this.sourceJSON=T,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),h.finish(c.assignedObjectIds)}};s([te({Type:L,ensureType:re(L)})],g.prototype,"itemType",void 0),s([n()],g.prototype,"type",void 0),s([n({constructOnly:!0})],g.prototype,"layer",void 0),s([n({readOnly:!0})],g.prototype,"_workerGeometryType",null),s([n()],g.prototype,"sourceJSON",void 0),g=s([S(W)],g);let w=class extends ie{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};s([n()],w.prototype,"updating",void 0),s([n()],w.prototype,"status",void 0),w=s([S("esri.layers.support.PublishingInfo")],w);const $t=w,z="esri.layers.mixins.PublishableLayer",Dt=Symbol(z),jt=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const o=new $t;return this._checkPublishingStatus(o),o}_checkPublishingStatus(i){let u=0;const y=async p=>{let c;i.updating=!0;try{c=await this.fetchPublishingStatus()}catch{c="unavailable"}c!=="published"&&c!=="unavailable"||(i.status==="publishing"&&this.refresh(),h.remove()),i.status=c,i.updating=!1,h.removed||(u=setTimeout(y,p,p+125))},h={removed:!1,remove(){this.removed=!0,clearTimeout(u)}};this.when().catch(()=>h.remove()),y(250),this.own(h)}};return t=Dt,s([n({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=s([S(z)],r),r},m="FeatureLayer",Z="esri.layers.FeatureLayer",Ot=J.getLogger(Z);function _(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function N(e){return e&&e instanceof C}const j=bt();function O(e,t,r){const i=!!(r!=null&&r.writeLayerSchema);return{enabled:i,ignoreOrigin:i}}let a=class extends qe(it(st(jt(rt(et(at(ut(lt(se(Ye(ot(nt(je(tt(Xe(oe(Fe))))))))))))))))){constructor(...e){super(...e),this._handles=new ae,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=ne.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=le(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){var i;const t=e!=null?e.signal:null;if((i=this.portalItem)!=null&&i.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(o=>this.initLayerProperties(o))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},e).catch(ue).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const o=await this._fetchFirstLayerId(t);o!=null&&(this.layerId=o)}if(!this.url&&!this._hasMemorySource())throw new f("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>Ce(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,vt(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){var e;return!(this.loaded&&!((e=this.capabilities)!=null&&e.operations.supportsEditing))&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return Me(this)}readIsTable(e,t){return(t=(t==null?void 0:t.layerDefinition)??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i!=null&&i.writeLayerSchema&&F(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return Le(t.layerDefinition||t)}readObjectIdField(e,t){return Pe(t.layerDefinition||t)}get parsedUrl(){const e=pe(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=P(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=P(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){var o;t=t.layerDefinition||t;const i=(o=t.drawingInfo)==null?void 0:o.renderer;if(i){const l=Ie(i,t,r)??void 0;return l||Ot.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),l}if(t.defaultSymbol)return t.types&&t.types.length?new Te({defaultSymbol:q(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map(l=>({id:l.id,symbol:q(l.symbol,l,r)}))}):new Ee({symbol:q(t.defaultSymbol,t,r)})}set source(e){const t=this._get("source");t!==e&&(N(t)&&this._resetMemorySource(t),N(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof C?new g({layer:this,items:e}):e:null}readSource(e,t){const r=k.fromJSON(t.featureSet);return new g({layer:this,items:(r==null?void 0:r.features)??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r&&r.creatorField,o=r&&r.editorField;return e=e&&e.map(l=>V.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,t){var o;const r=((o=t.layerDefinition)==null?void 0:o.name)??t.name,i=t.title||t.layerDefinition&&t.layerDefinition.title;if(r){const l=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return this.url?de(this.url,r):r;let u=r;if(!u&&this.url){const y=ye(this.url);y!=null&&(u=y.title)}return u?(this.sublayerTitleMode==="item-title-and-service-name"&&l&&l!==u&&(u=l+" - "+u),ce(u)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition&&t.layerDefinition.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(o=>o.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r&&r.creatorField,o=r&&r.editorField;return e&&e.map(l=>(l=Q.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,o),l))}readVisible(e,t){return t.layerDefinition&&t.layerDefinition.defaultVisibility!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){return Re(this,e,t,m)}async updateAttachment(e,t,r){return xe(this,e,t,r,m)}async applyEdits(e,t){return Ge(this,e,t)}async uploadAssets(e,t){return Ae(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return It(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await he(I(()=>import("./FeatureLayerSource-fa85f15a.js"),["assets/FeatureLayerSource-fa85f15a.js","assets/index-d29f6b97.js","assets/index-0492b785.css","assets/editingSupport-4a286ecb.js","assets/normalizeUtils-4068a3de.js","assets/normalizeUtilsCommon-6017271d.js","assets/EditBusLayer-f0fa7c71.js","assets/infoFor3D-5881142c.js","assets/clientSideDefaults-3f6f7f8c.js","assets/QueryEngineCapabilities-42e44ded.js","assets/defaultsJSON-59981e75.js","assets/QueryTask-2d64bba5.js","assets/Query-02316d46.js","assets/executeForIds-3836c41e.js","assets/query-2ef7b393.js","assets/pbfQueryUtils-90f86c54.js","assets/pbf-94fe703e.js","assets/queryZScale-a900b0db.js","assets/executeQueryJSON-e0c13ce5.js","assets/FeatureSet-b4c3ebab.js","assets/editsZScale-d39634ea.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=Ne(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=Oe(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){return Je(this,e,t,m)}async fetchRecomputedExtents(e){return ke(this,e,m)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let o=null;return r==null||r.some(l=>{const{id:u}=l;return u!=null&&(u.toString()===i.toString()&&(o=l),!!o)}),o}getFieldDomain(e,t){const r=t==null?void 0:t.feature,i=this.getFeatureType(r);if(i){const o=i.domains&&i.domains[e];if(o&&o.type!=="inherited")return o}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return Ve(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(Ft.from(e)??r.createQuery(),t);if(i!=null&&i.features)for(const o of i.features)o.layer=o.sourceLayer=r;return i}async queryObjectIds(e,t){return Qe(this,e,t,m)}async queryFeatureCount(e,t){return We(this,e,t,m)}async queryExtent(e,t){return ze(this,e,t,m)}async queryRelatedFeatures(e,t){return Ze(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return Ke(this,e,t,m)}async queryTopFeatures(e,t){var l;const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!((l=i==null?void 0:i.query)!=null&&l.supportsTopFeaturesQuery))throw new f(m,"Layer source does not support queryTopFeatures capability");const o=await r.queryTopFeatures(v.from(e),t);if(o!=null&&o.features)for(const u of o.features)u.layer=u.sourceLayer=this;return o}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!(i!=null&&i.query.supportsTopFeaturesQuery))throw new f(m,"Layer source does not support queryTopObjectIds capability");return r.queryTopObjectIds(v.from(e),t)}async queryTopFeaturesExtent(e,t){var o;const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!((o=i==null?void 0:i.query)!=null&&o.supportsTopFeaturesQuery))throw new f(m,"Layer source does not support queryTopExtents capability");return r.queryTopExtents(v.from(e),t)}async queryTopFeatureCount(e,t){var o;const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!((o=i==null?void 0:i.query)!=null&&o.supportsTopFeaturesQuery))throw new f(m,"Layer source does not support queryFeatureCount capability");return r.queryTopCount(v.from(e),t)}read(e,t){const r=e.featureCollection;if(r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:(t==null?void 0:t.origin)??void 0,writeLayerSchema:(t==null?void 0:t.writeLayerSchema)??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:o}=t;if(this.dynamicDataSource)return o==null||o.push(_(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(r==="web-scene"||r==="web-map"&&i!=="tables")return o==null||o.push(_(this,"using a table source cannot be written to web scenes and web maps")),null;if(this._hasMemorySource())return o==null||o.push(_(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&i==="tables")return o==null||o.push(_(this,"using a non-table source cannot be written to tables in web maps")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new f(m,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){var t;return!!this.loaded&&(((t=this.source)==null?void 0:t.type)==="memory"||_t(this,e))}async save(e){const{save:t}=await I(()=>import("./featureLayerUtils-e3031cf0.js"),["assets/featureLayerUtils-e3031cf0.js","assets/index-d29f6b97.js","assets/index-0492b785.css","assets/originUtils-1469eeaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/fetchService-3aa7ae50.js","assets/jsonContext-4de38f48.js","assets/portalItemUtils-3c9a4460.js","assets/UniqueValueRenderer-6bfde73c.js","assets/ColorStop-c9dfec3d.js","assets/diffUtils-149561ab.js","assets/colorRamps-5cc134e8.js","assets/jsonUtils-a30c08d1.js","assets/DictionaryLoader-d7f4a828.js","assets/LRUCache-2af9f319.js","assets/FieldsIndex-f92177f9.js","assets/heatmapUtils-b7e5e306.js","assets/MultiOriginJSONSupport-d8471874.js","assets/sql-6b2d38b4.js","assets/FeatureLayerBase-eb1910ef.js","assets/commonProperties-4511a72e.js","assets/ElevationInfo-568c6f07.js","assets/AttachmentQuery-ec55429b.js","assets/Query-02316d46.js","assets/RelationshipQuery-7bc28ffc.js","assets/serviceCapabilitiesUtils-daf60906.js","assets/editsZScale-d39634ea.js","assets/queryZScale-a900b0db.js","assets/FeatureSet-b4c3ebab.js","assets/APIKeyMixin-4e2720f9.js","assets/ArcGISService-60eebca2.js","assets/BlendLayer-6b704ca4.js","assets/jsonUtils-5b32189b.js","assets/CustomParametersMixin-238bf6a3.js","assets/EditBusLayer-f0fa7c71.js","assets/FeatureReductionLayer-1b796ac3.js","assets/FeatureEffect-2095f3f9.js","assets/FeatureFilter-ee8bfdef.js","assets/labelingInfo-59a7cf3b.js","assets/defaults-a3afa070.js","assets/defaultsJSON-59981e75.js","assets/OperationalLayer-abee1819.js","assets/OrderedLayer-d05fc281.js","assets/PortalLayer-9cdb0d77.js","assets/ScaleRangeLayer-4ea69c96.js","assets/TemporalLayer-bcd2e667.js","assets/FeatureTemplate-7817a164.js","assets/FeatureType-ef13726a.js","assets/fieldProperties-4d9f93fc.js","assets/versionUtils-dd7c16a5.js","assets/styleUtils-c09586c0.js","assets/TopFeaturesQuery-78393f5a.js","assets/popupUtils-30b722d9.js"]);return t(this,e)}async saveAs(e,t){const{saveAs:r}=await I(()=>import("./featureLayerUtils-e3031cf0.js"),["assets/featureLayerUtils-e3031cf0.js","assets/index-d29f6b97.js","assets/index-0492b785.css","assets/originUtils-1469eeaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/fetchService-3aa7ae50.js","assets/jsonContext-4de38f48.js","assets/portalItemUtils-3c9a4460.js","assets/UniqueValueRenderer-6bfde73c.js","assets/ColorStop-c9dfec3d.js","assets/diffUtils-149561ab.js","assets/colorRamps-5cc134e8.js","assets/jsonUtils-a30c08d1.js","assets/DictionaryLoader-d7f4a828.js","assets/LRUCache-2af9f319.js","assets/FieldsIndex-f92177f9.js","assets/heatmapUtils-b7e5e306.js","assets/MultiOriginJSONSupport-d8471874.js","assets/sql-6b2d38b4.js","assets/FeatureLayerBase-eb1910ef.js","assets/commonProperties-4511a72e.js","assets/ElevationInfo-568c6f07.js","assets/AttachmentQuery-ec55429b.js","assets/Query-02316d46.js","assets/RelationshipQuery-7bc28ffc.js","assets/serviceCapabilitiesUtils-daf60906.js","assets/editsZScale-d39634ea.js","assets/queryZScale-a900b0db.js","assets/FeatureSet-b4c3ebab.js","assets/APIKeyMixin-4e2720f9.js","assets/ArcGISService-60eebca2.js","assets/BlendLayer-6b704ca4.js","assets/jsonUtils-5b32189b.js","assets/CustomParametersMixin-238bf6a3.js","assets/EditBusLayer-f0fa7c71.js","assets/FeatureReductionLayer-1b796ac3.js","assets/FeatureEffect-2095f3f9.js","assets/FeatureFilter-ee8bfdef.js","assets/labelingInfo-59a7cf3b.js","assets/defaults-a3afa070.js","assets/defaultsJSON-59981e75.js","assets/OperationalLayer-abee1819.js","assets/OrderedLayer-d05fc281.js","assets/PortalLayer-9cdb0d77.js","assets/ScaleRangeLayer-4ea69c96.js","assets/TemporalLayer-bcd2e667.js","assets/FeatureTemplate-7817a164.js","assets/FeatureType-ef13726a.js","assets/fieldProperties-4d9f93fc.js","assets/versionUtils-dd7c16a5.js","assets/styleUtils-c09586c0.js","assets/TopFeaturesQuery-78393f5a.js","assets/popupUtils-30b722d9.js"]);return r(this,e,t)}_readEditingEnabled(e,t,r){var o;let i=(o=e.layerDefinition)==null?void 0:o.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&(r==null?void 0:r.origin)==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){var o,l;if(!e){const u=(l=(o=this.capabilities)==null?void 0:o.operations)!=null&&l.supportsSync?"Query,Sync":"Query";F("layerDefinition.capabilities",u,t),r&&!(i!=null&&i.writeLayerSchema)&&(t.capabilities=u)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstLayerId(e){return me(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return Array.isArray(r.layers)&&r.layers.length>0?r.layers[0].id:Array.isArray(r.tables)&&r.tables.length>0?r.tables[0].id:void 0})}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(t=this.portalItem)==null?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),R(this.renderer,this.fieldsIndex),fe(this.timeInfo,this.fieldsIndex),Tt(this,{origin:"service"})}async hasDataChanged(){return Be(this)}async fetchPublishingStatus(){const e=this.source;return e!=null&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(i=>i.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{const i=r.prototype&&r.prototype.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new f("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new f("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this._handles.add([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this._handles.remove("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}};s([d("service","capabilities")],a.prototype,"readCapabilities",null),s([n({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],a.prototype,"charts",void 0),s([n({readOnly:!0})],a.prototype,"createQueryVersion",null),s([n({json:{read:{source:"layerDefinition.copyrightText"}}})],a.prototype,"copyright",void 0),s([n({json:{read:{source:"layerDefinition.displayField"}}})],a.prototype,"displayField",void 0),s([n({types:ge,readOnly:!0})],a.prototype,"defaultSymbol",void 0),s([n({type:St})],a.prototype,"dynamicDataSource",void 0),s([n({type:Boolean})],a.prototype,"editingEnabled",null),s([d(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],a.prototype,"readEditingEnabled",null),s([d("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],a.prototype,"readEditingEnabledFromWebMap",null),s([E(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabled",null),s([E("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabledToWebMap",null),s([n({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([n({...j.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:O}}}}})],a.prototype,"fields",void 0),s([n(j.fieldsIndex)],a.prototype,"fieldsIndex",void 0),s([n({type:Ue,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"formTemplate",void 0),s([n({json:{read:{source:"layerDefinition.extent"}}})],a.prototype,"fullExtent",void 0),s([n({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:O,writer(e,t,r){const i=e?x.toJSON(e):null;i&&F(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:x.read}}})],a.prototype,"geometryType",void 0),s([n({json:{read:{source:"layerDefinition.hasM"}}})],a.prototype,"hasM",void 0),s([n({json:{read:{source:"layerDefinition.hasZ"}}})],a.prototype,"hasZ",void 0),s([n(dt)],a.prototype,"id",void 0),s([n({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"infoFor3D",void 0),s([n({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],a.prototype,"isTable",void 0),s([d("service","isTable",["type","geometryType"]),d("isTable",["layerDefinition.type","layerDefinition.geometryType"])],a.prototype,"readIsTable",null),s([E("web-map","isTable")],a.prototype,"writeIsTable",null),s([n(yt)],a.prototype,"labelsVisible",void 0),s([n({type:[wt],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:A},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:A},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],a.prototype,"labelingInfo",void 0),s([n((()=>{const e=$(ct);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){F(i,Se(t),r)}}},e})())],a.prototype,"opacity",void 0),s([n(ht)],a.prototype,"legendEnabled",void 0),s([n({type:["show","hide"],json:(()=>{const e=$(mt.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],a.prototype,"listMode",void 0),s([d("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],a.prototype,"readGlobalIdField",null),s([n({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:O}}}}})],a.prototype,"objectIdField",void 0),s([d("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],a.prototype,"readObjectIdField",null),s([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),s([n(j.outFields)],a.prototype,"outFields",void 0),s([n({readOnly:!0})],a.prototype,"parsedUrl",null),s([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([n(ft)],a.prototype,"popupEnabled",void 0),s([n({type:be,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),s([n({types:$e,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:De,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r==null?void 0:r.writeLayerSchema})}}})],a.prototype,"renderer",null),s([d("service","renderer",["drawingInfo.renderer","defaultSymbol"]),d("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],a.prototype,"readRenderer",null),s([n((()=>{const e=$(gt);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],a.prototype,"screenSizePerspectiveEnabled",void 0),s([n({clonable:!1})],a.prototype,"source",null),s([we("source")],a.prototype,"castSource",null),s([d("portal-item","source",["featureSet"]),d("web-map","source",["featureSet"])],a.prototype,"readSource",null),s([n({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],a.prototype,"spatialReference",void 0),s([n({type:Number})],a.prototype,"subtypeCode",void 0),s([n({type:[V]})],a.prototype,"templates",void 0),s([d("templates",["editFieldsInfo","creatorField","editorField","templates"])],a.prototype,"readTemplates",null),s([n({type:pt})],a.prototype,"timeInfo",void 0),s([n()],a.prototype,"title",void 0),s([d("service","title",["name"]),d("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],a.prototype,"readTitle",null),s([d("web-map","title",["layerDefinition.name","title"])],a.prototype,"readTitleFromWebMap",null),s([n({type:String})],a.prototype,"sublayerTitleMode",void 0),s([n({json:{read:!1}})],a.prototype,"type",void 0),s([n({type:String})],a.prototype,"typeIdField",void 0),s([d("service","typeIdField"),d("typeIdField",["layerDefinition.typeIdField"])],a.prototype,"readTypeIdField",null),s([n({type:[Q]})],a.prototype,"types",void 0),s([d("service","types",["types"]),d("types",["layerDefinition.types"])],a.prototype,"readTypes",null),s([n({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],a.prototype,"visible",void 0),s([d("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],a.prototype,"readVisible",null),a=s([S(Z)],a);const q=ve({types:_e}),Tr=a;export{Tr as default};
