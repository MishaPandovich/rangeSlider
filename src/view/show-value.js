export default class ShowValue {
  constructor(objectCreateSlider, min, max, step) {
    this.view = objectCreateSlider;

    this.min = min;
    this.max = max;
    this.step = step;
    this.valueResult;
  }

  _showValue(element, position, stepSize) {
    this.valueResult = this.min +  Math.round((parseInt(element.style.left) / stepSize) * this.step);

    this._minShowValue(element, this.valueResult);
    this._maxShowValue(this.view.thumbTwo, this.valueResult);

    this._maxShowValueThumb(element, this.valueResult);
    this._showRangeLine(element, this.valueResult);

    document.querySelector('.show').innerText = this.valueResult;
  }

  _minShowValue(element, value) {
    this.thumbCoordinateLeft = element.getBoundingClientRect().left;
    this.lineCoordinateLeft = this.view.line.getBoundingClientRect().left;

    if (this.thumbCoordinateLeft === this.lineCoordinateLeft) {
        this.valueResult = this.min;
    }
  }

  _maxShowValue(element, value) {
    this.thumbCoordinateRight = element.getBoundingClientRect().right;
    this.lineCoordinateRight = this.view.line.getBoundingClientRect().right;

    if (this.thumbCoordinateRight === this.lineCoordinateRight) {
      this.valueResult = this.max;
    }
  }


  _maxShowValueThumb(element, value) {

    if (parseInt(element.style.left) === parseInt(this.view.thumbTwo.style.left)) {
      this.valueResult = value;
    }

    /// тут надо просчитать значение на данном этапе и дальше его не пускать
  }

  _showRangeLine(element) {
    let positionRangeLine = (this.view.line.offsetWidth - element.offsetWidth) - parseInt(element.style.left);
    this.view.rangeLine.style.right = positionRangeLine + 'px';
  }
}