var map, osm, esri, terreno;
var controlCapas;
var controlEscala;

function init() {
    map = L.map('map').setView([41.6863, 1.8382], 8);

    esri = L.tileLayer(
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 17,
        minZoom: 1,
        attribution: 'Tiles © Esri',
    }).addTo(map);

    osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 1,
        attribution: 'OSM'
    });

    terreno =
        L.tileLayer('http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: 'Stamen terrain',
            opacity: 0.5
        });

    
    
    var hibrid =L.layerGroup();
        Esri_WorldImagery2 =
        L.tileLayer(
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(hibrid);

    var Stamen_TonerHybrid = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }).addTo(hibrid);



    var baseMaps = {
        "Orto_esri": esri,
        "Mapa_osm": osm,
        "Hibrid": hibrid
    };
    var overlayMaps = {
        "Terrain": terreno
    };




    controlCapas = L.control.layers(baseMaps, null,{collapsed:false});
    controlCapas.addTo(map);

    controlEscala = L.control.scale();
    controlEscala.addTo(map);
}