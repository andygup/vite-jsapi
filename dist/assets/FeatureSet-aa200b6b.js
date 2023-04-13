import{cG as N,ae as y,af as h,ah as G,bF as S,bG as F,bA as j,bt as x,ai as P,bD as b,bB as J,cE as O,cd as g}from"./index-b4b3ae7d.js";import{F as _}from"./Field-a6e349b0.js";var R;const w=new N({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let f=R=class extends b{constructor(t){super(t),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(t,s){const r=x.fromJSON(s.spatialReference),e=[];for(let i=0;i<t.length;i++){const o=t[i],a=G.fromJSON(o),u=o.geometry&&o.geometry.spatialReference;a.geometry!=null&&!u&&(a.geometry.spatialReference=r);const p=o.aggregateGeometries,n=a.aggregateGeometries;if(p&&n!=null)for(const l in n){const m=n[l],c=p[l],v=c==null?void 0:c.spatialReference;m!=null&&!v&&(m.spatialReference=r)}e.push(a)}return e}writeGeometryType(t,s,r,e){if(t){w.write(t,s,r,e);return}const{features:i}=this;if(i){for(const o of i)if(o&&o.geometry!=null){w.write(o.geometry.type,s,r,e);return}}}readQueryGeometry(t,s){if(!t)return null;const r=!!t.spatialReference,e=J(t);return e&&!r&&s.spatialReference&&(e.spatialReference=x.fromJSON(s.spatialReference)),e}writeSpatialReference(t,s){if(t){s.spatialReference=t.toJSON();return}const{features:r}=this;if(r){for(const e of r)if(e&&e.geometry!=null&&e.geometry.spatialReference){s.spatialReference=e.geometry.spatialReference.toJSON();return}}}clone(){return new R(this.cloneProperties())}cloneProperties(){return O({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(t){const s=this.write();if(s.features&&Array.isArray(t)&&t.length>0)for(let r=0;r<s.features.length;r++){const e=s.features[r];if(e.geometry){const i=t&&t[r];e.geometry=i&&i.toJSON()||e.geometry}}return s}quantize(t){const{scale:[s,r],translate:[e,i]}=t,o=n=>Math.round((n-e)/s),a=n=>Math.round((i-n)/r),u=this.features,p=this._getQuantizationFunction(this.geometryType,o,a);for(let n=0,l=u.length;n<l;n++)p!=null&&p(u[n].geometry)||(u.splice(n,1),n--,l--);return this.transform=t,this}unquantize(){const{geometryType:t,features:s,transform:r}=this;if(!r)return this;const{translate:[e,i],scale:[o,a]}=r,u=l=>l*o+e,p=l=>i-l*a,n=this._getHydrationFunction(t,u,p);for(const{geometry:l}of s)l!=null&&n&&n(l);return this.transform=null,this}_quantizePoints(t,s,r){let e,i;const o=[];for(let a=0,u=t.length;a<u;a++){const p=t[a];if(a>0){const n=s(p[0]),l=r(p[1]);(n!==e||l!==i)&&(o.push([n-e,l-i]),e=n,i=l)}else e=s(p[0]),i=r(p[1]),o.push([e,i])}return o.length>0?o:null}_getQuantizationFunction(t,s,r){return t==="point"?e=>(e.x=s(e.x),e.y=r(e.y),e):t==="polyline"||t==="polygon"?e=>{const i=g(e)?e.rings:e.paths,o=[];for(let a=0,u=i.length;a<u;a++){const p=i[a],n=this._quantizePoints(p,s,r);n&&o.push(n)}return o.length>0?(g(e)?e.rings=o:e.paths=o,e):null}:t==="multipoint"?e=>{const i=this._quantizePoints(e.points,s,r);return i&&i.length>0?(e.points=i,e):null}:t==="extent"?e=>e:null}_getHydrationFunction(t,s,r){return t==="point"?e=>{e.x=s(e.x),e.y=r(e.y)}:t==="polyline"||t==="polygon"?e=>{const i=g(e)?e.rings:e.paths;let o,a;for(let u=0,p=i.length;u<p;u++){const n=i[u];for(let l=0,m=n.length;l<m;l++){const c=n[l];l>0?(o=o+c[0],a=a+c[1]):(o=c[0],a=c[1]),c[0]=s(o),c[1]=r(a)}}}:t==="extent"?e=>{e.xmin=s(e.xmin),e.ymin=r(e.ymin),e.xmax=s(e.xmax),e.ymax=r(e.ymax)}:t==="multipoint"?e=>{const i=e.points;let o,a;for(let u=0,p=i.length;u<p;u++){const n=i[u];u>0?(o=o+n[0],a=a+n[1]):(o=n[0],a=n[1]),n[0]=s(o),n[1]=r(a)}}:null}};y([h({type:String,json:{write:!0}})],f.prototype,"displayFieldName",void 0);y([h({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],f.prototype,"exceededTransferLimit",void 0);y([h({type:[G],json:{write:!0}})],f.prototype,"features",void 0);y([S("features")],f.prototype,"readFeatures",null);y([h({type:[_],json:{write:!0}})],f.prototype,"fields",void 0);y([h({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],f.prototype,"geometryType",void 0);y([F("geometryType")],f.prototype,"writeGeometryType",null);y([h({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],f.prototype,"hasM",void 0);y([h({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],f.prototype,"hasZ",void 0);y([h({types:j,json:{write:!0}})],f.prototype,"queryGeometry",void 0);y([S("queryGeometry")],f.prototype,"readQueryGeometry",null);y([h({type:x,json:{write:!0}})],f.prototype,"spatialReference",void 0);y([F("spatialReference")],f.prototype,"writeSpatialReference",null);y([h({json:{write:!0}})],f.prototype,"transform",void 0);f=R=y([P("esri.rest.support.FeatureSet")],f);f.prototype.toJSON.isDefaultToJSON=!0;const B=f;export{B as F};
