export default class View {
  constructor(parentElem, statusVert, statusRange, objectObserver) {
    let self = this;
    this.obs = objectObserver;
    this.parentElem = parentElem;
    this.line;
    this.thumbOne;
    this.thumbTwo;
    this.hintOne;
    this.hintTwo;

    this._createSlider(statusVert, statusRange);

    var sef = this;
    //this._calcThumb(this.thumbOne, sef);
  }

  /*_initSlider(obj) {
    this.obs.notify('click', obj);
  }*/

  /*_calcThumb(elemen, sef) {
    elemen.addEventListener('click', function() {
        let obj = {
        hi: 20
      }

      obj.pageX = event.pageX;
      obj.offsetLeft = elemen.offsetLeft;
      
    sef.obs.notify('click', obj);
    });*/


   /* elemen.addEventListener('mousemove', function() {
        let obj = {
        hi: 20
      }

      obj.pageX = event.pageX;
      obj.offsetLeft = elemen.offsetLeft;

    console.log(this);

    sef.obs.notify('move', obj);
    });*/
  //}

  _createSlider(statusVert, statusRange) {
    if (statusVert) this.parentElem.classList.add('vert');
    this._createLine();
    this._createThumb(statusRange);
    this._createInput(statusRange);
    this.parentElem.appendChild(this.line);
  }

  _createLine(statusVert) {
    this.line = this._createElement('line', 'div');
    let rangeLine = this._createElement('range-line', 'div');

    this.line.appendChild(rangeLine);
  }

  _createThumb(statusRange) {
    this.thumbOne = this._createElement('thumb-one', 'div');
    this.line.appendChild(this.thumbOne);

    if (statusRange) {
      this.thumbTwo = this._createElement('thumb-two', 'div');
      this.line.appendChild(this.thumbTwo);
    }
  }

  _createInput(statusRange) {
    let wrapperHintOne = this._createElement('wrap-hint--one', 'div');
    this.hintOne = this._createElement('hint-one', 'input');

    wrapperHintOne.appendChild(this.hintOne);
    this.thumbOne.appendChild(wrapperHintOne);

    if (statusRange) {
      let wrapperHintTwo = this._createElement('wrap-hint--two', 'div');
      this.hintTwo = this._createElement('hint-two', 'input');

      wrapperHintTwo.appendChild(this.hintTwo);
      this.thumbTwo.appendChild(wrapperHintTwo);
    }
  }

  _createElement(nameElem, tagElem) {
    let elem = document.createElement(tagElem);
        elem.id = this.parentElem.id + '__' + nameElem;
        elem.classList.add('slider__' + nameElem);

    return elem;
  }
}