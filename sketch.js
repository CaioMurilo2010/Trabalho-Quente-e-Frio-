let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background('#48DA48');
  x = x + random(-5,5);
  y = y + random(-5,5);
  constrain(x,0,400);
  constrain(y,0,400);
  let distancia
  distancia = dist(mouseX,mouseY,x,y);
  fill(' #00BCD4')
  circle(mouseX,mouseY,distancia);
  fill('white')
  // circle(x,y,10);
  
  if(distancia < 10){
  textSize(18);
  text('ENCONTREI!',140,180);
    noLoop();
  }
}