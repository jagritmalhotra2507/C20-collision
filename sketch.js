var mRect,fRect;

function setup() {
  createCanvas(1200,600);
 mRect= createSprite(400, 200, 80, 50);
 mRect.shapeColor="green";
 fRect = createSprite(600,300,60,80)
 fRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
mRect.x=World.mouseX;
mRect.y = World.mouseY;

  console.log(mRect.x-fRect.x);

  
  
  if ( mRect.x-fRect.x < mRect.width/2 + fRect.width/2 &&
fRect.x - mRect.x < mRect.width/2 + fRect.width/2 &&
     mRect.y-fRect.y < mRect.height/2 + fRect.height/2 &&
    fRect.y - mRect.y < mRect.height/2 + fRect.height/2
    )  {

    mRect.shapeColor="red";

    fRect.shapeColor = "red";
  }
else {
  mRect.shapeColor="green";

  fRect.shapeColor = "green";

}

  
  drawSprites();
}