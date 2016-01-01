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

// player list controller
.controller('PlayersController', function($scope, $http, $stateParams) {
    $http.get('team.json').success(function(data) {
      $scope.players = data;

    });
})

// fixtures controller
.controller('FixturesController', function($scope, $http) {
  $http.get('fixtures.json').success(function(data) {
    $scope.fixtures = data;
  });
})

// Standings controller
.controller('StandingsController', function($scope, $http) {
    $http.get('standings.json').success(function(data) {
      $scope.standings = data;
    });
})
// PROFILE CONTROLLER
.controller('ProfileController', function($scope, $http, $stateParams) {
    $http.get('team.json').success(function(data) {
    $scope.players = data;
    $scope.whichItem = $stateParams.playerId;


});
});
