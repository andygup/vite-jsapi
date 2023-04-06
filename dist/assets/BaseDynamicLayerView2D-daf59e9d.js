import{j as o,Q as p,af as a,ag as r,ah as m}from"./index-6c241492.js";import{a as h}from"./BitmapContainer-2a5c261c.js";import{f as n,u as d}from"./LayerView-9445cf14.js";import{v as c}from"./ExportStrategy-0971f7c0.js";import{i as g}from"./RefreshableLayerView-9c537f50.js";import"./WGLContainer-f540f8b0.js";import"./definitions-3ddd14a8.js";import"./VertexArrayObject-1f40867c.js";import"./Texture-7a224fae.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-3e0a74b1.js";import"./enums-55085e26.js";import"./ProgramTemplate-5579a279.js";import"./MaterialKey-dea53a2e.js";import"./utils-b76f789f.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-4f1befcf.js";import"./earcut-61f7b102.js";import"./Bitmap-03987ff4.js";let t=class extends g(n(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const Q=t;export{Q as default};
