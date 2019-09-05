export default class moveThumb {
	constructor(objectView) {
    this.view = objectView;
  }

  _moveThumb(element, position) {
    element.style.left = position + 'px';
    this._minPosThumb(element, position);
    this._maxPosThumb(element, position);
  }

  _moveThumbVert(element, position) {
    element.style.top = position + 'px';
    this._minPosThumbVert(element, position);
    this._maxPosThumbVert(element, position);
  }

  _moveThumbOne(element, position) {  
    console.log(position);
  }



  _minPosThumb(element, position) {
    if (position <= 0) {
      element.style.left = 0 + 'px';
    }
  }

  _maxPosThumb(element, position) {
    if (position >= (this.view.line.offsetWidth - element.offsetWidth)) {
      element.style.left = (this.view.line.offsetWidth - element.offsetWidth) + 'px';
    }
  }

  _minPosThumbVert(element, position) {
    if (position <= 0) {
      element.style.top = 0 + 'px';
    }
  }

  _maxPosThumbVert(element, position) {
    if (position >= (this.view.line.offsetHeight - element.offsetHeight)) {
      element.style.top = (this.view.line.offsetHeight - element.offsetHeight) + 'px';
    }
  }
} 