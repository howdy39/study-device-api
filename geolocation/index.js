let data = {
  accuracy: null,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: null,
  longitude: null,
  speed: null,
};

new Vue({
  el: "#app",
  data,
  filters: {
    showNull: value => value === null ? 'null' : value
  }
});


navigator.geolocation.getCurrentPosition(position => {
  const accuracy = position.coords.accuracy;
  const altitude = position.coords.altitude;
  const altitudeAccuracy = position.coords.altitudeAccuracy;
  const heading = position.coords.heading;
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  const speed = position.coords.speed;

  Object.assign(data, {
    accuracy,
    altitude,
    altitudeAccuracy,
    heading,
    latitude,
    longitude,
    speed,
  });
});
