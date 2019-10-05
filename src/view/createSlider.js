export default class CreateSlider {
	constructor(parentElement, statusVert, statusRange) {
		this.parentElem = parentElement;
		this.line;
		this.rangeLine;
		this.thumbOne;
		this.hintOne;
		this.thumbTwo;
		this.hintTwo;

		this._initSlider(statusVert, statusRange);
	}
	
	noneRangeLine() {
		this.rangeLine.style.display = "none";
	}

	noneHints() {
		this.hintOne.style.display = "none";
		this.hintTwo.style.display = "none";
	}

	_initSlider(statusVert, statusRange) {
		this._baseSlider();

		if (statusVert)  this.parentElem.classList.add('vert');	
		if (statusRange) this._addThumb();

		this.parentElem.appendChild(this.line);
	}

	_baseSlider() {
		this.line 		 = this._createElement('div', 'line');
		this.rangeLine = this._createElement('div', 'range-line');
		this.thumbOne  = this._createElement('div', 'thumb-one');
		this.hintOne 	 = this._createElement('div', 'hint-one');

		this.thumbOne.appendChild(this.hintOne);
		this.line.appendChild(this.rangeLine);
		this.line.appendChild(this.thumbOne);
	}

	_addThumb() {
		this.thumbTwo  = this._createElement('div', 'thumb-two');
		this.hintTwo 	 = this._createElement('div', 'hint-two');

		this.thumbTwo.appendChild(this.hintTwo);
		this.line.appendChild(this.thumbTwo);
	}

	_createElement(tag, className) {
    let element = document.createElement(tag);
        element.classList.add('slider__' + className);
        element.id = this.parentElem.id + '__' + className;

    return element;
  }
}