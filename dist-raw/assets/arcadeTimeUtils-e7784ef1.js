import{d as v}from"./executionError-e2eca390.js";import{d_ as P,d$ as u,e0 as b,e1 as j,e2 as W}from"./index-468a9268.js";import{F as E}from"./FieldsIndex-ab7b931c.js";class m{}m.instance=new P("Etc/UTC");var F;(function(i){i.TimeZoneNotRecognised="TimeZoneNotRecognised"})(F||(F={}));const V={[F.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."};class R extends Error{constructor(e,t){super(v(V[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,R)}}class s{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,n=1,f=0,r=0,a=0,d=0,g){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(f)||isNaN(r)||isNaN(a)||isNaN(d))return null;let c=0;const I=u.local(e,t).daysInMonth;n<1&&(c=n-1,n=1),n>I&&(c=n-I,n=I);let l=0;t>12?(l=t-12,t=12):t<1&&(l=t-1,t=1);let h=0;r>59?(h=r-59,r=59):r<0&&(h=r,r=0);let T=0;a>59?(T=a-59,a=59):a<0&&(T=a,a=0);let w=0;d>999?(w=d-999,d=999):d<0&&(w=d,d=0);let o=u.fromObject({day:n,year:e,month:t,hour:f,minute:r,second:a,millisecond:d},{zone:_(g)});return l!==0&&(o=o.plus({months:l})),c!==0&&(o=o.plus({days:c})),h!==0&&(o=o.plus({minutes:h})),T!==0&&(o=o.plus({seconds:T})),w!==0&&(o=o.plus({milliseconds:w})),new s(o)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const n=_(t);return e.isUnknownTimeZone||n===m.instance?s.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,n):new s(e._date.setZone(t))}static dateJSToArcadeDate(e){return new s(u.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){return new s(u.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new s(u.fromMillis(e,{zone:m.instance}))}static unknownDateJSToArcadeDate(e){return new s(u.fromMillis(e.getTime(),{zone:m.instance}))}static epochToArcadeDate(e,t="system"){return new s(u.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new s(e)}changeTimeZone(e){const t=_(e);return s.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const n=_(t);return e.zone===m.instance||n===m.instance?s.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,n):new s(e.setZone(n))}static nowToArcadeDate(e){return new s(u.fromJSDate(new Date,{zone:e}))}static nowUTCToArcadeDate(){return new s(u.utc())}get isSystem(){return this.timeZone==="system"||this.timeZone===s.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone!==e.isUnknownTimeZone?!1:this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===m.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if(this._date.zone.type==="system")return"system";const e=this.zone;return e.type==="fixed"?e.fixed===0?"utc":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new s(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toFormat(e,t){return this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLString(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new s(this._date.toUTC())}toLocal(){return new s(this._date.toLocal())}toString(){return this.toISOString(!0)}}function _(i){if(i instanceof b)return i;if(i.toLowerCase()==="system")return"system";if(i.toLowerCase()==="utc")return"utc";if(i.toLowerCase()==="unknown")return m.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(i)){const t=j.parseSpecifier("UTC"+(i.startsWith("+")||i.startsWith("-")?"":"+")+i);if(t)return t}const e=P.create(i);if(!e.isValid)throw new R(F.TimeZoneNotRecognised);return e}function q(i){return i!=null&&i.timeZoneIANA?i==null?void 0:i.timeZoneIANA:i!=null&&i.timeZone?W(i,""):""}class D{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(e,t){const n=new D;return n.dateTimeReferenceMetaData=t,e instanceof E?n._fieldIndex=e:n._fieldIndex=new E(e),n}static createFromLayer(e){var n,f,r,a;if(!e)return null;if(!e.fieldsIndex)return!e.declaredClass&&e.fields?D.create(e.fields,e):null;const t=new D;return t._fieldIndex=e.fieldsIndex,t.dateTimeReferenceMetaData={timeInfo:((n=e==null?void 0:e.timeInfo)==null?void 0:n.toJSON())??null,editFieldsInfo:((f=e==null?void 0:e.editFieldsInfo)==null?void 0:f.toJSON())??null,dateFieldsTimeReference:((r=e==null?void 0:e.dateFieldsTimeReference)==null?void 0:r.toJSON())??null,preferredTimeReference:((a=e==null?void 0:e.preferredTimeReference)==null?void 0:a.toJSON())??null,datesInUnknownTimezone:(e==null?void 0:e.datesInUnknownTimezone)===!0},t}fieldTimeZone(e){var a,d,g,c,I,l,h,T,w,o,S,k,M,Z,p,A,O,z,U,y,J,L,x;const t=(a=this._fieldIndex)==null?void 0:a.get(e);if(!t||t.type!=="date"&&t.type!=="esriFieldTypeDate")return null;const n=this._fieldTimeZoneIndex[t.name];if(n!==void 0)return n;const f=[{field:(g=(d=this.dateTimeReferenceMetaData)==null?void 0:d.editFieldsInfo)==null?void 0:g.creationDateField,timeReference:(I=(c=this.dateTimeReferenceMetaData)==null?void 0:c.editFieldsInfo)==null?void 0:I.dateFieldsTimeReference,isunknown:((l=this.dateTimeReferenceMetaData)==null?void 0:l.datesInUnknownTimezone)===!0},{field:(T=(h=this.dateTimeReferenceMetaData)==null?void 0:h.editFieldsInfo)==null?void 0:T.editDateField,timeReference:(o=(w=this.dateTimeReferenceMetaData)==null?void 0:w.editFieldsInfo)==null?void 0:o.dateFieldsTimeReference,isunknown:((S=this.dateTimeReferenceMetaData)==null?void 0:S.datesInUnknownTimezone)===!0},{field:(M=(k=this.dateTimeReferenceMetaData)==null?void 0:k.timeInfo)==null?void 0:M.startTimeField,timeReference:(p=(Z=this.dateTimeReferenceMetaData)==null?void 0:Z.timeInfo)==null?void 0:p.timeReference,isunknown:((A=this.dateTimeReferenceMetaData)==null?void 0:A.datesInUnknownTimezone)===!0},{field:(z=(O=this.dateTimeReferenceMetaData)==null?void 0:O.timeInfo)==null?void 0:z.endTimeField,timeReference:(y=(U=this.dateTimeReferenceMetaData)==null?void 0:U.timeInfo)==null?void 0:y.timeReference,isunknown:((J=this.dateTimeReferenceMetaData)==null?void 0:J.datesInUnknownTimezone)===!0}];for(const N of f)if(N.field===t.name){const C=this.convertToIANA(N.timeReference,N.isunknown);return this._fieldTimeZoneIndex[t.name]=C,C}const r=this.convertToIANA((L=this.dateTimeReferenceMetaData)==null?void 0:L.dateFieldsTimeReference,(x=this.dateTimeReferenceMetaData)==null?void 0:x.datesInUnknownTimezone);return this._fieldTimeZoneIndex[t.name]=r,r}convertToIANA(e,t){return t?"unknown":q(e)}get layerPreferredTimeZone(){var t,n;if(this._ianaPreferred!==null)return this._ianaPreferred;this._ianaPreferred="";const e=(t=this.dateTimeReferenceMetaData)==null?void 0:t.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(e,((n=this.dateTimeReferenceMetaData)==null?void 0:n.datesInUnknownTimezone)===!0),this._ianaPreferred}get layerTimeInfoTimeZone(){var t,n;if(this._ianaTimeInfo!==null)return this._ianaTimeInfo;this._ianaTimeInfo="";const e=(n=(t=this.dateTimeReferenceMetaData)==null?void 0:t.timeInfo)==null?void 0:n.timeReference;return this._ianaTimeInfo=this.convertToIANA(e,!1),this._ianaTimeInfo}get layerEditFieldsTimeZone(){var t,n,f;if(this._ianaEditFields!==null)return this._ianaEditFields;this._ianaEditFields="";const e=(n=(t=this.dateTimeReferenceMetaData)==null?void 0:t.editFieldsInfo)==null?void 0:n.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(e,(f=this.dateTimeReferenceMetaData)==null?void 0:f.datesInUnknownTimezone),this._ianaEditFields}get layerDateFieldsTimeZone(){var t,n;if(this._ianaLayerDateFields!==null)return this._ianaLayerDateFields;this._ianaLayerDateFields="";const e=(t=this.dateTimeReferenceMetaData)==null?void 0:t.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(e,((n=this.dateTimeReferenceMetaData)==null?void 0:n.datesInUnknownTimezone)===!0),this._ianaLayerDateFields}}export{s as A,D,_ as c};
