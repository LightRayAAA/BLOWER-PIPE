const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;
var blower, blowerMouth;
var blowButton;
var invis1, invis2

function setup() 
{
  createCanvas(500,700);
  
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(250,350,30)
  blowerMouth = new Blower(170,555,90,30)
  blower = new Blower(250,520,100,100)
  blowButton = createButton("blow")
  blowButton.position(250,590)
  blowButton.size(50,50)
  blowButton.mousePressed(blow)
  invis1 = createSprite(200,20,20,1600)
  invis2 = createSprite(300,20,20,1600)
}

function draw()
{
  background("black")
  Engine.update(engine);
  ball.display();
  blowerMouth.display();
  blower.display();

  drawSprites();
}

function blow()
{
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}