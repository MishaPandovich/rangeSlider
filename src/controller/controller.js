export default class Controller {
  constructor(ModelObject, MoveObject) {
    this.model = ModelObject;
    this.move = MoveObject;
  }

  _down(thumb) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;
      this.shiftX = event.pageX - thumb.offsetLeft;

      this._move(thumb);
      this._up(thumb);
    }
  }

  _move(thumb) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;
      this.positionThumb = event.pageX - this.shiftX;

      this.move._moveThumb(thumb, this.positionThumb, this.model.range, this.model.step);

    }
  }

  _up() {
    document.onmouseup = () => {
      this.model.dragStatus = false;
    }
  } 

// переписать
  _click(line, thumb) {
    line.onclick = () => {

      let positionCursor = event.pageX - line.offsetLeft;

      if (positionCursor < parseInt(document.querySelector('.slider__thumb-one').style.left)) {
        this.move._moveThumb(document.querySelector('.slider__thumb-one'), positionCursor, this.model.range, this.model.step);
      }

      if (positionCursor > parseInt(document.querySelector('.slider__thumb-one').style.left)) {
        this.move._moveThumb(document.querySelector('.slider__thumb-two'), positionCursor, this.model.range, this.model.step);
      }

      //console.log(thumb);
      //this.move._moveThumb(thumb, positionCursor, this.model.range, this.model.step);


      /*делать расчет вокруг элемента, если меньшн расстояние между мышкой и бегунком, то это и выбирать*/
    }
  }
}