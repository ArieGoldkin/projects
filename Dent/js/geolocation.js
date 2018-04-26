function initMap() {
    var latLng = {lat: 32.8266320, lng: 35.0756830};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: latLng
    });
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  };