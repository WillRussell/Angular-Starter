(function(angular, starterApp) {

  'use strict';

  starterApp.controller('about_ctrl', function() {

    var vm = this; // view model 

    vm.components = [
      'Angular (1.6.6)',
      'Angular-Material (1.1.5)',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'UI-Router',
      'Moment.js',
      'Underscore.js',
      'Material Icons',
      'Roboto web font'
    ];


  });
})(window.angular, window.starterApp);