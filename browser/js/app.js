var app = angular.module('rumblemap', ['ui.router']);

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

    Mapper.initMap(initialize_gmaps());

  });

});

app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/js/home/home.html',
        resolve: {
          earthquakes: function(EarthquakeFactory){
            return EarthquakeFactory.fetchAll();
          }
        },
        controller: function($scope, earthquakes, Mapper){
          $scope.earthquakes = earthquakes;
          Mapper.getGeoPoints();
        }
    });
});
