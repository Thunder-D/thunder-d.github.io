let menuIcon = document.querySelector('.header__menu-icon');
let menuItems = document.querySelector('.header__menu-items');

menuIcon.addEventListener('click', function(event) {
	event.preventDefault();
	menuItems.classList.toggle('header__menu-items--active');
});
