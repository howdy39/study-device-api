// Device Motion API に対応しているかをチェック
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", event => {
    setTimeout(showLog(event), 1000);
  });
}

function showLog(event) {
  let x = event.accelerationIncludingGravity.x; // 左右
  let y = event.accelerationIncludingGravity.y; // 上下
  let z = event.accelerationIncludingGravity.z; // 前後
  console.log(x,y,z);

  let log = '(x, y, z):(' + x + ',' + y + ',' + z + ')\n';

  x = parseFloat(event.acceleration.x);
  y = parseFloat(event.acceleration.y);
  z = parseFloat(event.acceleration.z);
  console.log(x,y,z);

  log += '(x, y, z):(' + x + ',' + y + ',' + z + ')'
  document.querySelector('#log').textContent = log;
}