import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Locate from '@arcgis/core/widgets/Locate.js';
import "./style.css";

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-56.049, 38.485, 78],
  zoom: 3
});

const locateBtn = new Locate({
  view: view
});

// Add the locate widget to the top left corner of the view
view.ui.add(locateBtn, {
  position: "top-left"
});