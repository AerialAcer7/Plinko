
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var particle;
var divisions = [];
var plinkos = [];

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(240,795,width,10);
	 
	for(var i = 0;i<width;i = i+80){
	 var division = new Division(i,625,10,350);	
	 divisions.push(division);	
	}

	for(var k = 40;k<width;k = k+48){
	 var plinko = new Plinko(k,100);
	 plinkos.push(plinko);	
	}

	for(var o = 60;o<width;o = o+48){
	 var plinko1 = new Plinko(o,200);
	 plinkos.push(plinko1);		
	}

	for(var a = 40;a<width;a = a+48){
	 var plinko2 = new Plinko(a,300);
	 plinkos.push(plinko2);		
	}

	for(var f = 60;f<width;f = f+48){
	 var plinko3 = new Plinko(f,400);
	 plinkos.push(plinko3);	
	}
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  //Create Display here
   ground.display();

   for(var j = 0;j<divisions.length;j = j+1){
	divisions[j].display();   
   }

   for(var l = 0;l<plinkos.length;l = l+1){
	plinkos[l].display();   
   }

   for(var x = 0;x<plinkos.length;x = x+1){
	 plinkos[x].display();  
   }

   for(var b = b;b<plinkos.length;b = b+1){
	 plinkos[b].display();  
   }

   for(var n = 0;n<plinkos.length;n = n+1){
	 plinkos[n].display();  
   }

   spawnParticles();

   for(var h = 0;h<particles.length;h = h+1){
	 particles[h].display();  
   }
}

function spawnParticles(){
 if(frameCount%60 === 0){
  var x = Math.round(random(100,480));
  fill("green");
  particle = new Particle(x,0);
  particles.push(particle);

 }	
}

