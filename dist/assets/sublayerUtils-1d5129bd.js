import{hl as l}from"./index-bdad94d1.js";function s(i,r,e){return r.flatten(({sublayers:n})=>n).length!==i.length?!0:!!i.some(n=>n.originIdOf("minScale")>e||n.originIdOf("maxScale")>e||n.originIdOf("renderer")>e||n.originIdOf("labelingInfo")>e||n.originIdOf("opacity")>e||n.originIdOf("labelsVisible")>e||n.originIdOf("source")>e)||!f(i,r)}function g(i,r,e){return!!i.some(o=>{const n=o.source;return!(!n||n.type==="map-layer"&&n.mapLayerId===o.id&&(n.gdbVersion==null||n.gdbVersion===e))||o.originIdOf("renderer")>l.SERVICE||o.originIdOf("labelingInfo")>l.SERVICE||o.originIdOf("opacity")>l.SERVICE||o.originIdOf("labelsVisible")>l.SERVICE})||!f(i,r)}function f(i,r){if(!i||!i.length||r==null)return!0;const e=r.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(i.length>e.length)return!1;let o=0;const n=e.length;for(const{id:t}of i){for(;o<n&&e[o]!==t;)o++;if(o>=n)return!1}return!0}function u(i){return!!i&&i.some(r=>r.minScale!=null||r.layerDefinition&&r.layerDefinition.minScale!=null)}export{s as e,g as n,u as o};
