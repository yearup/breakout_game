function GameEngine(ctx) {
  var player;

  this.start = function () {
    player = new Player(ctx);
    window.addEventListener('resize', onResize);
    onResize();
    render();
  };

  function onResize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function render() {
    // do rendering
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    player.render();
    setTimeout(render, 15);
  }
}

