import{au as O,Z as x,eU as b,eQ as f,r as g,bf as w,bC as E,hv as M,E as S,i as L,ae as a,af as p,eY as I,bF as R,bG as T,ai as P,a$ as A,dX as N}from"./index-468a9268.js";import{M as J}from"./MultiOriginJSONSupport-401b6783.js";import{g as F}from"./scaleUtils-8a8e588e.js";import{A as q}from"./APIKeyMixin-0e36183f.js";import{S as U,A as _,a as $}from"./SublayersOwner-8483f0c8.js";import{A as j}from"./ArcGISService-3a9fd22b.js";import{B as k}from"./BlendLayer-3dc4b03d.js";import{C}from"./CustomParametersMixin-dd84a15e.js";import{O as B}from"./OperationalLayer-22d46980.js";import{P as G}from"./PortalLayer-4b72e3f9.js";import{R as V}from"./RefreshableLayer-66cdb688.js";import{S as z}from"./ScaleRangeLayer-58703611.js";import{T as H}from"./TemporalLayer-60387239.js";import{u as K}from"./commonProperties-99999309.js";import{E as W}from"./ExportImageParameters-72724f8d.js";import{a as D}from"./imageBitmapUtils-80e0bffb.js";import{s as v}from"./sublayerUtils-0aed7d9f.js";import{s as Q}from"./versionUtils-694bf051.js";import"./Version-35c6dbb5.js";import"./UniqueValueRenderer-ac017c28.js";import"./LegendOptions-dcb522eb.js";import"./diffUtils-71027438.js";import"./SizeVariable-e8cc32d6.js";import"./colorRamps-4cbb7a49.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-edd0ce65.js";import"./ColorStop-60446843.js";import"./jsonUtils-123a2bd9.js";import"./styleUtils-cc56472a.js";import"./featureFlags-2a723cce.js";import"./jsonUtils-e039d20c.js";import"./DictionaryLoader-f1871e3b.js";import"./LRUCache-d3406418.js";import"./MemCache-3df47c80.js";import"./FieldsIndex-ab7b931c.js";import"./heatmapUtils-adcbaceb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./sql-50f1dd02.js";import"./QueryTask-aa7d58a8.js";import"./infoFor3D-91dff30a.js";import"./Query-ee569148.js";import"./Field-88bfb4af.js";import"./fieldType-31d95250.js";import"./executeForIds-d48309c8.js";import"./query-96f83d41.js";import"./normalizeUtils-9dd6c69b.js";import"./normalizeUtilsCommon-6cabd780.js";import"./pbfQueryUtils-5838fd47.js";import"./pbf-77fea3f9.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./queryZScale-5d7016ca.js";import"./executeQueryJSON-8379d0d8.js";import"./FeatureSet-09da8445.js";import"./featureConversionUtils-78a5344c.js";import"./FeatureType-92af52a5.js";import"./FeatureTemplate-a21b1dd8.js";import"./labelingInfo-94054623.js";import"./labelUtils-e4e35bc9.js";import"./defaultsJSON-b396ba80.js";import"./serviceCapabilitiesUtils-41209a3e.js";import"./AttachmentQuery-43ef875d.js";import"./popupUtils-59ed80cd.js";import"./jsonUtils-e00c5139.js";import"./parser-0c644652.js";import"./_commonjsHelpers-725317a4.js";import"./portalItemUtils-a011a0ff.js";import"./ElevationInfo-3032ca55.js";import"./floorFilterUtils-0e56040f.js";let t=class extends k(H(z(U(_(j(B(G(J(V(q(C(O(A))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(x).then(()=>this._fetchService(i))),Promise.resolve(this)}readImageFormat(e,i){const l=i.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,i,l,r){var c;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let m=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((c=this.capabilities.exportMap)!=null&&c.supportsDynamicLayers)){const s=b(r.origin);if(s===f.PORTAL_ITEM){const u=this.createSublayersForOrigin("service").sublayers;m=v(o,u,f.SERVICE)}else if(s>f.PORTAL_ITEM){const u=this.createSublayersForOrigin("portal-item");m=v(o,u.sublayers,b(u.origin))}}const n=[],d={writeSublayerStructure:m,...r};let y=m;o.forEach(s=>{const u=s.write({},d);n.push(u),y=y||s.originOf("visible")==="user"}),n.some(s=>Object.keys(s).length>1)&&(i.layers=n),y&&(i.visibleLayers=o.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,i,l,r){const o=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const m=new W({layer:this,floors:r==null?void 0:r.floors,scale:F({extent:e,width:i})*o}),n=m.toJSON();m.destroy();const d=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},y=e&&e.spatialReference,h=y.wkid||JSON.stringify(y.toJSON());n.dpi*=o;const c={};if(r!=null&&r.timeExtent){const{start:s,end:u}=r.timeExtent.toJSON();s&&u&&s===u?c.time=""+s:c.time=`${s??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:i+","+l,...n,...d,...c}}async fetchImage(e,i,l,r){const{data:o}=await this._fetchImage("image",e,i,l,r);return o}async fetchImageBitmap(e,i,l,r){const{data:o,url:m}=await this._fetchImage("blob",e,i,l,r);return D(o,m,r==null?void 0:r.signal)}async fetchRecomputedExtents(e={}){const i={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await g(this.url,i),{extent:r,fullExtent:o,timeExtent:m}=l,n=r||o;return{fullExtent:n&&w.fromJSON(n),timeExtent:m&&E.fromJSON({start:m[0],end:m[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return Q(this,e)}async _fetchImage(e,i,l,r,o){var d,y,h;const m={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(i,l,r,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(((d=m.query)==null?void 0:d.dynamicLayers)!=null&&!((h=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&h.supportsDynamicLayers))throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:m.query});try{const{data:c}=await g(n,m);return{data:c,url:n}}catch(c){throw L(c)?c:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:c})}}async _fetchService(e){if(this.sourceJSON){this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});return}const{data:i,ssl:l}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl})}};a([p({type:I})],t.prototype,"dateFieldsTimeReference",void 0);a([p({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0);a([p()],t.prototype,"dpi",void 0);a([p()],t.prototype,"gdbVersion",void 0);a([p()],t.prototype,"imageFormat",void 0);a([R("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null);a([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0);a([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0);a([p()],t.prototype,"imageTransparency",void 0);a([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0);a([p({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0);a([p({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0);a([p({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0);a([p({type:I})],t.prototype,"preferredTimeReference",void 0);a([p()],t.prototype,"sourceJSON",void 0);a([p({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0);a([T("sublayers",{layers:{type:[$]},visibleLayers:{type:[N]}})],t.prototype,"writeSublayers",null);a([p({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0);a([p({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0);a([p(K)],t.prototype,"url",void 0);t=a([P("esri.layers.MapImageLayer")],t);const hr=t;export{hr as default};