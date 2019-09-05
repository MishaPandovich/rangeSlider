/*import View from './view/create-slider.js';
import Controller from './controller/controller.js';
import Model from './model/model.js';*/

import Facade from './facade/viewXcontroller.js';

;(function($) {
  var defaults = {
    min: 0,
    max: 130, // если разница с шагом меньше 10 не доходит до конца 666
    step: 60,
    startValue: 50,
    statusRange: false,
    statusVert: false
  }

  var methods = {
     init : function(parentElem) {
      const facade = new Facade(parentElem, this.statusVert, this.statusRange);
      /*const model      = new Model();
      const controller = new Controller(model);
      const view       = new View(parentElem, this.statusVert, this.statusRange);*/
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
