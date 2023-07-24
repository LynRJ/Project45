//opposite walls top and bottom
var wall1, wall2
//left and right walls
var wall3, wall4
var wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16;
var wall17, wall18, wall19, wall20, wall21
var pathImg,boyImg;
var i;
var bunny;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8;
var carrot
var coinImg, carrotImg

function preload(){
  bunnyImg=loadImage("Bunny.png")
  coinImg=loadImage("coin.png")
  carrotImg=loadImage("Carrot.png")
}

function setup(){
  
  createCanvas(400,400);
  wall1= createSprite(200,25,380,10)
  wall1.shapeColor="blue"
  wall2= createSprite(200,380,380,10)
  wall2.shapeColor="yellow"
  wall3= createSprite(15,203,10,365)
  wall3.shapeColor="red"
  wall4= createSprite(390,203,10,365)
  wall4.shapeColor="purple"
  wall5= createSprite(66,63,10,85)
  wall5.shapeColor="green"
  wall6= createSprite(137,65,70,10)
  wall6.shapeColor="orange"
  wall7= createSprite(97,101,70,10)
  wall7.shapeColor="indigo"
  wall8= createSprite(170,70,10,90)
  wall8.shapeColor="violet"
  wall9= createSprite(155,150,280,10)
  wall9.shapeColor="red"
  wall10= createSprite(202,110,10,70)
  wall10.shapeColor="white"
  wall11= createSprite(247,70,100,10)
  wall11.shapeColor="grey"
  wall12= createSprite(202,110,10,70)
  wall12.shapeColor="brown"
  wall13= createSprite(290,110,10,70)
  wall13.shapeColor="yellow"
  wall14= createSprite(340,180,10,300)
  wall14.shapeColor="orange"
  wall15= createSprite(200,200,280,10)
  wall15.shapeColor="green"
  wall16= createSprite(60,240,10,90)
  wall16.shapeColor="purple"
  wall17= createSprite(202,245,200,10)
  wall17.shapeColor="indigo"
  wall18= createSprite(202,110,10,70)
  wall18.shapeColor="violet"
  wall19= createSprite(230,290,230,10)
  wall19.shapeColor="pink"
  wall20= createSprite(90,360,10,50)
  wall20.shapeColor="white"

  bunny= createSprite(45,55,10,10)
  bunny.addImage("bunny",bunnyImg);
  bunny.scale=0.15

  carrot=createSprite(365,55,10,10)
  carrot.addImage("carrot",carrotImg);
  carrot.scale=0.1

  coin1=createSprite(80,125,10,10)
  coin1.addImage("coin1",coinImg)
  coin1.scale=0.2

  coin2=createSprite(190,50,10,10)
  coin2.addImage("coin1",coinImg)
  coin2.scale=0.2

  coin3=createSprite(180,175,10,10)
  coin3.addImage("coin1",coinImg)
  coin3.scale=0.2

  coin4=createSprite(40,300,10,10)
  coin4.addImage("coin1",coinImg)
  coin4.scale=0.2

  coin5=createSprite(180,270,10,10)
  coin5.addImage("coin1",coinImg)
  coin5.scale=0.2

  coin6=createSprite(220,330,10,10)
  coin6.addImage("coin1",coinImg)
  coin6.scale=0.2

  coin7=createSprite(365,200,10,10)
  coin7.addImage("coin1",coinImg)
  coin7.scale=0.2


}

function draw() {
  background(0);
   if(keyDown(UP_ARROW)){
    bunny.position.y=bunny.position.y-1;
   }
   if(keyDown(DOWN_ARROW)){
    bunny.position.y=bunny.position.y+1;
   }
   if(keyDown(LEFT_ARROW)){
    bunny.position.x=bunny.position.x-1;
   }
   if(keyDown(RIGHT_ARROW)){
    bunny.position.x=bunny.position.x+1;
   }
  drawSprites();
}
