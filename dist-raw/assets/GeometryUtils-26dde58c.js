var T;(function(x){x[x.Unknown=0]="Unknown",x[x.Point=1]="Point",x[x.LineString=2]="LineString",x[x.Polygon=3]="Polygon"})(T||(T={}));class p{constructor(i,s){this.x=i,this.y=s}clone(){return new p(this.x,this.y)}equals(i,s){return i===this.x&&s===this.y}isEqual(i){return i.x===this.x&&i.y===this.y}setCoords(i,s){this.x=i,this.y=s}normalize(){const i=this.x,s=this.y,t=Math.sqrt(i*i+s*s);this.x/=t,this.y/=t}rightPerpendicular(){const i=this.x;this.x=this.y,this.y=-i}move(i,s){this.x+=i,this.y+=s}assign(i){this.x=i.x,this.y=i.y}assignAdd(i,s){this.x=i.x+s.x,this.y=i.y+s.y}assignSub(i,s){this.x=i.x-s.x,this.y=i.y-s.y}rotate(i,s){const t=this.x,h=this.y;this.x=t*i-h*s,this.y=t*s+h*i}scale(i){this.x*=i,this.y*=i}length(){const i=this.x,s=this.y;return Math.sqrt(i*i+s*s)}static distance(i,s){const t=s.x-i.x,h=s.y-i.y;return Math.sqrt(t*t+h*h)}static add(i,s){return new p(i.x+s.x,i.y+s.y)}static sub(i,s){return new p(i.x-s.x,i.y-s.y)}}class M{constructor(i,s,t){this.ratio=i,this.x=s,this.y=t}}class b{constructor(i,s,t,h=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=e,this._tileSize=512*h,this._dz=i,this._yPos=s,this._xPos=t}setPixelMargin(i){i!==this._pixelMargin&&(this._pixelMargin=i,this.setExtent(this._extent))}setExtent(i){this._extent=i,this._finalRatio=this._tileSize/i*(1<<this._dz);let s=this._pixelRatio*this._pixelMargin;s/=this._finalRatio;const t=i>>this._dz;s>t&&(s=t),this._margin=s,this._xmin=t*this._xPos-s,this._ymin=t*this._yPos-s,this._xmax=this._xmin+t+2*s,this._ymax=this._ymin+t+2*s}reset(i){this._type=i,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(i,s){this._pushLine(),this._prevIsIn=this._isIn(i,s),this._moveTo(i,s,this._prevIsIn),this._prevPt=new p(i,s),this._firstPt=new p(i,s),this._dist=0}lineTo(i,s){const t=this._isIn(i,s),h=new p(i,s),e=p.distance(this._prevPt,h);let n,a,_,r,d,g,f,m;if(t)this._prevIsIn?this._lineTo(i,s,!0):(n=this._prevPt,a=h,_=this._intersect(a,n),this._start=this._dist+e*(1-this._r),this._lineTo(_.x,_.y,!0),this._lineTo(a.x,a.y,!0));else if(this._prevIsIn)a=this._prevPt,n=h,_=this._intersect(a,n),this._lineTo(_.x,_.y,!0),this._lineTo(n.x,n.y,!1);else{const l=this._prevPt,o=h;if(l.x<=this._xmin&&o.x<=this._xmin||l.x>=this._xmax&&o.x>=this._xmax||l.y<=this._ymin&&o.y<=this._ymin||l.y>=this._ymax&&o.y>=this._ymax)this._lineTo(o.x,o.y,!1);else{const u=[];if((l.x<this._xmin&&o.x>this._xmin||l.x>this._xmin&&o.x<this._xmin)&&(r=(this._xmin-l.x)/(o.x-l.x),m=l.y+r*(o.y-l.y),m<=this._ymin?g=!1:m>=this._ymax?g=!0:u.push(new M(r,this._xmin,m))),(l.x<this._xmax&&o.x>this._xmax||l.x>this._xmax&&o.x<this._xmax)&&(r=(this._xmax-l.x)/(o.x-l.x),m=l.y+r*(o.y-l.y),m<=this._ymin?g=!1:m>=this._ymax?g=!0:u.push(new M(r,this._xmax,m))),(l.y<this._ymin&&o.y>this._ymin||l.y>this._ymin&&o.y<this._ymin)&&(r=(this._ymin-l.y)/(o.y-l.y),f=l.x+r*(o.x-l.x),f<=this._xmin?d=!1:f>=this._xmax?d=!0:u.push(new M(r,f,this._ymin))),(l.y<this._ymax&&o.y>this._ymax||l.y>this._ymax&&o.y<this._ymax)&&(r=(this._ymax-l.y)/(o.y-l.y),f=l.x+r*(o.x-l.x),f<=this._xmin?d=!1:f>=this._xmax?d=!0:u.push(new M(r,f,this._ymax))),u.length===0)d?g?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):g?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(u.length>1&&u[0].ratio>u[1].ratio)this._start=this._dist+e*u[1].ratio,this._lineTo(u[1].x,u[1].y,!0),this._lineTo(u[0].x,u[0].y,!0);else{this._start=this._dist+e*u[0].ratio;for(let y=0;y<u.length;y++)this._lineTo(u[y].x,u[y].y,!0)}this._lineTo(o.x,o.y,!1)}}this._dist+=e,this._prevIsIn=t,this._prevPt=h}close(){if(this._line.length>2){const i=this._firstPt,s=this._prevPt;(i.x!==s.x||i.y!==s.y)&&this.lineTo(i.x,i.y);const t=this._line;let h=t.length;for(;h>=4&&(t[0].x===t[1].x&&t[0].x===t[h-2].x||t[0].y===t[1].y&&t[0].y===t[h-2].y);)t.pop(),t[0].x=t[h-2].x,t[0].y=t[h-2].y,--h}}result(i=!0){return this._pushLine(),this._lines.length===0?null:(this._type===T.Polygon&&i&&I.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==T.LineString)throw new Error("Only valid for lines");this._pushLine();const i=this._lines,s=i.length;if(s===0)return null;const t=[];for(let h=0;h<s;h++)t.push({line:i[h],start:this._starts[h]||0});return t}_isIn(i,s){return i>=this._xmin&&i<=this._xmax&&s>=this._ymin&&s<=this._ymax}_intersect(i,s){let t,h,e;if(s.x>=this._xmin&&s.x<=this._xmax)h=s.y<=this._ymin?this._ymin:this._ymax,e=(h-i.y)/(s.y-i.y),t=i.x+e*(s.x-i.x);else if(s.y>=this._ymin&&s.y<=this._ymax)t=s.x<=this._xmin?this._xmin:this._xmax,e=(t-i.x)/(s.x-i.x),h=i.y+e*(s.y-i.y);else{h=s.y<=this._ymin?this._ymin:this._ymax,t=s.x<=this._xmin?this._xmin:this._xmax;const n=(t-i.x)/(s.x-i.x),a=(h-i.y)/(s.y-i.y);n<a?(e=n,h=i.y+n*(s.y-i.y)):(e=a,t=i.x+a*(s.x-i.x))}return this._r=e,new p(t,h)}_pushLine(){this._line&&(this._type===T.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===T.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===T.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(i,s,t){this._type!==T.Polygon?t&&(i=Math.round((i-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new p(i,s))):(t||(i<this._xmin&&(i=this._xmin),i>this._xmax&&(i=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),i=Math.round((i-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new p(i,s)),this._isH=!1,this._isV=!1)}_lineTo(i,s,t){let h,e;if(this._type!==T.Polygon)if(t){if(i=Math.round((i-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(i,s)))return;this._line.push(new p(i,s))}else this._line&&this._line.length>0&&this._pushLine();else if(t||(i<this._xmin&&(i=this._xmin),i>this._xmax&&(i=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),i=Math.round((i-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const n=h.x===i,a=h.y===s;if(n&&a)return;this._isH&&n?(h.x=i,h.y=s,e=this._line[this._line.length-2],e.x===i&&e.y===s?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(e=this._line[this._line.length-2],this._isH=e.x===i,this._isV=e.y===s)):(this._isH=e.x===i,this._isV=e.y===s)):this._isV&&a?(h.x=i,h.y=s,e=this._line[this._line.length-2],e.x===i&&e.y===s?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(e=this._line[this._line.length-2],this._isH=e.x===i,this._isV=e.y===s)):(this._isH=e.x===i,this._isV=e.y===s)):(this._line.push(new p(i,s)),this._isH=n,this._isV=a)}else this._line.push(new p(i,s))}}class E{setExtent(i){this._ratio=i===4096?1:4096/i}get validateTessellation(){return this._ratio<1}reset(i){this._lines=[],this._line=null}moveTo(i,s){this._line&&this._lines.push(this._line),this._line=[];const t=this._ratio;this._line.push(new p(i*t,s*t))}lineTo(i,s){const t=this._ratio;this._line.push(new p(i*t,s*t))}close(){const i=this._line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}var c;(function(x){x[x.sideLeft=0]="sideLeft",x[x.sideRight=1]="sideRight",x[x.sideTop=2]="sideTop",x[x.sideBottom=3]="sideBottom"})(c||(c={}));class I{static simplify(i,s,t){if(!t)return;const h=-s,e=i+s,n=-s,a=i+s,_=[],r=[],d=t.length;for(let f=0;f<d;++f){const m=t[f];if(!m||m.length<2)continue;let l=m[0],o;const u=m.length;for(let y=1;y<u;++y)o=m[y],l.x===o.x&&(l.x<=h&&(l.y>o.y?(_.push(f),_.push(y),_.push(c.sideLeft),_.push(-1)):(r.push(f),r.push(y),r.push(c.sideLeft),r.push(-1))),l.x>=e&&(l.y<o.y?(_.push(f),_.push(y),_.push(c.sideRight),_.push(-1)):(r.push(f),r.push(y),r.push(c.sideRight),r.push(-1)))),l.y===o.y&&(l.y<=n&&(l.x<o.x?(_.push(f),_.push(y),_.push(c.sideTop),_.push(-1)):(r.push(f),r.push(y),r.push(c.sideTop),r.push(-1))),l.y>=a&&(l.x>o.x?(_.push(f),_.push(y),_.push(c.sideBottom),_.push(-1)):(r.push(f),r.push(y),r.push(c.sideBottom),r.push(-1)))),l=o}if(_.length===0||r.length===0)return;I.fillParent(t,r,_),I.fillParent(t,_,r);const g=[];I.calcDeltas(g,r,_),I.calcDeltas(g,_,r),I.addDeltas(g,t)}static fillParent(i,s,t){const h=t.length,e=s.length;for(let n=0;n<e;n+=4){const a=s[n],_=s[n+1],r=s[n+2],d=i[a][_-1],g=i[a][_];let f=8092,m=-1;for(let l=0;l<h;l+=4){if(t[l+2]!==r)continue;const o=t[l],u=t[l+1],y=i[o][u-1],w=i[o][u];switch(r){case c.sideLeft:case c.sideRight:if(v(d.y,y.y,w.y)&&v(g.y,y.y,w.y)){const R=Math.abs(w.y-y.y);R<f&&(f=R,m=l)}break;case c.sideTop:case c.sideBottom:if(v(d.x,y.x,w.x)&&v(g.x,y.x,w.x)){const R=Math.abs(w.x-y.x);R<f&&(f=R,m=l)}break}}s[n+3]=m}}static calcDeltas(i,s,t){const h=s.length;for(let e=0;e<h;e+=4){const n=[],a=I.calcDelta(e,s,t,n);i.push(s[e]),i.push(s[e+1]),i.push(s[e+2]),i.push(a)}}static calcDelta(i,s,t,h){const e=s[i+3];if(e===-1)return 0;const n=h.length;return n>1&&h[n-2]===e?0:(h.push(e),I.calcDelta(e,t,s,h)+1)}static addDeltas(i,s){const t=i.length;let h=0;for(let e=0;e<t;e+=4){const n=i[e+3];n>h&&(h=n)}for(let e=0;e<t;e+=4){const n=s[i[e]],a=i[e+1],_=h-i[e+3];switch(i[e+2]){case c.sideLeft:n[a-1].x-=_,n[a].x-=_,a===1&&(n[n.length-1].x-=_),a===n.length-1&&(n[0].x-=_);break;case c.sideRight:n[a-1].x+=_,n[a].x+=_,a===1&&(n[n.length-1].x+=_),a===n.length-1&&(n[0].x+=_);break;case c.sideTop:n[a-1].y-=_,n[a].y-=_,a===1&&(n[n.length-1].y-=_),a===n.length-1&&(n[0].y-=_);break;case c.sideBottom:n[a-1].y+=_,n[a].y+=_,a===1&&(n[n.length-1].y+=_),a===n.length-1&&(n[0].y+=_);break}}}}const v=(x,i,s)=>x>=i&&x<=s||x>=s&&x<=i,P=Number.POSITIVE_INFINITY,L=Math.PI,H=2*L,C=128/L,B=L/180,D=1/Math.LN2;function V(x,i){return x=x%i,x>=0?x:x+i}function N(x){return V(x*C,256)}function k(x){return Math.log(x)*D}function q(x,i,s){return x*(1-s)+i*s}export{P as C,T as G,p as P,E as S,b as T,B as a,L as b,H as c,q as i,k as l,V as p,N as r};
