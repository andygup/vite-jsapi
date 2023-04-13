import{m as p}from"./index-9f03d686.js";import{h as m}from"./PooledRBush-50085ce3.js";import{v as h}from"./georeference-cdeda8f3.js";import"./spatialReferenceEllipsoidUtils-c4e438b2.js";import"./vec32-59ce53ff.js";import"./BufferView-595f5888.js";class w{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m;const s=this._createMeshData(t),o=e!=null?await e.invoke("createIndexThread",s,{transferList:n}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(o)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map(s=>new Uint32Array(s))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let s=0;for(let o=0;o<e.length;o+=9)n[s++]=c(e,o,o+3,o+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let s=0;for(const a of n)s+=a.length/3;const o=new Array(s);let l=0;for(const a of n)for(let i=0;i<a.length;i+=3)o[l++]=c(e,3*a[i],3*a[i+1],3*a[i+2]);return t.load(o),{result:t.toJSON()}}_createMeshData(t){const e=(t.transform?h({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(n=>!n.faces)?{position:e}:{position:e,components:t.components.map(n=>n.faces)}}_createPooledRBush(){return new m(9,p("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(r,t,e,n){return{minX:Math.min(r[t],r[e],r[n]),maxX:Math.max(r[t],r[e],r[n]),minY:Math.min(r[t+1],r[e+1],r[n+1]),maxY:Math.max(r[t+1],r[e+1],r[n+1]),p0:[r[t],r[t+1],r[t+2]],p1:[r[e],r[e+1],r[e+2]],p2:[r[n],r[n+1],r[n+2]]}}export{w as default};
