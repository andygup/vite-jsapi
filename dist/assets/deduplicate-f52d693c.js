import{gD as L}from"./index-6eb28d6b.js";import{i as O,t as D}from"./Indices-40d92002.js";function F(f,n,e){const l=Array.isArray(f),r=l?f.length/n:f.byteLength/(4*n),g=l?f:new Uint32Array(f,0,r*n),s=(e==null?void 0:e.minReduction)??0,y=(e==null?void 0:e.originalIndices)||null,q=y?y.length:0,c=(e==null?void 0:e.componentOffsets)||null;let U=0;if(c)for(let t=0;t<c.length-1;t++){const a=c[t+1]-c[t];a>U&&(U=a)}else U=r;const m=Math.floor(1.1*U)+1;(h==null||h.length<2*m)&&(h=new Uint32Array(L(2*m)));for(let t=0;t<2*m;t++)h[t]=0;let i=0;const w=!!c&&!!y,b=w?q:r;let A=O(r);const p=new Uint32Array(q),$=1.96;let C=s!==0?Math.ceil(4*$*$/(s*s)*s*(1-s)):b,d=1,I=c?c[1]:b;for(let t=0;t<b;t++){if(t===C){const o=1-i/t;if(o+$*Math.sqrt(o*(1-o)/t)<s)return null;C*=2}if(t===I){for(let o=0;o<2*m;o++)h[o]=0;if(y)for(let o=c[d-1];o<c[d];o++)p[o]=A[y[o]];I=c[++d]}const a=w?y[t]:t,j=a*n,k=z(g,j,n);let u=k%m,x=i;for(;h[2*u+1]!==0;){if(h[2*u]===k){const o=h[2*u+1]-1;if(R(g,j,o*n,n)){x=A[o];break}}u++,u>=m&&(u-=m)}x===i&&(h[2*u]=k,h[2*u+1]=a+1,i++),A[a]=x}if(s!==0&&1-i/r<s)return null;if(w){for(let t=c[d-1];t<p.length;t++)p[t]=A[y[t]];A=D(p)}const M=l?new Array(i):new Uint32Array(i*n);i=0;for(let t=0;t<b;t++)A[t]===i&&(v(g,(w?y[t]:t)*n,M,i*n,n),i++);if(y&&!w){const t=new Uint32Array(q);for(let a=0;a<t.length;a++)t[a]=A[y[a]];A=D(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:A,uniqueCount:i}}function R(f,n,e,l){for(let r=0;r<l;r++)if(f[n+r]!==f[e+r])return!1;return!0}function v(f,n,e,l,r){for(let g=0;g<r;g++)e[l+g]=f[n+g]}function z(f,n,e){let l=0;for(let r=0;r<e;r++)l=f[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let h=null;export{F as e};
