import{nJ as d,aH as b,i2 as s,e as i,y as r,a3 as f,a as p,m as j,ke as h}from"./index-c18a96f3.js";import{g as a}from"./persistable-e815bf27.js";import{h as y}from"./ElevationInfo-6aa5c711.js";function c(t,e){return u(t)===u(e)}function u(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let l=null;return l=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,l==null?null:`o-${e}-${l}`}const I={json:{write:{writer:v,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:$}}}};function v(t,e){var l;t!=null&&((l=t.layer)==null?void 0:l.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function $(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let n=class extends d(b(j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&c(this.feature,e.feature)}};i([r({type:f,json:{write:{isRequired:!0}}})],n.prototype,"position",void 0),i([r({type:y}),a()],n.prototype,"elevationInfo",void 0),i([r(I)],n.prototype,"feature",void 0),n=i([p("esri.analysis.LineOfSightAnalysisObserver")],n);const w=n;let o=class extends d(h){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return s(this.position,t.position)&&s(this.elevationInfo,t.elevationInfo)&&c(this.feature,t.feature)}};i([r({type:f}),a()],o.prototype,"position",void 0),i([r({type:y}),a()],o.prototype,"elevationInfo",void 0),i([r(I)],o.prototype,"feature",void 0),o=i([p("esri.analysis.LineOfSightAnalysisTarget")],o);const x=o;export{x as f,u as l,w as u};