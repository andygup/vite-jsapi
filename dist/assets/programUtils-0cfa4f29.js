import{N as a}from"./NestedMap-d4ac5d57.js";import{P as u}from"./ProgramTemplate-b70e7aca.js";class d{constructor(e){this._rctx=e,this._store=new a}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,i){const s=this._store.get(e,t);if(s!=null)return s.ref(),s;const n=new u(this._rctx,e,t,o,i);return n.ref(),this._store.set(e,t,n),n}get test(){let e=0;return this._store.forEach(t=>t.forEach(o=>e+=o.hasGLName?2:1)),{cachedWebGLObjects:e}}}function l(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function h(r){let e="";for(const t in r){const o=r[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(l(o)){const{value:i,options:s,namespace:n}=o,c=n?`${n}_`:"";for(const f in s)e+=`#define ${c}${f} ${s[f].toFixed()}
`;e+=`#define ${t} ${c}${i}
`}else{const i=o.options;let s=0;for(const n in i)e+=`#define ${i[n]} ${(s++).toFixed()}
`;e+=`#define ${t} ${i[o.value]}
`}}return e}export{d as P,h as g};
