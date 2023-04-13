import{ae as t,af as i,ax as d,dX as W,ai as h,bD as w,cE as l,eG as R,bG as L,ag as X,L as $,dY as Q,dm as T,aY as N,eg as E,aL as j,cF as M,dB as Z,eH as ee,b0 as te,bK as q,cD as re,aB as ie,ez as se,ei as oe}from"./index-b4b3ae7d.js";import{V as _,B as m,r as ne,U as B,C as k}from"./UniqueValueRenderer-51ab4299.js";import{DictionaryLoader as z}from"./DictionaryLoader-304874f3.js";import{A as le}from"./SizeVariable-eef1af06.js";import{k as ae,a as ue,M as pe}from"./heatmapUtils-5a23fa6d.js";var I;let v=I=class extends w{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new I({color:this.color,ratio:this.ratio})}};t([i({type:d,json:{type:[W],default:null,write:!0}})],v.prototype,"color",void 0);t([i({type:Number,json:{write:!0}})],v.prototype,"ratio",void 0);v=I=t([h("esri.renderers.support.HeatmapColorStop")],v);const S=v;var V;let y=V=class extends _(m){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new z(this.url,this.config,this.fieldMap)}writeData(e,r){e&&(r.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,r,s,a){a!=null&&a.origin||super.writeVisualVariables(e,r,s,a)}clone(){return new V({config:l(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:l(this.fieldMap),url:l(this.url),visualVariables:l(this.visualVariables)})}async getSymbolAsync(e,r){return this._loader.getSymbolAsync(e,r)}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r),this.scaleExpression&&await R(e,r,this.scaleExpression);for(const s in this.fieldMap){const a=this.fieldMap[s];r.has(a)&&e.add(a)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,r)=>e+r.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};t([i({type:z})],y.prototype,"_loader",null);t([i({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],y.prototype,"config",void 0);t([i({type:Object,json:{write:!0}})],y.prototype,"fieldMap",void 0);t([i({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],y.prototype,"scaleExpression",void 0);t([L("scaleExpression")],y.prototype,"writeData",null);t([i({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(o){return{enabled:!!o&&!!this.scaleExpression}}}}})],y.prototype,"scaleExpressionTitle",void 0);t([i({type:String,json:{write:!0}})],y.prototype,"url",void 0);t([L("visualVariables")],y.prototype,"writeVisualVariables",null);y=V=t([h("esri.renderers.DictionaryRenderer")],y);const de=y;var O;let c=O=class extends w{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?($.getLogger(this.declaredClass).error(".field: field must be a string value"),null):Q(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new O({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([i({type:d,json:{type:[Number],write:!0}})],c.prototype,"color",void 0);t([i({type:String,json:{write:!0}})],c.prototype,"field",void 0);t([X("field")],c.prototype,"castField",null);t([i({type:String,json:{write:!0}})],c.prototype,"label",void 0);t([i({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0);t([i({type:String,json:{write:!0}})],c.prototype,"valueExpressionTitle",void 0);c=O=t([h("esri.renderers.support.AttributeColorInfo")],c);const J=c;var C;let x=C=class extends w{constructor(){super(...arguments),this.unit=null}clone(){return new C({unit:this.unit})}};t([i({type:String,json:{write:!0}})],x.prototype,"unit",void 0);x=C=t([h("esri.renderers.support.DotDensityLegendOptions")],x);const ye=x;var P;let u=P=class extends _(m){constructor(e){super(e),this.attributes=null,this.backgroundColor=new d([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new T,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const r=e/this.referenceScale*this.dotValue;return r<1?1:r}getSymbol(){return new N({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((r,s)=>r+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new P({attributes:l(this.attributes),backgroundColor:l(this.backgroundColor),dotBlendingEnabled:l(this.dotBlendingEnabled),dotShape:l(this.dotShape),dotSize:l(this.dotSize),dotValue:l(this.dotValue),legendOptions:l(this.legendOptions),outline:l(this.outline),referenceScale:l(this.referenceScale),visualVariables:l(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){var s;const e=(s=this.attributes)==null?void 0:s.map(a=>a.field||a.valueExpression||""),r=this.outline&&JSON.stringify(this.outline.toJSON())||"";return`${e}-${r}`}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r);for(const s of this.attributes??[])s.valueExpression&&await R(e,r,s.valueExpression),s.field&&e.add(s.field)}};t([i({type:[J],json:{write:!0}})],u.prototype,"attributes",void 0);t([i({type:d,json:{write:!0}})],u.prototype,"backgroundColor",void 0);t([i({type:Boolean,json:{write:!0}})],u.prototype,"dotBlendingEnabled",void 0);t([i({type:String,json:{write:!1}})],u.prototype,"dotShape",void 0);t([i({type:Number,json:{write:!0}})],u.prototype,"dotSize",void 0);t([i({type:ye,json:{write:!0}})],u.prototype,"legendOptions",void 0);t([i({type:T,json:{default:null,write:!0}})],u.prototype,"outline",void 0);t([i({type:Number,json:{write:!0}})],u.prototype,"dotValue",void 0);t([i({type:Number,json:{write:!0}})],u.prototype,"referenceScale",void 0);t([i({type:Number,json:{write:!0}})],u.prototype,"seed",void 0);t([E({dotDensity:"dot-density"})],u.prototype,"type",void 0);u=P=t([h("esri.renderers.DotDensityRenderer")],u);const he=u;let f=class extends j(w){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};t([i({type:String,json:{write:!0}})],f.prototype,"minLabel",void 0);t([i({type:String,json:{write:!0}})],f.prototype,"maxLabel",void 0);t([i({type:String,json:{write:!0}})],f.prototype,"title",void 0);f=t([h("esri.renderers.support.HeatmapLegendOptions")],f);var A;const G="esri.renderers.HeatmapRenderer",ce=$.getLogger(G);function F(o){if(o!=null){const{maxDensity:e,minDensity:r,radius:s}=o;if(e!=null||r!=null||s!=null){const{blurRadius:a,maxPixelIntensity:we,minPixelIntensity:ve,...Y}=o;return Y}}return o}let n=A=class extends m{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new S({ratio:0,color:new d("rgba(255, 140, 0, 0)")}),new S({ratio:.75,color:new d("rgba(255, 140, 0, 1)")}),new S({ratio:.9,color:new d("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return F(e)}get blurRadius(){return ae(this.radius)}set blurRadius(e){const r=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",ue(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",r*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(pe**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,r){if(this._warnedProps[e])return;Z(this).getDefaultOrigin()==="user"&&(this._warnedProps[e]=!0,ee(()=>{te(ce,e,{replacement:`${String(r)} (suggested value: ${this._get(r)})`,version:"4.24"})}))}read(e,r){e=F(e),super.read(e,r)}getSymbol(){return new q}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,r){const s=this.field,a=this.valueExpression;s&&typeof s=="string"&&await re(e,r,s),a&&typeof a=="string"&&await R(e,r,a)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new A({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:l(this.colorStops),field:this.field,legendOptions:l(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};t([i({type:le,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],n.prototype,"authoringInfo",void 0);t([i({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"blurRadius",null);t([i({type:[S],json:{write:!0}})],n.prototype,"colorStops",void 0);t([i({type:String,json:{write:!0}})],n.prototype,"field",void 0);t([i({type:Number,json:{write:{overridePolicy:(o,e,r)=>({enabled:r==null})},origins:{"web-scene":{write:!1}}}})],n.prototype,"fieldOffset",void 0);t([i({type:f,json:{write:!0}})],n.prototype,"legendOptions",void 0);t([i({type:Number,json:{write:!0}})],n.prototype,"maxDensity",void 0);t([i({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"maxPixelIntensity",null);t([i({type:Number,json:{write:!0}})],n.prototype,"minDensity",void 0);t([i({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"minPixelIntensity",null);t([i({type:Number,cast:M,json:{write:!0}})],n.prototype,"radius",void 0);t([i({type:Number,range:{min:0},json:{default:0,write:!0}})],n.prototype,"referenceScale",void 0);t([E({heatmap:"heatmap"})],n.prototype,"type",void 0);t([i({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],n.prototype,"valueExpression",void 0);t([i({type:String})],n.prototype,"valueExpressionTitle",void 0);t([i({readOnly:!0})],n.prototype,"_pixelIntensityToDensity",null);n=A=t([h(G)],n);const U=n;let g=class extends j(w){constructor(){super(...arguments),this.color=new d([0,0,0,0]),this.label=null,this.threshold=0}};t([i({type:d,json:{write:!0}})],g.prototype,"color",void 0);t([i({type:String,json:{write:!0}})],g.prototype,"label",void 0);t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],g.prototype,"threshold",void 0);g=t([h("esri.renderers.support.OthersCategory")],g);let D=class extends j(w){constructor(){super(...arguments),this.title=null}};t([i({type:String,json:{write:!0}})],D.prototype,"title",void 0);D=t([h("esri.renderers.support.PieChartLegendOptions")],D);let p=class extends _(j(m)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new d([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new g,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var e;return new q({size:this.size?this.size/2+(((e=this.outline)==null?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(ie)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,r)=>e+r.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((r,s)=>r+=JSON.stringify(s),"")}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r);for(const s of this.attributes)s.valueExpression&&await R(e,r,s.valueExpression),s.field&&e.add(s.field)}};t([i({type:[J],json:{write:!0}})],p.prototype,"attributes",void 0);t([i({type:N,json:{default:null,write:!0}})],p.prototype,"backgroundFillSymbol",void 0);t([i({type:d,json:{write:!0}})],p.prototype,"defaultColor",void 0);t([i({type:String,json:{write:!0}})],p.prototype,"defaultLabel",void 0);t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],p.prototype,"holePercentage",void 0);t([i({type:g,json:{write:!0}})],p.prototype,"othersCategory",void 0);t([i({type:D,json:{write:!0}})],p.prototype,"legendOptions",void 0);t([i({type:T,json:{default:null,write:!0}})],p.prototype,"outline",void 0);t([i({type:Number,cast:M,json:{write:!0}})],p.prototype,"size",void 0);t([E({pieChart:"pie-chart"})],p.prototype,"type",void 0);p=t([h("esri.renderers.PieChartRenderer")],p);const ge=p;var H;let b=H=class extends _(m){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,r){await Promise.all([this.collectSymbolFields(e,r),this.collectVVRequiredFields(e,r)])}async collectSymbolFields(e,r){await Promise.all(this.getSymbols().map(s=>s.collectRequiredFields(e,r)))}getSymbol(e,r){return this.symbol}async getSymbolAsync(e,r){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,r)=>e+r.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((r,s)=>r+=JSON.stringify(s),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new H({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};t([i({type:String,json:{write:!0}})],b.prototype,"description",void 0);t([i({type:String,json:{write:!0}})],b.prototype,"label",void 0);t([i(ne)],b.prototype,"symbol",void 0);t([E({simple:"simple"})],b.prototype,"type",void 0);b=H=t([h("esri.renderers.SimpleRenderer")],b);const K=b,be={key:"type",base:m,typeMap:{heatmap:U,simple:K,"unique-value":B,"class-breaks":k,"dot-density":he,dictionary:de,"pie-chart":ge},errorContext:"renderer"},Le={key:"type",base:m,typeMap:{simple:K,"unique-value":B,"class-breaks":k,heatmap:U},errorContext:"renderer"};function $e(o,e){return fe(o,null,e)}const me=se({types:be});function fe(o,e,r){return o?o&&(o.styleName||o.styleUrl)&&o.type!=="uniqueValue"?(r&&r.messages&&r.messages.push(new oe("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+o.type+"'",{definition:o,context:r})),null):me(o,e,r):null}export{S as H,K as S,be as a,$e as f,fe as r,Le as w};
