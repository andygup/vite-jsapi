import{e as l,y as r,n as s,l as m}from"./cast-daef7652.js";import{l as t}from"./Color-2245b966.js";import{s as n}from"./jsonMap-a9c94baf.js";import"./typedArrayUtil-2bcf3cee.js";import"./ensureType-fa162cfc.js";import{o as p}from"./Extent-7f29a1bb.js";const i=new n({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let y=0,o=class extends m{constructor(e){super(e),this.id="sym"+y++,this.type=null,this.color=new t([0,0,0,1])}readColor(e){return e&&e[0]!=null?[e[0],e[1],e[2],e[3]/255]:e}async collectRequiredFields(e,S){}hash(){return JSON.stringify(this.toJSON())}clone(){}};l([r({type:i.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:i.write}}})],o.prototype,"type",void 0),l([r({type:t,json:{write:{allowNull:!0}}})],o.prototype,"color",void 0),l([p("color")],o.prototype,"readColor",null),o=l([s("esri.symbols.Symbol")],o);const f=o;export{f as a};
