import{cP as x,af as i,ag as r,bA as $,bC as L,aj as E,bD as j,cI as c,ey as y,a as m}from"./index-6eb28d6b.js";import{n as g,a as S}from"./jsonUtils-4e3a5483.js";import{b as N}from"./Query-2a94894d.js";var w;const p=new x({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),f=new x({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let n=w=class extends j{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:s,spatialRelationship:a,timeExtent:l,objectIds:u,units:d,distance:I}=this;return new N({geometry:c(s),objectIds:c(u),spatialRelationship:a,timeExtent:c(l),where:t,units:d,distance:I,...e})}clone(){const{where:e,geometry:t,spatialRelationship:s,timeExtent:a,objectIds:l,units:u,distance:d}=this;return new w({geometry:c(t),objectIds:c(l),spatialRelationship:s,timeExtent:c(a),where:e,units:u,distance:d})}};i([r({type:String,json:{write:!0}})],n.prototype,"where",void 0),i([r({types:$,json:{write:!0}})],n.prototype,"geometry",void 0),i([r({type:p.apiValues,json:{name:"spatialRel",read:{reader:p.read},write:{allowNull:!1,writer:p.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],n.prototype,"spatialRelationship",void 0),i([r({type:Number,json:{write:{overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],n.prototype,"distance",void 0),i([r({type:[Number],json:{write:!0}})],n.prototype,"objectIds",void 0),i([r({type:f.apiValues,json:{read:f.read,write:{writer:f.write,overridePolicy(e){return{enabled:e!=null&&this.geometry!=null}}}}})],n.prototype,"units",void 0),i([r({type:L,json:{write:!0}})],n.prototype,"timeExtent",void 0),n=w=i([E("esri.layers.support.FeatureFilter")],n);const U=n;var h;const b={read:{reader:g},write:{writer:S,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},v={read:{reader:g},write:{writer:S,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},R={name:"showExcludedLabels",default:!0};let o=h=class extends j{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){var a,l;const s=super.write(e,t);if(t!=null&&t.origin){if(s.filter){const u=Object.keys(s.filter);if(u.length>1||u[0]!=="where")return(a=t.messages)==null||a.push(new m("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in s)return(l=t.messages)==null||l.push(new m("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return s}clone(){return new h({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};i([r({type:U,json:{write:{allowNull:!0,writer(e,t,s,a){const l=e==null?void 0:e.write({},a);l&&Object.keys(l).length!==0?y(s,l,t):y(s,null,t)}}}})],o.prototype,"filter",void 0),i([r({json:{write:!0,origins:{"web-map":b,"portal-item":b}}})],o.prototype,"includedEffect",void 0),i([r({json:{write:!0,origins:{"web-map":v,"portal-item":v}}})],o.prototype,"excludedEffect",void 0),i([r({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":R,"portal-item":R}}})],o.prototype,"excludedLabelsVisible",void 0),o=h=i([E("esri.layers.support.FeatureEffect")],o);const F=o;export{U as d,F as w};
