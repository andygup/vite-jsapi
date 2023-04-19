import{aD as w,g0 as E}from"./index-b51e75d5.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function R(e=w()){e=e.toLowerCase();let n=e in x;if(!n){const a=e.split("-");a.length>1&&a[0]in x&&(e=a[0],n=!0),n||(e="en")}const[t,r,c="#,##0.###"]=x[e];return{decimal:t,group:r,pattern:c}}function O(e,n){n={...n};const t=R(n.locale);n.customs=t;const r=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:N(e,r,n)}const S=/[#0,]*[#0](?:\.0*#*)?/;function N(e,n,t){t=t||{};const r=t.customs.group,c=t.customs.decimal,a=n.split(";"),i=a[0];if(n=a[e<0?1:0]||"-"+i,n.includes("%"))e*=100;else if(n.includes("‰"))e*=1e3;else{if(n.includes("¤"))throw new Error("currency notation not supported");if(n.includes("E"))throw new Error("exponential notation not supported")}const d=S,p=i.match(d);if(!p)throw new Error("unable to find a number expression in pattern: "+n);return t.fractional===!1&&(t.places=0),n.replace(d,y(e,p[0],{decimal:c,group:r,places:t.places,round:t.round}))}function y(e,n,t){t=t||{},t.places===!0&&(t.places=0),t.places===1/0&&(t.places=6);const r=n.split("."),c=typeof t.places=="string"&&t.places.indexOf(",");let a=t.places;c?a=t.places.substring(c+1):+a>=0||(a=(r[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(a))));const i=String(Math.abs(e)).split("."),d=i[1]||"";if(r[1]||t.places){c&&(t.places=t.places.substring(0,c));const s=t.places!==void 0?t.places:r[1]&&r[1].lastIndexOf("0")+1;+s>d.length&&(i[1]=d.padEnd(Number(s),"0")),+a<d.length&&(i[1]=d.substr(0,Number(a)))}else i[1]&&i.pop();const p=r[0].replace(",","");let o=p.indexOf("0");o!==-1&&(o=p.length-o,o>i[0].length&&(i[0]=i[0].padStart(o,"0")),p.includes("#")||(i[0]=i[0].substr(i[0].length-o)));let u=r[0].lastIndexOf(","),f,l;if(u!==-1){f=r[0].length-u-1;const s=r[0].substr(0,u);u=s.lastIndexOf(","),u!==-1&&(l=s.length-u-1)}const g=[];for(let s=i[0];s;){const m=s.length-f;g.push(m>0?s.substr(m):s),s=m>0?s.slice(0,m):"",l&&(f=l,l=void 0)}return i[0]=g.reverse().join(t.group||","),i.join(t.decimal||".")}function I(e){e=e||{};const n=R(e.locale),t=e.pattern||n.pattern,r=n.group,c=n.decimal;let a=1;if(t.includes("%"))a/=100;else if(t.includes("‰"))a/=1e3;else if(t.includes("¤"))throw new Error("currency notation not supported");const i=t.split(";");return i.length===1&&i.push("-"+i[0]),{regexp:h(i,p=>(p="(?:"+E(p,".")+")",p.replace(S,o=>{const u={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:c,exponent:!1},f=o.split(".");let l=e.places;f.length===1&&a!==1&&(f[1]="###"),f.length===1||l===0?u.fractional=!1:(l===void 0&&(l=e.pattern?f[1].lastIndexOf("0")+1:1/0),l&&e.fractional==null&&(u.fractional=!0),!e.places&&+l<f[1].length&&(l+=","+f[1].length),u.places=l);const g=f[0].split(",");return g.length>1&&(u.groupSize=g.pop().length,g.length>1&&(u.groupSize2=g.pop().length)),"("+z(u)+")"})),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:c,factor:a}}function L(e,n){const t=I(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let c=r[1];if(!r[1]){if(!r[2])return NaN;c=r[2],t.factor*=-1}return c=c.replace(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(c)*t.factor}function z(e){e=e||{},"places"in e||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),(!("fractional"in e)||/^0/.test(String(e.places)))&&(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=b(e),t=h(e.fractional,a=>{let i="";return a&&e.places!==0&&(i="\\"+e.decimal,e.places===1/0?i="(?:"+i+"\\d+)?":i+="\\d{"+e.places+"}"),i},!0),r=h(e.exponent,a=>a?"([eE]"+b({signed:e.eSigned})+")":"");let c=n+t;return t&&(c="(?:(?:"+c+")|(?:"+t+"))"),c+r}function b(e){e=e||{},"signed"in e||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="";const n=h(e.signed,r=>r?"[-+]":"",!0),t=h(e.separator,r=>{if(!r)return"(?:\\d+)";r=E(r),r===" "?r="\\s":r===" "&&(r="\\s\\xa0");const c=e.groupSize,a=e.groupSize2;if(a){const i="(?:0|[1-9]\\d{0,"+(a-1)+"}(?:["+r+"]\\d{"+a+"})*["+r+"]\\d{"+c+"})";return c-a>0?"(?:"+i+"|(?:0|[1-9]\\d{0,"+(c-1)+"}))":i}return"(?:0|[1-9]\\d{0,"+(c-1)+"}(?:["+r+"]\\d{"+c+"})*)"},!0);return n+t}const h=(e,n,t)=>{if(!(e instanceof Array))return n(e);const r=[];for(let c=0;c<e.length;c++)r.push(n(e[c]));return P(r.join("|"),!!t)},P=(e,n)=>"("+(n?"?:":"")+e+")";export{I as _,O as f,L as p};