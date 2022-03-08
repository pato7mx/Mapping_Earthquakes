// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);  // US
let map = L.map('mapid').setView([34.0522, -118.2437], 14);  // Circle on LA

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map. Radius in meters
//let marker = L.circle([34.0522, -118.2437], {
//   radius: 100
//}).addTo(map);

// Add circleMarker. Radius in pixels, so regardless of zoom it will keep its size
//L.circleMarker([34.0522, -118.2437]).addTo(map);

// Yellor marker on dark streets
L.circleMarker([34.0522, -118.2437], {
  radius:300,
  color:"black",
  fillColor:"#ffffa1"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);