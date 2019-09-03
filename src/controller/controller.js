export default class Controller {
  constructor(objectModel, objectMoveThumb) {
    this.model = objectModel;
    this.view  = objectMoveThumb;
  }

  _down(thumb) {
    this.shift = thumb.position - thumb.coordinate;
  }

  _mouse(thumb) {
    return thumb.position - this.shift;
  }
}