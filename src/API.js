import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';
import Demo from './view/demo.js'; // можно удалить
import ViewSlider from './view/view-horizontal.js';

;(function($) {
  var defaults = {
    min: 0,
    max: 130, // если разница с шагом меньше 10 не доходит до конца 666
    step: 60,
    startValue: 50,
    statusRange: true,
    input: true,
    statusVert: false
  }

  var methods = {
     init : function(parentElem) {

      const view = new View(parentElem, this.statusVert, this.statusRange);
      //const viewSldier = new ViewSlider(parentElem, this.range, this.input, this.statusVert);

      //const model = new Model(this.min, this.max, this.step);
      //const view = new View(parentElem, this.range, this.startValue);
      //const controller = new Controller(model, view);
      //const demo = new Demo(view, model); // можно удалить

      //controller.initControlSlider();
     },

     update: function(config, parentElem) {
      parentElem.innerHTML = '';
      this.init.call(config, parentElem);
     }
  };

  $.fn.slider = function(options, method) {

    var config = $.extend({}, defaults, options);
    var parentElem = this[0];

    if (method === undefined) {
      methods.init.call(config, parentElem);
    } else {
      methods[method](config, parentElem);
    }

    return this;
  }
})(jQuery);
