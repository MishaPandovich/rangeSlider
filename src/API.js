import View from './view/view.js';

;(function($) {
  var defaults = {

  }

  $.fn.slider = function(options) {
    var config = $.extend({}, defaults, options);
    var parentElem = this[0];

    const view = new View(parentElem);

    return this;
  }
})(jQuery);