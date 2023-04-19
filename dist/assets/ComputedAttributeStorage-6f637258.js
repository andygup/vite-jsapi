import{f as O,h as P,i as H,j,k as Y,u as V}from"./featureConversionUtils-a0b43be6.js";import{O as k,h as f}from"./OptimizedGeometry-af84d2ad.js";import{F as w}from"./FieldsIndex-a5650eec.js";import{m as c,bB as Z,cP as Q,L as J,dx as $,a as X,i as U,E as F,dy as q,dz as K,_ as W,aR as tt,D as et}from"./index-cc043433.js";import{D as st,A as R}from"./arcadeTimeUtils-889d3e3e.js";import{g as it}from"./centroid-1116d1e7.js";import{d as rt}from"./diffUtils-8c2aaf62.js";import{M as nt,I as at,J as ot,N as G,A as ut,f as dt}from"./definitions-3f56d206.js";import{D as ht,a as lt,g as y,b as ct,c as ft,d as _t,e as pt,f as gt,h as B,j as h}from"./visualVariablesUtils-551b4332.js";import{G as mt}from"./color-562cdfe4.js";import{e as _}from"./enums-08489827.js";class b{static fromBuffer(t,e){return new b(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new b(s,e)}constructor(t,e){this._mask=0,this._buf=t,this._mask=e}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t,s=this._buf[this._getIndex(e)],r=1<<e%32;return!!(s&r)}hasRange(t,e){let s=t,i=e;for(;s%32&&s!==i;){if(this.has(s))return!0;s++}for(;i%32&&s!==i;){if(this.has(s))return!0;i--}if(s===i)return!1;for(let r=s/32;r!==i/32;r++)if(this._buf[r])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,i=e;for(;s%32&&s!==i;)this.set(s++);for(;i%32&&s!==i;)this.set(i--);if(s!==i)for(let r=s/32;r!==i/32;r++)this._buf[r]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new b(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],i=e*32;if(s)for(;s;)s&1&&t(i),s>>>=1,i++}}countSet(){let t=0;return this.forEachSet(e=>{t++}),t}}let I=0;const D=c("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],yt=D[0],xt=D[1],bt=D[2],It=D[3],C=c("featurelayer-simplify-payload-size-factors")??[1,2,4],Tt=C[0],At=C[1],St=C[2],Dt=c("featurelayer-simplify-mobile-factor")??2,Et=c("esri-mobile");class N{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=t,this._layerSchema=e}static createInstance(){return I++,I=I>65535?0:I,I}get isEmpty(){return this._deleted!=null&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const i=Et?Dt:1;e>4e6?s=St*i:e>1e6?s=At*i:e>5e5?s=Tt*i:e>1e5&&(s=i);let r=0;t>4e3?r=It*s:t>2e3?r=bt*s:t>100?r=xt:t>15&&(r=yt);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),r*n}createQuantizedExtrudedQuad(t,e){return new k([5],[t-1,e,1,-1,1,1,-1,1,-1,-1])}parseTimestampOffset(t){return t}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,i){const r=this.copy();return r._tx+=t,r._ty+=e,r._sx*=s,r._sy*=i,r}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(s!==void 0)return s;for(const i of this._joined){i.setIndex(this.getIndex());const r=i._readAttribute(t,e);if(r!==void 0)return r}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const i of Object.keys(s))t[i]=s[i]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}hasField(t){return this.fields.has(t)}geometry(){const t=this.readHydratedGeometry(),e=O(t,this.geometryType,this.hasZ,this.hasM),s=Z(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata?this._datetimeMetadata:(this._datetimeMetadata=st.create(this._layerSchema.fields,this._layerSchema),this._datetimeMetadata)}autocastArcadeDate(t,e){var s;return e&&e instanceof Date?this.isUnknownDateTimeField(t)?R.unknownDateJSToArcadeDate(e):R.dateJSAndZoneToArcadeDate(e,((s=this.contextTimeReference)==null?void 0:s.timeZone)??"system"):e}isUnknownDateTimeField(t){var e;return((e=this.dateTimeReferenceFieldIndex)==null?void 0:e.fieldTimeZone(t))==="unknown"}fieldSourceTimeZone(t){var e;return((e=this.dateTimeReferenceFieldIndex)==null?void 0:e.fieldTimeZone(t))??""}get layerPreferredTimeZone(){var t;return((t=this.dateTimeReferenceFieldIndex)==null?void 0:t.layerPreferredTimeZone)??""}field(t){if(this.hasField(t))return this.autocastArcadeDate(t,this.readAttribute(t,!0));for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t)){const s=e._readAttribute(t,!0);return this.autocastArcadeDate(t,s)}throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.fields.fields.map(t=>t.name)}castToText(t=!1){if(!t)return JSON.stringify(this.readLegacyFeature());const e=this.readLegacyFeature();if(!e)return JSON.stringify(null);const s={geometry:e.geometry,attributes:{...e.attributes??{}}};for(const i in s.attributes){const r=s.attributes[i];r instanceof Date&&(s.attributes[i]=r.getTime())}return JSON.stringify(s)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){var e;return{attributes:this._readAttributes(),geometry:(t==null?void 0:t.keepGeometryType)===!0?this.geometry():((e=this.geometry())==null?void 0:e.toJSON())??null}}castAsJsonAsync(t=null,e=null){return Promise.resolve(this.castAsJson(e))}removeIds(t){if(this._objectIdToIndex==null){const s=new Map,i=this.getCursor();for(;i.next();){const r=Q(i.getObjectId());s.set(r,i.getIndex())}this._objectIdToIndex=s}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){this._deleted==null&&(this._deleted=b.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return this._deleted==null||!this._deleted.has(this.getIndex())}_computeCentroid(){if(this.geometryType!=="esriGeometryPolygon")return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=this.getQuantizationTransform()??null;return it(new k,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}function Ft({coords:l,lengths:t}){let e=0;for(const s of t){for(let i=1;i<s;i++)l[2*(e+i)]+=l[2*(e+i)-2],l[2*(e+i)+1]+=l[2*(e+i)-1];e+=s}}class m extends N{static fromFeatures(t,e){const{objectIdField:s,geometryType:i}=e,r=P([],t,i,!1,!1,s);for(let n=0;n<r.length;n++)r[n].displayId=t[n].displayId;return m.fromOptimizedFeatures(r,e)}static fromFeatureSet(t,e){const s=H(t,e.objectIdField);return m.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,i=m.fromOptimizedFeatures(s,e);return i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform,i._fieldsIndex=new w(e.fields),i}static fromOptimizedFeatures(t,e,s){const i=N.createInstance(),r=new m(i,t,e);return r._fieldsIndex=new w(e.fields),r._transform=s,r}constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=s==null?void 0:s.geometryType,this._features=e}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!(s.objectId&&e.has(s.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){var t;return(t=this._current)==null?void 0:t.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new m(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return j(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return O(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return t==null?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return f(this._current)?Y(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return Ft(e),e}readHydratedGeometry(){const t=this._current.geometry;if(t==null)return null;const e=t.clone();return this._transform!=null&&V(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!f(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return e==null?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!f(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return e==null?t:e.translate[1]-t*e.scale[1]}getX(){return f(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return f(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!f(this._current)){if(this._current.centroid!=null){const[s,i]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(s,i)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return f(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(t,e){var r;const s=this._fieldsIndex.get(t);if(!s)return;let i=this._current.attributes[s.name];return i==null?i:(((r=this.fields.get(t))==null?void 0:r.type)==="esriFieldTypeTimestampOffset"&&(i=this.parseTimestampOffset(i)),e&&this.fields.isDateField(t)?new Date(i):i)}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}}const x=J.getLogger("esri.views.layers.2d.features.support.AttributeStore"),A=_t(pt,x),T={sharedArrayBuffer:c("esri-shared-array-buffer"),atomics:c("esri-atomics")};function z(l,t){return e=>t(l(e))}class zt{constructor(t,e,s,i){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:r,layout:n,textureOnly:o}=i;this.textureOnly=o||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,o||(this.data=this._initData(r,s,t,e))}get buffer(){return tt(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=this.data;for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=this.data;for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const i=this.data;for(const r of s)i[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,e,s){const i=this.data;i[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){const i=this.data;i[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=y(t);return this.data[s*this.texelSize+e]}setData(t,e,s){const i=y(t),r=1<<e;if(!(this.layout&r)){x.error("mapview-attributes-store","Tried to set a value for a texel's readonly component");return}this.data!=null&&(this.data[i*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}lock(){this.pixelType===_.UNSIGNED_BYTE&&(!this._shared||!T.atomics||this._ctype==="local"||Atomics.store(this.data,0,1))}unlock(){this.pixelType===_.UNSIGNED_BYTE&&(!this._shared||!T.atomics||this._ctype==="local"||Atomics.store(this.data,0,0))}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=this.data;e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const i=!this._shared&&this._ctype!=="local",r=this.pixelType,n=this.layout,o=this.data,u=i&&o.slice(t*s,(e+1)*s)||null;return{start:t,end:e,data:u,pixelType:r,layout:n}}_initData(t,e,s,i){const r=s&&i!=="local"?SharedArrayBuffer:ArrayBuffer,n=mt(t),o=n.BYTES_PER_ELEMENT,u=new n(new r(e*e*4*o));for(let a=0;a<u.length;a+=4)u[a+1]=255;return u}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class Pt{constructor(t,e){this._client=t,this.config=e,this.updatingHandles=new $,this._blocks=new Array,this._filters=new Array(nt),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?_.FLOAT:_.UNSIGNED_BYTE;A(`Creating AttributeStore ${T.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:_.UNSIGNED_BYTE,layout:1},{pixelType:_.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:_.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort(),this.updatingHandles.destroy()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const t=this.updatingHandles.updating||!!this._nextUpdate;return c("esri-2d-log-updating")&&console.log(`Updating AttributeStore: ${t}
  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})
  -> nextUpdate: ${!!this._nextUpdate}
