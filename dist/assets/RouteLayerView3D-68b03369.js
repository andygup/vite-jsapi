import{h as u,aL as c,l as m,du as y,V as d,g as h,bp as g,e as s,y as o,a as f}from"./index-d29f6b97.js";import{m as b,c as v,C as I,T as O,j as _,S as w,O as S}from"./Stop-f01d4bba.js";import{n as V}from"./LayerView3D-93dbb0dd.js";import{x as G}from"./GraphicsProcessor-5c0bb4fd.js";import{l as C}from"./projectExtentUtils-7b3ec1cc.js";import{r as P}from"./EventedSet-af67fc30.js";import{d as R}from"./LayerView-923813e2.js";import"./diffUtils-149561ab.js";import"./Query-02316d46.js";import"./Graphics3DObjectStates-e0749d1f.js";import"./UniqueValueRenderer-6bfde73c.js";import"./ColorStop-c9dfec3d.js";import"./colorRamps-5cc134e8.js";import"./jsonUtils-a30c08d1.js";import"./DictionaryLoader-d7f4a828.js";import"./LRUCache-2af9f319.js";import"./FieldsIndex-f92177f9.js";import"./heatmapUtils-b7e5e306.js";import"./defaults-a3afa070.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-faf2ce2d.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-5ef79871.js";import"./quickselect-6ad44cba.js";function E(e){return e instanceof b||e instanceof v||e instanceof I||e instanceof O||e instanceof _||e instanceof w||e instanceof S}let i=class extends V(R){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new P,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new G({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),u),this.addResolvingPromise(C(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.handles.add(c(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const r=this._byObjectID.get(t);return this._byObjectID.delete(t),r}));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const r=t.toGraphic();return this._byObjectID.set(t,r),r}));for(const t of e.added)this.handles.add([h(()=>t.geometry,(r,n)=>{this._updateGraphic(t,"geometry",r,n)}),h(()=>t.symbol,(r,n)=>{this._updateGraphic(t,"symbol",r,n)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,r;const e=super.getSuspendInfo();return e.outsideScaleRange=((t=this.processor)==null?void 0:t.scaleVisibilitySuspended)??!1,e.outsideOfView=((r=this.processor)==null?void 0:r.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,t){return(t==null?void 0:t.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var r;return(r=this.processor)==null?void 0:r.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return E(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||g.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,r;return!(!((e=this.processor)!=null&&e.updating)&&((r=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&r.ready))}get performanceInfo(){var e,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}}_updateGraphic(e,t,r,n){var p;const l=this._byObjectID.get(e);l[t]=r,a.graphic=l,a.property=t,a.oldValue=n,a.newValue=r,(p=this.processor)==null||p.graphicsCore.graphicUpdateHandler(a)}};s([o()],i.prototype,"_routeItems",null),s([o()],i.prototype,"loadedGraphics",void 0),s([o({readOnly:!0})],i.prototype,"legendEnabled",null),s([o()],i.prototype,"layer",void 0),s([o({readOnly:!0})],i.prototype,"processor",void 0),s([o({type:Boolean})],i.prototype,"slicePlaneEnabled",void 0),i=s([f("esri.views.3d.layers.RouteLayerView3D")],i);const a={graphic:null,property:null,oldValue:null,newValue:null},te=i;export{te as default};
