var infoWindow = null;
var places = [
{lat: -25.446271, lng: 130.839508, contentString: "<p> One </p>"}, 
{lat: -24.463579, lng: 132.693679, contentString: "<p> Two </p>"}, 
{lat: -25.001287, lng: 131.134061, contentString: "<p> Three </p>"}, 
{lat: -33.896135, lng: 151.121449, contentString: "<p> Four </p>"}, 
{lat: -33.631740, lng: 150.944227, contentString: "<p> Five </p>"}
 ]
var markers = [];

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 4
  });

  infoWindow = new google.maps.InfoWindow({
    content: "some content"
  });

  for(var i = 0; i < places.length; i++){
  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: places[i]["lat"], lng: places[i]["lng"]}, 
    content: places[i]["contentString"]
  });
  markers.push(marker);

}

for (var i = 0; i < markers.length; i++){
  var marker = markers[i];
    google.maps.event.addListener(marker, 'click', function() { 
      infoWindow.setContent(this.content)
      infoWindow.open(map, this);});

}



}


