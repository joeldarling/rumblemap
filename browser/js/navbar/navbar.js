app.directive('mainNavbar', function(){

  return {
    restrict: 'E',
    templateUrl: '/js/navbar/navbar.html',
    controller: 'NavbarCtrl',
    scope:{

      active: '='

    }
  };

});

app.controller('NavbarCtrl', function($scope, Mapper, EarthquakeFactory){

  $scope.period = ['Last Hour', 'Last Day', 'Last Week'];
  $scope.current = $scope.period[0];
  $scope.numActive = $scope.active;
  $scope.filter = {mag: 0};
  $scope.rumbleEnabled = true;
  $scope.markersEnabled = true;
  $scope.heatmapEnabled = true;

  $scope.init = function(){
    EarthquakeFactory.fetchById(0)
    .then(function(result){
      Mapper.reset();
      Mapper.mapCollection(result);
      Mapper.drawMap();
      $scope.numActive = Mapper.getActive();
    });
  };

  $scope.init();


  Mapper.filterMarkers();

  $scope.periodAnnounceClick = function(index){

    $scope.current = $scope.period[index];

    EarthquakeFactory.fetchById(index)
    .then(function(result){
      Mapper.reset();
      Mapper.mapCollection(result);
      Mapper.drawMap();
      $scope.numActive = Mapper.getActive();
    });
  };

  $scope.toggleHeatmap = function(){
    Mapper.toggleHeatmap();
  };

  $scope.toggleMarkers = function(){
    Mapper.toggleMarkers();
  };

  $scope.filterMarkers = function(){
    Mapper.filterMarkers($scope.filter.mag);
    $scope.numActive = Mapper.getActive();

  };

  $scope.rumble = function(){

    console.log($('body'))

    $('#map-canvas').effect("bounce",{distance:7}, "slow");
  };

});
