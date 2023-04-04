import{B as p,ai as a,V as o,aj as g,ab as s,ac as m,ad as l}from"./index-e1d30004.js";import{f as c,d as n}from"./LayerView-b379b6c2.js";import{i as d}from"./GraphicContainer-c81d5ca9.js";import{o as u}from"./GraphicsView2D-21f7d1fa.js";import"./Container-3b957f51.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-a64c7d5d.js";import"./color-a87af45a.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-a6c7ffcb.js";import"./FeatureContainer-4a18ad46.js";import"./AttributeStoreView-22c4864f.js";import"./TiledDisplayObject-71eee758.js";import"./visualVariablesUtils-d59cfcd9.js";import"./visualVariablesUtils-4856a557.js";import"./VertexArrayObject-36a67124.js";import"./TileContainer-70b13c29.js";import"./WGLContainer-4b22933a.js";import"./ProgramTemplate-99344654.js";import"./MaterialKey-1143b332.js";import"./utils-98382753.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-0ff0446e.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-9a3641a9.js";import"./floatRGBA-3bf773ec.js";import"./normalizeUtilsSync-a9493313.js";import"./projectionSupport-fc16ea24.js";import"./json-48e3ea08.js";import"./Matcher-32ed4360.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-57bbf99c.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-fba4c809.js";import"./util-483ccdfc.js";import"./ComputedAttributeStorage-b498a8b2.js";import"./arcadeTimeUtils-151d71ab.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const gi=e;export{gi as default};
