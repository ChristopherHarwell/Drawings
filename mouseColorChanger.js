let colX = {
  blue: 0,
  red: 0,
  green: 0,
};

let colY = {
  blue: 0,
  red: 0,
  green: 0,
};

let circleX = 0;
let circleCoordinate1 = 0;
let circleCoordinate = 0;
let countLoop = 0;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  // X-Axis
  colX['blue'] = map(mouseX, 0, 300, 0, 255);
  colX['red'] = map(mouseX, 300, 600, 120, 255);
  colX['green'] = map(mouseX, 600, 800, 255, 0);
  background(colX['red'], colX['green'], colX['blue']);
  // Y-Axis
  colY['blue'] = map(mouseY, mouseX, 800, 0, 230);
  colY['red'] = map(mouseY, 0, 800, 0, 127);
  colY['green'] = map(mouseY, 0, 800, 0, 128);
  fill(250, 118, 222);
  ellipse(mouseX, mouseY, 64, 64);


  ellipse(circleX, mouseX, 64, 64);
  circleX = circleX + 3;

  // create the circle
  let theCircleUp = circle(50, circleCoordinate1, 60);

  // set the pace of the circle movement
  circleCoordinate1 = circleCoordinate1 - 2;

  //create the movement on the y - axis
  if (circleCoordinate1 < 0) {
    circleCoordinate1 = height;
  }

  console.log(mouseX);
}
