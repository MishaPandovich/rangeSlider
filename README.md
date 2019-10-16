# Range Slider
jQuery плагин, реализующий слайдер

## Клонирование репозитория
```console
git clone https://github.com/MishaPandovich/rangeSlider.git
```
## Сборка проекта
```console
- cd rangeSlider
- npm i
- npm run build
```
## Запуск тестов
```console
npm run test
```
## Использование слайдера
```console
1.создайте в файле index.html div с нужным вам id
	пример:
	./dist/index.html
	<div id="slider"></div>
	и обьявите его в файле index.js следующим образом ./src/indеx.js		
	$(function() {
	  $('#slider').slider();
	});

2.указать свои параметры 
	$(function() {
	  $('#slider').slider(min : 0, max: 100, step: 10, startValueThumbOne: 40, startValueThumbTwo: 80, statusRange: false,
	  statusVert: false, statusHint: true, statusTracker: false);
	});

3.чтобы, привязать бегунок к инпуту необходимо в файле index.html
	создать <input type="text" id="result-thumb-one" class="result-thumb result-thumb-one" placeholder="min">
 	если слайдер диапозонный, то <input type="text" id="result-thumb-two" class="result-thumb result-thumb-two" placeholder="max">
```
## API
### Характеристики
| Название | Значение по умолчанию | Тип данных | Описание |
| --- |--- | --- | --- |
| min | 0 | number | Минимальное значение слайдера |
| max | 100 | number | Максимальное значение слайдера |
| step | 10 | number | Шаг слайдера |
| startValueThumbOne | 40 | number | Стартовое значение 1-го бегунка |
| startValueThumbTwo | 80 | number | Стартовое значение 2-го бегунка |
| range | true | boolean | Если true, у слайдера будет два ползунка |
| statusVert | false | boolean | Если true, слайдер будет вертикальным |
| statusHint | true | boolean | Если true, над ползунками будет показано их текущее значение |
| statusTracker | true | boolean | Если true, будет показан трекер |

## Архитектура приложения
Приложение построено по принципу MVC(Model-View-Controller), ниже представленно описание частей кода и их взаимодействие между собой:

### Модель
Самая независимая часть кода, ничего не знает про вид и контроллер. Содержит основные характеристики слайдера и проверяет входные данные на правильность.В коде представлен в виде класса **Model(min, max, step, statusRange, startValueOne, startValueTwo)**.

Модель содержит следующие методы:
- **_checkSettings(min, max, startValueOne, startValueTwo)** \
метод делает проверку того, чтобы стартовые значения не были больше или меньше чем минимум или максимум.

- **_checkMinMax(min, max)** \
метод делает проверку того, чтобы минимум не был больше максимума.

- **_checkStartValues(startValueOne, startValueTwo)** \
метод делает проверку того, чтобы 1-ое стартовое значения не было больше 2-го.

### Вид
Отвечает за отрисовку слайдера и работу с DOM-объектами. Разделен на три части. Ниже представлено описание каждой части.

#### createSlider
отвечает за создание DOM-объектов слайдера. 
В коде представлен в виде класса **createSlider(parentElement, statusVert, statusRange, statusHint, statusTracker)**.

содержит следующие методы:
- **_initSlider(statusVert, statusRange, statusHint, statusTracker)** \
инициализирует отрисовку слайдера в зависисмости от параметров

- **_baseSlider(statusHint, statusTracker)** \
создает базовый сайдер с одним бегунком

- **_addThumb(statusHint)** \
отрисовывает второй бегунок, если слайдер диапозонный

- **_createElement(tag, className)** \
метод создания элементов

#### moveThumb
отвечает за передвижение бегунков слайдера. 
В коде представлен в виде класса **moveThumb(objectCreateSlider, objectShowValue, statusVert, statusRange, min, max)**.

- **startPosition(thumb, range, step, value)** \
устанавливает стартовые позиции бегунков слайдера

- **clickThumb(position, obj)** \
устанавливает позицию бегунка на место клика мыши

- **moveThumb(thumb, obj)** \
отвечает за передвижение бегунка

- **_compareDistance(position, obj, thumbOne, thumbTwo)** \
сравнивает расстояние между местом на которое было нажато мышкой и бегунками. Тот бегунок у которого дистанция с кликом была меньше и будет передвигаться.

- **_calcStep(position, range, step)** \
расчитывает позицию бегунка с учетом шага

- **_selectPositionThumbs(thumb, position)** \
устанавливает максимум и минимум для каждого бегунка с учетом параметра statusRange

- **_minPos(thumb, position)** \
минимальная позиция бегунка

- **_maxPos(thumb, position)** \
максимальная позиция бегунка

- **_maxPosThumbOne(thumb, position)** \
максимальная позиция для 1-го бегунка если statusRange = true

- **_maxPosThumbTwo(thumb, position)** \
минимальная позиция для 2-го бегунка если statusRange = true

- **_changeRangeLine()** \
изменяет отрисовку трэкера в зависимости от statusRange

- **_mergeThumbs()** \
изменяет стили 1-го бегунка (добавл. класс 'slider__thumbs-merge'), когда они имеют одинаковые координаты, для того, чтобы второй бегунок не перекрывал первый

#### show-value
отвечает за тображение результатов бегунка. 
В коде представлен в виде класса **showValue(objectCreateSlider, statusVert)**.

- **_startShowValue(thumb, value)** \
показывает стартовые значения бегунков

- **_showValue(thumb, position, stepSize, sliderCharacteristics)** \
показывает значения бегунков

- **_calcRest(value, sliderCharacteristics)** \
вспомогательная функция, которая помогает округлить результат


- **_showValueInput(thumb, value)** \
показывает значения в input

- **_minShowValue(thumb, sliderCharacteristics)** \
показывает минимальное значение, когда бегунок достигает миним позиции

- **__maxShowValue(thumb, sliderCharacteristics)** \
показывает максимальное значение, когда бегунок достигает макс позиции

- **_changePositionHints(thumb)** \
изменяет позицию хинта(подсказки) в зависимости от его содержимого

### Контроллер
Отвечает за передвижение бегунка, взаимодействует с видом. 
В коде представлен в виде класса **Controller(ModelObject, MoveThumbObject, statusVert)**.

- **click(thumb)** \
находит координаты места нажатия мыши

- **_down(thumb)** \
находит координаты места нажатия мыши

- **_move(thumb)** \
находит координаты во время перетаскивания бегунка

- **_up()** \
отключает перетаскивание бегунка

- **_ondragstart(thumb)** \
отключает стандартный dragstart

### Фасад
Передает данные из API классам и связывает их друг с другом 

- **_initStart(min, max, step, startValueOne, startValueTwo, statusRange)** \
выполняет проверку входных данных и если все хорошо, то инициализирует слайдер 

- **_initStartValues(thumb, max, min, step, startValue)** \
передает стартовые значения

- **_initSlider(statusRange)** \
навешивает обработчики бегункам

### Диаграмма классов
<div align="center">
  <img width="1024" height="640" src="assets/Diagramm.png">
</div>
