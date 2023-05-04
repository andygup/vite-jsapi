import{d as ye,e as c,y as d,a as q,c1 as A,m as W,b3 as he,_ as fe,dC as ge,dD as k,dE as me,dF as U,bz as z,dG as Ee,P as H,dH as Se,dI as we,dJ as _e,dK as be,dL as ie,dM as Fe,dN as ve,ap as Re,dO as Ie,dP as xe,dQ as N,dR as T,dq as D,cm as L,t as Oe,l as Z,by as $e,K as X,a_ as je,dS as V,$ as Qe,aK as Me,dT as Ce,dU as Ne}from"./index-c18a96f3.js";import{a as Q,n as Y,u as ee}from"./DefinitionExpressionSceneLayerView-07caccba.js";import{f as Te}from"./WhereClause-d48af787.js";import{d as De}from"./FeatureFilter-e84ccbbf.js";import{V as Ge,J as ke,f as te}from"./I3SUtil-5dcf638f.js";import{K as Ae}from"./QueryEngine-e3cb4f5a.js";import{g as Je}from"./FeatureSet-037cc3b1.js";import{b as Pe}from"./Query-f6fbedf0.js";import{t as Ke}from"./centroid-8e8cfa47.js";import{L as C}from"./I3SMeshView3D-64f291c8.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",$=ye.getLogger(oe);let f=class extends W{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){he(()=>{var t;return((t=this.viewFilter)==null?void 0:t.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(fe(()=>import("./geometryEngine-0e62bd98.js"),["assets/geometryEngine-0e62bd98.js","assets/geometryEngineBase-c79ec35a.js","assets/index-c18a96f3.js","assets/index-0492b785.css","assets/hydrated-a724f0e2.js"]).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){if(this.viewFilter==null||this.viewFilter.objectIds==null)return null;const t=ge(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=this.viewFilter!=null?this.viewFilter.where:null;if(t==null||!t)return null;try{return Te.create(t,this.layerFieldsIndex)}catch(e){$.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(t,e,r,i){const n=this.sortedObjectIds;n!=null&&t.push(l=>Ge(n,!0,l)),this.addSqlFilter(t,this.parsedWhereClause);const s=Q(this._layerMaskGeometries),o=this._geometryEngine;if(s!=null&&this.layerFilter!=null&&o!=null){const l=this.layerFilter.spatialRelationship;t.push((u,h)=>ne(o,u,h,i,e,r,s,l))}const a=Q(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&o!=null){const l=this.viewFilter.spatialRelationship;t.push((u,h)=>ne(o,u,h,i,e,r,a,l))}}isMBSGeometryVisible(t,e,r){const i=Q(this._layerMaskGeometries),n=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&n!=null){const o=this.layerFilter.spatialRelationship,a=i[0].spatialReference||e;return k(t,r,M,a)?re(n,M,i,a,o):($.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=Q(this._viewMaskGeometries);if(s!=null&&this.viewFilter!=null&&n!=null){const o=this.viewFilter.spatialRelationship,a=s[0].spatialReference||e;return k(t,r,M,a)?re(n,M,s,a,o):($.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=Q(this._viewMaskGeometries),e=Q(this._layerMaskGeometries);return t==null||e==null?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return t==null?null:this._geometryEngine==null?Y:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:t}=this.viewFilter;if(t==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return Y;const{distance:e,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(e==null||e===0)return G(this._geometryEngine,n,i);const s=r||me(n.spatialReference);if(n.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(n,e,s);return G(this._geometryEngine,l,i)}const o=U(n,z.WGS84);if(o!=null){const l=U(this._geometryEngine.geodesicBuffer(o,e,s),n.spatialReference);return G(this._geometryEngine,l,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Ee().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=H(n,z.WGS84)}catch{}if(a)try{a=H(this._geometryEngine.geodesicBuffer(a,e,s),n.spatialReference)}catch{a=null}return a||$.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),G(this._geometryEngine,a,i)}get updating(){return ee(this._layerMaskGeometries)||ee(this._viewMaskGeometries)}static checkSupport(t){return t!=null&&(t.timeExtent?($.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!Le(t.spatialRelationship)||($.warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};c([d()],f.prototype,"layerFilter",void 0),c([d({type:De})],f.prototype,"viewFilter",void 0),c([d()],f.prototype,"layerFieldsIndex",void 0),c([d()],f.prototype,"loadAsyncModule",void 0),c([d()],f.prototype,"addSqlFilter",void 0),c([d({readOnly:!0})],f.prototype,"sortedObjectIds",null),c([d({readOnly:!0})],f.prototype,"parsedWhereClause",null),c([d({readOnly:!0})],f.prototype,"parsedGeometry",null),c([d({readOnly:!0})],f.prototype,"_layerMaskGeometries",null),c([d({readOnly:!0})],f.prototype,"_viewMaskGeometries",null),c([d()],f.prototype,"updating",null),c([d()],f.prototype,"_projectionEngineLoaded",void 0),c([d()],f.prototype,"_geometryEngine",void 0),f=c([q(oe)],f);const ae=(t=>t)(["contains","intersects","disjoint"]);function Le(t){return t!=null&&ae.includes(t)}var y;function G(t,e,r){if(e==null)return null;if(r==="disjoint"&&e.type==="polygon"){const i=e.rings.length,n=e.spatialReference,s=new Array(i);for(let l=0;l<i;++l){const u=Se(1/0,1/0,-1/0,-1/0);we(u,e.rings[l]),s[l]={type:"polygon",rings:[e.rings[l]],spatialReference:n,cache:{},aabr:u}}s.sort((l,u)=>l.aabr[0]-u.aabr[0]);const o=new Set,a=new xe;for(let l=0;l<s.length;++l){const u=s[l],h=u.aabr[0];o.forEach(p=>{if(h>=p.aabr[2])return void o.delete(p);if(u.aabr[1]>p.aabr[3]||u.aabr[3]<p.aabr[1]||!t.intersects(u,p))return;u.rings=u.rings.concat(p.rings),_e(u.aabr,p.aabr,u.aabr),u.cache={},o.delete(p);const m=be(s,p,s.length,a);s.splice(m,1)}),o.add(u)}for(const l of s)l.aabr=void 0;return s}return[e]}function re(t,e,r,i,n){const s=le(t,e,i);return r.every(o=>ue(t,o,s,n)!==y.DISCARD)}function ne(t,e,r,i,n,s,o,a){const l=o[0].spatialReference||n.spatialReference;if(!k(r.node.mbs,s,M,l))return void $.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=le(t,M,l),h=Ve(a,n,l,i,r.objectHandle);for(const p of o){if(e.length===0)return;switch(ue(t,p,u,a)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}ke(e,r.featureIds,m=>Be(t,p,m,h))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const M=ie(0,0,0,0);function Ve(t,e,r,i,n){const s=e.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,h;switch(t){case"intersects":u=(p,m,b)=>p.intersects(m,b)?y.KEEP:y.TEST,h=B;break;case"contains":u=(p,m,b)=>p.contains(m,b)?y.TEST:y.DISCARD,h=B;break;default:u=(p,m,b)=>p.disjoint(m,b)?y.TEST:y.DISCARD,h=ce}return{collection:i,object:n,type:t,maskSR:r,renderSR:s,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:h}}function le(t,e,r){const i={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!Fe(r)&&!ve(r),s=Number.isNaN(e[3])?0:Re(e[3],0,2*Ie.radius),o=n?t.buffer(i,s,1):t.geodesicBuffer(i,s,1);return o.type="polygon",o}function ue(t,e,r,i){switch(i){case"intersects":case"contains":return B(t,e,r);case"disjoint":return ce(t,e,r)}}function B(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function ce(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function Be(t,e,r,i){const{collection:n,object:s,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=i;let h=u.get(r);if(!h){const F=n.getObjectTransform(s);n.getComponentAabb(s,r,_);const E=[[_[0],_[1],0],[_[0],_[4],0],[_[3],_[4],0],[_[3],_[1],0]];for(let g=0;g<4;++g)N(E[g],E[g],F.rotationScale),T(E[g],E[g],F.position),D(E[g],o,E[g],a);h={type:"polygon",rings:[E],spatialReference:a,cache:{}},h.rings[0][4]=h.rings[0][0],u.set(r,h)}switch(l(t,e,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:p,triangleTest:m,positions:b}=i,R=p.rings[0][0],I=p.rings[0][1],x=p.rings[0][2],j=n.getObjectTransform(s);n.getComponentPositions(s,r,b);const{indices:J,data:w,stride:P,startIndex:de,endIndex:pe}=b;for(let F=de;F<pe;F+=3){const E=P*J[F],g=P*J[F+1],K=P*J[F+2];switch(L(R,w[E],w[E+1],w[E+2]),L(I,w[g],w[g+1],w[g+2]),L(x,w[K],w[K+1],w[K+2]),N(R,R,j.rotationScale),N(I,I,j.rotationScale),N(x,x,j.rotationScale),T(R,R,j.position),T(I,I,j.position),T(x,x,j.position),D(R,o,R,a),D(I,o,I,a),D(x,o,x,a),m(t,e,p)){case y.DISCARD:return!1;case y.KEEP:return!0}}return i.type!=="intersects"}const _=A(),qe=Ae;let v=class extends W{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Pe({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._handles=new Oe}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=Z(this._dataQueryEngineInstance),this._handles=Z(this._handles),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:i,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:i,extent:$e.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const i=this._ensureQueryJSON(e);if(i.returnGeometry)throw new X("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(i.returnCentroid)throw new X("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(i,r),s=Je.fromJSON(n);return s.features.forEach(o=>{o.geometry=null}),s}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var l;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||je,r="esriGeometryPolygon",i=((l=this.layer.fields)==null?void 0:l.map(u=>u.toJSON()))??[],n=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),o=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new qe({hasZ:!0,hasM:!1,geometryType:r,fields:i,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:a,scheduler:n,priority:o}),this._dataQueryEngineInstance}};c([d({constructOnly:!0})],v.prototype,"layerView",void 0),c([d({constructOnly:!0})],v.prototype,"priority",void 0),c([d({constructOnly:!0})],v.prototype,"spatialIndex",void 0),c([d()],v.prototype,"spatialReference",null),c([d()],v.prototype,"layer",null),c([d()],v.prototype,"defaultQueryJSON",null),v=c([q("esri.views.3d.layers.i3s.I3SQueryEngine")],v);class at{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:r,index:i}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const s=(o=r.attributeInfo)==null?void 0:o.attributeData;if(s!=null)for(const a of Object.keys(s))n[a]=te(s[a],i);return n}getAttribute(e,r){var o;if(r===this._objectIdField)return e.id;const{meta:i,index:n}=e,s=(o=i.attributeInfo)==null?void 0:o.attributeData;return s!=null?te(s[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,i,n,s,o]=this._getFeatureExtent(e,se);return new V([5],[r,i,n,s,i,n,s,o,n,r,o,n,r,i,n])}getCentroid(e,r){if(e.geometry)return Ke(new V,e.geometry,r.hasZ,r.hasM);const[i,n,s,o,a,l]=this._getFeatureExtent(e,se);return new V([0],[(i+o)/2,(n+a)/2,(s+l)/2])}cloneWithGeometry(e,r){const{id:i,index:n,meta:s}=e;return{id:i,index:n,meta:s,geometry:r}}}const se=A(),We=A();let O=class extends W{constructor(t){super(t),this.events=new Me}forEach(t){this.forAllFeatures(e=>(t(e),C.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const i of t)e(r(i,We))}forEachInBounds(t,e){this.forAllFeatures(r=>{const i=this.getFeatureExtent(r,Ue);return Ce(t,Ne(i,ze))&&e(r),C.CONTINUE},r=>{if(k(r.node.mbs,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=t[0]&&S[2]<=t[2]&&S[1]>=t[1]&&S[3]<=t[3])return C.CONTINUE;const i=Math.max(t[0],Math.min(S[0],t[2])),n=Math.max(t[1],Math.min(S[1],t[3])),s=S[0]-i,o=S[1]-n;return s*s+o*o<=S[3]*S[3]?C.CONTINUE:C.SKIP})}};c([d({constructOnly:!0})],O.prototype,"featureAdapter",void 0),c([d({constructOnly:!0})],O.prototype,"forAllFeatures",void 0),c([d({constructOnly:!0})],O.prototype,"getFeatureExtent",void 0),c([d({constructOnly:!0})],O.prototype,"sourceSpatialReference",void 0),c([d({constructOnly:!0})],O.prototype,"viewSpatialReference",void 0),O=c([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],O);const S=ie(0,0,0,0),Ue=A(),ze=Qe();export{f as B,v as d,O as l,at as o};