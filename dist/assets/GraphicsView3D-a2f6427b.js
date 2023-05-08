import{s as i,l as p,e,y as s,o as a,a as c,m as h}from"./index-bdad94d1.js";import{x as n}from"./GraphicsProcessor-6e80ef27.js";import"./diffUtils-a0d8d1c6.js";import"./Query-9dbb4c19.js";import"./Graphics3DObjectStates-75ef2332.js";import"./UniqueValueRenderer-0032343a.js";import"./ColorStop-4e0fcd9e.js";import"./colorRamps-cdef51b0.js";import"./jsonUtils-4dabb521.js";import"./DictionaryLoader-5abfccef.js";import"./FieldsIndex-9b4d6ad9.js";import"./heatmapUtils-b945ba0a.js";import"./defaults-d902f6e7.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-ddc754e2.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-a046bfbc.js";import"./quickselect-e1cde8b2.js";let t=class extends i(h){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new l}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){var r;return(r=this.view)==null?void 0:r.graphics}get loadedGraphics(){return this.graphics}get updating(){var r;return!!((r=this.processor)!=null&&r.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,o){return this.processor.whenGraphicBounds(r,o)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r,o){return(o==null?void 0:o.clientGraphics)??[]}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};e([s({readOnly:!0})],t.prototype,"graphics",null),e([s()],t.prototype,"loadedGraphics",null),e([s({readOnly:!0})],t.prototype,"updating",null),e([s({constructOnly:!0})],t.prototype,"view",void 0),e([s()],t.prototype,"processor",void 0),e([s({type:Boolean})],t.prototype,"slicePlaneEnabled",void 0),e([s()],t.prototype,"layer",void 0),t=e([c("esri.views.3d.layers.GraphicsView3D")],t);class l extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const k=t;export{k as default};
