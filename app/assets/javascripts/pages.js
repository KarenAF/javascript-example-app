var infoWindow = null;
var places = [];
$.get("/places", function(data){
  for(var i = 0; i < data.length; i++){
  places.push(data[i]);
}
});

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


