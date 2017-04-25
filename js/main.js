'use strict';


// Порядковый номер вопроса и ветка
var questionCounter = 0;
var questionBranch  = 0;


// Клик по кнопке - переход к следующему вопросу
var buttons = document.querySelectorAll('.question__button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(event) {
		event.preventDefault();
		changeQuestion(i);
	}
}


// Функция смена вопроса
function changeQuestion(num) {

	// Если это самый первый вопрос - выбираем ветку и сужаем шапку
	if (questionCounter === 0) {

		// Ветка
		questionBranch = num;

		// Сужение шапки
		var banner = document.querySelector('.banner');
		var logo = document.querySelector('.banner__logo');
		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		banner.classList.add('banner--questions');
		logo.classList.add('banner__logo--questions');
		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'Do you have a corporate style<br>(logo, style, color palette etc)?';
			firstButton.innerHTML = 'Yes';
			secondButton.innerHTML = 'No';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	// Если второй вопрос - смена вопроса
	} else if (questionCounter === 1) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'Do you wish to animate<br>your website?';
			firstButton.innerHTML = 'Yes';
			secondButton.innerHTML = 'No';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	} else if (questionCounter === 2)  {

		if (questionBranch === 0) {
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionDesign = document.querySelector('.question__design');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			// Смена вопроса и кнопок
			setTimeout(function() {
				questionName.innerHTML = 'Choose style you are the most attracted to:';
				questionDesign.style.display = 'block';
				firstButton.innerHTML = 'Ok';
				secondButton.innerHTML = 'Skip';
			}, 1500);

			// Показ вопроса
			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			questionCounter++;
		} else {
			// var questionBlock = document.querySelector('.question');
			// var questionName = document.querySelector('.question__name');
			// var firstButton = buttons[0];
			// var secondButton = buttons[1];
			//
			// questionBlock.classList.add('question--hide');
			//
			// // Смена вопроса и кнопок
			// setTimeout(function() {
			// 	questionName.innerHTML = 'Do you wish to animate<br>your website?';
			// 	firstButton.innerHTML = 'Yes';
			// 	secondButton.innerHTML = 'No';
			// }, 1500);
			//
			// // Показ вопроса
			// setTimeout(function() {
			// 	questionBlock.classList.remove('question--hide');
			// }, 1600);
			//
			// questionCounter++;
		}

	} else if (questionCounter === 3)  {

		if (questionBranch === 0) {
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionDesign = document.querySelector('.question__design');
			var questionChoise = document.querySelector('.question__choise');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			setTimeout(function() {
				questionName.innerHTML = 'What to include?';
				questionDesign.style.display = 'none';
				questionChoise.style.display = 'block';

				firstButton.innerHTML = 'Ok';
				secondButton.innerHTML = 'Skip';
			}, 1500);

			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			questionCounter++;
		} else {
			// var questionBlock = document.querySelector('.question');
			// var questionName = document.querySelector('.question__name');
			// var firstButton = buttons[0];
			// var secondButton = buttons[1];
			//
			// questionBlock.classList.add('question--hide');
			//
			// // Смена вопроса и кнопок
			// setTimeout(function() {
			// 	questionName.innerHTML = 'Do you wish to animate<br>your website?';
			// 	firstButton.innerHTML = 'Yes';
			// 	secondButton.innerHTML = 'No';
			// }, 1500);
			//
			// // Показ вопроса
			// setTimeout(function() {
			// 	questionBlock.classList.remove('question--hide');
			// }, 1600);
			//
			// questionCounter++;
		}

	} else if (questionCounter === 4) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionChoise = document.querySelector('.question__choise');
		var questionSeo = document.querySelector('.question__seo');
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'Do you want to rank top (SEO&SMM)?';
			questionChoise.style.display = 'none';
			questionSeo.style.display = 'block';
			firstButton.innerHTML = 'Ok';
			secondButton.innerHTML = 'Skip';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	} else if (questionCounter === 5) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionSeo = document.querySelector('.question__seo');
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'In which time you want<br>the website to be ready?';
			questionSeo.style.display = 'none';
			firstButton.innerHTML = '24 hours';
			secondButton.innerHTML = 'Choose your prefered timing';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	} else if (questionCounter === 6) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionContact= document.querySelector('.question__contact');
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'Please type your mobile number<br>and E-mail (or log in with your account)';
			questionContact.style.display = 'block';
			firstButton.innerHTML = 'Ok';
			firstButton.style.margin = '0';
			secondButton.style.display = 'none';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	} else if (questionCounter === 7) {

		var banner = document.querySelector('.banner');
		var logo = document.querySelector('.banner__logo');
		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionContact= document.querySelector('.question__contact');
		var firstButton = buttons[0];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			banner.classList.remove('banner--questions');
			logo.classList.remove('banner__logo--questions');
			questionName.innerHTML = 'Your order is being processed.<br>Thank you for choosing us.';
			questionContact.style.display = 'none';
			firstButton.style.display = 'none';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

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



/*
[
	[
		'',
		'',
		'',
		'',
		'Choose style you are the most attracted to',
		'What to include?'
	],
	[
		'',
		'',
		'',
		'',
		'Which type of a website you need?',
		'Choose style you are the most attracted to'
	]
]


	Do you want to rank top (SEO&SMM)?
	In which time you want the website to be ready?
*/



// Ф-ия слайда
/*function changeQuestion() {

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



}*/


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
