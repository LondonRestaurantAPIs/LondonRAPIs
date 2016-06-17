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
getResponse();
//initMap(latVal,lngVal);


}

function getResponse(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://tour-pedia.org/api/getPlaces?location=London&category=restaurant&name=pizza", true);
  xhr.onload = function () {
  //  console.log("hello");
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);

//get the array of objects and return new array of objecst with only the information we need.



 var filteredArray =  response.map(function(elem){
  //console.log(elem);
return{
    name: elem.name,
    lat: elem.lat,
    lng: elem.lng

    }
  })

 console.log(filteredArray,'---------------------------------------');

 var infowindow = new google.maps.InfoWindow();

   var marker, i;

   for (i = 0; i < filteredArray.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(filteredArray[i].lat, filteredArray[i].lng),
       map: map
     });
     google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(filteredArray[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

}
}
else {
         console.error(xhr.statusText);
       }

 xhr.onerror = function (e) {
   console.error(xhr.statusText);
 };


}
xhr.send();
return xhr.response;
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
