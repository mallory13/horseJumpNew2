﻿/// <reference path="../managers/asset.ts" />
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
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Fence.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x += this.dx;
            if (this.image.y > this.stage.canvas.height + this.height) {
                this.reset();
            }
        };

        Fence.prototype.reset = function () {
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.y = -this.height;
        };

        Fence.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Fence;
    })();
    objects.Fence = Fence;
})(objects || (objects = {}));
//# sourceMappingURL=fence.js.map
