export default class Controller {
  constructor(objectModel, objectView) {
    this.model = objectModel;
    this.view  = objectView;
  }

  initControlSlider() {
    this.view.setStartValue(this.view.thumbOne, this.model.range);
    this._mousedownThumb(this.view.thumbOne);
    this._mousemoveThumb(this.view.thumbOne);
    this._mouseupThumb();

    this.clickOnLine();
  }

  /*---------------------------Функции отвечающие за передвижение ползунка----------------------------*/
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

      this.view.changePositionThumb(thumb, this.positionThumb, this.model.stepCount, this.model.step);
    }
  }

  /*отпускание бегунка*/
  _mouseupThumb() {
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

  clickOnLine() {
    this.view.line.onclick = () => {
      let positionCursor = event.pageX - this.view.line.offsetLeft;

      this.view._setPositionThumb(this.view.thumbOne, positionCursor);
      this.view._setLine(positionCursor, this.model.stepCount, this.model.step);
    }
  }
}


// разработка шага с минимальным и максимальным значением шаг 15
// установить min и max (прим от 0 до 120)
// узнать сколько шагов вместиться в этом диапозоне 120/15
// узнать сколько пискелей будет занимать каждый шаг
