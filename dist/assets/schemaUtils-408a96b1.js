import{J as le,m as J,aA as q,s as d,ct as te,cu as xe,aO as ve,u as re,cv as ae,aj as Te,cq as Se,cs as Fe}from"./index-9f03d686.js";import{L as $,E as w,S as g,V as we}from"./color-b838c155.js";import{c as Ve}from"./utils-e884b172.js";import{l as Ee}from"./visualVariablesUtils-1400c8a8.js";import{f as V,_ as oe,A as ze}from"./MaterialKey-3bd82cb0.js";import"./ExpandedCIM-6cea9dff.js";import{e as ue}from"./util-1709f557.js";function pe(e){if(!e)return $.NONE;let t=0;for(const r of e)if(r.type==="size"){const s=Ee(r);t|=s,r.target==="outline"&&(t|=s<<4)}else r.type==="color"?t|=$.COLOR:r.type==="opacity"?t|=$.OPACITY:r.type==="rotation"&&(t|=$.ROTATION);return t}function E(e){var t;return e.type==="line-marker"?{type:"line-marker",color:(t=e.color)==null?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function z(e){return ze(e)}function b(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return Oe(e,t,r);case"simple-marker":case"picture-marker":return Me(e,t,r);case"simple-line":return Le(e,t,r);case"text":return Ne(e,t,r);case"label":return Ie(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...E(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function Ie(e,t,r){const s=e.toJSON(),i=V(w.LABEL,{...t,placement:s.labelPlacement});return{materialKey:r?z(i):i,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}function Oe(e,t,r){const s=V(w.FILL,t),i=r?z(s):s,n=e.clone(),l=n.outline,o=oe(t.symbologyType);o||(n.outline=null);const u={materialKey:i,hash:n.hash(),...E(n)};if(o)return u;const a=[];if(a.push(u),l){const p=V(w.LINE,{...t,isOutline:!0}),c={materialKey:r?z(p):p,hash:l.hash(),...E(l)};a.push(c)}return{type:"composite-symbol",layers:a,hash:a.reduce((p,c)=>c.hash+p,"")}}function Le(e,t,r){const s=oe(t.symbologyType)?g.DEFAULT:t.symbologyType,i=V(w.LINE,{...t,symbologyType:s}),n=r?z(i):i,l=e.clone(),o=l.marker;l.marker=null;const u=[];if(u.push({materialKey:n,hash:l.hash(),...E(l)}),o){const a=V(w.MARKER,t),p=r?z(a):a;o.color=o.color??l.color,u.push({materialKey:p,hash:o.hash(),lineWidth:l.width,...E(o)})}return{type:"composite-symbol",layers:u,hash:u.reduce((a,p)=>p.hash+a,"")}}function Me(e,t,r){const s=V(w.MARKER,t),i=r?z(s):s,n=E(e);return{materialKey:i,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}function Ne(e,t,r){const s=V(w.TEXT,t),i=r?z(s):s,n=E(e);return{materialKey:i,hash:e.hash(),...n,angle:e.angle,maxVVSize:t.maxVVSize}}const ot=Object.freeze(Object.defineProperty({__proto__:null,createSymbolSchema:b},Symbol.toStringTag,{value:"Module"}));function Re(e,t){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const r=e.getVisualVariablesForType("size");if(!r[0])return 0;const s=r[0];if(t&&s.field==="cluster_count"&&t.type==="cluster")return t.clusterMaxSize;if(s.target==="outline")return 0;if(s.transformationType==="stops")return s.stops.map(i=>i.size).reduce(_,0);if(s.transformationType==="clamped-linear"){let i=-1/0,n=-1/0;return i=typeof s.maxSize=="number"?s.maxSize:s.maxSize.stops.map(l=>l.size).reduce(_,0),n=typeof s.minSize=="number"?s.minSize:s.minSize.stops.map(l=>l.size).reduce(_,0),Math.max(i,n)}return s.transformationType==="real-world-size"?30:void 0}function _(e,t){return Math.max(e,t)}const P=8,ce=P-2,D=le.getLogger("esri.views.2d.layers.features.support.rendererUtils"),ut=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),r=t.visualVariables.map(s=>fe(s)?de(s):s);return t.visualVariables=r,t};function Ae(e){return e.map(t=>fe(t)?de(t.clone()):t)}function fe(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function de(e){return e.stops=Ce(e.type,e.stops??[]),e}function L(e,t,r){return(1-r)*e+r*t}function Be(e,t){const[r,...s]=t,i=s.pop(),n=s[0].value,l=s[s.length-1].value,o=(l-n)/ce,u=[];for(let a=n;a<l;a+=o){let p=0;for(;a>=s[p].value;)p++;const c=s[p],f=t[p-1],M=a-f.value,S=c.value===f.value?1:M/(c.value-f.value);if(e==="color"){const h=s[p],x=t[p-1],y=h.color.clone();y.r=L(x.color.r,y.r,S),y.g=L(x.color.g,y.g,S),y.b=L(x.color.b,y.b,S),y.a=L(x.color.a,y.a,S),u.push({value:a,color:y,label:h.label})}else if(e==="size"){const h=s[p],x=t[p-1],y=te(h.size),v=L(te(x.size),y,S);u.push({value:a,size:v,label:h.label})}else{const h=s[p],x=L(t[p-1].opacity,h.opacity,S);u.push({value:a,opacity:x,label:h.label})}}return[r,...u,i]}function ke(e){const[t,...r]=e,s=r.pop();for(;r.length>ce;){let i=0,n=0;for(let l=1;l<r.length;l++){const o=r[l-1],u=r[l],a=Math.abs(u.value-o.value);a>n&&(n=a,i=l)}r.splice(i,1)}return[t,...r,s]}function Ce(e,t){return t.length<=P?t:(D.warn(`Found ${t.length} Visual Variable stops, but MapView only supports ${P}. Displayed stops will be simplified.`),t.length>2*P?Be(e,t):ke(t))}function W(){if(J("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:r,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:i}=q("2d");return e&&r&&s||t&&i?"symbol":J("heatmap-allow-raster-fallback")?"raster":"none"}function pt(e){if(!e)return!0;switch(e.type){case"dot-density":if(!q("2d").supportsTextureFloat)return D.error(new d("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const t=W();if(t==="none"||t==="raster"&&!J("heatmap-force-raster")){const r=q("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(i=>!r[i]).join(", ");if(t==="none")return D.errorOnce(new d("webgl-missing-extension",`Missing WebGL${r.type} requirements for Heatmap: ${s}`)),!1;t==="raster"&&D.warnOnce(`Missing WebGL${r.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}const I=le.getLogger("esri.views.2d.layers.features.schemaUtils"),m="ValidationError";function G(e,t){let r=0,s=0,i=g.DEFAULT;if(e!=null){if(s=Re(e,t),"visualVariables"in e&&(r=pe(e.visualVariables||[]),e.type==="dot-density"&&(i=g.DOT_DENSITY)),e.type==="heatmap"&&(i=g.HEATMAP),e.type==="dictionary")return{maxVVSize:s,vvFlags:r,symbologyType:g.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:s,vvFlags:r,symbologyType:g.PIE_CHART};if(i!==g.DOT_DENSITY&&i!==g.HEATMAP){const n=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&n.push(e.backgroundFillSymbol);let l=!0,o=!0;for(const u of n)if(u.type==="cim"&&(o=!1),u.type==="simple-fill"||u.type==="picture-fill"){const a=u.outline,p=a&&a.style!=="none"&&a.style!=="solid",c=u.type==="simple-fill"&&u.style!=="none"&&u.style!=="solid";p&&(l=!1),(u.type==="picture-fill"||c||p)&&(o=!1)}l?i=o?g.OUTLINE_FILL_SIMPLE:g.OUTLINE_FILL:o&&(i=g.SIMPLE)}}return{vvFlags:r,maxVVSize:s,symbologyType:i}}let se=null;function ct(e){if(J("esri-2d-update-debug")){const t=ie(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",xe(se,t)),se=t}return ie(e)}function ie(e,t=!1){var r,s;try{const i=Je(e,t),n=Ue(e),l={};i.map(a=>$e(l,e,a));const o=e.subtypeCode!=null?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:ve(e.definitionExpression,o),fields:e.fields.map(a=>a.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(r=e.historicMoment)==null?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(s=e.timeExtent)==null?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:i,tileRenderer:n,targets:l}}catch(i){if(i.fieldName===m)return I.error(i),null;throw i}}function $e(e,t,r){switch(r.target){case"feature":return void U(e,K(t),r);case"aggregate":{if(!("featureReduction"in t))return;const s=t.featureReduction;switch(s==null?void 0:s.type){case"selection":throw new d(m,"Mapview does not support `selection` reduction type",s);case"binning":return U(e,K(t),r),void Pe(e,s,t.fields.map(i=>i.toJSON()),r);case"cluster":return U(e,K(t),r),void De(e,s,t.fields.map(i=>i.toJSON()),r)}}}}function Y(e,t){var r,s;for(const i in t){const n=t[i];if(n.target!==e.name)continue;const l=e.attributes[i];if(l!=null&&l.context){const o=l.context;o.mesh=o.mesh||((r=n.context)==null?void 0:r.mesh),o.storage=o.storage||((s=n.context)==null?void 0:s.storage)}else e.attributes[i]=n}return e}function K(e){var t,r,s;return[((t=e.filter)==null?void 0:t.toJSON())??null,((s=(r=e.featureEffect)==null?void 0:r.filter)==null?void 0:s.toJSON())??null]}function U(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),Y(e.feature,r.attributes.fields),e}function ye(e,t){const{onStatisticExpression:r,onStatisticField:s,statisticType:i}=e;switch(i){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(r){const{returnType:l}=r;return l?l==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(I.error(new d(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const n=t.find(l=>l.name===s);return n?n.type:(I.error(new d(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function Pe(e,t,r,s){return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(t.fields??[]).map(i=>({...i.toJSON(),type:ye(i,r)}))},attributes:{}}),Y(e.aggregate,s.attributes.fields),e}function De(e,t,r,s){var i;return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:re(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(re(t.clusterMaxSize)/64),fields:(i=t.fields??[])==null?void 0:i.map(n=>({...n.toJSON(),type:ye(n,r)}))}}),Y(e.aggregate,s.attributes.fields),e}function T(e,t){return t.field?F(e,{...t,type:"field",field:t.field}):t.valueExpression?F(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:void 0,fieldIndex:void 0}}function F(e,t){switch(t.type){case"expression":{const r=t.valueExpression;if(!e.fields[r]){const s=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:s}}return{fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=JSON.stringify(t.label);if(!e.fields[r]){const s=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:s}}return{fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return t.target==="aggregate"&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function Je(e,t=!1){const r=new Array;let s=0;return r.push(Ke(e,s++,t)),r}function H(e,t,r,s,i,n=!1){const l=F(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:o}=l;return{...b(t,i,n),fieldIndex:o,target:r,index:s}}function _e(e,t,r){var p;const s="featureReduction"in t&&t.featureReduction;if(!s)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const i="aggregate",n=[];let l=null,o=ue(t.geometryType),u=[],a=null;if(s)switch(s.type){case"selection":return I.error(new d(m,"Mapview does not support `selection` reduction type",s)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...s.fields??[]),s.type==="cluster"?o="esriGeometryPoint":s.type==="binning"&&(o="esriGeometryPolygon"),s.renderer&&!((p=s.renderer.authoringInfo)!=null&&p.isAutoGenerated)){if(s.type==="cluster"){const{renderer:f}=Se(s.renderer,s,null);a=f}else a=s.renderer;const c=G(s.renderer,s);l=j(e,i,s.renderer,c,r),u=s&&s.labelsVisible&&s.labelingInfo||[]}else if(s.type==="cluster"){if(a=Fe(n,t.renderer,s,null,!0),s.symbol){const c=G(a,s);l={type:"simple",symbol:b(s.symbol,c,r),symbologyType:c.symbologyType}}u=s&&s.labelsVisible&&s.labelingInfo||[]}}return qe(e,n),{labels:ae(u,s.type==="binning"?"esriGeometryPolygon":o),matcher:l,fields:n,rendererOverride:a}}function Ke(e,t,r=!1){var y;const s={indexCount:0,fields:{}},i="featureReduction"in e?e.featureReduction??void 0:void 0,n=i?"aggregate":"feature";if("sublayers"in e){const v={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:g.DEFAULT},k={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},C={type:"subtype",classes:{}},me={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:k,mesh:{matcher:v,aggregateMatcher:null,labels:C,sortKey:null}},Q=new Set;let ge=0;for(const{renderer:O,subtypeCode:N,labelingInfo:be,labelsVisible:he}of e.sublayers){let X=0;"visualVariables"in O&&O.visualVariables&&(O.visualVariables.some(B=>B.type!=="rotation")&&I.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),X=pe(O.visualVariables.filter(B=>B.type!=="size")));const Z={symbologyType:g.DEFAULT,vvFlags:X,maxVVSize:0},R=j(s,n,O,Z,r),A=ne(s,n,O),ee=he&&be;if(R.type==="dictionary")throw new d(m,"Dictionary renderer is not supported in subtype layers");if(R.type==="subtype")throw new d(m,"Nested subtype renderers is not supported");if(A!=null&&A.type==="subtype")throw new d(m,"Nested subtype storage is not supported");if(A!=null&&A.attributeMapping!=null)throw new d(m,"Non-visual-variable attributes are not supported in subtype layers");if(R.type==="heatmap")throw new d(m,"Heatmaps are not supported in subtype layers");if(R.type==="pie-chart")throw new d(m,"Pie-charts are not supported in subtype layers");if(Q.has(N))throw new d(m,"Subtype codes for sublayers must be unique");Q.add(N),v.renderers[N]=R,k.mapping[N]=A,ee&&(C.classes[N]=ee.map(B=>H(s,B,"feature",ge++,Z,r)))}return me}if(((y=e.renderer)==null?void 0:y.type)==="heatmap"&&W()==="raster"){const{radius:v,fieldOffset:k,field:C}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:n,storage:null,mesh:{radius:v,fieldOffset:k,field:T(s,{target:n,field:C,resultType:"numeric"}).field}}}const l=_e(s,e,r),o=ue(e.geometryType),u=l.rendererOverride??e.renderer,a=G(u,i),p=j(s,n,u,a,r),c=ne(s,n,u),f=He(s,e.orderBy,e.renderer,i),M=e.labelsVisible&&e.labelingInfo||[],S=ae(M,o);let h=0;const x=[...S.map(v=>H(s,v,"feature",h++,a,r)),...l.labels.map(v=>H(s,v,"aggregate",h++,a,r))];return{type:"symbol",target:n,attributes:s,aggregateFields:l.fields,storage:c,mesh:{matcher:p,labels:{type:"simple",classes:x},aggregateMatcher:l.matcher,sortKey:f}}}function Ue(e){var t;return((t=e.renderer)==null?void 0:t.type)==="heatmap"&&W()==="raster"?{type:"heatmap"}:{type:"symbol"}}function He(e,t,r,s){if(s!=null)return null;if(t!=null&&t.length){t.length>1&&I.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],n=i.order==="ascending"?"asc":"desc";return i.field?{field:i.field,order:n}:i.valueExpression?{fieldIndex:F(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(I.error(new d(m,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return r!=null&&r.type==="unique-value"&&r.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function qe(e,t){const r={mesh:!0,storage:!0};for(const s of t){const{name:i,onStatisticField:n,onStatisticExpression:l,statisticType:o}=s;let u,a;const p="numeric",c="feature";l?a=F(e,{type:"expression",target:c,valueExpression:l.expression,resultType:p}).fieldIndex:u=F(e,{type:"field",target:c,field:n,resultType:p}).field,F(e,{type:"statistic",target:"aggregate",name:i,context:r,inField:u,inFieldIndex:a,statisticType:o})}}function ne(e,t,r){let s;switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=Ve(r).getStorageSpec(r)}return Ge(e,t,s,r)}function Ge(e,t,r,s){if(r==null)return null;const{visualVariables:i,attributes:n}=r;let l=null;i&&"visualVariables"in s&&(l=je(e,t,s.visualVariables));const o=l!=null?4:0;let u=null;return n!=null&&(u=n.map((a,p)=>{const{field:c,fieldIndex:f}=T(e,{valueExpression:a.valueExpression,field:a.field,resultType:"numeric",target:t});return{binding:p+o,field:c,fieldIndex:f}})),{type:"simple",target:t,attributeMapping:u,vvMapping:l}}function je(e,t,r){if(!r||!r.length)return[];const s={storage:!0},i="numeric";return Ae(r).map(n=>{const l=we(n.type),{field:o,fieldIndex:u}=T(e,{target:t,valueExpression:n.valueExpression,field:n.field,context:s,resultType:i});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:l,field:o,fieldIndex:u,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:l,field:o,fieldIndex:u,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:o,fieldIndex:u,normalizationField:T(e,{target:t,field:n.normalizationField,context:s,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:o,fieldIndex:u}}}).filter(Te)}function j(e,t,r,s,i=!1){const n=e??{indexCount:0,fields:{}};switch(r.type){case"simple":case"dot-density":return We(n,r,s,i);case"class-breaks":return Qe(n,t,r,s,i);case"unique-value":return Xe(n,t,r,s,i);case"dictionary":return Ze(n,r,s,i);case"heatmap":return et(n,r,s,i);case"pie-chart":return Ye(n,r,s,i)}}function We(e,t,r,s=!1){const i=t.getSymbols(),n=i.length?i[0]:null;return{type:"simple",symbol:b(n,r,s),symbologyType:r.symbologyType}}function Ye(e,t,r,s=!1){const i=t.getSymbols(),n=i[0],l=i.length>1?i[1]:null;return{type:"pie-chart",markerSymbol:b(n,r,s),fillSymbol:b(l,r,s),symbologyType:r.symbologyType}}function Qe(e,t,r,s,i=!1){const n={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:o,fieldIndex:u}=T(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),a=r.normalizationType,p=a==="log"?"esriNormalizeByLog":a==="percent-of-total"?"esriNormalizeByPercentOfTotal":a==="field"?"esriNormalizeByField":null,c=r.classBreakInfos.map(f=>({symbol:b(f.symbol,s,i),min:f.minValue,max:f.maxValue})).sort((f,M)=>f.min-M.min);return{type:"interval",attributes:e.fields,field:o,fieldIndex:u,backgroundFillSymbol:b(l,s,i),defaultSymbol:b(r.defaultSymbol,s,i),intervals:c,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:p,isMaxInclusive:r.isMaxInclusive,symbologyType:s.symbologyType}}function Xe(e,t,r,s,i=!1){const n=[],l=r.backgroundFillSymbol,o={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&typeof r.field!="string")throw new d(m,"Expected renderer.field to be a string",r);const{field:u,fieldIndex:a}=T(e,{...o,field:r.field,valueExpression:r.valueExpression});for(const p of r.uniqueValueInfos??[])n.push({value:""+p.value,symbol:b(p.symbol,s,i)});return{type:"map",attributes:e.fields,field:u,fieldIndex:a,field2:T(e,{...o,field:r.field2}).field,field3:T(e,{...o,field:r.field3}).field,fieldDelimiter:r.fieldDelimiter??void 0,backgroundFillSymbol:b(l,s),defaultSymbol:b(r.defaultSymbol,s),map:n,symbologyType:s.symbologyType}}function Ze(e,t,r,s=!1){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}function et(e,t,r,s=!1){const i=t.getSymbols(),n=i.length?i[0]:null;return{type:"heatmap",symbol:b(n,r,s),symbologyType:r.symbologyType}}export{ct as E,G as T,j as _,ot as c,pt as h,ut as n,b as o};
