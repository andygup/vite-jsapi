import{k as P,gJ as L,at as I,d as S,L as M,aa as R,K as v,gK as N,gL as $,gM as T}from"./index-ebffac9a.js";import{e as F}from"./LRUCache-bcacffcf.js";import{r as x}from"./FieldsIndex-ed9267b4.js";const w="esri.renderers.support.DictionaryLoader",q={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class U{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new F(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(i){if(P(i))return this._dictionaryPromise=null,null}const e=this._dictionaryVersion&&this._dictionaryVersion.since(4,0),l={};if(this.fieldMap)for(const i of this._symbolFields){const n=this._getFieldName(this.fieldMap[i]);l[i]=n?e?t.attributes[n]:""+t.attributes[n]:""}let a=null;try{a=o==null?void 0:o(l,s)}catch{return null}if(!a||typeof a!="string")return null;const h=L(a).toString(),c=this._symbolCache.get(h);if(c)return c.catch(()=>{this._symbolCache.pop(h)}),c;const b=a.split(";"),u=[],y=[];for(const i of b)if(i)if(i.includes("po:")){const n=i.substr(3).split("|");if(n.length===3){const m=n[0],g=n[1];let f=n[2];if(g==="DashTemplate")f=f.split(" ").map(d=>Number(d));else if(g==="Color"){const d=new I(f).toRgba();f=[d[0],d[1],d[2],255*d[3]]}else f=Number(f);y.push({primitiveName:m,propertyName:g,value:f})}}else if(i.includes("|")){for(const n of i.split("|"))if(this._itemNames.has(n)){u.push(n);break}}else this._itemNames.has(i)&&u.push(i);const _=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point",r=this._cimPartsToCIMSymbol(u,y,_,s);return this._symbolCache.put(h,r,1),r}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void S.getLogger(w).error("no valid URL!");const s=M(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,R()]);if(!o)throw this._dictionaryPromise=null,new v("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:e,dictionary_version:l,expression:a,itemsNames:h}=o,c=a;let b=!1;l&&(this._dictionaryVersion=N.parse(l),b=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(h),this._symbolFields=e.symbol;const u={};if(this.config){const r=this.config;for(const i in r)u[i]=r[i]}if(e.configuration)for(const r of e.configuration)u.hasOwnProperty(r.name)||(u[r.name]=r.value);const y=[];if(t!=null&&t.fields&&this.fieldMap)for(const r of this._symbolFields){const i=this.fieldMap[r],n=t.fields.filter(m=>m.name.toLowerCase()===(i==null?void 0:i.toLowerCase()));n.length>0&&y.push({...n[0],type:b?n[0].type:"esriFieldTypeString"})}y.length>0&&(this._fieldIndex=new x(y));const _=$(c,t!=null?t.spatialReference:null,y,u).then(r=>{const i={scale:0};return(n,m)=>{if(r==null)return null;const g=r.repurposeFeature({geometry:null,attributes:n});return i.scale=m!=null?m.scale??void 0:void 0,r.evaluate({$feature:g,$view:i})}}).catch(r=>(S.getLogger(w).error("Creating dictinoary expression failed:",r),null));return this._dictionaryPromise=_,_}async _cimPartsToCIMSymbol(t,s,o,e){const l=new Array(t.length);for(let c=0;c<t.length;c++)l[c]=this._getSymbolPart(t[c],e);const a=await Promise.all(l),h=this.fieldMap;if(h)for(const c of a)C(c,h);return new T({data:this._combineSymbolParts(a,s,o)})}async _getSymbolPart(t,s){if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(l=>l.data);const o=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),e=M(o,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,e);try{return(await e).data}catch(l){throw this._ongoingRequests.delete(t),l}}_combineSymbolParts(t,s,o){if(!t||t.length===0)return null;const e={...t[0]};if(t.length>1){e.symbolLayers=[];for(const l of t){const a=l;e.symbolLayers.unshift(...a.symbolLayers)}}return o&&(e.callout=q),{type:"CIMSymbolReference",symbol:e,primitiveOverrides:s}}_getFieldName(t){if(this._fieldIndex!==null){const s=this._fieldIndex.get(t);return s?s.name:t}return t}}function C(p,t){if(!p)return;const s=p.symbolLayers;if(!s)return;let o=s.length;for(;o--;){const e=s[o];e&&e.enable!==!1&&e.type==="CIMVectorMarker"&&k(e,t)}}function k(p,t){const s=p.markerGraphics;if(s)for(const o of s){if(!o)continue;const e=o.symbol;if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":C(e,t);break;case"CIMTextSymbol":e.fieldMap=t}}}export{U as DictionaryLoader};
