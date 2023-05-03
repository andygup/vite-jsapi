import{r7 as p,r8 as b,du as v,r9 as u,g as d,ra as c,r4 as f,fx as m,e as s,y as r,bE as _,aY as h,a as L,a$ as g}from"./index-d29f6b97.js";import{O}from"./MultiOriginJSONSupport-d8471874.js";import{a as w}from"./BlendLayer-6b704ca4.js";import{c as M}from"./OperationalLayer-abee1819.js";import{j as V}from"./PortalLayer-9cdb0d77.js";import{t as x}from"./ScaleRangeLayer-4ea69c96.js";import{a as C}from"./lazyLayerLoader-16d72703.js";import"./jsonUtils-5b32189b.js";import"./commonProperties-4511a72e.js";import"./ElevationInfo-568c6f07.js";import"./portalItemUtils-3c9a4460.js";let t=class extends w(x(M(V(p(b(O(g))))))){constructor(i){super(i),this.allLayers=new v({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=u(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(d(()=>this.visible,this._onVisibilityChange.bind(this),h))}destroy(){this.allLayers.destroy(),this.allTables.destroy()}_writeLayers(i,e,a,l){const o=[];if(!i)return o;i.forEach(y=>{const n=c(y,l.webmap?l.webmap.getLayerJSONFromResourceInfo(y):null,l);n!=null&&n.layerType&&o.push(n)}),e.layers=o}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:C},i)),Promise.resolve(this)}async loadAll(){return f(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this.hasHandles(i.uid)?console.error(`Layer readded to Grouplayer: uid=${i.uid}`):this.addHandles(d(()=>i.visible,e=>this._onChildVisibilityChange(i,e),h),i.uid)}layerRemoved(i){this.removeHandles(i.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!m(this).initialized)return;const a=this.layers;let l=a.find(o=>o.visible);switch(i){case"exclusive":a.length&&!l&&(l=a.getItemAt(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":a.forEach(o=>{o.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};s([r({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),s([r({readOnly:!0})],t.prototype,"allTables",void 0),s([r()],t.prototype,"fullExtent",void 0),s([r({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),s([r({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),s([_("layers")],t.prototype,"_writeLayers",null),s([r({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),s([r({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),s([r()],t.prototype,"spatialReference",void 0),s([r({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),s([r({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=s([L("esri.layers.GroupLayer")],t);const P=t;export{P as default};
