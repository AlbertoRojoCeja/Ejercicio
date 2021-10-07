


//api google maps
function iniciarMap(){
    var coord = {lat:24.8050567 ,lng:-107.493354};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}