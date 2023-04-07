import{e9 as V,aH as Pt,as as J,Z as $,t as T,r as S,$ as I,bG as bt,R as N,ea as St,s as Gt,eb as C,ec as v,ed as it,ee as Nt,ef as Et,aI as kt,eg as ot}from"./index-4d2185ff.js";var Q;function xt(t,n,i){return!St(t,n,i)}function j(t,n,i){const r=xt(t,n,i);if(r&&!V())throw new Gt("rasterprojectionhelper-project","projection engine is not loaded");return r}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(Q||(Q={}));const st=(t,n,i,r=0)=>{if(i[0]===1)return[0,0];let s=1,e=-1,o=1,u=-1;for(let a=0;a<t.length;a+=2)isNaN(t[a])||(s=s>t[a]?t[a]:s,e=e>t[a]?e:t[a],o=o>t[a+1]?t[a+1]:o,u=u>t[a+1]?u:t[a+1]);const{cols:f,rows:c}=n,l=(e-s)/f/i[0],d=(u-o)/c/i[1],p=2*r;let h=0,x=!1,m=[0,0];for(let a=0;a<f-3;a++){for(let w=0;w<c-3;w++){const y=a*c*2+2*w,g=(t[y]+t[y+4]+t[y+4*c]+t[y+4*c+4])/4,M=(t[y+1]+t[y+5]+t[y+4*c+1]+t[y+4*c+5])/4,R=Math.abs((g-t[y+2*c+2])/l),P=Math.abs((M-t[y+2*c+3])/d);if(R+P>h&&(h=R+P,m=[R,P]),p&&h>p){x=!0;break}}if(x)break}return m},Tt={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},B=32,F=4,H=F,U=new Map,Z=new Map,Y=500;async function $t(){V()||await Pt()}function jt(t,n,i){return j(t.spatialReference,n)?i?ot(n,t.spatialReference,t):ot(t.spatialReference,n,t):null}function rt(t,n,i,r=null){const s=t.spatialReference;if(s.equals(n))return t;j(s,n,r);const e=i.center,o=new J({xmin:e.x-t.x/2,xmax:e.x+t.x/2,ymin:e.y-t.y/2,ymax:e.y+t.y/2,spatialReference:s}),u=$(o,n,r),f=_(n);let c;if(T(u)||S(f)&&u.width>=f){const l=I(s)/I(n);c={x:t.x*l,y:t.y*l}}else c={x:u.width,y:u.height};return c}function E(t,n=.01){return I(t)?n/I(t):0}function at(t,n,i=null,r=!0){const s=t.spatialReference;if(s.equals(n))return t;j(s,n,i);const e=$(t,n,i);return r&&e&&mt([t],[e],s,n),e}function mt(t,n,i,r){const s=q(i,!0),e=q(r,!0),o=E(i,Y),u=E(r,Y);if(o&&S(s)&&S(e))for(let f=0;f<t.length;f++){const c=n[f];if(!c)continue;const{x:l}=t[f],{x:d}=c;d>=e[1]-u&&Math.abs(l-s[0])<o?c.x-=e[1]-e[0]:d<=e[0]+u&&Math.abs(l-s[1])<o&&(c.x+=e[1]-e[0])}}function vt(t){const{inSR:n,outSR:i,datumTransformation:r,preferPE:s}=t;if(n.equals(i)){const{points:e}=tt(t,null);return e}if(n.isWebMercator&&i.isWGS84||n.isWGS84&&i.isWebMercator)return _t(t);if(j(n,i,r)&&s){if(n.isGeographic)return lt(t);const e=W(n);if(S(e))return lt(t)}return Ct(t)}function Ct(t){const{points:n}=tt(t,null),{inSR:i,outSR:r,datumTransformation:s}=t,e=n.map(u=>new N(u[0],u[1],i)),o=$(e,r,s);return s&&mt(e,o,i,r),o.map(u=>u?[u.x,u.y]:[NaN,NaN])}function lt(t){const{inSR:n,outSR:i,datumTransformation:r}=t,s=W(n),{points:e,mask:o}=tt(t,s);if(!n.isGeographic){const f=n.wkid?C.coordsys(n.wkid):C.fromString(n.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,n.wkt);it.projToGeog(f,e.length,e)}if(S(r)&&r.steps.length){let f;if(i.isGeographic&&(f=e.map(([l])=>l>179.9955?1:l<-179.9955?-1:0)),r.steps.forEach(l=>{const d=l.wkid?C.geogtran(l.wkid):C.fromString(v.PE_TYPE_GEOGTRAN,l.wkt);Nt.geogToGeog(d,e.length,e,null,l.isInverse?v.PE_TRANSFORM_2_TO_1:v.PE_TRANSFORM_1_TO_2)}),f)for(let l=0;l<e.length;l++){const d=f[l],p=e[l][0],h=p>179.9955?1:p<-179.9955?-1:0;d&&h&&d!==h&&(e[l][0]=d>0?p+360:p-360)}}if(!i.isGeographic){const f=W(i,!0),c=S(f)&&f.isEnvelope?[f.bbox[1],f.bbox[3]]:[-90,90];zt(e,c);const l=i.wkid?C.coordsys(i.wkid):C.fromString(i.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,i.wkt);it.geogToProj(l,e.length,e)}let u=e;if(o&&e.length!==o.length){u=[];for(let f=0,c=0;f<o.length;f++)o[f]?u.push(e[c++]):u.push([NaN,NaN])}return u}function _t(t){const{cols:n,rows:i,xres:r,yres:s,usePixelCenter:e,inSR:o,outSR:u}=t;let{xmin:f,ymax:c}=t;e&&(f+=r/2,c-=s/2);const l=[],d=[],p=Math.max(n,i);for(let x=0;x<p;x++){const m=f+r*Math.min(n,x),a=c-s*Math.min(i,x),w=$(new N({x:m,y:a,spatialReference:o}),u);x<=n&&l.push(w.x),x<=i&&d.push(w.y)}const h=[];for(let x=0;x<n;x++)for(let m=0;m<i;m++)h.push([l[x],d[m]]);return h}function W(t,n=!1){let i=t.wkid||t.wkt;if(!i||t.isGeographic)return null;if(i=String(i),U.has(i)){const o=U.get(i);return n?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const r=t.wkid?C.coordsys(t.wkid):C.fromString(t.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,t.wkt),s=ct(r,E(t,1e-4)),e=ct(r,0,!0);return U.set(i,{pcs:s,gcs:e}),n?e:s}function ct(t,n=0,i=!1){const r=Et.generate(t),s=i?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!r||!(s!=null&&s.length))return null;let e=!1,o=s.find(a=>a.getInclusive()===1&&a.getKind()===1);if(!o){if(o=s.find(a=>a.getInclusive()===1&&a.getKind()===0),!o)return null;e=!0}const u=i?0:(r.getNorthPoleLocation()===2?1:0)|(r.getSouthPoleLocation()===2?2:0),f=r.isPannableRectangle(),c=o.getCoord();if(e)return{isEnvelope:e,isPannable:f,vertices:c,coef:null,bbox:[c[0][0]-n,c[0][1]-n,c[1][0]+n,c[1][1]+n],poleLocation:u};let l=0;const d=[];let[p,h]=c[0],[x,m]=c[0];for(let a=0,w=c.length;a<w;a++){l++,l===w&&(l=0);const[y,g]=c[a],[M,R]=c[l];if(R===g)d.push([y,M,g,R,2]);else{const P=(M-y)/(R-g||1e-4),k=y-P*g;g<R?d.push([P,k,g,R,0]):d.push([P,k,R,g,1])}p=p<y?p:y,h=h<g?h:g,x=x>y?x:y,m=m>g?m:g}return{isEnvelope:!1,isPannable:f,vertices:c,coef:d,bbox:[p,h,x,m],poleLocation:u}}function tt(t,n){const i=[],{cols:r,rows:s,xres:e,yres:o,usePixelCenter:u}=t;let{xmin:f,ymax:c}=t;if(u&&(f+=e/2,c-=o/2),T(n)){for(let h=0;h<r;h++)for(let x=0;x<s;x++)i.push([f+e*h,c-o*x]);return{points:i}}const l=new Uint8Array(r*s);if(n.isEnvelope){const{bbox:[h,x,m,a]}=n;for(let w=0,y=0;w<r;w++){const g=f+e*w,M=n.isPannable||g>=h&&g<=m;for(let R=0;R<s;R++,y++){const P=c-o*R;M&&P>=x&&P<=a&&(i.push([g,P]),l[y]=1)}}return{points:i,mask:l}}const d=n.coef,p=[];for(let h=0;h<s;h++){const x=c-o*h,m=[],a=[];for(let y=0;y<d.length;y++){const[g,M,R,P,k]=d[y];if(x===R&&R===P)m.push(g),m.push(M),a.push(2),a.push(2);else if(x>=R&&x<=P){const G=g*x+M;m.push(G),a.push(k)}}let w=m;if(m.length>2){let y=a[0]===2?0:a[0],g=m[0];w=[];for(let M=1;M<a.length;M++)a[M]===2&&M!==a.length-1||(a[M]!==y&&(w.push(y===0?Math.min(g,m[M-1]):Math.max(g,m[M-1])),y=a[M],g=m[M]),M===a.length-1&&w.push(a[M]===0?Math.min(g,m[M]):Math.max(g,m[M])));w.sort((M,R)=>M-R)}else m[0]>m[1]&&(w=[m[1],m[0]]);p.push(w)}for(let h=0,x=0;h<r;h++){const m=f+e*h;for(let a=0;a<s;a++,x++){const w=c-o*a,y=p[a];if(y.length===2)m>=y[0]&&m<=y[1]&&(i.push([m,w]),l[x]=1);else if(y.length>2){let g=!1;for(let M=0;M<y.length;M+=2)if(m>=y[M]&&m<=y[M+1]){g=!0;break}g&&(i.push([m,w]),l[x]=1)}}}return{points:i,mask:l}}function zt(t,n){const[i,r]=n;for(let s=0;s<t.length;s++){const e=t[s][1];(e<i||e>r)&&(t[s]=[NaN,NaN])}}function pt(t){const n=_(t[0].spatialReference);if(t.length<2||T(n))return t[0];let{xmin:i,xmax:r,ymin:s,ymax:e}=t[0];for(let o=1;o<t.length;o++){const u=t[o];r=u.xmax+n*o,s=Math.min(s,u.ymin),e=Math.max(e,u.ymax)}return new J({xmin:i,xmax:r,ymin:s,ymax:e,spatialReference:t[0].spatialReference})}function gt(t,n,i=null,r=!0){const s=t.spatialReference;if(s.equals(n))return t;const e=Lt(t),o=_(s,!0),u=_(n);if(e===0||T(o)||T(u)){const c=ft(t,n,i,r);if(T(o)&&S(u)&&Math.abs(c.width-u)<E(n)&&V()){const l=W(s);if(S(l)&&l.poleLocation===Q.None&&t.width<(l.bbox[2]-l.bbox[0])/2)return Ot(t,n)||c}return c}const f=t.clone().normalize();if(f.length===1&&t.xmax<o&&t.xmax-o/2>E(s)){const{xmin:c,xmax:l}=t;for(let d=0;d<=e;d++){const p=d===0?c:-o/2,h=d===e?l-o*d:o/2;f[d]=new J({xmin:p,xmax:h,ymin:t.ymin,ymax:t.ymax,spatialReference:s})}}return pt(f.map(c=>ft(c,n,i,r)).filter(S))}function Ot(t,n){const i=_(n);if(T(i))return null;let{xmin:r,ymin:s,xmax:e,ymax:o}=t;const u=t.spatialReference,f=new bt({spatialReference:u,rings:[[[r,s],[e,s],[e,o],[r,o],[r,s]]]}),c=$(f,n);if(c.rings.length!==2||!c.rings[0].length||!c.rings[1].length)return null;const{rings:l}=c,d=E(u),p=new J({spatialReference:n});for(let h=0;h<2;h++){r=e=l[h][0][0],s=o=l[h][0][1];for(let x=0;x<l[h].length;x++)r=r>l[h][x][0]?l[h][x][0]:r,e=e<l[h][x][0]?l[h][x][0]:e,s=s>l[h][x][1]?l[h][x][1]:s,o=o<l[h][x][1]?l[h][x][1]:o;if(h===0)p.ymin=s,p.ymax=o,p.xmin=r,p.xmax=e;else if(p.ymin=Math.min(p.ymin,s),p.ymax=Math.max(p.ymax,o),Math.abs(e-i/2)<d)p.xmin=r,p.xmax=p.xmax+i;else{if(!(Math.abs(r+i/2)<d))return null;p.xmax=e+i}}return p}function ft(t,n,i=null,r=!0,s=!0){const e=t.spatialReference;if(e.equals(n)||!n)return t;j(e,n,i);const o=$(t,n,i);if(s&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!r||!o)return o;const u=q(e,!0),f=q(n,!0);if(T(u)||T(f))return o;const c=E(e,.001),l=E(e,Y),d=E(n,.001);if(Math.abs(o.xmin-f[0])<d&&Math.abs(o.xmax-f[1])<d){const p=Math.abs(t.xmin-u[0]),h=Math.abs(u[1]-t.xmax);if(p<c&&h>l){o.xmin=f[0];const x=[];x.push(new N(t.xmax,t.ymin,e)),x.push(new N(t.xmax,(t.ymin+t.ymax)/2,e)),x.push(new N(t.xmax,t.ymax,e));const m=x.map(a=>at(a,n,i)).filter(a=>!isNaN(a==null?void 0:a.x)).map(a=>a.x);o.xmax=Math.max.apply(null,m)}if(h<c&&p>l){o.xmax=f[1];const x=[];x.push(new N(t.xmin,t.ymin,e)),x.push(new N(t.xmin,(t.ymin+t.ymax)/2,e)),x.push(new N(t.xmin,t.ymax,e));const m=x.map(a=>at(a,n,i)).filter(a=>!isNaN(a==null?void 0:a.x)).map(a=>a.x);o.xmin=Math.min.apply(null,m)}}else{const p=E(n,.001);Math.abs(o.xmin-f[0])<p&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<p&&(o.xmax=f[1])}return o}function _(t,n=!1){if(!t)return null;const i=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*i:t.wkid&&t.isGeographic?360:2*Tt[t.wkid]||null}function q(t,n=!1){if(t.isGeographic)return[-180,180];const i=_(t,n);return S(i)?[-i/2,i/2]:null}function ut(t,n,i,r){let s=(t-n)/i;return s-Math.floor(s)!=0?s=Math.floor(s):r&&(s-=1),s}function Lt(t,n=!1){const i=_(t.spatialReference);if(T(i))return 0;const r=n?0:-(i/2),s=E(t.spatialReference),e=!n&&Math.abs(t.xmax-i/2)<s?i/2:t.xmax,o=!n&&Math.abs(t.xmin+i/2)<s?-i/2:t.xmin;return ut(e,r,i,!0)-ut(o,r,i,!1)}function At(t){const n=t.storageInfo.origin.x,i=_(t.spatialReference,!0);if(T(i))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const r=i/2,{nativePixelSize:s,storageInfo:e,extent:o}=t,{maximumPyramidLevel:u,blockWidth:f,pyramidScalingFactor:c}=e;let l=s.x;const d=[],p=S(t.transform)&&t.transform.type==="gcs-shift",h=n+(p?0:r),x=p?i-n:r-n;for(let m=0;m<=u;m++){const a=(o.xmax-n)/l/f,w=a-Math.floor(a)==0?a:Math.ceil(a),y=x/l/f,g=y-Math.floor(y)==0?y:Math.ceil(y),M=Math.floor(h/l/f),R=Math.round(h/l)%f,P=(f-Math.round(x/l)%f)%f;d.push({resolutionX:l,blockWidth:f,datsetColumnCount:w,worldColumnCountFromOrigin:g,leftMargin:R,rightPadding:P,originColumnOffset:M}),l*=c}return{originX:n,halfWorldWidth:r,pyramidsInfo:d,hasGCSSShiftTransform:p}}function Wt(t){if(!t||t.isGeographic)return t;const n=String(t.wkid||t.wkt);let i;return Z.has(n)?i=Z.get(n):(i=(t.wkid?C.coordsys(t.wkid):C.fromString(v.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),Z.set(n,i)),new kt({wkid:i})}function Bt(t){const n=t.isAdaptive&&t.spacing==null;let i=t.spacing||[B,B],r=D(t),s={cols:r.size[0]+1,rows:r.size[1]+1};const e=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let o=r.outofBoundPointCount===r.offsets.length/2||n&&e?[0,0]:st(r.offsets,s,i,H);const u=(o[0]+o[1])/2,f=t.projectedExtent.spatialReference,c=t.srcBufferExtent.spatialReference;if(n&&(e||u>H)&&(xt(f,c,t.datumTransformation)&&(f.isGeographic||S(W(f))),i=[F,F],r=D({...t,spacing:i}),s={cols:r.size[0]+1,rows:r.size[1]+1},o=st(r.offsets,s,i,H)),r.error=o,i[0]>1&&(r.coefficients=ht(r.offsets,s,e)),t.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(c.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:i};else{const l=W(f);if(S(l)&&!l.isEnvelope){const d=Wt(f),p=gt(t.projectedExtent,d),{offsets:h}=D({...t,srcBufferExtent:p,spacing:i}),x=ht(h,s,e);r.gcsGrid={offsets:h,coefficients:x,spacing:i}}}return r}function D(t){const{projectedExtent:n,srcBufferExtent:i,pixelSize:r,datumTransformation:s,rasterTransform:e}=t,o=n.spatialReference,u=i.spatialReference,f=j(o,u),{xmin:c,ymin:l,xmax:d,ymax:p}=n,h=_(u),x=S(h)&&(t.hasWrapAround||(e==null?void 0:e.type)==="gcs-shift"),m=t.spacing||[B,B],a=m[0]*r.x,w=m[1]*r.y,y=m[0]===1,g=Math.ceil((d-c)/a-.1/m[0])+(y?0:1),M=Math.ceil((p-l)/w-.1/m[1])+(y?0:1),R=vt({cols:g,rows:M,xmin:c,ymax:p,xres:a,yres:w,inSR:o,outSR:u,datumTransformation:s,preferPE:m[0]<=F,usePixelCenter:y}),P=[];let k,G=0;const z=y?-1:NaN,{xmin:L,xmax:X,ymax:yt,width:dt,height:Mt}=i,wt=E(u,Y),Rt=S(h)&&L>0&&X>h/2;let nt=!1;if(f){const O=W(o);nt=S(O)&&O.poleLocation>0}for(let O=0;O<g;O++){const K=[];for(let A=0;A<M;A++){let b=R[O*M+A];if(x&&b[0]>X&&b[0]>h/2-wt?b[0]-=h:x&&O===0&&b[0]<0&&Rt&&!e&&(b[0]+=h),!b||isNaN(b[0])||isNaN(b[1]))P.push(z),P.push(z),K.push(null),G++;else{if(e){const et=e.inverseTransform(new N({x:b[0],y:b[1],spatialReference:u}));b=[et.x,et.y]}K.push(b),O>0&&x&&k[A]&&b[0]<k[A][0]&&(b[0]+=h,nt&&b[0]>X&&b[0]>h&&(b[0]-=h)),P.push((b[0]-L)/dt),P.push((yt-b[1])/Mt)}}k=K}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:G,spacing:m,size:y?[g,M]:[g-1,M-1]}}function ht(t,n,i){const{cols:r,rows:s}=n,e=new Float32Array((r-1)*(s-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),u=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let f=0;f<r-1;f++){for(let c=0;c<s-1;c++){let l=f*s*2+2*c;const d=t[l],p=t[l+1],h=t[l+2],x=t[l+3];l+=2*s;const m=t[l],a=t[l+1],w=t[l+2],y=t[l+3];let g=0,M=12*(c*(r-1)+f);for(let R=0;R<3;R++)e[M++]=o[g++]*d+o[g++]*h+o[g++]*w;g=0;for(let R=0;R<3;R++)e[M++]=o[g++]*p+o[g++]*x+o[g++]*y;g=0;for(let R=0;R<3;R++)e[M++]=u[g++]*d+u[g++]*m+u[g++]*w;g=0;for(let R=0;R<3;R++)e[M++]=u[g++]*p+u[g++]*a+u[g++]*y}if(i)for(let c=0;c<e.length;c++)isNaN(e[c])&&(e[c]=-1)}return e}function Ft(t){const n=t.clone().normalize();return n.length===1?n[0]:pt(n)}function Yt(t,n,i){const{storageInfo:r,pixelSize:s}=n;let e=0,o=!1;const{pyramidResolutions:u}=r;if(S(u)&&u.length){const p=(t.x+t.y)/2,h=u[u.length-1],x=(h.x+h.y)/2,m=(s.x+s.y)/2;if(p<=m)e=0;else if(p>=x)e=u.length,o=p/x>8;else{let w,y=m;for(let g=1;g<=u.length;g++){if(w=(u[g-1].x+u[g-1].y)/2,p<=w){p===w?e=g:i==="down"?(e=g-1,o=p/y>8):e=i==="up"||p-y>w-p||p/y>2?g:g-1;break}y=w}}const a=e===0?s:u[e-1];return o&&Math.min(a.x,a.y)*I(n.spatialReference)>19567&&(o=!1),{pyramidLevel:e,pyramidResolution:new N({x:a.x,y:a.y,spatialReference:n.spatialReference}),excessiveReading:o}}const f=Math.log(t.x/s.x)/Math.LN2,c=Math.log(t.y/s.y)/Math.LN2,l=n.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(f,c)):i==="up"?Math.ceil(Math.max(f,c)):Math.round((f+c)/2),e<0?e=0:e>l&&(o=e>l+3,e=l);const d=2**e;return{pyramidLevel:e,pyramidResolution:new N({x:d*n.nativePixelSize.x,y:d*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:o}}function qt(t,n,i=512,r=!0){var k;const{extent:s,spatialReference:e,pixelSize:o}=t,u=rt(new N({x:o.x,y:o.y,spatialReference:e}),n,s);if(u==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(u.x+u.y)/2,c=I(n),l=f*c*96*39.37,d=n.isGeographic?256/i*2958287637958547e-7:256/i*591657527591555e-6;let p=t.dataType==="vector-magdir"||t.dataType==="vector-uv";const h=gt(s,n),x=Math.min(Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2),Math.ceil(Math.log(d/2/l)/Math.LN2));if(!p&&r&&(n.isGeographic||n.isWebMercator)&&(p=h.xmin*h.xmax<0,!p&&x<3)){const G=_(n);if(S(G)){const z=2**x*f*i,L=Math.ceil(G/z);p=L===1||L===2&&G/2-h.xmax<z}}let m,a=l;const w=1.001,y=Math.min(2,Math.max(1.414,((k=t.storageInfo)==null?void 0:k.pyramidScalingFactor)||2));if(p){a=d;const G=n.isGeographic?1341104507446289e-21:.29858214164761665,z=G*(96*c*39.37),L=n.isGeographic?4326:3857;m=rt(new N({x:G,y:G,spatialReference:{wkid:L}}),e,h),m.x*=a/z,m.y*=a/z}else{m={x:o.x,y:o.y};let G=0;for(;a<d*(w/2)&&G<x;)G++,a*=y,m.x*=y,m.y*=y;Math.max(a,d)/Math.min(a,d)<=w&&(a=d)}const g=[a],M=[{x:m.x,y:m.y}],R=70.5310735,P=Math.min(R,l)/w;for(;a>=P;)a/=y,m.x/=y,m.y/=y,g.push(a),M.push({x:m.x,y:m.y});return{projectedPixelSize:u,scales:g,srcResolutions:M,isCustomTilingScheme:!p}}export{Bt as $,rt as C,gt as J,xt as M,Lt as Q,$t as T,_ as U,At as V,qt as i,at as j,Ft as n,Yt as o,jt as v};
