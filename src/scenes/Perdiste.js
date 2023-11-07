import Phaser from 'phaser';

export class Perdiste extends Phaser.Scene {
    constructor() {
        super({ key: 'Perdiste' });
    }

    preload() {
   
       

        
    }

    create() {
        //this.add.image(0, 0, 'fondo').setOrigin(0);
        this.add.text(1920/2,1080/2, "Perdiste en el juego. ¡Inténtalo de nuevo!",{font: '50px Arial Bold', fill: '#2c3e50' }).setOrigin(0.5);
        this.add.image(1920/2,1080/3,'perdiste').setOrigin(0.5).setDepth(1).setVisible(true);
        
        this.playButton = this.add.image(600,1080/1.5, 'play').setOrigin(0.5).setScale(0.5);
        this.playButton.setInteractive();
        this.playButton.on('pointerdown',()=>{
            this.scene.start('Inicio');
        })

        this.stopButton = this.add.image(1300,1080/1.5, 'salir').setOrigin(0.5).setScale(0.5);
        this.stopButton.setInteractive();
        this.stopButton.on('pointerdown',()=>{
            window.close(); // Cierra la ventana del navegador
        })

    }

    update() {
        // Aquí puedes actualizar el estado del juego
    }
}