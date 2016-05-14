
function initialize_gmaps() {
  var map;

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(41.850033, -87.6500523),
    zoom: 2,
  });

  // style = [{"featureType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":-100}]}];
  //
  // map.setOptions({styles: style});

  return map;
}
