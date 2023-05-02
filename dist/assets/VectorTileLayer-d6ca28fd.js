import{J,s as I,hk as X,im as Y,dv as v,bx as H,L as A,c as C,ba as q,B as Z,d as ee,cI as S,az as te,bU as re,dx as ie,cF as _,i1 as F,eu as P,bf as Q,bX as M,io as se,ik as V,il as z,e4 as G,e5 as oe,ip as K,K as le,hG as ae,bp as O,Z as R,iq as ne,ir as ue,bo as E,G as pe,ae as c,af as h,bt as ce,bG as he,bF as ye,ai as de,a$ as fe}from"./index-3e52b35c.js";import{O as me}from"./MultiOriginJSONSupport-f670b6ba.js";import{i as ge}from"./APIKeyMixin-b38181fe.js";import{a as Se}from"./ArcGISCachedService-4a52bc2f.js";import{l as Ae}from"./ArcGISService-4ff6d7fb.js";import{a as we}from"./BlendLayer-626e5094.js";import{o as xe}from"./CustomParametersMixin-93388844.js";import{c as ve}from"./OperationalLayer-df3b2587.js";import{j as _e}from"./PortalLayer-88116a27.js";import{t as be}from"./ScaleRangeLayer-c1033939.js";import{n as Ue,z as Ie}from"./TilemapCache-502c373f.js";import{e as Re}from"./jsonContext-167d9c8b.js";import{l as $e}from"./StyleRepository-5b5efdf0.js";import"./jsonUtils-7a51ba7d.js";import"./parser-3d96dfad.js";import"./commonProperties-0493cb6e.js";import"./ElevationInfo-bc900c05.js";import"./lengthUtils-af74913c.js";import"./portalItemUtils-6dd219cf.js";import"./ByteSizeUnit-d4757d40.js";import"./LRUCache-c95257f8.js";import"./MemCache-d9724c39.js";import"./StyleDefinition-fbc907c2.js";import"./enums-55085e26.js";import"./enums-fb086c25.js";import"./enums-74e97557.js";import"./VertexElementDescriptor-2925c6af.js";import"./colorUtils-c0f43caf.js";import"./GeometryUtils-53652037.js";import"./definitions-e9823d3c.js";let b=null;function Te(e){if(b)return b;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return b=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}),b}const j=1.15;class B{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>j;const{width:r,height:i,data:s,json:l}=await this._getSpriteData(this._spriteSource,t),o=Object.keys(l);if(!o||o.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=l,this.width=r,this.height=i;const u=Math.max(this._maxTextureSize,4096);if(r>u||i>u){const a=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${u} pixels}`;throw J.getLogger("esri.layers.support.SpriteSource").error(a),new I("SpriteSource",a)}let n;for(let a=0;a<s.length;a+=4)n=s[a+3]/255,s[a]=s[a]*n,s[a+1]=s[a+1]*n,s[a+2]=s[a+2]*n;this.image=s}async _getSpriteData(t,r){if(t.type==="image"){let y,d;if(this.devicePixelRatio<j){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");y=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");y=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in y&&"height"in y&&"data"in y&&(X(y.data)||Y(y.data))?{width:y.width,height:y.height,data:new Uint8Array(y.data),json:d}:{...k(y),json:d}}const i=v(this.baseURL),s=i.query?"?"+H(i.query):"",l=this._isRetina?"@2x":"",o=`${i.path}${l}.${this._spriteImageFormat}${s}`,u=`${i.path}${l}.json${s}`,[n,a]=await Promise.all([A(u,r),A(o,{responseType:"image",...r})]);return{...k(a.data),json:n.data}}}function k(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(i.data)}}let Pe=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=A(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const i=await this.fetchTileIndex();return C(r),this._getIndexedDataKey(i,t)}_getIndexedDataKey(t,r){const i=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let s=r;for(;s.level!==0;)s=new q(s.level-1,s.row>>1,s.col>>1,s.world),i.push(s);let l,o,u=t,n=i.pop();if(u===1)return n;for(;i.length;)if(l=i.pop(),o=(1&l.col)+((1&l.row)<<1),u){if(u[o]===0){n=null;break}if(u[o]===1){n=l;break}n=l,u=u[o]}return n}},Oe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=Z(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=A(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:i,row:s,col:l}=t,o=new q(t);return this._tilemap.fetchAvailabilityUpsample(i,s,l,o,r).then(()=>(o.world=t.world,o)).catch(u=>{if(ee(u))throw u;return null})}};class Le{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const r=this._abortOptions;return r.push(t),re(t,()=>{r.every(i=>ie(i))&&this._abortController.abort()}),this._promise.then(i=>_(i))}async _makeRequest(t,r){const{data:i}=await A(t,{responseType:"array-buffer",signal:r});return i}}const $=new Map;function De(e,t,r,i,s){const l=v(e),o=l.query;if(o)for(const[n,a]of Object.entries(o))switch(a){case"{x}":o[n]=i.toString();break;case"{y}":o[n]=r.toString();break;case"{z}":o[n]=t.toString()}const u=l.path;return Me(S(u.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,i.toString()),{...l.query}),s)}function Me(e,t){return te($,e,()=>new Le(e)).getData(t).then(r=>($.delete(e),r)).catch(r=>{throw $.delete(e),r})}let Ee=class{constructor(t,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const s=v(this.sourceUrl),l=_(i),o=l.tiles;if(s)for(let m=0;m<o.length;m++){const f=v(o[m]);f&&(F(f.path)||(f.path=P(s.path,f.path)),o[m]=S(f.path,{...s.query,...f.query}))}this.tileServers=o;const u=i.capabilities&&i.capabilities.split(",").map(m=>m.toLowerCase().trim()),n=(i==null?void 0:i.exportTilesAllowed)===!0,a=(u==null?void 0:u.includes("tilemap"))===!0,y=n&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:a},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=Ue(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});const d=i.tileMap?S(P(s.path,i.tileMap),s.query??{}):null;a?(this.type="vector-tile",this.tilemap=new Oe(new Ie({layer:{parsedUrl:s,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=Q.fromJSON(i.fullExtent)}destroy(){var t;(t=this.tilemap)==null||t.destroy()}async getRefKey(t,r){var i;return await((i=this.tilemap)==null?void 0:i.dataKey(t,r))??t}requestTile(t,r,i,s){const l=this.tileServers[r%this.tileServers.length];return De(l,t,r,i,s)}isCompatibleWith(t){const r=this.tileInfo,i=t.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,l=i.lods,o=Math.min(s.length,l.length);for(let u=0;u<o;u++){const n=s[u],a=l[u];if(n.level!==a.level||Math.round(n.scale)!==Math.round(a.scale))return!1}return!0}};const T=M.defaults&&M.defaults.io.corsEnabledServers;async function je(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await g(r,"esri",e,s,t);const l={layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&x(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&x(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return w(l.spriteUrl),w(l.glyphsUrl),l}function w(e){if(!e)return;const t=se(e);T&&!T.includes(t)&&T.push(t)}function x(...e){let t;for(const r of e)r!=null&&(V(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=F(r)?r:P(t,r));return t?z(t):void 0}async function g(e,t,r,i,s){let l,o,u;if(C(s),typeof r=="string"){const a=G(r);w(a),u=await A(a,{...s,responseType:"json",query:{f:"json",...s==null?void 0:s.query}}),u.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=a,o=a}else r!=null&&(u={data:r},l=r.jsonUrl||null,o=i);const n=u==null?void 0:u.data;if(W(n))return e.styleUrl=l||null,ke(e,n,o,s);if(Be(n))return e.sourceUrl?N(e,n,o,!1,t,s):(e.sourceUrl=l||null,N(e,n,o,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function W(e){return!!e&&"sources"in e&&!!e.sources}function Be(e){return!W(e)}async function ke(e,t,r,i){const s=r?oe(r):K();e.styleBase=s,e.style=t,e.styleUrl&&w(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await g(e,"esri",x(s,o.url),void 0,i):l.push(g(e,"esri",o,s,i))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(g(e,o,x(s,t.sources[o].url),void 0,i)):t.sources[o].tiles&&l.push(g(e,o,t.sources[o],s,i)));await Promise.all(l)}async function N(e,t,r,i,s,l){const o=r?z(r)+"/":K(),u=Ne(t,o),n=new Ee(s,S(o,(l==null?void 0:l.query)??{}),u);if(!i&&e.primarySourceName in e.sourceNameToSource){const a=e.sourceNameToSource[e.primarySourceName];if(!a.isCompatibleWith(n))return;n.fullExtent!=null&&(a.fullExtent!=null?a.fullExtent.union(n.fullExtent):a.fullExtent=n.fullExtent.clone()),a.tileInfo&&n.tileInfo&&a.tileInfo.lods.length<n.tileInfo.lods.length&&(a.tileInfo=n.tileInfo)}if(i?(e.sourceBase=o,e.source=t,e.validatedSource=u,e.primarySourceName=s,e.sourceUrl&&w(e.sourceUrl)):w(o),e.sourceNameToSource[s]=n,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?g(e,"",x(o,t.defaultStyles,"root.json"),void 0,l):g(e,"",t.defaultStyles,x(o,"root.json"),l)}}function Ne(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},i=512;let s=78271.51696400007,l=2958287637957775e-7;const o=[],u=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let a=0;a<=n;a++)a>=u&&o.push({level:a,scale:l,resolution:s}),s/=2,l/=2;for(const a of e.tiles??[])w(x(t,a));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:i,cols:i,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:{wkid:102100}}}}const U=1e-6;function Ce(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=U||Math.abs(r.y-i.y)>=U)return!1;let s,l;e.lods[0].scale>t.lods[0].scale?(s=e,l=t):(l=e,s=t);for(let o=s.lods[0].scale;o>=l.lods[l.lods.length-1].scale-U;o/=2)if(Math.abs(o-l.lods[0].scale)<U)return!0;return!1}function qe(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],i=e.format,s=e.dpi,l=new le({x:e.origin.x,y:e.origin.y}),o=e.spatialReference,u=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],a=u.scale,y=u.resolution,d=n.scale,m=[];let f=a,L=y,D=0;for(;f>d;)m.push(new ae({level:D,resolution:L,scale:f})),D++,f/=2,L/=2;return new O({size:[r,r],dpi:s,format:i||"pbf",origin:l,lods:m,spatialReference:o})}let p=class extends we(be(Se(Ae(ve(_e(xe(ge(me(fe))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(R).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await A(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem))}).catch(R).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&v(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?v(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&V(e)&&(e=`https:${e}`);const r=ne(e);t.styleUrl=ue(e,r)}get tileInfo(){var r;const e=[];for(const i in this.sourceNameToSource)e.push(this.sourceNameToSource[i]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new O;if(e.length>1)for(let i=0;i<e.length;i++)Ce(t,e[i].tileInfo)&&(t=qe(t,e[i].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,i;if(!this._spriteSourceMap.has(e)){const s=E("2d").maxTextureSize,l=(r=this.currentStyleInfo)!=null&&r.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,o=new B({type:"url",spriteUrl:l,pixelRatio:e,spriteFormat:(i=this.currentStyleInfo)==null?void 0:i.spriteFormat},s);await o.load(t),this._spriteSourceMap.set(e,o)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=E("2d").maxTextureSize,i=e.spriteUrl,s=i?S(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&e.type==="url")return null;const l=new B(e,r);try{await l.load(t);const o=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(o,l),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:l}),l}catch(o){R(o)}return null}async loadStyle(e,t){var i;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((i=this._loadingTask)==null||i.abort(),this._loadingTask=pe(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return _(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return _(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return _(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await je(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Te("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const s=t[1]||"";for(const l of r)if(l.toLowerCase().includes(i))return G(`//static.arcgis.com/attribution/Vector${s}/${l}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:Q})],p.prototype,"fullExtent",null),c([h()],p.prototype,"style",void 0),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:ce,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([he(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:O})],p.prototype,"tileInfo",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([ye("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([h({type:String})],p.prototype,"showCollisionBoxes",void 0),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([de("esri.layers.VectorTileLayer")],p);const xt=p;export{xt as default};
