import{U as O}from"./request-c2b0ab45.js";import{j as k}from"./asyncUtils-59234081.js";import{a as g,s as C}from"./Error-bd05b442.js";import{r as E}from"./typedArrayUtil-2bcf3cee.js";import{j as D}from"./promiseUtils-29120e0a.js";import{c as q}from"./jsonUtils-8bd548d9.js";import{z as _,E as Q}from"./Extent-7f29a1bb.js";import{n as G,r as M,t as P,o as Z,X as A}from"./featureConversionUtils-7c9ea581.js";import{u as v}from"./FeatureStore-ca53cf3a.js";import{f as F,g as b}from"./projectionSupport-1035a977.js";import{Y as z}from"./QueryEngine-f83539f0.js";import{L as N,I as U,T as B}from"./geojson-49325bac.js";import{o as L,a as J,i as V}from"./clientSideDefaults-18a685c1.js";import{w as W,m as w,f as T,a as I,g as x}from"./sourceUtils-02604baa.js";import{r as S}from"./FieldsIndex-394de0a1.js";import{i as Y}from"./fieldType-4ec45634.js";import{M as H}from"./fieldUtils-021fea8a.js";import"./preload-helper-101896b7.js";import"./string-3d0ebcd3.js";import"./cast-daef7652.js";import"./ensureType-fa162cfc.js";import"./nextTick-3ee5a785.js";import"./Polyline-c56eca9b.js";import"./OptimizedFeature-9345d11b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-d8fc77f0.js";import"./aaBoundingBox-6fbd5972.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./aaBoundingRect-45a7fe45.js";import"./PooledRBush-4701a012.js";import"./quickselect-322ec8e1.js";import"./centroid-de776b3b.js";import"./projection-33a6cba9.js";import"./unitUtils-43365914.js";import"./jsonMap-a9c94baf.js";import"./SimpleObservable-7c382d01.js";import"./mat4-62d5e6a4.js";import"./assets-4cb15247.js";import"./zscale-a508c8e5.js";import"./json-48e3ea08.js";import"./MemCache-5bd66e9c.js";import"./normalizeUtils-d322ac85.js";import"./geometry-4b789d90.js";import"./typeUtils-d7b057b5.js";import"./QueryEngineResult-5fac197b.js";import"./quantizationUtils-72167b00.js";import"./ItemCache-9a7b0057.js";import"./WhereClause-fc7e60fe.js";import"./utils-6fdb990e.js";import"./generateRendererUtils-92e71197.js";import"./colorRamps-3439e132.js";import"./Color-2245b966.js";import"./colorUtils-639f4d25.js";import"./enumeration-e46f3fd4.js";import"./Symbol-f45dc441.js";import"./utils-f95dbca3.js";import"./arcadeOnDemand-87969052.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-21b6beab.js";import"./Scheduler-74975675.js";import"./reactiveUtils-3c1b281e.js";import"./defaultsJSON-b087dd4d.js";const X={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class lt{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const s=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(t==null?void 0:t.signal));const n=N(r,{geometryType:e.geometryType}),o=e.fields||n.fields||[],l=e.hasZ!=null?e.hasZ:n.hasZ,u=n.geometryType;let m=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||_;let i=e.timeInfo;o===n.fields&&n.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let p=new S(o).get(m);p?(p.type!=="esriFieldTypeString"&&(p.type="esriFieldTypeOID"),p.editable=!1,p.nullable=!1,m=p.name):(p={alias:m,name:m,type:n.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(p));const c={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new g("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!Y.jsonValues.includes(a.type))throw new g("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==p.name){const f=H(a);f!==void 0&&(c[a.name]=f)}}this._fieldsIndex=new S(o);const d=this._fieldsIndex.requiredFields.indexOf(p);if(d>-1&&this._fieldsIndex.requiredFields.splice(d,1),i){if(i.startTimeField){const a=this._fieldsIndex.get(i.startTimeField);a?(i.startTimeField=a.name,a.type="esriFieldTypeDate"):i.startTimeField=null}if(i.endTimeField){const a=this._fieldsIndex.get(i.endTimeField);a?(i.endTimeField=a.name,a.type="esriFieldTypeDate"):i.endTimeField=null}if(i.trackIdField){const a=this._fieldsIndex.get(i.trackIdField);a?i.trackIdField=a.name:(i.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:i}}))}i.startTimeField||i.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:i}}),i=null)}const R=u?L(u):null,y={warnings:s,featureErrors:[],layerDefinition:{...X,drawingInfo:R,templates:J(c),extent:null,geometryType:u,objectIdField:m,fields:o,hasZ:!!l,timeInfo:i}};this._queryEngine=new z({fields:o,geometryType:u,hasM:!1,hasZ:l,objectIdField:m,spatialReference:h,timeInfo:i,featureStore:new v({geometryType:u,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=V(c,m);const j=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const $=this._normalizeFeatures(j,y.warnings,y.featureErrors);if(this._queryEngine.featureStore.addMany($),y.layerDefinition.extent=this._queryEngine.fullExtent,y.layerDefinition.timeInfo){const{start:a,end:f}=this._queryEngine.timeExtent;y.layerDefinition.timeInfo.timeExtent=[a,f]}return y}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([W(t,s),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=k(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,s);const r=this._normalizeFeatures(s);r&&this._queryEngine.featureStore.addMany(r)},s=>{this._queryEngine.featureStore.clear(),D(s)||C.getLogger("esri.layers.GeoJSONLayer").error(new g("geojson-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r}=this._queryEngine,n=U(e,{geometryType:t,hasZ:s,objectIdField:r});if(!Q(this._queryEngine.spatialReference,_))for(const o of n)E(o.geometry)&&(o.geometry=G(b(M(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this._loadOptions,r=(await O(t,{responseType:"json",query:{...s},signal:e})).data;return await B(r),r}_normalizeFeatures(e,t,s){const{objectIdField:r}=this._queryEngine,n=[];for(const o of e){const l=this._createDefaultAttributes(),u=w(this._fieldsIndex,l,o.attributes,!0,t);u?s==null||s.push(u):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.objectId=l[r],n.push(o))}return n}_applyEdits(e){const{adds:t,updates:s,deletes:r}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),r&&r.length){for(const o of r)n.deleteResults.push(T(o));this._queryEngine.featureStore.removeManyById(r)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:m}=this._queryEngine,h=[];for(const i of t){if(i.geometry&&r!==q(i.geometry)){s.push(I("Incorrect geometry type."));continue}const p=this._createDefaultAttributes(),c=w(this._fieldsIndex,p,i.attributes);if(c)s.push(c);else{if(this._assignObjectId(p,i.attributes),i.attributes=p,i.uid!=null){const d=i.attributes[l];e.uidToObjectId[i.uid]=d}if(E(i.geometry)){const d=i.geometry.spatialReference??u;i.geometry=b(x(i.geometry,d),d,u)}h.push(i),s.push(T(i.attributes[l]))}}m.addMany(P([],h,r,o,n,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u}=this._queryEngine;for(const m of t){const{attributes:h,geometry:i}=m,p=h&&h[o];if(p==null){e.push(I(`Identifier field ${o} missing`));continue}if(!u.has(p)){e.push(I(`Feature with object id ${p} missing`));continue}const c=Z(u.getFeature(p),s,n,r);if(E(i)){if(s!==q(i)){e.push(I("Incorrect geometry type."));continue}const d=i.spatialReference??l;c.geometry=b(x(i,d),d,l)}if(h){const d=w(this._fieldsIndex,c.attributes,h);if(d){e.push(d);continue}}u.add(A(c,s,n,r,o)),e.push(T(p))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if(s.type==="esriFieldTypeString")return()=>s.name+"-"+Date.now().toString(16);let r=Number.NEGATIVE_INFINITY;for(const n of t)n.objectId&&(r=Math.max(r,n.objectId));return r=Math.max(0,r)+1,()=>r++}_assignObjectId(e,t,s=!1){const r=this._queryEngine.objectIdField;e[r]=s&&r in t?t[r]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new g("geojson-layer","Projection not supported")}}}export{lt as default};
