app.factory('EarthquakeFactory', function($http, $log, Mapper){

  return {

    fetchAll: function(){

      return $http.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then(function(result){

        Mapper.mapCollection(result.data.features);

        return result.data.features;
      })
      .catch($log.error);
    }

  };

});
