
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine,myWorld,ground;
var paper;
var dustbin,paper,ground;


function setup() {
	createCanvas(1200,400);


	myEngine = Engine.create();
	myWorld = myEngine.world;


 dustbin = new Dustbin(1260,650);
paper = new Paper(200,450,40);
  ground = new Ground(600,400,1200,20);
  //create a ground

  //var render = Render.create({
	  //element: document.body,
	  //engine: myEngine,
	  //options: {
	    //width: 1200,
	    //height: 700,
      //wireframes: false
    //}
  //});
  //Engine.run(myEngine);
	//Render.run(render); 
  
   }


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine);

paper.display();
dustbin.display();

ground.display();



  
}

function keyPressed(){

if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:- 90});
}

}

