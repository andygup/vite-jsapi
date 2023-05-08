import{dq as q,dr as v,aC as w,U as C,ds as S,b9 as Y,dt as R,dn as A,du as Z}from"./index-6eb28d6b.js";import{t as z}from"./json-48e3ea08.js";function d(s,n){return s?n?4:3:n?3:2}function W(s,n,e,r,i){if(n==null||!n.lengths.length)return null;const l=(i==null?void 0:i.originPosition)==="upperLeft"?-1:1;s.lengths.length&&(s.lengths.length=0),s.coords.length&&(s.coords.length=0);const t=s.coords,c=[],o=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:p}=n,_=d(e,r);let T=0;for(const u of m){const h=L(o,p,T,u,e,r,l);h&&c.push(h),T+=u*_}if(c.sort((u,h)=>{let f=l*u[2]-l*h[2];return f===0&&e&&(f=u[4]-h[4]),f}),c.length){let u=6*c[0][2];t[0]=c[0][0]/u,t[1]=c[0][1]/u,e&&(u=6*c[0][4],t[2]=u!==0?c[0][3]/u:0),(t[0]<o[0]||t[0]>o[1]||t[1]<o[2]||t[1]>o[3]||e&&(t[2]<o[4]||t[2]>o[5]))&&(t.length=0)}if(!t.length){const u=n.lengths[0]?U(p,0,m[0],e,r):null;if(!u)return null;t[0]=u[0],t[1]=u[1],e&&u.length>2&&(t[2]=u[2])}return s}function L(s,n,e,r,i,l,t=1){const c=d(i,l);let o=e,m=e+c,p=0,_=0,T=0,u=0,h=0;for(let E=0,x=r-1;E<x;E++,o+=c,m+=c){const I=n[o],g=n[o+1],a=n[o+2],N=n[m],M=n[m+1],F=n[m+2];let b=I*M-N*g;u+=b,p+=(I+N)*b,_+=(g+M)*b,i&&(b=I*F-N*a,T+=(a+F)*b,h+=b),I<s[0]&&(s[0]=I),I>s[1]&&(s[1]=I),g<s[2]&&(s[2]=g),g>s[3]&&(s[3]=g),i&&(a<s[4]&&(s[4]=a),a>s[5]&&(s[5]=a))}if(u*t>0&&(u*=-1),h*t>0&&(h*=-1),!u)return null;const f=[p,_,.5*u];return i&&(f[3]=T,f[4]=.5*h),f}function U(s,n,e,r,i){const l=d(r,i);let t=n,c=n+l,o=0,m=0,p=0,_=0;for(let T=0,u=e-1;T<u;T++,t+=l,c+=l){const h=s[t],f=s[t+1],E=s[t+2],x=s[c],I=s[c+1],g=s[c+2],a=r?k(h,f,E,x,I,g):$(h,f,x,I);if(a)if(o+=a,r){const N=D(h,f,E,x,I,g);m+=a*N[0],p+=a*N[1],_+=a*N[2]}else{const N=B(h,f,x,I);m+=a*N[0],p+=a*N[1]}}return o>0?r?[m/o,p/o,_/o]:[m/o,p/o]:e>0?r?[s[n],s[n+1],s[n+2]]:[s[n],s[n+1]]:null}function $(s,n,e,r){const i=e-s,l=r-n;return Math.sqrt(i*i+l*l)}function k(s,n,e,r,i,l){const t=r-s,c=i-n,o=l-e;return Math.sqrt(t*t+c*c+o*o)}function B(s,n,e,r){return[s+.5*(e-s),n+.5*(r-n)]}function D(s,n,e,r,i,l){return[s+.5*(r-s),n+.5*(i-n),e+.5*(l-e)]}const y=[0,0];function P(s,n){if(!n)return null;if("x"in n){const e={x:0,y:0};return[e.x,e.y]=s(n.x,n.y,y),n.z!=null&&(e.z=n.z),n.m!=null&&(e.m=n.m),e}if("xmin"in n){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=s(n.xmin,n.ymin,y),[e.xmax,e.ymax]=s(n.xmax,n.ymax,y),n.hasZ&&(e.zmin=n.zmin,e.zmax=n.zmax,e.hasZ=!0),n.hasM&&(e.mmin=n.mmin,e.mmax=n.mmax,e.hasM=!0),e}return"rings"in n?{rings:V(n.rings,s),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:V(n.paths,s),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:j(n.points,s),hasM:n.hasM,hasZ:n.hasZ}:null}function V(s,n){const e=[];for(const r of s)e.push(j(r,n));return e}function j(s,n){const e=[];for(const r of s){const i=n(r[0],r[1],[0,0]);e.push(i),r.length>2&&i.push(r[2]),r.length>3&&i.push(r[3])}return e}async function X(s,n){if(!s||!n)return;const e=Array.isArray(s)?s.map(r=>r.geometry!=null?r.geometry.spatialReference:null).filter(w):[s];await C(e.map(r=>({source:r,dest:n})))}const G=P.bind(null,q),O=P.bind(null,v);function nn(s,n,e,r){if(!s||(e||(e=n,n=s.spatialReference),!S(n)||!S(e)||Y(n,e)))return s;if(R(n,e)){const i=A(e)?G(s):O(s);return i.spatialReference=e,i}return Z(z,[s],n,e,null,r)[0]}class H{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,e,r){if(!n||!n.length||!e||!r||Y(e,r))return n;const i={geometries:n,inSpatialReference:e,outSpatialReference:r,resolve:null};return this._jobs.push(i),new Promise(l=>{i.resolve=l,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:e,inSpatialReference:r,outSpatialReference:i,resolve:l}=n;R(r,i)?A(i)?l(e.map(G)):l(e.map(O)):l(Z(z,e,r,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const J=new H;function sn(s,n,e){return J.push(s,n,e)}export{sn as M,X as f,nn as g,W as t};
