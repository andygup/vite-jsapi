function Ue(_,D){for(var g=0;g<D.length;g++){const l=D[g];if(typeof l!="string"&&!Array.isArray(l)){for(const v in l)if(v!=="default"&&!(v in _)){const t=Object.getOwnPropertyDescriptor(l,v);t&&Object.defineProperty(_,v,t.get?t:{enumerable:!0,get:()=>l[v]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var W={},Me={get exports(){return W},set exports(_){W=_}};(function(_,D){var g=(()=>{var l=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(l=l||__filename),function(t){t=t||{};var t=typeof t<"u"?t:{},q,N;t.ready=new Promise(function(e,n){q=e,N=n});var V=Object.assign({},t),X=typeof window=="object",R=typeof importScripts=="function",z=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",f="";function ae(e){return t.locateFile?t.locateFile(e,f):f+e}var B,P,T,F,x,O;z?(R?f=require("path").dirname(f)+"/":f=__dirname+"/",O=()=>{x||(F=require("fs"),x=require("path"))},B=function(n,r){return O(),n=x.normalize(n),F.readFileSync(n,r?void 0:"utf8")},T=e=>{var n=B(e,!0);return n.buffer||(n=new Uint8Array(n)),n},P=(e,n,r)=>{O(),e=x.normalize(e),F.readFile(e,function(i,u){i?r(i):n(u.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof Se))throw e}),process.on("unhandledRejection",function(e){throw e}),t.inspect=function(){return"[Emscripten Module object]"}):(X||R)&&(R?f=self.location.href:typeof document<"u"&&document.currentScript&&(f=document.currentScript.src),l&&(f=l),f.indexOf("blob:")!==0?f=f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):f="",B=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},R&&(T=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),P=(e,n,r)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{if(i.status==200||i.status==0&&i.response){n(i.response);return}r()},i.onerror=r,i.send(null)}),t.print||console.log.bind(console);var w=t.printErr||console.warn.bind(console);Object.assign(t,V),V=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit;var b;t.wasmBinary&&(b=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&I("no native wasm support detected");var S,G=!1,$=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function se(e,n,r){for(var i=n+r,u=n;e[u]&&!(u>=i);)++u;if(u-n>16&&e.buffer&&$)return $.decode(e.subarray(n,u));for(var c="";n<u;){var o=e[n++];if(!(o&128)){c+=String.fromCharCode(o);continue}var a=e[n++]&63;if((o&224)==192){c+=String.fromCharCode((o&31)<<6|a);continue}var p=e[n++]&63;if((o&240)==224?o=(o&15)<<12|a<<6|p:o=(o&7)<<18|a<<12|p<<6|e[n++]&63,o<65536)c+=String.fromCharCode(o);else{var y=o-65536;c+=String.fromCharCode(55296|y>>10,56320|y&1023)}}return c}function H(e,n){return e?se(U,e,n):""}var k,A,U,h,d;function K(e){k=e,t.HEAP8=A=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=h=new Int32Array(e),t.HEAPU8=U=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=d=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}t.INITIAL_MEMORY;var Y,J=[],Q=[],Z=[];function ue(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)le(t.preRun.shift());C(J)}function fe(){C(Q)}function ce(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)de(t.postRun.shift());C(Z)}function le(e){J.unshift(e)}function pe(e){Q.unshift(e)}function de(e){Z.unshift(e)}var m=0,E=null;function _e(e){m++,t.monitorRunDependencies&&t.monitorRunDependencies(m)}function me(e){if(m--,t.monitorRunDependencies&&t.monitorRunDependencies(m),m==0&&E){var n=E;E=null,n()}}function I(e){t.onAbort&&t.onAbort(e),e="Aborted("+e+")",w(e),G=!0,e+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(e);throw N(n),n}var he="data:application/octet-stream;base64,";function ee(e){return e.startsWith(he)}function te(e){return e.startsWith("file://")}var s;s="lerc-wasm.wasm",ee(s)||(s=ae(s));function ne(e){try{if(e==s&&b)return new Uint8Array(b);if(T)return T(e);throw"both async and sync fetching of the wasm failed"}catch(n){I(n)}}function ye(){if(!b&&(X||R)){if(typeof fetch=="function"&&!te(s))return fetch(s,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+s+"'";return e.arrayBuffer()}).catch(function(){return ne(s)});if(P)return new Promise(function(e,n){P(s,function(r){e(new Uint8Array(r))},n)})}return Promise.resolve().then(function(){return ne(s)})}function ge(){var e={a:xe};function n(o,a){var p=o.exports;t.asm=p,S=t.asm.g,K(S.buffer),Y=t.asm.m,pe(t.asm.h),me()}_e();function r(o){n(o.instance)}function i(o){return ye().then(function(a){return WebAssembly.instantiate(a,e)}).then(function(a){return a}).then(o,function(a){w("failed to asynchronously prepare wasm: "+a),I(a)})}function u(){return!b&&typeof WebAssembly.instantiateStreaming=="function"&&!ee(s)&&!te(s)&&!z&&typeof fetch=="function"?fetch(s,{credentials:"same-origin"}).then(function(o){var a=WebAssembly.instantiateStreaming(o,e);return a.then(r,function(p){return w("wasm streaming compile failed: "+p),w("falling back to ArrayBuffer instantiation"),i(r)})}):i(r)}if(t.instantiateWasm)try{var c=t.instantiateWasm(e,n);return c}catch(o){return w("Module.instantiateWasm callback failed with error: "+o),!1}return u().catch(N),{}}function C(e){for(;e.length>0;){var n=e.shift();if(typeof n=="function"){n(t);continue}var r=n.func;typeof r=="number"?n.arg===void 0?re(r)():re(r)(n.arg):r(n.arg===void 0?null:n.arg)}}var M=[];function re(e){var n=M[e];return n||(e>=M.length&&(M.length=e+1),M[e]=n=Y.get(e)),n}function ve(e,n,r,i){I("Assertion failed: "+H(e)+", at: "+[n?H(n):"unknown filename",r,i?H(i):"unknown function"])}function Re(e){return ie(e+24)+24}function we(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(n){d[this.ptr+4>>2]=n},this.get_type=function(){return d[this.ptr+4>>2]},this.set_destructor=function(n){d[this.ptr+8>>2]=n},this.get_destructor=function(){return d[this.ptr+8>>2]},this.set_refcount=function(n){h[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,A[this.ptr+12>>0]=n},this.get_caught=function(){return A[this.ptr+12>>0]!=0},this.set_rethrown=function(n){n=n?1:0,A[this.ptr+13>>0]=n},this.get_rethrown=function(){return A[this.ptr+13>>0]!=0},this.init=function(n,r){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=h[this.ptr>>2];h[this.ptr>>2]=n+1},this.release_ref=function(){var n=h[this.ptr>>2];return h[this.ptr>>2]=n-1,n===1},this.set_adjusted_ptr=function(n){d[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return d[this.ptr+16>>2]},this.get_exception_ptr=function(){var n=oe(this.get_type());if(n)return d[this.excPtr>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.excPtr}}function be(e,n,r){var i=new we(e);throw i.init(n,r),e}function Ae(){I("")}function Ee(e,n,r){U.copyWithin(e,n,n+r)}function Ie(){return 2147483648}function Pe(e){try{return S.grow(e-k.byteLength+65535>>>16),K(S.buffer),1}catch{}}function Te(e){var n=U.length;e=e>>>0;var r=Ie();if(e>r)return!1;let i=(p,y)=>p+(y-p%y)%y;for(var u=1;u<=4;u*=2){var c=n*(1+.2/u);c=Math.min(c,e+100663296);var o=Math.min(r,i(Math.max(e,c),65536)),a=Pe(o);if(a)return!0}return!1}var xe={a:ve,c:Re,b:be,d:Ae,f:Ee,e:Te};ge(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var ie=t._malloc=function(){return(ie=t._malloc=t.asm.n).apply(null,arguments)};t._free=function(){return(t._free=t.asm.o).apply(null,arguments)};var oe=t.___cxa_is_pointer_type=function(){return(oe=t.___cxa_is_pointer_type=t.asm.p).apply(null,arguments)},j;function Se(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}E=function e(){j||L(),j||(E=e)};function L(e){if(m>0||(ue(),m>0))return;function n(){j||(j=!0,t.calledRun=!0,!G&&(fe(),q(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),ce()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n()}if(t.run=L,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return L(),t.ready}})();_.exports=g})(Me);const je=W,We=Ue({__proto__:null,default:je},[W]);export{We as l};
