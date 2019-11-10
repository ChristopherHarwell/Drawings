let blue = 0;
let red = 0;
let green = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  blue = map(mouseX, 0, 800, 0, 255);
  red = map(mouseX, 0, 800, 0, 127);
  green = map(mouseX, 0, 800, 255, 0);
  background(red, green, blue);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);

}
