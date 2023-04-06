import{e as T}from"./mat3f64-221ce671.js";import{e as I}from"./quatf64-3363c48e.js";import{fT as _,fU as Y,fr as L,fV as O,fW as S,fX as W,fY as X,fZ as Z,f_ as k,f$ as D,g0 as N,g1 as U,fk as V,fn as d,g2 as w,fp as B,b as C,aN as b,g3 as F}from"./index-6c241492.js";function G(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function A(n,o,a){a*=.5;const r=Math.sin(a);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(a),n}function H(n,o){const a=2*Math.acos(o[3]),r=Math.sin(a/2);return r>_()?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),a}function j(n,o,a){const r=o[0],e=o[1],c=o[2],t=o[3],u=a[0],i=a[1],h=a[2],f=a[3];return n[0]=r*f+t*u+e*h-c*i,n[1]=e*f+t*i+c*u-r*h,n[2]=c*f+t*h+r*i-e*u,n[3]=t*f-r*u-e*i-c*h,n}function J(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+t*u,n[1]=e*i+c*u,n[2]=c*i-e*u,n[3]=t*i-r*u,n}function K(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i-c*u,n[1]=e*i+t*u,n[2]=c*i+r*u,n[3]=t*i-e*u,n}function Q(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function R(n,o){const a=o[0],r=o[1],e=o[2];return n[0]=a,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),n}function $(n,o,a,r){const e=o[0],c=o[1],t=o[2],u=o[3];let i,h,f,s,l,m=a[0],g=a[1],p=a[2],q=a[3];return h=e*m+c*g+t*p+u*q,h<0&&(h=-h,m=-m,g=-g,p=-p,q=-q),1-h>_()?(i=Math.acos(h),f=Math.sin(i),s=Math.sin((1-r)*i)/f,l=Math.sin(r*i)/f):(s=1-r,l=r),n[0]=s*e+l*m,n[1]=s*c+l*g,n[2]=s*t+l*p,n[3]=s*u+l*q,n}function nn(n){const o=F,a=o(),r=o(),e=o(),c=Math.sqrt(1-a),t=Math.sqrt(a);return n[0]=c*Math.sin(2*Math.PI*r),n[1]=c*Math.cos(2*Math.PI*r),n[2]=t*Math.sin(2*Math.PI*e),n[3]=t*Math.cos(2*Math.PI*e),n}function on(n,o){const a=o[0],r=o[1],e=o[2],c=o[3],t=a*a+r*r+e*e+c*c,u=t?1/t:0;return n[0]=-a*u,n[1]=-r*u,n[2]=-e*u,n[3]=c*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function v(n,o){const a=o[0]+o[4]+o[8];let r;if(a>0)r=Math.sqrt(a+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+t]-o[3*t+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[t]=(o[3*t+e]+o[3*e+t])*r}return n}function en(n,o,a,r){const e=.5*Math.PI/180;o*=e,a*=e,r*=e;const c=Math.sin(o),t=Math.cos(o),u=Math.sin(a),i=Math.cos(a),h=Math.sin(r),f=Math.cos(r);return n[0]=c*i*f-t*u*h,n[1]=t*u*f+c*i*h,n[2]=t*i*h-c*u*f,n[3]=t*i*f+c*u*h,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=Y,tn=L,un=O,hn=j,fn=S,Mn=W,sn=X,z=Z,ln=z,E=k,mn=E,P=D,gn=N,pn=U;function qn(n,o,a){const r=V(o,a);return r<-.999999?(d(M,$n,o),w(M)<1e-6&&d(M,dn,o),B(M,M),A(n,M,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(d(M,o,a),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+r,P(n,n))}const M=C(),$n=b(1,0,0),dn=b(0,1,0);function Pn(n,o,a,r,e,c){return $(x,o,e,c),$(y,a,r,c),$(n,x,y,2*c*(1-c)),n}const x=I(),y=I();function xn(n,o,a,r){const e=yn;return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],P(n,v(n,e))}const yn=T();Object.freeze(Object.defineProperty({__proto__:null,add:un,calculateW:R,conjugate:rn,copy:cn,dot:Mn,equals:pn,exactEquals:gn,fromEuler:en,fromMat3:v,getAxisAngle:H,identity:G,invert:on,len:ln,length:z,lerp:sn,mul:hn,multiply:j,normalize:P,random:nn,rotateX:J,rotateY:K,rotateZ:Q,rotationTo:qn,scale:fn,set:tn,setAxes:xn,setAxisAngle:A,slerp:$,sqlerp:Pn,sqrLen:mn,squaredLength:E,str:an},Symbol.toStringTag,{value:"Module"}));export{gn as K,rn as S,en as k,A as v,H as x,j as y};
