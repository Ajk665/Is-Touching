function setup() {
  createCanvas(800,400);
   movingrect = createSprite(400, 200, 80, 50);
   fixedrect = createSprite(400,200,50,50);
  
   bounce1 = createSprite(790,200,10,400);
   bounce2 = createSprite(10,200,10,400);

   bounce3 = createSprite(400,10,800,10);
   bounce4 = createSprite(400,390,800,10);

   bounce1.shapeColor = "red";
   bounce2.shapeColor = "blue";

   bounce3.shapeColor = "red";
   bounce4.shapeColor = "blue";

   bounce1.velocityX = -3;
   bounce2.velocityX = 3;

   bounce3.velocityY = 3;
   bounce4.velocityY = -3;
  
   fixedrect.shapeColor = "red";
   movingrect.shapeColor = "blue";
   
}

function draw() {
  background(255,255,255); 
  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }else{
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "red";
  }
  
  if(bounce1.x - bounce2.x < bounce1.width/2 + bounce2.width/2
    && bounce2.x - bounce1.x < bounce1.width/2 + bounce2.width/2){
      bounce1.velocityX =  bounce1.velocityX * (-1);
      bounce2.velocityX = bounce2.velocityX * (-1);
    }

    if(bounce3.y - bounce4.y < bounce3.height/2 + bounce4.height/2
      && bounce4.y - bounce3.y < bounce3.height/2 + bounce4.height/2){
      bounce3.velocityY = bounce3.velocityY * (-1);
      bounce4.velocityY = bounce4.velocityY * (-1);
    }

  drawSprites();
}