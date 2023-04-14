import{e as n,O as d}from"./index-468a9268.js";import{B as l}from"./Bitmap-1f36fc32.js";import{T as h}from"./TiledDisplayObject-6720b2c5.js";import{b}from"./WGLContainer-4ea3d7ba.js";import{W as o}from"./color-9ac858bf.js";import{T as f}from"./TileContainer-9941a0f1.js";class c extends h{constructor(e,t,s,r,i,a,p=null){super(e,t,s,r,i,a),this.bitmap=new l(p,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:n(),tileMat3:n()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class v extends f{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this._tileInfoView.getTileBounds(d(),e),s=this._tileInfoView.getTileResolution(e.level),[r,i]=this._tileInfoView.tileInfo.size;return new c(e,s,t[0],t[3],r,i)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[b.bitmap],target:()=>this.children.map(s=>s.bitmap),drawPhase:o.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){!this.visible||e.drawPhase!==o.MAP||super.doRender(e)}}export{v as B};
