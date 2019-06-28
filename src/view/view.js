export default class View {
  constructor(parentElem, range) {
    this.parentElem = parentElem;
    this.line;
    this.rangeLine;
    this.thumbOne;
    this.thumbTwo;

    this.initSlider(range);
  }

  initSlider(range) {
    this._createLine();
    this._createThumb(range);

    this.parentElem.appendChild(this.line);
  }

  _createLine() {    
    this.line = this._createElement('line');
    this.rangeLine = this._createElement('range-line');

    this.line.appendChild(this.rangeLine);
  }

  _createThumb(range) {
    this.thumbOne = this._createElement('thumb-one');
    this.line.appendChild(this.thumbOne);

    if (range) {
      this.thumbTwo = this._createElement('thumb-two');
      this.line.appendChild(this.thumbTwo);
    }
  }

  _createElement(name) {
    let elem = document.createElement('div');
        elem.id = this.parentElem.id + '__' + name;
        elem.classList.add(name);

    return elem;
  }
}

// если слайдер диапозонный, то надо раситывать и left и rigth