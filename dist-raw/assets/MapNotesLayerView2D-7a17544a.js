import{ah as u,J as f,aB as w,A as h,B as p,an as y,ae as V,ai as _}from"./index-468a9268.js";import{C}from"./Container-f10645ec.js";import{G as v}from"./GroupContainer-2713013b.js";import{L as H,a as b}from"./LayerView-747efb45.js";import{G as c}from"./GraphicContainer-1fc597a3.js";import{G as m}from"./GraphicsView2D-a0ec88f6.js";import"./parser-0c644652.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-8d60c85d.js";import"./WGLContainer-4ea3d7ba.js";import"./VertexArrayObject-06314636.js";import"./VertexElementDescriptor-24e04d97.js";import"./color-9ac858bf.js";import"./enums-eb6e4255.js";import"./ProgramTemplate-91d2aab2.js";import"./MaterialKey-72ecadf9.js";import"./utils-049d9020.js";import"./heatmapUtils-adcbaceb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./earcut-db592379.js";import"./featureConversionUtils-78a5344c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./BaseGraphicContainer-0c897a35.js";import"./FeatureContainer-587b74e8.js";import"./AttributeStoreView-29c578b3.js";import"./TiledDisplayObject-6720b2c5.js";import"./visualVariablesUtils-f0ac958d.js";import"./visualVariablesUtils-a3bf0888.js";import"./TileContainer-9941a0f1.js";import"./lengthUtils-edd0ce65.js";import"./vec3f32-ec4c3c20.js";import"./normalizeUtils-9dd6c69b.js";import"./normalizeUtilsCommon-6cabd780.js";import"./ExpandedCIM-3d5be9a7.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-6f8bf3ac.js";import"./floatRGBA-7208c0c2.js";import"./normalizeUtilsSync-bef12c2c.js";import"./projectionSupport-66923e94.js";import"./json-9ae8d6f8.js";import"./labelingInfo-94054623.js";import"./labelUtils-e4e35bc9.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-123a2bd9.js";import"./Matcher-7d012cab.js";import"./tileUtils-fdb57ff2.js";import"./TurboLine-e25b7a60.js";import"./LRUCache-d3406418.js";import"./MemCache-3df47c80.js";import"./devEnvironmentUtils-e2e22b53.js";import"./styleUtils-cc56472a.js";import"./featureFlags-2a723cce.js";import"./schemaUtils-4d604596.js";import"./sql-50f1dd02.js";import"./diffUtils-71027438.js";import"./clusterUtils-a3a72d39.js";import"./SizeVariable-e8cc32d6.js";import"./colorRamps-4cbb7a49.js";import"./LegendOptions-dcb522eb.js";import"./sizeVariableUtils-2914222a.js";import"./util-0444ec7c.js";import"./ComputedAttributeStorage-7f1f2893.js";import"./FieldsIndex-ab7b931c.js";import"./arcadeTimeUtils-e7784ef1.js";import"./executionError-e2eca390.js";import"./centroid-1116d1e7.js";const g="sublayers",n="layerView",L=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(b){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new v}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){if(this._graphicsViewsFeatureCollectionMap!=null){yield*this._graphicsViewsFeatureCollectionMap.keys();return}if(this._graphicsViews!=null){yield*this._graphicsViews;return}yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),s=>{const a=s.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(s);for(const r of a)!r.popupTemplate&&o.popupTemplate&&(r.popupTemplate=o.popupTemplate),r.sourceLayer=r.layer=this.layer}return a}).flat().map(s=>({type:"graphic",graphic:s,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?typeof i[0]=="number"?t=i:t=i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):L}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new c(this.view.featuresTilingScheme),o=new m({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(o,s),this.container.addChild(o.container),this.addHandles([h(()=>s.visible,r=>o.container.visible=r,p),h(()=>o.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),g)}detach(){this._destroyGraphicsViews(),this.removeHandles(g)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new C,o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const r=new m({view:t,graphics:s.graphics,requestUpdateCallback:e,container:o});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,d=>r.container.visible=d,p),h(()=>r.updating,()=>this.notifyChange("updating"),p)],n),a.addChild(r.container),this.container.addChild(a),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=V([_("esri.views.2d.layers.MapNotesLayerView2D")],l);const Ki=l;export{Ki as default};