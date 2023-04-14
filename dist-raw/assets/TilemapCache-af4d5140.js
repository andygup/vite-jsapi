import{bp as y,fM as I,cE as x,fN as U,r as z,fO as D,E as u,au as C,A as T,L as P,bT as N,i as S,fP as O,dw as E,bx as q,dW as M,ae as b,af as _,ag as R,bh as J,bU as k,$ as B,ai as F,aj as H}from"./index-468a9268.js";import{B as K}from"./ByteSizeUnit-c0a244d3.js";import{L as W}from"./LRUCache-d3406418.js";const j={type:y,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:Y}}}}};function Y(l,e,i,a){if(!l)return null;const{minScale:t,maxScale:s,minLOD:c,maxLOD:h}=e;if(c!=null&&h!=null)return a&&a.ignoreMinMaxLOD?y.fromJSON(l):y.fromJSON({...l,lods:l.lods.filter(({level:n})=>n!=null&&n>=c&&n<=h)});if(t!==0&&s!==0){const n=o=>Math.round(o*1e4)/1e4,r=t?n(t):1/0,p=s?n(s):-1/0;return y.fromJSON({...l,lods:l.lods.filter(o=>{const f=n(o.scale);return f<=r&&f>=p})})}return y.fromJSON(l)}function G(l,e=!1){return l<=I?e?new Array(l).fill(0):new Array(l):new Uint32Array(l)}class w{constructor(e){this._validateJSON(e);const{location:i,data:a}=e;this.location=Object.freeze(x(i));const t=this.location.width,s=this.location.height;let c=!0,h=!0;const n=Math.ceil(t*s/32),r=G(n);let p=0;for(let o=0;o<a.length;o++){const f=o%32;a[o]?(h=!1,r[p]|=1<<f):c=!1,f===31&&++p}h?(this._availability="unavailable",this.byteSize=40):c?(this._availability="available",this.byteSize=40):(this._availability=r,this.byteSize=40+U(r))}getAvailability(e,i){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const a=(e-this.location.top)*this.location.width+(i-this.location.left),t=a%32,s=a>>5,c=this._availability;return s<0||s>c.length?"unknown":c[s]&1<<t?"available":"unavailable"}static fromDefinition(e,i){const a=e.service.request||z,{row:t,col:s,width:c,height:h}=e,n={query:{f:"json"}};return i?i={...n,...i}:i=n,a(Q(e),i).then(r=>r.data).catch(r=>{if(r&&r.details&&r.details.httpStatus===422)return{location:{top:t,left:s,width:c,height:h},valid:!0,data:(()=>D(c*h,0))()};throw r}).then(r=>{if(r.location&&(r.location.top!==t||r.location.left!==s||r.location.width!==c||r.location.height!==h))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:r,definition:{top:t,left:s,width:c,height:h}});return w.fromJSON(r)})}static fromJSON(e){return Object.freeze(new w(e))}_validateJSON(e){if(!e||!e.location)throw new u("tilemap:missing-location","Location missing from tilemap response");if(e.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function $(l){return`${l.level}/${l.row}/${l.col}/${l.width}/${l.height}`}function Q(l){let e;if(l.service.type==="vector-tile")e=`${l.service.url}/tilemap/${l.level}/${l.row}/${l.col}/${l.width}/${l.height}`;else{const a=l.service.tileServers;e=`${a&&a.length?a[l.row%a.length]:l.service.url}/tilemap/${l.level}/${l.row}/${l.col}/${l.width}/${l.height}`}const i=l.service.query;return i&&(e=`${e}?${i}`),e}var v;let m=v=class extends C(H){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*K.MEGABYTES,this.request=z,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new W(this.cacheByteSize),this.addHandles([T(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition()),T(()=>{var e,i;return(i=(e=this.layer)==null?void 0:e.tileInfo)==null?void 0:i.lods},e=>this._initializeAvailableLevels(e),J)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(P.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,i,a,t){if(!this._availableLevels[e])return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,c=this._tilemapFromCache(e,i,a,s);if(c)return Promise.resolve(c);const h=t&&t.signal;return t={...t,signal:null},new Promise((n,r)=>{N(h,()=>r(k()));const p=$(s);let o=this._pendingTilemapRequests[p];if(!o){o=w.fromDefinition(s,t).then(d=>(this._tilemapCache.put(p,d,d.byteSize),d));const f=()=>delete this._pendingTilemapRequests[p];this._pendingTilemapRequests[p]=o,o.then(f,f)}o.then(n,r)})}getAvailability(e,i,a){if(!this._availableLevels[e])return"unavailable";const t=this._tilemapFromCache(e,i,a,this._tmpTilemapDefinition);return t?t.getAvailability(i,a):"unknown"}fetchAvailability(e,i,a,t){return this._availableLevels[e]?this.fetchTilemap(e,i,a,t).catch(s=>s).then(s=>{if(s instanceof w){const c=s.getAvailability(i,a);if(c==="unavailable")throw new u("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a});return c}if(S(s))throw s;return"unknown"}):Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,i,a,t,s){t.level=e,t.row=i,t.col=a;const c=this.layer.tileInfo;c.updateTileInfo(t);const h=this.fetchAvailability(e,i,a,s).catch(n=>{if(S(n))throw n;if(c.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t);throw n});return this._fetchAvailabilityUpsamplePrefetch(t.id,e,i,a,s,h),h}async _fetchAvailabilityUpsamplePrefetch(e,i,a,t,s,c){if(!this._prefetchingEnabled||e==null)return;const h=`prefetch-${e}`;if(this.handles.has(h))return;const n=new AbortController;c.then(()=>n.abort(),()=>n.abort());let r=!1;const p={remove(){r||(r=!0,n.abort())}};if(this.handles.add(p,h),await O(10,n.signal).catch(()=>{}),r||(r=!0,this.handles.remove(h)),E(n))return;const o=new B(e,i,a,t),f={...s,signal:n.signal},d=this.layer.tileInfo;for(let L=0;v._prefetches.length<v._maxPrefetch&&d.upsampleTile(o);++L){const g=this.fetchAvailability(o.level,o.row,o.col,f);v._prefetches.push(g);const A=()=>{v._prefetches.removeUnordered(g)};g.then(A,A)}}_initializeTilemapDefinition(){var t;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:q({...e.query,...a,token:i??((t=e.query)==null?void 0:t.token)}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,i,a,t){t.level=e,t.row=i-i%this.size,t.col=a-a%this.size;const s=$(t);return this._tilemapCache.get(s)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(i=>this._availableLevels[i.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(i){e._prefetchingEnabled=i},hasTilemap(i,a,t){return!!e._tilemapFromCache(i,a,t,e._tmpTilemapDefinition)}}}};m._maxPrefetch=4;m._prefetches=new M({initialSize:v._maxPrefetch});b([_({constructOnly:!0,type:Number})],m.prototype,"levels",void 0);b([R("levels")],m.prototype,"castLevels",null);b([_({readOnly:!0,type:Number})],m.prototype,"size",null);b([_({constructOnly:!0,type:Number})],m.prototype,"cacheByteSize",void 0);b([_({constructOnly:!0})],m.prototype,"layer",void 0);b([_({constructOnly:!0})],m.prototype,"request",void 0);m=v=b([F("esri.layers.support.TilemapCache")],m);export{m as T,Y as r,j as s};
