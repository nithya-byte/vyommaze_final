var x,y;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tunnelImg,textImg,marioKeyImg;
var gameState="start";

//preload to load the pipe & text image
function preload()
{
	tunnelImg = loadImage("pipe_image.png");
	textImg = loadImage("message.png");
	marioKeyImg = loadImage("mario_key.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	
	engine = Engine.create();
	world = engine.world;

	
	maze=new Maze(windowWidth/2,windowHeight/2);

	key1=new Key(windowWidth/2,windowHeight/2,10);
	tunnel = createSprite(windowWidth/2,windowHeight/2-150);
	tunnel.addImage(tunnelImg);
	tunnel.scale=0.5;
	text = createSprite(windowWidth/2-300,windowHeight/2);
	text.addImage(textImg);
	text.scale=0.4;
	MKey = createSprite(windowWidth/2,windowHeight/2);
	MKey.visible=false;

slingshot = new SlingShot(maze.body,key1.body);

	Engine.run(engine);
	a=0;
}


function draw() {
  
  background(0);
  if(gameState=="start")
  {

  fill("red");
 maze.display();
  fill("pink");
 
  key1.display();
 drawSprites();
slingshot.display();

a=a+0.2;

{
Matter.Body.setAngle(maze.body,a);

} 
if(touches.length>0)
{
	if(key1.body.position!=null)
		{
			if(key1.body.position.x>windowWidth/2-10 && key1.body.position.x<windowWidth/2+20)
			{
				
				gameState="end";
				touches=[];
			}
			else
			{
				touches=[];
			}
		}
}

}
else if(gameState=="end")
{
	MKey.visible=true;
	MKey.addImage(marioKeyImg);
	MKey.scale=0.5;
	drawSprites();
	tunnel.visible=false;
	text.visible=false;
}

}
  function keyPressed()
  {
	if(keyIsDown(UP_ARROW)){
		
		
	}
  }