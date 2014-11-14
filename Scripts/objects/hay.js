/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Hay Class
	
	//change island to hay
    var Hay = (function () {
        function Hay(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "hay");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
			
			//change to multiply instead of divide
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.reset();
			
			
			//change to x
            this.dx = 5;

            game.addChild(this.image);
        }
        Hay.prototype.update = function () {
			
			//change to negative width (x)
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
        };

        Hay.prototype.reset = function () {
			
			//change to height (y)
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
			
			//change to width (x)
            this.image.x = -this.width;
        };

        Hay.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Hay;
    })();
    objects.Hay = Hay;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
