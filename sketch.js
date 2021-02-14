var sofia,wall1,wall2,wall3,wall4,wall5,wall6,wall7,cup,wall;
var score=1;
var point=0;

function setup() {
  createCanvas(400, 400);
  sofia = createSprite(20,25,20,20);
  sofia.shapeColor = "blue";
 
  wall1 = createSprite(20,10,5,5);
  wall1.shapeColor = "purple";
 wall1.velocityX=-7

  wall2 = createSprite(200,50,5,5);
  wall2.shapeColor = "lightgreen";
  wall2.velocityX=7

  wall3 = createSprite(60,140,5,5);
  wall3.shapeColor = "lightblue";
  wall3.velocityX=-7

 wall4 = createSprite(180,250,5,5);
  wall4.shapeColor = "red";
  wall4.velocityX=7

  wall5 = createSprite(370,130,5,5);
  wall5.shapeColor = "white";
  wall5.velocityX=-7

  wall6 = createSprite(300,330,5,5);
  wall6.shapeColor = "red";
  wall6.velocityX=7

  wall7 = createSprite(315,310,10,10);
  wall7.shapeColor = "purple";
  wall7.velocityX=0

  cup = createSprite(10,370,20,25);
  cup.shapeColor = "yellow";
  
  score = 1;
  point=0;
wallg=new Group()
 
}

function draw() {
 
  background(220);
  background("black");
  keyPressed(); 
  text("Level: "+ score, 220,20);
  text("point: "+ point, 110,20);
  if (keyDown("RIGHT_ARROW")){
  
sofia.velocityX=4;
sofia.velocityY=0;
}
  if (keyDown("LEFT_ARROW")){
  
sofia.velocityX=-4;
sofia.velocityY=0;
}
  if (keyDown("UP_ARROW")){
  
sofia.velocityX=0;
sofia.velocityY=-4;
}
  if (keyDown("DOWN_ARROW")){
  
sofia.velocityX=0;
sofia.velocityY=4;
}
if(sofia.isTouching(cup)){
  fill("purple")
  textSize(15);
  wall7.velocityX=7
  sofia.x = 20;
  sofia.y = 25;
  score=score+1
  newblock()
  newblock()
}


if(sofia.isTouching(wall1)){
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall1.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);
 
}

if(sofia.isTouching(wall2)){
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall2.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);
}
 

if(sofia.isTouching(wall3)){
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall3.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);
}
  

if(sofia.isTouching(wall4)){
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall4.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);
  
}
if(sofia.isTouching(wall5)){
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall5.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);
}
if(sofia.isTouching(wall6)){
  
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall6.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);

}
if(sofia.isTouching(wall7)){
  
  sofia.velocityX=0;
  sofia.velocityY=0;
  wall7.velocityX=0
  fill("purple")
  textSize(15);
  text("You Died!!!",175,200);
}
if(sofia.isTouching(wallg)){
  //How do I make wall g and sphia freeze and have the text
 point=point+1
 wallg.destroyEach()
} 


edges = createEdgeSprites();
  sofia.bounceOff(edges);
  wall1.bounceOff(edges);
  wall2.bounceOff(edges);
  wall3.bounceOff(edges);
  wall4.bounceOff(edges);
  wall5.bounceOff(edges);
  wall6.bounceOff(edges);
  wall7.bounceOff(edges);
  wallg.bounceOff(edges);
  while(sofia.isTouching(wallg)){ sofia.velocityX=0;
    sofia.velocityY=0;
    wall1.velocityX=0}
  drawSprites();
  
}

function keyPressed() {
	if (keyCode === 32) {
    sofia.x = 20;
  sofia.y = 25;
  wall1.velocityX=-7
  wall2.velocityX=7
   wall3.velocityX=-7
   wall4.velocityX=7
   wall5.velocityX=-7
   wall6.velocityX=0 
   point=0
   score=1
	}
  }

  function newblock(){
   
 var wall = createSprite(0,Math.round(random(20, 370)), 15, 5);
 wall.lifetime = 40;
    wall.x= Math.round(random(30, 370)); 
    wall.y= Math.round(random(30, 370));
    wall.shapeColor = "pink";
    wall.velocityX=-7
    wallg.add(wall)
  
  }

 
