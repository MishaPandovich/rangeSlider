export default class Demo {
	constructor(objectView, objectModel) {
		this.view  = objectView;
		this.model = objectModel;
		this.startSet();
	}

	startSet() {
		let wrapper = this.view.parentElem.parentElement;
		let input = wrapper.querySelectorAll('input');
		let min = wrapper.querySelector('#min');
		let max = wrapper.querySelector('#max');
		let step = wrapper.querySelector('#step');

		min.setAttribute('value', this.model.min);
		max.setAttribute('value', this.model.max);
		step.setAttribute('value', this.model.step);

		let minValue = this.model.min;

		let obj = {};

		for(var i=0; i<input.length; i++) {
			input[i].onblur = function(minValue) {
				if (this.id === 'min')  { min.setAttribute('value', min.value);};
				if (this.id === 'max')  { max.setAttribute('value', max.value);};
				if (this.id === 'step') { step.setAttribute('value', step.value);};	

				obj.min = min.getAttribute('value');
			  obj.max = max.getAttribute('value'); 
		    obj.step = step.getAttribute('value');

				$('#slider').slider(obj , 'update');
			}
		}
	}
}

// 1. принажатии менять атрибут