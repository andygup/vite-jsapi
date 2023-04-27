import{J as m,_,s as p,O as u,ck as c}from"./index-175d32d0.js";import{v as y,n as f}from"./timeSupport-e2490185.js";import{z as w}from"./utils-027313e6.js";import{b as I}from"./Query-91daeb60.js";import{I as b}from"./FeatureStore2D-5bae730a.js";import"./featureConversionUtils-3787082f.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./projectionSupport-5317a1c8.js";import"./json-48e3ea08.js";import"./normalizeUtils-2391e42c.js";import"./normalizeUtilsCommon-b064c045.js";import"./Field-b346df3f.js";import"./fieldType-0ef39ec5.js";import"./CircularArray-ef508845.js";import"./diffUtils-1e0b45c5.js";import"./ComputedAttributeStorage-f8bc0a4c.js";import"./FieldsIndex-2024344c.js";import"./arcadeTimeUtils-b058d7c4.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";import"./definitions-e9823d3c.js";import"./visualVariablesUtils-ab0340c4.js";import"./color-5599f865.js";import"./enums-55085e26.js";import"./enums-74e97557.js";import"./VertexElementDescriptor-2925c6af.js";import"./visualVariablesUtils-bc0c668d.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),T={getAttribute:(r,e)=>r.field(e)};async function g(r,e){const t=await _(()=>import("./WhereClause-7777bb00.js").then(i=>i.W),["assets/WhereClause-7777bb00.js","assets/index-175d32d0.js","assets/index-d832a396.css","assets/executionError-fb3f283a.js"]);try{const i=t.WhereClause.create(r,e);if(!i.isStandardized){const s=new p("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const n=s.readArcadeFeature();return i.testFeature(n,T)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const a=1,v=2;class X{constructor(e){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((n,o)=>{const l=!!(this._idToVisibility.get(o)&a),h=s.has(o);!l&&h?t.push(o):l&&!h&&i.push(o),this._idToVisibility.set(o,h?a|v:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:n}=this;return I.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:n})}async update(e,t){this._hash=JSON.stringify(e);const i=await w(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await g(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await y(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=f(this._serviceInfo.timeInfo,e.timeExtent,b);else{const t=new p("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return this._timeOperator==null||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{X as default};
