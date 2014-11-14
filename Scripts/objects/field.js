/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Field Class
	
	//change ocean to field
    var Field = (function () {
        function Field(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("field"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

			//change to dx
            this.dx = 5;

            game.addChild(this.image);
        }
		
		//change ocean to field
		//change y to x
        Field.prototype.update = function () {
            this.image.x += this.dyx;
            if (this.image.x >= 0) {
                this.reset();
            }
        };

		
		
        Field.prototype.reset = function () {
			
			//change the number to negative width (640?)
            this.image.x = -960;
        };

		//change ocean to field
        Field.prototype.destroy = function () {
            game.removeChild(this.image);
        };
		
		//change ocean to field
        return Field;
    })();
    objects.Field = Field;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
