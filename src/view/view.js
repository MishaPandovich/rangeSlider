export default class View {
  constructor(parentElem, statusVert, statusRange) {
    this.parentElem = parentElem;
    this.line;
    this.thumbOne;

    this._createSlider(statusVert, statusRange);
  }

// подумать над реализоцией кнопок над бегунками 
// можно обойтись псевдо элементами
// или надо создавать новые элементы

  _createSlider(statusVert, statusRange) {
    this._createLine(statusVert);
    this._createThumb(statusVert, statusRange);

    this.parentElem.appendChild(this.line);
  }

  _createLine(statusVert) {
    this.line     = this._createElement('line', 'div', statusVert);
    let rangeLine = this._createElement('range-line', 'div', statusVert);

    this.line.appendChild(rangeLine);
  }

  _createThumb(statusVert, statusRange) {
    if (!statusRange) {
      this.thumbOne = this._createElement('thumb-one', 'div', statusVert);
      this.line.appendChild(this.thumbOne);
    } else {
      this.thumbOne = this._createElement('thumb-one', 'div', statusVert);
      this.thumbTwo = this._createElement('thumb-two', 'div', statusVert);
      this.line.appendChild(this.thumbOne);
      this.line.appendChild(this.thumbTwo);
    }
  }

  _createElement(nameElem, tagElem, statusVert) {
    let elem = document.createElement(tagElem);
        elem.id = this.parentElem.id + '__' + nameElem;

    (statusVert) ? elem.classList.add(this.parentElem.id + '__' + nameElem + '--vert')
                 : elem.classList.add(this.parentElem.id + '__' + nameElem);

    return elem;
  }
}