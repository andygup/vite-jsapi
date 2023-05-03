import{e as t,y as e,a as o,K as a}from"./index-ebffac9a.js";import{_ as s}from"./FeatureLayerViewBase3D-799b8adc.js";import"./FeatureLikeLayerView3D-df7ffa8b.js";import"./Query-d081b67e.js";import"./dehydratedFeatureComparison-9f0d16f0.js";import"./queryForSymbologySnapping-cc63b5a9.js";import"./elevationInfoUtils-2af8459d.js";import"./hash-6f442295.js";import"./diffUtils-070c5609.js";import"./UniqueValueRenderer-1e273e84.js";import"./ColorStop-022cb10b.js";import"./colorRamps-252dbf2c.js";import"./Graphics3DObjectStates-0e8d1f21.js";import"./jsonUtils-2e3cf42f.js";import"./DictionaryLoader-f7a481a0.js";import"./LRUCache-bcacffcf.js";import"./FieldsIndex-ed9267b4.js";import"./heatmapUtils-202eebb3.js";import"./defaults-2d143f10.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-5d00e1ff.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-c583d77d.js";import"./quickselect-f03bc622.js";import"./FeatureFilter-bb432d61.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-40128979.js";import"./normalizeUtils-d72d23be.js";import"./normalizeUtilsCommon-bca31cde.js";import"./WhereClause-1a200ab0.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-b59ef339.js";import"./generateRendererUtils-ffcb0dc5.js";import"./FeatureSet-4557a301.js";import"./FeatureStore-6d3abbd6.js";import"./BoundsStore-5433ad45.js";import"./projectExtentUtils-314a618e.js";import"./LayerView3D-8a020d29.js";import"./query-44ffa5b4.js";import"./pbfQueryUtils-351b2de5.js";import"./pbf-3ba7f9bf.js";import"./queryZScale-29014927.js";import"./EventedSet-55ade60e.js";import"./commonProperties-50fc1190.js";import"./ElevationInfo-b2766669.js";import"./FeatureEffect-9ac45330.js";import"./jsonUtils-cb5066f8.js";import"./popupUtils-8718a4ab.js";import"./LayerView-83293bbb.js";import"./RefreshableLayerView-78616cab.js";const l=p=>{let r=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([e()],r.prototype,"layer",void 0),t([e({readOnly:!0})],r.prototype,"availableFields",null),r=t([o("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends l(s){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([e()],i.prototype,"layer",void 0),i=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],i);const sr=i;export{sr as default};
