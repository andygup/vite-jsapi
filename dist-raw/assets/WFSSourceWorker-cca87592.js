import{t as p,b9 as l,g5 as n,E as u,F as f,i as g,L as _}from"./index-468a9268.js";import{e as d,f as F}from"./featureConversionUtils-78a5344c.js";import{F as w}from"./FeatureStore-e4c2f9f7.js";import{p as E,c as q}from"./projectionSupport-66923e94.js";import{Q as S}from"./QueryEngine-df6cf148.js";import{v as x,c as b}from"./geojson-8dd05f0e.js";import{m as T}from"./sourceUtils-cae5ed14.js";import{g as I}from"./wfsUtils-7a674bc9.js";import{F as j}from"./FieldsIndex-ab7b931c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./BoundsStore-3b77c5e4.js";import"./PooledRBush-9a5564b0.js";import"./centroid-1116d1e7.js";import"./utils-d0fab15d.js";import"./normalizeUtils-9dd6c69b.js";import"./normalizeUtilsCommon-6cabd780.js";import"./json-9ae8d6f8.js";import"./MemCache-3df47c80.js";import"./QueryEngineResult-f4bedfb3.js";import"./quantizationUtils-6f8bf3ac.js";import"./ItemCache-68f957f2.js";import"./WhereClause-885fb487.js";import"./executionError-e2eca390.js";import"./_commonjsHelpers-725317a4.js";import"./utils-84b33cfe.js";import"./generateRendererUtils-7b55d4c3.js";import"./QueryEngineCapabilities-60118ddb.js";import"./timeSupport-83b5c9cc.js";import"./xmlUtils-2b925ee3.js";import"./Field-88bfb4af.js";import"./fieldType-31d95250.js";class ue{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await I(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await x(s),p(e);const a=b(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,n))for(const r of a)r.geometry!=null&&(r.geometry=d(E(F(r.geometry,this._queryEngine.geometryType,!1,!1),n,this._queryEngine.spatialReference)));let o=1;for(const r of a){const i={};T(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=o++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:o,fields:r,geometryType:i,featureType:h,objectIdField:m,customParameters:c}=e;this._featureType=h,this._customParameters=c,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new j(r),await this._checkProjection(o),p(t),this._queryEngine=new S({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:m,spatialReference:o,timeInfo:null,featureStore:new w({geometryType:i,hasM:!1,hasZ:!1})});const y=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(y),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=f(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),g(s)||_.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(!(!this._snapshotTask||this._snapshotTask.finished)){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await q(n,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{ue as default};