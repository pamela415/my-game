var preload = {
  
    preload: function () {
        var loadingBar = this.add.sprite(160, 240, "loading");
        console.log("loaded loading bar");
        loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBar);
        
        this.game.load.image('player', 'giraffe.png');
        this.game.load.image('keys', 'key.png');
        this.game.load.image('title', 'gametitle.png');
        
        
        
        
        
        
    
    }
};