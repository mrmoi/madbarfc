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
.controller('PlayersController', function($scope, $http, $ionicPopup, $timeout) {
  $http.get('team.json').success(function(data) {
    $scope.players = data;
  });

  // popup control
  $scope.showPopup = function() {


    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/playerpopup.html',
      /*title: 'Adrian Rodriguez',
      subTitle: 'Player Name',
      scope: $scope,
      cssClass: 'playerPopup',
      */
      buttons: [
        { text: 'Close',
          type: 'button-dark',
        },
      ]
    });

    $http.get('team.json').success(function(data) {
      $scope.p = data;
    });

};
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

});
/*
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
  // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {};

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

});
});
*/
