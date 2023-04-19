import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Track from "@arcgis/core/widgets/Track.js";
import * as esriNS from "@arcgis/core/kernel.js";
import TrackViewModel from "@arcgis/core/widgets/Track/TrackViewModel";
import "./style.css";

console.log("Version", esriNS.fullVersion);

const geolocationDiv = document.getElementById("geolocationDiv");

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

// const trackVM = new TrackViewModel({
//   view,
//   positionFilterFunction: false
// })

track.viewModel.positionFilterFunction = true;

view.ui.add(track, "top-left");
view.ui.add(geolocationDiv, "top-right");

track.on("track", (d) => {
  console.log("Track:", d);
  geolocationDiv.innerText = `
  Latitude: ${d.position.coords.latitude?.toFixed(4)}
  Longitude: ${d.position.coords.longitude?.toFixed(4)}
  Altitude: ${d.position.coords.altitude?.toFixed(1)}
  Heading: ${d.position.coords.heading?.toFixed(0)}
  Speed: ${d.position.coords.speed?.toFixed(2)}
  Accuracy: ${d.position.coords.accuracy?.toFixed(0)}m
  Position Filter: ${track.viewModel.positionFilterFunction}
  Version: ${esriNS.fullVersion}`;
})

track.on("track-error", (e) => {
  console.error("Geolocation error:", e);
})

view.when(() => {
  track.start();
});
