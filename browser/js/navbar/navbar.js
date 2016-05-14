app.directive('mainNavbar', function(){

  return {
    restrict: 'E',
    templateUrl: '/js/navbar/navbar.html',
    controller: 'NavbarCtrl',
    scope:{

    }
  };

});

app.controller('NavbarCtrl', function($scope, Mapper, EarthquakeFactory){

  $scope.period = ['Last Hour', 'Last Day', 'Last Week'];

  $scope.filter = {mag: 0};


  Mapper.filterMarkers();

  $scope.periodAnnounceClick = function(index){

    EarthquakeFactory.fetchById(index)
    .then(function(result){
      Mapper.reset();
      Mapper.mapCollection(result);
      Mapper.drawMap();
    });
  };

  $scope.toggleHeatmap = function(){
    Mapper.toggleHeatmap();
  };

  $scope.toggleMarkers = function(){
    Mapper.toggleMarkers();
  };

  $scope.filterMarkers = function(){
    console.log($scope.filter);
    Mapper.filterMarkers($scope.filter.mag);
  };

});
