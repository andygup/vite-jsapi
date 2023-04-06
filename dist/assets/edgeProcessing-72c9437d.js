import{e as It}from"./deduplicate-caff52c7.js";import{H as _}from"./InterleavedLayout-4dbdc11c.js";import{O as u}from"./VertexAttribute-9f2e53ec.js";import{C as D}from"./enums-10aa9b05.js";import{t as At}from"./VertexElementDescriptor-2925c6af.js";import{aD as nt,f$ as ht,g0 as Ot,g as H,g1 as ot,g2 as X,g3 as St,g4 as wt,g5 as ft,g6 as rt,g7 as ut,e as T,g8 as Et,cO as Tt}from"./index-0265f5b0.js";function j(t,e=0){const o=t.stride;return Array.from(t.fields.keys()).filter(s=>{var c;const r=(c=t.fields.get(s))==null?void 0:c.optional;return!(r&&r.glPadding)}).map(s=>{const r=t.fields.get(s),c=r.constructor.ElementCount,g=$t(r.constructor.ElementType),a=r.offset,p=!(!r.optional||!r.optional.glNormalized);return new At(s,c,g,a,o,p,e)})}function $t(t){const e=vt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const vt={u8:D.UNSIGNED_BYTE,u16:D.UNSIGNED_SHORT,u32:D.UNSIGNED_INT,i8:D.BYTE,i16:D.SHORT,i32:D.INT,f32:D.FLOAT},yt=_().vec3f(u.POSITION).u16(u.COMPONENTINDEX).u16(u.U16PADDING),Pt=_().vec2u8(u.SIDENESS);j(Pt);const gt=_().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u8(u.VARIANTOFFSET,{glNormalized:!0}).u8(u.VARIANTSTROKE).u8(u.VARIANTEXTENSION,{glNormalized:!0}).u8(u.U8PADDING,{glPadding:!0}).u16(u.U16PADDING,{glPadding:!0}),z=gt.clone().vec3f(u.NORMAL),K=gt.clone().vec3f(u.NORMALA).vec3f(u.NORMALB);u.POSITION0,u.POSITION1,u.COMPONENTINDEX,u.VARIANTOFFSET,u.VARIANTSTROKE,u.VARIANTEXTENSION,u.NORMAL,u.NORMALA,u.NORMALB,u.SIDENESS;const L=-1;var st;function Dt(t,e,o,s=_t){const r=t.vertices.position,c=t.vertices.componentIndex,g=nt(s.anglePlanar),a=nt(s.angleSignificantEdge),p=Math.cos(a),l=Math.cos(g),f=k.edge,I=f.position0,A=f.position1,d=f.faceNormal0,$=f.faceNormal1,h=xt(t),v=Rt(t),n=v.length/4,i=e.allocate(n);let m=0;const N=n,O=o.allocate(N);let E=0,y=0,S=0;const Q=ht(0,n),F=new Float32Array(n);F.forEach((V,w,x)=>{r.getVec(v[4*w],I),r.getVec(v[4*w+1],A),x[w]=Ot(I,A)}),Q.sort((V,w)=>F[w]-F[V]);const Z=new Array,tt=new Array;for(let V=0;V<n;V++){const w=Q[V],x=F[w],G=v[4*w],dt=v[4*w+1],M=v[4*w+2],U=v[4*w+3],et=U===L;if(r.getVec(G,I),r.getVec(dt,A),et)H(d,h[3*M],h[3*M+1],h[3*M+2]),ot($,d),f.componentIndex=c.get(G),f.cosAngle=X(d,$);else{if(H(d,h[3*M],h[3*M+1],h[3*M+2]),H($,h[3*U],h[3*U+1],h[3*U+2]),f.componentIndex=c.get(G),f.cosAngle=X(d,$),Vt(f,l))continue;f.cosAngle<-.9999&&ot($,d)}y+=x,S++,et||Lt(f,p)?(e.write(i,m++,f),Z.push(x)):Mt(f,g)&&(o.write(O,E++,f),tt.push(x))}const Nt=new Float32Array(Z.reverse()),pt=new Float32Array(tt.reverse());return{regular:{instancesData:e.trim(i,m),lodInfo:{lengths:Nt}},silhouette:{instancesData:o.trim(O,E),lodInfo:{lengths:pt}},averageEdgeLength:y/S}}function Lt(t,e){return t.cosAngle<e}function Vt(t,e){return t.cosAngle>e}function Mt(t,e){const o=St(t.cosAngle),s=k.fwd,r=k.ortho;return wt(s,t.position1,t.position0),o*(X(ft(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function Rt(t){const e=t.faces.length/3,o=t.faces,s=t.neighbors;let r=0;for(let a=0;a<e;a++){const p=s[3*a],l=s[3*a+1],f=s[3*a+2],I=o[3*a],A=o[3*a+1],d=o[3*a+2];r+=p===L||I<A?1:0,r+=l===L||A<d?1:0,r+=f===L||d<I?1:0}const c=new Int32Array(4*r);let g=0;for(let a=0;a<e;a++){const p=s[3*a],l=s[3*a+1],f=s[3*a+2],I=o[3*a],A=o[3*a+1],d=o[3*a+2];(p===L||I<A)&&(c[g++]=I,c[g++]=A,c[g++]=a,c[g++]=p),(l===L||A<d)&&(c[g++]=A,c[g++]=d,c[g++]=a,c[g++]=l),(f===L||d<I)&&(c[g++]=d,c[g++]=I,c[g++]=a,c[g++]=f)}return c}function xt(t){const e=t.faces.length/3,o=t.vertices.position,s=t.faces,r=W.v0,c=W.v1,g=W.v2,a=new Float32Array(3*e);for(let p=0;p<e;p++){const l=s[3*p],f=s[3*p+1],I=s[3*p+2];o.getVec(l,r),o.getVec(f,c),o.getVec(I,g),rt(c,c,r),rt(g,g,r),ft(r,c,g),ut(r,r),a[3*p]=r[0],a[3*p+1]=r[1],a[3*p+2]=r[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(st||(st={}));const k={edge:{position0:T(),position1:T(),faceNormal0:T(),faceNormal1:T(),componentIndex:0,cosAngle:0},ortho:T(),fwd:T()},W={v0:T(),v1:T(),v2:T()},_t={anglePlanar:4,angleSignificantEdge:35};function it(t,e,o){const s=e/3,r=new Uint32Array(o+1),c=new Uint32Array(o+1),g=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<s;n++){const i=t[3*n],m=t[3*n+1],N=t[3*n+2];g(i,m),g(m,N),g(N,i)}let a=0,p=0;for(let n=0;n<o;n++){const i=r[n+1],m=c[n+1];r[n+1]=a,c[n+1]=p,a+=i,p+=m}const l=new Uint32Array(6*s),f=r[o],I=(n,i,m)=>{if(n<i){const N=r[n+1]++;l[2*N]=i,l[2*N+1]=m}else{const N=c[i+1]++;l[2*f+2*N]=n,l[2*f+2*N+1]=m}};for(let n=0;n<s;n++){const i=t[3*n],m=t[3*n+1],N=t[3*n+2];I(i,m,n),I(m,N,n),I(N,i,n)}const A=(n,i)=>{const m=2*n,N=i-n;for(let O=1;O<N;O++){const E=l[m+2*O],y=l[m+2*O+1];let S=O-1;for(;S>=0&&l[m+2*S]>E;S--)l[m+2*S+2]=l[m+2*S],l[m+2*S+3]=l[m+2*S+1];l[m+2*S+2]=E,l[m+2*S+3]=y}};for(let n=0;n<o;n++)A(r[n],r[n+1]),A(f+c[n],f+c[n+1]);const d=new Int32Array(3*s),$=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,h=(n,i)=>{const m=$(n,i);d[3*i+m]=-1},v=(n,i,m,N)=>{const O=$(n,i);d[3*i+O]=N;const E=$(m,N);d[3*N+E]=i};for(let n=0;n<o;n++){let i=r[n];const m=r[n+1];let N=c[n];const O=c[n+1];for(;i<m&&N<O;){const E=l[2*i],y=l[2*f+2*N];E===y?(v(n,l[2*i+1],y,l[2*f+2*N+1]),i++,N++):E<y?(h(n,l[2*i+1]),i++):(h(y,l[2*f+2*N+1]),N++)}for(;i<m;)h(n,l[2*i+1]),i++;for(;N<O;)h(l[2*f+2*N],l[2*f+2*N+1]),N++}return d}let mt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?Ut:Ft}write(e,o,s){const r=this._edgeHashFunction(s);b.seed=r;const c=b.getIntRange(0,255),g=b.getIntRange(0,this.settings.variants-1),a=.7,p=b.getFloat(),l=255*(.5*Ct(-(1-Math.min(p/a,1))+Math.max(0,p-a)/(1-a),1.2)+.5);e.position0.setVec(o,s.position0),e.position1.setVec(o,s.position1),e.componentIndex.set(o,s.componentIndex),e.variantOffset.set(o,c),e.variantStroke.set(o,g),e.variantExtension.set(o,l)}trim(e,o){return e.slice(0,o)}};const J=new Float32Array(6),B=new Uint32Array(J.buffer),P=new Uint32Array(1);function Ft(t){const e=J;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],P[0]=5381;for(let o=0;o<B.length;o++)P[0]=31*P[0]+B[o];return P[0]}function Ut(t){const e=J;e[0]=R(t.position0[0]),e[1]=R(t.position0[1]),e[2]=R(t.position0[2]),e[3]=R(t.position1[0]),e[4]=R(t.position1[1]),e[5]=R(t.position1[2]),P[0]=5381;for(let o=0;o<B.length;o++)P[0]=31*P[0]+B[o];return P[0]}const ct=1e4;function R(t){return Math.round(t*ct)/ct}function Ct(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}let q=class{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return z.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),Et(C,s.faceNormal0,s.faceNormal1),ut(C,C),e.normal.setVec(o,C)}trim(e,o){return this._commonWriter.trim(e,o)}};q.Layout=z,q.glLayout=j(z,1);class Y{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),e.normalA.setVec(o,s.faceNormal0),e.normalB.setVec(o,s.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}Y.Layout=K,Y.glLayout=j(K,1);const C=T(),b=new Tt;function Yt(t){const e=bt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return at.updateSettings(t.writerSettings),lt.updateSettings(t.writerSettings),Dt(e,at,lt)}function bt(t,e,o,s){if(e){const g=it(o,s,t.count);return new Bt(o,s,g,t)}const r=It(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:s}),c=it(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:yt.createView(r.buffer)}}class Bt{constructor(e,o,s,r){this.faces=e,this.facesLength=o,this.neighbors=s,this.vertices=r}}const at=new q,lt=new Y,jt=_().vec3f(u.POSITION0).vec3f(u.POSITION1),Jt=_().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u16(u.U16PADDING,{glPadding:!0});export{yt as A,jt as a,Yt as f,Jt as m,Dt as p,bt as u};
