import{it as _,iu as E,iv as z}from"./index-0ea7d266.js";import{c as x}from"./observers-93a22a7d.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function ee(e){return e==="Enter"||e===" "}const N=["0","1","2","3","4","5","6","7","8","9"];/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const R=new RegExp("\\.(0+)?$"),D=new RegExp("0+$");class a{constructor(t){if(t instanceof a)return t;const[s,n]=P(t).split(".").concat("");this.value=BigInt(s+n.padEnd(a.DECIMALS,"0").slice(0,a.DECIMALS))+BigInt(a.ROUNDED&&n[a.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(a.DECIMALS+1,"0"),s=t.slice(0,-a.DECIMALS),n=t.slice(-a.DECIMALS).replace(D,"");return{integers:s,decimals:n}}toString(){const{integers:t,decimals:s}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${s.length?"."+s:""}`}formatToParts(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(s));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach(i=>r.push({type:"fraction",value:i}))),r}format(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(s))}`,i=n.length?`${t.decimal}${n.split("").map(l=>t.numberFormatter.format(Number(l))).join("")}`:"";return`${r}${i}`}add(t){return a.fromBigInt(this.value+new a(t).value)}subtract(t){return a.fromBigInt(this.value-new a(t).value)}multiply(t){return a._divRound(this.value*new a(t).value,a.SHIFT)}divide(t){return a._divRound(this.value*a.SHIFT,new a(t).value)}}a.DECIMALS=100;a.ROUNDED=!0;a.SHIFT=BigInt("1"+"0".repeat(a.DECIMALS));a._divRound=(e,t)=>a.fromBigInt(e/t+(a.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)));a.fromBigInt=e=>Object.assign(Object.create(a.prototype),{value:e,isNegative:e<BigInt(0)});function $(e){return!(!e||isNaN(Number(e)))}function te(e){return!e||!H(e)?"":f(e,t=>{let s=!1;const n=t.split("").filter((r,i)=>r.match(/\./g)&&!s?(s=!0,!0):r.match(/\-/g)&&i===0?!0:N.includes(r)).reduce((r,i)=>r+i);return $(n)?new a(n).toString():""})}const I=/^([-0])0+(?=\d)/,T=/(?!^\.)\.$/,k=/(?!^-)-/g,j=/^-\b0\b\.?0*$/,se=e=>f(e,t=>{const s=t.replace(k,"").replace(T,"").replace(I,"$1");return $(s)?j.test(s)?s:new a(s).toString():t});function f(e,t){if(!e)return e;const s=e.toLowerCase().indexOf("e")+1;return s?e.replace(/[eE]*$/g,"").substring(0,s).concat(e.slice(s).replace(/[eE]/g,"")).split(/[eE]/).map((n,r)=>t(r===1?n.replace(/\./g,""):n)).join("e").replace(/^e/,"1e"):t(e)}function P(e){const t=e.split(/[eE]/);if(t.length===1)return e;const s=+e;if(Number.isSafeInteger(s))return`${s}`;const n=e.charAt(0)==="-",r=+t[1],i=t[0].split("."),l=(n?i[0].substring(1):i[0])||"",S=i[1]||"",M=(u,c)=>{const g=Math.abs(c)-u.length,p=g>0?`${"0".repeat(g)}${u}`:u;return`${p.slice(0,c)}.${p.slice(c)}`},A=(u,c)=>{const g=c>u.length?`${u}${"0".repeat(c-u.length)}`:u;return`${g.slice(0,c)}.${g.slice(c)}`},w=r>0?`${l}${A(S,r)}`:`${M(l,r)}${S}`;return`${n?"-":""}${w.charAt(0)==="."?"0":""}${w.replace(R,"").replace(I,"")}`}function H(e){return N.some(t=>e.includes(t))}const o="en",U=["ar","bg","bs","ca","cs","da","de","el",o,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],G=["ar","bg","bs","ca","cs","da","de","de-CH","el",o,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],Z=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],F=e=>Z.includes(e),b=new Intl.NumberFormat().resolvedOptions().numberingSystem,O=b==="arab"||!F(b)?"latn":b,B=e=>F(e)?e:O;function L(e,t="cldr"){const s=t==="cldr"?G:U;return e?s.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(n,r,i)=>`${r}-${i.toUpperCase()}`),s.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":s.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),o))):o}const h=new Set;function ne(e){K(e),h.size===0&&(m==null||m.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),h.add(e)}function K(e){e.effectiveLocale=J(e)}function re(e){h.delete(e),h.size===0&&m.disconnect()}const m=x("mutation",e=>{e.forEach(t=>{const s=t.target;h.forEach(n=>{if(!_(s,n.el))return;const i=E(n.el,"[lang]");if(!i){n.effectiveLocale=o;return}const l=i.lang;n.effectiveLocale=i.hasAttribute("lang")&&l===""?o:l})})});function J(e){var t;return e.el.lang||((t=E(e.el,"[lang]"))==null?void 0:t.lang)||document.documentElement.lang||o}class V{constructor(){this.delocalize=t=>this._numberFormatOptions?f(t,s=>s.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?f(t,s=>$(s.trim())?new a(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):s):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=L(t==null?void 0:t.locale),t.numberingSystem=B(t==null?void 0:t.numberingSystem),!this._numberFormatOptions&&t.locale===o&&t.numberingSystem===O&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const s=new Map(this._digits.map((r,i)=>[r,i])),n=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-123456789e-1);this._actualGroup=n.find(r=>r.type==="group").value,this._group=this._actualGroup.trim().length===0?" ":this._actualGroup,this._decimal=n.find(r=>r.type==="decimal").value,this._minusSign=n.find(r=>r.type==="minusSign").value,this._getDigitIndex=r=>s.get(r)}}const ae=new V;/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const d={};async function W(e,t){const s=`${t}_${e}`;return d[s]||(d[s]=fetch(z(`./assets/${t}/t9n/messages_${e}.json`)).then(n=>(n.ok||y(),n.json())).catch(()=>y())),d[s]}function y(){throw new Error("could not fetch component message bundle")}function v(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function ie(e){e.defaultMessages=await C(e,e.effectiveLocale),v(e)}async function C(e,t){const{el:s}=e,r=s.tagName.toLowerCase().replace("calcite-","");return W(L(t,"t9n"),r)}async function ue(e,t){e.defaultMessages=await C(e,t),v(e)}function ce(e){e.onMessagesChange=X}function oe(e){e.onMessagesChange=void 0}function X(){v(this)}export{a as B,ce as a,oe as b,ne as c,re as d,$ as e,se as f,O as g,N as h,ee as i,ae as n,te as p,ie as s,ue as u};