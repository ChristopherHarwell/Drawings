let circleCoordinate1 = 0;
let circleCoordinate = 0;
let countLoop = 0;


function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200, 103, 100);

  // create the circle
  let theCircleUp = circle(50, circleCoordinate1, 60);

  // set the pace of the circle movement
  circleCoordinate1 = circleCoordinate1 - 2;

  //create the movement on the y - axis
  if (circleCoordinate1 < 0) {
    circleCoordinate1 = width;
  }

  // increase countY everytime through the loop

  // create the circle
  let theCircleDown = circle(450, circleCoordinate, 60);

  // set the pace of the circle movement
  //circleCoordinate = circleCoordinate + 2;
  // create the movement on the y - axis
  let incrLoop = countLoop - 2;

  while (incrLoop > countLoop) {

    for (circleCoordinate = circleCoordinate + 1; circleCoordinate < 0;) {
      circleCoordinate = height;
      countLoop = countLoop + 1;
      console.log(circleCoordinate);
    }
  }

  // set the pace of the circle movement

  console.log(circleCoordinate);
}
