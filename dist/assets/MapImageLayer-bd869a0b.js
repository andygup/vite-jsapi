import{au as O,Z as x,eU as b,eQ as f,r as g,bf as w,bC as E,hv as M,E as S,i as L,ae as a,af as p,eY as I,bF as R,bG as T,ai as P,a$ as A,dX as N}from"./index-b51e75d5.js";import{M as J}from"./MultiOriginJSONSupport-c4bfffa6.js";import{g as F}from"./scaleUtils-387823df.js";import{A as q}from"./APIKeyMixin-fccedd7f.js";import{S as U,A as _,a as $}from"./SublayersOwner-d7526b72.js";import{A as j}from"./ArcGISService-cf2b05cb.js";import{B as k}from"./BlendLayer-f455f371.js";import{C}from"./CustomParametersMixin-dcb81e46.js";import{O as B}from"./OperationalLayer-d41e51ba.js";import{P as G}from"./PortalLayer-72af5b97.js";import{R as V}from"./RefreshableLayer-b146497a.js";import{S as z}from"./ScaleRangeLayer-172a7bde.js";import{T as H}from"./TemporalLayer-5d14408e.js";import{u as K}from"./commonProperties-c098604c.js";import{E as W}from"./ExportImageParameters-21262e24.js";import{a as D}from"./imageBitmapUtils-0fe7595b.js";import{s as v}from"./sublayerUtils-98c5b065.js";import{s as Q}from"./versionUtils-2ae63437.js";import"./Version-f28dd412.js";import"./UniqueValueRenderer-6f6aa298.js";import"./LegendOptions-c1ffbacd.js";import"./diffUtils-1090f477.js";import"./SizeVariable-f0de0a1e.js";import"./colorRamps-78691ea3.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-59fc3632.js";import"./ColorStop-feeb96c4.js";import"./jsonUtils-97563038.js";import"./styleUtils-10d73057.js";import"./featureFlags-dcf59b6a.js";import"./jsonUtils-7d477465.js";import"./DictionaryLoader-a4214801.js";import"./LRUCache-3f2a86dd.js";import"./MemCache-467264d5.js";import"./FieldsIndex-27b25eac.js";import"./heatmapUtils-a897c480.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./sql-c1a5e8cf.js";import"./QueryTask-3e1ff5af.js";import"./infoFor3D-91dff30a.js";import"./Query-aa3f0821.js";import"./Field-f8fa059e.js";import"./fieldType-dfe85208.js";import"./executeForIds-047edbb9.js";import"./query-ca627c6b.js";import"./normalizeUtils-ba8520b6.js";import"./normalizeUtilsCommon-62742346.js";import"./pbfQueryUtils-e677c01b.js";import"./pbf-6051aa71.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-3a414c62.js";import"./executeQueryJSON-728982ac.js";import"./FeatureSet-00572347.js";import"./featureConversionUtils-87949e9d.js";import"./FeatureType-4bd43aff.js";import"./FeatureTemplate-97d53328.js";import"./labelingInfo-14ab3cff.js";import"./labelUtils-df8241fd.js";import"./defaultsJSON-b396ba80.js";import"./serviceCapabilitiesUtils-adfb0f5a.js";import"./AttachmentQuery-95972ea9.js";import"./popupUtils-994537ae.js";import"./jsonUtils-e49662a7.js";import"./parser-e88e0cee.js";import"./_commonjsHelpers-725317a4.js";import"./portalItemUtils-88a22e4d.js";import"./ElevationInfo-0549af0a.js";import"./floorFilterUtils-0e56040f.js";let t=class extends k(H(z(U(_(j(B(G(J(V(q(C(O(A))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(x).then(()=>this._fetchService(i))),Promise.resolve(this)}readImageFormat(e,i){const l=i.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,i,l,r){var c;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let m=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((c=this.capabilities.exportMap)!=null&&c.supportsDynamicLayers)){const s=b(r.origin);if(s===f.PORTAL_ITEM){const u=this.createSublayersForOrigin("service").sublayers;m=v(o,u,f.SERVICE)}else if(s>f.PORTAL_ITEM){const u=this.createSublayersForOrigin("portal-item");m=v(o,u.sublayers,b(u.origin))}}const n=[],d={writeSublayerStructure:m,...r};let y=m;o.forEach(s=>{const u=s.write({},d);n.push(u),y=y||s.originOf("visible")==="user"}),n.some(s=>Object.keys(s).length>1)&&(i.layers=n),y&&(i.visibleLayers=o.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,i,l,r){const o=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const m=new W({layer:this,floors:r==null?void 0:r.floors,scale:F({extent:e,width:i})*o}),n=m.toJSON();m.destroy();const d=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},y=e&&e.spatialReference,h=y.wkid||JSON.stringify(y.toJSON());n.dpi*=o;const c={};if(r!=null&&r.timeExtent){const{start:s,end:u}=r.timeExtent.toJSON();s&&u&&s===u?c.time=""+s:c.time=`${s??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:i+","+l,...n,...d,...c}}async fetchImage(e,i,l,r){const{data:o}=await this._fetchImage("image",e,i,l,r);return o}async fetchImageBitmap(e,i,l,r){const{data:o,url:m}=await this._fetchImage("blob",e,i,l,r);return D(o,m,r==null?void 0:r.signal)}async fetchRecomputedExtents(e={}){const i={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await g(this.url,i),{extent:r,fullExtent:o,timeExtent:m}=l,n=r||o;return{fullExtent:n&&w.fromJSON(n),timeExtent:m&&E.fromJSON({start:m[0],end:m[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return Q(this,e)}async _fetchImage(e,i,l,r,o){var d,y,h;const m={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(i,l,r,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(((d=m.query)==null?void 0:d.dynamicLayers)!=null&&!((h=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&h.supportsDynamicLayers))throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:m.query});try{const{data:c}=await g(n,m);return{data:c,url:n}}catch(c){throw L(c)?c:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:c})}}async _fetchService(e){if(this.sourceJSON){this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});return}const{data:i,ssl:l}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl})}};a([p({type:I})],t.prototype,"dateFieldsTimeReference",void 0);a([p({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0);a([p()],t.prototype,"dpi",void 0);a([p()],t.prototype,"gdbVersion",void 0);a([p()],t.prototype,"imageFormat",void 0);a([R("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null);a([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0);a([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0);a([p()],t.prototype,"imageTransparency",void 0);a([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0);a([p({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0);a([p({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0);a([p({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0);a([p({type:I})],t.prototype,"preferredTimeReference",void 0);a([p()],t.prototype,"sourceJSON",void 0);a([p({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0);a([T("sublayers",{layers:{type:[$]},visibleLayers:{type:[N]}})],t.prototype,"writeSublayers",null);a([p({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0);a([p({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0);a([p(K)],t.prototype,"url",void 0);t=a([P("esri.layers.MapImageLayer")],t);const hr=t;export{hr as default};