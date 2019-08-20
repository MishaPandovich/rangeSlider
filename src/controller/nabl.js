import Model from '../model/model.js';

export default class OddLogger {
	constructor() {
		this.model = new Model();
		this.element;
	}

    update(element) {
    	this.element = element;
    	this._mousedownOnThumb();
    }

    _mousedownOnThumb() {
    	this.model.dragStatus = false;
    	this.shiftX = event.pageX - this.element.offsetLeft;

    	console.log(this.shiftX);
    }

    _mousemoveOnThumb() {
    	if (!this.model.dragStatus) return false;

    	this.positionThumb = event.pageX - this.shiftX;

    	console.log(this.positionThumb);
    }
}