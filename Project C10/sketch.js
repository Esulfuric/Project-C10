var ship, shipAnm;
var sea, seaImg;
function preload(){
 shipAnm = loadAnimation("ship-1.png", "ship-3.png", "ship-2.png", "ship-4.png");
 seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);

  sea = createSprite(300, 200, 10, 10);
  sea.addImage(seaImg)
  sea.scale = 0.3
  sea.velocityX = -3


  ship = createSprite(100, 200, 10, 40);
  ship.addAnimation("moving", shipAnm)
  ship.scale = 0.3
  
}

function draw() {
  background("blue");

 if (sea.x < 0){
   sea.x = width/2;
 }

  drawSprites()
}