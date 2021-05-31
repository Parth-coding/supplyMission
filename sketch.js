var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite,boxleftSprite,boxLeftBody ,	boxBase,	boxBottomBody ;
var boxleftSprite,boxRightBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
		helicopterIMG=loadImage("helicopter.png")
		packageIMG=loadImage("package.png")
}

	function setup() 
	{
			createCanvas(800, 700);
			rectMode(CENTER);
			

			engine = Engine.create();
			world = engine.world;
			

			helicopterSprite=createSprite(width/2, 200, 10,10);
			helicopterSprite.addImage(helicopterIMG)
			helicopterSprite.scale=0.6

			groundSprite=createSprite(width/2, height-35, width,10);
			groundSprite.shapeColor=color(255)

			packageBody =new box(width/2,200,50,50);

			packageSprite=createSprite(width/2, 80, 10,10);
			packageSprite.addImage(packageIMG)
			packageSprite.scale=0.2;
		

			
			

			//Create a Ground
			ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
			World.add(world, ground);

		
 
			
				
		
		
				boxleftSprite=createSprite(280, 600, 20,100);
				boxleftSprite.shapeColor=color(255,0,0);
		
				boxLeftBody = Bodies.rectangle(280, 600, 20,100 , {isStatic:true} );
				World.add(world, boxLeftBody);
		
				boxBase=createSprite(400, 620, 200,20);
				boxBase.shapeColor=color(255,0,0);
		
				boxBottomBody = Bodies.rectangle(400, 620, 200,20 , {isStatic:true} );
				World.add(world, boxBottomBody);
		
				boxrightSprite=createSprite(520 , 600, 20,100);
				boxrightSprite.shapeColor=color(255,0,0);
		
				boxRightBody = Bodies.rectangle(520 , 600, 20,100 , {isStatic:true} );
				World.add(world, boxRightBody);

				
		


			Engine.run(engine);
		
    }   


	function draw()
 {
		rectMode(CENTER);
		background(0);
        Engine.update(engine);
		
        packageSprite.x= packageBody.body.position.x ;
        packageSprite.y= packageBody.body.position.y ;
		
		
		
		
	//	console.log(packageBody.position.x);
	//	console.log(packageBody.position.y);

	//	if(helicopterSprite.x<200 || helicopterSprite.x===200){   
	//		helicopterSprite.x=helicopterSprite.x+30;
	//	}

// 200<helicopterSprite.x && helicopterSprite.x < 600  && 200<helicopterSprite.x && helicopterSprite.x < 600
		
	
   if(keyWentDown("down_arrow"))
   {
  Matter.Body.setStatic(packageBody.body, false);
   }
	

		if(keyDown("right_arrow"))
		{
			helicopterSprite.x = helicopterSprite.x+10;
			translation={x:+10,y:0} 
			Matter.Body.translate(packageBody.body,translation);
		}
		
		 if(keyDown("left_arrow") )
		{
			helicopterSprite.x = helicopterSprite.x-10;
			translation={x:-10,y:0} 
				Matter.Body.translate(packageBody.body,translation);
			
	    }
	
     
			
		  

		if(packageBody.body.position.y === 200)
		{
			packageBody.body.position.x = helicopterSprite.x;
			packageBody.body.position.y = helicopterSprite.y;
		
		}

	//	if(helicopterSprite.x >800 || helicopterSprite.x===800){
	//		helicopterSprite.x=helicopterSprite.x-30;
	//	}
		drawSprites();
	}




	      
		


  
 