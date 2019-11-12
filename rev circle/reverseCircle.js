let x = 0;
let speed = 30;
/* Setup is a function that initializes
the canvas and in some cases the
background it is part of the p5 core
library*/
function setup() {
  // create a canvas to draw on
  createCanvas(900, 900);

}

function draw() {
  /* background is only happening
  once so i put it in setup() */
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();
  let theCircle = ellipse(x, 200, 100, 100);

  if (x > width) {
    stroke('rgb(0,255,0)');
    speed = -30;
  }

  if (x < 0) {
    speed = 30;
  }

  x = x + speed;

}
