var wall,thickness ;
var bullet, speed,weight; 


function setup() {  
       createCanvas(1600,400);
       thickness=random(22,83)

       bullet=createSprite(20,200,50,5 )
       bullet.shapeColor="white"
      
       
       wall= createSprite(1000, 200,10,50);
       wall.shapeColor="white";
       speed=random(223,321)  
       weight=random(30,52)
       
       bullet.velocityX=speed 

}
 
function draw(){
  background("LightSkyBlue")

  isTouching()
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*speed*speed/(thickness*thickness*thickness)
    
    if(damage>10){
      wall.shapeColor="red";
      textSize(20)
      fill(255)
      text("Result:Material Rejected",100,130)
    }
  
  }
textSize(20)
fill(0)
text("wall Safety Test",100,70)
fill(255)
text("damage Value:"+Math.round(damage),100,100)
drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x

if(bulletRightEdge>=wallLeftEdge){
  return true
}
else{
  return false
}
}

function isTouching(){
  if(bullet.isTouching(wall)){
    bullet.shapeColor="red"
  }
}





