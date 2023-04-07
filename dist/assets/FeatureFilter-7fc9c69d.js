import{Q as _,_ as p,s as m,T as u,aw as c,bT as y,t as f}from"./index-4d2185ff.js";import{v as w,n as I}from"./timeSupport-3fba72f7.js";import{J as b}from"./utils-6aacd823.js";import{p as T}from"./FeatureStore2D-901db9c7.js";import"./projectionSupport-1ed3590a.js";import"./json-48e3ea08.js";import"./CircularArray-2f419c92.js";import"./ComputedAttributeStorage-306d6cdb.js";import"./arcadeTimeUtils-f7ed0d02.js";import"./executionError-fb3f283a.js";import"./centroid-f8b142b6.js";import"./definitions-3ddd14a8.js";import"./visualVariablesUtils-9e415929.js";import"./color-c7e17294.js";import"./enums-55085e26.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./visualVariablesUtils-24d7e406.js";const d=_.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,e)=>r.field(e)};async function v(r,e){const t=await p(()=>import("./WhereClause-8209d617.js").then(i=>i.W),["assets/WhereClause-8209d617.js","assets/index-4d2185ff.js","assets/index-d832a396.css","assets/executionError-fb3f283a.js"]);try{const i=t.WhereClause.create(r,e);if(!i.isStandardized){const s=new m("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const h=s.readArcadeFeature();return i.testFeature(h,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const a=1,E=2;class M{constructor(e){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((h,o)=>{const l=!!(this._idToVisibility.get(o)&a),n=s.has(o);!l&&n?t.push(o):l&&!n&&i.push(o),this._idToVisibility.set(o,n?a|E:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h}=this;return c.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h})}async update(e,t){this._hash=JSON.stringify(e);const i=await b(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await v(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await w(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);y(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,e.timeExtent,T);else{const t=new m("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);_.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!f(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{M as default};
