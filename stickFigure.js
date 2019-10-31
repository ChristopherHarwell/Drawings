function setup() {
  createCanvas(200, 400);
}

function draw() {
  background(220, 100, 3000);
  strokeWeight(5);

  circle(90, 150, 100); //head

  point(100, 130); //right eye
  point(80, 130); // left eye

  arc(90, 157, 55, 30, 0, 41); // mouth

  line(90, 290, 90, 200); //torso

  line(130, 220, 90, 230); // right arm
  line(48, 220, 90, 230); // left arm

  line(130, 340, 90, 289); // right leg
  line(50, 340, 90, 289); // left leg

}

setup();
draw();
