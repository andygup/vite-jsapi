import{e as y,a as d,K as c,bc as f,bd as w}from"./index-bdad94d1.js";import{d as o,p as F}from"./popupUtils-8c5a431f.js";const m=h=>{let r=class extends h{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:t}=e;if(!t)throw new c("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e});if(!o(e,p))throw new c("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){this._validateFetchPopupFeatures(e);const t=e!=null?e.clientGraphics:null;if(!t||t.length===0)return[];const u=this.layer.type==="scene"&&this.layer.associatedLayer!=null?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=f(this.layer.fieldsIndex,await F(u,o(this.layer,e)))),await this.prepareFetchPopupFeatures(i);const l=new Set,n=[],a=[];for(const s of t)w(i,s,l)?a.push(s):n.push(s);return a.length===0?n:this.whenGraphicAttributes(a,[...l]).catch(()=>a).then(s=>n.concat(s))}};return r=y([d("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{m as i};
