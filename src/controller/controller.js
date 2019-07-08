export default class Controller {
  constructor(objectModel, objectView) {
    this.model = objectModel;
    this.view  = objectView;
  }

  initControlSlider() {
    //this.view.setStartValue(this.view.thumbOne, this.model.range);
    this._mousedownOnThumb(this.view.thumbOne);
    this._mousemoveOnThumb(this.view.thumbOne);
    this._mouseupOnThumb();

    //this.clickOnLine();
  }

  /*---------------------------Функции отвечающие за передвижение ползунка----------------------------*/
  /*нажатие на бегунок*/
  _mousedownOnThumb(thumb) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;
      this.shiftX = event.pageX - thumb.offsetLeft; 
    }
  }

  /*передвижение бегунка*/
  _mousemoveOnThumb(thumb) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;

      this.positionThumb = event.pageX - this.shiftX;
      this._minPosThumb();
      this._maxPosThumb(thumb);

      this.view.moveThumb(thumb, this.positionThumb, this.model.range, this.model.step);
    }
  }

  /*отпускание бегунка*/
  _mouseupOnThumb() {
    document.onmouseup = () => {
      this.model.dragStatus = false;
    }
  }

  /*----------------------------------Вспомогательные функции-------------------------------------------*/
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

  /*--------нажатие на линию----------*/

  /*clickOnLine() {
    this.view.line.onclick = () => {
      let positionCursor = event.pageX - this.view.line.offsetLeft;

      this.view.changePositionThumb(this.view.thumbOne, positionCursor, this.model.stepCount, this.model.step);
    }
  }*/
}