(function(angular, starterApp) {

  'use strict';

  starterApp.config(function($stateProvider) {

    $stateProvider.state('home', {
      parent: 'root',
      url: '/',
      views: {
        'page@root': {
          templateUrl: 'app/home/home.html',
          controller: 'home_ctrl',
          controllerAs: 'vm'
        },
      },
    });

  });
})(window.angular, window.starterApp);