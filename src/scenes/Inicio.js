import Phaser from 'phaser';

export class Inicio extends Phaser.Scene {
    constructor() {
        super({ key: 'Inicio' });
       
      
    }
  

   
    create() {
        this.w=this.game.config.width/2;
        this.h=this.game.config.height/2;
        this.velocidad=300;
        this.add.image(0, 0, 'fondo2').setOrigin(0);
        //player
        this.player=this.physics.add.image(1920/2, 1080/2, 'player');
        this.player.setOrigin(0.5);
        this.player.setScale(0.5);
        this.player.setCollideWorldBounds(true);
        this.player.puntos=8;
        this.player.vidas=2;
        this.cursors = this.input.keyboard.createCursorKeys(); // se le asigna el objeto

            // texto y puntuaxion
        this.add.text(this.w/2,20, "Realizado por Ar Sistema",{font: '25px Arial Bold', fill: '#fff' }).setOrigin(0.5);
        this.textoPuntos = this.add.text(50,35, "Puntos: "+this.player.puntos,{ font: '25px Arial Bold', fill: '#fff' });
        this.textoVidas  = this.add.text(1700,35, "Vidas: "+this.player.vidas,{ font: '25px Arial Bold', fill: '#fff' });


        //enemigos
        this.enemigo1=this.physics.add.image(2000,Phaser.Math.Between(50,900), 'ene01').setScale(0.3);
        this.enemigo1.body.immovable = true;
        this.enemigo1.body.allowGravity = false;

        this.enemigo2=this.physics.add.image(2000,Phaser.Math.Between(50,900), 'ene02').setScale(0.4);
        this.enemigo2.body.immovable = true;
        this.enemigo2.body.allowGravity = false;

        this.enemigo3=this.physics.add.image(2000,Phaser.Math.Between(50,900), 'ene02').setScale(0.5);
        this.enemigo3.body.immovable = true;
        this.enemigo3.body.allowGravity = false;

        this.enemigo4=this.physics.add.image(2000,Phaser.Math.Between(50,900), 'ene02').setScale(0.2);
        this.enemigo4.body.immovable = true;
        this.enemigo4.body.allowGravity = false;


            //premios
        this.time.addEvent({
            delay:3000,
            loop:true,
            callback:()=>{
   
                this.premio=this.physics.add.image(Phaser.Math.Between(50,1800),Phaser.Math.Between(50,900), 'premio').setScale(0.5)
                this.premio.body.immovable = true;
                this.premio.body.allowGravity = false;
                this.physics.add.overlap(this.player, this.premio, this.sumarPuntos, null, this);

            } 
        })
        //colisiones
        this.physics.add.collider(this.player, this.enemigo1, this.restaVidas, null, this)
        this.physics.add.collider(this.player, this.enemigo2, this.restaVidas, null, this)
        this.physics.add.collider(this.player, this.enemigo3, this.restaVidas, null, this)
        this.physics.add.collider(this.player, this.enemigo4, this.restaVidas, null, this)

        //sonidos
        this.sonFondo        = this.sound.add('sonFondo');
        this.sonFondo.loop   = true;
        this.sonFondo.play()
        this.sonGolpeado     = this.sound.add('sonGolpeado');
        this.sonSumaPuntos   = this.sound.add('sonSumaPuntos');
    }

    update() {
            //movimientos player
    if (this.cursors.left.isDown) {
        this.player.setFlip(false)
        this.player.setVelocityX(-this.velocidad);
        this.player.setTint(0xffffff);
    } else if (this.cursors.right.isDown) {
        this.player.setFlip(true)
        this.player.setVelocityX(this.velocidad);
        this.player.setTint(0xffffff);
    } else if (this.cursors.up.isDown) {
        this.player.setVelocityY(-this.velocidad);
        this.player.setTint(0xffffff);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(this.velocidad);
        this.player.setTint(0xffffff);
    } else {
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
    }

// movimiento de enemigos
    //enemigo1
    if(this.enemigo1.x>0){
        this.enemigo1.setVelocityX(-400)
    }else{
        this.enemigo1.setActive(true);
        this.enemigo1.x=2000
        this.enemigo1.y=Phaser.Math.Between(50,900)
    }
    //enemigo2
    if(this.enemigo2.x>0){
        this.enemigo2.setVelocityX(-500)
    }else{
        this.enemigo2.setActive(true);
        this.enemigo2.x=2000
        this.enemigo2.y=Phaser.Math.Between(50,900)
    }
     //enemigo3
    if(this.enemigo3.x>0){
        this.enemigo3.setVelocityX(-600)
    }else{
        this.enemigo3.setActive(true);
        this.enemigo3.x=2000
        this.enemigo3.y=Phaser.Math.Between(50,900)
    }
     //enemigo4
    if(this.enemigo4.x>0){
        this.enemigo4.setVelocityX(-700)
    }else{
        this.enemigo4.setActive(true);
        this.enemigo4.x=2000
        this.enemigo4.y=Phaser.Math.Between(50,900)
    }
    }
    

    // funciones creadas
    sumarPuntos(player,premio){
        if(premio.active){
            this.sonSumaPuntos.play();
            premio.setActive(false);
            premio.setVisible(false);
            premio.destroy();
            player.puntos++;
            this.velocidad=this.velocidad+25;
            this.textoPuntos.setText("Puntos: "+player.puntos)
        }
        if(player.puntos>=10){
            this.sonFondo.stop();
            this.scene.start('Ganaste'); 
        } 

    }
    restaVidas(player, enemigo){

        player.y=this.player.y+20
        player.setTint(0xff0000);
        if(enemigo.active){
            this.sonGolpeado.play();
            enemigo.setActive(false);
            player.vidas--;
            this.textoVidas.setText("Vidas: "+this.player.vidas)
        }
        if(player.vidas<=0){
            this.sonFondo.stop();
            this.scene.start('Perdiste'); 
            
        } 
    }

}