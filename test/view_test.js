import {expect} from 'chai'
import jsdom from 'jsdom'
import View from '../src/view/createSlider.js'

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
  it('создание слайдера (с одним бегунком)', () => {
    const view = new View(parentElement)

    expect(document.querySelectorAll('.slider__line').length).to.equal(1)
    expect(document.querySelectorAll('.slider__range-line').length).to.equal(1)
    expect(document.querySelectorAll('.slider__thumb-one').length).to.equal(1)
    expect(document.querySelectorAll('.slider__hint-one').length).to.equal(1)
  })


  it('создание слайдера (с двумя бегунками)', () => {
     const view = new View(parentElement, false, true)

    expect(document.querySelectorAll('.slider__line').length).to.equal(1)
    expect(document.querySelectorAll('.slider__range-line').length).to.equal(1)
    expect(document.querySelectorAll('.slider__thumb-one').length).to.equal(1)
    expect(document.querySelectorAll('.slider__hint-one').length).to.equal(1)
    expect(document.querySelectorAll('.slider__thumb-two').length).to.equal(1)
    expect(document.querySelectorAll('.slider__hint-two').length).to.equal(1)
  })

  it('создание вертикального слайдера (с одним бегунком)', () => {
    const view = new View(parentElement, true, false)

    expect(document.querySelectorAll('.vert .slider__line').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__range-line').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__thumb-one').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__hint-one').length).to.equal(1)
  })

  it('создание вертикального слайдера (с двумя бегунками)', () => {
    const view = new View(parentElement, true, true)

    expect(document.querySelectorAll('.vert .slider__line').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__range-line').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__thumb-one').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__hint-one').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__thumb-two').length).to.equal(1)
    expect(document.querySelectorAll('.vert .slider__hint-two').length).to.equal(1)
  })

  it('проверка метода удаления линии диапозона', () => {
    const view = new View(parentElement, true, false)
    view.noneRangeLine();

    expect(document.querySelector('.slider__range-line').style.display).to.equal('none')
  })

  it('проверка метода удаления линии диапозона', () => {
    const view = new View(parentElement, true, true)
    view.noneHints();

    expect(document.querySelector('.slider__hint-one').style.display).to.equal('none')
    expect(document.querySelector('.slider__hint-two').style.display).to.equal('none')
  })
});
