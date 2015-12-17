var map;
var map2;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.467, lng: -112.056},
    zoom: 18
  });

  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 33.467, lng: -112.056},
    zoom: 18
  });
}
google.maps.event.addDomListener(window,'load', initMap);
