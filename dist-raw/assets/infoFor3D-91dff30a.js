const s=["binary","application/octet-stream","bin",""],o=[s];function a(e,t){return[...o,...t].find(n=>n[0]===e)}function f(e,t){return[...o,...t].find(n=>n[1]===e)}function c(e,t){const n=e.toLowerCase();return[...o,...t].find(i=>i[2].split(",").some(r=>n.endsWith(r)))}function m(e,t){const n=f(e,t);return n==null?void 0:n[0]}function d(e,t){const n=c(e,t);return n==null?void 0:n[0]}function p(e,t){const n=a(e,t);return n==null?void 0:n[1]}export{p as a,d as f,m};
