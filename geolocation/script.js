document.addEventListener("DOMContentLoaded", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.info("lat:%s, lon:%s", lat, lon);
      showMap(lat, lon);
    });
  } else {
    document.write("Your browser does not support GeoLocation");
  }
});

function showMap(lat, lon) {
  const myLatLng = new google.maps.LatLng(lat, lon);

  const mapOptions = {
    zoom: 16,
    center: myLatLng,
    mapTypeTd: google.maps.MapTypeId.ROADMAP
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Found you!"
  });
}
