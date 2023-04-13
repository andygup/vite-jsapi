import{ai as u,V as f,aj as w,D as o,E as p,a_ as y,ab as _,ad as V}from"./index-9f03d686.js";import{h as v}from"./Container-983c644e.js";import{r as C}from"./GroupContainer-78c5f81b.js";import{f as b,d as H}from"./LayerView-9f2cdb40.js";import{i as c}from"./GraphicContainer-f0048c55.js";import{o as g}from"./GraphicsView2D-f04f89e0.js";import"./definitions-43101aab.js";import"./enums-74e97557.js";import"./Texture-43db1794.js";import"./WGLContainer-01faf576.js";import"./VertexArrayObject-a9648fde.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-b838c155.js";import"./enums-55085e26.js";import"./ProgramTemplate-053d0c9b.js";import"./MaterialKey-3bd82cb0.js";import"./utils-e884b172.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./BaseGraphicContainer-0d197f46.js";import"./FeatureContainer-337f1acf.js";import"./AttributeStoreView-2236bda4.js";import"./TiledDisplayObject-56d5c29f.js";import"./visualVariablesUtils-9c29b7c3.js";import"./visualVariablesUtils-1400c8a8.js";import"./TileContainer-e7d3cbbc.js";import"./ExpandedCIM-6cea9dff.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-972531c3.js";import"./floatRGBA-8960ccf7.js";import"./normalizeUtilsSync-76cf6653.js";import"./projectionSupport-622d62b7.js";import"./json-48e3ea08.js";import"./Matcher-6fbf6c3f.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-27fc11fb.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-408a96b1.js";import"./util-1709f557.js";import"./ComputedAttributeStorage-124a0895.js";import"./arcadeTimeUtils-cd0c0acc.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";const m="sublayers",n="layerView",T=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends b(H){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new C}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):T}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([o(()=>s.visible,h=>r.container.visible=h,p),o(()=>r.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new v,r=new c(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const h=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",h.graphicUpdateHandler),o(()=>s.visible,d=>h.container.visible=d,p),o(()=>h.updating,()=>this.notifyChange("updating"),p)],n),a.addChild(h.container),this.container.addChild(a),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const _i=l;export{_i as default};
