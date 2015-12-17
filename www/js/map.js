var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.467, lng: -112.056},
    zoom: 18
  });
}
