var mainState = {

    
    create: function () {
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.game.stage.backgroundColor = '#000000';   
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite(150, 100, 'player');
        
        this.player.body.gravity.y = 600;
        
        this.physics.arcade.overlap(this.player, this.fireball, this.restart, null, this);
        
        this.walls = this.game.add.group();
        this.foods = this.game.add.group();
        this.lavas = this.game.add.group();
        
        var level = [
        '!                                                                   !',
        '!                                    o                              !',
        '!                    o   o         xxxxx               o            !',
        '!             o     xxxxxxx                          xxxxx          !',
        '!                                                                   !',
        '!                                                                   !',
        '!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    xxxxx                     !',   
        '!                                                            o      !',   
        '!                                                          xxxxx    !',   
        '!                                                                   !',  
        '!                                                                   !',         
        '!                                                                   !',
        '!                                 o                                 !',
        '!                                xxx                                !',
        '!  o                                                                !',
        '!xxxxx      xxxxxxxxxxxxxxxxx!!!!!!!!!!!!xxxxxxxx                   !',
        '!                                                    o              !',   
        '!      x                                            xxxx            !',
        '!         o                                                 o       !',
        '!      xxxxxx                                             xxxxxx    !',   
        '!               xxx    o               o                            !',   
        '!                     xxxxx         o xxxx                          !',   
        '!       o               o       o xxxxxxxxxxx                       !',   
        '!                            o xxxxxxxxxxxxxxxxx                    !',   
        '!             o             xxxxxxxxxxxxxxxxxxxxxxx                 !',    
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        
        
        
        ]; 
        
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {


                if (level[i][j] == 'x') {
                    var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }


                else if (level[i][j] == 'o') {
                    var food = this.game.add.sprite(30+20*j, 30+20*i, 'keys');
                    this.foods.add(food);
                     
                }


                else if(level[i][j] == '!') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'door');
                    this.lavas.add(enemy);
                }
            }
        }
        
        
        if(this.cursor.left.isDown){
           this.player.body.velocity.x = -200;
            this.player.scale.setTo(-1,1);   
        }
    else if(this.cursor.right.isDown){
        this.player.body.velocity.x = 200;
        this.player.scale.setTo(1,1);
    }
      else{
          this.player.body.velocity.x = 0;
          
      } 
  
        if(this.cursor.up.isDown && this.player.body.touching.down){
           this.player.body.velocity.y =  -275;
            
        }
        
        
takeFood: function(player,food){
        food.kill();
},
    
    restart: function(){
        this.game.state.start('gameOver');
        
    }


};