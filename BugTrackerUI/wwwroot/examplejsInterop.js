window.renderMap = () => {
    require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

        esriConfig.apiKey = "AAPK97ee7413de414422a27bd9d6ea967f9bZMv9dFAWP_UiLeKm5n1S8Fq_6UIZmf4igNTO04Zvk8J4YcVh82NzRHGUDC5sgx2t";


        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
        });

        const view = new MapView({
            map: map,
            center: [-118.805, 34.027], // Longitude, latitude
            zoom: 13, // Zoom level
            container: "view-div" // Div element
        });
    });
};