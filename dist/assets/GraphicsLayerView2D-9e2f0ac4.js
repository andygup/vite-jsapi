import{y as p,ah as o,J as a,aB as m,ae as h,af as l,ai as g}from"./index-0ea7d266.js";import{L as n,a as c}from"./LayerView-aa08b165.js";import{G as d}from"./GraphicContainer-1f19e111.js";import{G as u}from"./GraphicsView2D-b91fd81a.js";import"./Container-7deba39b.js";import"./parser-378b4989.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-86971943.js";import"./color-24f75376.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./BaseGraphicContainer-9cff15ef.js";import"./FeatureContainer-82a050b9.js";import"./AttributeStoreView-b500d357.js";import"./TiledDisplayObject-11c5dd77.js";import"./visualVariablesUtils-cd4f608f.js";import"./visualVariablesUtils-967bb046.js";import"./VertexArrayObject-f389bee6.js";import"./TileContainer-e8b8aec4.js";import"./WGLContainer-3bc2c49b.js";import"./ProgramTemplate-b70e7aca.js";import"./MaterialKey-61df849d.js";import"./utils-b2ef2fd1.js";import"./heatmapUtils-47f2d9fb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./earcut-db592379.js";import"./featureConversionUtils-70bb5e62.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./lengthUtils-bc57f38a.js";import"./vec3f32-ec4c3c20.js";import"./normalizeUtils-75ecc35a.js";import"./normalizeUtilsCommon-c67d270a.js";import"./ExpandedCIM-dcae6e07.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-07d350f3.js";import"./floatRGBA-79634f69.js";import"./normalizeUtilsSync-2cc5922f.js";import"./projectionSupport-8ce20712.js";import"./json-9ae8d6f8.js";import"./labelingInfo-00dd8611.js";import"./labelUtils-6d9ec360.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-f828afa2.js";import"./Matcher-bcbe2e94.js";import"./tileUtils-fdb57ff2.js";import"./TurboLine-f24e8b0e.js";import"./LRUCache-fb59e061.js";import"./MemCache-e783d117.js";import"./devEnvironmentUtils-e2e22b53.js";import"./styleUtils-c7710d4b.js";import"./featureFlags-d265949d.js";import"./schemaUtils-b7aedaaa.js";import"./sql-a6f6c9bf.js";import"./diffUtils-b0771538.js";import"./clusterUtils-6c781da2.js";import"./SizeVariable-0f7c14c6.js";import"./colorRamps-fd437087.js";import"./LegendOptions-360b2985.js";import"./sizeVariableUtils-2914222a.js";import"./util-77bd07f6.js";import"./ComputedAttributeStorage-2ec292e2.js";import"./FieldsIndex-e2dec42a.js";import"./arcadeTimeUtils-b7ab261c.js";import"./executionError-e2eca390.js";import"./centroid-1116d1e7.js";const w={remove(){},pause(){},resume(){}};let s=class extends n(c){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?typeof i[0]=="number"?t=i:t=i.map(e=>e&&e.uid):a.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};h([l()],s.prototype,"graphicsView",void 0);s=h([g("esri.views.2d.layers.GraphicsLayerView2D")],s);const Ei=s;export{Ei as default};