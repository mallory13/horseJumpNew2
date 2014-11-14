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
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
			
			
			//change to x
            this.dy = 5;

            game.addChild(this.image);
        }
        Hay.prototype.update = function () {
			
			//change to negative width (x)
            this.image.y += this.dy;
            if (this.image.y > this.stage.canvas.height + this.height) {
                this.reset();
            }
        };

        Hay.prototype.reset = function () {
			
			//change to height (y)
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
			
			//change to width (x)
            this.image.y = -this.height;
        };

        Hay.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Hay;
    })();
    objects.Hay = Hay;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
