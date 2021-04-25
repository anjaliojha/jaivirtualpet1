var dog, dogImg
var happyDog, happyDogImg
var database;
var foodS;
var foodStock;


function preload()
{
	dogImg=loadImage("dogImg.png");
  happyDogImg=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,10,10);
 dog.addImage(dogImg);
 dog.scale=0.2;
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background((46, 139, 87));

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
text("Note:Press UP ARROW key to Feed Drago Milk",250,250);
textSize(5);
fill("red");
stroke(5);

drawSprites();
}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  if(x<0){
    x=0
  }
  else{
    x=x+1
  }
  database.ref('/').update({
    
    Food:x
   
  })
}
 




