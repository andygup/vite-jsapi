import{aH as p,hs as l,e as s,y as i,bD as m,bE as d,a as y,bB as c}from"./index-c18a96f3.js";import{p as u}from"./FeatureTemplate-da015408.js";let t=class extends p(c){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const e of Object.keys(o))r[e]=l(o[e]);return r}writeDomains(o,r){var a;const e={};for(const n of Object.keys(o))o[n]&&(e[n]=(a=o[n])==null?void 0:a.toJSON());r.domains=e}};s([i({json:{write:!0}})],t.prototype,"id",void 0),s([i({json:{write:!0}})],t.prototype,"name",void 0),s([i({json:{write:!0}})],t.prototype,"domains",void 0),s([m("domains")],t.prototype,"readDomains",null),s([d("domains")],t.prototype,"writeDomains",null),s([i({type:[u],json:{write:!0}})],t.prototype,"templates",void 0),t=s([y("esri.layers.support.FeatureType")],t);const w=t;export{w as n};