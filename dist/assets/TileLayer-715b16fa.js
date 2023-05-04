import{aq as _,h5 as S,Y as T,bz as v,gY as b,L as h,ow as w,r5 as O,K as u,ha as $,hY as R,gW as W,f3 as L,e as o,y as a,bD as U,bE as j,af as P,a as A,a$ as B}from"./index-c18a96f3.js";import{O as C}from"./MultiOriginJSONSupport-309fe89a.js";import{i as I}from"./APIKeyMixin-66195343.js";import{a as N}from"./ArcGISCachedService-85e1d32b.js";import{E as k,f as D,Y as M}from"./SublayersOwner-9be0c97c.js";import{l as J}from"./ArcGISService-776e388b.js";import{a as q}from"./BlendLayer-1406a3b7.js";import{o as E}from"./CustomParametersMixin-22e0ea3b.js";import{c as G}from"./OperationalLayer-5e561312.js";import{j as V}from"./PortalLayer-86ea101d.js";import{t as K}from"./ScaleRangeLayer-972bc331.js";import{f as Y}from"./commonProperties-797d5904.js";import{o as y}from"./imageBitmapUtils-6d85ffa7.js";import"./TilemapCache-4333d4f1.js";import"./LRUCache-126d04a0.js";import"./portalItemUtils-8a77bd20.js";import"./UniqueValueRenderer-8560c516.js";import"./ColorStop-c5089175.js";import"./diffUtils-2a9fee10.js";import"./colorRamps-8bdec164.js";import"./jsonUtils-976e92af.js";import"./DictionaryLoader-6a0ef31f.js";import"./FieldsIndex-b071eb44.js";import"./heatmapUtils-103df89c.js";import"./sql-29d214a6.js";import"./QueryTask-ccbe7da5.js";import"./infoFor3D-5881142c.js";import"./Query-f6fbedf0.js";import"./executeForIds-e6f23073.js";import"./query-e124a463.js";import"./normalizeUtils-55909f8c.js";import"./normalizeUtilsCommon-f4f57432.js";import"./pbfQueryUtils-c33d2f62.js";import"./pbf-355c66cc.js";import"./queryZScale-275d69e0.js";import"./executeQueryJSON-b4d1c649.js";import"./FeatureSet-037cc3b1.js";import"./FeatureType-f1f1b192.js";import"./FeatureTemplate-da015408.js";import"./labelingInfo-75f20c49.js";import"./defaults-2a29a8d1.js";import"./defaultsJSON-59981e75.js";import"./serviceCapabilitiesUtils-5f3d913c.js";import"./AttachmentQuery-79b9f34f.js";import"./popupUtils-0e81192d.js";import"./sublayerUtils-022dca59.js";import"./jsonUtils-266f6943.js";import"./ElevationInfo-6aa5c711.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends q(K(k(N(D(G(V(J(C(_(S(I(E(B))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&v.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...s};p.forEach(l=>{const m=l.write({},c);n.push(m)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>b(r).path):null}fetchTile(e,r,t,s={}){const{signal:p}=s,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return h(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,s={}){const{signal:p}=s;if(this.fetchTile!==d.prototype.fetchTile){const m=await this.fetchTile(e,r,t,s);return y(m,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await h(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const s=!this.tilemapCache&&this.supportsBlankTile,p=w({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return O(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const s=$(this.parsedUrl.path);if(s!=null&&s.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");h(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!R(t))return this._fetchServerVersion(t,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!W(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return h(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,s=f.length;t<s;t++)if(r=f[t],r.toLowerCase().includes(e))return L("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};o([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),o([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),o([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([a({type:Boolean})],i.prototype,"resampling",void 0),o([a()],i.prototype,"sourceJSON",void 0),o([a({type:v})],i.prototype,"spatialReference",void 0),o([U("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),o([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),o([a({readOnly:!0})],i.prototype,"sublayers",void 0),o([j("sublayers",{layers:{type:[M]}})],i.prototype,"writeSublayers",null),o([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),o([a()],i.prototype,"tileServers",null),o([P("tileServers")],i.prototype,"castTileServers",null),o([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),o([a(Y)],i.prototype,"url",void 0),i=d=o([A("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const qe=i;export{qe as default};