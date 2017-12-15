(function(angular, starterApp) {

  'use strict';


  var api_url = 'some_url';

  /* Simple GET */
  starterApp.factory('ExampleFactory', function($resource) {
    return $resource(api_url, {}, {
      get: {
        method: 'GET',
      },
      transformResponse: function(data) {
        return JSON.parse(data);
      }
    });
  });



  /* GET with dynamic params */
  starterApp.factory('ExampleFactory2', function($resource) {

    return $resource(api_url + ':param1&:param2', {
      param1: '@param1',
      param2: '@param2',
    }, {
      get: {
        method: 'GET',
        transformResponse: function(data) {
          return JSON.parse(data);
        }
      }
    });

  });





})(window.angular, window.starterApp);