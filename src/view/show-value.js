export default class ShowValue {
  constructor(objectCreateSlider, statusVert) {
    this.view = objectCreateSlider;
    this.statusVert = statusVert;
  }

  _startShowValue(thumb, value) {
    thumb.children[0].innerText = value;
  }

  _showValue(thumb, position, stepSize, sliderCharacteristics) {
    (this.statusVert) ? this.valueResult = sliderCharacteristics.min + Math.round((parseInt(thumb.style.top) / stepSize) * sliderCharacteristics.step) :
                        this.valueResult = sliderCharacteristics.min + Math.round((parseInt(thumb.style.left) / stepSize) * sliderCharacteristics.step);

    this._minShowValue(thumb, sliderCharacteristics);
    this._maxShowValue(thumb, sliderCharacteristics);

    thumb.children[0].innerText = this.valueResult;
    this._changePositionHints(thumb);
  }

  _minShowValue(thumb, sliderCharacteristics) {
    let thumbCoordinateLeft;
    let lineCoordinateLeft;

    (this.statusVert) ? thumbCoordinateLeft = thumb.getBoundingClientRect().top :
                        thumbCoordinateLeft = thumb.getBoundingClientRect().left;

    (this.statusVert) ? lineCoordinateLeft  = this.view.line.getBoundingClientRect().top :
                        lineCoordinateLeft  = this.view.line.getBoundingClientRect().left;

    if (thumbCoordinateLeft === lineCoordinateLeft) {
        this.valueResult = sliderCharacteristics.min;
    }
  }

  _maxShowValue(thumb, sliderCharacteristics) {
    let thumbCoordinateRight;
    let lineCoordinateRight;

    (this.statusVert) ? thumbCoordinateRight = thumb.getBoundingClientRect().bottom :
                        thumbCoordinateRight = thumb.getBoundingClientRect().right;

    (this.statusVert) ? lineCoordinateRight  = this.view.line.getBoundingClientRect().bottom :
                        lineCoordinateRight  = this.view.line.getBoundingClientRect().right;

    if (thumbCoordinateRight === lineCoordinateRight) {
        this.valueResult = sliderCharacteristics.max;
    }
  }

  _changePositionHints(thumb) {
    if (thumb.children[0].innerText <= 10000) {
       (this.statusVert) ? thumb.children[0].style.left = 24 + 'px':
                           thumb.children[0].style.left = -7 + 'px';
    }

    if (thumb.children[0].innerText >= 10000) {
       (this.statusVert) ? thumb.children[0].style.left = 24 + 'px':
                           thumb.children[0].style.left = -12 + 'px';
    }

    if (thumb.children[0].innerText >= 100000) {
       (this.statusVert) ? thumb.children[0].style.left = 24 + 'px':
                           thumb.children[0].style.left = -15 + 'px';
    }

    if (thumb.children[0].innerText >= 1000000) {
       (this.statusVert) ? thumb.children[0].style.left = 24 + 'px':
                           thumb.children[0].style.left = -20 + 'px';
    }

    if (thumb.children[0].innerText >= 10000000) {
        (this.statusVert) ? thumb.children[0].style.left = 24 + 'px':
                           thumb.children[0].style.left = -25 + 'px';
    }
  }
}