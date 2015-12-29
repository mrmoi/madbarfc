angular.module('starter.controllers', [])

.controller('AppCtrl',  function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/*
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {

  function initialize() {
    var myLatLng = new google.maps.LatLng(33.467501, -112.056153);
    var mapOptions = {
            center: myLatLng,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        var contentString = "<div><a ng-click='clickTest()'>MadBar FC - Coronado Park <br>Traning Location</a></div>";
            var compiled = $compile(contentString)($scope);
            var infowindow = new google.maps.InfoWindow({
              content: compiled[0]
            });
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Coronado Park, Phoenix AZ'
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });
            $scope.map = map;
          }
              // load event
              google.maps.event.addDomListener(window, 'load', initialize);
          })
*/

.controller('MapController', function($scope, $ionicLoading) {
    google.maps.event.addDomListener(window, 'load', function(){
      var myLatLng = new google.maps.LatLng(37.3000, -120.4833);

      var mapOptions = {
          center: myLatLng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.HYBRID
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      /*navigator.geolocation.getCurrentPosition(function(pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location"
          });
      });*/
  $scope.map = map;
  });

})

  // player list controller
.controller('PlayersController', function($scope, $http) {
  $http.get('team.json').success(function(data) {
    $scope.players = data;
  });

});
