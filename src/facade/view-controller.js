import View from '../view/view.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
	constructor(parentElem, vert, range) {
		this.model      = new Model();
		this.controller = new Controller(this.model);
		this.view       = new View(parentElem, vert, range);

		this.initSlider();
	}

	initSlider() {
		this.downThumb();
		this.mousemoveThumb();
		this.mouseupThumb();
	}

	/*задавть элемент в качестве параметра*/

	downThumb() {
		this.view.thumbOne.onmousedown = () => {
			let obj = {};
      obj.pageX = event.pageX;
      obj.offsetLeft = this.view.thumbOne.offsetLeft;

			this.controller._down(obj);
		}
	}

	mousemoveThumb() {
		document.onmousemove = () => {
			let obj = {};
      obj.pageX = event.pageX;
      obj.thumb = this.view.thumbOne;

      this.controller._mousemove(obj);
		}
	}

	mouseupThumb() {
		document.onmouseup = () => {
			this.controller._mouseup();
		}
	}
}