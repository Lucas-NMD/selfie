
function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill("brown");
  ellipse(200, 200, 300, 300); // head
  rect(150, 350, 100, 50); // body
  ellipse(175, 375, 50, 50); // left leg
  ellipse(225, 375, 50, 50); // right leg
}
