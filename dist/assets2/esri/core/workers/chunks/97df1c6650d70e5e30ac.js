"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7628,3172,5732,9880],{99880:(e,t,r)=>{r.d(t,{V:()=>l});var n=r(68773),s=(r(3172),r(20102)),o=r(92604),i=r(17452);const a=o.Z.getLogger("esri.assets");function l(e){if(!n.default.assetsPath)throw a.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.Z("assets:path-not-set","config.assetsPath is not set");return(0,i.v_)(n.default.assetsPath,e)}},5732:(e,t,r)=>{r.d(t,{c:()=>n,g:()=>s});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},88764:(e,t,r)=>{r.d(t,{q:()=>l});var n,s,o,i=r(5732),a={exports:{}};n=a,s=function(){function e(r,n,s,o,i){for(;o>s;){if(o-s>600){var a=o-s+1,l=n-s+1,c=Math.log(a),h=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*h*(a-h)/a)*(l-a/2<0?-1:1);e(r,n,Math.max(s,Math.floor(n-l*h/a+u)),Math.min(o,Math.floor(n+(a-l)*h/a+u)),i)}var d=r[n],m=s,f=o;for(t(r,s,n),i(r[o],d)>0&&t(r,s,o);m<f;){for(t(r,m,f),m++,f--;i(r[m],d)<0;)m++;for(;i(r[f],d)>0;)f--}0===i(r[s],d)?t(r,s,f):t(r,++f,o),f<=n&&(s=f+1),n<=f&&(o=f-1)}}function t(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function r(e,t){return e<t?-1:e>t?1:0}return function(t,n,s,o,i){e(t,n,s||0,o||t.length-1,i||r)}},void 0!==(o=s())&&(n.exports=o);const l=(0,i.g)(a.exports)},10661:(e,t,r)=>{r.d(t,{s:()=>s});var n=r(42100);class s extends n.s{notify(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onInvalidated(),e.onCommitted()}}}},24133:(e,t,r)=>{r.d(t,{Q:()=>a});var n=r(67676),s=r(70586),o=r(44553),i=r(88764);class a{constructor(e=9,t){this._compareMinX=u,this._compareMinY=d,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),_.prune(),b.prune(),v.prune(),M.prune()}all(e){this._all(this._data,e)}search(e,t){let r=this._data;const n=this._toBBox;if(w(e,r))for(_.clear();r;){for(let s=0,o=r.children.length;s<o;s++){const o=r.children[s],i=r.leaf?n(o):o;w(e,i)&&(r.leaf?t(o):x(e,i)?this._all(o,t):_.push(o))}r=_.pop()}}collides(e){let t=this._data;const r=this._toBBox;if(!w(e,t))return!1;for(_.clear();t;){for(let n=0,s=t.children.length;n<s;n++){const s=t.children[n],o=t.leaf?r(s):s;if(w(e,o)){if(t.leaf||x(e,o))return!0;_.push(s)}}t=_.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,r=e.length;t<r;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new O([]),this}remove(e){if(!e)return this;let t,r=this._data,o=null,i=0,a=!1;const l=this._toBBox(e);for(v.clear(),M.clear();r||v.length>0;){if(r||(r=(0,s.j0)(v.pop()),o=v.data[v.length-1],i=M.pop()??0,a=!0),r.leaf&&(t=(0,n.cq)(r.children,e,r.children.length,r.indexHint),-1!==t))return r.children.splice(t,1),v.push(r),this._condense(v),this;a||r.leaf||!x(r,l)?o?(i++,r=o.children[i],a=!1):r=null:(v.push(r),M.push(i),i=0,o=r,r=r.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let r=e;for(b.clear();r;){if(!0===r.leaf)for(const e of r.children)t(e);else b.pushArray(r.children);r=b.pop()??null}}_build(e,t,r,n){const s=r-t+1;let o=this._maxEntries;if(s<=o){const n=new O(e.slice(t,r+1));return l(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/o**(n-1)));const i=new S([]);i.height=n;const a=Math.ceil(s/o),c=a*Math.ceil(Math.sqrt(o));y(e,t,r,c,this._compareMinX);for(let s=t;s<=r;s+=c){const t=Math.min(s+c-1,r);y(e,s,t,a,this._compareMinY);for(let r=s;r<=t;r+=a){const s=Math.min(r+a-1,t);i.children.push(this._build(e,r,s,n-1))}}return l(i,this._toBBox),i}_chooseSubtree(e,t,r,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==r;){let r,n=1/0,s=1/0;for(let o=0,i=t.children.length;o<i;o++){const i=t.children[o],a=m(i),l=p(e,i)-a;l<s?(s=l,n=a<n?a:n,r=i):l===s&&a<n&&(n=a,r=i)}t=r||t.children[0]}return t}_insert(e,t,r){const n=this._toBBox,s=r?e:n(e);v.clear();const o=this._chooseSubtree(s,this._data,t,v);for(o.children.push(e),h(o,s);t>=0&&v.data[t].children.length>this._maxEntries;)this._split(v,t),t--;this._adjustParentBBoxes(s,v,t)}_split(e,t){const r=e.data[t],n=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,n);const o=this._chooseSplitIndex(r,s,n);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const i=r.children.splice(o,r.children.length-o),a=r.leaf?new O(i):new S(i);a.height=r.height,l(r,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(r,a)}_splitRoot(e,t){this._data=new S([e,t]),this._data.height=e.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(e,t,r){let n,s,o;n=s=1/0;for(let i=t;i<=r-t;i++){const t=c(e,0,i,this._toBBox),a=c(e,i,r,this._toBBox),l=g(t,a),h=m(t)+m(a);l<n?(n=l,o=i,s=h<s?h:s):l===n&&h<s&&(s=h,o=i)}return o}_chooseSplitAxis(e,t,r){const n=e.leaf?this._compareMinX:u,s=e.leaf?this._compareMinY:d;this._allDistMargin(e,t,r,n)<this._allDistMargin(e,t,r,s)&&e.children.sort(n)}_allDistMargin(e,t,r,n){e.children.sort(n);const s=this._toBBox,o=c(e,0,t,s),i=c(e,r-t,r,s);let a=f(o)+f(i);for(let n=t;n<r-t;n++){const t=e.children[n];h(o,e.leaf?s(t):t),a+=f(o)}for(let n=r-t-1;n>=t;n--){const t=e.children[n];h(i,e.leaf?s(t):t),a+=f(i)}return a}_adjustParentBBoxes(e,t,r){for(let n=r;n>=0;n--)h(t.data[n],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const r=e.data[t];if(0===r.children.length)if(t>0){const s=e.data[t-1],o=s.children;o.splice((0,n.cq)(o,r,o.length,s.indexHint),1)}else this.clear();else l(r,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){c(e,0,e.children.length,t,e)}function c(e,t,r,n,s){s||(s=new O([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let o,i=t;i<r;i++)o=e.children[i],h(s,e.leaf?n(o):o);return s}function h(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function u(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function m(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function g(e,t){const r=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),o=Math.min(e.maxY,t.maxY);return Math.max(0,s-r)*Math.max(0,o-n)}function x(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function w(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,r,n,o){const a=[t,r];for(;a.length;){const t=(0,s.j0)(a.pop()),r=(0,s.j0)(a.pop());if(t-r<=n)continue;const l=r+Math.ceil((t-r)/n/2)*n;(0,i.q)(e,l,r,t,o),a.push(r,l,l,t)}}const _=new o.Z,b=new o.Z,v=new o.Z,M=new o.Z({deallocator:void 0});class q{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class T extends q{constructor(){super(...arguments),this.height=1,this.indexHint=new n.SO}}class O extends T{constructor(e){super(),this.children=e,this.leaf=!0}}class S extends T{constructor(e){super(),this.children=e,this.leaf=!1}}},61787:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(80442),s=r(24133),o=r(66459);class i{async createIndex(e,t){const r=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new s.Q;const n=this._createMeshData(e),o=null!=t?await t.invoke("createIndexThread",n,{transferList:r}):this.createIndexThread(n).result;return this._createPooledRBush().fromJSON(o)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let e=0;e<t.length;e+=9)r[n++]=a(t,e,e+3,e+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const e of r)n+=e.length/3;const s=new Array(n);let o=0;for(const e of r)for(let r=0;r<e.length;r+=3)s[o++]=a(t,3*e[r],3*e[r+1],3*e[r+2]);return e.load(s),{result:e.toJSON()}}_createMeshData(e){const t=(e.transform?(0,o.I5)({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return!e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new s.Q(9,(0,n.Z)("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function a(e,t,r,n){return{minX:Math.min(e[t],e[r],e[n]),maxX:Math.max(e[t],e[r],e[n]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[r],e[r+1],e[r+2]],p2:[e[n],e[n+1],e[n+2]]}}},3172:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(68773),s=r(40330),o=r(20102),i=r(80442),a=r(22974),l=r(95330),c=r(17452),h=r(19745),u=r(71058),d=r(85958);async function m(e,t){const a=(0,c.HK)(e),h=(0,c.jc)(e);h||a||(e=(0,c.Fv)(e));const x={url:e,requestOptions:{...t}};let w=(0,c.oh)(e);if(w){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=M("request:interceptor",e,t)}if((n instanceof Error||n instanceof o.Z)&&(r=M("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(w,x);if(null!=e)return{data:e,getHeader:_,httpStatus:200,requestOptions:x.requestOptions,url:x.url};w.after||w.error||(w=null)}if(e=x.url,"image"===(t=x.requestOptions).responseType&&((0,i.Z)("host-webworker")||(0,i.Z)("host-node")))throw M("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),x);if("head"===t.method){if(t.body)throw M("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),x);if(a||h)throw M("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),x)}if(await async function(){(0,i.Z)("host-webworker")?f||(f=await r.e(9884).then(r.bind(r,29884))):m._abortableFetch||(m._abortableFetch=globalThis.fetch.bind(globalThis))}(),f)return f.execute(e,t);const y=new AbortController;(0,l.fu)(t,(()=>y.abort()));const b={controller:y,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:w,params:x,redoRequest:!1,useIdentity:p.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},v=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,o=e.controller.signal,i=r.body;let a=null,c=null;if(g&&"HTMLFormElement"in globalThis&&(i instanceof FormData?a=i:i instanceof HTMLFormElement&&(a=new FormData(i))),"string"==typeof i&&(c=i),e.fetchOptions={cache:r.cacheBust&&!("polyfill"in m._abortableFetch)?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:p.priority,redirect:"follow",signal:o},(a||c)&&(e.fetchOptions.body=a||c),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||a?.get("token")),!e.hasToken&&n.default.apiKey&&(0,u.r)(t)&&(r.query||(r.query={}),r.query.token=n.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!T(t)&&!(0,l.Hc)(o)){let n;"immediate"===r.authMode?(await q(),n=await s.id.getCredential(t,{signal:o}),e.credential=n):"no-prompt"===r.authMode?(await q(),n=await s.id.getCredential(t,{prompt:!1,signal:o}).catch((()=>{})),e.credential=n):s.id&&(n=s.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[t,r]=await O(e)}while(!await k(e,t,r))}catch(r){const n=M("request:server",r,e.params,t);throw n.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(n),n}const o=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,c.kl)(o)){const e=(0,c.P$)(o,!0);e&&p.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&(0,d.Hu)(r.authorizedCrossOriginNoCorsDomains)}const i=e.credential;if(i&&s.id){const e=s.id.findServerInfo(i.server);let t=e?.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=s.id.findCredential(t,i.userId);e&&-1===s.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):_,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(b);return w?.after?.(v),v}let f;const p=n.default.request,g="FormData"in globalThis,x=[499,498,403,401],w=["COM_0056","COM_0057","SB_0008"],y=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],_=()=>null,b=Symbol();function v(e){const t=(0,c.P$)(e);return!t||t.endsWith(".arcgis.com")||m._corsServers.includes(t)||(0,c.kl)(t)}function M(e,t,r,n){let s="Error";const i={url:r.url,requestOptions:r.requestOptions,getHeader:_,ssl:!1};if(t instanceof o.Z)return t.details?(t.details=(0,a.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=i,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n?.status,o=t.message;o&&(s=o),e&&(i.getHeader=e),i.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,i.subCode=t.subcode,i.messageCode=t.messageCode,"string"==typeof t.details?i.messages=[t.details]:i.messages=t.details,i.raw=b in t?t[b]:t}return(0,l.D_)(t)?(0,l.zE)():new o.Z(e,s,i)}async function q(){s.id||await Promise.all([r.e(7126),r.e(6261),r.e(9255),r.e(1400),r.e(450)]).then(r.bind(r,73660))}function T(e){return y.some((t=>t.test(e)))}async function O(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions??{},o=(0,c.jc)(t)||(0,c.HK)(t),a=r.responseType||"json",u=o?0:null!=r.timeout?r.timeout:p.timeout;let f=!1;if(!o){e.useSSL&&(t=(0,c.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,c.ZN)(t,"request.preventCache",Date.now()));let o={...r.query};e.credentialToken&&(o.token=e.credentialToken);let a=(0,c.B7)(o);(0,i.Z)("esri-url-encodes-apostrophe")&&(a=a.replaceAll("'","%27"));const l=t.length+1+a.length;let u;f="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>p.maxUrlLength;const m=r.useProxy||!!(0,c.ed)(t);if(m){const e=(0,c.b7)(t);u=e.path,!f&&u.length+1+l>p.maxUrlLength&&(f=!0),e.query&&(o={...e.query,...o})}if("HEAD"===n.method&&(f||m)){if(f){if(l>p.maxUrlLength)throw M("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw M("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(m)throw M("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(f?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,c.fl)(t,o):(n.body=(0,c.B7)(o),n.headers||(n.headers={}),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,c.fl)(t,o),m&&(e.useProxy=!0,t=`${u}?${t}`),o.token&&g&&n.body instanceof FormData&&!(0,h.P)(t)&&n.body.set("token",o.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,c.D6)(t,(0,c.TI)()))if((0,c.kl)(t))e.withCredentials=!0;else if(s.id){const r=s.id.findServerInfo(t);r?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include",(0,d.jH)(t)&&await(0,d.jz)(f?(0,c.fl)(t,o):t))}let x,w,y=0,_=!1;u>0&&(y=setTimeout((()=>{_=!0,e.controller.abort()}),u));try{if("native-request-init"===r.responseType)w=n,w.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||f||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!o&&!e.useProxy&&p.proxyUrl&&!v(t)){if(x=await m._abortableFetch(t,n),e.useProxy||function(e){const t=(0,c.P$)(e);t&&!m._corsServers.includes(t)&&m._corsServers.push(t)}(t),"native"===r.responseType)w=x;else if("HEAD"!==n.method)if(x.ok){switch(a){case"array-buffer":w=await x.arrayBuffer();break;case"blob":case"image":w=await x.blob();break;default:w=await x.text()}if(y&&(clearTimeout(y),y=0),"json"===a||"xml"===a||"document"===a)if(w)switch(a){case"json":w=JSON.parse(w);break;case"xml":w=S(w,"application/xml");break;case"document":w=S(w,"text/html")}else w=null;if(w){if("array-buffer"===a||"blob"===a){const e=x.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&w["blob"===a?"size":"byteLength"]<=750)try{const e=await new Response(w).json();e.error&&(w=e)}catch{}}"image"===a&&w instanceof Blob&&(w=await B(URL.createObjectURL(w),e,!0))}}else{w=await x.text();try{w=JSON.parse(w)}catch{}}}else w=await B(t,e)}catch(n){if("AbortError"===n.name){if(_)throw new Error("Timeout exceeded");throw(0,l.zE)("Request canceled")}if(!(!x&&n instanceof TypeError&&p.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||v(t))throw n;e.redoRequest=!0,(0,c.tD)({proxyUrl:p.proxyUrl,urlPrefix:(0,c.P$)(t)??""})}finally{y&&clearTimeout(y)}return[x,w]}function S(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function k(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let o,i;if(r&&(r.error?o=r.error:"error"===r.status&&Array.isArray(r.messages)&&(o={...r},o[b]=r,o.details=r.messages)),!o&&!t.ok)throw o=new Error(`Unable to load ${t.url} status: ${t.status}`),o[b]=r,o;let a,l=null;o&&(i=Number(o.code),l=o.hasOwnProperty("subcode")?Number(o.subcode):null,a=o.messageCode,a=a?.toUpperCase());const c=n.authMode;if(403===i&&(4===l||o.message?.toLowerCase().includes("ssl")&&!o.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===i)&&void 0!==i&&x.includes(i)&&!T(e.params.url)&&(403!==i||a&&!w.includes(a)&&(null==l||2===l&&e.credentialToken))){await q();try{const t=await s.id.getCredential(e.params.url,{error:M("request:server",o,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;o=t}}if(o)throw o;return!0}function B(e,t,r=!1){const n=t.controller.signal,s=new Image;return t.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous",s.alt="",s.fetchPriority=p.priority,s.src=e,(0,d.fY)(s,e,r,n)}m._abortableFetch=null,m._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},71058:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(17452);const s=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function o(e){const t=(0,n.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!s.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},85958:(e,t,r)=>{r.d(t,{Hu:()=>c,fY:()=>a,jH:()=>h,jz:()=>u});var n=r(68773),s=r(80442),o=r(95330),i=r(17452);function a(e,t,r=!1,n){return new Promise(((i,a)=>{if((0,o.Hc)(n))return void a(l());let c=()=>{d(),a(new Error(`Unable to load ${t}`))},h=()=>{const t=e;d(),i(t)},u=()=>{if(!e)return;const t=e;d(),t.src="",a(l())};const d=()=>{(0,s.Z)("esri-image-decode")||(e.removeEventListener("error",c),e.removeEventListener("load",h)),c=null,h=null,e=null,null!=n&&n.removeEventListener("abort",u),u=null,r&&URL.revokeObjectURL(t)};null!=n&&n.addEventListener("abort",u),(0,s.Z)("esri-image-decode")?e.decode().then(h,c):(e.addEventListener("error",c),e.addEventListener("load",h))}))}function l(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}function c(e){n.default.request.crossOriginNoCorsDomains||(n.default.request.crossOriginNoCorsDomains={});const t=n.default.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,i.P$)(r)??""]=0:(t[(0,i.P$)("http://"+r)??""]=0,t[(0,i.P$)("https://"+r)??""]=0)}function h(e){const t=n.default.request.crossOriginNoCorsDomains;if(t){let r=(0,i.P$)(e);if(r)return r=r.toLowerCase(),!(0,i.D6)(r,(0,i.TI)())&&t[r]<Date.now()-36e5}return!1}async function u(e){const t=n.default.request.crossOriginNoCorsDomains,r=(0,i.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const s=(0,i.mN)(e);e=s.path,"json"===s.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}}}]);