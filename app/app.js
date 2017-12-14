'use strict';

/*Initialize the app*/
var starterApp = angular.module('starterApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ngResource',
  'ngCookies'
]);

/*Configure some options*/
starterApp.config(function(
  $urlRouterProvider,
  $mdThemingProvider,
  $mdAriaProvider,
  $locationProvider) {

  /* Set angular-material theme */
  $mdThemingProvider.theme('default')
    .primaryPalette('blue', { 'default': '700' })
    .accentPalette('teal', { 'default': '500' })
    .warnPalette('yellow', { 'default': '700' });


  $urlRouterProvider.otherwise('/'); // keep urls clean
  $locationProvider.hashPrefix('');

  $mdAriaProvider.disableWarnings(); // silence aria-related console warnings
});



/*Start it*/
starterApp.run(function($rootScope, $interval) {

  /*Navbar clock*/
  $interval(function() {
    $rootScope.time = moment().format('dddd, h:mm A');
  }, 1000);

});