import CreateSlider from '../view/create-slider.js';
import MoveThumb from '../view/move-thumb.js';
import ShowValue from '../view/show-value.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
	constructor(parentElement, min, max, step, statusRange, startValueOne, startValueTwo) {
    this.view = new CreateSlider(parentElement, statusRange);
    this.show = new ShowValue(this.view, min, max, step);
    this.model = new Model(min, max, step);
    this.move = new MoveThumb(this.view, this.show, statusRange, this.model.dragStatus);
    this.controller = new Controller(this.model, this.move);

    this._initSlider(statusRange);
    this._startValue(statusRange, max, min, step, startValueOne, startValueTwo);
	}

  _startValue(statusRange, max, min, step, startValueOne, startValueTwo) {
    let range = max - min;
    this.move._startPosition(this.view.thumbOne, range, step, startValueOne);
    
    if (statusRange) {
      this.move._startPosition(this.view.thumbTwo, range, step, startValueTwo);
    }
  }

  _initSlider(statusRange) {
    this.controller._down(this.view.thumbOne);
    this.controller._ondragstart(this.view.thumbOne);
    this.controller._click(this.view.line, this.view.thumbOne);

    if (statusRange) {
      this.controller._down(this.view.thumbTwo);
      this.controller._ondragstart(this.view.thumbTwo);
      this.controller._click(this.view.line, this.view.thumbTwo);
    }
  }
}