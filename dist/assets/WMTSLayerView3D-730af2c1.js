import{b3 as h,lw as f,V as u,d as n,e as s,y as o,a as m}from"./index-bdad94d1.js";import{n as p}from"./LayerView3D-db179b67.js";import{o as c}from"./TiledLayerView3D-93d2cbbe.js";import{d as g}from"./LayerView-bb89af1f.js";import{i as y}from"./RefreshableLayerView-b3ddce6a.js";let r=class extends y(c(p(g))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=h(()=>{var e,i;return(i=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent));e!=null&&(e.id!==null&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._postInitialize())}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t!=null&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this.updatingHandles.add(()=>{var t,e;return(e=(t=this.layer)==null?void 0:t.activeLayer)==null?void 0:e.styleId},()=>this.refresh()),this.updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.activeLayer},t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoError(i.tileInfo,i.fullExtent),!0);e!=null&&e.id!==null&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=f(this.layer);if(i!=null){if(u.isCollection(i))return i.find(d=>{const l=t(d);return l!=null&&(e?n.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),l==null});const a=t(i);return a!=null&&(e?n.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",a):this.addResolvingPromise(Promise.reject(a))),i}return null}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};s([o({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),s([o()],r.prototype,"layer",void 0),s([o()],r.prototype,"suspended",void 0),s([o()],r.prototype,"tileInfo",void 0),r=s([m("esri.views.3d.layers.WMTSLayerView3d")],r);const _=r;export{_ as default};
