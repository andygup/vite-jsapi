import{cn as m,ed as G,cx as I,bk as k,L as w,ee as P,ef as S,eg as d,eh as g,ei as x,aF as v,ae as E,ag as F,af as O}from"./index-e1d30004.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function j(r){const s=r.folders||[],t=s.slice(),e=new Map,n=new Map,f=new Map,l=new Map,p=new Map,u={esriGeometryPoint:n,esriGeometryPolyline:f,esriGeometryPolygon:l};(r.featureCollection&&r.featureCollection.layers||[]).forEach(o=>{const i=m(o);i.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,i);const c=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(n,c,o.featureSet.features):a==="esriGeometryPolyline"?h(f,c,o.featureSet.features):a==="esriGeometryPolygon"&&h(l,c,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{p.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(i=>{const a=L(i,o.id,r.networkLinks);a&&t.push(a)})}),t.forEach(o=>{var i;if(o.featureInfos){o.points=m(e.get("esriGeometryPoint")),o.polylines=m(e.get("esriGeometryPolyline")),o.polygons=m(e.get("esriGeometryPolygon")),o.mapImages=[];for(const a of o.featureInfos)switch(a.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const c=u[a.type].get(a.id);c&&((i=o[M[a.type]])==null||i.featureSet.features.push(c));break}case"GroundOverlay":{const c=p.get(a.id);c&&o.mapImages.push(c);break}}o.fullExtent=b([o])}});const y=b(t);return{folders:s,sublayers:t,extent:y}}function J(r,s,t,e){const n=G&&G.findCredential(r);r=I(r,{token:n&&n.token});const f=k.kmlServiceUrl;return w(f,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:e})}function N(r,s,t=null,e=[]){const n=[],f={},l=s.sublayers,p=s.folders.map(u=>u.id);return l.forEach(u=>{var o;const y=new r;if(t?y.read(u,t):y.read(u),e.length&&p.includes(y.id)&&(y.visible=e.includes(y.id)),f[u.id]=y,u.parentFolderId!=null&&u.parentFolderId!==-1){const i=f[u.parentFolderId];i.sublayers||(i.sublayers=[]),(o=i.sublayers)==null||o.unshift(y)}else n.unshift(y)}),n}function h(r,s,t){t.forEach(e=>{r.set(e.attributes[s],e)})}function C(r,s){let t;return s.some(e=>e.id===r&&(t=e,!0)),t}function L(r,s,t){const e=C(r,t);return e&&(e.parentFolderId=s,e.networkLink=e),e}async function T(r){const s=E.fromJSON(r.featureSet).features,t=r.layerDefinition,e=F(t.drawingInfo.renderer),n=O.fromJSON(r.popupInfo),f=[];for(const l of s){const p=await e.getSymbolAsync(l);l.symbol=p,l.popupTemplate=n,l.visible=!0,f.push(l)}return f}function b(r){const s=P(S),t=P(S);for(const e of r){if(e.polygons&&e.polygons.featureSet&&e.polygons.featureSet.features)for(const n of e.polygons.featureSet.features)d(s,n.geometry),g(t,s);if(e.polylines&&e.polylines.featureSet&&e.polylines.featureSet.features)for(const n of e.polylines.featureSet.features)d(s,n.geometry),g(t,s);if(e.points&&e.points.featureSet&&e.points.featureSet.features)for(const n of e.points.featureSet.features)d(s,n.geometry),g(t,s);if(e.mapImages)for(const n of e.mapImages)d(s,n.extent),g(t,s)}return x(t,S)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:v.WGS84}}export{N as S,T as b,j as d,J as g,b as j};
