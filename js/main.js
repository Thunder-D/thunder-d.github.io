'use strict';


// Вопросы
var question = 0;


// Клик по кнопке - вызов функции
var buttons = document.querySelectorAll('.question__button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(event) {
		event.preventDefault();
		changeQuestion();
	}
}


// Клик по дизайну
var designs = document.querySelectorAll('.question__design-item');

for (let i = 0; i < designs.length; i++) {
	designs[i].onclick = function(event) {
		event.preventDefault();
		console.log(designs[i].firstChild);
		if (designs[i].firstChild.nextSibling.checked === true)
			designs[i].firstChild.nextSibling.checked = false;
		else
			designs[i].firstChild.nextSibling.checked = true;
	}
}


// Ф-ия слайда
function changeQuestion() {

	switch (question) {
		case 0:
			var banner = document.querySelector('.banner');
			var logo = document.querySelector('.banner__logo');
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			banner.classList.add('banner--questions');
			logo.classList.add('banner__logo--questions');
			questionBlock.classList.add('question--hide');

			setTimeout(function() {
				questionName.innerHTML = 'Do you want some unique<br>original features to be installed?';
				firstButton.innerHTML = 'Yes';
				secondButton.innerHTML = 'No';
			}, 1500);

			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			question++;
			break;
		case 1:
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionDesign = document.querySelector('.question__design');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			setTimeout(function() {
				questionName.innerHTML = 'Choose three designs you are the most into to:';
				questionDesign.style.display = 'block';

				firstButton.innerHTML = 'Ok';
				secondButton.innerHTML = 'No one';
			}, 1500);

			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			question++;
			break;

		case 2:
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionDesign = document.querySelector('.question__design');
			var questionChoise = document.querySelector('.question__choise');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			setTimeout(function() {
				questionName.innerHTML = 'Choose things you want to be mentioned:';
				questionDesign.style.display = 'none';
				questionChoise.style.display = 'block';

				firstButton.innerHTML = 'Ok';
				secondButton.innerHTML = 'No one';
			}, 1500);

			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			question++;
			break;

		case 3:
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionDesign = document.querySelector('.question__design');
			var questionChoise = document.querySelector('.question__choise');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			setTimeout(function() {
				questionName.innerHTML = 'Thank you';
				questionChoise.style.display = 'none';

				firstButton.innerHTML = 'Continue';
				secondButton.innerHTML = 'Bye';
			}, 1500);

			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			question++;
			break;
	}



}


// JSON
/*var question = {
	'Есть ли у Вас корпоративный стиль (лого, стиль, цветовая палитра и т. д.)?'
	'Да'
	'Нет'

	'Нужна ли Вам анимация на сайте?'
	'Да'
	'Нет'

	'Выберите стиль, который больше всего Вам нравится?'
	'1'
	'2'
	'3'
	'4'

	'Что нужно включить?'
	'Контактные данные'
	'Форма заполнения'
	'О нас'
	'Сервисы'
	'Портфолио'
	'Геолокаци'

	'Нужно ли Вам продвижение (SEO)?'
	'Facebook'
	'Google'
	'Instagram'
	'etc.'

	'За какое время Вы хотите сайт?'
	'24 часа'
	'Укажите время'

	'Введите Ваш номер телефона и E-mail (или авторизуйтесь под своей учетной записью)'

};*/
