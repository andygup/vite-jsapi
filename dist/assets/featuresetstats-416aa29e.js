import{t as F,e as h}from"./executionError-fb3f283a.js";import{q as A,z as d,P as l,_ as p,E as m,al as c,O as i}from"./arcadeUtils-83c84c04.js";import{f as g}from"./WhereClause-b187e4b9.js";import"./index-394e5411.js";import"./arcadeTimeUtils-32719e09.js";import"./number-0dec9523.js";async function s(t,r,a,n,o,e){if(n.length===1){if(l(n[0]))return c(t,n[0],i(n[1],-1));if(m(n[0]))return c(t,n[0].toArray(),i(n[1],-1))}else if(n.length===2){if(l(n[0]))return c(t,n[0],i(n[1],-1));if(m(n[0]))return c(t,n[0].toArray(),i(n[1],-1));if(d(n[0])){const u=await n[0].load(),f=await y(g.create(n[1],u.getFieldsIndex()),e,o);return n[0].calculateStatistic(t,f,i(n[2],1e3),r.abortSignal)}}else if(n.length===3&&d(n[0])){const u=await n[0].load(),f=await y(g.create(n[1],u.getFieldsIndex()),e,o);return n[0].calculateStatistic(t,f,i(n[2],1e3),r.abortSignal)}return c(t,n,-1)}async function y(t,r,a){const n=t.getVariables();if(n.length>0){const o=[];for(let u=0;u<n.length;u++){const f={name:n[u]};o.push(await r.evaluateIdentifier(a,f))}const e={};for(let u=0;u<n.length;u++)e[n[u]]=o[u];return t.parameters=e,t}return t}function P(t){t.mode==="async"&&(t.functions.stdev=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("stdev",n,o,e,r,t))},t.functions.variance=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("variance",n,o,e,r,t))},t.functions.average=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("mean",n,o,e,r,t))},t.functions.mean=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("mean",n,o,e,r,t))},t.functions.sum=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("sum",n,o,e,r,t))},t.functions.min=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("min",n,o,e,r,t))},t.functions.max=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>s("max",n,o,e,r,t))},t.functions.count=function(r,a){return t.standardFunctionAsync(r,a,(n,o,e)=>{if(A(e,1,1,r,a),d(e[0]))return e[0].count(n.abortSignal);if(l(e[0])||p(e[0]))return e[0].length;if(m(e[0]))return e[0].length();throw new F(r,h.InvalidParameter,a)})})}export{P as registerFunctions};