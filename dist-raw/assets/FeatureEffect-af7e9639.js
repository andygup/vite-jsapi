import{cG as v,ae as t,af as r,bA as N,bC as _,ai as j,bD as g,cE as d,er as m,E as b}from"./index-468a9268.js";import{r as x,w as F}from"./jsonUtils-e00c5139.js";import{Q as L}from"./Query-ee569148.js";var h;const f=new v({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),w=new v({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let a=h=class extends g{constructor(i){super(i),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(i={}){const{where:e,geometry:s,spatialRelationship:l,timeExtent:u,objectIds:c,units:p,distance:I}=this;return new L({geometry:d(s),objectIds:d(c),spatialRelationship:l,timeExtent:d(u),where:e,units:p,distance:I,...i})}clone(){const{where:i,geometry:e,spatialRelationship:s,timeExtent:l,objectIds:u,units:c,distance:p}=this;return new h({geometry:d(e),objectIds:d(u),spatialRelationship:s,timeExtent:d(l),where:i,units:c,distance:p})}};t([r({type:String,json:{write:!0}})],a.prototype,"where",void 0);t([r({types:N,json:{write:!0}})],a.prototype,"geometry",void 0);t([r({type:f.apiValues,json:{name:"spatialRel",read:{reader:f.read},write:{allowNull:!1,writer:f.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],a.prototype,"spatialRelationship",void 0);t([r({type:Number,json:{write:{overridePolicy(n){return{enabled:n!=null&&this.geometry!=null}}}}})],a.prototype,"distance",void 0);t([r({type:[Number],json:{write:!0}})],a.prototype,"objectIds",void 0);t([r({type:w.apiValues,json:{read:w.read,write:{writer:w.write,overridePolicy(n){return{enabled:n!=null&&this.geometry!=null}}}}})],a.prototype,"units",void 0);t([r({type:_,json:{write:!0}})],a.prototype,"timeExtent",void 0);a=h=t([j("esri.layers.support.FeatureFilter")],a);const V=a;var y;const E={read:{reader:x},write:{writer:F,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},R={read:{reader:x},write:{writer:F,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},S={name:"showExcludedLabels",default:!0};let o=y=class extends g{constructor(i){super(i),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(i,e){var l,u;const s=super.write(i,e);if(e!=null&&e.origin){if(s.filter){const c=Object.keys(s.filter);if(c.length>1||c[0]!=="where")return(l=e.messages)==null||l.push(new b("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in s)return(u=e.messages)==null||u.push(new b("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return s}clone(){return new y({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};t([r({type:V,json:{write:{allowNull:!0,writer(n,i,e,s){const l=n==null?void 0:n.write({},s);!l||Object.keys(l).length===0?m(e,null,i):m(e,l,i)}}}})],o.prototype,"filter",void 0);t([r({json:{write:!0,origins:{"web-map":E,"portal-item":E}}})],o.prototype,"includedEffect",void 0);t([r({json:{write:!0,origins:{"web-map":R,"portal-item":R}}})],o.prototype,"excludedEffect",void 0);t([r({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":S,"portal-item":S}}})],o.prototype,"excludedLabelsVisible",void 0);o=y=t([j("esri.layers.support.FeatureEffect")],o);const P=o;export{V as F,P as a};