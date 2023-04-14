import{e6 as c,e7 as b,E as m,e8 as u,dm as S,e9 as w,bK as D,ea as $,aY as g,eb as C,ec as L,dn as h,ed as M,dr as I,ee as v,ef as k}from"./index-468a9268.js";const a={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function T(e,s=a){var l,p;if(!e)return{symbol:null};const{retainId:t=a.retainId,ignoreDrivers:o=a.ignoreDrivers,hasLabelingContext:n=a.hasLabelingContext,retainCIM:i=a.retainCIM}=s;let r=null;if(c(e)||e instanceof b)r=e.clone();else if(e.type==="cim"){const f=(p=(l=e.data)==null?void 0:l.symbol)==null?void 0:p.type;if(f!=="CIMPointSymbol")return{error:new m("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${f||"unknown"}' is unsupported in 3D`,{symbol:e})};r=i?e.clone():u.fromCIMSymbol(e)}else if(e instanceof S)r=w.fromSimpleLineSymbol(e);else if(e instanceof D)r=u.fromSimpleMarkerSymbol(e);else if(e instanceof $)r=u.fromPictureMarkerSymbol(e);else if(e instanceof g)s.geometryType&&s.geometryType==="mesh"?r=C.fromSimpleFillSymbol(e):r=L.fromSimpleFillSymbol(e);else if(e instanceof h)r=n?M.fromTextSymbol(e):u.fromTextSymbol(e);else return{error:new m("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};return t&&r&&r.type!=="cim"&&(r.id=e.id),o&&c(r)&&r.symbolLayers.forEach(f=>f.ignoreDrivers=!0),{symbol:r}}function O(e,s,t,o){const n=d(e,{},{context:o,isLabelSymbol:!1});n!=null&&(s[t]=n)}function x(e,s,t,o){const n=d(e,{},{context:o,isLabelSymbol:!0});n!=null&&(s[t]=n)}function y(e){return e instanceof k||e instanceof b}function d(e,s,t){if(e==null)return null;const{context:o,isLabelSymbol:n}=t,i=o==null?void 0:o.origin,r=o==null?void 0:o.messages;if(i==="web-scene"&&!y(e)){const l=T(e,{retainCIM:!0,hasLabelingContext:n});return l.symbol!=null?l.symbol.write(s,o):(r==null||r.push(new m("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:o,error:l.error})),null)}return(i==="web-map"||i==="portal-item"&&!I(o==null?void 0:o.layer))&&y(e)?(r==null||r.push(new m("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:o})),null):e.write(s,o)}function E(e,s){return v(e,null,s)}export{O as a,E as f,x as w};
