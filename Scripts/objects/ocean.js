/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
	
	//change ocean to field
    var Ocean = (function () {
        function Ocean(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

			//change to dx
            this.dy = 5;

            game.addChild(this.image);
        }
		
		//change ocean to field
		//change y to x
        Ocean.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };

		
		//change ocean to field
		//change y to x
        Ocean.prototype.reset = function () {
            this.image.y = -960;
        };

		//change ocean to field
        Ocean.prototype.destroy = function () {
            game.removeChild(this.image);
        };
		
		//change ocean to field
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
