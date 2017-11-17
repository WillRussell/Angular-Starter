(function(angular, starterApp) {

  'use strict';

  starterApp.controller('main_ctrl', function(ExampleFactory) {

    var vm = this; // view model 

    ExampleFactory.query(function(data) {

      var roster = JSON.parse(angular.toJson(data));

      var activeFighters = _.filter(roster, { "fighter_status": "Active" });

      console.log(activeFighters.length);

      vm.actives = activeFighters;

    });

  });
})(window.angular, window.starterApp);