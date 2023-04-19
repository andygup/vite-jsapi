import{hz as x,aL as z,fn as y,ae as i,af as n,K as I,ai as d,aj as _,hA as C,J as b,bc as N,A as S,bh as E,bd as j,aR as c,hT as P,fE as Z,hU as H,hV as J,a$ as G}from"./index-0cbe37a0.js";import{A as K}from"./Analysis-6743d6be.js";import{p as v}from"./persistable-a86698cc.js";import{E as A}from"./ElevationInfo-bbf2ebe0.js";import{M as U}from"./MultiOriginJSONSupport-b25564d9.js";import{O as W}from"./OperationalLayer-5fc72de9.js";import"./multiOriginJSONSupportUtils-ad07e08e.js";import"./resourceExtension-fe2b4d73.js";import"./lengthUtils-3c389155.js";import"./commonProperties-31665bf0.js";function w(t,e){return O(t)===O(e)}function O(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let s=null;return t.objectId!=null?s=t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?s=t.attributes[t.layer.objectIdField]:s=t.uid,s==null?null:`o-${e}-${s}`}const R={json:{write:{writer:k,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:B}}}};function k(t,e){var s;t==null||((s=t.layer)==null?void 0:s.objectIdField)==null||t.attributes==null||(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function B(t){if(!(t.layerId==null||t.objectId==null))return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends x(z(_)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&w(this.feature,e.feature)}};i([n({type:I,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0);i([n({type:A}),v()],a.prototype,"elevationInfo",void 0);i([n(R)],a.prototype,"feature",void 0);a=i([d("esri.analysis.LineOfSightAnalysisObserver")],a);const F=a;let u=class extends x(C){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&w(this.feature,e.feature)}};i([n({type:I}),v()],u.prototype,"position",void 0);i([n({type:A}),v()],u.prototype,"elevationInfo",void 0);i([n(R)],u.prototype,"feature",void 0);u=i([d("esri.analysis.LineOfSightAnalysisTarget")],u);const $=u;function D(t){return t?X:Y}function Q(t,e){return e==null||!e.mode?D(t).mode:e.mode}function V(t,e){return Q(t!=null?t.hasZ:!1,e)}const X={mode:"absolute-height",offset:0},Y={mode:"on-the-ground",offset:null},g=b.ofType($);let o=class extends K{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(S(()=>this._computeExtent(),e=>{(e==null||e.pending==null)&&this._set("extent",e!=null?e.extent:null)},E))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",j(e,this.targets,g))}get spatialReference(){return this.observer!=null&&this.observer.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[c(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(this.observer==null||this.observer.position==null||e==null)return null;const s=f=>V(f.position,f.elevationInfo)==="absolute-height",l=this.observer.position,m=P(l.x,l.y,l.z,l.x,l.y,l.z);for(const f of this.targets)if(f.position!=null){const p=Z(f.position,e);if(p.pending!=null)return{pending:p.pending,extent:null};if(p.geometry!=null){const{x:T,y:M,z:q}=p.geometry;H(m,[T,M,q])}}const h=J(m,e);return s(this.observer)&&this.targets.every(s)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};i([n({type:["line-of-sight"]})],o.prototype,"type",void 0);i([n({type:F,json:{read:!0,write:!0}})],o.prototype,"observer",void 0);i([n({cast:N,type:g,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null);i([n({value:null,readOnly:!0})],o.prototype,"extent",void 0);i([n({readOnly:!0})],o.prototype,"spatialReference",null);i([n({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null);o=i([d("esri.analysis.LineOfSightAnalysis")],o);const L=o,ee=b.ofType($);let r=class extends W(U(G)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new L,this.opacity=1}initialize(){this.addHandles(S(()=>this.analysis,(e,s)=>{s!=null&&s.parent===this&&(s.parent=null),e!=null&&(e.parent=this)},E))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return c(this.analysis,e=>e.observer)}set observer(e){c(this.analysis,s=>s.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new b}set targets(e){var s;j(e,(s=this.analysis)==null?void 0:s.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new L)}};i([n({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0);i([n({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0);i([n({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null);i([n({type:ee,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null);i([n({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0);i([n({readOnly:!0})],r.prototype,"fullExtent",null);i([n({readOnly:!0})],r.prototype,"spatialReference",null);i([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0);i([n({type:["show","hide"]})],r.prototype,"listMode",void 0);r=i([d("esri.layers.LineOfSightLayer")],r);const ge=r;export{ge as default};