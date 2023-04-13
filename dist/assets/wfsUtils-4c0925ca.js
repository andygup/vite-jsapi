import{L as h,hO as v,s as c,hP as D,fc as C,hQ as N,hR as x,aF as E,ap as U,a9 as L,fy as w,U as O,W as I,P as M,h5 as m,hS as j}from"./index-9f03d686.js";import{s as V}from"./geojson-d9e49bdf.js";import{o as T,n as b}from"./xmlUtils-444cb4c0.js";function W(n){return z(n)??X(n)}function X(n){const t=new Date(n).getTime();return Number.isNaN(t)?null:t}function z(n){const t=Y.exec(n);if(!(t!=null&&t.groups))return null;const e=t.groups,a=+e.year,s=+e.month-1,r=+e.day,o=+(e.hours??"0"),i=+(e.minutes??"0"),p=+(e.seconds??"0");if(o>23||i>59||p>59)return null;const u=e.ms??"0",l=u?+u.padEnd(3,"0").substring(0,3):0;let y;if(e.isUTC)y=Date.UTC(a,s,r,o,i,p,l);else if(e.offsetSign){const f=+e.offsetHours,F=+e.offsetMinutes;y=6e4*(e.offsetSign==="+"?-1:1)*(60*f+F)+Date.UTC(a,s,r,o,i,p,l)}else y=new Date(a,s,r,o,i,p,l).getTime();return Number.isNaN(y)?null:y}const Y=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,S="xlink:href",d="2.0.0",P="__esri_wfs_id__",q="wfs-layer:getWFSLayerTypeInfo-error",_="wfs-layer:empty-service",$="wfs-layer:feature-type-not-found",H="wfs-layer:geojson-not-supported",J="wfs-layer:kvp-encoding-not-supported",Q="wfs-layer:malformed-json",R="wfs-layer:unknown-geometry-type",B="wfs-layer:unknown-field-type",K="wfs-layer:unsupported-spatial-reference",Z="wfs-layer:unsupported-wfs-version";async function Te(n,t){const e=ee((await h(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:d,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return ae(n,e),e}function ee(n){const t=A(n);ge(t),G(t);const e=t.firstElementChild,a=v(re(e));return{operations:ne(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const te=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function ne(n){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(T(n,{OperationsMetadata:{Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(S)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:r=>{const o=r.textContent;o&&te.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),!t)throw new c(J,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new c(H,"WFS service doesn't support GeoJSON output format");return e}function ae(n,t){D(n)&&(C(n,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=N(t.operations.DescribeFeatureType.url)),C(n,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=N(t.operations.GetFeature.url)))}function re(n){return b(n,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),s=r=>{var i,p,u;const o=parseInt(((u=(p=(i=r.textContent)==null?void 0:i.match(/(?<wkid>\d+$)/i))==null?void 0:p.groups)==null?void 0:u.wkid)??"",10);Number.isNaN(o)||a.add(o)};return T(t,{Name:r=>{const{name:o,prefix:i}=g(r.textContent);e.typeName=`${i}:${o}`,e.name=o,e.namespacePrefix=i,e.namespaceUri=r.lookupNamespaceURI(i)},Abstract:r=>{e.description=r.textContent},Title:r=>{e.title=r.textContent},WGS84BoundingBox:r=>{e.extent=se(r)},DefaultSRS:s,DefaultCRS:s,OtherSRS:s,OtherCRS:s}),e.title||(e.title=e.name),e.supportedSpatialReferences.push(...a),e}}})}function se(n){let t,e,a,s;for(const r of n.children)switch(r.localName){case"LowerCorner":[t,e]=r.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,s]=r.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:s,spatialReference:w}}function oe(n,t,e){return x(n,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function Fe(n,t,e,a={}){const{featureType:s,extent:r}=await ie(n,t,e,a),{fields:o,geometryType:i,swapXY:p,objectIdField:u,geometryField:l}=await ue(n,s.typeName,a);return{url:n.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:o,geometryField:l,geometryType:i,objectIdField:u,spatialReference:a.spatialReference??E.WGS84,extent:r,swapXY:p,wfsCapabilities:n,customParameters:a.customParameters}}async function ie(n,t,e,a={}){const{spatialReference:s=E.WGS84}=a,r=n.readFeatureTypes(),o=t?oe(r,t,e):r.next().value;if(o==null)throw t?new c($,`The type '${t}' could not be found in the service`):new c(_,"The service is empty");let i=new U({...o.extent,spatialReference:s});if(!L(s,w))try{await O(w,s,void 0,a),i=I(i,w)}catch{throw new c(K,"Projection not supported")}return{extent:i,spatialReference:s,featureType:o}}async function ue(n,t,e={}){var u,l,y;const[a,s]=await M([ce(n.operations.DescribeFeatureType.url,t,e),le(n,t,e)]);if(a.error||s.error)throw new c(q,`An error occurred while getting info about the feature type '${t}'`,{error:a.error||s.error});const{fields:r,errors:o}=a.value??{},i=((u=a.value)==null?void 0:u.geometryType)||((l=s.value)==null?void 0:l.geometryType),p=((y=s.value)==null?void 0:y.swapXY)??!1;if(i==null)throw new c(R,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:i,fields:r,errors:o});return{...pe(r??[]),geometryType:i,swapXY:p}}function pe(n){const t=n.find(a=>a.type==="geometry");let e=n.find(a=>a.type==="oid");return n=n.filter(a=>a.type!=="geometry"),e||(e=new m({name:P,type:"oid",alias:P}),n.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:n}}async function le(n,t,e={}){var p;let a,s=!1;const[r,o]=await Promise.all([de(n.operations.GetFeature.url,t,n.operations.GetFeature.outputFormat,{...e,count:1}),h(n.operations.GetFeature.url,{responseType:"text",query:k(t,void 0,{...e,count:1}),signal:e==null?void 0:e.signal})]),i=r.type==="FeatureCollection"&&((p=r.features[0])==null?void 0:p.geometry);if(i){let u;switch(a=j.fromJSON(V(i.type)),i.type){case"Point":u=i.coordinates;break;case"LineString":case"MultiPoint":u=i.coordinates[0];break;case"MultiLineString":case"Polygon":u=i.coordinates[0][0];break;case"MultiPolygon":u=i.coordinates[0][0][0]}const l=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(o.data);if(l){const y=u[0].toFixed(3),f=u[1].toFixed(3),F=parseFloat(l[1]).toFixed(3);y===parseFloat(l[2]).toFixed(3)&&f===F&&(s=!0)}}return{geometryType:a,swapXY:s}}async function ce(n,t,e){return ye(t,(await h(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:d,TYPENAME:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function ye(n,t){const{name:e}=g(n),a=A(t);G(a);const s=x(b(a.firstElementChild,{element:r=>({name:r.getAttribute("name"),typeName:g(r.getAttribute("type")).name})}),({name:r})=>r===e);if(s!=null){const r=x(b(a.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===s.typeName);if(r!=null)return fe(r)}throw new c($,`Type '${n}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const me=new Set(["objectid","fid"]);function fe(n){const t=[],e=[];let a;const s=b(n,{complexContent:{extension:{sequence:{element:r=>r}}}});for(const r of s){const o=r.getAttribute("name");if(!o)continue;let i,p;if(r.hasAttribute("type")?i=g(r.getAttribute("type")).name:T(r,{simpleType:{restriction:y=>(i=g(y.getAttribute("base")).name,{maxLength:f=>{p=+f.getAttribute("value")}})}}),!i)continue;const u=r.getAttribute("nillable")==="true";let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new m({name:o,alias:o,type:"integer",nullable:u}));break;case"float":case"double":case"decimal":e.push(new m({name:o,alias:o,type:"double",nullable:u}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new m({name:o,alias:o,type:"string",nullable:u,length:p??255}));break;case"datetime":case"date":e.push(new m({name:o,alias:o,type:"date",nullable:u,length:p??36}));break;case"pointpropertytype":a="point",l=!0;break;case"multipointpropertytype":a="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new c(R,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(n)}));break;default:t.push(new c(B,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(n)}))}l&&e.push(new m({name:o,alias:o,type:"geometry",nullable:u}))}for(const r of e)if(r.type==="integer"&&!r.nullable&&me.has(r.name.toLowerCase())){r.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function de(n,t,e,a){var r;let{data:s}=await h(n,{responseType:"text",query:k(t,e,a),signal:a==null?void 0:a.signal});s=s.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if((r=a==null?void 0:a.dateFields)!=null&&r.length){const o=new Set(a.dateFields);return JSON.parse(s,(i,p)=>o.has(i)?W(p):p)}return JSON.parse(s)}catch(o){throw new c(Q,"Error while parsing the response",{response:s,error:o})}}function k(n,t,e){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:n,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:e==null?void 0:e.startIndex,COUNT:e==null?void 0:e.count,...e==null?void 0:e.customParameters}}function A(n){return new DOMParser().parseFromString(n.trim(),"text/xml")}function g(n){const[t,e]=n.split(":");return{prefix:e?t:"",name:e??t}}function ge(n){var e;const t=(e=n.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==d)throw new c(Z,`Unsupported WFS version ${t}. Supported version: ${d}`)}function G(n){let t="",e="";if(T(n.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:s=>{e=s.textContent}})}),t)throw new c(`wfs-layer:${t}`,e)}export{de as H,oe as M,P as S,Fe as V,pe as Y,Te as v};
