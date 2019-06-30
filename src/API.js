import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';

;(function($) {
  var defaults = {

  }

  $.fn.slider = function(options) {
    var config = $.extend({}, defaults, options);
    var parentElem = this[0];

    const view = new View(parentElem);
    const model = new Model();
    const controller = new Controller(view, model);

    return this;
  }
})(jQuery);