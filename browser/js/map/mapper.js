app.factory('Mapper', function(){

  var map;
  var points = {};

  var infowindow = new google.maps.InfoWindow({});
  var heatmap;

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
          title: earthquake.properties.title,
          visible: false,
          label: earthquake.properties.mag.toString()
      });

      // infowindow = new google.maps.InfoWindow({
      //    content: earthquake.properties.title
      // });

      if(map)
        marker.setMap(map);

      marker.addListener('click', function() {
          infowindow.setContent(earthquake.properties.title);
          infowindow.open(map, marker);
      });

      points[earthquake.id] = marker;


    },
    mapCollection: function(arr){

      var self = this;

      arr.forEach(function(earthquake){
        self.addMarker(earthquake);
      });

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: self.getGeoPoints(),
        map: map
      });


    },
    drawMap: function(){

      var self = this;

      for(var earthquake in points){
        points[earthquake].setMap(map);
      }

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: self.getGeoPoints(),
        map: map,
        gradient: gradient
      });
      heatmap.set('radius', heatmap.get('radius') ? null : 15);
    },
    getGeoPoints: function(){

      var geo = [];

      for(var earthquake in points){
        geo.push(new google.maps.LatLng(points[earthquake].getPosition().lat(), points[earthquake].getPosition().lng()));

      }

      return geo;
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
//
// function toggleHeatmap() {
//   heatmap.setMap(heatmap.getMap() ? null : map);
// }
//
var gradient = [
  'rgba(0, 255, 255, 0)',
  'rgba(0, 255, 255, 1)',
  'rgba(0, 191, 255, 1)',
  'rgba(0, 127, 255, 1)',
  'rgba(0, 63, 255, 1)',
  'rgba(0, 0, 255, 1)',
  'rgba(0, 0, 223, 1)',
  'rgba(0, 0, 191, 1)',
  'rgba(0, 0, 159, 1)',
  'rgba(0, 0, 127, 1)',
  'rgba(63, 0, 91, 1)',
  'rgba(127, 0, 63, 1)',
  'rgba(191, 0, 31, 1)',
  'rgba(255, 0, 0, 1)'
];

//
// function changeRadius() {
//   heatmap.set('radius', heatmap.get('radius') ? null : 20);
// }
//
// function changeOpacity() {
//   heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
// }
