import{eJ as i,ae as s,af as t,ai as p,a$ as y,s as l}from"./index-6e11f365.js";import{O as u}from"./MultiOriginJSONSupport-b1bc5639.js";import{j as d}from"./PortalLayer-8f8c4782.js";import"./portalItemUtils-74ec5c98.js";let e=class extends d(u(y)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),o(new l("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([t({type:["show","hide"]})],e.prototype,"listMode",void 0),s([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const h=e;export{h as default};