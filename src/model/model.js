export default class Model {
	constructor(objectObserver, min, max, step) {
    this.obs = objectObserver;
    this.dragStatus = false;
    this.min = min;
    this.max = max;
    this.step = step;
    this.range = (this.max - this.min);
    this.stepCount = this.range / this.step;

   // this.subscribeObEvent();
    console.log(this.dragStatus);
  }

  subscribeObEvent() {
    this.obs.add('click', this.changeDragStatus);
  }

  changeDragStatus() {
    this.dragStatus = true;

    console.log(this.dragStatus);
  }
}