function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 50, 50);
  r2=createSprite(600,200,100,100)
}

function draw() {
  background("yellow");  
  r1.x=mouseX 
  r1.y=mouseY
  if(r2.x-r1.x<r1.width/2+r2.width/2
    &&r1.x-r2.x<r2.width/2+r1.width/2
    &&r2.y-r1.y<r1.height/2+r2.height/2
    &&r1.y-r2.y<r2.height/2+r1.height/2){
    r1.shapeColor="blue"
    r2.shapeColor="blue"
  }else{
    r1.shapeColor="green"
    r2.shapeColor="green"
  }
  drawSprites();
}