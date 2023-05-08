import{af as r,ag as i,aj as f,bD as N,eG as V,eH as G,en as F,bb as A,bG as I,bF as m,ey as _,cI as d,cM as c,fc as H}from"./index-6eb28d6b.js";import{w as K}from"./FeatureEffect-d27dd9c4.js";import{a as g,c as P}from"./clusterUtils-f9477424.js";import{A as L}from"./UniqueValueRenderer-96d9835c.js";import{b as B,o as S,p as x}from"./jsonUtils-4ca2381c.js";import{m as O,p as k}from"./commonProperties-71c0550b.js";import{C as D}from"./labelingInfo-e90eb8c8.js";const M={write:{allowNull:!0}},ne=n=>{let e=class extends n{constructor(){super(...arguments),this.featureEffect=null}};return r([i({type:K,json:{origins:{"web-map":M,"portal-item":M}}})],e.prototype,"featureEffect",void 0),e=r([f("esri.layers.mixins.FeatureEffectLayer")],e),e};let y=class extends N{constructor(){super(...arguments),this.type=null}};r([i({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=r([f("esri.layers.support.FeatureReduction")],y);var R;const w=V({types:G}),Q="esri.layers.support.FeatureReductionBinning";let p=R=class extends y{constructor(n){super(n),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(n,e,o){const t=n.filter(s=>s.statisticType!=="avg_angle").map(s=>s.toJSON());_(o,t,e)}readRenderer(n,e,o){var s;const t=(s=e.drawingInfo)==null?void 0:s.renderer;return t?S(t,e,o)??void 0:e.defaultSymbol?e.types&&e.types.length?new L({defaultSymbol:w(e.defaultSymbol,e,o),field:e.typeIdField,uniqueValueInfos:e.types.map(a=>({id:a.id,symbol:w(a.symbol,a,o)}))}):new x({symbol:w(e.defaultSymbol,e,o)}):null}clone(){return new R({fields:d(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate),renderer:d(this.renderer)})}};r([F({binning:"binning"})],p.prototype,"type",void 0),r([F({geohash:"geohash"})],p.prototype,"binType",void 0),r([i({type:Number,range:{min:1,max:9},json:{write:!0}})],p.prototype,"fixedBinLevel",void 0),r([i({type:[D],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],p.prototype,"labelingInfo",void 0),r([i(O)],p.prototype,"labelsVisible",void 0),r([i({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],p.prototype,"maxScale",void 0),r([i(k)],p.prototype,"popupEnabled",void 0),r([i({type:A,json:{name:"popupInfo",write:!0}})],p.prototype,"popupTemplate",void 0),r([i({type:[g],json:{write:!0}})],p.prototype,"fields",void 0),r([I("fields")],p.prototype,"writeFields",null),r([i({types:B,json:{write:{target:"drawingInfo.renderer"}}})],p.prototype,"renderer",void 0),r([m("renderer",["drawingInfo.renderer"])],p.prototype,"readRenderer",null),p=R=r([f(Q)],p);const J=p;var $;const v=V({types:G}),U="esri.layers.support.FeatureReductionCluster";function T(n){var e;return n.type==="simple"&&!((e=n.visualVariables)!=null&&e.length)}let l=$=class extends N{constructor(n){super(n),this.type="cluster",this.clusterRadius=c("80px"),this.clusterMinSize=c("12px"),this.clusterMaxSize=c("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(n,e,o){var s,a;const t=(s=e.drawingInfo)==null?void 0:s.renderer;return(a=t==null?void 0:t.authoringInfo)!=null&&a.isAutoGenerated?null:t?T(t)?null:S(t,e,o)??void 0:e.defaultSymbol?e.types&&e.types.length?new L({defaultSymbol:v(e.defaultSymbol,e,o),field:e.typeIdField,uniqueValueInfos:e.types.map(u=>({id:u.id,symbol:v(u.symbol,u,o)}))}):new x({symbol:v(e.defaultSymbol,e,o)}):null}readSymbol(n,e,o){var s,a;const t=(s=e.drawingInfo)==null?void 0:s.renderer;if((a=t==null?void 0:t.authoringInfo)!=null&&a.isAutoGenerated)return null;if(t&&T(t)){const u=S(t,e,o);return u==null?void 0:u.symbol}return null}writeSymbol(n,e,o,t){var a,u;const s=(u=(a=this.renderer)==null?void 0:a.authoringInfo)==null?void 0:u.isAutoGenerated;if(!this.renderer||s){const b=new x({symbol:n});e.drawingInfo={renderer:b.write({},t)}}}writeFields(n,e,o){const t=n.filter(s=>s.statisticType!=="avg_angle").map(s=>s.toJSON());_(o,t,e)}readFields(n,e,o){return n.filter(t=>!t.isAutoGenerated).map(t=>g.fromJSON(t))}clone(){return new $({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:d(this.labelingInfo),labelsVisible:this.labelsVisible,fields:d(this.fields),maxScale:this.maxScale,renderer:d(this.renderer),symbol:d(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:d(this.popupTemplate)})}};r([i({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),r([i({type:Number,cast:n=>n==="auto"?n:c(n),json:{write:!0}})],l.prototype,"clusterRadius",void 0),r([i({type:Number,cast:c,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),r([i({type:Number,cast:c,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),r([i({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),r([i(k)],l.prototype,"popupEnabled",void 0),r([i({type:A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),r([i({types:B,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),r([m("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),r([i({types:H})],l.prototype,"symbol",void 0),r([m("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),r([I("symbol")],l.prototype,"writeSymbol",null),r([i({type:[D],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),r([i(O)],l.prototype,"labelsVisible",void 0),r([i({type:[g],json:{write:!0}})],l.prototype,"fields",void 0),r([I("fields")],l.prototype,"writeFields",null),r([m("fields")],l.prototype,"readFields",null),l=$=r([f(U)],l);const q=l;var j;let h=j=class extends y{constructor(n){super(n),this.type="selection"}clone(){return new j}};r([i({type:["selection"]})],h.prototype,"type",void 0),h=j=r([f("esri.layers.support.FeatureReductionSelection")],h);const z=h,E={key:"type",base:y,typeMap:{cluster:q,binning:J}},W={types:{key:"type",base:y,typeMap:{selection:z,cluster:q,binning:J}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:E},"portal-item":{types:E},"web-scene":{types:{key:"type",base:y,typeMap:{selection:z}}}}}},se=n=>{let e=class extends n{constructor(...o){super(...o),this.own(this.watch("renderer",()=>{if(this.featureReduction){const t=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",t)}},!0))}set featureReduction(o){const t=this._normalizeFeatureReduction(o);this._set("featureReduction",t)}set renderer(o){}_normalizeFeatureReduction(o){var b;if((o==null?void 0:o.type)!=="cluster")return o;const t=o.clone(),s=[new g({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],a=(t.fields??[]).filter(C=>!C.isAutoGenerated);if(o.renderer&&!((b=o.renderer.authoringInfo)!=null&&b.isAutoGenerated))return t.fields=[...s,...a],t;if(o.symbol)return t.fields=[...s,...a],t.renderer=null,t;if(!this.renderer)return o;const u=P(s,this.renderer,o,null,!1);return t.fields=[...s,...a],t.renderer=u,t}};return r([i(W)],e.prototype,"featureReduction",null),e=r([f("esri.layers.mixins.FeatureReductionLayer")],e),e};export{z as a,se as n,ne as p,y as t};
