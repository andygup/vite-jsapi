import{V as i,am as n,ab as r,ac as s,ak as l,ad as o}from"./index-0265f5b0.js";import{f as h,d}from"./LayerView-6cf732bb.js";import"./Container-e5615892.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-618a0a5f.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};r([s({cast:l})],t.prototype,"layerViews",null),r([s({readOnly:!0})],t.prototype,"updatingProgress",null),t=r([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const m=t;export{m as default};
