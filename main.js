import './style.css';
import Phaser from 'phaser';
import {Bienvenida} from './src/scenes/Bienvenida';
import {Inicio} from './src/scenes/Inicio'
import {Ganaste} from './src/scenes/Ganaste'
import { Perdiste } from './src/scenes/Perdiste';

const config={
	width:1920,//ancho
	height:1080,//alto
  scene:[Bienvenida, Inicio, Ganaste, Perdiste],
	scale: { // para establecer responsive
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent:"container" // es el contenedor id creado en el html
	},
	backgroundColor:"#9b59b6",//color de fondo
	type:Phaser.AUTO,// permite detectar la mejor opción entre renderizado en Canvas o WebGL

	physics:{
		default:'arcade',//se utiliza para especificar el motor de física
		arcade:{
			gravity:{y:0},
			gravitx:{x:0},
			debug:false
			}
		}    
	}
let game = new Phaser.Game(config) // se instancia el objeto game
