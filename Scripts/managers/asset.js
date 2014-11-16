var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
	
	//add hay image
	//add horse image
	//add fence image
	//add different sound
		{ id: "horse", src: "assets/images/horse.png" },
		{ id: "hay", src: "assets/images/hay.png" },
		{ id: "fence", src: "assets/images/fence.png" },
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "field", src: "assets/images/field.jpg" },
        { id: "horse", src: "assets/sounds/horse.ogg" },
        { id: "fence", src: "assets/sounds/fence.ogg" },
        { id: "hay", src: "assets/sounds/hay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [443, 2, 65, 65],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "fence": [0],
            "instructionsButton": [1],
            "hay": [2],
            "horse": [3],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
