export default class Controller {
	constructor(objectModel) {
    this.model = objectModel;
	}

	_down(obj) {
    this.model.dragStatus = true;
    this.shiftX = obj.pageX - obj.offsetLeft;
  } 

  _mousemove(obj) {
    if (!this.model.dragStatus) return false;
    this.positionThumb = obj.pageX - this.shiftX;
    
    obj.thumb.style.left = this.positionThumb + 'px';

    //this.view.moveThumb(thumb, this.positionThumb, this.model.range, this.model.step);
  }

  _mouseup() {
    this.model.dragStatus = false;
  }
}