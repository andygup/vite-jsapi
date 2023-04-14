import{L as q,E as U,h7 as H,i6 as X,du as _,bx as Y,r as S,t as V,ba as F,y as Z,i as ee,cH as A,az as te,bT as re,dw as se,cE as b,hO as j,es as L,bf as z,bW as k,i7 as ie,i4 as Q,i5 as K,e3 as W,e4 as oe,i8 as G,K as le,hr as ae,bp as D,Z as T,i9 as ne,ia as ue,bo as C,F as ce,ae as p,af as y,bt as pe,bG as ye,bF as he,ai as fe,a$ as de}from"./index-468a9268.js";import{M as me}from"./MultiOriginJSONSupport-401b6783.js";import{A as ge}from"./APIKeyMixin-0e36183f.js";import{A as Ae}from"./ArcGISCachedService-c8166cf7.js";import{A as Se}from"./ArcGISService-3a9fd22b.js";import{B as we}from"./BlendLayer-3dc4b03d.js";import{C as xe}from"./CustomParametersMixin-dd84a15e.js";import{O as _e}from"./OperationalLayer-22d46980.js";import{P as be}from"./PortalLayer-4b72e3f9.js";import{S as ve}from"./ScaleRangeLayer-58703611.js";import{r as Ie,T as Ue}from"./TilemapCache-af4d5140.js";import{c as Te}from"./jsonContext-486eeec0.js";import{S as Re}from"./StyleRepository-9bc87e1c.js";import"./jsonUtils-e00c5139.js";import"./parser-0c644652.js";import"./_commonjsHelpers-725317a4.js";import"./commonProperties-99999309.js";import"./ElevationInfo-3032ca55.js";import"./lengthUtils-edd0ce65.js";import"./portalItemUtils-a011a0ff.js";import"./ByteSizeUnit-c0a244d3.js";import"./LRUCache-d3406418.js";import"./MemCache-3df47c80.js";import"./StyleDefinition-edaaf36e.js";import"./enums-eb6e4255.js";import"./enums-977a0ba8.js";import"./enums-08489827.js";import"./VertexElementDescriptor-24e04d97.js";import"./colorUtils-6f72410e.js";import"./GeometryUtils-26dde58c.js";import"./definitions-3f56d206.js";let v=null;function Pe(s){if(v)return v;const e={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return v=new Promise(t=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,t(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,t(!1)},r.src="data:image/webp;base64,"+e[s]}),v}const B=1.15;class N{constructor(e,t){this._spriteSource=e,this._maxTextureSize=t,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",e.type==="url"&&e.spriteFormat&&(this._spriteImageFormat=e.spriteFormat),e.pixelRatio&&(this.devicePixelRatio=e.pixelRatio),this.baseURL=e.spriteUrl}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData?this._spritesData[e]:null}async load(e){if(!this.baseURL){this.loadStatus="failed";return}this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}async _loadSprites(e){this._isRetina=this.devicePixelRatio>B;const{width:t,height:r,data:i,json:l}=await this._getSpriteData(this._spriteSource,e),o=Object.keys(l);if(!o||o.length===0||!i){this._spritesData=this.image=null,this.width=this.height=0;return}this._spritesData=l,this.width=t,this.height=r;const a=Math.max(this._maxTextureSize,4096);if(t>a||r>a){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${a} pixels}`;throw q.getLogger("esri.layers.support.SpriteSource").error(u),new U("SpriteSource",u)}let n;for(let u=0;u<i.length;u+=4)n=i[u+3]/255,i[u]=i[u]*n,i[u+1]=i[u+1]*n,i[u+2]=i[u+2]*n;this.image=i}async _getSpriteData(e,t){if(e.type==="image"){let h,d;if(this.devicePixelRatio<B){if(!e.spriteSource1x)throw new U("SpriteSource","no image data provided for low resolution sprites!");h=e.spriteSource1x.image,d=e.spriteSource1x.json}else{if(!e.spriteSource2x)throw new U("SpriteSource","no image data provided for high resolution sprites!");h=e.spriteSource2x.image,d=e.spriteSource2x.json}return"width"in h&&"height"in h&&"data"in h&&(H(h.data)||X(h.data))?{width:h.width,height:h.height,data:new Uint8Array(h.data),json:d}:{...$(h),json:d}}const r=_(this.baseURL),i=r.query?"?"+Y(r.query):"",l=this._isRetina?"@2x":"",o=`${r.path}${l}.${this._spriteImageFormat}${i}`,a=`${r.path}${l}.json${i}`,[n,u]=await Promise.all([S(a,t),S(o,{responseType:"image",...t})]),f=u.data;return{...$(f),json:n.data}}}function $(s){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=s.width,e.height=s.height,t.drawImage(s,0,0,s.width,s.height);const r=t.getImageData(0,0,s.width,s.height);return{width:s.width,height:s.height,data:new Uint8Array(r.data)}}class Le{constructor(e){this.url=e}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=S(this.url).then(e=>e.data.index)),this._tileIndexPromise}async dataKey(e,t){const r=await this.fetchTileIndex();return V(t),this._getIndexedDataKey(r,e)}_getIndexedDataKey(e,t){const r=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;i.level!==0;)i=new F(i.level-1,i.row>>1,i.col>>1,i.world),r.push(i);let l=e,o=r.pop(),a,n;if(l===1)return o;for(;r.length;)if(a=r.pop(),n=(a.col&1)+((a.row&1)<<1),l){if(l[n]===0){o=null;break}if(l[n]===1){o=a;break}o=a,l=l[n]}return o}}class De{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}destroy(){this._tilemap=Z(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=S(this._tileIndexUrl,{query:{...e==null?void 0:e.query}}).then(t=>t.data.index)),this._tileIndexPromise}dataKey(e,t){const{level:r,row:i,col:l}=e,o=new F(e);return this._tilemap.fetchAvailabilityUpsample(r,i,l,o,t).then(()=>(o.world=e.world,o)).catch(a=>{if(ee(a))throw a;return null})}}class Me{constructor(e){this._tileUrl=e,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(e){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const t=this._abortOptions;return t.push(e),re(e,()=>{t.every(r=>se(r))&&this._abortController.abort()}),this._promise.then(r=>b(r))}async _makeRequest(e,t){const{data:r}=await S(e,{responseType:"array-buffer",signal:t});return r}}const R=new Map;function Ee(s,e,t,r,i){const l=_(s),o=l.query;if(o)for(const[u,f]of Object.entries(o))switch(f){case"{x}":o[u]=r.toString();break;case"{y}":o[u]=t.toString();break;case"{z}":o[u]=e.toString();break}const a=l.path,n=A(a.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),{...l.query});return ke(n,i)}function ke(s,e){return te(R,s,()=>new Me(s)).getData(e).then(r=>(R.delete(s),r)).catch(r=>{throw R.delete(s),r})}class Ce{constructor(e,t,r){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=e,this.sourceUrl=t;const i=_(this.sourceUrl),l=b(r),o=l.tiles;if(i)for(let d=0;d<o.length;d++){const m=_(o[d]);m&&(j(m.path)||(m.path=L(i.path,m.path)),o[d]=A(m.path,{...i.query,...m.query}))}this.tileServers=o;const a=r.capabilities&&r.capabilities.split(",").map(d=>d.toLowerCase().trim()),n=(r==null?void 0:r.exportTilesAllowed)===!0,u=(a==null?void 0:a.includes("tilemap"))===!0,f=n&&r.hasOwnProperty("maxExportTilesCount")?r.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+f}:null},this.tileInfo=Ie(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});const h=r.tileMap?A(L(i.path,r.tileMap),i.query??{}):null;u?(this.type="vector-tile",this.tilemap=new De(new Ue({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),h)):h&&(this.tilemap=new Le(h)),this.fullExtent=z.fromJSON(r.fullExtent)}destroy(){var e;(e=this.tilemap)==null||e.destroy()}async getRefKey(e,t){var i;return await((i=this.tilemap)==null?void 0:i.dataKey(e,t))??e}requestTile(e,t,r,i){const l=this.tileServers[t%this.tileServers.length];return Ee(l,e,t,r,i)}isCompatibleWith(e){const t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference)||!t.origin.equals(r.origin)||Math.round(t.dpi)!==Math.round(r.dpi))return!1;const i=t.lods,l=r.lods,o=Math.min(i.length,l.length);for(let a=0;a<o;a++){const n=i[a],u=l[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const P=k.defaults&&k.defaults.io.corsEnabledServers;async function Be(s,e){const t={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[r,i]=typeof s=="string"?[s,null]:[null,s.jsonUrl];await g(t,"esri",s,i,e);const l={layerDefinition:t.validatedSource,url:r,serviceUrl:t.sourceUrl,style:t.style,styleUrl:t.styleUrl,spriteUrl:t.style.sprite&&x(t.styleBase,t.style.sprite),spriteFormat:t.spriteFormat,glyphsUrl:t.style.glyphs&&x(t.styleBase,t.style.glyphs),sourceNameToSource:t.sourceNameToSource,primarySourceName:t.primarySourceName};return w(l.spriteUrl),w(l.glyphsUrl),l}function w(s){if(!s)return;const e=ie(s);P&&!P.includes(e)&&P.push(e)}function x(...s){let e;for(const t of s)t!=null&&(Q(t)?e&&(e=e.split("://")[0]+":"+t.trim()):j(t)?e=t:e=L(e,t));return e?K(e):void 0}async function g(s,e,t,r,i){V(i);let l,o,a;if(typeof t=="string"){const u=W(t);w(u),a=await S(u,{...i,responseType:"json",query:{f:"json",...i==null?void 0:i.query}}),a.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=u,o=u}else t!=null&&(a={data:t},l=t.jsonUrl||null,o=r);const n=a==null?void 0:a.data;if(J(n))return s.styleUrl=l||null,$e(s,n,o,i);if(Ne(n))return s.sourceUrl?O(s,n,o,!1,e,i):(s.sourceUrl=l||null,O(s,n,o,!0,e,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function J(s){return!!s&&"sources"in s&&!!s.sources}function Ne(s){return!J(s)}async function $e(s,e,t,r){const i=t?oe(t):G();s.styleBase=i,s.style=e,s.styleUrl&&w(s.styleUrl),e["sprite-format"]&&e["sprite-format"].toLowerCase()==="webp"&&(s.spriteFormat="webp");const l=[];if(e.sources&&e.sources.esri){const o=e.sources.esri;o.url?await g(s,"esri",x(i,o.url),void 0,r):l.push(g(s,"esri",o,i,r))}for(const o of Object.keys(e.sources))o!=="esri"&&e.sources[o].type==="vector"&&(e.sources[o].url?l.push(g(s,o,x(i,e.sources[o].url),void 0,r)):e.sources[o].tiles&&l.push(g(s,o,e.sources[o],i,r)));await Promise.all(l)}async function O(s,e,t,r,i,l){const o=t?K(t)+"/":G(),a=Oe(e,o),n=new Ce(i,A(o,(l==null?void 0:l.query)??{}),a);if(!r&&s.primarySourceName in s.sourceNameToSource){const u=s.sourceNameToSource[s.primarySourceName];if(!u.isCompatibleWith(n))return;n.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(n.fullExtent):u.fullExtent=n.fullExtent.clone()),u.tileInfo&&n.tileInfo&&u.tileInfo.lods.length<n.tileInfo.lods.length&&(u.tileInfo=n.tileInfo)}if(r?(s.sourceBase=o,s.source=e,s.validatedSource=a,s.primarySourceName=i,s.sourceUrl&&w(s.sourceUrl)):w(o),s.sourceNameToSource[i]=n,!s.style){if(e.defaultStyles==null)throw new Error;return typeof e.defaultStyles=="string"?g(s,"",x(o,e.defaultStyles,"root.json"),void 0,l):g(s,"",e.defaultStyles,x(o,"root.json"),l)}}function Oe(s,e){if(s.hasOwnProperty("tileInfo"))return s;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},i=512;let l=78271.51696400007,o=2958287637957775e-7;const a=[],n=s.hasOwnProperty("minzoom")?+s.minzoom:0,u=s.hasOwnProperty("maxzoom")?+s.maxzoom:22;for(let f=0;f<=u;f++)f>=n&&a.push({level:f,scale:o,resolution:l}),l/=2,o/=2;for(const f of s.tiles??[])w(x(e,f));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:s.tiles,tileInfo:{rows:i,cols:i,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:a,spatialReference:{wkid:102100}}}}const I=1e-6;function Ve(s,e){if(s===e)return!0;if(s==null&&e!=null||s!=null&&e==null||s==null||e==null||!s.spatialReference.equals(e.spatialReference)||s.dpi!==e.dpi)return!1;const t=s.origin,r=e.origin;if(Math.abs(t.x-r.x)>=I||Math.abs(t.y-r.y)>=I)return!1;const i=s.lods[0].scale,l=e.lods[0].scale;let o,a;i>l?(o=s,a=e):(a=s,o=e);for(let n=o.lods[0].scale;n>=a.lods[a.lods.length-1].scale-I;n/=2)if(Math.abs(n-a.lods[0].scale)<I)return!0;return!1}function Fe(s,e){if(s===e)return s;if(s==null&&e!=null)return e;if(s!=null&&e==null)return s;if(s==null||e==null)return null;const t=s.size[0],r=s.format,i=s.dpi,l=new le({x:s.origin.x,y:s.origin.y}),o=s.spatialReference,a=s.lods[0].scale>e.lods[0].scale?s.lods[0]:e.lods[0],n=s.lods[s.lods.length-1].scale<=e.lods[e.lods.length-1].scale?s.lods[s.lods.length-1]:e.lods[e.lods.length-1],u=a.scale,f=a.resolution,h=n.scale,d=[];let m=u,M=f,E=0;for(;m>h;)d.push(new ae({level:E,resolution:M,scale:m})),E++,m/=2,M/=2;return new D({size:[t,t],dpi:i,format:r||"pbf",origin:l,lods:d,spatialReference:o})}let c=class extends we(ve(Ae(Se(_e(be(xe(ge(me(de))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(T).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await S(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Te(this.portalItem))}).catch(T).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&_(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?A(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?_(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Q(e)&&(e=`https:${e}`);const r=ne(e);t.styleUrl=ue(e,r)}get tileInfo(){var r;const e=[];for(const i in this.sourceNameToSource)e.push(this.sourceNameToSource[i]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new D;if(e.length>1)for(let i=0;i<e.length;i++)Ve(t,e[i].tileInfo)&&(t=Fe(t,e[i].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,i;if(!this._spriteSourceMap.has(e)){const l=C("2d").maxTextureSize,o=(r=this.currentStyleInfo)!=null&&r.spriteUrl?A(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,a=new N({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:(i=this.currentStyleInfo)==null?void 0:i.spriteFormat},l);await a.load(t),this._spriteSourceMap.set(e,a)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=C("2d").maxTextureSize,i=e.spriteUrl,l=i?A(i,{...this.customParameters,token:this.apiKey}):null;if(!l&&e.type==="url")return null;const o=new N(e,r);try{await o.load(t);const a=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(a,o),l&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=l),this.emit("spriteSource-change",{spriteSource:o}),o}catch(a){T(a)}return null}async loadStyle(e,t){var i;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r?this._loadingTask.promise:((i=this._loadingTask)==null||i.abort(),this._loadingTask=ce(l=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:l})),t),this._loadingTask.promise)}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return b(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return b(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return b(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new U("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Be(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Pe("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Re(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const l=t[1]||"";for(const o of r)if(o.toLowerCase().includes(i))return W(`//static.arcgis.com/attribution/Vector${l}/${o}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};p([y({readOnly:!0})],c.prototype,"attributionDataUrl",null);p([y({type:["show","hide"]})],c.prototype,"listMode",void 0);p([y({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0);p([y({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null);p([y({readOnly:!0})],c.prototype,"currentStyleInfo",void 0);p([y({json:{read:!1},readOnly:!0,type:z})],c.prototype,"fullExtent",null);p([y()],c.prototype,"style",void 0);p([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0);p([y({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0);p([y({readOnly:!0})],c.prototype,"parsedUrl",null);p([y({readOnly:!0})],c.prototype,"serviceUrl",null);p([y({type:pe,readOnly:!0})],c.prototype,"spatialReference",null);p([y({readOnly:!0})],c.prototype,"styleRepository",void 0);p([y({readOnly:!0})],c.prototype,"sourceNameToSource",void 0);p([y({readOnly:!0})],c.prototype,"primarySource",void 0);p([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null);p([ye(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null);p([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:D})],c.prototype,"tileInfo",null);p([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0);p([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0);p([y({readOnly:!0})],c.prototype,"version",void 0);p([he("version",["version","currentVersion"])],c.prototype,"readVersion",null);p([y({type:String})],c.prototype,"showCollisionBoxes",void 0);p([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0);c=p([fe("esri.layers.VectorTileLayer")],c);const wt=c;export{wt as default};
