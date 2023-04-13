import{ae as n,af as o,bF as L,bG as b,ai as h,bD as P,bK as x,dm as E,aY as N,dn as O,cG as B,cF as D,dp as j,dq as J,dr as _,cE as y,L as F,E as $}from"./index-b4b3ae7d.js";import{c as v,t as M,g as V,a as T,b as G,d as R}from"./labelUtils-491f598f.js";import{d as q,a as z,b as k,c as K,e as U,f as W,g as H}from"./defaultsJSON-b396ba80.js";import{w as g}from"./jsonUtils-1eb97f8f.js";var S;let c=S=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?v(r.value):e}writeExpression(e,r,s){this.value!=null&&(e=v(this.value)),e!=null&&(r[s]=e)}clone(){return new S({expression:this.expression,title:this.title,value:this.value})}};n([o({type:String,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"expression",void 0);n([L("expression",["expression","value"])],c.prototype,"readExpression",null);n([b("expression")],c.prototype,"writeExpression",null);n([o({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],c.prototype,"title",void 0);n([o({json:{read:!1,write:!1}})],c.prototype,"value",void 0);c=S=n([h("esri.layers.support.LabelExpressionInfo")],c);const A=c,pe=x.fromJSON(q),ce=E.fromJSON(z),be=N.fromJSON(k),Y=O.fromJSON(K),ue=x.fromJSON(U),fe=E.fromJSON(W),me=N.fromJSON(H);var w;const f=new B({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function m(l,e,r){return{enabled:!_(r==null?void 0:r.layer)}}function I(l){var e;return l?l.origin==="service"?!1:((e=l.layer)==null?void 0:e.type)!=="map-image":!0}function Q(l){return(l==null?void 0:l.type)==="map-image"}function C(l){var e,r;return Q(l)?!!((r=(e=l.capabilities)==null?void 0:e.exportMap)!=null&&r.supportsArcadeExpressionForLabeling):!1}function X(l){return I(l)||C(l==null?void 0:l.layer)}let i=w=class extends P{static evaluateWhere(e,r){const s=(t,a,p)=>{switch(a){case"=":return t==p;case"<>":return t!=p;case">":return t>p;case">=":return t>=p;case"<":return t<p;case"<=":return t<=p}return!1};try{if(e==null)return!0;const t=e.split(" ");if(t.length===3)return s(r[t[0]],t[1],t[2]);if(t.length===7){const a=s(r[t[0]],t[1],t[2]),p=t[3],u=s(r[t[4]],t[5],t[6]);switch(p){case"AND":return a&&u;case"OR":return a||u}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=Y,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const s=r.labelExpressionInfo;if(!(s&&(s.value||s.expression)))return e}writeLabelExpression(e,r,s){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=M(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const t=V(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}}e!=null&&(r[s]=e)}writeLabelExpressionInfo(e,r,s,t){if(e==null&&this.labelExpression!=null&&I(t))e=new A({expression:this.getLabelExpressionArcade()});else if(!e)return;const a=e.toJSON(t);a.expression&&(r[s]=a)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return T(this)}getLabelExpressionArcade(){return G(this)}getLabelExpressionSingleField(){return R(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:y(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:y(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};n([o({type:String,json:{write:!0}})],i.prototype,"name",void 0);n([o({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:m}}}}})],i.prototype,"allowOverrun",void 0);n([o({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:m}}}}})],i.prototype,"deconflictionStrategy",void 0);n([o({type:String,json:{write:{overridePolicy(l,e,r){return this.labelExpressionInfo&&(r==null?void 0:r.origin)==="service"&&C(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0);n([L("labelExpression")],i.prototype,"readLabelExpression",null);n([b("labelExpression")],i.prototype,"writeLabelExpression",null);n([o({type:A,json:{write:{overridePolicy(l,e,r){return X(r)?{allowNull:!0}:{enabled:!1}}}}})],i.prototype,"labelExpressionInfo",void 0);n([b("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null);n([o({type:f.apiValues,json:{type:f.jsonValues,read:f.read,write:f.write}})],i.prototype,"labelPlacement",void 0);n([o({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0);n([o({type:Number})],i.prototype,"maxScale",void 0);n([b("maxScale")],i.prototype,"writeMaxScale",null);n([o({type:Number})],i.prototype,"minScale",void 0);n([b("minScale")],i.prototype,"writeMinScale",null);n([o({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:m}}}}})],i.prototype,"repeatLabel",void 0);n([o({type:Number,cast:D,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:m}}}}})],i.prototype,"repeatLabelDistance",void 0);n([o({types:j,json:{origins:{"web-scene":{types:J,write:g,default:null}},write:g,default:null}})],i.prototype,"symbol",void 0);n([o({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0);n([o({type:String,json:{write:!0}})],i.prototype,"where",void 0);i=w=n([h("esri.layers.support.LabelClass")],i);const Z=i,d=F.getLogger("esri.layers.support.labelingInfo"),ee=/\[([^\[\]]+)\]/gi;function ye(l,e,r){return l?l.map(s=>{const t=new Z;if(t.read(s,r),t.labelExpression){const a=e.fields||e.layerDefinition&&e.layerDefinition.fields||this.fields;t.labelExpression=t.labelExpression.replace(ee,(p,u)=>`[${re(u,a)}]`)}return t}):null}function re(l,e){if(!e)return l;const r=l.toLowerCase();for(let s=0;s<e.length;s++){const t=e[s].name;if(t.toLowerCase()===r)return t}return l}const te={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function Se(l,e){const r=y(l);return r.some(t=>le(t,e))?[]:r}function le(l,e){const r=l.labelPlacement,s=te[e];if(!l.symbol)return d.warn("No ILabelClass symbol specified."),!0;if(!s)return d.error(new $("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${e}' is not supported`)),!0;if(!s.includes(r)){const a=s[0];r&&d.warn(`Found invalid label placement type ${r} for ${e}. Defaulting to ${a}`),l.labelPlacement=a}return!1}export{Z as L,me as a,ue as b,ce as c,be as d,fe as e,pe as f,ye as r,Se as v};