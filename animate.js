/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
 function renderNerd(context){
   var canvas = document.getElementById('canvas');
   handleNerdMovement();
   var nerdImage= new Image();
   nerdImage.src = 'avgn.png';
   context.drawImage(nerdImage, NERD.x,NERD.y, 25, 25);

 }
 function renderPoopWalls(context){
   var canvas = document.getElementById('canvas');
   handleWallMovemnt();
   var bottomPoop1= new Image();
   var topPoop1 = new Image();
   var bottomPoop2= new Image();
   var topPoop2 = new Image();
   var bottomPoop3= new Image();
   var topPoop3 = new Image();
   bottomPoop1.src = 'crappyNerdPoop.png';
   topPoop1.src = 'crappyNerdPoopBottom.png';
   bottomPoop2.src = 'crappyNerdPoop.png';
   topPoop2.src = 'crappyNerdPoopBottom.png';
   bottomPoop3.src = 'crappyNerdPoop.png';
   topPoop3.src = 'crappyNerdPoopBottom.png';
   context.drawImage(topPoop1, WALL.x1,0, 50, WALL.random1);
   context.drawImage(bottomPoop1, WALL.x1,WALL.height+WALL.random1, 50, (300-WALL.random1)-WALL.height);
   context.drawImage(topPoop2, WALL.x2,0, 50, WALL.random2);
   context.drawImage(bottomPoop2, WALL.x2,WALL.height+WALL.random2, 50, (300-WALL.random2)-WALL.height);
   context.drawImage(topPoop3, WALL.x3,0, 50, WALL.random3);
    context.drawImage(bottomPoop3, WALL.x3,WALL.height+WALL.random3, 50, (300-WALL.random3)-WALL.height);
 }
 function handleWallMovemnt(){
   WALL.x1+=-2;
   WALL.x2+=-2;
   WALL.x3+=-2;
      if (WALL.x1<-50){
     WALL.x1=550;
     WALL.random1 = Math.random() * 251;
     NERD.score++;
   }
   if (WALL.x2<-50){
     WALL.x2=550;
     WALL.random2 = Math.random() * 251;
     NERD.score++;
   }
   if (WALL.x3<-50){
     WALL.x3=550;
     WALL.random3 = Math.random() * 251;
     NERD.score++;
   }
 }
 function handleNerdMovement(){
   NERD.vel+=NERD.acc;
  if (CONTROLS.nerdC.jump){
    NERD.vel = NERD.jump;
  }
  NERD.y += NERD.vel;
  if (NERD.y > GAME.canvas.height-25){
    NERD.y = GAME.canvas.height-25;
  };
  if (NERD.y < 0){
    NERD.y = 0;
  }
  if (NERD.score%10==0){
    POOP.y=NERD.y+16;
    drawPoop();
 }
 }
function drawPoop(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  var poop = new Image();
  poop.src = 'crappyPoopDrop.png';
  handlePoopMovemnt();
  context.drawImage(poop, POOP.x,POOP.y, 10,10);
}
function handlePoopMovemnt(){
 POOP.y += 1    ;
}

function initalizeNerd(){
   NERD.y= GAME.canvas.height/2;
 }

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {
    context.clearRect(0, 0, 600, 300);
renderNerd(context);
renderPoopWalls(context);
drawPoop();
handlePoopMovemnt();
  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
