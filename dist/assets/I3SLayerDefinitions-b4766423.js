import{ae as e,af as t,ai as p,eg as u,bD as a}from"./index-b4b3ae7d.js";let y=class extends a{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};e([t({type:Number})],y.prototype,"nodesPerPage",void 0);e([t({type:Number})],y.prototype,"rootIndex",void 0);e([t({type:String})],y.prototype,"lodSelectionMetricType",void 0);y=e([p("esri.layer.support.I3SNodePageDefinition")],y);let n=class extends a{constructor(){super(...arguments),this.factor=1}};e([t({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],n.prototype,"id",void 0);e([t({type:Number})],n.prototype,"factor",void 0);n=e([p("esri.layer.support.I3SMaterialTexture")],n);let l=class extends a{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};e([t({type:[Number]})],l.prototype,"baseColorFactor",void 0);e([t({type:n})],l.prototype,"baseColorTexture",void 0);e([t({type:n})],l.prototype,"metallicRoughnessTexture",void 0);e([t({type:Number})],l.prototype,"metallicFactor",void 0);e([t({type:Number})],l.prototype,"roughnessFactor",void 0);l=e([p("esri.layer.support.I3SMaterialPBRMetallicRoughness")],l);let r=class extends a{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};e([u({opaque:"opaque",mask:"mask",blend:"blend"})],r.prototype,"alphaMode",void 0);e([t({type:Number})],r.prototype,"alphaCutoff",void 0);e([t({type:Boolean})],r.prototype,"doubleSided",void 0);e([u({none:"none",back:"back",front:"front"})],r.prototype,"cullFace",void 0);e([t({type:n})],r.prototype,"normalTexture",void 0);e([t({type:n})],r.prototype,"occlusionTexture",void 0);e([t({type:n})],r.prototype,"emissiveTexture",void 0);e([t({type:[Number]})],r.prototype,"emissiveFactor",void 0);e([t({type:l})],r.prototype,"pbrMetallicRoughness",void 0);r=e([p("esri.layer.support.I3SMaterialDefinition")],r);let d=class extends a{};e([t({type:String,json:{read:{source:["name","index"],reader:(o,I)=>o??`${I.index}`}}})],d.prototype,"name",void 0);e([u({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0);d=e([p("esri.layer.support.I3STextureFormat")],d);let m=class extends a{constructor(){super(...arguments),this.atlas=!1}};e([t({type:[d]})],m.prototype,"formats",void 0);e([t({type:Boolean})],m.prototype,"atlas",void 0);m=e([p("esri.layer.support.I3STextureSetDefinition")],m);let s=class extends a{};e([u({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],s.prototype,"type",void 0);e([t({type:Number})],s.prototype,"component",void 0);s=e([p("esri.layer.support.I3SGeometryAttribute")],s);let c=class extends a{};e([u({draco:"draco"})],c.prototype,"encoding",void 0);e([t({type:[String]})],c.prototype,"attributes",void 0);c=e([p("esri.layer.support.I3SGeometryCompressedAttributes")],c);let i=class extends a{constructor(){super(...arguments),this.offset=0}};e([t({type:Number})],i.prototype,"offset",void 0);e([t({type:s})],i.prototype,"position",void 0);e([t({type:s})],i.prototype,"normal",void 0);e([t({type:s})],i.prototype,"uv0",void 0);e([t({type:s})],i.prototype,"color",void 0);e([t({type:s})],i.prototype,"uvRegion",void 0);e([t({type:s})],i.prototype,"featureId",void 0);e([t({type:s})],i.prototype,"faceRange",void 0);e([t({type:c})],i.prototype,"compressedAttributes",void 0);i=e([p("esri.layer.support.I3SGeometryBuffer")],i);let v=class extends a{};e([u({triangle:"triangle"})],v.prototype,"topology",void 0);e([t()],v.prototype,"geometryBuffers",void 0);v=e([p("esri.layer.support.I3SGeometryDefinition")],v);export{y as I,r as a,m as b,v as c};
