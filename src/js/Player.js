function Player(ctx) {
  this.x                 = 500;
  this.yOffsetFromBottom = 50;
  this.speed             = 10;
  this.width             = 200;
  this.height            = 50;

  this.render = function () {
    var y = ctx.canvas.height - this.yOffsetFromBottom - this.height;
    ctx.fillRect(this.x, y, this.width, this.height);
  };

  // listen for keyboard input
  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 38: // Up arrow
        break;
      case 40: // Down arrow
        break;
      case 37: // Left arrow
        this.x = this.x - this.speed;
        break;
      case 39: // Right arrow
        break;
    }
  }.bind(this));
}





