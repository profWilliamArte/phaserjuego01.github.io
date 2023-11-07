import Phaser from 'phaser';

export class Bienvenida extends Phaser.Scene {
    constructor() {
        super({ key: 'Bienvenido' });
    }

    preload() {
   
        console.log("hola desde preload de Bienvenido")
        //fondo
		this.load.image('fondo', 'fondos/fondo1.jpg'); 
        // botonde play
        this.load.image('play', 'img/play.png');
        this.load.image('salir', 'img/salir2.png');
        this.load.image('fondo2', 'fondos/fondo2.jpg'); 
  
        //ganaste y perdiste
        this.load.image('perdiste', 'img/gameover.png');
        this.load.image('ganaste', 'img/ganaste.png');
    
        //player
        this.load.image('player', 'player/pla001.png'); 

        //enemigos
        this.load.image('ene01', 'enemigos/enemigo1.png');  
        this.load.image('ene02', 'enemigos/enemigo2.png');
        this.load.image('ene03', 'enemigos/enemigo3.png');
        this.load.image('ene04', 'enemigos/enemigo4.png');
         //premios
        this.load.image('premio', 'premios/estrella4.png');

        // sonidos
        this.load.audio('sonFondo','sonidos/bgmusic.mp3');
        this.load.audio('sonGolpeado','sonidos/5082.mp3');
        this.load.audio('sonSumaPuntos','sonidos/creandoasteroide.mp3');


        
    }

    create() {
        this.add.image(0, 0, 'fondo').setOrigin(0);
        this.add.text(1920/2,1080/2, "Bienvenido mi Primer Juego",{font: '50px Arial Bold', fill: '#2c3e50' }).setOrigin(0.5);
        this.playButton = this.add.image(1920/2,1080/1.5, 'play').setOrigin(0.5).setScale(0.5);
        this.playButton.setInteractive();
        this.playButton.on('pointerdown',()=>{
            this.scene.start('Inicio');
        })

    }

    update() {
        // Aquí puedes actualizar el estado del juego
    }
}