app.factory('Mapper', function(){

  var map;
  var points = {};

  return {

    initMap: function(gmap){
      map = gmap;
    },
    addMarker: function(earthquake){

      if(points[earthquake.id])
        return;


      var pt = new google.maps.LatLng(earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]);

      var marker = new google.maps.Marker({
          position: pt,
          title: earthquake.properties.place,
          visible: true,
          label: earthquake.properties.mag.toString()
      });

      var infowindow = new google.maps.InfoWindow({
          content: earthquake.properties.place
      });


      marker.setMap(map);

      marker.addListener('click', function() {
          infowindow.open(map, marker);
      });



      points[earthquake.id] = marker;
    },
    mapCollection: function(arr){

      var self = this;
      arr.forEach(function(earthquake){
        self.addMarker(earthquake);
      });
    },
    removeMarker: function(iten){
      var marker = points[item._id];
      marker.setMap(null);
      delete points[item._id];
    },
    reset: function(){
      Object.keys(points).forEach(function(key) {
          if (key !== 'perm')
             points[key].setMap(null);
      }, this);
    }
  };

});
