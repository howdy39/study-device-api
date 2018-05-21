// Device Motion API に対応しているかをチェック
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", event => {
    const x = parseFloat(event.acceleration.x);
    const y = parseFloat(event.acceleration.y);
    const z = parseFloat(event.acceleration.z);

    console.log("(x, y, z):(%s, %s, %s)", x, y, z);
  });
}
