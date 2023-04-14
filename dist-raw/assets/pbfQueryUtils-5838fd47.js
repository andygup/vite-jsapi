import{b9 as k,fl as d,E as F}from"./index-468a9268.js";import{P as A}from"./pbf-77fea3f9.js";import{h as N,a as D,O as g}from"./OptimizedGeometry-af84d2ad.js";import{O as U}from"./OptimizedFeatureSet-5c82fe5a.js";const _=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class te{constructor(e){this._options=e,this.geometryTypes=_,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new U}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||k(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const n=d(this._options.sourceSpatialReference),i=d(e.spatialReference),a=n/i;if(a!==1)for(const o of e.features){if(!N(o))continue;const s=o.geometry.coords;for(let r=2;r<s.length;r+=3)s[r]*=a}}addFeature(e,n){e.features.push(n)}createFeature(){return new D}createSpatialReference(){return{wkid:0}}createGeometry(){return new g}addField(e,n){e.fields.push(n)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((n,i)=>n+i,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,n){e.coords[this._coordinatePtr++]=n}addCoordinatePoint(e,n){e.coords.push(n)}addLength(e,n){e.lengths.push(n)}addQueryGeometry(e,n){e.queryGeometry=n.queryGeometry,e.queryGeometryType=n.queryGeometryType}createPointGeometry(){return new g}}const S=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],f=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],I=["upperLeft","lowerLeft"];function h(t){return t>=S.length?null:S[t]}function L(t){return t>=f.length?null:f[t]}function R(t){return t>=I.length?null:I[t]}function m(t,e){return e>=t.geometryTypes.length?null:t.geometryTypes[e]}function O(t,e,n){const s=t.asUnsafe(),r=e.createPointGeometry(n);for(;s.next();)switch(s.tag()){case 3:{const u=s.getUInt32(),p=s.pos()+u;let c=0;for(;s.pos()<p;)e.addCoordinatePoint(r,s.getSInt64(),c++);break}case 1:case 2:default:s.skip()}return r}function M(t,e,n){const s=t.asUnsafe(),r=e.createGeometry(n),u=2+(n.hasZ?1:0)+(n.hasM?1:0);for(;s.next();)switch(s.tag()){case 2:{const p=s.getUInt32(),c=s.pos()+p;let E=0;for(;s.pos()<c;)e.addLength(r,s.getUInt32(),E++);break}case 3:{const p=s.getUInt32(),c=s.pos()+p;let E=0;for(e.allocateCoordinates(r);s.pos()<c;)e.addCoordinate(r,s.getSInt64(),E),E++,E===u&&(E=0);break}case 1:default:s.skip()}return r}function G(t){const a=t.asUnsafe(),o=new g;let s="esriGeometryPoint";for(;a.next();)switch(a.tag()){case 2:{const r=a.getUInt32(),u=a.pos()+r;for(;a.pos()<u;)o.lengths.push(a.getUInt32());break}case 3:{const r=a.getUInt32(),u=a.pos()+r;for(;a.pos()<u;)o.coords.push(a.getSInt64());break}case 1:{s=_[a.getEnum()];break}default:a.skip()}return{queryGeometry:o,queryGeometryType:s}}function w(t){const c=t.asUnsafe();for(;c.next();)switch(c.tag()){case 1:return c.getString();case 2:return c.getFloat();case 3:return c.getDouble();case 4:return c.getSInt32();case 5:return c.getUInt32();case 6:return c.getInt64();case 7:return c.getUInt64();case 8:return c.getSInt64();case 9:return c.getBool();default:return c.skip(),null}return null}function q(t){const r=t.asUnsafe(),u={type:h(0)};for(;r.next();)switch(r.tag()){case 1:u.name=r.getString();break;case 2:u.type=h(r.getEnum());break;case 3:u.alias=r.getString();break;case 4:u.sqlType=L(r.getEnum());break;case 5:{r.skip();break}case 6:u.defaultValue=r.getString();break;default:r.skip()}return u}function P(t){const i={},a=t.asUnsafe();for(;a.next();)switch(a.tag()){case 1:i.name=a.getString();break;case 2:i.isSystemMaintained=a.getBool();break;default:a.skip()}return i}function C(t,e,n,i){const r=e.createFeature(n);let u=0;for(;t.next();)switch(t.tag()){case 1:{const p=i[u++].name;r.attributes[p]=t.processMessage(w);break}case 2:{r.geometry=t.processMessageWithArgs(M,e,n);break}case 4:{r.centroid=t.processMessageWithArgs(O,e,n);break}default:t.skip();break}return r}function Y(t){const o=[1,1,1,1],s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:o[0]=s.getDouble();break;case 2:o[1]=s.getDouble();break;case 4:o[2]=s.getDouble();break;case 3:o[3]=s.getDouble();break;default:s.skip()}return o}function B(t){const o=[0,0,0,0],s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:o[0]=s.getDouble();break;case 2:o[1]=s.getDouble();break;case 4:o[2]=s.getDouble();break;case 3:o[3]=s.getDouble();break;default:s.skip()}return o}function W(t){const a={originPosition:R(0)},o=t.asUnsafe();for(;o.next();)switch(o.tag()){case 1:a.originPosition=R(o.getEnum());break;case 2:a.scale=o.processMessage(Y);break;case 3:a.translate=o.processMessage(B);break;default:o.skip();break}return a}function V(t){const a={},o=t.asUnsafe();for(;o.next();)switch(o.tag()){case 1:a.shapeAreaFieldName=o.getString();break;case 2:a.shapeLengthFieldName=o.getString();break;case 3:a.units=o.getString();break;default:o.skip()}return a}function H(t,e){const r=e.createSpatialReference();for(;t.next();)switch(t.tag()){case 1:r.wkid=t.getUInt32();break;case 5:r.wkt=t.getString();break;case 2:r.latestWkid=t.getUInt32();break;case 3:r.vcsWkid=t.getUInt32();break;case 4:r.latestVcsWkid=t.getUInt32();break;default:t.skip()}return r}function Q(t,e){const l=e.createFeatureResult(),T=t.asUnsafe();l.geometryType=m(e,0);let y=!1;for(;T.next();)switch(T.tag()){case 1:l.objectIdFieldName=T.getString();break;case 3:l.globalIdFieldName=T.getString();break;case 4:l.geohashFieldName=T.getString();break;case 5:l.geometryProperties=T.processMessage(V);break;case 7:l.geometryType=m(e,T.getEnum());break;case 8:{l.spatialReference=T.processMessageWithArgs(H,e);break}case 10:l.hasZ=T.getBool();break;case 11:l.hasM=T.getBool();break;case 12:l.transform=T.processMessage(W);break;case 9:{const b=T.getBool();l.exceededTransferLimit=b;break}case 13:e.addField(l,T.processMessage(q));break;case 15:y||(e.prepareFeatures(l),y=!0),e.addFeature(l,T.processMessageWithArgs(C,e,l,l.fields));break;case 2:l.uniqueIdField=T.processMessage(P);break;case 6:default:T.skip()}return e.finishFeatureResult(l),l}function x(t,e){const s={};let r=null;for(;t.next();)switch(t.tag()){case 4:r=t.processMessageWithArgs(G);break;case 1:s.featureResult=t.processMessageWithArgs(Q,e);break;case 2:case 3:default:t.skip()}return r!=null&&s.featureResult&&e.addQueryGeometry(s,r),s}function Z(t,e){try{const i=new A(new Uint8Array(t),new DataView(t)),a={};for(;i.next();)switch(i.tag()){case 2:a.queryResult=i.processMessageWithArgs(x,e);break;default:i.skip()}return a}catch(n){throw new F("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:n})}}function se(t,e){const n=Z(t,e),i=n.queryResult.featureResult,a=n.queryResult.queryGeometry,o=n.queryResult.queryGeometryType;if(i&&i.features&&i.features.length&&i.objectIdFieldName){const s=i.objectIdFieldName;for(const r of i.features)r.attributes&&(r.objectId=r.attributes[s])}return i&&(i.queryGeometry=a,i.queryGeometryType=o),i}export{te as O,q as a,W as b,se as p};
