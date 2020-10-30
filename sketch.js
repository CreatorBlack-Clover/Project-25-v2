// variables
var engine, world, paper,ground,box1,box2,box3,paperImg,binImg;
// physics rules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImg = loadImage("paper.js");
	binImg = loadImage("bin.js");
}

function setup() {
	createCanvas(1300, 600);

	// creating the engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// paper
	var paper_options =
	{
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}
	paper = Bodies.circle(100,200,30,paper_options);
	World.add(world,paper);

	// Box Parts
	var box_options = 
	{
		isStatic: true
	}
	box1 = Bodies.rectangle(1078,490,15, 120, box_options);
	World.add(world,box1);

	box3 = Bodies.rectangle(1222,490,15, 120, box_options);
	World.add(world,box3);

	box2 = Bodies.rectangle(1150,560,170, 15, box_options);
	World.add(world,box2);
	

	


	// Ground options
	var ground_options =
	{
		isStatic: true,
		
	}

	// The ground
	ground = Bodies.rectangle(650,580,1300,20,ground_options);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(255);

  // extra stuff
  if(paper.position.x > 1300)
  {
	  //paper.position.x = 100;
	  Matter.Body.applyForce(paper,paper.position,{x:-200, y:-100});
  }
  if(paper.position.x < 0)
  {
	  //paper.position.x = 100;
	  Matter.Body.applyForce(paper,paper.position,{x:200, y:-100});
  }
  
  // drawing paper
  //ellipse(paper.position.x, paper.position.y,60);
  

  // drawing the ground
  rect(ground.position.x, ground.position.y, 1300,20);

  /* drawing the bin
  rect(box2.position.x, box2.position.y, 170, 25);
  rect(box1.position.x, box1.position.y, 25, 120);
  rect(box3.position.x, box3.position.y, 25, 120);
  */

  // paper image
  image(paperImg, paper.position.x-40, paper.position.y-40,83,83);
  // bin image
  image(binImg, box2.position.x-85, box2.position.y-138,170,150);


  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper,paper.position,{x:215,y:-200});
	}
}



