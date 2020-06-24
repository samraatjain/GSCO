var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(5,9)
  weight=random(400,1500)

  car=createSprite(50,200,50,50);
  car.shapeColor="red"
  wall=createSprite(500,200,60,200/2);
  wall.shapeColor="blue"
}


function draw() {
  background(0); 
  car.velocityX=speed;
  
  if(car.x-wall.x<wall.width/2+car.width/2
    && wall.x-car.x<wall.width/2+car.width/2
    && car.y-wall.y<wall.height/2+car.height/2
    && wall.y-car.y<wall.height/2+car.height/2) 
    {
      wall.shapeColor="yellow";
      car.shapeColor="yellow";
      car.velocityX=0;
    }
    else{
      wall.shapeColor="red";
      car.shapeColor="blue";
    }
  car.display();
  wall.display();
}