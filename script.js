
var map = new ol.Map({
    target: 'map', 
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() 
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([35.2433, 38.9637]), 
        zoom: 6 
    })
});


var cities = [
    { name: "Ankara", coords: [32.8597, 39.9334] },
    { name: "Kırıkkale", coords: [33.5169, 39.8467] },
    { name: "Yozgat", coords: [34.8147, 39.8208] },
    { name: "Kırşehir", coords: [34.1612, 39.1425] },
    { name: "Nevşehir", coords: [34.7129, 38.6245] },
    { name: "Aksaray", coords: [34.0254, 38.3722] },
    { name: "Kayseri", coords: [35.4955, 38.7312] },
    { name: "Sivas", coords: [37.0150, 39.7477] },
    { name: "Çorum", coords: [34.9526, 40.5489] },
    { name: "Çankırı", coords: [33.6134, 40.6013] },
    { name: "Bolu", coords: [31.5788, 40.7350] },
    { name: "Düzce", coords: [31.1613, 40.8438] },
    { name: "Adapazarı", coords: [30.4033, 40.7767] },
    { name: "İzmit", coords: [29.9294, 40.7654] },
    { name: "İstanbul", coords: [28.9784, 41.0082] },
    { name: "Tekirdağ", coords: [27.5081, 40.9780] },
    { name: "Kırklareli", coords: [27.2249, 41.7351] },
    { name: "Edirne", coords: [26.5586, 41.6772] },
    { name: "Eskişehir", coords: [30.5206, 39.7667] },
    { name: "Bilecik", coords: [30.1667, 40.1500] },
    { name: "Bursa", coords: [29.0611, 40.1828] },
    { name: "Balıkesir", coords: [27.8903, 39.6484] },
    { name: "Çanakkale", coords: [26.4142, 40.1553] },
    { name: "Manisa", coords: [27.4221, 38.6120] },
    { name: "İzmir", coords: [27.1384, 38.4237] },
    { name: "Uşak", coords: [29.4058, 38.6823] },
    { name: "Denizli", coords: [29.0872, 37.7742] },
    { name: "Aydın", coords: [27.8450, 37.8486] },
    { name: "Muğla", coords: [28.3669, 37.2153] },
    { name: "Burdur", coords: [30.2830, 37.7204] },
    { name: "Isparta", coords: [30.5190, 37.7644] },
    { name: "Antalya", coords: [30.7133, 36.8969] },
    { name: "Mersin", coords: [34.6399, 36.8121] },
    { name: "Konya", coords: [32.4826, 37.8667] },
    { name: "Karaman", coords: [33.2150, 37.1811] },
];


cities.forEach(function(city) {

    var cityCoordinates = ol.proj.fromLonLat(city.coords);


    var markerStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10, 
            fill: new ol.style.Fill({
                color: '#ff5722' 
            }),
            stroke: new ol.style.Stroke({
                color: '#ffffff', 
                width: 2
            })
        }),
        text: new ol.style.Text({
            text: city.name,
            font: 'bold 14px Arial',
            fill: new ol.style.Fill({
                color: '#ffffff'
            }),
            offsetY: -25 
        })
    });


    var marker = new ol.Feature({
        geometry: new ol.geom.Point(cityCoordinates)
    });


    marker.setStyle(markerStyle);


    var vectorSource = new ol.source.Vector({
        features: [marker]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
});
