import{g as s,h as a,j as t,bO as n,e as l,a as o}from"./index-d29f6b97.js";import{y as p}from"./TileTreeDebugger-842c5f90.js";let i=class extends p{constructor(e){super(e),this.enablePolygons=!1}initialize(){s(()=>this.enabled,e=>this.view.basemapTerrain.renderPatchBorders=e,a)}getTiles(){const e=this.view.basemapTerrain.spatialReference!=null?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map(r=>({...r,geometry:t.fromExtent(n(r.extent,e))}))}};i=l([o("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],i);export{i as TerrainTileTree3DDebugger};
