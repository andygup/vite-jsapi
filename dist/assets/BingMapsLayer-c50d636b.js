import{io as T,ip as x,iq as B,aE as b,aI as y,as as R,T as $,U as h,s as g,af as r,ag as s,ah as S,a4 as P,cR as k,cv as I,cL as L,cN as _,R as O,ir as a,r as M,t as f}from"./index-6c241492.js";import{e as q}from"./imageBitmapUtils-4b1e4b52.js";var m;const c=new P("0/0/0",0,0,0,void 0);let u=m=class extends T(x(B(k))){constructor(){super(...arguments),this.tileInfo=b.create({spatialReference:y.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new R(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,y.WebMercator),this.spatialReference=y.WebMercator}getTileBounds(e,t,i,n){const l=n||$();return c.level=e,c.row=t,c.col=i,c.extent=l,this.tileInfo.updateTileInfo(c),c.extent=void 0,l}fetchTile(e,t,i,n={}){const{signal:l}=n,p=this.getTileUrl(e,t,i),d={responseType:"image",signal:l,query:{...this.refreshParameters}};return h(p??"",d).then(w=>w.data)}async fetchImageBitmapTile(e,t,i,n={}){const{signal:l}=n;if(this.fetchTile!==m.prototype.fetchTile){const U=await this.fetchTile(e,t,i,n);try{return createImageBitmap(U)}catch(j){throw new g("request:server",`Unable to load tile ${e}/${t}/${i}`,{error:j,level:e,row:t,col:i})}}const p=this.getTileUrl(e,t,i)??"",d={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:w}=await h(p,d);return q(w,p)}getTileUrl(){throw new g("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};r([s({type:b})],u.prototype,"tileInfo",void 0),r([s({type:["show","hide"]})],u.prototype,"listMode",void 0),r([s({readOnly:!0,value:"base-tile"})],u.prototype,"type",void 0),r([s({nonNullable:!0})],u.prototype,"fullExtent",void 0),r([s()],u.prototype,"spatialReference",void 0),u=m=r([S("esri.layers.BaseTileLayer")],u);const A=u,v=new I({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),z="https://dev.virtualearth.net";let o=class extends T(L(_(A))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new b({size:[256,256],dpi:96,origin:new O({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:y.WebMercator}),spatialReference:y.WebMercator,lods:[new a({level:1,resolution:78271.5169639999,scale:295828763795777e-6}),new a({level:2,resolution:39135.7584820001,scale:147914381897889e-6}),new a({level:3,resolution:19567.8792409999,scale:73957190948944e-6}),new a({level:4,resolution:9783.93962049996,scale:36978595474472e-6}),new a({level:5,resolution:4891.96981024998,scale:18489297737236e-6}),new a({level:6,resolution:2445.98490512499,scale:9244648868618e-6}),new a({level:7,resolution:1222.99245256249,scale:4622324434309e-6}),new a({level:8,resolution:611.49622628138,scale:2311162217155e-6}),new a({level:9,resolution:305.748113140558,scale:1155581108577e-6}),new a({level:10,resolution:152.874056570411,scale:577790.554289}),new a({level:11,resolution:76.4370282850732,scale:288895.277144}),new a({level:12,resolution:38.2185141425366,scale:144447.638572}),new a({level:13,resolution:19.1092570712683,scale:72223.819286}),new a({level:14,resolution:9.55462853563415,scale:36111.909643}),new a({level:15,resolution:4.77731426794937,scale:18055.954822}),new a({level:16,resolution:2.38865713397468,scale:9027.977411}),new a({level:17,resolution:1.19432856685505,scale:4513.988705}),new a({level:18,resolution:.597164283559817,scale:2256.994353}),new a({level:19,resolution:.298582141647617,scale:1128.497176}),new a({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return M(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return v.toJSON(this.style)}get bingLogo(){return M(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new g("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,i){if(!this.loaded||f(this.bingMetadata))return null;const n=this.bingMetadata.resourceSets[0].resources[0],l=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],p=this._getQuadKey(e,t,i);return n.imageUrl.replace("{subdomain}",l).replace("{quadkey}",p)}async fetchAttributionData(){return this.load().then(()=>f(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(t=>({zoomMin:t.zoomMin,zoomMax:t.zoomMax,score:1,bbox:[t.bbox[0],t.bbox[1],t.bbox[2],t.bbox[3]]}))}))})}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return h(`${z}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(t=>{const i=t.data;if(i.statusCode!==200)throw new g("bingmapslayer:getmetadata",i.statusDescription);if(this.bingMetadata=i,this.bingMetadata.resourceSets.length===0)throw new g("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new g("bingmapslayer:getmetadata","no bing resources")}).catch(t=>{throw new g("bingmapslayer:getmetadata",t.message)})}_getPortalBingKey(){return h(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new g("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new g("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,i){let n="";for(let l=e;l>0;l--){let p=0;const d=1<<l-1;i&d&&(p+=1),t&d&&(p+=2),n+=p.toString()}return n}};r([s({json:{read:!1,write:!1},value:null})],o.prototype,"bingMetadata",null),r([s({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],o.prototype,"type",void 0),r([s({type:b})],o.prototype,"tileInfo",void 0),r([s({type:String,readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"copyright",null),r([s({type:String,json:{write:!1,read:!1}})],o.prototype,"key",void 0),r([s({type:v.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:v.read}}})],o.prototype,"style",void 0),r([s({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],o.prototype,"operationalLayerType",null),r([s({type:String,json:{write:!1,read:!1}})],o.prototype,"culture",void 0),r([s({type:String,json:{write:!1,read:!1}})],o.prototype,"region",void 0),r([s({type:String,json:{write:!0,read:!0}})],o.prototype,"portalUrl",void 0),r([s({type:Boolean,json:{write:!1,read:!1}})],o.prototype,"hasAttributionData",void 0),r([s({type:String,readOnly:!0})],o.prototype,"bingLogo",null),o=r([S("esri.layers.BingMapsLayer")],o);const W=o;export{W as default};
