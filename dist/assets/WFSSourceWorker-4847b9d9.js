import{cv as h,cE as l,i6 as o,w as g,hJ as _,nJ as f,gC as d,d as w,T as u,au as E,m as q,i as F}from"./index-df1c7459.js";import{g as x}from"./FeatureStore-418dd9e9.js";import{g as S,f as T}from"./QueryEngineResult-a75eda3b.js";import{e as j}from"./QueryEngine-311866fa.js";import{T as I,I as b}from"./geojson-e13f734b.js";import{m as C}from"./sourceUtils-a5e142b7.js";import{K as P}from"./wfsUtils-7e5a5daf.js";import"./BoundsStore-968ad8c4.js";import"./PooledRBush-47b3e53d.js";import"./quickselect-56c5966e.js";import"./optimizedFeatureQueryEngineAdapter-9cf4c9eb.js";import"./centroid-0a3057d6.js";import"./WhereClause-2e7ef2fe.js";import"./executionError-fb3f283a.js";import"./utils-a8845e41.js";import"./generateRendererUtils-f1e35d90.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./xmlUtils-444cb4c0.js";class V{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await P(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await I(s),h(e);const a=b(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=_(S(f(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};C(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:p,objectIdField:y,customParameters:c}=e;this._featureType=p,this._customParameters=c,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new d(r),await this._checkProjection(n),h(t),this._queryEngine=new j({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new x({geometryType:i,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),q(s)||F.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{V as default};