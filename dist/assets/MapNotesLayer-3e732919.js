import{iq as I,ir as $,a5 as E,ab as i,ac as l,gW as z,k1 as W,ad as L,d$ as R,h4 as j,jf as H,jd as q,a$ as x,k2 as U,ev as V,ew as X,ex as Y,aF as S,V as v,ih as K,cn as N,fI as D,k3 as J,ej as O,k4 as P,N as _,ai as Q,s as Z,i7 as ee,a9 as te,e5 as re,e4 as ie,aE as oe,W as ae,aX as le,iA as T,aU as h,aV as ne,ap as se,k5 as G}from"./index-0265f5b0.js";import{n as ye}from"./objectIdUtils-789e911a.js";let c=class extends I($(R)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new E,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};i([l({type:z})],c.prototype,"elevationInfo",void 0),i([l(W(E,"graphics"))],c.prototype,"graphics",void 0),i([l({type:["show","hide"]})],c.prototype,"listMode",void 0),i([l()],c.prototype,"screenSizePerspectiveEnabled",void 0),i([l({readOnly:!0})],c.prototype,"type",void 0),i([l({constructOnly:!0})],c.prototype,"internal",void 0),c=i([L("esri.layers.GraphicsLayer")],c);const pe=c;function b(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!k(t))}function k({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return C.find(o=>{var a,s,y;return r===o.geometryTypeJSON&&((y=(s=(a=e.drawingInfo)==null?void 0:a.renderer)==null?void 0:s.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function F(){return new se({xmin:-180,ymin:-90,xmax:180,ymax:90})}const M=new j({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ue=new j({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends pe{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference,t=this.fullBounds;return e?t==null?O(F(),e).geometry:_(t,e):null}get fullBounds(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference;if(!e)return null;const t=D();return this.graphics.forEach(o=>{const a=o.geometry!=null?O(o.geometry,e).geometry:null;a!=null&&J(t,a.type==="point"?a:a.extent,t)}),P(t,G)?null:t}get sublayers(){return this.graphics}};i([l({readOnly:!0})],u.prototype,"fullExtent",null),i([l({readOnly:!0})],u.prototype,"fullBounds",null),i([l({readOnly:!0})],u.prototype,"sublayers",null),i([l()],u.prototype,"layer",void 0),i([l()],u.prototype,"layerId",void 0),i([l({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=i([L("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new H().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new q().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new U().toJSON()}];let n=class extends I($(V(X(Y(R))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new v(C.map(t=>new u({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!b(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!b(t))return null;const o=t.layers.map(a=>{const s=new K;return s.read(a,r),s});return new v({items:o})}readLegacyfeatureCollectionJSON(e,t){return b(t)?N(t.featureCollection):null}get fullExtent(){var r;const e=this.spatialReference,t=D();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(t,o,t):t,t):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const a=O(o.layerDefinition.extent,e).geometry;a!=null&&J(t,a,t)}),P(t,G)?O(F(),e).geometry:_(t,e)}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?S.fromJSON(t.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(e,t,r){if(b(t))return null;const o=[];let a=t.layers.reduce((s,y)=>Math.max(s,y.layerDefinition.id??-1),-1)+1;for(const s of t.layers){const{layerDefinition:y,featureSet:p}=s,d=y.id??a++,m=k(s);if(m!=null){const f=new u({id:m.id,title:y.name,layerId:d,layer:this,graphics:p.features.map(({geometry:g,symbol:w,attributes:B,popupInfo:A})=>Q.fromJSON({attributes:B,geometry:g,symbol:w,popupTemplate:A}))});o.push(f)}}return new v(o)}writeSublayers(e,t,r,o){var m;const{minScale:a,maxScale:s}=this;if(e==null)return;const y=e.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((m=o==null?void 0:o.messages)==null?void 0:m.push(new Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const f of e)for(const g of f.graphics)if(g.geometry!=null){d=g.geometry.spatialReference.toJSON();break e}for(const f of C){const g=e.find(w=>f.id===w.id);this._writeMapNoteSublayer(p,g,f,a,s,d,o)}ee("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=N(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(this.sublayers==null)return;let e=null;const t=[];for(const o of this.sublayers)for(const a of o.graphics)if(a.geometry!=null){const s=a.geometry;e?te(s.spatialReference,e)||(re(s.spatialReference,e)||ie()||await oe(),a.geometry=ae(s,e)):e=s.spatialReference,t.push(a)}const r=await le(t.map(o=>o.geometry));t.forEach((o,a)=>o.geometry=r[a])}_findSublayer(e){var t;return this.sublayers==null?null:((t=this.sublayers)==null?void 0:t.find(r=>r.id===e))??null}_writeMapNoteSublayer(e,t,r,o,a,s,y){const p=[];if(t!=null){for(const d of t.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,M),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[M.toJSON(),ue.toJSON()],spatialReference:s},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){var d,m;if(t==null)return;const{geometry:a,symbol:s,popupTemplate:y}=t;if(a==null)return;if(a.type!==r)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(s==null)return void((m=o==null?void 0:o.messages)==null?void 0:m.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:a.toJSON(),symbol:s.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let o=ye(r,e)+1;const a=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:y}=s;(y[r]==null||a.has(y[r]))&&(y[r]=o++),a.add(y[r])}}};i([l({readOnly:!0})],n.prototype,"capabilities",void 0),i([h(["portal-item","web-map"],"capabilities",["layers"])],n.prototype,"readCapabilities",null),i([l({readOnly:!0})],n.prototype,"featureCollections",void 0),i([h(["web-map","portal-item"],"featureCollections",["layers"])],n.prototype,"readFeatureCollections",null),i([l({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],n.prototype,"featureCollectionJSON",void 0),i([h(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],n.prototype,"readLegacyfeatureCollectionJSON",null),i([l({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],n.prototype,"featureCollectionType",void 0),i([l({readOnly:!0})],n.prototype,"fullExtent",null),i([l({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],n.prototype,"legendEnabled",void 0),i([l({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),i([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"minScale",void 0),i([h(["web-map","portal-item"],"minScale",["layers"])],n.prototype,"readMinScale",null),i([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"maxScale",void 0),i([h(["web-map","portal-item"],"maxScale",["layers"])],n.prototype,"readMaxScale",null),i([l({readOnly:!0})],n.prototype,"multipointLayer",null),i([l({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),i([l({readOnly:!0})],n.prototype,"pointLayer",null),i([l({readOnly:!0})],n.prototype,"polygonLayer",null),i([l({readOnly:!0})],n.prototype,"polylineLayer",null),i([l({type:S})],n.prototype,"spatialReference",void 0),i([h(["web-map","portal-item"],"spatialReference",["layers"])],n.prototype,"readSpatialReference",null),i([l({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],n.prototype,"sublayers",void 0),i([h("web-map","sublayers",["layers"])],n.prototype,"readSublayers",null),i([ne("web-map","sublayers")],n.prototype,"writeSublayers",null),i([l({readOnly:!0})],n.prototype,"textLayer",null),i([l()],n.prototype,"title",void 0),i([l({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=i([L("esri.layers.MapNotesLayer")],n);const me=n;export{me as default};
