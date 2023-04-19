import{L as P,be as y,iS as x,E as s,iT as R,I as _,P as K,dt as U,ev as q,iU as M}from"./index-0cbe37a0.js";import{u as w}from"./originUtils-dad1432b.js";import D from"./FeatureLayer-8e8a5eef.js";import{a as W}from"./fetchService-e0761602.js";import{a as v}from"./jsonContext-3225fc91.js";import{a as f,b as z,r as g,T as c}from"./portalItemUtils-ae51bb0f.js";import"./multiOriginJSONSupportUtils-ad07e08e.js";import"./UniqueValueRenderer-621acbf1.js";import"./LegendOptions-fe356083.js";import"./diffUtils-6d46a8ba.js";import"./SizeVariable-f1c59b14.js";import"./colorRamps-3b9c4be9.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-3c389155.js";import"./ColorStop-52e2a166.js";import"./jsonUtils-98d903f2.js";import"./styleUtils-2fd95cb0.js";import"./featureFlags-986067cc.js";import"./jsonUtils-eea84da3.js";import"./DictionaryLoader-d4bf7ad8.js";import"./LRUCache-75f2ea80.js";import"./MemCache-8eec5c08.js";import"./FieldsIndex-91c8dad2.js";import"./heatmapUtils-c9f41040.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./MultiOriginJSONSupport-b25564d9.js";import"./sql-e009a7de.js";import"./FeatureLayerBase-204bd511.js";import"./Field-a5856a62.js";import"./fieldType-7585de06.js";import"./commonProperties-31665bf0.js";import"./ElevationInfo-bbf2ebe0.js";import"./AttachmentQuery-bcc72e86.js";import"./Query-612ec863.js";import"./RelationshipQuery-c8d6fd33.js";import"./serviceCapabilitiesUtils-1a4d569f.js";import"./editsZScale-5f97b67d.js";import"./queryZScale-ceba2e44.js";import"./FeatureSet-10ffd73d.js";import"./APIKeyMixin-b7095be4.js";import"./ArcGISService-2712af3c.js";import"./BlendLayer-9a3cb9de.js";import"./jsonUtils-1ca84aef.js";import"./parser-4c0b00b2.js";import"./_commonjsHelpers-725317a4.js";import"./CustomParametersMixin-deeb0655.js";import"./EditBusLayer-e8a50881.js";import"./FeatureReductionLayer-24b0738e.js";import"./FeatureEffect-4161b57f.js";import"./clusterUtils-ffb33f67.js";import"./labelingInfo-e7968113.js";import"./labelUtils-c3e92de5.js";import"./defaultsJSON-b396ba80.js";import"./OperationalLayer-5fc72de9.js";import"./OrderedLayer-2d5fd565.js";import"./PortalLayer-f7130da9.js";import"./RefreshableLayer-6f2dc031.js";import"./ScaleRangeLayer-7e970524.js";import"./TemporalLayer-62474014.js";import"./FeatureTemplate-0339623f.js";import"./FeatureType-6294a180.js";import"./fieldProperties-3057c7c1.js";import"./versionUtils-c0f6b315.js";import"./styleUtils-d93ec607.js";import"./TopFeaturesQuery-89caf902.js";import"./popupUtils-3663ba6d.js";const C=P.getLogger("esri.layers.FeatureLayer"),d="Feature Service";function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function T(e,t){if(t.type!==d)throw new s("feature-layer:portal-item-wrong-type",m(e,`should have portal item of type "${d}"`))}async function O(e){if(await e.load(),x(e))throw new s("feature-layer:save",m(e,"using an in-memory source cannot be saved to a portal item"))}function Y(e,t){let r=(e.messages??[]).filter(({type:a})=>a==="error").map(({name:a,message:i,details:o})=>new s(a,i,o));if(t!=null&&t.ignoreUnsupported&&(r=r.filter(({name:a})=>a!=="layer:unsupported"&&a!=="symbol:unsupported"&&a!=="symbol-layer:unsupported"&&a!=="property:unsupported"&&a!=="url:unsupported")),r.length>0)throw new s("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function I(e,t,r){"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const a=e.write({},t);return Y(t,r),a}function A(e){const{layer:t,layerJSON:r}=e;return t.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function S(e){f(e,c.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,r,a)=>a.indexOf(t)===r))}function G(e){const t=e.portalItem;if(!t)throw C.error("save: requires the portalItem property to be set"),new s("feature-layer:portal-item-not-set",m(e,"requires the portalItem property to be set"));if(!t.loaded)throw new s("feature-layer:portal-item-not-loaded",m(e,"cannot be saved to a portal item that does not exist or is inaccessible"));T(e,t)}async function F(e,t){return/\/\d+\/?$/.test(e.url??"")?A(t[0]):j(e,t)}async function j(e,t){const{layer:{url:r,customParameters:a,apiKey:i}}=t[0];let o=await e.fetchData("json");(!o||o.layers==null||o.tables==null)&&(o=await B(o,{url:r??"",customParameters:a,apiKey:i},t.map(n=>n.layer.layerId)));for(const n of t)J(n.layer,n.layerJSON,o);return o}async function B(e,t,r){var a,i;e||(e={}),(a=e).layers||(a.layers=[]),(i=e).tables||(i.tables=[]);const{url:o,customParameters:n,apiKey:l}=t,{serviceJSON:p,layersJSON:u}=await W(o,{customParameters:n,apiKey:l}),h=L(e.layers,p.layers,r),b=L(e.tables,p.tables,r);e.layers=h.itemResources,e.tables=b.itemResources;const N=[...h.added,...b.added],$=u?[...u.layers,...u.tables]:[];return await V(e,N,o,$),e}function L(e,t,r){const a=R(e,t,(o,n)=>o.id===n.id);e=e.filter(o=>!a.removed.some(n=>n.id===o.id));const i=a.added.map(({id:o})=>({id:o}));return i.forEach(({id:o})=>{e.push({id:o})}),{itemResources:e,added:i.filter(({id:o})=>!r.includes(o))}}async function V(e,t,r,a){const i=t.map(({id:o})=>new D({url:r,layerId:o,sourceJSON:a.find(({id:n})=>n===o)}));await _(i.map(o=>o.load())),i.forEach(o=>{const{layerId:n,loaded:l,defaultPopupTemplate:p}=o;if(!l||p==null)return;const u={id:n,popupInfo:p.toJSON()};J(o,u,e)})}function J(e,t,r){e.isTable?E(r.tables,t):E(r.layers,t)}function E(e,t){if(!e)return;const r=e.findIndex(({id:a})=>a===t.id);r===-1?e.push(t):e[r]=t}function k(e){const{portalItem:t}=e;return M(e)&&!e.dynamicDataSource&&!!(t!=null&&t.loaded)&&t.type===d}async function H(e){if(!(e!=null&&e.length))throw new s("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(e.map(o=>o.load()));for(const o of e)if(!k(o))throw new s("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${m(o,"does not conform")}`,{layer:o});const t=e.map(o=>o.portalItem.id);if(new Set(t).size>1)throw new s("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const a=e.map(o=>o.layerId);if(new Set(a).size!==a.length)throw new s("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Q(e,t){var r,a;let i=K.from(t);return i.id&&(i=i.clone(),i.id=null),(r=i).type??(r.type=d),(a=i).portal??(a.portal=U.getDefault()),T(e,i),i}async function X(e,t){const{url:r,layerId:a,title:i,fullExtent:o,isTable:n}=e,l=q(r),p=l!=null&&l.serverType==="FeatureServer";t.url=p?r:`${r}/${a}`,t.title||(t.title=i),t.extent=null,!n&&o!=null&&(t.extent=await z(o)),g(t,c.METADATA),g(t,c.MULTI_LAYER),f(t,c.SINGLE_LAYER),n&&f(t,c.TABLE),S(t)}async function Z(e,t,r){var i;const a=e.portal;await(a==null?void 0:a.signIn()),await((i=a==null?void 0:a.user)==null?void 0:i.addItem({item:e,data:t,folder:r==null?void 0:r.folder}))}const wt=y(ee);async function ee(e,t){await O(e),G(e);const r=e.portalItem,a=v(r),i=await I(e,a,t),o=await F(r,[{layer:e,layerJSON:i}]);return S(r),await r.update({data:o}),w(a),r}const te=async(e,t)=>{await H(e);const r=e[0].portalItem,a=v(r),i=await Promise.all(e.map(n=>I(n,a,t))),o=await F(r,e.map((n,l)=>({layer:n,layerJSON:i[l]})));return S(r),await r.update({data:o}),await Promise.all(e.slice(1).map(n=>n.portalItem.reload())),w(a),r.clone()},vt=y(te),It=y(re);async function re(e,t,r){await O(e);const a=Q(e,t),i=v(a),o=await I(e,i,r),n=A({layer:e,layerJSON:o});return await X(e,a),await Z(a,n,r),e.portalItem=a,w(i),a}export{wt as save,vt as saveAll,It as saveAs};