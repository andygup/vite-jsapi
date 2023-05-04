import{h5 as w,aq as $,Y as I,ho as b,hl as f,bv as O,L as g,by as T,bA as E,r5 as M,K as v,k as R,e as s,y as p,hu as x,bD as L,bE as P,a as F,a$ as N,fz as j}from"./index-c18a96f3.js";import{O as q}from"./MultiOriginJSONSupport-309fe89a.js";import{i as J}from"./APIKeyMixin-66195343.js";import{E as U,f as k,Y as A}from"./SublayersOwner-9be0c97c.js";import{l as _}from"./ArcGISService-776e388b.js";import{a as z}from"./BlendLayer-1406a3b7.js";import{o as V}from"./CustomParametersMixin-22e0ea3b.js";import{c as D}from"./OperationalLayer-5e561312.js";import{j as K}from"./PortalLayer-86ea101d.js";import{t as B}from"./ScaleRangeLayer-972bc331.js";import{a as C}from"./TemporalLayer-29628135.js";import{f as G}from"./commonProperties-797d5904.js";import{m as H}from"./ExportImageParameters-59178cce.js";import{t as W}from"./imageBitmapUtils-6d85ffa7.js";import{e as S}from"./sublayerUtils-022dca59.js";import{e as Y}from"./versionUtils-cabdac94.js";import"./portalItemUtils-8a77bd20.js";import"./UniqueValueRenderer-8560c516.js";import"./ColorStop-c5089175.js";import"./diffUtils-2a9fee10.js";import"./colorRamps-8bdec164.js";import"./jsonUtils-976e92af.js";import"./DictionaryLoader-6a0ef31f.js";import"./LRUCache-126d04a0.js";import"./FieldsIndex-b071eb44.js";import"./heatmapUtils-103df89c.js";import"./sql-29d214a6.js";import"./QueryTask-ccbe7da5.js";import"./infoFor3D-5881142c.js";import"./Query-f6fbedf0.js";import"./executeForIds-e6f23073.js";import"./query-e124a463.js";import"./normalizeUtils-55909f8c.js";import"./normalizeUtilsCommon-f4f57432.js";import"./pbfQueryUtils-c33d2f62.js";import"./pbf-355c66cc.js";import"./queryZScale-275d69e0.js";import"./executeQueryJSON-b4d1c649.js";import"./FeatureSet-037cc3b1.js";import"./FeatureType-f1f1b192.js";import"./FeatureTemplate-da015408.js";import"./labelingInfo-75f20c49.js";import"./defaults-2a29a8d1.js";import"./defaultsJSON-59981e75.js";import"./serviceCapabilitiesUtils-5f3d913c.js";import"./AttachmentQuery-79b9f34f.js";import"./popupUtils-0e81192d.js";import"./jsonUtils-266f6943.js";import"./ElevationInfo-6aa5c711.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends z(C(B(U(k(_(D(K(q(w(J(V($(N))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(I).then(()=>this._fetchService(o))),Promise.resolve(this)}readImageFormat(e,o){const m=o.supportedImageFormatTypes;return m&&m.includes("PNG32")?"png32":"png24"}writeSublayers(e,o,m,t){var y;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((y=this.capabilities.exportMap)!=null&&y.supportsDynamicLayers)){const r=b(t.origin);if(r===f.PORTAL_ITEM){const c=this.createSublayersForOrigin("service").sublayers;n=S(a,c,f.SERVICE)}else if(r>f.PORTAL_ITEM){const c=this.createSublayersForOrigin("portal-item");n=S(a,c.sublayers,b(c.origin))}}const l=[],d={writeSublayerStructure:n,...t};let h=n;a.forEach(r=>{const c=r.write({},d);l.push(c),h=h||r.originOf("visible")==="user"}),l.some(r=>Object.keys(r).length>1)&&(o.layers=l),h&&(o.visibleLayers=a.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,o,m,t){const a=t&&t.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const n=new H({layer:this,floors:t==null?void 0:t.floors,scale:O({extent:e,width:o})*a}),l=n.toJSON();n.destroy();const d=!t||!t.rotation||this.version<10.3?{}:{rotation:-t.rotation},h=e&&e.spatialReference,y=h.wkid||JSON.stringify(h.toJSON());l.dpi*=a;const r={};if(t!=null&&t.timeExtent){const{start:c,end:u}=t.timeExtent.toJSON();r.time=c&&u&&c===u?""+c:`${c??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:o+","+m,...l,...d,...r}}async fetchImage(e,o,m,t){const{data:a}=await this._fetchImage("image",e,o,m,t);return a}async fetchImageBitmap(e,o,m,t){const{data:a,url:n}=await this._fetchImage("blob",e,o,m,t);return W(a,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:m}=await g(this.url,o),{extent:t,fullExtent:a,timeExtent:n}=m,l=t||a;return{fullExtent:l&&T.fromJSON(l),timeExtent:n&&E.fromJSON({start:n[0],end:n[1]})}}loadAll(){return M(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return Y(this,e)}async _fetchImage(e,o,m,t,a){var d,h,y;const n={responseType:e,signal:(a==null?void 0:a.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(o,m,t,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(((d=n.query)==null?void 0:d.dynamicLayers)!=null&&!((y=(h=this.capabilities)==null?void 0:h.exportMap)!=null&&y.supportsDynamicLayers))throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:r}=await g(l,n);return{data:r,url:l}}catch(r){throw R(r)?r:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:o,ssl:m}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});m&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o,this.read(o,{origin:"service",url:this.parsedUrl})}};s([p({type:x})],i.prototype,"dateFieldsTimeReference",void 0),s([p({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),s([p()],i.prototype,"dpi",void 0),s([p()],i.prototype,"gdbVersion",void 0),s([p()],i.prototype,"imageFormat",void 0),s([L("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),s([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),s([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),s([p()],i.prototype,"imageTransparency",void 0),s([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([p({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),s([p({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([p({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([p({type:x})],i.prototype,"preferredTimeReference",void 0),s([p()],i.prototype,"sourceJSON",void 0),s([p({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),s([P("sublayers",{layers:{type:[A]},visibleLayers:{type:[j]}})],i.prototype,"writeSublayers",null),s([p({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([p({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),s([p(G)],i.prototype,"url",void 0),i=s([F("esri.layers.MapImageLayer")],i);const Ge=i;export{Ge as default};