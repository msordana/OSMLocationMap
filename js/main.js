let locations;

$.ajax({
    url: "../stadtDE.json",
    async: false,
    dataType: "json",
    success: function (data) {
        locations = data;
    },
});

let map = L.map("map").setView([50.876434, 9.998448], 6);

L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>|<a href="https://ordana.de" target="_blank" > &copy; ordana.de</a>',
}).addTo(map);


let marker;
let citys = [];

for (let i = 0; i < locations.length; i++) {

    marker = L.marker([locations[i].lat, locations[i].lon])
        .bindPopup(
            `<h3>${locations[i].title}</h3>
            <p><span class="descrSpace">${locations[i].description}</span> <br/> ${locations[i].strasse} ${locations[i].hausnr} <br/> ${locations[i].plz} ${locations[i].stadt}</p> 
            <a href='${locations[i].linkAdress}'target="_blank">${locations[i].linkName}</a>`
        )
        .addTo(map);


    citys.push(locations[i].stadt);
}

$('#searchLocation').on('keypress', function(e) {
    if(e.which == 13) {
        searchLocation();
    }
})

let uniquecitys = [...new Set(citys)];
console.log(uniquecitys);
$(function() {
    $('#searchLocation').autocomplete({
        source: uniquecitys,
        messages: {
            noResults: '',
            results: function(amount) {
                return ""
            }
        }
    });
})

function searchLocation() {
    let index;
    let notfound = $("#notfound");
    let target = $("#searchLocation").val();
    target =
        target.substring(0, 1).toUpperCase() +
        target.substring(1, target.length);

    if (target == "") {
        $(notfound).text(`Das feld darf nicht leer sein.`);
        $(notfound).css("display", "block");
    }
    else if(target != "") {
        for (let i = 0; i < locations.length; i++) {
            if (target == locations[i].stadt) {
                index = i;
                $("#searchLocation").val("");
            }
            else {
                $(notfound).text(`Bitte ein gültigen Stadtnamen eingeben z.B. Berlin, Düsseldorf oder Hamburg`);
                $(notfound).css("display", "block");
            }
        }
        map.flyTo([locations[index].lat, locations[index].lon], 12);
        $(notfound).css("display", "none");
    }    
}

function openThisCity(cityId) {
    map.flyTo([locations[cityId].lat, locations[cityId].lon], 12);
}

