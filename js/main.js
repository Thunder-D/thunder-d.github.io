'use strict';


// Pop-up для просмотра примеров дизайна
$(document).ready(function() {
	$("a.hide-images").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	600,
		'speedOut'		:	200
	});

	$(".question__button--hide").fancybox();
});


// Порядковый номер вопроса и ветка
var questionCounter = 0;
var questionBranch  = 0;


// Клик по кнопке - переход к следующему вопросу
var buttons = document.querySelectorAll('.question__button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(event) {
		event.preventDefault();
		if (!buttons[i].classList.contains('question__button--disabled') && !buttons[i].classList.contains('question__button--hide'))
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
				firstButton.classList.add('question__button--disabled');
				secondButton.innerHTML = 'Skip';
			}, 1500);

			// Показ вопроса
			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			questionCounter++;
		} else {
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionType = document.querySelector('.question__type');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			// Смена вопроса и кнопок
			setTimeout(function() {
				questionName.innerHTML = 'Which type of a website you need?';
				questionType.style.display = 'block';
				firstButton.classList.add('question__button--disabled');
				firstButton.innerHTML = 'Yes';
				secondButton.innerHTML = 'No';
			}, 1500);

			// Показ вопроса
			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			questionCounter++;
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

				firstButton.classList.add('question__button--disabled');
				firstButton.innerHTML = 'Ok';
				secondButton.innerHTML = 'Skip';
			}, 1500);

			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			questionCounter++;
		} else {
			var questionBlock = document.querySelector('.question');
			var questionName = document.querySelector('.question__name');
			var questionType = document.querySelector('.question__type');
			var questionDesign = document.querySelector('.question__design');
			var firstButton = buttons[0];
			var secondButton = buttons[1];

			questionBlock.classList.add('question--hide');

			// Смена вопроса и кнопок
			setTimeout(function() {
				questionName.innerHTML = 'Choose style you are the most attracted to:';
				questionType.style.display = 'none';
				questionDesign.style.display = 'block';
				firstButton.classList.add('question__button--disabled');
				firstButton.innerHTML = 'Yes';
				secondButton.innerHTML = 'No';
			}, 1500);

			// Показ вопроса
			setTimeout(function() {
				questionBlock.classList.remove('question--hide');
			}, 1600);

			questionCounter++;
		}

	} else if (questionCounter === 4) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionDesign = document.querySelector('.question__design');
		var questionChoise = document.querySelector('.question__choise');
		var questionSeo = document.querySelector('.question__seo');
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'Do you want to rank top (SEO&SMM)?';
			questionChoise.style.display = 'none';
			questionDesign.style.display = 'none';
			questionSeo.style.display = 'block';
			firstButton.classList.add('question__button--disabled');
			firstButton.innerHTML = 'Ok';
			secondButton.innerHTML = 'Skip';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	/*} else if (questionCounter === 5) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionSeo = document.querySelector('.question__seo');
		var firstButton = buttons[0];
		var secondButton = buttons[1];
		var thirdButton = buttons[2];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'In which time you want<br>the website to be ready?';
			questionSeo.style.display = 'none';
			secondButton.classList.add('hidest-images');
			firstButton.innerHTML = '24 hours';
			secondButton.style.display = 'none';
			thirdButton.style.display = 'block';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;*/

	} else if (questionCounter === 5) {

		var questionBlock = document.querySelector('.question');
		var questionName = document.querySelector('.question__name');
		var questionContact= document.querySelector('.question__contact');
		var questionSeo = document.querySelector('.question__seo');
		var firstButton = buttons[0];
		var secondButton = buttons[1];
		var thirdButton = buttons[2];

		questionBlock.classList.add('question--hide');

		// Смена вопроса и кнопок
		setTimeout(function() {
			questionName.innerHTML = 'Please type your mobile number<br>and E-mail (or log in with your account)';
			questionContact.style.display = 'block';
			questionSeo.style.display = 'none';
			firstButton.classList.add('question__button--disabled');
			firstButton.innerHTML = 'Ok';
			firstButton.style.margin = '0';
			secondButton.style.display = 'none';
			thirdButton.style.display = 'none';
		}, 1500);

		// Показ вопроса
		setTimeout(function() {
			questionBlock.classList.remove('question--hide');
		}, 1600);

		questionCounter++;

	} else if (questionCounter === 6) {

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
		if (designs[i].firstChild.nextSibling.nextSibling.nextSibling.checked === true) {
			designs[i].firstChild.nextSibling.nextSibling.nextSibling.checked = false;
			designs[i].classList.remove('question__design-item--select');
		} else {
			designs[i].firstChild.nextSibling.nextSibling.nextSibling.checked = true;
			designs[i].classList.add('question__design-item--select');
		}

		// Проверка на минимум 1 чекнутый дизайн
		var okIsAccess;
		var firstButton = buttons[0];
		var secondButton = buttons[1];
		for (let j = 0; j < designs.length; j++) {
			if (designs[j].firstChild.nextSibling.nextSibling.nextSibling.checked === true)
				okIsAccess = 1;
		}
		if (okIsAccess) {
			firstButton.classList.remove('question__button--disabled');
		} else {
			firstButton.classList.add('question__button--disabled');
		}

	}
}


