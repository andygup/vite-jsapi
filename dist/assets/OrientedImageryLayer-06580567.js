import{ae as t,af as r,ai as p,s as e}from"./index-175d32d0.js";import m from"./FeatureLayer-bfa60a8f.js";import"./UniqueValueRenderer-288172e9.js";import"./LegendOptions-8e12359c.js";import"./diffUtils-1e0b45c5.js";import"./SizeVariable-41a3e64d.js";import"./colorRamps-f4ee9bc5.js";import"./sizeVariableUtils-d4870b0d.js";import"./lengthUtils-349f6f20.js";import"./ColorStop-b164d74d.js";import"./jsonUtils-a54641ba.js";import"./styleUtils-659e6a41.js";import"./featureFlags-a084cf3d.js";import"./jsonUtils-10bdfdc6.js";import"./DictionaryLoader-9b7beab2.js";import"./LRUCache-05c2e0c8.js";import"./MemCache-8e066c91.js";import"./FieldsIndex-2024344c.js";import"./heatmapUtils-4fba0b55.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-717d0bca.js";import"./sql-d95c95ff.js";import"./FeatureLayerBase-04bbcd1e.js";import"./Field-b346df3f.js";import"./fieldType-0ef39ec5.js";import"./commonProperties-1c6cac45.js";import"./ElevationInfo-ed295995.js";import"./AttachmentQuery-9dd68404.js";import"./Query-91daeb60.js";import"./RelationshipQuery-84aa24cd.js";import"./serviceCapabilitiesUtils-2941b77b.js";import"./editsZScale-fe0015a8.js";import"./queryZScale-e9f696ed.js";import"./FeatureSet-abad50cc.js";import"./APIKeyMixin-f34e52f8.js";import"./ArcGISService-f83509f7.js";import"./BlendLayer-5b5c1cfc.js";import"./jsonUtils-82684178.js";import"./parser-be52f54c.js";import"./CustomParametersMixin-1f4c24f4.js";import"./EditBusLayer-a7eac63b.js";import"./FeatureReductionLayer-41ba8738.js";import"./FeatureEffect-5be74af9.js";import"./clusterUtils-64f88ebd.js";import"./labelingInfo-ffafbf0b.js";import"./labelUtils-358af0bc.js";import"./defaultsJSON-b087dd4d.js";import"./OperationalLayer-99f6f269.js";import"./OrderedLayer-3d96b800.js";import"./PortalLayer-52ac5aae.js";import"./portalItemUtils-2b04e7ed.js";import"./RefreshableLayer-b8ac4210.js";import"./ScaleRangeLayer-89d5cd65.js";import"./TemporalLayer-bc0a0246.js";import"./FeatureTemplate-58d57d25.js";import"./FeatureType-5988a10a.js";import"./fieldProperties-534769d4.js";import"./versionUtils-6b85bef6.js";import"./styleUtils-7b847a1c.js";import"./TopFeaturesQuery-0e608672.js";import"./popupUtils-10b246d3.js";let o=class extends m{constructor(i){super(i),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new e("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r()],o.prototype,"cameraProperties",void 0),t([r()],o.prototype,"coverage",void 0),t([r()],o.prototype,"coveragePercent",void 0),t([r()],o.prototype,"defaultSearchLocation",void 0),t([r()],o.prototype,"depthImage",void 0),t([r()],o.prototype,"digitalElevationModel",void 0),t([r()],o.prototype,"geometryType",void 0),t([r()],o.prototype,"imageProperties",void 0),t([r()],o.prototype,"maximumDistance",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),t([r({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),o=t([p("esri.layers.OrientedImageryLayer")],o);const co=o;export{co as default};
