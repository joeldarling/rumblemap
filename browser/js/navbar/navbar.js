app.directive('mainNavbar', function(){

  return {
    restrict: 'E',
    templateUrl: '/js/navbar/navbar.html',
    controller: 'NavbarCtrl'
  };

});

app.controller('NavbarCtrl', function($scope){

  $scope.period = ['Last Hour', 'Last Day', 'Last Week'];

});
