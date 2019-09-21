let originPositions = {
  left: {
    width: 24,
    height: 16,
    x: 0,
    y: 4,
    zIndex: 1
  },
  right: {
    width: 24,
    height: 16,
    x: 54,
    y: 4,
    zIndex: 1
  },
  font: {
    width: 30,
    height: 20,
    x: 24,
    y: 6,
    zIndex: 2
  },
  back: {
    width: 21,
    height: 14,
    x: 27,
    y: 0,
    zIndex: 0
  },
}

let positions = {
  font: {
    width: [24, 21, 24, 30],
    height: [16, 14, 16, 20],
    x: [54, 27, 0, 24],
    y: [4, 0, 4, 6],
    zIndex: [1, 0, 1, 2]
  },
  right: {
    width: [21, 24, 30, 24],
    height: [14, 16, 20, 16],
    x: [27, 0, 24, 54],
    y: [0, 4, 6, 4],
    zIndex: [0, 1, 2, 1]
  },
  back: {
    width: [24, 30, 24, 21],
    height: [16, 20, 16, 14],
    x: [0, 24, 54, 27],
    y: [4, 6, 4, 0],
    zIndex: [1, 2, 1, 0]
  },
  left: {
    width: [30, 24, 21, 24],
    height: [20, 16, 14, 16],
    x: [24, 54, 27, 0],
    y: [6, 4, 0, 4],
    zIndex: [2, 1, 0, 1]
  }
}



const font = document.getElementById('img-font');
const right = document.getElementById('img-right');
const back = document.getElementById('img-back');
const left = document.getElementById('img-left');

let moveTime = 6000;

let positionF = JSON.parse(JSON.stringify(originPositions.font));
let positionR = JSON.parse(JSON.stringify(originPositions.right));
let positionL = JSON.parse(JSON.stringify(originPositions.left));
let positionB = JSON.parse(JSON.stringify(originPositions.back));

let tweF = new TWEEN.Tween(positionF);
let tweR = new TWEEN.Tween(positionR);
let tweB = new TWEEN.Tween(positionB);
let tweL = new TWEEN.Tween(positionL);

tweF.to(positions.font, moveTime)
        .onUpdate(function() {
          font.style.width = `${positionF.width}vw`;
          font.style.height = `${positionF.height}vw`;
          font.style.transform = `translate(${positionF.x}vw, ${positionF.y}vw)`;
          font.style.zIndex = `${Math.round(positionF.zIndex)}`;
        })
        .start()

tweR.to(positions.right, moveTime)
        .onUpdate(function() {
          right.style.width = `${positionR.width}vw`;
          right.style.height = `${positionR.height}vw`;
          right.style.transform = `translate(${positionR.x}vw, ${positionR.y}vw)`;
          right.style.zIndex = `${Math.round(positionR.zIndex)}`;
        })
        .start()

tweB.to(positions.back, moveTime)
        .onUpdate(function() {
          back.style.width = `${positionB.width}vw`;
          back.style.height = `${positionB.height}vw`;
          back.style.transform = `translate(${positionB.x}vw, ${positionB.y}vw)`;
          back.style.zIndex = `${Math.round(positionB.zIndex)}`;
        })
        .start()

tweL.to(positions.left, moveTime)
        .onUpdate(function() {
          left.style.width = `${positionL.width}vw`;
          left.style.height = `${positionL.height}vw`;
          left.style.transform = `translate(${positionL.x}vw, ${positionL.y}vw)`;
          left.style.zIndex = `${Math.round(positionL.zIndex)}`;
        })
        .start()

animate();

function animate(time) {
  requestAnimationFrame(animate);
  tweF.update(time);
  tweB.update(time);
  tweL.update(time);
  tweR.update(time);
}

tweF.repeat(Infinity);
tweB.repeat(Infinity);
tweL.repeat(Infinity);
tweR.repeat(Infinity);

// test