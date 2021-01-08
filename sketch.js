const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




var ground
var matter,world




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  createSprite(400, 200, 50, 50);
  ground=new Ground(400,360,800,10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}