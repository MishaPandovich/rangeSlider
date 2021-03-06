import Facade from './facade/facade.js';

;(function($) {
  var defaults = {
    min: 0,
    max: 100,
    step: 10,
    startValueThumbOne: 40,
    startValueThumbTwo: 80,
    statusRange: true,
    statusVert: false,
    statusHint: true,
    statusTracker: true
  }

  var methods = {
     init : function(parentElem, config) {
      let options = config;
      const facade = new Facade(parentElem, options);
     },

     update: function(config, parentElem) {
      parentElem.innerHTML = '';
      this.init(parentElem, config);
     }
  };

  $.fn.slider = function(options, method) {

    var config = $.extend({}, defaults, options);
    var parentElem = this[0];

    if (method === undefined) {;
      methods.init(parentElem, config);
    } else {
      methods[method](config, parentElem);
    }

    return this;
  }
})(jQuery);