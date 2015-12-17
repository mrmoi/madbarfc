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

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
  function initialize() {
    var myLatLng = new google.maps.LatLng(33, -112);
    var mapOptions = {
            center: myLatLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        var contentString = "<div><a ng-click='clickTest()'>MadBar FC Traning Location</a></div>";
            var compiled = $compile(contentString)($scope);
            var infowindow = new google.maps.InfoWindow({
              content: compiled[0]
            });
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'Coronado Park, Phoenix AZ'
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });
            $scope.map = map;
          }
          google.maps.event.addDomListener(window, 'load', initialize);
          })

  // player list controller
.controller('PlayersController', function($scope, $http) {
  $http.get('team.json').success(function(data) {
    $scope.players = data;
  });

});
