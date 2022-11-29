const data = [
    {
        lat: 51.479031,
        lon: 6.863891,
        title: "zu Hause",
        description: "wo Ich wohne",
        linkAdress: '',
        linkName: '',
        strasse: '',
        hausnr: '',
        ort: 'Oberhausen',
        plz: '',
        land: 'DE'
    },
    {
        lat: 51.478509,
        lon: 6.863124,
        title: "Kindergarten",
        description: "Bei mir gegenüber",
        linkAdress: '',
        linkName: '',
        strasse: '',
        hausnr: '',
        ort: 'Oberhausen',
        plz: '',
        land: 'DE'
    },
    {
        lat: 51.477971,
        lon: 6.863355,
        title: "Kirche",
        description: "etwas weiter die Strasse runter",
        linkAdress: '',
        linkName: '',
        strasse: '',
        hausnr: '',
        ort: 'Oberhausen',
        plz: '',
        land: 'DE'
    },
    {
        lat: 51.469646,
        lon: 6.858385,
        title: "Wo ich Arbeite",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrLorem ipsum dolor sit amet, consetetur sadipscing elitrLorem ipsum dolor sit amet, consetetur sadipscing elitr",
        linkAdress: 'https://www.ordana.de',
        linkName: 'Zu ordana.de',
        strasse: '',
        hausnr: '',
        ort: 'Oberhausen',
        plz: '',
        land: 'DE'
    },
    {
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




let map = L.map('map').setView([51.479031, 6.863891], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.479031, 6.863891]).addTo(map);
marker.bindPopup(`<h3>${data[0].title}</h3><p>${data[0].description} <a href=""></a></p>`);

