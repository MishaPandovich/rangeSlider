import View from '../view/create-slider.js';
import ThumbMove from '../view/move-thumb.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
  constructor(parentElem, statusVert, statusRange) {
    this.model       = new Model();
    this.controller  = new Controller(this.model);
    this.view        = new View(parentElem, statusVert, statusRange);
    this.thumbMove   = new ThumbMove(this.view);

    this.statusVert  = statusVert;
    this.statusRange = statusRange;
    this.thumb = {};
    this.init(statusVert);
  }

  init() {
    if (!this.statusRange) {
      this._mousedown(this.view.thumbOne);
      this._mousemove(this.view.thumbOne);
      this._mouseup();
    } else {
      this._mousemoveThumbOne(this.view.thumbOne);
    }
  }

  _mousedown(element) {
    element.onmousedown = () => {
      this.model.dragStatus = true;

      (this.statusVert) ? this.thumb.position = event.pageY : this.thumb.position = event.pageX;
      (this.statusVert) ? this.thumb.coordinate = element.offsetTop : this.thumb.coordinate = element.offsetLeft;

      this.controller._down(this.thumb);
      this._mousemove(element);
    }
  }

  _mousemoves(element) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;

      if (this.statusVert) {
        this.thumb.position = event.pageY;
        this.thumbMove._moveThumbVert(element, this.controller._mouse(this.thumb));
      } else {
        this.thumb.position = event.pageX;
        this.thumbMove._moveThumb(element, this.controller._mouse(this.thumb));
      }
    }
  }  

  _mousemove(element) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;

      if (this.statusVert) {
        this.thumb.position = event.pageY;
        this.thumbMove._moveThumbVert(element, this.controller._mouse(this.thumb));
      } else {
        this.thumb.position = event.pageX;
        this.thumbMove._moveThumb(element, this.controller._mouse(this.thumb));
      }
    }
  }

  _mousemoveThumbOne(element) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;

      this.thumb.position = event.pageX;
      this.thumbMove._moveThumbOne(element, this.controller._mouse(this.thumb));
    }
  }

  _mouseup() {
    document.onmouseup = () => {
      this.model.dragStatus = false;
    }
  }
} 