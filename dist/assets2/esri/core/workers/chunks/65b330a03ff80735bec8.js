"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2651,5159],{3920:(e,t,r)=>{r.d(t,{p:()=>l,r:()=>u});var o=r(43697),s=r(92036),i=r(61247),n=r(5600),a=r(52011),p=r(72762);const l=e=>{let t=class extends e{constructor(){super(...arguments),this._handles=new i.Z,this._updatingHandles=new p.t}destroy(){this.destroyed||(this._handles.destroy(),this._updatingHandles.destroy())}get handles(){return this._handles}get updatingHandles(){return this._updatingHandles}};return(0,o._)([(0,n.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,o._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,o._)([(0,a.j)("esri.core.HandleOwner")],t),t};let u=class extends(l(s.Z)){};u=(0,o._)([(0,a.j)("esri.core.HandleOwner")],u)},42033:(e,t,r)=>{async function o(e,t){const{WhereClause:o}=await r.e(1534).then(r.bind(r,41534));return o.create(e,t)}function s(e,t){return null!=e?null!=t?`(${e}) AND (${t})`:e:t}r.d(t,{E:()=>o,_:()=>s})},72762:(e,t,r)=>{r.d(t,{t:()=>d});var o=r(43697),s=r(92036),i=r(61247),n=r(50758),a=r(17445),p=r(1654),l=r(5600),u=r(52011);let d=class extends s.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new i.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,a.YP)}addWhen(e,t,r={}){return this._installWatch(e,t,r,a.gx)}addOnCollectionChange(e,t,{initial:r=!1,final:o=!1}={}){const s=++this._handleId;return this._handles.add([(0,a.on)(e,"after-changes",this._createSyncUpdatingCallback(),a.Z_),(0,a.on)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:o?e=>t({added:[],removed:e.toArray()}):void 0})],s),(0,n.kB)((()=>this._handles.remove(s)))}addPromise(e){if(null==e)return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const r=()=>this._handles.remove(t);return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},o){const s=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,s);const i=o(e,t,r);return this._handles.add(i,s),(0,n.kB)((()=>this._handles.remove(s)))}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),o=(0,a.YP)(e,r,{sync:!0,equals:()=>!1});return this._handles.add(o,t),o}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,p.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,o._)([(0,l.Cb)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,o._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],d);const c=-42},52781:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var o=r(43697),s=r(20102),i=r(5600),n=(r(75215),r(67676),r(80442),r(71715)),a=r(52011),p=r(19238),l=r(2368),u=r(96674);let d=class extends((0,l.J)(u.wq)){constructor(e){super(e)}read(e,t){const r={};for(const t in e)r[t.toLowerCase()]=e[t];super.read(r,t)}};(0,o._)([(0,i.Cb)({json:{name:"dempathprefix"}})],d.prototype,"demPathPrefix",void 0),(0,o._)([(0,i.Cb)({json:{name:"dempathsuffix"}})],d.prototype,"demPathSuffix",void 0),(0,o._)([(0,i.Cb)({json:{name:"imagepathprefix"}})],d.prototype,"imagePathPrefix",void 0),(0,o._)([(0,i.Cb)({json:{name:"imagepathsuffix"}})],d.prototype,"imagePathSuffix",void 0),(0,o._)([(0,i.Cb)({json:{name:"depthimagepathprefix"}})],d.prototype,"depthImagePathPrefix",void 0),(0,o._)([(0,i.Cb)({json:{name:"depthimagepathsuffix"}})],d.prototype,"depthImagePathSuffix",void 0),(0,o._)([(0,i.Cb)({json:{name:"localimagepathprefix"}})],d.prototype,"localImagePathPrefix",void 0),(0,o._)([(0,i.Cb)({json:{name:"localimagepathsuffix"}})],d.prototype,"localImagePathSuffix",void 0),(0,o._)([(0,i.Cb)({json:{name:"videopathprefix"}})],d.prototype,"videoPathPrefix",void 0),(0,o._)([(0,i.Cb)({json:{name:"videopathsuffix"}})],d.prototype,"videoPathSuffix",void 0),d=(0,o._)([(0,a.j)("esri.layers.orientedImagery.core.Affixes")],d);const c=d;let y=class extends u.wq{constructor(e){super(e)}};(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"averageHeightAboveGround",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"cameraHeading",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"cameraPitch",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"cameraRoll",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"farDistance",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"horizontalFieldOfView",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"nearDistance",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],y.prototype,"orientedImageryType",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],y.prototype,"verticalFieldOfView",void 0),y=(0,o._)([(0,a.j)("esri.layers.orientedImagery.core.CameraProperties")],y);const h=y;let m=class extends p.default{constructor(){super(...arguments),this.affixes=null,this.geometryType="point",this.operationalLayerType="OrientedImageryLayer",this.type="oriented-imagery",this.elevationSource=null}readElevationSource(e,t){let r=e.url?.trim();if(r){const{affixes:e}=this;if(e){const{demPathSuffix:t,demPathPrefix:o}=e;o?.trim()&&(r=o?.trim()+"/"+r),t?.trim()&&(r=r+"/"+t?.trim())}}return{...e,url:r}}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new s.Z("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};(0,o._)([(0,i.Cb)({type:c,json:{write:!0}})],m.prototype,"affixes",void 0),(0,o._)([(0,i.Cb)({type:h,json:{write:!0}})],m.prototype,"cameraProperties",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],m.prototype,"coverage",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],m.prototype,"coveragePercent",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],m.prototype,"defaultSearchLocation",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],m.prototype,"depthImage",void 0),(0,o._)([(0,i.Cb)({json:{write:!0}})],m.prototype,"geometryType",void 0),(0,o._)([(0,i.Cb)()],m.prototype,"imageProperties",void 0),(0,o._)([(0,i.Cb)({type:Number,json:{write:!0}})],m.prototype,"maximumDistance",void 0),(0,o._)([(0,i.Cb)({type:["OrientedImageryLayer"]})],m.prototype,"operationalLayerType",void 0),(0,o._)([(0,i.Cb)({json:{read:!1},value:"oriented-imagery",readOnly:!0})],m.prototype,"type",void 0),(0,o._)([(0,i.Cb)({json:{write:!0},dependsOn:["affixes"]})],m.prototype,"elevationSource",void 0),(0,o._)([(0,n.r)("portal-item","elevationSource",["elevationSource"])],m.prototype,"readElevationSource",null),m=(0,o._)([(0,a.j)("esri.layers.OrientedImageryLayer")],m);const f=m},54295:(e,t,r)=>{r.d(t,{V:()=>n});var o=r(43697),s=r(5600),i=(r(75215),r(67676),r(80442),r(52011));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,o._)([(0,s.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,o._)([(0,i.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var o=r(43697),s=r(92604),i=r(5600),n=(r(75215),r(67676),r(80442),r(52011)),a=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,s.Z.getLogger(this.declaredClass)))}};return(0,o._)([(0,i.Cb)()],t.prototype,"title",null),(0,o._)([(0,i.Cb)({type:String})],t.prototype,"url",null),t=(0,o._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(43697),s=r(2368),i=r(35454),n=r(96674),a=r(5600),p=(r(75215),r(67676),r(80442),r(52011));const l=new i.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,o._)([(0,a.Cb)({json:{read:l.read,write:l.write}})],u.prototype,"drawingTool",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,o._)([(0,p.j)("esri.layers.support.FeatureTemplate")],u);const d=u},16451:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(43697),s=r(2368),i=r(96674),n=r(5600),a=(r(75215),r(67676),r(80442),r(71715)),p=r(52011),l=r(30556),u=r(72729),d=r(70082);let c=class extends((0,s.J)(i.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,o._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,o._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,o._)([(0,n.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,o._)([(0,a.r)("domains")],c.prototype,"readDomains",null),(0,o._)([(0,l.c)("domains")],c.prototype,"writeDomains",null),(0,o._)([(0,n.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,o._)([(0,p.j)("esri.layers.support.FeatureType")],c);const y=c},56765:(e,t,r)=>{r.d(t,{Z:()=>u});var o,s=r(43697),i=r(46791),n=r(96674),a=r(5600),p=(r(75215),r(67676),r(80442),r(52011));let l=o=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.Z}clone(){return new o({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],l.prototype,"floorField",void 0),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],l.prototype,"viewAllMode",void 0),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],l.prototype,"viewAllLevelIds",void 0),l=o=(0,s._)([(0,p.j)("esri.layers.support.LayerFloorInfo")],l);const u=l},72064:(e,t,r)=>{r.d(t,{h:()=>d});var o=r(80442),s=r(66677);const i={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function n(e,t,r){return!!p(e,t,r)}function a(e,t,r){return p(e,t,r)}function p(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}function l(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e,t){return{analytics:c(e),attachment:y(e),data:h(e),metadata:m(e),operations:f(e.capabilities,e,t),query:g(e,t),queryRelated:v(e),queryTopFeatures:_(e),editing:w(e)}}function c(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:n(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=i[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:n(e,"isDataVersioned",!1),supportsAttachment:n(e,"hasAttachments",!1),supportsM:n(e,"hasM",!1),supportsZ:n(e,"hasZ",!1)}}function m(e){return{supportsAdvancedFieldProperties:n(e,"supportsFieldDescriptionProperty",!1)}}function f(e,t,r){const o=e?e.toLowerCase().split(",").map((e=>e.trim())):[],i=r?(0,s.Qc)(r):null,a=o.includes(null!=i&&"MapServer"===i.serverType?"data":"query"),p=o.includes("editing")&&!t.datesInUnknownTimezone;let l=p&&o.includes("create"),u=p&&o.includes("delete"),d=p&&o.includes("update");const c=o.includes("changetracking"),y=t.advancedQueryCapabilities;return p&&!(l||u||d)&&(l=u=d=!0),{supportsCalculate:n(t,"supportsCalculate",!1),supportsTruncate:n(t,"supportsTruncate",!1),supportsValidateSql:n(t,"supportsValidateSql",!1),supportsAdd:l,supportsDelete:u,supportsEditing:p,supportsChangeTracking:c,supportsQuery:a,supportsQueryAnalytics:n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:n(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:n(t,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:n(t,"supportsExceedsLimitStatistics",!1)}}function g(e,t){const r=e.advancedQueryCapabilities,i=e.ownershipBasedAccessControlForFeatures,p=e.archivingInfo,d=e.currentVersion,c=t?.includes("MapServer"),y=!c||d>=(0,o.Z)("mapserver-pbf-version-support"),h=(0,s.M8)(t),m=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:n(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:n(r,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:n(r,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:l(r),supportsCentroid:n(r,"supportsReturningGeometryCentroid",!1),supportsDistance:n(r,"supportsQueryWithDistance",!1),supportsDistinct:n(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:n(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:n(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:n(r,"supportsHavingClause",!1),supportsOrderBy:n(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:n(r,"supportsPagination",!1),supportsQuantization:n(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:n(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:n(e,"supportsReturningQueryGeometry",!1),supportsResultType:n(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:n(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:n(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:n(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:n(r,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:n(i,"allowOthersToQuery",!0),supportsHistoricMoment:n(p,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&m.has("pbf"),supportsDisjointSpatialRelationship:n(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:n(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsDefaultSpatialReference:n(r,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:n(r,"supportsFullTextSearch",!1),maxRecordCountFactor:a(e,"maxRecordCountFactor",void 0),maxRecordCount:a(e,"maxRecordCount",void 0),standardMaxRecordCount:a(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:a(e,"tileMaxRecordCount",void 0)}}function v(e){const t=e.advancedQueryCapabilities,r=n(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:n(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function _(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function w(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:n(e,"allowGeometryUpdates",!0),supportsGlobalId:n(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:n(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:n(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:n(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:n(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:n(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:n(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:n(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:n(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:n(r,"supportsAsyncApplyEdits",!1)}}},51706:(e,t,r)=>{var o,s;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?o.Expression:e.field&&"string"==typeof e.field?o.Field:o.Unknown}function p(e,t){const r=t||a(e),i=e.valueUnit||"unknown";return r===o.Unknown?s.Constant:e.stops?s.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?s.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?s.Proportional:s.Additive:s.Identity:s.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>p,RY:()=>o,hL:()=>s,iY:()=>i,qh:()=>n}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(o||(o={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(s||(s={}))},28694:(e,t,r)=>{r.d(t,{p:()=>s});var o=r(69285);function s(e,t,r){if(!r||!r.features||!r.hasZ)return;const s=(0,o.k)(r.geometryType,t,e.outSpatialReference);if(null!=s)for(const e of r.features)s(e.geometry)}},56545:(e,t,r)=>{r.d(t,{Z:()=>c});var o,s=r(43697),i=r(96674),n=r(22974),a=r(5600),p=r(75215),l=r(52011),u=r(30556);let d=o=class extends i.wq{constructor(e){super(e),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new o((0,n.d9)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,s._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"attachmentTypes",void 0),(0,s._)([(0,a.Cb)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],d.prototype,"attachmentsWhere",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],d.prototype,"cacheHint",void 0),(0,s._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"keywords",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"globalIds",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],d.prototype,"num",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"objectIds",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{default:!1,write:!0}})],d.prototype,"returnMetadata",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"size",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],d.prototype,"start",void 0),(0,s._)([(0,u.c)("start"),(0,u.c)("num")],d.prototype,"writeStart",null),(0,s._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],d.prototype,"where",void 0),d=o=(0,s._)([(0,l.j)("esri.rest.support.AttachmentQuery")],d),d.from=(0,p.se)(d);const c=d},74889:(e,t,r)=>{r.d(t,{Z:()=>_});var o,s=r(43697),i=r(66577),n=r(38171),a=r(35454),p=r(96674),l=r(22974),u=r(5600),d=(r(75215),r(71715)),c=r(52011),y=r(30556),h=r(82971),m=r(33955),f=r(1231);const g=new a.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=o=class extends p.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=h.Z.fromJSON(t.spatialReference),o=[];for(let t=0;t<e.length;t++){const s=e[t],i=n.Z.fromJSON(s),a=s.geometry&&s.geometry.spatialReference;null==i.geometry||a||(i.geometry.spatialReference=r);const p=s.aggregateGeometries,l=i.aggregateGeometries;if(p&&null!=l)for(const e in l){const t=l[e],o=p[e],s=o?.spatialReference;null==t||s||(t.spatialReference=r)}o.push(i)}return o}writeGeometryType(e,t,r,o){if(e)return void g.write(e,t,r,o);const{features:s}=this;if(s)for(const e of s)if(e&&null!=e.geometry)return void g.write(e.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,m.im)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=h.Z.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new o(this.cloneProperties())}cloneProperties(){return(0,l.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,i=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((s-e)/r)));for(let e=0,t=i.length;e<t;e++)n?.(i[e].geometry)||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[i,n]}=r,a=this._getHydrationFunction(e,(e=>e*i+o),(e=>s-e*n));for(const{geometry:e}of t)null!=e&&a&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===o&&n===s||(i.push([e-o,n-s]),o=e,s=n)}else o=t(a[0]),s=r(a[1]),i.push([o,s])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,m.oU)(e)?e.rings:e.paths,s=[];for(let e=0,i=o.length;e<i;e++){const i=o[e],n=this._quantizePoints(i,t,r);n&&s.push(n)}return s.length>0?((0,m.oU)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const o=(0,m.oU)(e)?e.rings:e.paths;let s,i;for(let e=0,n=o.length;e<n;e++){const n=o[e];for(let e=0,o=n.length;e<o;e++){const o=n[e];e>0?(s+=o[0],i+=o[1]):(s=o[0],i=o[1]),o[0]=t(s),o[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const o=e.points;let s,i;for(let e=0,n=o.length;e<n;e++){const n=o[e];e>0?(s+=n[0],i+=n[1]):(s=n[0],i=n[1]),n[0]=t(s),n[1]=r(i)}}:null}};(0,s._)([(0,u.Cb)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,s._)([(0,u.Cb)({type:[n.Z],json:{write:!0}})],v.prototype,"features",void 0),(0,s._)([(0,d.r)("features")],v.prototype,"readFeatures",null),(0,s._)([(0,u.Cb)({type:[f.Z],json:{write:!0}})],v.prototype,"fields",void 0),(0,s._)([(0,u.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,s._)([(0,y.c)("geometryType")],v.prototype,"writeGeometryType",null),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,s._)([(0,u.Cb)({types:i.qM,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,s._)([(0,d.r)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,s._)([(0,u.Cb)({type:h.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,s._)([(0,y.c)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,s._)([(0,u.Cb)({json:{write:!0}})],v.prototype,"transform",void 0),v=o=(0,s._)([(0,c.j)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const _=v},58333:(e,t,r)=>{r.d(t,{ET:()=>i,I4:()=>s,eG:()=>p,lF:()=>n,lj:()=>u,qP:()=>a,wW:()=>l});const o=[252,146,31,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:o,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},i={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o},n={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},p={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},l={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);