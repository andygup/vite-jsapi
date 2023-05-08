import{kv as w,by as b,a2 as x,a3 as O,j as N,a1 as T,bx as U,pI as en,W as rn}from"./index-bdad94d1.js";import{w as s,q as h,V as q,t as Z,P as A,E as F,i as M,x as P,z as C,y as S,O as d,B as H,C as y,S as k,D as z,c as R,G as an,H as un,K as ln,Q as B,b as L,U as W,W as cn,X as j}from"./arcadeUtils-f23fcc89.js";import{A as fn,h as on,S as sn,m as dn,x as wn,p as hn,O as mn,g as pn,R as yn,D as gn,b as vn,E as Pn,k as In,y as An,w as Fn,W as K,K as V,F as D,M as E,d as Rn,C as G,U as Q,B as xn,L as Nn,P as bn,v as Sn,H as X,N as Y,J as On,j as Mn}from"./geometryEngineAsync-eee848a0.js";import{t as u,e as l}from"./executionError-c92d3b85.js";import{t as _,s as $}from"./portalUtils-41cc0f57.js";import"./arcadeTimeUtils-760f8fb0.js";import"./FieldsIndex-9b4d6ad9.js";import"./number-b8133585.js";import"./hash-6f442295.js";function nn(r){return en.indexOf("4.")===0?N.fromExtent(r):new N({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function I(r,t,e){if(h(r,2,2,t,e),!(r[0]instanceof w&&r[1]instanceof w)){if(!(r[0]instanceof w&&r[1]===null)){if(!(r[1]instanceof w&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new u(t,l.InvalidParameter,e)}}}}async function tn(r,t){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let e=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(e=cn(r.spatialReference)/rn(r.spatialReference));let c=0;if(r.type==="polyline")for(const n of r.paths)for(let i=1;i<n.length;i++)c+=j(n[i],n[i-1],e);else if(r.type==="polygon")for(const n of r.rings){for(let i=1;i<n.length;i++)c+=j(n[i],n[i-1],e);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=j(n[0],n[n.length-1],e))}else r.type==="extent"&&(c+=2*j([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],e),c+=2*j([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],e),c*=2,c+=4*Math.abs(d(r.zmax,0)*e-d(r.zmin,0)*e));const o=new x({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return D(o,t)}function En(r){r.mode==="async"&&(r.functions.disjoint=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]===null||n[1]===null||fn(n[0],n[1])))},r.functions.intersects=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&on(n[0],n[1])))},r.functions.touches=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&sn(n[0],n[1])))},r.functions.crosses=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&dn(n[0],n[1])))},r.functions.within=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&wn(n[0],n[1])))},r.functions.contains=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&hn(n[0],n[1])))},r.functions.overlaps=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&mn(n[0],n[1])))},r.functions.equals=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(h(n,2,2,t,e),n[0]===n[1]||(n[0]instanceof w&&n[1]instanceof w?pn(n[0],n[1]):!(!q(n[0])||!q(n[1]))&&n[0].equals(n[1]))))},r.functions.relate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,3,3,t,e),n[0]instanceof w&&n[1]instanceof w)return yn(n[0],n[1],Z(n[2]));if(n[0]instanceof w&&n[1]===null||n[1]instanceof w&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new u(t,l.InvalidParameter,e)})},r.functions.intersection=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]===null||n[1]===null?null:gn(n[0],n[1])))},r.functions.union=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{const i=[];if((n=s(n)).length===0)throw new u(t,l.WrongNumberOfParameters,e);if(n.length===1)if(A(n[0])){const a=s(n[0]);for(let f=0;f<a.length;f++)if(a[f]!==null){if(!(a[f]instanceof w))throw new u(t,l.InvalidParameter,e);i.push(a[f])}}else{if(!F(n[0])){if(n[0]instanceof w)return M(P(n[0]),t.spatialReference);if(n[0]===null)return null;throw new u(t,l.InvalidParameter,e)}{const a=s(n[0].toArray());for(let f=0;f<a.length;f++)if(a[f]!==null){if(!(a[f]instanceof w))throw new u(t,l.InvalidParameter,e);i.push(a[f])}}}else for(let a=0;a<n.length;a++)if(n[a]!==null){if(!(n[a]instanceof w))throw new u(t,l.InvalidParameter,e);i.push(n[a])}return i.length===0?null:vn(i)})},r.functions.difference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:Pn(n[0],n[1])))},r.functions.symmetricdifference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):In(n[0],n[1])))},r.functions.clip=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,2,t,e),!(n[1]instanceof b)&&n[1]!==null)throw new u(t,l.InvalidParameter,e);if(n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return n[1]===null?null:An(n[0],n[1])})},r.functions.cut=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,2,t,e),!(n[1]instanceof x)&&n[1]!==null)throw new u(t,l.InvalidParameter,e);if(n[0]===null)return[];if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return n[1]===null?[P(n[0])]:Fn(n[0],n[1])})},r.functions.area=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(C(n[0])){const i=await n[0].sumArea(S(d(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=H(n[0],t.spatialReference);return i===null?0:K(i,S(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return K(n[0],S(d(n[1],-1)))})},r.functions.areageodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(C(n[0])){const i=await n[0].sumArea(S(d(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=H(n[0],t.spatialReference);return i===null?0:V(i,S(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return V(n[0],S(d(n[1],-1)))})},r.functions.length=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(C(n[0])){const i=await n[0].sumLength(y(d(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=k(n[0],t.spatialReference);return i===null?0:D(i,y(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return D(n[0],y(d(n[1],-1)))})},r.functions.length3d=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const i=k(n[0],t.spatialReference);return i===null?0:i.hasZ===!0?tn(i,y(d(n[1],-1))):D(i,y(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return n[0].hasZ===!0?tn(n[0],y(d(n[1],-1))):D(n[0],y(d(n[1],-1)))})},r.functions.lengthgeodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(C(n[0])){const i=await n[0].sumLength(y(d(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=k(n[0],t.spatialReference);return i===null?0:E(i,y(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return E(n[0],y(d(n[1],-1)))})},r.functions.distance=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=s(n),h(n,2,3,t,e);let i=n[0];(A(n[0])||F(n[0]))&&(i=z(n[0],t.spatialReference));let a=n[1];if((A(n[1])||F(n[1]))&&(a=z(n[1],t.spatialReference)),!(i instanceof w))throw new u(t,l.InvalidParameter,e);if(!(a instanceof w))throw new u(t,l.InvalidParameter,e);return Rn(i,a,y(d(n[2],-1)))})},r.functions.distancegeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=s(n),h(n,2,3,t,e);const i=n[0],a=n[1];if(!(i instanceof O))throw new u(t,l.InvalidParameter,e);if(!(a instanceof O))throw new u(t,l.InvalidParameter,e);const f=new x({paths:[],spatialReference:i.spatialReference});return f.addPath([i,a]),E(f,y(d(n[2],-1)))})},r.functions.densify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);if(i<=0)throw new u(t,l.InvalidParameter,e);return n[0]instanceof N||n[0]instanceof x?G(n[0],i,y(d(n[2],-1))):n[0]instanceof b?G(nn(n[0]),i,y(d(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);if(i<=0)throw new u(t,l.InvalidParameter,e);return n[0]instanceof N||n[0]instanceof x?Q(n[0],i,y(d(n[2],-1))):n[0]instanceof b?Q(nn(n[0]),i,y(d(n[2],-1))):n[0]})},r.functions.generalize=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,4,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);return xn(n[0],i,an(d(n[2],!0)),y(d(n[3],-1)))})},r.functions.buffer=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);return i===0?P(n[0]):Nn(n[0],i,y(d(n[2],-1)))})},r.functions.buffergeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);return i===0?P(n[0]):bn(n[0],i,y(d(n[2],-1)))})},r.functions.offset=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,6,t,e),n[0]===null)return null;if(!(n[0]instanceof N||n[0]instanceof x))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);const a=R(d(n[4],10));if(isNaN(a))throw new u(t,l.InvalidParameter,e);const f=R(d(n[5],0));if(isNaN(f))throw new u(t,l.InvalidParameter,e);return Sn(n[0],i,y(d(n[2],-1)),Z(d(n[3],"round")).toLowerCase(),a,f)})},r.functions.rotate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=s(n),h(n,2,3,t,e);let i=n[0];if(i===null)return null;if(!(i instanceof w))throw new u(t,l.InvalidParameter,e);i instanceof b&&(i=N.fromExtent(i));const a=R(n[1]);if(isNaN(a))throw new u(t,l.InvalidParameter,e);const f=d(n[2],null);if(f===null)return X(i,a);if(f instanceof O)return X(i,a,f);throw new u(t,l.InvalidParameter,e)})},r.functions.centroid=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return null;let i=n[0];if((A(n[0])||F(n[0]))&&(i=z(n[0],t.spatialReference)),i===null)return null;if(!(i instanceof w))throw new u(t,l.InvalidParameter,e);return i instanceof O?M(P(n[0]),t.spatialReference):i instanceof N?i.centroid:i instanceof x?un(i):i instanceof T?ln(i):i instanceof b?i.center:null})},r.functions.multiparttosinglepart=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{n=s(n),h(n,1,1,t,e);const i=[];if(n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);if(n[0]instanceof O)return[M(P(n[0]),t.spatialReference)];if(n[0]instanceof b)return[M(P(n[0]),t.spatialReference)];const a=await Y(n[0]);if(a instanceof N){const f=[],p=[];for(let m=0;m<a.rings.length;m++)if(a.isClockwise(a.rings[m])){const g=U({rings:[a.rings[m]],hasZ:a.hasZ===!0,hazM:a.hasM===!0,spatialReference:a.spatialReference.toJSON()});f.push(g)}else p.push({ring:a.rings[m],pt:a.getPoint(m,0)});for(let m=0;m<p.length;m++)for(let g=0;g<f.length;g++)if(f[g].contains(p[m].pt)){f[g].addRing(p[m].ring);break}return f}if(a instanceof x){const f=[];for(let p=0;p<a.paths.length;p++){const m=U({paths:[a.paths[p]],hasZ:a.hasZ===!0,hazM:a.hasM===!0,spatialReference:a.spatialReference.toJSON()});f.push(m)}return f}if(n[0]instanceof T){const f=M(P(n[0]),t.spatialReference);for(let p=0;p<f.points.length;p++)i.push(f.getPoint(p));return i}return null})},r.functions.issimple=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return!0;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return On(n[0])})},r.functions.simplify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return Y(n[0])})},r.functions.convexhull=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return Mn(n[0])})},r.functions.getuser=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{h(n,0,2,t,e);let i=d(n[1],""),a=i===!0;if(i=i===!0||i===!1?"":Z(i),n.length===0||n[0]instanceof B){let p=null;t.services&&t.services.portal&&(p=t.services.portal),n.length>0&&(p=_(n[0],p));const m=await $(p,i,a);if(m){const g=JSON.parse(JSON.stringify(m));for(const v of["lastLogin","created","modified"])g[v]!==void 0&&g[v]!==null&&(g[v]=new Date(g[v]));return L.convertObjectToArcadeDictionary(g,W(t))}return null}let f=null;if(C(n[0])&&(f=n[0]),f){if(a=!1,i)return null;await f.load();const p=await f.getOwningSystemUrl();if(!p){if(!i){const v=await f.getIdentityUser();return v?L.convertObjectToArcadeDictionary({username:v},W(t)):null}return null}let m=null;t.services&&t.services.portal&&(m=t.services.portal),m=_(new B(p),m);const g=await $(m,i,a);if(g){const v=JSON.parse(JSON.stringify(g));for(const J of["lastLogin","created","modified"])v[J]!==void 0&&v[J]!==null&&(v[J]=new Date(v[J]));return L.convertObjectToArcadeDictionary(v,W(t))}return null}throw new u(t,l.InvalidParameter,e)})})}export{En as registerFunctions};
