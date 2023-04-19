import{au as _,Z as b,bt as v,du as T,r as m,bx as O,hv as w,E as h,ev as A,fg as L,ej as R,f_ as M,ae as a,af as o,bF as P,bG as I,ag as U,ai as W,a$ as j}from"./index-0cbe37a0.js";import{M as B}from"./MultiOriginJSONSupport-b25564d9.js";import{A as C}from"./APIKeyMixin-b7095be4.js";import{A as k}from"./ArcGISCachedService-2ea669a1.js";import{S as G,A as $,a as q}from"./SublayersOwner-28d318e8.js";import{A as D}from"./ArcGISService-2712af3c.js";import{B as J}from"./BlendLayer-9a3cb9de.js";import{C as N}from"./CustomParametersMixin-deeb0655.js";import{O as x}from"./OperationalLayer-5fc72de9.js";import{P as E}from"./PortalLayer-f7130da9.js";import{R as V}from"./RefreshableLayer-6f2dc031.js";import{S as F}from"./ScaleRangeLayer-7e970524.js";import{u as H}from"./commonProperties-31665bf0.js";import{c as y}from"./imageBitmapUtils-e48ef01c.js";import"./TilemapCache-f7ea48bc.js";import"./ByteSizeUnit-c0a244d3.js";import"./LRUCache-75f2ea80.js";import"./MemCache-8eec5c08.js";import"./Version-530b5baf.js";import"./UniqueValueRenderer-621acbf1.js";import"./LegendOptions-fe356083.js";import"./diffUtils-6d46a8ba.js";import"./SizeVariable-f1c59b14.js";import"./colorRamps-3b9c4be9.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-3c389155.js";import"./ColorStop-52e2a166.js";import"./jsonUtils-98d903f2.js";import"./styleUtils-2fd95cb0.js";import"./featureFlags-986067cc.js";import"./jsonUtils-eea84da3.js";import"./DictionaryLoader-d4bf7ad8.js";import"./FieldsIndex-91c8dad2.js";import"./heatmapUtils-c9f41040.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./sql-e009a7de.js";import"./QueryTask-439f045d.js";import"./infoFor3D-91dff30a.js";import"./Query-612ec863.js";import"./Field-a5856a62.js";import"./fieldType-7585de06.js";import"./executeForIds-2d4c9b78.js";import"./query-b80addb9.js";import"./normalizeUtils-89acfe4c.js";import"./normalizeUtilsCommon-088d2983.js";import"./pbfQueryUtils-dcfea191.js";import"./pbf-eedd4b9c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-ceba2e44.js";import"./executeQueryJSON-15ebd0aa.js";import"./FeatureSet-10ffd73d.js";import"./featureConversionUtils-f0b03e2b.js";import"./FeatureType-6294a180.js";import"./FeatureTemplate-0339623f.js";import"./labelingInfo-e7968113.js";import"./labelUtils-c3e92de5.js";import"./defaultsJSON-b396ba80.js";import"./serviceCapabilitiesUtils-1a4d569f.js";import"./AttachmentQuery-bcc72e86.js";import"./popupUtils-3663ba6d.js";import"./sublayerUtils-55042c0b.js";import"./jsonUtils-1ca84aef.js";import"./parser-4c0b00b2.js";import"./_commonjsHelpers-725317a4.js";import"./portalItemUtils-ae51bb0f.js";import"./ElevationInfo-bbf2ebe0.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends J(G(F(x(E(k($(D(B(_(V(C(N(j))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return e=e||r.tileInfo&&r.tileInfo.spatialReference,e&&v.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const l=e.slice().reverse().flatten(({sublayers:p})=>p&&p.toArray().reverse()).toArray(),n=[],u={writeSublayerStructure:!1,...s};l.forEach(p=>{const g=p.write({},u);n.push(g)}),n.some(p=>Object.keys(p).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>T(r).path):null}fetchTile(e,r,t,s={}){const{signal:l}=s,n=this.getTileUrl(e,r,t),u={responseType:"image",signal:l,query:{...this.refreshParameters}};return m(n,u).then(c=>c.data)}async fetchImageBitmapTile(e,r,t,s={}){const{signal:l}=s;if(this.fetchTile!==d.prototype.fetchTile){const p=await this.fetchTile(e,r,t,s);return y(p,e,r,t,l)}const n=this.getTileUrl(e,r,t),u={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:c}=await m(n,u);return y(c,e,r,t,l)}getTileUrl(e,r,t){var c,p;const s=!this.tilemapCache&&this.supportsBlankTile,l=O({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:s?!1:null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(p=this.parsedUrl)==null?void 0:p.path}/tile/${e}/${r}/${t}${l?"?"+l:""}`}loadAll(){return w(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");const l={data:this.sourceJSON};r(l);return}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const s=A(this.parsedUrl.path);if(s!=null&&s.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");m(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!L(t))return this._fetchServerVersion(t,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!R(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return m(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(s=>{if(s.data&&s.data.currentVersion)return s.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,s=f.length;t<s;t++)if(r=f[t],r.toLowerCase().includes(e))return M("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[S]}};a([o({readOnly:!0})],i.prototype,"attributionDataUrl",null);a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0);a([o({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0);a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0);a([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0);a([o({type:Boolean})],i.prototype,"resampling",void 0);a([o()],i.prototype,"sourceJSON",void 0);a([o({type:v})],i.prototype,"spatialReference",void 0);a([P("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null);a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0);a([o({readOnly:!0})],i.prototype,"sublayers",void 0);a([I("sublayers",{layers:{type:[q]}})],i.prototype,"writeSublayers",null);a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0);a([o()],i.prototype,"tileServers",null);a([U("tileServers")],i.prototype,"castTileServers",null);a([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0);a([o(H)],i.prototype,"url",void 0);i=d=a([W("esri.layers.TileLayer")],i);const S=Symbol("default-fetch-tile");i.prototype.fetchTile[S]=!0;const cr=i;export{cr as default};