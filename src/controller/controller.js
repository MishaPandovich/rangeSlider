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

  _ondragstart(thumb) {
    thumb.ondragstart = () => {
      return false;
    }
  }

  _click(line, thumb) {
    line.onclick = () => {
      let positionCursor = event.pageX - line.offsetLeft;

      this.move._calcRange(positionCursor, this.model.range, this.model.step);
    }
  }
}