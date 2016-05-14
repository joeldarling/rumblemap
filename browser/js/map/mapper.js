function Mapper(map){

  this.map = map;
  this.points = {};

}

var sample = {"type":"Feature","properties":{"mag":1.19,"place":"3km W of Cobb, California","time":1463187865740,"updated":1463187972490,"tz":-420,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/nc72635390","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc72635390.geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"automatic","tsunami":0,"sig":22,"net":"nc","code":"72635390","ids":",nc72635390,","sources":",nc,","types":",general-link,geoserve,nearby-cities,origin,phase-data,","nst":20,"dmin":0.01424,"rms":0.03,"gap":42,"magType":"md","type":"earthquake","title":"M 1.2 - 3km W of Cobb, California"},"geometry":{"type":"Point","coordinates":[-122.7633362,38.8171654,1.62]},"id":"nc72635390"};

Mapper.prototype.addMarker = function(earthquake){

    var pt = new google.maps.LatLng(+earthquake.geometry.coordinates[1],+earthquake.geometry.coordinates[0]);

    var marker = new google.maps.Marker({
        position: pt,
        title: earthquake.properties.place,
        visible: true,
        label:earthquake.properties.mag.toString()
    });

    var infowindow = new google.maps.InfoWindow({
      content: earthquake.properties.place
    });


    marker.setMap(this.map);

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });

    this.points[earthquake.id] = marker;

};

Mapper.prototype.removeMarker = function(item){
  var marker = this.points[item._id];
  marker.setMap(null);
  delete this.points[item._id];
  this._setBounds();
};

Mapper.prototype.reset = function(){
  Object.keys(this.points).forEach(function(key){
    if(key !== 'perm')
      this.points[key].setMap(null);
  }, this);
  this.points = {
    perm: this.points.perm
  };
};
