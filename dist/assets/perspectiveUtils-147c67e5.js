import{ab as a,ac as l,ad as w,an as E,X as d,ej as H,bH as J,g as $,ek as y,el as b,b6 as c,ax as g,em as h,aC as p,e as M,b7 as u}from"./index-e1d30004.js";import{c as N}from"./normalizeUtilsSync-a9493313.js";let n=class extends E{constructor(o){super(o)}get bounds(){const o=this.coords;return o==null||o.extent==null?null:d(o.extent)}get coords(){var t;const o=(t=this.element.georeference)==null?void 0:t.coords;return H(o,this.spatialReference).geometry}get normalizedCoords(){return J.fromJSON(N(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};a([l()],n.prototype,"spatialReference",void 0),a([l()],n.prototype,"element",void 0),a([l()],n.prototype,"bounds",null),a([l()],n.prototype,"coords",null),a([l()],n.prototype,"normalizedCoords",null),a([l()],n.prototype,"normalizedBounds",null),n=a([w("esri.layers.support.MediaElementView")],n);const r=M(),s=u(),i=u(),m=u();function q(e,o,t){return $(r,o[0],o[1],1),y(r,r,b(s,t)),r[2]===0?c(e,r[0],r[1]):c(e,r[0]/r[2],r[1]/r[2])}function A(e,o,t){return f(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),f(m,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),g(e,h(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function f(e,o,t,x,z,C,j,k,v){p(e,o,x,C,t,z,j,1,1,1),$(r,k,v,1),h(s,e);const[B,R,S]=y(r,r,b(s,s));return p(s,B,0,0,0,R,0,0,0,S),g(e,s,e)}export{q as h,n as i,A as j};
