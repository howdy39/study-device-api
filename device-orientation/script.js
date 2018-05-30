// Device Orientation API に対応しているかをチェック
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", event => {
    const alpha = event.alpha; // 回転軸がZ軸
    const beta = event.beta; // 回転軸がX軸
    const gamma = event.gamma; // 回転軸がY軸

    const log = '(alpha, beta, gamma):(' + Math.ceil(alpha) + ',' + Math.ceil(beta) + ',' + Math.ceil(gamma) + ')';
    console.log(log);
    document.querySelector('#log').textContent = log;

    document.querySelector(
      "#howdy39"
    ).style.transform = `rotateX(${beta}deg) rotateY(${gamma}deg) rotateZ(${alpha}deg)`;
  });
}
