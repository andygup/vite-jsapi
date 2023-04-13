import{y as p,ah as o,J as a,aB as m,ae as h,af as l,ai as g}from"./index-b4b3ae7d.js";import{L as n,a as c}from"./LayerView-60e8c838.js";import{G as d}from"./GraphicContainer-161e7e81.js";import{G as u}from"./GraphicsView2D-d4fe6747.js";import"./Container-7fca7909.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-f1756343.js";import"./color-820677f7.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./BaseGraphicContainer-8a054816.js";import"./FeatureContainer-94601824.js";import"./AttributeStoreView-917e620e.js";import"./TiledDisplayObject-c73a6816.js";import"./visualVariablesUtils-88902af8.js";import"./visualVariablesUtils-97a979f8.js";import"./VertexArrayObject-c0fe275b.js";import"./TileContainer-8bcd1916.js";import"./WGLContainer-a42a1f0b.js";import"./ProgramTemplate-4c4ab3df.js";import"./MaterialKey-6b0e16c7.js";import"./utils-699d4a1f.js";import"./heatmapUtils-5a23fa6d.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./earcut-db592379.js";import"./featureConversionUtils-b73aa4b5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./lengthUtils-ae3367a7.js";import"./vec3f32-ec4c3c20.js";import"./normalizeUtils-a85cdb25.js";import"./normalizeUtilsCommon-fdc8c13f.js";import"./ExpandedCIM-add047dc.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-828c101a.js";import"./floatRGBA-dfa15c91.js";import"./normalizeUtilsSync-ca685e74.js";import"./projectionSupport-9735a071.js";import"./json-9ae8d6f8.js";import"./labelingInfo-90efb402.js";import"./labelUtils-491f598f.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-1eb97f8f.js";import"./Matcher-9bc877e1.js";import"./tileUtils-fdb57ff2.js";import"./TurboLine-32468b34.js";import"./LRUCache-58e6960b.js";import"./MemCache-b965182b.js";import"./devEnvironmentUtils-e2e22b53.js";import"./styleUtils-f11fff25.js";import"./featureFlags-eb0cdac8.js";import"./schemaUtils-8c2b5855.js";import"./sql-336bd077.js";import"./diffUtils-bb218827.js";import"./clusterUtils-651430bd.js";import"./SizeVariable-eef1af06.js";import"./colorRamps-e7a401b6.js";import"./LegendOptions-46b1f954.js";import"./sizeVariableUtils-2914222a.js";import"./util-6d0133c9.js";import"./ComputedAttributeStorage-97a1e5ef.js";import"./FieldsIndex-a6734189.js";import"./arcadeTimeUtils-eb5ea2c5.js";import"./executionError-e2eca390.js";import"./centroid-1116d1e7.js";const w={remove(){},pause(){},resume(){}};let s=class extends n(c){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?typeof i[0]=="number"?t=i:t=i.map(e=>e&&e.uid):a.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};h([l()],s.prototype,"graphicsView",void 0);s=h([g("esri.views.2d.layers.GraphicsLayerView2D")],s);const Ei=s;export{Ei as default};
