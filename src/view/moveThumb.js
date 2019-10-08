export default class MoveThumb {
  constructor(objectCreateSlider, objectShowValue, statusVert, statusRange, min, max) {
    this.view = objectCreateSlider;
    this.show = objectShowValue;
    this.statusVert  = statusVert;
    this.statusRange = statusRange;

    this.min = min;
    this.max = max;
  }
 
  startPosition(thumb, range, step, value) {
    let stepSize;

    (this.statusVert) ? stepSize = this.view.line.offsetHeight / range :
                        stepSize = this.view.line.offsetWidth / range;

    let minValue = this._calcMinValue(stepSize);

    (this.statusVert) ? thumb.style.top  = ((stepSize * value) - minValue) + 'px' :
                        thumb.style.left = ((stepSize * value) - minValue) + 'px';

    if (this.min === value) {
       (this.statusVert) ? thumb.style.top  = 0 + 'px':
                           thumb.style.left = 0 + 'px';
    }

    if (this.max === value) {
      let lineEdge;

      (this.statusVert) ? lineEdge = this.view.line.offsetHeight - this.view.thumbOne.offsetHeight:
                          lineEdge = this.view.line.offsetWidth - this.view.thumbOne.offsetWidth;
      (this.statusVert) ? thumb.style.top  = lineEdge + 'px':
                          thumb.style.left = lineEdge + 'px';
    }

    this.show._startShowValue(thumb, value);
    this._changeRangeLine();
  }

  _calcMinValue(stepSize) {
    let minValue;  

    (this.statusVert) ? minValue = (stepSize * this.min) :
                        minValue = (stepSize * this.min);      

    return minValue;                  
  }

  clickThumb(position, obj) {
    let distancefromThumbOne;

    (this.statusVert) ? distancefromThumbOne = position - this.view.thumbOne.offsetTop :
                        distancefromThumbOne = position - this.view.thumbOne.offsetLeft;

    if (!this.statusRange) {
      this.moveThumb(this.view.thumbOne, obj);
    } else {
      let distancefromThumbTwo;
      (this.statusVert) ? distancefromThumbTwo = position - this.view.thumbTwo.offsetTop :
                          distancefromThumbTwo = position - this.view.thumbTwo.offsetLeft;

      this._compareDistance(position, obj, distancefromThumbOne, distancefromThumbTwo);
    }
  }

  moveThumb(thumb, obj) {
    let newPosition = this._calcStep(obj.positionThumb, obj.range, obj.step);

    (this.statusVert) ? thumb.style.top  = newPosition + 'px':
                        thumb.style.left = newPosition + 'px';
    
    if (this.statusRange) { this._mergeThumbs(); }

    this._selectPositionThumbs(thumb, newPosition);
    this.show._showValue(thumb, newPosition, this.stepSize, obj);
    this._changeRangeLine();
  }

  _compareDistance(position, obj, thumbOne, thumbTwo) {
    (Math.abs(thumbOne) < Math.abs(thumbTwo)) ? this.moveThumb(this.view.thumbOne, obj) :
                                                this.moveThumb(this.view.thumbTwo, obj);
    if (thumbOne === thumbTwo) {
      if (thumbOne < 0) {
        this.moveThumb(this.view.thumbOne, obj);
        this._removeClassThumb();
      } else {
        this.moveThumb(this.view.thumbTwo, obj);
        this._removeClassThumb();
      }
    }
  }

  _calcStep(position, range, step) {
    (this.statusVert) ? this.stepSize = (this.view.line.offsetHeight / (range / step)):
                        this.stepSize = (this.view.line.offsetWidth / (range / step)); 
    
    let stepPosition = Math.round(position / this.stepSize) * this.stepSize;

    return stepPosition;
  }

  _selectPositionThumbs(thumb, position) {
    if (!this.statusRange) {
      this._minPos(thumb, position);
      this._maxPos(thumb, position);
    } else {
      if (thumb === this.view.thumbOne) {
          this._minPos(thumb, position);
          this._maxPosThumbOne(thumb, position);
      }

      if (thumb === this.view.thumbTwo) {
          this._minPosThumbTwo(thumb, position);
          this._maxPos(thumb, position);
      }
    }
  }

  _minPos(thumb, position) {
    if (position <= 0) {
       (this.statusVert) ? thumb.style.top  = 0 + 'px':
                           thumb.style.left = 0 + 'px';
    }
  }

  _maxPos(thumb, position) {
    let lineEdge;

    (this.statusVert) ? lineEdge = this.view.line.offsetHeight - this.view.thumbOne.offsetHeight:
                        lineEdge = this.view.line.offsetWidth - this.view.thumbOne.offsetWidth;

    if (position >= lineEdge) {
       (this.statusVert) ? thumb.style.top  = lineEdge + 'px':
                           thumb.style.left = lineEdge + 'px';
    }
  }

  _maxPosThumbOne(thumb, position) {
    let leftEdgeThumbTwo;

    (this.statusVert) ? leftEdgeThumbTwo = this.view.thumbTwo.offsetTop :
                        leftEdgeThumbTwo = this.view.thumbTwo.offsetLeft;

    if (position >= leftEdgeThumbTwo) {
      (this.statusVert) ? thumb.style.top = leftEdgeThumbTwo + 'px':
                          thumb.style.left = leftEdgeThumbTwo + 'px';
    }
  }

  _minPosThumbTwo(thumb, position) {
    let leftEdgeThumbOne;

    (this.statusVert) ? leftEdgeThumbOne = this.view.thumbOne.offsetTop :
                        leftEdgeThumbOne = this.view.thumbOne.offsetLeft;

    if (position <= leftEdgeThumbOne) {
       (this.statusVert) ? thumb.style.top = leftEdgeThumbOne + 'px' :
                           thumb.style.left = leftEdgeThumbOne + 'px';
    }
  }

  _changeRangeLine() {
    let positionRangeLine;

    if (!this.statusRange) {

      (this.statusVert) ? positionRangeLine = parseInt(this.view.thumbOne.style.top) :
                          positionRangeLine = (this.view.line.offsetWidth - this.view.thumbOne.offsetWidth) - parseInt(this.view.thumbOne.style.left);

      (this.statusVert) ? this.view.rangeLine.style.height = positionRangeLine + 'px' :
                          this.view.rangeLine.style.right = positionRangeLine + 'px';
    } else {

      if (this.statusVert) {
        let positionThumbOne = parseInt(this.view.thumbOne.style.top);
        let positionThumbTwo = parseInt(this.view.thumbTwo.style.top);
        let heightRangeLine  = positionThumbTwo - positionThumbOne;

        this.view.rangeLine.style.top = positionThumbOne + 'px';
        this.view.rangeLine.style.height = heightRangeLine + 'px';
      } else {
        positionRangeLine = (this.view.line.offsetWidth - this.view.thumbTwo.offsetWidth) - parseInt(this.view.thumbTwo.style.left);
        this.view.rangeLine.style.left = this.view.thumbOne.style.left;
        this.view.rangeLine.style.right = positionRangeLine + 'px';
      }
    }
  }

  _mergeThumbs() {
    let posThumbOne;
    let posThumbTwo;

    (this.statusVert) ? posThumbOne = parseInt(this.view.thumbOne.style.top) :
                        posThumbOne = parseInt(this.view.thumbOne.style.left);

    (this.statusVert) ? posThumbTwo = parseInt(this.view.thumbTwo.style.top) :
                        posThumbTwo = parseInt(this.view.thumbTwo.style.left);

    if (posThumbOne === posThumbTwo) {
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