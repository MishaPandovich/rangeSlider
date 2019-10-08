import Facade from './facade/facade.js';

;(function($) {
  var defaults = {
    min: 500,
    max: 1000,
    step: 100,
    startValueThumbOne: 510,
    startValueThumbTwo: 680,
    statusRange: true,
    statusVert: false
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