export default class ShowValue {
  constructor(objectCreateSlider) {
    this.view = objectCreateSlider;
  }

  _showValue(position, range) {
    let value = ((this.view.line.offsetWidth - this.view.thumbOne.offsetWidth) / range);

    console.log(Math.round(position/value));
  }
}