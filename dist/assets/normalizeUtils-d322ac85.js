import{s as F,b as _,a as B}from"./Error-bd05b442.js";import{t as E,r as H}from"./typedArrayUtil-2bcf3cee.js";import{m as R,v as k}from"./Polyline-c56eca9b.js";import{k as j,b as z,R as U,m as K}from"./Extent-7f29a1bb.js";import{y as Q,c as I,v as V,d as Y}from"./jsonUtils-8bd548d9.js";import"./geometry-4b789d90.js";import{j as C,U as T}from"./request-c2b0ab45.js";import{y as Z}from"./string-3d0ebcd3.js";function wt(t,n){return n?{...n,query:{...t,...n.query}}:{query:t}}function tt(t){return typeof t=="string"?C(t):Z(t)}function et(t,n,r){const s={};for(const e in t){if(e==="declaredClass")continue;const o=t[e];if(o!=null&&typeof o!="function")if(Array.isArray(o)){s[e]=[];for(let i=0;i<o.length;i++)s[e][i]=et(o[i])}else if(typeof o=="object")if(o.toJSON){const i=o.toJSON(r&&r[e]);s[e]=n?i:JSON.stringify(i)}else s[e]=n?o:JSON.stringify(o);else s[e]=o}return s}const v={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new R({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:j.WebMercator}),minus180Line:new R({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:j.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new R({paths:[[[180,-180],[180,180]]],spatialReference:j.WGS84}),minus180Line:new R({paths:[[[-180,-180],[-180,180]]],spatialReference:j.WGS84})}};function S(t,n){return Math.ceil((t-n)/(2*n))}function D(t,n){const r=L(t);for(const s of r)for(const e of s)e[0]+=n;return t}function L(t){return Q(t)?t.rings:t.paths}async function nt(t,n,r,s){const e=tt(t),o=n[0].spatialReference,i={...s,query:{...e.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:I(n[0]),geometries:n}),cutter:JSON.stringify(r)}},f=await T(e.path+"/cut",i),{cutIndexes:l,geometries:m=[]}=f.data;return{cutIndexes:l,geometries:m.map(h=>{const x=V(h);return x.spatialReference=o,x})}}function st(t){return{geometryType:I(t[0]),geometries:t.map(n=>n.toJSON())}}function ot(t,n,r){const s=Y(n);return t.map(e=>{const o=s.fromJSON(e);return o.spatialReference=r,o})}async function rt(t,n,r){const s=typeof t=="string"?C(t):t,e=n[0].spatialReference,o=I(n[0]),i={...r,query:{...s.query,f:"json",sr:e.wkid?e.wkid:JSON.stringify(e),geometries:JSON.stringify(st(n))}},{data:f}=await T(s.path+"/simplify",i);return ot(f.geometries,o,e)}const G=F.getLogger("esri.geometry.support.normalizeUtils");function it(t){return t.type==="polygon"}function ft(t){return t[0].type==="polygon"}function ct(t){return t[0].type==="polyline"}function at(t,n){if(!(t instanceof R||t instanceof k)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw G.error(e),new B(e)}const r=L(t),s=[];for(const e of r){const o=[];s.push(o),o.push([e[0][0],e[0][1]]);for(let i=0;i<e.length-1;i++){const f=e[i][0],l=e[i][1],m=e[i+1][0],h=e[i+1][1],x=Math.sqrt((m-f)*(m-f)+(h-l)*(h-l)),u=(h-l)/x,g=(m-f)/x,p=x/n;if(p>1){for(let N=1;N<=p-1;N++){const J=N*n,c=g*J+f,a=u*J+l;o.push([c,a])}const w=(x+Math.floor(p-1)*n)/2,O=g*w+f,A=u*w+l;o.push([O,A])}o.push([m,h])}}return it(t)?new k({rings:s,spatialReference:t.spatialReference}):new R({paths:s,spatialReference:t.spatialReference})}function P(t,n,r){if(n){const s=at(t,1e6);t=K(s,!0)}return r&&(t=D(t,r)),t}function W(t,n,r){if(Array.isArray(t)){const s=t[0];if(s>n){const e=S(s,n);t[0]=s+e*(-2*n)}else if(s<r){const e=S(s,r);t[0]=s+e*(-2*r)}}else{const s=t.x;if(s>n){const e=S(s,n);t=t.clone().offset(e*(-2*n),0)}else if(s<r){const e=S(s,r);t=t.clone().offset(e*(-2*r),0)}}return t}function ut(t,n){let r=-1;for(let s=0;s<n.cutIndexes.length;s++){const e=n.cutIndexes[s],o=n.geometries[s],i=L(o);for(let f=0;f<i.length;f++){const l=i[f];l.some(m=>{if(m[0]<180)return!0;{let h=0;for(let u=0;u<l.length;u++){const g=l[u][0];h=g>h?g:h}h=Number(h.toFixed(9));const x=-360*S(h,180);for(let u=0;u<l.length;u++){const g=o.getPoint(f,u);o.setPoint(f,u,g.clone().offset(x,0))}return!0}})}if(e===r){if(ft(t))for(const f of L(o))t[e]=t[e].addRing(f);else if(ct(t))for(const f of L(o))t[e]=t[e].addPath(f)}else r=e,t[e]=o}return t}async function lt(t,n,r){if(!Array.isArray(t))return lt([t],n);n&&typeof n!="string"&&G.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const s=typeof n=="string"?n:(n==null?void 0:n.url)??_.geometryServiceUrl;let e,o,i,f,l,m,h,x,u=0;const g=[],p=[];for(const c of t)if(E(c))p.push(c);else if(e||(e=c.spatialReference,o=z(e),i=e.isWebMercator,m=i?102100:4326,f=v[m].maxX,l=v[m].minX,h=v[m].plus180Line,x=v[m].minus180Line),o)if(c.type==="mesh")p.push(c);else if(c.type==="point")p.push(W(c.clone(),f,l));else if(c.type==="multipoint"){const a=c.clone();a.points=a.points.map(y=>W(y,f,l)),p.push(a)}else if(c.type==="extent"){const a=c.clone()._normalize(!1,!1,o);p.push(a.rings?new k(a):a)}else if(c.extent){const a=c.extent,y=S(a.xmin,l)*(2*f);let d=y===0?c.clone():D(c.clone(),y);a.offset(y,0),a.intersects(h)&&a.xmax!==f?(u=a.xmax>u?a.xmax:u,d=P(d,i),g.push(d),p.push("cut")):a.intersects(x)&&a.xmin!==l?(u=a.xmax*(2*f)>u?a.xmax*(2*f):u,d=P(d,i,360),g.push(d),p.push("cut")):p.push(d)}else p.push(c.clone());else p.push(c);let w=S(u,f),O=-90;const A=w,N=new R;for(;w>0;){const c=360*w-180;N.addPath([[c,O],[c,-1*O]]),O*=-1,w--}if(g.length>0&&A>0){const c=ut(g,await nt(s,g,N,r)),a=[],y=[];for(let $=0;$<p.length;$++){const b=p[$];if(b!=="cut")y.push(b);else{const M=c.shift(),q=t[$];H(q)&&q.type==="polygon"&&q.rings&&q.rings.length>1&&M.rings.length>=q.rings.length?(a.push(M),y.push("simplify")):y.push(i?U(M):M)}}if(!a.length)return y;const d=await rt(s,a,r),X=[];for(let $=0;$<y.length;$++){const b=y[$];b!=="simplify"?X.push(b):X.push(i?U(d.shift()):d.shift())}return X}const J=[];for(let c=0;c<p.length;c++){const a=p[c];if(a!=="cut")J.push(a);else{const y=g.shift();J.push(i===!0?U(y):y)}}return J}function Rt(t,n){const r=z(n);if(r){const[s,e]=r.valid,o=e-s;if(t<s)for(;t<s;)t+=o;if(t>e)for(;t>e;)t-=o}return t}export{Rt as U,et as a,wt as b,tt as f,S as i,ot as o,v as r,D as s,lt as v};
