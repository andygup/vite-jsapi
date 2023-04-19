import{ae as t,af as o,ai as i,E as p}from"./index-b51e75d5.js";import m from"./FeatureLayer-2876df1d.js";import"./UniqueValueRenderer-6f6aa298.js";import"./LegendOptions-c1ffbacd.js";import"./diffUtils-1090f477.js";import"./SizeVariable-f0de0a1e.js";import"./colorRamps-78691ea3.js";import"./sizeVariableUtils-2914222a.js";import"./lengthUtils-59fc3632.js";import"./ColorStop-feeb96c4.js";import"./jsonUtils-97563038.js";import"./styleUtils-10d73057.js";import"./featureFlags-dcf59b6a.js";import"./jsonUtils-7d477465.js";import"./DictionaryLoader-a4214801.js";import"./LRUCache-3f2a86dd.js";import"./MemCache-467264d5.js";import"./FieldsIndex-27b25eac.js";import"./heatmapUtils-a897c480.js";import"./vec4-3dd523e8.js";import"./vec4f64-efdcb593.js";import"./MultiOriginJSONSupport-c4bfffa6.js";import"./sql-c1a5e8cf.js";import"./FeatureLayerBase-667cd77d.js";import"./Field-f8fa059e.js";import"./fieldType-dfe85208.js";import"./commonProperties-c098604c.js";import"./ElevationInfo-0549af0a.js";import"./AttachmentQuery-95972ea9.js";import"./Query-aa3f0821.js";import"./RelationshipQuery-44d08b69.js";import"./serviceCapabilitiesUtils-adfb0f5a.js";import"./editsZScale-f21c6bc1.js";import"./queryZScale-3a414c62.js";import"./FeatureSet-00572347.js";import"./APIKeyMixin-fccedd7f.js";import"./ArcGISService-cf2b05cb.js";import"./BlendLayer-f455f371.js";import"./jsonUtils-e49662a7.js";import"./parser-e88e0cee.js";import"./_commonjsHelpers-725317a4.js";import"./CustomParametersMixin-dcb81e46.js";import"./EditBusLayer-34800995.js";import"./FeatureReductionLayer-aef141cd.js";import"./FeatureEffect-3ccd2609.js";import"./clusterUtils-5e98e18f.js";import"./labelingInfo-14ab3cff.js";import"./labelUtils-df8241fd.js";import"./defaultsJSON-b396ba80.js";import"./OperationalLayer-d41e51ba.js";import"./OrderedLayer-56a84f15.js";import"./PortalLayer-72af5b97.js";import"./portalItemUtils-88a22e4d.js";import"./RefreshableLayer-b146497a.js";import"./ScaleRangeLayer-172a7bde.js";import"./TemporalLayer-5d14408e.js";import"./FeatureTemplate-97d53328.js";import"./FeatureType-4bd43aff.js";import"./fieldProperties-b34bf4a3.js";import"./versionUtils-2ae63437.js";import"./styleUtils-3e1d36f6.js";import"./TopFeaturesQuery-4a471142.js";import"./popupUtils-994537ae.js";let r=class extends m{constructor(e){super(e),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new p("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([o()],r.prototype,"cameraProperties",void 0);t([o()],r.prototype,"coverage",void 0);t([o()],r.prototype,"coveragePercent",void 0);t([o()],r.prototype,"defaultSearchLocation",void 0);t([o()],r.prototype,"depthImage",void 0);t([o()],r.prototype,"digitalElevationModel",void 0);t([o()],r.prototype,"geometryType",void 0);t([o()],r.prototype,"imageProperties",void 0);t([o()],r.prototype,"maximumDistance",void 0);t([o({json:{read:!1},value:"oriented-imagery",readOnly:!0})],r.prototype,"type",void 0);t([o({type:["OrientedImageryLayer"]})],r.prototype,"operationalLayerType",void 0);r=t([i("esri.layers.OrientedImageryLayer")],r);const fr=r;export{fr as default};
