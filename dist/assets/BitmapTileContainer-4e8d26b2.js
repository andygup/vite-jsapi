import{f as n,O as p}from"./index-175d32d0.js";import{S as h}from"./Bitmap-2237b7cf.js";import{r as l}from"./TiledDisplayObject-2f7e7371.js";import{w as f}from"./WGLContainer-d2c666b5.js";import{T as o}from"./color-5599f865.js";import{i as b}from"./TileContainer-a409cb42.js";class u extends l{constructor(e,t,s,i,r,a,d=null){super(e,t,s,i,r,a),this.bitmap=new h(d,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:n(),tileMat3:n()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class v extends b{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this._tileInfoView.getTileBounds(p(),e),s=this._tileInfoView.getTileResolution(e.level),[i,r]=this._tileInfoView.tileInfo.size;return new u(e,s,t[0],t[3],i,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[f.bitmap],target:()=>this.children.map(s=>s.bitmap),drawPhase:o.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.MAP&&super.doRender(e)}}export{v as n};
