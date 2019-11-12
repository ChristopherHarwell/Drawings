let dot = {
  x: 450,
  y: 450,
};

let col1 = {
  r: 0,
  g: 0,
  b: 0,
  a: 100,
};

let col2 = {
  r: 0,
  g: 0,
  b: 0,
  a: 100,
};

let col3 = {
  r: 0,
  g: 0,
  b: 0,
  a: 100,
};

let col4 = {
  r: 0,
  g: 0,
  b: 0,
  a: 100,
};
let theDot = random(100, 130);

/* Setup is a function that initializes
the canvas and in some cases the
background it is part of the p5 core
library*/
function setup() {
  // create a canvas to draw on
  createCanvas(900, 900);

  /* background is only happening
  once so i put it in setup() */
  background(55, 55, 55);
}

/* The Draw function is where most of The
code will go because this is the function
that displays our drawings and/or animations
to the screen draw() is part of the p5 core
library */
function draw() {
  //noStroke();
  //the pink & purple dots
  if (mouseX > 0 && mouseX < 451 && mouseY < height && mouseY < 451) {
    col1['r'] = random(100, 255);
    col1['g'] = 0;
    col1['b'] = random(100, 190);
    dot['x'] = random(0, width);
    dot['y'] = random(0, height);
    fill(col1['r'], col1['g'], col1['b'], col1['a']);
  } else if (mouseX > 449 && mouseY < height && mouseX > 450 && mouseY < 450) {
    // green circles
    col2['r'] = 0;
    col2['g'] = random(100, 200);
    col2['b'] = random(100, 190);
    dot['x'] = random(0, width);
    dot['y'] = random(0, height);
    fill(col2['r'], col2['g'], col2['b'], col2['a']);
  } else if (mouseX > 0 && mouseX < 451 && mouseY > 451 && mouseY > 0) {
    // the blue circles
    col3['r'] = 0;
    col3['g'] = random(0, 255);
    col3['b'] = random(200, 255);
    dot['x'] = random(0, width);
    dot['y'] = random(0, height);
    fill(col3['r'], col3['g'], col3['b'], col3['a']);
  } else {
    col4['r'] = random(200, 255);
    col4['g'] = random(50, 200);
    col4['b'] = 0;
    dot['x'] = random(0, width);
    dot['y'] = random(0, height);
    fill(col4['r'], col4['g'], col4['b'], col4['a']);
  }
  //else if (mouseX > 450 && mouseX < width && mouseY < 0 && mouseY < 450) {
  //}






  //line(0, 450, width, 450);
  //line(450, 0, 450, height);
  ellipse(dot['x'], dot['y'], 24, 24);
}
