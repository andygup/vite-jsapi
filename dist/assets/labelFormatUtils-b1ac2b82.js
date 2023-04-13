import{L as f,_ as h,iW as y,E as d,a6 as b,aA as w,a4 as E,aa as v}from"./index-b4b3ae7d.js";import{a as x,g as L}from"./labelUtils-491f598f.js";const g=f.getLogger("esri.layers.support.labelFormatUtils"),m={type:"simple",evaluate(){return null}},V={getAttribute(a,n){return a.field(n)}};async function D(a,n,e){if(!a||!a.symbol||!n)return m;const o=a.where,i=x(a),l=o?await h(()=>import("./WhereClause-cbce8388.js").then(r=>r.c),["assets/WhereClause-cbce8388.js","assets/index-b4b3ae7d.js","assets/index-d832a396.css","assets/executionError-e2eca390.js","assets/_commonjsHelpers-725317a4.js"]):null;let u;if(i.type==="arcade"){const r=await y(i.expression,e,n);if(r==null)return m;u={type:"arcade",evaluate(s){try{const t=r.evaluate({$feature:"attributes"in s?r.repurposeFeature(s):s});if(t!=null)return t.toString()}catch{g.error(new d("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:s,expression:i}))}return null},needsHydrationToEvaluate(){return L(i.expression)==null}}}else u={type:"simple",evaluate(r){return i.expression.replace(/{[^}]*}/g,s=>{const t=s.slice(1,-1),c=n.get(t);if(!c)return s;let p=null;return"attributes"in r?r&&r.attributes&&(p=r.attributes[c.name]):p=r.field(c.name),p==null?"":_(p,c)})}};if(o){let r;try{r=l.WhereClause.create(o,n)}catch(t){return g.error(new d("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:o,error:t})),m}const s=u.evaluate;u.evaluate=t=>{const c="attributes"in t?void 0:V;try{if(r.testFeature(t,c))return s(t)}catch(p){g.error(new d("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:o,feature:t,error:p}))}return null}}return u}function _(a,n){if(a==null)return"";const e=n.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const i=a;for(const l of e.codedValues)if(l.code===i)return l.name}else if(e.type==="range"){const i=+a,l="range"in e?e.range[0]:e.minValue,u="range"in e?e.range[1]:e.maxValue;if(l<=i&&i<=u)return e.name}}let o=a;return n.type==="date"||n.type==="esriFieldTypeDate"?o=b(o,v("short-date")):w(n)&&(o=E(+o)),o||""}export{D as createLabelFunction,_ as formatField};
