import{cG as i}from"./index-0ea7d266.js";const a=new i({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function s(e){return a.toJSON(e)}function p(e){const{bandCount:o,attributeTable:r,colormap:n,pixelType:t}=e.raster.rasterInfo;return o===1&&(r!=null||n!=null||t==="u8"||t==="s8")}export{p as c,s as t};