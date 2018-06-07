// Device Motion API に対応しているかをチェック
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", event => {
    const x = event.acceleration.x;
    const y = event.acceleration.y;
    const z = event.acceleration.z;
    console.log(x,y,z);

    const log = '(x, y, z):(\n' + x + ',\n' + y + ',\n' + z + ')';
    document.querySelector('#log').textContent = log;

    if (Math.abs(x) > 12 || Math.abs(y) > 12 || Math.abs(z) > 12) {
      const r = Math.random() * 255;
      const g = Math.random() * 255;
      const b = Math.random() * 255;
      document.querySelector('body').style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    }
  });
}
