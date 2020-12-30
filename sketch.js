var bullet, wall;
var speed, weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = 'white';

  bullet.velocityX = speed;
  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor = (80,80,80);

}
function draw() {
  background("black");  
  console.log(damage);
  

  if(bullet.isTouching(wall)){
    damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    bullet.velocityX = 0;


    if(damage <= 10){
      wall.shapeColor = "green";
    }
    else if(damage > 10){
      wall.shapeColor = "red";
    }
  }






  drawSprites();
}