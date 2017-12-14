(function(angular, starterApp) {

  'use strict';

  starterApp.config(function($stateProvider) {

    $stateProvider.state('about', {
      parent: 'root',
      url: '/about',
      views: {
        'page@root': {
          templateUrl: 'app/about/about.html',
          controller: 'about_ctrl',
          controllerAs: 'vm'
        },
      },
    });

  });
})(window.angular, window.starterApp);