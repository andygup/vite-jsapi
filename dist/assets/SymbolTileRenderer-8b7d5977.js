import{aR as p,cP as U,y as T,d1 as D,m,a as z,ae as Y,ai as X,i as $,O}from"./index-b4b3ae7d.js";import{C as R}from"./CircularArray-7e036143.js";import{v as A,a as K,W as C}from"./color-820677f7.js";import{D as L,W as N}from"./AttributeStoreView-917e620e.js";import{L as y,T as G,F as H}from"./BufferPool-c8b1d3dc.js";import{B as v,V as W}from"./VertexArrayObject-c0fe275b.js";import{U as k}from"./enums-08489827.js";import{s as Z}from"./schemaUtils-8c2b5855.js";import{B as j}from"./BaseTileRenderer-a8af05a1.js";import{k as J}from"./visualVariablesUtils-88902af8.js";import{b as l}from"./WGLContainer-a42a1f0b.js";import{F as Q}from"./FeatureContainer-94601824.js";import"./enums-eb6e4255.js";import"./VertexElementDescriptor-24e04d97.js";import"./definitions-3f56d206.js";import"./TiledDisplayObject-c73a6816.js";import"./Container-7fca7909.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./TextureDescriptor-f1756343.js";import"./sql-336bd077.js";import"./diffUtils-bb218827.js";import"./labelingInfo-90efb402.js";import"./labelUtils-491f598f.js";import"./defaultsJSON-b396ba80.js";import"./jsonUtils-1eb97f8f.js";import"./utils-699d4a1f.js";import"./MaterialKey-6b0e16c7.js";import"./heatmapUtils-5a23fa6d.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./visualVariablesUtils-97a979f8.js";import"./ExpandedCIM-add047dc.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./Rect-df8ea165.js";import"./quantizationUtils-828c101a.js";import"./floatRGBA-dfa15c91.js";import"./featureFlags-eb0cdac8.js";import"./clusterUtils-651430bd.js";import"./SizeVariable-eef1af06.js";import"./colorRamps-e7a401b6.js";import"./LegendOptions-46b1f954.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-ae3367a7.js";import"./util-6d0133c9.js";import"./ProgramTemplate-4c4ab3df.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./earcut-db592379.js";import"./featureConversionUtils-b73aa4b5.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./TileContainer-8bcd1916.js";const _=6,S=4294967296;class w{constructor(e){this._savedCursor=null,this._savedOffset=null,this._head=e,this._cursor=e}static from(e){const t=x.from(new Float32Array(e));return new w(t)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(e){return this._cursor.setComputedMinZoom(e)}boundsComputedAnchorX(e){return this._cursor.boundsComputedAnchorX(e)}boundsComputedAnchorY(e){return this._cursor.boundsComputedAnchorY(e)}setBoundsComputedAnchorX(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}setBoundsComputedAnchorY(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}boundsX(e){return this._cursor.boundsX(e)}boundsY(e){return this._cursor.boundsY(e)}boundsWidth(e){return this._cursor.boundsWidth(e)}boundsHeight(e){return this._cursor.boundsHeight(e)}link(e){if(e._head!=null)return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var i;const e=new w((i=this._head)==null?void 0:i.copy());if(!e._head)return e;let t=e._head,s=e._head._link;for(;s;)t._link=s.copy(),t=s,s=t._link;return e}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}nextId(){const e=this.id;for(;e===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._savedCursor&&(this._cursor=this._savedCursor),this._savedOffset!=null&&(this._cursor._offset=this._savedOffset)}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&s!=null&&(s._link=t._link),!0;s=t,t=t._link}return!1}}class x{constructor(e){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=e}static from(e){return new x(new Float32Array(e))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset]}set id(e){this._buffer[this._offset]=e}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(e){this._buffer[this._offset+8]=e}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(e){return this._buffer[this._offset+10+e*_]}boundsComputedAnchorY(e){return this._buffer[this._offset+10+e*_+1]}setBoundsComputedAnchorX(e,t){this._buffer[this._offset+10+e*_]=t}setBoundsComputedAnchorY(e,t){this._buffer[this._offset+10+e*_+1]=t}boundsX(e){return this._buffer[this._offset+10+e*_+2]}boundsY(e){return this._buffer[this._offset+10+e*_+3]}boundsWidth(e){return this._buffer[this._offset+10+e*_+4]}boundsHeight(e){return this._buffer[this._offset+10+e*_+5]}link(e){let t=this;for(;t._link;)t=t._link;t._link=e}getCursor(){return this.copy()}copy(){const e=new x(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e}peekId(){const e=this._offset+10+this.boundsCount*_+0;return e>=this._buffer.length?0:this._buffer[e]}next(){let e=0;for(;this._offset<this._buffer.length&&e++<100&&(this._offset===-1?this._offset=0:this._offset+=10+this.boundsCount*_,this.id===S););return this.id!==S&&this._offset<this._buffer.length}delete(e){const t=this._offset,s=this.lookup(e);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,s}lookup(e){const t=this._offset;if(this._offsets.instance==null){this._offsets.instance=new Map;const s=this.copy();s._offset=-1;let i=0;for(;s.next();)s.id!==i&&(this._offsets.instance.set(s.id,s._offset),i=s.id)}return this._offsets.instance.has(e)?(this._offset=this._offsets.instance.get(e),this.id===S?(this._offset=t,!1):!0):!1}_computeCount(){const e=this._offset;let t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}class b{constructor(e,t,s,i,r){this.target=e,this.geometryType=t,this.materialKey=s,this.indexFrom=i,this.indexCount=r}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}}class B{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,s,i){const r=new B(e,t);if(i!=null)for(const n of i)s.seekIndex(n),r.addRecord(s);else for(;s.next();)r.addRecord(s);return r}addRecord(e){const t=this._target,s=this.geometryType,i=e.materialKey;let r=e.indexFrom,n=e.indexCount;const o=e.vertexFrom,a=e.vertexCount;if(n||(r=o,n=a),this._head==null){const d=new b(t,s,i,r,n);this._head=new y(d);return}let h=null,u=this._head;for(;u;){if(r<u.data.indexFrom)return this._insert(i,r,n,h,u);h=u,u=u.next}this._insert(i,r,n,h,null)}forEach(e){this._head!=null&&this._head.forEach(e)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,s,i,r){if(i==null&&r==null){const n=new b(this._target,this.geometryType,e,t,s);this._head=new y(n)}if(i==null&&r!=null)return this._insertAtHead(e,t,s,r);if(i!=null&&r==null)return this._insertAtEnd(e,t,s,i);if(i!=null&&r!=null)return this._insertAtMiddle(e,t,s,i,r)}_insertAtHead(e,t,s,i){const r=t+s;if(e===i.data.materialKey&&r===i.data.indexFrom)i.data.indexFrom=t,i.data.indexCount+=s;else{const n=new b(this._target,this.geometryType,e,t,s);this._head=new y(n),this._head.next=i}}_insertAtEnd(e,t,s,i){if(i.data.materialKey===e&&i.data.indexEnd===t)i.data.indexCount+=s;else{const r=new b(this._target,this.geometryType,e,t,s),n=new y(r);i.next=n}}_insertAtMiddle(e,t,s,i,r){const n=t+s;if(i.data.materialKey===e&&i.data.indexEnd===t)i.data.indexCount+=s,i.data.materialKey===r.data.materialKey&&i.data.indexEnd===r.data.indexFrom&&(i.data.indexCount+=r.data.indexCount,i.next=r.next);else if(e===r.data.materialKey&&n===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=s;else{const o=new b(this._target,this.geometryType,e,t,s),a=new y(o);i.next=a,a.next=r}}}const ee=1.25,F=32767,te=F<<16|F;class M{constructor(e,t,s,i){const r=G.create(t*s*Uint32Array.BYTES_PER_ELEMENT,i);this.size=t,this.strideInt=s,this.bufferType=e,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize>0&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize>0&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),p(this._gpu,e=>e.dispose()),this._gpu=null}_invalidateTriangleBuffer(){p(this._gpuComputeTriangles,e=>e.dispose()),this._gpuComputeTriangles=null}destroy(){p(this._gpu,e=>e.dispose()),p(this._gpuComputeTriangles,e=>e.dispose()),p(this._cpu,e=>e.destroy()),p(this._cpu2,e=>e.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new H({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(this.maxAvailableSpace()>=e)return;const s=e*this.strideInt,i=this._cpu.length-this.fillPointer;if(s>i){this.invalidate();const r=this._cpu.length/this.strideInt,n=Math.round((r+e)*ee),o=n*this.strideInt;this._cpu.expand(o*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(r,n-r)}}set(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e,this.dirty.end))}getGPUBuffer(e,t=!1){if(!this.bufferSize)return null;if(t){if(this.bufferType!=="index")throw new Error("Tired to get triangle buffer, but target is not an index buffer");return this._gpuComputeTriangles==null&&(this._gpuComputeTriangles=this._createComputeBuffer(e)),this._gpuComputeTriangles}return this._gpu==null&&(this._gpu=this._createBuffer(e)),this._gpu}getCPUBuffer(){if(!this._cpu2){const e=this._cpu.slice();this._cpu2=e}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(e,t,s,i){const r=s*this.strideInt;if(!r)return 0;const n=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,o=new Uint32Array(e,n,r),h=U(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,u=r,d=h/this.strideInt-t;if(i!==0)for(let f=0;f<o.length;f++)o[f]+=i;return this._cpu.array.set(o,h),this.dirty.start=Math.min(this.dirty.start,h),this.dirty.end=Math.max(this.dirty.end,h+u),this.fillPointer=Math.max(this.fillPointer,h+u),d}free(e,t,s){const i=e*this.strideInt,r=(e+t)*this.strideInt;if(s===!0)for(let n=e;n!==e+t;n++)this._cpu.array[n*this.strideInt]=te;this.dirty.start=Math.min(this.dirty.start,i),this.dirty.end=Math.max(this.dirty.end,r),this.freeList.free(e,t)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),this._gpu==null){this.dirty.start=1/0,this.dirty.end=0;return}this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(e){const t=k.DYNAMIC_DRAW;return this.bufferType==="index"?v.createIndex(e,t,this._cpu.array):v.createVertex(e,t,this._cpu.array)}_createComputeBuffer(e){const t=k.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let i=0;i<this.fillPointer;i+=3)s[i/3]=this._cpu.array[i];return v.createIndex(e,t,s)}}const se=0,ie=1;class re{constructor(e,t){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=e,this._stage=t}destroy(){for(const[e,t]of this._vaos)t!=null&&t.dispose(!1);this._indexBuffer=T(this._indexBuffer),this._vertexBuffer=T(this._vertexBuffer)}insert(e,t,s){if(!e.records.byteLength)return;const i=e.stride;if(!this._vertexBuffer||!this._indexBuffer){const r=e.indices.byteLength/4,n=e.vertices.byteLength/i,o=i/Uint32Array.BYTES_PER_ELEMENT,a=this._stage.bufferPool;this._records=L.from(e.records),this._indexBuffer=new M("index",r,1,a),this._vertexBuffer=new M("vertex",n,o,a),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/i,0),t&&(this._indicesInvalid=!0)}else{const r=e.indices.byteLength/4,n=e.vertices.byteLength/i;this._indexBuffer.ensure(r),this._vertexBuffer.ensure(n);const{vertices:o,indices:a}=e,h=L.from(e.records),u=this._vertexBuffer.insert(o,0,o.byteLength/i,0),d=this._indexBuffer.insert(a,0,a.byteLength/4,u);if(h.forEach(f=>{f.indexFrom+=d,f.vertexFrom+=u}),U(this._records,"Expected records to be defined").link(h),t)this._indicesInvalid=!0;else if(this._displayList){const f=h.getCursor();for(;f.next();)this._displayList.addRecord(f)}}}remove(e){if(this._records!=null)for(const t of e){const s=this._records.getCursor();if(!s.lookup(t))continue;const i=s.indexFrom,r=s.vertexFrom;let n=s.indexCount,o=s.vertexCount;for(;s.next()&&s.id===t;)n+=s.indexCount,o+=s.vertexCount;this._indexBuffer.free(i,n),this._vertexBuffer.free(r,o,!0),this._records.delete(t)}}getVAO(e,t,s,i){if(!this._vertexBuffer||!this._indexBuffer||this._records==null||!this._vertexBuffer.bufferSize)return null;const r=i?ie:se;let n=this._vaos.get(r);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||i&&this._indexBuffer.invalidatedComputeBuffer)&&(p(n,h=>h.dispose(!1)),n=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const o=this._indexBuffer.getGPUBuffer(e,r===1),a=this._vertexBuffer.getGPUBuffer(e);return n||(n=new W(e,s,t,{geometry:a},o),this._vaos.set(r,n)),n}forEachCommand(e){if(this._records!=null){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder;this._displayList=B.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(e)}}_sortIndices(e){const t=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const i=e.getCursor(),r=[],n=[],o=[];for(;i.next();)n.push(i.index),o.push(i.sortKey),r.push(i.id);n.sort((u,d)=>{const f=o[d],c=o[u];return c===f?r[d]-r[u]:f-c});const a=e.getCursor(),h=t?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const u of n){if(!a.seekIndex(u))throw new Error("Expected to find index");if(t){const{indexFrom:d,indexCount:f}=a;a.indexFrom=s;for(let c=0;c<f;c++)this._indexBuffer.set(s++,h.array[d+c])}else{const{vertexFrom:d,vertexCount:f}=a,c=this._vertexBuffer.strideInt,I=d*c,q=I+f*c;a.vertexFrom=s/c;for(let E=I;E<q;E++)this._vertexBuffer.set(s++,h.array[E])}}this._cursorIndexOrder=n,this._displayList=null}}const ne=50,oe=4,P=100;let ae=0;class he extends N{constructor(e,t,s,i,r,n){super(e,t,s,i),this.instanceId=ae++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new R(P),this._bufferPatches=new R(P),this._lastCommitTime=0,this.transforms.labelMat2d=D(),this._store=r,this._requestLabelUpdate=n}destroy(){super.destroy(),this._renderState.current.geometry.forEach(e=>e.destroy()),this._renderState.next!=null&&this._renderState.next.geometry.forEach(e=>e.destroy()),this._renderState.current=null,this._renderState.next=null}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}get updateStatus(){return`renderState:${!!this._renderState.current}, ${!!this._renderState.next}, hasData:${this.hasData}, queue:${this._patches.size}`}getGeometry(e){return this._renderState.current.geometry.get(e)}patch(e,t){this.patchCount++,e.clear&&this._patches.size>=ne&&this._dropPatches();const s=e,i=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;t&&i?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!t,this._patches.enqueue(s)),this.requestRender()}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let t=0;t<oe;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked){this._renderState.swap=!0,this.requestRender();return}this._renderState.swap=!0,this._swap()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,this._renderState.next!=null&&(this._renderState.current.geometry.forEach(e=>e.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!(e!=null&&e.clear&&this._renderState.next!==null))for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue();t!=null&&this._patchBuffer(t)}}_updateMesh(){var t,s,i,r;const e=this._patches.dequeue();if(e!=null){if(m("esri-2d-update-debug")){const n=e,o=(t=n.addOrUpdate)==null?void 0:t.tileKeyOrigin,a=this.key.id===o?"SELF":o;let h="";for(let u=0;u<5;u++)h+=(r=(i=(s=n.addOrUpdate)==null?void 0:s.data[u])==null?void 0:i.records)!=null&&r.byteLength?1:0;console.debug(this.key.id,"FeatureTile:patch",`[clear: ${n.clear} origin: ${a}, end:${n.end} data:${h}]`)}e.clear===!0&&(this._renderState.next!=null&&(this._renderState.next.geometry.forEach(n=>n.destroy()),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},m("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(e),e.end&&(m("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates())}}_patch(e){A(t=>{this._remove(t,e.remove),this._insert(t,e,!1)})}_patchBuffer(e){A(t=>{this._insert(t,e,!0)})}_insert(e,t,s){var i,r;try{const n=this._renderState.next??this._renderState.current,o=(i=t.addOrUpdate)==null?void 0:i.data[e],a=n.geometry;if(o==null)return;a.has(e)||(m("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Creating geometry buffer ${e}`),a.set(e,new re(e,this.stage))),m("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Inserting into ${e}, version=${(r=t.addOrUpdate)==null?void 0:r.version} stride=${o.stride}`),a.get(e).insert(o,t.sort,s),e===K.LABEL&&this._insertLabelMetrics(t.type,o.metrics,t.clear)}catch{}}_insertLabelMetrics(e,t,s){const i=this._renderState.next??this._renderState.current;if(t==null)return;const r=w.from(t);if(i.metrics==null){i.metrics=r;return}if(e==="update"){const n=r.getCursor();for(;n.next();)i.metrics.delete(n.id)}i.metrics.link(r)}_remove(e,t){const i=(this._renderState.next??this._renderState.current).geometry.get(e);t&&t.length&&i&&(i.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=this._renderState.next??this._renderState.current;if(!(t==null||!e.length))for(const s of e)for(;t.delete(s););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(s==null)break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach(s=>this._patches.enqueue(s))}}const ue=m("featurelayer-order-by-server-enabled");class fe extends Q{constructor(e,t,s,i){super(e),this._hitTestsRequests=[],this._layer=s,this._layerView=t,this._onUpdate=i}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){let t=this._hitTestsRequests.find(({x:i,y:r})=>i===e.x&&r===e.y);const s=z();return t?t.resolvers.push(s):(t={x:e.x,y:e.y,resolvers:[s]},this._hitTestsRequests.push(t)),this.requestRender(),s.promise}onTileData(e,t){const s=ue&&"orderBy"in this._layer&&this._layer.orderBy,i=s&&(s==null?void 0:s.length)&&!s[0].valueExpression&&s[0].field,r=!!s&&this._layerView.orderByFields===i;e.patch(t,r),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(e){const{minScale:t,maxScale:s}=this._layer.effectiveScaleRange,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e)}afterRender(e){super.afterRender(e),this._hitTestsRequests.length&&this.requestRender()}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(e){const{rendererSchema:t}=e.rendererInfo;if((t==null?void 0:t.type)==="dot-density"&&(t==null?void 0:t.dotSize)>1||(t==null?void 0:t.type)==="heatmap"){for(const i of this.children)i.stencilRef=i.key.level+1;return}super.setStencilReference(e)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(i=>{var r;return!!((r=i.labelingInfo)!=null&&r.length)&&i.labelsVisible});const e=this._layer.featureReduction,t=e&&"labelingInfo"in e&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[l.label],target:()=>this.hasLabels?this.children:null,drawPhase:C.LABEL|C.LABEL_ALPHA}),s=e.registerRenderPass({name:"geometry",brushes:[l.fill,l.dotDensity,l.line,l.marker,l.heatmap,l.pieChart,l.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),i=e.registerRenderPass({name:"highlight",brushes:[l.fill,l.dotDensity,l.line,l.marker,l.pieChart,l.text],target:()=>this.children,drawPhase:C.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),s,i,t]}}let V=class extends j{constructor(){super(...arguments),this.type="symbol"}install(e){const t=()=>this.notifyChange("updating"),s=new fe(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=s,e.addChild(s)}uninstall(e){e.removeChild(this.featuresView),this.featuresView=T(this.featuresView)}fetchResource(e,t){const{url:s}=e,i=this.featuresView.stage;try{return i.resourceManager.fetchResource(s,{signal:t.signal})}catch(r){return $(r)?Promise.resolve({width:0,height:0}):Promise.reject(r)}}isUpdating(){var n;const e=super.isUpdating(),t=!this.featuresView||this.featuresView.isUpdating(),s=(n=this.featuresView)==null?void 0:n.hasEmptyAttributeView(),r=e||t||e&&s;return m("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${r}
  -> updatingTiles ${e}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${t}`),r}hitTest(e){return this.featuresView.hitTest(e)}supportsRenderer(e){return e!=null&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(e.type)}onConfigUpdate(e){let t=null;if(e&&"visualVariables"in e){const i=(Z(e).visualVariables||[]).map(r=>{const n=r.clone();return"normalizationField"in r&&(n.normalizationField=null),r.valueExpression&&r.valueExpression!=="$view.scale"&&(n.valueExpression=null,n.field="nop"),n});t=J(i)}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(e=>e.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(e=>e.unlock())}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds(O(),e),s=()=>this.layerView.view.labelManager.requestUpdate(),i=this.tileInfoView.getTileResolution(e.level),r=this.featuresView.attributeView;return new he(e,i,t[0],t[3],r,s)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};V=Y([X("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],V);const ct=V;export{ct as default};
