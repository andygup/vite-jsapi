import{s as w,eK as G,gm as $,eM as C,bP as J}from"./index-4d2185ff.js";const v={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(n){return v[n]}function*k(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const t of n.features)t&&(yield t)}}function*x(n){if(n)switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const t of n.coordinates)yield*t;break;case"MultiPolygon":for(const t of n.coordinates)for(const e of t)yield*e}}function*A(n,t={}){const{geometryType:e,objectIdField:o}=t;for(const r of n){const{geometry:s,properties:p,id:i}=r;if(s&&b(s.type)!==e)continue;const l=p||{};let c;o&&(c=l[o],i==null||c||(l[o]=c=i)),yield new C(s?Z(new J,s,t):null,l,null,c??void 0)}}function D(n){for(const t of n)if(t.length>2)return!0;return!1}function E(n){return!T(n)}function R(n){return T(n)}function T(n){let t=0;for(let e=0;e<n.length;e++){const o=n[e],r=n[(e+1)%n.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function L(n){const t=n[0],e=n[n.length-1];return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]||n.push(t),n}function Z(n,t,e){switch(t.type){case"LineString":return H(n,t,e);case"MultiLineString":return K(n,t,e);case"MultiPoint":return q(n,t,e);case"MultiPolygon":return z(n,t,e);case"Point":return B(n,t,e);case"Polygon":return Q(n,t,e)}}function H(n,t,e){return g(n,t.coordinates,e),n}function K(n,t,e){for(const o of t.coordinates)g(n,o,e);return n}function q(n,t,e){return g(n,t.coordinates,e),n}function z(n,t,e){for(const o of t.coordinates){O(n,o[0],e);for(let r=1;r<o.length;r++)I(n,o[r],e)}return n}function B(n,t,e){return S(n,t.coordinates,e),n}function Q(n,t,e){const o=t.coordinates;O(n,o[0],e);for(let r=1;r<o.length;r++)I(n,o[r],e);return n}function O(n,t,e){const o=L(t);E(o)?N(n,o,e):g(n,o,e)}function I(n,t,e){const o=L(t);R(o)?N(n,o,e):g(n,o,e)}function g(n,t,e){for(const o of t)S(n,o,e);n.lengths.push(t.length)}function N(n,t,e){for(let o=t.length-1;o>=0;o--)S(n,t[o],e);n.lengths.push(t.length)}function S(n,t,e){const[o,r,s]=t;n.coords.push(o,r),e.hasZ&&n.coords.push(s||0)}function U(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function W(n){if(!n)throw new w("geojson-layer:empty","GeoJSON data is empty");if(n.type!=="Feature"&&n.type!=="FeatureCollection")throw new w("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:t}=n;if(!t)return;const e=typeof t=="string"?t:t.type==="name"?t.properties.name:t.type==="EPSG"?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!e||!o.test(e))throw new w("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function X(n,t={}){const e=[],o=new Set,r=new Set;let s,p=!1,i=null,l=!1,{geometryType:c=null}=t,m=!1;for(const d of k(n)){const{geometry:h,properties:u,id:a}=d;if((!h||(c||(c=b(h.type)),b(h.type)===c))&&(p||(p=D(x(h))),l||(l=a!=null,l&&(s=typeof a,u&&(i=Object.keys(u).filter(y=>u[y]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(y=>u[y]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!m&&u)){let y=!0;for(const f in u){if(o.has(f))continue;const F=u[f];if(F==null){y=!1,r.add(f);continue}const M=U(F);if(M==="unknown"){r.add(f);continue}r.delete(f),o.add(f);const j=G(f);j&&e.push({name:j,alias:f,type:M})}m=y}}const P=G((i==null?void 0:i.length)===1&&i[0]||null)??void 0;if(P){for(const d of e)if(d.name===P&&$(d)){d.type="esriFieldTypeOID";break}}return{fields:e,geometryType:c,hasZ:p,objectIdFieldName:P,objectIdFieldType:s,unknownFields:Array.from(r)}}function Y(n,t){return Array.from(A(k(n),t))}export{Y as I,X as L,W as T,b as s};
