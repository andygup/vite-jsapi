import{h,dB as a,l as m,d as f,be as _,B as F,e as l,y as n,bl as v,a as b}from"./index-c18a96f3.js";import{f as I}from"./WhereClause-d48af787.js";import{d as w}from"./FeatureFilter-e84ccbbf.js";import{o as E}from"./floorFilterUtils-080a7cd2.js";import{b as d}from"./Query-f6fbedf0.js";import{x as C,i as x,I as S}from"./I3SMeshView3D-64f291c8.js";import{n as O}from"./LayerView3D-5b3c36c8.js";import{p as Q,o as j,s as q,u as H,i as A,j as D}from"./SceneLayerView-684f45d5.js";import{B as p,d as R,l as G,o as L}from"./I3SQueryFeatureStore-04f3f348.js";import{n as g}from"./I3SNode-51fa75fb.js";import{L as $}from"./I3SOverrides-03980d20.js";import{y as P,p as U,V as u}from"./I3SUtil-5dcf638f.js";import{t as M}from"./DefinitionExpressionSceneLayerView-07caccba.js";import{i as N}from"./PopupSceneLayerView-5605d270.js";import"./executionError-c92d3b85.js";import"./SceneModification-3b39a9a1.js";import"./persistable-e815bf27.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-20d0b22c.js";import"./diffUtils-2a9fee10.js";import"./Graphics3DObjectStates-8b1df283.js";import"./UniqueValueRenderer-8560c516.js";import"./ColorStop-c5089175.js";import"./colorRamps-8bdec164.js";import"./jsonUtils-976e92af.js";import"./DictionaryLoader-6a0ef31f.js";import"./LRUCache-126d04a0.js";import"./FieldsIndex-b071eb44.js";import"./heatmapUtils-103df89c.js";import"./defaults-2a29a8d1.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-ead78535.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-24cc671a.js";import"./quickselect-228eff3e.js";import"./SceneLayerWorker-f3fd9ee7.js";import"./FeatureLikeLayerView3D-e270de9e.js";import"./dehydratedFeatureComparison-4aa61d0c.js";import"./queryForSymbologySnapping-7c49f8b7.js";import"./elevationInfoUtils-0942f737.js";import"./hash-6f442295.js";import"./QueryEngine-e3cb4f5a.js";import"./normalizeUtils-55909f8c.js";import"./normalizeUtilsCommon-f4f57432.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-9410323d.js";import"./generateRendererUtils-339821e1.js";import"./FeatureSet-037cc3b1.js";import"./FeatureStore-138406a2.js";import"./BoundsStore-7e7c2c1f.js";import"./projectExtentUtils-5d5ea34d.js";import"./LayerView-045a22cc.js";import"./I3SBinaryReader-a4433526.js";import"./RenderTexture-01b4d2e8.js";import"./meshFeatureSet-2490a350.js";import"./georeference-8c87265f.js";import"./External-12af36db.js";import"./infoFor3D-5881142c.js";import"./FeatureLayerView3D-6838c26b.js";import"./FeatureLayerViewBase3D-b9ca1250.js";import"./query-e124a463.js";import"./pbfQueryUtils-c33d2f62.js";import"./pbf-355c66cc.js";import"./queryZScale-275d69e0.js";import"./EventedSet-09e3bfda.js";import"./commonProperties-797d5904.js";import"./ElevationInfo-6aa5c711.js";import"./FeatureEffect-01b60f68.js";import"./jsonUtils-266f6943.js";import"./popupUtils-10c3bae0.js";import"./RefreshableLayerView-99fe995c.js";const y=A();let s=class extends C(M(N(O(D)))){constructor(){super(...arguments),this.type="scene-layer-3d",this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{var r;P(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this.i3sOverrides=new $({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabled(){return this.layer.popupEnabled}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.filter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,o)=>this.addSqlFilter(r,o,this.logError)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get _floorFilterClause(){const e=E(this);return e!=null?I.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _objectQualitySettings(){var e,t,i;return(i=(t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.sceneService)==null?void 0:i.object}get lodFactor(){var e;return((e=this._objectQualitySettings)==null?void 0:e.lodFactor)??1}get lodCrossfadeinDuration(){return this._objectQualitySettings.lodCrossfadeinDuration??0}get lodCrossfadeoutDuration(){return this._objectQualitySettings.lodCrossfadeoutDuration??0}get lodCrossfadeUncoveredDuration(){return this._objectQualitySettings.lodCrossfadeUncoveredDuration??0}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??0}initialize(){this._fieldsHelper=new Q({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this.updatingHandles.add(()=>this.layer.renderer,t=>this.updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this.updatingHandles.add(()=>this.parsedDefinitionExpression,e),this.updatingHandles.add(()=>this.filter,e),this.updatingHandles.add(()=>this._floorFilterClause,e),this.updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this.updatingHandles.add(()=>this.viewFilter!=null?this.viewFilter.sortedObjectIds:null,e),this.updatingHandles.add(()=>this.viewFilter!=null?this.viewFilter.parsedWhereClause:null,e),this.updatingHandles.add(()=>[this.viewFilter!=null?this.viewFilter.parsedGeometry:null,this.filter!=null?this.filter.spatialRelationship:null,this.layer.filter!=null?this.layer.filter.spatialRelationship:null],()=>this._geometryFilterChange()),a()&&this.i3sOverrides.is3DOFL&&(this.updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,()=>this._filterChange()),this.updatingHandles.add(()=>this.i3sOverrides.editSessionGeometryChangedObjectIds,()=>this._filterChange())),this.handles.add(this.layer.on("apply-edits",t=>this.updatingHandles.addPromise(t.result))),this.handles.add(this.layer.on("edits",t=>this._handleEdits(t)))}destroy(){this._fieldsHelper=m(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&f.getLogger(this.declaredClass).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new d(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(i=>{if(!(i!=null&&i.features))return i;const r=this.layer;for(const o of i.features)o.layer=r,o.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=x(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new R({layerView:this,priority:_.FEATURE_QUERY_ENGINE,spatialIndex:new G({featureAdapter:new L({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,o,c)=>t({id:r,index:o,meta:c}),i,S.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:U(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof d){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then(o=>t.setFeatureIds(i,o)),r}return super.highlight(e)}createInteractiveEditSession(e){return j(this._attributeEditingContext,e)}_createLayerGraphic(e){const t=new F(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}getFilters(){const e=super.getFilters();a()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&(e.push((i,r)=>{r.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,i)}),e.push((i,r)=>{u(this.i3sOverrides.editSessionGeometryChangedObjectIds,!1,i)}));const t=this._excludeObjectIdsSorted;return t!=null&&e.push(i=>u(t,!1,i)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():d.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){a()&&q(this._attributeEditingContext,e),H(this._attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return e!=null&&e.parsedGeometry!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?g.Unmodified:g.Culled}};l([n()],s.prototype,"i3slayer",null),l([n(v)],s.prototype,"updatingProgress",void 0),l([n({type:w})],s.prototype,"filter",null),l([n({readOnly:!0})],s.prototype,"viewFilter",null),l([n(y.requiredFields)],s.prototype,"requiredFields",null),l([n(y.availableFields)],s.prototype,"availableFields",void 0),l([n()],s.prototype,"_fieldsHelper",void 0),l([n()],s.prototype,"_floorFilterClause",null),l([n()],s.prototype,"_excludeObjectIdsSorted",null),l([n()],s.prototype,"_objectQualitySettings",null),l([n()],s.prototype,"lodFactor",null),l([n()],s.prototype,"updatingProgressValue",null),s=l([b("esri.views.3d.layers.SceneLayerView3D")],s);const ot=s;export{ot as default};