import{e as t,y as l,a as c,V as p,gt as b,iH as g}from"./index-bdad94d1.js";import{n as h,C as f}from"./BuildingComponentSublayer-5a60a607.js";var u;const y={type:p,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}};function d(e,o,n){if(e&&Array.isArray(e))return new p(e.map(s=>{const i=m(s);if(i){const a=new i;return a.read(s,n),a}return n&&n.messages&&s&&n.messages.push(new b("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(s.type||"unknown")+"' are not supported",{definition:s,context:n})),null}))}let r=u=class extends h{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return g(this,e=>u.forEachSublayer(this.sublayers,o=>{o.type!=="building-group"&&e(o)}))}};function m(e){return e.layerType==="group"?r:f}t([l({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),t([l(y)],r.prototype,"sublayers",void 0),r=u=t([c("esri.layers.buildingSublayers.BuildingGroupSublayer")],r),function(e){function o(n,s){n.forEach(i=>{s(i),i.type==="building-group"&&o(i.sublayers,s)})}e.sublayersProperty=y,e.readSublayers=d,e.forEachSublayer=o}(r||(r={}));const v=r;export{v as d};
