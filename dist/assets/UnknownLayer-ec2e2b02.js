import{eH as i,ae as n,af as t,ai as l,a$ as y,E as p}from"./index-b4b3ae7d.js";import{M as u}from"./MultiOriginJSONSupport-a39561fd.js";import{P as d}from"./PortalLayer-e5a901dc.js";import"./portalItemUtils-6119446c.js";let e=class extends d(u(y)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";s&&(a+=" "+s),o(new p("layer:unknown-layer-type",a,{layerType:s}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};n([t({readOnly:!0})],e.prototype,"resourceInfo",void 0);n([t({type:["show","hide"]})],e.prototype,"listMode",void 0);n([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0);e=n([l("esri.layers.UnknownLayer")],e);const v=e;export{v as default};
