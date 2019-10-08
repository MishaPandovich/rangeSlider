import CreateSlider from '../view/createSlider.js';
import MoveThumb from '../view/moveThumb.js';
import ShowValue from '../view/show-value.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
  constructor(parentElement, obj) {
    let options = obj;

    this.view  = new CreateSlider(parentElement, options.statusVert, options.statusRange);
    this.model = new Model(options.min, options.max, options.step, options.statusRange);
    this.show  = new ShowValue(this.view, options.statusVert);
    this.move  = new MoveThumb(this.view, this.show, options.statusVert, options.statusRange, options.min, options.max);
    this.controller = new Controller(this.model, this.move, options.statusVert);

    this._initStart(options.min, options.max, options.step, options.startValueThumbOne, options.startValueThumbTwo, options.statusRange);
  }

  _initStart(min, max, step, startValueOne, startValueTwo, statusRange) {
    let checkSettings    = this.model._checkSettings(min, max, startValueOne, startValueTwo);
    let checkMinMax      = this.model._checkMinMax(min, max);
    let checkStartValues = this.model._checkStartValues(startValueOne, startValueTwo);
    let checkStep        = this.model._checkStep(startValueOne, startValueTwo);

    if (checkSettings && checkMinMax && checkStartValues && checkStep) {
      this._initStartValues(this.view.thumbOne, max, min, step, startValueOne);
      if (statusRange) {
       this._initStartValues(this.view.thumbTwo, max, min, step, startValueTwo);
      }

      this._initSlider(statusRange);
    } else {
      alert('поменяйте параметры слайдера');
    }
  }

  _initStartValues(thumb, max, min, step, startValue) {
    let range = max - min;
    this.move.startPosition(thumb, range, step, startValue);
  }

  _initSlider(statusRange) {
    this.controller.moveThumb(this.view.thumbOne);
    this.controller.click(this.view.thumbOne);

    if (statusRange) {
      this.controller.moveThumb(this.view.thumbTwo);
      this.controller.click(this.view.thumbTwo);
    }
  }
}