    var bananaImage,obstacleImage,invisibleGround;
    var ObstiGroup,BananaGroup
    var score = 0;
    var peechewaala
    var peechewaalaOG;
    var Monks_Moving;
    var Monkey
  var score = 0;
    
function preload () {
  peechewaala = loadImage("jungle.jpg");
Monks_Moving = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}  



  
function setup() {
  createCanvas(400, 400);
  peechewaalaOG=createSprite(200,200)
  peechewaalaOG.addImage("movang",peechewaala );
  peechewaalaOG.velocityX = -3;
  peechewaalaOG.scale = 1;
  
  Monkey = createSprite(50,340,20,50);
  Monkey.addAnimation("hilta", Monks_Moving);
Monkey.scale = 0.101;
  
  invisibleGround = createSprite(200,370,400,10);
  invisibleGround.visible = false;
  
  ObstiGroup = new Group();
  BananaGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(220);

drawSprites ();
  
  textSize(20);
fill("white");
text ("Score: "+score,170,50);

  
  if(keyDown("space") && Monkey.y >= 300) {
      Monkey.velocityY = -12;
    }
  
      Monkey.velocityY = Monkey.velocityY + 0.8

  
    if (peechewaalaOG.x < 0){
      peechewaalaOG.x = peechewaalaOG.width/2;
    }
  
  
  Monkey.collide(invisibleGround);
  
  
  if (Monkey.isTouching(BananaGroup)) {
      BananaGroup.destroyEach();
    score = score+2;
     switch (score) {
    case 10 : Monkey.scale = 0.12;
      break;
      case 20 : Monkey.scale = 0.14;
      break;
      case 30: Monkey.scale = 0.16;
      break;
      case 40 : Monkey.scale = 0.18;
      break;
     default : break 
  }
  }
  if (Monkey.isTouching(ObstiGroup)) {
    Monkey.scale = 0.101;
    
    
  }
  gimmeObstij();
  gimmebananas();
  
}








function gimmebananas() {
  if (frameCount % 100 ===0) {
    var bananas  = createSprite(400,260,50,50);
  bananas.addImage(bananaImage);
    bananas.scale = 0.04;
    bananas.y = Math.round(random(200,250));
    bananas.velocityX = -3;
    BananaGroup.add(bananas);
    
    }  
    
}
  
function gimmeObstij () {
  if (frameCount % 80 ===0) {
    var Obstij = createSprite(400,365,50,50);
    Obstij.addImage(obstacleImage);
    Obstij.scale = 0.2;
    Obstij.velocityX = -3
    ObstiGroup.add(Obstij);
  }
  
  
  
 
  
  
  
  
  
  
  
  
}


















