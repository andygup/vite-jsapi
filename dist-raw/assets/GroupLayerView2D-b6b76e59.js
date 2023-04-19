import{ae as a,af as n,bc as d,ai as h,J as V,A as l,aZ as o,bd as u}from"./index-0cbe37a0.js";import{G as w}from"./GroupContainer-5f77b909.js";import{a as m,L as c}from"./LayerView-3efbec1b.js";import"./WGLContainer-dd6a26c0.js";import"./definitions-3f56d206.js";import"./VertexArrayObject-33fced1a.js";import"./TextureDescriptor-1f8c554e.js";import"./enums-08489827.js";import"./VertexElementDescriptor-24e04d97.js";import"./color-1b66ad26.js";import"./enums-eb6e4255.js";import"./ProgramTemplate-c0332644.js";import"./MaterialKey-e90d5ee5.js";import"./utils-c4b4ba96.js";import"./heatmapUtils-c9f41040.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./Container-8061ac15.js";import"./parser-4c0b00b2.js";import"./_commonjsHelpers-725317a4.js";import"./earcut-db592379.js";import"./featureConversionUtils-f0b03e2b.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";let t=class extends m{constructor(i){super(i),this.type="group",this.layerViews=new V}destroy(){this.handles.removeAll();const i=this.layerViews.toArray();for(const e of i)e.destroy();this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",u(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const r=this._findLayerViewForLayer(e);return!!(r!=null&&r.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder(),i==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(r=>l(()=>r.visible,s=>this._applyVisibility(()=>{s!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(s?r:null)),o)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var r,s;this._hasLayerViewVisibleOverrides()&&(((r=this.layer)==null?void 0:r.visibilityMode)==="inherited"?i():((s=this.layer)==null?void 0:s.visibilityMode)==="exclusive"&&e())}};a([n({cast:d})],t.prototype,"layerViews",null);a([n({readOnly:!0})],t.prototype,"updatingProgress",null);a([n()],t.prototype,"view",void 0);t=a([h("esri.views.layers.GroupLayerView")],t);const v=t;let y=class extends c(v){constructor(){super(...arguments),this.container=new w}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};y=a([h("esri.views.2d.layers.GroupLayerView2D")],y);const N=y;export{N as default};