var gameState=0

function preload(){
boat11=loadImage("images/boat1.png")
boat21=loadImage("images/boat2.png")
back1=loadImage("images/ocean.jpg")
sound1=loadSound("images/salamisound-1020058-water-pouring-into-glass-0-2.mp3")
}
function setup(){
createCanvas(1200,400)
boat101=createSprite(100,100,50,50)
boat101.addImage('play',boat11)
boat101.scale=0.5
boat201=createSprite(100,300,50,50)
boat201.addImage('play2',boat21)
boat201.scale=0.22

}
function draw(){
background(back1)
if(gameState===0){

 
if(keyWentDown("W")||keyWentDown("E")){
  boat101.x=boat101.x+4  
}else{
 
}

if(keyWentDown("O")||keyWentDown("P")){
  boat201.x=boat201.x+4
}
}
if((boat101.x>=1150)&&boat201.x!==1150){
  gameState=1
}
if((boat201.x>=1150)&&boat101.x!==1150){
  gameState=2
}

  drawSprites()
  text("Lets test who can tap faster",550,50)
  text("Top most boat will move using W E ",530,70)
  text("Lower most boat will move using O P ",525,90)
  textSize(24)
  fill('darkblue')
  text("E",1150,100)
  text("N",1150,200)
  text("D",1150,300)

  if(gameState==1){
    text("The first boat won!!",570,200)
  }
  if(gameState==2){
 text("The second boat won!!",570,200)
  }
}