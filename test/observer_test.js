import {expect} from 'chai'
import Model from '../src/model/model.js'
let assert = require('chai').assert

// можно попробовать проверить отрисуется два иили нет слайда

describe('Проверка входных данных перед отрисовкой', () => {
  it('pop', function() {
    let model = new Model()

    let pop = model._checkMinMax(10, 0);

    expect(pop).to.equal(false)
  });
})


// describe('Тестирование функции наблюдателя', () => {
//   it('cоздаем пустой объект и проверяем его содержимое', () => {
//     let observer = new Observer()
//     assert.isObject(observer.events, 'events it is object')
//     assert.deepEqual(observer.events, {})
//   })

//   it('добавление функции', () => {
//     let observer = new Observer()
//     observer.add('click', clickThumb)
//     observer.add('click', clickLine)
//     observer.add('mouse', mouseThumb)

//     expect(observer.events['click'][0]).to.equal(clickThumb)
//     expect(observer.events['click'][1]).to.equal(clickLine)
//     expect(observer.events['mouse'][0]).to.equal(mouseThumb)
//   })

//   it('удаление функции', () => {
//     let observer = new Observer()

//     observer.add('click', clickThumb)
//     observer.add('click', clickLine)
//     observer.add('mouse', mouseThumb)

//     observer.remove('click', clickLine)

//     expect(observer.events['click'][0]).to.equal(clickThumb)
//     expect(observer.events['click'][1]).to.equal(undefined)
//     expect(observer.events['mouse'][0]).to.equal(mouseThumb)
//   })
// })