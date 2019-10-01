import Facade from './facade/facade.js';

;(function($) {
  var defaults = {
    min: 20,
    max: 100,
    step: 10,
    startValueThumbOne: 50,
    startValueThumbTwo: 60,
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
      this.init.call(config, parentElem);

      // проверить работает ли ?
     }
  };

  $.fn.slider = function(options, method) {

    var config = $.extend({}, defaults, options);
    var parentElem = this[0];

    if (method === undefined) {
      //methods.init.call(config, parentElem);
      methods.init(parentElem, config);
    } else {
      methods[method](config, parentElem);
    }

    return this;
  }
})(jQuery);
