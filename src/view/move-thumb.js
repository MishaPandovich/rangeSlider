export default class MoveThumb {
  constructor(objectCreateSlider, objectShowValue, statusRange, drag) {
    this.view = objectCreateSlider;
    this.show = objectShowValue;
    this.statusRange = statusRange;

    this.dragStatus = drag;
  }

  _calcRange(position, range, step) {
    let leftEdgeThumbOne = this.view.thumbOne.offsetLeft;
    let leftEdgeThumbTwo = this.view.thumbTwo.offsetLeft;

    let distancefromThumbOne = position - leftEdgeThumbOne;
    let distancefromThumbTwo = position - leftEdgeThumbTwo;

    this._compareDistance(distancefromThumbOne, distancefromThumbTwo, position, range, step);
  }

  _compareDistance(thumbOne, thumbTwo, position, range, step) {
    if (Math.abs(thumbOne) < Math.abs(thumbTwo)) {
      this._moveThumb(this.view.thumbOne, position, range, step);
    } else {
      this._moveThumb(this.view.thumbTwo, position, range, step);
    }

    if (thumbOne === thumbTwo) {
      if (thumbOne < 0) {
        this._moveThumb(this.view.thumbOne, position, range, step);
        this._removeClassThumb();
      } else {
        this._moveThumb(this.view.thumbTwo, position, range, step);
        this._removeClassThumb();
      }
    }
  }

  _moveThumb(element, position, range, step) {
    let newPosition = this._calcStep(position, range, step);
     
    if (this.statusRange) { this._mergeThumbs(); }
    element.style.left = newPosition + 'px';

    this._posElement(element, newPosition);
    this.show._showValue(element, newPosition, this.stepSize);
  }

  _calcStep(position, range, step) {
    this.stepSize = (this.view.line.offsetWidth / (range / step)); 
    let stepPosition = Math.round(position / this.stepSize) * this.stepSize;

    return stepPosition;
  }

  _posElement(element, position) {
    if (!this.statusRange) {
      this._minPos(element, position);
      this._maxPos(element, position);
    } else {

      if (element === this.view.thumbOne) {
          this._minPos(element, position);
          this._maxPosThumbOne(element, position);
      }

      if (element === this.view.thumbTwo) {
          this._minPosThumbTwo(element, position);
          this._maxPos(element, position);
      }
    }
  }

  _minPos(element, position) {
    if (position <= 0) {
        element.style.left = 0 + 'px';
    }
  }

  _maxPos(element, position) {
    let rightEdge = this.view.line.offsetWidth - this.view.thumbOne.offsetWidth;

    if (position >= rightEdge) {
        element.style.left = rightEdge + 'px';
    }
  }

  _maxPosThumbOne(element, position) {
    let leftEdgeThumbTwo = this.view.thumbTwo.offsetLeft;

    if (position >= leftEdgeThumbTwo) {
        element.style.left = leftEdgeThumbTwo + 'px';
    }
  }

  _minPosThumbTwo(element, position) {
    let leftEdgeThumbOne = this.view.thumbOne.offsetLeft;

    if (position <= leftEdgeThumbOne) {
        element.style.left = leftEdgeThumbOne + 'px';
    }
  }

  _mergeThumbs() {
    let posLeftThumbOne = parseInt(this.view.thumbOne.style.left);
    let posLEftThumbTwo = parseInt(this.view.thumbTwo.style.left);

    if (posLeftThumbOne === posLEftThumbTwo) {
        this._addClassThumb();
    } else {
        this._removeClassThumb();
    }
  }

  _addClassThumb() {
    this.view.thumbOne.classList.add('slider__thumbs-merge');
  }

  _removeClassThumb() {
    this.view.thumbOne.classList.remove('slider__thumbs-merge');
  }
}