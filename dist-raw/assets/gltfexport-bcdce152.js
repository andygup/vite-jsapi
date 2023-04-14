import{I as v,s as O,gu as Y,gt as Q,gv as ee,K as G,b as S,L as te,gH as H,i_ as se,gJ as U,em as W,aR as ie,az as re,fK as ne,jj as ae}from"./index-468a9268.js";import{e as oe,f as fe}from"./quat-ef322c14.js";import{b as ce,I as he,c as le}from"./quatf64-5b0101cd.js";import{M as ue}from"./meshFeatureSet-338c155c.js";import{M as de,s as _e}from"./georeference-1e564369.js";import{D as _,a as E}from"./enums-08489827.js";import{a as Z,b as pe,c as me,e as ge}from"./imageutils-de0c2f75.js";import{i as D}from"./resourceUtils-4053cd3b.js";import"./vec4-3dd523e8.js";import"./imageUtils-42075577.js";import"./earcut-db592379.js";import"./Indices-cfef030f.js";import"./deduplicate-ea470617.js";import"./External-b242d32b.js";import"./infoFor3D-91dff30a.js";import"./mat3f64-c33d428a.js";import"./mat4f64-06a72c15.js";import"./spatialReferenceEllipsoidUtils-25b7e4fc.js";import"./FeatureSet-09da8445.js";import"./Field-88bfb4af.js";import"./fieldType-31d95250.js";import"./vec32-f6519ba1.js";import"./BufferView-07376cf4.js";import"./basicInterfaces-cc58f4ac.js";var L;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(L||(L={}));class w{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=w.HEADER_SIZE,this._length+=w.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=w.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,L.JSON,32);t&&this._writeChunk(t,r,L.BIN)}_writeHeader(){this._outView.setUint32(0,w.MAGIC,!0),this._outView.setUint32(4,w.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const n=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}_writeArrayBuffer(e,t,s,r,n){new Uint8Array(e,s,n).set(new Uint8Array(t,r,n),0)}_textToArrayBuffer(e){return new TextEncoder().encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}w.HEADER_SIZE=12;w.CHUNK_HEADER_SIZE=8;w.MAGIC=1179937895;w.VERSION=2;var b;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(b||(b={}));var A;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(A||(A={}));var x;(function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"})(x||(x={}));var p;(function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"})(p||(p={}));var J;(function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(J||(J={}));var C;(function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"})(C||(C={}));var $;(function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"})($||($={}));class we{constructor(e,t,s,r,n){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==x.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?e:Math.min(r,e);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case _.BYTE:return new Int8Array(e,t);case _.FLOAT:return new Float32Array(e,t);case _.SHORT:return new Int16Array(e,t);case _.UNSIGNED_BYTE:return new Uint8Array(e,t);case _.UNSIGNED_INT:return new Uint32Array(e,t);case _.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(t=>{const s=new Uint8Array(t);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case _.UNSIGNED_BYTE:case _.UNSIGNED_SHORT:r.normalized=!0;break}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}finalize(){const e=this._bufferView;return new Promise(t=>{const s=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&s.push(this._asyncWritePromise),t(v(s))}).then(()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case _.BYTE:case _.UNSIGNED_BYTE:return 1;case _.SHORT:case _.UNSIGNED_SHORT:return 2;case _.UNSIGNED_INT:case _.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case p.SCALAR:return 1;case p.VEC2:return 2;case p.VEC3:return 3;case p.VEC4:case p.MAT2:return 4;case p.MAT3:return 9;case p.MAT4:return 16}}}class K{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new we(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(t,s),s+=r.byteSize;return t}finalize(){var e;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise(t=>{t(v(this.getViewFinalizePromises()))}).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),(e=this._gltf.extras)==null||e.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function Ee(i,e){if(i.components)for(const t of i.components)t.faces&&t.shading==="smooth"&&Ae(t,e)}function Ae(i,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));const t=i.faces,{position:s,normal:r}=e,n=t.length/3;for(let a=0;a<n;++a){const o=t[a*3]*3,f=t[a*3+1]*3,c=t[a*3+2]*3,d=O(xe,s[o],s[o+1],s[o+2]),u=O(be,s[f],s[f+1],s[f+2]),l=O(Re,s[c],s[c+1],s[c+2]),N=Y(u,u,d),R=Y(l,l,d),m=Q(N,N,R);r[o]+=m[0],r[o+1]+=m[1],r[o+2]+=m[2],r[f]+=m[0],r[f+1]+=m[1],r[f+2]+=m[2],r[c]+=m[0],r[c+1]+=m[1],r[c+2]+=m[2]}for(let a=0;a<r.length;a+=3)O(B,r[a],r[a+1],r[a+2]),ee(B,B),r[a]=B[0],r[a+1]=B[1],r[a+2]=B[2]}function Te(i){if(i.transform!=null)return i.transform.getOriginPoint(i.spatialReference);const e=i.extent.xmax-i.extent.width/2,t=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new G({x:e,y:t,z:s,spatialReference:i.extent.spatialReference})}const xe=S(),be=S(),Re=S(),B=S(),P=te.getLogger("gltf");class ye{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===b.GLB||t.options.imageOutputType===A.GLB;s&&(t.binChunkBuffer=new K(this.gltf)),e.forEachScene(r=>{this._addScene(r)}),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]);const r=this._addNode(s);t.nodes.push(r)}),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;H(s,se)||(t.translation=U(s));const r=e.rotation;oe(r,he)||(t.rotation=ce(r));const n=e.scale;H(n,W)||(t.scale=U(n)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode(o=>{t.children||(t.children=[]);const f=this._addNode(o);t.children.push(f)});const a=this.gltf.nodes.length;return this.gltf.nodes.push(t),a}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras,r=s.options.bufferOutputType===b.GLB;let n;r?n=s.binChunkBuffer:n=new K(this.gltf),this.params.origin||(this.params.origin=Te(e));const a=this.params.ignoreLocalTransform?ie(e.transform,h=>new de({origin:[h.origin[0],h.origin[1],h.origin[2]],geographic:!1})):e.transform,o=_e(e.vertexAttributes,a,this.params.origin,{geographic:this.params.geographic,unit:"meters"});Ee(e,o),this._flipYZAxis(o);const f=n.addBufferView(_.FLOAT,p.VEC3,x.ARRAY_BUFFER);let c;o.normal&&(c=n.addBufferView(_.FLOAT,p.VEC3,x.ARRAY_BUFFER));let d;e.vertexAttributes.uv&&(d=n.addBufferView(_.FLOAT,p.VEC2,x.ARRAY_BUFFER));let u;o.tangent&&(u=n.addBufferView(_.FLOAT,p.VEC4,x.ARRAY_BUFFER));let l;e.vertexAttributes.color&&(l=n.addBufferView(_.UNSIGNED_BYTE,p.VEC4,x.ARRAY_BUFFER)),f.startAccessor("POSITION"),c&&c.startAccessor("NORMAL"),d&&d.startAccessor("TEXCOORD_0"),u&&u.startAccessor("TANGENT"),l&&l.startAccessor("COLOR_0");const N=o.position.length/3,{position:R,normal:m,tangent:y}=o,{color:g,uv:T}=e.vertexAttributes;for(let h=0;h<N;++h)f.push(R[h*3]),f.push(R[h*3+1]),f.push(R[h*3+2]),c&&m!=null&&(c.push(m[h*3]),c.push(m[h*3+1]),c.push(m[h*3+2])),d&&T!=null&&(d.push(T[h*2]),d.push(T[h*2+1])),u&&y!=null&&(u.push(y[h*4]),u.push(y[h*4+1]),u.push(y[h*4+2]),u.push(y[h*4+3])),l&&g!=null&&(l.push(g[h*4]),l.push(g[h*4+1]),l.push(g[h*4+2]),l.push(g[h*4+3]));const X=f.endAccessor(),k=this._addAccessor(f.index,X);let V;if(c){const h=c.endAccessor();V=this._addAccessor(c.index,h)}let M;if(d){const h=d.endAccessor();M=this._addAccessor(d.index,h)}let z;if(u){const h=u.endAccessor();z=this._addAccessor(u.index,h)}let F;if(l){const h=l.endAccessor();F=this._addAccessor(l.index,h)}let I;e.components&&e.components.length>0&&e.components[0].faces?(I=n.addBufferView(_.UNSIGNED_INT,p.SCALAR,x.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(I,e.components,t,k,V,M,z,F)):this._addMeshVertexNonIndexed(e.components,t,k,V,M,z,F),f.finalize(),c&&c.finalize(),d&&d.finalize(),u&&u.finalize(),I&&I.finalize(),l&&l.finalize(),r||n.finalize();const q=this.gltf.meshes.length;return this.gltf.meshes.push(t),q}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(e!=null)for(let s=1,r=2;s<e.length;s+=t,r+=t){const n=e[s],a=e[r];e[s]=a,e[r]=-n}}_addMaterial(e){if(e===null)return;const t=this._materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=C.MASK;break;case"auto":case"blend":s.alphaMode=C.BLEND;break}e.alphaCutoff!==.5&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=o=>o**2.1,n=o=>{const f=o.toRgba();return f[0]=r(f[0]/255),f[1]=r(f[1]/255),f[2]=r(f[2]/255),f};if(e.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),e.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),e.normalTexture!=null&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof ue){if(e.emissiveTexture!=null&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),e.emissiveColor!=null){const o=n(e.emissiveColor);s.emissiveFactor=[o[0],o[1],o[2]]}e.occlusionTexture!=null&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),e.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,P.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),a}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,re(this._textureMap,e,()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r})}_addImage(e){const t=this._imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const n=e.data;s.extras=n;for(let o=0;o<this.gltf.images.length;++o)if(n===this.gltf.images[o].extras)return o;const a=this.gltf.extras;switch(a.options.imageOutputType){case A.GLB:{const o=a.binChunkBuffer.addBufferView(_.UNSIGNED_BYTE,p.SCALAR);if(D(n))n.data!=null&&o.writeOutToBuffer(n.data,0);else{const f=Z(n).then(({data:c,type:d})=>(s.mimeType=d,c));o.writeAsync(f).then(()=>{o.finalize()})}s.bufferView=o.index;break}case A.DataURI:if(D(n)){P.warnOnce("Image export for basis compressed textures not available.");break}else s.uri=pe(n);break;default:if(D(n)){P.warnOnce("Image export for basis compressed textures not available.");break}else a.promises.push(Z(n).then(({data:o,type:f})=>{s.uri=o,s.mimeType=f}));break}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=E.REPEAT,s=E.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=E.CLAMP_TO_EDGE,s=E.CLAMP_TO_EDGE;break;case"mirror":t=E.MIRRORED_REPEAT,s=E.MIRRORED_REPEAT;break}else{switch(e.wrap.vertical){case"clamp":s=E.CLAMP_TO_EDGE;break;case"mirror":s=E.MIRRORED_REPEAT;break}switch(e.wrap.horizontal){case"clamp":t=E.CLAMP_TO_EDGE;break;case"mirror":t=E.MIRRORED_REPEAT;break}}const r={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,n,a,o,f){for(const c of t){e.startAccessor("INDICES");for(let l=0;l<c.faces.length;++l)e.push(c.faces[l]);const d=e.endAccessor(),u={attributes:{POSITION:r},indices:this._addAccessor(e.index,d),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(u.attributes.NORMAL=n),a&&(u.attributes.TEXCOORD_0=a),o&&c.shading!=="flat"&&(u.attributes.TANGENT=o),f&&(u.attributes.COLOR_0=f),s.primitives.push(u)}}_addMeshVertexNonIndexed(e,t,s,r,n,a,o){const f={attributes:{POSITION:s}};r&&(f.attributes.NORMAL=r),n&&(f.attributes.TEXCOORD_0=n),a&&(f.attributes.TANGENT=a),o&&(f.attributes.COLOR_0=o),e&&(f.material=this._addMaterial(e[0].material)),t.primitives.push(f)}}class Ne{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){ne(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class Be{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class Se{constructor(e){this.mesh=e,this.name="",this.translation=S(),this.rotation=le(),this.scale=U(W),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){fe(this.rotation,e[0],e[1],e[2])}}const Ie="model.gltf",j="model.glb";function Oe(i,e,t){var u;e=e||{};const s=new ye(i,e,t);let r=s.params;r?r.origin||(r.origin=new G({x:-1,y:-1,z:-1})):r={origin:new G({x:-1,y:-1,z:-1})};const n=r.origin,a=s.gltf,o=((u=a.extras)==null?void 0:u.promises)??[];let f=1,c=1,d=null;return v(o).then(()=>{const l={origin:n};delete a.extras;const N=typeof e.jsonSpacing=="number"?e.jsonSpacing:4,R=JSON.stringify(a,(y,g)=>{if(y!=="extras"){if(g instanceof ArrayBuffer){if(me(g))switch(e.imageOutputType){case A.DataURI:case A.GLB:break;case A.External:default:{const T=`img${c}.png`;return c++,l[T]=g,T}}switch(e.bufferOutputType){case b.DataURI:return ge(g);case b.GLB:if(d)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");d=g;return;case b.External:default:{const T=`data${f}.bin`;return f++,l[T]=g,T}}}return g}},N);return e.bufferOutputType===b.GLB||e.imageOutputType===A.GLB?l[j]=new w(R,d).buffer:l[Ie]=R,l})}function Le(i,e){return Oe(i,{bufferOutputType:b.GLB,imageOutputType:A.GLB,jsonSpacing:0},e)}class Ce{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){ae(new Blob([this._file.data],{type:this._file.type}),e)}}function it(i,e){const t=new Ne,s=new Be;return t.addScene(s),s.addNode(new Se(i)),Le(t,e).then(r=>new Ce(r[j],r.origin))}export{it as toBinaryGLTF};