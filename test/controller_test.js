import {expect} from 'chai'
import Observer from '../src/observer/observer.js'
import Controller from '../src/controller/controller.js'

let assert = require('chai').assert

describe('Тестирование контроллера', () => {
	it('проверка подписывания контроллера на события', () => {
		let obs = new Observer();
		let controller = new Controller(obs);

		expect(obs.events['click'][0]).to.equal(controller.clickThumn)
	})
});