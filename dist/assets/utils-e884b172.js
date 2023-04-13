import{u as N,cB as v,cC as A,s as x}from"./index-9f03d686.js";import{a as y,E as T,S as R}from"./color-b838c155.js";import{U as C}from"./MaterialKey-3bd82cb0.js";import{r as F,s as O}from"./definitions-43101aab.js";import{C as t}from"./enums-74e97557.js";class p{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,a){return e!=null&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}p.type="default",p.programSpec=null;class g extends p{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,a){const{attributes:u,dotValue:m,referenceScale:h,dotSize:s,dotBlendingEnabled:c,seed:r,backgroundColor:d}=a,l=e!=null&&e.type==="dot-density"?e:this._createRendererSchema();l.dotValue=m,l.dotSize=s,l.dotScale=h,l.dotBlending=c,l.seed=r;const{colors:E,activeDots:S,backgroundColor:i}=l;for(let o=0;o<F;o++){const b=o>=u.length?null:u[o].color;y(E,b,4*o)}for(let o=0;o<8;o++)S[o]=o<a.attributes.length?1:0;return y(i,d),l}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}}g.type="dot-density",g.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:t.SHORT},{location:1,name:"a_id",count:3,type:t.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:t.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:t.FLOAT}]}};let f=class extends p{static getStorageSpec({field:e,valueExpression:a}){return{visualVariables:!1,attributes:e||a?[{field:e,valueExpression:a}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,a){const{radius:u,minDensity:m,maxDensity:h,referenceScale:s,field:c,valueExpression:r,colorStops:d}=a,l=h-m,E=c||r?1:0,S=d.map(({color:b,ratio:D})=>`${D}:${b.toString()}`).join();let i,o=!0;return e!=null&&e.type==="heatmap"?(i=e,o=S!==e.gradientHash):i=this._createRendererSchema(),i.radius=N(u),i.minDensity=m,i.densityRange=l,i.referenceScale=s,i.isFieldActive=E,o&&(i.gradient=v(d),i.gradientHash=S),i}};f.type="heatmap",f.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:t.SHORT},{location:1,name:"a_vertexOffset",count:2,type:t.SHORT},{location:4,name:"a_id",count:4,type:t.UNSIGNED_BYTE}]}};class _ extends p{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*O),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,a){const{attributes:u,defaultColor:m,holePercentage:h,othersCategory:s,outline:c}=a,r=e!=null&&e.type==="pie-chart"?e:this._createRendererSchema();for(let d=0;d<O;d++){const l=d>=u.length?new A([0,0,0,0]):u[d].color;y(r.colors,l,4*d)}return y(r.defaultColor,m),y(r.othersColor,s==null?void 0:s.color),y(r.outlineColor,c==null?void 0:c.color),r.outlineWidth=N((c==null?void 0:c.width)||0),r.holePercentage=h,r.sectorThreshold=(s==null?void 0:s.threshold)||0,r.numberOfFields=u.length,r}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}_.type="pie-chart",_.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:t.SHORT},{location:1,name:"a_vertexOffset",count:2,type:t.SHORT},{location:2,name:"a_texCoords",count:2,type:t.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:t.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:t.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:t.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:t.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:t.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:t.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};function G(n,e){if(n.type!==e)throw new x("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${n.type}"`)}function $(n){switch(n==null?void 0:n.type){case"dot-density":return g;case"heatmap":return f;case"pie-chart":return _;default:return p}}function Y(n){const{geometryType:e,symbologyType:a}=C.load(n);switch(e){case T.FILL:if(a===R.DOT_DENSITY)return g;break;case T.MARKER:switch(a){case R.HEATMAP:return f;case R.PIE_CHART:return _}}return p}export{$ as c,Y as p,G as s,p as t};
