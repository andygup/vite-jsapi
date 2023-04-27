import{ae as o,af as p,ai as h,b5 as g,d as l,J as d,D as u}from"./index-175d32d0.js";import{a as c}from"./BitmapContainer-ea2cb2d3.js";import{f as y,d as f}from"./LayerView-0bfae0f3.js";import{o as x}from"./GraphicsView2D-97791f2f.js";import{n as w}from"./HighlightGraphicContainer-0fa0a7e4.js";import{v}from"./ExportStrategy-dd424c59.js";import{b as _}from"./commonProperties-1c6cac45.js";import{m as H}from"./ExportImageParameters-327ec2c9.js";import{i as I}from"./RefreshableLayerView-0110a396.js";import{P,r as V}from"./drapedUtils-e7b58219.js";import"./WGLContainer-d2c666b5.js";import"./definitions-e9823d3c.js";import"./VertexArrayObject-90380ad0.js";import"./TextureDescriptor-d0f0e66d.js";import"./enums-74e97557.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-5599f865.js";import"./enums-55085e26.js";import"./ProgramTemplate-8ba0c0b6.js";import"./MaterialKey-532bc99f.js";import"./utils-2b389eab.js";import"./heatmapUtils-4fba0b55.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-ca0c82d8.js";import"./parser-be52f54c.js";import"./earcut-8a75b10b.js";import"./featureConversionUtils-3787082f.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./ExpandedCIM-652d49f1.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-91ef8d14.js";import"./floatRGBA-660570aa.js";import"./normalizeUtilsSync-a36bf333.js";import"./normalizeUtilsCommon-b064c045.js";import"./projectionSupport-5317a1c8.js";import"./json-48e3ea08.js";import"./labelingInfo-ffafbf0b.js";import"./labelUtils-358af0bc.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-a54641ba.js";import"./AttributeStoreView-ec64fd81.js";import"./TiledDisplayObject-2f7e7371.js";import"./visualVariablesUtils-ab0340c4.js";import"./visualVariablesUtils-bc0c668d.js";import"./Matcher-a1fdaa6a.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-9e8d1948.js";import"./LRUCache-05c2e0c8.js";import"./MemCache-8e066c91.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-659e6a41.js";import"./featureFlags-a084cf3d.js";import"./schemaUtils-5e91e5e3.js";import"./sql-d95c95ff.js";import"./diffUtils-1e0b45c5.js";import"./clusterUtils-64f88ebd.js";import"./SizeVariable-41a3e64d.js";import"./colorRamps-f4ee9bc5.js";import"./LegendOptions-8e12359c.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-349f6f20.js";import"./util-63fe79d4.js";import"./ComputedAttributeStorage-f8bc0a4c.js";import"./FieldsIndex-2024344c.js";import"./arcadeTimeUtils-b058d7c4.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";import"./normalizeUtils-2391e42c.js";import"./BaseGraphicContainer-04e7c0e5.js";import"./FeatureContainer-5759675b.js";import"./TileContainer-a409cb42.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-2237b7cf.js";import"./ElevationInfo-ed295995.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-e809c226.js";import"./scaleUtils-2a7965d3.js";import"./popupUtils-431feddd.js";const U=t=>{let i=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return o([p()],i.prototype,"exportImageParameters",void 0),o([p({readOnly:!0})],i.prototype,"floors",null),o([p({readOnly:!0})],i.prototype,"exportImageVersion",null),o([p()],i.prototype,"layer",void 0),o([p()],i.prototype,"suspended",void 0),o([p(_)],i.prototype,"timeExtent",void 0),i=o([h("esri.views.layers.MapImageLayerView")],i),i};let a=class extends U(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(r=>{l(r)||d.getLogger(this.declaredClass).error(r)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:r}=this.layer,e=r>=10.3,n=r>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new w(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(s,m)=>V(s,m,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,m)=>{this._highlightView.graphicUpdateHandler({graphic:s,property:m})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:e,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,r,e){return this.layer.fetchImage(t,i,r,{timeExtent:this.timeExtent,floors:this.floors,...e})}fetchImageBitmap(t,i,r,e){return this.layer.fetchImageBitmap(t,i,r,{timeExtent:this.timeExtent,floors:this.floors,...e})}highlight(t){return this._popupHighlightHelper.highlight(t)}};o([p()],a.prototype,"strategy",void 0),o([p()],a.prototype,"updating",void 0),a=o([h("esri.views.2d.layers.MapImageLayerView2D")],a);const oi=a;export{oi as default};
