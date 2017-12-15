(function(angular, starterApp) {

  'use strict';

  starterApp.controller('root_ctrl', function($scope, $interval, $mdSidenav) {


    $scope.nav_links = [{
      label: 'Home',
      state: 'home',
      icon: 'home',
    }, {
      label: 'About',
      state: 'about',
      icon: 'build',
    }];


  });
})(window.angular, window.starterApp);