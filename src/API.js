import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

;(function($) {
  var defaults = {
    min: 0,
    max: 120, 
    step: 15,
    startValue: 30,
    range: false
  }

  var methods = {
     init : function(parentElem) {
      const model = new Model(this.min, this.max, this.step);
      const view = new View(parentElem, this.range, this.startValue);
      const controller = new Controller(model, view);

      controller.initControlSlider();
     },

     update: function(config, parentElem) {
      parentElem.innerHTML = '';
      this.init.call(config, parentElem);
     }
  };

  $.fn.slider = function(method, options) {
    var config = $.extend({}, defaults, options);
    var parentElem = this[0];

    if ( methods[method] ) {
      return methods[method](config, parentElem);
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.call(config, parentElem);
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.slider' );
    } 

    return this;
  }
})(jQuery);