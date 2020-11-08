var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,trashCan1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(100,200,50,50);
	ground = new Ground(800,390,1600,20);
	trashCan1 = new TrashCan1(940,290,150,170);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  trashCan1.display();

 

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:210,y:-210});
	}
}


