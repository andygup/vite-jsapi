import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Track from "@arcgis/core/widgets/Track.js";
import * as esriNS from "@arcgis/core/kernel.js";
import TrackViewModel from "@arcgis/core/widgets/Track/TrackViewModel";
import Graphic from "@arcgis/core/Graphic";
import "./style.css";

console.log("Version", esriNS.fullVersion);
let positionsArray = [];

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
  view: view,
  geolocationOptions: {
    maximumAge: 0,
    timeout: 30000,
    enableHighAccuracy: true
  },
  // graphic: new Graphic ({
  //  symbol: {
  //    // autocasts as new SimpleMarkerSymbol()
  //    type: "simple-marker",
  //    size: "20px",
  //    color: "red",
  //    // autocasts as new SimpleLineSymbol()
  //    outline: {
  //      color: "#efefef",
  //      width: "1.5px"
  //    }
  //  }
  // })  
  // viewModel: {
  //   positionFilterFunction: (p) => {
  //     let position = null;
  //     positionsArray.push(p.position.coords);
  //     positionsArray.length > 4 ? position = positionsArray.pop() : position = p;
  //     console.log("filter", positionsArray);
  //     return position;
  //   }    
  // }
});

// const trackVM = new TrackViewModel({
//   view,
//   positionFilterFunction: false
// })

// Return a boolean
track.viewModel.positionFilterFunction = (p) => {
  let position = null;
  positionsArray.push(p.position.coords);
  positionsArray.length > 4 ? position = positionsArray.pop() : position = p;
  console.log("filter", positionsArray);
  return position;
};

// track.viewModel.positionFilterFunction = (value) => {
//   const myLocation = {
//     type: "point", // autocasts as new Point()
//     longitude: value.position.coords.longitude,
//     latitude: value.position.coords.latitude  
//   };
//   const withinExtent = geometryEngine.within(myLocation, testExtent);
//   return withinExtent;
// };

view.ui.add(track, "top-left");
view.ui.add(geolocationDiv, "top-right");

track.on("track", (d) => {
  const longitude = d.position.coords.longitude.toFixed(4);
  const latitude = d.position.coords.latitude.toFixed(4);
  console.log("Track1", `${longitude}, ${latitude}`);
  console.log("Track:", d);
  geolocationDiv.innerText = `
  Latitude: ${d.position.coords.latitude?.toFixed(4)}
  Longitude: ${d.position.coords.longitude?.toFixed(4)}
  Altitude: ${d.position.coords.altitude?.toFixed(1)}
  Heading: ${d.position.coords.heading?.toFixed(0)}
  Speed: ${d.position.coords.speed?.toFixed(2)}
  Accuracy: ${d.position.coords.accuracy?.toFixed(0)}m
  Position Filter: ${typeof track.viewModel.positionFilterFunction === "function"}
  Version: ${esriNS.fullVersion}`;
})

track.on("track-error", (e) => {
  console.error("Geolocation error:", e);
})

view.when(() => {
  track.start();
});
