import{ah as u,V as f,aB as w,D as h,E as p,an as y,ae as _,ai as V}from"./index-6e11f365.js";import{h as v}from"./Container-491c9a70.js";import{r as C}from"./GroupContainer-1669fa18.js";import{f as H,d as b}from"./LayerView-05a5b0a6.js";import{i as m}from"./GraphicContainer-318c3d97.js";import{o as c}from"./GraphicsView2D-9e56b3dd.js";import"./parser-2c9af7f8.js";import"./definitions-e9823d3c.js";import"./enums-74e97557.js";import"./TextureDescriptor-6f1ebf7c.js";import"./WGLContainer-ff1fed9a.js";import"./VertexArrayObject-0a6bf41d.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-6aa54378.js";import"./enums-55085e26.js";import"./ProgramTemplate-dfbe8f57.js";import"./MaterialKey-d4a29da3.js";import"./utils-3c7bffcd.js";import"./heatmapUtils-82abfb64.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-fe125474.js";import"./featureConversionUtils-ea75af90.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BaseGraphicContainer-f166deb8.js";import"./FeatureContainer-76d7365c.js";import"./AttributeStoreView-fcf24ea3.js";import"./TiledDisplayObject-bf43e3a3.js";import"./visualVariablesUtils-26533cc8.js";import"./visualVariablesUtils-c6c91d03.js";import"./TileContainer-6027f71b.js";import"./lengthUtils-9743f155.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtils-6225a887.js";import"./normalizeUtilsCommon-80217ab8.js";import"./ExpandedCIM-a7fa0210.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-4a16b4e7.js";import"./floatRGBA-4dfc3dfe.js";import"./normalizeUtilsSync-1c027b89.js";import"./projectionSupport-7373e31c.js";import"./json-48e3ea08.js";import"./labelingInfo-ac2c5970.js";import"./labelUtils-01d56de2.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-c398a7e6.js";import"./Matcher-a2b28255.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-cc066a0e.js";import"./LRUCache-3361c9d5.js";import"./MemCache-1033102b.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-c8bd0c80.js";import"./featureFlags-47ea12bc.js";import"./schemaUtils-5636eb98.js";import"./sql-662efd73.js";import"./diffUtils-d7f96f30.js";import"./clusterUtils-0648c051.js";import"./SizeVariable-5b39cf61.js";import"./colorRamps-4404e80a.js";import"./LegendOptions-1566f85b.js";import"./sizeVariableUtils-d4870b0d.js";import"./util-6683e0c8.js";import"./ComputedAttributeStorage-e0df0c2e.js";import"./FieldsIndex-f7d03105.js";import"./arcadeTimeUtils-6c8a5975.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";const g="sublayers",n="layerView",T=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(b){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new C}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&o.popupTemplate&&(r.popupTemplate=o.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):T}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const o=new m(this.view.featuresTilingScheme),r=new c({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:o});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,a=>r.container.visible=a,p),h(()=>r.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),g)}detach(){this._destroyGraphicsViews(),this.removeHandles(g)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const o=new v,r=new m(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new c({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",a.graphicUpdateHandler),h(()=>s.visible,d=>a.container.visible=d,p),h(()=>a.updating,()=>this.notifyChange("updating"),p)],n),o.addChild(a.container),this.container.addChild(o),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const Ni=l;export{Ni as default};