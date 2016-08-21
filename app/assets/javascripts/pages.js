
var places = [{lat: -25.446271, lng: 130.839508}, {lat: -24.463579, lng: 132.693679}, {lat: -25.001287, lng: 131.134061}, {lat: -33.896135, lng: 151.121449}, {lat: -33.631740, lng: 150.944227}]


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 4
  });

  for(var i = 0; i < places.length; i++){
  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: places[i]["lat"], lng: places[i]["lng"]}
  });
}

}