`),t}update(t,e){this.config=e;const s=e.schema.processors[0].storage,i=rt(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),!!i&&(c("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),t.storage.data=!0,this._schema=s,this._attributeComputeInfo=null,s!=null)){switch(s.target){case"feature":this._targetType=lt;break;case"aggregate":this._targetType=ht;break}if(s.type==="subtype"){this._attributeComputeInfo={isSubtype:!0,subtypeField:s.subtypeField,map:new Map};for(const r in s.mapping){const n=s.mapping[r];if(n!=null&&n.vvMapping!=null)for(const o of n.vvMapping)this._bindAttribute(o,parseInt(r,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},s.vvMapping!=null)for(const r of s.vvMapping)this._bindAttribute(r);if(s.attributeMapping!=null)for(const r of s.attributeMapping)this._bindAttribute(r)}}}onTileData(t,e){if(e.addOrUpdate==null)return;const s=e.addOrUpdate.getCursor();for(;s.next();){const i=s.getDisplayId();this.setAttributeData(i,s)}}async setHighlight(t,e){const i=this._getBlock(0),r=e.map(n=>y(n));i.lock(),i.unsetComponentAllTexels(0,1),i.setComponent(0,1,r),i.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e,s){c("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:i,spatialReference:r}=s,{filters:n}=e,o=n.map((d,p)=>this._updateFilter(d,p,i,r)),a=(await Promise.all(o)).some(d=>d);c("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),a&&(t.storage.filters=!0,c("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,i){const r=y(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,s,i)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?at:0}unsetAttributeData(t){const e=y(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=y(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==ct(t))return;const i=this._attributeComputeInfo,r=this.config.supportsTextureFloat?1:2,n=4;let o=null;i&&(i.isSubtype?o=i.map.get(e.readAttribute(i.subtypeField)):o=i.map,!(!o||!o.size)&&o.forEach((u,a)=>{const d=a*r%n,p=Math.floor(a*r/n),g=this._getBlock(p+ot),E=u(e);if(this.config.supportsTextureFloat)g.setData(s,d,E);else if(E===G)g.setData(s,d,255),g.setData(s,d+1,255);else{const M=et(Math.round(E),-32767,32766)+32768,v=M&255,L=(M&65280)>>8;g.setData(s,d,v),g.setData(s,d+1,L)}}))}sendUpdates(){if(c("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=X(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const e={blocks:this._blocks.map(s=>s!=null?s.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const s=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}else c("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")};c("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const i=this.updatingHandles.addPromise(this._client.update(e,this._signal).then(s).catch(s));return this._client.render(this._signal),i}).catch(s=>{if(U(s))return this._createResourcesPromise=null,this._createResources();x.error(new F("mapview-attribute-store","Encountered an error during client update",s))}),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){function s(){const{normalizationField:a}=t;return a?d=>{const p=d.readAttribute(a);return p?d.readAttribute(t.field)/p:null}:d=>d.readAttribute(t.field)}function i(){return t.normalizationField&&x.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),a=>a.getComputedNumericAtIndex(t.fieldIndex)}let r;if(t.fieldIndex!=null)r=i();else if(t.field)r=s();else return;const{valueRepresentation:n}=t;n&&(r=z(r,d=>gt(d,n)));const o=a=>a===null||isNaN(a)||a===1/0||a===-1/0?G:a,u=this._attributeComputeInfo;if(u.isSubtype){const a=u.map.get(e)??new Map;a.set(t.binding,z(r,o)),u.map.set(e,a)}else u.map.set(t.binding,z(r,o))}_createResources(){if(this._createResourcesPromise!=null)return this._createResourcesPromise;this._getBlock(ut),this._getBlock(dt),A("Initializing AttributeStore");const t={shared:T.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:q(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{if(U(s)){this._createResourcesPromise=null;return}x.error(new F("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>this._createResourcesPromise==null?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(e!=null)return e;A(`Initializing AttributeBlock at index ${t}`);const s=T.sharedArrayBuffer,i=this._client.type,r=new zt(s,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return A("Expanding block size to",t,this._blocks),K(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return x.error(new F("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,i){const r=this._filters[e],n=r!=null&&r.hash;if(!r&&!t||n===JSON.stringify(t))return!1;if(t==null){if(!r)return!1;const u=1<<e+1,a=this._getBlock(0);return this._filters[e]=null,a.setComponentAllTexels(0,u),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,i),!0}async _getFilter(t,e){const s=this._filters[t];if(s!=null)return s;const{default:i}=await W(()=>import("./FeatureFilter-a994b04a.js"),["assets/FeatureFilter-a994b04a.js","assets/index-cc043433.js","assets/index-d832a396.css","assets/timeSupport-5750f446.js","assets/featureConversionUtils-a0b43be6.js","assets/OptimizedGeometry-af84d2ad.js","assets/OptimizedFeatureSet-5c82fe5a.js","assets/projectionSupport-642d54a8.js","assets/json-9ae8d6f8.js","assets/utils-6eff4397.js","assets/normalizeUtils-0017e781.js","assets/normalizeUtilsCommon-f6f02a9c.js","assets/Query-74ceeec9.js","assets/Field-7a917492.js","assets/fieldType-79ae9077.js","assets/FeatureStore2D-186f674c.js","assets/CircularArray-7e036143.js","assets/diffUtils-8c2aaf62.js","assets/FieldsIndex-a5650eec.js","assets/arcadeTimeUtils-889d3e3e.js","assets/executionError-e2eca390.js","assets/centroid-1116d1e7.js","assets/definitions-3f56d206.js","assets/visualVariablesUtils-551b4332.js","assets/color-562cdfe4.js","assets/enums-eb6e4255.js","assets/enums-08489827.js","assets/VertexElementDescriptor-24e04d97.js","assets/visualVariablesUtils-201ef882.js"]),r=new i({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new w(e.fields)});return this._filters[t]=r,r}isVisible(t){return!!(this._getBlock(0).getData(t,0)&2)}getFilterFlags(t){let e=0;const s=ft(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const n=!!(s&1<<r),o=this._filters[r],u=!n||o==null||o.check(t);e|=(u?1:0)<<r}let i=0;if(this._idsToHighlight.size){const r=t.getObjectId();i=this.getHighlightFlag(r)}return e<<1|i}}class wt{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return B(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function S(l,t,e){if(!(l.length>t))for(;l.length<=t;)l.push(e)}class Ht{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new wt,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(b.create(this._allocatedSize,h)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);const s=this._numerics[t];S(s,e,0)}_ensureInstanceId(t){const e=this._instanceIds;S(e,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);const s=this._strings[t];S(s,e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),B(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&h)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&h,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&h,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&h,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&h,0,s)}getComputedNumericAtIndex(t,e){const s=t&h;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const i=t&h;this._ensureNumeric(e,i),this._numerics[e][i]=s}getInstanceId(t){const e=t&h;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&h;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&h;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const i=t&h;this._ensureString(e,i),this._strings[e][i]=s}getXMin(t){return this._bounds[(t&h)*4]}getYMin(t){return this._bounds[(t&h)*4+1]}getXMax(t){return this._bounds[(t&h)*4+2]}getYMax(t){return this._bounds[(t&h)*4+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let i=1/0,r=1/0,n=-1/0,o=-1/0;s.forEachVertex((a,d)=>{i=Math.min(i,a),r=Math.min(r,d),n=Math.max(n,a),o=Math.max(o,d)});const u=t&h;return S(this._bounds,u*4+4,0),this._bounds[u*4]=i,this._bounds[u*4+1]=r,this._bounds[u*4+2]=n,this._bounds[u*4+3]=o,!0}}export{Pt as A,Ht as C,m as F,b as S,N as a};