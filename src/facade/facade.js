import CreateSlider from '../view/create-slider.js';
import MoveThumb from '../view/move-thumb.js';
import ShowValue from '../view/show-value.js';
import Controller from '../controller/controller.js';
import Model from '../model/model.js';

export default class Facade {
	constructor(parentElement) {
    this.view = new CreateSlider(parentElement);
    this.show = new ShowValue(this.view);
    this.move = new MoveThumb(this.view, this.show);
    this.model = new Model(0, 100);
    this.controller = new Controller(this.model);

    this.thumb = {};
    this._init();
	}

  _init() {
    this._initMoveSlider(this.view.thumbOne);
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

        this.move._moveThumb(thumb, position, this.model.range);
      }
    }

    document.onmouseup = () => {
      this.model.dragStatus = this.controller._up();
    }
  }

  _initClickMouse(line, thumb) {
    line.onclick = () => {
      this.thumb.position = event.pageX;
      this.thumb.lineCoordinate = line.offsetLeft;
      let positionCursor = this.controller._click(this.thumb);

      this.move._moveThumb(thumb, positionCursor, this.model.range);
    }
  }
}