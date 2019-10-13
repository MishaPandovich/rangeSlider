import {expect} from 'chai'
import Model from '../src/model/model.js'
let assert = require('chai').assert

describe('Проверка входных данных перед отрисовкой', () => {
  it('проверка мин и макс', () => {
    let model = new Model()

    let checkMinMax = model._checkMinMax(10, 0)

    expect(checkMinMax).to.equal(false)
  })

  it('проверка стартовых значении thumb, мин и макс', () => {
    let model = new Model()

    let trueCheckSettings = model._checkSettings(0, 100, 10, 80)
    let falseCheckSettings = model._checkSettings(20, 10, 100, 80)

    expect(trueCheckSettings).to.equal(true)
    expect(falseCheckSettings).to.equal(false)
  })

  it('проверка стартовых значении thumb', () => {
    let model = new Model()

    let checkStartValues = model._checkStartValues(10, 100)
    let falseCheckStartValues = model._checkStartValues(1000, 100)

    expect(checkStartValues).to.equal(true)
    expect(falseCheckStartValues).to.equal(false)
  })
})
