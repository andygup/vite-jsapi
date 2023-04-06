import{D as l,E as h,ae as g,V as f,af as w,ag as d,ah as n,ab as u,ad as b}from"./index-21a3eccc.js";import{f as V,d as S}from"./LayerView-b3f1d450.js";import{i as _}from"./GraphicContainer-be4cf36e.js";import{o as T}from"./GraphicsView2D-7fee9ff7.js";import"./Container-19fcac34.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-94537e13.js";import"./color-fde42afc.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-055c4a37.js";import"./FeatureContainer-5aa02327.js";import"./AttributeStoreView-64b4365d.js";import"./TiledDisplayObject-36d4aa1e.js";import"./visualVariablesUtils-cbfe2b8a.js";import"./visualVariablesUtils-e7996413.js";import"./VertexArrayObject-61e767cb.js";import"./TileContainer-fb232e85.js";import"./WGLContainer-7a3704e9.js";import"./ProgramTemplate-8ac2df3c.js";import"./MaterialKey-b4a3bf89.js";import"./utils-117b34e5.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-d8c0686d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-aebf80ac.js";import"./floatRGBA-1b746c0e.js";import"./normalizeUtilsSync-3ff9f146.js";import"./projectionSupport-ba624350.js";import"./json-48e3ea08.js";import"./Matcher-21c6cd26.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-52b7aadd.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-e9b3cffd.js";import"./util-ca2664d5.js";import"./ComputedAttributeStorage-bf822cfe.js";import"./arcadeTimeUtils-746eb0b0.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new f(i.features),p=t.drawingInfo,c=r?w.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const we=y;export{we as default};