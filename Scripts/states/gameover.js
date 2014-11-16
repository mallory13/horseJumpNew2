/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/fence.js" />
/// <reference path="../objects/hay.js" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/field.js" />
/// <reference path="../objects/horse.js" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function gameOverState() {
		
		//field.update();
        field.update();
    }
    states.gameOverState = gameOverState;

    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;

    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        field = new objects.Field(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width * 0.5, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width * 0.5, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width * 0.5, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width * 0.5, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
