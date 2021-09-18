const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground; 
var background_img
var tower;
var tower_img
var cannon, angle;
var cannon_img;
var cannonBase_img
var ball;



function preload() {
  background_img = loadImage("./assets/background.gif")
  tower_img = loadImage("./assets/tower.png")
  cannon_img = loadImage("./assets/canon.png")
  cannonBase_img = loadImage("./assets/cannonBase.png")
  

 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;


angleMode(DEGREES)


  angle = 20;
  cannon = new Cannon(180, 110, 130, 100, angle);
  ball = new cannonBall(cannon.x, cannon.y)
  


  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1 , width*2, 1, ground_options)
  tower = Bodies.rectangle(160, 350, 160, 310, ground_options)
  
  World.add(world, ground)
  World.add(world, tower)
  
 
}

function draw() {
  background(189);
 
  Engine.update(engine);

  image(background_img, 0, 0, width, height)

  rect(ground.position.x, ground.position.y, width*2, 1)

  push();
  imageMode(CENTER)
  image(tower_img, tower.position.x, tower.position.y, 160, 310)
  pop();

  cannon.display();
  ball.display();

  

  
   
}


function keyReleased(){
  if(keyCode == DOWN_ARROW){
    ball.shoot()
  }



}