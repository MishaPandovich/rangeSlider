export default class viewSlider {
	constructor(parentElem, statusRange, statusInput, statusVert) {
    this.parentElem = parentElem;
    this.line;
    this.rangeLine;
    this.thumbOne;
    this.thumbTwo;

    this._createSlider(statusRange, statusInput, statusVert);
  }

  _createSlider(statusRange, statusInput, statusVert) {
    this._createLine(statusVert);
    this._createThumb(statusRange);
    this._createInput(statusRange, statusInput);

    this.parentElem.appendChild(this.line);
  }

  _createLine(statusVert) {  
    if (statusVert) {
      this.line = this._createElement('line-vert', 'div');
    } else {
      this.line = this._createElement('line', 'div');
    }
      this.rangeLine = this._createElement('range-line', 'div');
      this.line.appendChild(this.rangeLine);
  }

  _createThumb(statusRange, statusVert) {
    if (statusVert) {
      this.thumbOne = this._createElement('thumb-one-vert', 'div');
      this.line.appendChild(this.thumbOne);
    } else {
      this.thumbOne = this._createElement('thumb-one', 'div');
      this.line.appendChild(this.thumbOne);
    }

    if (statusRange) {
      this.thumbTwo = this._createElement('thumb-two', 'div');
      this.line.appendChild(this.thumbTwo);
    }
  }

  _createInput(statusRange, statusInput) {
    if (statusRange) {
      let labelMin = this._createElement('label-min', 'div');
          labelMin.appendChild(this._createElement('input-min', 'input'));

      let labelMax = this._createElement('label-max', 'div');
          labelMax.appendChild(this._createElement('input-max', 'input'));

      this.parentElem.appendChild(labelMin);
      this.parentElem.appendChild(labelMax);
    } else {
      this.input = this._createElement('input-sl', 'input');
      this.parentElem.appendChild(this.input);
    }
  }

  _createElement(name, creatElem) {
    let elem = document.createElement(creatElem);
        elem.id = this.parentElem.id + '__' + name;
        elem.classList.add(name);

    return elem;
  }
}