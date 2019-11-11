let col = {
  blue: 0,
  red: 0,
  green: 0,
};

function setup() {
  createCanvas(900, 900);
}

function draw() {
  // X-Axis
  col['blue'] = map(mouseX, 0, 300, 0, 255);
  col['red'] = map(mouseX, 300, 600, 120, 255);
  col['green'] = map(mouseX, 600, 800, 255, 0);
  background(col['red'], col['green'], col['blue']);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}
