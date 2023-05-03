"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1400],{92036:(e,t,r)=>{r.d(t,{Z:()=>U});var s=r(61247),n=r(70586),i=r(88022),o=r(67723),a=r(7628),c=(r(80442),r(22974)),l=r(92604),u=r(71143),h=r(97831),d=r(42100),f=r(31263),p=r(58971),_=r(44550);class g{constructor(e,t){this.propertyName=e,this.metadata=t,this.observerObject=new v,this._accessed=null,this._handles=null,this.observerObject.flags=_.v.Dirty|(t.nonNullable?_.v.NonNullable:0)|(t.hasOwnProperty("value")?_.v.HasDefaultValue:0)|(void 0===t.get?_.v.DepTrackingInitialized:0)|(void 0===t.dependsOn?_.v.AutoTracked:0)}destroy(){this.observerObject.destroy(),this._accessed=null,this._clearObservationHandles()}getComputed(e){const t=this.observerObject;(0,p.it)(t);const r=e.store,s=this.propertyName,n=t.flags,i=r.get(s);if(n&_.v.Computing)return i;if(~n&_.v.Dirty&&r.has(s))return i;t.flags|=_.v.Computing;const o=e.host;let a;n&_.v.AutoTracked?a=(0,p.LJ)(this,this.metadata.get,o):((0,p.GF)(o,this),a=this.metadata.get.call(o)),r.set(s,a,f.s3.COMPUTED);const c=r.get(s);return c===i?t.flags&=~_.v.Dirty:(0,p.gb)(this.commit,this),t.flags&=~_.v.Computing,c}onObservableAccessed(e){if(e===this.observerObject)return;let t=this._accessed;if(null==t)t=[],this._accessed=t;else if(t.includes(e))return;t.push(e)}onTrackingEnd(){this._clearObservationHandles();const e=this.observerObject;e.flags|=_.v.DepTrackingInitialized;const t=this._accessed;if(null==t||0===t.length)return;let r=this._handles;null==r&&(r=[],this._handles=r);for(let s=0;s<t.length;++s)r.push(t[s].observe(e));t.length=0}notifyChange(){const e=this.observerObject;e.onInvalidated(),e.onCommitted()}invalidate(){this.observerObject.onInvalidated()}commit(){const e=this.observerObject;e.flags&=~_.v.Dirty,e.onCommitted()}_clearObservationHandles(){const e=this._handles;if(null!==e){for(let t=0;t<e.length;++t)e[t].remove();e.length=0}}}class v extends d.s{constructor(){super(...arguments),this.flags=0}onInvalidated(){~this.flags&_.v.Overriden&&(this.flags|=_.v.Dirty);const e=this._observers;if(e&&e.length>0)for(const t of e)t.onInvalidated()}onCommitted(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onCommitted()}}destroy(){this.flags&_.v.Dirty&&this.onCommitted(),super.destroy()}}class y{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new y;return this._values.forEach(((r,s)=>{e&&e.has(s)||t.set(s,(0,c.d9)(r))})),t}get(e){return this._values.get(e)}originOf(){return f.s3.USER}keys(){return[...this._values.keys()]}set(e,t){this._values.set(e,t)}delete(e){this._values.delete(e)}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e)}}function m(e,t,r){return void 0!==e}function O(e,t,r,s){return!(void 0===e||null==r&&e.observerObject.flags&_.v.NonNullable&&(s.lifecycle,h.F.INITIALIZING,1))}function b(e){return e&&"function"==typeof e.destroy}l.Z.getLogger("esri.core.accessorSupport.Properties");class w{constructor(e){this.host=e,this.propertiesByName=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=h.F.INITIALIZING,this.store=new y,this._origin=f.s3.USER;const t=this.host.constructor.__accessorMetadata__;for(const e in t){const r=new g(e,t[e]);this.propertiesByName.set(e,r)}this.metadatas=t}initialize(){this.lifecycle=h.F.CONSTRUCTING}constructed(){this.lifecycle=h.F.CONSTRUCTED}destroy(){this.destroyed=!0;for(const[e,t]of this.propertiesByName){if(t.metadata.autoDestroy){const r=this.internalGet(e);r&&b(r)&&(r.destroy(),~t.observerObject.flags&_.v.NonNullable&&this._internalSet(t,null))}t.destroy()}}get initialized(){return this.lifecycle!==h.F.INITIALIZING}get(e){const t=this.propertiesByName.get(e);if(t.metadata.get)return t.getComputed(this);(0,p.it)(t.observerObject);const r=this.store;return r.has(e)?r.get(e):t.metadata.value}originOf(e){const t=this.store.originOf(e);if(void 0===t){const t=this.propertiesByName.get(e);if(void 0!==t&&t.observerObject.flags&_.v.HasDefaultValue)return"defaults"}return(0,f.x3)(t)}has(e){return!!this.propertiesByName.has(e)&&this.store.has(e)}keys(){return[...this.propertiesByName.keys()]}internalGet(e){const t=this.propertiesByName.get(e);if(m(t))return this.store.has(e)?this.store.get(e):t.metadata.value}internalSet(e,t){const r=this.propertiesByName.get(e);m(r)&&this._internalSet(r,t)}getDependsInfo(e,t,r){const s=this.propertiesByName.get(t);if(!m(s))return"";const n=new Set,i=(0,p.LJ)({onObservableAccessed:e=>n.add(e),onTrackingEnd:()=>{}},(()=>s.metadata.get?.call(e)));let o=`${r}${e.declaredClass.split(".").pop()}.${t}: ${i}\n`;if(0===n.size)return o;r+="  ";for(const e of n)e instanceof g&&(o+=`${r}${e.propertyName}: undefined\n`);return o}setAtOrigin(e,t,r){const s=this.propertiesByName.get(e);if(m(s))return this._setAtOrigin(s,t,r)}isOverridden(e){const t=this.propertiesByName.get(e);return void 0!==t&&!!(t.observerObject.flags&_.v.Overriden)}clearOverride(e){const t=this.propertiesByName.get(e),r=t?.observerObject;r&&r.flags&_.v.Overriden&&(r.flags&=~_.v.Overriden,t.notifyChange())}override(e,t){const r=this.propertiesByName.get(e);if(!O(r,0,t,this))return;const s=r.metadata.cast;if(s){const e=this._cast(s,t),{valid:r,value:n}=e;if(A.release(e),!r)return;t=n}r.observerObject.flags|=_.v.Overriden,this._internalSet(r,t)}set(e,t){const r=this.propertiesByName.get(e);if(!O(r,0,t,this))return;const s=r.metadata.cast;if(s){const e=this._cast(s,t),{valid:r,value:n}=e;if(A.release(e),!r)return;t=n}const n=r.metadata.set;n?n.call(this.host,t):this._internalSet(r,t)}setDefaultOrigin(e){this._origin=(0,f.M9)(e)}getDefaultOrigin(){return(0,f.x3)(this._origin)}notifyChange(e){const t=this.propertiesByName.get(e);void 0!==t&&t.notifyChange()}invalidate(e){const t=this.propertiesByName.get(e);void 0!==t&&t.invalidate()}commit(e){const t=this.propertiesByName.get(e);void 0!==t&&t.commit()}_internalSet(e,t){const r=this.lifecycle!==h.F.INITIALIZING?this._origin:f.s3.DEFAULTS;this._setAtOrigin(e,t,r)}_setAtOrigin(e,t,r){const s=this.store,n=e.propertyName;s.has(n,r)&&(0,c.fS)(t,s.get(n))&&~e.observerObject.flags&_.v.Overriden&&r===s.originOf(n)||(e.invalidate(),s.set(n,t,r),e.commit(),(0,p.mS)(this.host,e))}_cast(e,t){const r=A.acquire();return r.valid=!0,r.value=t,e&&(r.value=e.call(this.host,t,r)),r}}const A=new u.Z(class{constructor(){this.value=null,this.valid=!0}acquire(){this.valid=!0}release(){this.value=null}});var S=r(37697);var N,E,T=r(26258),k=r(5600),C=r(52011);function j(e){if(null==e)return{value:e};if(Array.isArray(e))return{type:[e[0]],value:null};switch(typeof e){case"object":return e.constructor?.__accessorMetadata__||e instanceof Date?{type:e.constructor,value:e}:e;case"boolean":return{type:Boolean,value:e};case"string":return{type:String,value:e};case"number":return{type:Number,value:e};case"function":return{type:e,value:null};default:return}}const I=Symbol("Accessor-Handles"),D=Symbol("Accessor-Initialized");class U{static createSubclass(e={}){if(Array.isArray(e))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:t,declaredClass:r,constructor:s}=e;delete e.declaredClass,delete e.properties,delete e.constructor;const n=this;class i extends n{constructor(...e){super(...e),this.inherited=null,s&&s.apply(this,e)}}(0,a.fp)(i.prototype);for(const t in e){const r=e[t];i.prototype[t]="function"==typeof r?function(...e){const s=this.inherited;let i;this.inherited=function(...e){if(n.prototype[t])return n.prototype[t].apply(this,e)};try{i=r.apply(this,e)}catch(e){throw this.inherited=s,e}return this.inherited=s,i}:e[t]}for(const e in t){const r=j(t[e]);(0,k.Cb)(r)(i.prototype,e)}return(0,C.j)(r)(i)}constructor(...e){if(this[N]=null,this[E]=!1,this.constructor===U)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");const t=new w(this);Object.defineProperty(this,"__accessor__",{enumerable:!1,value:t}),e.length>0&&this.normalizeCtorArgs&&(t.ctorArgs=this.normalizeCtorArgs.apply(this,e)),M.register(this,t.propertiesByName,this)}postscript(e){const t=this.__accessor__,r=t.ctorArgs||e;t.initialize(),r&&(this.set(r),t.ctorArgs=null),t.constructed(),this.initialize(),this[D]=!0}initialize(){}[i.F](){this[I]=(0,n.SC)(this[I])}destroy(){this.destroyed||(M.unregister(this),(0,T.BT)(this),this.__accessor__.destroy())}get constructed(){return this.__accessor__&&this.__accessor__.initialized||!1}get initialized(){return this[D]}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(e){this.get(e)}get(e){return(0,o.U2)(this,e)}hasOwnProperty(e){return this.__accessor__?this.__accessor__.has(e):Object.prototype.hasOwnProperty.call(this,e)}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(e,t){return(0,S.t)(this,e,t),this}watch(e,t,r){return(0,T.YP)(this,e,t,r)}own(e){this.addHandles(e)}addHandles(e,t){if(this.destroyed){const t=Array.isArray(e)?e:[e];for(const e of t)e.remove();return}let r=this[I];null==r&&(r=this[I]=new s.Z),r.add(e,t)}removeHandles(e){const t=this[I];null!=t&&t.remove(e)}removeAllHandles(){const e=this[I];null!=e&&e.removeAll()}hasHandles(e){const t=this[I];return null!=t&&t.has(e)}_override(e,t){void 0===t?this.__accessor__.clearOverride(e):this.__accessor__.override(e,t)}_clearOverride(e){return this.__accessor__.clearOverride(e)}_overrideIfSome(e,t){null==t?this.__accessor__.clearOverride(e):this.__accessor__.override(e,t)}_isOverridden(e){return this.__accessor__.isOverridden(e)}notifyChange(e){this.__accessor__.notifyChange(e)}_get(e){return this.__accessor__.internalGet(e)}_set(e,t){return this.__accessor__.internalSet(e,t),this}}N=I,E=D;const M=new FinalizationRegistry((e=>{for(const t of e.values())t.destroy()}))},3894:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(71143);function n(e){e.length=0}class i{constructor(e=50,t=50){this._pool=new s.Z(Array,void 0,n,t,e)}acquire(){return this._pool.acquire()}release(e){this._pool.release(e)}prune(){this._pool.prune(0)}static acquire(){return o.acquire()}static release(e){return o.release(e)}static prune(){o.prune()}}const o=new i(100)},61247:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(66374),n=r(70586);class i{constructor(){this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}add(e,t){if((0,s.TW)(e)){const r=this._getOrCreateGroup(t);for(const t of e)this._isHandle(t)&&r.push(t)}else this._isHandle(e)&&this._getOrCreateGroup(t).push(e);return this}forEach(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if("string"!=typeof e&&(0,s.TW)(e)){for(const t of e)this.remove(t);return this}return this.has(e)?(this._removeAllFromGroup(this._getGroup(e)),this._groups.delete(this._ensureGroupKey(e)),this):this}removeAll(){return this._groups.forEach((e=>this._removeAllFromGroup(e))),this._groups.clear(),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return(0,n.j0)(this._groups.get(this._ensureGroupKey(e)))}_ensureGroupKey(e){return e||"_default_"}_removeAllFromGroup(e){e.forEach((e=>e.remove()))}}},96674:(e,t,r)=>{r.d(t,{wq:()=>v,eC:()=>_});var s=r(43697),n=r(92036),i=r(70586),o=r(22974),a=r(31263);class c{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new c;return this._values.forEach(((r,s)=>{e&&e.has(s)||t.set(s,(0,o.d9)(r.value),r.origin)})),t}get(e,t){t=this._normalizeOrigin(t);const r=this._values.get(e);return null==t||r?.origin===t?r?.value:void 0}originOf(e){return this._values.get(e)?.origin??a.s3.USER}keys(e){e=this._normalizeOrigin(e);const t=[...this._values.keys()];return null==e?t:t.filter((t=>this._values.get(t)?.origin===e))}set(e,t,r){if((r=this._normalizeOrigin(r))===a.s3.DEFAULTS){const t=this._values.get(e);if(t&&null!=t.origin&&t.origin>r)return}this._values.set(e,new l(t,r))}delete(e,t){null!=(t=this._normalizeOrigin(t))&&this._values.get(e)?.origin!==t||this._values.delete(e)}has(e,t){return null!=(t=this._normalizeOrigin(t))?this._values.get(e)?.origin===t:this._values.has(e)}forEach(e){this._values.forEach((({value:t},r)=>e(t,r)))}_normalizeOrigin(e){if(null!=e)return e===a.s3.DEFAULTS?e:a.s3.USER}}class l{constructor(e,t){this.value=e,this.origin=t}}var u=r(41103),h=r(50549),d=r(1153),f=r(76169),p=r(52011);const _=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,i.j0)((0,d.vw)(this)),r=t.store,s=new c;t.store=s,(0,u.M)(t,r,s)}read(e,t){(0,h.i)(this,e,t)}write(e,t){return(0,f.c)(this,e??{},t)}toJSON(e){return this.write({},e)}static fromJSON(e,t){return g.call(this,e,t)}};return t=(0,s._)([(0,p.j)("esri.core.JSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function g(e,t){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");const r=new this;return r.read(e,t),r}let v=class extends(_(n.Z)){};v=(0,s._)([(0,p.j)("esri.core.JSONSupport")],v)},54790:(e,t,r)=>{r.d(t,{Z:()=>s});class s{constructor(e,t=30){this.name=e,this._counter=0,this._samples=new Array(t)}record(e){null!=e&&(this._samples[++this._counter%this._samples.length]=e)}get median(){return this._samples.slice().sort(((e,t)=>e-t))[Math.floor(this._samples.length/2)]}get average(){return this._samples.reduce(((e,t)=>e+t),0)/this._samples.length}get last(){return this._samples[this._counter%this._samples.length]}}},42100:(e,t,r)=>{r.d(t,{s:()=>o});var s=r(50758),n=r(67676);class i{constructor(e,t){this._observers=e,this._observer=t}remove(){(0,n.Od)(this._observers,this._observer)}}class o{constructor(){this._observers=null,this.destroyed=!1}observe(e){if(this.destroyed||e.destroyed)return a;null==this._observers&&(this._observers=[]);const t=this._observers;let r=!1,s=!1;const n=t.length;for(let i=0;i<n;++i){const n=t[i];if(n.destroyed)s=!0;else if(n===e){r=!0;break}}return r||(t.push(e),s&&this._removeDestroyedObservers()),new i(t,e)}_removeDestroyedObservers(){const e=this._observers;if(!e||0===e.length)return;const t=e.length;let r=0;for(let s=0;s<t;++s){for(;s+r<t&&e[s+r].destroyed;)++r;if(r>0){if(!(s+r<t))break;e[s]=e[s+r]}}e.length=t-r}destroy(){if(this.destroyed)return;this.destroyed=!0;const e=this._observers;if(null!=e){for(const t of e)t.onCommitted();this._observers=null}}}const a=(0,s.kB)()},31263:(e,t,r)=>{r.d(t,{M9:()=>a,Wm:()=>l,kk:()=>o,s3:()=>s,x3:()=>c});var s,n,i=r(70586);(n=s||(s={}))[n.DEFAULTS=0]="DEFAULTS",n[n.COMPUTED=1]="COMPUTED",n[n.SERVICE=2]="SERVICE",n[n.PORTAL_ITEM=3]="PORTAL_ITEM",n[n.WEB_SCENE=4]="WEB_SCENE",n[n.WEB_MAP=5]="WEB_MAP",n[n.USER=6]="USER";const o=s.USER+1;function a(e){switch(e){case"defaults":return s.DEFAULTS;case"service":return s.SERVICE;case"portal-item":return s.PORTAL_ITEM;case"web-scene":return s.WEB_SCENE;case"web-map":return s.WEB_MAP;case"user":return s.USER;default:return null}}function c(e){switch(e){case s.DEFAULTS:return"defaults";case s.SERVICE:return"service";case s.PORTAL_ITEM:return"portal-item";case s.WEB_SCENE:return"web-scene";case s.WEB_MAP:return"web-map";case s.USER:return"user"}return(0,i.j0)(void 0)}function l(e){return c(e)}},90578:(e,t,r)=>{r.d(t,{p:()=>c});var s=r(75215),n=r(7628);const i=Object.prototype.toString;function o(e){const t="__accessorMetadata__"in e?(0,s.se)(e):e;return function(...e){if(e.push(t),"number"==typeof e[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return a.apply(this,e)}}function a(e,t,r,s){(0,n.Oe)(e,t).cast=s}function c(...e){if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===i.call(e[0])?o(e[0]):1===e.length&&"string"==typeof e[0]?function(e){return(t,r)=>{(0,n.Oe)(t,e).cast=t[r]}}(e[0]):void 0}},5600:(e,t,r)=>{r.d(t,{CJ:()=>l,Cb:()=>c,Eg:()=>u});var s=r(92604),n=r(75215),i=r(67723),o=r(7628),a=r(37697);function c(e={}){return(t,r)=>{if(t===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${t.name}.${r}. Accessor does not support static properties.`);const c=Object.getOwnPropertyDescriptor(t,r),l=(0,o.Oe)(t,r);c&&(c.get||c.set?(l.get=c.get||l.get,l.set=c.set||l.set):"value"in c&&("value"in e&&s.Z.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${r}" on "${t.constructor.name}" already defined in the metadata`,e),l.value=e.value=c.value)),null!=e.readOnly&&(l.readOnly=e.readOnly);const h=e.aliasOf;if(h){const e="string"==typeof h?h:h.source,t="string"==typeof h?null:!0===h.overridable;let s;l.dependsOn=[e],l.get=function(){let t=(0,i.U2)(this,e);if("function"==typeof t){s||(s=e.split(".").slice(0,-1).join("."));const r=(0,i.U2)(this,s);r&&(t=t.bind(r))}return t},l.readOnly||(l.set=t?function(e){this._override(r,e)}:function(t){(0,a.t)(this,e,t)})}const d=e.type,f=e.types;l.cast||(d?l.cast=function(e){let t=0,r=e;if((0,n.AY)(e))return(0,n.sY)(e);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],t++;const s=r;if((0,n.gB)(s))return 0===t?(0,n.i$)(s):(0,n.Iu)((0,n.i$)(s),t);if(1===t)return(0,n.rY)(s);if(t>1)return(0,n.di)(s,t);const i=e;return i.from?i.from:(0,n.se)(i)}(d):f&&(Array.isArray(f)?l.cast=(0,n.Ls)((0,n.N7)(f[0])):l.cast=(0,n.N7)(f))),(0,o.tz)(l,e),e.range&&(l.cast=u(l.cast,e.range))}}function l(e,t,r){const s=(0,o.Oe)(e,r);s.json||(s.json={});let n=s.json;return void 0!==t&&(n.origins||(n.origins={}),n.origins[t]||(n.origins[t]={}),n=n.origins[t]),n}function u(e,t){return r=>{let s=+e(r);return null!=t.step&&(s=Math.round(s/t.step)*t.step),null!=t.min&&(s=Math.max(t.min,s)),null!=t.max&&(s=Math.min(t.max,s)),s}}},41103:(e,t,r)=>{r.d(t,{M:()=>n});var s=r(31263);function n(e,t,r){t.keys().forEach((e=>{r.set(e,t.get(e),s.s3.DEFAULTS)}));const n=e.metadatas;Object.keys(n).forEach((t=>{e.internalGet(t)&&r.set(t,e.internalGet(t),s.s3.DEFAULTS)}))}},67723:(e,t,r)=>{r.d(t,{$z:()=>o,Gg:()=>c,U2:()=>a});var s=r(1153);function n(e,t){const r="?"===e[e.length-1]?e.slice(0,-1):e;if(null!=t.getItemAt||Array.isArray(t)){const e=parseInt(r,10);if(!isNaN(e))return Array.isArray(t)?t[e]:t.getItemAt(e)}const n=(0,s.vw)(t);return(0,s.b6)(n,r)?n.get(r):t[r]}function i(e,t,r){if(null==e)return e;const s=n(t[r],e);return!s&&r<t.length-1?void 0:r===t.length-1?s:i(s,t,r+1)}function o(e,t,r=0){return"string"!=typeof t||t.includes(".")?i(e,(0,s.NI)(t),r):n(t,e)}function a(e,t){return o(e,t)}function c(e,t){return void 0!==o(t,e)}},50549:(e,t,r)=>{r.d(t,{$:()=>h,i:()=>u});var s=r(67723),n=r(1153),i=r(53906);function o(e,t,r){if(!e||!e.read||!1===e.read.enabled||!e.read.source)return!1;const n=e.read.source;if("string"==typeof n){if(n===t)return!0;if(n.includes(".")&&0===n.indexOf(t)&&(0,s.Gg)(n,r))return!0}else for(const e of n){if(e===t)return!0;if(e.includes(".")&&0===e.indexOf(t)&&(0,s.Gg)(e,r))return!0}return!1}function a(e,t,r,s,n){let a=(0,i.HS)(t[r],n);(function(e){return e&&(!e.read||!1!==e.read.enabled&&!e.read.source)})(a)&&(e[r]=!0);for(const c of Object.getOwnPropertyNames(t))a=(0,i.HS)(t[c],n),o(a,r,s)&&(e[c]=!0)}function c(e,t,r,s){const n=r.metadatas,o=(0,i.hk)(n[t],"any",s),a=o&&o.default;if(void 0===a)return;const c="function"==typeof a?a.call(e,t,s):a;void 0!==c&&r.set(t,c)}const l={origin:"service"};function u(e,t,r=l){if(!t||"object"!=typeof t)return;const o=(0,n.vw)(e),u=o.metadatas,h={};for(const e of Object.getOwnPropertyNames(t))a(h,u,e,t,r);o.setDefaultOrigin(r.origin);for(const n of Object.getOwnPropertyNames(h)){const a=(0,i.HS)(u[n],r).read,c=a&&a.source;let l;l=c&&"string"==typeof c?(0,s.$z)(t,c):t[n],a&&a.reader&&(l=a.reader.call(e,l,t,r)),void 0!==l&&o.set(n,l)}if(!r||!r.ignoreDefaults){o.setDefaultOrigin("defaults");for(const t of Object.getOwnPropertyNames(u))h[t]||c(e,t,o,r)}o.setDefaultOrigin("user")}function h(e,t,r,s=l){const n={...s,messages:[]};r(n),n.messages?.forEach((t=>{"warning"!==t.type||e.loaded?s&&s.messages&&s.messages.push(t):e.loadWarnings.push(t)}))}},37697:(e,t,r)=>{r.d(t,{t:()=>o});var s=r(20102),n=r(80442),i=(r(92604),r(67723));function o(e,t,r){if(e&&t)if("object"==typeof t)for(const r of Object.getOwnPropertyNames(t))o(e,r,t[r]);else{if(t.includes(".")){const s=t.split("."),n=s.splice(s.length-1,1)[0];return void o((0,i.U2)(e,s),n,r)}const a=e.__accessor__;null!=a&&function(e,t){if((0,n.Z)("esri-unknown-property-errors")&&!function(e,t){return null!=t.metadatas[e]}(e,t))throw new s.Z("set:unknown-property",function(e,t){return"setting unknown property '"+e+"' on instance of "+t.host.declaredClass}(e,t))}(t,a),e[t]=r}}},38805:(e,t,r)=>{r.d(t,{M:()=>s});class s{constructor(e){this._accessed=[],this._handles=[],this._observerObject=new n(e),i.register(this,new WeakRef(this._observerObject),this)}destroy(){i.unregister(this._observerObject),this._accessed.length=0,this._observerObject?.destroy(),this.clear()}onObservableAccessed(e){const t=this._accessed;t.includes(e)||t.push(e)}onTrackingEnd(){const e=this._handles,t=this._accessed,r=this._observerObject;for(let s=0;s<t.length;++s)e.push(t[s].observe(r));t.length=0}clear(){const e=this._handles;for(let t=0;t<e.length;++t)e[t].remove();e.length=0}}class n{constructor(e){this._notify=e,this._invalidCount=0,this.destroyed=!1}onInvalidated(){this._invalidCount++}onCommitted(){if(this.destroyed)return;const e=this._invalidCount;if(1===e)return this._invalidCount=0,void this._notify();this._invalidCount=e>0?e-1:0}destroy(){this.destroyed=!0,this._notify=o}}const i=new FinalizationRegistry((e=>{e.deref()?.destroy()}));function o(){}},87538:(e,t,r)=>{r.d(t,{EH:()=>l,U5:()=>a,Xz:()=>c});var s=r(58971),n=r(38805);let i=!1;const o=[];function a(e,t){let r=new n.M((function n(){if(!r||a)return;if(i)return void u(n);const c=o;r.clear(),i=!0,a=!0,o=(0,s.LJ)(r,e),a=!1,i=!1,t(o,c),h()})),o=null,a=!1;return a=!0,o=(0,s.LJ)(r,e),a=!1,{remove:function(){r&&(r.destroy(),r=null,o=null)}}}function c(e,t){let r=new n.M((function(){t(i,o)})),i=null;function o(){return r?(r.clear(),i=(0,s.LJ)(r,e),i):null}return o(),{remove:function(){r&&(r.destroy(),r=null),i=null}}}function l(e){let t=new n.M((function n(){t&&!r&&(i?u(n):(t.clear(),i=!0,r=!0,(0,s.LJ)(t,e),r=!1,i=!1,h()))})),r=!1;return r=!0,(0,s.LJ)(t,e),r=!1,{remove:function(){t&&(t.destroy(),t=null)}}}function u(e){o.includes(e)||o.unshift(e)}function h(){for(;o.length;)o.pop()()}},26258:(e,t,r)=>{r.d(t,{BT:()=>b,YP:()=>N,aQ:()=>E});var s=r(3894),n=r(22974),i=r(70586),o=r(71143);class a extends o.Z{constructor(){super(...arguments),this._set=new Set}destroy(){super.destroy(),this._set=(0,i.wN)(this._set)}acquire(...e){const t=super.acquire(...e);return this._set.delete(t),t}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e))}_dispose(e){this._set.delete(e),super._dispose(e)}}var c,l,u=r(1654),h=r(99001),d=r(67723),f=r(87538),p=r(1153);(l=c||(c={}))[l.Untracked=0]="Untracked",l[l.Tracked=1]="Tracked";class _{constructor(){this.uid=(0,h.D)(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null}static acquireUntracked(e,t,r,s,i){return this.pool.acquire(c.Untracked,e,t,r,s,i,n.fS)}static acquireTracked(e,t,r,s){return this.pool.acquire(c.Tracked,e,t,r,null,null,s)}notify(e,t){this.type===c.Untracked?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t,void 0,void 0)}acquire(e,t,r,s,n,i,o){this.uid=(0,h.D)(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=s,this.target=n,this.path=i,this.equals=o}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=(0,h.D)(),this.removed=!0}}_.pool=new a(_);const g=new s.Z,v=new Set;let y;function m(e){v.delete(e),v.add(e),y||(y=(0,u.Os)(w))}function O(e){if(e.removed)return;const t=e.oldValue,r=e.getValue();e.equals(t,r)||(e.oldValue=r,e.notify(r,t))}function b(e){for(const t of v.values())t.target===e&&(t.removed=!0)}function w(){let e=10;for(;y&&e--;){y=null;const e=A(),t=g.acquire();for(const r of e){const e=r.uid;O(r),e===r.uid&&r.removed&&t.push(r)}for(const e of v)e.removed&&(t.push(e),v.delete(e));for(const e of t)_.pool.release(e);g.release(t),g.release(e),S.forEach((e=>e()))}}function A(){const e=g.acquire();e.length=v.size;let t=0;for(const r of v)e[t]=r,++t;return v.clear(),e}const S=new Set;function N(e,t,r,s=!1){return!e.__accessor__||e.__accessor__.destroyed?{remove(){}}:s?function(e,t,r){const s=(0,p.Qc)(e,t,r,((e,t,r)=>{let i=!1;return(0,f.U5)((()=>(0,d.$z)(e,t)),((o,a)=>{e.__accessor__.destroyed?s.remove():i||(i=!0,(0,n.fS)(a,o)||r.call(e,o,a,t,e),i=!1)}))}));return s}(e,t,r):function(e,t,r){let s=(0,p.Qc)(e,t,r,((e,t,r)=>{let n,i,o=(0,f.Xz)((()=>(0,d.$z)(e,t)),((o,a)=>{e.__accessor__.destroyed||n&&n.uid!==i?s.remove():(n||(n=_.acquireUntracked(o,r,a,e,t),i=n.uid),m(n))}));return{remove:(0,p.IH)((()=>{o.remove(),n&&(n.uid!==i||n.removed||(n.removed=!0,m(n)),n=null),s=o=null}))}}));return s}(e,t,r)}function E(e,t,r=!1,s=n.y7){return r?function(e,t,r){let s=!1;return(0,f.U5)(e,((e,n)=>{s||(s=!0,r(n,e)||t(e,n),s=!1)}))}(e,t,s):function(e,t,r){let s,n,i=(0,f.Xz)(e,((e,o)=>{s&&s.uid!==n?i.remove():(s||(s=_.acquireTracked(e,t,o,r),n=s.uid),m(s))}));return{remove:(0,p.IH)((()=>{i.remove(),s&&(s.uid!==n||s.removed||(s.removed=!0,m(s)),s=null),i=null}))}}(e,t,s)}},76169:(e,t,r)=>{r.d(t,{c:()=>d,d:()=>h});var s=r(67676),n=r(20102),i=r(92604),o=r(31263),a=r(1153),c=r(53906);function l(e,t,r,s,n){const i={};return t.write?.writer?.call(e,s,i,r,n),i}function u(e,t,r,a,c,l){if(!a||!a.write)return!1;const u=e.get(r);if(!c&&a.write.overridePolicy){const t=a.write.overridePolicy.call(e,u,r,l??void 0);void 0!==t&&(c=t)}if(c||(c=a.write),!c||!1===c.enabled)return!1;if((null===u&&!c.allowNull&&!c.writerEnsuresNonNull||void 0===u)&&c.isRequired){const t=new n.Z("web-document-write:property-required",`Missing value for required property '${r}' on '${e.declaredClass}'`,{propertyName:r,target:e});return t&&l&&l.messages?l.messages.push(t):t&&!l&&i.Z.getLogger("esri.core.accessorSupport.write").error(t.name,t.message),!1}return!(void 0===u||null===u&&!c.allowNull&&!c.writerEnsuresNonNull||(!t.store.multipleOriginsSupported||t.store.originOf(r)===o.s3.DEFAULTS)&&function(e,t,r,n,i){const o=n.default;if(void 0===o)return!1;if(null!=n.defaultEquals)return n.defaultEquals(i);if("function"==typeof o){if(Array.isArray(i)){const n=o.call(e,t,r??void 0);return(0,s.fS)(n,i)}return!1}return o===i}(e,r,l,a,u)||!c.ignoreOrigin&&l&&l.origin&&t.store.multipleOriginsSupported&&t.store.originOf(r)<(0,o.M9)(l.origin))}function h(e,t,r,s){const n=(0,a.vw)(e),i=n.metadatas,o=(0,c.Ah)(i[t],s);return!!o&&u(e,n,t,o,r,s)}function d(e,t,r){if(e&&"function"==typeof e.toJSON&&(!e.toJSON.isDefaultToJSON||!e.write))return(0,a.TS)(t,e.toJSON(r));const s=(0,a.vw)(e),n=s.metadatas;for(const i in n){const h=(0,c.Ah)(n[i],r);if(!u(e,s,i,h,void 0,r))continue;const d=e.get(i),f=l(e,h,h.write&&"string"==typeof h.write.target?h.write.target:i,d,r);Object.keys(f).length>0&&(t=(0,a.TS)(t,f),r?.resources?.pendingOperations?.length&&r.resources.pendingOperations.push(Promise.all(r.resources.pendingOperations).then((()=>(0,a.TS)(t,f,(()=>"replace-arrays"))))),r&&r.writtenProperties&&r.writtenProperties.push({target:e,propName:i,oldOrigin:(0,o.Wm)(s.store.originOf(i)),newOrigin:r.origin}))}return t}},66374:(e,t,r)=>{function s(e){const t=[];return function*(){yield*t;for(const r of e)t.push(r),yield r}}function n(e,t){for(const r of e)if(null!=r&&t(r))return r}function i(e){return null!=e&&"function"==typeof e[Symbol.iterator]}r.d(t,{Fs:()=>s,TW:()=>i,sE:()=>n})},35454:(e,t,r)=>{r.d(t,{X:()=>n,w:()=>i});var s=r(78286);class n{constructor(e,t={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=e,this._options=t,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(e),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=e=>this.fromJSON(e),this.write=(e,t,r)=>{const n=this.toJSON(e);void 0!==n&&(0,s.RB)(r,n,t)},this.write.isJSONMapWriter=!0}toJSON(e){if(null==e)return null;if(this._apiToJSON.hasOwnProperty(e)){const t=this._apiToJSON[e];return this._options.useNumericKeys?+t:t}return this._options.ignoreUnknown?void 0:e}fromJSON(e){return null!=e&&this._jsonToAPI.hasOwnProperty(e)?this._jsonToAPI[e]:this._options.ignoreUnknown?void 0:e}_invertMap(e){const t={};for(const r in e)t[e[r]]=r;return t}_getKeysSorted(e){const t=[];for(const r in e)t.push(r);return t.sort(),t}}function i(){return function(e,t){return new n(e,{ignoreUnknown:!0,...t})}}},1654:(e,t,r)=>{r.d(t,{MU:()=>O,Os:()=>g});var s=r(70586),n=r(41213),i=r(54790),o=r(44553),a=r(95330),c=r(76882);class l{constructor(e){this.callback=e,this.isActive=!0}remove(){this.isActive=!1}}let u=0;const h={time:(0,c.HA)(0),deltaTime:(0,c.HA)(0),elapsedFrameTime:(0,c.HA)(0),frameDuration:(0,c.HA)(0)},d=["prepare","preRender","render","postRender","update","finish"],f=[],p=new o.Z,_={frameTasks:p,willDispatch:!1,clearFrameTasks:function(e=!1){p.forAll((e=>{e.removed=!0})),e&&y()},dispatch:m,executeFrameTasks:function(e){const t=(0,c.HA)(e-u);u=e;const r=1e3/60,s=Math.max(0,t-r);h.time=e,h.frameDuration=(0,c.HA)(r-s);for(let r=0;r<d.length;r++){const s=performance.now(),n=d[r];p.forAll((s=>{s.paused||s.removed||(0===r&&s.ticks++,s.phases[n]&&(h.elapsedFrameTime=(0,c.HA)(performance.now()-e),h.deltaTime=0===s.ticks?(0,c.HA)(0):t,s.phases[n]?.call(s,h)))})),b[r].record(performance.now()-s)}y(),w.record(performance.now()-e)}};function g(e){const t=new l(e);return f.push(t),_.willDispatch||(_.willDispatch=!0,(0,n.Y)(m)),t}const v=new o.Z;function y(){p.forAll((e=>{e.removed&&v.push(e)})),p.removeUnorderedMany(v.data,v.length),v.clear()}function m(){for(;f.length;){const e=(0,s.j0)(f.shift());e.isActive&&e.callback()}_.willDispatch=!1}function O(e=1,t){const r=(0,a.hh)(),s=()=>{(0,a.Hc)(t)?r.reject((0,a.zE)()):0===e?r():(--e,(0,n.Y)((()=>s())))};return s(),r.promise}const b=d.map((e=>new i.Z(e))),w=new i.Z("total")},76882:(e,t,r)=>{function s(e){return e}r.d(t,{HA:()=>s})},99001:(e,t,r)=>{r.d(t,{D:()=>n});let s=0;function n(){return++s}}}]);