import{ae as l,af as a,ai as S,aj as k,W as d,fG as q,cd as w,g as $,fH as y,fI as g,bN as c,bl as h,fJ as b,bq as p,e as E}from"./index-6e11f365.js";import{c as G}from"./normalizeUtilsSync-1c027b89.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends k{constructor(o){super(o)}get bounds(){const o=this.coords;return o==null||o.extent==null?null:d(o.extent)}get coords(){var t;const o=(t=this.element.georeference)==null?void 0:t.coords;return q(o,this.spatialReference).geometry}get normalizedCoords(){return w.fromJSON(G(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};l([a()],n.prototype,"spatialReference",void 0),l([a()],n.prototype,"element",void 0),l([a()],n.prototype,"bounds",null),l([a()],n.prototype,"coords",null),l([a()],n.prototype,"normalizedCoords",null),l([a()],n.prototype,"normalizedBounds",null),n=l([S("esri.layers.support.MediaElementView")],n);const r=E(),s=u(),i=u(),f=u();function V(e,o,t){return $(r,o[0],o[1],1),y(r,r,g(s,t)),r[2]===0?c(e,r[0],r[1]):c(e,r[0]/r[2],r[1]/r[2])}function W(e,o,t){return m(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),m(f,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),h(e,b(i,i),f),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function m(e,o,t,x,z,C,j,v,B){p(e,o,x,C,t,z,j,1,1,1),$(r,v,B,1),b(s,e);const[J,N,R]=y(r,r,g(s,s));return p(s,J,0,0,0,N,0,0,0,R),h(e,s,e)}export{V as h,n as i,W as j};