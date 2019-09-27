var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var NERD = {
    x : 80,
    y : 150,
    acc : 0.3,
  vel : 0,
  jump : -3.5,
  score: 0
};

var POOP = {
  x:80,
  y : 0
};
var WALL = {
  x1: 550,
  x2: 350,
  x3: 150,
  random1: 150,
  random2: 150,
  random3: 150,
  height: 75
}
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
