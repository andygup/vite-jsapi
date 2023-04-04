import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Track from "@arcgis/core/widgets/Track.js";
import "./style.css";

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 4,
  center: [15, 65] // longitude, latitude
});

const track = new Track({
  view: view
});
view.ui.add(track, "top-left");

track.on("track-error", (e) => {
  console.error("Geolocation error:", e);
})

view.when(() => {
  track.start();
});
