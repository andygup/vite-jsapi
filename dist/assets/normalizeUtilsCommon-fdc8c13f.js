import{a2 as a,bt as n,cd as o}from"./index-b4b3ae7d.js";const u={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new a({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:n.WebMercator}),minus180Line:new a({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:n.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a({paths:[[[180,-180],[180,180]]],spatialReference:n.WGS84}),minus180Line:new a({paths:[[[-180,-180],[-180,180]]],spatialReference:n.WGS84})}};function f(e,t){return Math.ceil((e-t)/(t*2))}function l(e,t){const s=c(e);for(const r of s)for(const i of r)i[0]+=t;return e}function c(e){return o(e)?e.rings:e.paths}export{u as c,c as g,f as o,l as u};