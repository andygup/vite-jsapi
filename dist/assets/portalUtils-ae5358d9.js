import{du as l,ed as i,L as a}from"./index-e1d30004.js";function d(r,e){return r===null?e:new l({url:r.field("url")})}async function y(r,e,u){var o;if(!((o=i)==null?void 0:o.findCredential(r.restUrl)))return null;if(r.loadStatus==="loaded"&&e===""&&r.user&&r.user.sourceJSON&&u===!1)return r.user.sourceJSON;if(e===""){const n=await a(r.restUrl+"/community/self",{responseType:"json",query:{f:"json",...u===!1?{}:{returnUserLicenseTypeExtensions:!0}}});if(n.data){const s=n.data;if(s&&s.username)return s}return null}const t=await a(r.restUrl+"/community/users/"+e,{responseType:"json",query:{f:"json"}});if(t.data){const n=t.data;return n.error?null:n}return null}export{y as s,d as t};