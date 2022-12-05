let locations;

$.ajax({
  url: "../stadtDE.json",
  async: false,
  dataType: "json",
  success: function (data) {
    locations = data;
  },
});

// Default Map Settings overall view
let map = L.map("map").setView([50.876434, 9.998448], 6);

L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>|<a href="https://ordana.de" target="_blank" > &copy; ordana.de</a>',
}).addTo(map);

let layerGroup = new L.LayerGroup();
layerGroup.addTo(map);

// Add Germany Border
$.getJSON("../3_mittel.geo.json", function (data) {
  let grenze = L.geoJson(data);
  layerGroup.addLayer(grenze);
  grenze.addTo(map);

  map.on("zoomend", function () {
    console.log(map.getZoom());
    if (map.getZoom() > 7) {
      layerGroup.removeLayer(grenze);
    } else {
      layerGroup.addLayer(grenze);
    }
  });
});

var greenIcon = new L.Icon({
  iconUrl: "../css/images/mapPin.svg",
  shadowUrl: "../css/images/marker-shadow.png",
  iconSize: [35, 51],
  iconAnchor: [12, 41],
  popupAnchor: [6, -36],
  shadowSize: [41, 41],
});

// Setting for Marker & city-array for autocomplete function
let citys = [];
let marker;

for (let i = 0; i < locations.length; i++) {
  marker = L.marker([locations[i].lat, locations[i].lon], { icon: greenIcon })
    .bindPopup(
      `<h3>${locations[i].title}</h3>
            <p><span class="descrSpace">${locations[i].description}</span> <br/> ${locations[i].strasse} ${locations[i].hausnr} <br/> ${locations[i].plz} ${locations[i].stadt}</p> 
            <a href='${locations[i].linkAdress}'target="_blank">${locations[i].linkName}</a>`
    )
    .addTo(map);

  // pushed all citys in one Array also the double ones
  citys.push(locations[i].stadt);
}

// Enter Key function
$("#searchLocation").on("keypress", function (e) {
  if (e.which == 13) {
    searchLocation();
  }
});

// delete the duplicates and pushed it in new array
let uniquecitys = [...new Set(citys)];

// Autocomplete Function
$(function () {
  $("#searchLocation").autocomplete({
    source: uniquecitys,
    select: function (e, ui) {
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].stadt === ui.item["value"]) {
          map.flyTo([locations[i].lat, locations[i].lon], 12);
          $("#searchLocation").autocomplete("close");
        }
      }
    },
  });
});

function searchLocation() {
  let index;
  let notfound = $("#notfound");
  let target = $("#searchLocation").val();
  target =
    target.substring(0, 1).toUpperCase() + target.substring(1, target.length);

  if (target == "") {
    $(notfound).text(`Das feld darf nicht leer sein.`);
    $(notfound).css("display", "block");
  } else if (target != "") {
    for (let i = 0; i < locations.length; i++) {
      if (target == locations[i].stadt) {
        index = i;
        $("#searchLocation").val("");
      } else {
        $(notfound).text(
          `Diese Stadt ist zurzeit nicht vergeben, bitte ein gültigen Stadtnamen eingeben z.B. Berlin, Düsseldorf oder Hamburg`
        );
        $(notfound).css("display", "block");
      }
    }
    map.flyTo([locations[index].lat, locations[index].lon], 10);
    $(notfound).css("display", "none");
  }
}

// HTML button onclick function
function openThisCity(cityId) {
  map.flyTo([locations[cityId].lat, locations[cityId].lon], 12);
}
