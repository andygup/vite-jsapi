import{_ as w,ev as v,E as L,fR as T,fS as O,du as g,eh as b}from"./index-b4b3ae7d.js";import{f,a as F}from"./fetchService-40c1c6bb.js";import{l as P}from"./lazyLayerLoader-b16380da.js";const C={FeatureLayer:!0,SceneLayer:!0};async function x(r){var o;const s=(o=r.properties)==null?void 0:o.customParameters,e=await U(r.url,s),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const l=(await w(()=>import("./GroupLayer-7bcbbcfc.js"),["assets/GroupLayer-7bcbbcfc.js","assets/index-b4b3ae7d.js","assets/index-d832a396.css","assets/MultiOriginJSONSupport-a39561fd.js","assets/BlendLayer-0a837fcb.js","assets/jsonUtils-2ab9edfc.js","assets/parser-7991567d.js","assets/_commonjsHelpers-725317a4.js","assets/OperationalLayer-fae6e909.js","assets/commonProperties-6e3ee32c.js","assets/ElevationInfo-f0fe59c0.js","assets/lengthUtils-ae3367a7.js","assets/PortalLayer-e5a901dc.js","assets/portalItemUtils-6119446c.js","assets/ScaleRangeLayer-a596cf96.js","assets/lazyLayerLoader-b16380da.js"])).default,t=new l({title:e.parsedUrl.title});return N(t,e,a),t}function h(r,s){return r?r.find(e=>e.id===s):null}function N(r,s,e){function a(l,t){const o={...e,layerId:l,sublayerTitleMode:"service-name"};return t!=null&&(o.sourceJSON=t),new s.Constructor(o)}s.sublayerIds.forEach(l=>{const t=a(l,h(s.sublayerInfos,l));r.add(t)}),s.tableIds.forEach(l=>{const t=a(l,h(s.tableInfos,l));r.tables.add(t)})}async function U(r,s){var d,p,S,I;let e=v(r);if(e==null&&(e=await E(r,s)),e==null)throw new L("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:l}=e;let t;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":l!=null?t="FeatureLayer":t=await M(r,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await f(r,{customParameters:s}),{tileInfo:i,cacheType:y}=n;i?((d=i==null?void 0:i.format)==null?void 0:d.toUpperCase())==="LERC"&&(!y||y.toLowerCase()==="elevation")?t="ElevationLayer":t="ImageryTileLayer":t="ImageryLayer";break}case"SceneServer":{const n=await f(e.url.path,{customParameters:s});if(t="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(i!=null&&i.length){const y=(p=i[0])==null?void 0:p.layerType;y!=null&&b[y]!=null&&(t=b[y])}}break}default:t=o[a];break}const u=a==="FeatureServer",c={parsedUrl:e,Constructor:null,layerOrTableId:u?l:void 0,sublayerIds:null,tableIds:null};if(C[t]&&l==null){const n=await _(r,a,s);u&&(c.sublayerInfos=n.layerInfos,c.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(c.sublayerIds=n.layerIds,c.tableIds=n.tableIds):u&&(c.layerOrTableId=n.layerIds[0]??n.tableIds[0],c.sourceJSON=((S=n.layerInfos)==null?void 0:S[0])??((I=n.tableInfos)==null?void 0:I[0]))}return c.Constructor=await J(t),c}async function E(r,s){var u;const e=await f(r,{customParameters:s});let a=null,l=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",l=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":m(e)?(a="SceneServer",l=e.id):e.hasOwnProperty("layers")&&m((u=e.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=l!=null?T(r):null;return{title:o!=null&&e.name||O(r),serverType:a,sublayer:l,url:{path:o!=null?o.serviceUrl:g(r).path}}}function m(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function _(r,s,e){let a,l=!1;if(s==="FeatureServer"){const u=await F(r,{customParameters:e});l=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await f(r,{customParameters:e});const t=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:l?t:[],tableInfos:l?o:[]}}async function J(r){const s=P[r];return s()}async function M(r,s){return(await f(r,{customParameters:s})).tileInfo}export{x as fromUrl};
