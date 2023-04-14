import{ae as s,af as l,ai as n,bg as o,m as p}from"./index-468a9268.js";let t=class extends o{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const i=this.createTile(e);return i.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,i),this.notifyChange("updating"),i}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.notifyChange("updating"),this.disposeTile(e)}isUpdating(){let e=!0;this.tiles.forEach(a=>{e=e&&a.isReady});const i=!e;if(p("esri-2d-log-updating")){let a="";this.tiles.forEach(r=>{const d=r.updateStatus;a+=`-> ${r.key.id}: isReady: ${r.isReady} status: ${d}
`,e=e&&r.isReady}),console.log(`Updating BaseTileRenderer ${i}
${a}`)}return i}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};s([l()],t.prototype,"layer",void 0);s([l()],t.prototype,"layerView",void 0);s([l()],t.prototype,"tileInfoView",void 0);s([l()],t.prototype,"updating",null);t=s([n("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t);const c=t;export{c as B};