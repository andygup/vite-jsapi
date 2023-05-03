"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1790],{21790:(t,e,r)=>{r.r(e),r.d(e,{executeForTopExtents:()=>l}),r(66577);var i=r(11282),o=r(4510),s=r(28141),n=r(6570);async function l(t,e,r){const l=(0,i.en)(t),u=await(0,o.m5)(l,s.Z.from(e),{...r});return{count:u.data.count,extent:n.Z.fromJSON(u.data.extent)}}},4510:(t,e,r)=>{r.d(e,{IJ:()=>d,m5:()=>c,vB:()=>h,w7:()=>y});var i=r(3172),o=r(17452),s=r(33955),n=r(16306),l=r(76497),u=r(28694);const p="Layer does not support extent calculation.";function a(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.Ji)(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=i.outSR.wkid||JSON.stringify(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function d(t,e,r,i){const o=await m(t,e,"json",i);return(0,u.p)(e,r,o.data),o}async function y(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:m(t,e,"json",r,{returnIdsOnly:!0})}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:m(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(p);if(e.hasOwnProperty("count"))throw new Error(p);return t}))}function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):m(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function m(t,e,r,s={},u={}){const p="string"==typeof t?(0,o.mN)(t):t,d=e.geometry?[e.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,n.aX)(d,null,s).then((t=>{const n=t&&t[0];null!=n&&((e=e.clone()).geometry=n);const d=(0,l.A)({...p.query,f:r,...u,...a(e,u)});return(0,i.default)((0,o.v_)(p.path,"queryTopFeatures"),{...s,query:{...d,...s.query}})}))}},28141:(t,e,r)=>{r.d(e,{Z:()=>j});var i,o=r(43697),s=r(66577),n=r(92835),l=r(35454),u=r(96674),p=r(22974),a=r(5600),d=r(75215),y=r(52011),c=r(30556),h=r(33955);r(67676),r(80442);let m=i=class extends u.wq{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],m.prototype,"groupByFields",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:!0}})],m.prototype,"topCount",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],m.prototype,"orderByFields",void 0),m=i=(0,o._)([(0,y.j)("esri.rest.support.TopFilter")],m);const w=m;var v,b=r(82971);const F=new l.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),S=new l.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=v=class extends u.wq{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new v((0,p.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],f.prototype,"distance",void 0),(0,o._)([(0,a.Cb)({types:s.qM,json:{read:h.im,write:!0}})],f.prototype,"geometry",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,o._)([(0,a.Cb)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,o._)([(0,a.Cb)({type:b.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnM",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnZ",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,o._)([(0,c.c)("start"),(0,c.c)("num")],f.prototype,"writeStart",null),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"spatialRel",reader:F.read},write:{target:"spatialRel",writer:F.write}}})],f.prototype,"spatialRelationship",void 0),(0,o._)([(0,a.Cb)({type:n.Z,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,o._)([(0,a.Cb)({type:w,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,o._)([(0,a.Cb)({type:String,json:{read:S.read,write:{writer:S.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],f.prototype,"units",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],f.prototype,"where",void 0),f=v=(0,o._)([(0,y.j)("esri.rest.support.TopFeaturesQuery")],f),f.from=(0,d.se)(f);const j=f}}]);