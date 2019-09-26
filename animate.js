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
  if (NERD.score%100==0){
    drawPoop();
 } handlePoopMovemnt();
  NERD.score+=1;
}
function drawPoop(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  handlePoopMovemnt();
  var poop = new Image();
  poop.src = 'crappyPoopDrop.png';
  context.drawImage(poop, NERD.x,NERD.y+26, 10,10);
  POOP.y=NERD.y+50;
}
function handlePoopMovemnt(){
  NERD.vel+=NERD.acc;
 POOP.y += NERD.vel;
}

function initalizeNerd(){
   NERD.y= GAME.canvas.height/2;
 }

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);
renderNerd(context);
    // 3 - Draw new items
    //RenderSpaceship(context);
  //  draw(context);
//   RenderNewObject(context);



  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
