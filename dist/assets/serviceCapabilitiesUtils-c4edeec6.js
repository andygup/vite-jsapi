import{ae as f,af as g,ai as v,bD as Q,J as F,ev as R,m as w,fg as b}from"./index-b4b3ae7d.js";var m;let i=m=class extends Q{constructor(s){super(s),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new F}clone(){return new m({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};f([g({type:String,json:{write:!0}})],i.prototype,"floorField",void 0);f([g({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0);f([g({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0);i=m=f([v("esri.layers.support.LayerFloorInfo")],i);const U=i,x={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function e(t,s,a){return!!A(t,s,a)}function c(t,s,a){return A(t,s,a)}function A(t,s,a){return t&&t.hasOwnProperty(s)?t[s]:a}function T(t){var a;const s=(a=t==null?void 0:t.supportedSpatialAggregationStatistics)==null?void 0:a.map(r=>r.toLowerCase());return{envelope:!!(s!=null&&s.includes("envelopeaggregate")),centroid:!!(s!=null&&s.includes("centroidaggregate")),convexHull:!!(s!=null&&s.includes("convexhullaggregate"))}}function d(t,s){var r;const a=(r=t==null?void 0:t.supportedOperationsWithCacheHint)==null?void 0:r.map(p=>p.toLowerCase());return!!(a!=null&&a.includes(s.toLowerCase()))}function G(t,s){return{analytics:M(t),attachment:I(t),data:E(t),metadata:D(t),operations:L(t.capabilities,t,s),query:O(t,s),queryRelated:H(t),queryTopFeatures:P(t),editing:z(t)}}function M(t){return{supportsCacheHint:d(t.advancedQueryCapabilities,"queryAnalytics")}}function I(t){const s=t.attachmentProperties,a={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:e(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach(r=>{const p=x[r.name];p&&(a[p]=!!r.isEnabled)}),a}function E(t){return{isVersioned:e(t,"isDataVersioned",!1),supportsAttachment:e(t,"hasAttachments",!1),supportsM:e(t,"hasM",!1),supportsZ:e(t,"hasZ",!1)}}function D(t){return{supportsAdvancedFieldProperties:e(t,"supportsFieldDescriptionProperty",!1)}}function L(t,s,a){const r=t?t.toLowerCase().split(",").map(S=>S.trim()):[],p=a?R(a):null,y=r.includes(p!=null&&p.serverType==="MapServer"?"data":"query"),o=r.includes("editing")&&!s.datesInUnknownTimezone;let n=o&&r.includes("create"),u=o&&r.includes("delete"),l=o&&r.includes("update");const h=r.includes("changetracking"),C=s.advancedQueryCapabilities;return o&&!(n||u||l)&&(n=u=l=!0),{supportsCalculate:e(s,"supportsCalculate",!1),supportsTruncate:e(s,"supportsTruncate",!1),supportsValidateSql:e(s,"supportsValidateSql",!1),supportsAdd:n,supportsDelete:u,supportsEditing:o,supportsChangeTracking:h,supportsQuery:y,supportsQueryAnalytics:e(C,"supportsQueryAnalytic",!1),supportsQueryAttachments:e(C,"supportsQueryAttachments",!1),supportsQueryTopFeatures:e(C,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:e(s,"supportsAttachmentsResizing",!1),supportsSync:r.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:e(s,"supportsExceedsLimitStatistics",!1)}}function O(t,s){const a=t.advancedQueryCapabilities,r=t.ownershipBasedAccessControlForFeatures,p=t.archivingInfo,y=t.currentVersion,n=!(s==null?void 0:s.includes("MapServer"))||y>=w("mapserver-pbf-version-support"),u=b(s),l=new Set((t.supportedQueryFormats??"").split(",").map(h=>h.toLowerCase().trim()));return{supportsStatistics:e(a,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:e(a,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:e(a,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:T(a),supportsCentroid:e(a,"supportsReturningGeometryCentroid",!1),supportsDistance:e(a,"supportsQueryWithDistance",!1),supportsDistinct:e(a,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:e(a,"supportsReturningQueryExtent",!1),supportsGeometryProperties:e(a,"supportsReturningGeometryProperties",!1),supportsHavingClause:e(a,"supportsHavingClause",!1),supportsOrderBy:e(a,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:e(a,"supportsPagination",!1),supportsQuantization:e(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:e(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:e(t,"supportsReturningQueryGeometry",!1),supportsResultType:e(a,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:e(a,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:e(a,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:e(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:e(a,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:e(r,"allowOthersToQuery",!0),supportsHistoricMoment:e(p,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:n&&l.has("pbf"),supportsDisjointSpatialRelationship:e(a,"supportsDisjointSpatialRel",!1),supportsCacheHint:e(a,"supportsQueryWithCacheHint",!1)||d(a,"query"),supportsDefaultSpatialReference:e(a,"supportsDefaultSR",!1),supportsCompactGeometry:u,supportsFullTextSearch:e(a,"supportsFullTextSearch",!1),maxRecordCountFactor:c(t,"maxRecordCountFactor",void 0),maxRecordCount:c(t,"maxRecordCount",void 0),standardMaxRecordCount:c(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:c(t,"tileMaxRecordCount",void 0)}}function H(t){const s=t.advancedQueryCapabilities,a=e(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:e(s,"supportsQueryRelatedPagination",!1),supportsCount:a,supportsOrderBy:a,supportsCacheHint:d(s,"queryRelated")}}function P(t){return{supportsCacheHint:d(t.advancedQueryCapabilities,"queryTopFilter")}}function z(t){const s=t.ownershipBasedAccessControlForFeatures,a=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:e(t,"allowGeometryUpdates",!0),supportsGlobalId:e(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:e(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:e(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:e(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:e(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:e(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:e(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:e(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:e(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:e(a,"supportsAsyncApplyEdits",!1)}}export{U as L,G as g};
