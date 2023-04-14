function ln(U,or){for(var M=0;M<or.length;M++){const k=or[M];if(typeof k!="string"&&!Array.isArray(k)){for(const h in k)if(h!=="default"&&!(h in U)){const t=Object.getOwnPropertyDescriptor(k,h);t&&Object.defineProperty(U,h,t.get?t:{enumerable:!0,get:()=>k[h]})}}}return Object.freeze(Object.defineProperty(U,Symbol.toStringTag,{value:"Module"}))}var ir={},_n={get exports(){return ir},set exports(U){ir=U}};(function(U,or){var M=function(){var k=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(h){h=h||{};var t=typeof h<"u"?h:{},gr,ar;t.ready=new Promise(function(r,e){gr=r,ar=e});var L={},S;for(S in t)t.hasOwnProperty(S)&&(L[S]=t[S]);var hr=typeof window=="object",Y=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var A="";function Br(r){return t.locateFile?t.locateFile(r,A):A+r}var fr;(hr||Y)&&(Y?A=self.location.href:typeof document<"u"&&document.currentScript&&(A=document.currentScript.src),k&&(A=k),A.indexOf("blob:")!==0?A=A.substr(0,A.replace(/[?#].*/,"").lastIndexOf("/")+1):A="",Y&&(fr=function(r){var e=new XMLHttpRequest;return e.open("GET",r,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var $r=t.print||console.log.bind(console),D=t.printErr||console.warn.bind(console);for(S in L)L.hasOwnProperty(S)&&(t[S]=L[S]);L=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit;var N;t.wasmBinary&&(N=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&X("no native wasm support detected");var J,mr=!1,yr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function br(r,e,n){for(var i=e+n,o=e;r[o]&&!(o>=i);)++o;if(o-e>16&&r.subarray&&yr)return yr.decode(r.subarray(e,o));for(var u="";e<o;){var f=r[e++];if(!(f&128)){u+=String.fromCharCode(f);continue}var a=r[e++]&63;if((f&224)==192){u+=String.fromCharCode((f&31)<<6|a);continue}var s=r[e++]&63;if((f&240)==224?f=(f&15)<<12|a<<6|s:f=(f&7)<<18|a<<12|s<<6|r[e++]&63,f<65536)u+=String.fromCharCode(f);else{var c=f-65536;u+=String.fromCharCode(55296|c>>10,56320|c&1023)}}return u}function wr(r,e){return r?br(v,r,e):""}function qr(r,e,n,i){if(!(i>0))return 0;for(var o=n,u=n+i-1,f=0;f<r.length;++f){var a=r.charCodeAt(f);if(a>=55296&&a<=57343){var s=r.charCodeAt(++f);a=65536+((a&1023)<<10)|s&1023}if(a<=127){if(n>=u)break;e[n++]=a}else if(a<=2047){if(n+1>=u)break;e[n++]=192|a>>6,e[n++]=128|a&63}else if(a<=65535){if(n+2>=u)break;e[n++]=224|a>>12,e[n++]=128|a>>6&63,e[n++]=128|a&63}else{if(n+3>=u)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63,e[n++]=128|a>>6&63,e[n++]=128|a&63}}return e[n]=0,n-o}function Yr(r,e,n){return qr(r,v,e,n)}function Jr(r){for(var e=0,n=0;n<r.length;++n){var i=r.charCodeAt(n);i>=55296&&i<=57343&&(i=65536+((i&1023)<<10)|r.charCodeAt(++n)&1023),i<=127?++e:i<=2047?e+=2:i<=65535?e+=3:e+=4}return e}var Ar=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Kr(r,e){for(var n=r,i=n>>1,o=i+e/2;!(i>=o)&&K[i];)++i;if(n=i<<1,n-r>32&&Ar)return Ar.decode(v.subarray(r,n));for(var u="",f=0;!(f>=e/2);++f){var a=H[r+f*2>>1];if(a==0)break;u+=String.fromCharCode(a)}return u}function Xr(r,e,n){if(n===void 0&&(n=2147483647),n<2)return 0;n-=2;for(var i=e,o=n<r.length*2?n/2:r.length,u=0;u<o;++u){var f=r.charCodeAt(u);H[e>>1]=f,e+=2}return H[e>>1]=0,e-i}function Zr(r){return r.length*2}function zr(r,e){for(var n=0,i="";!(n>=e/4);){var o=d[r+n*4>>2];if(o==0)break;if(++n,o>=65536){var u=o-65536;i+=String.fromCharCode(55296|u>>10,56320|u&1023)}else i+=String.fromCharCode(o)}return i}function Gr(r,e,n){if(n===void 0&&(n=2147483647),n<4)return 0;for(var i=e,o=i+n-4,u=0;u<r.length;++u){var f=r.charCodeAt(u);if(f>=55296&&f<=57343){var a=r.charCodeAt(++u);f=65536+((f&1023)<<10)|a&1023}if(d[e>>2]=f,e+=4,e+4>o)break}return d[e>>2]=0,e-i}function Qr(r){for(var e=0,n=0;n<r.length;++n){var i=r.charCodeAt(n);i>=55296&&i<=57343&&++n,e+=4}return e}function re(r,e){return r%e>0&&(r+=e-r%e),r}var ur,W,v,H,K,d,C,Tr,Cr;function Er(r){ur=r,t.HEAP8=W=new Int8Array(r),t.HEAP16=H=new Int16Array(r),t.HEAP32=d=new Int32Array(r),t.HEAPU8=v=new Uint8Array(r),t.HEAPU16=K=new Uint16Array(r),t.HEAPU32=C=new Uint32Array(r),t.HEAPF32=Tr=new Float32Array(r),t.HEAPF64=Cr=new Float64Array(r)}t.INITIAL_MEMORY;var Fr,Pr=[],Rr=[],kr=[];function ee(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)ie(t.preRun.shift());sr(Pr)}function ne(){sr(Rr)}function te(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ae(t.postRun.shift());sr(kr)}function ie(r){Pr.unshift(r)}function oe(r){Rr.unshift(r)}function ae(r){kr.unshift(r)}var O=0,x=null;function fe(r){O++,t.monitorRunDependencies&&t.monitorRunDependencies(O)}function ue(r){if(O--,t.monitorRunDependencies&&t.monitorRunDependencies(O),O==0&&x){var e=x;x=null,e()}}t.preloadedImages={},t.preloadedAudios={};function X(r){t.onAbort&&t.onAbort(r),r="Aborted("+r+")",D(r),mr=!0,r+=". Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(r);throw ar(e),e}var se="data:application/octet-stream;base64,";function Sr(r){return r.startsWith(se)}var m;m="i3s.wasm",Sr(m)||(m=Br(m));function Ur(r){try{if(r==m&&N)return new Uint8Array(N);if(fr)return fr(r);throw"both async and sync fetching of the wasm failed"}catch(e){X(e)}}function ce(){return!N&&(hr||Y)&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(function(r){if(!r.ok)throw"failed to load wasm binary file at '"+m+"'";return r.arrayBuffer()}).catch(function(){return Ur(m)}):Promise.resolve().then(function(){return Ur(m)})}function le(){var r={env:Nr,wasi_snapshot_preview1:Nr};function e(f,a){var s=f.exports;t.asm=s,J=t.asm.memory,Er(J.buffer),Fr=t.asm.__indirect_function_table,oe(t.asm.__wasm_call_ctors),ue()}fe();function n(f){e(f.instance)}function i(f){return ce().then(function(a){return WebAssembly.instantiate(a,r)}).then(function(a){return a}).then(f,function(a){D("failed to asynchronously prepare wasm: "+a),X(a)})}function o(){return!N&&typeof WebAssembly.instantiateStreaming=="function"&&!Sr(m)&&typeof fetch=="function"?fetch(m,{credentials:"same-origin"}).then(function(f){var a=WebAssembly.instantiateStreaming(f,r);return a.then(n,function(s){return D("wasm streaming compile failed: "+s),D("falling back to ArrayBuffer instantiation"),i(n)})}):i(n)}if(t.instantiateWasm)try{var u=t.instantiateWasm(r,e);return u}catch(f){return D("Module.instantiateWasm callback failed with error: "+f),!1}return o().catch(ar),{}}function sr(r){for(;r.length>0;){var e=r.shift();if(typeof e=="function"){e(t);continue}var n=e.func;typeof n=="number"?e.arg===void 0?B(n)():B(n)(e.arg):n(e.arg===void 0?null:e.arg)}}var Z=[];function B(r){var e=Z[r];return e||(r>=Z.length&&(Z.length=r+1),Z[r]=e=Fr.get(r)),e}function _e(r,e){B(r)(e)}function de(r){return nr(r+16)+16}function vn(r,e){}function ve(r,e){return void 0}function pe(r){this.excPtr=r,this.ptr=r-16,this.set_type=function(e){d[this.ptr+4>>2]=e},this.get_type=function(){return d[this.ptr+4>>2]},this.set_destructor=function(e){d[this.ptr+8>>2]=e},this.get_destructor=function(){return d[this.ptr+8>>2]},this.set_refcount=function(e){d[this.ptr>>2]=e},this.set_caught=function(e){e=e?1:0,W[this.ptr+12>>0]=e},this.get_caught=function(){return W[this.ptr+12>>0]!=0},this.set_rethrown=function(e){e=e?1:0,W[this.ptr+13>>0]=e},this.get_rethrown=function(){return W[this.ptr+13>>0]!=0},this.init=function(e,n){this.set_type(e),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var e=d[this.ptr>>2];d[this.ptr>>2]=e+1},this.release_ref=function(){var e=d[this.ptr>>2];return d[this.ptr>>2]=e-1,e===1}}function ge(r,e,n){var i=new pe(r);throw i.init(e,n),r}var z={};function Wr(r){for(;r.length;){var e=r.pop(),n=r.pop();n(e)}}function G(r){return this.fromWireType(C[r>>2])}var I={},j={},Q={},he=48,me=57;function ye(r){if(r===void 0)return"_unknown";r=r.replace(/[^a-zA-Z0-9_]/g,"$");var e=r.charCodeAt(0);return e>=he&&e<=me?"_"+r:r}function be(r,e){return r=ye(r),function(){return e.apply(this,arguments)}}function cr(r,e){var n=be(e,function(i){this.name=e,this.message=i;var o=new Error(i).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var Or=void 0;function jr(r){throw new Or(r)}function Dr(r,e,n){r.forEach(function(a){Q[a]=e});function i(a){var s=n(a);s.length!==r.length&&jr("Mismatched type converter count");for(var c=0;c<r.length;++c)E(r[c],s[c])}var o=new Array(e.length),u=[],f=0;e.forEach(function(a,s){j.hasOwnProperty(a)?o[s]=j[a]:(u.push(a),I.hasOwnProperty(a)||(I[a]=[]),I[a].push(function(){o[s]=j[a],++f,f===u.length&&i(o)}))}),u.length===0&&i(o)}function we(r){var e=z[r];delete z[r];var n=e.rawConstructor,i=e.rawDestructor,o=e.fields,u=o.map(function(f){return f.getterReturnType}).concat(o.map(function(f){return f.setterArgumentType}));Dr([r],u,function(f){var a={};return o.forEach(function(s,c){var l=s.fieldName,_=f[c],b=s.getter,w=s.getterContext,P=f[c+o.length],T=s.setter,V=s.setterContext;a[l]={read:function(q){return _.fromWireType(b(w,q))},write:function(q,pr){var R=[];T(V,q,P.toWireType(R,pr)),Wr(R)}}}),[{name:e.name,fromWireType:function(s){var c={};for(var l in a)c[l]=a[l].read(s);return i(s),c},toWireType:function(s,c){for(var l in a)if(!(l in c))throw new TypeError('Missing field:  "'+l+'"');var _=n();for(l in a)a[l].write(_,c[l]);return s!==null&&s.push(i,_),_},argPackAdvance:8,readValueFromPointer:G,destructorFunction:i}]})}function Ae(r,e,n,i,o){}function lr(r){switch(r){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+r)}}function Te(){for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);Hr=r}var Hr=void 0;function p(r){for(var e="",n=r;v[n];)e+=Hr[v[n++]];return e}var Ir=void 0;function g(r){throw new Ir(r)}function E(r,e,n){if(n=n||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var i=e.name;if(r||g('type "'+i+'" must have a positive integer typeid pointer'),j.hasOwnProperty(r)){if(n.ignoreDuplicateRegistrations)return;g("Cannot register type '"+i+"' twice")}if(j[r]=e,delete Q[r],I.hasOwnProperty(r)){var o=I[r];delete I[r],o.forEach(function(u){u()})}}function Ce(r,e,n,i,o){var u=lr(n);e=p(e),E(r,{name:e,fromWireType:function(f){return!!f},toWireType:function(f,a){return a?i:o},argPackAdvance:8,readValueFromPointer:function(f){var a;if(n===1)a=W;else if(n===2)a=H;else if(n===4)a=d;else throw new TypeError("Unknown boolean type size: "+e);return this.fromWireType(a[f>>u])},destructorFunction:null})}var _r=[],y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Vr(r){r>4&&--y[r].refcount===0&&(y[r]=void 0,_r.push(r))}function Ee(){for(var r=0,e=5;e<y.length;++e)y[e]!==void 0&&++r;return r}function Fe(){for(var r=5;r<y.length;++r)if(y[r]!==void 0)return y[r];return null}function Pe(){t.count_emval_handles=Ee,t.get_first_emval=Fe}var rr={toValue:function(r){return r||g("Cannot use deleted val. handle = "+r),y[r].value},toHandle:function(r){switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var e=_r.length?_r.pop():y.length;return y[e]={refcount:1,value:r},e}}}};function Re(r,e){e=p(e),E(r,{name:e,fromWireType:function(n){var i=rr.toValue(n);return Vr(n),i},toWireType:function(n,i){return rr.toHandle(i)},argPackAdvance:8,readValueFromPointer:G,destructorFunction:null})}function dr(r){if(r===null)return"null";var e=typeof r;return e==="object"||e==="array"||e==="function"?r.toString():""+r}function ke(r,e){switch(e){case 2:return function(n){return this.fromWireType(Tr[n>>2])};case 3:return function(n){return this.fromWireType(Cr[n>>3])};default:throw new TypeError("Unknown float type: "+r)}}function Se(r,e,n){var i=lr(n);e=p(e),E(r,{name:e,fromWireType:function(o){return o},toWireType:function(o,u){if(typeof u!="number"&&typeof u!="boolean")throw new TypeError('Cannot convert "'+dr(u)+'" to '+this.name);return u},argPackAdvance:8,readValueFromPointer:ke(e,i),destructorFunction:null})}function Ue(r,e,n,i,o){var u=e.length;u<2&&g("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var f=e[1]!==null&&n!==null,a=!1,s=1;s<e.length;++s)if(e[s]!==null&&e[s].destructorFunction===void 0){a=!0;break}var c=e[0].name!=="void",l=u-2,_=new Array(l),b=[],w=[];return function(){arguments.length!==l&&g("function "+r+" called with "+arguments.length+" arguments, expected "+l+" args!"),w.length=0;var P;b.length=f?2:1,b[0]=o,f&&(P=e[1].toWireType(w,this),b[1]=P);for(var T=0;T<l;++T)_[T]=e[T+2].toWireType(w,arguments[T]),b.push(_[T]);var V=i.apply(null,b);function q(pr){if(a)Wr(w);else for(var R=f?1:2;R<e.length;R++){var cn=R===1?P:_[R-2];e[R].destructorFunction!==null&&e[R].destructorFunction(cn)}if(c)return e[0].fromWireType(pr)}return q(V)}}function We(r,e,n){if(r[e].overloadTable===void 0){var i=r[e];r[e]=function(){return r[e].overloadTable.hasOwnProperty(arguments.length)||g("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[e].overloadTable+")!"),r[e].overloadTable[arguments.length].apply(this,arguments)},r[e].overloadTable=[],r[e].overloadTable[i.argCount]=i}}function Oe(r,e,n){t.hasOwnProperty(r)?((n===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[n]!==void 0)&&g("Cannot register public name '"+r+"' twice"),We(t,r,r),t.hasOwnProperty(n)&&g("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),t[r].overloadTable[n]=e):(t[r]=e,n!==void 0&&(t[r].numArguments=n))}function je(r,e){for(var n=[],i=0;i<r;i++)n.push(d[(e>>2)+i]);return n}function De(r,e,n){t.hasOwnProperty(r)||jr("Replacing nonexistant public symbol"),t[r].overloadTable!==void 0&&n!==void 0?t[r].overloadTable[n]=e:(t[r]=e,t[r].argCount=n)}function He(r,e,n){var i=t["dynCall_"+r];return n&&n.length?i.apply(null,[e].concat(n)):i.call(null,e)}function Ie(r,e,n){return r.includes("j")?He(r,e,n):B(e).apply(null,n)}function Ve(r,e){var n=[];return function(){n.length=arguments.length;for(var i=0;i<arguments.length;i++)n[i]=arguments[i];return Ie(r,e,n)}}function $(r,e){r=p(r);function n(){return r.includes("j")?Ve(r,e):B(e)}var i=n();return typeof i!="function"&&g("unknown function pointer with signature "+r+": "+e),i}var Mr=void 0;function Lr(r){var e=xr(r),n=p(e);return F(e),n}function Me(r,e){var n=[],i={};function o(u){if(!i[u]&&!j[u]){if(Q[u]){Q[u].forEach(o);return}n.push(u),i[u]=!0}}throw e.forEach(o),new Mr(r+": "+n.map(Lr).join([", "]))}function Le(r,e,n,i,o,u){var f=je(e,n);r=p(r),o=$(i,o),Oe(r,function(){Me("Cannot call "+r+" due to unbound types",f)},e-1),Dr([],f,function(a){var s=[a[0],null].concat(a.slice(1));return De(r,Ue(r,s,null,o,u),e-1),[]})}function Ne(r,e,n){switch(e){case 0:return n?function(o){return W[o]}:function(o){return v[o]};case 1:return n?function(o){return H[o>>1]}:function(o){return K[o>>1]};case 2:return n?function(o){return d[o>>2]}:function(o){return C[o>>2]};default:throw new TypeError("Unknown integer type: "+r)}}function xe(r,e,n,i,o){e=p(e),o===-1&&(o=4294967295);var u=lr(n),f=function(c){return c};if(i===0){var a=32-8*n;f=function(c){return c<<a>>>a}}var s=e.includes("unsigned");E(r,{name:e,fromWireType:f,toWireType:function(c,l){if(typeof l!="number"&&typeof l!="boolean")throw new TypeError('Cannot convert "'+dr(l)+'" to '+this.name);if(l<i||l>o)throw new TypeError('Passing a number "'+dr(l)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+i+", "+o+"]!");return s?l>>>0:l|0},argPackAdvance:8,readValueFromPointer:Ne(e,u,i!==0),destructorFunction:null})}function Be(r,e,n){var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],o=i[e];function u(f){f=f>>2;var a=C,s=a[f],c=a[f+1];return new o(ur,c,s)}n=p(n),E(r,{name:n,fromWireType:u,argPackAdvance:8,readValueFromPointer:u},{ignoreDuplicateRegistrations:!0})}function $e(r,e){e=p(e);var n=e==="std::string";E(r,{name:e,fromWireType:function(i){var o=C[i>>2],u;if(n)for(var f=i+4,a=0;a<=o;++a){var s=i+4+a;if(a==o||v[s]==0){var c=s-f,l=wr(f,c);u===void 0?u=l:(u+=String.fromCharCode(0),u+=l),f=s+1}}else{for(var _=new Array(o),a=0;a<o;++a)_[a]=String.fromCharCode(v[i+4+a]);u=_.join("")}return F(i),u},toWireType:function(i,o){o instanceof ArrayBuffer&&(o=new Uint8Array(o));var u,f=typeof o=="string";f||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||g("Cannot pass non-string to std::string"),n&&f?u=function(){return Jr(o)}:u=function(){return o.length};var a=u(),s=nr(4+a+1);if(C[s>>2]=a,n&&f)Yr(o,s+4,a+1);else if(f)for(var c=0;c<a;++c){var l=o.charCodeAt(c);l>255&&(F(s),g("String has UTF-16 code units that do not fit in 8 bits")),v[s+4+c]=l}else for(var c=0;c<a;++c)v[s+4+c]=o[c];return i!==null&&i.push(F,s),s},argPackAdvance:8,readValueFromPointer:G,destructorFunction:function(i){F(i)}})}function qe(r,e,n){n=p(n);var i,o,u,f,a;e===2?(i=Kr,o=Xr,f=Zr,u=function(){return K},a=1):e===4&&(i=zr,o=Gr,f=Qr,u=function(){return C},a=2),E(r,{name:n,fromWireType:function(s){for(var c=C[s>>2],l=u(),_,b=s+4,w=0;w<=c;++w){var P=s+4+w*e;if(w==c||l[P>>a]==0){var T=P-b,V=i(b,T);_===void 0?_=V:(_+=String.fromCharCode(0),_+=V),b=P+e}}return F(s),_},toWireType:function(s,c){typeof c!="string"&&g("Cannot pass non-string to C++ string type "+n);var l=f(c),_=nr(4+l+e);return C[_>>2]=l>>a,o(c,_+4,l+e),s!==null&&s.push(F,_),_},argPackAdvance:8,readValueFromPointer:G,destructorFunction:function(s){F(s)}})}function Ye(r,e,n,i,o,u){z[r]={name:p(e),rawConstructor:$(n,i),rawDestructor:$(o,u),fields:[]}}function Je(r,e,n,i,o,u,f,a,s,c){z[r].fields.push({fieldName:p(e),getterReturnType:n,getter:$(i,o),getterContext:u,setterArgumentType:f,setter:$(a,s),setterContext:c})}function Ke(r,e){e=p(e),E(r,{isVoid:!0,name:e,argPackAdvance:0,fromWireType:function(){},toWireType:function(n,i){}})}function Xe(r){r>4&&(y[r].refcount+=1)}var Ze={};function ze(r){var e=Ze[r];return e===void 0?p(r):e}function Ge(r){return rr.toHandle(ze(r))}function Qe(r,e){var n=j[r];return n===void 0&&g(e+" has unknown type "+Lr(r)),n}function rn(r,e){r=Qe(r,"_emval_take_value");var n=r.readValueFromPointer(e);return rr.toHandle(n)}function en(){X("")}function nn(r,e,n){v.copyWithin(r,e,e+n)}function tn(r){try{return J.grow(r-ur.byteLength+65535>>>16),Er(J.buffer),1}catch{}}function on(r){var e=v.length;r=r>>>0;var n=2147483648;if(r>n)return!1;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);o=Math.min(o,r+100663296);var u=Math.min(n,re(Math.max(r,o),65536)),f=tn(u);if(f)return!0}return!1}var er={mappings:{},buffers:[null,[],[]],printChar:function(r,e){var n=er.buffers[r];e===0||e===10?((r===1?$r:D)(br(n,0)),n.length=0):n.push(e)},varargs:void 0,get:function(){er.varargs+=4;var r=d[er.varargs-4>>2];return r},getStr:function(r){var e=wr(r);return e},get64:function(r,e){return r}};function an(r){return 0}function fn(r,e,n,i,o){}function un(r,e,n,i){for(var o=0,u=0;u<n;u++){var f=d[e>>2],a=d[e+4>>2];e+=8;for(var s=0;s<a;s++)er.printChar(r,v[f+s]);o+=a}return d[i>>2]=o,0}function sn(r){}Or=t.InternalError=cr(Error,"InternalError"),Te(),Ir=t.BindingError=cr(Error,"BindingError"),Pe(),Mr=t.UnboundTypeError=cr(Error,"UnboundTypeError");var Nr={__call_sighandler:_e,__cxa_allocate_exception:de,__cxa_atexit:ve,__cxa_throw:ge,_embind_finalize_value_object:we,_embind_register_bigint:Ae,_embind_register_bool:Ce,_embind_register_emval:Re,_embind_register_float:Se,_embind_register_function:Le,_embind_register_integer:xe,_embind_register_memory_view:Be,_embind_register_std_string:$e,_embind_register_std_wstring:qe,_embind_register_value_object:Ye,_embind_register_value_object_field:Je,_embind_register_void:Ke,_emval_decref:Vr,_emval_incref:Xe,_emval_new_cstring:Ge,_emval_take_value:rn,abort:en,emscripten_memcpy_big:nn,emscripten_resize_heap:on,fd_close:an,fd_seek:fn,fd_write:un,setTempRet0:sn};le(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.__wasm_call_ctors).apply(null,arguments)};var nr=t._malloc=function(){return(nr=t._malloc=t.asm.malloc).apply(null,arguments)},F=t._free=function(){return(F=t._free=t.asm.free).apply(null,arguments)},xr=t.___getTypeName=function(){return(xr=t.___getTypeName=t.asm.__getTypeName).apply(null,arguments)};t.___embind_register_native_and_builtin_types=function(){return(t.___embind_register_native_and_builtin_types=t.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},t.___errno_location=function(){return(t.___errno_location=t.asm.__errno_location).apply(null,arguments)},t.stackSave=function(){return(t.stackSave=t.asm.stackSave).apply(null,arguments)},t.stackRestore=function(){return(t.stackRestore=t.asm.stackRestore).apply(null,arguments)},t.stackAlloc=function(){return(t.stackAlloc=t.asm.stackAlloc).apply(null,arguments)},t.dynCall_vij=function(){return(t.dynCall_vij=t.asm.dynCall_vij).apply(null,arguments)},t.dynCall_jiji=function(){return(t.dynCall_jiji=t.asm.dynCall_jiji).apply(null,arguments)};var tr;x=function r(){tr||vr(),tr||(x=r)};function vr(r){if(O>0||(ee(),O>0))return;function e(){tr||(tr=!0,t.calledRun=!0,!mr&&(ne(),gr(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),te()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),e()},1)):e()}if(t.run=vr,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return vr(),h.ready}}();U.exports=M})(_n);const dn=ir,pn=ln({__proto__:null,default:dn},[ir]);export{pn as i};
