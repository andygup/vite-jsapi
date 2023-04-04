import{b3 as K,D as L,E as A,b4 as X,w as Z,J as k,s as ee,t as te,b as j,b5 as x,b6 as se,b7 as re,b8 as ie,f as ae,b9 as ne,au as oe,ax as le,M as he,av as de,i as ce,ba as me,j as pe,bb as ue,az as fe,V as ye,a_ as W,a7 as _e,a8 as ve,bc as ge,d as we,ap as be,b0 as Re,ab as E,ac as D,ad as xe,O as Ee,bd as Me}from"./index-e1d30004.js";import{j as $e,i as z}from"./perspectiveUtils-147c67e5.js";import"./MagnifierPrograms-5e5c89de.js";import{a as Te}from"./Container-3b957f51.js";import"./BufferPool-de47f160.js";import{T as Ve}from"./color-a87af45a.js";import{i as Ce,w as Se}from"./WGLContainer-4b22933a.js";import{P as Ge,G as Ae,L as De,D as qe,F as H}from"./enums-10aa9b05.js";import{m as Pe}from"./Texture-a64c7d5d.js";import"./ProgramTemplate-99344654.js";import"./MaterialKey-1143b332.js";import"./utils-98382753.js";import{c as B,a as Oe}from"./VertexArrayObject-36a67124.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-5206b14a.js";import"./floatRGBA-3bf773ec.js";import"./GraphicsView2D-21f7d1fa.js";import"./AttributeStoreView-22c4864f.js";import"./earcut-61f7b102.js";import{f as Ie,d as Ue}from"./LayerView-b379b6c2.js";import"./normalizeUtilsSync-a9493313.js";import"./_commonjsHelpers-2f3e7994.js";import"./ExpandedCIM-0ff0446e.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./definitions-43101aab.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-9a3641a9.js";import"./rasterizingUtils-9b04fcb2.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-1a10e5f7.js";import"./Matcher-32ed4360.js";import"./visualVariablesUtils-d59cfcd9.js";import"./visualVariablesUtils-4856a557.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-57bbf99c.js";import"./devEnvironmentUtils-5002a058.js";import"./CircularArray-ef508845.js";import"./DisjointTimerQuery-b21930a9.js";import"./ComputedAttributeStorage-b498a8b2.js";import"./arcadeTimeUtils-151d71ab.js";import"./executionError-fb3f283a.js";import"./centroid-8e8cfa47.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-4ab7cc6a.js";import"./projectionSupport-fc16ea24.js";import"./json-48e3ea08.js";import"./schemaUtils-fba4c809.js";import"./util-483ccdfc.js";import"./TiledDisplayObject-71eee758.js";const _=re();class Le extends Te{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=K(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(L(()=>this.elementView.element.opacity,t=>this.opacity=t,A),L(()=>[this.elementView.coords],()=>{this.requestRender()},A),X(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(Z(t.content,"play",()=>this.requestRender()))},A)),e.element.load().catch(t=>{k.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new ee("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=te(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,a=r instanceof HTMLVideoElement,o=i?r.naturalWidth:a?r.videoWidth:r.width,n=i?r.naturalHeight:a?r.videoHeight:r.height;this._updatePerspectiveTransform(o,n),this.texture?a&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===j.WEBGL2||x(o)&&x(n))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:Ge.RGBA,dataType:Ae.UNSIGNED_BYTE,samplingMode:De.LINEAR,wrapMode:qe.CLAMP_TO_EDGE,width:o,height:n,preMultiplyAlpha:!0},r),(t.type===j.WEBGL2||x(o)&&x(n))&&this.texture.generateMipmap(),a&&!r.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,a,o,n]=r.rings[0],m=this._vertices,{x:l,y:h}=e,p=t!==0;p?m.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,o[0]-l,o[1]-h,n[0]-l,n[1]-h,n[0]-l,n[1]-h,a[0]+t-l,a[1]-h,a[0]+t-l,a[1]-h,i[0]+t-l,i[1]-h,o[0]+t-l,o[1]-h,n[0]+t-l,n[1]-h]):m.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,o[0]-l,o[1]-h,n[0]-l,n[1]-h]),this.isWrapAround=p}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=B.createVertex(e,H.DYNAMIC_DRAW,i);const a=B.createVertex(e,H.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Oe(e,r,t,{geometry:this._geometryVbo,tex:a})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;$e(_,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),se(this.perspectiveTransform,_[6]/_[8]*e,_[7]/_[8]*t)}}class je extends Ce{constructor(){super(...arguments),this._localOrigin=ie(0,0),this._viewStateId=-1,this._dvsMat3=ae(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Se.overlay],target:()=>this.children,drawPhase:Ve.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:a,resolution:o,rotation:n,viewpoint:m,displayMat3:l}=t;if(this._viewStateId===r)return;const h=Math.PI/180*n,p=a*i[0],f=a*i[1],{x:M,y:g}=m.targetGeometry,$=ne(M,t.spatialReference);this._localOrigin.x=$,this._localOrigin.y=g;const T=o*p,w=o*f,d=oe(this._dvsMat3);le(d,d,l),he(d,d,de(p/2,f/2)),ce(d,d,me(p/T,-f/w,1)),pe(d,d,-h),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:a,worldScreenWidth:o,size:n,viewpoint:m}=r,l=this._localOrigin;let h=0;const p=ue(a);if(p&&a.isWrappable){const f=n[0],M=n[1],g=180/Math.PI*i,$=Math.abs(Math.cos(g)),T=Math.abs(Math.sin(g)),w=Math.round(f*$+M*T),[d,V]=p.valid,u=fe(a),{x:q,y:F}=m.targetGeometry,N=[q,F],C=[0,0];r.toScreen(C,N);const b=[0,0];let S;S=w>o?.5*o:.5*w;const P=Math.floor((q+.5*u)/u),Y=d+P*u,J=V+P*u,G=[C[0]+S,0];r.toMap(b,G),b[0]>J&&(h=u),G[0]=C[0]-S,r.toMap(b,G),b[0]<Y&&(h=-u);for(const R of t){const O=R.elementView.bounds;if(O==null)continue;const[I,,U]=O;I<d&&U>d?R.updateDrawCoords(l,u):U>V&&I<V?R.updateDrawCoords(l,-u):R.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let y=class extends Ie(Ue){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([W(()=>this.layer.effectiveSource,"refresh",()=>{for(const s of this._tileStrategy.tiles)this._updateTile(s);this.requestUpdate()}),W(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new je,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ve({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:a,element:o}}of this._elementReferences.values())a!=null&&ge(a.rings,i)&&t.push({type:"media",element:o,layer:this.layer,mapPoint:s});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(s=>this._updateTile(s))}_acquireTile(s){const e=new We(s.clone());return this._updateTile(e),e}_updateTile(s){this.updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{we(e)||k.getLogger(this.declaredClass).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(c,s,!0);const r=new be({xmin:c[0],ymin:c[1],xmax:c[2],ymax:c[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){Re(this._elementReferences,e.uid,()=>{const t=new z({element:e,spatialReference:this.view.spatialReference}),r=new Le(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const a=[],o=[];for(const n of this._tileStrategy.tiles){const m=Q(this.view.featuresTilingScheme,n,i);e.tiles.has(n)?m||o.push(n):m&&a.push(n)}for(const n of a)this._referenceElement(n,s);for(const n of o)this._dereferenceElement(n,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new z({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)Q(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};E([D()],y.prototype,"_fetchQueue",void 0),E([D()],y.prototype,"layer",void 0),E([D({readOnly:!0})],y.prototype,"elements",void 0),y=E([xe("esri.views.2d.layers.MediaLayerView2D")],y);const c=Ee(),v={xmin:0,ymin:0,xmax:0,ymax:0};function Q(s,e,t){return s.getTileBounds(c,e.key,!0),v.xmin=c[0],v.ymin=c[1],v.xmax=c[2],v.ymax=c[3],Me(v,t)}class We{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const Wt=y;export{Wt as default};
