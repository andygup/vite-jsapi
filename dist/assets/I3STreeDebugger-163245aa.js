import{ay as d,e6 as S,dg as a,dX as u,e7 as r,j as y,e as h,y as c,a as g,ct as b,C as j}from"./index-bdad94d1.js";import{y as v}from"./TileTreeDebugger-05e2393b.js";let p=class extends v{constructor(o){super(o)}getTiles(){const o=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,i=this.nodeSR;return o.map(l=>m(l,t,i)).filter(d).sort((l,s)=>l.lij[0]===s.lij[0]?l.label>s.label?-1:1:l.lij[0]-s.lij[0])}};function m(o,t,i){const l=o.serviceObb;if(l==null||t==null)return null;S(n,l.quaternion),a(e,l.center),u(e,i,0,e,t,0,1),n[12]=e[0],n[13]=e[1],n[14]=e[2];const s=[[],[],[]];a(e,l.halfSize),r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[0]=-e[0],r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[0]=-e[0],e[1]=-e[1],r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[1]=-e[1],r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),a(e,l.halfSize),e[0]=-e[0],e[2]=-e[2],r(e,e,n),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),a(e,l.halfSize),e[2]=-e[2],r(e,e,n),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),a(e,l.halfSize),e[1]=-e[1],e[2]=-e[2],r(e,e,n),u(e,t,0,e,i,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new y({rings:s,spatialReference:i});return{lij:[o.level,o.childCount,0],label:o.id,geometry:f}}h([c({constructOnly:!0})],p.prototype,"lv",void 0),h([c({constructOnly:!0})],p.prototype,"nodeSR",void 0),p=h([g("esri.views.3d.layers.support.I3STreeDebugger")],p);const n=b(),e=j();export{p as I3STreeDebugger};
