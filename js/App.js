'use strict';
import Utils from "./Utils";



var utils = new Utils();

class App {
	init(){

		console.log('ready');

		//launch RAF
		requestAnimationFrame(this.raf());
	}
	raf(){
		requestAnimationFrame(this.raf());
	}
}


var app = new App();


window.onload=app.init();
