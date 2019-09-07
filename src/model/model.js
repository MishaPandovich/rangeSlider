export default class Model {
	constructor(min, max, step) {
		this.dragStatus = false;
		this.min = min;
		this.max = max;
		this.range = max - min;
		this.step = step;
	}
}