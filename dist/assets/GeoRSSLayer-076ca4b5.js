import{fS as p,Z as u,r as m,hD as d,bW as S,ae as r,af as i,bF as c,bf as h,ai as f,eK as n,dm as g,ea as b,bK as v,aY as G,a$ as R}from"./index-b4b3ae7d.js";import{M as C}from"./MultiOriginJSONSupport-a39561fd.js";import{B as L}from"./BlendLayer-0a837fcb.js";import{O as x}from"./OperationalLayer-fae6e909.js";import{P}from"./PortalLayer-e5a901dc.js";import{R as _}from"./RefreshableLayer-1a6ca7d6.js";import{S as E}from"./ScaleRangeLayer-a596cf96.js";import{i as F,a as M,u as k}from"./commonProperties-6e3ee32c.js";import"./jsonUtils-2ab9edfc.js";import"./parser-7991567d.js";import"./_commonjsHelpers-725317a4.js";import"./portalItemUtils-6119446c.js";import"./ElevationInfo-f0fe59c0.js";import"./lengthUtils-ae3367a7.js";const w=["atom","xml"],$={base:n,key:"type",typeMap:{"simple-line":g},errorContext:"symbol"},O={base:n,key:"type",typeMap:{"picture-marker":b,"simple-marker":v},errorContext:"symbol"},T={base:n,key:"type",typeMap:{"simple-fill":G},errorContext:"symbol"};let t=class extends L(_(x(P(E(C(R)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}readFeatureCollections(e,o){return o.featureCollection.layers.forEach(s=>{var a;const l=s.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),o.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?p(this.url,w)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(u).then(()=>this._fetchService(o)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const o=this.spatialReference,{data:s}=await m(S.geoRSSServiceUrl,{query:{url:this.url,refresh:this.loaded?!0:void 0,outSR:d(o)?void 0:o.wkid??JSON.stringify(o)},signal:e});return s}_hasGeometry(e){var o;return((o=this.featureCollections)==null?void 0:o.some(s=>{var l,a;return((l=s.featureSet)==null?void 0:l.geometryType)===e&&((a=s.featureSet.features)==null?void 0:a.length)>0}))??!1}};r([i()],t.prototype,"description",void 0);r([i()],t.prototype,"featureCollections",void 0);r([c("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null);r([i({type:h,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0);r([i(F)],t.prototype,"id",void 0);r([i(M)],t.prototype,"legendEnabled",void 0);r([i({types:$,json:{write:!0}})],t.prototype,"lineSymbol",void 0);r([i({type:["show","hide"]})],t.prototype,"listMode",void 0);r([i({types:O,json:{write:!0}})],t.prototype,"pointSymbol",void 0);r([i({types:T,json:{write:!0}})],t.prototype,"polygonSymbol",void 0);r([i({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0);r([i(k)],t.prototype,"url",void 0);r([i({json:{origins:{service:{read:{source:"name",reader(y){return y||void 0}}}}}})],t.prototype,"title",null);r([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0);t=r([f("esri.layers.GeoRSSLayer")],t);const Q=t;export{Q as default};
