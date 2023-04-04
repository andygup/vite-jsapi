import{l3 as a,ab as m,ad as l,cB as p}from"./index-e1d30004.js";import{n as h}from"./BitmapTileContainer-7f95125f.js";import{o as d}from"./BaseTileRenderer-1588c388.js";import"./Bitmap-d5c988db.js";import"./Container-3b957f51.js";import"./definitions-43101aab.js";import"./enums-10aa9b05.js";import"./Texture-a64c7d5d.js";import"./TiledDisplayObject-71eee758.js";import"./WGLContainer-4b22933a.js";import"./VertexArrayObject-36a67124.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a87af45a.js";import"./enums-55085e26.js";import"./ProgramTemplate-99344654.js";import"./MaterialKey-1143b332.js";import"./utils-98382753.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./TileContainer-70b13c29.js";class c{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=p(n),this.tiles.forEach(r=>{const e=r.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,r.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:n,maxDensity:r}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=s&&s.matrix||null,e.minDensity=n,e.maxDensity=r,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const j=o;export{j as default};