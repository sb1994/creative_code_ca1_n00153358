function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push();
  translate(width / 2, height / 2);

  ellipse(0, 0, 20, 20);
  pop();
}
