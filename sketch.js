 const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Constraint = Matter.Constraint;
   //const Body = Matter.Body;

    var engine,world;
   // var ground;
    var plinkos = [];
    var divisions = [];
    var particles = [particles];
    //var ground1,ground2,ground3;
    var divisionsHeight = 300;
    var line;
    var gameState = "PLAY"
var particle
    var count = 0;
    var score = 0;
function preload(){

}
function setup() {
   createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);

   for (var k = 0; k<=width; k=k+80){
     divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
   }
    for(var j = 75; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 75))
    }
    for(var j = 50; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,175))
    }
    for(var j = 75; j<= width; j = j+50){
      plinkos.push(new Plinko(j ,275))
    }
    for(var j = 50; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,375))
    }
  
    
Engine.run(engine);
  }

 
 
function draw() { 
  //rectMode(CENTER);
  Engine.update(engine);
  background(0);
  textSize(35);
  text("Score : "+score,20,40);
  fill(255);

  textSize(35);
  text("500",5,550);
  text("500",80,550);

  text("500",160,550);

  text("500",240,550);

  text("500",320,550);

  text("500",400,550);

  text("500",480,550);

  text("500",560,550);

  text("500",640,550);

  text("500",720,550);

  ground.display();
  if(gameState=="END"){
    background("black");
    fill("red");
    textSize(100);
    text("Game Over",200,400);
  }
  for(var k = 0; k<plinkos.length;k++){
    plinkos[k].display();

    if(particle!=null){
      particle.display();
      if (particle.body.position.y>700){
        if (particle.body.position.x<300){
          score=score+500;
          particle=null;
          if(count>5) gameState="END";
        }

        else if (particle.body.position.x<600 && particle.body.position.x>301);
        {
          score= score+100;
          particle=null;
          if (count>=5) gameState="END";
        }
      }
    }

  drawSprites();
  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
   }
  }
 
  
}

function mousePressed(){
  if (gameState!=="END"){
    count++;
    particle=new Particle(mouseX,50,10,10);
  }
}