import{e as s,y as n,h6 as a,a as y,bB as m,K as f}from"./index-bdad94d1.js";import{n as h,a as b}from"./jsonUtils-1baf7cbc.js";import{d as x}from"./FeatureFilter-5540eb97.js";var o;const c={read:{reader:h},write:{writer:b,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},p={read:{reader:h},write:{writer:b,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},w={name:"showExcludedLabels",default:!0};let r=o=class extends m{constructor(l){super(l),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(l,e){var d,i;const t=super.write(l,e);if(e!=null&&e.origin){if(t.filter){const u=Object.keys(t.filter);if(u.length>1||u[0]!=="where")return(d=e.messages)==null||d.push(new f("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in t)return(i=e.messages)==null||i.push(new f("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return t}clone(){return new o({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};s([n({type:x,json:{write:{allowNull:!0,writer(l,e,t,d){const i=l==null?void 0:l.write({},d);i&&Object.keys(i).length!==0?a(t,i,e):a(t,null,e)}}}})],r.prototype,"filter",void 0),s([n({json:{write:!0,origins:{"web-map":c,"portal-item":c}}})],r.prototype,"includedEffect",void 0),s([n({json:{write:!0,origins:{"web-map":p,"portal-item":p}}})],r.prototype,"excludedEffect",void 0),s([n({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":w,"portal-item":w}}})],r.prototype,"excludedLabelsVisible",void 0),r=o=s([y("esri.layers.support.FeatureEffect")],r);const L=r;export{L as w};
