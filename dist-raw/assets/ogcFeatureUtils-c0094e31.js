import{L as J,E as y,r as k,bt as I,S as L,g5 as K}from"./index-0cbe37a0.js";import{A,f as Q,e as _}from"./featureConversionUtils-f0b03e2b.js";import{O as V}from"./OptimizedFeatureSet-5c82fe5a.js";import{v as H,i as U,c as X}from"./geojson-8d62eca3.js";import{a as Y}from"./clientSideDefaults-21e85150.js";import{F as ee}from"./FieldsIndex-91c8dad2.js";import{k as te}from"./fieldType-7585de06.js";const R=J.getLogger("esri.layers.graphics.sources.ogcfeature"),P="http://www.opengis.net/def/crs/",ge=`${P}OGC/1.3/CRS84`;async function ye(t,n,e={},i=5){const{links:r}=t,l=m(r,"items","application/geo+json")||m(r,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(l==null)throw new y("ogc-feature-layer:missing-items-page","Missing items url");const{data:c}=await k(l.href,{signal:e.signal,query:{limit:i,...e.customParameters,token:e.apiKey},headers:{accept:"application/geo+json"}});await H(c);const s=U(c,{geometryType:n.geometryType}),d=n.fields||s.fields||[],F=n.hasZ!=null?n.hasZ:s.hasZ,p=s.geometryType,f=n.objectIdField||s.objectIdFieldName||"OBJECTID";let o=n.timeInfo;const S=d.find(({name:a})=>a===f);if(S)S.editable=!1,S.nullable=!1;else{if(!s.objectIdFieldType)throw new y("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");d.unshift({name:f,alias:f,type:s.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(f!==s.objectIdFieldName){const a=d.find(({name:u})=>u===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}d===s.fields&&s.unknownFields.length>0&&R.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of d){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new y("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!te.jsonValues.includes(a.type))throw new y("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(o){const a=new ee(d);if(o.startTimeField){const u=a.get(o.startTimeField);u?(o.startTimeField=u.name,u.type="esriFieldTypeDate"):o.startTimeField=null}if(o.endTimeField){const u=a.get(o.endTimeField);u?(o.endTimeField=u.name,u.type="esriFieldTypeDate"):o.endTimeField=null}if(o.trackIdField){const u=a.get(o.trackIdField);u?o.trackIdField=u.name:(o.trackIdField=null,R.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:o}}))}!o.startTimeField&&!o.endTimeField&&(R.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:o}}),o=null)}const T=p?Y(p):null,G=oe(t);return{drawingInfo:T,extent:G,geometryType:p,fields:d,hasZ:!!F,objectIdField:f,timeInfo:o}}async function we(t,n={}){const{links:e}=t,i=m(e,"data","application/json")||m(e,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(i==null)throw new y("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:r,customParameters:l,signal:c}=n,{data:s}=await k(i.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function be(t,n={}){const{links:e}=t,i=m(e,"conformance","application/json")||m(e,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(i==null)throw new y("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:r,customParameters:l,signal:c}=n,{data:s}=await k(i.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function Fe(t,n={}){const{apiKey:e,customParameters:i,signal:r}=n,{data:l}=await k(t,{signal:r,headers:{accept:"application/json"},query:{...i,token:e}});return l}async function he(t,n={}){const e="application/vnd.oai.openapi+json;version=3.0",i=m(t.links,"service-desc",e);if(i==null)return R.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:l,signal:c}=n,{data:s}=await k(i.href,{signal:c,headers:{accept:e},query:{...l,token:r}});return s}function Ie(t){const e=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(t),i=e==null?void 0:e.groups;if(!i)return null;const{authority:r,code:l}=i;switch(r.toLowerCase()){case"ogc":switch(l.toLowerCase()){case"crs27":return I.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return I.WGS84.wkid;default:return null}case"esri":case"epsg":{const c=Number.parseInt(l,10);return Number.isNaN(c)?null:c}default:return null}}async function ke(t,n,e){const i=await ne(t,n,e);return A(i)}async function ne(t,n,e){const{collection:i,layerDefinition:r,maxRecordCount:l,queryParameters:{apiKey:c,customParameters:s},spatialReference:d,supportedCrs:F}=t,{links:p}=i,f=m(p,"items","application/geo+json")||m(p,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(f==null)throw new y("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:o,num:S,start:T,timeExtent:G,where:a}=n;if(n.objectIds)throw new y("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const u=I.fromJSON(d),h=n.outSpatialReference??u,x=h.isWGS84?null:$(h,F),C=se(o,F),M=ae(G),B=re(a),z=S??(T!=null&&T!==void 0?10:l),{data:w}=await k(f.href,{...e,query:{...s,...C,crs:x,datetime:M,query:B,limit:z,startindex:T,token:c},headers:{accept:"application/geo+json"}});let j=!1;w.links&&(j=!!w.links.find(N=>N.rel==="next")),!j&&Number.isInteger(w.numberMatched)&&Number.isInteger(w.numberReturned)&&(j=w.numberReturned<w.numberMatched);const{fields:E,geometryType:v,hasZ:q,objectIdField:D}=r,O=X(w,{geometryType:v,hasZ:q,objectIdField:D});if(!x&&h.isWebMercator){for(const b of O)if(b.geometry!=null&&v!=null){const N=Q(b.geometry,v,q,!1);N.spatialReference=I.WGS84,b.geometry=_(L(N,h))}}for(const b of O)b.objectId=b.attributes[D];const Z=x||!x&&h.isWebMercator?h.toJSON():K,g=new V;return g.exceededTransferLimit=j,g.features=O,g.fields=E,g.geometryType=v,g.hasZ=q,g.objectIdFieldName=D,g.spatialReference=Z,g}function ie(t){return t!=null&&t.type==="extent"}function $(t,n){const{isWebMercator:e,wkid:i}=t;if(!i)return null;const r=e?n[3857]??n[102100]??n[102113]??n[900913]:n[t.wkid];return r?`${P}${r}`:null}function W(t){if(t==null)return"";const{xmin:n,ymin:e,xmax:i,ymax:r}=t;return`${n},${e},${i},${r}`}function ae(t){if(t==null)return null;const{start:n,end:e}=t;return`${n!=null?n.toISOString():".."}/${e!=null?e.toISOString():".."}`}function re(t){return t==null||!t||t==="1=1"?null:t}function se(t,n){if(!ie(t))return null;const{spatialReference:e}=t;if(!e||e.isWGS84)return{bbox:W(t)};const i=$(e,n);return i!=null?{bbox:W(t),"bbox-crs":i}:e.isWebMercator?{bbox:W(L(t,I.WGS84))}:null}function oe(t){var f;const n=(f=t.extent)==null?void 0:f.spatial;if(!n)return null;const e=n.bbox[0],i=e.length===4,r=e[0],l=e[1],c=i?void 0:e[2],s=i?e[2]:e[3],d=i?e[3]:e[4],F=i?void 0:e[5],p=I.WGS84.toJSON();return{xmin:r,ymin:l,xmax:s,ymax:d,zmin:c,zmax:F,spatialReference:p}}function m(t,n,e){return t.find(i=>i.rel===n&&i.type===e)||t.find(i=>i.rel===n&&!i.type)}export{ke as a,Fe as b,ge as c,be as d,we as e,he as f,Ie as g,ye as h,P as i,ne as q};