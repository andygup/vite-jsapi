import{dG as d}from"./index-6eb28d6b.js";const c=-3;var _;(function(a){a[a.ALL=0]="ALL",a[a.SOME=1]="SOME"})(_||(_={}));class v{constructor(e,t,s){this.name=e,this._storage=t,this.id=f+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get sizeAll(){return this._storage.size}resetHitRate(){this._hit=this._miss=0}put(e,t,s,i=0){this._storage.put(this,e,t,s,i)}get(e){const t=this._storage.get(this,e);return t===void 0?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this,e);return t===void 0?++this._miss:++this._hit,t}updateSize(e,t,s){this._storage.updateSize(this,e,t,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class g{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new d,this._users=new d}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimits()}put(e,t,s,i,o){t=e.id+t;const r=this._db.get(t);if(r&&(this._size-=r.size,e.size-=r.size,this._db.delete(t),r.entry!==s&&this._notifyRemove(t,r.entry,_.ALL)),i>this._maxSize)return void this._notifyRemove(t,s,_.ALL);if(s===void 0)return void console.warn("Refusing to cache undefined entry ");if(!i||i<0)return void console.warn("Refusing to cache entry with invalid size "+i);const h=1+Math.max(o,c)-c;this._db.set(t,{entry:s,size:i,lifetime:h,lives:h}),this._size+=i,e.size+=i,this._checkSizeLimits()}updateSize(e,t,s,i){t=e.id+t;const o=this._db.get(t);if(o&&o.entry===s){for(this._size-=o.size,e.size-=o.size;i>this._maxSize;){const r=this._notifyRemove(t,s,_.SOME);if(!(r!=null&&r>0))return void this._db.delete(t);i=r}o.size=i,this._size+=i,e.size+=i,this._checkSizeLimits()}}pop(e,t){t=e.id+t;const s=this._db.get(t);if(s)return this._size-=s.size,e.size-=s.size,this._db.delete(t),++this._hit,s.entry;++this._miss}get(e,t){t=e.id+t;const s=this._db.get(t);if(s!==void 0)return this._db.delete(t),s.lives=s.lifetime,this._db.set(t,s),++this._hit,s.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach((r,h)=>{const n=r.lifetime;s[n]=(s[n]||0)+r.size,this._users.forAll(z=>{const{id:m,name:u}=z;if(h.startsWith(m)){const l=t[u]||0;t[u]=l+r.size}})});const i={};this._users.forAll(r=>{const h=r.name;if("hitRate"in r&&typeof r.hitRate=="number"&&!isNaN(r.hitRate)&&r.hitRate>0){const n=t[h]||0;t[h]=n,i[h]=Math.round(100*r.hitRate)+"%"}else i[h]="0%"});const o=Object.keys(t);o.sort((r,h)=>t[h]-t[r]),o.forEach(r=>e[r]=Math.round(t[r]/2**20)+"MB / "+i[r]);for(let r=s.length-1;r>=0;--r){const h=s[r];h&&(e["Priority "+(r+c-1)]=Math.round(h/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){const t=e.id;this._db.forEach((s,i)=>{i.startsWith(t)&&(this._size-=s.size,this._db.delete(i),this._notifyRemove(i,s.entry,_.ALL))}),e.size=0}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,_.ALL)),this._users.forEach(e=>e.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,s){let i;return this._removeFuncs.some(o=>{if(e.startsWith(o[0])){const r=o[1](t,s);return typeof r=="number"&&(i=r),!0}return!1}),i}_checkSizeLimits(){if(this._size>this._maxSize){for(const[e,t]of this._db)if(this._purgeItem(e,t),this._size<=.9*this.maxSize)return}this._users.forEach(e=>{if(e.maxSize>0&&e.size>e.maxSize){for(const[t,s]of this._db)if(t.startsWith(e.id)&&(this._purgeItem(t,s,e),e.size<=.9*e.maxSize))return}})}_purgeItem(e,t,s=this._users.find(i=>e.startsWith(i.id))){if(this._db.delete(e),t.lives<=1){this._size-=t.size,s&&(s.size-=t.size);const i=this._notifyRemove(e,t.entry,_.SOME);i!=null&&i>0&&(this._size+=i,s&&(s.size+=i),t.lives=t.lifetime,t.size=i,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let f=0;class p{constructor(e,t){this._storage=new g,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t,s=1){this._storage.put(this,e,t,s,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}export{p as e,g as h,v as i};
