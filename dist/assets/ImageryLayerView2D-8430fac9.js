import{ae as s,af as o,ai as f,aj as D,d as _,J as P,ah as b,be as C,bf as B,bg as I,D as x,bh as R,L as z,s as V,K as E,b5 as A,aZ as S,V as $}from"./index-175d32d0.js";import{d as U,f as M,c as O}from"./RasterVFDisplayObject-25960155.js";import{f as N,d as j}from"./LayerView-0bfae0f3.js";import{o as J}from"./GraphicsView2D-97791f2f.js";import{n as L}from"./HighlightGraphicContainer-0fa0a7e4.js";import{M as G,m as H,f as W}from"./dataUtils-257dacd6.js";import{a as K}from"./BitmapContainer-ea2cb2d3.js";import{h as Z}from"./Container-ca0c82d8.js";import{l as Q}from"./Bitmap-2237b7cf.js";import{v as X}from"./ExportStrategy-dd424c59.js";import{q as Y}from"./rasterProjectionHelper-14e10f71.js";import{T as q}from"./color-5599f865.js";import{i as tt}from"./WGLContainer-d2c666b5.js";import{b as et}from"./commonProperties-1c6cac45.js";import{b as it}from"./Query-91daeb60.js";import{d as rt}from"./popupUtils-431feddd.js";import{i as at}from"./RefreshableLayerView-0110a396.js";import"./VertexArrayObject-90380ad0.js";import"./TextureDescriptor-d0f0e66d.js";import"./enums-74e97557.js";import"./VertexElementDescriptor-2925c6af.js";import"./ExpandedCIM-652d49f1.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./MaterialKey-532bc99f.js";import"./definitions-e9823d3c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-91ef8d14.js";import"./floatRGBA-660570aa.js";import"./normalizeUtilsSync-a36bf333.js";import"./normalizeUtilsCommon-b064c045.js";import"./projectionSupport-5317a1c8.js";import"./json-48e3ea08.js";import"./labelingInfo-ffafbf0b.js";import"./labelUtils-358af0bc.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-a54641ba.js";import"./AttributeStoreView-ec64fd81.js";import"./TiledDisplayObject-2f7e7371.js";import"./visualVariablesUtils-ab0340c4.js";import"./visualVariablesUtils-bc0c668d.js";import"./Matcher-a1fdaa6a.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-9e8d1948.js";import"./featureConversionUtils-3787082f.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-8a75b10b.js";import"./LRUCache-05c2e0c8.js";import"./MemCache-8e066c91.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-659e6a41.js";import"./featureFlags-a084cf3d.js";import"./schemaUtils-5e91e5e3.js";import"./sql-d95c95ff.js";import"./diffUtils-1e0b45c5.js";import"./utils-2b389eab.js";import"./heatmapUtils-4fba0b55.js";import"./vec4f64-aa64c7e9.js";import"./clusterUtils-64f88ebd.js";import"./SizeVariable-41a3e64d.js";import"./colorRamps-f4ee9bc5.js";import"./LegendOptions-8e12359c.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-349f6f20.js";import"./util-63fe79d4.js";import"./ComputedAttributeStorage-f8bc0a4c.js";import"./FieldsIndex-2024344c.js";import"./arcadeTimeUtils-b058d7c4.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";import"./normalizeUtils-2391e42c.js";import"./BaseGraphicContainer-04e7c0e5.js";import"./FeatureContainer-5759675b.js";import"./TileContainer-a409cb42.js";import"./vec3f32-ad1dc57f.js";import"./parser-be52f54c.js";import"./ProgramTemplate-8ba0c0b6.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./ElevationInfo-ed295995.js";import"./Field-b346df3f.js";import"./fieldType-0ef39ec5.js";let h=class extends D{constructor(){super(...arguments),this.attached=!1,this.container=new Z,this.updateRequested=!1,this.type="imagery",this._bitmapView=new K}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{_(e)||P.getLogger(this.declaredClass).error(e)})}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new X({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{_(t)||P.getLogger(this.declaredClass).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(e)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=G(i,e);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var d;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,e,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new Q(n.pixelBlock,(d=n.extent)==null?void 0:d.clone(),a.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const st=h;class ot extends tt{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[U],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends D{constructor(t){super(t),this._loading=null,this.update=C((e,i)=>this._update(e,i).catch(r=>{_(r)||P.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:a}=t.state,n=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,d]=t.state.size;this._loading=this.fetchPixels(n,l,d,i);const p=await this._loading;this._addToDisplay(p,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=t,n=new M(a);n.offset=[0,0],n.symbolizerParameters=e,n.rawPixelData=t,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*e.symbolTileSize,n.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([f("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const nt=y;let m=class extends I{constructor(){super(...arguments),this.attached=!1,this.container=new ot,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:d,height:p}=H(t,e,i,n,a);if(a!=null&&!a.intersects(t))return{extent:l,pixelBlock:null};const c={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===c.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,d,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=c;const w=g==null?void 0:g.pixelBlock;return w==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?W(w,"vector-uv"):w}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new nt({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(x(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),R),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams)}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&r&&a}async _getProjectedFullExtent(t){try{return await Y(this.layer.fullExtent,t)}catch{try{const i=(await z(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],m.prototype,"attached",void 0),s([o()],m.prototype,"container",void 0),s([o()],m.prototype,"layer",void 0),s([o()],m.prototype,"timeExtent",void 0),s([o()],m.prototype,"type",void 0),s([o()],m.prototype,"view",void 0),s([o()],m.prototype,"updating",null),m=s([f("esri.views.2d.layers.imagery.VectorFieldView2D")],m);const lt=m,ht=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:a}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a,l=rt(a,r);if(!n||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const d=await l.getRequiredFields(),p=new it;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=d,p.outSpatialReference=i.spatialReference;const{resolution:c,spatialReference:g}=this.view,w=this.view.type==="2d"?new E(c,c,g):new E(.5*c,.5*c,g),{returnTopmostRaster:u,showNoDataRecords:T}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:w,showNoDataRecords:T,signal:r!=null?r.signal:null};return a.queryVisibleRasters(p,k).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([o()],e.prototype,"layer",void 0),s([o()],e.prototype,"suspended",void 0),s([o(et)],e.prototype,"timeExtent",void 0),s([o()],e.prototype,"view",void 0),e=s([f("esri.views.layers.ImageryLayerView")],e),e};let v=class extends ht(at(N(j))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new A,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new L(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([x(()=>this.layer.blendMode??"normal",t=>this.subview&&(this.subview.container.blendMode=t),R),x(()=>this.layer.effect??null,t=>this.subview&&(this.subview.container.effect=t),R),x(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},S),x(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),x(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:$.isCollection(t)?t.getItemAt(0):t)instanceof b))return{remove:()=>{}};let i=[];return Array.isArray(t)||$.isCollection(t)?i=t.map(r=>r.clone()):t instanceof b&&(i=[t.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:a}=this.subview;if(a===e)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new st({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new lt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new O({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0),t.container.blendMode=this.layer.blendMode,t.container.effect=this.layer.effect)}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([o()],v.prototype,"pixelData",null),s([o()],v.prototype,"subview",void 0),v=s([f("esri.views.2d.layers.ImageryLayerView2D")],v);const Oe=v;export{Oe as default};
