import{v as h}from"./index-c18a96f3.js";import{h as c}from"./PooledRBush-24cc671a.js";import{v as p}from"./georeference-8c87265f.js";import"./quickselect-228eff3e.js";class A{async createIndex(t,n){const r=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new c;const s=this._createMeshData(t),o=n!=null?await n.invoke("createIndexThread",s,{transferList:r}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(o)}createIndexThread(t){const n=new Float64Array(t.position),r=this._createPooledRBush();return t.components?this._createIndexComponentsThread(r,n,t.components.map(s=>new Uint32Array(s))):this._createIndexAllThread(r,n)}_createIndexAllThread(t,n){const r=new Array(n.length/9);let s=0;for(let o=0;o<n.length;o+=9)r[s++]=m(n,o,o+3,o+6);return t.load(r),{result:t.toJSON()}}_createIndexComponentsThread(t,n,r){let s=0;for(const a of r)s+=a.length/3;const o=new Array(s);let l=0;for(const a of r)for(let i=0;i<a.length;i+=3)o[l++]=m(n,3*a[i],3*a[i+1],3*a[i+2]);return t.load(o),{result:t.toJSON()}}_createMeshData(t){const n=(t.transform?p({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(r=>!r.faces)?{position:n}:{position:n,components:t.components.map(r=>r.faces)}}_createPooledRBush(){return new c(9,h("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function m(e,t,n,r){return{minX:Math.min(e[t],e[n],e[r]),maxX:Math.max(e[t],e[n],e[r]),minY:Math.min(e[t+1],e[n+1],e[r+1]),maxY:Math.max(e[t+1],e[n+1],e[r+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[n],e[n+1],e[n+2]],p2:[e[r],e[r+1],e[r+2]]}}export{A as default};