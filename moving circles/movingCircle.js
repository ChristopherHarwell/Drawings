let circle2 = 0;
let circle1 = 0;
let circle3 = 0;
let circle4 = 0;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  // background
  background(250, 250, 100);

  // The circle
  fill(250, 200, 200);
  ellipse(circle2, 200, 80, 80);
  ellipse(circle1, 100, 80, 80);
  ellipse(circle3, 300, 80, 80);
  ellipse(circle4, 400, 80, 80);

  circle1 = circle1 - 20;
  circle2 = circle2 - 40;
  circle3 = circle3 - 80;
  circle4 = circle4 - 160;

  if (circle2 < 0) {
    circle2 = width;
  }

  if (circle1 < 0) {
    circle1 = width;
  }

  if (circle3 < 0) {
    circle3 = width;
  }

  if (circle4 < 0) {
    circle4 = width;
  }

}

setup();
draw();
