import CreateSlider from '../view/createSlider.js';
import MoveThumb from '../view/moveThumb.js';
import ShowValue from '../view/show-value.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
  constructor(parentElement, obj) {
    let options = obj;

    this.view  = new CreateSlider(parentElement, options.statusVert, options.statusRange);
    this.model = new Model(options.min, options.max, options.step);
    this.show  = new ShowValue(this.view, options.statusVert);
    this.move  = new MoveThumb(this.view, this.show, options.statusVert, options.statusRange);
    this.controller = new Controller(this.model, this.move, options.statusVert);

    this._initSlider(options.statusRange);
    this._initStartValues(this.view.thumbOne, options.max, options.min, options.step, options.startValueThumbOne);
    if (options.statusRange) {
     this._initStartValues(this.view.thumbTwo, options.max, options.min, options.step, options.startValueThumbTwo);
    }
  }

  _initStartValues(thumb, max, min, step, startValue) {
    let range = max - min;
    this.move.startPosition(thumb, range, step, startValue);
  }

  _initSlider(statusRange) {
    this.controller.moveThumb(this.view.thumbOne);
    this.controller.click(this.view.thumbOne);


    // надо найти функцию которая делит диапозон нажатия сделать для вертикали
    if (statusRange) {
      this.controller.moveThumb(this.view.thumbTwo);
      this.controller.click(this.view.thumbTwo);
    }
  }

 /* constructor(parentElement, min, max, step, statusRange, statusVert, startValueOne, startValueTwo) {
    this.view = new CreateSlider(parentElement, statusRange, statusVert);
    this.show = new ShowValue(this.view, min, max, step);
    this.model = new Model(min, max, step);
    this.move = new MoveThumb(this.view, this.show, statusRange, this.model.dragStatus);
    this.controller = new Controller(this.model, this.move);

    this._initSlider(statusRange, statusVert);
    //this._checkSettings(statusRange, max, min, step, startValueOne, startValueTwo);
     // вернуть когда поправлю
  }

  _checkSettings(statusRange, max, min, step, startValueOne, startValueTwo) {
    if (statusRange === false) {
      if ((startValueOne >= min) && (startValueOne <= max)) {
        this._startValue(this.view.thumbOne, statusRange, max, min, step, startValueOne);
      } 
    } else {
      if ((startValueOne >= min) && (startValueOne <= startValueTwo)) {
        this._startValue(this.view.thumbOne, statusRange, max, min, step, startValueOne);
      }

      if ((startValueTwo <= max) && (startValueTwo >= startValueOne)) {
        this._startValue(this.view.thumbTwo, statusRange, max, min, step, startValueTwo);
      }
    }
  }

  _startValue(element, statusRange, max, min, step, startValue) {
    let range = max - min;
    this.move._startPosition(element, range, step, startValue);
  }

  _initSlider(statusRange, statusVert) {
    this.controller._down(this.view.thumbOne, statusVert);
    this.controller._ondragstart(this.view.thumbOne);
    //this.controller._click(this.view.line, this.view.thumbOne);
    //вернуть

    if (statusRange) {
      this.controller._down(this.view.thumbTwo, statusVert);
      this.controller._ondragstart(this.view.thumbTwo);
      this.controller._click(this.view.line, this.view.thumbTwo);
    }
  }*/
}