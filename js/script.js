"use strict"
//появление меню
window.onscroll = function() {stickMenu()};
let header = document.querySelector('.header');
let stick = header.offsetTop;
function stickMenu() {
	if (window.pageYOffset >= stick) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

//подсветка меню


//прокрутка при клике
const menuLinks = document.querySelectorAll('.scroll[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			if (menuLink.dataset.goto == ".page__about") {
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			} else {
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			}
		}
	}
}