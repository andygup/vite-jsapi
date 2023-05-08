import{jc as Ee,js as He,bZ as Le,jg as Ue,L as We,bf as Ae,l1 as ce,h3 as Ge,aO as Be,Y as Je,la as X,k as Ke,G as ue,lb as ze,lc as Ye,ld as je,le as ae,lf as de,lg as Xe,lh as Qe,li as Ze,df as et,$ as tt,lj as it,lk as nt,ll as ot,lm as rt,ln as at,jr as B,lo as he,I as q,cW as O,c$ as st,d0 as lt,lp as ct,cH as V,lq as ut,lr as dt,ls as A,cZ as ke,iu as oe,K as ht,lt as ft,lu as _t,b3 as mt,g as pt,bg as gt,bo as vt,l as fe,e as j,y as Z,a as yt}from"./index-bdad94d1.js";import{t as $}from"./Rect-98da58d6.js";import{n as xt}from"./pbf-58a9cdaf.js";import{e as wt}from"./rasterizingUtils-f0355b66.js";import{n as se,l as U,r as J,i as $e,a as ee,b as _e}from"./StyleRepository-b5a52143.js";import{h as bt,T as F}from"./TileInfoView-5945d35d.js";import{Z as k,_ as Oe,$ as me}from"./enums-9bbe4bf0.js";import{M as ie}from"./number-954e4ab6.js";import{c as pe}from"./GeometryUtils-0258f920.js";import{n as St}from"./LayerView3D-db179b67.js";import{o as Tt}from"./TiledLayerView3D-93d2cbbe.js";import{d as Pt}from"./LayerView-bb89af1f.js";import"./colorUtils-c0f43caf.js";import"./TileClipper-ae6eca9e.js";let It=class{constructor(e,i){this._lockedSchemaPixelSize=e,this._isGCS=i}getLevelRowColumn(e){return this._isGCS?[e[0],e[1]>>1,e[2]>>1]:this._lockedSchemaPixelSize===256&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this._isGCS?e:this._lockedSchemaPixelSize===256?e>0?e-1:0:e}getShift(e,i){let t=0,n=0;return(this._lockedSchemaPixelSize===256||this._isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(n=i)),[t,n]}getScale(e){if(this._isGCS){if(this._lockedSchemaPixelSize===512)return 4}else if(this._lockedSchemaPixelSize===256&&e===0)return 1;return 2}},te=class{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new $(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new $;let t=null,n=-1;for(let o=0;o<this._free.length;++o){const r=this._free[o];e<=r.width&&i<=r.height&&(t===null||r.y<=t.y&&r.x<=t.x)&&(t=r,n=o)}return t===null?new $:(this._free.splice(n,1),t.width<t.height?(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new $(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new $(t.x,t.y+i,e,t.height-i))),new $(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}},ge=class{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new te(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],n=this._glyphSource,o=new Set,r=1/256;for(const s of i){const l=Math.floor(s*r);o.add(l)}const a=[];return o.forEach(s=>{if(s<=256){const l=e+s;if(this._rangePromises.has(l))a.push(this._rangePromises.get(l));else{const d=n.getRange(e,s).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,d),a.push(d)}}}),Promise.all(a).then(()=>{let s=this._glyphIndex[e];s||(s={},this._glyphIndex[e]=s);for(const l of i){const d=s[l];if(d){t[l]={sdf:!0,rect:d.rect,metrics:d.metrics,page:d.page,code:l};continue}const h=n.getGlyph(e,l);if(!h||!h.metrics)continue;const f=h.metrics;let c;if(f.width===0)c=new $(0,0,0,0);else{const p=f.width+6,_=f.height+2*3;let m=p%4?4-p%4:4,g=_%4?4-_%4:4;m===1&&(m=5),g===1&&(g=5),c=this._binPack.allocate(p+m,_+g),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new te(this.width-4,this.height-4),c=this._binPack.allocate(p+m,_+g));const P=this._glyphData[this._currentPage],I=h.bitmap;let x,S;if(I)for(let w=0;w<_;w++){x=p*w,S=this.width*(c.y+w+1)+c.x;for(let y=0;y<p;y++)P[S+y+1]=I[x+y]}}s[l]={rect:c,metrics:f,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:c,metrics:f,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let n;for(const o in t)if(n=t[o],n.tileIDs.delete(e),n.tileIDs.size===0){const r=this._glyphData[n.page],a=n.rect;let s,l;for(let d=0;d<a.height;d++)for(s=this.width*(a.y+d)+a.x,l=0;l<a.width;l++)r[s+l]=0;delete t[o],this._dirties[n.page]=!0}}}bind(e,i,t,n=0){if(!this._textures[t]){const r=new Ee;r.pixelFormat=He.ALPHA,r.wrapMode=Le.CLAMP_TO_EDGE,r.width=this.width,r.height=this.height,this._textures[t]=new Ue(e,r,new Uint8Array(this.width*this.height))}const o=this._textures[t];o.setSamplingMode(i),this._dirties[t]&&o.setData(this._glyphData[t]),e.bindTexture(o,n),this._dirties[t]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}},re=class{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const i=e.getMessage();for(;i.next();)switch(i.tag()){case 3:{const t=i.getMessage();let n,o,r,a,s,l,d;for(;t.next();)switch(t.tag()){case 1:n=t.getUInt32();break;case 2:o=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:a=t.getUInt32();break;case 5:s=t.getSInt32();break;case 6:l=t.getSInt32();break;case 7:d=t.getUInt32();break;default:t.skip()}t.release(),n&&(this._metrics[n]={width:r,height:a,left:s,top:l,advance:d},this._bitmaps[n]=o);break}default:i.skip()}i.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}},Mt=class{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}},ve=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const n=256*i,o=n+255;if(this._baseURL){const r=this._baseURL.replace("{fontstack}",e).replace("{range}",n+"-"+o);return We(r,{responseType:"array-buffer"}).then(a=>{t.addRange(i,new re(new xt(new Uint8Array(a.data),new DataView(a.data))))}).catch(()=>{t.addRange(i,new re)})}return t.addRange(i,new re),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const n=Math.floor(i/256);if(n>256)return;const o=t.getRange(n);return o?{metrics:o.getMetrics(i),bitmap:o.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new Mt),i}};const Rt="dasharray-";let ye=class Ne{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new te(e-4,i-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new te(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),n=new Uint32Array(i*t);this._mosaicsData[0]=n,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,n,o=this._mosaicRects[e];if(o)return o;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(Rt)?([t,n]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!t||!t.width||!t.height||t.width<0||t.height<0))return null;const r=t.width,a=t.height,[s,l,d]=this._allocateImage(r,a);return s.width<=0?null:(this._copy(s,t,l,d,i,n),o={rect:s,width:r,height:a,sdf:t.sdf,simplePattern:!1,pixelRatio:t.pixelRatio,page:l},this._mosaicRects[e]=o,o)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),n=t&&t.rect;if(!n)return null;n.width=t.width,n.height=t.height;const o=t.width,r=t.height,a=2;return{tl:[n.x+a,n.y+a],br:[n.x+a+o,n.y+a+r],page:t.page}}bind(e,i,t=0,n=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;if(!this._textures[t]){const r=new Ee;r.wrapMode=Le.CLAMP_TO_EDGE,r.width=this._size[t][0],r.height=this._size[t][1],this._textures[t]=new Ue(e,r,new Uint8Array(this._mosaicsData[t].buffer))}const o=this._textures[t];o.setSamplingMode(i),this._dirties[t]&&o.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(o,n),this._dirties[t]=!1}static _copyBits(e,i,t,n,o,r,a,s,l,d,h){let f=n*i+t,c=s*r+a;if(h){c-=r;for(let v=-1;v<=d;v++,f=((v+d)%d+n)*i+t,c+=r)for(let p=-1;p<=l;p++)o[c+p]=e[f+(p+l)%l]}else for(let v=0;v<d;v++){for(let p=0;p<l;p++)o[c+p]=e[f+p];f+=i,c+=r}}_copy(e,i,t,n,o,r){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const a=new Uint32Array(r?r.buffer:this._sprites.image.buffer),s=this._mosaicsData[t];s&&a||console.error("Source or target images are uninitialized!");const l=2,d=r?i.width:this._sprites.width;Ne._copyBits(a,d,i.x,i.y,s,n[0],e.x+l,e.y+l,i.width,i.height,o),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const a=new $(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[a,this._mosaicsData.length-1,[e,i]]}let n=e%4?4-e%4:4,o=i%4?4-i%4:4;n===1&&(n=5),o===1&&(o=5);const r=this._binPack.allocate(e+n,i+o);return r.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new te(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[r,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const n=t[1].split(",").map(Number),o=e.slice(e.lastIndexOf("-")+1),[r,a,s]=wt(n,o);return[{x:0,y:0,width:a,height:s,sdf:!0,pixelRatio:1},new Uint8Array(r.buffer)]}},Dt=class{constructor(e,i,t){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){var e,i;(e=this._connection)==null||e.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=Ae(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&((i=this._startOptionsInputSignal)==null||i.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);const i=this._layer.currentStyleInfo.glyphsUrl,t=new ve(i?ce(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new ge(1024,1024,t),this._broadcastPromise=Ge("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(n=>{var o;if(this._layer&&((o=this._connection)==null||o.close(),this._connection=n,this._layer&&!this._connection.closed)){const r=n.broadcast("setStyle",this._layer.currentStyleInfo.style,e);Promise.all(r).catch(a=>Be(a))}})}_requestSprite(e){var r,a;(r=this._spriteSourceAbortController)==null||r.abort();const i=new AbortController;this._spriteSourceAbortController=i;const t=e==null?void 0:e.signal;this._inputSignalEventListener&&((a=this._startOptionsInputSignal)==null||a.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,t&&(this._inputSignalEventListener=Ct(i),t.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:n}=i,o={...e,signal:n};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,o),this._spriteSourcePromise.then(s=>{Je(n),this._spriteMosaic=new ye(1024,1024,250),this._spriteMosaic.setSpriteSource(s)})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new ye(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,i}async setStyle(e,i){await this._broadcastPromise,this._styleRepository=e,this._requestSprite();const t=new ve(this._layer.currentStyleInfo.glyphsUrl?ce(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new ge(1024,1024,t),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",i)),this._broadcastPromise}fetchTileData(e,i){return this._getRefKeys(e,i).then(t=>{const n=this._layer.sourceNameToSource,o=[];for(const r in n)o.push(r);return this._getSourcesData(o,t,i)})}parseTileData(e,i){const t=e&&e.data;if(!t)return Promise.resolve(null);const{sourceName2DataAndRefKey:n,transferList:o}=t;return Object.keys(n).length===0?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:n,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:o}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const n=X.pool.acquire(e.id),o=this._layer.sourceNameToSource[i],{level:r,row:a,col:s}=n;X.pool.release(n);try{return{protobuff:await o.requestTile(r,a,s,t),sourceName:i}}catch(l){if(Ke(l))throw l;return{protobuff:null,sourceName:i}}}_getRefKeys(e,i){const t=this._layer.sourceNameToSource,n=new Array;for(const o in t){const r=t[o].getRefKey(e,i);n.push(r)}return ue(n)}_getSourcesData(e,i,t){const n=[];for(let o=0;o<i.length;o++)if(i[o].value==null||e[o]==null)n.push(null);else{const r=this._getTilePayload(i[o].value,e[o],t);n.push(r)}return ue(n).then(o=>{const r={},a=[];for(let s=0;s<o.length;s++){const l=o[s].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const d=i[s].value.id;r[l.sourceName]={refKey:d,protobuff:l.protobuff},a.push(l.protobuff)}}return{sourceName2DataAndRefKey:r,transferList:a}})}};function Ct(u){return()=>u.abort()}function Et(u,e,i,t,n,o){const{iconRotationAlignment:r,textRotationAlignment:a,iconTranslate:s,iconTranslateAnchor:l,textTranslate:d,textTranslateAnchor:h}=t;let f=0;for(const c of u.colliders){const[v,p]=c.partIndex===0?s:d,_=c.partIndex===0?l:h,m=c.minLod<=o&&o<=c.maxLod;f+=m?0:1,c.enabled=m,c.xScreen=c.xTile*n[0]+c.yTile*n[3]+n[6],c.yScreen=c.xTile*n[1]+c.yTile*n[4]+n[7],_===J.MAP?(c.xScreen+=i*v-e*p,c.yScreen+=e*v+i*p):(c.xScreen+=v,c.yScreen+=p),U.VIEWPORT===(c.partIndex===0?r:a)?(c.dxScreen=c.dxPixels,c.dyScreen=c.dyPixels):(c.dxScreen=i*(c.dxPixels+c.width/2)-e*(c.dyPixels+c.height/2)-c.width/2,c.dyScreen=e*(c.dxPixels+c.width/2)+i*(c.dyPixels+c.height/2)-c.height/2)}u.colliders.length>0&&f===u.colliders.length&&(u.unique.show=!1)}let Lt=class{constructor(e,i,t,n,o,r){this._symbols=e,this._styleRepository=n,this._zoom=o,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new ze(i,t,Ye),this._si=Math.sin(Math.PI*r/180),this._co=Math.cos(Math.PI*r/180);for(const a of e)for(const s of a.symbols)this._allNeededMatrices.has(s.tile)||this._allNeededMatrices.set(s.tile,je(s.tile.transforms.tileUnitsToPixels))}work(e){const i=this._gridIndex;function t(o){const r=o.xScreen+o.dxScreen,a=o.yScreen+o.dyScreen,s=r+o.width,l=a+o.height,[d,h,f,c]=i.getCellSpan(r,a,s,l);for(let v=h;v<=c;v++)for(let p=d;p<=f;p++){const _=i.cells[v][p];for(const m of _){const g=m.xScreen+m.dxScreen,P=m.yScreen+m.dyScreen,I=g+m.width,x=P+m.height;if(!(s<g||r>I||l<P||a>x))return!0}}return!1}const n=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const o=this._symbols[this._currentLayerCursor],r=this._getProperties(o.styleLayerUID);for(;this._currentSymbolCursor<o.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-n>e)return!1;const a=o.symbols[this._currentSymbolCursor];if(!a.unique.show)continue;Et(a,this._si,this._co,r,this._allNeededMatrices.get(a.tile),this._zoom);const s=a.unique;if(!s.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:d,textAllowOverlap:h,textIgnorePlacement:f}=r;for(const c of a.colliders){if(!c.enabled)continue;const v=s.parts[c.partIndex];v.show&&!(c.partIndex?h:l)&&t(c)&&(c.hard?s.show=!1:v.show=!1)}if(s.show)for(const c of a.colliders){if(!c.enabled||(c.partIndex?f:d)||!s.parts[c.partIndex].show)continue;const v=c.xScreen+c.dxScreen,p=c.yScreen+c.dyScreen,_=v+c.width,m=p+c.height,[g,P,I,x]=this._gridIndex.getCellSpan(v,p,_,m);for(let S=P;S<=x;S++)for(let w=g;w<=I;w++)this._gridIndex.cells[S][w].push(c)}}}return!0}_getProperties(e){const i=this._styleProps.get(e);if(i)return i;const t=this._zoom,n=this._styleRepository.getStyleLayerByUID(e),o=n.getLayoutValue("symbol-placement",t)!==se.POINT;let r=n.getLayoutValue("icon-rotation-alignment",t);r===U.AUTO&&(r=o?U.MAP:U.VIEWPORT);let a=n.getLayoutValue("text-rotation-alignment",t);a===U.AUTO&&(a=o?U.MAP:U.VIEWPORT);const s=n.getPaintValue("icon-translate",t),l=n.getPaintValue("icon-translate-anchor",t),d=n.getPaintValue("text-translate",t),h=n.getPaintValue("text-translate-anchor",t),f={iconAllowOverlap:n.getLayoutValue("icon-allow-overlap",t),iconIgnorePlacement:n.getLayoutValue("icon-ignore-placement",t),textAllowOverlap:n.getLayoutValue("text-allow-overlap",t),textIgnorePlacement:n.getLayoutValue("text-ignore-placement",t),iconRotationAlignment:r,textRotationAlignment:a,iconTranslateAnchor:l,iconTranslate:s,textTranslateAnchor:h,textTranslate:d};return this._styleProps.set(e,f),f}};function Ut(u,e){if(u.priority-e.priority)return u.priority-e.priority;const i=u.tile.key,t=e.tile.key;return i.world-t.world?i.world-t.world:i.level-t.level?i.level-t.level:i.row-t.row?i.row-t.row:i.col-t.col?i.col-t.col:u.xTile-e.xTile?u.xTile-e.xTile:u.yTile-e.yTile}let At=class{get running(){return this._running}constructor(e,i,t,n,o,r){this._visibleTiles=e,this._symbolRepository=i,this._createCollisionJob=t,this._assignTileSymbolsOpacity=n,this._symbolLayerSorter=o,this._isLayerVisible=r,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,i){this._screenWidth===e&&this._screenHeight===i||this.restart(),this._screenWidth=e,this._screenHeight=i}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const i=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const i=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const i=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let s=0;s<e.length;s++){const l=e[s];for(let d=0;d<l.uniqueSymbols.length;d++){const h=l.uniqueSymbols[d];for(const f of h.tileSymbols)f.selectedForRendering=!1}}const i=[];let t=0,n=0;const o=this._isLayerVisible;function r(s){let l;const d=performance.now();for(;n<e.length;n++,t=0){const h=e[n],f=h.styleLayerUID;if(!o(f)){i[n]||(i[n]={styleLayerUID:f,symbols:[]});continue}i[n]=i[n]||{styleLayerUID:f,symbols:[]};const c=i[n];for(;t<h.uniqueSymbols.length;t++){if(l=h.uniqueSymbols[t],t%100==99&&performance.now()-d>s)return!1;let v=null,p=!1,_=!1;for(const m of l.tileSymbols)if(!_||!p){const g=m.tile;(!v||g.isCoverage||g.neededForCoverage&&!p)&&(v=m,(g.neededForCoverage||g.isCoverage)&&(_=!0),g.isCoverage&&(p=!0))}if(v.selectedForRendering=!0,_){c.symbols.push(v),l.show=!0;for(const m of l.parts)m.show=!0}else l.show=!1}}for(const h of i)h.symbols.sort(Ut);return!0}const a=this._symbolLayerSorter;return{work:r,get sortedSymbols(){return i.sort(a)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,i=this._visibleTiles;let t=0;function n(o,r){const a=o.symbols;for(const[s,l]of a)zt(l,r);e(o,r);for(const s of o.childrenTiles)n(s,r)}return{work(o){const r=performance.now();for(;t<i.length;t++){if(performance.now()-r>o)return!1;const a=i[t];a.parentTile==null&&n(a,performance.now())}return!0}}}};function zt(u,e){for(const i of u){const t=i.unique;for(const n of t.parts){const o=n.targetOpacity>.5?1:-1;n.startOpacity+=o*((e-n.startTime)/ae),n.startOpacity=Math.min(Math.max(n.startOpacity,0),1),n.startTime=e,n.targetOpacity=t.show&&n.show?1:0}}}const kt=32,$t=8,Ot=64;let Nt=class{constructor(e,i,t){this.tileCoordRange=e,this._visibleTiles=i,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return this._uniqueSymbolLayerArray==null&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,i){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const n=new Map;if(i)for(const a of i)t.symbols.has(a)&&(n.set(a,t.symbols.get(a)),t.symbols.delete(a));else for(const[a,s]of e.layerData)t.symbols.has(a)&&(n.set(a,t.symbols.get(a)),t.symbols.delete(a));this._removeSymbols(n);const o=e.symbols,r=new Map;for(const[a,s]of o){let l=s.length;if(l>=kt){let d=this.tileCoordRange;do d/=2,l/=4;while(l>$t&&d>Ot);const h=new ze(this.tileCoordRange,this.tileCoordRange,d);r.set(a,{flat:s,index:h}),t.symbols.set(a,{flat:s,index:h});for(const f of s)h.getCell(f.xTile,f.yTile).push(f)}else r.set(a,{flat:s}),t.symbols.set(a,{flat:s})}this._addSymbols(e.key,o)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[i,t]of this._tiles){const n=new Map;for(const o of e)t.symbols.has(o)&&(n.set(o,t.symbols.get(o)),t.symbols.delete(o));this._removeSymbols(n),t.symbols.size===0&&this._tiles.delete(i)}}removeTile(e){this._uniqueSymbolLayerArray=null;const i=this._tiles.get(e.id);if(!i)return;const t=new Map;for(const[n,o]of e.symbols)i.symbols.has(n)&&(t.set(n,i.symbols.get(n)),i.symbols.delete(n));this._removeSymbols(t),i.symbols.size===0&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[i,{flat:t}]of e)for(const n of t){const o=n.unique,r=o.tileSymbols,a=r.length-1;for(let s=0;s<a;s++)if(r[s]===n){r[s]=r[a];break}if(r.length=a,a===0){const s=this._uniqueSymbolsReferences.get(i);s.delete(o),s.size===0&&this._uniqueSymbolsReferences.delete(i)}n.unique=null}}_addSymbols(e,i){if(i.size===0)return;const t=this._visibleTiles;for(const n of t)n.parentTile||n.key.world!==e.world||n.key.level===e.level&&!n.key.equals(e)||this._matchSymbols(n,e,i);for(const[n,o]of i)for(const r of o)if(r.unique==null){const a=this._createUnique();r.unique=a,a.tileSymbols.push(r);let s=this._uniqueSymbolsReferences.get(n);s||(s=new Set,this._uniqueSymbolsReferences.set(n,s)),s.add(a)}}_matchSymbols(e,i,t){if(e.key.level>i.level){const o=e.key.level-i.level;if(e.key.row>>o!==i.row||e.key.col>>o!==i.col)return}if(i.level>e.key.level){const o=i.level-e.key.level;if(i.row>>o!==e.key.row||i.col>>o!==e.key.col)return}if(i.equals(e.key)){for(const o of e.childrenTiles)this._matchSymbols(o,i,t);return}const n=new Map;for(const[o,r]of t){const a=[];for(const h of r){const f=de(this.tileCoordRange,h.xTile,i.level,i.col,e.key.level,e.key.col),c=de(this.tileCoordRange,h.yTile,i.level,i.row,e.key.level,e.key.row);f>=0&&f<this.tileCoordRange&&c>=0&&c<this.tileCoordRange&&a.push({symbol:h,xTransformed:f,yTransformed:c})}const s=[],l=e.key.level<i.level?1:1<<e.key.level-i.level,d=this._tiles.get(e.id).symbols.get(o);if(d){const h=d.flat;for(const f of a){let c,v=!1;const p=f.xTransformed,_=f.yTransformed;c=d.index!=null?d.index.getCell(p,_):h;const m=f.symbol,g=m.hash;for(const P of c)if(g===P.hash&&Math.abs(p-P.xTile)<=l&&Math.abs(_-P.yTile)<=l){const I=P.unique;m.unique=I,I.tileSymbols.push(m),v=!0;break}v||s.push(m)}}s.length>0&&n.set(o,s)}for(const o of e.childrenTiles)this._matchSymbols(o,i,n)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,i=new Array(e.size);let t,n=0;for(const[o,r]of e){const a=new Array(r.size);t=0;for(const s of r)a[t++]=s;i[n]={styleLayerUID:o,uniqueSymbols:a},n++}return i}};function Vt(u){const e=[],i=new Nt(4096,e,()=>{const n=new Xe;return n.show=!1,n.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),n.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),n}),t=new At(e,i,(n,o,r)=>new Lt(n,o,r,u.styleRepository,u.key.level,0),(n,o)=>{Qe(n,o,!1)},()=>0,n=>{const o=u.styleRepository.getStyleLayerByUID(n).getLayoutProperty("visibility");return!o||o.getValue()!==$e.NONE});e.push(u),i.add(u),t.setScreenSize(512,512),t.continue(1/0)}let Ft=class extends bt{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=X.pool.acquire(e),t=i.level===0?null:X.getId(i.level-1,i.row>>1,i.col>>1,i.world);return X.pool.release(i),t}getTileCoverage(e,i,t){const n=super.getTileCoverage(e,i,t);if(!n)return n;const o=1<<n.lodInfo.level;return n.spans=n.spans.filter(r=>r.row>=0&&r.row<o),n}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,n;for(let o=0;o<i.length-1;o++)if(n=i[o+1],e>n.scale)return t=i[o],t.level+(t.scale-e)/(t.scale-n.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],n=this.tileInfo.spatialReference;i=Ze.create({size:t,spatialReference:n}).lods.map(o=>({level:o.level,resolution:o.resolution,scale:o.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}},xe=class extends Dt{constructor(e,i,t,n){super(e,i,t),this._memCache=n,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new Ft(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i,t,n){const o=new X(e,i,t,0);let r=this._memCache.get(o.id);if(r!=null)return r.retain(),r;const a=await this._getVectorTileData(o);if(et(n),!this._layer)return null;if(r=this._memCache.get(o.id),r!=null)return r.retain(),r;const s=this._layer.tileInfo.getTileBounds(tt(),o),l=this._tileInfoView.getTileResolution(e);return r=new it(o,l,s[0],s[3],512,512,this._styleRepository,this._memCache),a?(r.setData(a),r.retain(),this._memCache.put(o.id,r,r.memoryUsed,nt)):r.setData(null),r.neededForCoverage=!0,r.transforms.tileUnitsToPixels=ot(1/8,0,0,0,1/8,0,0,0,1),Vt(r),r}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,n={signal:t.signal},o=this._getParsedVectorTileData(e,n).then(r=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),r)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,o),this._ongoingRequestToController.set(i,t),o}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}},ne=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const n of i)n.visible&&this.draw(e,n,t)}},qt=class extends ne{constructor(){super(...arguments),this._color=rt(1,0,0,1),this._patternMatrix=at(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:n,styleLayerUID:o,requestRender:r,allowDelayedRender:a}=e;this._loadWGLResources(e);const s=e.displayLevel,l=e.styleLayer,d=l.backgroundMaterial,h=n.vectorTilesMaterialManager,f=l.getPaintValue("background-color",s),c=l.getPaintValue("background-opacity",s),v=l.getPaintValue("background-pattern",s),p=v!==void 0,_=f[3]*c,m=1|window.devicePixelRatio,g=e.spriteMosaic;let P,I;const x=m>Oe?2:1,S=e.drawPhase===F.HITTEST,w=this._programOptions;w.id=S,w.pattern=p;const y=h.getMaterialProgram(t,d,w);if(!a||r==null||y.compiled){if(t.bindVAO(this._vao),t.useProgram(y),p){const T=g.getMosaicItemPosition(v,!0);if(T!=null){const{tl:M,br:b,page:D}=T;P=b[0]-M[0],I=b[1]-M[1];const R=g.getPageSize(D);R!=null&&(g.bind(t,B.LINEAR,D,k),y.setUniform4f("u_tlbr",M[0],M[1],b[0],b[1]),y.setUniform2fv("u_mosaicSize",R),y.setUniform1i("u_texture",k))}y.setUniform1f("u_opacity",c)}else this._color[0]=_*f[0],this._color[1]=_*f[1],this._color[2]=_*f[2],this._color[3]=_,y.setUniform4fv("u_color",this._color);if(y.setUniform1f("u_depth",l.z||0),S){const T=ie(o+1);y.setUniform4fv("u_id",T)}for(const T of i){if(y.setUniform1f("u_coord_range",T.rangeX),y.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),p){const M=Math.max(2**(Math.round(s)-T.key.level),1),b=x*T.width*M,D=b/he(P),R=b/he(I);this._patternMatrix[0]=D,this._patternMatrix[4]=R,y.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(q.EQUAL,0,255),t.drawArrays(O.TRIANGLE_STRIP,0,4)}}else r()}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,n=t.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),r=st.createVertex(i,lt.STATIC_DRAW,o),a=new ct(i,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:r});this._vao=a}},Ht=class extends ne{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,requiredLevel:o,state:r,drawPhase:a,painter:s,spriteMosaic:l,styleLayerUID:d,requestRender:h,allowDelayedRender:f}=e;if(!i.some(w=>{var y;return((y=w.layerData.get(d))==null?void 0:y.circleIndexCount)??!1}))return;const c=e.styleLayer,v=c.circleMaterial,p=s.vectorTilesMaterialManager,_=1.2,m=c.getPaintValue("circle-translate",n),g=c.getPaintValue("circle-translate-anchor",n),P=a===F.HITTEST,I=this._programOptions;I.id=P;const x=p.getMaterialProgram(t,v,I);if(f&&h!=null&&!x.compiled)return void h();t.useProgram(x),x.setUniformMatrix3fv("u_displayMat3",g===J.VIEWPORT?r.displayMat3:r.displayViewMat3),x.setUniform2fv("u_circleTranslation",m),x.setUniform1f("u_depth",c.z),x.setUniform1f("u_antialiasingWidth",_);let S=-1;if(P){const w=ie(d+1);x.setUniform4fv("u_id",w)}for(const w of i){if(!w.layerData.has(d))continue;w.key.level!==S&&(S=w.key.level,v.setDataUniforms(x,n,c,S,l));const y=w.layerData.get(d);if(!y.circleIndexCount)continue;y.prepareForRendering(t);const T=y.vao;T!=null&&(t.bindVAO(T),x.setUniformMatrix3fv("u_dvsMat3",w.transforms.dvs),o!==w.key.level?t.setStencilFunction(q.EQUAL,w.stencilRef,255):t.setStencilFunction(q.GREATER,255,255),t.drawElements(O.TRIANGLES,y.circleIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*y.circleIndexStart),w.triangleCount+=y.circleIndexCount/3)}}};const we=1/65536;let Wt=class extends ne{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,drawPhase:n,renderPass:o,spriteMosaic:r,styleLayerUID:a}=e;let s=!1;for(const x of i)if(x.layerData.has(a)){const S=x.layerData.get(a);if(S.fillIndexCount>0||S.outlineIndexCount>0){s=!0;break}}if(!s)return;const l=e.styleLayer,d=l.getPaintProperty("fill-pattern"),h=d!==void 0,f=h&&d.isDataDriven;let c;if(h&&!f){const x=d.getValue(t);c=r.getMosaicItemPosition(x,!0)}const v=!h&&l.getPaintValue("fill-antialias",t);let p=!0,_=1;if(!h){const x=l.getPaintProperty("fill-color"),S=l.getPaintProperty("fill-opacity");if(!(x!=null&&x.isDataDriven)&&!(S!=null&&S.isDataDriven)){const w=l.getPaintValue("fill-color",t);_=l.getPaintValue("fill-opacity",t)*w[3],_>=1&&(p=!1)}}if(p&&o==="opaque")return;let m;n===F.HITTEST&&(m=ie(a+1));const g=l.getPaintValue("fill-translate",t),P=l.getPaintValue("fill-translate-anchor",t);(p||o!=="translucent")&&this._drawFill(e,a,l,i,g,P,h,c,f,m);const I=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&_<1;v&&o!=="opaque"&&!I&&this._drawOutline(e,a,l,i,g,P,m)}_drawFill(e,i,t,n,o,r,a,s,l,d){if(a&&!l&&s==null)return;const{context:h,displayLevel:f,state:c,drawPhase:v,painter:p,pixelRatio:_,spriteMosaic:m,requestRender:g,allowDelayedRender:P}=e,I=t.fillMaterial,x=p.vectorTilesMaterialManager,S=_>Oe?2:1,w=v===F.HITTEST,y=this._fillProgramOptions;y.id=w,y.pattern=a;const T=x.getMaterialProgram(h,I,y);if(P&&g!=null&&!T.compiled)return void g();if(h.useProgram(T),s!=null){const{page:b}=s,D=m.getPageSize(b);D!=null&&(m.bind(h,B.LINEAR,b,k),T.setUniform2fv("u_mosaicSize",D),T.setUniform1i("u_texture",k))}T.setUniformMatrix3fv("u_displayMat3",r===J.VIEWPORT?c.displayMat3:c.displayViewMat3),T.setUniform2fv("u_fillTranslation",o),T.setUniform1f("u_depth",t.z+we),w&&T.setUniform4fv("u_id",d);let M=-1;for(const b of n){if(!b.layerData.has(i))continue;b.key.level!==M&&(M=b.key.level,I.setDataUniforms(T,f,t,M,m));const D=b.layerData.get(i);if(!D.fillIndexCount)continue;D.prepareForRendering(h);const R=D.fillVAO;if(R!=null){if(h.bindVAO(R),T.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),h.setStencilFunction(q.EQUAL,b.stencilRef,255),a){const E=Math.max(2**(Math.round(f)-b.key.level),1),L=b.rangeX/(S*b.width*E);T.setUniform1f("u_patternFactor",L)}if(l){const E=D.patternMap;if(!E)continue;for(const[L,W]of E){const G=m.getPageSize(L);G!=null&&(m.bind(h,B.LINEAR,L,k),T.setUniform2fv("u_mosaicSize",G),T.setUniform1i("u_texture",k),h.drawElements(O.TRIANGLES,W[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*W[0]))}}else h.drawElements(O.TRIANGLES,D.fillIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.fillIndexStart);b.triangleCount+=D.fillIndexCount/3}}}_drawOutline(e,i,t,n,o,r,a){const{context:s,displayLevel:l,state:d,drawPhase:h,painter:f,pixelRatio:c,spriteMosaic:v,requestRender:p,allowDelayedRender:_}=e,m=t.outlineMaterial,g=f.vectorTilesMaterialManager,P=.75/c,I=h===F.HITTEST,x=this._outlineProgramOptions;x.id=I;const S=g.getMaterialProgram(s,m,x);if(_&&p!=null&&!S.compiled)return void p();s.useProgram(S),S.setUniformMatrix3fv("u_displayMat3",r===J.VIEWPORT?d.displayMat3:d.displayViewMat3),S.setUniform2fv("u_fillTranslation",o),S.setUniform1f("u_depth",t.z+we),S.setUniform1f("u_outline_width",P),I&&S.setUniform4fv("u_id",a);let w=-1;for(const y of n){if(!y.layerData.has(i))continue;y.key.level!==w&&(w=y.key.level,m.setDataUniforms(S,l,t,w,v));const T=y.layerData.get(i);if(T.prepareForRendering(s),!T.outlineIndexCount)continue;const M=T.outlineVAO;M!=null&&(s.bindVAO(M),S.setUniformMatrix3fv("u_dvsMat3",y.transforms.dvs),s.setStencilFunction(q.EQUAL,y.stencilRef,255),s.drawElements(O.TRIANGLES,T.outlineIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*T.outlineIndexStart),y.triangleCount+=T.outlineIndexCount/3)}}},Gt=class extends ne{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,state:o,drawPhase:r,painter:a,pixelRatio:s,spriteMosaic:l,styleLayerUID:d,requestRender:h,allowDelayedRender:f}=e;if(!i.some(R=>{var E;return((E=R.layerData.get(d))==null?void 0:E.lineIndexCount)??!1}))return;const c=e.styleLayer,v=c.lineMaterial,p=a.vectorTilesMaterialManager,_=c.getPaintValue("line-translate",n),m=c.getPaintValue("line-translate-anchor",n),g=c.getPaintProperty("line-pattern"),P=g!==void 0,I=P&&g.isDataDriven;let x,S;if(P&&!I){const R=g.getValue(n);x=l.getMosaicItemPosition(R)}let w=!1;if(!P){const R=c.getPaintProperty("line-dasharray");if(S=R!==void 0,w=S&&R.isDataDriven,S&&!w){const E=R.getValue(n),L=c.getDashKey(E,c.getLayoutValue("line-cap",n));x=l.getMosaicItemPosition(L)}}const y=1/s,T=r===F.HITTEST,M=this._programOptions;M.id=T,M.pattern=P,M.sdf=S;const b=p.getMaterialProgram(t,v,M);if(f&&h!=null&&!b.compiled)return void h();if(t.useProgram(b),b.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),b.setUniformMatrix3fv("u_displayMat3",m===J.VIEWPORT?o.displayMat3:o.displayViewMat3),b.setUniform2fv("u_lineTranslation",_),b.setUniform1f("u_depth",c.z),b.setUniform1f("u_antialiasing",y),T){const R=ie(d+1);b.setUniform4fv("u_id",R)}if(x&&x!=null){const{page:R}=x,E=l.getPageSize(R);E!=null&&(l.bind(t,B.LINEAR,R,k),b.setUniform2fv("u_mosaicSize",E),b.setUniform1i("u_texture",k))}let D=-1;for(const R of i){if(!R.layerData.has(d))continue;R.key.level!==D&&(D=R.key.level,v.setDataUniforms(b,n,c,D,l));const E=2**(n-D)/s;b.setUniform1f("u_zoomFactor",E);const L=R.layerData.get(d);if(!L.lineIndexCount)continue;L.prepareForRendering(t);const W=L.vao;if(W!=null){if(t.bindVAO(W),b.setUniformMatrix3fv("u_dvsMat3",R.transforms.dvs),t.setStencilFunction(q.EQUAL,R.stencilRef,255),I||w){const G=L.patternMap;if(!G)continue;for(const[Q,C]of G){const Y=l.getPageSize(Q);Y!=null&&(l.bind(t,B.LINEAR,Q,k),b.setUniform2fv("u_mosaicSize",Y),b.setUniform1i("u_texture",k),t.drawElements(O.TRIANGLES,C[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}}else t.drawElements(O.TRIANGLES,L.lineIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.lineIndexStart);R.triangleCount+=L.lineIndexCount/3}}}};const Bt=1/65536;class Jt extends ne{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=ut()}dispose(){}drawMany(e,i){const{drawPhase:t,styleLayerUID:n}=e,o=e.styleLayer;let r;t===F.HITTEST&&(r=ie(n+1)),this._drawIcons(e,o,i,r),this._drawText(e,o,i,r)}_drawIcons(e,i,t,n){const{context:o,displayLevel:r,drawPhase:a,painter:s,spriteMosaic:l,state:d,styleLayerUID:h,requestRender:f,allowDelayedRender:c}=e,v=i.iconMaterial,p=s.vectorTilesMaterialManager;let _,m=!1;for(const D of t)if(D.layerData.has(h)&&(_=D.layerData.get(h),_.iconPerPageElementsMap.size>0)){m=!0;break}if(!m)return;const g=i.getPaintValue("icon-translate",r),P=i.getPaintValue("icon-translate-anchor",r);let I=i.getLayoutValue("icon-rotation-alignment",r);I===U.AUTO&&(I=i.getLayoutValue("symbol-placement",r)===se.POINT?U.VIEWPORT:U.MAP);const x=I===U.MAP,S=i.getLayoutValue("icon-keep-upright",r)&&x,w=_.isIconSDF,y=a===F.HITTEST,T=this._iconProgramOptions;T.id=y,T.sdf=w;const M=p.getMaterialProgram(o,v,T);if(c&&f!=null&&!M.compiled)return void f();o.useProgram(M),M.setUniformMatrix3fv("u_displayViewMat3",I===U.MAP?d.displayViewMat3:d.displayMat3),M.setUniformMatrix3fv("u_displayMat3",P===J.VIEWPORT?d.displayMat3:d.displayViewMat3),M.setUniform2fv("u_iconTranslation",g),M.setUniform1f("u_depth",i.z),M.setUniform1f("u_mapRotation",pe(d.rotation)),M.setUniform1f("u_keepUpright",S?1:0),M.setUniform1f("u_level",10*r),M.setUniform1i("u_texture",k),M.setUniform1f("u_fadeDuration",ae/1e3),y&&M.setUniform4fv("u_id",n);let b=-1;for(const D of t){if(!D.layerData.has(h)||(D.key.level!==b&&(b=D.key.level,v.setDataUniforms(M,r,i,b,l)),_=D.layerData.get(h),_.iconPerPageElementsMap.size===0))continue;_.prepareForRendering(o),_.updateOpacityInfo();const R=_.iconVAO;if(R!=null){o.bindVAO(R),M.setUniformMatrix3fv("u_dvsMat3",D.transforms.dvs),M.setUniform1f("u_time",(performance.now()-_.lastOpacityUpdate)/1e3);for(const[E,L]of _.iconPerPageElementsMap)this._renderIconRange(e,M,L,E,D)}}}_renderIconRange(e,i,t,n,o){const{context:r,spriteMosaic:a}=e;this._spritesTextureSize[0]=a.getWidth(n)/4,this._spritesTextureSize[1]=a.getHeight(n)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),a.bind(r,B.LINEAR,n,k),r.setStencilTestEnabled(!0),r.setStencilFunction(q.GREATER,255,255),r.setStencilWriteMask(0),r.drawElements(O.TRIANGLES,t[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3}_drawText(e,i,t,n){const{context:o,displayLevel:r,drawPhase:a,glyphMosaic:s,painter:l,pixelRatio:d,spriteMosaic:h,state:f,styleLayerUID:c,requestRender:v,allowDelayedRender:p}=e,_=i.textMaterial,m=l.vectorTilesMaterialManager;let g,P=!1;for(const N of t)if(N.layerData.has(c)&&(g=N.layerData.get(c),g.glyphPerPageElementsMap.size>0)){P=!0;break}if(!P)return;const I=i.getPaintProperty("text-opacity");if(I&&!I.isDataDriven&&I.getValue(r)===0)return;const x=i.getPaintProperty("text-color"),S=!x||x.isDataDriven||x.getValue(r)[3]>0,w=i.getPaintProperty("text-halo-width"),y=i.getPaintProperty("text-halo-color"),T=(!w||w.isDataDriven||w.getValue(r)>0)&&(!y||y.isDataDriven||y.getValue(r)[3]>0);if(!S&&!T)return;const M=24/8;let b=i.getLayoutValue("text-rotation-alignment",r);b===U.AUTO&&(b=i.getLayoutValue("symbol-placement",r)===se.POINT?U.VIEWPORT:U.MAP);const D=b===U.MAP,R=i.getLayoutValue("text-keep-upright",r)&&D,E=a===F.HITTEST,L=.8*M/d;this._glyphTextureSize||(this._glyphTextureSize=dt(s.width/4,s.height/4));const W=i.getPaintValue("text-translate",r),G=i.getPaintValue("text-translate-anchor",r),Q=this._sdfProgramOptions;Q.id=E;const C=m.getMaterialProgram(o,_,Q);if(p&&v!=null&&!C.compiled)return void v();o.useProgram(C),C.setUniformMatrix3fv("u_displayViewMat3",b===U.MAP?f.displayViewMat3:f.displayMat3),C.setUniformMatrix3fv("u_displayMat3",G===J.VIEWPORT?f.displayMat3:f.displayViewMat3),C.setUniform2fv("u_textTranslation",W),C.setUniform1f("u_depth",i.z+Bt),C.setUniform2fv("u_mosaicSize",this._glyphTextureSize),C.setUniform1f("u_mapRotation",pe(f.rotation)),C.setUniform1f("u_keepUpright",R?1:0),C.setUniform1f("u_level",10*r),C.setUniform1i("u_texture",me),C.setUniform1f("u_antialiasingWidth",L),C.setUniform1f("u_fadeDuration",ae/1e3),E&&C.setUniform4fv("u_id",n);let Y=-1;for(const N of t){if(!N.layerData.has(c)||(N.key.level!==Y&&(Y=N.key.level,_.setDataUniforms(C,r,i,Y,h)),g=N.layerData.get(c),g.glyphPerPageElementsMap.size===0))continue;g.prepareForRendering(o),g.updateOpacityInfo();const le=g.textVAO;if(le==null)continue;o.bindVAO(le),C.setUniformMatrix3fv("u_dvsMat3",N.transforms.dvs),o.setStencilTestEnabled(!0),o.setStencilFunction(q.GREATER,255,255),o.setStencilWriteMask(0);const Ve=(performance.now()-g.lastOpacityUpdate)/1e3;C.setUniform1f("u_time",Ve),g.glyphPerPageElementsMap.forEach((Fe,qe)=>{this._renderGlyphRange(o,Fe,qe,s,C,T,S,N)})}}_renderGlyphRange(e,i,t,n,o,r,a,s){n.bind(e,B.LINEAR,t,me),r&&(o.setUniform1f("u_halo",1),e.drawElements(O.TRIANGLES,i[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),s.triangleCount+=i[1]/3),a&&(o.setUniform1f("u_halo",0),e.drawElements(O.TRIANGLES,i[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),s.triangleCount+=i[1]/3)}}const Kt={vtlBackground:qt,vtlFill:Wt,vtlLine:Gt,vtlCircle:Ht,vtlSymbol:Jt},Yt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};let jt=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let o=n.exec(t);const r=[];for(;o!=null;)r.push({path:o[1],start:o.index,length:o[0].length}),o=n.exec(t);let a=0,s="";return r.forEach(l=>{s+=t.slice(a,l.start),s+=i.has(l.path)?"":this._resolve(l.path,i),a=l.start+l.length}),s+=t.slice(a),i.set(e,s),s}_read(e){return this._readFile(e)}};function Xt(u){let e=Yt;return u.split("/").forEach(i=>{e&&(e=e[i])}),e}const Qt=new jt(Xt);function z(u){return Qt.resolveIncludes(u)}function Zt(u){const{options:e,value:i}=u;return typeof e[i]=="number"}function K(u){let e="";for(const i in u){const t=u[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Zt(t)){const{value:n,options:o,namespace:r}=t,a=r?`${r}_`:"";for(const s in o)e+=`#define ${a}${s} ${o[s].toFixed()}
`;e+=`#define ${i} ${a}${n}
`}else{const n=t.options;let o=0;for(const r in n)e+=`#define ${n[r]} ${(o++).toFixed()}
`;e+=`#define ${i} ${n[t.value]}
`}}return e}const be=u=>K({ID:u.id,PATTERN:u.pattern}),ei={shaders:u=>({vertexShader:be(u)+z("background/background.vert"),fragmentShader:be(u)+z("background/background.frag")})},Se=u=>K({ID:u.id}),ti={shaders:u=>({vertexShader:Se(u)+z("circle/circle.vert"),fragmentShader:Se(u)+z("circle/circle.frag")})},Te=u=>K({ID:u.id,PATTERN:u.pattern}),ii={shaders:u=>({vertexShader:Te(u)+z("fill/fill.vert"),fragmentShader:Te(u)+z("fill/fill.frag")})},Pe=u=>K({ID:u.id}),ni={shaders:u=>({vertexShader:Pe(u)+z("outline/outline.vert"),fragmentShader:Pe(u)+z("outline/outline.frag")})},Ie=u=>K({ID:u.id,SDF:u.sdf}),oi={shaders:u=>({vertexShader:Ie(u)+z("icon/icon.vert"),fragmentShader:Ie(u)+z("icon/icon.frag")})},Me=u=>K({ID:u.id,PATTERN:u.pattern,SDF:u.sdf}),ri={shaders:u=>({vertexShader:Me(u)+z("line/line.vert"),fragmentShader:Me(u)+z("line/line.frag")})},Re=u=>K({ID:u.id}),ai={shaders:u=>({vertexShader:Re(u)+z("text/text.vert"),fragmentShader:Re(u)+z("text/text.frag")})};let si=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const n=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(n))return this._programByKey.get(n);const o=this._getProgramTemplate(i.type),{shaders:r}=o,{vertexShader:a,fragmentShader:s}=r(t),l=i.getShaderHeader(),d=i.getShaderMain(),h=a.replace("#pragma header",l).replace("#pragma main",d),f=e.programCache.acquire(h,s,i.getAttributeLocations());return this._programByKey.set(n,f),f}_getMaterialOptionsValue(e,i){switch(e){case A.BACKGROUND:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case A.FILL:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case A.OUTLINE:return i.id?1:0;case A.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1|(t.id?1:0)}case A.ICON:{const t=i;return(t.sdf?1:0)<<1|(t.id?1:0)}case A.CIRCLE:return i.id?1:0;case A.TEXT:return i.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case A.BACKGROUND:return ei;case A.CIRCLE:return ti;case A.FILL:return ii;case A.ICON:return oi;case A.LINE:return ri;case A.OUTLINE:return ni;case A.TEXT:return ai;default:return null}}};const De=1e-6;class Ce{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new si}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=ke(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,i,t){const{context:n}=e,o=t.layers;t.backgroundBucketIds.length>0&&(e.renderPass="background",t.backgroundBucketIds.forEach(r=>this._renderStyleLayer(t.getLayerById(r),e,i,!0))),n.setBlendingEnabled(!1),n.setDepthTestEnabled(!0),n.setDepthWriteEnabled(!0),n.setDepthFunction(q.LEQUAL),e.renderPass="opaque";for(let r=o.length-1;r>=0;r--)this._renderStyleLayer(o[r],e,i,!1);n.setDepthWriteEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(oe.ONE,oe.ONE_MINUS_SRC_ALPHA,oe.ONE,oe.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let r=0;r<o.length;r++)this._renderStyleLayer(o[r],e,i,!1);n.setDepthTestEnabled(!1),n.bindVAO()}_renderStyleLayer(e,i,t,n=!1){if(!(n||e&&t.layerData.has(e.uid)))return;const o=e.getLayoutProperty("visibility");if(o&&o.getValue()===$e.NONE)return;const{renderPass:r}=i;let a;switch(e.type){case ee.BACKGROUND:if(r!=="background")return;a="vtlBackground";break;case ee.FILL:if(r!=="opaque"&&i.renderPass!=="translucent")return;a="vtlFill";break;case ee.LINE:if(r!=="translucent")return;a="vtlLine";break;case ee.CIRCLE:if(r!=="translucent")return;a="vtlCircle";break;case ee.SYMBOL:if(r!=="translucent")return;a="vtlSymbol"}const s=i.displayLevel;e.minzoom!==void 0&&e.minzoom>s+De||e.maxzoom!==void 0&&e.maxzoom<=s-De||(i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,a))}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const n=Kt[t];this._brushCache.set(t,new n)}this._brushCache.get(t).drawMany(e,[i])}}let H=class extends Tt(St(Pt)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d"}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new ht("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:u,spatialReference:e,state:i,viewingMode:t}=this.view,n=t==="local"&&!ft(e)||_t.force512VTL,o=this.layer.tileInfo.spatialReference.isGeographic,r=n?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,o?1:2),a=this._getTileInfoSupportError(r,this.layer.fullExtent);if(a!=null)return this.addResolvingPromise(Promise.reject(a));const s=mt(()=>{var _,m;return(m=(_=this.view)==null?void 0:_.basemapTerrain)==null?void 0:m.tilingSchemeLocked}).then(()=>{var I;const _=u.tilingScheme,m=_.pixelSize;let g;if(this.schemaHelper=new It(m,u.spatialReference!=null&&u.spatialReference.isGeographic),m===256){const x=this.layer.tileInfo.spatialReference.isGeographic;g=this.layer.tileInfo.getOrCreateCompatible(256,x?1:2)}else g=(I=this.view.spatialReference)!=null&&I.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const P=this._getTileInfoCompatibilityError(g,_);if(P)throw P;this.tileInfo=g});this._tileHandlerController=new AbortController;const l=this.view.resourceController;this._memCache=l.memoryController.newCache(`vtl-${this.layer.uid}`,_=>{_.release()}),this.handles.add(pt(()=>this.view.qualitySettings.memoryLimit,_=>this._memCache.maxSize=Math.ceil(_/10*1048576),gt));const d=new _e(this.layer.currentStyleInfo.style);this._tileHandler=new xe(this.layer,d,i.contentPixelRatio,this._memCache);const h=this._tileHandlerController.signal,f=li(l),c=this._tileHandler.start({signal:h,schedule:f}),v=this._tileHandler.spriteMosaic;v.then(_=>{!vt(h)&&this._tileHandler&&(this.painter=new Ce(_,this._tileHandler.glyphMosaic))}),c.then(()=>this._tileHandlerController=null),this.updatingHandles.add(()=>{var _;return{style:this.layer.currentStyleInfo.style,pixelRatio:(_=this.view.state)==null?void 0:_.contentPixelRatio}},({style:_,pixelRatio:m})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const g=new _e(_),P=new xe(this.layer,g,m,this._memCache),I=P.start({signal:this._tileHandlerController.signal,schedule:f}),x=P.spriteMosaic;I.then(()=>this._tileHandlerController=null),this.updatingHandles.addPromise(Promise.all([I,x]).then(([,S])=>{const w=this._tileHandler,y=this.painter;this.painter=new Ce(S,P.glyphMosaic),this._tileHandler=P,this.emit("data-changed"),w.destroy(),y&&y.dispose()}))});const p=Promise.all([s,c,v]);this.addResolvingPromise(p)}destroy(){this.painter=ke(this.painter),this._tileHandlerController=Ae(this._tileHandlerController),this._tileHandler=fe(this._tileHandler),this._memCache=fe(this._memCache)}get dataScaleRange(){const u=this.tileInfo.lods;return{minScale:u[0].scale,maxScale:u[u.length-1].scale}}get dataLevelRange(){const{minScale:u,maxScale:e}=this.dataScaleRange,i=this.levelRangeFromScaleRange(u,e);return i.minLevel===1&&this.tileInfo.size[0]===256&&(i.minLevel=0),i}async fetchTile(u,e,i,t){return this._tileHandler.getVectorTile(u,e,i,t)}};j([Z()],H.prototype,"layer",void 0),j([Z()],H.prototype,"tileInfo",void 0),j([Z()],H.prototype,"dataScaleRange",null),j([Z()],H.prototype,"dataLevelRange",null),j([Z()],H.prototype,"updatingProgressValue",void 0),H=j([yt("esri.views.3d.layers.VectorTileLayerView3D")],H);const qi=H;function li(u){return e=>u.immediate.schedule(e)}export{qi as default};
