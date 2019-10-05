import Facade from './facade/facade.js';

;(function($) {
  var defaults = {
    min: 0,
    max: 100,
    step: 10,
    startValueThumbOne: 20,
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
      //this.init.call(config, parentElem);

      this.init(parentElem, config);
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

/*;(function($) {
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
      const model      = new Model();
      const controller = new Controller(model);
      const view       = new View(parentElem, this.statusVert, this.statusRange);
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
})(jQuery);*/