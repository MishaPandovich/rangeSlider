export default class CreateSlider {
	constructor(parentElem, statusRange) {
    this.parentElem = parentElem;
    this._createSlider(statusRange);
  }

  _createSlider(statusRange) {
    this.line = this._createElement('div', 'line');
    this.rangeLine = this._createElement('div', 'range-line');
    this.thumbOne = this._createElement('div', 'thumb-one');
    this.pinOne = this._createElement('div', 'pin-one');

    this.line.appendChild(this.rangeLine);
    this.line.appendChild(this.thumbOne);
    this.thumbOne.appendChild(this.pinOne);

    if (statusRange) {
      this.thumbTwo = this._createElement('div', 'thumb-two');
      this.line.appendChild(this.thumbTwo);
      this.pinTwo = this._createElement('div', 'pin-two');
      this.thumbTwo.appendChild(this.pinTwo);
    }

    this.parentElem.appendChild(this.line);
  }

  _createElement(tag, className) {
    let element = document.createElement(tag);
        element.classList.add('slider__' + className);
        element.id = this.parentElem.id + '__' + className;

    return element;
  }
}