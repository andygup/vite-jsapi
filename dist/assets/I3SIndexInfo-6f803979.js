import{L as u,K as g}from"./index-d29f6b97.js";async function y(r,n,e,t,a,s){let l=null;if(e!=null){const o=`${r}/nodepages/`,c=o+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await u(c,{query:{f:"json",token:t},responseType:"json",signal:s})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:o}}catch(p){a!=null&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",c,p),l=p}}if(!n)return null;const d=`${r}/nodes/`,i=d+(n&&n.split("/").pop());try{return{type:"node",rootNode:(await u(i,{query:{f:"json",token:t},responseType:"json",signal:s})).data,urlPrefix:d}}catch(o){throw new g("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:o,url:i})}}export{y as r};
