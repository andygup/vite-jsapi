import{_ as w,ha as h,K as O,oC as L,oD as P,gY as T,gV as b}from"./index-bdad94d1.js";import{t as d,r as g}from"./fetchService-961b7f3d.js";import{a as C}from"./lazyLayerLoader-e80557ba.js";const F={FeatureLayer:!0,SceneLayer:!0};async function R(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await V(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await w(()=>import("./GroupLayer-7c7a3596.js"),["assets/GroupLayer-7c7a3596.js","assets/index-bdad94d1.js","assets/index-0492b785.css","assets/MultiOriginJSONSupport-60332d9e.js","assets/BlendLayer-49bfabe4.js","assets/jsonUtils-1baf7cbc.js","assets/OperationalLayer-6d869fbc.js","assets/commonProperties-ea87c313.js","assets/ElevationInfo-3fa56032.js","assets/PortalLayer-47bcd3d8.js","assets/portalItemUtils-cf820457.js","assets/ScaleRangeLayer-ccfb81e3.js","assets/lazyLayerLoader-e80557ba.js"])).default({title:e.parsedUrl.title});return N(s,e,a),s}function S(r,l){return r?r.find(e=>e.id===l):null}function N(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return t!=null&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,S(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,S(l.tableInfos,s));r.tables.add(t)})}async function V(r,l){var m,f,p,I;let e=h(r);if(e==null&&(e=await _(r,l)),e==null)throw new O("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await x(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await d(r,{customParameters:l}),{tileInfo:c,cacheType:y}=n;t=c?((m=c==null?void 0:c.format)==null?void 0:m.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await d(e.url.path,{customParameters:l});if(t="SceneLayer",n){const c=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(c!=null&&c.length){const y=(f=c[0])==null?void 0:f.layerType;y!=null&&b[y]!=null&&(t=b[y])}}break}default:t=u[a]}const o=a==="FeatureServer",i={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(F[t]&&s==null){const n=await J(r,a,l);o&&(i.sublayerInfos=n.layerInfos,i.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(i.sublayerIds=n.layerIds,i.tableIds=n.tableIds):o&&(i.layerOrTableId=n.layerIds[0]??n.tableIds[0],i.sourceJSON=((p=n.layerInfos)==null?void 0:p[0])??((I=n.tableInfos)==null?void 0:I[0]))}return i.Constructor=await U(t),i}async function _(r,l){var o;const e=await d(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":v(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&v((o=e.layers)==null?void 0:o[0])&&(a="SceneServer"),!a)return null;const u=s!=null?L(r):null;return{title:u!=null&&e.name||P(r),serverType:a,sublayer:s,url:{path:u!=null?u.serviceUrl:T(r).path}}}function v(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function J(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await g(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await d(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function U(r){return(0,C[r])()}async function x(r,l){return(await d(r,{customParameters:l})).tileInfo}export{R as fromUrl};
