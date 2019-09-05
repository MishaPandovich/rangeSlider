export default class Controller {
	constructor(objectModel, objectMoveThumb) {
    this.model = objectModel;
    this.view  = objectMoveThumb;
	}

  _down(thumb) {
    /*this.model.dragStatus = true;*/
    this.shiftX = thumb.position - thumb.coordinate;
    console.log(this.shiftX);
  }
}