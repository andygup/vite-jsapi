import{E as S,dD as j,aA as T}from"./index-468a9268.js";import{a as z,O as E}from"./OptimizedGeometry-af84d2ad.js";const x={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function w(e){return x[e]}function*k(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*C(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const t of n)yield*t;break}}function*D(e,n={}){const{geometryType:t,objectIdField:i}=n;for(const o of e){const{geometry:s,properties:r,id:a}=o;if(s&&w(s.type)!==t)continue;const d=r||{};let c;i&&(c=d[i],a!=null&&!c&&(d[i]=c=a)),yield new z(s?Z(new E,s,n):null,d,null,c??void 0)}}function J(e){for(const n of e)if(n.length>2)return!0;return!1}function A(e){return!O(e)}function V(e){return O(e)}function O(e){let n=0;for(let t=0;t<e.length;t++){const i=e[t],o=e[(t+1)%e.length];n+=i[0]*o[1]-o[0]*i[1]}return n<=0}function v(e){const n=e[0],t=e[e.length-1];return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]||e.push(n),e}function Z(e,n,t){switch(n.type){case"LineString":return H(e,n,t);case"MultiLineString":return I(e,n,t);case"MultiPoint":return $(e,n,t);case"MultiPolygon":return q(e,n,t);case"Point":return B(e,n,t);case"Polygon":return K(e,n,t)}}function H(e,n,t){return g(e,n.coordinates,t),e}function I(e,n,t){for(const i of n.coordinates)g(e,i,t);return e}function $(e,n,t){return g(e,n.coordinates,t),e}function q(e,n,t){for(const i of n.coordinates){N(e,i[0],t);for(let o=1;o<i.length;o++)L(e,i[o],t)}return e}function B(e,n,t){return F(e,n.coordinates,t),e}function K(e,n,t){const i=n.coordinates;N(e,i[0],t);for(let o=1;o<i.length;o++)L(e,i[o],t);return e}function N(e,n,t){const i=v(n);A(i)?R(e,i,t):g(e,i,t)}function L(e,n,t){const i=v(n);V(i)?R(e,i,t):g(e,i,t)}function g(e,n,t){for(const i of n)F(e,i,t);e.lengths.push(n.length)}function R(e,n,t){for(let i=n.length-1;i>=0;i--)F(e,n[i],t);e.lengths.push(n.length)}function F(e,n,t){const[i,o,s]=n;e.coords.push(i,o),t.hasZ&&e.coords.push(s||0)}function Q(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function X(e){if(!e)throw new S("geojson-layer:empty","GeoJSON data is empty");if(e.type!=="Feature"&&e.type!=="FeatureCollection")throw new S("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const t=typeof n=="string"?n:n.type==="name"?n.properties.name:n.type==="EPSG"?n.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!t||!i.test(t))throw new S("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function Y(e,n={}){const t=[],i=new Set,o=new Set;let s=!1,r=null,a=!1,d,{geometryType:c=null}=n,m=!1;for(const y of k(e)){const{geometry:h,properties:l,id:p}=y;if(!(h&&(c||(c=w(h.type)),w(h.type)!==c))){if(!s){const u=C(h);s=J(u)}if(a||(a=p!=null,a&&(d=typeof p,l&&(r=Object.keys(l).filter(u=>l[u]===p)))),l&&r&&a&&p!=null&&(r.length>1?r=r.filter(u=>l[u]===p):r.length===1&&(r=l[r[0]]===p?r:[])),!m&&l){let u=!0;for(const f in l){if(i.has(f))continue;const b=l[f];if(b==null){u=!1,o.add(f);continue}const G=Q(b);if(G==="unknown"){o.add(f);continue}o.delete(f),i.add(f);const M=j(f);M&&t.push({name:M,alias:f,type:G})}m=u}}}const P=j((r==null?void 0:r.length)===1&&r[0]||null)??void 0;if(P){for(const y of t)if(y.name===P&&T(y)){y.type="esriFieldTypeOID";break}}return{fields:t,geometryType:c,hasZ:s,objectIdFieldName:P,objectIdFieldType:d,unknownFields:Array.from(o)}}function _(e,n){return Array.from(D(k(e),n))}export{_ as c,w as g,Y as i,X as v};
