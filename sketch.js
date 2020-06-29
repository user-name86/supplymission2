var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
var Box1,Box2,Box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	var packageBody_options={
		restitution: 0.65,
		isStatic: true
	}
	
    

	engine = Engine.create();
	world = engine.world;

	box2 = Bodies.rectangle(328,645,20,100);
	World.add(world,box2);
	box3 = Bodies.rectangle(475,648,20,100);
	World.add(world,box3);	
	box1 = Bodies.rectangle(410,648,210,20);
	World.add(world,box1);


	Box1 = createSprite(150,120,200,20);
	Box2 = createSprite(180,500,30,100);
	Box3 = createSprite(340,420,30,100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	/*box1 = new Box(400,648,200,20);
	box2 = new Box(310,615,20,100);
	box3 = new Box(487,617,20,100);
	*/
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  rect(box1.position.x,box1.position.y,200,10);
  rect(box2.position.x,box2.position.y,10,100);
  rect(box3.position.x,box3.position.y,10,100);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  Box1.x = box1.position.x;
  Box1.y = box1.position.y;

  Box2.x = box2.position.x;
  Box2.y = box2.position.y;

  Box3.x = box3.position.x;
  Box3.y = box3.position.y;
  
  keyPressed();
  /*box1.display();
  box2.display();
  box3.display();
  */
  rectMode(CENTER);
  rect(400,height,width,50);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  } 
}



