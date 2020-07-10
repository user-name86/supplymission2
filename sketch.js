var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
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

        Box1= createSprite(width/2,665,200,20);
	Box1.shapeColor="red";
	Box2 = createSprite(300,625,20,100);
	Box2.shapeColor="red";
	Box3 = createSprite(495,625,20,100);
	Box3.shapeColor="red";
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	
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
 
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  keyPressed();
 
  rectMode(CENTER);
  rect(400,height,width,50);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  } 
}



