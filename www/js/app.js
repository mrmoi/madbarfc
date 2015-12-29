angular.module('starter', ['ionic', 'starter.controllers','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.players', {
    url: '/players',
    views: {
      'menuContent': {
        templateUrl: 'templates/players.html'
      }
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('app.fixtures', {
      url: '/fixtures',
      views: {
        'menuContent': {
          templateUrl: 'templates/fixtures.html'
          //controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.history', {
      url: '/history',
      views: {
        'menuContent': {
          templateUrl: 'templates/history.html'
          //controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.traininglocs', {
      url: '/traininglocs',
      views: {
        'menuContent': {
          templateUrl: 'templates/traininglocs.html',
          controller: 'Example'
        }
      }
    })
    .state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html'
          //controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.gallery', {
      url: '/gallery',
      views: {
        'menuContent': {
          templateUrl: 'templates/gallery.html'
          //controller: 'PlaylistsCtrl'
        }
      }
    })
/*
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
*/

    .state('app.standings', {
      url: '/standings',
      views: {
        'menuContent': {
          templateUrl: 'templates/standings.html'
          //controller: 'PlaylistCtrl'
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
