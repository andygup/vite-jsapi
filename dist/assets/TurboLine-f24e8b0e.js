import{m as Le,_ as Te,ak as Re}from"./index-0ea7d266.js";import{C as F,J as U}from"./enums-eb6e4255.js";import{u as ke}from"./definitions-3f56d206.js";const Be=128e3;let _e=null,ge=null;async function Oe(){return _e||(_e=De()),_e}async function De(){ge=await(Le("esri-csp-restrictions")?await Te(()=>import("./libtess-asm-571fdc81.js"),[]).then(i=>i.l):await Te(()=>import("./libtess-ad95e333.js"),[]).then(i=>i.l)).load({locateFile:i=>Re(`esri/core/libs/libtess/${i}`)})}function Ae(n,i){const r=Math.max(n.length,Be);return ge.triangulate(n,i,r)}function Ve(n,i){return n.x===i.x&&n.y===i.y}function Me(n){if(!n)return;const i=n.length;if(i<=1)return;let r=0;for(let N=1;N<i;N++)!Ve(n[N],n[r])&&++r!==N&&(n[r]=n[N]);n.length=r+1}function M(n,i){return n.x=i.y,n.y=-i.x,n}function R(n,i){return n.x=-i.y,n.y=i.x,n}function we(n,i){return n.x=i.x,n.y=i.y,n}function ce(n,i){return n.x=-i.x,n.y=-i.y,n}function me(n){return Math.sqrt(n.x*n.x+n.y*n.y)}function Pe(n,i){return n.x*i.y-n.y*i.x}function Ne(n,i){return n.x*i.x+n.y*i.y}function te(n,i,r,N){return n.x=i.x*r+i.y*N,n.y=i.x*N-i.y*r,n}class Ce{constructor(i,r,N){this._writeVertex=i,this._writeTriangle=r,this._canUseThinTessellation=N,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,r){Me(i),this._canUseThinTessellation&&r.halfWidth<ke&&!r.offset?this._tessellateThin(i,r):this._tessellate(i,r)}_tessellateThin(i,r){if(i.length<2)return;const N=r.wrapDistance||65535;let b=r.initialDistance||0,v=!1,X=i[0].x,z=i[0].y;const P=i.length;for(let W=1;W<P;++W){v&&(v=!1,b=0);let H=i[W].x,p=i[W].y,L=H-X,c=p-z,T=Math.sqrt(L*L+c*c);if(L/=T,c/=T,b+T>N){v=!0;const e=(N-b)/T;T=N-b,H=(1-e)*X+e*H,p=(1-e)*z+e*p,--W}const y=this._writeVertex(X,z,0,0,L,c,c,-L,0,-1,b),l=this._writeVertex(X,z,0,0,L,c,-c,L,0,1,b);b+=T;const I=this._writeVertex(H,p,0,0,L,c,c,-L,0,-1,b),t=this._writeVertex(H,p,0,0,L,c,-c,L,0,1,b);this._writeTriangle(y,l,I),this._writeTriangle(l,I,t),X=H,z=p}}_tessellate(i,r){const N=i[0],b=i[i.length-1],v=Ve(N,b),X=v?3:2;if(i.length<X)return;const z=r.pixelCoordRatio,P=r.capType!=null?r.capType:F.BUTT,W=r.joinType!=null?r.joinType:U.MITER,H=r.miterLimit!=null?Math.min(r.miterLimit,4):2,p=r.roundLimit!=null?Math.min(r.roundLimit,1.05):1.05,L=r.halfWidth!=null?r.halfWidth:2,c=!!r.textured;let T,y,l,I=null;const t=this._prevNormal,e=this._nextNormal;let G=-1,J=-1;const s=this._joinNormal;let d,f;const re=this._textureNormalLeft,xe=this._textureNormalRight,m=this._textureNormal;let a=-1,o=-1;const ue=r.wrapDistance||65535;let h=r.initialDistance||0;const Ee=this._writeVertex,be=this._writeTriangle,_=(k,se,Z,g,S,O)=>{const A=Ee(y,l,d,f,Z,g,k,se,S,O,h);return a>=0&&o>=0&&A>=0&&be(a,o,A),a=o,o=A,A};v&&(T=i[i.length-2],e.x=b.x-T.x,e.y=b.y-T.y,J=me(e),e.x/=J,e.y/=J);let K=!1;for(let k=0;k<i.length;++k){if(K&&(K=!1,h=0),T&&(t.x=-e.x,t.y=-e.y,G=J,h+G>ue&&(K=!0)),K){const x=(ue-h)/G;G=ue-h,T={x:(1-x)*T.x+x*i[k].x,y:(1-x)*T.y+x*i[k].y},--k}else T=i[k];y=T.x,l=T.y;const se=k<=0&&!K,Z=k===i.length-1;if(se||(h+=G),Z?v?I=i[1]:I=null:I=i[k+1],I?(e.x=I.x-y,e.y=I.y-l,J=me(e),e.x/=J,e.y/=J):(e.x=void 0,e.y=void 0),!v){if(se){R(s,e),d=s.x,f=s.y,P===F.SQUARE&&(_(-e.y-e.x,e.x-e.y,e.x,e.y,0,-1),_(e.y-e.x,-e.x-e.y,e.x,e.y,0,1)),P===F.ROUND&&(_(-e.y-e.x,e.x-e.y,e.x,e.y,-1,-1),_(e.y-e.x,-e.x-e.y,e.x,e.y,-1,1)),(P===F.ROUND||P===F.BUTT)&&(_(-e.y,e.x,e.x,e.y,0,-1),_(e.y,-e.x,e.x,e.y,0,1));continue}if(Z){M(s,t),d=s.x,f=s.y,(P===F.ROUND||P===F.BUTT)&&(_(t.y,-t.x,-t.x,-t.y,0,-1),_(-t.y,t.x,-t.x,-t.y,0,1)),P===F.SQUARE&&(_(t.y-t.x,-t.x-t.y,-t.x,-t.y,0,-1),_(-t.y-t.x,t.x-t.y,-t.x,-t.y,0,1)),P===F.ROUND&&(_(t.y-t.x,-t.x-t.y,-t.x,-t.y,1,-1),_(-t.y-t.x,t.x-t.y,-t.x,-t.y,1,1));continue}}let g,S,O=-Pe(t,e);if(Math.abs(O)<.01)Ne(t,e)>0?(s.x=t.x,s.y=t.y,O=1,g=Number.MAX_VALUE,S=!0):(R(s,e),O=1,g=1,S=!1);else{s.x=(t.x+e.x)/O,s.y=(t.y+e.y)/O,g=me(s);const x=(g-1)*L*z;S=g>4||x>G&&x>J}d=s.x,f=s.y;let A=W;switch(W){case U.BEVEL:g<1.05&&(A=U.MITER);break;case U.ROUND:g<p&&(A=U.MITER);break;case U.MITER:g>H&&(A=U.BEVEL);break}switch(A){case U.MITER:{if(_(s.x,s.y,-t.x,-t.y,0,-1),_(-s.x,-s.y,-t.x,-t.y,0,1),Z)break;if(c){const x=K?0:h;a=this._writeVertex(y,l,d,f,e.x,e.y,s.x,s.y,0,-1,x),o=this._writeVertex(y,l,d,f,e.x,e.y,-s.x,-s.y,0,1,x)}break}case U.BEVEL:{const x=O<0;let w,V;if(x){const u=a;a=o,o=u,w=re,V=xe}else w=xe,V=re;let q,B;if(S)q=x?R(this._innerPrev,t):M(this._innerPrev,t),B=x?M(this._innerNext,e):R(this._innerNext,e);else{const u=x?ce(this._inner,s):we(this._inner,s);q=u,B=u}const D=x?M(this._bevelStart,t):R(this._bevelStart,t);_(q.x,q.y,-t.x,-t.y,w.x,w.y);const le=_(D.x,D.y,-t.x,-t.y,V.x,V.y);if(Z)break;const C=x?R(this._bevelEnd,e):M(this._bevelEnd,e);if(S){const u=this._writeVertex(y,l,d,f,-t.x,-t.y,0,0,0,0,h);a=this._writeVertex(y,l,d,f,e.x,e.y,B.x,B.y,w.x,w.y,h),o=this._writeVertex(y,l,d,f,e.x,e.y,C.x,C.y,V.x,V.y,h),this._writeTriangle(le,u,o)}else{if(c){const u=this._bevelMiddle;u.x=(D.x+C.x)/2,u.y=(D.y+C.y)/2,te(m,u,-t.x,-t.y),_(u.x,u.y,-t.x,-t.y,m.x,m.y),te(m,u,e.x,e.y),a=this._writeVertex(y,l,d,f,e.x,e.y,u.x,u.y,m.x,m.y,h),o=this._writeVertex(y,l,d,f,e.x,e.y,B.x,B.y,w.x,w.y,h)}else{const u=a;a=o,o=u}_(C.x,C.y,e.x,e.y,V.x,V.y)}if(x){const u=a;a=o,o=u}break}case U.ROUND:{const x=O<0;let w,V;if(x){const E=a;a=o,o=E,w=re,V=xe}else w=xe,V=re;const q=x?ce(this._inner,s):we(this._inner,s);let B,D;S?(B=x?R(this._innerPrev,t):M(this._innerPrev,t),D=x?M(this._innerNext,e):R(this._innerNext,e)):(B=q,D=q);const le=x?M(this._roundStart,t):R(this._roundStart,t),C=x?R(this._roundEnd,e):M(this._roundEnd,e),u=_(B.x,B.y,-t.x,-t.y,w.x,w.y),ye=_(le.x,le.y,-t.x,-t.y,V.x,V.y);if(Z)break;const Q=this._writeVertex(y,l,d,f,-t.x,-t.y,0,0,0,0,h);S||this._writeTriangle(a,o,Q);const j=ce(this._outer,q),$=this._writeVertex(y,l,d,f,e.x,e.y,C.x,C.y,V.x,V.y,h);let Y,ee;const ae=g>2;if(ae){let E;g!==Number.MAX_VALUE?(j.x/=g,j.y/=g,E=Ne(t,j),E=(g*(E*E-1)+1)/E):E=-1,Y=x?M(this._startBreak,t):R(this._startBreak,t),Y.x+=t.x*E,Y.y+=t.y*E,ee=x?R(this._endBreak,e):M(this._endBreak,e),ee.x+=e.x*E,ee.y+=e.y*E}te(m,j,-t.x,-t.y);const oe=this._writeVertex(y,l,d,f,-t.x,-t.y,j.x,j.y,m.x,m.y,h);te(m,j,e.x,e.y);const de=c?this._writeVertex(y,l,d,f,e.x,e.y,j.x,j.y,m.x,m.y,h):oe,fe=Q,he=c?this._writeVertex(y,l,d,f,e.x,e.y,0,0,0,0,h):Q;let ie=-1,ne=-1;if(ae&&(te(m,Y,-t.x,-t.y),ie=this._writeVertex(y,l,d,f,-t.x,-t.y,Y.x,Y.y,m.x,m.y,h),te(m,ee,e.x,e.y),ne=this._writeVertex(y,l,d,f,e.x,e.y,ee.x,ee.y,m.x,m.y,h)),c?ae?(this._writeTriangle(fe,ye,ie),this._writeTriangle(fe,ie,oe),this._writeTriangle(he,de,ne),this._writeTriangle(he,ne,$)):(this._writeTriangle(fe,ye,oe),this._writeTriangle(he,de,$)):ae?(this._writeTriangle(Q,ye,ie),this._writeTriangle(Q,ie,ne),this._writeTriangle(Q,ne,$)):(this._writeTriangle(Q,ye,oe),this._writeTriangle(Q,de,$)),S?(a=this._writeVertex(y,l,d,f,e.x,e.y,D.x,D.y,w.x,w.y,h),o=$):(c?a=this._writeVertex(y,l,d,f,e.x,e.y,D.x,D.y,w.x,w.y,h):a=u,this._writeTriangle(a,he,$),o=$),x){const E=a;a=o,o=E}break}}}}}export{Ce as L,Oe as l,Ae as t};