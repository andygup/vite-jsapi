import{d as D,ae as C,ai as F,c as b,bt as K,aR as S,cQ as $}from"./index-6e11f365.js";import{i as E}from"./ExpandedCIM-a7fa0210.js";import{a as P,s as w}from"./diffUtils-d7f96f30.js";import{p as L}from"./visualVariablesUtils-26533cc8.js";import{S as A}from"./color-6aa54378.js";import{x as O,o as x,b as U,E as z,c as B}from"./Matcher-a2b28255.js";import{p as j}from"./BaseProcessor-1763f65a.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./MaterialKey-d4a29da3.js";import"./definitions-e9823d3c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-4a16b4e7.js";import"./floatRGBA-4dfc3dfe.js";import"./visualVariablesUtils-c6c91d03.js";import"./enums-74e97557.js";import"./VertexElementDescriptor-2925c6af.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-cc066a0e.js";import"./featureConversionUtils-ea75af90.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./defaultsJSON-b087dd4d.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-fe125474.js";import"./LRUCache-3361c9d5.js";import"./MemCache-1033102b.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-c8bd0c80.js";import"./featureFlags-47ea12bc.js";class H{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,r){const s=this._resourceMap,i=s.get(e);if(i)return i;let a=this._inFlightResourceMap.get(e);if(a)return a;try{a=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...r}),this._inFlightResourceMap.set(e,a),a.then(o=>(this._inFlightResourceMap.delete(e),s.set(e,o),o))}catch(o){return D(o)?null:{width:0,height:0}}return a}getResource(e){return this._resourceMap.get(e)??null}}function T(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}function k(t){const e=t.message,r={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const s in e.data){const i=s,a=e.data[i];if(r.message.data[i]=null,a!=null){const o=a.stride,n=a.indices.slice(0),l=a.vertices.slice(0),c=a.records.slice(0),h={stride:o,indices:n,vertices:l,records:c,metrics:S(a.metrics,f=>f.slice(0))};r.transferList.push(n,l,c),r.message.data[i]=h}}return r}let I=class extends j{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new H(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){var i;const r=e.schema.processors[0];if(r.type!=="symbol")return;const s=P(this._schema,r);(w(s,"mesh")||w(s,"target"))&&(t.mesh=!0,(i=t.why)==null||i.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,r,s){return b(s),this._onTileData(t,e,r,s)}onTileClear(t){const e={clear:!0};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}onTileError(t,e,r){const s=r.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:s})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(r=>{for(const s of r)s.message.tileKey===e.id&&this._updateTileMesh("append",e,k(s),[],!1,!1,null)})}_addBufferData(t,e){var r;this._bufferData.has(t)||this._bufferData.set(t,[]),(r=this._bufferData.get(t))==null||r.push(k(e))}_createFactory(t){const{geometryType:e,objectIdField:r,fields:s}=this.service,i=(c,h)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",c,h),a={geometryType:e,fields:s,spatialReference:K.fromJSON(this.spatialReference)},o=new O(i,this.tileStore.tileScheme.tileInfo),{matcher:n,aggregateMatcher:l}=t.mesh;return this._store=o,this._matchers.feature=x(n,o,a,this._resourceManagerProxy),this._matchers.aggregate=S(l,c=>x(c,o,a,this._resourceManagerProxy)),new U(e,r,o)}async _onTileData(t,e,r,s){var f;b(s);const{type:i,addOrUpdate:a,remove:o,clear:n,end:l}=e,c=!!this._schema.mesh.sortKey;if(!a){const u={type:i,addOrUpdate:null,remove:o,clear:n,end:l,sort:c};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:u},s)}const h=this._processFeatures(t,a,r,s,(f=e.status)==null?void 0:f.version);try{const u=await h;if(u==null){const d={type:i,addOrUpdate:null,remove:o,clear:n,end:l,sort:c};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:d},s)}const m=[];for(const d of u){let p=!1;const g=d.message.bufferIds,y=t.key.id,M=d.message.tileKey;if(y!==M&&g!=null){if(!this.tileStore.get(M)){this._addBufferData(y,d),m.push(d);continue}let _=this._bufferIds.get(M);_||(_=new Set,this._bufferIds.set(M,_));const R=Array.from(g);for(const v of R){if(_.has(v)){p=!0;break}_.add(v)}}p||(this._addBufferData(y,d),m.push(d))}await Promise.all(m.map(d=>{const p=t.key.id===d.message.tileKey,g=p?e.remove:[],y=p&&e.end;return this._updateTileMesh(i,t,d,g,y,!!e.clear,s.signal)}))}catch(u){this._handleError(t,u,s)}}async _updateTileMesh(t,e,r,s,i,a,o){const n=t,l=r.message.tileKey,c=!!this._schema.mesh.sortKey;l!==e.key.id&&(i=!1);const h={type:n,addOrUpdate:S(r,u=>u.message),remove:s,clear:a,end:i,sort:c},f={transferList:S(r,u=>u.transferList)||[],signal:o};return b(f),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:l,data:h},f)}async _processFeatures(t,e,r,s,i){if(e==null||!e.hasFeatures)return null;const a={transform:t.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:t.scale},l=await this._matchers.feature,c=await this._matchers.aggregate;b(s);const h=this._getLabelInfos(t,e);return await o.analyze(e.getCursor(),this._resourceManagerProxy,l,c,a,n),b(s),this._writeFeatureSet(t,e,a,h,o,r,i)}_writeFeatureSet(t,e,r,s,i,a,o){const n=e.getSize(),l=this._schema.mesh.matcher.symbologyType,c=new z(t.key.id,{features:n,records:n,metrics:0},l,a,l!==A.HEATMAP,o),h={viewingMode:"",scale:t.scale},f=e.getCursor();for(;f.next();)try{const m=f.getDisplayId(),d=s!=null?s.get(m):null;i.writeCursor(c,f,r,h,t.level,d,this._resourceManagerProxy)}catch{}const u=t.tileInfoView.tileInfo.isWrappable;return c.serialize(u)}_handleError(t,e,r){if(!D(e)){const s={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(e==null)return null;if(e.type==="subtype"){const s={type:"subtype",classes:{}};let i=!1;for(const a in e.classes){const o=e.classes[a].filter(n=>T(n,t.scale));i=i||!!o.length,s.classes[a]=o}return i?s:null}const r=e.classes.filter(s=>T(s,t.scale));return r.length?{type:"simple",classes:r}:null}_getLabels(t,e){if(e.type==="subtype"){const r=this.service.subtypeField,s=$(r,"Expected to find subtype Field"),i=t.readAttribute(s);return i==null?[]:e.classes[i]??[]}return e.classes}_getLabelInfos(t,e){const r=this._getLabelingSchemaForScale(t);if(r==null)return null;const s=new Map,i=e.getCursor();for(;i.next();){const a=i.getDisplayId(),o=[],n=L(a),l=n&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",c=this._getLabels(i,r);for(const h of c){if(h.target!==l)continue;const f=i.getStorage(),u=n&&l==="feature"?f.getComputedStringAtIndex(i.readAttribute("referenceId"),h.fieldIndex):f.getComputedStringAtIndex(a,h.fieldIndex);if(!u)continue;const m=E(u.toString()),d=m[0],p=m[1];this._store.getMosaicItem(h.symbol,B(d)).then(g=>{o[h.index]={glyphs:g.glyphMosaicItems??[],rtl:p,index:h.index}})}s.set(a,o)}return s}};I=C([F("esri.views.2d.layers.features.processors.SymbolProcessor")],I);const Se=I;export{Se as default};