
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;
var paper,box1,box2,box3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	myEngine = Engine.create();
	myWorld= myEngine.world;

	//Create the Bodies Here.
	 ground1 = new Ground (400,690,800,20);

	 box2 = new Basket(520,610,20,100);
	
	box3 = new Basket(740,610,20,100)
	box1 = new Basket(630,670,200,20);
	paper = new Ball(100,300,20);


	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  box2.display();
  box1.display();
  box3.display();
  
  ground1.display();

  paper.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode   ===  UP_ARROW) {
	  
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:50,y:-50});
	   
	 }
	 
	 
   }



