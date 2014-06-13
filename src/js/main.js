var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var engine = new GameEngine(ctx);

engine.start();
