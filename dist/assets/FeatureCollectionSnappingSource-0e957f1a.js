import{m as b,g as c,h,ai as E,df as s,e as r,y as a,a as F,X as V}from"./index-c18a96f3.js";import{m as C}from"./elevationInfoUtils-0942f737.js";import{E as D,b as $}from"./DimensionAnalysisView3D-940dc329.js";import{i as A,o as I}from"./queryEngineUtils-26a45d4c.js";import{i as m,r as R,n as v}from"./symbologySnappingCandidates-016b4418.js";import"./LineVisualElement-b8f3b4e1.js";import"./LengthDimension-337b3314.js";import"./Segment-9c153a75.js";import"./unitFormatUtils-39366885.js";import"./analysisViewUtils-69ec7df1.js";import"./ImageMaterial-407709d5.js";import"./Factory-da39f36c.js";import"./RightAngleQuadVisualElement-c5560eb4.js";import"./VisualElementResources-34ee4b9f.js";import"./PointVisualElement-1e124b61.js";import"./colorUtils-c0f43caf.js";import"./EditGeometryOperations-a08283b2.js";import"./dehydratedFeatureComparison-4aa61d0c.js";import"./RenderTexture-01b4d2e8.js";import"./VertexSnappingCandidate-8f07d060.js";import"./LRUCache-126d04a0.js";let o=class extends b{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return m();const n=async(p,l)=>(await V(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(p,l);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n,spatialReference:e.spatialReference})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return R(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(i,n)=>{const p=await e.whenLayerView(t);return s(n),p.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):v()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;C(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.processor)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),E(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(e,t){var u;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const p=D(i),l=$(e,((u=this.view)==null?void 0:u.type)??"2d",p),d=await n.querySnapping(l,{signal:t});s(t);const y=await this._snappingElevationAligner.alignCandidates(d.candidates,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const S=g.length===0?y:[...y,...g],w=this._snappingElevationFilter.filter(l,S),_=this._getGroundElevation;return w.map(f=>A(f,_))}get _getGroundElevation(){return I(this.view)}};r([a({constructOnly:!0})],o.prototype,"layerSource",void 0),r([a({constructOnly:!0})],o.prototype,"view",void 0),r([a()],o.prototype,"_snappingElevationAligner",null),r([a()],o.prototype,"_snappingElevationFilter",null),r([a()],o.prototype,"_symbologySnappingFetcher",null),r([a()],o.prototype,"_layerView3D",void 0),r([a()],o.prototype,"_symbologySnappingSupported",null),r([a()],o.prototype,"_getGroundElevation",null),o=r([F("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],o);export{o as FeatureCollectionSnappingSource};