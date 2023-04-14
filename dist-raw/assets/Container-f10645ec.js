import{ae as g,af as m,ai as S,aj as H,m as M,L as A,cE as O,aP as v,a as w,e as D}from"./index-468a9268.js";import{p as G,c as W,n as P}from"./parser-0c644652.js";import{e as V}from"./definitions-3f56d206.js";import{a as q}from"./enums-08489827.js";import{a as L,T as N}from"./TextureDescriptor-8d60c85d.js";const T=-1;let u=class extends H{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=M("mapview-transitions-duration"),this.effects=[]}set effect(t){const e=this._get("effect");if(t=t||"",e!==t){this._set("effect",t);try{this._transitionTo(I(t))}catch(i){this._transitionTo([]),A.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:i})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&x(this._current,I(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&x(this._current,t,this.scale)?(this._final=t,this._to=O(t),F(this._current,this._to,this.scale),this._from=O(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?O(this._current[0].effects):[])}_applyTimeTransition(t){if(!this._to||!this._from||!this._current||!this._final)return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const r=this._current[i],h=this._from[i],l=this._to[i];r.scale=j(h.scale,l.scale,e);for(let o=0;o<r.effects.length;o++){const n=r.effects[o],c=h.effects[o],d=l.effects[o];n.interpolate(c,d,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?O(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,i=this._current.length-1;let r,h,l=1;if(e.length===1||t>=e[0].scale)h=r=e[0].effects;else if(t<=e[i].scale)h=r=e[i].effects;else for(let o=0;o<i;o++){const n=e[o],c=e[o+1];if(n.scale>=t&&c.scale<=t){l=(t-n.scale)/(c.scale-n.scale),r=n.effects,h=c.effects;break}}for(let o=0;o<this.effects.length;o++)this.effects[o].interpolate(r[o],h[o],l)}};g([m()],u.prototype,"_to",void 0);g([m()],u.prototype,"duration",void 0);g([m({value:""})],u.prototype,"effect",null);g([m({readOnly:!0})],u.prototype,"effects",void 0);g([m({readOnly:!0})],u.prototype,"hasEffects",null);g([m({value:0})],u.prototype,"scale",null);g([m({readOnly:!0})],u.prototype,"transitioning",null);u=g([S("esri.layers.effects.EffectView")],u);function I(s){const t=G(s)||[];return B(t)?[{scale:T,effects:t}]:t}function x(s,t,e){var r,h,l,o;return!((r=s[0])!=null&&r.effects)||!((h=t[0])!=null&&h.effects)?!0:(((l=s[0])==null?void 0:l.scale)===T||((o=t[0])==null?void 0:o.scale)===T)&&(s.length>1||t.length>1)&&e<=0?!1:W(s[0].effects,t[0].effects)}function F(s,t,e){const i=s.length>t.length?s:t,r=s.length>t.length?t:s,h=r[r.length-1],l=(h==null?void 0:h.scale)??e,o=(h==null?void 0:h.effects)??[];for(let n=r.length;n<i.length;n++)r.push({scale:l,effects:[...o]});for(let n=0;n<i.length;n++)r[n].scale=r[n].scale===T?e:r[n].scale,i[n].scale=i[n].scale===T?e:i[n].scale,P(r[n].effects,i[n].effects)}function j(s,t,e){return s+(t-s)*e}function B(s){const t=s[0];return t?"type"in t:!1}const U=1/M("mapview-transitions-duration");class X extends v{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var i;if(this._stage===t)return;const e=this._stage;this._stage=t,t?(i=this._stage)!=null&&i.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e==null||e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver?this._fadeInResolver.promise:(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=w(),this.requestRender(),this._fadeInResolver.promise)}fadeOut(){return this._fadeOutResolver?this._fadeOutResolver.promise:(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=w(),this.requestRender(),this._fadeOutResolver.promise)}endTransitions(){var t,e;(t=this._fadeInResolver)==null||t.call(this),this._fadeInResolver=null,(e=this._fadeOutResolver)==null||e.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(!this.fadeTransitionEnabled)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const i=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===i)this.computedVisible=this.visible;else{const h=t*U;this.computedOpacity=r>i?Math.max(i,r-h):Math.min(i,r+h),this.computedVisible=this.computedOpacity>0;const l=i===this.computedOpacity;this.inFadeTransition=!l,l||this.requestRender()}}}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}const z=1,it=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],st=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],R=256,p={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},E=A.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function Z(s,t){t.fillColor[0]=s.color.r/255,t.fillColor[1]=s.color.g/255,t.fillColor[2]=s.color.b/255,t.fillColor[3]=s.color.a,s.haloColor?(t.outlineColor[0]=s.haloColor.r/255,t.outlineColor[1]=s.haloColor.g/255,t.outlineColor[2]=s.haloColor.b/255,t.outlineColor[3]=s.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=s.fillOpacity,t.outlineColor[3]*=s.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=p.outlineWidth,t.outerHaloWidth=p.outerHaloWidth,t.innerHaloWidth=p.innerHaloWidth,t.outlinePosition=p.outlinePosition}const $=[0,0,0,0];class k{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.9*.75,.75],outlineColor:[.2*.9,.6*.9,.9*.9,.9],outlinePosition:p.outlinePosition,outlineWidth:p.outlineWidth,innerHaloWidth:p.innerHaloWidth,outerHaloWidth:p.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(R*4),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;Z(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,r=e.outlinePosition-e.outlineWidth/2,h=e.outlinePosition+e.outlineWidth/2,l=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,o=Math.sqrt(Math.PI/2)*z,n=Math.abs(i)>o?Math.round((Math.abs(i)-o)*10)/10:0,c=Math.abs(l)>o?Math.round((Math.abs(l)-o)*10)/10:0;n&&!c?E.error("The outer rim of the highlight is "+n+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!n&&c?E.error("The inner rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):n&&c&&E.error("The highlight is "+Math.max(n,c)+"px away from the edge of the feature; consider reducing some width values.");let d;const a=[void 0,void 0,void 0,void 0];function b(f,y,_){a[0]=(1-_)*f[0]+_*y[0],a[1]=(1-_)*f[1]+_*y[1],a[2]=(1-_)*f[2]+_*y[2],a[3]=(1-_)*f[3]+_*y[3]}const{_texelData:C}=this;for(let f=0;f<R;++f)d=i+f/(R-1)*(l-i),d<i?(a[f*4]=0,a[f*4+1]=0,a[f*4+2]=0,a[f*4+3]=0):d<r?b($,e.outlineColor,(d-i)/(r-i)):d<h?[a[0],a[1],a[2],a[3]]=e.outlineColor:d<l?b(e.outlineColor,e.fillColor,(d-h)/(l-h)):[a[f*4],a[f*4+1],a[f*4+2],a[f*4+3]]=e.fillColor,C[f*4]=255*a[0],C[f*4+1]=255*a[1],C[f*4+2]=255*a[2],C[f*4+3]=255*a[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=l,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const i=new L;i.wrapMode=q.CLAMP_TO_EDGE,i.width=R,i.height=1,this._shadeTex=new N(t,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,R,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,V),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}}class rt extends X{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){!this._effectView&&!t||(this._effectView||(this._effectView=new u),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t){this._highlightOptions=null,this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender());return}this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new k),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:D()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{it as A,rt as C,X as D,u as E,st as R,z as S};
