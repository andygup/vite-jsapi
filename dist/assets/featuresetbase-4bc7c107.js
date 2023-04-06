import{c as he}from"./arcadeTimeUtils-58670096.js";import{q as A,z as v,b as R,_ as P,t as x,ah as ge,U as we,V as oe,O as S,G as H,P as N,J as V,Q as Ie,E as z,ai as Fe,R as Ee,c as j,k as De,aj as be,ak as q,a0 as K,al as X}from"./arcadeUtils-0dcf38d1.js";import{t as m,e as y}from"./executionError-fb3f283a.js";import{e as le,b as xe,j as fe,f as Ae,c as ce,a as Ne,d as Te,g as Se,S as Y,C as ve,I as Le,h as Pe,y as k,A as Re,x as B,D as L,E as _}from"./featureSetUtils-e6596cdc.js";import{t as Ce}from"./portalUtils-dffb979f.js";import{e as Oe,A as ue}from"./SpatialFilter-fde42152.js";import{hX as Me,ih as $,h4 as W}from"./index-0265f5b0.js";import{f as b}from"./WhereClause-fc5e1781.js";import"./number-8adcf9e5.js";import"./executeForIds-9061c18e.js";import"./geometryEngineAsync-67c51f15.js";function ke(s,n,i,d){if(d.length===1){if(N(d[0]))return X(s,d[0],-1);if(z(d[0]))return X(s,d[0].toArray(),-1)}return X(s,d,-1)}async function ee(s,n,i){const d=s.getVariables();if(d.length>0){const F=[];for(let a=0;a<d.length;a++){const t={name:d[a]};F.push(await n.evaluateIdentifier(i,t))}const e={};for(let a=0;a<d.length;a++)e[d[a]]=F[a];return s.parameters=e,s}return s}function u(s,n,i=null){for(const d in s)if(d.toLowerCase()===n.toLowerCase())return s[d];return i}function de(s){if(s===null)return null;const n={type:u(s,"type",""),name:u(s,"name","")};if(n.type==="range")n.range=u(s,"range",[]);else{n.codedValues=[];for(const i of u(s,"codedValues",[]))n.codedValues.push({name:u(i,"name",""),code:u(i,"code",null)})}return n}function ne(s){if(s===null)return null;const n={},i=u(s,"wkt",null);i!==null&&(n.wkt=i);const d=u(s,"wkid",null);return d!==null&&(n.wkid=d),n}function me(s){if(s===null)return null;const n={hasZ:u(s,"hasz",!1),hasM:u(s,"hasm",!1)},i=u(s,"spatialreference",null);i&&(n.spatialReference=ne(i));const d=u(s,"x",null);if(d!==null)return n.x=d,n.y=u(s,"y",null),n;const F=u(s,"rings",null);if(F!==null)return n.rings=F,n;const e=u(s,"paths",null);if(e!==null)return n.paths=e,n;const a=u(s,"points",null);if(a!==null)return n.points=a,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const c=u(s,t,null);c!==null&&(n[t]=c)}return n}function ze(s,n){for(const i of n)if(i===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&ze(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(s.layerDefinition.fields)!==!1&&N(s.featureSet.features)!==!1}function Xe(s){s.mode==="async"&&(s.functions.timezone=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(A(e,1,2,n,i),v(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new m(n,y.InvalidParameter,i);const c=e[1].field("type");if(P(c)===!1)throw new m(n,y.InvalidParameter,i);switch(x(c).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(x(e[1].field("fieldname")))}throw new m(n,y.InvalidParameter,i)}const a=ge(e[0],we(n));if(a===null)return null;const t=a.timeZone;return t==="system"?he.systemTimeZoneCanonicalName:t})},s.functions.sqltimestamp=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{A(e,1,3,n,i);const a=e[0];if(oe(a)){if(e.length===1)return a.toSQLString();if(e.length===2)return a.changeTimeZone(x(e[1])).toSQLString();throw new m(n,y.InvalidParameter,i)}if(v(a)){if(e.length!==3)throw new m(n,y.InvalidParameter,i);await a.load();const t=x(e[1]);if(oe(e[2])===!1)throw new m(n,y.InvalidParameter,i);const c=a.fieldTimeZone(t);return c===null?e[2].toSQLString():e[2].changeTimeZone(c).toSQLString()}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,i){return s.standardFunctionAsync(n,i,(d,F,e)=>{if(A(e,2,4,n,i),e[0]instanceof le){const a=x(e[1]);let t=S(e[2],null);const c=H(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new m(n,y.InvalidParameter,i);return e[0].featureSetById(a,c,t)}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,i){return s.standardFunctionAsync(n,i,(d,F,e)=>{if(A(e,1,2,n,i),V(e[0])){let a=S(e[1],"datasource");return a===null&&(a="datasource"),a=x(a).toLowerCase(),xe(e[0].fullSchema(),a,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,i){return s.standardFunctionAsync(n,i,(d,F,e)=>{if(A(e,2,5,n,i),e[0]===null)throw new m(n,y.PortalRequired,i);if(e[0]instanceof Ie){const l=x(e[1]),r=x(e[2]);let o=S(e[3],null);const f=H(S(e[4],!0));if(o===null&&(o=["*"]),N(o)===!1)throw new m(n,y.InvalidParameter,i);let h=null;return n.services&&n.services.portal&&(h=n.services.portal),h=Ce(e[0],h),fe(l,r,n.spatialReference,o,f,h,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,y.PortalRequired,i);const a=x(e[0]),t=x(e[1]);let c=S(e[2],null);const p=H(S(e[3],!0));if(c===null&&(c=["*"]),N(c)===!1)throw new m(n,y.InvalidParameter,i);if(n.services&&n.services.portal)return fe(a,t,n.spatialReference,c,p,n.services.portal,n.lrucache,n.interceptor);throw new m(n,y.PortalRequired,i)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,i){return s.standardFunctionAsync(n,i,(d,F,e)=>{if(A(e,2,4,n,i),e[0]instanceof le){const a=x(e[1]);let t=S(e[2],null);const c=H(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new m(n,y.InvalidParameter,i);return e[0].featureSetByName(a,c,t)}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,i){return s.standardFunction(n,i,(d,F,e)=>{var c;A(e,1,1,n,i);let a=e[0];const t={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(a))a=JSON.parse(a),a.layerDefinition!==void 0?(t.layerDefinition=a.layerDefinition,t.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(t.featureSet.features=a.features,t.featureSet.geometryType=a.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=a.objectIdFieldName??"",t.layerDefinition.typeIdField=a.typeIdFieldName,t.layerDefinition.globalIdField=a.globalIdFieldName,t.layerDefinition.fields=a.fields,a.spatialReference&&(t.layerDefinition.spatialReference=a.spatialReference));else{if(!(e[0]instanceof R))throw new m(n,y.InvalidParameter,i);{a=JSON.parse(e[0].castToText(!0));const p=u(a,"layerdefinition");if(p!==null){t.layerDefinition.geometryType=u(p,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=u(p,"globalidfield",""),t.layerDefinition.objectIdField=u(p,"objectidfield",""),t.layerDefinition.typeIdField=u(p,"typeidfield","");const l=u(p,"spatialreference",null);l&&(t.layerDefinition.spatialReference=ne(l));for(const o of u(p,"fields",[])){const f={name:u(o,"name",""),alias:u(o,"alias",""),type:u(o,"type",""),nullable:u(o,"nullable",!0),editable:u(o,"editable",!0),length:u(o,"length",null),domain:de(u(o,"domain"))};t.layerDefinition.fields.push(f)}const r=u(a,"featureset",null);if(r){const o={};for(const f of t.layerDefinition.fields)o[f.name.toLowerCase()]=f.name;for(const f of u(r,"features",[])){const h={},E=u(f,"attributes",{});for(const w in E)h[o[w.toLowerCase()]]=E[w];t.featureSet.features.push({attributes:h,geometry:me(u(f,"geometry",null))})}}}else{t.layerDefinition.geometryType=u(a,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=u(a,"objectidfieldname",""),t.layerDefinition.typeIdField=u(a,"typeidfieldname","");const l=u(a,"spatialreference",null);l&&(t.layerDefinition.spatialReference=ne(l));let r=u(a,"fields",null);if(N(r))for(const h of r){const E={name:u(h,"name",""),alias:u(h,"alias",""),type:u(h,"type",""),nullable:u(h,"nullable",!0),editable:u(h,"editable",!0),length:u(h,"length",null),domain:de(u(h,"domain"))};t.layerDefinition.fields.push(E)}else r=null,t.layerDefinition.fields=r;const o={};for(const h of t.layerDefinition.fields)o[h.name.toLowerCase()]=h.name;let f=u(a,"features",null);if(N(f))for(const h of f){const E={},w=u(h,"attributes",{});for(const D in w)E[o[D.toLowerCase()]]=w[D];t.featureSet.features.push({attributes:E,geometry:me(u(h,"geometry",null))})}else f=null,t.featureSet.features=f}}}if(He(t)===!1)throw new m(n,y.InvalidParameter,i);return(((c=t==null?void 0:t.layerDefinition)==null?void 0:c.geometryType)||"")===""&&(t.layerDefinition.geometryType="esriGeometryNull"),Ae.create(t,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(A(e,2,2,n,i),N(e[0])||z(e[0])){const a=[];let t=e[0];t instanceof Fe&&(t=t.toArray());let c=null;if(!Ee(e[1]))throw new m(n,y.InvalidParameter,i);c=e[1].createFunction(n);for(const p of t){const l=c(p);Me(l)?await l===!0&&a.push(p):l===!0&&a.push(p)}return a}if(v(e[0])){const a=await e[0].load(),t=b.create(e[1],a.getFieldsIndex()),c=t.getVariables();if(c.length>0){const p=[];for(let r=0;r<c.length;r++){const o={name:c[r]};p.push(await s.evaluateIdentifier(n,o))}const l={};for(let r=0;r<c.length;r++)l[c[r]]=p[r];return t.parameters=l,new ce({parentfeatureset:e[0],whereclause:t})}return new ce({parentfeatureset:e[0],whereclause:t})}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(A(e,2,2,n,i),v(e[0])){const a=new Ne(e[1]);return new Te({parentfeatureset:e[0],orderbyclause:a})}throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(A(e,2,2,n,i),v(e[0]))return new Se({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return j(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,j(e[1]));if(z(e[0]))return j(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,j(e[1]));throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(A(e,1,1,n,i),v(e[0])){const a=await e[0].first(d.abortSignal);if(a!==null){const t=De.createFromGraphicLikeObject(a.geometry,a.attributes,e[0],n.timeReference);return t._underlyingGraphic=a,t}return a}return N(e[0])?e[0].length===0?null:e[0][0]:z(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{A(e,1,2,n,i);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(a.minsize=j(e[1].field("minsize"))),e[1].hasField("metadata")&&(a.returnMetadata=H(e[1].field("metadata"))),e[1].hasField("maxsize")&&(a.maxsize=j(e[1].field("maxsize"))),e[1].hasField("types")){const t=be(e[1].field("types"),!1);t.length>0&&(a.types=t)}}else if(e[1]!==null)throw new m(n,y.InvalidParameter,i)}if(V(e[0])){let t=e[0]._layer;return t instanceof $&&(t=Y(t,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),t===null?[]:v(t)===!1?[]:(await t.load(),t.queryAttachments(e[0].field(t.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata))}if(e[0]===null)return[];throw new m(n,y.InvalidParameter,i)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{A(e,2,4,n,i);const a=e[0],t=x(e[1]);let c=S(e[2],null);const p=H(S(e[3],!0));if(c===null&&(c=["*"]),N(c)===!1)throw new m(n,y.InvalidParameter,i);if(e[0]===null)return null;if(!V(e[0]))throw new m(n,y.InvalidParameter,i);let l=a._layer;if(l instanceof $&&(l=Y(l,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),l===null||v(l)===!1)return null;l=await l.load();const r=l.relationshipMetaData().filter(w=>w.name===t);if(r.length===0)return null;if(r[0].relationshipTableId!==void 0&&r[0].relationshipTableId!==null&&r[0].relationshipTableId>-1)return ve(l,r[0],a.field(l.objectIdField),l.spatialReference,c,p,n.lrucache,n.interceptor);let o=l.serviceUrl();if(!o)return null;o=o.charAt(o.length-1)==="/"?o+r[0].relatedTableId.toString():o+"/"+r[0].relatedTableId.toString();const f=await Le(o,l.spatialReference,c,p,n.lrucache,n.interceptor);await f.load();let h=f.relationshipMetaData();if(h=h.filter(w=>w.id===r[0].id),a.hasField(r[0].keyField)===!1||a.field(r[0].keyField)===null){const w=await l.getFeatureByObjectId(a.field(l.objectIdField),[r[0].keyField]);if(w){const D=b.create(h[0].keyField+"= @id",f.getFieldsIndex());return D.parameters={id:w.attributes[r[0].keyField]},f.filter(D)}return new Oe({parentfeatureset:f})}const E=b.create(h[0].keyField+"= @id",f.getFieldsIndex());return E.parameters={id:a.field(r[0].keyField)},f.filter(E)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{A(e,2,3,n,i);const a=e[0],t=x(S(e[1],"")).toLowerCase(),c=P(e[2])?x(e[2]):null;if(e[0]===null)return null;if(!V(e[0]))throw new m(n,y.InvalidParameter,i);let p=a._layer;if(p instanceof $&&(p=Y(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),p===null||v(p)===!1)return null;await p.load();const l=p.serviceUrl(),r=await Pe(l,n.spatialReference);let o=null,f=null,h=!1;if(c!==null&&c!==""&&c!==void 0){for(const I of r.terminals)I.terminalName===c&&(f=I.terminalId);f===null&&(h=!0)}const E=r.associations.getFieldsIndex(),w=E.get("TOGLOBALID").name,D=E.get("FROMGLOBALID").name,J=E.get("TOTERMINALID").name,Q=E.get("FROMTERMINALID").name,G=E.get("FROMNETWORKSOURCEID").name,Z=E.get("TONETWORKSOURCEID").name,M=E.get("ASSOCIATIONTYPE").name,ye=E.get("ISCONTENTVISIBLE").name,pe=E.get("OBJECTID").name;for(const I of p.fields)if(I.type==="global-id"){o=a.field(I.name);break}let C=null,te=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),b.create("0",r.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),b.create("''",r.associations.getFieldsIndex()));const T="globalid",ae="globalId",re={};for(const I in r.lkp)re[I]=r.lkp[I].sourceId;const O=new Re(new W({name:"classname",alias:"classname",type:"string"}),null,re);let g="";switch(t){case"midspan":{g=`((${w}='${o}') OR ( ${D}='${o}')) AND (${M} IN (5))`,O.codefield=b.create(`CASE WHEN (${w}='${o}') THEN ${G} ELSE ${Z} END`,r.associations.getFieldsIndex());const I=K(L.findField(r.associations.fields,D));I.name=T,I.alias=T,C=new k(I,b.create(`CASE WHEN (${D}='${o}') THEN ${w} ELSE ${D} END`,r.associations.getFieldsIndex())),te=r.unVersion>=4?new _(L.findField(r.associations.fields,E.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),b.create("0",r.associations.getFieldsIndex()));break}case"junctionedge":{g=`((${w}='${o}') OR ( ${D}='${o}')) AND (${M} IN (4,6))`,O.codefield=b.create(`CASE WHEN (${w}='${o}') THEN ${G} ELSE ${Z} END`,r.associations.getFieldsIndex());const I=K(L.findField(r.associations.fields,D));I.name=T,I.alias=T,C=new k(I,b.create(`CASE WHEN (${D}='${o}') THEN ${w} ELSE ${D} END`,r.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),b.create(`CASE WHEN (${M}=4) THEN 'from' ELSE 'to' END`,r.associations.getFieldsIndex()));break}case"connected":{let I=`${w}='@T'`,se=`${D}='@T'`;f!==null&&(I+=` AND ${J}=@A`,se+=` AND ${Q}=@A`),g="(("+I+") OR ("+se+"))",g=q(g,"@T",o??""),I=q(I,"@T",o??""),f!==null&&(I=q(I,"@A",f.toString()),g=q(g,"@A",f.toString())),O.codefield=b.create("CASE WHEN "+I+` THEN ${G} ELSE ${Z} END`,r.associations.getFieldsIndex());const U=K(L.findField(r.associations.fields,D));U.name=T,U.alias=T,C=new k(U,b.create("CASE WHEN "+I+` THEN ${D} ELSE ${w} END`,r.associations.getFieldsIndex()));break}case"container":g=`${w}='${o}' AND ${M} = 2`,f!==null&&(g+=` AND ${J} = `+f.toString()),O.codefield=G,g="( "+g+" )",C=new B(L.findField(r.associations.fields,D),T,T);break;case"content":g=`(${D}='${o}' AND ${M} = 2)`,f!==null&&(g+=` AND ${Q} = `+f.toString()),O.codefield=Z,g="( "+g+" )",C=new B(L.findField(r.associations.fields,w),T,T);break;case"structure":g=`(${w}='${o}' AND ${M} = 3)`,f!==null&&(g+=` AND ${J} = `+f.toString()),O.codefield=G,g="( "+g+" )",C=new B(L.findField(r.associations.fields,D),T,ae);break;case"attached":g=`(${D}='${o}' AND ${M} = 3)`,f!==null&&(g+=` AND ${Q} = `+f.toString()),O.codefield=Z,g="( "+g+" )",C=new B(L.findField(r.associations.fields,w),T,ae);break;default:throw new m(n,y.InvalidParameter,i)}return h&&(g="1 <> 1"),new L({parentfeatureset:r.associations,adaptedFields:[new _(L.findField(r.associations.fields,pe)),new _(L.findField(r.associations.fields,ye)),C,ie,O,te],extraFilter:g?b.create(g,r.associations.getFieldsIndex()):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(A(e,3,3,n,i),!v(e[0]))throw new m(n,y.InvalidParameter,i);const a=await e[0].load(),t=[],c=[];let p=!1,l=[];if(P(e[1]))l.push(e[1]);else if(e[1]instanceof R)l.push(e[1]);else if(N(e[1]))l=e[1];else{if(!z(e[1]))throw new m(n,y.InvalidParameter,i);l=e[1].toArray()}for(const r of l)if(P(r)){const o=b.create(x(r),a.getFieldsIndex()),f=ue(o)===!0?x(r):"%%%%FIELDNAME";t.push({name:f,expression:o}),f==="%%%%FIELDNAME"&&(p=!0)}else{if(!(r instanceof R))throw new m(n,y.InvalidParameter,i);{const o=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",f=r.hasField("expression")?r.field("expression"):"";if(o==="%%%%FIELDNAME"&&(p=!0),!o)throw new m(n,y.InvalidParameter,i);t.push({name:o,expression:b.create(f||o,a.getFieldsIndex())})}}if(l=[],P(e[2]))l.push(e[2]);else if(N(e[2]))l=e[2];else if(z(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof R))throw new m(n,y.InvalidParameter,i);l.push(e[2])}for(const r of l){if(!(r instanceof R))throw new m(n,y.InvalidParameter,i);{const o=r.hasField("name")?r.field("name"):"",f=r.hasField("statistic")?r.field("statistic"):"",h=r.hasField("expression")?r.field("expression"):"";if(!o||!f||!h)throw new m(n,y.InvalidParameter,i);c.push({name:o,statistic:f.toLowerCase(),expression:b.create(h,a.getFieldsIndex())})}}if(p){const r={};for(const f of a.fields)r[f.name.toLowerCase()]=1;for(const f of t)f.name!=="%%%%FIELDNAME"&&(r[f.name.toLowerCase()]=1);for(const f of c)f.name!=="%%%%FIELDNAME"&&(r[f.name.toLowerCase()]=1);let o=0;for(const f of t)if(f.name==="%%%%FIELDNAME"){for(;r["field_"+o.toString()]===1;)o++;r["field_"+o.toString()]=1,f.name="FIELD_"+o.toString()}}for(const r of t)await ee(r.expression,s,n);for(const r of c)await ee(r.expression,s,n);return e[0].groupby(t,c)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,i){return s.standardFunctionAsync(n,i,async(d,F,e)=>{if(v(e[0])){A(e,2,2,n,i);const a=await e[0].load(),t=[];let c=[];if(P(e[1]))c.push(e[1]);else if(e[1]instanceof R)c.push(e[1]);else if(N(e[1]))c=e[1];else{if(!z(e[1]))throw new m(n,y.InvalidParameter,i);c=e[1].toArray()}let p=!1;for(const l of c)if(P(l)){const r=b.create(x(l),a.getFieldsIndex()),o=ue(r)===!0?x(l):"%%%%FIELDNAME";t.push({name:o,expression:r}),o==="%%%%FIELDNAME"&&(p=!0)}else{if(!(l instanceof R))throw new m(n,y.InvalidParameter,i);{const r=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",o=l.hasField("expression")?l.field("expression"):"";if(r==="%%%%FIELDNAME"&&(p=!0),!r)throw new m(n,y.InvalidParameter,i);t.push({name:r,expression:b.create(o||r,a.getFieldsIndex())})}}if(p){const l={};for(const o of a.fields)l[o.name.toLowerCase()]=1;for(const o of t)o.name!=="%%%%FIELDNAME"&&(l[o.name.toLowerCase()]=1);let r=0;for(const o of t)if(o.name==="%%%%FIELDNAME"){for(;l["field_"+r.toString()]===1;)r++;l["field_"+r.toString()]=1,o.name="FIELD_"+r.toString()}}for(const l of t)await ee(l.expression,s,n);return e[0].groupby(t,[])}return ke("distinct",d,F,e)})})}export{Xe as registerFunctions};
