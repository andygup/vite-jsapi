import{e as t,y as r,a as s,m as d,S as l,kW as i,j as u}from"./index-c18a96f3.js";import{c as p}from"./normalizeUtilsSync-e06bfdcb.js";let e=class extends d{constructor(o){super(o)}get bounds(){const o=this.coords;return o==null||o.extent==null?null:l(o.extent)}get coords(){var n;const o=(n=this.element.georeference)==null?void 0:n.coords;return i(o,this.spatialReference).geometry}get normalizedCoords(){return u.fromJSON(p(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?l(o):null}};t([r()],e.prototype,"spatialReference",void 0),t([r()],e.prototype,"element",void 0),t([r()],e.prototype,"bounds",null),t([r()],e.prototype,"coords",null),t([r()],e.prototype,"normalizedCoords",null),t([r()],e.prototype,"normalizedBounds",null),e=t([s("esri.layers.support.MediaElementView")],e);export{e as i};