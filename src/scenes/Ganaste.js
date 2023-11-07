import Phaser from 'phaser';

export class Ganaste extends Phaser.Scene {
    constructor() {
        super({ key: 'Ganaste' });
    }

    preload() {
   
       

        
    }

    create() {
        //this.add.image(0, 0, 'fondo').setOrigin(0);
        this.add.image(1920/2,1080/3,'ganaste').setOrigin(0.5).setDepth(1).setVisible(true);
        this.add.text(1920/2,1080/2, "Felicitaciones. ¡Sigue jugandoooo! ",{font: '50px Arial Bold', fill: '#2c3e50' }).setOrigin(0.5);
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