var preload = {
  
    preload: function () {
        var loadingBar = this.add.sprite(160, 240, "loading");
        console.log("loaded loading bar");
        loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBar);
        
        this.game.load.image('player', 'giraffe.png');
        this.game.load.image('keys', 'key.png');
        this.game.load.image('title', 'gametitle.png');
        this.game.load.image('wall', 'wall.png');
        this.game.load.image('door', 'door.png');
        
        console.log("loaded all assets");
    },
        
    create: function () {
        console.log("starting gameTitle");
        this.game.state.start("gameTitle");
    }
};