﻿/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Horse Class
	
	
	//change plane to horse
    var Horse = (function () {
        function Horse(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "horse");
			
			//change 430 to side scroller/ change to x
            this.image.y = 430;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
			
			//change to multiply by .5 instead of divide by 2
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            game.addChild(this.image);
            this.horseSound = createjs.Sound.play('horse', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Horse.prototype.update = function () {
			//change to y instead of x
            this.image.y = this.stage.mouseY;
        };
        Horse.prototype.destroy = function () {
            this.horseSound.stop();
            game.removeChild(this.image);
        };
		
		//change plane to horse
        return Horse;
    })();
    objects.Horse = Horse;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
