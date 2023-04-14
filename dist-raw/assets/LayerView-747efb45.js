import{ae as t,af as s,ai as c,bD as C,bB as O,cJ as A,bf as L,cc as V,J as q,bd as x,cK as I,E as _,A as u,bh as p,an as $,au as M,aM as N,cL as E,aP as U,aj as j,L as H}from"./index-468a9268.js";import{C as D}from"./Container-f10645ec.js";let f=class extends C{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([s({readOnly:!0})],f.prototype,"version",null);f=t([c("esri.views.layers.support.ClipArea")],f);const b=f;var w;let h=w=class extends b{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new w({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([s({type:[Number,String],json:{write:!0}})],h.prototype,"left",void 0);t([s({type:[Number,String],json:{write:!0}})],h.prototype,"right",void 0);t([s({type:[Number,String],json:{write:!0}})],h.prototype,"top",void 0);t([s({type:[Number,String],json:{write:!0}})],h.prototype,"bottom",void 0);h=w=t([c("esri.views.layers.support.ClipRect")],h);const T=h;var R;const G={base:A,key:"type",typeMap:{extent:L,polygon:V}};let g=R=class extends b{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e;return new R({geometry:((e=this.geometry)==null?void 0:e.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([s({types:G,json:{read:O,write:!0}})],g.prototype,"geometry",void 0);g=R=t([c("esri.views.layers.support.Geometry")],g);const k=g;let v=class extends b{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([s({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0);v=t([c("esri.views.layers.support.Path")],v);const J=v,m=q.ofType({key:"type",base:null,typeMap:{rect:T,path:J,geometry:k}}),X=d=>{let e=class extends d{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var l,y,S;const i=((l=this.view)==null?void 0:l.spatialReferenceLocked)??!0;if(((y=this.view)==null?void 0:y.spatialReference)&&i&&!this.spatialReferenceSupported){this.addResolvingPromise(Promise.reject(new _("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})));return}this.container||(this.container=new D),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([u(()=>this.suspended,r=>{this.container&&(this.container.visible=!r),this.view&&!r&&this.updateRequested&&this.view.requestUpdate()},p),u(()=>{var r;return((r=this.layer)==null?void 0:r.opacity)??1},r=>{this.container&&(this.container.opacity=r)},p),u(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",r=>{this.container&&(this.container.blendMode=r)},p),u(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,r=>{this.container&&(this.container.effect=r)},p),u(()=>this.highlightOptions,r=>this.container.highlightOptions=r,p),$(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),u(()=>{var r;return{scale:(r=this.view)==null?void 0:r.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:r})=>{const P=r!=null?this.isVisibleAtScale(r):!1;P!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",P)},p)],"constructor"),(S=this.view)!=null&&S.whenLayerView?this.view.whenLayerView(this.layer).then(r=>{r===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{})}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var o;const i=(o=this.view)==null?void 0:o.spatialReference;return i==null||this.supportsSpatialReference(i)}get updating(){var i;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((i=this.updatingHandles)!=null&&i.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(i){const o=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!o)return!0;const{minScale:l,maxScale:y}=o;return(l===0||i<=l)&&(y===0||i>=y)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(i){if(this.isFulfilled()&&!this.isResolved()){this.updateRequested=!1;return}this._set("updateParameters",i),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(i))}hitTest(i,o){return Promise.resolve(null)}supportsSpatialReference(i){return!0}canResume(){return this.spatialReferenceSupported&&super.canResume()?this.visibleAtCurrentScale:!1}getSuspendInfo(){const i=super.getSuspendInfo(),o=!this.spatialReferenceSupported,l=this.visibleAtCurrentScale;return o&&(i.spatialReferenceNotSupported=o),l&&(i.outsideScaleRange=l),i}addAttachHandles(i){this.addHandles(i,"attach")}};return t([s()],e.prototype,"attached",void 0),t([s({type:m,set(a){const i=x(a,this._get("clips"),m);this._set("clips",i)}})],e.prototype,"clips",void 0),t([s()],e.prototype,"container",void 0),t([s()],e.prototype,"moving",void 0),t([s({readOnly:!0})],e.prototype,"spatialReferenceSupported",null),t([s({readOnly:!0})],e.prototype,"updateParameters",void 0),t([s()],e.prototype,"updateRequested",void 0),t([s()],e.prototype,"updating",null),t([s()],e.prototype,"view",void 0),t([s({readOnly:!0})],e.prototype,"visibleAtCurrentScale",void 0),t([s({type:I})],e.prototype,"highlightOptions",void 0),e=t([c("esri.views.2d.layers.LayerView2D")],e),e};let n=class extends M(N(E(U.EventedMixin(j)))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const a=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";H.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${a}')`,e)}})}get fullOpacity(){var e,a;return(((e=this.layer)==null?void 0:e.opacity)??1)*(((a=this.parent)==null?void 0:a.fullOpacity)??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!!((e=this.updatingHandles)!=null&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,a,i;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((a=this.parent)!=null&&a.suspended)&&((i=this.view)==null?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},a=this;return(!a.view||!a.view.ready)&&(e.viewNotReady=!0),(!this.layer||!this.layer.loaded)&&(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};t([s()],n.prototype,"fullOpacity",null);t([s()],n.prototype,"layer",void 0);t([s()],n.prototype,"parent",void 0);t([s({readOnly:!0})],n.prototype,"suspended",null);t([s({readOnly:!0})],n.prototype,"suspendInfo",null);t([s({readOnly:!0})],n.prototype,"legendEnabled",null);t([s({type:Boolean,readOnly:!0})],n.prototype,"updating",null);t([s({readOnly:!0})],n.prototype,"updatingProgress",null);t([s()],n.prototype,"visible",null);t([s()],n.prototype,"view",void 0);n=t([c("esri.views.layers.LayerView")],n);const ee=n;export{X as L,ee as a};
