import{gD as l,hv as i,L as a}from"./index-bdad94d1.js";function d(r,e){return r===null?e:new l({url:r.field("url")})}async function y(r,e,t){var o;if(!((o=i)==null?void 0:o.findCredential(r.restUrl)))return null;if(r.loadStatus==="loaded"&&e===""&&r.user&&r.user.sourceJSON&&t===!1)return r.user.sourceJSON;if(e===""){const n=await a(r.restUrl+"/community/self",{responseType:"json",query:{f:"json",...t===!1?{}:{returnUserLicenseTypeExtensions:!0}}});if(n.data){const s=n.data;if(s&&s.username)return s}return null}const u=await a(r.restUrl+"/community/users/"+e,{responseType:"json",query:{f:"json"}});if(u.data){const n=u.data;return n.error?null:n}return null}export{y as s,d as t};
