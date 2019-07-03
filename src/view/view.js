export default class View {
  constructor(parentElem, range, startValue) {
    this.parentElem = parentElem;
    this.line;
    this.rangeLine;
    this.thumbOne;
    this.thumbTwo;
    this.startValue = startValue;

    this.initViewSlider(range);
  }

  initViewSlider(range) {
    this._createLine();
    this._createThumb(range);

    this.parentElem.appendChild(this.line);
  }

  /*---------------------------------Расположение бегунка--------------------------------------------*/
  // range - переназвать
  setStartValue(thumb, range) {
    let position = this.line.offsetWidth / (range / this.startValue);

    this._setPositionThumb(thumb, position);
    this._showValue(this.startValue);
  }

  changePositionThumb(thumb, left, stepCount, step) {
    let stepSize = this.line.offsetWidth / stepCount;
    let position = Math.round(left / stepSize) * stepSize;

    this._setPositionThumb(thumb, position);
    this._calcValue(position, stepSize, step);
  }

  _calcValue(position, stepSize, step) {
    let value = (position / stepSize) * step;
    this._showValue(value);
  }

  _setPositionThumb(thumb, position) {
    if (position > (this.line.offsetWidth - thumb.offsetWidth)) {
      position = (this.line.offsetWidth - thumb.offsetWidth);
    }

    if (position < 0) {
      position = 0;
    }

    thumb.style.left = position + 'px';
  }

  // установка значения при нажатии на линию
  _setLine(position, stepCount, step) {
    let stepSize = this.line.offsetWidth / stepCount;
    let value = Math.round((position / stepSize) * step);

    this._showValue(value);
  }

  _showValue(value) {
    document.getElementsByTagName('p')[0].innerHTML = value;
  }

  /*---------------------------------Создание элементов--------------------------------------------*/
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