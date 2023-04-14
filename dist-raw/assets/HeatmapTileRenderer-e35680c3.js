import{ae as m,ai as p}from"./index-468a9268.js";import{d as l,g as h}from"./heatmapUtils-adcbaceb.js";import{B as d}from"./BitmapTileContainer-01709718.js";import{B as c}from"./BaseTileRenderer-52056a83.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./Bitmap-1f36fc32.js";import"./Container-f10645ec.js";import"./parser-0c644652.js";import"./_commonjsHelpers-725317a4.js";import"./definitions-3f56d206.js";import"./enums-08489827.js";import"./TextureDescriptor-8d60c85d.js";import"./TiledDisplayObject-6720b2c5.js";import"./WGLContainer-4ea3d7ba.js";import"./VertexArrayObject-06314636.js";import"./VertexElementDescriptor-24e04d97.js";import"./color-9ac858bf.js";import"./enums-eb6e4255.js";import"./ProgramTemplate-91d2aab2.js";import"./MaterialKey-72ecadf9.js";import"./utils-049d9020.js";import"./StyleDefinition-edaaf36e.js";import"./config-c06e4a6d.js";import"./GeometryUtils-0ab64fac.js";import"./earcut-db592379.js";import"./featureConversionUtils-78a5344c.js";import"./OptimizedGeometry-af84d2ad.js";import"./OptimizedFeatureSet-5c82fe5a.js";import"./TileContainer-9941a0f1.js";class u{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(t){l(t,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends c{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new d(t.tileInfoView)}createTile(t){const e=this._container.createTile(t);return this.tileInfoView.getTileCoords(e.bitmap,t),e.bitmap.resolution=this.tileInfoView.getTileResolution(t),e}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:e,maxDensity:r,colorStops:s}=t;this._intensityInfo.minDensity=e,this._intensityInfo.maxDensity=r,this._gradient=h(s),this.tiles.forEach(n=>{const i=n.bitmap.source;i&&(i.minDensity=e,i.maxDensity=r,i.gradient=this._gradient,n.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const e=this.tiles.get(t.tileKey);if(!e)return;const r=t.intensityInfo,{minDensity:s,maxDensity:n}=this._intensityInfo,i=e.bitmap.source||new u;i.intensities=r&&r.matrix||null,i.minDensity=s,i.maxDensity=n,i.gradient=this._gradient,e.bitmap.source=i,this._container.addChild(e),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,e){return console.error(t),Promise.reject()}};o=m([p("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const N=o;export{N as default};