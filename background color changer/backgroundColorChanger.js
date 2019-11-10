let blue = 0;
let red = 0;
let green = 0;
let circleX = 50;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  blue = map(circleX, 0, 800, 0, 255);
  red = map(circleX, 0, 800, 0, 127);
  green = map(circleX, 0, 800, 255, 0);
  background(red, green, blue);
  fill(250, 118, 222);
  ellipse(circleX, 200, 64, 64);

  circleX = circleX + 10;
}
