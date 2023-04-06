import{iq as w,i$ as $,ir as I,eu as O,ev as T,ew as E,ex as R,is as M,iD as j,iY as L,bp as N,$ as P,jK as v,e2 as g,aN as F,L as f,ap as q,aR as J,iE as U,jr as A,s as b,d as k,ab as i,ac as n,jW as x,aU as _,aV as V,eA as z,ad as D,d$ as K,hs as W}from"./index-21a3eccc.js";import{E as B,y as C,Y as G}from"./SublayersOwner-281a1299.js";import{m as H}from"./ExportImageParameters-f302adc5.js";import{t as Y}from"./imageBitmapUtils-8457db79.js";import{e as S}from"./sublayerUtils-b9aa253a.js";import"./Version-8d01c745.js";import"./QueryTask-bf9a328f.js";import"./executeForIds-f44589ae.js";import"./floorFilterUtils-080a7cd2.js";let s=class extends w($(I(B(C(O(T(E(R(M(j(L(N(K))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(P).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const l=a.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,l,t){var d;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let p=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((d=this.capabilities.exportMap)!=null&&d.supportsDynamicLayers)){const r=v(t.origin);if(r===g.PORTAL_ITEM){const m=this.createSublayersForOrigin("service").sublayers;p=S(o,m,g.SERVICE)}else if(r>g.PORTAL_ITEM){const m=this.createSublayersForOrigin("portal-item");p=S(o,m.sublayers,v(m.origin))}}const c=[],h={writeSublayerStructure:p,...t};let y=p;o.forEach(r=>{const m=r.write({},h);c.push(m),y=y||r.originOf("visible")==="user"}),c.some(r=>Object.keys(r).length>1)&&(a.layers=c),y&&(a.visibleLayers=o.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,a,l,t){const o=t&&t.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const p=new H({layer:this,floors:t==null?void 0:t.floors,scale:F({extent:e,width:a})*o}),c=p.toJSON();p.destroy();const h=!t||!t.rotation||this.version<10.3?{}:{rotation:-t.rotation},y=e&&e.spatialReference,d=y.wkid||JSON.stringify(y.toJSON());c.dpi*=o;const r={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();r.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:a+","+l,...c,...h,...r}}async fetchImage(e,a,l,t){const{data:o}=await this._fetchImage("image",e,a,l,t);return o}async fetchImageBitmap(e,a,l,t){const{data:o,url:p}=await this._fetchImage("blob",e,a,l,t);return Y(o,p,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,a),{extent:t,fullExtent:o,timeExtent:p}=l,c=t||o;return{fullExtent:c&&q.fromJSON(c),timeExtent:p&&J.fromJSON({start:p[0],end:p[1]})}}loadAll(){return U(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return A(this,e)}async _fetchImage(e,a,l,t,o){var h,y,d;const p={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,l,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(((h=p.query)==null?void 0:h.dynamicLayers)!=null&&!((d=(y=this.capabilities)==null?void 0:y.exportMap)!=null&&d.supportsDynamicLayers))throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:r}=await f(c,p);return{data:r,url:c}}catch(r){throw k(r)?r:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n({type:x})],s.prototype,"dateFieldsTimeReference",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([_("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n({type:x})],s.prototype,"preferredTimeReference",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([V("sublayers",{layers:{type:[G]},visibleLayers:{type:[W]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(z)],s.prototype,"url",void 0),s=i([D("esri.layers.MapImageLayer")],s);const oe=s;export{oe as default};