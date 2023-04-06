import{bm as F,iS as L,a_ as v,al as y,D as g,gX as f,ap as h,jQ as O,V as d,ab as s,ac as i,jR as $,aU as p,ad as m,i5 as j,iq as M,is as I,ir as R,ev as C,ew as K,ex as N,bF as P,aF as S,eJ as T,$ as J,aV as A,eA as V,d$ as z}from"./index-394e5411.js";import{j as U,S as w,g as x,d as E}from"./kmlUtils-b4d8ab86.js";var u;let o=u=class extends F.EventedMixin(L(j)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),g(()=>this.sublayers,(t,r)=>{if(r)for(const l of r)l.layer=l.parent=null;if(t)for(const l of t)l.parent=this,l.layer=this.layer},y)])}initialize(){f(()=>this.networkLink).then(()=>f(()=>this.visible===!0)).then(()=>this.load())}load(e){var l;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,r=this._fetchService(((l=this._get("networkLink"))==null?void 0:l.href)??"",t).then(n=>{var c;const k=U(n.sublayers);this.fullExtent=h.fromJSON(k),this.sourceJSON=n;const b=O(d.ofType(u),w(u,n));this.sublayers?this.sublayers.addMany(b):this.sublayers=b,(c=this.layer)==null||c.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>E(r.data))}};s([i()],o.prototype,"description",void 0),s([i()],o.prototype,"id",void 0),s([i({readOnly:!0,value:null})],o.prototype,"networkLink",void 0),s([i({json:{write:{allowNull:!0}}})],o.prototype,"parent",void 0),s([i({type:d.ofType(u),json:{write:{allowNull:!0}}})],o.prototype,"sublayers",void 0),s([i({value:null,json:{read:{source:"name",reader:e=>$(e)}}})],o.prototype,"title",void 0),s([i({value:!0})],o.prototype,"visible",null),s([p("visible",["visibility"])],o.prototype,"readVisible",null),s([i()],o.prototype,"sourceJSON",void 0),s([i({value:null})],o.prototype,"layer",null),s([i({type:h})],o.prototype,"fullExtent",void 0),o=u=s([m("esri.layers.support.KMLSublayer")],o);const _=o,W=["kml","xml"];let a=class extends M(I(R(C(K(N(z)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new P({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([g(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return w(_,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],l=e.toArray();for(;l.length;){const n=l[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&l.push(...n.sublayers.toArray())),l.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?T(this.url,W)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=l=>{l.visible&&(t.push(l),l.sublayers&&l.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(J).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=E(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const l of r.sublayers.items)t(l),l.visible&&l.fullExtent&&(e!=null?e.union(l.fullExtent):e=l.fullExtent.clone())};return t(this),e}};s([i({readOnly:!0})],a.prototype,"allSublayers",void 0),s([i({type:S})],a.prototype,"outSpatialReference",void 0),s([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([i({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),s([i({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),s([i({type:["KML"]})],a.prototype,"operationalLayerType",void 0),s([i({})],a.prototype,"resourceInfo",void 0),s([i({type:d.ofType(_),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),s([p(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),s([p("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),s([A("sublayers")],a.prototype,"writeSublayers",null),s([i({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([i({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),s([i(V)],a.prototype,"url",void 0),s([i({readOnly:!0})],a.prototype,"visibleSublayers",null),s([i({type:h})],a.prototype,"extent",void 0),s([i()],a.prototype,"fullExtent",null),a=s([m("esri.layers.KMLLayer")],a);const q=a;export{q as default};