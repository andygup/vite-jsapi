import{cl as m,cM as U,B as E,c_ as q,m as g,a as Y,ab as z,ad as D,d as K,O}from"./index-9f03d686.js";import{t as k}from"./CircularArray-ef508845.js";import{t as I,E as X,T as w}from"./color-b838c155.js";import{s as R,m as H}from"./AttributeStoreView-2236bda4.js";import{t as y,r as Z,a as G}from"./BufferPool-7b932f2d.js";import{c as v,a as N}from"./VertexArrayObject-a9648fde.js";import{F as M}from"./enums-74e97557.js";import{n as W}from"./schemaUtils-408a96b1.js";import{o as j}from"./BaseTileRenderer-a83a6a22.js";import{d as J}from"./visualVariablesUtils-9c29b7c3.js";import{w as l}from"./WGLContainer-01faf576.js";import{o as Q}from"./FeatureContainer-337f1acf.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./definitions-43101aab.js";import"./TiledDisplayObject-56d5c29f.js";import"./Container-983c644e.js";import"./Texture-43db1794.js";import"./utils-e884b172.js";import"./MaterialKey-3bd82cb0.js";import"./visualVariablesUtils-1400c8a8.js";import"./ExpandedCIM-6cea9dff.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-972531c3.js";import"./floatRGBA-8960ccf7.js";import"./util-1709f557.js";import"./ProgramTemplate-053d0c9b.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-e7d3cbbc.js";const p=6,C=4294967296;let ee=class S{constructor(e){this._savedCursor=null,this._savedOffset=null,this._head=e,this._cursor=e}static from(e){const t=te.from(new Float32Array(e));return new S(t)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(e){return this._cursor.setComputedMinZoom(e)}boundsComputedAnchorX(e){return this._cursor.boundsComputedAnchorX(e)}boundsComputedAnchorY(e){return this._cursor.boundsComputedAnchorY(e)}setBoundsComputedAnchorX(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}setBoundsComputedAnchorY(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}boundsX(e){return this._cursor.boundsX(e)}boundsY(e){return this._cursor.boundsY(e)}boundsWidth(e){return this._cursor.boundsWidth(e)}boundsHeight(e){return this._cursor.boundsHeight(e)}link(e){if(e._head!=null)return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var r;const e=new S((r=this._head)==null?void 0:r.copy());if(!e._head)return e;let t=e._head,s=e._head._link;for(;s;)t._link=s.copy(),t=s,s=t._link;return e}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}nextId(){const e=this.id;for(;e===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._savedCursor&&(this._cursor=this._savedCursor),this._savedOffset!=null&&(this._cursor._offset=this._savedOffset)}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&s!=null&&(s._link=t._link),!0;s=t,t=t._link}return!1}},te=class T{constructor(e){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=e}static from(e){return new T(new Float32Array(e))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset]}set id(e){this._buffer[this._offset]=e}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(e){this._buffer[this._offset+8]=e}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(e){return this._buffer[this._offset+10+e*p]}boundsComputedAnchorY(e){return this._buffer[this._offset+10+e*p+1]}setBoundsComputedAnchorX(e,t){this._buffer[this._offset+10+e*p]=t}setBoundsComputedAnchorY(e,t){this._buffer[this._offset+10+e*p+1]=t}boundsX(e){return this._buffer[this._offset+10+e*p+2]}boundsY(e){return this._buffer[this._offset+10+e*p+3]}boundsWidth(e){return this._buffer[this._offset+10+e*p+4]}boundsHeight(e){return this._buffer[this._offset+10+e*p+5]}link(e){let t=this;for(;t._link;)t=t._link;t._link=e}getCursor(){return this.copy()}copy(){const e=new T(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e}peekId(){const e=this._offset+10+this.boundsCount*p+0;return e>=this._buffer.length?0:this._buffer[e]}next(){let e=0;for(;this._offset<this._buffer.length&&e++<100&&(this._offset===-1?this._offset=0:this._offset+=10+this.boundsCount*p,this.id===C););return this.id!==C&&this._offset<this._buffer.length}delete(e){const t=this._offset,s=this.lookup(e);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,s}lookup(e){const t=this._offset;if(this._offsets.instance==null){this._offsets.instance=new Map;const s=this.copy();s._offset=-1;let r=0;for(;s.next();)s.id!==r&&(this._offsets.instance.set(s.id,s._offset),r=s.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),this.id!==C||(this._offset=t,!1))}_computeCount(){const e=this._offset;let t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}};class b{constructor(e,t,s,r,i){this.target=e,this.geometryType=t,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}}let se=class P{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,s,r){const i=new P(e,t);if(r!=null)for(const n of r)s.seekIndex(n),i.addRecord(s);else for(;s.next();)i.addRecord(s);return i}addRecord(e){const t=this._target,s=this.geometryType,r=e.materialKey;let i=e.indexFrom,n=e.indexCount;const o=e.vertexFrom,a=e.vertexCount;if(n||(i=o,n=a),this._head==null){const f=new b(t,s,r,i,n);return void(this._head=new y(f))}let d=null,u=this._head;for(;u;){if(i<u.data.indexFrom)return this._insert(r,i,n,d,u);d=u,u=u.next}this._insert(r,i,n,d,null)}forEach(e){this._head!=null&&this._head.forEach(e)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,s,r,i){if(r==null&&i==null){const n=new b(this._target,this.geometryType,e,t,s);this._head=new y(n)}return r==null&&i!=null?this._insertAtHead(e,t,s,i):r!=null&&i==null?this._insertAtEnd(e,t,s,r):r!=null&&i!=null?this._insertAtMiddle(e,t,s,r,i):void 0}_insertAtHead(e,t,s,r){const i=t+s;if(e===r.data.materialKey&&i===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=s;else{const n=new b(this._target,this.geometryType,e,t,s);this._head=new y(n),this._head.next=r}}_insertAtEnd(e,t,s,r){if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=s;else{const i=new b(this._target,this.geometryType,e,t,s),n=new y(i);r.next=n}}_insertAtMiddle(e,t,s,r,i){const n=t+s;if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(e===i.data.materialKey&&n===i.data.indexFrom)i.data.indexFrom=t,i.data.indexCount+=s;else{const o=new b(this._target,this.geometryType,e,t,s),a=new y(o);r.next=a,a.next=i}}};const re=1.25,L=32767,ie=L<<16|L;let $=class{constructor(e,t,s,r){const i=Z.create(t*s*Uint32Array.BYTES_PER_ELEMENT,r);this.size=t,this.strideInt=s,this.bufferType=e,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=i,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize>0&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize>0&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),m(this._gpu,e=>e.dispose()),this._gpu=null}_invalidateTriangleBuffer(){m(this._gpuComputeTriangles,e=>e.dispose()),this._gpuComputeTriangles=null}destroy(){m(this._gpu,e=>e.dispose()),m(this._gpuComputeTriangles,e=>e.dispose()),m(this._cpu,e=>e.destroy()),m(this._cpu2,e=>e.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new G({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(!(this.maxAvailableSpace()>=e)&&e*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const t=this._cpu.length/this.strideInt,s=Math.round((t+e)*re),r=s*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(t,s-t)}}set(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e,this.dirty.end))}getGPUBuffer(e,t=!1){if(!this.bufferSize)return null;if(t){if(this.bufferType!=="index")throw new Error("Tired to get triangle buffer, but target is not an index buffer");return this._gpuComputeTriangles==null&&(this._gpuComputeTriangles=this._createComputeBuffer(e)),this._gpuComputeTriangles}return this._gpu==null&&(this._gpu=this._createBuffer(e)),this._gpu}getCPUBuffer(){if(!this._cpu2){const e=this._cpu.slice();this._cpu2=e}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(e,t,s,r){const i=s*this.strideInt;if(!i)return 0;const n=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,o=new Uint32Array(e,n,i),a=U(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,d=i,u=a/this.strideInt-t;if(r!==0)for(let f=0;f<o.length;f++)o[f]+=r;return this._cpu.array.set(o,a),this.dirty.start=Math.min(this.dirty.start,a),this.dirty.end=Math.max(this.dirty.end,a+d),this.fillPointer=Math.max(this.fillPointer,a+d),u}free(e,t,s){const r=e*this.strideInt,i=(e+t)*this.strideInt;if(s===!0)for(let n=e;n!==e+t;n++)this._cpu.array[n*this.strideInt]=ie;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(e,t)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),this._gpu==null)return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(e){const t=M.DYNAMIC_DRAW;return this.bufferType==="index"?v.createIndex(e,t,this._cpu.array):v.createVertex(e,t,this._cpu.array)}_createComputeBuffer(e){const t=M.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let r=0;r<this.fillPointer;r+=3)s[r/3]=this._cpu.array[r];return v.createIndex(e,t,s)}};const ne=0,he=1;let ae=class{constructor(e,t){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=e,this._stage=t}destroy(){for(const[e,t]of this._vaos)t!=null&&t.dispose(!1);this._indexBuffer=E(this._indexBuffer),this._vertexBuffer=E(this._vertexBuffer)}insert(e,t,s){if(!e.records.byteLength)return;const r=e.stride;if(this._vertexBuffer&&this._indexBuffer){const i=e.indices.byteLength/4,n=e.vertices.byteLength/r;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(n);const{vertices:o,indices:a}=e,d=R.from(e.records),u=this._vertexBuffer.insert(o,0,o.byteLength/r,0),f=this._indexBuffer.insert(a,0,a.byteLength/4,u);if(d.forEach(c=>{c.indexFrom+=f,c.vertexFrom+=u}),U(this._records,"Expected records to be defined").link(d),t)this._indicesInvalid=!0;else if(this._displayList){const c=d.getCursor();for(;c.next();)this._displayList.addRecord(c)}}else{const i=e.indices.byteLength/4,n=e.vertices.byteLength/r,o=r/Uint32Array.BYTES_PER_ELEMENT,a=this._stage.bufferPool;this._records=R.from(e.records),this._indexBuffer=new $("index",i,1,a),this._vertexBuffer=new $("vertex",n,o,a),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/r,0),t&&(this._indicesInvalid=!0)}}remove(e){if(this._records!=null)for(const t of e){const s=this._records.getCursor();if(!s.lookup(t))continue;const r=s.indexFrom,i=s.vertexFrom;let n=s.indexCount,o=s.vertexCount;for(;s.next()&&s.id===t;)n+=s.indexCount,o+=s.vertexCount;this._indexBuffer.free(r,n),this._vertexBuffer.free(i,o,!0),this._records.delete(t)}}getVAO(e,t,s,r){if(!this._vertexBuffer||!this._indexBuffer||this._records==null||!this._vertexBuffer.bufferSize)return null;const i=r?he:ne;let n=this._vaos.get(i);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||r&&this._indexBuffer.invalidatedComputeBuffer)&&(m(n,d=>d.dispose(!1)),n=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const o=this._indexBuffer.getGPUBuffer(e,i===1),a=this._vertexBuffer.getGPUBuffer(e);return n||(n=new N(e,s,t,{geometry:a},o),this._vaos.set(i,n)),n}forEachCommand(e){if(this._records!=null){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder;this._displayList=se.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(e)}}_sortIndices(e){const t=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const r=e.getCursor(),i=[],n=[],o=[];for(;r.next();)n.push(r.index),o.push(r.sortKey),i.push(r.id);n.sort((u,f)=>{const c=o[f],_=o[u];return _===c?i[f]-i[u]:c-_});const a=e.getCursor(),d=t?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const u of n){if(!a.seekIndex(u))throw new Error("Expected to find index");if(t){const{indexFrom:f,indexCount:c}=a;a.indexFrom=s;for(let _=0;_<c;_++)this._indexBuffer.set(s++,d.array[f+_])}else{const{vertexFrom:f,vertexCount:c}=a,_=this._vertexBuffer.strideInt,V=f*_,F=V+c*_;a.vertexFrom=s/_;for(let x=V;x<F;x++)this._vertexBuffer.set(s++,d.array[x])}}this._cursorIndexOrder=n,this._displayList=null}};const oe=50,ue=4,A=100;let de=0;class fe extends H{constructor(e,t,s,r,i,n){super(e,t,s,r),this.instanceId=de++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new k(A),this._bufferPatches=new k(A),this._lastCommitTime=0,this.transforms.labelMat2d=q(),this._store=i,this._requestLabelUpdate=n}destroy(){super.destroy(),this._renderState.current.geometry.forEach(e=>e.destroy()),this._renderState.next!=null&&this._renderState.next.geometry.forEach(e=>e.destroy()),this._renderState.current=null,this._renderState.next=null}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}get updateStatus(){return`renderState:${!!this._renderState.current}, ${!!this._renderState.next}, hasData:${this.hasData}, queue:${this._patches.size}`}getGeometry(e){return this._renderState.current.geometry.get(e)}patch(e,t){this.patchCount++,e.clear&&this._patches.size>=oe&&this._dropPatches();const s=e,r=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;t&&r?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!t,this._patches.enqueue(s)),this.requestRender()}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let t=0;t<ue;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();this._renderState.swap=!0,this._swap()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,this._renderState.next!=null&&(this._renderState.current.geometry.forEach(e=>e.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(e==null||!e.clear||this._renderState.next===null)for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue();t!=null&&this._patchBuffer(t)}}_updateMesh(){var t,s,r,i;const e=this._patches.dequeue();if(e!=null){if(g("esri-2d-update-debug")){const n=e,o=(t=n.addOrUpdate)==null?void 0:t.tileKeyOrigin,a=this.key.id===o?"SELF":o;let d="";for(let u=0;u<5;u++)d+=(i=(r=(s=n.addOrUpdate)==null?void 0:s.data[u])==null?void 0:r.records)!=null&&i.byteLength?1:0;console.debug(this.key.id,"FeatureTile:patch",`[clear: ${n.clear} origin: ${a}, end:${n.end} data:${d}]`)}e.clear===!0&&(this._renderState.next!=null&&(this._renderState.next.geometry.forEach(n=>n.destroy()),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},g("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(e),e.end&&(g("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates())}}_patch(e){I(t=>{this._remove(t,e.remove),this._insert(t,e,!1)})}_patchBuffer(e){I(t=>{this._insert(t,e,!0)})}_insert(e,t,s){var r,i;try{const n=this._renderState.next??this._renderState.current,o=(r=t.addOrUpdate)==null?void 0:r.data[e],a=n.geometry;if(o==null)return;a.has(e)||(g("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Creating geometry buffer ${e}`),a.set(e,new ae(e,this.stage))),g("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Inserting into ${e}, version=${(i=t.addOrUpdate)==null?void 0:i.version} stride=${o.stride}`),a.get(e).insert(o,t.sort,s),e===X.LABEL&&this._insertLabelMetrics(t.type,o.metrics,t.clear)}catch{}}_insertLabelMetrics(e,t,s){const r=this._renderState.next??this._renderState.current;if(t==null)return;const i=ee.from(t);if(r.metrics!=null){if(e==="update"){const n=i.getCursor();for(;n.next();)r.metrics.delete(n.id)}r.metrics.link(i)}else r.metrics=i}_remove(e,t){const s=(this._renderState.next??this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=this._renderState.next??this._renderState.current;if(t!=null&&e.length)for(const s of e)for(;t.delete(s););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(s==null)break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach(s=>this._patches.enqueue(s))}}const le=g("featurelayer-order-by-server-enabled");class ce extends Q{constructor(e,t,s,r){super(e),this._hitTestsRequests=[],this._layer=s,this._layerView=t,this._onUpdate=r}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){let t=this._hitTestsRequests.find(({x:r,y:i})=>r===e.x&&i===e.y);const s=Y();return t?t.resolvers.push(s):(t={x:e.x,y:e.y,resolvers:[s]},this._hitTestsRequests.push(t)),this.requestRender(),s.promise}onTileData(e,t){const s=le&&"orderBy"in this._layer&&this._layer.orderBy,r=s&&(s==null?void 0:s.length)&&!s[0].valueExpression&&s[0].field,i=!!s&&this._layerView.orderByFields===r;e.patch(t,i),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(e){const{minScale:t,maxScale:s}=this._layer.effectiveScaleRange,r=e.state.scale;r<=(t||1/0)&&r>=s&&super.doRender(e)}afterRender(e){super.afterRender(e),this._hitTestsRequests.length&&this.requestRender()}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(e){const{rendererSchema:t}=e.rendererInfo;if((t==null?void 0:t.type)==="dot-density"&&(t==null?void 0:t.dotSize)>1||(t==null?void 0:t.type)==="heatmap")for(const r of this.children)r.stencilRef=r.key.level+1;else super.setStencilReference(e)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(s=>{var r;return!!((r=s.labelingInfo)!=null&&r.length)&&s.labelsVisible});const e=this._layer.featureReduction,t=e&&"labelingInfo"in e&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[l.label],target:()=>this.hasLabels?this.children:null,drawPhase:w.LABEL|w.LABEL_ALPHA}),s=e.registerRenderPass({name:"geometry",brushes:[l.fill,l.dotDensity,l.line,l.marker,l.heatmap,l.pieChart,l.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),r=e.registerRenderPass({name:"highlight",brushes:[l.fill,l.dotDensity,l.line,l.marker,l.pieChart,l.text],target:()=>this.children,drawPhase:w.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),s,r,t]}}let B=class extends j{constructor(){super(...arguments),this.type="symbol"}install(h){const e=()=>this.notifyChange("updating"),t=new ce(this.tileInfoView,this.layerView,this.layer,e);this.featuresView=t,h.addChild(t)}uninstall(h){h.removeChild(this.featuresView),this.featuresView=E(this.featuresView)}fetchResource(h,e){const{url:t}=h,s=this.featuresView.stage;try{return s.resourceManager.fetchResource(t,{signal:e.signal})}catch(r){return K(r)?Promise.resolve({width:0,height:0}):Promise.reject(r)}}isUpdating(){var r;const h=super.isUpdating(),e=!this.featuresView||this.featuresView.isUpdating(),t=(r=this.featuresView)==null?void 0:r.hasEmptyAttributeView(),s=h||e||h&&t;return g("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}
  -> updatingTiles ${h}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${e}`),s}hitTest(h){return this.featuresView.hitTest(h)}supportsRenderer(h){return h!=null&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(h.type)}onConfigUpdate(h){let e=null;if(h&&"visualVariables"in h){const t=(W(h).visualVariables||[]).map(s=>{const r=s.clone();return"normalizationField"in s&&(r.normalizationField=null),s.valueExpression&&s.valueExpression!=="$view.scale"&&(r.valueExpression=null,r.field="nop"),r});e=J(t)}this.featuresView.setRendererInfo(h,e,this.layerView.featureEffect)}onTileData(h){const e=this.tiles.get(h.tileKey);e&&h.data&&this.featuresView.onTileData(e,h.data),this.layerView.view.labelManager.requestUpdate()}onTileError(h){const e=this.tiles.get(h.tileKey);e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(h=>h.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(h=>h.unlock())}async getMaterialItems(h){return this.featuresView.getMaterialItems(h)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(h){const e=this.tileInfoView.getTileBounds(O(),h),t=()=>this.layerView.view.labelManager.requestUpdate(),s=this.tileInfoView.getTileResolution(h.level),r=this.featuresView.attributeView;return new fe(h,s,e[0],e[3],r,t)}disposeTile(h){this.featuresView.removeChild(h),h.destroy(),this.layerView.view.labelManager.requestUpdate()}};B=z([D("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],B);const We=B;export{We as default};
