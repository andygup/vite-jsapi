import{t as c,r as l}from"./typedArrayUtil-2bcf3cee.js";import{C as m,T as h}from"./fieldUtils-021fea8a.js";async function x(e,t=e.popupTemplate){if(c(t))return[];const s=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=t,{objectIdField:d,typeIdField:u,globalIdField:i,relationships:a}=e;if(s.includes("*"))return["*"];const r=o?await m(e):[],p=h(e.fieldsIndex,[...s,...r]);return u&&p.push(u),p&&d&&e.fieldsIndex.has(d)&&!p.includes(d)&&p.push(d),p&&i&&e.fieldsIndex.has(i)&&!p.includes(i)&&p.push(i),a&&a.forEach(f=>{const{keyField:n}=f;p&&n&&e.fieldsIndex.has(n)&&!p.includes(n)&&p.push(n)}),p}function F(e,t){return e.popupTemplate?e.popupTemplate:l(t)&&t.defaultPopupTemplateEnabled&&l(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{x as d,F as s};
