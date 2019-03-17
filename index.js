let moveBox = document.getElementsByClassName("move")[0];

let position = {
  x: 100,
  y: 100
}

let tween = new TWEEN.Tween(position);

tween.to({
  x: 200,
  y: 0
}, 1000)
  .easing(TWEEN.Easing.Quadratic.Out)
  .onUpdate(function () {
    moveBox.style.setProperty('transform', `translate(${position.x}px, ${position.y}px)`);
    console.log("onUpdate");
  })
  .start();

animate();

function animate(time) {
  requestAnimationFrame(animate);
  console.log("before update");
  TWEEN.update(time);
  console.log("after update");
}
