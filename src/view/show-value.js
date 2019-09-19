export default class ShowValue {
  constructor(objectCreateSlider, min, max, step) {
    this.view = objectCreateSlider;

    this.min = min;
    this.max = max;
    this.step = step;
    this.valueResult;
  }

  _startShowValue(value) {
    document.querySelector('.slider__pin-one').innerText = value;
  }

  _showValue(element, position, stepSize) {
    this.valueResult = this.min +  Math.round((parseInt(element.style.left) / stepSize) * this.step);

    this._minShowValue(element, this.valueResult);
    this._maxShowValue(element, this.valueResult);
    this._chanchePin();


    if (element === this.view.thumbOne) {
      document.querySelector('.slider__pin-one').innerText = this.valueResult;
    }

    if (element === this.view.thumbTwo) {
      document.querySelector('.slider__pin-two').innerText = this.valueResult;
    }

    // подсказка
    let rangePin = document.querySelector('.slider__pin-two').getBoundingClientRect().left - document.querySelector('.slider__pin-one').getBoundingClientRect().right;
    if ((rangePin === 0) || (rangePin < 5)) {
      document.querySelector('.slider__pin-one').innerText = document.querySelector('.slider__pin-one').innerText + document.querySelector('.slider__pin-two').innerText;
    }
  }

  _minShowValue(element, value) {
    this.thumbCoordinateLeft = element.getBoundingClientRect().left;
    this.lineCoordinateLeft = this.view.line.getBoundingClientRect().left;

    if (this.thumbCoordinateLeft === this.lineCoordinateLeft) {
        this.valueResult = 0;
    }
  }

  _maxShowValue(element, value) {
    this.thumbCoordinateRight = element.getBoundingClientRect().right;
    this.lineCoordinateRight = this.view.line.getBoundingClientRect().right;

    if (this.thumbCoordinateRight === this.lineCoordinateRight) {
      this.valueResult = this.max;
    }
  }

  _chanchePin() {
     if (document.querySelector('.slider__pin-one').innerText >= 1000) {
        document.querySelector('.slider__pin-one').classList.add('big-width');
     } else {
        document.querySelector('.slider__pin-one').classList.remove('big-width');
     }
  }
}