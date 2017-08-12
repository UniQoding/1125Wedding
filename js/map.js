$(document).ready(function () {

    /*//Google Map

     var mapCanvas = document.getElementById('map-canvas');
     var myLatlng = new google.maps.LatLng(37.413223, 127.123237); //your latitude and longitude here
     var mapOptions = {
         zoom: 17,
         scrollwheel: false,
         center: myLatlng,
         styles:[{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#cacdcf"},{"lightness":"60"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dbe5ba"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b5dbef"}]}]
     }
     var map = new google.maps.Map(mapCanvas, mapOptions)
     var marker = new google.maps.Marker({
         position: myLatlng,
         icon: 'img/mapmarker.png',
         map: map,
         title: ''
     });*/

    var map = new naver.maps.Map('map-canvas', {
        center: new naver.maps.LatLng(37.413223, 127.123237),
        zoom: 10
    });

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