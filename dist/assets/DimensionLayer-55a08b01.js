import{nJ as R,at as u,e as t,y as n,fz as y,gn as g,gN as $,a as m,ke as O,V as b,bq as N,g as x,bg as v,br as j,r6 as E,by as f,bE as S,a$ as q}from"./index-c18a96f3.js";import{c as k}from"./Analysis-aebd9974.js";import{u as P}from"./LengthDimension-337b3314.js";import{O as z}from"./MultiOriginJSONSupport-309fe89a.js";import{c as D}from"./OperationalLayer-5e561312.js";import"./commonProperties-797d5904.js";import"./ElevationInfo-6aa5c711.js";let r=class extends R(O){constructor(e){super(e),this.type="simple",this.color=new u("black"),this.lineSize=2,this.fontSize=10,this.textColor=new u("black"),this.textBackgroundColor=new u([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],r.prototype,"type",void 0),t([n({type:u,nonNullable:!0,json:{type:[y],write:{isRequired:!0}}})],r.prototype,"color",void 0),t([n({type:Number,cast:g,nonNullable:!0,range:{min:$(1)},json:{write:{isRequired:!0}}})],r.prototype,"lineSize",void 0),t([n({type:Number,cast:g,nonNullable:!0,json:{write:{isRequired:!0}}})],r.prototype,"fontSize",void 0),t([n({type:u,nonNullable:!0,json:{type:[y],write:{isRequired:!0}}})],r.prototype,"textColor",void 0),t([n({type:u,nonNullable:!0,json:{type:[y],write:{isRequired:!0}}})],r.prototype,"textBackgroundColor",void 0),r=t([m("esri.analysis.DimensionSimpleStyle")],r);const h=r,c=b.ofType(P);let l=class extends k{constructor(e){super(e),this.type="dimension",this.style=new h,this.extent=null}initialize(){this.addHandles(x(()=>this._computeExtent(),e=>{e!=null&&e.pending!=null||this._set("extent",e!=null?e.extent:null)},v))}get dimensions(){return this._get("dimensions")||new c}set dimensions(e){this._set("dimensions",j(e,this.dimensions,c))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const i=[];for(const o of this.dimensions)o.startPoint!=null&&i.push(o.startPoint),o.endPoint!=null&&i.push(o.endPoint);const a=E(i,e);if(a.pending!=null)return{pending:a.pending,extent:null};let d=null;return a.geometries!=null&&(d=a.geometries.reduce((o,p)=>o==null?p!=null?f.fromPoint(p):null:p!=null?o.union(f.fromPoint(p)):o,null)),{pending:null,extent:d}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],l.prototype,"type",void 0),t([n({cast:N,type:c,nonNullable:!0})],l.prototype,"dimensions",null),t([n({readOnly:!0})],l.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:h}},nonNullable:!0})],l.prototype,"style",void 0),t([n({value:null,readOnly:!0})],l.prototype,"extent",void 0),t([n({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=t([m("esri.analysis.DimensionAnalysis")],l);const w=l;let s=class extends D(z(q)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new w,this.opacity=1,e){const{source:i,style:a}=e;i&&a&&(i.style=a)}}initialize(){this.addHandles([x(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},v)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new w)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,a,d){i.dimensions=e.filter(({startPoint:o,endPoint:p})=>o!=null&&p!=null).map(o=>o.toJSON(d)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],s.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],s.prototype,"source",void 0),t([n({readOnly:!0})],s.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:h}},json:{write:{ignoreOrigin:!0}}})],s.prototype,"style",null),t([n({readOnly:!0})],s.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),t([n({type:["show","hide"]})],s.prototype,"listMode",void 0),t([n({type:b.ofType(P),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],s.prototype,"dimensions",null),t([S("web-scene","dimensions")],s.prototype,"writeDimensions",null),s=t([m("esri.layers.DimensionLayer")],s);const B=s;export{B as default};