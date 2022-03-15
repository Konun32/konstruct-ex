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
let sections = $('section'), 
nav = $('nav'), 
nav_height = nav.outerHeight();
$(window).on('scroll', function () {
    $('nav a').removeClass('_activated');
    let cur_pos = $(this).scrollTop(); 
    sections.each(function() {
        let top = $(this).offset().top - nav_height - 180,
        bottom = top + $(this).outerHeight();       
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('_activated');
            sections.removeClass('_activated');    
            $(this).addClass('_activated');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('_activated');
        }
    });
});

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