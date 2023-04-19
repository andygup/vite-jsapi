import{au as O,Z as x,eU as b,eQ as f,r as g,bf as w,bC as E,hv as M,E as S,i as L,ae as a,af as p,eY as I,bF as R,bG as T,ai as P,a$ as A,dX as N}from"./index-0cbe37a0.js";import{M as J}from"./MultiOriginJSONSupport-b25564d9.js";import{g as F}from"./scaleUtils-5228aa96.js";import{A as q}from"./APIKeyMixin-b7095be4.js";import{S as U,A as _,a as $}from"./SublayersOwner-28d318e8.js";import{A as j}from"./ArcGISService-2712af3c.js";import{B as k}from"./BlendLayer-9a3cb9de.js";import{C}from"./CustomParametersMixin-deeb0655.js";import{O as B}from"./OperationalLayer-5fc72de9.js";import{P as G}from"./PortalLayer-f7130da9.js";import{R as V}from"./RefreshableLayer-6f2dc031.js";import{S as z}from"./ScaleRangeLayer-7e970524.js";import{T as H}from"./TemporalLayer-62474014.js";import{u as K}from"./commonProperties-31665bf0.js";import{E as W}from"./ExportImageParameters-52cef238.js";import{a as D}from"./imageBitmapUtils-e48ef01c.js";import{s as v}from"./sublayerUtils-55042c0b.js";import{s as Q}from"./versionUtils-c0f6b315.js";import"./Version-530b5baf.js";import"./UniqueValueRenderer-621acbf1.js";import"./LegendOptions-fe356083.js";import"./diffUtils-6d46a8ba.js";import"./SizeVariable-f1c59b14.js";import"./colorRamps-3b9c4be9.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-3c389155.js";import"./ColorStop-52e2a166.js";import"./jsonUtils-98d903f2.js";import"./styleUtils-2fd95cb0.js";import"./featureFlags-986067cc.js";import"./jsonUtils-eea84da3.js";import"./DictionaryLoader-d4bf7ad8.js";import"./LRUCache-75f2ea80.js";import"./MemCache-8eec5c08.js";import"./FieldsIndex-91c8dad2.js";import"./heatmapUtils-c9f41040.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./sql-e009a7de.js";import"./QueryTask-439f045d.js";import"./infoFor3D-91dff30a.js";import"./Query-612ec863.js";import"./Field-a5856a62.js";import"./fieldType-7585de06.js";import"./executeForIds-2d4c9b78.js";import"./query-b80addb9.js";import"./normalizeUtils-89acfe4c.js";import"./normalizeUtilsCommon-088d2983.js";import"./pbfQueryUtils-dcfea191.js";import"./pbf-eedd4b9c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-ceba2e44.js";import"./executeQueryJSON-15ebd0aa.js";import"./FeatureSet-10ffd73d.js";import"./featureConversionUtils-f0b03e2b.js";import"./FeatureType-6294a180.js";import"./FeatureTemplate-0339623f.js";import"./labelingInfo-e7968113.js";import"./labelUtils-c3e92de5.js";import"./defaultsJSON-b396ba80.js";import"./serviceCapabilitiesUtils-1a4d569f.js";import"./AttachmentQuery-bcc72e86.js";import"./popupUtils-3663ba6d.js";import"./jsonUtils-1ca84aef.js";import"./parser-4c0b00b2.js";import"./_commonjsHelpers-725317a4.js";import"./portalItemUtils-ae51bb0f.js";import"./ElevationInfo-bbf2ebe0.js";import"./floorFilterUtils-0e56040f.js";let t=class extends k(H(z(U(_(j(B(G(J(V(q(C(O(A))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(x).then(()=>this._fetchService(i))),Promise.resolve(this)}readImageFormat(e,i){const l=i.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,i,l,r){var c;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let m=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((c=this.capabilities.exportMap)!=null&&c.supportsDynamicLayers)){const s=b(r.origin);if(s===f.PORTAL_ITEM){const u=this.createSublayersForOrigin("service").sublayers;m=v(o,u,f.SERVICE)}else if(s>f.PORTAL_ITEM){const u=this.createSublayersForOrigin("portal-item");m=v(o,u.sublayers,b(u.origin))}}const n=[],d={writeSublayerStructure:m,...r};let y=m;o.forEach(s=>{const u=s.write({},d);n.push(u),y=y||s.originOf("visible")==="user"}),n.some(s=>Object.keys(s).length>1)&&(i.layers=n),y&&(i.visibleLayers=o.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,i,l,r){const o=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const m=new W({layer:this,floors:r==null?void 0:r.floors,scale:F({extent:e,width:i})*o}),n=m.toJSON();m.destroy();const d=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},y=e&&e.spatialReference,h=y.wkid||JSON.stringify(y.toJSON());n.dpi*=o;const c={};if(r!=null&&r.timeExtent){const{start:s,end:u}=r.timeExtent.toJSON();s&&u&&s===u?c.time=""+s:c.time=`${s??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:i+","+l,...n,...d,...c}}async fetchImage(e,i,l,r){const{data:o}=await this._fetchImage("image",e,i,l,r);return o}async fetchImageBitmap(e,i,l,r){const{data:o,url:m}=await this._fetchImage("blob",e,i,l,r);return D(o,m,r==null?void 0:r.signal)}async fetchRecomputedExtents(e={}){const i={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await g(this.url,i),{extent:r,fullExtent:o,timeExtent:m}=l,n=r||o;return{fullExtent:n&&w.fromJSON(n),timeExtent:m&&E.fromJSON({start:m[0],end:m[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return Q(this,e)}async _fetchImage(e,i,l,r,o){var d,y,h;const m={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(i,l,r,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(((d=m.query)==null?void 0:d.dynamicLayers)!=null&&!((h=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&h.supportsDynamicLayers))throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:m.query});try{const{data:c}=await g(n,m);return{data:c,url:n}}catch(c){throw L(c)?c:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:c})}}async _fetchService(e){if(this.sourceJSON){this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});return}const{data:i,ssl:l}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl})}};a([p({type:I})],t.prototype,"dateFieldsTimeReference",void 0);a([p({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0);a([p()],t.prototype,"dpi",void 0);a([p()],t.prototype,"gdbVersion",void 0);a([p()],t.prototype,"imageFormat",void 0);a([R("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null);a([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0);a([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0);a([p()],t.prototype,"imageTransparency",void 0);a([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0);a([p({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0);a([p({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0);a([p({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0);a([p({type:I})],t.prototype,"preferredTimeReference",void 0);a([p()],t.prototype,"sourceJSON",void 0);a([p({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0);a([T("sublayers",{layers:{type:[$]},visibleLayers:{type:[N]}})],t.prototype,"writeSublayers",null);a([p({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0);a([p({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0);a([p(K)],t.prototype,"url",void 0);t=a([P("esri.layers.MapImageLayer")],t);const hr=t;export{hr as default};