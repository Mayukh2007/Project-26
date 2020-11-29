var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,trashCan1,trashCan2,trashCan3;
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
	paper1 = new Paper(100,200,30,30);
	ground = new Ground(800,390,1600,20);
	trashCan1= new TrashCan(1000,150,10,10);
	trashCan2 = new TrashCan(1140,170,20,20);
	trashCan3= new TrashCan(900,170,20,20);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  trashCan1.display();
  //trashCan2.display();
  //trashCan3.display();
  

 

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


