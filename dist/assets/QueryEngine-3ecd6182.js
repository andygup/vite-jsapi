import{fz as V,fA as W,dF as X,x as v,B,a9 as F,aX as j,aQ as q,s as x,c as K,fB as Y,ee,eh as te,Q as T,fC as z,cn as O,dj as M,fD as se,dn as ie,bZ as re,d5 as G,bJ as ae,bU as ne,O as ue,b2 as le,ef as ce,fE as oe}from"./index-0265f5b0.js";import{b as d,E as he,l as fe,c as I,o as de,a as ye,f as me}from"./QueryEngineResult-27562a9e.js";import{f as C,g as E,M as pe}from"./projectionSupport-1c354c95.js";import{t as ge}from"./QueryEngineCapabilities-42e44ded.js";import{t as _e,v as A,n as xe,I as Z,P as N}from"./timeSupport-3deb2ce6.js";import{M as R,Z as H,v as J,P as we}from"./utils-ff4a5c29.js";function Se(b){return b!=null&&b.every(e=>e.statisticType!=="exceedslimit")}const w="feature-store:unsupported-query",Fe=new V(2e6);let Re=0;class Pe{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:ge},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new W(Re+++"$$",Fe)),this.fieldsIndex=new X(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=v(this._frameTask),this.clearCache(),B(this._geometryQueryCache),this._changeHandle=v(this._changeHandle),B(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(s){if(s!==R)throw s;return new d([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(s){if(s!==R)throw s;return 0}}async executeQueryForExtent(e,t){const s=e.outSR;try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=i.size;return r?{count:r,extent:await this._getBounds(i.items,i.spatialReference,s||this.spatialReference)}:{count:0,extent:null}}catch(i){if(i===R)return{count:0,extent:null};throw i}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),i=s.items,r=new Set;return await this._reschedule(()=>{for(const a of i)r.add(s.featureAdapter.getObjectId(a))},t),r}catch(s){if(s===R)return new Set;throw s}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:r}=e;if(r===he.NONE)return{candidates:[]};const a=await this._reschedule(()=>this._checkQuerySupport(e.query),t),n=!F(s.spatialReference,this.spatialReference);n&&await C(s.spatialReference,this.spatialReference);const u=typeof i=="number"?i:i.x,o=typeof i=="number"?i:i.y,c={xmin:s.x-u,xmax:s.x+u,ymin:s.y-o,ymax:s.y+o,spatialReference:s.spatialReference},l=n?E(c,this.spatialReference):c;if(!l)return{candidates:[]};const y=(await j(q(s),null,{signal:t}))[0],m=(await j(q(l),null,{signal:t}))[0];if(y==null||m==null)return{candidates:[]};const g=new d(await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(m.toJSON())),t),a,this);await this._reschedule(()=>this._executeObjectIdsQuery(g),t),await this._reschedule(()=>this._executeTimeQuery(g),t),await this._reschedule(()=>this._executeAttributesQuery(g),t);const h=y.toJSON(),_=n?E(h,this.spatialReference):h,p=n?Math.max(l.xmax-l.xmin,l.ymax-l.ymin)/2:i;return g.createSnappingResponse({...e,point:_,distance:p},s.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new x(w,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(s),t),s.createQueryResponse()}catch(s){if(s!==R)throw s;return new d([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,field2:r,field3:a,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,field2:r,field3:a,valueExpression:n},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const[t,s]=await Promise.all(["getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getBounds(await this._getAllFeatures(),this.spatialReference,this.spatialReference),this._timeExtentPromise!=null?this._timeExtentPromise:this._timeExtentPromise=_e(this.timeInfo,this.featureStore)]);return K(e),{fullExtent:t,timeExtent:s}}async _getBounds(e,t,s){const i=Y(ee(),ce);await this.featureStore.forEachBounds(e,n=>te(i,n));const r={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:H(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(r.zmin=i[2],r.zmax=i[5]);const a=E(r,t,s);if(a.spatialReference=H(s),a.xmax-a.xmin==0){const n=T(a.spatialReference);a.xmin-=n,a.xmax+=n}if(a.ymax-a.ymin==0){const n=T(a.spatialReference);a.ymin-=n,a.ymax+=n}if(this.hasZ&&a.zmin!=null&&a.zmax!=null&&a.zmax-a.zmin==0){const n=T(a.spatialReference);a.zmin-=n,a.zmax+=n}return a}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(z)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(z)}async _getAllFeaturesQueryEngineResult(e){return new d(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=O(e),e=await this._schedule(()=>J(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkQuerySupport(e),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:r}=e,a=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,u=a==null||F(a,n.spatialReference)?n:E(n,a);if(!u)return null;const o=i||r,c=M(s)&&!F(this.spatialReference,s)&&o?async h=>this._project(h,s):h=>h,l=this.featureAdapter,y=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(u)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!y.length)return null;const h=new Set;for(const Q of y)h.add(l.getObjectId(Q));const _=await this._reschedule(()=>this._getAllFeatures(),t),p=await this._reschedule(async()=>{const Q=await A("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),$=S=>!h.has(l.getObjectId(S))||Q(l.getGeometry(S)),f=await this._runSpatialFilter(_,$,t);return new d(f,e,this)},t);return c(p)}if(!y.length)return new d([],e,this);if(this._canExecuteSinglePass(u,e))return c(new d(y,e,this));const m=await A("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),g=await this._runSpatialFilter(y,h=>m(l.getGeometry(h)),t);return c(new d(g,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:r,spatialRel:a,returnGeometry:n,returnCentroid:u}=e,o=this.featureStore.featureSpatialReference,c=!i||o==null||F(o,i.spatialReference)?i:E(i,o),l=n||u,y=M(r)&&!F(this.spatialReference,r),m=this._geometryQueryCache&&t==null?JSON.stringify(y&&l?{originalFilterGeometry:i,spatialRelationship:a,outSpatialReference:r}:{originalFilterGeometry:i,spatialRelationship:a}):null,g=m?this._geometryQueryCache.get(m):null;if(g!=null)return new d(g,e,this);const h=async f=>(y&&l&&await this._project(f,r),m&&this._geometryQueryCache.put(m,f.items,f.items.length+1),f);if(!c)return h(t??await this._getAllFeaturesQueryEngineResult(e));const _=this.featureAdapter;let p=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(i)),s);if(a==="esriSpatialRelDisjoint"){if(!p.length)return h(t??await this._getAllFeaturesQueryEngineResult(e));const f=new Set;for(const P of p)f.add(_.getObjectId(P));const S=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),U=await this._reschedule(async()=>{const P=await A(a,c,this.geometryType,this.hasZ,this.hasM),D=k=>!f.has(_.getObjectId(k))||P(_.getGeometry(k)),L=await this._runSpatialFilter(S,D,s);return new d(L,e,this)},s);return h(U)}if(t!=null){const f=new oe;p=p.filter(S=>se(t.items,S,t.items.length,f)>=0)}if(!p.length){const f=new d([],e,this);return m&&this._geometryQueryCache.put(m,f.items,1),f}if(this._canExecuteSinglePass(c,e))return h(new d(p,e,this));const Q=await A(a,c,this.geometryType,this.hasZ,this.hasM),$=await this._runSpatialFilter(p,f=>Q(_.getGeometry(f)),s);return h(new d($,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||this.aggregateAdapter==null)return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(r=>t.add(r));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=xe(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=fe(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(n=>t(n));let i=0;const r=new Array,a=async n=>{for(;i<e.length;){const u=e[i++];t(u)&&(r.push(u),n.madeProgress()),n.done&&await this._reschedule(o=>a(o),s)}};return this._reschedule(n=>a(n),s).then(()=>r)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,r=i||s,a=new Map,n=this.featureAdapter.getAttribute;for(const u of e.items){const o=n(u,t),c=n(u,r),l=a.get(o);(!l||c>n(l,r))&&a.set(o,u)}e.items=Array.from(a.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return Z(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"||s==="esriSpatialRelWithin"))}async _project(e,t){if(!t||F(this.spatialReference,t))return e;const s=this.featureAdapter,i=await pe(e.items.map(r=>we(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t);return e.items=i.map((r,a)=>s.cloneWithGeometry(e.items[a],ie(r,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(Z(e)){if(re(e))return[G(e.xmin,e.ymin,e.xmax,e.ymax)];if(ae(e))return e.rings.map(t=>G(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[ne(ue(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,r=>t.add(r))));const s=Array.from(t.values());return t.clear(),s}async _checkStatisticsSupport(e,t){if((e.distance??0)<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new x(w,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),N(e,this.geometryType,this.spatialReference),C(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await le();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new x(w,"params should have at least a field or valueExpression",{params:e});I(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if((e.distance??0)<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new x(w,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([N(e,this.geometryType,this.spatialReference),C(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:r}=e,a=r?r.map(n=>n.outStatisticFieldName&&n.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const n=" asc",u=" desc",o=s.map(c=>{const l=c.toLowerCase();return l.includes(n)?l.split(n)[0]:l.includes(u)?l.split(u)[0]:c}).filter(c=>!a.includes(c));I(this.fieldsIndex,o,"orderByFields contains missing fields")}if(t&&t.length>0)I(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new x(w,"outFields should be specified for returnDistinctValues",{query:e});de(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,r=s&&s.length,a=t&&t.length;if(i){if(!r||!a)throw new x(w,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});ye(this.fieldsIndex,i,t)}if(a){if(!Se(t))return;const n=t.map(u=>u.onStatisticField).filter(Boolean);I(this.fieldsIndex,n,"onStatisticFields contains missing fields"),r&&I(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const u of t){const{onStatisticField:o,statisticType:c}=u;if((c==="percentile_disc"||c==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:l}=u;if(!l)throw new x(w,"statisticParamters should be set for percentile type",{definition:u,query:e})}else if(c!=="count"&&o&&me(o,this.fieldsIndex))throw new x(w,"outStatistics contains non-numeric fields",{definition:u,query:e})}}}async _getQueryEngineResultForStats(e,t,s){e=O(e);try{e=await this._schedule(()=>J(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}catch(i){if(i!==R)throw i;return new d([],e,this)}}}export{Pe as X};
