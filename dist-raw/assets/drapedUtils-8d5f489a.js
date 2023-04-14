import{bz as B,ae as f,af as y,bA as W,bB as Z,bf as O,bt as K,bC as X,ai as _,bD as q,bE as Y,ah as N,bF as ee,bG as te,bH as re,bw as ie,bI as ne,bJ as se,r as oe,aj as ae,be as le,an as ce,E as L,J as ue,aB as pe,bK as z,_ as fe,az as ye,Q as G,m as he,I as de,a9 as me}from"./index-468a9268.js";import{g as ge,a as we}from"./scaleUtils-8a8e588e.js";import{g as T}from"./floorFilterUtils-0e56040f.js";import{n as xe}from"./normalizeUtils-9dd6c69b.js";import{s as ve}from"./sql-50f1dd02.js";import{i as Se}from"./sublayerUtils-0aed7d9f.js";import{a as be,g as Re}from"./popupUtils-5163e6e7.js";function V(n,e){return e?"xoffset"in e&&e.xoffset?Math.max(n,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(n,Math.abs(e.yoffset||0)):n:n}function Ie(n){let e=0,i=0;for(let t=0;t<n.length;t++){const r=n[t].size;typeof r=="number"&&(e+=r,i++)}return e/i}function U(n,e){return typeof n=="number"?n:n&&n.stops&&n.stops.length?Ie(n.stops):e}function Pe(n,e){if(!e)return n;const t=e.filter(u=>u.type==="size").map(u=>{const{maxSize:a,minSize:c}=u;return(U(a,n)+U(c,n))/2});let r=0;const s=t.length;if(s===0)return n;for(let u=0;u<s;u++)r+=t[u];const o=Math.floor(r/s);return Math.max(o,n)}function J(n){var s;const e=n&&n.renderer,t=(n&&n.event&&n.event.pointerType)==="touch"?9:6;if(!e)return t;const r="visualVariables"in e?Pe(t,e.visualVariables):t;if(e.type==="simple")return V(r,e.symbol);if(e.type==="unique-value"){let o=r;return(s=e.uniqueValueInfos)==null||s.forEach(u=>{o=V(o,u.symbol)}),o}if(e.type==="class-breaks"){let o=r;return e.classBreakInfos.forEach(u=>{o=V(o,u.symbol)}),o}return e.type==="dot-density"||e.type==="pie-chart",r}const $=n=>n.spatialReference.wkid||JSON.stringify(n.spatialReference);function Me(n,e){const{dpi:i,gdbVersion:t,geometry:r,geometryPrecision:s,height:o,layerOption:u,mapExtent:a,maxAllowableOffset:c,returnFieldName:l,returnGeometry:p,returnUnformattedValues:h,returnZ:g,spatialReference:x,timeExtent:b,tolerance:R,width:m}=n.toJSON(),{dynamicLayers:P,layerDefs:v,layerIds:w}=Fe(n),I=e&&e.geometry!=null?e.geometry:null,S={geometryPrecision:s,maxAllowableOffset:c,returnFieldName:l,returnGeometry:p,returnUnformattedValues:h,returnZ:g,tolerance:R},F=I&&I.toJSON()||r;if(S.imageDisplay=`${m},${o},${i}`,t&&(S.gdbVersion=t),F&&(delete F.spatialReference,S.geometry=JSON.stringify(F),S.geometryType=B(F)),x?S.sr=x.wkid||JSON.stringify(x):F&&F.spatialReference?S.sr=$(F):a&&a.spatialReference&&(S.sr=$(a)),S.time=b?[b.start,b.end].join(","):null,a){const{xmin:H,ymin:Q,xmax:k,ymax:C}=a;S.mapExtent=`${H},${Q},${k},${C}`}return v&&(S.layerDefs=v),P&&!v&&(S.dynamicLayers=P),S.layers=u==="popup"?"visible":u,w&&!P&&(S.layers+=`:${w.join(",")}`),S}function Fe(n){var b,R;const{mapExtent:e,floors:i,width:t,sublayers:r,layerIds:s,layerOption:o,gdbVersion:u}=n,a=(R=(b=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:b.layer)==null?void 0:R.serviceSublayers,c=o==="popup",l={},p={extent:e,width:t,spatialReference:e==null?void 0:e.spatialReference},h=ge(p),g=[],x=m=>{const P=h===0,v=m.minScale===0||h<=m.minScale,w=m.maxScale===0||h>=m.maxScale;if(m.visible&&(P||v&&w))if(m.sublayers)m.sublayers.forEach(x);else{if((s==null?void 0:s.includes(m.id))===!1||c&&!(m.popupTemplate&&m.popupEnabled))return;g.unshift(m)}};if(r==null||r.forEach(x),r&&!g.length)l.layerIds=[];else{const m=Se(g,a,u),P=g.map(v=>{const w=T(i,v);return v.toExportImageJSON(w)});if(m)l.dynamicLayers=JSON.stringify(P);else{if(r){let w=g.map(({id:I})=>I);s&&(w=w.filter(I=>s.includes(I))),l.layerIds=w}else s!=null&&s.length&&(l.layerIds=s);const v=Ee(i,g);if(v!=null&&v.length){const w={};for(const I of v)I.definitionExpression&&(w[I.id]=I.definitionExpression);Object.keys(w).length&&(l.layerDefs=JSON.stringify(w))}}}return l}function Ee(n,e){const i=!!(n!=null&&n.length),t=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return t.length?t.map(r=>{const s=T(n,r),o=ve(s,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var A;let d=A=class extends q{static from(e){return Y(A,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};f([y({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0);f([y()],d.prototype,"floors",void 0);f([y({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0);f([y({types:W,json:{read:Z,write:!0}})],d.prototype,"geometry",void 0);f([y({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0);f([y({type:Number,json:{write:!0}})],d.prototype,"height",void 0);f([y({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0);f([y({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0);f([y({type:O,json:{write:!0}})],d.prototype,"mapExtent",void 0);f([y({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0);f([y({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0);f([y({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0);f([y({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0);f([y({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0);f([y({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0);f([y({type:K,json:{write:!0}})],d.prototype,"spatialReference",void 0);f([y()],d.prototype,"sublayers",void 0);f([y({type:X,json:{write:!0}})],d.prototype,"timeExtent",void 0);f([y({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0);f([y({type:Number,json:{write:!0}})],d.prototype,"width",void 0);d=A=f([_("esri.rest.support.IdentifyParameters")],d);const D=d;let M=class extends q{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,i){return N.fromJSON({attributes:{...i.attributes},geometry:{...i.geometry}})}writeFeature(e,i){if(!e)return;const{attributes:t,geometry:r}=e;t&&(i.attributes={...t}),r!=null&&(i.geometry=r.toJSON(),i.geometryType=re.toJSON(r.type))}};f([y({type:String,json:{write:!0}})],M.prototype,"displayFieldName",void 0);f([y({type:N})],M.prototype,"feature",void 0);f([ee("feature",["attributes","geometry"])],M.prototype,"readFeature",null);f([te("feature")],M.prototype,"writeFeature",null);f([y({type:Number,json:{write:!0}})],M.prototype,"layerId",void 0);f([y({type:String,json:{write:!0}})],M.prototype,"layerName",void 0);M=f([_("esri.rest.support.IdentifyResult")],M);const Oe=M;async function Ve(n,e,i){e=Ge(e);const t=e.geometry?[e.geometry]:[],r=ie(n);return r.path+="/identify",xe(t).then(s=>{const o=Me(e,{geometry:s&&s[0]}),u=ne({...r.query,f:"json",...o}),a=se(u,i);return oe(r.path,a).then(je).then(c=>Ae(c,e.sublayers))})}function je(n){const e=n.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Oe.fromJSON(i)),e}function Ge(n){return n=D.from(n),n}function Ae(n,e){if(!(e!=null&&e.length))return n;const i=new Map;function t(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(t)}e.forEach(t);for(const r of n.results)r.feature.sourceLayer=i.get(r.layerId);return n}let j=null;function Ce(n,e){return e.type==="tile"||e.type==="map-image"}let E=class extends ae{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=le(async i=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(i).catch(()=>{}))})}initialize(){const e=i=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(i).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ce(()=>this.highlightGraphics,"change",i=>e(i.added),{onListenerAdd:i=>e(i)})])}async fetchPopupFeatures(e,i){var c,l;const{layerView:{layer:t,view:{scale:r}}}=this;if(!e)throw new L("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:t});const s=_e(t.sublayers,r,i);if(!s.length)return[];const o=await Te(t,s);if(!((((l=(c=t.capabilities)==null?void 0:c.operations)==null?void 0:l.supportsIdentify)??!0)&&t.version>=10.5)&&!o)throw new L("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:t});return o?this._fetchPopupFeaturesUsingQueries(e,s,i):this._fetchPopupFeaturesUsingIdentify(e,s,i)}clearHighlights(){var e;(e=this.highlightGraphics)==null||e.removeAll()}highlight(e){const i=this.highlightGraphics;if(!i)return{remove(){}};let t=null;if(e instanceof N?t=[e]:ue.isCollection(e)&&e.length>0?t=e.toArray():Array.isArray(e)&&e.length>0&&(t=e),t=t==null?void 0:t.filter(pe),!t||!t.length)return{remove:()=>{}};for(const r of t){const s=r.sourceLayer;s!=null&&"geometryType"in s&&s.geometryType==="point"&&(r.visible=!1)}return i.addMany(t),{remove:()=>{i.removeMany(t??[])}}}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:i},highlightGraphics:t,highlightGraphicUpdated:r}=this;if(!(!t||!r))for(const s of e){const o=s.sourceLayer&&"renderer"in s.sourceLayer&&s.sourceLayer.renderer;s.sourceLayer&&"geometryType"in s.sourceLayer&&s.sourceLayer.geometryType==="point"&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(s).then(async a=>{var p;a||(a=new z);let c=null;const l="visualVariables"in o?(p=o.visualVariables)==null?void 0:p.find(h=>h.type==="size"):void 0;l&&(j||(j=(await fe(()=>import("./SizeVariable-e8cc32d6.js").then(h=>h.v),["assets/SizeVariable-e8cc32d6.js","assets/index-468a9268.js","assets/index-d832a396.css","assets/colorRamps-4cbb7a49.js","assets/LegendOptions-dcb522eb.js","assets/sizeVariableUtils-2914222a.js","assets/lengthUtils-edd0ce65.js"])).getSize),c=j(l,s,{view:i.type,scale:i.scale,shape:a.type==="simple-marker"?a.style:null})),c||(c="width"in a&&"height"in a&&a.width!=null&&a.height!=null?Math.max(a.width,a.height):"size"in a?a.size:16),t.includes(s)&&(s.symbol=new z({style:"square",size:c,xoffset:"xoffset"in a?a.xoffset:0,yoffset:"yoffset"in a?a.yoffset:0}),r(s,"symbol"),s.visible=!0)})}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:i,view:t},highlightGraphics:r,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!(r!=null&&r.length)||!i.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(e),u=new Map;for(const l of r)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>o){const p=l.sourceLayer;ye(u,p,()=>new Map).set(l.getObjectId(),l)}const a=Array.from(u,([l,p])=>{const h=l.createQuery();return h.objectIds=[...p.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=o,h.outSpatialReference=t.spatialReference,l.queryFeatures(h)}),c=await Promise.all(a);if(!this.destroyed)for(const{features:l}of c)for(const p of l){const h=p.sourceLayer,x=u.get(h).get(p.getObjectId());x&&r.includes(x)&&(x.geometry=p.geometry,s(x,"geometry"),this._featuresResolutions.set(x,o))}}_getTargetResolution(e){const i=e*G(this.layerView.view.spatialReference),t=i/16;return t<=10?0:e/i*t}async _fetchPopupFeaturesUsingIdentify(e,i,t){const r=await this._createIdentifyParameters(e,i,t);if(r==null)return[];const{results:s}=await Ve(this.layerView.layer.parsedUrl,r);return s.map(o=>o.feature)}async _createIdentifyParameters(e,i,t){const{floors:r,layer:s,timeExtent:o,view:{spatialReference:u,scale:a}}=this.layerView,c=t!=null?t.event:null;if(!i.length)return null;await Promise.all(i.map(({sublayer:b})=>b.load().catch(()=>{})));const l=Math.min(he("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce((b,R)=>R.renderer?J({renderer:R.renderer,event:c}):b,2)),p=this.createFetchPopupFeaturesQueryGeometry(e,l),h=we(a,u),g=Math.round(p.width/h),x=new O({xmin:p.center.x-h*g,ymin:p.center.y-h*g,xmax:p.center.x+h*g,ymax:p.center.y+h*g,spatialReference:p.spatialReference});return new D({floors:r,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:g,layerOption:"popup",mapExtent:x,returnGeometry:!0,spatialReference:u,sublayers:s.sublayers,timeExtent:o,tolerance:l,width:g})}async _fetchPopupFeaturesUsingQueries(e,i,t){const{layerView:{floors:r,timeExtent:s}}=this,o=t!=null?t.event:null,u=i.map(async({sublayer:c,popupTemplate:l})=>{if(await c.load().catch(()=>{}),c.capabilities&&!c.capabilities.operations.supportsQuery)return[];const p=c.createQuery(),h=J({renderer:c.renderer,event:o}),g=this.createFetchPopupFeaturesQueryGeometry(e,h);if(p.geometry=g,p.outFields=await be(c,l),p.timeExtent=s,r){const v=r.clone(),w=T(v,c);w!=null&&(p.where=p.where?`(${p.where}) AND (${w})`:w)}const x=this._getTargetResolution(g.width/h),b=await Ne(l),R=c.geometryType==="point"||b&&b.arcadeUtils.hasGeometryOperations(l);R||(p.maxAllowableOffset=x);let{features:m}=await c.queryFeatures(p);const P=R?0:x;m=await Le(c,m);for(const v of m)this._featuresResolutions.set(v,P);return m});return(await de(u)).reverse().reduce((c,l)=>l.value?[...c,...l.value]:c,[]).filter(c=>c!=null)}};f([y({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0);f([y({constructOnly:!0})],E.prototype,"layerView",void 0);f([y({constructOnly:!0})],E.prototype,"highlightGraphics",void 0);f([y({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0);f([y({constructOnly:!0})],E.prototype,"updatingHandles",void 0);E=f([_("esri.views.layers.support.MapService")],E);function _e(n,e,i){const t=[],r=s=>{const o=s.minScale===0||e<=s.minScale,u=s.maxScale===0||e>=s.maxScale;if(s.visible&&o&&u){if(s.sublayers)s.sublayers.forEach(r);else if(s.popupEnabled){const a=Re(s,{...i,defaultPopupTemplateEnabled:!1});a!=null&&t.unshift({sublayer:s,popupTemplate:a})}}};return((n==null?void 0:n.toArray())??[]).reverse().map(r),t}function Ne(n){var i;return((i=n.expressionInfos)==null?void 0:i.length)||Array.isArray(n.content)&&n.content.some(t=>t.type==="expression")?me():Promise.resolve()}async function Te(n,e){var i,t;if((t=(i=n.capabilities)==null?void 0:i.operations)!=null&&t.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Le(n,e){const i=n.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(i.valueExpression?e=await Promise.all(e.map(t=>i.getSymbolAsync(t).then(r=>r?t:null))).then(t=>t.filter(r=>r!=null)):e=e.filter(t=>i.getSymbol(t)!=null)),e}function We(n,e,i,t=new O){let r=0;if(i.type==="2d")r=e*(i.resolution??0);else if(i.type==="3d"){const l=i.overlayPixelSizeInMapUnits(n),p=i.basemapSpatialReference;r=p!=null&&!p.equals(i.spatialReference)?G(p)/G(i.spatialReference):e*l}const s=n.x-r,o=n.y-r,u=n.x+r,a=n.y+r,{spatialReference:c}=i;return t.xmin=Math.min(s,u),t.ymin=Math.min(o,a),t.xmax=Math.max(s,u),t.ymax=Math.max(o,a),t.spatialReference=c,t}new O;export{E as M,We as c,Ce as i};
