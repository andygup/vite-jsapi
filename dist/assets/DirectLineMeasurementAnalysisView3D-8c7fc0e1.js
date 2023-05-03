import{d as Te,e as r,y as l,a as de,m as ce,t as he,C as v,fj as xe,b6 as _e,g as S,bg as O,l as b,ju as Q,z as le,a2 as Re,lu as me,lH as Ge,lI as je,cc as Ne,ii as Ie,im as q,bT as f,cq as K,lK as X,cv as He,_ as Be,cE as J,ip as ue,cw as Ue,cx as We,cy as Fe,cz as ke,j7 as Qe,is as qe,I as Ke,cA as Xe,cB as Je,cW as Ze,cF as Ye,ji as et,jj as tt,f as ve,E as ye,jl as it,iD as st,ev as Z,cm as Y,dt as ee,cK as Ee,ds as nt,e7 as te,at as C,ct as at,lN as D,n_ as I,mf as H,mL as rt,gO as ge,lQ as ie,lR as ot,cM as lt,dR as dt,g$ as ct,lS as ht,gZ as ut,lV as gt,mr as we,lF as pt,l$ as ze,md as pe}from"./index-d29f6b97.js";import{t as _t,e as V,M as mt,y as vt,b as yt,R as wt,f as se,a as bt}from"./UnitNormalizer-f7f273c1.js";import{r as ft,t as Lt,a as Pt,i as T,u as St,b as B,s as be,c as Ot,d as At}from"./LineVisualElement-db91c665.js";import{i as U,g as ne,m as fe,a as M,h as W,R as ae,y as Et,L as re,d as zt,f as oe,C as Le}from"./Segment-1413661a.js";import{geodesicLength as Ct}from"./geometryEngine-cfc072f3.js";import{P as Vt}from"./RightAngleQuadVisualElement-62adb2cd.js";const Ce="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",$t=Te.getLogger(Ce),Mt=1e5;let A=class extends ce{constructor(e){super(e),this._unitNormalizer=new _t,this._handles=new he,this._tempStartPosition=v(),this._tempEndPosition=v(),this._tempCornerPosition=v()}initialize(){const e=this.view.spatialReference,t=xe(e),i=t===Ge?je:t;this._sphericalPCPF=i;const n=_e(e,i);this._unitNormalizer.spatialReference=n?i:e,this._handles.add([S(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:s,startPoint:a})=>{s.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(a)},O),S(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:s,endPoint:a})=>{s.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(a)},O),S(()=>({result:this._computedResult,viewData:this.viewData}),({result:s,viewData:a})=>{a.result=s},O)])}destroy(){this._handles=b(this._handles)}_applyProjectionAndElevationAlignment(e){if(e==null)return e;const{spatialReference:t,elevationProvider:i}=this.view;return ft(e,t,i)??(Lt(this.analysis,e.spatialReference,$t),null)}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(e==null||t==null)return null;const n=this._euclideanDistances(e,t),s=this._geodesicDistance(e,t,n.horizontal.value),a=i===V.Geodesic||i===V.Auto&&n.horizontal.value>Mt?"geodesic":"euclidean";return{mode:a,distance:a==="euclidean"?n.direct:s,directDistance:n.direct,horizontalDistance:n.horizontal,verticalDistance:n.vertical,geodesicDistance:s}}_euclideanDistances(e,t){const i=e.clone();i.z=t.z;const n=this._tempStartPosition,s=this._tempEndPosition,a=this._tempCornerPosition,d=this.view.spatialReference,c=this._sphericalPCPF,o=_e(d,c)?c:d;Q(e,n,o),Q(t,s,o),Q(i,a,o);const h=le(n,s),u=le(a,s),p=Math.abs(t.z-e.z),w=R=>this._unitNormalizer.normalizeDistance(R),y=w(h),E=w(u),x=w(p);return{direct:U(y,"meters"),horizontal:U(E,"meters"),vertical:U(x,"meters")}}_geodesicDistance(e,t,i){const n=e.spatialReference,s=new Re({spatialReference:n});s.addPath([e,t]);const a=n.isGeographic&&mt(n)?vt([s],"meters")[0]:n.isWebMercator?Ct(s,"meters"):null,d=a??this._fallbackGeodesicDistance(e,t,i);return U(d,"meters")}_fallbackGeodesicDistance(e,t,i){if(me(e,Pe)&&me(t,Se)){const n=new wt;return yt(n,Pe,Se),n.distance}return i}};r([l()],A.prototype,"view",void 0),r([l()],A.prototype,"analysis",void 0),r([l()],A.prototype,"viewData",void 0),r([l()],A.prototype,"_computedResult",null),A=r([de(Ce)],A);const Pe=v(),Se=v();var m,P;(function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"})(m||(m={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(P||(P={}));function Dt(e){const t=new Ne,{vertex:i,fragment:n}=t;Ie(i,e),i.uniforms.add(new q("width",a=>a.width)),t.attributes.add(f.POSITION,"vec3"),t.attributes.add(f.NORMAL,"vec3"),t.attributes.add(f.UV0,"vec2"),t.attributes.add(f.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add(K`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),n.uniforms.add(new q("outlineSize",a=>a.outlineSize),new X("outlineColor",a=>a.outlineColor),new q("stripeLength",a=>a.stripeLength),new X("stripeEvenColor",a=>a.stripeEvenColor),new X("stripeOddColor",a=>a.stripeOddColor));const s=1/Math.sqrt(2);return n.code.add(K`
    const float INV_SQRT2 = ${K.float(s)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),t}const Tt=Object.freeze(Object.defineProperty({__proto__:null,build:Dt},Symbol.toStringTag,{value:"Module"}));let Ve=class $e extends Ue{constructor(t,i,n){super(t,i,n)}initializeProgram(t){return new We(t.rctx,$e.shader.get().build(this.configuration),Fe)}_setPipelineState(t){const i=t===ue.NONE,n=this.configuration;return ke({blending:n.transparent?i?Qe:qe(t):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Ke.LESS},depthWrite:Xe,colorWrite:Je})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Ze.TRIANGLE_STRIP}};Ve.shader=new He(Tt,()=>Be(()=>import("./MeasurementArrow.glsl-d8719aa7.js"),["assets/MeasurementArrow.glsl-d8719aa7.js","assets/index-d29f6b97.js","assets/index-0492b785.css","assets/UnitNormalizer-f7f273c1.js","assets/Segment-1413661a.js","assets/unitFormatUtils-233032b0.js","assets/LineVisualElement-db91c665.js","assets/elevationInfoUtils-77250170.js","assets/geometryEngine-cfc072f3.js","assets/geometryEngineBase-4f4260d8.js","assets/hydrated-82b0583a.js","assets/RightAngleQuadVisualElement-62adb2cd.js","assets/VisualElementResources-0bc87c86.js"]));let F=class extends Ye{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=ue.NONE}};r([J()],F.prototype,"polygonOffsetEnabled",void 0),r([J()],F.prototype,"transparent",void 0),r([J({count:ue.COUNT})],F.prototype,"transparencyPassType",void 0);class xt extends tt{constructor(t){super(t,new Gt),this._configuration=new F}getConfiguration(t,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}dispose(){}intersect(){}requiresSlot(t,i){return i===ve.Color||i===ve.Alpha?t===(this._transparent?ye.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ye.OPAQUE_MATERIAL):!1}createGLMaterial(t){return new Rt(t)}createBufferWriter(){return new Wt}get _transparent(){const{parameters:t}=this;return t.outlineColor[3]<1||t.stripeEvenColor[3]<1||t.stripeOddColor[3]<1}}class Rt extends it{beginSlot(t){return this.ensureTechnique(Ve,t)}}class Gt extends st{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=Z(1,.5,0,1),this.stripeEvenColor=Z(1,1,1,1),this.stripeOddColor=Z(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const jt=et().vec3f(f.POSITION).vec3f(f.NORMAL).vec2f(f.UV0).f32(f.AUXPOS1),Nt=v(),It=v(),Ht=v(),Bt=v(),Ut=v();let Wt=class{constructor(){this.vertexBufferLayout=jt}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return 2*(t.indices.get(f.POSITION).length/2+1)}write(t,i,n,s,a){const d=n.vertexAttributes.get(f.POSITION).data,c=n.vertexAttributes.get(f.NORMAL).data,o=d.length/3,h=n&&n.indices&&n.indices.get(f.POSITION);h&&h.length!==2*(o-1)&&console.warn("MeasurementArrowMaterial does not support indices");const u=Nt,p=It,w=Ht,y=Bt,E=Ut,x=s.position,R=s.normal,G=s.uv0;let j=0;for(let L=0;L<o;++L){const k=3*L;if(Y(u,d[k],d[k+1],d[k+2]),L<o-1){const z=3*(L+1);Y(p,d[z],d[z+1],d[z+2]),Y(E,c[z],c[z+1],c[z+2]),ee(E,E),Ee(w,p,u),ee(w,w),nt(y,E,w),ee(y,y)}const De=le(u,p);t&&i&&(te(u,u,t),te(p,p,t),te(y,y,i));const $=a+2*L,N=$+1;x.setVec($,u),x.setVec(N,u),R.setVec($,y),R.setVec(N,y),G.set($,0,j),G.set($,1,-1),G.set(N,0,j),G.set(N,1,1),L<o-1&&(j+=De)}const Me=s.auxpos1;for(let L=0;L<2*o;++L)Me.set(a+L,j)}};class Ft extends Pt{constructor(t){super(t),this._parameters={arrowWidth:16,arrowOutlineColor:C.toUnitRGBA(T()),arrowStripeEvenColor:C.toUnitRGBA(St()),arrowStripeOddColor:C.toUnitRGBA(T()),arrowSubdivisions:128},this._origin=v(),this._originTransform=at(),this._arrowCenter=v(),this._renderOccluded=D.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:t}))}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(t){this._stripeLength=t,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(t){if(this._stripesEnabled=t,this.attached){const i=this.opacity,{arrowStripeEvenColor:n,arrowStripeOddColor:s}=this._parameters,a=I(Oe,this._stripesEnabled?n:s,i);this._arrowMaterial.setParameters({stripeEvenColor:a})}}get opacity(){return this._opacity}set opacity(t){t!==this._opacity&&(this._opacity=t,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:t,arrowStripeOddColor:i,arrowOutlineColor:n}=this._parameters,s=this._stripesEnabled?t:i;this._arrowMaterial=new xt({outlineColor:n,stripeEvenColor:s,stripeOddColor:i,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new he,this._handles.add(S(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=b(this._handles)}forEachExternalMaterial(t){t(this._arrowMaterial)}createGeometries(t){if(this._geometry==null||this._geometry.startRenderSpace==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,t.addGeometry(i),this._viewChanged()}_createArrowGeometry(t,i,n,s){const a=this.view.renderCoordsHelper,d=[],c=[],o=(h,u)=>{const p=H.get();Ee(p,h,n),d.push(p),c.push(u)};if(s.type==="euclidean"){s.eval(.5,this._arrowCenter);const h=H.get();a.worldUpAtPosition(this._arrowCenter,h),o(t,h),o(i,h)}else{s.eval(.5,this._arrowCenter);const h=this._parameters.arrowSubdivisions+1&-2;for(let u=0;u<h;++u){const p=u/(h-1),w=H.get(),y=H.get();s.eval(p,w),a.worldUpAtPosition(w,y),o(w,y)}}return rt(this._arrowMaterial,d,c)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const t=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*t})}}_updateArrowOpacity(){const t=this.opacity,{arrowStripeEvenColor:i,arrowStripeOddColor:n,arrowOutlineColor:s}=this._parameters,a=I(Oe,this._stripesEnabled?i:n,t),d=I(kt,s,t),c=I(Qt,n,t);this._arrowMaterial.setParameters({stripeEvenColor:a,outlineColor:d,stripeOddColor:c})}}const Oe=ge(),kt=ge(),Qt=ge();let _=class extends ce{get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(e==null||t==null||e.equals(t))return m.None;const i=this.analysisView.result;if(i==null)return m.Direct;if(i.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?m.ProjectedGeodesic:m.Direct;const{verticalDistance:n,horizontalDistance:s}=i,a=n.value,d=s.value;return Math.min(a/d,d/a)<this.triangleCollapseRatioThreshold?m.Direct:m.Triangle}get actualVisualizedMeasurement(){if(this.analysisView.result==null)switch(this.analysisView.measurementMode){case V.Auto:case V.Euclidean:default:return"euclidean";case V.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(e){this._triangleOrientationOverride==null!==e&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._params={triangleColor:C.toUnitRGBA(T(.75)),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:C.toUnitRGBA(T(.75)),guideLineWidth:2,guideStippleLengthPixels:6,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},this._handles=new he,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=v(),this._endPosition=v(),this._cornerPosition=v(),this._startPositionAtSeaLevel=v(),this._endPositionAtSeaLevel=v(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=P.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._params,t={attached:!0,view:this.view};this._segmentVisualElement=new Ft({...t,geometry:null,renderOccluded:D.OccludeAndTransparent}),this._triangleVisualElement=new B({...t,width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:D.OccludeAndTransparent}),this._rightAngleQuad=new Vt({...t,color:C.toUnitRGBA(T(.75)),renderOccluded:D.OccludeAndTransparent});const i={...t,polygonOffset:!0,renderOccluded:D.OccludeAndTransparent};this._projectedGeodesicLine=new B({...i,width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ie(e.guideStippleLengthPixels)}),this._geodesicStartHint=new B({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ie(e.guideStippleLengthPixels)}),this._geodesicEndHint=new B({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ie(e.guideStippleLengthPixels)});const n={...t,backgroundColor:be(.6),calloutColor:be(.5),textColor:Ot()};this._segmentLabel=new ne({...n,fontSize:e.directLabelFontSize}),this._verticalLabel=new ne({...n,fontSize:e.verticalLabelFontSize}),this._horizontalLabel=new ne({...n,fontSize:e.horizontalLabelFontSize}),this._handles.add([S(()=>{const{elevationAlignedStartPoint:s,elevationAlignedEndPoint:a}=this.analysisView,d=this.view;return{view:d,camera:d.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:s,elevationAlignedEndPoint:a,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},s=>this._updateGeometryAndViewMode(s),O),S(()=>({visible:this.visible,viewMode:this.viewMode}),s=>this._updateVisualElementVisibility(s),O),S(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),s=>this._updateLabelText(s),O),S(()=>({visible:this.visible,viewMode:this.viewMode}),s=>this._updateLabelVisibility(s),O),S(()=>this._measurementArrowStripeLength,s=>this._updateSegmentStripeLength(s),O),ot(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._handles=b(this._handles),this._segmentVisualElement=b(this._segmentVisualElement),this._triangleVisualElement=b(this._triangleVisualElement),this._rightAngleQuad=b(this._rightAngleQuad),this._projectedGeodesicLine=b(this._projectedGeodesicLine),this._geodesicStartHint=b(this._geodesicStartHint),this._geodesicEndHint=b(this._geodesicEndHint),this._segmentLabel=b(this._segmentLabel),this._verticalLabel=b(this._verticalLabel),this._horizontalLabel=b(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case m.None:break;case m.Direct:this._segmentVisualElement.visible=!0;break;case m.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case m.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:i,elevationAlignedStartPoint:n,elevationAlignedEndPoint:s,orientation:a,visualizedMeasurement:d,stripeLength:c}){const o=e.renderCoordsHelper;if(o==null||n==null||s==null||n.equals(s))return;let h=this._startPosition,u=this._endPosition;o.toRenderCoords(n,h),o.toRenderCoords(s,u);const p=a===P.AboveSegment?1:-1,w=p*(o.getAltitude(u)-o.getAltitude(h));w<0&&(h=this._endPosition,u=this._startPosition);const y=d==="geodesic"?new fe(this._startPosition,this._endPosition,o.spatialReference):new M(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=y,this._updateSegmentStripeLength(c),i){case m.Direct:this._updateSegment(y,a);break;case m.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:y,orientation:a,startPosition:h,endPosition:u,deltaSign:p,altitudeDelta:w});break;case m.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:a,startPosition:h,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===P.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:i,orientation:n,startPosition:s,endPosition:a,deltaSign:d,altitudeDelta:c}){const o=this._cornerPosition;e.worldUpAtPosition(s,o),lt(o,o,d*Math.abs(c)),dt(o,o,s),this._triangleVisualElement.geometry=[[[s[0],s[1],s[2]],[o[0],o[1],o[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:s,center:o,next:a};const h=new M(s,o),u=new M(o,a),p=qt(s,a,o,n,t);this._segmentLabel.anchor=p.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=p.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=p.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:i,endPosition:n}){e.setAltitude(this._startPositionAtSeaLevel,0,i),e.setAltitude(this._endPositionAtSeaLevel,0,n);const s=new fe(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(s),this._geodesicStartHint.setGeometryFromSegment(new M(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new M(this._endPositionAtSeaLevel,n)),this._segmentLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._segmentLabel.anchor=t===P.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){e!=null?(this._segmentLabel.text=t==="euclidean"?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const i=this._segmentLabel,n=this._horizontalLabel,s=this._verticalLabel;if(i.visible=!1,n.visible=!1,s.visible=!1,e)switch(t){case m.Direct:i.visible=!0;break;case m.Triangle:i.visible=!0,n.visible=!0,s.visible=!0;break;case m.ProjectedGeodesic:i.visible=!0;case m.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(t==null||e==null)return null;const{directDistance:i,horizontalDistance:n,verticalDistance:s,geodesicDistance:a}=t,d=this.analysisView.unit,c=o=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...o});switch(d){case"metric":return c({euclideanDistance:i&&re(e,i),geodesicDistance:a&&re(e,a),horizontalDistance:n&&re(e,n),verticalDistance:s&&zt(e,s)});case"imperial":return c({euclideanDistance:i&&ae(e,i),geodesicDistance:a&&ae(e,a),horizontalDistance:n&&ae(e,n),verticalDistance:s&&Et(e,s)});default:return c({euclideanDistance:i&&W(e,i,d),geodesicDistance:a&&W(e,a,d),horizontalDistance:n&&W(e,n,d),verticalDistance:s&&W(e,s,d)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;e!=null?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===P.Auto?this.view.state.camera.aboveGround?P.AboveSegment:P.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!(t!=null&&t.state))return!1;const i=t.state.camera,n=t.renderCoordsHelper;if(!n)return!1;const s=i.computeScreenPixelSizeAt(e);return n.getAltitude(e)/s>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(e==null)return null;let i=null;const n=e.directDistance;switch(t){case"metric":i=n&&oe(n,"meters");break;case"imperial":i=n&&oe(n,ct(n.value,n.unit));break;default:i=n&&oe(n,t)}return i==null?null:ht(i.value/30)*ut(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,gt("esri/core/t9n/Units").then(e=>{this.messages=e}).finally(()=>{this.loadingMessages=!1})}get testData(){var e;return{labels:this.labels,stripeLength:(e=this._segmentVisualElement)==null?void 0:e.stripeLength}}};function qt(e,t,i,n,s){const a=Kt,d=Xt;s.projectToRenderScreen(i,a),s.projectToRenderScreen(t,d);const c={segment:"bottom",horizontal:"top",vertical:a[0]<d[0]?"left":"right"};{const o=Jt,h=Zt;if(se(e,i,o,s),se(e,t,h,s),we(o,h)>=Ae){const u=Math.sign(o[1])===Math.sign(h[1]);c.segment=u?Le(c.vertical):c.vertical}else{const u=Yt;se(i,t,u,s),we(u,h)>=Ae&&(c.segment=Math.sign(u[0])===Math.sign(h[0])?Le(c.horizontal):c.horizontal)}}if(n===P.BelowSegment){const o=h=>h==="top"?"bottom":"top";c.segment=o(c.segment),c.horizontal=o(c.horizontal),c.vertical=o(c.vertical)}return c}r([l()],_.prototype,"_triangleOrientationOverride",void 0),r([l()],_.prototype,"messages",void 0),r([l()],_.prototype,"view",void 0),r([l()],_.prototype,"analysis",void 0),r([l()],_.prototype,"analysisView",void 0),r([l()],_.prototype,"loadingMessages",void 0),r([l()],_.prototype,"visible",null),r([l()],_.prototype,"viewMode",null),r([l()],_.prototype,"actualVisualizedMeasurement",null),r([l()],_.prototype,"visualElementOrientation",void 0),r([l()],_.prototype,"triangleCollapseRatioThreshold",void 0),r([l()],_.prototype,"allowVisualElementsOrientationChange",null),r([l()],_.prototype,"labels",null),r([l()],_.prototype,"_labelsText",null),r([l()],_.prototype,"_actualVisualElementsOrientation",null),r([l()],_.prototype,"_measurementArrowStripeLength",null),_=r([de("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],_);const Ae=Math.cos(pt(12)),Kt=ze(),Xt=ze(),Jt=pe(),Zt=pe(),Yt=pe();let g=class extends At(ce){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=V.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new _({view:e,analysis:t,analysisView:this}),this._analysisController=new A({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=b(this._analysisController),this._analysisVisualization=b(this._analysisVisualization)}get updating(){var e;return!!((e=this._analysisVisualization)!=null&&e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){var e;return((e=this._analysisVisualization.labels.direct)==null?void 0:e.text)??""}get horizontalLabelText(){var e;return((e=this._analysisVisualization.labels.horizontal)==null?void 0:e.text)??""}get verticalLabelText(){var e;return((e=this._analysisVisualization.labels.vertical)==null?void 0:e.text)??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...(e=this._analysisVisualization)==null?void 0:e.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};r([l()],g.prototype,"updating",null),r([l({readOnly:!0})],g.prototype,"type",void 0),r([l({constructOnly:!0,nonNullable:!0})],g.prototype,"analysis",void 0),r([l()],g.prototype,"result",void 0),r([l()],g.prototype,"measurementMode",void 0),r([l()],g.prototype,"elevationAlignedStartPoint",void 0),r([l()],g.prototype,"elevationAlignedEndPoint",void 0),r([l({readOnly:!0})],g.prototype,"viewMode",null),r([l({readOnly:!0})],g.prototype,"actualVisualizedMeasurement",null),r([l()],g.prototype,"visualElementOrientation",null),r([l()],g.prototype,"allowVisualElementsOrientationChange",null),r([l()],g.prototype,"triangleCollapseRatioThreshold",null),r([l({readOnly:!0})],g.prototype,"directLabelText",null),r([l({readOnly:!0})],g.prototype,"horizontalLabelText",null),r([l({readOnly:!0})],g.prototype,"verticalLabelText",null),r([l()],g.prototype,"_analysisVisualization",void 0),r([l()],g.prototype,"_analysisController",void 0),r([l()],g.prototype,"unit",null),r([l(bt)],g.prototype,"_defaultUnit",void 0),g=r([de("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],g);const ei=g,di=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"}));export{di as D,Dt as n};
