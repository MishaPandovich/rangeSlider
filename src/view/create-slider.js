export default class CreateSlider {
	constructor(parentElem) {
    this.parentElem = parentElem;
    this.line;
    this.thumbOne;

    this._createSlider();
  }

  _createSlider() {
    this.line = this._createElement('div', 'line');
    this.rangeLine = this._createElement('div', 'range-line');
    this.thumbOne = this._createElement('div', 'thumb-one');
    this.thumbTwo = this._createElement('div', 'thumb-two');

    this.line.appendChild(this.rangeLine);
    this.line.appendChild(this.thumbOne);
    this.line.appendChild(this.thumbTwo);
    this.parentElem.appendChild(this.line);
  }

  _createElement(tag, className) {
    let element = document.createElement(tag);
        element.classList.add('slider__' + className);
        element.id = this.parentElem.id + '__' + className;

    return element;
  }
}