import{J as s,bd as n,ae as a,af as i,bc as o,ai as l}from"./index-b4b3ae7d.js";import{L as d,a as h}from"./LayerView-60e8c838.js";import"./Container-7fca7909.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-f1756343.js";let r=class extends d(h){constructor(e){super(e),this.layerViews=new s}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,t)=>e+t.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};a([i({cast:o})],r.prototype,"layerViews",null);a([i({readOnly:!0})],r.prototype,"updatingProgress",null);r=a([l("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const _=r;export{_ as default};
