import{f as i,m as r}from"./infoFor3D-91dff30a.js";function y(t){const e=t==null?void 0:t.source;return!!e&&(Array.isArray(e)?e.some(n=>a(n)):a(e))}const o=/^(model\/gltf\+json)|(model\/gltf-binary)$/,s=/\.(gltf|glb)/i;function a(t){if(t instanceof File){const{type:e,name:n}=t;return o.test(e)||s.test(n)}return o.test(t.assetMimeType)||s.test(t.assetName)||s.test(t.assetUrl)}function l(t,e){if(!t)return!1;const{source:n}=t;return Array.isArray(n)?m(n,e):c(n,e)}function m(t,e){return t.every(f=>c(f,e))}function c(t,e){return!(t instanceof File)&&t.assetUrl.startsWith(`${e.path}/assets/`)}function A(t,e){return t instanceof File?i(t.name,e)??r(t.type,e):r(t.assetMimeType,e)??i(t.assetName,e)}export{A as a,l as e,y as i};
