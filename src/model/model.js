export default class Model {
	constructor(min, max) {
		this.dragStatus = false;
		this.min = min;
		this.max = max;
		this.range = max - min;
	}
}