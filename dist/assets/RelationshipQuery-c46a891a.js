import{ae as t,af as r,bG as n,bt as a,ai as p,eo as d,bD as l,cE as h}from"./index-b4b3ae7d.js";import{D as y}from"./Query-d1069a20.js";import"./Field-a6e349b0.js";import"./fieldType-9c435370.js";var u;let e=u=class extends l{constructor(o){super(o),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(o,i){i.historicMoment=o&&o.getTime()}writeStart(o,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,this.start>0&&this.where==null&&(i.definitionExpression="1=1")}clone(){return new u(h({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};t([r({type:Boolean,json:{write:!0}})],e.prototype,"cacheHint",void 0);t([r({type:y,json:{write:!0}})],e.prototype,"dynamicDataSource",void 0);t([r({type:String,json:{write:!0}})],e.prototype,"gdbVersion",void 0);t([r({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0);t([r({type:Date})],e.prototype,"historicMoment",void 0);t([n("historicMoment")],e.prototype,"_writeHistoricMoment",null);t([r({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0);t([r({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0);t([r({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0);t([r({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0);t([r({type:a,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0);t([r({json:{write:!0}})],e.prototype,"relationshipId",void 0);t([r({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0);t([n("start"),n("num")],e.prototype,"writeStart",null);t([r({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0);t([r({json:{write:!0}})],e.prototype,"returnGeometry",void 0);t([r({type:Boolean,json:{write:{overridePolicy(s){return{enabled:s}}}}})],e.prototype,"returnM",void 0);t([r({type:Boolean,json:{write:{overridePolicy(s){return{enabled:s}}}}})],e.prototype,"returnZ",void 0);t([r({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],e.prototype,"where",void 0);e=u=t([p("esri.rest.support.RelationshipQuery")],e);e.from=d(e);const j=e;export{j as default};
