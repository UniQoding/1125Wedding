$(document).ready(function () {
    var map = new naver.maps.Map('map-canvas', {
        center: new naver.maps.LatLng(37.413223, 127.123237),
        zoom: 10
    });

    map.setOptions("draggable", false);
    map.setOptions("pinchZoom", false);
    map.setOptions("scrollWheel", false);
    map.setOptions("zoomControl", true);

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.413223, 127.123237),
        map: map,
        icon: {
            url: 'img/mapmarker.png',
            size: new naver.maps.Size(32, 32)
        },
        animation: naver.maps.Animation.BOUNCE
    });
});