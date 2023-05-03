"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3172],{3172:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var s=r(68773),o=r(40330),n=r(20102),a=r(80442),i=r(22974),l=r(95330),c=r(17452),u=r(19745),d=r(71058),h=r(85958);async function p(e,t){const i=(0,c.HK)(e),u=(0,c.jc)(e);u||i||(e=(0,c.Fv)(e));const y={url:e,requestOptions:{...t}};let g=(0,c.oh)(e);if(g){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=v("request:interceptor",e,t)}if((s instanceof Error||s instanceof n.Z)&&(r=v("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}(g,y);if(null!=e)return{data:e,getHeader:q,httpStatus:200,requestOptions:y.requestOptions,url:y.url};g.after||g.error||(g=null)}if(e=y.url,"image"===(t=y.requestOptions).responseType&&((0,a.Z)("host-webworker")||(0,a.Z)("host-node")))throw v("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),y);if("head"===t.method){if(t.body)throw v("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),y);if(i||u)throw v("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),y)}if(await async function(){(0,a.Z)("host-webworker")?f||(f=await r.e(9884).then(r.bind(r,29884))):p._abortableFetch||(p._abortableFetch=globalThis.fetch.bind(globalThis))}(),f)return f.execute(e,t);const b=new AbortController;(0,l.fu)(t,(()=>b.abort()));const T={controller:b,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:g,params:y,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},k=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,n=e.controller.signal,a=r.body;let i=null,c=null;if(w&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(c=a),e.fetchOptions={cache:r.cacheBust&&!("polyfill"in p._abortableFetch)?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:n},(i||c)&&(e.fetchOptions.body=i||c),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&s.default.apiKey&&(0,d.r)(t)&&(r.query||(r.query={}),r.query.token=s.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!C(t)&&!(0,l.Hc)(n)){let s;"immediate"===r.authMode?(await O(),s=await o.id.getCredential(t,{signal:n}),e.credential=s):"no-prompt"===r.authMode?(await O(),s=await o.id.getCredential(t,{prompt:!1,signal:n}).catch((()=>{})),e.credential=s):o.id&&(s=o.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await S(e)}while(!await L(e,t,r))}catch(r){const s=v("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(s),s}const n=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(n)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,c.kl)(n)){const e=(0,c.P$)(n,!0);e&&m.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&(0,h.Hu)(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&o.id){const e=o.id.findServerInfo(a.server);let t=e?.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,a.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):q,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(T);return g?.after?.(k),k}let f;const m=s.default.request,w="FormData"in globalThis,y=[499,498,403,401],g=["COM_0056","COM_0057","SB_0008"],b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],q=()=>null,T=Symbol();function k(e){const t=(0,c.P$)(e);return!t||t.endsWith(".arcgis.com")||p._corsServers.includes(t)||(0,c.kl)(t)}function v(e,t,r,s){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:q,ssl:!1};if(t instanceof n.Z)return t.details?(t.details=(0,i.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=s&&(e=>s.headers.get(e)),r=s?.status,n=t.message;n&&(o=n),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=T in t?t[T]:t}return(0,l.D_)(t)?(0,l.zE)():new n.Z(e,o,a)}async function O(){o.id||await Promise.all([r.e(7126),r.e(6261),r.e(9255),r.e(1400),r.e(450)]).then(r.bind(r,73660))}function C(e){return b.some((t=>t.test(e)))}async function S(e){let t=e.params.url;const r=e.params.requestOptions,s=e.fetchOptions??{},n=(0,c.jc)(t)||(0,c.HK)(t),i=r.responseType||"json",d=n?0:null!=r.timeout?r.timeout:m.timeout;let f=!1;if(!n){e.useSSL&&(t=(0,c.hO)(t)),r.cacheBust&&"default"===s.cache&&(t=(0,c.ZN)(t,"request.preventCache",Date.now()));let n={...r.query};e.credentialToken&&(n.token=e.credentialToken);let i=(0,c.B7)(n);(0,a.Z)("esri-url-encodes-apostrophe")&&(i=i.replaceAll("'","%27"));const l=t.length+1+i.length;let d;f="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>m.maxUrlLength;const p=r.useProxy||!!(0,c.ed)(t);if(p){const e=(0,c.b7)(t);d=e.path,!f&&d.length+1+l>m.maxUrlLength&&(f=!0),e.query&&(n={...e.query,...n})}if("HEAD"===s.method&&(f||p)){if(f){if(l>m.maxUrlLength)throw v("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw v("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(p)throw v("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(f?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,c.fl)(t,n):(s.body=(0,c.B7)(n),s.headers||(s.headers={}),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,c.fl)(t,n),p&&(e.useProxy=!0,t=`${d}?${t}`),n.token&&w&&s.body instanceof FormData&&!(0,u.P)(t)&&s.body.set("token",n.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,c.D6)(t,(0,c.TI)()))if((0,c.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include",(0,h.jH)(t)&&await(0,h.jz)(f?(0,c.fl)(t,n):t))}let y,g,b=0,q=!1;d>0&&(b=setTimeout((()=>{q=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)g=s,g.url=t;else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||f||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!n&&!e.useProxy&&m.proxyUrl&&!k(t)){if(y=await p._abortableFetch(t,s),e.useProxy||function(e){const t=(0,c.P$)(e);t&&!p._corsServers.includes(t)&&p._corsServers.push(t)}(t),"native"===r.responseType)g=y;else if("HEAD"!==s.method)if(y.ok){switch(i){case"array-buffer":g=await y.arrayBuffer();break;case"blob":case"image":g=await y.blob();break;default:g=await y.text()}if(b&&(clearTimeout(b),b=0),"json"===i||"xml"===i||"document"===i)if(g)switch(i){case"json":g=JSON.parse(g);break;case"xml":g=E(g,"application/xml");break;case"document":g=E(g,"text/html")}else g=null;if(g){if("array-buffer"===i||"blob"===i){const e=y.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&g["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(g).json();e.error&&(g=e)}catch{}}"image"===i&&g instanceof Blob&&(g=await x(URL.createObjectURL(g),e,!0))}}else{g=await y.text();try{g=JSON.parse(g)}catch{}}}else g=await x(t,e)}catch(s){if("AbortError"===s.name){if(q)throw new Error("Timeout exceeded");throw(0,l.zE)("Request canceled")}if(!(!y&&s instanceof TypeError&&m.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||k(t))throw s;e.redoRequest=!0,(0,c.tD)({proxyUrl:m.proxyUrl,urlPrefix:(0,c.P$)(t)??""})}finally{b&&clearTimeout(b)}return[y,g]}function E(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function L(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let n,a;if(r&&(r.error?n=r.error:"error"===r.status&&Array.isArray(r.messages)&&(n={...r},n[T]=r,n.details=r.messages)),!n&&!t.ok)throw n=new Error(`Unable to load ${t.url} status: ${t.status}`),n[T]=r,n;let i,l=null;n&&(a=Number(n.code),l=n.hasOwnProperty("subcode")?Number(n.subcode):null,i=n.messageCode,i=i?.toUpperCase());const c=s.authMode;if(403===a&&(4===l||n.message?.toLowerCase().includes("ssl")&&!n.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&y.includes(a)&&!C(e.params.url)&&(403!==a||i&&!g.includes(i)&&(null==l||2===l&&e.credentialToken))){await O();try{const t=await o.id.getCredential(e.params.url,{error:v("request:server",n,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;n=t}}if(n)throw n;return!0}function x(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=m.priority,o.src=e,(0,h.fY)(o,e,r,s)}p._abortableFetch=null,p._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},71058:(e,t,r)=>{r.d(t,{r:()=>n});var s=r(17452);const o=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function n(e){const t=(0,s.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!o.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},85958:(e,t,r)=>{r.d(t,{Hu:()=>c,fY:()=>i,jH:()=>u,jz:()=>d});var s=r(68773),o=r(80442),n=r(95330),a=r(17452);function i(e,t,r=!1,s){return new Promise(((a,i)=>{if((0,n.Hc)(s))return void i(l());let c=()=>{h(),i(new Error(`Unable to load ${t}`))},u=()=>{const t=e;h(),a(t)},d=()=>{if(!e)return;const t=e;h(),t.src="",i(l())};const h=()=>{(0,o.Z)("esri-image-decode")||(e.removeEventListener("error",c),e.removeEventListener("load",u)),c=null,u=null,e=null,null!=s&&s.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};null!=s&&s.addEventListener("abort",d),(0,o.Z)("esri-image-decode")?e.decode().then(u,c):(e.addEventListener("error",c),e.addEventListener("load",u))}))}function l(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}function c(e){s.default.request.crossOriginNoCorsDomains||(s.default.request.crossOriginNoCorsDomains={});const t=s.default.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,a.P$)(r)??""]=0:(t[(0,a.P$)("http://"+r)??""]=0,t[(0,a.P$)("https://"+r)??""]=0)}function u(e){const t=s.default.request.crossOriginNoCorsDomains;if(t){let r=(0,a.P$)(e);if(r)return r=r.toLowerCase(),!(0,a.D6)(r,(0,a.TI)())&&t[r]<Date.now()-36e5}return!1}async function d(e){const t=s.default.request.crossOriginNoCorsDomains,r=(0,a.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const o=(0,a.mN)(e);e=o.path,"json"===o.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}}}]);