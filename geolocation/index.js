let data = {
  message: '計測中です...',
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


const geoSuccess = position => {
  const accuracy = position.coords.accuracy;
  const altitude = position.coords.altitude;
  const altitudeAccuracy = position.coords.altitudeAccuracy;
  const heading = position.coords.heading;
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  const speed = position.coords.speed;

  Object.assign(data, {
    message: '計測完了',
    accuracy,
    altitude,
    altitudeAccuracy,
    heading,
    latitude,
    longitude,
    speed,
  });
};
const geoError = error => {
  const errorMessages = {
    1: '位置情報の利用が許可されていません！',
    2: 'デバイスの位置が特定できません！',
    3: 'タイムアウトしました！'
  };
  data.message = errorMessages[error.code];
};
const geoOptions = {
  enableHighAccuracy: false, // 高精度の有効化
  timeout: 5 * 1000, // タイムアウト(ms)
  maximumAge: 10 * 60 * 1000 // 位置情報の有効期限(ms)
};

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
} else {
  data.message = '未対応ブラウザです';
}
