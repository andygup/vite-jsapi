import{P as p}from"./InterleavedLayout-57e50fce.js";import{e as d,a as c,b as u,E as g,c as m,d as h}from"./edgeProcessing-67004d90.js";import"./BufferView-0c0be981.js";import"./index-b4b3ae7d.js";import"./vec4-3dd523e8.js";import"./types-c657ebd9.js";import"./deduplicate-3505e282.js";import"./Indices-a579d3c9.js";import"./VertexAttribute-8238ac80.js";import"./enums-08489827.js";import"./VertexElementDescriptor-24e04d97.js";function i(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new p(e.layout)}}class S{async extract(t){const n=a(t),r=d(n),s=[n.data.buffer];return{result:L(r,s),transferList:s}}async extractComponentsEdgeLocations(t){const n=a(t),r=c(n.data,n.skipDeduplicate,n.indices,n.indicesLength),s=u(r,x,l),o=[];return{result:i(s.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const n=a(t),r=c(n.data,n.skipDeduplicate,n.indices,n.indicesLength),s=u(r,I,l),o=[];return{result:i(s.regular.instancesData,o),transferList:o}}}function a(e){return{data:g.createView(e.dataBuffer),indices:e.indicesType==="Uint32Array"?new Uint32Array(e.indices):e.indicesType==="Uint16Array"?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function L(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:i(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:i(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}class E{allocate(t){return m.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,r){t.position0.setVec(n,r.position0),t.position1.setVec(n,r.position1)}}class y{allocate(t){return h.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,r){t.position0.setVec(n,r.position0),t.position1.setVec(n,r.position1),t.componentIndex.set(n,r.componentIndex)}}const I=new E,x=new y,l={allocate:()=>null,write:()=>{},trim:()=>null};export{S as default};
