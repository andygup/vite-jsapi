import{K as c,e as i,y as d,a as h}from"./index-0b6846a6.js";import{n as u}from"./LayerView3D-c9d7b31e.js";import{n as v}from"./TiledLayerView3D-566fa078.js";import{d as f}from"./LayerView-4bb15203.js";let e=class extends v(u(f)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var o,s,a,l,n;const t=(s=(o=this.view)==null?void 0:o.map)==null?void 0:s.allLayers,y=t&&t.includes(this.layer),r=(n=(l=(a=this.view)==null?void 0:a.map)==null?void 0:l.ground)==null?void 0:n.layers,m=r&&r.includes(this.layer);if(y&&!m){const p=new c("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(p))}this._addTilingSchemeMatchPromise()}};i([d()],e.prototype,"layer",void 0),i([d()],e.prototype,"tileInfo",null),e=i([h("esri.views.3d.layers.ElevationLayerView3D")],e);const $=e;export{$ as default};