import{fs as O}from"./index-4d2185ff.js";import{t as R,n as L}from"./Indices-4f080057.js";function F(o,n,e){const l=Array.isArray(o),r=l?o.length/n:o.byteLength/(4*n),s=l?o:new Uint32Array(o,0,r*n),g=(e==null?void 0:e.minReduction)??0,y=(e==null?void 0:e.originalIndices)||null,q=y?y.length:0,c=(e==null?void 0:e.componentOffsets)||null;let U=0;if(c)for(let t=0;t<c.length-1;t++){const a=c[t+1]-c[t];a>U&&(U=a)}else U=r;const m=Math.floor(1.1*U)+1;(h==null||h.length<2*m)&&(h=new Uint32Array(O(2*m)));for(let t=0;t<2*m;t++)h[t]=0;let i=0;const w=!!c&&!!y,b=w?q:r;let A=R(r/3);const p=new Uint32Array(q),k=1.96;let j=g!==0?Math.ceil(4*k*k/(g*g)*g*(1-g)):b,d=1,v=c?c[1]:b;for(let t=0;t<b;t++){if(t===j){const f=1-i/t;if(f+k*Math.sqrt(f*(1-f)/t)<g)return null;j*=2}if(t===v){for(let f=0;f<2*m;f++)h[f]=0;if(y)for(let f=c[d-1];f<c[d];f++)p[f]=A[y[f]];v=c[++d]}const a=w?y[t]:t,C=a*n,x=B(s,C,n);let u=x%m,I=i;for(;h[2*u+1]!==0;){if(h[2*u]===x){const f=h[2*u+1]-1;if($(s,C,f*n,n)){I=A[f];break}}u++,u>=m&&(u-=m)}I===i&&(h[2*u]=x,h[2*u+1]=a+1,i++),A[a]=I}if(g!==0&&1-i/r<g)return null;if(w){for(let t=c[d-1];t<p.length;t++)p[t]=A[y[t]];A=L(p)}const M=l?new Array(i):new Uint32Array(i*n);i=0;for(let t=0;t<b;t++)A[t]===i&&(z(s,(w?y[t]:t)*n,M,i*n,n),i++);if(y&&!w){const t=new Uint32Array(q);for(let a=0;a<t.length;a++)t[a]=A[y[a]];A=L(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:A,uniqueCount:i}}function $(o,n,e,l){for(let r=0;r<l;r++)if(o[n+r]!==o[e+r])return!1;return!0}function z(o,n,e,l,r){for(let s=0;s<r;s++)e[l+s]=o[n+s]}function B(o,n,e){let l=0;for(let r=0;r<e;r++)l=o[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let h=null;export{F as r};
