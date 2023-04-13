import{dh as b,di as M,aB as z,U as Z,dj as a,b9 as r,dk as c,df as f,dl as x}from"./index-b4b3ae7d.js";import{j as p}from"./json-9ae8d6f8.js";const o=[0,0];function j(i,s){if(!s)return null;if("x"in s){const n={x:0,y:0};return[n.x,n.y]=i(s.x,s.y,o),s.z!=null&&(n.z=s.z),s.m!=null&&(n.m=s.m),n}if("xmin"in s){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=i(s.xmin,s.ymin,o),[n.xmax,n.ymax]=i(s.xmax,s.ymax,o),s.hasZ&&(n.zmin=s.zmin,n.zmax=s.zmax,n.hasZ=!0),s.hasM&&(n.mmin=s.mmin,n.mmax=s.mmax,n.hasM=!0),n}return"rings"in s?{rings:l(s.rings,i),hasM:s.hasM,hasZ:s.hasZ}:"paths"in s?{paths:l(s.paths,i),hasM:s.hasM,hasZ:s.hasZ}:"points"in s?{points:d(s.points,i),hasM:s.hasM,hasZ:s.hasZ}:null}function l(i,s){const n=[];for(const h of i)n.push(d(h,s));return n}function d(i,s){const n=[];for(const h of i){const t=s(h[0],h[1],[0,0]);n.push(t),h.length>2&&t.push(h[2]),h.length>3&&t.push(h[3])}return n}async function w(i,s){if(!i||!s)return;const n=Array.isArray(i)?i.map(h=>h.geometry!=null?h.geometry.spatialReference:null).filter(z):[i];await Z(n.map(h=>({source:h,dest:s})))}const _=j.bind(null,b),m=j.bind(null,M);function A(i,s,n,h){if(!i||(n||(n=s,s=i.spatialReference),!a(s)||!a(n)||r(s,n)))return i;if(c(s,n)){const t=f(n)?_(i):m(i);return t.spatialReference=n,t}return x(p,[i],s,n,null,h)[0]}class P{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,n,h){if(!s||!s.length||!n||!h||r(n,h))return s;const t={geometries:s,inSpatialReference:n,outSpatialReference:h,resolve:null};return this._jobs.push(t),new Promise(u=>{t.resolve=u,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:n,inSpatialReference:h,outSpatialReference:t,resolve:u}=s;c(h,t)?f(t)?u(n.map(_)):u(n.map(m)):u(x(p,n,h,t,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const T=new P;function L(i,s,n){return T.push(i,s,n)}export{L as a,w as c,A as p};
