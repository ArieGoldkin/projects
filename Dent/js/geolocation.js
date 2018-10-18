function initMap() {
    const latLng = {lat: 32.8266320, lng: 35.0756830};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: latLng
    });
    let marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  };
