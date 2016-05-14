var app = angular.module('rumblemap', ['ui.router','ngMaterial']);

app.config(function ($urlRouterProvider, $locationProvider) {

    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

});


app.run(function ($rootScope, Mapper) {

  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });

  angular.element(document).ready(function(){

    //console.log('ini map')
    Mapper.initMap(initialize_gmaps());
  });

});

// app.config(function ($stateProvider) {
//     $stateProvider.state('home', {
//         url: '/',
//         templateUrl: '/js/home/home.html',
//         resolve: {
//           earthquakes: function(EarthquakeFactory){
//             return EarthquakeFactory.fetchAll();
//           }
//         },
//         controller: function($scope, earthquakes, Mapper){
//           $scope.earthquakes = earthquakes;
//         }
//     });
// });

app.controller('MainCtrl', function($scope, EarthquakeFactory, Mapper){

  $scope.period = ['Last Hour', 'Last Day', 'Last Week'];
  $scope.active = 0;

  $scope.init = function(){
    EarthquakeFactory.fetchAll()
    .then(function(earthquakes){
      $scope.earthquakes = earthquakes;
      Mapper.drawMap();
      $scope.active = Mapper.getActive();
    });
  };

  $scope.init();
});
