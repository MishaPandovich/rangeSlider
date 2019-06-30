import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

;(function($) {
  var defaults = {
    text: 'hi'
  }

  var methods = {
     init : function(parentElem) {
      // this.text)
      const view = new View(parentElem, this.text);
      const model = new Model();
      const controller = new Controller(view, model);
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