export default class MoveThumb {
  constructor(objectCreateSlider, objectShowValue) {
    this.view = objectCreateSlider;
    this.show = objectShowValue;
  }

  _moveThumb(element, position, range) {
    if (position <= 0) {
        position = 0;
    }

    if (position >= (this.view.line.offsetWidth - this.view.thumbOne.offsetWidth)) {
        position = (this.view.line.offsetWidth - this.view.thumbOne.offsetWidth);
    }

    element.style.left = position + 'px';
    this.show._showValue(position, range);
  }
}