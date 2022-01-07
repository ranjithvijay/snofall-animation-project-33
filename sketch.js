const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var snowImg

var edges
var snow1
var snowArry=[]
function preload(){
snowImg=loadImage("snow2.jpg")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  edges=createEdgeSprites()
 
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(snowImg);  
  Engine.update(engine);
  drawSprites();
if (keyDown(RIGHT_ARROW)){
boy.velocityX=2
}

if(frameCount%20===0){
snow1=new Snow(random(10,width-10),random(10,50),60)
console.log(snow1)
snowArry.push(snow1)

}
for(var i=0;i<snowArry.length;i++){
snowArry[i].display()

}

} 