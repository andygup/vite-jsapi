import{e as d,r as h,p as j,a as p,v as w}from"./promiseUtils-29120e0a.js";import{P as L,r as $,c as q}from"./cast-daef7652.js";import{h as m}from"./typedArrayUtil-2bcf3cee.js";import"./string-3d0ebcd3.js";import"./Error-bd05b442.js";function x(n,o,t={}){return a(n,o,t,v)}function B(n,o,t={}){return a(n,o,t,y)}function a(n,o,t={},e){let r=null;const c=t.once?(i,l)=>{e(i)&&(m(r),o(i,l))}:(i,l)=>{e(i)&&o(i,l)};if(r=L(n,c,t.sync,t.equals),t.initial){const i=n();c(i,i)}return r}function C(n,o,t,e={}){let r=null,c=null,i=null;function l(){var u;r&&c&&(c.remove(),(u=e.onListenerRemove)==null||u.call(e,r),r=null,c=null)}function f(u){e.once&&e.once&&m(i),t(u)}const P=x(n,(u,R)=>{var s;l(),d(u)&&(r=u,c=h(u,o,f),(s=e.onListenerAdd)==null||s.call(e,u))},{sync:e.sync,initial:!0});return i=q(()=>{P.remove(),l()}),i}function D(n,o){return A(n,y,o)}function A(n,o,t){if(j(t))return Promise.reject(p());const e=n();if(o!=null&&o(e))return Promise.resolve(e);let r=null;function c(){r=m(r)}return new Promise((i,l)=>{r=$([w(t,()=>{c(),l(p())}),a(n,f=>{c(),i(f)},{sync:!1,once:!0},o??v)])})}function v(n){return!0}function y(n){return!!n}const E={sync:!0},F={initial:!0},G={sync:!0,initial:!0};export{E as U,C as a,B as f,F as h,D as j,x as l,G as w};
