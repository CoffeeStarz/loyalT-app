// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('coffeeCard', ['ionic', 'coffeeCard.controllers', 'coffeeCard.factories', 'coffeeCard.directives'])

.run(function ($rootScope, $ionicPlatform) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($urlRouterProvider, $stateProvider) {
  $stateProvider

  .state('phone', {
    url: '/phone',
    // abstract: true,
    templateUrl: 'templates/phone.html',
    controller: 'PhoneCtrl',
    resolve: {
      user: function (AuthFactory) {
        return AuthFactory.isLoggedIn();
      },
      rewards: function (RewardFactory) {
        return RewardFactory.getAll();
      }
    }
  });

  // when there is an empty route, redirect to /index
  $urlRouterProvider.when('', '/phone');
});
