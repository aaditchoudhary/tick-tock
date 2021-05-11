hr=hour();
mn=minute();
sc=second();
var minuteHand;
function setup() {
  createCanvas(800,400);
  scAngle=map(sc,0,60,0,360);
  
  createminuteHand(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  
  drawSprites();
}