// Зууум
var zoom = document.querySelectorAll('.question__design-zoom');

for (let i = 0; i < zoom.length; i++) {
	zoom[i].onclick = function(event) {

		event.preventDefault();
		event.stopPropagation();

		var zoomImages = document.querySelectorAll('.hide-images');
		zoomImages[i].click();
	}
}


// Чексбокс
var checkboxesChoise = document.querySelectorAll('.question__choise input[type="checkbox"]');

for (let i = 0; i < checkboxesChoise.length; i++) {
	checkboxesChoise[i].onchange = function() {

		var okIsAccess;
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		for (let j = 0; j < checkboxesChoise.length; j++) {
			if (checkboxesChoise[j].checked) {
				okIsAccess = 1;
			}
		}

		if (okIsAccess) {
			firstButton.classList.remove('question__button--disabled');
		} else {
			firstButton.classList.add('question__button--disabled');
		}

	};
}

var checkboxesSeo = document.querySelectorAll('.question__seo input[type="checkbox"]');

for (let i = 0; i < checkboxesSeo.length; i++) {
	checkboxesSeo[i].onchange = function() {

		var okIsAccess;
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		for (let j = 0; j < checkboxesSeo.length; j++) {
			if (checkboxesSeo[j].checked) {
				okIsAccess = 1;
			}
		}

		if (okIsAccess) {
			firstButton.classList.remove('question__button--disabled');
		} else {
			firstButton.classList.add('question__button--disabled');
		}

	};
}

var checkboxesType = document.querySelectorAll('.question__type input[type="checkbox"]');

for (let i = 0; i < checkboxesType.length; i++) {
	checkboxesType[i].onchange = function() {

		var okIsAccess;
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		for (let j = 0; j < checkboxesType.length; j++) {
			if (checkboxesType[j].checked) {
				okIsAccess = 1;
			}
		}

		if (okIsAccess) {
			firstButton.classList.remove('question__button--disabled');
		} else {
			firstButton.classList.add('question__button--disabled');
		}

	};
}


var inputContact = document.querySelectorAll('.question__contact input');

for (let i = 0; i < inputContact.length; i++) {
	inputContact[i].oninput = function() {

		var okIsAccess;
		var firstButton = buttons[0];
		var secondButton = buttons[1];

		if (inputContact[0].value && inputContact[1].value) {
			okIsAccess = 1;
		}

		if (okIsAccess) {
			firstButton.classList.remove('question__button--disabled');
		} else {
			firstButton.classList.add('question__button--disabled');
		}

	};
}
