import{ab as o,ac as t,ad as a,ih as i,s as p}from"./index-e1d30004.js";let e=class extends i{constructor(r){super(r),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new p("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};o([t()],e.prototype,"cameraProperties",void 0),o([t()],e.prototype,"coverage",void 0),o([t()],e.prototype,"coveragePercent",void 0),o([t()],e.prototype,"defaultSearchLocation",void 0),o([t()],e.prototype,"depthImage",void 0),o([t()],e.prototype,"digitalElevationModel",void 0),o([t()],e.prototype,"geometryType",void 0),o([t()],e.prototype,"imageProperties",void 0),o([t()],e.prototype,"maximumDistance",void 0),o([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],e.prototype,"type",void 0),o([t({type:["OrientedImageryLayer"]})],e.prototype,"operationalLayerType",void 0),e=o([a("esri.layers.OrientedImageryLayer")],e);const d=e;export{d as default};
