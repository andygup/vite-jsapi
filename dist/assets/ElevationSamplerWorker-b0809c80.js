import{m as f}from"./index-b4b3ae7d.js";import{P as s}from"./PooledRBush-7d1a4451.js";import{g as d}from"./georeference-41018c72.js";import"./mat3f64-c33d428a.js";import"./mat4f64-06a72c15.js";import"./spatialReferenceEllipsoidUtils-e4c3a965.js";import"./quat-ffcf1bfe.js";import"./vec4-3dd523e8.js";import"./quatf64-5b0101cd.js";import"./vec32-9c00e89c.js";import"./BufferView-0c0be981.js";class M{async createIndex(e,t){const a=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new s;const l=this._createMeshData(e),n=t!=null?await t.invoke("createIndexThread",l,{transferList:a}):this.createIndexThread(l).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(e){const t=new Float64Array(e.position),a=this._createPooledRBush();return e.components?this._createIndexComponentsThread(a,t,e.components.map(l=>new Uint32Array(l))):this._createIndexAllThread(a,t)}_createIndexAllThread(e,t){const a=new Array(t.length/9);let l=0;for(let n=0;n<t.length;n+=9)a[l++]=m(t,n,n+3,n+6);return e.load(a),{result:e.toJSON()}}_createIndexComponentsThread(e,t,a){let l=0;for(const o of a)l+=o.length/3;const n=new Array(l);let u=0;for(const o of a)for(let c=0;c<o.length;c+=3)n[u++]=m(t,o[c]*3,o[c+1]*3,o[c+2]*3);return e.load(n),{result:e.toJSON()}}_createMeshData(e){const t=(e.transform?d({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return!e.components||e.components.some(a=>!a.faces)?{position:t}:{position:t,components:e.components.map(a=>a.faces)}}_createPooledRBush(){return new s(9,f("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function m(r,e,t,a){return{minX:Math.min(r[e],r[t],r[a]),maxX:Math.max(r[e],r[t],r[a]),minY:Math.min(r[e+1],r[t+1],r[a+1]),maxY:Math.max(r[e+1],r[t+1],r[a+1]),p0:[r[e],r[e+1],r[e+2]],p1:[r[t],r[t+1],r[t+2]],p2:[r[a],r[a+1],r[a+2]]}}export{M as default};
