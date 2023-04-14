import{bo as b,p as v,Q as S,dJ as V,a as z}from"./index-468a9268.js";import{A as R}from"./AttributeStoreView-29c578b3.js";import{T as _}from"./TileContainer-9941a0f1.js";import{m as y}from"./lengthUtils-edd0ce65.js";import{L as p,N as m}from"./color-9ac858bf.js";import{T as I,g as x}from"./utils-049d9020.js";function d(h,e){const t=e.length;if(h<e[0].value||t===1)return e[0].size;for(let i=1;i<t;i++)if(h<e[i].value){const a=(h-e[i-1].value)/(e[i].value-e[i-1].value);return e[i-1].size+a*(e[i].size-e[i-1].size)}return e[t-1].size}class g{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=I}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return t.levels[e]??(()=>{let i=1/0,a=0;for(const n in t.levels){const l=parseFloat(n),f=Math.abs(e-l);f<i&&(i=f,a=l)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const o=2**((e-a)/2),s=t.levels[a],r=new Float32Array(s.values);return r[2]*=o,r[3]*=o,{sizes:s.sizes,values:r}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){this._vvInfo!=null&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=x(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:b("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){e!=null?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const a=e.size;if(a){if(i.vvSizeEnabled=!0,a.minMaxValue){const s=a.minMaxValue;let r,n;if(p(s.minSize)&&p(s.maxSize))if(m(s.minSize)&&m(s.maxSize))r=v(s.minSize),n=v(s.maxSize);else{const l=t.scale;r=v(d(l,s.minSize.stops)),n=v(d(l,s.maxSize.stops))}this.vvSizeMinMaxValue.set([s.minDataValue,s.maxDataValue,r,n])}if(a.scaleStops&&(this.vvSizeScaleStopsValue=v(d(t.scale,a.scaleStops.stops))),a.unitValue){const s=S(t.spatialReference),r=y[a.unitValue.unit],n=s/r;this.vvSizeUnitValueToPixelsRatio=n/t.resolution}a.fieldStops&&(this._vvSizeFieldStops=a.fieldStops)}const u=e.color;u&&(i.vvColorEnabled=!0,this.vvColorValues.set(u.values),this.vvColors.set(u.colors));const c=e.opacity;c&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(c.values),this.vvOpacities.set(c.opacities));const o=e.rotation;o&&(i.vvRotationEnabled=!0,i.vvRotationType=o.type)}}class C extends _{constructor(e){super(e),this._rendererInfo=new g,this._materialItemsRequestQueue=new V,this.attributeView=new R(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(e=>e.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||e.length===0)return[];const i=z();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some(t=>t.hasData))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:a}){const{painter:u,pixelRatio:c}=e,o=t.map(s=>u.textureManager.rasterizeItem(s.symbol,c,s.glyphIds,i));Promise.all(o).then(s=>{if(!this.stage){a.reject();return}const r=s.map((n,l)=>({id:t[l].id,mosaicItem:n}));a.resolve(r)},a.reject)}}export{C as F};
