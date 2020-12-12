var fixedRect, movingRect;
var ob1, ob2, ob3, ob4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";


  ob1 = createSprite(100, 200, 50, 30);
  ob1.shapeColor = "green";
  ob2 = createSprite(200, 200, 50, 30);
  ob2.shapeColor = "green";
  ob3 = createSprite(800, 50, 50, 30);
  ob3.shapeColor = "green";
  ob4 = createSprite(800, 750, 50, 30);
  ob4.shapeColor = "green";

  ob3.velocityY = +5;
  ob4.velocityY = -5;

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff(ob3,ob4);
  if(touch(movingRect,ob1)){
    ob1.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  }
  else
  {
    ob1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  


  drawSprites();
}

