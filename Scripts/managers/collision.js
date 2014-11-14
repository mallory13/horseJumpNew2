/// <reference path="../objects/fence.js" />
/// <reference path="../objects/hay.js" />
/// <reference path="../objects/horse.js" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(horse, hay, fence, scoreboard) {
            this.fence = [];
            this.horse = horse;
            this.hay = hay;
            this.fence = fence;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between plane and any cloud object
        Collision.prototype.planeAndCloud = function (fence) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.horse.image.x;
            p1.y = this.horse.image.y;
            p2.x = fence.image.x;
            p2.y = fence.image.y;
			
			//change to *0.5
            if (this.distance(p1, p2) < ((this.horse.height * 0.5) + (fence.height * 0.5))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                fence.reset();
            }
        };

        // check collision between plane and island
		//change plane and island to horse and fence
        Collision.prototype.horseAndHay = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.horse.image.x;
            p1.y = this.horse.image.y;
            p2.x = this.hay.image.x;
            p2.y = this.hay.image.y;
			
			//change to multiply *0.5
			//change plane and island to horse and hay
            if (this.distance(p1, p2) < ((this.horse.height * 0.5) + (this.hay.height * 0.5))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.hay.reset();
            }
        };

        // Utility Function to Check Collisions
		//change plane and island to horse and fence
		//change cloud to fence
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.FENCE_NUM; count++) {
                this.horseAndFence(this.fence[count]);
            }
            this.horseAndHay();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
