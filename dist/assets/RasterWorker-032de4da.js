import{r as a,as as n,q as c,gS as m}from"./index-4d2185ff.js";import{m as i,d as f,R as p,b as u,c as S,e as d,f as h,g as y}from"./dataUtils-d3ddae1e.js";import{S as x,T as O,p as N}from"./RasterSymbolizer-f2aabf9f.js";import{C as J,i as b}from"./utils-284f6176.js";import{M as g,T as w,$ as B}from"./rasterProjectionHelper-2090b1c6.js";import"./colorUtils-c0f43caf.js";class ${convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=f(e,t.type);return Promise.resolve(a(s)?s.toJSON():null)}async decode(t){const e=await x(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?n.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(a(e)?e.toJSON():null)}async updateSymbolizer(t){var e;this.symbolizer=O.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=J(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:n.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>a(s)?i.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return a(e)?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(a(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=N(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=p(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((s,o)=>{e.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(l=>l?new i(l):null),s=u(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=S(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=d(t.destDimension,t.gcsGrid),r=c(h(r,t.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await y(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=n.fromJSON(t.projectedExtent),s=n.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new m({steps:t.datumTransformationSteps})),(t.includeGCSGrid||g(e.spatialReference,s.spatialReference,o))&&await w();const r=t.rasterTransform?b(t.rasterTransform):null;return B({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{$ as default};
