export default class MoveThumb {
  constructor(objectCreateSlider, objectShowValue) {
    this.view = objectCreateSlider;
    this.show = objectShowValue;

    /// добавить здесь данные по шагам и миним
  }

  _moveThumb(element, position, range, step) {
    let newPosition = this._calcStep(position, range, step);
    element.style.left = newPosition + 'px';

    this._minPos(element, newPosition);
    this._maxPos(element, newPosition);

    this.show._showValue(newPosition, this.stepSize);
  }

  _calcStep(position, range, step) {
    this.stepSize = (this.view.line.offsetWidth / (range / step)); 
    let stepPosition = Math.round(position / this.stepSize) * this.stepSize;

    return stepPosition;
  }

  _minPos(element, position) {
    if (position <= 0) {
        element.style.left = 0 + 'px';
    }
  }

  _maxPos(element, position) {
    if (position >= (this.view.line.offsetWidth - this.view.thumbOne.offsetWidth)) {
        element.style.left = (this.view.line.offsetWidth - this.view.thumbOne.offsetWidth) + 'px';
    }
  }
}