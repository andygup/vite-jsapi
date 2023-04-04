import{h as i}from"./string-3d0ebcd3.js";const c=new Set;function m(t,e,n=!1){n&&c.has(e)||(n&&c.add(e),t.warn(`🛑 DEPRECATED - ${e}`))}function l(t,e,n={}){if(i("esri-deprecation-warnings")){const{moduleName:r}=n;p(t,`Property: ${(r?r+"::":"")+e}`,n)}}function p(t,e,n={}){if(i("esri-deprecation-warnings")){const{replacement:r,version:a,see:s,warnOnce:f}=n;let o=e;r&&(o+=`
	🛠️ Replacement: ${r}`),a&&(o+=`
	⚙️ Version: ${a}`),s&&(o+=`
	🔗 See ${s} for more details.`),m(t,o,f)}}export{p as r,l as t};
