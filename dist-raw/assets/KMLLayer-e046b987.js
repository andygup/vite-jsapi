import{aP as O,hz as F,an as v,A as g,aZ as y,b2 as S,bf as d,eo as k,J as f,ae as r,af as i,hS as K,bF as b,ai as L,ep as R,ca as $,bt as w,fS as J,Z as N,bG as P,a$ as j}from"./index-ffb342b4.js";import{M as C}from"./MultiOriginJSONSupport-8a274e44.js";import{B as I}from"./BlendLayer-f2397c0f.js";import{O as T}from"./OperationalLayer-43bf6295.js";import{P as A}from"./PortalLayer-641234b2.js";import{R as z}from"./RefreshableLayer-7e7030e9.js";import{S as H}from"./ScaleRangeLayer-c00a5713.js";import{u as W}from"./commonProperties-ac9466c5.js";import{c as B,s as x,f as E,p as M}from"./kmlUtils-e622ede7.js";import"./jsonUtils-83529e2a.js";import"./parser-b7037908.js";import"./_commonjsHelpers-725317a4.js";import"./portalItemUtils-b3ac2156.js";import"./ElevationInfo-3858b8bb.js";import"./lengthUtils-81eb77d2.js";import"./jsonUtils-fcc69467.js";import"./UniqueValueRenderer-9d1002cf.js";import"./LegendOptions-0798b0b9.js";import"./diffUtils-d9e7d9d5.js";import"./SizeVariable-5571e455.js";import"./colorRamps-bcaaf237.js";import"./sizeVariableUtils-2914222a.js";import"./ColorStop-69649184.js";import"./jsonUtils-d970b431.js";import"./styleUtils-7b70a1b4.js";import"./featureFlags-b0a4f6c7.js";import"./DictionaryLoader-cef2ab61.js";import"./LRUCache-7d80c941.js";import"./MemCache-0b9a9ce4.js";import"./FieldsIndex-19734375.js";import"./heatmapUtils-a1ba5203.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./FeatureSet-b9324b47.js";import"./Field-9647a27a.js";import"./fieldType-b14303b4.js";var p;let a=p=class extends O.EventedMixin(F(R)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),g(()=>this.sublayers,(t,s)=>{if(s)for(const l of s)l.layer=l.parent=null;if(t)for(const l of t)l.parent=this,l.layer=this.layer},y)])}initialize(){S(()=>this.networkLink).then(()=>S(()=>this.visible===!0)).then(()=>this.load())}load(e){var l;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,s=this._fetchService(((l=this._get("networkLink"))==null?void 0:l.href)??"",t).then(n=>{var m;const u=B(n.sublayers);this.fullExtent=d.fromJSON(u),this.sourceJSON=n;const c=k(f.ofType(p),x(p,n));this.sublayers?this.sublayers.addMany(c):this.sublayers=c,(m=this.layer)==null||m.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return E(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(s=>M(s.data))}};r([i()],a.prototype,"description",void 0);r([i()],a.prototype,"id",void 0);r([i({readOnly:!0,value:null})],a.prototype,"networkLink",void 0);r([i({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0);r([i({type:f.ofType(p),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0);r([i({value:null,json:{read:{source:"name",reader(h){return K(h)}}}})],a.prototype,"title",void 0);r([i({value:!0})],a.prototype,"visible",null);r([b("visible",["visibility"])],a.prototype,"readVisible",null);r([i()],a.prototype,"sourceJSON",void 0);r([i({value:null})],a.prototype,"layer",null);r([i({type:d})],a.prototype,"fullExtent",void 0);a=p=r([L("esri.layers.support.KMLSublayer")],a);const _=a,G=["kml","xml"];let o=class extends I(z(H(T(A(C(j)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new $({getCollections:()=>[this.sublayers],getChildrenFunction(t){return t.sublayers}}),this.outSpatialReference=w.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([g(()=>this.sublayers,(e,t)=>{t&&t.forEach(s=>{s.parent=null,s.layer=null}),e&&e.forEach(s=>{s.parent=this,s.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return x(_,t,s,this._visibleFolders)}writeSublayers(e,t){const s=e,l=[],n=s.toArray();for(;n.length;){const u=n[0];u.networkLink||(u.visible&&l.push(u.id),u.sublayers&&n.push(...u.sublayers.toArray())),n.shift()}t.visibleFolders=l}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?J(this.url,G)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=l=>{l.visible&&(t.push(l),l.sublayers&&l.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(N).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:E(this.url??"",this.outSpatialReference,this.refreshInterval,e)),s=M(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const l of s.sublayers.items)t(l),l.visible&&l.fullExtent&&(e!=null?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};r([i({readOnly:!0})],o.prototype,"allSublayers",void 0);r([i({type:w})],o.prototype,"outSpatialReference",void 0);r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0);r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0);r([i({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0);r([i({type:["KML"]})],o.prototype,"operationalLayerType",void 0);r([i({})],o.prototype,"resourceInfo",void 0);r([i({type:f.ofType(_),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0);r([b(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null);r([b("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null);r([P("sublayers")],o.prototype,"writeSublayers",null);r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0);r([i({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null);r([i(W)],o.prototype,"url",void 0);r([i({readOnly:!0})],o.prototype,"visibleSublayers",null);r([i({type:d})],o.prototype,"extent",void 0);r([i()],o.prototype,"fullExtent",null);o=r([L("esri.layers.KMLLayer")],o);const Ke=o;export{Ke as default};