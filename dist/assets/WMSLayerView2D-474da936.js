import{af as s,ag as m,av as E,ah as b,E as S,s as g,j as F,Q as M,G as R,as as q}from"./index-6c241492.js";import{a as I}from"./BitmapContainer-2a5c261c.js";import{f as U,u as V}from"./LayerView-9445cf14.js";import{v as W}from"./ExportStrategy-0971f7c0.js";import{i as j}from"./RefreshableLayerView-9c537f50.js";import{l as L}from"./ExportWMSImageParameters-5e827c49.js";import"./WGLContainer-f540f8b0.js";import"./definitions-3ddd14a8.js";import"./VertexArrayObject-1f40867c.js";import"./Texture-7a224fae.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-3e0a74b1.js";import"./enums-55085e26.js";import"./ProgramTemplate-5579a279.js";import"./MaterialKey-dea53a2e.js";import"./utils-b76f789f.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-4f1befcf.js";import"./earcut-61f7b102.js";import"./Bitmap-03987ff4.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new L({layer:this.layer})}destroy(){this.exportImageParameters=S(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:o,height:n,x:d,y:c}=u;if(!(i&&o&&n))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:o,height:n});return a.fetchFeatureInfo(i,o,n,d,c)}};return s([m()],t.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],t.prototype,"exportImageVersion",null),s([m()],t.prototype,"layer",void 0),s([m(E)],t.prototype,"timeExtent",void 0),t=s([b("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends H(j(U(V))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{F(t)||M.getLogger(this.declaredClass).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=S(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,o=0,n=0;if(r.children.some(C=>{const{width:x,height:f,resolution:w,x:l,y}=C,v=l+w*x,P=y-w*f;return a>=l&&a<=v&&p<=y&&p>=P&&(i=new q({xmin:l,ymin:P,xmax:v,ymax:y,spatialReference:u}),o=x,n=f,!0)}),!i)return null;const d=i.width/o,c=Math.round((a-i.xmin)/d),$=Math.round((i.ymax-p)/d);return{extent:i,width:o,height:n,x:c,y:$}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([b("esri.views.2d.layers.WMSLayerView2D")],h);const pt=h;export{pt as default};
