var gameTitle = {
    create: function () {
        var gameTitle = this.game.add.sprite(710, 300, 'gameTitle');
        gameTitle.anchor.setTo(0.5, 0.5);
        var startButton = this.game.add.button(710, 292, 'start', this.playTheGame,this);
        startButton.anchor.setTo(0.5, 0.5); 
        
    },
    
    playTheGame: function () {
        this.game.state.start('state1');
    };