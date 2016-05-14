app.directive('mainNavbar', function(){

  return {
    restrict: 'E',
    templateUrl: '/js/navbar/navbar.html',
    controller: 'NavbarCtrl'
  };

});

app.controller('NavbarCtrl', function($scope, Mapper, EarthquakeFactory){

  $scope.period = ['Last Hour', 'Last Day', 'Last Week','Last Month'];

  $scope.periodAnnounceClick = function(index){

    EarthquakeFactory.fetchById(index)
    .then(function(result){
      Mapper.reset();
      Mapper.mapCollection(result);
      Mapper.drawMap();
    });
  };

});
