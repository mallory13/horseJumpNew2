/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Fence class
    var Fence = (function () {
        function Fence(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "fence");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            this.reset();

            game.addChild(this.image);
        }
		
		//if the images reach the end of the canvas then reset the images by calling the reset function
        Fence.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            }
        };

//reset the images
        Fence.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = -this.width;
        };

        Fence.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Fence;
    })();
    objects.Fence = Fence;
})(objects || (objects = {}));
//# sourceMappingURL=fence.js.map
