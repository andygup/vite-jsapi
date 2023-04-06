import{c as ge}from"./arcadeTimeUtils-767097cf.js";import{B as x,G as v,b as R,v as P,r as A,ah as he,Q as we,U as se,y as S,K as z,J as N,z as B,P as Ie,V as j,ai as Fe,C as Ee,l as H,g as De,aj as be,ak as V,a0 as K,al as Y}from"./arcadeUtils-37f7d809.js";import{t as m,e as y}from"./executionError-fb3f283a.js";import{e as oe,E as Ae,j as fe,f as xe,c as ce,a as Ne,b as Te,d as Se,S as X,C as ve,I as Le,A as Pe,y as k,g as Re,x as J,D as L,h as _}from"./featureSetUtils-da4d44a1.js";import{t as Ce}from"./portalUtils-3ca153f3.js";import{e as Me,A as de}from"./SpatialFilter-bfd7d430.js";import{hW as Oe,id as $,gs as W}from"./index-6c241492.js";import{f as D}from"./WhereClause-a346a866.js";import"./number-64a6efe8.js";import"./executeForIds-29f13ad0.js";import"./geometryEngineAsync-94906821.js";function ke(l,n,t,u){if(u.length===1){if(N(u[0]))return Y(l,u[0],-1);if(j(u[0]))return Y(l,u[0].toArray(),-1)}return Y(l,u,-1)}async function ee(l,n,t){const u=l.getVariables();if(u.length>0){const w=[];for(let a=0;a<u.length;a++){const i={name:u[a]};w.push(await n.evaluateIdentifier(t,i))}const e={};for(let a=0;a<u.length;a++)e[u[a]]=w[a];return l.parameters=e,l}return l}function d(l,n,t=null){for(const u in l)if(u.toLowerCase()===n.toLowerCase())return l[u];return t}function ue(l){if(l===null)return null;const n={type:d(l,"type",""),name:d(l,"name","")};if(n.type==="range")n.range=d(l,"range",[]);else{n.codedValues=[];for(const t of d(l,"codedValues",[]))n.codedValues.push({name:d(t,"name",""),code:d(t,"code",null)})}return n}function ne(l){if(l===null)return null;const n={},t=d(l,"wkt",null);t!==null&&(n.wkt=t);const u=d(l,"wkid",null);return u!==null&&(n.wkid=u),n}function me(l){if(l===null)return null;const n={hasZ:d(l,"hasz",!1),hasM:d(l,"hasm",!1)},t=d(l,"spatialreference",null);t&&(n.spatialReference=ne(t));const u=d(l,"x",null);if(u!==null)return n.x=u,n.y=d(l,"y",null),n;const w=d(l,"rings",null);if(w!==null)return n.rings=w,n;const e=d(l,"paths",null);if(e!==null)return n.paths=e,n;const a=d(l,"points",null);if(a!==null)return n.points=a,n;for(const i of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const c=d(l,i,null);c!==null&&(n[i]=c)}return n}function je(l,n){for(const t of n)if(t===l)return!0;return!1}function ze(l){return!!l.layerDefinition&&!!l.featureSet&&je(l.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&l.layerDefinition.objectIdField!==null&&l.layerDefinition.objectIdField!==""&&N(l.layerDefinition.fields)!==!1&&N(l.featureSet.features)!==!1}function Ye(l){l.mode==="async"&&(l.functions.timezone=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(x(e,1,2,n,t),v(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new m(n,y.InvalidParameter,t);const c=e[1].field("type");if(P(c)===!1)throw new m(n,y.InvalidParameter,t);switch(A(c).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(A(e[1].field("fieldname")))}throw new m(n,y.InvalidParameter,t)}const a=he(e[0],we(n));if(a===null)return null;const i=a.timeZone;return i==="system"?ge.systemTimeZoneCanonicalName:i})},l.functions.sqltimestamp=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{x(e,1,3,n,t);const a=e[0];if(se(a)){if(e.length===1)return a.toSQLString();if(e.length===2)return a.changeTimeZone(A(e[1])).toSQLString();throw new m(n,y.InvalidParameter,t)}if(v(a)){if(e.length!==3)throw new m(n,y.InvalidParameter,t);await a.load();const i=A(e[1]);if(se(e[2])===!1)throw new m(n,y.InvalidParameter,t);const c=a.fieldTimeZone(i);return c===null?e[2].toSQLString():e[2].changeTimeZone(c).toSQLString()}throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"sqltimestamp",min:2,max:4}),l.functions.featuresetbyid=function(n,t){return l.standardFunctionAsync(n,t,(u,w,e)=>{if(x(e,2,4,n,t),e[0]instanceof oe){const a=A(e[1]);let i=S(e[2],null);const c=z(S(e[3],!0));if(i===null&&(i=["*"]),N(i)===!1)throw new m(n,y.InvalidParameter,t);return e[0].featureSetById(a,c,i)}throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"featuresetbyid",min:2,max:4}),l.functions.getfeatureset=function(n,t){return l.standardFunctionAsync(n,t,(u,w,e)=>{if(x(e,1,2,n,t),B(e[0])){let a=S(e[1],"datasource");return a===null&&(a="datasource"),a=A(a).toLowerCase(),Ae(e[0].fullSchema(),a,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"getfeatureset",min:1,max:2}),l.functions.featuresetbyportalitem=function(n,t){return l.standardFunctionAsync(n,t,(u,w,e)=>{if(x(e,2,5,n,t),e[0]===null)throw new m(n,y.PortalRequired,t);if(e[0]instanceof Ie){const o=A(e[1]),r=A(e[2]);let s=S(e[3],null);const f=z(S(e[4],!0));if(s===null&&(s=["*"]),N(s)===!1)throw new m(n,y.InvalidParameter,t);let F=null;return n.services&&n.services.portal&&(F=n.services.portal),F=Ce(e[0],F),fe(o,r,n.spatialReference,s,f,F,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,y.PortalRequired,t);const a=A(e[0]),i=A(e[1]);let c=S(e[2],null);const p=z(S(e[3],!0));if(c===null&&(c=["*"]),N(c)===!1)throw new m(n,y.InvalidParameter,t);if(n.services&&n.services.portal)return fe(a,i,n.spatialReference,c,p,n.services.portal,n.lrucache,n.interceptor);throw new m(n,y.PortalRequired,t)})},l.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),l.functions.featuresetbyname=function(n,t){return l.standardFunctionAsync(n,t,(u,w,e)=>{if(x(e,2,4,n,t),e[0]instanceof oe){const a=A(e[1]);let i=S(e[2],null);const c=z(S(e[3],!0));if(i===null&&(i=["*"]),N(i)===!1)throw new m(n,y.InvalidParameter,t);return e[0].featureSetByName(a,c,i)}throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"featuresetbyname",min:2,max:4}),l.functions.featureset=function(n,t){return l.standardFunction(n,t,(u,w,e)=>{var c;x(e,1,1,n,t);let a=e[0];const i={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(a))a=JSON.parse(a),a.layerDefinition!==void 0?(i.layerDefinition=a.layerDefinition,i.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(i.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(i.featureSet.features=a.features,i.featureSet.geometryType=a.geometryType,i.layerDefinition.geometryType=i.featureSet.geometryType,i.layerDefinition.objectIdField=a.objectIdFieldName,i.layerDefinition.typeIdField=a.typeIdFieldName,i.layerDefinition.globalIdField=a.globalIdFieldName,i.layerDefinition.fields=a.fields,a.spatialReference&&(i.layerDefinition.spatialReference=a.spatialReference));else{if(!(e[0]instanceof R))throw new m(n,y.InvalidParameter,t);{a=JSON.parse(e[0].castToText(!0));const p=d(a,"layerdefinition");if(p!==null){i.layerDefinition.geometryType=d(p,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.globalIdField=d(p,"globalidfield",""),i.layerDefinition.objectIdField=d(p,"objectidfield",""),i.layerDefinition.typeIdField=d(p,"typeidfield","");const o=d(p,"spatialreference",null);o&&(i.layerDefinition.spatialReference=ne(o));for(const s of d(p,"fields",[])){const f={name:d(s,"name",""),alias:d(s,"alias",""),type:d(s,"type",""),nullable:d(s,"nullable",!0),editable:d(s,"editable",!0),length:d(s,"length",null),domain:ue(d(s,"domain"))};i.layerDefinition.fields.push(f)}const r=d(a,"featureset",null);if(r){const s={};for(const f of i.layerDefinition.fields)s[f.name.toLowerCase()]=f.name;for(const f of d(r,"features",[])){const F={},E=d(f,"attributes",{});for(const I in E)F[s[I.toLowerCase()]]=E[I];i.featureSet.features.push({attributes:F,geometry:me(d(f,"geometry",null))})}}}else{i.layerDefinition.geometryType=d(a,"geometrytype",""),i.featureSet.geometryType=i.layerDefinition.geometryType,i.layerDefinition.objectIdField=d(a,"objectidfieldname",""),i.layerDefinition.typeIdField=d(a,"typeidfieldname","");const o=d(a,"spatialreference",null);o&&(i.layerDefinition.spatialReference=ne(o));for(const s of d(a,"fields",[])){const f={name:d(s,"name",""),alias:d(s,"alias",""),type:d(s,"type",""),nullable:d(s,"nullable",!0),editable:d(s,"editable",!0),length:d(s,"length",null),domain:ue(d(s,"domain"))};i.layerDefinition.fields.push(f)}const r={};for(const s of i.layerDefinition.fields)r[s.name.toLowerCase()]=s.name;for(const s of d(a,"features",[])){const f={},F=d(s,"attributes",{});for(const E in F)f[r[E.toLowerCase()]]=F[E];i.featureSet.features.push({attributes:f,geometry:me(d(s,"geometry",null))})}}}}if(ze(i)===!1)throw new m(n,y.InvalidParameter,t);return(((c=i==null?void 0:i.layerDefinition)==null?void 0:c.geometryType)||"")===""&&(i.layerDefinition.geometryType="esriGeometryNull"),xe.create(i,n.spatialReference)})},l.signatures.push({name:"featureset",min:1,max:1}),l.functions.filter=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(x(e,2,2,n,t),N(e[0])||j(e[0])){const a=[];let i=e[0];i instanceof Fe&&(i=i.toArray());let c=null;if(!Ee(e[1]))throw new m(n,y.InvalidParameter,t);c=e[1].createFunction(n);for(const p of i){const o=c(p);Oe(o)?await o===!0&&a.push(p):o===!0&&a.push(p)}return a}if(v(e[0])){const a=await e[0].load(),i=D.create(e[1],a.getFieldsIndex()),c=i.getVariables();if(c.length>0){const p=[];for(let r=0;r<c.length;r++){const s={name:c[r]};p.push(await l.evaluateIdentifier(n,s))}const o={};for(let r=0;r<c.length;r++)o[c[r]]=p[r];return i.parameters=o,new ce({parentfeatureset:e[0],whereclause:i})}return new ce({parentfeatureset:e[0],whereclause:i})}throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"filter",min:2,max:2}),l.functions.orderby=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(x(e,2,2,n,t),v(e[0])){const a=new Ne(e[1]);return new Te({parentfeatureset:e[0],orderbyclause:a})}throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"orderby",min:2,max:2}),l.functions.top=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(x(e,2,2,n,t),v(e[0]))return new Se({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return H(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,H(e[1]));if(j(e[0]))return H(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,H(e[1]));throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"top",min:2,max:2}),l.functions.first=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(x(e,1,1,n,t),v(e[0])){const a=await e[0].first(u.abortSignal);if(a!==null){const i=De.createFromGraphicLikeObject(a.geometry,a.attributes,e[0],n.timeReference);return i._underlyingGraphic=a,i}return a}return N(e[0])?e[0].length===0?null:e[0][0]:j(e[0])?e[0].length()===0?null:e[0].get(0):null})},l.signatures.push({name:"first",min:1,max:1}),l.functions.attachments=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{x(e,1,2,n,t);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(a.minsize=H(e[1].field("minsize"))),e[1].hasField("metadata")&&(a.returnMetadata=z(e[1].field("metadata"))),e[1].hasField("maxsize")&&(a.maxsize=H(e[1].field("maxsize"))),e[1].hasField("types")){const i=be(e[1].field("types"),!1);i.length>0&&(a.types=i)}}else if(e[1]!==null)throw new m(n,y.InvalidParameter,t)}if(B(e[0])){let i=e[0]._layer;return i instanceof $&&(i=X(i,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),i===null?[]:v(i)===!1?[]:(await i.load(),i.queryAttachments(e[0].field(i.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata))}if(e[0]===null)return[];throw new m(n,y.InvalidParameter,t)})},l.signatures.push({name:"attachments",min:1,max:2}),l.functions.featuresetbyrelationshipname=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{x(e,2,4,n,t);const a=e[0],i=A(e[1]);let c=S(e[2],null);const p=z(S(e[3],!0));if(c===null&&(c=["*"]),N(c)===!1)throw new m(n,y.InvalidParameter,t);if(e[0]===null)return null;if(!B(e[0]))throw new m(n,y.InvalidParameter,t);let o=a._layer;if(o instanceof $&&(o=X(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||v(o)===!1)return null;o=await o.load();const r=o.relationshipMetaData().filter(I=>I.name===i);if(r.length===0)return null;if(r[0].relationshipTableId!==void 0&&r[0].relationshipTableId!==null&&r[0].relationshipTableId>-1)return ve(o,r[0],a.field(o.objectIdField),o.spatialReference,c,p,n.lrucache,n.interceptor);let s=o.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+r[0].relatedTableId.toString():s+"/"+r[0].relatedTableId.toString();const f=await Le(s,o.spatialReference,c,p,n.lrucache,n.interceptor);await f.load();let F=f.relationshipMetaData();if(F=F.filter(I=>I.id===r[0].id),a.hasField(r[0].keyField)===!1||a.field(r[0].keyField)===null){const I=await o.getFeatureByObjectId(a.field(o.objectIdField),[r[0].keyField]);if(I){const b=D.create(F[0].keyField+"= @id",f.getFieldsIndex());return b.parameters={id:I.attributes[r[0].keyField]},f.filter(b)}return new Me({parentfeatureset:f})}const E=D.create(F[0].keyField+"= @id",f.getFieldsIndex());return E.parameters={id:a.field(r[0].keyField)},f.filter(E)})},l.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),l.functions.featuresetbyassociation=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{x(e,2,3,n,t);const a=e[0],i=A(S(e[1],"")).toLowerCase(),c=P(e[2])?A(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new m(n,y.InvalidParameter,t);let p=a._layer;if(p instanceof $&&(p=X(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),p===null||v(p)===!1)return null;await p.load();const o=p.serviceUrl(),r=await Pe(o,n.spatialReference);let s=null,f=null,F=!1;if(c!==null&&c!==""&&c!==void 0){for(const h of r.terminals)h.terminalName===c&&(f=h.terminalId);f===null&&(F=!0)}const E=r.associations.getFieldsIndex(),I=E.get("TOGLOBALID").name,b=E.get("FROMGLOBALID").name,Q=E.get("TOTERMINALID").name,q=E.get("FROMTERMINALID").name,G=E.get("FROMNETWORKSOURCEID").name,Z=E.get("TONETWORKSOURCEID").name,O=E.get("ASSOCIATIONTYPE").name,ye=E.get("ISCONTENTVISIBLE").name,pe=E.get("OBJECTID").name;for(const h of p.fields)if(h.type==="global-id"){s=a.field(h.name);break}let C=null,te=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",r.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create("''",r.associations.getFieldsIndex()));const T="globalid",ae="globalId",re={};for(const h in r.lkp)re[h]=r.lkp[h].sourceId;const M=new Re(new W({name:"classname",alias:"classname",type:"string"}),null,re);let g="";switch(i){case"midspan":{g=`((${I}='${s}') OR ( ${b}='${s}')) AND (${O} IN (5))`,M.codefield=D.create(`CASE WHEN (${I}='${s}') THEN ${G} ELSE ${Z} END`,r.associations.getFieldsIndex());const h=K(L.findField(r.associations.fields,b));h.name=T,h.alias=T,C=new k(h,D.create(`CASE WHEN (${b}='${s}') THEN ${I} ELSE ${b} END`,r.associations.getFieldsIndex())),te=r.unVersion>=4?new _(L.findField(r.associations.fields,E.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",r.associations.getFieldsIndex()));break}case"junctionedge":{g=`((${I}='${s}') OR ( ${b}='${s}')) AND (${O} IN (4,6))`,M.codefield=D.create(`CASE WHEN (${I}='${s}') THEN ${G} ELSE ${Z} END`,r.associations.getFieldsIndex());const h=K(L.findField(r.associations.fields,b));h.name=T,h.alias=T,C=new k(h,D.create(`CASE WHEN (${b}='${s}') THEN ${I} ELSE ${b} END`,r.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,r.associations.getFieldsIndex()));break}case"connected":{let h=`${I}='@T'`,le=`${b}='@T'`;f!==null&&(h+=` AND ${Q}=@A`,le+=` AND ${q}=@A`),g="(("+h+") OR ("+le+"))",g=V(g,"@T",s??""),h=V(h,"@T",s??""),f!==null&&(h=V(h,"@A",f.toString()),g=V(g,"@A",f.toString())),M.codefield=D.create("CASE WHEN "+h+` THEN ${G} ELSE ${Z} END`,r.associations.getFieldsIndex());const U=K(L.findField(r.associations.fields,b));U.name=T,U.alias=T,C=new k(U,D.create("CASE WHEN "+h+` THEN ${b} ELSE ${I} END`,r.associations.getFieldsIndex()));break}case"container":g=`${I}='${s}' AND ${O} = 2`,f!==null&&(g+=` AND ${Q} = `+f.toString()),M.codefield=G,g="( "+g+" )",C=new J(L.findField(r.associations.fields,b),T,T);break;case"content":g=`(${b}='${s}' AND ${O} = 2)`,f!==null&&(g+=` AND ${q} = `+f.toString()),M.codefield=Z,g="( "+g+" )",C=new J(L.findField(r.associations.fields,I),T,T);break;case"structure":g=`(${I}='${s}' AND ${O} = 3)`,f!==null&&(g+=` AND ${Q} = `+f.toString()),M.codefield=G,g="( "+g+" )",C=new J(L.findField(r.associations.fields,b),T,ae);break;case"attached":g=`(${b}='${s}' AND ${O} = 3)`,f!==null&&(g+=` AND ${q} = `+f.toString()),M.codefield=Z,g="( "+g+" )",C=new J(L.findField(r.associations.fields,I),T,ae);break;default:throw new m(n,y.InvalidParameter,t)}return F&&(g="1 <> 1"),new L({parentfeatureset:r.associations,adaptedFields:[new _(L.findField(r.associations.fields,pe)),new _(L.findField(r.associations.fields,ye)),C,ie,M,te],extraFilter:g?D.create(g,r.associations.getFieldsIndex()):null})})},l.signatures.push({name:"featuresetbyassociation",min:2,max:6}),l.functions.groupby=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(x(e,3,3,n,t),!v(e[0]))throw new m(n,y.InvalidParameter,t);const a=await e[0].load(),i=[],c=[];let p=!1,o=[];if(P(e[1]))o.push(e[1]);else if(e[1]instanceof R)o.push(e[1]);else if(N(e[1]))o=e[1];else{if(!j(e[1]))throw new m(n,y.InvalidParameter,t);o=e[1].toArray()}for(const r of o)if(P(r)){const s=D.create(A(r),a.getFieldsIndex()),f=de(s)===!0?A(r):"%%%%FIELDNAME";i.push({name:f,expression:s}),f==="%%%%FIELDNAME"&&(p=!0)}else{if(!(r instanceof R))throw new m(n,y.InvalidParameter,t);{const s=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",f=r.hasField("expression")?r.field("expression"):"";if(s==="%%%%FIELDNAME"&&(p=!0),!s)throw new m(n,y.InvalidParameter,t);i.push({name:s,expression:D.create(f||s,a.getFieldsIndex())})}}if(o=[],P(e[2]))o.push(e[2]);else if(N(e[2]))o=e[2];else if(j(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof R))throw new m(n,y.InvalidParameter,t);o.push(e[2])}for(const r of o){if(!(r instanceof R))throw new m(n,y.InvalidParameter,t);{const s=r.hasField("name")?r.field("name"):"",f=r.hasField("statistic")?r.field("statistic"):"",F=r.hasField("expression")?r.field("expression"):"";if(!s||!f||!F)throw new m(n,y.InvalidParameter,t);c.push({name:s,statistic:f.toLowerCase(),expression:D.create(F,a.getFieldsIndex())})}}if(p){const r={};for(const f of a.fields)r[f.name.toLowerCase()]=1;for(const f of i)f.name!=="%%%%FIELDNAME"&&(r[f.name.toLowerCase()]=1);for(const f of c)f.name!=="%%%%FIELDNAME"&&(r[f.name.toLowerCase()]=1);let s=0;for(const f of i)if(f.name==="%%%%FIELDNAME"){for(;r["field_"+s.toString()]===1;)s++;r["field_"+s.toString()]=1,f.name="FIELD_"+s.toString()}}for(const r of i)await ee(r.expression,l,n);for(const r of c)await ee(r.expression,l,n);return e[0].groupby(i,c)})},l.signatures.push({name:"groupby",min:3,max:3}),l.functions.distinct=function(n,t){return l.standardFunctionAsync(n,t,async(u,w,e)=>{if(v(e[0])){x(e,2,2,n,t);const a=await e[0].load(),i=[];let c=[];if(P(e[1]))c.push(e[1]);else if(e[1]instanceof R)c.push(e[1]);else if(N(e[1]))c=e[1];else{if(!j(e[1]))throw new m(n,y.InvalidParameter,t);c=e[1].toArray()}let p=!1;for(const o of c)if(P(o)){const r=D.create(A(o),a.getFieldsIndex()),s=de(r)===!0?A(o):"%%%%FIELDNAME";i.push({name:s,expression:r}),s==="%%%%FIELDNAME"&&(p=!0)}else{if(!(o instanceof R))throw new m(n,y.InvalidParameter,t);{const r=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",s=o.hasField("expression")?o.field("expression"):"";if(r==="%%%%FIELDNAME"&&(p=!0),!r)throw new m(n,y.InvalidParameter,t);i.push({name:r,expression:D.create(s||r,a.getFieldsIndex())})}}if(p){const o={};for(const s of a.fields)o[s.name.toLowerCase()]=1;for(const s of i)s.name!=="%%%%FIELDNAME"&&(o[s.name.toLowerCase()]=1);let r=0;for(const s of i)if(s.name==="%%%%FIELDNAME"){for(;o["field_"+r.toString()]===1;)r++;o["field_"+r.toString()]=1,s.name="FIELD_"+r.toString()}}for(const o of i)await ee(o.expression,l,n);return e[0].groupby(i,[])}return ke("distinct",u,w,e)})})}export{Ye as registerFunctions};
