"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7873],{97873:(e,t,r)=>{r.d(t,{W7:()=>p,addOrUpdateResource:()=>l,fetchResources:()=>n,removeAllResources:()=>u,removeResource:()=>c});var a=r(3172),s=r(20102),o=r(17452);async function n(e,t={},r){await e.load(r);const a=(0,o.v_)(e.itemUrl,"resources"),{start:s=1,num:n=10,sortOrder:l="asc",sortField:c="created"}=t,u={query:{start:s,num:n,sortOrder:l,sortField:c,token:e.apiKey},signal:r?.signal},i=await e.portal.request(a,u);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function l(e,t,r,n){if(!e.hasPath())throw new s.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const l=e.portalItem;await l.load(n);const c=(0,o.v_)(l.userItemUrl,"add"===t?"addResources":"updateResources"),[u,p]=i(e.path),d=await async function(e){return e instanceof Blob?e:(await(0,a.default)(e.url,{responseType:"blob"})).data}(r),h=new FormData;return u&&"."!==u&&h.append("resourcesPrefix",u),null!=n&&n.compress&&h.append("compress","true"),h.append("fileName",p),h.append("file",d,p),h.append("f","json"),null!=n&&n.access&&h.append("access",n.access),await l.portal.request(c,{method:"post",body:h,signal:n?.signal}),e}async function c(e,t,r){if(!t.hasPath())throw new s.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,o.v_)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,o.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function i(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e,t){if(!e.hasPath())return null;const[r,,a]=function(e){const[t,r]=function(e){const t=(0,o.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,s]=i(t);return[a,s,r]}(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+a))}}}]);