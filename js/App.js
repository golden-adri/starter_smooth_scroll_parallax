'use strict';
import Utils from "./Utils";



var utils = new Utils();
let raf = Utils.Raf();

class App {
	init(){

		this.containerTop = 0;
		this.$container = document.getElementById("wrapper");
		this.transform = Utils.GetSupportedPropertyName('transform');

		//Array with 2 entries : top value of element, and the element
		this.arrayMoves = new Array();

		//Array of Elements wich want to have a parallax
		this.$moves = document.getElementsByClassName("move");

		//Add element to arrayMoves
		for (var i = this.$moves.length - 1; i >= 0; i--) {
			this.arrayMoves.push({top:0,el:this.$moves[i]});
		}


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

		//For into the arrayMoves to change the top value and keep him to have a velocity
		for (var i = this.arrayMoves.length - 1; i >= 0; i--) {
			let y;

			this.arrayMoves[i].top += this.arrayMoves[i].el.getAttribute('data-speed') * 0.1 * (this.scrollTop - this.containerTop);
			y = this.arrayMoves[i].top;

			// console.log(y);
			this.arrayMoves[i].el.style[this.transform] = 'translate3d(0, ' + y + 'px, 0)';

		}

	}
	
}


var app = new App();


window.onload=app.init();
