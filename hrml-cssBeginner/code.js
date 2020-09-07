function initilaize(pos) 
{
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    var mypos = {lat:pos.coords.latitude,lng:pos.coords.longitude}
    var Mymap = new google.maps.Map(document.getElementById("map"), {center:new google.maps.LatLng(mypos.lat,mypos.lng),zoom:5,mapTypeId:'roadmap'});
    var marker = new google.maps.Marker({position: mypos, map: Mymap});
  }

  function getLocation() {
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(initilaize);
    } 
    else
    { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  $(document).ready(function(){
      getLocation();
  })