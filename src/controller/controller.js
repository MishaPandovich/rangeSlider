export default class Controller {
  constructor(ModelObject, MoveObject) {
    this.model = ModelObject;
    this.move = MoveObject;
  }

  _down(thumb, statusVert) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;
      if (statusVert) {
        this.shiftY = event.pageY - thumb.offsetTop;
      } else {
        this.shiftX = event.pageX - thumb.offsetLeft;
      }

      this._move(thumb, statusVert);
      this._up(thumb);
    }
  }

  _move(thumb, statusVert) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;
      
      if (statusVert) {
        this.positionThumb = event.pageY - this.shiftY;
      } else {
        this.positionThumb = event.pageX - this.shiftX;
      }

      this.move._moveThumb(thumb, this.positionThumb, this.model.range, this.model.step, statusVert);
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