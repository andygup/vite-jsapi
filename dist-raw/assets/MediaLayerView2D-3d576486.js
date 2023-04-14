import{bL as Y,A as U,B as G,aQ as K,v as Z,L as X,E as ee,d as te,C as j,bM as R,bN as se,bO as re,e as ie,bi as oe,bl as ne,j as ae,bj as le,g as ce,h as he,bP as me,bn as pe,J as de,an as z,b7 as ue,b8 as fe,bQ as ye,i as _e,bf as ge,az as ve,ae as E,af as O,ai as we,O as be,bR as xe}from"./index-468a9268.js";import"./UniqueValueRenderer-ac017c28.js";import"./jsonUtils-e039d20c.js";import{g as Me,M as $}from"./perspectiveUtils-cb58c347.js";import"./MagnifierPrograms-40aaf452.js";import{D as Re}from"./Container-f10645ec.js";import"./BufferPool-e2989807.js";import{W as Ee}from"./color-9ac858bf.js";import{W as Te,b as Ce}from"./WGLContainer-4ea3d7ba.js";import{a as Ve,U as Q}from"./enums-08489827.js";import{a as Se,T as De}from"./TextureDescriptor-8d60c85d.js";import"./ProgramTemplate-91d2aab2.js";import"./MaterialKey-72ecadf9.js";import"./utils-049d9020.js";import{B as H,V as Le}from"./VertexArrayObject-06314636.js";import"./StyleDefinition-edaaf36e.js";import"./enums-977a0ba8.js";import"./OrderIndependentTransparency-01632ab9.js";import"./floatRGBA-7208c0c2.js";import"./GraphicsView2D-a0ec88f6.js";import"./AttributeStoreView-29c578b3.js";import"./earcut-db592379.js";import"./featureConversionUtils-78a5344c.js";import"./lengthUtils-edd0ce65.js";import{f as Ge}from"./vec3f32-ec4c3c20.js";import{a as Oe}from"./normalizeUtils-9dd6c69b.js";import{c as Pe}from"./mat3f64-c33d428a.js";import{L as We,a as qe}from"./LayerView-747efb45.js";import"./LegendOptions-dcb522eb.js";import"./diffUtils-71027438.js";import"./SizeVariable-e8cc32d6.js";import"./colorRamps-4cbb7a49.js";import"./sizeVariableUtils-2914222a.js";import"./ColorStop-60446843.js";import"./jsonUtils-123a2bd9.js";import"./styleUtils-cc56472a.js";import"./featureFlags-2a723cce.js";import"./DictionaryLoader-f1871e3b.js";import"./LRUCache-d3406418.js";import"./MemCache-3df47c80.js";import"./FieldsIndex-ab7b931c.js";import"./heatmapUtils-adcbaceb.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./normalizeUtilsSync-bef12c2c.js";import"./normalizeUtilsCommon-6cabd780.js";import"./_commonjsHelpers-725317a4.js";import"./ExpandedCIM-3d5be9a7.js";import"./BidiEngine-cdaf024a.js";import"./GeometryUtils-26dde58c.js";import"./enums-eb6e4255.js";import"./definitions-3f56d206.js";import"./Rect-df8ea165.js";import"./quantizationUtils-6f8bf3ac.js";import"./rasterizingUtils-7c7a245d.js";import"./pbf-77fea3f9.js";import"./GeometryUtils-0ab64fac.js";import"./imageutils-de0c2f75.js";import"./Matcher-7d012cab.js";import"./visualVariablesUtils-f0ac958d.js";import"./visualVariablesUtils-a3bf0888.js";import"./tileUtils-fdb57ff2.js";import"./TurboLine-e25b7a60.js";import"./defaultsJSON-b396ba80.js";import"./OptimizedGeometry-af84d2ad.js";import"./devEnvironmentUtils-e2e22b53.js";import"./CircularArray-7e036143.js";import"./DisjointTimerQuery-0b864cc8.js";import"./throttle-9d01e8e8.js";import"./ComputedAttributeStorage-7f1f2893.js";import"./arcadeTimeUtils-e7784ef1.js";import"./executionError-e2eca390.js";import"./centroid-1116d1e7.js";import"./parser-0c644652.js";import"./VertexElementDescriptor-24e04d97.js";import"./config-c06e4a6d.js";import"./basicInterfaces-cc58f4ac.js";import"./projectionSupport-66923e94.js";import"./json-9ae8d6f8.js";import"./labelingInfo-94054623.js";import"./labelUtils-e4e35bc9.js";import"./schemaUtils-4d604596.js";import"./sql-50f1dd02.js";import"./clusterUtils-a3a72d39.js";import"./util-0444ec7c.js";import"./TiledDisplayObject-6720b2c5.js";import"./OptimizedFeatureSet-5c82fe5a.js";const _=Pe();class Ie extends Re{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=Y(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(U(()=>this.elementView.element.opacity,t=>this.opacity=t,G),U(()=>[this.elementView.coords],()=>{this.requestRender()},G),K(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(Z(t.content,"play",()=>this.requestRender()))},G)),e.element.load().catch(t=>{X.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new ee("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=te(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(s!=null){const r=s instanceof HTMLImageElement,i=s instanceof HTMLVideoElement,n=r?s.naturalWidth:i?s.videoWidth:s.width,a=r?s.naturalHeight:i?s.videoHeight:s.height;if(this._updatePerspectiveTransform(n,a),this.texture)i&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===j.WEBGL2||R(n)&&R(a))&&this.texture.generateMipmap());else{const c=new Se;c.wrapMode=Ve.CLAMP_TO_EDGE,c.preMultiplyAlpha=!0,c.width=n,c.height=a,this.texture=new De(t,c,s),(t.type===j.WEBGL2||R(n)&&R(a))&&this.texture.generateMipmap(),i&&!s.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(s==null)return;const[r,i,n,a]=s.rings[0],c=this._vertices,{x:o,y:l}=e,p=t!==0;p?c.set([i[0]-o,i[1]-l,r[0]-o,r[1]-l,n[0]-o,n[1]-l,a[0]-o,a[1]-l,a[0]-o,a[1]-l,i[0]+t-o,i[1]-l,i[0]+t-o,i[1]-l,r[0]+t-o,r[1]-l,n[0]+t-o,n[1]-l,a[0]+t-o,a[1]-l]):c.set([i[0]-o,i[1]-l,r[0]-o,r[1]-l,n[0]-o,n[1]-l,a[0]-o,a[1]-l]),this.isWrapAround=p}getVAO(e,t,s){if(this.elementView.coords==null)return null;const r=this._vertices;if(this._vao)this._geometryVbo.setData(r);else{this._geometryVbo=H.createVertex(e,Q.DYNAMIC_DRAW,r);const i=H.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Le(e,s,t,{geometry:this._geometryVbo,tex:i})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;Me(_,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),se(this.perspectiveTransform,_[6]/_[8]*e,_[7]/_[8]*t)}}class Ae extends Te{constructor(){super(...arguments),this._localOrigin=re(0,0),this._viewStateId=-1,this._dvsMat3=ie(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ce.overlay],target:()=>this.children,drawPhase:Ee.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:r,pixelRatio:i,resolution:n,rotation:a,viewpoint:c,displayMat3:o}=t;if(this._viewStateId===s)return;const l=Math.PI/180*a,p=i*r[0],u=i*r[1],{x:T,y:v}=c.targetGeometry,C=Oe(T,t.spatialReference);this._localOrigin.x=C,this._localOrigin.y=v;const V=n*p,w=n*u,h=oe(this._dvsMat3);ne(h,h,o),ae(h,h,le(p/2,u/2)),ce(h,h,Ge(p/V,-u/w,1)),he(h,h,-l),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:r,spatialReference:i,worldScreenWidth:n,size:a,viewpoint:c}=s,o=this._localOrigin;let l=0;const p=me(i);if(p&&i.isWrappable){const u=a[0],T=a[1],v=180/Math.PI*r,C=Math.abs(Math.cos(v)),V=Math.abs(Math.sin(v)),w=Math.round(u*C+T*V),[h,S]=p.valid,d=pe(i),{x:P,y:k}=c.targetGeometry,F=[P,k],D=[0,0];s.toScreen(D,F);const b=[0,0];let x;w>n?x=.5*n:x=.5*w;const W=Math.floor((P+.5*d)/d),N=h+W*d,J=S+W*d,L=[D[0]+x,0];s.toMap(b,L),b[0]>J&&(l=d),L[0]=D[0]-x,s.toMap(b,L),b[0]<N&&(l=-d);for(const M of t){const q=M.elementView.bounds;if(q==null)continue;const[I,,A]=q;I<h&&A>h?M.updateDrawCoords(o,d):A>S&&I<S?M.updateDrawCoords(o,-d):M.updateDrawCoords(o,l)}}else for(const u of t)u.updateDrawCoords(o,l)}}let f=class extends We(qe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new de}attach(){this.addAttachHandles([z(()=>this.layer.effectiveSource,"refresh",()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate()}),z(()=>this.layer.effectiveSource,"change",({element:e})=>this._elementUpdateHandler(e))]),this._overlayContainer=new Ae,this.container.addChild(this._overlayContainer),this._fetchQueue=new ue({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new fe({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var e;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(e=this._debugGraphicsView)==null||e.destroy()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){var t;this._tileStrategy.update(e),(t=this._debugGraphicsView)==null||t.update(e)}async hitTest(e,t){const s=[],r=e.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:a}}of this._elementReferences.values())n!=null&&ye(n.rings,i)&&s.push({type:"media",element:a,layer:this.layer,mapPoint:e});return s.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._updateTile(e))}_acquireTile(e){const t=new Ue(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then(t=>{const[s,r]=e.setElements(t);this._referenceElements(e,s),this._dereferenceElements(e,r),this.requestUpdate()},t=>{_e(t)||X.getLogger(this.declaredClass).error(t)}))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const s=this.layer.effectiveSource;if(s==null)return[];this.view.featuresTilingScheme.getTileBounds(m,e,!0);const r=new ge({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return s.queryElements(r,t)}_referenceElements(e,t){if(this.layer.source!=null)for(const r of t)this._referenceElement(e,r)}_referenceElement(e,t){ve(this._elementReferences,t.uid,()=>{const r=new $({element:t,spatialReference:this.view.spatialReference}),i=new Ie(r);return this._overlayContainer.addChild(i),this.elements.add(t),{tiles:new Set,projectedElement:r,overlay:i,debugGraphic:null}}).tiles.add(e)}_dereferenceElements(e,t){for(const s of t)this._dereferenceElement(e,s)}_dereferenceElement(e,t){var r;const s=this._elementReferences.get(t.uid);s.tiles.delete(e),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),(r=this._debugGraphicsView)==null||r.graphics.remove(s.debugGraphic))}_elementUpdateHandler(e){var i;let t=this._elementReferences.get(e.uid);if(t){const n=t.projectedElement.normalizedCoords;if(n==null){this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(i=this._debugGraphicsView)==null||i.graphics.remove(t.debugGraphic);return}const a=[],c=[];for(const o of this._tileStrategy.tiles){const l=B(this.view.featuresTilingScheme,o,n);t.tiles.has(o)?l||c.push(o):l&&a.push(o)}for(const o of a)this._referenceElement(o,e);for(const o of c)this._dereferenceElement(o,e);t=this._elementReferences.get(e.uid),t!=null&&t.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"}));return}const r=new $({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(r!=null)for(const n of this._tileStrategy.tiles)B(this.view.featuresTilingScheme,n,r)&&this._referenceElement(n,e)}};E([O()],f.prototype,"_fetchQueue",void 0);E([O()],f.prototype,"layer",void 0);E([O({readOnly:!0})],f.prototype,"elements",void 0);f=E([we("esri.views.2d.layers.MediaLayerView2D")],f);const m=be(),g={xmin:0,ymin:0,xmax:0,ymax:0};function B(y,e,t){return y.getTileBounds(m,e.key,!0),g.xmin=m[0],g.ymin=m[1],g.xmax=m[2],g.ymax=m[3],xe(g,t)}class Ue{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const r of e)s.has(r)?s.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const ws=f;export{ws as default};