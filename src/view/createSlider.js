export default class CreateSlider {
	constructor(parentElement, statusVert, statusRange, statusHint, statusTracker) {
		this.parentElem = parentElement;
		this.line;
		this.rangeLine;
		this.thumbOne;
		this.hintOne;
		this.thumbTwo;
		this.hintTwo;

		this._initSlider(statusVert, statusRange, statusHint, statusTracker);
	}
	
	_initSlider(statusVert, statusRange, statusHint, statusTracker) {
		this._baseSlider(statusHint, statusTracker);

		if (statusVert)  this.parentElem.classList.add('vert');	
		if (statusRange) this._addThumb(statusHint);

		this.parentElem.appendChild(this.line);
	}

	_baseSlider(statusHint, statusTracker) {
		this.line 		 = this._createElement('div', 'line');
		this.rangeLine = this._createElement('div', 'range-line');
		this.thumbOne  = this._createElement('div', 'thumb-one');
		this.hintOne 	 = this._createElement('div', 'hint-one');

		if (statusHint) 	 { this.thumbOne.appendChild(this.hintOne); }
		if (statusTracker) { this.line.appendChild(this.rangeLine); }
		this.line.appendChild(this.thumbOne);
	}

	_addThumb(statusHint) {
		this.thumbTwo  = this._createElement('div', 'thumb-two');
		this.hintTwo 	 = this._createElement('div', 'hint-two');

		if (statusHint) { this.thumbTwo.appendChild(this.hintTwo); }
		this.line.appendChild(this.thumbTwo);
	}

	_createElement(tag, className) {
    let element = document.createElement(tag);
        element.classList.add('slider__' + className);
        element.id = this.parentElem.id + '__' + className;

    return element;
  }
}