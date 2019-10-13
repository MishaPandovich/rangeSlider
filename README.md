Range Slider
=====================
jQuery плагин, реализующий слайдер

Клонирование репозитория
-----------------------------------
`git clone https://github.com/MishaPandovich/rangeSlider.git`

Сборка проекта
-----------------------------------
`*cd rangeSlider
 *npm i
 *npm run build`

Запуск тестов
-----------------------------------
`npm run test`

Использование слайдера
-----------------------------------
`1. создайте в файле index.html div с нужным вам id
	  пример:
	  
	  ./dist/index.html
		```html
		<div id="slider"></div>
		``` 
		и обьявите его в файле index.js следующим образом ./src/indеx.js		
		$(function() {
		  $('#slider').slider();
		});

	2. указать свои параметры 
	$(function() {
		  $('#slider').slider(
		  min : 300,
			max: 1000,
	    step: 10,
	    startValueThumbOne: 510,
	    startValueThumbTwo: 680,
	    statusRange: false,
	    statusVert: false,
	    statusHint: true,
    	statusTracker: false);
		});

	3. чтобы, привязать бегунок к инпуту необходимо в файле index.html
		 создать <input type="text" id="result-thumb-one" class="result-thumb result-thumb-one" placeholder="min">

		 если слайдер диапозонный, то и
   	 <input type="text" id="result-thumb-two" class="result-thumb result-thumb-two" placeholder="max">
`