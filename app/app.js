'use strict';

/*Initialize the app*/
var starterApp = angular.module('starterApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ngResource'
]);


starterApp.config(function(
  $stateProvider,
  $urlRouterProvider,
  $mdThemingProvider,
  $mdAriaProvider,
  $locationProvider) {


  /*Configure the page routes*/
  $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'main_ctrl',
      controllerAs: 'vm'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'about_ctrl',
      controllerAs: 'vm'
    });



  /* Set angular-material theme */
  $mdThemingProvider.theme('default')
    .primaryPalette('teal', { 'default': '500' })
    .accentPalette('blue', { 'default': '500' })
    .warnPalette('yellow', { 'default': '700' });



  $urlRouterProvider.otherwise('/'); // keep urls clean
  $mdAriaProvider.disableWarnings(); // silence aria-related console warnings
  // $locationProvider.html5Mode(true);
});



starterApp.run(function($rootScope, $interval, $mdSidenav) {

  /*Navbar clock*/
  $interval(function() {
    $rootScope.time = moment().format('dddd, h:mm A');
  }, 1000);


  /*Sidenav toggle */
  $rootScope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };


});