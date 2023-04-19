import{fz as n,aP as d,g6 as a,L as h,E as u,O as m}from"./index-0cbe37a0.js";import{n as l}from"./featureConversionUtils-f0b03e2b.js";import{B as g}from"./BoundsStore-8244da40.js";import{g as f}from"./centroid-1116d1e7.js";import{a as c,O as y}from"./OptimizedGeometry-af84d2ad.js";import{c as _}from"./utils-46832fb9.js";const I={getObjectId(s){return s.objectId},getAttributes(s){return s.attributes},getAttribute(s,e){return s.attributes[e]},cloneWithGeometry(s,e){return new c(e,s.attributes,null,s.objectId)},getGeometry(s){return s.geometry},getCentroid(s,e){return s.centroid==null&&(s.centroid=f(new y,s.geometry,e.hasZ,e.hasM)),s.centroid}},B=n();class C{constructor(e){this.geometryInfo=e,this._boundsStore=new g,this._featuresById=new Map,this._markedIds=new Set,this.events=new d,this.featureAdapter=I}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry!=null&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(this.fullBounds==null)return null;const[t,r,o,i]=this.fullBounds;return{xmin:t,ymin:r,xmax:o,ymax:i,spatialReference:_(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const r=this._featuresById.get(t);r&&this._remove(r)}this._emitChanged()}forEachBounds(e,t){for(const r of e){const o=this._boundsStore.get(r.objectId);o&&t(a(B,o))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,r=>{t(this._featuresById.get(r))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(t==null){h.getLogger("esri.layers.graphics.data.FeatureStore").error(new u("featurestore:invalid-feature","feature id is missing",{feature:e}));return}const r=this._featuresById.get(t);let o;if(this._markedIds.add(t),r?(e.displayId=r.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):this.onFeatureAdd!=null&&this.onFeatureAdd(e),e.geometry==null||!e.geometry.coords||!e.geometry.coords.length){this._boundsStore.set(t,null),this._featuresById.set(t,e);return}o=l(o??m(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),o!=null&&this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){this.onFeatureRemove!=null&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}export{C as F};