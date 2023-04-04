import{e,y as i,n as l,l as h,m as Ct,s as zt}from"./cast-daef7652.js";import{i as At}from"./Clonable-f249bc0f.js";import{j as ot}from"./Collection-e2259e32.js";import{y as g}from"./string-3d0ebcd3.js";import{s as qt}from"./Error-bd05b442.js";import{C as Wt}from"./promiseUtils-29120e0a.js";import{r as R,o as Mt}from"./Extent-7f29a1bb.js";import{T as it,S as Gt}from"./ensureType-fa162cfc.js";import{a as Kt,S as Ht}from"./fieldUtils-021fea8a.js";import"./typedArrayUtil-2bcf3cee.js";import{o as Lt,s as Qt}from"./jsonMap-a9c94baf.js";import{r as Et}from"./enumeration-e46f3fd4.js";import{L as Xt,S as Zt,m as te,u as ee}from"./number-53937715.js";import{s as oe}from"./Identifiable-e3a09883.js";let P=class extends h{constructor(o){super(o),this.type=null}};e([i({type:["attachments","custom","fields","media","text","expression","relationship"],readOnly:!0,json:{read:!1,write:!0}})],P.prototype,"type",void 0),P=e([l("esri.popup.content.Content")],P);const w=P;var st;let I=st=class extends w{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new st({description:this.description,displayType:this.displayType,title:this.title})}};e([i({type:String,json:{write:!0}})],I.prototype,"description",void 0),e([i({type:["auto","preview","list"],json:{write:!0}})],I.prototype,"displayType",void 0),e([i({type:String,json:{write:!0}})],I.prototype,"title",void 0),e([i({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=st=e([l("esri.popup.content.AttachmentsContent")],I);const G=I;var rt;let $=rt=class extends w{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new rt({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?g(this.outFields):null})}};e([i()],$.prototype,"creator",void 0),e([i()],$.prototype,"destroyer",void 0),e([i()],$.prototype,"outFields",void 0),e([i({type:["custom"],readOnly:!0})],$.prototype,"type",void 0),$=rt=e([l("esri.popup.content.CustomContent")],$);const ie=$;var nt;let N=nt=class extends h{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new nt({title:this.title,expression:this.expression})}};e([i({type:String,json:{write:!0}})],N.prototype,"title",void 0),e([i({type:String,json:{write:!0}})],N.prototype,"expression",void 0),e([i({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],N.prototype,"returnType",void 0),N=nt=e([l("esri.popup.ElementExpressionInfo")],N);const se=N;var lt;let A=lt=class extends w{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){var t;return new lt({expressionInfo:(t=this.expressionInfo)==null?void 0:t.clone()})}};e([i({type:se,json:{write:!0}})],A.prototype,"expressionInfo",void 0),e([i({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],A.prototype,"type",void 0),A=lt=e([l("esri.popup.content.ExpressionContent")],A);const Nt=A,k=Lt()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});k.toJSON.bind(k);k.fromJSON.bind(k);var at;let F=at=class extends h{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new at({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?Xt(t,{...Zt(this.dateFormat),...this.dateTimeFormatOptions}):te(t,ee(this))}formatRasterPixelValue(t){if(t.includes("-"))return t;let o,r;return t.trim().includes(",")?(o=",",r=o+" ",this._formatDelimitedString(t,o,r,this)):t.trim().includes(";")?(o=";",r=o+" ",this._formatDelimitedString(t,o,r,this)):t.trim().includes(" ")?(o=r=" ",this._formatDelimitedString(t,o,r,this)):this.format(Number(t))}_formatDelimitedString(t,o,r,n){return t&&o&&r&&n?t.trim().split(o).map(s=>this.format(Number(s))).join(r):t}};e([Et(k)],F.prototype,"dateFormat",void 0),e([i({type:Object,json:{read:!1}})],F.prototype,"dateTimeFormatOptions",void 0),e([i({type:Boolean,json:{write:!0}})],F.prototype,"digitSeparator",void 0),e([i({type:it,json:{write:!0}})],F.prototype,"places",void 0),F=at=e([l("esri.popup.support.FieldInfoFormat")],F);const re=F;var pt;let c=pt=class extends h{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new pt({fieldName:this.fieldName,format:this.format?g(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};e([i({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),e([i({type:re,json:{write:!0}})],c.prototype,"format",void 0),e([i({type:Boolean,json:{write:!0,default:!1}})],c.prototype,"isEditable",void 0),e([i({type:String,json:{write:!0}})],c.prototype,"label",void 0),e([Et(new Qt({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],c.prototype,"stringFieldOption",void 0),e([i({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],c.prototype,"statisticType",void 0),e([i({type:String,json:{write:!0}})],c.prototype,"tooltip",void 0),e([i({type:Boolean,json:{write:!0}})],c.prototype,"visible",void 0),c=pt=e([l("esri.popup.FieldInfo")],c);const Dt=c;var dt;let v=dt=class extends w{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,o){o.fieldInfos=t&&t.map(r=>r.toJSON())}clone(){return new dt(g({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};e([i({type:Object,json:{write:!0}})],v.prototype,"attributes",void 0),e([i({type:String,json:{write:!0}})],v.prototype,"description",void 0),e([i({type:[Dt]})],v.prototype,"fieldInfos",void 0),e([R("fieldInfos")],v.prototype,"writeFieldInfos",null),e([i({type:String,json:{write:!0}})],v.prototype,"title",void 0),e([i({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=dt=e([l("esri.popup.content.FieldsContent")],v);const K=v;let S=class extends h{constructor(o){super(o),this.altText=null,this.caption="",this.title="",this.type=null}};e([i({type:String,json:{write:!0}})],S.prototype,"altText",void 0),e([i({type:String,json:{write:!0}})],S.prototype,"caption",void 0),e([i({type:String,json:{write:!0}})],S.prototype,"title",void 0),e([i({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],S.prototype,"type",void 0),S=e([l("esri.popup.content.mixins.MediaInfo")],S);const Ot=S;var ht;let O=ht=class extends Ct{constructor(t){super(t),this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new ht({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};e([i()],O.prototype,"fieldName",void 0),e([i()],O.prototype,"tooltip",void 0),e([i()],O.prototype,"value",void 0),O=ht=e([l("esri.popup.content.support.ChartMediaInfoValueSeries")],O);const ne=O;var ct;let b=ct=class extends h{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new ct({fields:g(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};e([i({type:[String],json:{write:!0}})],b.prototype,"fields",void 0),e([i({type:String,json:{write:!0}})],b.prototype,"normalizeField",void 0),e([i({type:[ne],json:{read:!1}})],b.prototype,"series",void 0),e([i({type:String,json:{write:!0}})],b.prototype,"tooltipField",void 0),b=ct=e([l("esri.popup.content.support.ChartMediaInfoValue")],b);const le=b;let M=class extends Ot{constructor(o){super(o),this.type=null,this.value=null}};e([i({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"type",void 0),e([i({type:le,json:{write:!0}})],M.prototype,"value",void 0),M=e([l("esri.popup.content.mixins.ChartMediaInfo")],M);const Z=M,tt=Lt()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"});var yt;let U=yt=class extends Z{constructor(t){super(t),this.type="bar-chart"}clone(){return new yt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:tt.write}})],U.prototype,"type",void 0),U=yt=e([l("esri.popup.content.BarChartMediaInfo")],U);const Bt=U;var ut;let V=ut=class extends Z{constructor(t){super(t),this.type="column-chart"}clone(){return new ut({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:tt.write}})],V.prototype,"type",void 0),V=ut=e([l("esri.popup.content.ColumnChartMediaInfo")],V);const Jt=V;var mt;let L=mt=class extends h{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new mt({linkURL:this.linkURL,sourceURL:this.sourceURL})}};e([i({type:String,json:{write:!0}})],L.prototype,"linkURL",void 0),e([i({type:String,json:{write:!0}})],L.prototype,"sourceURL",void 0),L=mt=e([l("esri.popup.content.support.ImageMediaInfoValue")],L);const ae=L;var ft;let _=ft=class extends Ot{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new ft({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};e([i({type:Number,json:{write:!0}})],_.prototype,"refreshInterval",void 0),e([i({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],_.prototype,"type",void 0),e([i({type:ae,json:{write:!0}})],_.prototype,"value",void 0),_=ft=e([l("esri.popup.content.ImageMediaInfo")],_);const Yt=_;var vt;let z=vt=class extends Z{constructor(t){super(t),this.type="line-chart"}clone(){return new vt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:tt.write}})],z.prototype,"type",void 0),z=vt=e([l("esri.popup.content.LineChartMediaInfo")],z);const kt=z;var gt;let q=gt=class extends Z{constructor(t){super(t),this.type="pie-chart"}clone(){return new gt({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};e([i({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:tt.write}})],q.prototype,"type",void 0),q=gt=e([l("esri.popup.content.PieChartMediaInfo")],q);const Pt=q,Ut={base:Ot,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":Bt,"column-chart":Jt,"line-chart":kt,"pie-chart":Pt,image:Yt}};var wt;let y=wt=class extends w{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map(o=>o.type==="image"?Yt.fromJSON(o):o.type==="barchart"?Bt.fromJSON(o):o.type==="columnchart"?Jt.fromJSON(o):o.type==="linechart"?kt.fromJSON(o):o.type==="piechart"?Pt.fromJSON(o):void 0).filter(Boolean)}writeMediaInfos(t,o){o.mediaInfos=t&&t.map(r=>r.toJSON())}clone(){return new wt(g({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};e([i()],y.prototype,"activeMediaInfoIndex",void 0),e([i({type:Object,json:{write:!0}})],y.prototype,"attributes",void 0),e([i({type:String,json:{write:!0}})],y.prototype,"description",void 0),e([i({types:[Ut]})],y.prototype,"mediaInfos",void 0),e([Mt("mediaInfos")],y.prototype,"readMediaInfos",null),e([R("mediaInfos")],y.prototype,"writeMediaInfos",null),e([i({type:String,json:{write:!0}})],y.prototype,"title",void 0),e([i({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=wt=e([l("esri.popup.content.MediaContent")],y);const H=y;var xt;let E=xt=class extends h{constructor(t){super(t),this.field=null,this.order=null}clone(){return new xt({field:this.field,order:this.order})}};e([i({type:String,json:{write:!0}})],E.prototype,"field",void 0),e([i({type:["asc","desc"],json:{write:!0}})],E.prototype,"order",void 0),E=xt=e([l("esri.popup.support.RelatedRecordsInfoFieldOrder")],E);const Vt=E;let f=class extends At(w){constructor(t){super(t),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}};e([i({type:String,json:{write:!0}})],f.prototype,"description",void 0),e([i({type:Number,json:{type:it,write:!0}})],f.prototype,"displayCount",void 0),e([i({type:["list"],json:{write:!0}})],f.prototype,"displayType",void 0),e([i({type:[Vt],json:{write:!0}})],f.prototype,"orderByFields",void 0),e([i({type:Number,json:{type:it,write:!0}})],f.prototype,"relationshipId",void 0),e([i({type:String,json:{write:!0}})],f.prototype,"title",void 0),e([i({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=e([l("esri.popup.content.RelationshipContent")],f);const Q=f;var It;let D=It=class extends w{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new It({text:this.text})}};e([i({type:String,json:{write:!0}})],D.prototype,"text",void 0),e([i({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],D.prototype,"type",void 0),D=It=e([l("esri.popup.content.TextContent")],D);const X=D,pe={base:null,key:"type",typeMap:{attachment:G,media:H,text:X,expression:Nt,field:K,relationship:Q}};var $t;let j=$t=class extends h{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new $t({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([i({type:String,json:{write:!0}})],j.prototype,"name",void 0),e([i({type:String,json:{write:!0}})],j.prototype,"title",void 0),e([i({type:String,json:{write:!0}})],j.prototype,"expression",void 0),e([i({type:["string","number"],json:{write:!0}})],j.prototype,"returnType",void 0),j=$t=e([l("esri.popup.ExpressionInfo")],j);const de=j;var Ft;let B=Ft=class extends h{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new Ft({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};e([i({type:Boolean,json:{write:!0}})],B.prototype,"returnTopmostRaster",void 0),e([i({type:Boolean,json:{write:!0}})],B.prototype,"showNoDataRecords",void 0),B=Ft=e([l("esri.popup.LayerOptions")],B);const he=B;var St;let J=St=class extends h{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new St({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?g(this.orderByFields):null})}};e([i({type:Boolean,json:{write:!0}})],J.prototype,"showRelatedRecords",void 0),e([i({type:[Vt],json:{write:!0}})],J.prototype,"orderByFields",void 0),J=St=e([l("esri.popup.RelatedRecordsInfo")],J);const ce=J;var bt;let u=bt=class extends oe(Ct){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new bt({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};e([i()],u.prototype,"active",void 0),e([i()],u.prototype,"className",void 0),e([i()],u.prototype,"disabled",void 0),e([i()],u.prototype,"id",void 0),e([i()],u.prototype,"indicator",void 0),e([i()],u.prototype,"title",void 0),e([i()],u.prototype,"type",void 0),e([i()],u.prototype,"visible",void 0),u=bt=e([l("esri.support.actions.ActionBase")],u);const _t=u;var jt;let W=jt=class extends _t{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new jt({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};e([i()],W.prototype,"image",void 0),W=jt=e([l("esri.support.Action.ActionButton")],W);const ye=W;var Tt;let Y=Tt=class extends _t{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new Tt({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};e([i()],Y.prototype,"image",void 0),e([i()],Y.prototype,"value",void 0),Y=Tt=e([l("esri.support.Action.ActionToggle")],Y);const ue=Y,me="esri.PopupTemplate",fe=qt.getLogger(me),C="relationships/",Rt="expression/",ve=ot.ofType({key:"type",defaultKeyValue:"button",base:_t,typeMap:{button:ye,toggle:ue}}),ge={base:w,key:"type",typeMap:{media:H,custom:ie,text:X,attachments:G,fields:K,expression:Nt,relationship:Q}},we=["attachments","fields","media","text","expression","relationship"];let p=class extends At(h){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(t){return Array.isArray(t)?t.map(o=>Gt(ge,o)):typeof t=="string"||typeof t=="function"||t instanceof HTMLElement||Wt(t)?t:(fe.error("content error","unsupported content value",{value:t}),null)}readContent(t,o){const{popupElements:r}=o;return Array.isArray(r)&&r.length>0?this._readPopupInfoElements(o.description,o.mediaInfos,r):this._readPopupInfo(o)}writeContent(t,o,r,n){typeof t!="string"?Array.isArray(t)&&(o.popupElements=t.filter(s=>we.includes(s.type)).map(s=>s&&s.toJSON(n)),o.popupElements.forEach(s=>{s.type==="attachments"?this._writeAttachmentContent(o):s.type==="media"?this._writeMediaContent(s,o):s.type==="text"?this._writeTextContent(s,o):s.type==="relationship"&&this._writeRelationshipContent(s,o)})):o.description=t}writeFieldInfos(t,o,r,n){const{content:s}=this,a=Array.isArray(s)?s:null;if(t){const d=a?a.filter(m=>m.type==="fields"):[],T=d.length&&d.every(m=>{var x;return(x=m.fieldInfos)==null?void 0:x.length});o.fieldInfos=t.filter(Boolean).map(m=>{const x=m.toJSON(n);return T&&(x.visible=!1),x})}if(a)for(const d of a)d.type==="fields"&&this._writeFieldsContent(d,o)}writeLayerOptions(t,o,r,n){o[r]=!t||t.showNoDataRecords===null&&t.returnTopmostRaster===null?null:t.toJSON(n)}writeTitle(t,o){o.title=t||""}async collectRequiredFields(t,o){const r=this.expressionInfos||[];await this._collectExpressionInfoFields(t,o,[...r,...this._getContentExpressionInfos(this.content,r)]),Kt(t,o,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const o=new Set;return await this.collectRequiredFields(o,t),[...o].sort()}_writeFieldsContent(t,o){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const r=g(t.fieldInfos);Array.isArray(o.fieldInfos)?r.forEach(n=>{const s=o.fieldInfos.find(a=>a.fieldName.toLowerCase()===n.fieldName.toLowerCase());s?s.visible=!0:o.fieldInfos.push(n)}):o.fieldInfos=r}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeRelationshipContent(t,o){var s,a;const r=((s=t.orderByFields)==null?void 0:s.map(d=>this._toFieldOrderJSON(d,t.relationshipId)))||[],n=[...((a=o.relatedRecordsInfo)==null?void 0:a.orderByFields)||[],...r];o.relatedRecordsInfo={showRelatedRecords:!0,...(n==null?void 0:n.length)&&{orderByFields:n}}}_writeTextContent(t,o){!o.description&&t.text&&(o.description=t.text)}_writeMediaContent(t,o){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const r=g(t.mediaInfos);Array.isArray(o.mediaInfos)?o.mediaInfos=[...o.mediaInfos,...r]:o.mediaInfos=r}_readPopupInfoElements(t,o,r){const n={description:!1,mediaInfos:!1};return r.map(s=>s.type==="media"?(s.mediaInfos||!o||n.mediaInfos||(s.mediaInfos=o,n.mediaInfos=!0),H.fromJSON(s)):s.type==="text"?(s.text||!t||n.description||(s.text=t,n.description=!0),X.fromJSON(s)):s.type==="attachments"?G.fromJSON(s):s.type==="fields"?K.fromJSON(s):s.type==="expression"?Nt.fromJSON(s):s.type==="relationship"?Q.fromJSON(s):void 0).filter(Boolean)}_toRelationshipContent(t){const{field:o,order:r}=t;if(!(o!=null&&o.startsWith(C)))return null;const n=o.replace(C,"").split("/");if(n.length!==2)return null;const s=parseInt(n[0],10),a=n[1];return typeof s=="number"&&a?Q.fromJSON({relationshipId:s,orderByFields:[{field:a,order:r}]}):null}_toFieldOrderJSON(t,o){const{order:r,field:n}=t;return{field:`${C}${o}/${n}`,order:r}}_readPopupInfo({description:t,mediaInfos:o,showAttachments:r,relatedRecordsInfo:n={showRelatedRecords:!1}}){const s=[];t?s.push(new X({text:t})):s.push(new K),Array.isArray(o)&&o.length&&s.push(H.fromJSON({mediaInfos:o})),r&&s.push(G.fromJSON({displayType:"auto"}));const{showRelatedRecords:a,orderByFields:d}=n;return a&&(d!=null&&d.length)&&d.forEach(T=>{const m=this._toRelationshipContent(T);m&&s.push(m)}),s.length?s:t}_getContentElementFields(t){const o=t==null?void 0:t.type;if(o==="attachments")return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if(o==="custom")return t.outFields||[];if(o==="fields")return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos??this.fieldInfos)];if(o==="media"){const r=t.mediaInfos||[];return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...r.reduce((n,s)=>[...n,...this._getMediaInfoFields(s)],[])]}return o==="text"?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:o,title:r,value:n}=t,s=n||{},{fields:a,normalizeField:d,tooltipField:T,sourceURL:m,linkURL:x}=s,et=[...this._extractFieldNames(r),...this._extractFieldNames(o),...this._extractFieldNames(m),...this._extractFieldNames(x),...a??[]];return d&&et.push(d),T&&et.push(T),et}_getContentExpressionInfos(t,o){return Array.isArray(t)?t.reduce((r,n)=>[...r,...n.type==="expression"&&n.expressionInfo?[n.expressionInfo]:[]],o):[]}_getContentFields(t){return typeof t=="string"?this._extractFieldNames(t):Array.isArray(t)?t.reduce((o,r)=>[...o,...this._getContentElementFields(r)],[]):[]}async _collectExpressionInfoFields(t,o,r){r&&await Promise.all(r.map(n=>Ht(t,o,n.expression)))}_getFieldInfoFields(t){return t?t.filter(o=>o.visible===void 0||!!o.visible).map(o=>o.fieldName).filter(o=>!o.startsWith(C)&&!o.startsWith(Rt)):[]}_getActionsFields(t){return t?t.toArray().reduce((o,r)=>[...o,...this._getActionFields(r)],[]):[]}_getActionFields(t){const{className:o,title:r,type:n}=t,s=n==="button"||n==="toggle"?t.image:"";return[...this._extractFieldNames(r),...this._extractFieldNames(o),...this._extractFieldNames(s)]}_getTitleFields(t){return typeof t=="string"?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||typeof t!="string")return[];const o=/{[^}]*}/g,r=t.match(o);if(!r)return[];const n=/\{(\w+):.+\}/,s=r.filter(a=>!(a.indexOf(`{${C}`)===0||a.indexOf(`{${Rt}`)===0)).map(a=>a.replace(n,"{$1}"));return s?s.map(a=>a.slice(1,-1)):[]}};e([i({type:ve})],p.prototype,"actions",void 0),e([i()],p.prototype,"content",void 0),e([zt("content")],p.prototype,"castContent",null),e([Mt("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],p.prototype,"readContent",null),e([R("content",{popupElements:{type:ot.ofType(pe)},showAttachments:{type:Boolean},mediaInfos:{type:ot.ofType(Ut)},description:{type:String},relatedRecordsInfo:{type:ce}})],p.prototype,"writeContent",null),e([i({type:[de],json:{write:!0}})],p.prototype,"expressionInfos",void 0),e([i({type:[Dt]})],p.prototype,"fieldInfos",void 0),e([R("fieldInfos")],p.prototype,"writeFieldInfos",null),e([i({type:he})],p.prototype,"layerOptions",void 0),e([R("layerOptions")],p.prototype,"writeLayerOptions",null),e([i({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],p.prototype,"lastEditInfoEnabled",void 0),e([i()],p.prototype,"outFields",void 0),e([i()],p.prototype,"overwriteActions",void 0),e([i()],p.prototype,"returnGeometry",void 0),e([i({json:{type:String}})],p.prototype,"title",void 0),e([R("title")],p.prototype,"writeTitle",null),p=e([l("esri.PopupTemplate")],p);const De=p;export{H as I,ne as a,X as b,Dt as c,K as d,se as e,ye as f,_t as g,ue as h,de as i,Vt as j,De as k,G as l,re as u};
