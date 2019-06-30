export default class Controller {
  constructor(objectView, objectModel) {
    this.model = objectModel;
    this.view  = objectView;

    this.initControlSlider();
  }

  initControlSlider() {
    this._mousedownThumb(this.view.thumbOne);
    this._mousemoveThumb(this.view.thumbOne);
    this._mouseupThumb();
  }

  /*нажатие на бегунок*/
  _mousedownThumb(thumb) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;
      this.shiftX = event.pageX - thumb.offsetLeft; 
    }
  }

  /*передвижение бегунка*/
  _mousemoveThumb(thumb) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;

      this.positionThumb = event.pageX - this.shiftX;
      this._minPosThumb();
      this._maxPosThumb(thumb);

      this.view.changePositionThumb(thumb, this.positionThumb);
    }
  }

  /*отпускание бегунка*/
  _mouseupThumb() {
    document.onmouseup = () => {
      this.model.dragStatus = false;
    }
  }

  /*----------------------------------Вспомогательные функции--------------------------------------------*/
  _minPosThumb() {
    if (this.positionThumb < 0) {
        this.positionThumb = 0;
    }
  }

  _maxPosThumb(thumb) {
    if (this.positionThumb > (thumb.parentElement.offsetWidth - thumb.offsetWidth)) {
        this.positionThumb = (thumb.parentElement.offsetWidth - thumb.offsetWidth);
    }
  }
}