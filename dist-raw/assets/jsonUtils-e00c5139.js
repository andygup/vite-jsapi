import{er as u,E as i}from"./index-468a9268.js";import{p as c,i as f}from"./parser-0c644652.js";function $(e,t,r){var s;try{return p(e)}catch(n){(s=r==null?void 0:r.messages)==null||s.push(n)}return null}function b(e,t,r,s){try{const n=l(e);u(r,n,t)}catch(n){s.messages&&s.messages.push(n)}}function l(e){const t=c(e);return t?f(t)?t.map(r=>r.toJSON()):t.map(({scale:r,effects:s})=>({scale:r,value:s.map(n=>n.toJSON())})):null}function p(e){if(!e||e.length===0)return null;if(g(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:a(r.value)});return t}return a(e)}function g(e){const t=e[0];return t?"scale"in t:!1}function a(e){if(!e||!e.length)return"";const t=[];for(const r of e){let s=[];switch(r.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":{s=[o(r,"amount")];break}case"blur":{s=[o(r,"radius","pt")];break}case"hue-rotate":{s=[o(r,"angle","deg")];break}case"drop-shadow":{s=[o(r,"xoffset","pt"),o(r,"yoffset","pt"),o(r,"blurRadius","pt"),h(r,"color")];break}case"bloom":s=[o(r,"strength"),o(r,"radius","pt"),o(r,"threshold")]}const n=`${r.type}(${s.filter(Boolean).join(" ")})`;c(n),t.push(n)}return t.join(" ")}function o(e,t,r){if(e[t]==null)throw new i("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e});return r?e[t]+r:""+e[t]}function h(e,t){if(e[t]==null)throw new i("effect:missing-parameter",`Missing parameter '${t}' in ${e.type} effect`,{effect:e});const r=e[t];return`rgba(${r[0]||0}, ${r[1]||0}, ${r[2]||0}, ${r[3]/255||0})`}export{$ as r,b as w};
