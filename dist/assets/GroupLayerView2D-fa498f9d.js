import{e as a,y as l,n}from"./cast-daef7652.js";import"./Error-bd05b442.js";import"./ensureType-fa162cfc.js";import{t as h}from"./typedArrayUtil-2bcf3cee.js";import"./string-3d0ebcd3.js";import{r as m}from"./GroupContainer-7fa0a0f5.js";import{u as d,y as V}from"./LayerView-8f28f320.js";import{j as w}from"./Collection-e2259e32.js";import{t as v,n as u}from"./collectionUtils-09289d8f.js";import{l as o,U as p}from"./reactiveUtils-3c1b281e.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-29120e0a.js";import"./WGLContainer-db0ff963.js";import"./mat3f32-d3d088e8.js";import"./enums-64ab819c.js";import"./mat3-45e3f2eb.js";import"./common-701a4199.js";import"./vec2f32-461e65a9.js";import"./pixelUtils-5f39bd45.js";import"./utils-6c2afd8b.js";import"./parser-e6166e34.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./Evented-d8fc77f0.js";import"./enums-4ca4641f.js";import"./MaterialKey-b4e71fc3.js";import"./Utils-c2939f8d.js";import"./mathUtils-daf59e84.js";import"./enums-8bf08d0c.js";import"./Texture-6f3336a0.js";import"./context-util-cb6895d7.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Color-2245b966.js";import"./vec2f64-e0301652.js";import"./VertexArrayObject-8a5c7580.js";import"./ProgramTemplate-66c62c24.js";import"./StyleDefinition-3c6a4c69.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-f978aef8.js";import"./featureConversionUtils-7c9ea581.js";import"./jsonUtils-8bd548d9.js";import"./Extent-7f29a1bb.js";import"./Polyline-c56eca9b.js";import"./OptimizedFeature-9345d11b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./geometry-4b789d90.js";import"./typeUtils-d7b057b5.js";import"./jsonMap-a9c94baf.js";import"./HandleOwner-78d35324.js";import"./Identifiable-e3a09883.js";import"./Promise-088a0e17.js";import"./SimpleObservable-7c382d01.js";let t=class extends d{constructor(i){super(i),this.type="group",this.layerViews=new w}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),o(()=>this.layer.visibilityMode,()=>this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null)),p),o(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},p)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",u(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{var r;return(r=this._findLayerViewForLayer(e))==null?void 0:r.visible});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){h(i)&&(i=this._firstVisibleOnLayerOrder(),h(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(r=>o(()=>r.visible,s=>this._applyVisibility(()=>{s!==this.visible&&(r.visible=this.visible)},()=>this._applyExclusiveVisibility(s?r:null)),p)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var r,s;this._hasLayerViewVisibleOverrides()&&(((r=this.layer)==null?void 0:r.visibilityMode)==="inherited"?i():((s=this.layer)==null?void 0:s.visibilityMode)==="exclusive"&&e())}};a([l({cast:v})],t.prototype,"layerViews",null),a([l({readOnly:!0})],t.prototype,"updatingProgress",null),a([l()],t.prototype,"view",void 0),t=a([n("esri.views.layers.GroupLayerView")],t);const b=t;let y=class extends V(b){constructor(){super(...arguments),this.container=new m}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};y=a([n("esri.views.2d.layers.GroupLayerView2D")],y);const fi=y;export{fi as default};
