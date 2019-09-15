import CreateSlider from '../view/create-slider.js';
import MoveThumb from '../view/move-thumb.js';
import ShowValue from '../view/show-value.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
	constructor(parentElement, min, max, step, statusRange) {
    this.view = new CreateSlider(parentElement);
    this.show = new ShowValue(this.view, min, max, step);
    this.model = new Model(min, max, step);
    this.move = new MoveThumb(this.view, this.show, statusRange, this.model.dragStatus);
    this.controller = new Controller(this.model, this.move);

    this._initSlider(statusRange);
    this.view.thumbTwo.style.left = 31 + 'px';
	}

  _initSlider(statusRange) {
    this.controller._down(this.view.thumbOne);
    this.controller._click(this.view.line, this.view.thumbOne);

    if (statusRange) {
      this.controller._down(this.view.thumbTwo);
      this.controller._click(this.view.line, this.view.thumbTwo);
    }
  }

 /* _init() {
    this._initMoveSlider(this.view.thumbOne);
    this._initMoveSliderTwo(this.view.thumbTwo);
    this._initClickMouse(this.view.line, this.view.thumbOne);
  }

  _initMoveSlider(thumb) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;

      this.thumb.position = event.pageX;
      this.thumb.coordinate = thumb.offsetLeft;
      this.controller._down(this.thumb);

      document.onmousemove = () => {
        if (!this.model.dragStatus) return false;

        this.thumb.position = event.pageX;
        let position = this.controller._move(this.thumb);

        this.move._moveThumb(thumb, position, this.model.range, this.model.step);
      }

      document.onmouseup = () => {
        this.model.dragStatus = this.controller._up();
      }
    };

    thumb.ondragstart = function() {
      return false;
    };
  }

  _initMoveSliderTwo(thumb) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;

      this.thumbTwo.position = event.pageX;
      this.thumbTwo.coordinate = thumb.offsetLeft;
      this.controller._down(this.thumbTwo);

      console.log('sdf');

      document.onmousemove = () => {
        if (!this.model.dragStatus) return false;

        this.thumbTwo.position = event.pageX;
        let position = this.controller._move(this.thumbTwo);

        this.move._moveThumb(thumb, position, this.model.range, this.model.step);
      }

      document.onmouseup = () => {
        this.model.dragStatus = this.controller._up();
      }
    };

    thumb.ondragstart = function() {
      return false;
    };
  }

  _initClickMouse(line, thumb) {
    line.onclick = () => {
      this.thumb.position = event.pageX;
      this.thumb.lineCoordinate = line.offsetLeft;
      let positionCursor = this.controller._click(this.thumb);

      this.move._moveThumb(thumb, positionCursor, this.model.range, this.model.step);
    }
  }*/
}