//  header js
// start
const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');

// Check if menu, openMenuBtn, and closeMenuBtn are selected correctly
console.log(menu);
console.log(openMenuBtn);
console.log(closeMenuBtn);

// Add event listeners to open and close menu buttons
[openMenuBtn, closeMenuBtn].forEach((btn) => {
	btn.addEventListener('click', () => {
		menu.classList.toggle('open');
		menu.style.transition = 'transform 0.5s ease';
	});
});

menu.addEventListener('transitionend', function () {
	this.removeAttribute('style');
});

menu.querySelectorAll('.dropdown > i').forEach((arrow) => {
	arrow.addEventListener('click', function () {
		this.closest('.dropdown').classList.toggle('active');
	});
});

// swiper

let swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//  finish

// toogle button
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const answer = button.nextElementSibling;
		answer.classList.toggle('show');
	});
});

//   toogle

document.addEventListener('DOMContentLoaded', function () {
	const customCarousel = document.querySelector('.custom-carousel');
	const items = customCarousel.querySelectorAll('.item');

	items.forEach((item) => {
		item.addEventListener('click', function () {
			items.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove('active');
				}
			});
			item.classList.toggle('active');
		});
	});

	$('.custom-carousel').owlCarousel({
		autoWidth: true,
		loop: true,
	});
});
