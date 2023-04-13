import{i as w,dd as L,ax as P,L as b,r as _,a9 as I,E as k,fj as R,fk as F}from"./index-b4b3ae7d.js";import{L as T}from"./LRUCache-58e6960b.js";import{F as x}from"./FieldsIndex-a6734189.js";import"./MemCache-b965182b.js";const C="esri.renderers.support.DictionaryLoader",v={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class A{constructor(e,i,s){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new T(100),this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=i,this.fieldMap=s}getSymbolFields(){return this._symbolFields}async getSymbolAsync(e,i){this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(i));let s;try{s=await this._dictionaryPromise}catch(n){if(w(n))return this._dictionaryPromise=null,null}const t={};if(this.fieldMap)for(const n of this._symbolFields){const u=this._getFieldName(this.fieldMap[n]);u?t[n]=""+e.attributes[u]:t[n]=""}let r=null;try{r=s==null?void 0:s(t,i)}catch{return null}if(!r||typeof r!="string")return null;const l=L(r).toString(),c=this._symbolCache.get(l);if(c)return c.catch(()=>{this._symbolCache.pop(l)}),c;const f=r.split(";"),o=[],a=[];for(const n of f)if(n){if(n.includes("po:")){const u=n.substr(3).split("|");if(u.length===3){const S=u[0],p=u[1];let y=u[2];if(p==="DashTemplate")y=y.split(" ").map(d=>Number(d));else if(p==="Color"){const d=new P(y).toRgba();y=[d[0],d[1],d[2],d[3]*255]}else y=Number(y);a.push({primitiveName:S,propertyName:p,value:y})}continue}if(n.includes("|")){for(const u of n.split("|"))if(this._itemNames.has(u)){o.push(u);break}}else this._itemNames.has(n)&&o.push(n)}const m=!(e.geometry!=null&&(e.geometry.hasZ||e.geometry.type!=="point")),h=this._cimPartsToCIMSymbol(o,a,m,i);return this._symbolCache.put(l,h,1),h}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url){b.getLogger(C).error("no valid URL!");return}const i=_(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:e!=null?e.signal:null}),[{data:s}]=await Promise.all([i,I()]);if(!s)throw this._dictionaryPromise=null,new k("esri.renderers.DictionaryRenderer","Bad dictionary data!");const t=s.expression,r=s.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+s.cimRefTemplateUrl,this._itemNames=new Set(s.itemsNames),this._symbolFields=r.symbol;const l={};if(this.config){const o=this.config;for(const a in o)l[a]=o[a]}if(r.configuration)for(const o of r.configuration)l.hasOwnProperty(o.name)||(l[o.name]=o.value);const c=[];if(e!=null&&e.fields&&this.fieldMap)for(const o of this._symbolFields){const a=this.fieldMap[o],m=e.fields.filter(h=>h.name.toLowerCase()===(a==null?void 0:a.toLowerCase()));m.length>0&&c.push({...m[0],type:"esriFieldTypeString"})}c.length>0&&(this._fieldIndex=new x(c));const f=R(t,e!=null?e.spatialReference:null,c,l).then(o=>{const a={scale:0};return(m,h)=>{if(o==null)return null;const n=o.repurposeFeature({geometry:null,attributes:m});return a.scale=h!=null?h.scale??void 0:void 0,o.evaluate({$feature:n,$view:a})}}).catch(o=>(b.getLogger(C).error("Creating dictinoary expression failed:",o),null));return this._dictionaryPromise=f,f}async _cimPartsToCIMSymbol(e,i,s,t){const r=new Array(e.length);for(let f=0;f<e.length;f++)r[f]=this._getSymbolPart(e[f],t);const l=await Promise.all(r),c=this.fieldMap;if(c)for(const f of l)M(f,c);return new F({data:this._combineSymbolParts(l,i,s)})}async _getSymbolPart(e,i){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then(r=>r.data);const s=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),t=_(s,{responseType:"json",query:{f:"json"},...i});this._ongoingRequests.set(e,t);try{return(await t).data}catch(r){throw this._ongoingRequests.delete(e),r}}_combineSymbolParts(e,i,s){if(!e||e.length===0)return null;const t={...e[0]};if(e.length>1){t.symbolLayers=[];for(const r of e){const l=r;t.symbolLayers.unshift(...l.symbolLayers)}}return s&&(t.callout=v),{type:"CIMSymbolReference",symbol:t,primitiveOverrides:i}}_getFieldName(e){if(this._fieldIndex!==null){const i=this._fieldIndex.get(e);return i?i.name:e}return e}}function M(g,e){if(!g)return;const i=g.symbolLayers;if(!i)return;let s=i.length;for(;s--;){const t=i[s];if(!(!t||t.enable===!1))switch(t.type){case"CIMVectorMarker":q(t,e);break}}}function q(g,e){const i=g.markerGraphics;if(i)for(const s of i){if(!s)continue;const t=s.symbol;if(t)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":M(t,e);break;case"CIMTextSymbol":t.fieldMap=e;break}}}export{A as DictionaryLoader};
