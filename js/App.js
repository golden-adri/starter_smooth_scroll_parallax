'use strict';
import Utils from "./Utils";



var utils = new Utils();
let raf = Utils.Raf();

class App {
	init(){

		this.containerTop = 0;
		this.$container = document.getElementById("wrapper");
		this.transform = Utils.GetSupportedPropertyName('transform');

		//Request Animation Frame to handle scroll
		function reqAF(){
			this.handleScroll();
			raf(reqAF.bind(this));
		}
		raf(reqAF.bind(this));
	}

	handleScroll(){
		let y;
		
		this.scrollTop = Utils.GetScrollTop()
		this.containerTop += .1 * (this.scrollTop - this.containerTop);
		y = -this.containerTop;
		this.$container.style[this.transform] = 'translate3d(0, ' + y + 'px, 0)';


	}
	
}


var app = new App();


window.onload=app.init();
