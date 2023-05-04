import{fF as N,e as f,y as c,B as G,bD as v,fE as S,bE as w,bw as F,bz as d,a as j,bB as P,bx as q,eK as b,hj as g}from"./index-c18a96f3.js";var x;const R=new N({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let u=x=class extends P{constructor(t){super(t),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(t,n){const o=d.fromJSON(n.spatialReference),e=[];for(let s=0;s<t.length;s++){const i=t[s],l=G.fromJSON(i),p=i.geometry&&i.geometry.spatialReference;l.geometry==null||p||(l.geometry.spatialReference=o);const y=i.aggregateGeometries,r=l.aggregateGeometries;if(y&&r!=null)for(const a in r){const h=r[a],m=y[a],T=m==null?void 0:m.spatialReference;h==null||T||(h.spatialReference=o)}e.push(l)}return e}writeGeometryType(t,n,o,e){if(t)return void R.write(t,n,o,e);const{features:s}=this;if(s){for(const i of s)if(i&&i.geometry!=null)return void R.write(i.geometry.type,n,o,e)}}readQueryGeometry(t,n){if(!t)return null;const o=!!t.spatialReference,e=q(t);return e&&!o&&n.spatialReference&&(e.spatialReference=d.fromJSON(n.spatialReference)),e}writeSpatialReference(t,n){if(t)return void(n.spatialReference=t.toJSON());const{features:o}=this;if(o){for(const e of o)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(n.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new x(this.cloneProperties())}cloneProperties(){return b({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(t){const n=this.write();if(n.features&&Array.isArray(t)&&t.length>0)for(let o=0;o<n.features.length;o++){const e=n.features[o];if(e.geometry){const s=t&&t[o];e.geometry=s&&s.toJSON()||e.geometry}}return n}quantize(t){const{scale:[n,o],translate:[e,s]}=t,i=r=>Math.round((r-e)/n),l=r=>Math.round((s-r)/o),p=this.features,y=this._getQuantizationFunction(this.geometryType,i,l);for(let r=0,a=p.length;r<a;r++)y!=null&&y(p[r].geometry)||(p.splice(r,1),r--,a--);return this.transform=t,this}unquantize(){const{geometryType:t,features:n,transform:o}=this;if(!o)return this;const{translate:[e,s],scale:[i,l]}=o,p=a=>a*i+e,y=a=>s-a*l,r=this._getHydrationFunction(t,p,y);for(const{geometry:a}of n)a!=null&&r&&r(a);return this.transform=null,this}_quantizePoints(t,n,o){let e,s;const i=[];for(let l=0,p=t.length;l<p;l++){const y=t[l];if(l>0){const r=n(y[0]),a=o(y[1]);r===e&&a===s||(i.push([r-e,a-s]),e=r,s=a)}else e=n(y[0]),s=o(y[1]),i.push([e,s])}return i.length>0?i:null}_getQuantizationFunction(t,n,o){return t==="point"?e=>(e.x=n(e.x),e.y=o(e.y),e):t==="polyline"||t==="polygon"?e=>{const s=g(e)?e.rings:e.paths,i=[];for(let l=0,p=s.length;l<p;l++){const y=s[l],r=this._quantizePoints(y,n,o);r&&i.push(r)}return i.length>0?(g(e)?e.rings=i:e.paths=i,e):null}:t==="multipoint"?e=>{const s=this._quantizePoints(e.points,n,o);return s&&s.length>0?(e.points=s,e):null}:t==="extent"?e=>e:null}_getHydrationFunction(t,n,o){return t==="point"?e=>{e.x=n(e.x),e.y=o(e.y)}:t==="polyline"||t==="polygon"?e=>{const s=g(e)?e.rings:e.paths;let i,l;for(let p=0,y=s.length;p<y;p++){const r=s[p];for(let a=0,h=r.length;a<h;a++){const m=r[a];a>0?(i+=m[0],l+=m[1]):(i=m[0],l=m[1]),m[0]=n(i),m[1]=o(l)}}}:t==="extent"?e=>{e.xmin=n(e.xmin),e.ymin=o(e.ymin),e.xmax=n(e.xmax),e.ymax=o(e.ymax)}:t==="multipoint"?e=>{const s=e.points;let i,l;for(let p=0,y=s.length;p<y;p++){const r=s[p];p>0?(i+=r[0],l+=r[1]):(i=r[0],l=r[1]),r[0]=n(i),r[1]=o(l)}}:null}};f([c({type:String,json:{write:!0}})],u.prototype,"displayFieldName",void 0),f([c({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],u.prototype,"exceededTransferLimit",void 0),f([c({type:[G],json:{write:!0}})],u.prototype,"features",void 0),f([v("features")],u.prototype,"readFeatures",null),f([c({type:[S],json:{write:!0}})],u.prototype,"fields",void 0),f([c({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:R.read}}})],u.prototype,"geometryType",void 0),f([w("geometryType")],u.prototype,"writeGeometryType",null),f([c({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],u.prototype,"hasM",void 0),f([c({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],u.prototype,"hasZ",void 0),f([c({types:F,json:{write:!0}})],u.prototype,"queryGeometry",void 0),f([v("queryGeometry")],u.prototype,"readQueryGeometry",null),f([c({type:d,json:{write:!0}})],u.prototype,"spatialReference",void 0),f([w("spatialReference")],u.prototype,"writeSpatialReference",null),f([c({json:{write:!0}})],u.prototype,"transform",void 0),u=x=f([j("esri.rest.support.FeatureSet")],u),u.prototype.toJSON.isDefaultToJSON=!0;const O=u;export{O as g};