export default class View {
  constructor(parentElem, range, startValue) {
    // переименовать range в statusRange
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
  
  // 1. передвижен ползунка +
  // 2. установка первоначального значения (если слайдер одиночный) +
  // 3. нажатие на линию +
  // 4. сделать типо демо страницу

  // рефакторинг выходные

  setStartValue(thumb, range) {
    let stepCount = range / this.startValue;
    let stepSize  =  Math.round(this.line.offsetWidth / stepCount); 

    thumb.style.left = stepSize + 'px';
    document.querySelector('.value').textContent = this.startValue;
  }

  moveThumb(thumb, position, range, step) {
    this._setPosThumb(position);

    let left = this._calcStep(position, range, step);
    thumb.style.left = left + 'px';

    this._showValue(left, range);
  }

  _setPosThumb(position) {
    if (position < 0) {
        position = 0; // min
    }

    if (position >= this.line.offsetWidth) {
        position = this.line.offsetWidth;
    } 
  }

  _calcStep(position, range, step) {
    let stepCount = range / step;
    let stepSize  = Math.round(this.line.offsetWidth / stepCount); 

    let roundStepCount = Math.round(range / step); 
    let remainder      = range - (roundStepCount * step);
    let left;

    ((this.line.offsetWidth - position) <= remainder) ? 
    left = this.line.offsetWidth : 
    left = Math.round(position /stepSize) * stepSize;

    if (left >= this.line.offsetWidth) { left = this.line.offsetWidth};

    return left;
  }

  _showValue(left, range) {
    let value = this.line.offsetWidth / range;
    document.querySelector('.value').textContent = Math.round(left / value);
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