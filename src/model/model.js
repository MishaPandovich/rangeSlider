export default class Model {
	constructor(min, max, step, statusRange, startValueOne, startValueTwo) {
		this.dragStatus = false;
		this.min = min;
		this.max = max;
		this.range = max - min;
		this.step = step;
		this.statusRange = statusRange;
	}

	_checkSettings(min, max, startValueOne, startValueTwo) {
		if (this.statusRange == false) {
		  if ((startValueOne >= min) && (startValueOne <= max)) {	
		  	return true; 
		  } else {
		  	return false;
		  }
		} else {
			if (((startValueOne >= min) && (startValueOne <= max)) && ((startValueTwo >= min) && (startValueTwo <= max))) { 
				return true; 
			} else {
				return false;
			}
		}
	}

	_checkMinMax(min, max) {
		if (min < max) {
			return true;
		} else {
			return false;
		}
	}

	_checkStartValues(startValueOne, startValueTwo) {
		if (startValueOne < startValueTwo) {
			return true;
		} else {
			return false;
		}
	}
}