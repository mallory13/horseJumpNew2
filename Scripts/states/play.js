/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
		
		//replace ocean with field
        field.update();
		
		//replace island with hay
        hay.update();
		
		//replace plane with horse
        horse.update();
		
		//replace cloud with fence
        for (var count = 0; count < constants.FENCE_NUM; count++) {
            fences[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
			
			//change plane to horse
            horse.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
		//replace ocean with field, island with hay, plane with horse
        field = new objects.Field(stage, game);
        hay = new objects.Hay(stage, game);
        horse = new objects.Horse(stage, game);

        // Show Cursor
        stage.cursor = "none";
		
		
		//replace clouds with fence
        for (var count = 0; count < constants.FENCE_NUM; count++) {
            fences[count] = new objects.Fence(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(horse, hay, fences, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
