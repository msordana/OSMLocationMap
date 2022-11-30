$.getJSON('../stadtDE.json', function(datas) {
    
    let marker;

    let map = L.map("map").setView([50.876434, 9.998448], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>|<a href="https://ordana.de" target="_blank" >ordana.de</a>',
    }).addTo(map);

    for (let i = 0; i < datas.length; i++) {

        marker = L.marker([datas[i].lat, datas[i].lon])
            .bindPopup(
                `<h3>${datas[i].title}</h3><p>${datas[i].description}</p> <a href='${datas[i].linkAdress}'target="_blank">${datas[i].linkName}</a>`
            )
            .addTo(map);
    }

    
})

function searchLocation() {
    // console.log($('#searchLocation').val());    
}

let land = $.getJSON('../stadtDE.json', function(landdatas) {
    console.log(landdatas);
});

console.log(land);

// let marker;

// let map = L.map("map").setView([50.876434, 9.998448], 7);

// L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
//     maxZoom: 18,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>|<a href="https://ordana.de" target="_blank" >ordana.de</a>',
// }).addTo(map);

// for (let i = 0; i < data.length; i++) {
//     marker = L.marker([data[i].lat, data[i].lon])
//         .bindPopup(
//             `<h3>${data[i].title}</h3><p>${data[i].description}</p> <a href='${data[i].linkAdress}'target="_blank">${data[i].linkName}</a>`
//         )
//         .addTo(map);
// }

// function searchLocation() {}