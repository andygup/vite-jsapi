import{I as T,P as M,J as m}from"./index-b51e75d5.js";import{l as o}from"./lazyLayerLoader-1e658bbe.js";import{selectLayerClassPath as G}from"./portalLayers-21534ae4.js";import{l as g}from"./styleUtils-3e1d36f6.js";import"./layersLoader-b56eede9.js";import"./fetchService-9127d16b.js";import"./jsonContext-5305ed4c.js";import"./portalItemUtils-88a22e4d.js";function A(e){return u(e,"notes")}function b(e){return u(e,"markup")}function v(e){return u(e,"route")}function u(e,r){return!e.layerType||e.layerType!=="ArcGISFeatureLayer"?!1:e.featureCollectionType===r}async function w(e,r,t){if(!r)return;const y=[];for(const a of r){const i=V(a,t);a.layerType==="GroupLayer"?y.push(U(i,a,t)):y.push(i)}const n=await T(y);for(const a of n)a.value&&e.add(a.value)}const C={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},F={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},h={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},W={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISFeatureLayer:"FeatureLayer"},B={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function V(e,r){const t=await D(e,r);return k(t,e,r)}async function k(e,r,t){const y=new e;return y.read(r,t.context),y.type==="group"&&I(r)&&await N(y,r,t.context),await g(y,t.context),y}async function D(e,r){var L;const t=r.context,y=R(t);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const a=y[n];let i=a?o[a]:o.UnknownLayer;if(f(e)){const l=t==null?void 0:t.portal;if(e.itemId){const s=new M({id:e.itemId,portal:l});await s.load();const c=(await G(s)).className||"UnknownLayer";i=o[c]}}else n==="ArcGISFeatureLayer"?A(e)||b(e)?i=o.MapNotesLayer:v(e)?i=o.RouteLayer:I(e)&&(i=o.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=o.WMTSLayer:n==="WFS"&&((L=e.wfsInfo)==null?void 0:L.version)!=="2.0.0"&&(i=o.UnsupportedLayer);return i()}function I(e){var t,y;return e.layerType!=="ArcGISFeatureLayer"||f(e)?!1:(((y=(t=e.featureCollection)==null?void 0:t.layers)==null?void 0:y.length)??0)>1}function f(e){return e.type==="Feature Collection"}function R(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=h;break;case"ground":r=F;break;default:r=C;break}break;default:switch(e.layerContainerType){case"basemap":r=B;break;case"tables":r=O;break;default:r=W;break}break}return r}async function U(e,r,t){const y=new m,n=w(y,Array.isArray(r.layers)?r.layers:[],t);try{const a=await e;try{if(await n,a.type==="group")return a.layers.addMany(y),a}catch(i){a.destroy();for(const L of y)L.destroy();throw i}}catch(a){throw a}}async function N(e,r,t){var l;const y=o.FeatureLayer,n=await y(),a=r.featureCollection,i=a==null?void 0:a.showLegend,L=(l=a==null?void 0:a.layers)==null?void 0:l.map((s,p)=>{var d;const c=new n;c.read(s,t);const S={...t,ignoreDefaults:!0};return c.read({id:`${e.id}-sublayer-${p}`,visibility:((d=r.visibleLayers)==null?void 0:d.includes(p))??!0},S),i!=null&&c.read({showLegend:i},S),c});e.layers.addMany(L??[])}export{w as populateOperationalLayers};