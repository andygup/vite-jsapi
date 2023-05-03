"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6710,5732],{5732:(n,r,t)=>{t.d(r,{c:()=>e,g:()=>o});var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}},26710:(n,r,t)=>{t.r(r),t.d(r,{i:()=>f});var e,o,i,a=t(5732),u={exports:{}};e=u,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(n){var r,t,e=void 0!==(n=n||{})?n:{};e.ready=new Promise((function(n,e){r=n,t=e}));var i,a={};for(i in e)e.hasOwnProperty(i)&&(a[i]=e[i]);var u="object"==typeof window,c="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var f,s="";(u||c)&&(c?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),o&&(s=o),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",c&&(f=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var l,p,d=e.print||console.log.bind(console),v=e.printErr||console.warn.bind(console);for(i in a)a.hasOwnProperty(i)&&(e[i]=a[i]);a=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(l=e.wasmBinary),e.noExitRuntime,"object"!=typeof WebAssembly&&L("no native wasm support detected");var h=!1,m="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function y(n,r,t){for(var e=r+t,o=r;n[o]&&!(o>=e);)++o;if(o-r>16&&n.subarray&&m)return m.decode(n.subarray(r,o));for(var i="";r<o;){var a=n[r++];if(128&a){var u=63&n[r++];if(192!=(224&a)){var c=63&n[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[r++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function g(n,r){return n?y(b,n,r):""}var _,w,b,A,T,C,P,k,E,R,W="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function S(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&T[e];)++e;if((t=e<<1)-n>32&&W)return W.decode(b.subarray(n,t));for(var i="",a=0;!(a>=r/2);++a){var u=A[n+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function F(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,i=0;i<o;++i){var a=n.charCodeAt(i);A[r>>1]=a,r+=2}return A[r>>1]=0,r-e}function j(n){return 2*n.length}function x(n,r){for(var t=0,e="";!(t>=r/4);){var o=C[n+4*t>>2];if(0==o)break;if(++t,o>=65536){var i=o-65536;e+=String.fromCharCode(55296|i>>10,56320|1023&i)}else e+=String.fromCharCode(o)}return e}function I(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),C[r>>2]=a,(r+=4)+4>o)break}return C[r>>2]=0,r-e}function O(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function U(n,r){return n%r>0&&(n+=r-n%r),n}function D(n){_=n,e.HEAP8=w=new Int8Array(n),e.HEAP16=A=new Int16Array(n),e.HEAP32=C=new Int32Array(n),e.HEAPU8=b=new Uint8Array(n),e.HEAPU16=T=new Uint16Array(n),e.HEAPU32=P=new Uint32Array(n),e.HEAPF32=k=new Float32Array(n),e.HEAPF64=E=new Float64Array(n)}e.INITIAL_MEMORY;var M=[],V=[],z=[];function H(n){M.unshift(n)}function B(n){z.unshift(n)}var N=0,q=null;function L(n){e.onAbort&&e.onAbort(n),v(n="Aborted("+n+")"),h=!0,n+=". Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(n);throw t(r),r}e.preloadedImages={},e.preloadedAudios={};var G;function J(n){return n.startsWith("data:application/octet-stream;base64,")}function X(n){try{if(n==G&&l)return new Uint8Array(l);if(f)return f(n);throw"both async and sync fetching of the wasm failed"}catch(n){L(n)}}function Y(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?$(t)():$(t)(r.arg):t(void 0===r.arg?null:r.arg)}else r(e)}}J(G="i3s.wasm")||(G=function(n){return e.locateFile?e.locateFile(n,s):s+n}(G));var Z=[];function $(n){var r=Z[n];return r||(n>=Z.length&&(Z.length=n+1),Z[n]=r=R.get(n)),r}function K(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(n){C[this.ptr+4>>2]=n},this.get_type=function(){return C[this.ptr+4>>2]},this.set_destructor=function(n){C[this.ptr+8>>2]=n},this.get_destructor=function(){return C[this.ptr+8>>2]},this.set_refcount=function(n){C[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,w[this.ptr+12>>0]=n},this.get_caught=function(){return 0!=w[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,w[this.ptr+13>>0]=n},this.get_rethrown=function(){return 0!=w[this.ptr+13>>0]},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=C[this.ptr>>2];C[this.ptr>>2]=n+1},this.release_ref=function(){var n=C[this.ptr>>2];return C[this.ptr>>2]=n-1,1===n}}var Q={};function nn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function rn(n){return this.fromWireType(P[n>>2])}var tn={},en={},on={},an=48,un=57;function cn(n,r){var t=function(n,r){return n=function(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=an&&r<=un?"_"+n:n}(n),function(){return r.apply(this,arguments)}}(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var fn=void 0;function sn(n){throw new fn(n)}function ln(n,r,t){function e(r){var e=t(r);e.length!==n.length&&sn("Mismatched type converter count");for(var o=0;o<n.length;++o)yn(n[o],e[o])}n.forEach((function(n){on[n]=r}));var o=new Array(r.length),i=[],a=0;r.forEach((function(n,r){en.hasOwnProperty(n)?o[r]=en[n]:(i.push(n),tn.hasOwnProperty(n)||(tn[n]=[]),tn[n].push((function(){o[r]=en[n],++a===i.length&&e(o)})))})),0===i.length&&e(o)}function pn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var dn=void 0;function vn(n){for(var r="",t=n;b[t];)r+=dn[b[t++]];return r}var hn=void 0;function mn(n){throw new hn(n)}function yn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||mn('type "'+e+'" must have a positive integer typeid pointer'),en.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;mn("Cannot register type '"+e+"' twice")}if(en[n]=r,delete on[n],tn.hasOwnProperty(n)){var o=tn[n];delete tn[n],o.forEach((function(n){n()}))}}var gn=[],_n=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function wn(n){n>4&&0==--_n[n].refcount&&(_n[n]=void 0,gn.push(n))}var bn=function(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=gn.length?gn.pop():_n.length;return _n[r]={refcount:1,value:n},r}};function An(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Tn(n,r){switch(r){case 2:return function(n){return this.fromWireType(k[n>>2])};case 3:return function(n){return this.fromWireType(E[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Cn(n,r,t){e.hasOwnProperty(n)?((void 0===t||void 0!==e[n].overloadTable&&void 0!==e[n].overloadTable[t])&&mn("Cannot register public name '"+n+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||mn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(e,n,n),e.hasOwnProperty(t)&&mn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),e[n].overloadTable[t]=r):(e[n]=r,void 0!==t&&(e[n].numArguments=t))}function Pn(n,r,t){e.hasOwnProperty(n)||sn("Replacing nonexistant public symbol"),void 0!==e[n].overloadTable&&void 0!==t?e[n].overloadTable[t]=r:(e[n]=r,e[n].argCount=t)}function kn(n,r){var t=(n=vn(n)).includes("j")?function(n,r){var t=[];return function(){t.length=arguments.length;for(var o=0;o<arguments.length;o++)t[o]=arguments[o];return function(n,r,t){return n.includes("j")?function(n,r,t){var o=e["dynCall_"+n];return t&&t.length?o.apply(null,[r].concat(t)):o.call(null,r)}(n,r,t):$(r).apply(null,t)}(n,r,t)}}(n,r):$(r);return"function"!=typeof t&&mn("unknown function pointer with signature "+n+": "+r),t}var En=void 0;function Rn(n){var r=Dn(n),t=vn(r);return Un(r),t}function Wn(n,r,t){switch(r){case 0:return t?function(n){return w[n]}:function(n){return b[n]};case 1:return t?function(n){return A[n>>1]}:function(n){return T[n>>1]};case 2:return t?function(n){return C[n>>2]}:function(n){return P[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Sn={};function Fn(n){try{return p.grow(n-_.byteLength+65535>>>16),D(p.buffer),1}catch(n){}}var jn={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=jn.buffers[n];0===r||10===r?((1===n?d:v)(y(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return jn.varargs+=4,C[jn.varargs-4>>2]},getStr:function(n){return g(n)},get64:function(n,r){return n}};fn=e.InternalError=cn(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);dn=n}(),hn=e.BindingError=cn(Error,"BindingError"),e.count_emval_handles=function(){for(var n=0,r=5;r<_n.length;++r)void 0!==_n[r]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<_n.length;++n)if(void 0!==_n[n])return _n[n];return null},En=e.UnboundTypeError=cn(Error,"UnboundTypeError");var xn={__call_sighandler:function(n,r){$(n)(r)},__cxa_allocate_exception:function(n){return On(n+16)+16},__cxa_atexit:function(n,r){},__cxa_throw:function(n,r,t){throw new K(n).init(r,t),n},_embind_finalize_value_object:function(n){var r=Q[n];delete Q[n];var t=r.rawConstructor,e=r.rawDestructor,o=r.fields;ln([n],o.map((function(n){return n.getterReturnType})).concat(o.map((function(n){return n.setterArgumentType}))),(function(n){var i={};return o.forEach((function(r,t){var e=r.fieldName,a=n[t],u=r.getter,c=r.getterContext,f=n[t+o.length],s=r.setter,l=r.setterContext;i[e]={read:function(n){return a.fromWireType(u(c,n))},write:function(n,r){var t=[];s(l,n,f.toWireType(t,r)),nn(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in i)r[t]=i[t].read(n);return e(n),r},toWireType:function(n,r){for(var o in i)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var a=t();for(o in i)i[o].write(a,r[o]);return null!==n&&n.push(e,a),a},argPackAdvance:8,readValueFromPointer:rn,destructorFunction:e}]}))},_embind_register_bigint:function(n,r,t,e,o){},_embind_register_bool:function(n,r,t,e,o){var i=pn(t);yn(n,{name:r=vn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:o},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=w;else if(2===t)e=A;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=C}return this.fromWireType(e[n>>i])},destructorFunction:null})},_embind_register_emval:function(n,r){yn(n,{name:r=vn(r),fromWireType:function(n){var r=function(n){return n||mn("Cannot use deleted val. handle = "+n),_n[n].value}(n);return wn(n),r},toWireType:function(n,r){return bn(r)},argPackAdvance:8,readValueFromPointer:rn,destructorFunction:null})},_embind_register_float:function(n,r,t){var e=pn(t);yn(n,{name:r=vn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+An(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Tn(r,e),destructorFunction:null})},_embind_register_function:function(n,r,t,e,o,i){var a=function(n,r){for(var t=[],e=0;e<n;e++)t.push(C[(r>>2)+e]);return t}(r,t);n=vn(n),o=kn(e,o),Cn(n,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||en[r]||(on[r]?on[r].forEach(n):(t.push(r),e[r]=!0))})),new En(n+": "+t.map(Rn).join([", "]))}("Cannot call "+n+" due to unbound types",a)}),r-1),ln([],a,(function(t){var e=[t[0],null].concat(t.slice(1));return Pn(n,function(n,r,t,e,o){var i=r.length;i<2&&mn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&!1,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s=i-2,l=new Array(s),p=[],d=[];return function(){var t;arguments.length!==s&&mn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),d.length=0,p.length=a?2:1,p[0]=o,a&&(t=r[1].toWireType(d,this),p[1]=t);for(var i=0;i<s;++i)l[i]=r[i+2].toWireType(d,arguments[i]),p.push(l[i]);return function(n){if(u)nn(d);else for(var e=a?1:2;e<r.length;e++){var o=1===e?t:l[e-2];null!==r[e].destructorFunction&&r[e].destructorFunction(o)}if(f)return r[0].fromWireType(n)}(e.apply(null,p))}}(n,e,0,o,i),r-1),[]}))},_embind_register_integer:function(n,r,t,e,o){r=vn(r),-1===o&&(o=4294967295);var i=pn(t),a=function(n){return n};if(0===e){var u=32-8*t;a=function(n){return n<<u>>>u}}var c=r.includes("unsigned");yn(n,{name:r,fromWireType:a,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+An(t)+'" to '+this.name);if(t<e||t>o)throw new TypeError('Passing a number "'+An(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+o+"]!");return c?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:Wn(r,i,0!==e),destructorFunction:null})},_embind_register_memory_view:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=P,t=r[n>>=2],o=r[n+1];return new e(_,o,t)}yn(n,{name:t=vn(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(n,r){var t="std::string"===(r=vn(r));yn(n,{name:r,fromWireType:function(n){var r,e=P[n>>2];if(t)for(var o=n+4,i=0;i<=e;++i){var a=n+4+i;if(i==e||0==b[a]){var u=g(o,a-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=a+1}}else{var c=new Array(e);for(i=0;i<e;++i)c[i]=String.fromCharCode(b[n+4+i]);r=c.join("")}return Un(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||mn("Cannot pass non-string to std::string");var o=(t&&e?function(){return function(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}(r)}:function(){return r.length})(),i=On(4+o+1);if(P[i>>2]=o,t&&e)!function(n,r,t){!function(n,r,t,e){if(!(e>0))return 0;for(var o=t+e-1,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),a<=127){if(t>=o)break;r[t++]=a}else if(a<=2047){if(t+1>=o)break;r[t++]=192|a>>6,r[t++]=128|63&a}else if(a<=65535){if(t+2>=o)break;r[t++]=224|a>>12,r[t++]=128|a>>6&63,r[t++]=128|63&a}else{if(t+3>=o)break;r[t++]=240|a>>18,r[t++]=128|a>>12&63,r[t++]=128|a>>6&63,r[t++]=128|63&a}}r[t]=0}(n,b,r,t)}(r,i+4,o+1);else if(e)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(Un(i),mn("String has UTF-16 code units that do not fit in 8 bits")),b[i+4+a]=u}else for(a=0;a<o;++a)b[i+4+a]=r[a];return null!==n&&n.push(Un,i),i},argPackAdvance:8,readValueFromPointer:rn,destructorFunction:function(n){Un(n)}})},_embind_register_std_wstring:function(n,r,t){var e,o,i,a,u;t=vn(t),2===r?(e=S,o=F,a=j,i=function(){return T},u=1):4===r&&(e=x,o=I,a=O,i=function(){return P},u=2),yn(n,{name:t,fromWireType:function(n){for(var t,o=P[n>>2],a=i(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==a[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),c=s+r}}return Un(n),t},toWireType:function(n,e){"string"!=typeof e&&mn("Cannot pass non-string to C++ string type "+t);var i=a(e),c=On(4+i+r);return P[c>>2]=i>>u,o(e,c+4,i+r),null!==n&&n.push(Un,c),c},argPackAdvance:8,readValueFromPointer:rn,destructorFunction:function(n){Un(n)}})},_embind_register_value_object:function(n,r,t,e,o,i){Q[n]={name:vn(r),rawConstructor:kn(t,e),rawDestructor:kn(o,i),fields:[]}},_embind_register_value_object_field:function(n,r,t,e,o,i,a,u,c,f){Q[n].fields.push({fieldName:vn(r),getterReturnType:t,getter:kn(e,o),getterContext:i,setterArgumentType:a,setter:kn(u,c),setterContext:f})},_embind_register_void:function(n,r){yn(n,{isVoid:!0,name:r=vn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},_emval_decref:wn,_emval_incref:function(n){n>4&&(_n[n].refcount+=1)},_emval_new_cstring:function(n){return bn(function(n){var r=Sn[n];return void 0===r?vn(n):r}(n))},_emval_take_value:function(n,r){var t=(n=function(n,r){var t=en[n];return void 0===t&&mn("_emval_take_value has unknown type "+Rn(n)),t}(n)).readValueFromPointer(r);return bn(t)},abort:function(){L("")},emscripten_memcpy_big:function(n,r,t){b.copyWithin(n,r,r+t)},emscripten_resize_heap:function(n){var r=b.length,t=2147483648;if((n>>>=0)>t)return!1;for(var e=1;e<=4;e*=2){var o=r*(1+.2/e);if(o=Math.min(o,n+100663296),Fn(Math.min(t,U(Math.max(n,o),65536))))return!0}return!1},fd_close:function(n){return 0},fd_seek:function(n,r,t,e,o){},fd_write:function(n,r,t,e){for(var o=0,i=0;i<t;i++){var a=C[r>>2],u=C[r+4>>2];r+=8;for(var c=0;c<u;c++)jn.printChar(n,b[a+c]);o+=u}return C[e>>2]=o,0},setTempRet0:function(n){}};(function(){var n={env:xn,wasi_snapshot_preview1:xn};function r(n,r){var t=n.exports;e.asm=t,D((p=e.asm.memory).buffer),R=e.asm.__indirect_function_table,function(n){V.unshift(n)}(e.asm.__wasm_call_ctors),function(n){if(N--,e.monitorRunDependencies&&e.monitorRunDependencies(N),0==N&&q){var r=q;q=null,r()}}()}function o(n){r(n.instance)}function i(r){return(l||!u&&!c||"function"!=typeof fetch?Promise.resolve().then((function(){return X(G)})):fetch(G,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+G+"'";return n.arrayBuffer()})).catch((function(){return X(G)}))).then((function(r){return WebAssembly.instantiate(r,n)})).then((function(n){return n})).then(r,(function(n){v("failed to asynchronously prepare wasm: "+n),L(n)}))}if(N++,e.monitorRunDependencies&&e.monitorRunDependencies(N),e.instantiateWasm)try{return e.instantiateWasm(n,r)}catch(n){return v("Module.instantiateWasm callback failed with error: "+n),!1}(l||"function"!=typeof WebAssembly.instantiateStreaming||J(G)||"function"!=typeof fetch?i(o):fetch(G,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(o,(function(n){return v("wasm streaming compile failed: "+n),v("falling back to ArrayBuffer instantiation"),i(o)}))}))).catch(t)})(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)};var In,On=e._malloc=function(){return(On=e._malloc=e.asm.malloc).apply(null,arguments)},Un=e._free=function(){return(Un=e._free=e.asm.free).apply(null,arguments)},Dn=e.___getTypeName=function(){return(Dn=e.___getTypeName=e.asm.__getTypeName).apply(null,arguments)};function Mn(n){function t(){In||(In=!0,e.calledRun=!0,h||(Y(V),r(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)B(e.postRun.shift());Y(z)}()))}N>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)H(e.preRun.shift());Y(M)}(),N>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),t()}),1)):t()))}if(e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},e.___errno_location=function(){return(e.___errno_location=e.asm.__errno_location).apply(null,arguments)},e.stackSave=function(){return(e.stackSave=e.asm.stackSave).apply(null,arguments)},e.stackRestore=function(){return(e.stackRestore=e.asm.stackRestore).apply(null,arguments)},e.stackAlloc=function(){return(e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)},e.dynCall_vij=function(){return(e.dynCall_vij=e.asm.dynCall_vij).apply(null,arguments)},e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)},q=function n(){In||Mn(),In||(q=n)},e.run=Mn,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return Mn(),n.ready},e.exports=i;var c=u.exports;const f=function(n,r){for(var t=0;t<r.length;t++){const e=r[t];if("string"!=typeof e&&!Array.isArray(e))for(const r in e)if("default"!==r&&!(r in n)){const t=Object.getOwnPropertyDescriptor(e,r);t&&Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,a.g)(c)},[c])}}]);