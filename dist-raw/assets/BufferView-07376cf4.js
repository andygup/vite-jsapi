import{bN as v,s as _}from"./index-468a9268.js";import{s as V}from"./vec4-3dd523e8.js";class W{constructor(e,t,f=0,s,y){this.TypedArrayConstructor=e,this.elementCount=9;const r=this.TypedArrayConstructor;s===void 0&&(s=9*r.BYTES_PER_ELEMENT);const n=t.byteLength===0?0:f;this.typedBuffer=y==null?new r(t,n):new r(t,n,(y-f)/r.BYTES_PER_ELEMENT),this.typedBufferStride=s/r.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<9;s++)t[s]=this.typedBuffer[f++];return t}setMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<9;s++)this.typedBuffer[f++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}copyFrom(e,t,f){const s=this.typedBuffer,y=t.typedBuffer;let r=e*this.typedBufferStride,n=f*t.typedBufferStride;for(let d=0;d<9;++d)s[r++]=y[n++]}get buffer(){return this.typedBuffer.buffer}}W.ElementCount=9;class X{constructor(e,t,f=0,s,y){this.TypedArrayConstructor=e,this.elementCount=16;const r=this.TypedArrayConstructor;s===void 0&&(s=16*r.BYTES_PER_ELEMENT);const n=t.byteLength===0?0:f;this.typedBuffer=y==null?new r(t,n):new r(t,n,(y-f)/r.BYTES_PER_ELEMENT),this.typedBufferStride=s/r.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<16;s++)t[s]=this.typedBuffer[f++];return t}setMat(e,t){let f=e*this.typedBufferStride;for(let s=0;s<16;s++)this.typedBuffer[f++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}copyFrom(e,t,f){const s=this.typedBuffer,y=t.typedBuffer;let r=e*this.typedBufferStride,n=f*t.typedBufferStride;for(let d=0;d<16;++d)s[r++]=y[n++]}get buffer(){return this.typedBuffer.buffer}}X.ElementCount=16;class u{constructor(e,t,f=0,s,y){this.TypedArrayConstructor=e,this.elementCount=1;const r=this.TypedArrayConstructor;s===void 0&&(s=r.BYTES_PER_ELEMENT);const n=t.byteLength===0?0:f;this.typedBuffer=y==null?new r(t,n):new r(t,n,(y-f)/r.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/r.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=1;class i{constructor(e,t,f=0,s,y){this.TypedArrayConstructor=e,this.elementCount=2;const r=this.TypedArrayConstructor;s===void 0&&(s=2*r.BYTES_PER_ELEMENT);const n=t.byteLength===0?0:f;this.typedBuffer=y==null?new r(t,n):new r(t,n,(y-f)/r.BYTES_PER_ELEMENT),this.typedBufferStride=s/r.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getVec(e,t){return e*=this.typedBufferStride,v(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}setValues(e,t,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=f}copyFrom(e,t,f){const s=this.typedBuffer,y=t.typedBuffer;let r=e*this.typedBufferStride,n=f*t.typedBufferStride;s[r++]=y[n++],s[r]=y[n]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;class p{constructor(e,t,f=0,s,y){this.TypedArrayConstructor=e,this.elementCount=3;const r=this.TypedArrayConstructor;s===void 0&&(s=3*r.BYTES_PER_ELEMENT);const n=t.byteLength===0?0:f;this.typedBuffer=y==null?new r(t,n):new r(t,n,(y-f)/r.BYTES_PER_ELEMENT),this.typedBufferStride=s/r.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getVec(e,t){return e*=this.typedBufferStride,_(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}setValues(e,t,f,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=f,this.typedBuffer[e]=s}copyFrom(e,t,f){const s=this.typedBuffer,y=t.typedBuffer;let r=e*this.typedBufferStride,n=f*t.typedBufferStride;s[r++]=y[n++],s[r++]=y[n++],s[r]=y[n]}get buffer(){return this.typedBuffer.buffer}}p.ElementCount=3;class h{constructor(e,t,f=0,s,y){this.TypedArrayConstructor=e,this.start=f,this.elementCount=4;const r=this.TypedArrayConstructor;s===void 0&&(s=4*r.BYTES_PER_ELEMENT);const n=t.byteLength===0?0:f;this.typedBuffer=y==null?new r(t,n):new r(t,n,(y-f)/r.BYTES_PER_ELEMENT),this.typedBufferStride=s/r.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,f=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+f*this.stride)}getVec(e,t){return e*=this.typedBufferStride,V(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,f){this.typedBuffer[e*this.typedBufferStride+t]=f}setValues(e,t,f,s,y){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=f,this.typedBuffer[e++]=s,this.typedBuffer[e]=y}copyFrom(e,t,f){const s=this.typedBuffer,y=t.typedBuffer;let r=e*this.typedBufferStride,n=f*t.typedBufferStride;s[r++]=y[n++],s[r++]=y[n++],s[r++]=y[n++],s[r]=y[n]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=4;class Z extends u{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="f32";class l extends i{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class o extends p{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class T extends h{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class B extends W{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class b extends W{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class E extends X{constructor(e,t=0,f,s){super(Float32Array,e,t,f,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f32";class m extends X{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class a extends u{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f64";class A extends i{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends p{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends h{constructor(e,t=0,f,s){super(Float64Array,e,t,f,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class g extends u{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u8";class L extends i{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends p{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class M extends h{constructor(e,t=0,f,s){super(Uint8Array,e,t,f,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class C extends u{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class N extends i{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u16";class P extends p{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class R extends h{constructor(e,t=0,f,s){super(Uint16Array,e,t,f,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u16";class Y extends u{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class F extends i{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends p{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class x extends h{constructor(e,t=0,f,s){super(Uint32Array,e,t,f,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u32";class U extends u{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class j extends i{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class $ extends p{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i8";class k extends h{constructor(e,t=0,f,s){super(Int8Array,e,t,f,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i8";class q extends u{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class z extends i{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class D extends p{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i16";class G extends h{constructor(e,t=0,f,s){super(Int16Array,e,t,f,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i16";class H extends u{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class J extends i{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(J,e,t)}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i32";class K extends p{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(K,e,t)}static fromTypedArray(e,t){return new K(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}K.ElementType="i32";class Q extends h{constructor(e,t=0,f,s){super(Int32Array,e,t,f,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Q,e,t)}static fromTypedArray(e,t){return new Q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Q.ElementType="i32";export{k as A,Z as B,q as C,z as D,D as E,G as F,H as G,J as H,K as I,Q as J,l as a,o as b,T as c,B as d,E as e,a as f,A as g,O as h,S as i,b as j,m as k,g as l,L as m,w as n,M as o,C as p,N as q,P as r,R as s,Y as t,F as u,I as v,x as w,U as x,j as y,$ as z};
