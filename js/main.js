const data = [{
        lat: 51.523499,
        lon: 6.926866,
        title: "DGB",
        description: "Demo Garagen Bottrop",
        linkAdress: 'https://demo.garagen.app/anfrage/p2',
        linkName: 'jetzt Buchen',
        strasse: 'Gladbeckerstr.',
        hausnr: 10,
        ort: 'Bottrop',
        plz: 46242,
        land: 'DE'
    },
    {
        lat: 51.503373,
        lon: 6.916616,
        title: "LRST",
        description: "Lagerraum Self Storage",
        linkAdress: 'https://demo.garagen.app/anfrage/p4',
        linkName: 'jetzt Buchen',
        strasse: 'Karl-Peters-Str.',
        hausnr: 25,
        ort: 'Bottrop',
        plz: 46242,
        land: 'DE'
    },
    {
        lat: 48.156956,
        lon: 11.525682,
        title: "MPM",
        description: "Park München",
        linkAdress: 'https://demo.garagen.app/anfrage/p3',
        linkName: 'jetzt Buchen',
        strasse: 'Renatastr.',
        hausnr: 71,
        ort: 'München',
        plz: 80639,
        land: 'DE'
    },
    {
        lat: 48.256081,
        lon: 13.033100,
        title: "Park Osttirol",
        description: "POT",
        linkAdress: 'https://demo.garagen.app/anfrage/p6',
        linkName: 'jetzt Buchen',
        strasse: 'Lienzerstr.',
        hausnr: 2,
        ort: 'Braunau',
        plz: 5280,
        land: 'AUT'
    },
];


let marker;

let map = L.map('map').setView([50.876434, 9.998448], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>|<a href="https://ordana.de" target="_blank" >ordana.de</a>'
}).addTo(map);

for (let i = 0; i < data.length; i++) {
    marker = L.marker([data[i].lat, data[i].lon]).bindPopup(`<h3>${data[i].title}</h3><p>${data[i].description}</p> <a href='${data[i].linkAdress}'target="_blank">${data[i].linkName}</a>`).addTo(map);
}


function searchLocation() {

};