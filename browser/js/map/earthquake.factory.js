app.factory('EarthquakeFactory', function($http, $log, Mapper){

  var apiUrls = [
    'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
    'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
    'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
    'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'

  ];

  return {

    fetchAll: function(){

      return $http.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
      .then(function(result){

        Mapper.mapCollection(result.data.features);
        return result.data.features;
      })
      .catch($log.error);
      // Mapper.mapCollection(sampleData.features);
      // return sampleData.features;
    },
    fetchById: function(id){

      return $http.get(apiUrls[id])
      .then(function(result){

        Mapper.mapCollection(result.data.features);
        
        return result.data.features;
      });

    }

  };

});

var sampleData = {"type":"FeatureCollection","metadata":{"generated":1463233291000,"url":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson","title":"USGS Magnitude 4.5+ Earthquakes, Past Day","status":200,"api":"1.5.2","count":9},"features":[{"type":"Feature","properties":{"mag":4.7,"place":"25km SW of Tobelo, Indonesia","time":1463197489860,"updated":1463198661702,"tz":540,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005hcp","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005hcp.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":340,"net":"us","code":"10005hcp","ids":",us10005hcp,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":0.925,"rms":0.76,"gap":76,"magType":"mb","type":"earthquake","title":"M 4.7 - 25km SW of Tobelo, Indonesia"},"geometry":{"type":"Point","coordinates":[127.8445,1.5692,33.24]},"id":"us10005hcp"},
{"type":"Feature","properties":{"mag":4.6,"place":"27km NE of Hualian, Taiwan","time":1463196768290,"updated":1463197919126,"tz":480,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005hck","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005hck.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":326,"net":"us","code":"10005hck","ids":",us10005hck,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":0.183,"rms":0.47,"gap":89,"magType":"mb","type":"earthquake","title":"M 4.6 - 27km NE of Hualian, Taiwan"},"geometry":{"type":"Point","coordinates":[121.7934,24.149,5.72]},"id":"us10005hck"},
{"type":"Feature","properties":{"mag":4.5,"place":"27km NE of Hualian, Taiwan","time":1463195522680,"updated":1463196724678,"tz":480,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005hcg","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005hcg.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":312,"net":"us","code":"10005hcg","ids":",us10005hcg,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":0.172,"rms":0.73,"gap":90,"magType":"mb","type":"earthquake","title":"M 4.5 - 27km NE of Hualian, Taiwan"},"geometry":{"type":"Point","coordinates":[121.7833,24.1656,9.63]},"id":"us10005hcg"},
{"type":"Feature","properties":{"mag":4.5,"place":"95km S of Firuzabad, Iran","time":1463188753780,"updated":1463189924228,"tz":270,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005hby","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005hby.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":312,"net":"us","code":"10005hby","ids":",us10005hby,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":4.544,"rms":1.24,"gap":132,"magType":"mb","type":"earthquake","title":"M 4.5 - 95km S of Firuzabad, Iran"},"geometry":{"type":"Point","coordinates":[52.4308,27.9931,10]},"id":"us10005hby"},
{"type":"Feature","properties":{"mag":5,"place":"12km WSW of Burtunay, Russia","time":1463174266890,"updated":1463176588638,"tz":180,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005hax","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005hax.geojson","felt":1,"cdi":2.9,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":385,"net":"us","code":"10005hax","ids":",us10005hax,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":2.264,"rms":1.06,"gap":34,"magType":"mb","type":"earthquake","title":"M 5.0 - 12km WSW of Burtunay, Russia"},"geometry":{"type":"Point","coordinates":[46.4907,42.9398,68.09]},"id":"us10005hax"},
{"type":"Feature","properties":{"mag":4.5,"place":"South of the Fiji Islands","time":1463166696390,"updated":1463167891459,"tz":720,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005h9r","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005h9r.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":312,"net":"us","code":"10005h9r","ids":",us10005h9r,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":6.843,"rms":1.14,"gap":63,"magType":"mb","type":"earthquake","title":"M 4.5 - South of the Fiji Islands"},"geometry":{"type":"Point","coordinates":[179.2086,-22.8768,572.74]},"id":"us10005h9r"},
{"type":"Feature","properties":{"mag":4.9,"place":"99km WSW of Makurazaki, Japan","time":1463166348960,"updated":1463167470848,"tz":540,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005h9i","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005h9i.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":369,"net":"us","code":"10005h9i","ids":",us10005h9i,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":1.085,"rms":0.88,"gap":99,"magType":"mb","type":"earthquake","title":"M 4.9 - 99km WSW of Makurazaki, Japan"},"geometry":{"type":"Point","coordinates":[129.2961,31.0622,6.99]},"id":"us10005h9i"},
{"type":"Feature","properties":{"mag":4.6,"place":"South of the Fiji Islands","time":1463165315250,"updated":1463166622161,"tz":720,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005h9a","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005h9a.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":326,"net":"us","code":"10005h9a","ids":",us10005h9a,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":6.735,"rms":0.84,"gap":55,"magType":"mb","type":"earthquake","title":"M 4.6 - South of the Fiji Islands"},"geometry":{"type":"Point","coordinates":[179.128,-23.0243,567.65]},"id":"us10005h9a"},
{"type":"Feature","properties":{"mag":4.7,"place":"South of the Fiji Islands","time":1463152561200,"updated":1463153395523,"tz":720,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10005h6a","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10005h6a.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":340,"net":"us","code":"10005h6a","ids":",us10005h6a,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":5.074,"rms":0.46,"gap":174,"magType":"mb","type":"earthquake","title":"M 4.7 - South of the Fiji Islands"},"geometry":{"type":"Point","coordinates":[178.411,-25.3371,623.06]},"id":"us10005h6a"}],"bbox":[46.4907,-25.3371,5.72,179.2086,42.9398,623.06]};
