import{bB as o,ct as A}from"./index-cc043433.js";function r(n){var s;return Array.isArray(n)?(s=n[0])==null?void 0:s.spatialReference:n==null?void 0:n.spatialReference}function w(n){return n&&(Array.isArray(n)?n.map(w):n.toJSON?n.toJSON():n)}function c(n){return Array.isArray(n)?n.map(s=>o(s)):o(n)}function h(n,s){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),s!=null&&t.push(s)),t}let l;async function x(){return l||(l=A("geometryEngineWorker",{strategy:"distributed"})),l}async function a(n,s){return(await x()).invoke("executeGEOperation",{operation:n,parameters:w(s)})}async function J(n,s){const t=await a("clip",[r(n),n,s]);return c(t)}async function N(n,s){const t=await a("cut",[r(n),n,s]);return c(t)}function R(n,s){return a("contains",[r(n),n,s])}function k(n,s){return a("crosses",[r(n),n,s])}function D(n,s,t){return a("distance",[r(n),n,s,t])}function E(n,s){return a("equals",[r(n),n,s])}function B(n,s){return a("intersects",[r(n),n,s])}function L(n,s){return a("touches",[r(n),n,s])}function O(n,s){return a("within",[r(n),n,s])}function q(n,s){return a("disjoint",[r(n),n,s])}function z(n,s){return a("overlaps",[r(n),n,s])}function C(n,s,t){return a("relate",[r(n),n,s,t])}function H(n){return a("isSimple",[r(n),n])}async function I(n){const s=await a("simplify",[r(n),n]);return c(s)}async function W(n,s=!1){const t=await a("convexHull",[r(n),n,s]);return c(t)}async function G(n,s){const t=await a("difference",[r(n),n,s]);return c(t)}async function P(n,s){const t=await a("symmetricDifference",[r(n),n,s]);return c(t)}async function $(n,s){const t=await a("intersect",[r(n),n,s]);return c(t)}async function F(n,s=null){const t=h(n,s),i=await a("union",[r(t),t]);return c(i)}async function K(n,s,t,i,u,e){const f=await a("offset",[r(n),n,s,t,i,u,e]);return c(f)}async function M(n,s,t,i=!1){const u=[r(n),n,s,t,i],e=await a("buffer",u);return c(e)}async function Q(n,s,t,i,u,e){const f=[r(n),n,s,t,i,u,e],d=await a("geodesicBuffer",f);return c(d)}function S(n){var s;return"xmin"in n?n.center:"x"in n?n:(s=n.extent)==null?void 0:s.center}async function T(n,s,t){if(n==null)throw new p;const i=n.spatialReference;if(t=t??S(n),t==null)throw new p;const u=n.constructor.fromJSON(await a("rotate",[i,n,s,t]));return u.spatialReference=i,u}async function U(n,s,t,i){const u=await a("generalize",[r(n),n,s,t,i]);return c(u)}async function V(n,s,t){const i=await a("densify",[r(n),n,s,t]);return c(i)}async function X(n,s,t,i=0){const u=await a("geodesicDensify",[r(n),n,s,t,i]);return c(u)}function Y(n,s){return a("planarArea",[r(n),n,s])}function Z(n,s){return a("planarLength",[r(n),n,s])}function _(n,s,t){return a("geodesicArea",[r(n),n,s,t])}function b(n,s,t){return a("geodesicLength",[r(n),n,s,t])}class p extends Error{constructor(){super("Illegal Argument Exception")}}export{T as A,I as B,H as C,W as D,R as a,$ as b,k as c,q as d,E as e,G as f,J as g,N as h,B as i,_ as j,Z as k,b as l,D as m,V as n,z as o,Y as p,X as q,C as r,P as s,L as t,F as u,U as v,O as w,M as x,Q as y,K as z};