import{e as o,y as d,a as w,K as h,a3 as c,bs as D,aL as E}from"./index-bdad94d1.js";import{z as b}from"./DynamicLayerView3D-3e4394f2.js";import{b as I}from"./commonProperties-ea87c313.js";import{b as H}from"./Query-9dbb4c19.js";import{d as P}from"./popupUtils-8c5a431f.js";import"./LayerView3D-db179b67.js";import"./projectExtentUtils-38124f1a.js";import"./ImageMaterial-7b180494.js";import"./LayerView-bb89af1f.js";import"./RefreshableLayerView-b3ddce6a.js";import"./ElevationInfo-3fa56032.js";const F=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(a,s){const{layer:n}=this;if(!a)throw new h("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n,r=P(n,s);if(!i||r==null)throw new h("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:r});const y=await r.getRequiredFields(),l=new H;l.timeExtent=this.timeExtent,l.geometry=a,l.outFields=y,l.outSpatialReference=a.spatialReference;const{resolution:p,spatialReference:u}=this.view,g=this.view.type==="2d"?new c(p,p,u):new c(.5*p,.5*p,u),{returnTopmostRaster:f,showNoDataRecords:x}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},v={returnDomainValues:!0,returnTopmostRaster:f,pixelSize:g,showNoDataRecords:x,signal:s!=null?s.signal:null};return n.queryVisibleRasters(l,v).then(R=>R)}canResume(){var a;return!!super.canResume()&&!((a=this.timeExtent)!=null&&a.isEmpty)}};return o([d()],t.prototype,"layer",void 0),o([d()],t.prototype,"suspended",void 0),o([d(I)],t.prototype,"timeExtent",void 0),o([d()],t.prototype,"view",void 0),t=o([w("esri.views.layers.ImageryLayerView")],t),t};let m=class extends F(b){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=D(async e=>{this.redraw((t,a)=>this._redrawImage(t,a),e)},2e3)}initialize(){this.handles.add([E(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]),this.updatingHandles.add(()=>{var e,t;return(t=(e=this.layer)==null?void 0:e.exportImageServiceParameters)==null?void 0:t.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>{var e;return(e=this.layer)==null?void 0:e.renderer},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||e.pixelData==null)throw new Error;const a=e.image,s=a.getContext("2d"),n=await this.layer.applyRenderer(e.pixelData,{signal:t}),i=this.layer.applyFilter(n).pixelBlock;if(i==null)throw new Error;a.width=i.width,a.height=i.height;const r=s.createImageData(i.width,i.height);r.data.set(i.getAsRGBA()),s.putImageData(r,0,0)}};m=o([w("esri.views.3d.layers.ImageryLayerView3D")],m);const q=m;export{q as default};
