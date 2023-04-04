import{s as z,a as $}from"./Error-bd05b442.js";import{h as d}from"./string-3d0ebcd3.js";import{o as x}from"./screenUtils-7afeb41c.js";import{l as F}from"./capabilities-320386e9.js";const g=8,B=g-2,h=z.getLogger("esri.views.2d.layers.features.support.rendererUtils"),_=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),r=t.visualVariables.map(o=>V(o)?C(o):o);return t.visualVariables=r,t};function j(e){return e.map(t=>V(t)?C(t.clone()):t)}function V(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function C(e){return e.stops=k(e.type,e.stops),e}function b(e,t,r){return(1-r)*e+r*t}function M(e,t){const[r,...o]=t,n=o.pop(),m=o[0].value,u=o[o.length-1].value,v=(u-m)/B,f=[];for(let a=m;a<u;a+=v){let l=0;for(;a>=o[l].value;)l++;const w=o[l],y=t[l-1],H=a-y.value,c=w.value===y.value?1:H/(w.value-y.value);if(e==="color"){const i=o[l],p=t[l-1],s=i.color.clone();s.r=b(p.color.r,s.r,c),s.g=b(p.color.g,s.g,c),s.b=b(p.color.b,s.b,c),s.a=b(p.color.a,s.a,c),f.push({value:a,color:s,label:i.label})}else if(e==="size"){const i=o[l],p=t[l-1],s=x(i.size),T=b(x(p.size),s,c);f.push({value:a,size:T,label:i.label})}else{const i=o[l],p=b(t[l-1].opacity,i.opacity,c);f.push({value:a,opacity:p,label:i.label})}}return[r,...f,n]}function L(e){const[t,...r]=e,o=r.pop();for(;r.length>B;){let n=0,m=0;for(let u=1;u<r.length;u++){const v=r[u-1],f=r[u],a=Math.abs(f.value-v.value);a>m&&(m=a,n=u)}r.splice(n,1)}return[t,...r,o]}function k(e,t){return t.length<=g?t:(h.warn(`Found ${t.length} Visual Variable stops, but MapView only supports ${g}. Displayed stops will be simplified.`),t.length>2*g?M(e,t):L(t))}function q(){if(d("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:r,supportsColorBufferFloatBlend:o,supportsColorBufferHalfFloat:n}=F("2d");return e&&r&&o||t&&n?"symbol":d("heatmap-allow-raster-fallback")?"raster":"none"}function E(e){if(!e)return!0;switch(e.type){case"dot-density":if(!F("2d").supportsTextureFloat)return h.error(new $("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const t=q();if(t==="none"||t==="raster"&&!d("heatmap-force-raster")){const r=F("2d"),o=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(n=>!r[n]).join(", ");if(t==="none")return h.errorOnce(new $("webgl-missing-extension",`Missing WebGL${r.type} requirements for Heatmap: ${o}`)),!1;t==="raster"&&h.warnOnce(`Missing WebGL${r.type} requirements for accelerated Heatmap: ${o}. Feature support may be limited.`)}break}}return!0}export{q as g,E as h,j as i,_ as n};
