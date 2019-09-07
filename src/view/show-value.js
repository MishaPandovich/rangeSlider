export default class ShowValue {
  constructor(objectCreateSlider, min, max, step) {
    this.view = objectCreateSlider;

    this.min = min;
    this.max = max;
    this.step = step;
    this.valueResult;
  }

  _showValue(position, stepSize) {
    this.valueResult = this.min +  Math.round((position / stepSize) * this.step);

    this._minShowValue(this.valueResult);
    this._maxShowValue(this.valueResult);

    document.querySelector('.show').innerText = this.valueResult;
  }

  _minShowValue(value) {
    this.thumbCoordinateLeft = this.view.thumbOne.getBoundingClientRect().left;
    this.lineCoordinateLeft = this.view.line.getBoundingClientRect().left;

    if (this.thumbCoordinateLeft === this.lineCoordinateLeft) {
        this.valueResult = this.min;
    }
  }

  _maxShowValue(value) {
    this.thumbCoordinateRight = this.view.thumbOne.getBoundingClientRect().right;
    this.lineCoordinateRight = this.view.line.getBoundingClientRect().right;

    if (this.thumbCoordinateRight === this.lineCoordinateRight) {
      this.valueResult = this.max;
    }
  }
}