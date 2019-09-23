var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var NEW_OBJECT = {
  x : 0,
  y : 0

};

var ARRAY ={
  block : [100, 150, 200, 250, 300]
}

var ALIVE ={
  isAlive : true
};

var RANDOM = {
  x : Math.floor ((Math.random () * 100) + 50),
  heightOnCanvas : 300 - Math.floor ((Math.random()*100) + 50),
  height : Math.floor ((Math.random()*100)+50)
};
