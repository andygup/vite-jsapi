import{e as o,y as r,a as d,dv as u}from"./index-d29f6b97.js";let t=class extends u{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const l=this.get("tileStore.tileScheme.spatialReference");return l&&l.toJSON()||null}};o([r({readOnly:!0})],t.prototype,"supportsTileUpdates",null),o([r({constructOnly:!0})],t.prototype,"remoteClient",void 0),o([r({constructOnly:!0})],t.prototype,"service",void 0),o([r()],t.prototype,"spatialReference",null),o([r({constructOnly:!0})],t.prototype,"tileInfo",void 0),o([r({constructOnly:!0})],t.prototype,"tileStore",void 0),t=o([d("esri.views.2d.layers.features.processors.BaseProcessor")],t);const v=t;function f(l,p,c,i){const e=l.clone(),n=1<<e.level,s=e.col+p,a=e.row+c;return i&&s<0?(e.col=s+n,e.world-=1):s>=n?(e.col=s-n,e.world+=1):e.col=s,e.row=a,e}export{f as o,v as p};
