export default class Controller {
  constructor() {
  }

  _down(thumb) {
    this.shiftX = thumb.position - thumb.coordinate;
  }

  _move(thumb) {
    this.positionThumb = thumb.position - this.shiftX;
    return this.positionThumb;
  }

  _up() {
    return false;
  } 

  _click(thumb) {
    return thumb.position - thumb.lineCoordinate;
  }
}