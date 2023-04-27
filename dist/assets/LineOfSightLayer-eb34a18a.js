import{hO as I,aL as A,fp as y,ae as i,af as n,K as j,ai as d,aj as P,hP as T,V as b,bc as N,D as x,bh as w,bd as O,aR as c,i6 as C,fG as H,i7 as D,i8 as G,a$ as K}from"./index-175d32d0.js";import{c as M}from"./Analysis-88b69793.js";import{g as f}from"./persistable-d56b2306.js";import{h as L}from"./ElevationInfo-ed295995.js";import{O as V}from"./MultiOriginJSONSupport-717d0bca.js";import{c as Z}from"./OperationalLayer-99f6f269.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-357b5562.js";import"./lengthUtils-349f6f20.js";import"./commonProperties-1c6cac45.js";function R(t,e){return m(t)===m(e)}function m(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let s=null;return s=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,s==null?null:`o-${e}-${s}`}const E={json:{write:{writer:k,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:B}}}};function k(t,e){var s;t!=null&&((s=t.layer)==null?void 0:s.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function B(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let l=class extends I(A(P)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};i([n({type:j,json:{write:{isRequired:!0}}})],l.prototype,"position",void 0),i([n({type:L}),f()],l.prototype,"elevationInfo",void 0),i([n(E)],l.prototype,"feature",void 0),l=i([d("esri.analysis.LineOfSightAnalysisObserver")],l);const F=l;let a=class extends I(T){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};i([n({type:j}),f()],a.prototype,"position",void 0),i([n({type:L}),f()],a.prototype,"elevationInfo",void 0),i([n(E)],a.prototype,"feature",void 0),a=i([d("esri.analysis.LineOfSightAnalysisTarget")],a);const S=a;function J(t){return t?W:X}function Q(t,e){return e!=null&&e.mode?e.mode:J(t).mode}function U(t,e){return Q(t!=null&&t.hasZ,e)}const W={mode:"absolute-height",offset:0},X={mode:"on-the-ground",offset:null},g=b.ofType(S);let o=class extends M{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(x(()=>this._computeExtent(),t=>{t!=null&&t.pending!=null||this._set("extent",t!=null?t.extent:null)},w))}get targets(){return this._get("targets")||new g}set targets(t){this._set("targets",O(t,this.targets,g))}get spatialReference(){return this.observer!=null&&this.observer.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[c(this.observer,t=>t.position)]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(this.observer==null||this.observer.position==null||t==null)return null;const e=u=>U(u.position,u.elevationInfo)==="absolute-height",s=this.observer.position,v=C(s.x,s.y,s.z,s.x,s.y,s.z);for(const u of this.targets)if(u.position!=null){const p=H(u.position,t);if(p.pending!=null)return{pending:p.pending,extent:null};if(p.geometry!=null){const{x:z,y:q,z:_}=p.geometry;D(v,[z,q,_])}}const h=G(v,t);return e(this.observer)&&this.targets.every(e)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};i([n({type:["line-of-sight"]})],o.prototype,"type",void 0),i([n({type:F,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),i([n({cast:N,type:g,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),i([n({value:null,readOnly:!0})],o.prototype,"extent",void 0),i([n({readOnly:!0})],o.prototype,"spatialReference",null),i([n({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=i([d("esri.analysis.LineOfSightAnalysis")],o);const $=o,Y=b.ofType(S);let r=class extends Z(V(K)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new $,this.opacity=1}initialize(){this.addHandles(x(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},w))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return c(this.analysis,t=>t.observer)}set observer(t){c(this.analysis,e=>e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new b}set targets(t){var e;O(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new $)}};i([n({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([n({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),i([n({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),i([n({type:Y,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),i([n({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),i([n({readOnly:!0})],r.prototype,"fullExtent",null),i([n({readOnly:!0})],r.prototype,"spatialReference",null),i([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),i([n({type:["show","hide"]})],r.prototype,"listMode",void 0),r=i([d("esri.layers.LineOfSightLayer")],r);const yt=r;export{yt as default};
