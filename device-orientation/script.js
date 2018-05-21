// Device Orientation API に対応しているかをチェック
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", event => {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    console.log("(alpha, beta, gamma):(%s, %s, %s)", alpha, beta, gamma);
  });
}
