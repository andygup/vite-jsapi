import{L as l,cv as r}from"./index-468a9268.js";import{F as d}from"./Field-88bfb4af.js";import{F as n}from"./FieldsIndex-ab7b931c.js";function F(){return{fields:{type:[d],value:null},fieldsIndex:{readOnly:!0,get(){return new n(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var i;const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)((i=this.fieldsIndex)==null?void 0:i.has(t))||l.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return r(this.fieldsIndex,e)}}}}export{F as d};
