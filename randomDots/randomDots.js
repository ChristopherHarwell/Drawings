let dot = {
  x: 450,
  y: 450,
};

let col = {
  r: 0,
  g: 0,
  b: 0,
  a: 100,
};

/* Setup is a function that initializes
the canvas and in some cases the
background it is part of the p5 core
library*/
function setup() {
  // create a canvas to draw on
  createCanvas(900, 900);

  /* background is only happening
  once so i put it in setup() */
  background(0);
}

/* The Draw function is where most of The
code will go because this is the function
that displays our drawings and/or animations
to the screen draw() is part of the p5 core
library */
function draw() {
  noStroke();
  col['r'] = random(100, 255);
  col['g'] = 0;
  col['b'] = random(100, 190);
  dot['x'] = random(0, width);
  dot['y'] = random(0, height);
  fill(col['r'], col['g'], col['b'], col['a']);
  ellipse(dot['x'], dot['y'], 24, 24);

}
