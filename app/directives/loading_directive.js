(function(angular, starterApp) {

  'use strict';

  starterApp.directive('loadingDirective', function() {
    return {
      templateUrl: 'app/directives/loading_directive.html',
    }
  });

})(window.angular, window.starterApp);