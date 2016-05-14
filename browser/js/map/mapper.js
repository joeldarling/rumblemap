app.factory('Mapper', function(){

  var map;
  var points = {};

  var infowindow = new google.maps.InfoWindow({});
  var heatmap;

  var showMarkers = true,
      showHeatmap = true;

  var pinIcon = new google.maps.MarkerImage(
      "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFFF00",
      null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new google.maps.Size(10, 15)
  );

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
          visible: showMarkers,
          icon:pinIcon
      });

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

      heatmapopo= ({
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
        map: map,
        data: self.getGeoPoints(),
        gradient: gradient
      });
      heatmap.set('radius', heatmap.get('radius') ? null : 20);
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
    toggleMarkers: function(){

      for(var marker in points){
        if(showMarkers) {
            points[marker].setVisible(false);
          }
          else {
            points[marker].setVisible(true);
          }
      }

      showMarkers = !showMarkers;

    },
    toggleHeatmap: function(){
      heatmap.setMap(heatmap.getMap() ? null : map);
      showHeatmap = !showHeatmap;

    },
    filterMarkers: function(mag){

      if(!showMarkers)
        return;

      for(var marker in points){

        var thenum = points[marker].title.match(/\d+/)[0]; //

        if(thenum >= mag){
          points[marker].setVisible(true);
        } else {
          points[marker].setVisible(false);
        }

      }
        this.updateHeatMap();

    },
    getById: function(id){
      return points[id];
    },
    getActive: function(){

      var active=0;

      for(var earthquake in points){

        if(points[earthquake].getVisible())
          active++;
      }

      return active;

    },
    updateHeatMap: function(){

      if(!heatmap)
        return;

      var active = [];

      for(var earthquake in points){

        if(points[earthquake].getVisible())
          active.push(new google.maps.LatLng(points[earthquake].getPosition().lat(), points[earthquake].getPosition().lng()));

      }

      heatmap.set('data', null);
      heatmap.set('data', active);

    },
    reset: function(){

      Object.keys(points).forEach(function(key) {
             points[key].setMap(null);
      }, this);

      points = {};

      heatmap.set('data', null);

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
