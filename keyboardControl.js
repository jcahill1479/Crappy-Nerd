/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  nerdC : {
    restart : false,
    jump : false
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "r":
      CONTROLS.nerdC.restart = true;;
      break;
    case " ":
      CONTROLS.nerdC.jump = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "r":
      CONTROLS.nerdC.restart = false;;
      break;
    case " ":
      CONTROLS.nerdC.jump = false;
      break;
    default:
      break;
  }
});
