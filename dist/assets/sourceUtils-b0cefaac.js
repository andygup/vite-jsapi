import{hc as g,hd as m,aA as p,gg as y,he as w,dk as f,_ as I}from"./index-6e11f365.js";class _{constructor(){this.code=null,this.description=null}}class b{constructor(n){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=n}}function d(e){return new b(e)}class v{constructor(n){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=n}}function V(e){return new v(e)}const a=new Set;function j(e,n,i,h=!1,u){a.clear();for(const s in i){const t=e.get(s);if(!t)continue;const l=i[s],r=q(t,l);if(r!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:t,originalValue:l,sanitizedValue:r}}),a.add(t.name),t&&(h||t.editable)){const c=g(t,r);if(c)return d(m(c,t,r));n[t.name]=r}}for(const s of(e==null?void 0:e.requiredFields)??[])if(!a.has(s.name))return d(`missing required field "${s.name}"`);return null}function q(e,n){let i=n;return typeof n=="string"&&p(e)?i=parseFloat(n):n!=null&&y(e)&&typeof n!="string"&&(i=String(n)),w(i)}let o;function A(e,n){if(!e||!f(n))return e;if("rings"in e||"paths"in e){if(o==null)throw new TypeError("geometry engine not loaded");return o.simplify(n,e)}return e}async function P(){return o==null&&(o=await I(()=>import("./geometryEngineJSON-73494075.js"),["assets/geometryEngineJSON-73494075.js","assets/geometryEngineBase-34badc23.js","assets/index-6e11f365.js","assets/index-001d3307.css","assets/geometryEngineJSON-624b201b.js","assets/json-48e3ea08.js"])),o}async function F(e,n){!f(e)||n!=="esriGeometryPolygon"&&n!=="esriGeometryPolyline"||await P()}export{V as c,j as d,A as h,d as u,F as y};