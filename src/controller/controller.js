export default class Controller {
  constructor(ModelObject, MoveThumbObject, statusVert) {
    this.model = ModelObject;
    this.move  = MoveThumbObject;
    this.statusVert = statusVert;

    this.objectCharacteristics = {
      positionThumb : this.positionThumb,
      range         : this.model.range,
      min           : this.model.min,
      max           : this.model.max,
      step          : this.model.step
    }
  }

  moveThumb(thumb) {
    this._down(thumb);
    this._up();
    this._ondragstart(thumb);
  }

  click(thumb) {
    thumb.parentElement.onclick = () => {
      let positionThumb;

      (this.statusVert) ? positionThumb = event.pageY - thumb.parentElement.offsetTop :
                          positionThumb = event.pageX - thumb.parentElement.offsetLeft;

      this.objectCharacteristics.positionThumb = positionThumb;
      this.move.clickThumb(positionThumb, this.objectCharacteristics);
    }
  }

  _down(thumb) {
    thumb.onmousedown = () => {
      this.model.dragStatus = true;
      (this.statusVert) ? this.shiftY = event.pageY - thumb.offsetTop : 
                          this.shiftX = event.pageX - thumb.offsetLeft;

      this._move(thumb);
    }
  }

  _move(thumb) {
    document.onmousemove = () => {
      if (!this.model.dragStatus) return false;
      
      let positionThumb;
      (this.statusVert) ? positionThumb = event.pageY - this.shiftY:
                          positionThumb = event.pageX - this.shiftX;

      this.objectCharacteristics.positionThumb = positionThumb;
      this.move.moveThumb(thumb, this.objectCharacteristics);
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

  /*constructor(ModelObject, MoveObject) {
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

      //сделать обьект
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
  }*/
}