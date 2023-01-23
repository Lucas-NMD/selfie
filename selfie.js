function draw() {
  background(240, 250, 25);
  push();
  translate(200, 200);
  noStroke();
  fill(139,69,19);
  beginShape();
    vertex(-70, -70);
    vertex(-70, 70);
    vertex(70, 70);
    vertex(70, -70);
    bezierVertex(100, -50, 100, 50, 70, 70);
    bezierVertex(-100, 50, -100, -50, -70, -70);
  endShape();
  fill(255);
  ellipse(-30, -30, 45, 30);
  ellipse(30, -30, 45, 30);

  fill(13, 16, 16);
  ellipse(-30, -30, 15, 15);
  ellipse(30, -30, 15, 15);
  
  strokeWeight(4);
  stroke(0);
  fill(255, 153, 51);
  line(-20,20,30,20);
  for (let i = 0; i < 19; i++) 
  line(-10, -200, i*9, -1);
  fill(255, 153, 51);
  for (let i = 0; i < 19; i++) 
  line(-10, -200, i*-9, -1);
  pop();
}