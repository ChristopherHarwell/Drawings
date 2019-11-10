
let ballUp = {
  x: 200,
  y: 200,
  diameter: 50,
};

let ballDown = {
  x: 100,
  y: 100,
  diameter: 50,
};

let backgroundColor = {
  r: 218,
  g: 160,
  b: 221,
};

function setup() {
  createCanvas(500, 400);
}

function draw() {

  //background
  background(backgroundColor['r'], backgroundColor['g'], backgroundColor['b']);

  //circle
  fill(250, 200, 200);
  ellipse(ballUp['x'], ballUp['y'],
    ballUp['diameter'], ballUp['diameter']);

  ballUp['x'] = ballUp['x'] - 1;

  fill(250, 200, 200);
  ellipse(ballDown['x'], ballDown['y'],
     ballDown['diameter'], ballDown['diameter']);

  ballDown['y'] = ballDown['y'] + 1;
}
