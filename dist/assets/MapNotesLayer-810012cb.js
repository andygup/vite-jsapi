import{rn as I,e as o,y as a,ro as k,a as L,a$ as $,fE as E,aX as W,gI as H,bK as x,fv as K,bz as S,V as v,eK as N,e4 as D,dJ as J,kW as O,ie as R,rp as P,bO as j,B as V,K as q,h6 as U,dn as X,b6 as Y,eP as Q,dG as Z,P as ee,gt as T,bD as h,bE as te,by as re}from"./index-c18a96f3.js";import{O as oe}from"./MultiOriginJSONSupport-309fe89a.js";import{b as ie}from"./normalizeUtils-55909f8c.js";import le from"./FeatureLayer-737c28ee.js";import{a as G}from"./BlendLayer-1406a3b7.js";import{t as _}from"./ScaleRangeLayer-972bc331.js";import{h as ae}from"./ElevationInfo-6aa5c711.js";import{n as ne}from"./objectIdUtils-789e911a.js";import{c as se}from"./OperationalLayer-5e561312.js";import{j as pe}from"./PortalLayer-86ea101d.js";import"./normalizeUtilsCommon-f4f57432.js";import"./UniqueValueRenderer-8560c516.js";import"./ColorStop-c5089175.js";import"./diffUtils-2a9fee10.js";import"./colorRamps-8bdec164.js";import"./jsonUtils-976e92af.js";import"./DictionaryLoader-6a0ef31f.js";import"./LRUCache-126d04a0.js";import"./FieldsIndex-b071eb44.js";import"./heatmapUtils-103df89c.js";import"./sql-29d214a6.js";import"./FeatureLayerBase-655f7908.js";import"./commonProperties-797d5904.js";import"./AttachmentQuery-79b9f34f.js";import"./Query-f6fbedf0.js";import"./RelationshipQuery-29f696bb.js";import"./serviceCapabilitiesUtils-5f3d913c.js";import"./editsZScale-a9b2e43a.js";import"./queryZScale-275d69e0.js";import"./FeatureSet-037cc3b1.js";import"./APIKeyMixin-66195343.js";import"./ArcGISService-776e388b.js";import"./CustomParametersMixin-22e0ea3b.js";import"./EditBusLayer-b344bcc2.js";import"./FeatureReductionLayer-495f6b53.js";import"./FeatureEffect-01b60f68.js";import"./jsonUtils-266f6943.js";import"./FeatureFilter-e84ccbbf.js";import"./labelingInfo-75f20c49.js";import"./defaults-2a29a8d1.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-2f918e3b.js";import"./TemporalLayer-29628135.js";import"./FeatureTemplate-da015408.js";import"./FeatureType-f1f1b192.js";import"./fieldProperties-c4a286ad.js";import"./versionUtils-cabdac94.js";import"./styleUtils-fd893956.js";import"./TopFeaturesQuery-0b0fa5be.js";import"./popupUtils-0e81192d.js";import"./portalItemUtils-8a77bd20.js";let d=class extends G(_($)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new I,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};o([a({type:ae})],d.prototype,"elevationInfo",void 0),o([a(k(I,"graphics"))],d.prototype,"graphics",void 0),o([a({type:["show","hide"]})],d.prototype,"listMode",void 0),o([a()],d.prototype,"screenSizePerspectiveEnabled",void 0),o([a({readOnly:!0})],d.prototype,"type",void 0),o([a({constructOnly:!0})],d.prototype,"internal",void 0),d=o([L("esri.layers.GraphicsLayer")],d);const ye=d;function b(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!B(t))}function B({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return C.find(i=>{var l,s,p;return r===i.geometryTypeJSON&&((p=(s=(l=e.drawingInfo)==null?void 0:l.renderer)==null?void 0:s.symbol)==null?void 0:p.type)===i.identifyingSymbol.type})}function F(){return new re({xmin:-180,ymin:-90,xmax:180,ymax:90})}const M=new E({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ue=new E({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends ye{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference,t=this.fullBounds;return e?t==null?O(F(),e).geometry:j(t,e):null}get fullBounds(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference;if(!e)return null;const t=D();return this.graphics.forEach(i=>{const l=i.geometry!=null?O(i.geometry,e).geometry:null;l!=null&&J(t,l.type==="point"?l:l.extent,t)}),R(t,P)?null:t}get sublayers(){return this.graphics}};o([a({readOnly:!0})],u.prototype,"fullExtent",null),o([a({readOnly:!0})],u.prototype,"fullBounds",null),o([a({readOnly:!0})],u.prototype,"sublayers",null),o([a()],u.prototype,"layer",void 0),o([a()],u.prototype,"layerId",void 0),o([a({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=o([L("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new W().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new H().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new K().toJSON()}];let n=class extends G(_(se(pe(oe($))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new v(C.map(t=>new u({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!b(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!b(t))return null;const i=t.layers.map(l=>{const s=new le;return s.read(l,r),s});return new v({items:i})}readLegacyfeatureCollectionJSON(e,t){return b(t)?N(t.featureCollection):null}get fullExtent(){var r;const e=this.spatialReference,t=D();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:i})=>i!=null?J(t,i,t):t,t):(r=this.featureCollectionJSON)!=null&&r.layers.some(i=>i.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(i=>{const l=O(i.layerDefinition.extent,e).geometry;l!=null&&J(t,l,t)}),R(t,P)?O(F(),e).geometry:j(t,e)}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?S.fromJSON(t.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(e,t,r){if(b(t))return null;const i=[];let l=t.layers.reduce((s,p)=>Math.max(s,p.layerDefinition.id??-1),-1)+1;for(const s of t.layers){const{layerDefinition:p,featureSet:y}=s,m=p.id??l++,c=B(s);if(c!=null){const f=new u({id:c.id,title:p.name,layerId:m,layer:this,graphics:y.features.map(({geometry:g,symbol:w,attributes:z,popupInfo:A})=>V.fromJSON({attributes:z,geometry:g,symbol:w,popupTemplate:A}))});i.push(f)}}return new v(i)}writeSublayers(e,t,r,i){var c;const{minScale:l,maxScale:s}=this;if(e==null)return;const p=e.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((c=i==null?void 0:i.messages)==null?void 0:c.push(new q("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let m=this.spatialReference.toJSON();e:for(const f of e)for(const g of f.graphics)if(g.geometry!=null){m=g.geometry.spatialReference.toJSON();break e}for(const f of C){const g=e.find(w=>f.id===w.id);this._writeMapNoteSublayer(y,g,f,l,s,m,i)}U("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=N(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(this.sublayers==null)return;let e=null;const t=[];for(const i of this.sublayers)for(const l of i.graphics)if(l.geometry!=null){const s=l.geometry;e?X(s.spatialReference,e)||(Y(s.spatialReference,e)||Q()||await Z(),l.geometry=ee(s,e)):e=s.spatialReference,t.push(l)}const r=await ie(t.map(i=>i.geometry));t.forEach((i,l)=>i.geometry=r[l])}_findSublayer(e){var t;return this.sublayers==null?null:((t=this.sublayers)==null?void 0:t.find(r=>r.id===e))??null}_writeMapNoteSublayer(e,t,r,i,l,s,p){const y=[];if(t!=null){for(const m of t.graphics)this._writeMapNote(y,m,r.geometryType,p);this._normalizeObjectIds(y,M),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:l,objectIdField:"OBJECTID",fields:[M.toJSON(),ue.toJSON()],spatialReference:s},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){var m,c;if(t==null)return;const{geometry:l,symbol:s,popupTemplate:p}=t;if(l==null)return;if(l.type!==r)return void((m=i==null?void 0:i.messages)==null?void 0:m.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(s==null)return void((c=i==null?void 0:i.messages)==null?void 0:c.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:l.toJSON(),symbol:s.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let i=ne(r,e)+1;const l=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:p}=s;(p[r]==null||l.has(p[r]))&&(p[r]=i++),l.add(p[r])}}};o([a({readOnly:!0})],n.prototype,"capabilities",void 0),o([h(["portal-item","web-map"],"capabilities",["layers"])],n.prototype,"readCapabilities",null),o([a({readOnly:!0})],n.prototype,"featureCollections",void 0),o([h(["web-map","portal-item"],"featureCollections",["layers"])],n.prototype,"readFeatureCollections",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],n.prototype,"featureCollectionJSON",void 0),o([h(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],n.prototype,"readLegacyfeatureCollectionJSON",null),o([a({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],n.prototype,"featureCollectionType",void 0),o([a({readOnly:!0})],n.prototype,"fullExtent",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],n.prototype,"legendEnabled",void 0),o([a({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),o([a({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"minScale",void 0),o([h(["web-map","portal-item"],"minScale",["layers"])],n.prototype,"readMinScale",null),o([a({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"maxScale",void 0),o([h(["web-map","portal-item"],"maxScale",["layers"])],n.prototype,"readMaxScale",null),o([a({readOnly:!0})],n.prototype,"multipointLayer",null),o([a({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),o([a({readOnly:!0})],n.prototype,"pointLayer",null),o([a({readOnly:!0})],n.prototype,"polygonLayer",null),o([a({readOnly:!0})],n.prototype,"polylineLayer",null),o([a({type:S})],n.prototype,"spatialReference",void 0),o([h(["web-map","portal-item"],"spatialReference",["layers"])],n.prototype,"readSpatialReference",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],n.prototype,"sublayers",void 0),o([h("web-map","sublayers",["layers"])],n.prototype,"readSublayers",null),o([te("web-map","sublayers")],n.prototype,"writeSublayers",null),o([a({readOnly:!0})],n.prototype,"textLayer",null),o([a()],n.prototype,"title",void 0),o([a({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=o([L("esri.layers.MapNotesLayer")],n);const pt=n;export{pt as default};