import{e,y as o,bE as s,bz as d,a as p,fB as a,bB as l,eK as u}from"./index-bdad94d1.js";import{K as h}from"./Query-9dbb4c19.js";var n;let t=n=class extends l{constructor(r){super(r),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(r,i){i.historicMoment=r&&r.getTime()}writeStart(r,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,this.start>0&&this.where==null&&(i.definitionExpression="1=1")}clone(){return new n(u({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};e([o({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),e([o({type:h,json:{write:!0}})],t.prototype,"dynamicDataSource",void 0),e([o({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),e([o({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),e([o({type:Date})],t.prototype,"historicMoment",void 0),e([s("historicMoment")],t.prototype,"_writeHistoricMoment",null),e([o({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),e([o({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),e([o({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),e([o({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),e([o({type:d,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([o({json:{write:!0}})],t.prototype,"relationshipId",void 0),e([o({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),e([s("start"),s("num")],t.prototype,"writeStart",null),e([o({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),e([o({json:{write:!0}})],t.prototype,"returnGeometry",void 0),e([o({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnM",void 0),e([o({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnZ",void 0),e([o({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=n=e([p("esri.rest.support.RelationshipQuery")],t),t.from=a(t);const m=t;export{m as default};
