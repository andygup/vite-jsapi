import{N,J as M,aj as L,ak as Y,t as j,f as W,a7 as X,a4 as H,ac as B,al as u}from"./Theme-6850e6f8.js";class D extends N{_beforeChanged(){super._beforeChanged(),(this.isDirty("pointerBaseWidth")||this.isDirty("cornerRadius")||this.isDirty("pointerLength")||this.isDirty("pointerX")||this.isDirty("pointerY")||this.isDirty("width")||this.isDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){this.markDirtyBounds();let e=this.width(),i=this.height();if(e>0&&i>0){let t=this.get("cornerRadius",8);t=u(t,0,Math.min(e/2,i/2));let r=this.get("pointerX",0),o=this.get("pointerY",0),a=this.get("pointerBaseWidth",15)/2,T=0,_=0,f=0,c=(r-T)*(i-_)-(o-_)*(e-T),n=(r-f)*(0-i)-(o-i)*(e-f);const s=this._display;if(s.moveTo(t,0),c>0&&n>0){let l=Math.round(u(r,t+a,e-a-t));o=u(o,-1/0,0),s.lineTo(l-a,0),s.lineTo(r,o),s.lineTo(l+a,0)}if(s.lineTo(e-t,0),s.arcTo(e,0,e,t,t),c>0&&n<0){let l=Math.round(u(o,t+a,i-a-t));r=u(r,e,1/0),s.lineTo(e,t),s.lineTo(e,Math.max(l-a,t)),s.lineTo(r,o),s.lineTo(e,l+a)}if(s.lineTo(e,i-t),s.arcTo(e,i,e-t,i,t),c<0&&n<0){let l=Math.round(u(r,t+a,e-a-t));o=u(o,i,1/0),s.lineTo(e-t,i),s.lineTo(l+a,i),s.lineTo(r,o),s.lineTo(l-a,i)}if(s.lineTo(t,i),s.arcTo(0,i,0,i-t,t),c<0&&n>0){let l=Math.round(u(o,t+a,i-t-a));r=u(r,-1/0,0),s.lineTo(0,i-t),s.lineTo(0,l+a),s.lineTo(r,o),s.lineTo(0,Math.max(l-a,t))}s.lineTo(0,t),s.arcTo(0,0,t,0,t),s.closePath()}}}}Object.defineProperty(D,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PointedRectangle"}),Object.defineProperty(D,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:N.classNames.concat([D.className])});class x extends M{constructor(e,i,t,r=[]){super(e,i,t,r),Object.defineProperty(this,"_fx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_fy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_label",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fillDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_strokeDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_labelDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_w",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_h",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_keepHoverDp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_htmlContentHovered",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._settings.themeTags=L(this._settings.themeTags,["tooltip"]),super._afterNew(),this.set("background",D.new(this._root,{themeTags:["tooltip","background"]})),this._label=this.children.push(Y.new(this._root,{})),this._disposers.push(this._label.events.on("boundschanged",()=>{this._updateBackground()})),this._disposers.push(this.on("bounds",()=>{this._updateBackground()})),this._updateTextColor(),this._root.tooltipContainer.children.push(this),this.hide(0),this._disposers.push(this.label.onPrivate("htmlElement",e=>{e&&(j(e,"pointerover",i=>{this._htmlContentHovered=!0}),j(e,"pointerout",i=>{this._htmlContentHovered=!1}))})),this._root._tooltips.push(this)}get label(){return this._label}dispose(){super.dispose(),W(this._root._tooltips,this)}_updateChildren(){super._updateChildren(),(this.isDirty("pointerOrientation")||this.isPrivateDirty("minWidth")||this.isPrivateDirty("minHeight"))&&this.get("background")._markDirtyKey("width"),this.get("labelText")!=null&&this.label.set("text",this.get("labelText")),this.get("labelHTML")!=null&&this.label.set("html",this.get("labelHTML"))}_changed(){if(super._changed(),(this.isDirty("pointTo")||this.isDirty("pointerOrientation"))&&this._updateBackground(),this.isDirty("tooltipTarget")&&this.updateBackgroundColor(),this.isDirty("keepTargetHover"))if(this.get("keepTargetHover")){const e=this.get("background");this._keepHoverDp=new X([e.events.on("pointerover",i=>{let t=this.get("tooltipTarget");t&&(t.parent&&t.parent.getPrivate("tooltipTarget")==t&&(t=t.parent),t.hover())}),e.events.on("pointerout",i=>{let t=this.get("tooltipTarget");t&&(t.parent&&t.parent.getPrivate("tooltipTarget")==t&&(t=t.parent),this._htmlContentHovered||t.unhover())})])}else this._keepHoverDp&&(this._keepHoverDp.dispose(),this._keepHoverDp=void 0)}_onShow(){super._onShow(),this.updateBackgroundColor()}updateBackgroundColor(){let e=this.get("tooltipTarget");const i=this.get("background");let t,r;e&&i&&(t=e.get("fill"),r=e.get("stroke"),t==null&&(t=r),this.get("getFillFromSprite")&&(this._fillDp&&this._fillDp.dispose(),t!=null&&i.set("fill",t),this._fillDp=e.on("fill",o=>{o!=null&&(i.set("fill",o),this._updateTextColor(o))}),this._disposers.push(this._fillDp)),this.get("getStrokeFromSprite")&&(this._strokeDp&&this._strokeDp.dispose(),t!=null&&i.set("stroke",t),this._strokeDp=e.on("fill",o=>{o!=null&&i.set("stroke",o)}),this._disposers.push(this._strokeDp)),this.get("getLabelFillFromSprite")&&(this._labelDp&&this._labelDp.dispose(),t!=null&&this.label.set("fill",t),this._labelDp=e.on("fill",o=>{o!=null&&this.label.set("fill",o)}),this._disposers.push(this._labelDp))),this._updateTextColor(t)}_updateTextColor(e){this.get("autoTextColor")&&(e==null&&(e=this.get("background").get("fill")),e==null&&(e=this._root.interfaceColors.get("background")),e instanceof H&&this.label.set("fill",H.alternative(e,this._root.interfaceColors.get("alternativeText"),this._root.interfaceColors.get("text"))))}_setDataItem(e){super._setDataItem(e),this.label._setDataItem(e)}_updateBackground(){super.updateBackground();const e=this._root.container;if(e){let i=.5,t=.5,r=this.get("centerX");r instanceof B&&(i=r.value);let o=this.get("centerY");o instanceof B&&(t=o.value);let a=e.width(),T=e.height(),_=this.parent,f=0,c=0;if(_){f=_.x(),c=_.y();const d=_.get("layerMargin");d&&(f+=d.left||0,c+=d.top||0,a+=(d.left||0)+(d.right||0),T+=(d.top||0)+(d.bottom||0))}const n=this.get("bounds",{left:-f,top:-c,right:a-f,bottom:T-c});this._updateBounds();let s=this.width(),l=this.height();s===0&&(s=this._w),l===0&&(l=this._h);let k=this.get("pointTo",{x:a/2,y:T/2}),h=k.x,p=k.y,m=this.get("pointerOrientation"),b=this.get("background"),g=0,v=0,y=0;b instanceof D&&(g=b.get("pointerLength",0),v=b.get("strokeWidth",0)/2,y=v,b.set("width",s),b.set("height",l));let P=0,C=0,O=n.right-n.left,F=n.bottom-n.top;m=="horizontal"||m=="left"||m=="right"?(v=0,m=="horizontal"?h>n.left+O/2?(h-=s*(1-i)+g,y*=-1):h+=s*i+g:m=="left"?h+=s*(1-i)+g:(h-=s*i+g,y*=-1)):(y=0,m=="vertical"?p>n.top+l/2+g?p-=l*(1-t)+g:(p+=l*t+g,v*=-1):m=="down"?p-=l*(1-t)+g:(p+=l*t+g,v*=-1)),h=u(h,n.left+s*i,n.left+O-s*(1-i))+y,p=u(p,n.top+l*t,n.top+F-l*(1-t))-v,P=k.x-h+s*i+y,C=k.y-p+l*t-v,this._fx=h,this._fy=p;const w=this.get("animationDuration",0);if(w>0&&this.get("visible")&&this.get("opacity")>.1){const d=this.get("animationEasing");this.animate({key:"x",to:h,duration:w,easing:d}),this.animate({key:"y",to:p,duration:w,easing:d})}else this.set("x",h),this.set("y",p);b instanceof D&&(b.set("pointerX",P),b.set("pointerY",C)),s>0&&(this._w=s),l>0&&(this._h=l)}}}Object.defineProperty(x,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tooltip"}),Object.defineProperty(x,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:M.classNames.concat([x.className])});export{x as u};