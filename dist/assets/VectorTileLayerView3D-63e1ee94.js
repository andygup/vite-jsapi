import{ja as Ee,jq as He,bZ as Le,je as Ue,L as We,bf as Ae,k_ as ce,h3 as Ge,aO as Be,Y as Je,l7 as Y,k as je,G as ue,l8 as ke,l9 as Ke,la as Ye,lb as se,lc as de,ld as Xe,le as Qe,lf as Ze,df as et,$ as tt,lg as it,lh as nt,li as rt,lj as ot,lk as st,jp as G,ll as he,I as q,cW as O,c$ as at,d0 as lt,lm as ct,cH as V,ln as ut,lo as dt,lp as A,cZ as ze,is as ie,K as ht,lq as ft,lr as _t,b3 as mt,bo as pt,l as fe,e as ne,y as re,a as gt}from"./index-0b6846a6.js";import{t as $}from"./Rect-98da58d6.js";import{n as yt}from"./pbf-30015616.js";import{e as vt}from"./rasterizingUtils-312cb070.js";import{n as ae,l as U,r as B,i as $e,a as Q,b as _e}from"./StyleRepository-a9883eb0.js";import{h as xt,T as F}from"./TileInfoView-92be3e39.js";import{Z as z,_ as Oe,$ as me}from"./enums-9bbe4bf0.js";import{M as ee}from"./number-954e4ab6.js";import{c as pe}from"./GeometryUtils-0258f920.js";import{n as wt}from"./LayerView3D-c9d7b31e.js";import{n as bt}from"./TiledLayerView3D-566fa078.js";import{d as St}from"./LayerView-4bb15203.js";import"./colorUtils-c0f43caf.js";import"./TileClipper-ae6eca9e.js";let Tt=class{constructor(e,i){this._lockedSchemaPixelSize=e,this._isGCS=i}getLevelRowColumn(e){return this._isGCS?[e[0],e[1]>>1,e[2]>>1]:this._lockedSchemaPixelSize===256&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this._isGCS?e:this._lockedSchemaPixelSize===256?e>0?e-1:0:e}getShift(e,i){let t=0,n=0;return(this._lockedSchemaPixelSize===256||this._isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(n=i)),[t,n]}getScale(e){if(this._isGCS){if(this._lockedSchemaPixelSize===512)return 4}else if(this._lockedSchemaPixelSize===256&&e===0)return 1;return 2}},Z=class{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new $(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new $;let t=null,n=-1;for(let r=0;r<this._free.length;++r){const o=this._free[r];e<=o.width&&i<=o.height&&(t===null||o.y<=t.y&&o.x<=t.x)&&(t=o,n=r)}return t===null?new $:(this._free.splice(n,1),t.width<t.height?(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new $(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new $(t.x,t.y+i,e,t.height-i))),new $(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}},ge=class{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new Z(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],n=this._glyphSource,r=new Set,o=1/256;for(const a of i){const l=Math.floor(a*o);r.add(l)}const s=[];return r.forEach(a=>{if(a<=256){const l=e+a;if(this._rangePromises.has(l))s.push(this._rangePromises.get(l));else{const d=n.getRange(e,a).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,d),s.push(d)}}}),Promise.all(s).then(()=>{let a=this._glyphIndex[e];a||(a={},this._glyphIndex[e]=a);for(const l of i){const d=a[l];if(d){t[l]={sdf:!0,rect:d.rect,metrics:d.metrics,page:d.page,code:l};continue}const h=n.getGlyph(e,l);if(!h||!h.metrics)continue;const f=h.metrics;let c;if(f.width===0)c=new $(0,0,0,0);else{const p=f.width+6,_=f.height+2*3;let m=p%4?4-p%4:4,g=_%4?4-_%4:4;m===1&&(m=5),g===1&&(g=5),c=this._binPack.allocate(p+m,_+g),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new Z(this.width-4,this.height-4),c=this._binPack.allocate(p+m,_+g));const P=this._glyphData[this._currentPage],I=h.bitmap;let x,S;if(I)for(let w=0;w<_;w++){x=p*w,S=this.width*(c.y+w+1)+c.x;for(let v=0;v<p;v++)P[S+v+1]=I[x+v]}}a[l]={rect:c,metrics:f,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:c,metrics:f,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let n;for(const r in t)if(n=t[r],n.tileIDs.delete(e),n.tileIDs.size===0){const o=this._glyphData[n.page],s=n.rect;let a,l;for(let d=0;d<s.height;d++)for(a=this.width*(s.y+d)+s.x,l=0;l<s.width;l++)o[a+l]=0;delete t[r],this._dirties[n.page]=!0}}}bind(e,i,t,n=0){if(!this._textures[t]){const o=new Ee;o.pixelFormat=He.ALPHA,o.wrapMode=Le.CLAMP_TO_EDGE,o.width=this.width,o.height=this.height,this._textures[t]=new Ue(e,o,new Uint8Array(this.width*this.height))}const r=this._textures[t];r.setSamplingMode(i),this._dirties[t]&&r.setData(this._glyphData[t]),e.bindTexture(r,n),this._dirties[t]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}},oe=class{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const i=e.getMessage();for(;i.next();)switch(i.tag()){case 3:{const t=i.getMessage();let n,r,o,s,a,l,d;for(;t.next();)switch(t.tag()){case 1:n=t.getUInt32();break;case 2:r=t.getBytes();break;case 3:o=t.getUInt32();break;case 4:s=t.getUInt32();break;case 5:a=t.getSInt32();break;case 6:l=t.getSInt32();break;case 7:d=t.getUInt32();break;default:t.skip()}t.release(),n&&(this._metrics[n]={width:o,height:s,left:a,top:l,advance:d},this._bitmaps[n]=r);break}default:i.skip()}i.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}},Pt=class{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}},ye=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const n=256*i,r=n+255;if(this._baseURL){const o=this._baseURL.replace("{fontstack}",e).replace("{range}",n+"-"+r);return We(o,{responseType:"array-buffer"}).then(s=>{t.addRange(i,new oe(new yt(new Uint8Array(s.data),new DataView(s.data))))}).catch(()=>{t.addRange(i,new oe)})}return t.addRange(i,new oe),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const n=Math.floor(i/256);if(n>256)return;const r=t.getRange(n);return r?{metrics:r.getMetrics(i),bitmap:r.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new Pt),i}};const It="dasharray-";let ve=class Ne{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new Z(e-4,i-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new Z(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),n=new Uint32Array(i*t);this._mosaicsData[0]=n,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,n,r=this._mosaicRects[e];if(r)return r;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(It)?([t,n]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!t||!t.width||!t.height||t.width<0||t.height<0))return null;const o=t.width,s=t.height,[a,l,d]=this._allocateImage(o,s);return a.width<=0?null:(this._copy(a,t,l,d,i,n),r={rect:a,width:o,height:s,sdf:t.sdf,simplePattern:!1,pixelRatio:t.pixelRatio,page:l},this._mosaicRects[e]=r,r)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),n=t&&t.rect;if(!n)return null;n.width=t.width,n.height=t.height;const r=t.width,o=t.height,s=2;return{tl:[n.x+s,n.y+s],br:[n.x+s+r,n.y+s+o],page:t.page}}bind(e,i,t=0,n=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;if(!this._textures[t]){const o=new Ee;o.wrapMode=Le.CLAMP_TO_EDGE,o.width=this._size[t][0],o.height=this._size[t][1],this._textures[t]=new Ue(e,o,new Uint8Array(this._mosaicsData[t].buffer))}const r=this._textures[t];r.setSamplingMode(i),this._dirties[t]&&r.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(r,n),this._dirties[t]=!1}static _copyBits(e,i,t,n,r,o,s,a,l,d,h){let f=n*i+t,c=a*o+s;if(h){c-=o;for(let y=-1;y<=d;y++,f=((y+d)%d+n)*i+t,c+=o)for(let p=-1;p<=l;p++)r[c+p]=e[f+(p+l)%l]}else for(let y=0;y<d;y++){for(let p=0;p<l;p++)r[c+p]=e[f+p];f+=i,c+=o}}_copy(e,i,t,n,r,o){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const s=new Uint32Array(o?o.buffer:this._sprites.image.buffer),a=this._mosaicsData[t];a&&s||console.error("Source or target images are uninitialized!");const l=2,d=o?i.width:this._sprites.width;Ne._copyBits(s,d,i.x,i.y,a,n[0],e.x+l,e.y+l,i.width,i.height,r),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const s=new $(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[e,i]]}let n=e%4?4-e%4:4,r=i%4?4-i%4:4;n===1&&(n=5),r===1&&(r=5);const o=this._binPack.allocate(e+n,i+r);return o.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new Z(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[o,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const n=t[1].split(",").map(Number),r=e.slice(e.lastIndexOf("-")+1),[o,s,a]=vt(n,r);return[{x:0,y:0,width:s,height:a,sdf:!0,pixelRatio:1},new Uint8Array(o.buffer)]}},Mt=class{constructor(e,i,t){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){var e,i;(e=this._connection)==null||e.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=Ae(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&((i=this._startOptionsInputSignal)==null||i.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);const i=this._layer.currentStyleInfo.glyphsUrl,t=new ye(i?ce(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new ge(1024,1024,t),this._broadcastPromise=Ge("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(n=>{var r;if(this._layer&&((r=this._connection)==null||r.close(),this._connection=n,this._layer&&!this._connection.closed)){const o=n.broadcast("setStyle",this._layer.currentStyleInfo.style,e);Promise.all(o).catch(s=>Be(s))}})}_requestSprite(e){var o,s;(o=this._spriteSourceAbortController)==null||o.abort();const i=new AbortController;this._spriteSourceAbortController=i;const t=e==null?void 0:e.signal;this._inputSignalEventListener&&((s=this._startOptionsInputSignal)==null||s.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,t&&(this._inputSignalEventListener=Rt(i),t.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:n}=i,r={...e,signal:n};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,r),this._spriteSourcePromise.then(a=>{Je(n),this._spriteMosaic=new ve(1024,1024,250),this._spriteMosaic.setSpriteSource(a)})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new ve(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,i}async setStyle(e,i){await this._broadcastPromise,this._styleRepository=e,this._requestSprite();const t=new ye(this._layer.currentStyleInfo.glyphsUrl?ce(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new ge(1024,1024,t),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",i)),this._broadcastPromise}fetchTileData(e,i){return this._getRefKeys(e,i).then(t=>{const n=this._layer.sourceNameToSource,r=[];for(const o in n)r.push(o);return this._getSourcesData(r,t,i)})}parseTileData(e,i){const t=e&&e.data;if(!t)return Promise.resolve(null);const{sourceName2DataAndRefKey:n,transferList:r}=t;return Object.keys(n).length===0?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:n,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:r}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const n=Y.pool.acquire(e.id),r=this._layer.sourceNameToSource[i],{level:o,row:s,col:a}=n;Y.pool.release(n);try{return{protobuff:await r.requestTile(o,s,a,t),sourceName:i}}catch(l){if(je(l))throw l;return{protobuff:null,sourceName:i}}}_getRefKeys(e,i){const t=this._layer.sourceNameToSource,n=new Array;for(const r in t){const o=t[r].getRefKey(e,i);n.push(o)}return ue(n)}_getSourcesData(e,i,t){const n=[];for(let r=0;r<i.length;r++)if(i[r].value==null||e[r]==null)n.push(null);else{const o=this._getTilePayload(i[r].value,e[r],t);n.push(o)}return ue(n).then(r=>{const o={},s=[];for(let a=0;a<r.length;a++){const l=r[a].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const d=i[a].value.id;o[l.sourceName]={refKey:d,protobuff:l.protobuff},s.push(l.protobuff)}}return{sourceName2DataAndRefKey:o,transferList:s}})}};function Rt(u){return()=>u.abort()}function Dt(u,e,i,t,n,r){const{iconRotationAlignment:o,textRotationAlignment:s,iconTranslate:a,iconTranslateAnchor:l,textTranslate:d,textTranslateAnchor:h}=t;let f=0;for(const c of u.colliders){const[y,p]=c.partIndex===0?a:d,_=c.partIndex===0?l:h,m=c.minLod<=r&&r<=c.maxLod;f+=m?0:1,c.enabled=m,c.xScreen=c.xTile*n[0]+c.yTile*n[3]+n[6],c.yScreen=c.xTile*n[1]+c.yTile*n[4]+n[7],_===B.MAP?(c.xScreen+=i*y-e*p,c.yScreen+=e*y+i*p):(c.xScreen+=y,c.yScreen+=p),U.VIEWPORT===(c.partIndex===0?o:s)?(c.dxScreen=c.dxPixels,c.dyScreen=c.dyPixels):(c.dxScreen=i*(c.dxPixels+c.width/2)-e*(c.dyPixels+c.height/2)-c.width/2,c.dyScreen=e*(c.dxPixels+c.width/2)+i*(c.dyPixels+c.height/2)-c.height/2)}u.colliders.length>0&&f===u.colliders.length&&(u.unique.show=!1)}let Ct=class{constructor(e,i,t,n,r,o){this._symbols=e,this._styleRepository=n,this._zoom=r,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new ke(i,t,Ke),this._si=Math.sin(Math.PI*o/180),this._co=Math.cos(Math.PI*o/180);for(const s of e)for(const a of s.symbols)this._allNeededMatrices.has(a.tile)||this._allNeededMatrices.set(a.tile,Ye(a.tile.transforms.tileUnitsToPixels))}work(e){const i=this._gridIndex;function t(r){const o=r.xScreen+r.dxScreen,s=r.yScreen+r.dyScreen,a=o+r.width,l=s+r.height,[d,h,f,c]=i.getCellSpan(o,s,a,l);for(let y=h;y<=c;y++)for(let p=d;p<=f;p++){const _=i.cells[y][p];for(const m of _){const g=m.xScreen+m.dxScreen,P=m.yScreen+m.dyScreen,I=g+m.width,x=P+m.height;if(!(a<g||o>I||l<P||s>x))return!0}}return!1}const n=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const r=this._symbols[this._currentLayerCursor],o=this._getProperties(r.styleLayerUID);for(;this._currentSymbolCursor<r.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-n>e)return!1;const s=r.symbols[this._currentSymbolCursor];if(!s.unique.show)continue;Dt(s,this._si,this._co,o,this._allNeededMatrices.get(s.tile),this._zoom);const a=s.unique;if(!a.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:d,textAllowOverlap:h,textIgnorePlacement:f}=o;for(const c of s.colliders){if(!c.enabled)continue;const y=a.parts[c.partIndex];y.show&&!(c.partIndex?h:l)&&t(c)&&(c.hard?a.show=!1:y.show=!1)}if(a.show)for(const c of s.colliders){if(!c.enabled||(c.partIndex?f:d)||!a.parts[c.partIndex].show)continue;const y=c.xScreen+c.dxScreen,p=c.yScreen+c.dyScreen,_=y+c.width,m=p+c.height,[g,P,I,x]=this._gridIndex.getCellSpan(y,p,_,m);for(let S=P;S<=x;S++)for(let w=g;w<=I;w++)this._gridIndex.cells[S][w].push(c)}}}return!0}_getProperties(e){const i=this._styleProps.get(e);if(i)return i;const t=this._zoom,n=this._styleRepository.getStyleLayerByUID(e),r=n.getLayoutValue("symbol-placement",t)!==ae.POINT;let o=n.getLayoutValue("icon-rotation-alignment",t);o===U.AUTO&&(o=r?U.MAP:U.VIEWPORT);let s=n.getLayoutValue("text-rotation-alignment",t);s===U.AUTO&&(s=r?U.MAP:U.VIEWPORT);const a=n.getPaintValue("icon-translate",t),l=n.getPaintValue("icon-translate-anchor",t),d=n.getPaintValue("text-translate",t),h=n.getPaintValue("text-translate-anchor",t),f={iconAllowOverlap:n.getLayoutValue("icon-allow-overlap",t),iconIgnorePlacement:n.getLayoutValue("icon-ignore-placement",t),textAllowOverlap:n.getLayoutValue("text-allow-overlap",t),textIgnorePlacement:n.getLayoutValue("text-ignore-placement",t),iconRotationAlignment:o,textRotationAlignment:s,iconTranslateAnchor:l,iconTranslate:a,textTranslateAnchor:h,textTranslate:d};return this._styleProps.set(e,f),f}};function Et(u,e){if(u.priority-e.priority)return u.priority-e.priority;const i=u.tile.key,t=e.tile.key;return i.world-t.world?i.world-t.world:i.level-t.level?i.level-t.level:i.row-t.row?i.row-t.row:i.col-t.col?i.col-t.col:u.xTile-e.xTile?u.xTile-e.xTile:u.yTile-e.yTile}let Lt=class{get running(){return this._running}constructor(e,i,t,n,r,o){this._visibleTiles=e,this._symbolRepository=i,this._createCollisionJob=t,this._assignTileSymbolsOpacity=n,this._symbolLayerSorter=r,this._isLayerVisible=o,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,i){this._screenWidth===e&&this._screenHeight===i||this.restart(),this._screenWidth=e,this._screenHeight=i}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const i=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const i=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const i=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let a=0;a<e.length;a++){const l=e[a];for(let d=0;d<l.uniqueSymbols.length;d++){const h=l.uniqueSymbols[d];for(const f of h.tileSymbols)f.selectedForRendering=!1}}const i=[];let t=0,n=0;const r=this._isLayerVisible;function o(a){let l;const d=performance.now();for(;n<e.length;n++,t=0){const h=e[n],f=h.styleLayerUID;if(!r(f)){i[n]||(i[n]={styleLayerUID:f,symbols:[]});continue}i[n]=i[n]||{styleLayerUID:f,symbols:[]};const c=i[n];for(;t<h.uniqueSymbols.length;t++){if(l=h.uniqueSymbols[t],t%100==99&&performance.now()-d>a)return!1;let y=null,p=!1,_=!1;for(const m of l.tileSymbols)if(!_||!p){const g=m.tile;(!y||g.isCoverage||g.neededForCoverage&&!p)&&(y=m,(g.neededForCoverage||g.isCoverage)&&(_=!0),g.isCoverage&&(p=!0))}if(y.selectedForRendering=!0,_){c.symbols.push(y),l.show=!0;for(const m of l.parts)m.show=!0}else l.show=!1}}for(const h of i)h.symbols.sort(Et);return!0}const s=this._symbolLayerSorter;return{work:o,get sortedSymbols(){return i.sort(s)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,i=this._visibleTiles;let t=0;function n(r,o){const s=r.symbols;for(const[a,l]of s)Ut(l,o);e(r,o);for(const a of r.childrenTiles)n(a,o)}return{work(r){const o=performance.now();for(;t<i.length;t++){if(performance.now()-o>r)return!1;const s=i[t];s.parentTile==null&&n(s,performance.now())}return!0}}}};function Ut(u,e){for(const i of u){const t=i.unique;for(const n of t.parts){const r=n.targetOpacity>.5?1:-1;n.startOpacity+=r*((e-n.startTime)/se),n.startOpacity=Math.min(Math.max(n.startOpacity,0),1),n.startTime=e,n.targetOpacity=t.show&&n.show?1:0}}}const At=32,kt=8,zt=64;let $t=class{constructor(e,i,t){this.tileCoordRange=e,this._visibleTiles=i,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return this._uniqueSymbolLayerArray==null&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,i){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const n=new Map;if(i)for(const s of i)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));else for(const[s,a]of e.layerData)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));this._removeSymbols(n);const r=e.symbols,o=new Map;for(const[s,a]of r){let l=a.length;if(l>=At){let d=this.tileCoordRange;do d/=2,l/=4;while(l>kt&&d>zt);const h=new ke(this.tileCoordRange,this.tileCoordRange,d);o.set(s,{flat:a,index:h}),t.symbols.set(s,{flat:a,index:h});for(const f of a)h.getCell(f.xTile,f.yTile).push(f)}else o.set(s,{flat:a}),t.symbols.set(s,{flat:a})}this._addSymbols(e.key,r)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[i,t]of this._tiles){const n=new Map;for(const r of e)t.symbols.has(r)&&(n.set(r,t.symbols.get(r)),t.symbols.delete(r));this._removeSymbols(n),t.symbols.size===0&&this._tiles.delete(i)}}removeTile(e){this._uniqueSymbolLayerArray=null;const i=this._tiles.get(e.id);if(!i)return;const t=new Map;for(const[n,r]of e.symbols)i.symbols.has(n)&&(t.set(n,i.symbols.get(n)),i.symbols.delete(n));this._removeSymbols(t),i.symbols.size===0&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[i,{flat:t}]of e)for(const n of t){const r=n.unique,o=r.tileSymbols,s=o.length-1;for(let a=0;a<s;a++)if(o[a]===n){o[a]=o[s];break}if(o.length=s,s===0){const a=this._uniqueSymbolsReferences.get(i);a.delete(r),a.size===0&&this._uniqueSymbolsReferences.delete(i)}n.unique=null}}_addSymbols(e,i){if(i.size===0)return;const t=this._visibleTiles;for(const n of t)n.parentTile||n.key.world!==e.world||n.key.level===e.level&&!n.key.equals(e)||this._matchSymbols(n,e,i);for(const[n,r]of i)for(const o of r)if(o.unique==null){const s=this._createUnique();o.unique=s,s.tileSymbols.push(o);let a=this._uniqueSymbolsReferences.get(n);a||(a=new Set,this._uniqueSymbolsReferences.set(n,a)),a.add(s)}}_matchSymbols(e,i,t){if(e.key.level>i.level){const r=e.key.level-i.level;if(e.key.row>>r!==i.row||e.key.col>>r!==i.col)return}if(i.level>e.key.level){const r=i.level-e.key.level;if(i.row>>r!==e.key.row||i.col>>r!==e.key.col)return}if(i.equals(e.key)){for(const r of e.childrenTiles)this._matchSymbols(r,i,t);return}const n=new Map;for(const[r,o]of t){const s=[];for(const h of o){const f=de(this.tileCoordRange,h.xTile,i.level,i.col,e.key.level,e.key.col),c=de(this.tileCoordRange,h.yTile,i.level,i.row,e.key.level,e.key.row);f>=0&&f<this.tileCoordRange&&c>=0&&c<this.tileCoordRange&&s.push({symbol:h,xTransformed:f,yTransformed:c})}const a=[],l=e.key.level<i.level?1:1<<e.key.level-i.level,d=this._tiles.get(e.id).symbols.get(r);if(d){const h=d.flat;for(const f of s){let c,y=!1;const p=f.xTransformed,_=f.yTransformed;c=d.index!=null?d.index.getCell(p,_):h;const m=f.symbol,g=m.hash;for(const P of c)if(g===P.hash&&Math.abs(p-P.xTile)<=l&&Math.abs(_-P.yTile)<=l){const I=P.unique;m.unique=I,I.tileSymbols.push(m),y=!0;break}y||a.push(m)}}a.length>0&&n.set(r,a)}for(const r of e.childrenTiles)this._matchSymbols(r,i,n)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,i=new Array(e.size);let t,n=0;for(const[r,o]of e){const s=new Array(o.size);t=0;for(const a of o)s[t++]=a;i[n]={styleLayerUID:r,uniqueSymbols:s},n++}return i}};function Ot(u,e){const i=[],t=new $t(4096,i,()=>{const r=new Xe;return r.show=!1,r.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),r.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),r}),n=new Lt(i,t,(r,o,s)=>new Ct(r,o,s,u.styleRepository,u.key.level,0),(r,o)=>{Qe(r,o,!1)},()=>0,r=>{const o=e.getStyleLayerByUID(r).getLayoutProperty("visibility");return!o||o.getValue()!==$e.NONE});i.push(u),t.add(u),n.setScreenSize(512,512),n.continue(1/0)}let Nt=class extends xt{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Y.pool.acquire(e),t=i.level===0?null:Y.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Y.pool.release(i),t}getTileCoverage(e,i,t){const n=super.getTileCoverage(e,i,t);if(!n)return n;const r=1<<n.lodInfo.level;return n.spans=n.spans.filter(o=>o.row>=0&&o.row<r),n}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,n;for(let r=0;r<i.length-1;r++)if(n=i[r+1],e>n.scale)return t=i[r],t.level+(t.scale-e)/(t.scale-n.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],n=this.tileInfo.spatialReference;i=Ze.create({size:t,spatialReference:n}).lods.map(r=>({level:r.level,resolution:r.resolution,scale:r.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}},xe=class extends Mt{constructor(e,i,t,n){super(e,i,t),this._memCache=n,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new Nt(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i,t,n){const r=new Y(e,i,t,0);let o=this._memCache.get(r.id);if(o!=null)return o.retain(),o;const s=await this._getVectorTileData(r);if(et(n),!this._layer)return null;if(o=this._memCache.get(r.id),o!=null)return o.retain(),o;const a=this._layer.tileInfo.getTileBounds(tt(),r),l=this._tileInfoView.getTileResolution(e);return o=new it(r,l,a[0],a[3],512,512,this._styleRepository,this._memCache),s!=null?(o.setData(s),o.retain(),this._memCache.put(r.id,o,o.memoryUsage*o.referenced,nt)):o.setData(null),o.neededForCoverage=!0,o.transforms.tileUnitsToPixels=rt(1/8,0,0,0,1/8,0,0,0,1),Ot(o,this._styleRepository),o}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,n={signal:t.signal},r=this._getParsedVectorTileData(e,n).then(o=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),o)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,r),this._ongoingRequestToController.set(i,t),r}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}},te=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const n of i)n.visible&&this.draw(e,n,t)}},Vt=class extends te{constructor(){super(...arguments),this._color=ot(1,0,0,1),this._patternMatrix=st(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:n,styleLayerUID:r,requestRender:o,allowDelayedRender:s}=e;this._loadWGLResources(e);const a=e.displayLevel,l=e.styleLayer,d=l.backgroundMaterial,h=n.vectorTilesMaterialManager,f=l.getPaintValue("background-color",a),c=l.getPaintValue("background-opacity",a),y=l.getPaintValue("background-pattern",a),p=y!==void 0,_=f[3]*c,m=1|window.devicePixelRatio,g=e.spriteMosaic;let P,I;const x=m>Oe?2:1,S=e.drawPhase===F.HITTEST,w=this._programOptions;w.id=S,w.pattern=p;const v=h.getMaterialProgram(t,d,w);if(!s||o==null||v.compiled){if(t.bindVAO(this._vao),t.useProgram(v),p){const T=g.getMosaicItemPosition(y,!0);if(T!=null){const{tl:M,br:b,page:D}=T;P=b[0]-M[0],I=b[1]-M[1];const R=g.getPageSize(D);R!=null&&(g.bind(t,G.LINEAR,D,z),v.setUniform4f("u_tlbr",M[0],M[1],b[0],b[1]),v.setUniform2fv("u_mosaicSize",R),v.setUniform1i("u_texture",z))}v.setUniform1f("u_opacity",c)}else this._color[0]=_*f[0],this._color[1]=_*f[1],this._color[2]=_*f[2],this._color[3]=_,v.setUniform4fv("u_color",this._color);if(v.setUniform1f("u_depth",l.z||0),S){const T=ee(r+1);v.setUniform4fv("u_id",T)}for(const T of i){if(v.setUniform1f("u_coord_range",T.rangeX),v.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),p){const M=Math.max(2**(Math.round(a)-T.key.level),1),b=x*T.width*M,D=b/he(P),R=b/he(I);this._patternMatrix[0]=D,this._patternMatrix[4]=R,v.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(q.EQUAL,0,255),t.drawArrays(O.TRIANGLE_STRIP,0,4)}}else o()}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,n=t.backgroundMaterial,r=new Int8Array([0,0,1,0,0,1,1,1]),o=at.createVertex(i,lt.STATIC_DRAW,r),s=new ct(i,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:o});this._vao=s}},Ft=class extends te{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,requiredLevel:r,state:o,drawPhase:s,painter:a,spriteMosaic:l,styleLayerUID:d,requestRender:h,allowDelayedRender:f}=e;if(!i.some(w=>{var v;return((v=w.layerData.get(d))==null?void 0:v.circleIndexCount)??!1}))return;const c=e.styleLayer,y=c.circleMaterial,p=a.vectorTilesMaterialManager,_=1.2,m=c.getPaintValue("circle-translate",n),g=c.getPaintValue("circle-translate-anchor",n),P=s===F.HITTEST,I=this._programOptions;I.id=P;const x=p.getMaterialProgram(t,y,I);if(f&&h!=null&&!x.compiled)return void h();t.useProgram(x),x.setUniformMatrix3fv("u_displayMat3",g===B.VIEWPORT?o.displayMat3:o.displayViewMat3),x.setUniform2fv("u_circleTranslation",m),x.setUniform1f("u_depth",c.z),x.setUniform1f("u_antialiasingWidth",_);let S=-1;if(P){const w=ee(d+1);x.setUniform4fv("u_id",w)}for(const w of i){if(!w.layerData.has(d))continue;w.key.level!==S&&(S=w.key.level,y.setDataUniforms(x,n,c,S,l));const v=w.layerData.get(d);if(!v.circleIndexCount)continue;v.prepareForRendering(t);const T=v.circleVertexArrayObject;T!=null&&(t.bindVAO(T),x.setUniformMatrix3fv("u_dvsMat3",w.transforms.dvs),r!==w.key.level?t.setStencilFunction(q.EQUAL,w.stencilRef,255):t.setStencilFunction(q.GREATER,255,255),t.drawElements(O.TRIANGLES,v.circleIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*v.circleIndexStart),w.triangleCount+=v.circleIndexCount/3)}}};const we=1/65536;let qt=class extends te{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,drawPhase:n,renderPass:r,spriteMosaic:o,styleLayerUID:s}=e;let a=!1;for(const x of i)if(x.layerData.has(s)){const S=x.layerData.get(s);if(S.fillIndexCount>0||S.outlineIndexCount>0){a=!0;break}}if(!a)return;const l=e.styleLayer,d=l.getPaintProperty("fill-pattern"),h=d!==void 0,f=h&&d.isDataDriven;let c;if(h&&!f){const x=d.getValue(t);c=o.getMosaicItemPosition(x,!0)}const y=!h&&l.getPaintValue("fill-antialias",t);let p=!0,_=1;if(!h){const x=l.getPaintProperty("fill-color"),S=l.getPaintProperty("fill-opacity");if(!(x!=null&&x.isDataDriven)&&!(S!=null&&S.isDataDriven)){const w=l.getPaintValue("fill-color",t);_=l.getPaintValue("fill-opacity",t)*w[3],_>=1&&(p=!1)}}if(p&&r==="opaque")return;let m;n===F.HITTEST&&(m=ee(s+1));const g=l.getPaintValue("fill-translate",t),P=l.getPaintValue("fill-translate-anchor",t);(p||r!=="translucent")&&this._drawFill(e,s,l,i,g,P,h,c,f,m);const I=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&_<1;y&&r!=="opaque"&&!I&&this._drawOutline(e,s,l,i,g,P,m)}_drawFill(e,i,t,n,r,o,s,a,l,d){if(s&&!l&&a==null)return;const{context:h,displayLevel:f,state:c,drawPhase:y,painter:p,pixelRatio:_,spriteMosaic:m,requestRender:g,allowDelayedRender:P}=e,I=t.fillMaterial,x=p.vectorTilesMaterialManager,S=_>Oe?2:1,w=y===F.HITTEST,v=this._fillProgramOptions;v.id=w,v.pattern=s;const T=x.getMaterialProgram(h,I,v);if(P&&g!=null&&!T.compiled)return void g();if(h.useProgram(T),a!=null){const{page:b}=a,D=m.getPageSize(b);D!=null&&(m.bind(h,G.LINEAR,b,z),T.setUniform2fv("u_mosaicSize",D),T.setUniform1i("u_texture",z))}T.setUniformMatrix3fv("u_displayMat3",o===B.VIEWPORT?c.displayMat3:c.displayViewMat3),T.setUniform2fv("u_fillTranslation",r),T.setUniform1f("u_depth",t.z+we),w&&T.setUniform4fv("u_id",d);let M=-1;for(const b of n){if(!b.layerData.has(i))continue;b.key.level!==M&&(M=b.key.level,I.setDataUniforms(T,f,t,M,m));const D=b.layerData.get(i);if(!D.fillIndexCount)continue;D.prepareForRendering(h);const R=D.fillVertexArrayObject;if(R!=null){if(h.bindVAO(R),T.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),h.setStencilFunction(q.EQUAL,b.stencilRef,255),s){const E=Math.max(2**(Math.round(f)-b.key.level),1),L=b.rangeX/(S*b.width*E);T.setUniform1f("u_patternFactor",L)}if(l){const E=D.patternMap;if(!E)continue;for(const[L,H]of E){const W=m.getPageSize(L);W!=null&&(m.bind(h,G.LINEAR,L,z),T.setUniform2fv("u_mosaicSize",W),T.setUniform1i("u_texture",z),h.drawElements(O.TRIANGLES,H[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*H[0]))}}else h.drawElements(O.TRIANGLES,D.fillIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.fillIndexStart);b.triangleCount+=D.fillIndexCount/3}}}_drawOutline(e,i,t,n,r,o,s){const{context:a,displayLevel:l,state:d,drawPhase:h,painter:f,pixelRatio:c,spriteMosaic:y,requestRender:p,allowDelayedRender:_}=e,m=t.outlineMaterial,g=f.vectorTilesMaterialManager,P=.75/c,I=h===F.HITTEST,x=this._outlineProgramOptions;x.id=I;const S=g.getMaterialProgram(a,m,x);if(_&&p!=null&&!S.compiled)return void p();a.useProgram(S),S.setUniformMatrix3fv("u_displayMat3",o===B.VIEWPORT?d.displayMat3:d.displayViewMat3),S.setUniform2fv("u_fillTranslation",r),S.setUniform1f("u_depth",t.z+we),S.setUniform1f("u_outline_width",P),I&&S.setUniform4fv("u_id",s);let w=-1;for(const v of n){if(!v.layerData.has(i))continue;v.key.level!==w&&(w=v.key.level,m.setDataUniforms(S,l,t,w,y));const T=v.layerData.get(i);if(T.prepareForRendering(a),!T.outlineIndexCount)continue;const M=T.outlineVertexArrayObject;M!=null&&(a.bindVAO(M),S.setUniformMatrix3fv("u_dvsMat3",v.transforms.dvs),a.setStencilFunction(q.EQUAL,v.stencilRef,255),a.drawElements(O.TRIANGLES,T.outlineIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*T.outlineIndexStart),v.triangleCount+=T.outlineIndexCount/3)}}},Ht=class extends te{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,state:r,drawPhase:o,painter:s,pixelRatio:a,spriteMosaic:l,styleLayerUID:d,requestRender:h,allowDelayedRender:f}=e;if(!i.some(R=>{var E;return((E=R.layerData.get(d))==null?void 0:E.lineIndexCount)??!1}))return;const c=e.styleLayer,y=c.lineMaterial,p=s.vectorTilesMaterialManager,_=c.getPaintValue("line-translate",n),m=c.getPaintValue("line-translate-anchor",n),g=c.getPaintProperty("line-pattern"),P=g!==void 0,I=P&&g.isDataDriven;let x,S;if(P&&!I){const R=g.getValue(n);x=l.getMosaicItemPosition(R)}let w=!1;if(!P){const R=c.getPaintProperty("line-dasharray");if(S=R!==void 0,w=S&&R.isDataDriven,S&&!w){const E=R.getValue(n),L=c.getDashKey(E,c.getLayoutValue("line-cap",n));x=l.getMosaicItemPosition(L)}}const v=1/a,T=o===F.HITTEST,M=this._programOptions;M.id=T,M.pattern=P,M.sdf=S;const b=p.getMaterialProgram(t,y,M);if(f&&h!=null&&!b.compiled)return void h();if(t.useProgram(b),b.setUniformMatrix3fv("u_displayViewMat3",r.displayViewMat3),b.setUniformMatrix3fv("u_displayMat3",m===B.VIEWPORT?r.displayMat3:r.displayViewMat3),b.setUniform2fv("u_lineTranslation",_),b.setUniform1f("u_depth",c.z),b.setUniform1f("u_antialiasing",v),T){const R=ee(d+1);b.setUniform4fv("u_id",R)}if(x&&x!=null){const{page:R}=x,E=l.getPageSize(R);E!=null&&(l.bind(t,G.LINEAR,R,z),b.setUniform2fv("u_mosaicSize",E),b.setUniform1i("u_texture",z))}let D=-1;for(const R of i){if(!R.layerData.has(d))continue;R.key.level!==D&&(D=R.key.level,y.setDataUniforms(b,n,c,D,l));const E=2**(n-D)/a;b.setUniform1f("u_zoomFactor",E);const L=R.layerData.get(d);if(!L.lineIndexCount)continue;L.prepareForRendering(t);const H=L.lineVertexArrayObject;if(H!=null){if(t.bindVAO(H),b.setUniformMatrix3fv("u_dvsMat3",R.transforms.dvs),t.setStencilFunction(q.EQUAL,R.stencilRef,255),I||w){const W=L.patternMap;if(!W)continue;for(const[X,C]of W){const j=l.getPageSize(X);j!=null&&(l.bind(t,G.LINEAR,X,z),b.setUniform2fv("u_mosaicSize",j),b.setUniform1i("u_texture",z),t.drawElements(O.TRIANGLES,C[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}}else t.drawElements(O.TRIANGLES,L.lineIndexCount,V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.lineIndexStart);R.triangleCount+=L.lineIndexCount/3}}}};const Wt=1/65536;let Gt=class extends te{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=ut()}dispose(){}drawMany(e,i){const{drawPhase:t,styleLayerUID:n}=e,r=e.styleLayer;let o;t===F.HITTEST&&(o=ee(n+1)),this._drawIcons(e,r,i,o),this._drawText(e,r,i,o)}_drawIcons(e,i,t,n){const{context:r,displayLevel:o,drawPhase:s,painter:a,spriteMosaic:l,state:d,styleLayerUID:h,requestRender:f,allowDelayedRender:c}=e,y=i.iconMaterial,p=a.vectorTilesMaterialManager;let _,m=!1;for(const D of t)if(D.layerData.has(h)&&(_=D.layerData.get(h),_.iconPerPageElementsMap.size>0)){m=!0;break}if(!m)return;const g=i.getPaintValue("icon-translate",o),P=i.getPaintValue("icon-translate-anchor",o);let I=i.getLayoutValue("icon-rotation-alignment",o);I===U.AUTO&&(I=i.getLayoutValue("symbol-placement",o)===ae.POINT?U.VIEWPORT:U.MAP);const x=I===U.MAP,S=i.getLayoutValue("icon-keep-upright",o)&&x,w=_.isIconSDF,v=s===F.HITTEST,T=this._iconProgramOptions;T.id=v,T.sdf=w;const M=p.getMaterialProgram(r,y,T);if(c&&f!=null&&!M.compiled)return void f();r.useProgram(M),M.setUniformMatrix3fv("u_displayViewMat3",I===U.MAP?d.displayViewMat3:d.displayMat3),M.setUniformMatrix3fv("u_displayMat3",P===B.VIEWPORT?d.displayMat3:d.displayViewMat3),M.setUniform2fv("u_iconTranslation",g),M.setUniform1f("u_depth",i.z),M.setUniform1f("u_mapRotation",pe(d.rotation)),M.setUniform1f("u_keepUpright",S?1:0),M.setUniform1f("u_level",10*o),M.setUniform1i("u_texture",z),M.setUniform1f("u_fadeDuration",se/1e3),v&&M.setUniform4fv("u_id",n);let b=-1;for(const D of t){if(!D.layerData.has(h)||(D.key.level!==b&&(b=D.key.level,y.setDataUniforms(M,o,i,b,l)),_=D.layerData.get(h),_.iconPerPageElementsMap.size===0))continue;_.prepareForRendering(r),_.updateOpacityInfo();const R=_.iconVertexArrayObject;if(R!=null){r.bindVAO(R),M.setUniformMatrix3fv("u_dvsMat3",D.transforms.dvs),M.setUniform1f("u_time",(performance.now()-_.lastOpacityUpdate)/1e3);for(const[E,L]of _.iconPerPageElementsMap)this._renderIconRange(e,M,L,E,D)}}}_renderIconRange(e,i,t,n,r){const{context:o,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(n)/4,this._spritesTextureSize[1]=s.getHeight(n)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(o,G.LINEAR,n,z),o.setStencilTestEnabled(!0),o.setStencilFunction(q.GREATER,255,255),o.setStencilWriteMask(0),o.drawElements(O.TRIANGLES,t[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),r.triangleCount+=t[1]/3}_drawText(e,i,t,n){const{context:r,displayLevel:o,drawPhase:s,glyphMosaic:a,painter:l,pixelRatio:d,spriteMosaic:h,state:f,styleLayerUID:c,requestRender:y,allowDelayedRender:p}=e,_=i.textMaterial,m=l.vectorTilesMaterialManager;let g,P=!1;for(const N of t)if(N.layerData.has(c)&&(g=N.layerData.get(c),g.glyphPerPageElementsMap.size>0)){P=!0;break}if(!P)return;const I=i.getPaintProperty("text-opacity");if(I&&!I.isDataDriven&&I.getValue(o)===0)return;const x=i.getPaintProperty("text-color"),S=!x||x.isDataDriven||x.getValue(o)[3]>0,w=i.getPaintProperty("text-halo-width"),v=i.getPaintProperty("text-halo-color"),T=(!w||w.isDataDriven||w.getValue(o)>0)&&(!v||v.isDataDriven||v.getValue(o)[3]>0);if(!S&&!T)return;const M=24/8;let b=i.getLayoutValue("text-rotation-alignment",o);b===U.AUTO&&(b=i.getLayoutValue("symbol-placement",o)===ae.POINT?U.VIEWPORT:U.MAP);const D=b===U.MAP,R=i.getLayoutValue("text-keep-upright",o)&&D,E=s===F.HITTEST,L=.8*M/d;this._glyphTextureSize||(this._glyphTextureSize=dt(a.width/4,a.height/4));const H=i.getPaintValue("text-translate",o),W=i.getPaintValue("text-translate-anchor",o),X=this._sdfProgramOptions;X.id=E;const C=m.getMaterialProgram(r,_,X);if(p&&y!=null&&!C.compiled)return void y();r.useProgram(C),C.setUniformMatrix3fv("u_displayViewMat3",b===U.MAP?f.displayViewMat3:f.displayMat3),C.setUniformMatrix3fv("u_displayMat3",W===B.VIEWPORT?f.displayMat3:f.displayViewMat3),C.setUniform2fv("u_textTranslation",H),C.setUniform1f("u_depth",i.z+Wt),C.setUniform2fv("u_mosaicSize",this._glyphTextureSize),C.setUniform1f("u_mapRotation",pe(f.rotation)),C.setUniform1f("u_keepUpright",R?1:0),C.setUniform1f("u_level",10*o),C.setUniform1i("u_texture",me),C.setUniform1f("u_antialiasingWidth",L),C.setUniform1f("u_fadeDuration",se/1e3),E&&C.setUniform4fv("u_id",n);let j=-1;for(const N of t){if(!N.layerData.has(c)||(N.key.level!==j&&(j=N.key.level,_.setDataUniforms(C,o,i,j,h)),g=N.layerData.get(c),g.glyphPerPageElementsMap.size===0))continue;g.prepareForRendering(r),g.updateOpacityInfo();const le=g.textVertexArrayObject;if(le==null)continue;r.bindVAO(le),C.setUniformMatrix3fv("u_dvsMat3",N.transforms.dvs),r.setStencilTestEnabled(!0),r.setStencilFunction(q.GREATER,255,255),r.setStencilWriteMask(0);const Ve=(performance.now()-g.lastOpacityUpdate)/1e3;C.setUniform1f("u_time",Ve),g.glyphPerPageElementsMap.forEach((Fe,qe)=>{this._renderGlyphRange(r,Fe,qe,a,C,T,S,N)})}}_renderGlyphRange(e,i,t,n,r,o,s,a){n.bind(e,G.LINEAR,t,me),o&&(r.setUniform1f("u_halo",1),e.drawElements(O.TRIANGLES,i[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),a.triangleCount+=i[1]/3),s&&(r.setUniform1f("u_halo",0),e.drawElements(O.TRIANGLES,i[1],V.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),a.triangleCount+=i[1]/3)}};const Bt={vtlBackground:Vt,vtlFill:qt,vtlLine:Ht,vtlCircle:Ft,vtlSymbol:Gt},Jt={background:{"background.frag":`#ifdef PATTERN
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
}`}};let jt=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let r=n.exec(t);const o=[];for(;r!=null;)o.push({path:r[1],start:r.index,length:r[0].length}),r=n.exec(t);let s=0,a="";return o.forEach(l=>{a+=t.slice(s,l.start),a+=i.has(l.path)?"":this._resolve(l.path,i),s=l.start+l.length}),a+=t.slice(s),i.set(e,a),a}_read(e){return this._readFile(e)}};function Kt(u){let e=Jt;return u.split("/").forEach(i=>{e&&(e=e[i])}),e}const Yt=new jt(Kt);function k(u){return Yt.resolveIncludes(u)}function Xt(u){const{options:e,value:i}=u;return typeof e[i]=="number"}function J(u){let e="";for(const i in u){const t=u[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Xt(t)){const{value:n,options:r,namespace:o}=t,s=o?`${o}_`:"";for(const a in r)e+=`#define ${s}${a} ${r[a].toFixed()}
`;e+=`#define ${i} ${s}${n}
`}else{const n=t.options;let r=0;for(const o in n)e+=`#define ${n[o]} ${(r++).toFixed()}
`;e+=`#define ${i} ${n[t.value]}
`}}return e}const be=u=>J({ID:u.id,PATTERN:u.pattern}),Qt={shaders:u=>({vertexShader:be(u)+k("background/background.vert"),fragmentShader:be(u)+k("background/background.frag")})},Se=u=>J({ID:u.id}),Zt={shaders:u=>({vertexShader:Se(u)+k("circle/circle.vert"),fragmentShader:Se(u)+k("circle/circle.frag")})},Te=u=>J({ID:u.id,PATTERN:u.pattern}),ei={shaders:u=>({vertexShader:Te(u)+k("fill/fill.vert"),fragmentShader:Te(u)+k("fill/fill.frag")})},Pe=u=>J({ID:u.id}),ti={shaders:u=>({vertexShader:Pe(u)+k("outline/outline.vert"),fragmentShader:Pe(u)+k("outline/outline.frag")})},Ie=u=>J({ID:u.id,SDF:u.sdf}),ii={shaders:u=>({vertexShader:Ie(u)+k("icon/icon.vert"),fragmentShader:Ie(u)+k("icon/icon.frag")})},Me=u=>J({ID:u.id,PATTERN:u.pattern,SDF:u.sdf}),ni={shaders:u=>({vertexShader:Me(u)+k("line/line.vert"),fragmentShader:Me(u)+k("line/line.frag")})},Re=u=>J({ID:u.id}),ri={shaders:u=>({vertexShader:Re(u)+k("text/text.vert"),fragmentShader:Re(u)+k("text/text.frag")})};let oi=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const n=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(n))return this._programByKey.get(n);const r=this._getProgramTemplate(i.type),{shaders:o}=r,{vertexShader:s,fragmentShader:a}=o(t),l=i.getShaderHeader(),d=i.getShaderMain(),h=s.replace("#pragma header",l).replace("#pragma main",d),f=e.programCache.acquire(h,a,i.getAttributeLocations());return this._programByKey.set(n,f),f}_getMaterialOptionsValue(e,i){switch(e){case A.BACKGROUND:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case A.FILL:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case A.OUTLINE:return i.id?1:0;case A.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1|(t.id?1:0)}case A.ICON:{const t=i;return(t.sdf?1:0)<<1|(t.id?1:0)}case A.CIRCLE:return i.id?1:0;case A.TEXT:return i.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case A.BACKGROUND:return Qt;case A.CIRCLE:return Zt;case A.FILL:return ei;case A.ICON:return ii;case A.LINE:return ni;case A.OUTLINE:return ti;case A.TEXT:return ri;default:return null}}};const De=1e-6;class Ce{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new oi}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=ze(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,i,t){const{context:n}=e,r=t.layers;t.backgroundBucketIds.length>0&&(e.renderPass="background",t.backgroundBucketIds.forEach(o=>this._renderStyleLayer(t.getLayerById(o),e,i,!0))),n.setBlendingEnabled(!1),n.setDepthTestEnabled(!0),n.setDepthWriteEnabled(!0),n.setDepthFunction(q.LEQUAL),e.renderPass="opaque";for(let o=r.length-1;o>=0;o--)this._renderStyleLayer(r[o],e,i,!1);n.setDepthWriteEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(ie.ONE,ie.ONE_MINUS_SRC_ALPHA,ie.ONE,ie.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let o=0;o<r.length;o++)this._renderStyleLayer(r[o],e,i,!1);n.setDepthTestEnabled(!1),n.bindVAO()}_renderStyleLayer(e,i,t,n=!1){if(!(n||e&&t.layerData.has(e.uid)))return;const r=e.getLayoutProperty("visibility");if(r&&r.getValue()===$e.NONE)return;const{renderPass:o}=i;let s;switch(e.type){case Q.BACKGROUND:if(o!=="background")return;s="vtlBackground";break;case Q.FILL:if(o!=="opaque"&&i.renderPass!=="translucent")return;s="vtlFill";break;case Q.LINE:if(o!=="translucent")return;s="vtlLine";break;case Q.CIRCLE:if(o!=="translucent")return;s="vtlCircle";break;case Q.SYMBOL:if(o!=="translucent")return;s="vtlSymbol"}const a=i.displayLevel;e.minzoom!==void 0&&e.minzoom>a+De||e.maxzoom!==void 0&&e.maxzoom<=a-De||(i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,s))}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const n=Bt[t];this._brushCache.set(t,new n)}this._brushCache.get(t).drawMany(e,[i])}}let K=class extends bt(wt(St)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d"}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new ht("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:u,spatialReference:e,state:i,viewingMode:t}=this.view,n=t==="local"&&!ft(e)||_t.force512VTL,r=this.layer.tileInfo.spatialReference.isGeographic,o=n?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,r?1:2),s=this._getTileInfoSupportError(o,this.layer.fullExtent);if(s!=null)return this.addResolvingPromise(Promise.reject(s));const a=mt(()=>{var _,m;return(m=(_=this.view)==null?void 0:_.basemapTerrain)==null?void 0:m.tilingSchemeLocked}).then(()=>{var I;const _=u.tilingScheme,m=_.pixelSize;let g;if(this.schemaHelper=new Tt(m,u.spatialReference!=null&&u.spatialReference.isGeographic),m===256){const x=this.layer.tileInfo.spatialReference.isGeographic;g=this.layer.tileInfo.getOrCreateCompatible(256,x?1:2)}else g=(I=this.view.spatialReference)!=null&&I.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const P=this._getTileInfoCompatibilityError(g,_);if(P)throw P;this.tileInfo=g});this._tileHandlerController=new AbortController;const l=this.view.resourceController;this._memCache=l.memoryController.newCache(this.layer.uid,_=>{_.release()});const d=new _e(this.layer.currentStyleInfo.style);this._tileHandler=new xe(this.layer,d,i.contentPixelRatio,this._memCache);const h=this._tileHandlerController.signal,f=si(l),c=this._tileHandler.start({signal:h,schedule:f}),y=this._tileHandler.spriteMosaic;y.then(_=>{!pt(h)&&this._tileHandler&&(this.painter=new Ce(_,this._tileHandler.glyphMosaic))}),c.then(()=>this._tileHandlerController=null),this.updatingHandles.add(()=>{var _;return{style:this.layer.currentStyleInfo.style,pixelRatio:(_=this.view.state)==null?void 0:_.contentPixelRatio}},({style:_,pixelRatio:m})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const g=new _e(_),P=new xe(this.layer,g,m,this._memCache),I=P.start({signal:this._tileHandlerController.signal,schedule:f}),x=P.spriteMosaic;I.then(()=>this._tileHandlerController=null),this.updatingHandles.addPromise(Promise.all([I,x]).then(([,S])=>{const w=this._tileHandler,v=this.painter;this.painter=new Ce(S,P.glyphMosaic),this._tileHandler=P,this.emit("data-changed"),w.destroy(),v&&v.dispose()}))});const p=Promise.all([a,c,y]);this.addResolvingPromise(p)}destroy(){this.painter=ze(this.painter),this._tileHandlerController=Ae(this._tileHandlerController),this._tileHandler=fe(this._tileHandler),this._memCache=fe(this._memCache)}get dataLevelRange(){const u=this.tileInfo.lods,e=u[0].scale,i=u[u.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return t.minLevel===1&&this.tileInfo.size[0]===256&&(t.minLevel=0),t}async fetchTile(u,e,i,t){return this._tileHandler.getVectorTile(u,e,i,t)}};ne([re()],K.prototype,"layer",void 0),ne([re()],K.prototype,"dataLevelRange",null),ne([re()],K.prototype,"updatingProgressValue",void 0),K=ne([gt("esri.views.3d.layers.VectorTileLayerView3D")],K);const Fi=K;function si(u){return e=>u.immediate.schedule(e)}export{Fi as default};
