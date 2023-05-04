import{bt as m,h as s,B as n,e as i,y as o,bl as l,a as d}from"./index-c18a96f3.js";import{x as h}from"./I3SMeshView3D-64f291c8.js";import{n as c}from"./LayerView3D-5b3c36c8.js";import{d as u}from"./LayerView-045a22cc.js";import"./I3SOverrides-03980d20.js";import"./I3SNode-51fa75fb.js";import"./I3SUtil-5dcf638f.js";import"./Query-f6fbedf0.js";import"./I3SBinaryReader-a4433526.js";import"./RenderTexture-01b4d2e8.js";import"./meshFeatureSet-2490a350.js";import"./georeference-8c87265f.js";import"./External-12af36db.js";import"./infoFor3D-5881142c.js";import"./FeatureSet-037cc3b1.js";import"./FeatureLayerView3D-6838c26b.js";import"./FeatureLayerViewBase3D-b9ca1250.js";import"./FeatureLikeLayerView3D-e270de9e.js";import"./dehydratedFeatureComparison-4aa61d0c.js";import"./queryForSymbologySnapping-7c49f8b7.js";import"./elevationInfoUtils-0942f737.js";import"./hash-6f442295.js";import"./diffUtils-2a9fee10.js";import"./UniqueValueRenderer-8560c516.js";import"./ColorStop-c5089175.js";import"./colorRamps-8bdec164.js";import"./Graphics3DObjectStates-8b1df283.js";import"./jsonUtils-976e92af.js";import"./DictionaryLoader-6a0ef31f.js";import"./LRUCache-126d04a0.js";import"./FieldsIndex-b071eb44.js";import"./heatmapUtils-103df89c.js";import"./defaults-2a29a8d1.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-ead78535.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-24cc671a.js";import"./quickselect-228eff3e.js";import"./FeatureFilter-e84ccbbf.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-e3cb4f5a.js";import"./normalizeUtils-55909f8c.js";import"./normalizeUtilsCommon-f4f57432.js";import"./WhereClause-d48af787.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-9410323d.js";import"./generateRendererUtils-339821e1.js";import"./FeatureStore-138406a2.js";import"./BoundsStore-7e7c2c1f.js";import"./projectExtentUtils-5d5ea34d.js";import"./query-e124a463.js";import"./pbfQueryUtils-c33d2f62.js";import"./pbf-355c66cc.js";import"./queryZScale-275d69e0.js";import"./EventedSet-09e3bfda.js";import"./commonProperties-797d5904.js";import"./ElevationInfo-6aa5c711.js";import"./FeatureEffect-01b60f68.js";import"./jsonUtils-266f6943.js";import"./popupUtils-10c3bae0.js";import"./RefreshableLayerView-99fe995c.js";import"./SceneModification-3b39a9a1.js";import"./persistable-e815bf27.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-20d0b22c.js";import"./SceneLayerWorker-f3fd9ee7.js";const g=.2;let r=class extends h(c(u)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=m.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,e,p,a;return((a=(p=(e=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:e.sceneService)==null?void 0:p.integratedMesh)==null?void 0:a.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?g:1}get layerPopupEnabled(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),s),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new n;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),s),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(l)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([d("esri.views.3d.layers.SceneLayerView3D")],r);const Dt=r;export{Dt as default};
