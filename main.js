import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import "./style.css";

const map = new Map({
  basemap: "streets-vector",
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 8,
  center: [0.1276, 51.5]
});
