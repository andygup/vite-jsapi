import{g_ as Z,ey as k,g$ as I,h0 as K,h1 as U,fE as x,b as p,fk as q,fo as g,fq as M,bt as P,bs as f,fl as E,h2 as W,fU as D,h3 as T,fj as F,Q as G,t as H,fi as J,fn as A,h4 as N,fx as tt,gZ as et,fp as st,h5 as V,c as R,gW as it}from"./index-4d2185ff.js";import{n as rt}from"./mat3f64-221ce671.js";import{n as nt}from"./mat4f64-1413b4a7.js";import{n as ot}from"./quatf64-3363c48e.js";class ct{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&Z(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*C);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,C));e++)this._items.push(this._allocator())}}const C=1024;let l=class u{constructor(e,s,i){this._itemByteSize=e,this._itemCreate=s,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}get(){this._itemsPtr===0&&Z(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const s=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let i=0;i<this._itemsPerBuffer;++i)this._items.push(this._itemCreate(s,i*this._itemByteSize));this._buffers.push(s)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=m){return new u(16,I,e)}static createVec3f64(e=m){return new u(24,K,e)}static createVec4f64(e=m){return new u(32,U,e)}static createMat3f64(e=m){return new u(72,rt,e)}static createMat4f64(e=m){return new u(128,nt,e)}static createQuatf64(e=m){return new u(32,ot,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const m=4*k.KILOBYTES;l.createVec2f64();const h=l.createVec3f64();l.createVec4f64();l.createMat3f64();const at=l.createMat4f64();l.createQuatf64();var _;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(_||(_={}));function ut(t){return t?O(x(t.origin),x(t.direction)):O(p(),p())}function O(t,e){return{origin:t,direction:e}}function Zt(t,e){const s=ht.get();return s.origin=t,s.direction=e,s}function ft(t,e,s){const i=q(t.direction,g(s,e,t.origin));return M(s,t.origin,P(s,t.direction,i)),s}const ht=new ct(()=>ut());function mt(t,e){const s=q(t,e)/(f(t)*f(e));return-E(s)}function S(){return W()}function Y(t,e=S()){return D(e,t)}function _t(t,e){return T(t[0],t[1],t[2],e)}function gt(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function $t(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function d(t){return t[3]}function pt(t){return t}function Pt(t,e,s,i){return T(t,e,s,i)}function Mt(t,e,s){return t!==s&&F(s,t),s[3]=t[3]+e,s}function dt(t,e,s){return G.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===s?s:Y(t,s)}function y(t,e,s){if(H(e))return!1;const{origin:i,direction:r}=e,n=yt;n[0]=i[0]-t[0],n[1]=i[1]-t[1],n[2]=i[2]-t[2];const o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(o===0)return!1;const c=2*(r[0]*n[0]+r[1]*n[1]+r[2]*n[2]),$=c*c-4*o*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-t[3]*t[3]);if($<0)return!1;const z=Math.sqrt($);let a=(-c-z)/(2*o);const w=(-c+z)/(2*o);return(a<0||w<a&&w>0)&&(a=w),!(a<0)&&(s&&(s[0]=i[0]+r[0]*a,s[1]=i[1]+r[1]*a,s[2]=i[2]+r[2]*a),!0)}const yt=p();function wt(t,e){return y(t,e,null)}function bt(t,e,s){if(y(t,e,s))return s;const i=j(t,e,h.get());return M(s,e.origin,P(h.get(),e.direction,J(e.origin,i)/f(e.direction))),s}function j(t,e,s){const i=h.get(),r=at.get();A(i,e.origin,e.direction);const n=d(t);A(s,i,e.origin),P(s,s,1/f(s)*n);const o=L(t,e.origin),c=mt(e.origin,s);return N(r,c+o,i),tt(s,s,r),s}function Bt(t,e,s){return y(t,e,s)?s:(ft(e,t,s),v(t,s,s))}function v(t,e,s){const i=g(h.get(),e,t),r=P(h.get(),i,t[3]/f(i));return M(s,r,t)}function St(t,e){const s=g(h.get(),e,t),i=et(s),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))}function L(t,e){const s=g(h.get(),e,t),i=f(s),r=d(t),n=r+Math.abs(r-i);return E(r/n)}const b=p();function Q(t,e,s,i){const r=g(b,e,t);switch(s){case _.X:{const n=V(r,b)[2];return R(i,-Math.sin(n),Math.cos(n),0)}case _.Y:{const n=V(r,b),o=n[1],c=n[2],$=Math.sin(o);return R(i,-$*Math.cos(c),-$*Math.sin(c),Math.cos(o))}case _.Z:return st(i,r);default:return}}function X(t,e){const s=g(B,e,t);return f(s)-t[3]}function zt(t,e,s,i){const r=X(t,e),n=Q(t,e,_.Z,B),o=P(B,n,s-r);return M(i,e,o)}function xt(t,e){const s=it(t,e),i=d(t);return s<=i*i}const B=p(),At=S();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:X,angleToSilhouette:L,axisAt:Q,clear:lt,closestPoint:Bt,closestPointOnSilhouette:j,containsPoint:xt,copy:Y,create:S,distanceToSilhouette:St,elevate:Mt,fromCenterAndRadius:_t,fromRadius:$t,fromValues:Pt,getCenter:pt,getRadius:d,intersectRay:y,intersectRayClosestSilhouette:bt,intersectsRay:wt,projectPoint:v,setAltitudeAt:zt,setExtent:dt,tmpSphere:At,wrap:gt},Symbol.toStringTag,{value:"Module"}));export{xt as N,S as R,d as T,wt as V,Y as _,h as c,ut as d,pt as k,Zt as p,ct as s};