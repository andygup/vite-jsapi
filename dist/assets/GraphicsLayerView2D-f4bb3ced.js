import{B as p,ai as a,V as o,aj as g,ab as s,ac as m,ad as l}from"./index-0265f5b0.js";import{f as c,d as n}from"./LayerView-6cf732bb.js";import{i as d}from"./GraphicContainer-69175c4f.js";import{o as u}from"./GraphicsView2D-f2dbf5fb.js";import"./Container-e5615892.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-618a0a5f.js";import"./color-4853d80b.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-0f4aeeb3.js";import"./FeatureContainer-af9cf5b4.js";import"./AttributeStoreView-574fe65e.js";import"./TiledDisplayObject-1ef3e0c5.js";import"./visualVariablesUtils-ca15c27c.js";import"./visualVariablesUtils-1006a8fd.js";import"./VertexArrayObject-c61bbc17.js";import"./TileContainer-c51301cd.js";import"./WGLContainer-e667428a.js";import"./ProgramTemplate-75125e80.js";import"./MaterialKey-43000965.js";import"./utils-7f7f27e3.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-2378cbd8.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-5a38db0c.js";import"./floatRGBA-d5a14398.js";import"./normalizeUtilsSync-059a3506.js";import"./projectionSupport-1c354c95.js";import"./json-48e3ea08.js";import"./Matcher-b67bd870.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-87ff5f30.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-9cee2cfd.js";import"./util-66bf9f6b.js";import"./ComputedAttributeStorage-bc2984dd.js";import"./arcadeTimeUtils-58670096.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const gi=e;export{gi as default};
