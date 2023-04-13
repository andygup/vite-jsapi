import{jH as w,jI as P,iR as N,jJ as d,jK as x,jL as O,jM as R,jN as _,jO as y,jP as b,ia as S,eH as E,eI as F,_ as J,jQ as K}from"./index-9f03d686.js";import{i as A}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{t as f}from"./resourceExtension-4722c928.js";function k(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=H(e,t,n);for(const a of o){const i=w(t,a,n);for(const r in s)i[r]=s[r]}}}function H(e,o,t){if((e==null?void 0:e.type)==="resource")return L(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=K;return{read:n,write:s}}}}function L(e,o,t){const n=P(o,t);return{type:String,read:(s,a,i)=>{const r=N(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!r||!r.resources)return typeof s=="string"?void(a[i]=d(s,r)):void(a[i]=s.write({},r));const l=M(s),p=d(l,{...r,verifyItemRelativeUrls:r&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),c=n.type!==String&&(!A(this)||r&&r.origin&&this.originIdOf(t)>O(r.origin)),u={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r&&r.portalItem&&p&&!R(p)?c?T(u):B(u):r&&r.portalItem&&(p==null||_(p)!=null||y(p)||c)?g(u):a[i]=p}}}}function g(e){const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=b(o),l=(r==null?void 0:r.filename)??S(),p=(t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),c=v(n,o,s),u=E(p,l),I=`${u}.${f(c)}`,m=s.portalItem.resourceFromPath(I);y(o)&&s.resources&&s.resources.pendingOperations.push(D(o).then(j=>{m.path=`${u}.${f(j)}`,a[i]=m.itemRelativeUrl}).catch(()=>{}));const U=(t==null?void 0:t.compress)??!1;s.resources&&h({...e,resource:m,content:c,compress:U,updates:s.resources.toAdd}),a[i]=m.itemRelativeUrl}function T(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),l=v(s,t,o),p=f(l),c=F(r.path),u=(n==null?void 0:n.compress)??!1;p===c?(o.resources&&h({...e,resource:r,content:l,compress:u,updates:o.resources.toUpdate}),a[i]=t):g(e)}function B({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function h({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){t.push({resource:n,content:s,compress:a,finish:i=>{Q(e,o,i)}})}function v(e,o,t){return typeof e=="string"?{url:o}:new Blob([JSON.stringify(e.toJSON(t))],{type:"application/json"})}async function D(e){const o=(await J(()=>import("./index-9f03d686.js").then(n=>n.lU),["assets/index-9f03d686.js","assets/index-d832a396.css"])).default,{data:t}=await o(e,{responseType:"blob"});return t}function M(e){return e==null?null:typeof e=="string"?e:e.url}function Q(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{k as g};
