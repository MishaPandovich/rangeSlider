export default class MoveThumb {
  constructor(objectCreateSlider, objectShowValue, statusRange, drag) {
    this.view = objectCreateSlider;
    this.show = objectShowValue;
    this.statusRange = statusRange;

    this.dragStatus = drag;
  }

  _moveThumb(element, position, range, step) {
    let newPosition = this._calcStep(position, range, step);
    this._pop();
    element.style.left = newPosition + 'px';

    this._posElement(element, newPosition);
    this.show._showValue(element, newPosition, this.stepSize);

  }

  _calcStep(position, range, step) {
    this.stepSize = (this.view.line.offsetWidth / (range / step)); 
    let stepPosition = Math.round(position / this.stepSize) * this.stepSize;

    return stepPosition;
  }

  _pop() {
    if (parseInt(this.view.thumbOne.style.left) === parseInt(this.view.thumbTwo.style.left)) {
      this.view.thumbOne.classList.add('slider__thumb-ones');  
    } else {
      this.view.thumbOne.classList.remove('slider__thumb-ones');
    }
  }

  _posElement(element, position) {
    if (this.statusRange) {
      if (element == this.view.thumbOne) {
        this._minPos(element, position);
        this._maxPosThumbOne(element, position);
      }

      if (element == this.view.thumbTwo) {
        this._minPosThumbTwo(element, position);
        this._maxPos(element, position);
      }
    } else {
      this._minPos(element, position);
      this._maxPos(element, position);
    }
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

  _maxPosThumbOne(element, position) {
    if (position >= this.view.thumbTwo.offsetLeft) {
        element.style.left = this.view.thumbTwo.offsetLeft + 'px';
    }
  }

  _minPosThumbTwo(element, position) {
    if (position <= this.view.thumbOne.offsetLeft) {
        element.style.left = this.view.thumbOne.offsetLeft + 'px';

        //this.show._maxShowValue(element);
    }
  }
}