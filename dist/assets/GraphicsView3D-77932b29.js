import{s as i,l as p,e,y as s,o as a,a as c,m as h}from"./index-d29f6b97.js";import{x as n}from"./GraphicsProcessor-5c0bb4fd.js";import"./diffUtils-149561ab.js";import"./Query-02316d46.js";import"./Graphics3DObjectStates-e0749d1f.js";import"./UniqueValueRenderer-6bfde73c.js";import"./ColorStop-c9dfec3d.js";import"./colorRamps-5cc134e8.js";import"./jsonUtils-a30c08d1.js";import"./DictionaryLoader-d7f4a828.js";import"./LRUCache-2af9f319.js";import"./FieldsIndex-f92177f9.js";import"./heatmapUtils-b7e5e306.js";import"./defaults-a3afa070.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-faf2ce2d.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-5ef79871.js";import"./quickselect-6ad44cba.js";let t=class extends i(h){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new l}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){var r;return(r=this.view)==null?void 0:r.graphics}get loadedGraphics(){return this.graphics}get updating(){var r;return!!((r=this.processor)!=null&&r.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,o){return this.processor.whenGraphicBounds(r,o)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r,o){return(o==null?void 0:o.clientGraphics)??[]}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};e([s({readOnly:!0})],t.prototype,"graphics",null),e([s()],t.prototype,"loadedGraphics",null),e([s({readOnly:!0})],t.prototype,"updating",null),e([s({constructOnly:!0})],t.prototype,"view",void 0),e([s()],t.prototype,"processor",void 0),e([s({type:Boolean})],t.prototype,"slicePlaneEnabled",void 0),e([s()],t.prototype,"layer",void 0),t=e([c("esri.views.3d.layers.GraphicsView3D")],t);class l extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const E=t;export{E as default};
