import{b5 as Z,G as H,H as D,b6 as ee,r as T,y as te,Q as N,s as re,h as se,a as W,b7 as x,t as _,b8 as ie,b9 as ae,e as oe,ba as ne,ax as le,aA as he,M as ce,ay as me,g as de,i as pe,bb as ue,aC as fe,P as ye,b1 as z,ab as _e,ac as ve,bc as ge,j as we,as as be,b3 as Re,af as M,ag as P,ah as Ee,T as xe,bd as Me}from"./index-6c241492.js";import{j as Te,u as Q}from"./perspectiveUtils-142259ad.js";import"./MagnifierPrograms-b42d6e7d.js";import{r as Ce}from"./Container-4f1befcf.js";import"./BufferPool-0bf2182d.js";import{T as Se}from"./color-3e0a74b1.js";import{b as $e,w as Ve}from"./WGLContainer-f540f8b0.js";import{P as Ge,G as Ae,L as qe,D as De,F as B}from"./enums-64ab819c.js";import{E as Pe}from"./Texture-7a224fae.js";import"./ProgramTemplate-5579a279.js";import"./MaterialKey-dea53a2e.js";import"./utils-b76f789f.js";import{E as k,f as Ie}from"./VertexArrayObject-1f40867c.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./OrderIndependentTransparency-e1b3a745.js";import"./floatRGBA-74691179.js";import"./webgl-debug-b1f7a2c5.js";import"./GraphicsView2D-d4f2c8a7.js";import"./AttributeStoreView-b4682b41.js";import"./earcut-61f7b102.js";import{r as Ue}from"./vec3f32-ad1dc57f.js";import{e as je}from"./mat3f64-221ce671.js";import{f as Le,u as Oe}from"./LayerView-9445cf14.js";import"./normalizeUtilsSync-21d62f9b.js";import"./_commonjsHelpers-2f3e7994.js";import"./ExpandedCIM-082ebe89.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./definitions-3ddd14a8.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-e2047165.js";import"./rasterizingUtils-a9c8bffc.js";import"./GeometryUtils-dd03fc25.js";import"./imageutils-51745399.js";import"./Matcher-f20ba971.js";import"./visualVariablesUtils-7241e87f.js";import"./visualVariablesUtils-89256d21.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-2066c261.js";import"./devEnvironmentUtils-5002a058.js";import"./CircularArray-2a90241b.js";import"./ComputedAttributeStorage-8f39a750.js";import"./arcadeTimeUtils-767097cf.js";import"./executionError-fb3f283a.js";import"./centroid-f2531bab.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./basicInterfaces-b7051eb1.js";import"./projectionSupport-dd5c7228.js";import"./json-48e3ea08.js";import"./schemaUtils-09c71892.js";import"./util-d83bb470.js";import"./TiledDisplayObject-e4f797ff.js";const v=je();class He extends Ce{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Z(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(H(()=>this.elementView.element.opacity,t=>this.opacity=t,D),H(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&T(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{N.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=se(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(T(s)){const i=s instanceof HTMLImageElement,a=s instanceof HTMLVideoElement,n=i?s.naturalWidth:a?s.videoWidth:s.width,o=i?s.naturalHeight:a?s.videoHeight:s.height;this._updatePerspectiveTransform(n,o),this.texture?a&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===W.WEBGL2||x(n)&&x(o))&&this.texture.generateMipmap()):(this.texture=new Pe(t,{pixelFormat:Ge.RGBA,dataType:Ae.UNSIGNED_BYTE,samplingMode:qe.LINEAR,wrapMode:De.CLAMP_TO_EDGE,width:n,height:o,preMultiplyAlpha:!0},s),(t.type===W.WEBGL2||x(n)&&x(o))&&this.texture.generateMipmap(),a&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(_(s))return;const[i,a,n,o]=s.rings[0],d=this._vertices,{x:l,y:h}=e,p=t!==0;p?d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,a[0]+t-l,a[1]-h,a[0]+t-l,a[1]-h,i[0]+t-l,i[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):d.set([a[0]-l,a[1]-h,i[0]-l,i[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=p}getVAO(e,t,s){if(_(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=k.createVertex(e,B.DYNAMIC_DRAW,i);const a=k.createVertex(e,B.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ie(e,s,t,{geometry:this._geometryVbo,tex:a})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;Te(v,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),ie(this.perspectiveTransform,v[6]/v[8]*e,v[7]/v[8]*t)}}class We extends $e{constructor(){super(...arguments),this._localOrigin=ae(0,0),this._viewStateId=-1,this._dvsMat3=oe(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:Se.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:a,resolution:n,rotation:o,viewpoint:d,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*o,p=a*i[0],f=a*i[1],{x:C,y:w}=d.targetGeometry,S=ne(C,t.spatialReference);this._localOrigin.x=S,this._localOrigin.y=w;const $=n*p,b=n*f,c=le(this._dvsMat3);he(c,c,l),ce(c,c,me(p/2,f/2)),de(c,c,Ue(p/$,-f/b,1)),pe(c,c,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:a,worldScreenWidth:n,size:o,viewpoint:d}=s,l=this._localOrigin;let h=0;const p=ue(a);if(p&&a.isWrappable){const f=o[0],C=o[1],w=180/Math.PI*i,S=Math.abs(Math.cos(w)),$=Math.abs(Math.sin(w)),b=Math.round(f*S+C*$),[c,V]=p.valid,u=fe(a),{x:I,y:Y}=d.targetGeometry,J=[I,Y],G=[0,0];s.toScreen(G,J);const R=[0,0];let A;A=b>n?.5*n:.5*b;const U=Math.floor((I+.5*u)/u),K=c+U*u,X=V+U*u,q=[G[0]+A,0];s.toMap(R,q),R[0]>X&&(h=u),q[0]=G[0]-A,s.toMap(R,q),R[0]<K&&(h=-u);for(const E of t){const j=E.elementView.bounds;if(_(j))continue;const[L,,O]=j;L<c&&O>c?E.updateDrawCoords(l,u):O>V&&L<V?E.updateDrawCoords(l,-u):E.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let y=class extends Le(Oe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ye}attach(){this.addAttachHandles([z(()=>this.layer.effectiveSource,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()}),z(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new We,this.container.addChild(this._overlayContainer),this._fetchQueue=new _e({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new ve({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],s=r.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:a,element:n}}of this._elementReferences.values())T(a)&&ge(a.rings,i)&&t.push({type:"media",element:n,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(r=>this._updateTile(r))}_acquireTile(r){const e=new ze(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,s),this.requestUpdate()},e=>{we(e)||N.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(_(t))return[];this.view.featuresTilingScheme.getTileBounds(m,r,!0);const s=new be({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_referenceElements(r,e){const t=this.layer.source;if(!_(t))for(const s of e)this._referenceElement(r,s)}_referenceElement(r,e){Re(this._elementReferences,e.uid,()=>{const t=new Q({element:e,spatialReference:this.view.spatialReference}),s=new He(t);return this._overlayContainer.addChild(s),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:s,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var s;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(s=this._debugGraphicsView)==null||s.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var s;let e=this._elementReferences.get(r.uid);if(e){const i=e.projectedElement.normalizedCoords;if(_(i))return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((s=this._debugGraphicsView)==null?void 0:s.graphics.remove(e.debugGraphic));const a=[],n=[];for(const o of this._tileStrategy.tiles){const d=F(this.view.featuresTilingScheme,o,i);e.tiles.has(o)?d||n.push(o):d&&a.push(o)}for(const o of a)this._referenceElement(o,r);for(const o of n)this._dereferenceElement(o,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new Q({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(T(t))for(const i of this._tileStrategy.tiles)F(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,r)}};M([P()],y.prototype,"_fetchQueue",void 0),M([P()],y.prototype,"layer",void 0),M([P({readOnly:!0})],y.prototype,"elements",void 0),y=M([Ee("esri.views.2d.layers.MediaLayerView2D")],y);const m=xe(),g={xmin:0,ymin:0,xmax:0,ymax:0};function F(r,e,t){return r.getTileBounds(m,e.key,!0),g.xmin=m[0],g.ymin=m[1],g.xmax=m[2],g.ymax=m[3],Me(g,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const Bt=y;export{Bt as default};
