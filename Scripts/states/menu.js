﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/horse.js" />
/// <reference path="../objects/field.js" />
/// <reference path="../objects/hay.js" />
/// <reference path="../objects/fence.js" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;

(function (states) {
    function instructionsButtonClicked(event) {
        stage.removeChild(game);
		
		//change plane to horse
        horse.destroy();
		soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionButtonClicked;
	
	

    function playButtonClicked(event) {
        stage.removeChild(game);
		
		//change plane to horse
        horse.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
		field.update();
		horse.update();
        
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;
		
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
		
        field = new objects.Field(stage, game);
        horse = new objects.Horse(stage, game);
        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
		
		//change divide to multiply .5
		//change mail pilot
        gameNameLabel = new objects.Label(stage.canvas.width * 0.5, 40, "HORSE JUMP");
        game.addChild(gameNameLabel);

        // Display Play Again Button
		//change divide to multiply .5
        playButton = new objects.Button(stage.canvas.width * 0.5, 300, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
