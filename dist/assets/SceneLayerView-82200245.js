import{e1 as G,w as $,C as v,ag as j,ah as z,e as l,b as A,y as u,i as L,e2 as B,f as K,e3 as W,aH as x,e4 as H,e5 as Q,cL as Z,W as J,a9 as X,cU as M,_ as Y,e6 as ee,cZ as te}from"./index-df1c7459.js";import{n as q}from"./FeatureLikeLayerView3D-3d440180.js";import{a as re,n as ne,u as ie}from"./DefinitionExpressionSceneLayerView-b909bef3.js";import{u as se}from"./LayerView-17796f9f.js";const ae={setAttribute(){},rollback(){},commit(){}};var b;function he(e,r){const t=r.attributes[e.objectIdField],n=e.sessions.get(t);if(n)return n;const o=G(r.attributes),i=new Set;if(t==null)return ae;const d=e.i3sOverrides.createInteractiveEditSession(t),s=new Map,y=(p,h)=>{const f=s.get(p);if(f==null){const g=h.indexOf(t);return s.set(p,g),g}return f};let a=b.EDITING;const m={setAttribute(p,h){if(a!==b.EDITING)return;const f=e.fieldsIndex.get(p);if(v(f))return;const g=e.attributeStorageInfo.findIndex(I=>I.name===f.name);if(g<0)return;d.set(g,h);const _=e.attributeStorageInfo[g];let E=!1;i.add(p),e.forEachNode((I,U)=>{const D=y(I,U);if(D===-1)return;const N=e.getAttributeData(I.index);if(N){const T=N[_.name];T&&(T[D]=h,e.setAttributeData(I.index,N,r),E=!0)}}),E&&e.clearMemCache()},rollback(){if(a===b.EDITING){for(const p of i)this.setAttribute(p,o[p]);d.rollback(),a=b.ROLLED_BACK,e.sessions.delete(t)}},commit(){a===b.EDITING&&(d.commit(),a=b.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,m),m}function we(e,r){const t=[...r.addedFeatures,...r.updatedFeatures,...r.deletedFeatures];for(const n of t)n.objectId&&e.i3sOverrides.updateGeometry(n.objectId)}function Fe(e,r){const t=oe(e,r);if(t.size===0)return;const n=new Map;for(let i=0;i<e.attributeStorageInfo.length;i++)n.set(e.attributeStorageInfo[i].name,i);let o=!1;t.forEach((i,d)=>{const s=e.getAttributeData(d);let y=!1;i.forEach((a,m)=>{const p=$(s)?s[m]:null,h=n.get(m);for(const{featureIndex:f,value:g,featureId:_}of a)p&&(p[f]=g,y=!0,o=!0),e.i3sOverrides.updateAttributeValue(_,h,g)}),y&&e.setAttributeData(d,s,null)}),o&&e.clearMemCache()}function oe(e,r){const t=r.edits.updateFeatures;if(!t||t.length===0)return new P;const n=ue(r),o=new P,i=new Map;for(let a=0;a<e.attributeStorageInfo.length;a++)i.set(e.attributeStorageInfo[a].name,a);const d=e.fieldsIndex,s=e.objectIdField,y=t.filter(a=>{const m=q(d,a.attributes,s);return n.has(m)});return e.forEachNode((a,m)=>{const p=new Set(m);for(const h of y){const f=q(d,h.attributes,s);if(!p.has(f))continue;const g=m.indexOf(f);for(const _ in h.attributes){const E=e.fieldsIndex.normalizeFieldName(_),I=le(o,a.index,E),U=h.attributes[_];I.push({featureIndex:g,featureId:f,value:U})}}}),o}function le(e,r,t){const n=de(e,r),o=t!=null&&n.get(t);if(o)return o;const i=new Array;return n.set(t,i),i}function de(e,r){const t=e.get(r);if(t)return t;const n=new ce;return e.set(r,n),n}function ue(e){const r=new Set;if(!e.updatedFeatures)return r;for(const t of e.updatedFeatures)t.objectId!=null&&t.error==null&&r.add(t.objectId);return r}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(b||(b={}));const ce=Map,P=Map;function be(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:r},requiredFields:t}=this;return e.outFields?j(r,[...z(r,e.outFields),...t]):j(r,t)}}}}const C=e=>{let r=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,n){return pe(o=>this._updateAsync(t,o),n)}async _updateAsync(t,n){if(!this._startAsyncUpdate(t)){try{const o=await n();this._set(t,o)}catch{L.getLogger(this.declaredClass).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,n)}}_startAsyncUpdate(t){const n=this._asyncUpdateState.get(t)??w.None;return n&w.Updating?(this._asyncUpdateState.set(t,n|w.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,n|w.Updating),!1)}_endAsyncUpdate(t){--this._numUpdating;const n=(this._asyncUpdateState.get(t)??w.None)&~w.Updating;return n&w.Invalidated?(this._asyncUpdateState.set(t,n&~w.Invalidated),!0):(this._asyncUpdateState.set(t,n),!1)}};return l([u({readOnly:!0})],r.prototype,"updating",null),l([u()],r.prototype,"_numUpdating",void 0),r=l([A("esri.core.AsyncUpdate")],r),r};var w;function pe(e,r){const t=()=>{i&&!d&&e(n)},n=()=>{if(!i||d)return r();i.clear(),d=!0;const s=W(i,r);return d=!1,s},o=()=>{i&&(i.destroy(),i=null)};let i=new B(t),d=!1;return e(n),{remove:o}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(w||(w={}));let R=class extends C(K){};R=l([A("esri.core.AsyncUpdate")],R);const k="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let F=class extends C(Z){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:t,labelingFields:n,viewFilterFields:o}=this;return j(e,[...x(r,[]),...x(t,[]),...x(n,[]),...x(o,[])])}constructor(e){super(e)}initialize(){this.handles.add([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?O(t=>r.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?O(r=>H(r,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,filter:r}=this.layerView;return O(t=>Q(t,e,r))})])}};async function O(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(t){return L.getLogger(k).error(t),null}}l([u()],F.prototype,"layerView",void 0),l([u()],F.prototype,"layer",null),l([u()],F.prototype,"requiredFields",null),l([u()],F.prototype,"rendererFields",void 0),l([u()],F.prototype,"labelingFields",void 0),l([u()],F.prototype,"viewFilterFields",void 0),F=l([A(k)],F);const V="esri.views.layers.SceneLayerView",S=L.getLogger(V);let c=class extends se{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return re(this._layerFilter)}get _layerFilter(){const e=this.layer.filter;if(v(e)||e.geometries.length<1)return null;const r=this._geometryEngine;if(v(r)||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return ne;const t=e.geometries.getItemAt(0).spatialReference,n=e.geometries.toArray().map(s=>{try{s=r.simplify(s)}catch{return S.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(s==null)return null;if(s.spatialReference.equals(t))return s;try{return J(s,t)}catch{return S.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter($).sort((s,y)=>s.extent.xmin-y.extent.xmin),o=new Set,i=new Array,d=new Array;for(let s of n){const y=s.extent.xmin;if(i.length=0,o.forEach(a=>{if(y>=a.extent.xmax)return d.push(a),void o.delete(a);s.extent.ymin<=a.extent.ymax&&s.extent.ymax>=a.extent.ymin&&r.intersects(s,a)&&i.push(a)}),i.length>0){i.push(s);try{s=r.union(i)}catch{S.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}i.pop(),i.forEach(a=>o.delete(a))}o.add(s)}return o.forEach(s=>d.push(s)),d.length>0?{spatialRelationship:e.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(v(e)||e.geometries.length<=1)return!1;const r=e.geometries.getItemAt(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(r)&&!X(t,r))}get layerFilterUpdating(){return ie(this._layerFilter)}initialize(){M(()=>!this._geometryEngine&&$(this.layer.filter)&&this.layer.filter.geometries.length).then(async()=>this._geometryEngine=await Y(()=>import("./geometryEngine-e660e33f.js"),["assets/geometryEngine-e660e33f.js","assets/geometryEngineBase-e1a33b0a.js","assets/hydrated-69b3d367.js","assets/index-df1c7459.js","assets/index-001d3307.css"])),this._projectionEngineLoaded=ee(),M(()=>!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine).then(async()=>{await te(),this._projectionEngineLoaded=!0})}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}};l([u()],c.prototype,"layer",void 0),l([u()],c.prototype,"availableFields",null),l([u()],c.prototype,"maximumNumberOfFeatures",null),l([u({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),l([u()],c.prototype,"filter",void 0),l([u({readOnly:!0})],c.prototype,"layerFilter",null),l([u({readOnly:!0})],c.prototype,"_layerFilter",null),l([u()],c.prototype,"_geometryEngine",void 0),l([u()],c.prototype,"_projectionEngineLoaded",void 0),l([u()],c.prototype,"_filterNeedsProjectionEngine",null),l([u()],c.prototype,"layerFilterUpdating",null),c=l([A(V)],c);const _e=c;export{_e as E,we as a,be as b,F as c,he as i,Fe as u};