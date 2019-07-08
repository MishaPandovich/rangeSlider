import {expect} from 'chai'
import jsdom from 'jsdom'
import View from '../src/view/view.js'

const {JSDOM} = jsdom
const dom = new JSDOM('<html><body><div id="slider"></div></body></html>')

global.window = dom.window
global.document = dom.window.document

let parentElement;

beforeEach(() => { 
  parentElement = document.querySelector('#slider') 
})

afterEach(() => {
  parentElement.innerHTML = ''
})

describe('Тестирование отрисовки DOM-элементов в html-документе', () => {
  it('создание стандартного слайдера (с одним бегунком)', () => {
    const view = new View(parentElement)

    expect(document.querySelectorAll('.line').length).to.equal(1)
    expect(document.querySelectorAll('.line > .range-line').length).to.equal(1)
    expect(document.querySelectorAll('.line > .thumb-one').length).to.equal(1)
  })

  it('создание диапозонного слайдера (с двумя бегунками)' , () => {
    const view = new View(parentElement, true)

    expect(document.querySelectorAll('.line').length).to.equal(1)
    expect(document.querySelectorAll('.line > .range-line').length).to.equal(1)
    expect(document.querySelectorAll('.line > .thumb-one').length).to.equal(1)
    expect(document.querySelectorAll('.line > .thumb-two').length).to.equal(1)
  })
})

// проверка типов введенных знаяении и если что то не правильно должна обрабптываться ошибка


import Model from '../src/model/model.js'
import Controller from '../src/controller/controller.js'

// при положении слайдера на таком то расстоянии отоображение должно быть столько то

//если позиция равна 32.5 то это 15

/*describe('Тестирование контроллера', () => {
  it('Нажатие линии', () => {
    const model = new Model(0, 120, 15)
    const view = new View(parentElement, false, 15)
    const controller = new Controller();

    document.querySelector('.line').click()

    expect(controller.positionCursor).to.equal('hi')
  })
});*/