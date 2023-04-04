import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Track from "@arcgis/core/widgets/Track.js";
import "./style.css";

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
view.ui.add(track, "top-left");
view.ui.add(geolocationDiv, "top-right");

track.on("track", (d) => {
  console.log("Track:", d);
  geolocationDiv.innerText = `
  Latitude: ${d.position.coords.latitude.toFixed(3)}
  Longitude: ${d.position.coords.longitude.toFixed(3)}
  Altitude: ${d.position.coords.altitude}
  Heading: ${d.position.coords.heading}
  Speed: ${d.position.coords.speed}
  Accuracy: ${d.position.coords.accuracy}m`;
})

track.on("track-error", (e) => {
  console.error("Geolocation error:", e);
})

view.when(() => {
  track.start();
});
