import{ae as i,af as s,bF as S,bG as c,ai as x,bD as g,bK as P,dn as L,aY as E,dp as j,cH as I,cG as O,dq as B,dr as J,ds as D,cF as w,J as G,s as M}from"./index-175d32d0.js";import{w as d,u as V,_ as F,x as R,f as z,g as H}from"./labelUtils-358af0bc.js";import{l as U,o as k,S as q,t as K,r as W,s as Y,y as _}from"./defaultsJSON-b087dd4d.js";import{i as h}from"./jsonUtils-a54641ba.js";var y;let p=y=class extends g{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?d(r.value):e}writeExpression(e,r,t){this.value!=null&&(e=d(this.value)),e!=null&&(r[t]=e)}clone(){return new y({expression:this.expression,title:this.title,value:this.value})}};i([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),i([S("expression",["expression","value"])],p.prototype,"readExpression",null),i([c("expression")],p.prototype,"writeExpression",null),i([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),i([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=y=i([x("esri.layers.support.LabelExpressionInfo")],p);const $=p,ae=P.fromJSON(U),pe=L.fromJSON(k),ce=E.fromJSON(q),Q=j.fromJSON(K),ue=P.fromJSON(W),be=L.fromJSON(Y),fe=E.fromJSON(_);var v;const u=new I({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function b(e,r,t){return{enabled:!D(t==null?void 0:t.layer)}}function C(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function T(e){return(e==null?void 0:e.type)==="map-image"}function A(e){var r,t;return!!T(e)&&!!((t=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&t.supportsArcadeExpressionForLabeling)}function X(e){return C(e)||A(e==null?void 0:e.layer)}let o=v=class extends g{static evaluateWhere(e,r){const t=(n,l,a)=>{switch(l){case"=":return n==a;case"<>":return n!=a;case">":return n>a;case">=":return n>=a;case"<":return n<a;case"<=":return n<=a}return!1};try{if(e==null)return!0;const n=e.split(" ");if(n.length===3)return t(r[n[0]],n[1],n[2]);if(n.length===7){const l=t(r[n[0]],n[1],n[2]),a=n[3],f=t(r[n[4]],n[5],n[6]);switch(a){case"AND":return l&&f;case"OR":return l||f}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=Q,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=V(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const n=F(this.labelExpressionInfo.expression);n&&(e="["+n+"]")}}e!=null&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,n){if(e==null&&this.labelExpression!=null&&C(n))e=new $({expression:this.getLabelExpressionArcade()});else if(!e)return;const l=e.toJSON(n);l.expression&&(r[t]=l)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return R(this)}getLabelExpressionArcade(){return z(this)}getLabelExpressionSingleField(){return H(this)}hash(){return JSON.stringify(this)}clone(){return new v({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:w(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:w(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};i([s({type:String,json:{write:!0}})],o.prototype,"name",void 0),i([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:b}}}}})],o.prototype,"allowOverrun",void 0),i([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:b}}}}})],o.prototype,"deconflictionStrategy",void 0),i([s({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&(t==null?void 0:t.origin)==="service"&&A(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],o.prototype,"labelExpression",void 0),i([S("labelExpression")],o.prototype,"readLabelExpression",null),i([c("labelExpression")],o.prototype,"writeLabelExpression",null),i([s({type:$,json:{write:{overridePolicy:(e,r,t)=>X(t)?{allowNull:!0}:{enabled:!1}}}})],o.prototype,"labelExpressionInfo",void 0),i([c("labelExpressionInfo")],o.prototype,"writeLabelExpressionInfo",null),i([s({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],o.prototype,"labelPlacement",void 0),i([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],o.prototype,"labelPosition",void 0),i([s({type:Number})],o.prototype,"maxScale",void 0),i([c("maxScale")],o.prototype,"writeMaxScale",null),i([s({type:Number})],o.prototype,"minScale",void 0),i([c("minScale")],o.prototype,"writeMinScale",null),i([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],o.prototype,"repeatLabel",void 0),i([s({type:Number,cast:O,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],o.prototype,"repeatLabelDistance",void 0),i([s({types:B,json:{origins:{"web-scene":{types:J,write:h,default:null}},write:h,default:null}})],o.prototype,"symbol",void 0),i([s({type:Boolean,json:{write:!0}})],o.prototype,"useCodedValues",void 0),i([s({type:String,json:{write:!0}})],o.prototype,"where",void 0),o=v=i([x("esri.layers.support.LabelClass")],o);const Z=o,m=G.getLogger("esri.layers.support.labelingInfo"),ee=/\[([^\[\]]+)\]/gi;function me(e,r,t){return e?e.map(n=>{const l=new Z;if(l.read(n,t),l.labelExpression){const a=r.fields||r.layerDefinition&&r.layerDefinition.fields||this.fields;l.labelExpression=l.labelExpression.replace(ee,(f,N)=>`[${re(N,a)}]`)}return l}):null}function re(e,r){if(!r)return e;const t=e.toLowerCase();for(let n=0;n<r.length;n++){const l=r[n].name;if(l.toLowerCase()===t)return l}return e}const te={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function we(e,r){const t=w(e);return t.some(n=>ne(n,r))?[]:t}function ne(e,r){const t=e.labelPlacement,n=te[r];if(!e.symbol)return m.warn("No ILabelClass symbol specified."),!0;if(!n)return m.error(new M("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),!0;if(!n.includes(t)){const l=n[0];t&&m.warn(`Found invalid label placement type ${t} for ${r}. Defaulting to ${l}`),e.labelPlacement=l}return!1}export{Z as C,ue as N,be as O,ae as S,ce as a,we as c,me as i,pe as u,fe as y};
