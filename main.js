var latVal= 0 ;
var lngVal = 0;
function initialise(){
//create an array of styles
  var mapOptions = {
zoom: 11,
center: {lat: 51.5080, lng: -0.1},    //London coordinates
mapTypeId: google.maps.MapTypeId.ROAD
};

map = new google.maps.Map(document.getElementById('map'),
mapOptions);

latVal = 51.5080;
lngVal = -0.1;
initMap(latVal,lngVal);

}

function initMap(lat,lng) {
  var myLatLng = {lat: latVal, lng: lngVal};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Random Restaurant'
  });
}
