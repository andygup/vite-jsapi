"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9255],{43697:(t,e,r)=>{function n(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}r.d(e,{_:()=>n})},30175:(t,e,r)=>{function n(t,e,r){const n=t.get(e);if(void 0!==n)return n;const o=r();return t.set(e,o),o}r.d(e,{s1:()=>n})},71143:(t,e,r)=>{r.d(e,{Z:()=>n});class n{constructor(t,e,r,n=1,o=0){if(this._ctor=t,this._acquireFunction=e,this._releaseFunction=r,this.allocationSize=n,this._pool=new Array(o),this._initialSize=o,this._ctor)for(let t=0;t<o;t++)this._pool[t]=new this._ctor;this.allocationSize=Math.max(n,1)}destroy(){this.prune(0)}acquire(...t){let e;if(n.test.disabled)e=new this._ctor;else{if(0===this._pool.length){const t=this.allocationSize;for(let e=0;e<t;e++)this._pool[e]=new this._ctor}e=this._pool.pop()}return this._acquireFunction?this._acquireFunction(e,...t):function(t){return t&&t.acquire&&"function"==typeof t.acquire}(e)&&e.acquire(...t),e}release(t){var e;t&&!n.test.disabled&&(this._releaseFunction?this._releaseFunction(t):(e=t)&&e.release&&"function"==typeof e.release&&t.release(),this._pool.push(t))}prune(t=this._initialSize){if(!(t>=this._pool.length)){for(let e=t;e<this._pool.length;++e){const t=this._pool[e];this._dispose(t)}this._pool.length=t}}_dispose(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()}}n.test={disabled:!1}},44553:(t,e,r)=>{r.d(e,{Z:()=>s});var n,o=r(67676);!function(t){const e=(t,e,r,n)=>{let o=e,i=e;const s=r>>>1,a=t[o-1];for(;i<=s;){i=o<<1,i<r&&n(t[i-1],t[i])<0&&++i;const e=t[i-1];if(n(e,a)<=0)break;t[o-1]=e,o=i}t[o-1]=a},r=(t,e)=>t<e?-1:t>e?1:0;t.sort=function(t,n,o,i){void 0===n&&(n=0),void 0===o&&(o=t.length),void 0===i&&(i=r);for(let r=o>>>1;r>n;r--)e(t,r,o,i);const s=n+1;for(let r=o-1;r>n;r--){const o=t[n];t[n]=t[r],t[r]=o,e(t,s,r,i)}},t.iterableSort=function*(t,n,o,i){void 0===n&&(n=0),void 0===o&&(o=t.length),void 0===i&&(i=r);for(let r=o>>>1;r>n;r--)e(t,r,o,i),yield;const s=n+1;for(let r=o-1;r>n;r--){const o=t[n];t[n]=t[r],t[r]=o,e(t,s,r,i),yield}}}(n||(n={}));const i=n;class s{constructor(t){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new o.SO,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator),void 0!==t.deallocator&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=()=>a(this)))}toArray(){return this.data.slice(0,this.length)}filter(t){const e=new Array;for(let r=0;r<this._length;r++){const n=this.data[r];t(n)&&e.push(n)}return e}getItemAt(t){if(!(t<0||t>=this._length))return this.data[t]}includes(t,e){const r=this.data.indexOf(t,e);return-1!==r&&r<this.length}get length(){return this._length}set length(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t}else{if(this._deallocator)for(let e=t;e<this._length;++e)this.data[e]=this._deallocator(this.data[e]);this._length=t,this._shrink()}}clear(){this.length=0}prune(){this.clear(),this.data=[]}push(t){this.data[this._length++]=t}pushArray(t,e=t.length){for(let r=0;r<e;r++)this.data[this._length++]=t[r]}fill(t,e){for(let r=0;r<e;r++)this.data[this._length++]=t}pushNew(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return++this._length,t}unshift(t){this.data.unshift(t),this._length++,a(this)}pop(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t}remove(t){const e=(0,o.cq)(this.data,t,this.length,this._hint);if(-1!==e)return this.data.splice(e,1),this.length=this.length-1,t}removeUnordered(t){return this.removeUnorderedIndex((0,o.cq)(this.data,t,this.length,this._hint))}removeUnorderedIndex(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()}removeUnorderedMany(t,e=t.length,r){this.length=(0,o.FY)(this.data,t,this.length,e,this._hint,r),this._shrink()}front(){if(0!==this.length)return this.data[0]}back(){if(0!==this.length)return this.data[this.length-1]}swapElements(t,e){if(t>=this.length||e>=this.length||t===e)return;const r=this.data[t];this.data[t]=this.data[e],this.data[e]=r}sort(t){i.sort(this.data,0,this.length,t)}iterableSort(t){return i.iterableSort(this.data,0,this.length,t)}some(t,e){for(let r=0;r<this.length;++r)if(t.call(e,this.data[r],r,this.data))return!0;return!1}find(t,e){for(let r=0;r<this.length;++r){const n=this.data[r];if(t.call(e,n,r))return n}}filterInPlace(t,e){let r=0;for(let n=0;n<this._length;++n){const o=this.data[n];t.call(e,o,n,this.data)&&(this.data[n]=this.data[r],this.data[r]=o,r++)}if(this._deallocator)for(let t=r;t<this._length;t++)this.data[t]=this._deallocator(this.data[t]);return this._length=r,this._shrink(),this}forAll(t,e){const r=this.length,n=this.data;for(let o=0;o<r;++o)t.call(e,n[o],o,n)}forEach(t,e){for(let r=0;r<this.length;++r)t.call(e,this.data[r],r,this.data)}map(t,e){const r=new Array(this.length);for(let n=0;n<this.length;++n)r[n]=t.call(e,this.data[n],n,this.data);return r}reduce(t,e){let r=e;for(let e=0;e<this.length;++e)r=t(r,this.data[e],e,this.data);return r}has(t){const e=this.length,r=this.data;for(let n=0;n<e;++n)if(r[n]===t)return!0;return!1}}function a(t){t.data.length>1.5*t.length&&(t.data.length=Math.floor(1.1*t.length))}},20941:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(58896);class o extends n.Z{constructor(t,e,r){super(t,e,r)}}o.prototype.type="warning"},88022:(t,e,r)=>{r.d(e,{F:()=>n});const n=Symbol("Accessor-beforeDestroy")},52011:(t,e,r)=>{r.d(e,{j:()=>u}),r(80442);var n=r(88022),o=r(97831),i=r(7628),s=r(58971),a=r(53906);const c=new Set,l=new Set;function u(t){return e=>{e.prototype.declaredClass=t,p(e);const r=[],o=[];let s=e.prototype;for(;s;)s.hasOwnProperty("initialize")&&!c.has(s.initialize)&&(c.add(s.initialize),r.push(s.initialize)),s.hasOwnProperty("destroy")&&!l.has(s.destroy)&&(l.add(s.destroy),o.push(s.destroy)),s=Object.getPrototypeOf(s);c.clear(),l.clear();class a extends e{constructor(...t){if(super(...t),this.constructor===a&&"function"==typeof this.postscript){if(r.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let t=r.length-1;t>=0;t--)r[t].call(this)}}),o.length){let t=!1;const e=this[n.F];Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!t){t=!0,e.call(this);for(let t=0;t<o.length;t++)o[t].call(this)}}})}this.postscript(...t)}}}return a.__accessorMetadata__=(0,i.fp)(e.prototype),a.prototype.declaredClass=t,a}}function f(t,e){return null==e.get?function(){const e=this.__accessor__,r=e.propertiesByName.get(t);if(void 0===r)return;(0,s.it)(r.observerObject);const n=e.store;return n.has(t)?n.get(t):r.metadata.value}:function(){const e=this.__accessor__,r=e.propertiesByName.get(t);if(void 0!==r)return r.getComputed(e)}}function p(t){const e=t.prototype,r=(0,i.fp)(e),n={};for(const t of Object.getOwnPropertyNames(r)){const e=r[t];(0,a.OM)(e),n[t]={enumerable:!0,configurable:!0,get:f(t,e),set(r){const n=this.__accessor__;if(void 0!==n){if(!Object.isFrozen(this)){if(n.initialized&&e.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${t}' of ${this.declaredClass}`);if(n.lifecycle===o.F.CONSTRUCTED&&e.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${t}' of ${this.declaredClass}`);n.set(t,r)}}else Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:r})}}}Object.defineProperties(t.prototype,n)}},75215:(t,e,r)=>{r.d(e,{AY:()=>$,Iu:()=>j,Ls:()=>w,N7:()=>N,TJ:()=>g,V5:()=>C,Zs:()=>c,di:()=>O,gB:()=>k,i$:()=>T,q9:()=>l,rY:()=>m,sY:()=>I,se:()=>_,vU:()=>u,z8:()=>S}),r(80442);var n=r(92604),o=r(30175);const i=n.Z.getLogger("esri.core.accessorSupport.ensureTypes");function s(t){return null==t?t:new Date(t)}function a(t){return null==t?t:!!t}function c(t){return null==t?t:t.toString()}function l(t){return null==t?t:(t=parseFloat(t),isNaN(t)?0:t)}function u(t){return null==t?t:Math.round(parseFloat(t))}function f(t){return t&&t.constructor&&void 0!==t.constructor.__accessorMetadata__}function p(t,e){return null!=e&&t&&!(e instanceof t)}function h(t){return t&&"isCollection"in t}function d(t){return t&&t.Type?"function"==typeof t.Type?t.Type:t.Type.base:null}function y(t,e){return!!f(e)&&(i.error("Accessor#set","Assigning an instance of '"+(e.declaredClass||"unknown")+"' which is not a subclass of '"+v(t)+"'"),!0)}function g(t,e){return null==e?e:h(t)?function(t,e){if(!e||!e.constructor||!h(e.constructor))return y(t,e)?e:new t(e);const r=d(t.prototype.itemType),n=d(e.constructor.prototype.itemType);return r?n?r===n?e:r.prototype.isPrototypeOf(n.prototype)?new t(e):(y(t,e),e):new t(e):e}(t,e):p(t,e)?y(t,e)?e:new t(e):e}function v(t){return t&&t.prototype&&t.prototype.declaredClass||"unknown"}const b=new WeakMap;function _(t,e){const r=function(t){switch(t){case Number:return l;case S:return u;case Boolean:return a;case String:return c;case Date:return s;default:return(0,o.s1)(b,t,(()=>g.bind(null,t)))}}(t);return 1===arguments.length?r:r(e)}function w(t,e,r){return 1===arguments.length?w.bind(null,t):e?Array.isArray(e)?e.map((e=>t(e,r))):[t(e,r)]:e}function m(t,e){return 1===arguments.length?w((e=>_(t,e))):w((e=>_(t,e)),e)}function A(t,e,r){return 0!==e&&Array.isArray(r)?r.map((r=>A(t,e-1,r))):t(r)}function j(t,e,r){if(2===arguments.length)return r=>j(t,e,r);if(!r)return r;r=A(t,e,r);let n=e,o=r;for(;n>0&&Array.isArray(o);)n--,o=o[0];if(void 0!==o)for(let t=0;t<n;t++)r=[r];return r}function O(t,e,r){return 2===arguments.length?j((e=>_(t,e)),e):j((e=>_(t,e)),e,r)}function k(t){return!!Array.isArray(t)&&!t.some((e=>{const r=typeof e;return!("string"===r||"number"===r||"function"===r&&t.length>1)}))}function T(t,e){if(2===arguments.length)return T(t).call(null,e);const r=new Set,n=t.filter((t=>"function"!=typeof t)),o=t.filter((t=>"function"==typeof t));for(const e of t)"string"!=typeof e&&"number"!=typeof e||r.add(e);let s=null,a=null;return(t,e)=>{if(null==t)return t;const c=typeof t,l="string"===c||"number"===c;return l&&(r.has(t)||o.some((t=>"string"===c&&t===String||"number"===c&&t===Number)))||"object"===c&&o.some((e=>!p(t,e)))?t:(l&&n.length?(s||(s=n.map((t=>"string"==typeof t?`'${t}'`:`${t}`)).join(", ")),i.error("Accessor#set",`'${t}' is not a valid value for this property, only the following values are valid: ${s}`)):"object"==typeof t&&o.length?(a||(a=o.map((t=>v(t))).join(", ")),i.error("Accessor#set",`'${t}' is not a valid value for this property, value must be one of ${a}`)):i.error("Accessor#set",`'${t}' is not a valid value for this property`),e&&(e.valid=!1),null)}}function N(t,e){if(2===arguments.length)return N(t).call(null,e);const r={},n=[],o=[];for(const e in t.typeMap){const i=t.typeMap[e];r[e]=_(i),n.push(v(i)),o.push(e)}const s=()=>`'${n.join("', '")}'`,a=()=>`'${o.join("', '")}'`,c="string"==typeof t.key?e=>e[t.key]:t.key;return e=>{if(t.base&&!p(t.base,e))return e;if(null==e)return e;const n=c(e)||t.defaultKeyValue,o=r[n];if(!o)return i.error("Accessor#set",`Invalid property value, value needs to be one of ${s()}, or a plain object that can autocast (having .type = ${a()})`),null;if(!p(t.typeMap[n],e))return e;if("string"==typeof t.key&&!f(e)){const r={};for(const n in e)n!==t.key&&(r[n]=e[n]);return o(r)}return o(e)}}class S{}const C={native:t=>({type:"native",value:t}),array:t=>({type:"array",value:t}),oneOf:t=>({type:"one-of",values:t})};function $(t){if(!t||!("type"in t))return!1;switch(t.type){case"native":case"array":case"one-of":return!0}return!1}function I(t){switch(t.type){case"native":return _(t.value);case"array":return w(I(t.value));case"one-of":return function(t){let e=null;return(r,n)=>z(r,t)?r:(null==e&&(e=M(t)),i.error("Accessor#set",`Invalid property value, value needs to be of type ${e}`),n&&(n.valid=!1),null)}(t);default:return null}}function M(t){switch(t.type){case"native":switch(t.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case S:return"integer";case Date:return"date";default:return v(t.value)}case"array":return`array of ${M(t.value)}`;case"one-of":{const e=t.values.map((t=>M(t)));return`one of ${e.slice(0,e.length-1)} or ${e[e.length-1]}`}}return"unknown"}function z(t,e){if(null==t)return!0;switch(e.type){case"native":switch(e.value){case Number:case S:return"number"==typeof t;case Boolean:return"boolean"==typeof t;case String:return"string"==typeof t}return t instanceof e.value;case"array":return!!Array.isArray(t)&&!t.some((t=>!z(t,e.value)));case"one-of":return e.values.some((e=>z(t,e)))}}},53906:(t,e,r)=>{r.d(e,{hk:()=>p,HS:()=>u,Ah:()=>f,OM:()=>g});var n=r(75215),o=r(63213);function i(t){if(t.json||(t.json={}),a(t.json),c(t.json),s(t.json),t.json.origins)for(const e in t.json.origins)a(t.json.origins[e]),c(t.json.origins[e]),s(t.json.origins[e]);return!0}function s(t){t.name&&(t.read&&"object"==typeof t.read?void 0===t.read.source&&(t.read.source=t.name):t.read={source:t.name},t.write&&"object"==typeof t.write?void 0===t.write.target&&(t.write.target=t.name):t.write={target:t.name})}function a(t){"boolean"==typeof t.read?t.read={enabled:t.read}:"function"==typeof t.read?t.read={enabled:!0,reader:t.read}:t.read&&"object"==typeof t.read&&void 0===t.read.enabled&&(t.read.enabled=!0)}function c(t){"boolean"==typeof t.write?t.write={enabled:t.write}:"function"==typeof t.write?t.write={enabled:!0,writer:t.write}:t.write&&"object"==typeof t.write&&void 0===t.write.enabled&&(t.write.enabled=!0)}var l=r(827);function u(t,e){return p(t,"read",e)}function f(t,e){return p(t,"write",e)}function p(t,e,r){let n=t&&t.json;if(t&&t.json&&t.json.origins&&r){const o=r.origin&&t.json.origins[r.origin];o&&("any"===e||e in o)&&(n=o)}return n}function h(t){return t.type?d(t):y(t)}function d(t){if(!t.type)return;let e=0,r=t.type;for(;Array.isArray(r)&&!(0,n.gB)(r);)r=r[0],e++;return{type:r,ndimArray:e}}function y(t){if(!t.types)return;let e=0,r=t.types;for(;Array.isArray(r);)r=r[0],e++;return{types:r,ndimArray:e}}function g(t){i(t)&&(function(t){if(t.json&&t.json.origins){const e=t.json.origins,r={"web-document":["web-scene","web-map"]};for(const t in r)if(e[t]){const n=e[t];r[t].forEach((t=>{e[t]=n})),delete e[t]}}}(t),function(t){const e=function(t){return t.json.types?y(t.json):t.type?d(t):y(t)}(t);if(t.json.origins)for(const r in t.json.origins){const n=t.json.origins[r],i=n.types?h(n):e;(0,o.U)(i,n,!1),n.types&&!n.write&&t.json.write&&t.json.write.enabled&&(n.write={...t.json.write}),(0,l.U)(i,n)}(0,o.U)(e,t.json,!0),(0,l.U)(e,t.json)}(t))}},63213:(t,e,r)=>{r.d(e,{U:()=>l,d:()=>u});var n=r(92604),o=r(78286),i=r(20941),s=r(7628),a=r(14062);const c=n.Z.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");function l(t,e,r){t&&(!r&&!e.read||e.read?.reader||!1===e.read?.enabled||function(t){return"types"in t?g(t.types):y(t.type)}(t)&&(0,o.RB)("read.reader",u(t),e))}function u(t){const e=t.ndimArray??0;if(e>1)return function(t){const e=f(t),r=p.bind(null,e),n=t.ndimArray??0;return(t,e,o)=>{if(null==t)return t;t=r(t,o,n);let i=n,s=t;for(;i>0&&Array.isArray(s);)i--,s=s[0];if(void 0!==s)for(let e=0;e<i;e++)t=[t];return t}}(t);if(1===e)return h(t);if("type"in t&&d(t.type)){const e=t.type.prototype?.itemType?.Type,r=h("function"==typeof e?{type:e}:{types:e});return(e,n,o)=>{const i=r(e,n,o);return i?new t.type(i):i}}return f(t)}function f(t){return"type"in t?function(t){return t.prototype.read?(e,r,n)=>{if(null==e)return e;const o=typeof e;if("object"!==o)return void c.error(`Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${o}'`);const i=new t;return i.read(e,n),i}:t.fromJSON}(t.type):function(t){let e=null;const r=t.errorContext??"type";return(n,o,a)=>{if(null==n)return n;const l=typeof n;if("object"!==l)return void c.error(`Expected JSON value of type 'object' to deserialize, but got '${l}'`);e||(e=function(t){const e={};for(const r in t.typeMap){const n=t.typeMap[r],o=(0,s.fp)(n.prototype);if("function"==typeof t.key)continue;const i=o[t.key];if(!i)continue;i.json?.type&&Array.isArray(i.json.type)&&1===i.json.type.length&&"string"==typeof i.json.type[0]&&(e[i.json.type[0]]=n);const a=i.json?.write;if(!a||!a.writer){e[r]=n;continue}const c=a.target,l="string"==typeof c?c:t.key,u={};a.writer(r,u,l),u[l]&&(e[u[l]]=n)}return e}(t));const u=t.key;if("string"!=typeof u)return;const f=n[u],p=f?e[f]:t.defaultKeyValue?t.typeMap[t.defaultKeyValue]:void 0;if(!p){const t=`Type '${f||"unknown"}' is not supported`;return a&&a.messages&&n&&a.messages.push(new i.Z(`${r}:unsupported`,t,{definition:n,context:a})),void c.error(t)}const h=new p;return h.read(n,a),h}}(t.types)}function p(t,e,r,n){return 0!==n&&Array.isArray(e)?e.map((e=>p(t,e,r,n-1))):t(e,void 0,r)}function h(t){const e=f(t);return(t,r,n)=>{if(null==t)return t;if(Array.isArray(t)){const r=[];for(const o of t){const t=e(o,void 0,n);void 0!==t&&r.push(t)}return r}const o=e(t,void 0,n);return void 0!==o?[o]:void 0}}function d(t){if(!(0,a.u)(t))return!1;const e=t.prototype.itemType;return!(!e||!e.Type)&&("function"==typeof e.Type?y(e.Type):g(e.Type))}function y(t){return!Array.isArray(t)&&!!t&&t.prototype&&("read"in t.prototype||"fromJSON"in t||d(t))}function g(t){for(const e in t.typeMap)if(!y(t.typeMap[e]))return!1;return!0}},14062:(t,e,r)=>{function n(t){return!!t&&t.prototype&&t.prototype.declaredClass&&0===t.prototype.declaredClass.indexOf("esri.core.Collection")}r.d(e,{u:()=>n})},827:(t,e,r)=>{r.d(e,{U:()=>a,k:()=>f});var n=r(20102),o=r(92604),i=r(78286),s=r(14062);function a(t,e){if(!e.write||e.write.writer||!1===e.write.enabled&&!e.write.overridePolicy)return;const r=t?.ndimArray??0;t&&(1===r||"type"in t&&(0,s.u)(t.type))?e.write.writer=p:r>1?e.write.writer=function(t){return(e,r,n,o)=>{let s;if(null===e)s=null;else{s=h(e,o,t);let r=t,n=s;for(;r>0&&Array.isArray(n);)r--,n=n[0];if(void 0!==n)for(let t=0;t<r;t++)s=[s]}(0,i.RB)(n,s,r)}}(r):e.types?Array.isArray(e.types)?e.write.writer=function(t){return(e,r,n,o)=>e&&Array.isArray(e)?l(e.filter((e=>c(e,t,o))),r,n,o):l(e,r,n,o)}(e.types[0]):e.write.writer=function(t){return(e,r,n,o)=>e?c(e,t,o)?l(e,r,n,o):void 0:l(e,r,n,o)}(e.types):e.write.writer=l}function c(t,e,r){for(const r in e.typeMap)if(t instanceof e.typeMap[r])return!0;if(r?.messages){const i=e.errorContext??"type",s=`Values of type '${("function"!=typeof e.key?t[e.key]:t.declaredClass)??"Unknown"}' cannot be written`;r&&r.messages&&t&&r.messages.push(new n.Z(`${i}:unsupported`,s,{definition:t,context:r})),o.Z.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(s)}return!1}function l(t,e,r,n){(0,i.RB)(r,u(t,n),e)}function u(t,e){return t&&"function"==typeof t.write?t.write({},e):t&&"function"==typeof t.toJSON?t.toJSON():"number"==typeof t?f(t):t}function f(t){return t===-1/0?-Number.MAX_VALUE:t===1/0?Number.MAX_VALUE:isNaN(t)?null:t}function p(t,e,r,n){let o;null===t?o=null:t&&"function"==typeof t.map?(o=t.map((t=>u(t,n))),"function"==typeof o.toArray&&(o=o.toArray())):o=[u(t,n)],(0,i.RB)(r,o,e)}function h(t,e,r){return 0!==r&&Array.isArray(t)?t.map((t=>h(t,e,r-1))):u(t,e)}},97831:(t,e,r)=>{var n;r.d(e,{F:()=>n}),function(t){t[t.INITIALIZING=0]="INITIALIZING",t[t.CONSTRUCTING=1]="CONSTRUCTING",t[t.CONSTRUCTED=2]="CONSTRUCTED"}(n||(n={}))},7628:(t,e,r)=>{r.d(e,{Oe:()=>s,fp:()=>i,tz:()=>a});var n=r(22974),o=r(1153);function i(t){let e=t.constructor.__accessorMetadata__;const r=Object.prototype.hasOwnProperty.call(t.constructor,"__accessorMetadata__");if(e){if(!r){e=Object.create(e);for(const t in e)e[t]=(0,n.d9)(e[t]);Object.defineProperty(t.constructor,"__accessorMetadata__",{value:e,enumerable:!1,configurable:!0,writable:!0})}}else e={},Object.defineProperty(t.constructor,"__accessorMetadata__",{value:e,enumerable:!1,configurable:!0,writable:!0});return t.constructor.__accessorMetadata__}function s(t,e){const r=i(t);let n=r[e];return n||(n=r[e]={}),n}function a(t,e){return(0,o.TS)(t,e,l)}const c=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function l(t){return c.test(t)?"replace":"merge"}},58971:(t,e,r)=>{r.d(e,{GF:()=>_,LJ:()=>p,gb:()=>h,it:()=>l,mS:()=>v}),r(80442);var n=r(92604),o=r(1153),i=r(44550);const s={onObservableAccessed:()=>{},onTrackingEnd:()=>{}},a=[];let c=s;function l(t){c.onObservableAccessed(t)}let u=!1,f=!1;function p(t,e,r){if(u)return d(t,e,r);y(t);const n=e.call(r);return g(),n}function h(t,e){return p(s,t,e)}function d(t,e,r){const o=u;u=!0,y(t);let i=null;try{i=e.call(r)}catch(t){f&&n.Z.getLogger("esri.core.accessorSupport.tracking").error(t)}return g(),u=o,i}function y(t){c=t,a.push(t)}function g(){const t=a.length;if(t>1){const e=a.pop();c=a[t-2],e.onTrackingEnd()}else if(1===t){const t=a.pop();c=s,t.onTrackingEnd()}else c=s}function v(t,e){const r=e.observerObject;if(r.flags&i.v.DepTrackingInitialized)return;const n=f;f=!1,r.flags&i.v.AutoTracked?d(e,e.metadata.get,t):_(t,e),f=n}const b=[];function _(t,e){const r=e.observerObject;r.flags&i.v.ExplicitlyTracking||(r.flags|=i.v.ExplicitlyTracking,d(e,(()=>{const r=e.metadata.dependsOn||b;for(const e of r)if("string"!=typeof e||e.includes(".")){const r=(0,o.NI)(e);for(let e=0,n=t;e<r.length&&null!=n&&"object"==typeof n;++e)n=w(n,r[e],e!==r.length-1)}else w(t,e,!1)})),r.flags&=~i.v.ExplicitlyTracking)}function w(t,e,r){const n="?"===e[e.length-1]?e.slice(0,-1):e;if(null!=t.getItemAt||Array.isArray(t)){const e=parseInt(n,10);if(!isNaN(e))return Array.isArray(t)?t[e]:t.getItemAt(e)}const i=(0,o.vw)(t);if(i){const e=i.propertiesByName.get(n);e&&(l(e.observerObject),v(t,e))}return r?t[n]:void 0}},44550:(t,e,r)=>{var n;r.d(e,{v:()=>n}),function(t){t[t.Dirty=1]="Dirty",t[t.Overriden=2]="Overriden",t[t.Computing=4]="Computing",t[t.NonNullable=8]="NonNullable",t[t.HasDefaultValue=16]="HasDefaultValue",t[t.DepTrackingInitialized=32]="DepTrackingInitialized",t[t.AutoTracked=64]="AutoTracked",t[t.ExplicitlyTracking=128]="ExplicitlyTracking"}(n||(n={}))},1153:(t,e,r)=>{r.d(e,{IH:()=>h,NI:()=>u,Qc:()=>p,TS:()=>c,b6:()=>a,vw:()=>s});var n=r(50758),o=r(22974),i=r(70586);function s(t){return t.__accessor__??null}function a(t,e){return null!=t&&t.metadatas&&null!=t.metadatas[e]}function c(t,e,r){return l(t,e,r?{policy:r,path:""}:null)}function l(t,e,r){return e?Object.keys(e).reduce(((t,n)=>{const s=n;let a=null,c="merge";if(r&&(a=r.path?`${r.path}.${n}`:n,c=r.policy(a)),"replace"===c)return t[s]=e[s],t;if("replace-arrays"===c&&Array.isArray(t[s]))return t[s]=e[s],t;if(void 0===t[s])return t[s]=(0,o.d9)(e[s]),t;let u=t[s],f=e[s];if(u===f)return t;if(Array.isArray(f)||Array.isArray(t))u=u?Array.isArray(u)?t[s]=u.concat():t[s]=[u]:t[s]=[],f&&(Array.isArray(f)||(f=[f]),f.forEach((t=>{u.includes(t)||u.push(t)})));else if(f&&"object"==typeof f)if(r){const e=r.path;r.path=(0,i.j0)(a),t[s]=l(u,f,r),r.path=e}else t[s]=l(u,f,null);else t.hasOwnProperty(n)&&!e.hasOwnProperty(n)||(t[s]=f);return t}),t||{}):t}function u(t){return Array.isArray(t)?t:t.split(".")}function f(t){return t.includes(",")?t.split(",").map((t=>t.trim())):[t.trim()]}function p(t,e,r,o){const i=function(t){if(Array.isArray(t)){const e=[];for(const r of t)e.push(...f(r));return e}return f(t)}(e);if(1!==i.length){const e=i.map((e=>o(t,e,r)));return(0,n.AL)(e)}return o(t,i[0],r)}function h(t){let e=!1;return()=>{e||(e=!0,t())}}},50758:(t,e,r)=>{function n(t){return o((()=>t.forEach((t=>null!=t&&t.remove()))))}function o(t){return{remove:()=>{t&&(t(),t=void 0)}}}r.d(e,{AL:()=>n,kB:()=>o})},41213:(t,e,r)=>{r.d(e,{Y:()=>o});const n=[];function o(t){n.push(t),1===n.length&&queueMicrotask((()=>{const t=n.slice();n.length=0;for(const e of t)e()}))}}}]);