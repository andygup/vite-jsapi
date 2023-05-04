import{e as a,y as t,a as y,V as h,bm as w,g as d,bg as u,K as V,bn as c,l as p,bf as _,bo as m,_ as v}from"./index-c18a96f3.js";import{n as A}from"./LayerView3D-5b3c36c8.js";import{d as f}from"./LayerView-045a22cc.js";const D=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),a([t()],s.prototype,"analysisView",void 0),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends A(D(f)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(d(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},u),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new V("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=c(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-940dc329.js").then(i=>i.D),["assets/DimensionAnalysisView3D-940dc329.js","assets/index-c18a96f3.js","assets/index-0492b785.css","assets/LineVisualElement-b8f3b4e1.js","assets/LengthDimension-337b3314.js","assets/Segment-9c153a75.js","assets/unitFormatUtils-39366885.js","assets/elevationInfoUtils-0942f737.js","assets/analysisViewUtils-69ec7df1.js","assets/ImageMaterial-407709d5.js","assets/Factory-da39f36c.js","assets/RightAngleQuadVisualElement-c5560eb4.js","assets/VisualElementResources-34ee4b9f.js","assets/PointVisualElement-1e124b61.js","assets/colorUtils-c0f43caf.js","assets/EditGeometryOperations-a08283b2.js","assets/dehydratedFeatureComparison-4aa61d0c.js","assets/RenderTexture-01b4d2e8.js"])}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const $=n;export{$ as default};