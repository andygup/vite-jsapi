import{bp as b,fO as O,cF as L,fP as D,L as T,fQ as q,s as u,au as x,D as $,J as N,bU as P,d as S,fR as C,dx as E,bx as U,dX as J,ae as v,af as y,ag as j,bh as M,bV as k,$ as F,ai as I,aj as R}from"./index-175d32d0.js";import{E as B}from"./ByteSizeUnit-d4757d40.js";import{e as K}from"./LRUCache-05c2e0c8.js";const W={type:b,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:G}}}}};function G(e,i,a,t){if(!e)return null;const{minScale:l,maxScale:n,minLOD:o,maxLOD:r}=i;if(o!=null&&r!=null)return t&&t.ignoreMinMaxLOD?b.fromJSON(e):b.fromJSON({...e,lods:e.lods.filter(({level:h})=>h!=null&&h>=o&&h<=r)});if(l!==0&&n!==0){const h=m=>Math.round(1e4*m)/1e4,s=l?h(l):1/0,c=n?h(n):-1/0;return b.fromJSON({...e,lods:e.lods.filter(m=>{const p=h(m.scale);return p<=s&&p>=c})})}return b.fromJSON(e)}function H(e,i=!1){return e<=O?i?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(i){this._validateJSON(i);const{location:a,data:t}=i;this.location=Object.freeze(L(a));const l=this.location.width,n=this.location.height;let o=!0,r=!0;const h=Math.ceil(l*n/32),s=H(h);let c=0;for(let m=0;m<t.length;m++){const p=m%32;t[m]?(r=!1,s[c]|=1<<p):o=!1,p===31&&++c}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+D(s))}getAvailability(i,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const t=(i-this.location.top)*this.location.width+(a-this.location.left),l=t%32,n=t>>5,o=this._availability;return n<0||n>o.length?"unknown":o[n]&1<<l?"available":"unavailable"}static fromDefinition(i,a){const t=i.service.request||T,{row:l,col:n,width:o,height:r}=i,h={query:{f:"json"}};return a=a?{...h,...a}:h,t(Q(i),a).then(s=>s.data).catch(s=>{if(s&&s.details&&s.details.httpStatus===422)return{location:{top:l,left:n,width:o,height:r},valid:!0,data:q(o*r,0)};throw s}).then(s=>{if(s.location&&(s.location.top!==l||s.location.left!==n||s.location.width!==o||s.location.height!==r))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:s,definition:{top:l,left:n,width:o,height:r}});return w.fromJSON(s)})}static fromJSON(i){return Object.freeze(new w(i))}_validateJSON(i){if(!i||!i.location)throw new u("tilemap:missing-location","Location missing from tilemap response");if(i.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!i.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(i.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(i.data.length!==i.location.width*i.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function z(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function Q(e){let i;if(e.service.type==="vector-tile")i=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const t=e.service.tileServers;i=`${t&&t.length?t[e.row%t.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const a=e.service.query;return a&&(i=`${i}?${a}`),i}var d;let f=d=class extends x(R){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*B.MEGABYTES,this.request=T,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new K(this.cacheByteSize),this.addHandles([$(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition()),$(()=>{var e,i;return(i=(e=this.layer)==null?void 0:e.tileInfo)==null?void 0:i.lods},e=>this._initializeAvailableLevels(e),M)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(N.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,i,a,t){if(!this._availableLevels[e])return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,i,a,l);if(n)return Promise.resolve(n);const o=t&&t.signal;return t={...t,signal:null},new Promise((r,h)=>{P(o,()=>h(k()));const s=z(l);let c=this._pendingTilemapRequests[s];if(!c){c=w.fromDefinition(l,t).then(p=>(this._tilemapCache.put(s,p,p.byteSize),p));const m=()=>delete this._pendingTilemapRequests[s];this._pendingTilemapRequests[s]=c,c.then(m,m)}c.then(r,h)})}getAvailability(e,i,a){if(!this._availableLevels[e])return"unavailable";const t=this._tilemapFromCache(e,i,a,this._tmpTilemapDefinition);return t?t.getAvailability(i,a):"unknown"}fetchAvailability(e,i,a,t){return this._availableLevels[e]?this.fetchTilemap(e,i,a,t).catch(l=>l).then(l=>{if(l instanceof w){const n=l.getAvailability(i,a);if(n==="unavailable")throw new u("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a});return n}if(S(l))throw l;return"unknown"}):Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,i,a,t,l){t.level=e,t.row=i,t.col=a;const n=this.layer.tileInfo;n.updateTileInfo(t);const o=this.fetchAvailability(e,i,a,l).catch(r=>{if(S(r))throw r;if(n.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t);throw r});return this._fetchAvailabilityUpsamplePrefetch(t.id,e,i,a,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,i,a,t,l,n){if(!this._prefetchingEnabled||e==null)return;const o=`prefetch-${e}`;if(this.handles.has(o))return;const r=new AbortController;n.then(()=>r.abort(),()=>r.abort());let h=!1;const s={remove(){h||(h=!0,r.abort())}};if(this.handles.add(s,o),await C(10,r.signal).catch(()=>{}),h||(h=!0,this.handles.remove(o)),E(r))return;const c=new F(e,i,a,t),m={...l,signal:r.signal},p=this.layer.tileInfo;for(let A=0;d._prefetches.length<d._maxPrefetch&&p.upsampleTile(c);++A){const g=this.fetchAvailability(c.level,c.row,c.col,m);d._prefetches.push(g);const _=()=>{d._prefetches.removeUnordered(g)};g.then(_,_)}}_initializeTilemapDefinition(){var t;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:U({...e.query,...a,token:i??((t=e.query)==null?void 0:t.token)}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,i,a,t){t.level=e,t.row=i-i%this.size,t.col=a-a%this.size;const l=z(t);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(i=>this._availableLevels[i.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(i){e._prefetchingEnabled=i},hasTilemap:(i,a,t)=>!!e._tilemapFromCache(i,a,t,e._tmpTilemapDefinition)}}};f._maxPrefetch=4,f._prefetches=new J({initialSize:d._maxPrefetch}),v([y({constructOnly:!0,type:Number})],f.prototype,"levels",void 0),v([j("levels")],f.prototype,"castLevels",null),v([y({readOnly:!0,type:Number})],f.prototype,"size",null),v([y({constructOnly:!0,type:Number})],f.prototype,"cacheByteSize",void 0),v([y({constructOnly:!0})],f.prototype,"layer",void 0),v([y({constructOnly:!0})],f.prototype,"request",void 0),f=d=v([I("esri.layers.support.TilemapCache")],f);export{G as n,W as r,f as z};
