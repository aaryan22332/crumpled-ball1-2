
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(500,height-15,1000,20)
	ball=new Paper(100,400,25,25)
	wall1 = new Dustbin(763,370,226,222)
    //wall2 = new Dustbin(825,height-25,125,10)
    //wall3 = new Dustbin(887,height-100,7,150)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  ground1.display();
  ball.display();
  wall1.display()
  //wall2.display()
  //wall3.display()

  drawSprites();
 }
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-75})
	}
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:50})
	}
}

