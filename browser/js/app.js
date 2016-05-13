var app = angular.module('rumblemap', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {

    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

});


app.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});

app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/js/home/home.html',
        controller: function(){

        }
    });
});
