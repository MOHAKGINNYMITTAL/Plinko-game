function setup() {
  createCanvas(800,400);
  ground=createSprite(400, 390, 400, 10);
  ground2 = createSprite(600,270,10,500);
  ground3 = createSprite(200,270,10,500);
}

function draw() {
  background("black");  
  drawSprites();
}