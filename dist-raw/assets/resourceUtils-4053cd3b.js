import{T as l}from"./basicInterfaces-cc58f4ac.js";class m{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=l.KTX2_ENCODING}}function E(n){return(n==null?void 0:n.type)==="encoded-mesh-texture"}async function L(n){return new Promise((t,s)=>{const c=new Blob([n]),o=new FileReader;o.onload=()=>{const r=o.result;t(JSON.parse(r))},o.onerror=r=>{s(r)},o.readAsText(c)})}async function h(n,t){return t===l.KTX2_ENCODING?new m(n):new Promise((s,c)=>{const o=new Blob([n],{type:t}),r=URL.createObjectURL(o),e=new Image,i=()=>{URL.revokeObjectURL(r),"decode"in e?e.decode().then(()=>s(e),()=>s(e)).then(a):(s(e),a())},d=u=>{URL.revokeObjectURL(r),c(u),a()},a=()=>{e.removeEventListener("load",i),e.removeEventListener("error",d)};e.addEventListener("load",i),e.addEventListener("error",d),e.src=r})}export{m as E,h as a,E as i,L as j};
