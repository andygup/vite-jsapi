import{es as l,E as d,fQ as g,r as w}from"./index-b51e75d5.js";async function R(e,r={},t){await e.load(t);const a=l(e.itemUrl,"resources"),{start:s=1,num:i=10,sortOrder:u="asc",sortField:c="created"}=r,o={query:{start:s,num:i,sortOrder:u,sortField:c,token:e.apiKey},signal:t==null?void 0:t.signal},n=await e.portal.request(a,o);return{total:n.total,nextStart:n.nextStart,resources:n.resources.map(({created:m,size:p,resource:x})=>({created:new Date(m),size:p,resource:e.resourceFromPath(x)}))}}async function q(e,r,t,a){if(!e.hasPath())throw new d(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const s=e.portalItem;await s.load(a);const i=l(s.userItemUrl,r==="add"?"addResources":"updateResources"),[u,c]=f(e.path),o=await P(t),n=new FormData;return u&&u!=="."&&n.append("resourcesPrefix",u),a!=null&&a.compress&&n.append("compress","true"),n.append("fileName",c),n.append("file",o,c),n.append("f","json"),a!=null&&a.access&&n.append("access",a.access),await s.portal.request(i,{method:"post",body:n,signal:a==null?void 0:a.signal}),e}async function b(e,r,t){if(!r.hasPath())throw new d("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(t);const a=l(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:r.path},signal:t==null?void 0:t.signal}),r.portalItem=null}async function F(e,r){await e.load(r);const t=l(e.userItemUrl,"removeResources");return e.portal.request(t,{method:"post",query:{deleteAll:!0},signal:r==null?void 0:r.signal})}function f(e){const r=e.lastIndexOf("/");return r===-1?[".",e]:[e.slice(0,r),e.slice(r+1)]}function h(e){const[r,t]=y(e),[a,s]=f(r);return[a,s,t]}function y(e){const r=g(e);return r==null?[e,""]:[e.slice(0,e.length-r.length-1),`.${r}`]}async function P(e){return e instanceof Blob?e:(await w(e.url,{responseType:"blob"})).data}function E(e,r){if(!e.hasPath())return null;const[t,,a]=h(e.path);return e.portalItem.resourceFromPath(l(t,r+a))}function O(e,r){if(!e.hasPath())return null;const[t,,a]=h(e.path);return e.portalItem.resourceFromPath(l(t,r+a))}export{q as addOrUpdateResource,P as contentToBlob,R as fetchResources,E as getSiblingOfSameType,O as getSiblingOfSameTypeI,F as removeAllResources,b as removeResource,h as splitPrefixFileNameAndExtension};