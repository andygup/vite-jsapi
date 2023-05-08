import{aL as l,af as e,ag as t,aj as f,bD as v,bF as u,a as c}from"./index-6eb28d6b.js";import h from"./FeatureLayer-f10d360b.js";import"./UniqueValueRenderer-96d9835c.js";import"./LegendOptions-8b5a4dff.js";import"./diffUtils-e501908d.js";import"./SizeVariable-d56771ee.js";import"./colorRamps-991e13c0.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-d204db2e.js";import"./ColorStop-57d23cae.js";import"./featureFlags-825f837d.js";import"./styleUtils-4cbc1c81.js";import"./jsonUtils-4ca2381c.js";import"./DictionaryLoader-d4fe8fed.js";import"./LRUCache-c5294c76.js";import"./Version-fd75b892.js";import"./FieldsIndex-b55fecf3.js";import"./heatmapUtils-b8fab62d.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-12c5c93c.js";import"./sql-1e6265ed.js";import"./FeatureLayerBase-bb86c1b8.js";import"./Field-3c7d8d62.js";import"./fieldType-df6f400c.js";import"./commonProperties-71c0550b.js";import"./ElevationInfo-6810683d.js";import"./AttachmentQuery-e71b7522.js";import"./Query-2a94894d.js";import"./RelationshipQuery-d6a848d8.js";import"./serviceCapabilitiesUtils-e523e545.js";import"./editsZScale-82fb9faf.js";import"./queryZScale-3f7733ad.js";import"./FeatureSet-af928f6b.js";import"./APIKeyMixin-e31d187b.js";import"./ArcGISService-6bc3de28.js";import"./BlendLayer-8cb2f026.js";import"./jsonUtils-4e3a5483.js";import"./parser-aaaca3ad.js";import"./CustomParametersMixin-e2086895.js";import"./EditBusLayer-cc983181.js";import"./FeatureReductionLayer-4a103bdb.js";import"./FeatureEffect-d27dd9c4.js";import"./clusterUtils-f9477424.js";import"./labelingInfo-e90eb8c8.js";import"./labelUtils-01c8275b.js";import"./defaultsJSON-b087dd4d.js";import"./OperationalLayer-8766a006.js";import"./OrderedLayer-edd317ce.js";import"./PortalLayer-5a19a8b1.js";import"./portalItemUtils-c64fb6e5.js";import"./RefreshableLayer-a314122a.js";import"./ScaleRangeLayer-a3b20e36.js";import"./TemporalLayer-707c4df5.js";import"./FeatureTemplate-a8671a32.js";import"./FeatureType-798c0e0e.js";import"./fieldProperties-94448584.js";import"./versionUtils-85159e34.js";import"./styleUtils-51fd2fda.js";import"./TopFeaturesQuery-caeb4870.js";import"./popupUtils-fa63b933.js";let r=class extends l(v){constructor(n){super(n)}read(n,p){const y={};for(const d in n)y[d.toLowerCase()]=n[d];super.read(y,p)}};e([t({json:{name:"dempathprefix"}})],r.prototype,"demPathPrefix",void 0),e([t({json:{name:"dempathsuffix"}})],r.prototype,"demPathSuffix",void 0),e([t({json:{name:"imagepathprefix"}})],r.prototype,"imagePathPrefix",void 0),e([t({json:{name:"imagepathsuffix"}})],r.prototype,"imagePathSuffix",void 0),e([t({json:{name:"depthimagepathprefix"}})],r.prototype,"depthImagePathPrefix",void 0),e([t({json:{name:"depthimagepathsuffix"}})],r.prototype,"depthImagePathSuffix",void 0),e([t({json:{name:"localimagepathprefix"}})],r.prototype,"localImagePathPrefix",void 0),e([t({json:{name:"localimagepathsuffix"}})],r.prototype,"localImagePathSuffix",void 0),e([t({json:{name:"videopathprefix"}})],r.prototype,"videoPathPrefix",void 0),e([t({json:{name:"videopathsuffix"}})],r.prototype,"videoPathSuffix",void 0),r=e([f("esri.layers.orientedImagery.core.Affixes")],r);const g=r;let i=class extends v{constructor(s){super(s)}};e([t({type:Number,json:{write:!0}})],i.prototype,"averageHeightAboveGround",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"cameraHeading",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"cameraPitch",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"cameraRoll",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"farDistance",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"horizontalFieldOfView",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"nearDistance",void 0),e([t({json:{write:!0}})],i.prototype,"orientedImageryType",void 0),e([t({type:Number,json:{write:!0}})],i.prototype,"verticalFieldOfView",void 0),i=e([f("esri.layers.orientedImagery.core.CameraProperties")],i);const x=i;let o=class extends h{constructor(){super(...arguments),this.affixes=null,this.geometryType="point",this.operationalLayerType="OrientedImageryLayer",this.type="oriented-imagery",this.elevationSource=null}readElevationSource(s,n){var y;let p=(y=s.url)==null?void 0:y.trim();if(p){const{affixes:d}=this;if(d){const{demPathSuffix:a,demPathPrefix:m}=d;m!=null&&m.trim()&&(p=(m==null?void 0:m.trim())+"/"+p),a!=null&&a.trim()&&(p=p+"/"+(a==null?void 0:a.trim()))}}return{...s,url:p}}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new c("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([t({type:g,json:{write:!0}})],o.prototype,"affixes",void 0),e([t({type:x,json:{write:!0}})],o.prototype,"cameraProperties",void 0),e([t({json:{write:!0}})],o.prototype,"coverage",void 0),e([t({json:{write:!0}})],o.prototype,"coveragePercent",void 0),e([t({json:{write:!0}})],o.prototype,"defaultSearchLocation",void 0),e([t({json:{write:!0}})],o.prototype,"depthImage",void 0),e([t({json:{write:!0}})],o.prototype,"geometryType",void 0),e([t()],o.prototype,"imageProperties",void 0),e([t({type:Number,json:{write:!0}})],o.prototype,"maximumDistance",void 0),e([t({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),e([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),e([t({json:{write:!0},dependsOn:["affixes"]})],o.prototype,"elevationSource",void 0),e([u("portal-item","elevationSource",["elevationSource"])],o.prototype,"readElevationSource",null),o=e([f("esri.layers.OrientedImageryLayer")],o);const Ne=o;export{Ne as default};
