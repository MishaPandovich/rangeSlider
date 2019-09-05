export default class Model {
	constructor(objectObserver, min, max, step) {
    this.obs = objectObserver;
    this.dragStatus = false;
    this.min = min;
    this.max = max;
    this.step = step;
    this.range = (this.max - this.min);
    this.stepCount = this.range / this.step;
  }
}