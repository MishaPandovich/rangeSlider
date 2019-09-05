import CreateSlider from '../view/create-slider.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';
import MoveThumb from '../view/move-thumb.js';

export default class Facade {
	constructor(parentElem, vert, range) {
		this.model        = new Model();
		this.view 		  = new CreateSlider(parentElem, vert, range);
		this.moveThumb    = new MoveThumb(this.view);
		this.controller   = new Controller(this.model, this.moveThumb);

		this.dataThumb = {}; // характеристики ползунка

		this.initSlider(vert, range);
	}

	initSlider(statusVert, statusRange) {
		/*this.downThumb(vert);
		this.mousemoveThumb(vert);
		this.mouseupThumb(vert);*/

		/*this.downVertThumb();
		this.mouseVertThumb();
		this.mouseupThumb();*/

		this.downThumb(statusVert, statusRange);
		this.mousemoveThumb(statusVert, statusRange);
	}


	// делаем вертикаль с одним бегунком

	downThumb(statusVert, statusRange) {
		/*this.view.thumbOne.onmousedown = () => {
			(statusVert) ? this.dataThumb.position = event.pageY : this.dataThumb.position = event.pageX;
			(statusVert) ? this.dataThumb.coordinate = this.view.thumbOne.offsetTop : this.dataThumb.coordinate = this.view.thumbOne.offsetWidth;
			this.controller._down(this.dataThumb);
		}*/

		this.element(this.view.thumbOne, statusVert, statusRange);
		this.element(this.view.thumbTwo, statusVert, statusRange);
	}

	element(element, statusVert, statusRange) {
		element.onmousedown = () => {
			(statusVert) ? this.dataThumb.position = event.pageY : this.dataThumb.position = event.pageX;
			(statusVert) ? this.dataThumb.coordinate = this.view.thumbOne.offsetTop : this.dataThumb.coordinate = this.view.thumbOne.offsetWidth;
			this.controller._down(this.dataThumb);
		}
	}

	mousemoveThumb(statusVert, statusRange) {
		document.onmousemove = () => {
			(statusVert) ? this.dataThumb.position = event.pageY : 
										 this.dataThumb.position = event.pageX;

      if (statusVert) {
      	this.moveThumb._moveVertThumb(this.controller._mousemove(this.dataThumb));
      	this.moveThumb._moveVertThumbBottom(this.controller._mousemove(this.dataThumb));
      }
      // тут на одну
			/*(statusVert) ? this.moveThumb._moveVertThumb(this.controller._mousemove(this.dataThumb)) : 
										 this.moveThumb._moveThumb(this.controller._mousemove(this.dataThumb));*/
		}
	}




	downVertThumb() {
		this.view.thumbOne.onmousedown = () => {
			this.dataThumb.pageY = event.pageY;
			this.dataThumb.offsetTop = this.view.thumbOne.offsetTop;

			this.controller.downVert(this.dataThumb);
		}
	}

	mouseVertThumb() {
		document.onmousemove = () => {
			this.dataThumb.pageY = event.pageY;  
      this.dataThumb.elem = this.view.thumbOne;

      this.controller.mouseVert(this.dataThumb);
		}
	}

	/*downThumb(vert) {
		this.view.thumbOne.onmousedown = () => {
			if (vert === true) {
				this.dataThumb.page = event.pageY;
			} else {
				this.dataThumb.page = event.pageX;
			}
      this.dataThumb.offsetLeft = this.view.thumbOne.offsetLeft;
     
			this.controller._down(this.dataThumb);
		}
	}

	mousemoveThumb(vert) {
		document.onmousemove = () => {
			if (vert ==true) {
				this.dataThumb.page = event.pageY;
			} else {
				this.dataThumb.page = event.pageX;
			}
      
      this.dataThumb.elem = this.view.thumbOne;
      if (vert === true) {
      	this.controller._mousemoveVert(this.dataThumb);
      } else {
      	this.controller._mousemove(this.dataThumb);
      }
		}
	}

	mouseupThumb() {
		document.onmouseup = () => {
			this.controller._mouseup();
		}
	}*/

	mouseupThumb() {
		document.onmouseup = () => {
			this.controller._mouseup();
		}
	}
}